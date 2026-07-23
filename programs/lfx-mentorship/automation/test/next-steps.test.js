'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { nextSteps } = require('../lib/next-steps');

const GUIDE = 'https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#what-happens-after-you-submit';

// Build the section and join to a single string for substring assertions.
// We assert the invariants (counts, auto-count note, remaining handles, gate
// state) rather than exact prose, so wording tweaks don't break the tests but
// the semantics stay locked.
function render(state) {
  return nextSteps({ guideUrl: GUIDE, ...state }).join('\n');
}

test('always includes the section header and the guide link', () => {
  const out = render({
    proposer: 'someone', maintainerApproved: false, maintainerAutoApproved: false,
    confirm: { count: 0, total: 1, remaining: ['someone'] }, proposerIsMentor: true,
  });
  assert.match(out, /### What happens next/);
  assert.match(out, /Proposal process guide/);
  assert.ok(out.includes(GUIDE), 'links to the guide URL');
});

// ── The #1928 case: proposer is a listed mentor, co-mentor still pending ──
test('proposer who is a listed mentor is shown as auto-counted, with the partial tally and who is still needed', () => {
  const out = render({
    proposer: 'alyssacgoins',
    maintainerApproved: false, maintainerAutoApproved: false,
    confirm: { count: 1, total: 2, remaining: ['mprahl'] },
    proposerIsMentor: true,
  });
  assert.match(out, /1 of 2 confirmed/);
  assert.match(out, /auto-counted as proposer/);
  assert.match(out, /@alyssacgoins/);
  assert.match(out, /Awaiting `\/confirm`/);
  assert.match(out, /@mprahl/);
  // Maintainer gate still open → shows the /approve prompt.
  assert.match(out, /`\/approve`/);
  // CNCF approval is always surfaced as still pending.
  assert.match(out, /`\/cncf-approve`/);
});

// ── Proposer is a project maintainer AND the sole mentor (both auto) ──
// Both of the proposer's own gates are auto-satisfied, but the proposal is NOT
// finished — CNCF admin approval is still pending. The message must show that
// and must not over-reassure the proposer that they're done.
test('proposer who is maintainer and sole mentor sees both gates satisfied but is still told CNCF approval is pending', () => {
  const out = render({
    proposer: 'carlesarnal',
    maintainerApproved: true, maintainerAutoApproved: true,
    confirm: { count: 1, total: 1, remaining: [] },
    proposerIsMentor: true,
  });
  assert.match(out, /project maintainer/);
  assert.match(out, /all 1 confirmed; @carlesarnal auto-counted as proposer/);
  assert.match(out, /`\/cncf-approve`/);
  assert.doesNotMatch(out, /Awaiting `\/confirm`/);
  assert.doesNotMatch(out, /Nothing more/i);
});

// ── All mentors confirmed, but the proposer is NOT one of them → no note ──
test('all mentors confirmed with a proposer who is not a mentor shows no auto-count note', () => {
  const out = render({
    proposer: 'outsider',
    maintainerApproved: true, maintainerAutoApproved: false,
    confirm: { count: 2, total: 2, remaining: [] },
    proposerIsMentor: false,
  });
  assert.match(out, /all 2 confirmed\./);
  assert.doesNotMatch(out, /auto-counted/);
});

// ── Proposer is NOT a mentor → no auto-count note ──
test('proposer who is not a listed mentor gets no auto-count note and every mentor is still needed', () => {
  const out = render({
    proposer: 'outsider',
    maintainerApproved: false, maintainerAutoApproved: false,
    confirm: { count: 0, total: 2, remaining: ['alice', 'bob'] },
    proposerIsMentor: false,
  });
  assert.match(out, /0 of 2 confirmed/);
  assert.doesNotMatch(out, /auto-counted/);
  assert.match(out, /Awaiting `\/confirm`/);
  assert.match(out, /@alice/);
  assert.match(out, /@bob/);
});

// ── Maintainer approved by a real /approve (not the proposer) ──
test('a maintainer approval recorded via /approve (not proposer-implied) reads as plainly recorded', () => {
  const out = render({
    proposer: 'somementor',
    maintainerApproved: true, maintainerAutoApproved: false,
    confirm: { count: 1, total: 2, remaining: ['comentor'] },
    proposerIsMentor: true,
  });
  assert.match(out, /Maintainer approval\*\* — ✅ recorded\./);
  assert.doesNotMatch(out, /project maintainer/);
});
