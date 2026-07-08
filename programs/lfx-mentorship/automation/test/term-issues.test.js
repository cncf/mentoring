'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseIssues, buildIssuePlan } = require('../lib/term-issues');
const { termIdentity } = require('../lib/term');

const ID = termIdentity({ year: 2026, number: 3 });

// Small tree mirroring the real structure, including a nested sub-section.
const YAML = `sections:
  - title: "0. Key dates"
    children:
      - title: "Project proposals open"
        schedule_key: proposals_open
      - title: "Mentorship Kick Off Call"
  - title: "2. Proposals"
    children:
      - title: "Load proposals into LFX Platform"
      - title: "2.1 [Announce] Applications open for candidates"
        children:
          - title: "Initial announcement"
      - title: "Create mentor slack group"
`;

function plan() {
  return buildIssuePlan(parseIssues(YAML), ID);
}

test('parseIssues: loads the sections array', () => {
  const doc = parseIssues(YAML);
  assert.equal(doc.sections.length, 2);
});

test('buildIssuePlan: section parents get the [LFX YYYY TN] prefix', () => {
  const p = plan();
  assert.equal(p[0].title, '[LFX 2026 T3] 0. Key dates');
  assert.equal(p[0].isParent, true);
  assert.equal(p[0].parentId, null);
});

test('buildIssuePlan: leaf tasks keep a plain title and no prefix', () => {
  const open = plan().find((n) => n.scheduleKey === 'proposals_open');
  assert.equal(open.title, 'Project proposals open');
  assert.equal(open.isParent, false);
});

test('buildIssuePlan: a leaf carries its schedule_key; keyless leaves are null', () => {
  const p = plan();
  assert.equal(p.find((n) => n.title === 'Project proposals open').scheduleKey, 'proposals_open');
  assert.equal(p.find((n) => n.title === 'Mentorship Kick Off Call').scheduleKey, null);
});

test('buildIssuePlan: a nested sub-section is prefixed and parented to its section', () => {
  const p = plan();
  const section2 = p.find((n) => n.title === '[LFX 2026 T3] 2. Proposals');
  const sub = p.find((n) => n.title === '[LFX 2026 T3] 2.1 [Announce] Applications open for candidates');
  assert.ok(sub, 'sub-section is prefixed because it has children');
  assert.equal(sub.parentId, section2.id);
  const announce = p.find((n) => n.title === 'Initial announcement');
  assert.equal(announce.parentId, sub.id);
});

test('buildIssuePlan: pre-order — every child appears after its parent', () => {
  const p = plan();
  const pos = new Map(p.map((n, i) => [n.id, i]));
  for (const n of p) {
    if (n.parentId !== null) assert.ok(pos.get(n.parentId) < pos.get(n.id), `${n.title} appears before its parent`);
  }
});

test('buildIssuePlan: every issue gets the four standard labels', () => {
  for (const n of plan()) {
    assert.deepEqual(n.labels, ['lfx mentorship', 'Term 3: Sept-Nov', '2026', 'administration']);
  }
});

test('buildIssuePlan: node count matches the tree (2 sections, 1 sub, 5 tasks = 8)', () => {
  assert.equal(plan().length, 8);
});

test('buildIssuePlan: a node without a title throws', () => {
  assert.throws(() => buildIssuePlan({ sections: [{ children: [] }] }, ID), /title/i);
});
