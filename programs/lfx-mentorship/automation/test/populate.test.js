'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { resolveDates, populateTerm, assertSafeToCreate } = require('../lib/populate');
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

test('resolveDates: an entry present but not yet scheduled yields no dates', () => {
  const sched = [{ key: 'info', label: 'Info' }]; // no start yet
  assert.deepEqual(resolveDates('info', sched), { start: null, due: null });
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
    async createIssue(a) { calls.push(['createIssue', a.title, a.labels]); const number = n++; return { number, id: number * 10 }; },
    async addSubIssue(a) { calls.push(['addSubIssue', a.parentNumber, a.childId]); },
    async addToBoard(a) { calls.push(['addToBoard', a.number]); return { itemId: `item-${a.number}` }; },
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
  // proposals open is board item item-1001
  const openFields = set.find((k) => k[1] === 'item-1001');
  assert.deepEqual([openFields[3], openFields[4]], ['2026-07-01', '2026-07-28']);
  // kickoff (item-1002) is keyless -> null dates
  const kickoff = set.find((k) => k[1] === 'item-1002');
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

// ── assertSafeToCreate (pure guard against a double-run) ───────────────────
test('assertSafeToCreate: throws when the term already has issues, unless forced', () => {
  assert.throws(() => assertSafeToCreate({ existingCount: 12, force: false }), /already|force/i);
  assert.doesNotThrow(() => assertSafeToCreate({ existingCount: 12, force: true }));
  assert.doesNotThrow(() => assertSafeToCreate({ existingCount: 0, force: false }));
});
