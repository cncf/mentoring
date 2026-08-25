'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { resolveDates, populateTerm, assertSafeToCreate, formatPlanPreview } = require('../lib/populate');
const { parseIssues, buildIssuePlan } = require('../lib/term-issues');
const { termIdentity } = require('../lib/term');

const SCHEDULE = [
  { key: 'proposals_open', label: 'Proposals', start: '2026-07-01', end: '2026-07-28' },
  { key: 'term_start', label: 'Start', start: '2026-09-07' },
];

// ── resolveDates ─────────────────────────────────────────────────────────
test('resolveDates: a ranged entry maps start + end to start/due', () => {
  assert.deepEqual(resolveDates('proposals_open', SCHEDULE), { start: '2026-07-01', due: '2026-07-28' });
});

test('resolveDates: a single-day entry sets due = start', () => {
  assert.deepEqual(resolveDates('term_start', SCHEDULE), { start: '2026-09-07', due: '2026-09-07' });
});

test('resolveDates: a null or unknown key yields no dates', () => {
  assert.deepEqual(resolveDates(null, SCHEDULE), { start: null, due: null });
  assert.deepEqual(resolveDates('nope', SCHEDULE), { start: null, due: null });
});

// ── formatPlanPreview ────────────────────────────────────────────────────
test('formatPlanPreview: indents children under sections, incl. section id 0', () => {
  const plan = [
    { id: 0, title: '0. Key dates', parentId: null, scheduleKey: null },
    { id: 1, title: 'Proposals open', parentId: 0, scheduleKey: 'proposals_open' },
    { id: 2, title: 'Info session', parentId: 0, scheduleKey: null },
    { id: 3, title: '1. Before term', parentId: null, scheduleKey: null },
    { id: 4, title: 'Plan term', parentId: 3, scheduleKey: 'term_start' },
  ];
  assert.deepEqual(formatPlanPreview(plan, SCHEDULE), [
    '  0. Key dates',
    '    Proposals open  [2026-07-01 \u2013 2026-07-28]', // ranged
    '    Info session', // dateless: no bracket
    '  1. Before term',
    '    Plan term  [2026-09-07]', // single day
  ]);
});

test('resolveDates: an entry present but not yet scheduled yields no dates', () => {
  const sched = [{ key: 'info', label: 'Info' }]; // no start yet
  assert.deepEqual(resolveDates('info', sched), { start: null, due: null });
});

test('resolveDates: an entry with an end but no start yields no dates (never due-without-start)', () => {
  const sched = [{ key: 'x', label: 'X', end: '2026-07-28' }];
  assert.deepEqual(resolveDates('x', sched), { start: null, due: null });
});

// ── populateTerm (orchestration with an injected client) ──────────────────
const YAML = `sections:
  - title: "0. Key dates"
    children:
      - title: "Project proposals open"
        schedule_key: proposals_open
      - title: "Mentorship Kick Off Call"
  - title: "2. Proposals"
    children:
      - title: "2.1 [Announce] Applications open for candidates"
        children:
          - title: "Initial announcement"
`;

function fakeClient() {
  const calls = [];
  let n = 1000;
  return {
    calls,
    async createIssue(a) { calls.push(['createIssue', a.title, a.labels]); const number = n++; return { number, id: number * 10, nodeId: `node-${number}` }; },
    async addSubIssue(a) { calls.push(['addSubIssue', a.parentNumber, a.childId]); },
    async addToBoard(a) { calls.push(['addToBoard', a.contentId]); return { itemId: `item-${a.contentId}` }; },
    async setFields(a) { calls.push(['setFields', a.itemId, a.status, a.start, a.due]); },
  };
}

function plan() {
  return buildIssuePlan(parseIssues(YAML), termIdentity({ year: 2026, number: 3 }));
}

test('populateTerm: creates every issue, in pre-order', async () => {
  const c = fakeClient();
  await populateTerm(plan(), { schedule: SCHEDULE }, c);
  const created = c.calls.filter((k) => k[0] === 'createIssue').map((k) => k[1]);
  assert.deepEqual(created, [
    '[LFX 2026 T3] 0. Key dates',
    'Project proposals open',
    'Mentorship Kick Off Call',
    '[LFX 2026 T3] 2. Proposals',
    '[LFX 2026 T3] 2.1 [Announce] Applications open for candidates',
    'Initial announcement',
  ]);
});

