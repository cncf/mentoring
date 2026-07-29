'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { computeConfirm, confirmTargets } = require('../lib/confirm');

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

// ── On-behalf confirmation: /confirm @handle by a universal approver ───
// A CNCF global approver can confirm participation for a listed mentor who
// hasn't run /confirm themselves. The confirmed party is the @handle, not the
// commenter. A mentor may also confirm with their OWN @handle (no approver
// needed), and trailing prose after /confirm never voids the intent. The
// 5th arg is the global-approver (admin) roster, normalized here.

test('a universal approver can confirm on behalf of a listed mentor', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'admin1' }, body: '/confirm @a' },
    ], null, ['admin1']),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('on-behalf confirmations can complete the roster and flip the gate', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'admin1' }, body: '/confirm @a\n/confirm @b' },
    ], null, ['admin1']),
    { flip: true, remaining: [], count: 2, total: 2 },
  );
});

test('a non-approver cannot confirm on behalf of another mentor', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'randouser' }, body: '/confirm @a' },
    ], null, []),
    { flip: false, remaining: ['a', 'b'], count: 0, total: 2 },
  );
});

test('a mentor /confirm @otherMentor does not silently self-confirm the author', () => {
  // b (a mentor, not an approver) names a: neither is credited to b, and b is
  // not authorized to confirm a. The handler surfaces the error; the tally is 0.
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'b' }, body: '/confirm @a' },
    ], null, []),
    { flip: false, remaining: ['a', 'b'], count: 0, total: 2 },
  );
});

test('a mentor confirming with their OWN @handle counts (no approver needed)', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'a' }, body: '/confirm @a' },
    ], null, []),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('trailing prose after a bare /confirm still counts the author', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'a' }, body: '/confirm looking forward to mentoring!' },
    ], null, []),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('trailing prose after /confirm @self still counts', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'a' }, body: '/confirm @a thanks, happy to help' },
    ], null, []),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('an on-behalf /confirm for a non-roster handle is ignored', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'admin1' }, body: '/confirm @zzz' },
    ], null, ['admin1']),
    { flip: false, remaining: ['a', 'b'], count: 0, total: 2 },
  );
});

test('the admins roster is matched case- and @-insensitively', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], null, [
      { user: { login: 'Admin1' }, body: '/confirm @a' },
    ], null, ['@admin1']),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('omitting the admins arg preserves prior bare-/confirm behavior', () => {
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'a', [{ user: { login: 'b' }, body: '/confirm' }]),
    { flip: true, remaining: [], count: 2, total: 2 },
  );
});

// ── confirmTargets: per-line parse shared by the tally and the handler ──
// One entry per /confirm line: null for a bare self-confirm (trailing prose
// ignored), or the lowercased handle for an explicit /confirm @handle.

test('confirmTargets returns null for a bare /confirm and prose', () => {
  assert.deepEqual(confirmTargets('/confirm'), [null]);
  assert.deepEqual(confirmTargets('/confirm looking forward!'), [null]);
});

test('confirmTargets extracts a single leading @handle, lowercased', () => {
  assert.deepEqual(confirmTargets('/confirm @Alice'), ['alice']);
  assert.deepEqual(confirmTargets('/confirm @alice thanks!'), ['alice']);
});

test('confirmTargets returns one entry per /confirm line', () => {
  assert.deepEqual(
    confirmTargets('sure\n/confirm @a\n/confirm\n/confirm @b'),
    ['a', null, 'b'],
  );
});

test('confirmTargets ignores mid-sentence and non-command lines', () => {
  assert.deepEqual(confirmTargets('I will /confirm later'), []);
  assert.deepEqual(confirmTargets('Use `/confirm` to participate'), []);
});

// ── confirmTargets anchoring: consistent with COMMAND_RE (commands.js) ──
// A hyphenated/longer/glued token must NOT read as /confirm, or a stray
// `/confirm-now` in history would self-confirm its author via computeConfirm.

test('confirmTargets ignores a hyphenated, longer, or glued command token', () => {
  assert.deepEqual(confirmTargets('/confirm-now'), []);
  assert.deepEqual(confirmTargets('/confirmed tomorrow'), []);
  assert.deepEqual(confirmTargets('/confirm@alice'), []);
});

test('confirmTargets treats a handle-less /confirm @ as a bare self-confirm', () => {
  // A malformed @ never targets a third party; it falls back to the author's
  // own slot, so a mentor's intent survives the typo (only the author, if on
  // the roster, is ever credited here).
  assert.deepEqual(confirmTargets('/confirm @'), [null]);
});

// ── Regression (#212): an approver who is ALSO a listed mentor, confirming
// someone else on-behalf, must NOT self-confirm. The commenter is auto-credited
// only as a fallback for a just-posted self-confirm not yet in `comments`; once
// their line is present (the handler appends it), that line governs.

test('an approver-mentor confirming another mentor on-behalf does not self-confirm', () => {
  // 'a' is a listed mentor AND a universal approver; their comment names @b.
  // Only b is credited; a is not flipped early off their own on-behalf line.
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'a', [
      { user: { login: 'a' }, body: '/confirm @b' },
    ], null, ['a']),
    { flip: false, remaining: ['a'], count: 1, total: 2 },
  );
});

test('the commenter is still credited when their self-confirm is not yet in comments', () => {
  // Legacy fallback: commenter 'a' did a bare /confirm the API has not listed
  // yet, so there is no line for them in `comments`; auto-credit still applies.
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'a', []),
    { flip: false, remaining: ['b'], count: 1, total: 2 },
  );
});

test('an approver-mentor may self-confirm AND confirm another in one comment', () => {
  // 'a' writes both a bare /confirm (self) and /confirm @b (on-behalf): both count.
  assert.deepEqual(
    computeConfirm(['a', 'b'], 'a', [
      { user: { login: 'a' }, body: '/confirm\n/confirm @b' },
    ], null, ['a']),
    { flip: true, remaining: [], count: 2, total: 2 },
  );
});
