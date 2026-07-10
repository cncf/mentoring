'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  PROPOSAL_TITLE_PREFIX,
  PROPOSAL_LABELS,
  isProposalTitle,
  missingLabels,
} = require('../lib/labels');

// ── isProposalTitle ──────────────────────────────────────────────────
// Label-independent detection of a proposal, so the workflow can run for
// issues from read-only authors whose template labels GitHub silently drops.

test('isProposalTitle: true for the template title prefix', () => {
  assert.equal(isProposalTitle('[CNCF LFX Proposal] Apicurio: Federated Search'), true);
});

test('isProposalTitle: tolerates surrounding whitespace', () => {
  assert.equal(isProposalTitle('  [CNCF LFX Proposal] Foo  '), true);
});

test('isProposalTitle: false for an unrelated title', () => {
  assert.equal(isProposalTitle('Bug: something is broken'), false);
});

test('isProposalTitle: false for an empty string', () => {
  assert.equal(isProposalTitle(''), false);
});

test('isProposalTitle: false for non-string input', () => {
  assert.equal(isProposalTitle(undefined), false);
  assert.equal(isProposalTitle(null), false);
  assert.equal(isProposalTitle(42), false);
});

// Case-sensitive, matching the workflow's YAML startsWith() gate. A lowercased
// prefix would be filtered out by the gate before the step runs, so lib parity
// keeps the two in agreement.
test('isProposalTitle: case-sensitive (matches YAML gate)', () => {
  assert.equal(isProposalTitle('[cncf lfx proposal] Foo'), false);
});

// ── PROPOSAL_LABELS ──────────────────────────────────────────────────
// Frozen contract: these are the identifying labels every proposal workflow
// (validate, board-sync, approvals) gates on. 'Needs Validation' is excluded
// deliberately — the validation step manages that transient label itself.

test('PROPOSAL_LABELS: exactly the two identifying labels, in order', () => {
  assert.deepEqual(PROPOSAL_LABELS, ['lfx mentorship', 'Proposal']);
});

test('PROPOSAL_TITLE_PREFIX: matches the issue template title prefix', () => {
  assert.equal(PROPOSAL_TITLE_PREFIX, '[CNCF LFX Proposal]');
});

// ── missingLabels ────────────────────────────────────────────────────

test('missingLabels: all required when the issue has none', () => {
  assert.deepEqual(missingLabels([]), ['lfx mentorship', 'Proposal']);
});

test('missingLabels: only the absent one when a label is already present', () => {
  assert.deepEqual(missingLabels(['Proposal']), ['lfx mentorship']);
  assert.deepEqual(missingLabels(['lfx mentorship']), ['Proposal']);
});

test('missingLabels: empty when both are already present', () => {
  assert.deepEqual(missingLabels(['lfx mentorship', 'Proposal']), []);
});

test('missingLabels: ignores unrelated labels already on the issue', () => {
  assert.deepEqual(missingLabels(['lfx mentorship', 'Proposal', 'Needs Validation']), []);
});

test('missingLabels: treats missing/undefined current labels as none', () => {
  assert.deepEqual(missingLabels(undefined), ['lfx mentorship', 'Proposal']);
});

test('missingLabels: preserves the order of the required list', () => {
  assert.deepEqual(
    missingLabels([], ['Proposal', 'lfx mentorship']),
    ['Proposal', 'lfx mentorship'],
  );
});