test('populateTerm: links each child to its parent by the parent\'s created number', async () => {
  const c = fakeClient();
  await populateTerm(plan(), { schedule: SCHEDULE }, c);
  // "Initial announcement" (6th created, number 1005, id 10050) links to 2.1
  // (5th created, number 1004). "0. Key dates" (1st, 1000) is a top-level
  // parent and is NOT linked.
  const links = c.calls.filter((k) => k[0] === 'addSubIssue');
  assert.ok(links.some((k) => k[1] === 1004 && k[2] === 10050), 'Initial announcement -> 2.1');
  assert.ok(links.some((k) => k[1] === 1000 && k[2] === 10010), 'proposals open -> 0. Key dates');
  // top-level sections have no parent link
  assert.equal(links.filter((k) => k[2] === 10000).length, 0);
});

test('populateTerm: adds every issue to the board and sets Status = Todo', async () => {
  const c = fakeClient();
  await populateTerm(plan(), { schedule: SCHEDULE }, c);
  assert.equal(c.calls.filter((k) => k[0] === 'addToBoard').length, 6);
  for (const k of c.calls.filter((k) => k[0] === 'setFields')) assert.equal(k[2], 'Todo');
});

test('populateTerm: sets resolved dates on a scheduled issue, none on a keyless one', async () => {
  const c = fakeClient();
  await populateTerm(plan(), { schedule: SCHEDULE }, c);
  const set = c.calls.filter((k) => k[0] === 'setFields');
  // proposals open is board item item-node-1001
  const openFields = set.find((k) => k[1] === 'item-node-1001');
  assert.deepEqual([openFields[3], openFields[4]], ['2026-07-01', '2026-07-28']);
  // kickoff (item-node-1002) is keyless -> null dates
  const kickoff = set.find((k) => k[1] === 'item-node-1002');
  assert.deepEqual([kickoff[3], kickoff[4]], [null, null]);
});

test('populateTerm: fails fast when the plan is not in pre-order (parent not yet created)', async () => {
  const c = fakeClient();
  const outOfOrder = [
    { id: 'child', title: 'Child', labels: [], parentId: 'parent', scheduleKey: null, isParent: false },
    { id: 'parent', title: 'Parent', labels: [], parentId: null, scheduleKey: null, isParent: true },
  ];
  await assert.rejects(() => populateTerm(outOfOrder, { schedule: [] }, c), /pre-order/i);
});

// ── populateTerm onCreated (rich manifest records) ─────────────────────────
test('populateTerm: onCreated receives the full record for each created issue', async () => {
  const c = fakeClient();
  const records = [];
  await populateTerm(plan(), { schedule: SCHEDULE, onCreated: (r) => records.push(r) }, c);
  assert.equal(records.length, 6);
  // top-level keyless section
  assert.deepEqual(records[0], {
    number: 1000, title: '[LFX 2026 T3] 0. Key dates', nodeId: 'node-1000',
    parentNumber: null, scheduleKey: null, start: null, due: null,
  });
  // nested, scheduled child
  assert.deepEqual(records[1], {
    number: 1001, title: 'Project proposals open', nodeId: 'node-1001',
    parentNumber: 1000, scheduleKey: 'proposals_open', start: '2026-07-01', due: '2026-07-28',
  });
});

test('populateTerm: onCreated is not invoked for skipped or repaired records', async () => {
  const c = resumeClient({ subIssues: [20020] });
  const records = [];
  await populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED, onCreated: (r) => records.push(r) }, c);
  assert.deepEqual(records.map((r) => r.title), [
    '[LFX 2026 T3] 2. Proposals',
    '[LFX 2026 T3] 2.1 [Announce] Applications open for candidates',
    'Initial announcement',
  ]);
});

test('populateTerm: does not create an issue whose parent is missing (pre-order checked first)', async () => {
  const c = fakeClient();
  const outOfOrder = [
    { id: 'child', title: 'Child', labels: [], parentId: 'parent', scheduleKey: null, isParent: false },
    { id: 'parent', title: 'Parent', labels: [], parentId: null, scheduleKey: null, isParent: true },
  ];
  await assert.rejects(() => populateTerm(outOfOrder, { schedule: [] }, c), /pre-order/i);
  assert.equal(c.calls.filter((k) => k[0] === 'createIssue').length, 0);
});

// ── populateTerm resume (completed manifest records from an interrupted run) ─
// The manifest records issues in creation (= plan) order. All records but the
// last completed their full loop; the last one's nest/board/fields are unknown
// (the crash window), so it is re-verified idempotently.
function resumeClient({ subIssues = [], issues = [] } = {}) {
  const c = fakeClient();
  c.getIssue = async ({ number }) => { c.calls.push(['getIssue', number]); return { number, id: number * 10, nodeId: `node-${number}` }; };
  c.getSubIssues = async ({ parentNumber }) => { c.calls.push(['getSubIssues', parentNumber]); return subIssues; };
  c.listIssues = async ({ labels }) => { c.calls.push(['listIssues', labels]); return issues; };
  return c;
}

