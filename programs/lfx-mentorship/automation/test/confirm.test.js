'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { computeConfirm } = require('../lib/confirm');

test('the first of three mentors confirming does not flip the gate', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b', 'c'], 'a', []),
    { flip: false, remaining: ['b', 'c'], count: 1, total: 3 },
  );
});

test('the last mentor completing the roster flips the gate', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b', 'c'], 'c', [
      { user: { login: 'a' }, body: '/confirm' },
      { user: { login: 'b' }, body: 'sure thing\n/confirm' },
    ]),
    { flip: true, remaining: [], count: 3, total: 3 },
  );
});

test('a single mentor confirming flips immediately', () => {
  assert.deepEqual(
    computeConfirm(['solo'], 'solo', []),
    { flip: true, remaining: [], count: 1, total: 1 },
  );
});

test('a non-mentor /confirm is ignored', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'a', [{ user: { login: 'randouser' }, body: '/confirm' }]),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('duplicate roster handles are deduped', () => {
  assert.deepEqual(
    computeConfirm(['a', 'A', 'b'], 'a', []),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('a bot comment quoting /confirm does not count (author not on roster)', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'a', [
      { user: { login: 'github-actions[bot]' }, body: 'Use `/confirm` to confirm participation.' },
    ]),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('author matching is case-insensitive', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'b', [{ user: { login: 'A' }, body: '/confirm' }]),
    { flip: true, remaining: [], count: 2, total: 2 },
  );
});

test('a mid-sentence /confirm does not count as a prior confirmation', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'a', [{ user: { login: 'b' }, body: 'I will /confirm later' }]),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('@-prefixed roster handles are normalized', () => {
  assert.deepEqual(
    computeConfirm(['@a', '@b'], 'a', []),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

// ── Issue author (proposer) counts as a confirmation for their own slot ──
// A mentor who files the proposal is committing to mentor, so their authorship
// counts as their /confirm. Passed as the 4th arg; only counts if on roster.

test('the issue author is counted when on the roster (no commenter)', () => {
  assert.deepEqual(
    computeConfirm(['solo'], null, [], 'solo'),
    { flip: true, remaining: [], count: 1, total: 1 },
  );
});

test('a proposer-mentor among several does not flip alone', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [], 'a'),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('an author not on the roster is ignored', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [], 'zzz'),
    { flip: false, remaining: ['a', 'b'], count: 0, total: 2 },
  );
});

test('author + commenter together can complete the roster', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'b', [], 'a'),
    { flip: true, remaining: [], count: 2, total: 2 },
  );
});

test('author counting is case-insensitive and @-tolerant', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [], '@A'),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('author already present via a /confirm comment is not double-counted', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [{ user: { login: 'a' }, body: '/confirm' }], 'a'),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('omitting the author preserves the original 3-arg behavior', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'a', []),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

// ── Mentor swap / drop-out (roster changes) ───────────────────────────
// Mentors sometimes drop out after confirming and are replaced. The tally is
// computed from the CURRENT roster, so a dropped mentor stops counting and a
// newly added one must confirm; kept mentors stay confirmed via their prior
// /confirm comment.

test('a dropped mentor no longer counts (off the current roster)', () => {
  // Was [a,b] both confirmed; b dropped, c added → [a,c]. c must still confirm.
  assert.deepEqual(
    computeConfirm(['a', 'c'], null, [
      { user: { login: 'a' }, body: '/confirm' },
      { user: { login: 'b' }, body: '/confirm' },
    ]),
    { flip: false, remaining: ['c'], count: 1, total: 2 },
  );
});

test('a kept mentor stays confirmed via their prior comment after a swap', () => {
  // [a,b] both confirmed → a dropped, c added → [b,c]; b kept, c pending.
  assert.deepEqual(
    computeConfirm(['b', 'c'], null, [
      { user: { login: 'a' }, body: '/confirm' },
      { user: { login: 'b' }, body: '/confirm' },
    ], 'someproposer'),
    { flip: false, remaining: ['c'], count: 1, total: 2 },
  );
});

test('removing the only unconfirmed mentor completes the roster', () => {
  // [a,b] with only a confirmed → b removed → [a] → gate flips.
  assert.deepEqual(
    computeConfirm(['a'], null, [{ user: { login: 'a' }, body: '/confirm' }]),
    { flip: true, remaining: [], count: 1, total: 1 },
  );
});

test('an off-roster commenter is not counted (self-consistent contract)', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'zzz', []),
    { flip: false, remaining: ['a', 'b'], count: 0, total: 2 },
  );
});
