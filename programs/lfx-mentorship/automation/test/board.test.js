'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  determineStatus, resolveBoardStatus, shouldSkipSync, shouldSkipExport, readStatusWithRetry,
} = require('../lib/board');

test('determineStatus: empty labels map to Inbox', () => {
  assert.equal(determineStatus([]), 'Inbox');
});

test('determineStatus: a closed issue always maps to Closed', () => {
  assert.equal(determineStatus(['Exported'], 'closed'), 'Closed');
  assert.equal(determineStatus([], 'closed'), 'Closed');
});

test('determineStatus: the label cascade stops at Exported', () => {
  assert.equal(determineStatus(['Exported', 'CNCF Approved']), 'Exported');
  assert.equal(determineStatus(['CNCF Approved']), 'CNCF Approved');
  assert.equal(
    determineStatus(['Maintainer/Contribex Approved', 'Mentors Confirmed']),
    'Approved/confirmed',
  );
  assert.equal(determineStatus(['Awaiting Mentor Confirmation']), 'Awaiting approvals/confirmations');
  assert.equal(determineStatus(['Awaiting Maintainer/Contribex Approval']), 'Awaiting approvals/confirmations');
});

test('determineStatus: admin-only and flag labels do not drive the cascade', () => {
  assert.equal(determineStatus(['Posted to LFX', 'Exported', 'CNCF Approved']), 'Exported');
  assert.equal(determineStatus(['Mentors Registered', 'Exported']), 'Exported');
});

test('resolveBoardStatus: a /lfx-url force advances an open card to Posted to LFX', () => {
  assert.equal(
    resolveBoardStatus({ labels: ['Exported'], closed: false, forcePosted: true }),
    'Posted to LFX',
  );
});

test('resolveBoardStatus: a closed issue stays Closed even under a /lfx-url force', () => {
  assert.equal(
    resolveBoardStatus({ labels: ['Exported'], closed: true, forcePosted: true }),
    'Closed',
  );
});

test('resolveBoardStatus: without a force it falls back to the label cascade', () => {
  assert.equal(
    resolveBoardStatus({ labels: ['Exported'], closed: false, forcePosted: false }),
    'Exported',
  );
  assert.equal(
    resolveBoardStatus({ labels: [], closed: false, forcePosted: false }),
    'Inbox',
  );
});

test('shouldSkipSync: protects admin-owned columns except on close', () => {
  assert.equal(shouldSkipSync('Posted to LFX', 'Exported', false), true);
  assert.equal(shouldSkipSync('Mentors added', 'CNCF Approved', false), true);
  assert.equal(shouldSkipSync('Posted to LFX', 'Closed', false), false);
});

test('shouldSkipSync: non-admin statuses proceed when the read succeeded', () => {
  assert.equal(shouldSkipSync('CNCF Approved', 'Exported', false), false);
  assert.equal(shouldSkipSync(null, 'Awaiting approvals/confirmations', false), false);
  assert.equal(shouldSkipSync(null, 'Exported', false), false);
});

test('shouldSkipSync: fails closed when about to advance (Exported/Posted to LFX) after a read failure', () => {
  assert.equal(shouldSkipSync(null, 'Exported', true), true);
  assert.equal(shouldSkipSync(null, 'Posted to LFX', true), true);
  assert.equal(shouldSkipSync(null, 'Awaiting approvals/confirmations', true), false);
  assert.equal(shouldSkipSync(null, 'CNCF Approved', true), false);
  assert.equal(shouldSkipSync(null, 'Closed', true), false);
  assert.equal(shouldSkipSync('Posted to LFX', 'Exported', true), true);
});

test('shouldSkipSync: a /lfx-url advance to Posted to LFX still honors the guard', () => {
  // Exported → Posted to LFX proceeds (Exported is not admin-owned)...
  assert.equal(shouldSkipSync('Exported', 'Posted to LFX', false), false);
  // ...but a card an admin already moved forward is left alone (no regress).
  assert.equal(shouldSkipSync('LFX Approved', 'Posted to LFX', false), true);
  assert.equal(shouldSkipSync('Mentors added', 'Posted to LFX', false), true);
  // Re-running while already Posted to LFX is a no-op skip.
  assert.equal(shouldSkipSync('Posted to LFX', 'Posted to LFX', false), true);
});

test('shouldSkipExport: skips admin-owned cards or any read failure', () => {
  assert.equal(shouldSkipExport('Posted to LFX', false), true);
  assert.equal(shouldSkipExport('Exported', false), false);
  assert.equal(shouldSkipExport(null, false), false);
  assert.equal(shouldSkipExport(null, true), true);
  assert.equal(shouldSkipExport('Exported', true), true);
});

test('both guards protect the Mentors listed admin column', () => {
  // 'Mentors listed' is a hand-managed post-export column, so neither a
  // re-export nor a label-driven board-sync may pull a card out of it...
  assert.equal(shouldSkipExport('Mentors listed', false), true);
  assert.equal(shouldSkipSync('Mentors listed', 'Exported', false), true);
  assert.equal(shouldSkipSync('Mentors listed', 'Posted to LFX', false), true);
  // ...except that closing the issue still sends the card to Closed.
  assert.equal(shouldSkipSync('Mentors listed', 'Closed', false), false);
});

const node = (name) => ({ node: { fieldValueByName: name === null ? null : { name } } });
const noSleep = { sleep: async () => {} };

test('readStatusWithRetry: returns the status on a first-attempt success', async () => {
  const r = await readStatusWithRetry(() => node('Posted to LFX'), noSleep);
  assert.deepEqual(r, { currentStatus: 'Posted to LFX', readFailed: false });
});

test('readStatusWithRetry: recovers on the second attempt', async () => {
  const r = await readStatusWithRetry((attempt) => {
    if (attempt === 1) throw new Error('transient');
    return node('Exported');
  }, noSleep);
  assert.deepEqual(r, { currentStatus: 'Exported', readFailed: false });
});

test('readStatusWithRetry: both attempts failing sets readFailed', async () => {
  const r = await readStatusWithRetry(() => { throw new Error('boom'); }, noSleep);
  assert.deepEqual(r, { currentStatus: null, readFailed: true });
});

test('readStatusWithRetry: a fresh card with no status reads as null, not failed', async () => {
  const r = await readStatusWithRetry(() => node(null), noSleep);
  assert.deepEqual(r, { currentStatus: null, readFailed: false });
});

test('readStatusWithRetry: onError is called once per failed attempt', async () => {
  const seen = [];
  const r = await readStatusWithRetry(() => { throw new Error('boom'); }, {
    ...noSleep,
    onError: (attempt, err) => seen.push([attempt, err.message]),
  });
  assert.deepEqual(r, { currentStatus: null, readFailed: true });
  assert.deepEqual(seen, [[1, 'boom'], [2, 'boom']]);
});