const COMPLETED = [
  { number: 2000, title: '[LFX 2026 T3] 0. Key dates', nodeId: 'node-2000' },
  { number: 2001, title: 'Project proposals open', nodeId: 'node-2001' },
  { number: 2002, title: 'Mentorship Kick Off Call', nodeId: 'node-2002' },
];

test('populateTerm: resume skips completed records and creates only the rest', async () => {
  const c = resumeClient({ subIssues: [20020] });
  const r = await populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED }, c);
  const created = c.calls.filter((k) => k[0] === 'createIssue').map((k) => k[1]);
  assert.deepEqual(created, [
    '[LFX 2026 T3] 2. Proposals',
    '[LFX 2026 T3] 2.1 [Announce] Applications open for candidates',
    'Initial announcement',
  ]);
  assert.deepEqual(r, { created: 3, skipped: 2, repaired: 1 });
});

test('populateTerm: resume repairs the last record (board + fields, no re-nest when nested)', async () => {
  const c = resumeClient({ subIssues: [20020] }); // 2002's id, already a sub-issue
  await populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED }, c);
  assert.ok(c.calls.some((k) => k[0] === 'getIssue' && k[1] === 2002));
  assert.ok(c.calls.some((k) => k[0] === 'getSubIssues' && k[1] === 2000));
  assert.ok(!c.calls.some((k) => k[0] === 'addSubIssue' && k[2] === 20020));
  assert.ok(c.calls.some((k) => k[0] === 'addToBoard' && k[1] === 'node-2002'));
  const fields = c.calls.find((k) => k[0] === 'setFields' && k[1] === 'item-node-2002');
  assert.deepEqual(fields.slice(2), ['Todo', null, null]); // kickoff is keyless
});

test('populateTerm: resume re-nests the last record when the parent lacks it', async () => {
  const c = resumeClient({ subIssues: [] });
  await populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED }, c);
  assert.ok(c.calls.some((k) => k[0] === 'addSubIssue' && k[1] === 2000 && k[2] === 20020));
});

test('populateTerm: resume repairs a top-level last record without a nest check, and later children nest under it', async () => {
  const c = resumeClient();
  await populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED.slice(0, 1) }, c);
  assert.ok(c.calls.some((k) => k[0] === 'getIssue' && k[1] === 2000));
  assert.ok(!c.calls.some((k) => k[0] === 'getSubIssues'));
  // "Project proposals open" is created fresh (number 1000) and nests under #2000
  assert.ok(c.calls.some((k) => k[0] === 'addSubIssue' && k[1] === 2000 && k[2] === 10000));
});

test('populateTerm: resume rejects a manifest record that does not match the plan', async () => {
  const bad = [{ number: 2000, title: 'Wrong title', nodeId: 'node-2000' }];
  await assert.rejects(
    () => populateTerm(plan(), { schedule: [], completed: bad }, resumeClient()),
    /manifest/i,
  );
});

test('populateTerm: resume rejects a manifest with more records than the plan', async () => {
  const over = plan().map((p, i) => ({ number: 3000 + i, title: p.title, nodeId: `n${i}` }));
  over.push({ number: 9999, title: 'Extra', nodeId: 'x' });
  await assert.rejects(
    () => populateTerm(plan(), { schedule: [], completed: over }, resumeClient()),
    /manifest/i,
  );
});

test('populateTerm: resume rejects a record whose scheduleKey no longer matches the plan', async () => {
  const withKeys = [
    { number: 2000, title: '[LFX 2026 T3] 0. Key dates', nodeId: 'node-2000', parentNumber: null, scheduleKey: null, start: null, due: null },
    { number: 2001, title: 'Project proposals open', nodeId: 'node-2001', parentNumber: 2000, scheduleKey: 'other_key', start: '2026-07-01', due: '2026-07-28' },
  ];
  await assert.rejects(
    () => populateTerm(plan(), { schedule: SCHEDULE, completed: withKeys }, resumeClient()),
    /scheduleKey|schedule_key/i,
  );
});

test('populateTerm: resume rejects a record whose parent number no longer matches the plan', async () => {
  const reparented = [
    { number: 2000, title: '[LFX 2026 T3] 0. Key dates', nodeId: 'node-2000', parentNumber: null, scheduleKey: null, start: null, due: null },
    { number: 2001, title: 'Project proposals open', nodeId: 'node-2001', parentNumber: 9999, scheduleKey: 'proposals_open', start: '2026-07-01', due: '2026-07-28' },
  ];
  await assert.rejects(
    () => populateTerm(plan(), { schedule: SCHEDULE, completed: reparented }, resumeClient()),
    /parent/i,
  );
});

