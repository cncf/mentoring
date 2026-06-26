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
