'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createGhClient } = require('../lib/gh-client');

// A fake exec records the arg arrays and returns canned stdout strings in order,
// so we assert the exact `gh` calls without touching GitHub. An Error entry is
// thrown instead of returned, for failure-recovery tests.
function fakeExec(responses = []) {
  let i = 0;
  const exec = async (args) => {
    exec.calls.push(args);
    const r = responses[i++];
    if (r instanceof Error) throw r;
    return r ?? '{}';
  };
  exec.calls = [];
  return exec;
}

const FIELDS = {
  statusFieldId: 'F_status',
  statusOptions: { Todo: 'opt_todo' },
  startFieldId: 'F_start',
  dueFieldId: 'F_due',
};

const client = (exec) => createGhClient({ repo: 'o/r', projectId: 'PVT_1', fields: FIELDS, exec });

test('createIssue: posts title + labels and returns {number,id,nodeId}', async () => {
  const exec = fakeExec(['{"number":42,"id":420,"node_id":"N42"}']);
  const r = await client(exec).createIssue({ title: 'Hello', labels: ['lfx mentorship', 'administration'] });
  assert.deepEqual(r, { number: 42, id: 420, nodeId: 'N42' });
  const args = exec.calls[0];
  assert.deepEqual(args.slice(0, 2), ['api', 'repos/o/r/issues']);
  assert.ok(args.includes('title=Hello'));
  assert.ok(args.includes('labels[]=lfx mentorship'));
  assert.ok(args.includes('labels[]=administration'));
});

test('addSubIssue: posts a typed sub_issue_id to the parent', async () => {
  const exec = fakeExec(['{}']);
  await client(exec).addSubIssue({ parentNumber: 7, childId: 420 });
  const args = exec.calls[0];
  assert.deepEqual(args.slice(0, 2), ['api', 'repos/o/r/issues/7/sub_issues']);
  assert.ok(args.includes('-F')); // typed field -> integer, not string
  assert.ok(args.includes('sub_issue_id=420'));
});

test('addToBoard: adds the content to the project and returns itemId', async () => {
  const exec = fakeExec(['{"data":{"addProjectV2ItemById":{"item":{"id":"ITEM1"}}}}']);
  const r = await client(exec).addToBoard({ contentId: 'N42' });
  assert.deepEqual(r, { itemId: 'ITEM1' });
  const args = exec.calls[0];
  assert.deepEqual(args.slice(0, 2), ['api', 'graphql']);
  assert.ok(args.some((a) => a.includes('addProjectV2ItemById')));
  assert.ok(args.includes('projectId=PVT_1'));
  assert.ok(args.includes('contentId=N42'));
});

test('addToBoard: recovers the existing itemId when the content is already on the board', async () => {
  // A board automation (e.g. "Auto-add sub-issues to project" on a copied
  // board) can add the issue first; the add then fails and the client must
  // find the item the automation created.
  const exec = fakeExec([
    new Error('gh api graphql\nGraphQL: Content already exists in this project'),
    '{"data":{"node":{"projectItems":{"nodes":[{"id":"ITEM_OTHER","project":{"id":"PVT_9"}},{"id":"ITEM_X","project":{"id":"PVT_1"}}]}}}}',
  ]);
  const r = await client(exec).addToBoard({ contentId: 'N42' });
  assert.deepEqual(r, { itemId: 'ITEM_X' });
  assert.ok(exec.calls[1].some((a) => a.includes('projectItems')));
  assert.ok(exec.calls[1].includes('id=N42'));
});

test('addToBoard: rethrows when recovery cannot find the item on this board', async () => {
  const exec = fakeExec([
    new Error('Content already exists in this project'),
    '{"data":{"node":{"projectItems":{"nodes":[{"id":"ITEM_OTHER","project":{"id":"PVT_9"}}]}}}}',
  ]);
  await assert.rejects(() => client(exec).addToBoard({ contentId: 'N42' }), /already exists/i);
});

test('addToBoard: rethrows unrelated errors without a recovery query', async () => {
  const exec = fakeExec([new Error('boom')]);
  await assert.rejects(() => client(exec).addToBoard({ contentId: 'N42' }), /boom/);
  assert.equal(exec.calls.length, 1);
});

test('getIssue: fetches an issue by number and returns {number,id,nodeId}', async () => {
  const exec = fakeExec(['{"number":7,"id":70,"node_id":"N7"}']);
  const r = await client(exec).getIssue({ number: 7 });
  assert.deepEqual(r, { number: 7, id: 70, nodeId: 'N7' });
  assert.deepEqual(exec.calls[0], ['api', 'repos/o/r/issues/7']);
});

test("getSubIssues: lists the database ids of a parent's sub-issues", async () => {
  const exec = fakeExec(['[{"id":10},{"id":20}]']);
  const r = await client(exec).getSubIssues({ parentNumber: 7 });
  assert.deepEqual(r, [10, 20]);
  assert.deepEqual(exec.calls[0], ['api', 'repos/o/r/issues/7/sub_issues']);
});

test('setFields: sets status and both dates (three mutations)', async () => {
  const exec = fakeExec(['{}', '{}', '{}']);
  await client(exec).setFields({ itemId: 'ITEM1', status: 'Todo', start: '2026-07-01', due: '2026-07-28' });
  assert.equal(exec.calls.length, 3);
  assert.ok(exec.calls[0].some((a) => a.includes('singleSelectOptionId')));
  assert.ok(exec.calls[0].includes('fieldId=F_status'));
  assert.ok(exec.calls[0].includes('optionId=opt_todo'));
  assert.ok(exec.calls[1].includes('fieldId=F_start'));
  assert.ok(exec.calls[1].includes('date=2026-07-01'));
  assert.ok(exec.calls[2].includes('fieldId=F_due'));
  assert.ok(exec.calls[2].includes('date=2026-07-28'));
});

test('setFields: skips date mutations when dates are null (dateless issue)', async () => {
  const exec = fakeExec(['{}']);
  await client(exec).setFields({ itemId: 'ITEM1', status: 'Todo', start: null, due: null });
  assert.equal(exec.calls.length, 1);
  assert.ok(exec.calls[0].includes('fieldId=F_status'));
});

test('setFields: throws when the board lacks the requested status option', async () => {
  const exec = fakeExec([]);
  await assert.rejects(
    () => client(exec).setFields({ itemId: 'ITEM1', status: 'Nope', start: null, due: null }),
    /Nope/,
  );
});

test('listIssues: queries open issues with every label and maps them, skipping PRs', async () => {
  // Open only: the gap-recovery instruction is "close the stray and re-run",
  // so a closed issue must drop out of the search instead of refusing forever.
  const exec = fakeExec([JSON.stringify([
    { number: 42, title: 'Approve stipends', node_id: 'N42' },
    { number: 43, title: 'A pull request', node_id: 'N43', pull_request: { url: 'x' } },
  ])]);
  const found = await client(exec).listIssues({ labels: ['lfx mentorship', '2026'] });
  assert.deepEqual(exec.calls[0], [
    'api', '--method', 'GET', 'repos/o/r/issues',
    '-f', 'labels=lfx mentorship,2026',
    '-f', 'state=open',
    '-f', 'per_page=100',
  ]);
  assert.deepEqual(found, [{ number: 42, title: 'Approve stipends', nodeId: 'N42' }]);
});
