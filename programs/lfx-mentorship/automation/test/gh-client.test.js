'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createGhClient } = require('../lib/gh-client');

// A fake exec records the arg arrays and returns canned stdout strings in order,
// so we assert the exact `gh` calls without touching GitHub.
function fakeExec(responses = []) {
  let i = 0;
  const exec = async (args) => { exec.calls.push(args); return responses[i++] ?? '{}'; };
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