test('populateTerm: resume rejects a record whose dates no longer resolve the same (schedule edited)', async () => {
  const shifted = [
    { number: 2000, title: '[LFX 2026 T3] 0. Key dates', nodeId: 'node-2000', parentNumber: null, scheduleKey: null, start: null, due: null },
    { number: 2001, title: 'Project proposals open', nodeId: 'node-2001', parentNumber: 2000, scheduleKey: 'proposals_open', start: '2026-06-01', due: '2026-07-28' },
  ];
  await assert.rejects(
    () => populateTerm(plan(), { schedule: SCHEDULE, completed: shifted }, resumeClient()),
    /dates|start|due/i,
  );
});

test('populateTerm: resume accepts legacy records without the verification fields', async () => {
  // COMPLETED has only {number,title,nodeId} (the pre-verification manifest
  // shape); missing fields skip their checks rather than failing.
  const c = resumeClient({ subIssues: [20020] });
  const r = await populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED }, c);
  assert.deepEqual(r, { created: 3, skipped: 2, repaired: 1 });
});

test('populateTerm: resume refuses when an unrecorded issue matches the next plan item', async () => {
  // A create that succeeded without being recorded (crash in the create/record
  // gap) must be surfaced, not silently duplicated.
  const gapIssue = { number: 7777, title: '[LFX 2026 T3] 2. Proposals', nodeId: 'node-7777' };
  const c = resumeClient({ issues: [gapIssue] });
  await assert.rejects(
    () => populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED }, c),
    (err) => {
      assert.match(err.message, /#7777/);
      assert.match(err.message, /missing from the manifest/);
      assert.match(err.message, /\{"number":7777,"title":"\[LFX 2026 T3\] 2\. Proposals","nodeId":"node-7777"\}/);
      return true;
    },
  );
  assert.equal(c.calls.filter((k) => k[0] === 'createIssue').length, 0);
});

test('populateTerm: gap check queries with the next plan item labels', async () => {
  const c = resumeClient({ subIssues: [20020] });
  await populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED }, c);
  const listCalls = c.calls.filter((k) => k[0] === 'listIssues');
  assert.deepEqual(listCalls, [['listIssues', plan()[COMPLETED.length].labels]]);
});

test('populateTerm: gap check ignores recorded issues and other titles', async () => {
  const c = resumeClient({
    subIssues: [20020],
    issues: [
      { number: 2002, title: '[LFX 2026 T3] 2. Proposals', nodeId: 'node-2002' }, // recorded number
      { number: 8888, title: 'Some other issue', nodeId: 'node-8888' }, // different title
    ],
  });
  const r = await populateTerm(plan(), { schedule: SCHEDULE, completed: COMPLETED }, c);
  assert.deepEqual(r, { created: 3, skipped: 2, repaired: 1 });
});

test('populateTerm: gap check is skipped on fresh runs and complete manifests', async () => {
  // fakeClient has no listIssues at all: a fresh run must not need it.
  await populateTerm(plan(), { schedule: SCHEDULE }, fakeClient());
  // A complete manifest (every plan item recorded) only repairs the last item;
  // no gap is possible past the end of the plan.
  const all = plan().map((p, i) => ({ number: 3000 + i, title: p.title, nodeId: `node-${3000 + i}` }));
  const c = resumeClient({ subIssues: [(3000 + 5) * 10] });
  delete c.listIssues;
  const r = await populateTerm(plan(), { schedule: SCHEDULE, completed: all }, c);
  assert.deepEqual(r, { created: 0, skipped: 5, repaired: 1 });
});

test('populateTerm: a fresh run reports zero skipped and repaired', async () => {
  const c = fakeClient();
  const r = await populateTerm(plan(), { schedule: SCHEDULE }, c);
  assert.deepEqual(r, { created: 6, skipped: 0, repaired: 0 });
});

// ── assertSafeToCreate (pure guard against a double-run) ───────────────────
test('assertSafeToCreate: throws when the term already has issues, unless forced', () => {
  assert.throws(() => assertSafeToCreate({ existingCount: 12, force: false }), /already|force/i);
  assert.doesNotThrow(() => assertSafeToCreate({ existingCount: 12, force: true }));
  assert.doesNotThrow(() => assertSafeToCreate({ existingCount: 0, force: false }));
});
