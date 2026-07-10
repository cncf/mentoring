'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  PROPOSAL_TITLE_PREFIX,
  PROPOSAL_LABELS,
  PROPOSAL_FORM_HEADINGS,
  isProposalTitle,
  looksLikeProposalForm,
  missingLabels,
} = require('../lib/labels');

// ── isProposalTitle ──────────────────────────────────────────────────
// Label-independent detection of a proposal, so the workflow can run for
// issues from read-only authors whose template labels GitHub silently drops.
// Behaviour is kept identical to the workflow's YAML startsWith() gate — no
// trimming, case-sensitive — so the gate and the step never disagree.

test('isProposalTitle: true for the template title prefix', () => {
  assert.equal(isProposalTitle('[CNCF LFX Proposal] Apicurio: Federated Search'), true);
});

test('isProposalTitle: trailing whitespace still matches (startsWith parity)', () => {
  assert.equal(isProposalTitle('[CNCF LFX Proposal] Foo  '), true);
});

test('isProposalTitle: leading whitespace does NOT match (startsWith parity)', () => {
  assert.equal(isProposalTitle('  [CNCF LFX Proposal] Foo'), false);
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

// The step-level helper is precise: case-sensitive and untrimmed, matching the
// exact prefix the template emits. (The YAML job gate's startsWith() is looser
// — case-insensitive — but only a pre-filter, so the helper being stricter is
// safe and intentional.)
test('isProposalTitle: case-sensitive (stricter than the pre-filter gate)', () => {
  assert.equal(isProposalTitle('[cncf lfx proposal] Foo'), false);
});

// ── looksLikeProposalForm ────────────────────────────────────────────
// A magic title alone must not let any author apply the identifying labels
// (which unlock the token-bearing downstream workflows). Require the issue body
// to carry the proposal issue-form's headings, so the bootstrap only fires for
// genuine template submissions.

// Minimal body carrying every required heading, in the "### <label>" shape the
// GitHub issue form emits (see lib/parse.js parseIssueForm).
const formBody = PROPOSAL_FORM_HEADINGS.map((h) => `### ${h}\n\nvalue`).join('\n\n');

test('PROPOSAL_FORM_HEADINGS: are the core required proposal fields', () => {
  assert.deepEqual(PROPOSAL_FORM_HEADINGS, ['CNCF Project', 'Term', 'Program Description', 'Mentors']);
});

test('looksLikeProposalForm: true when all required headings are present', () => {
  assert.equal(looksLikeProposalForm(formBody), true);
});

test('looksLikeProposalForm: true even with extra content around the headings', () => {
  assert.equal(looksLikeProposalForm(`intro\n\n${formBody}\n\n### Technologies\n\nGo`), true);
});

test('looksLikeProposalForm: false when any required heading is missing', () => {
  const missingMentors = ['CNCF Project', 'Term', 'Program Description']
    .map((h) => `### ${h}\n\nvalue`).join('\n\n');
  assert.equal(looksLikeProposalForm(missingMentors), false);
});

test('looksLikeProposalForm: false for a bare heading label without the ### prefix', () => {
  // Prose that merely mentions the field names must not count as a form.
  const prose = PROPOSAL_FORM_HEADINGS.join(', ');
  assert.equal(looksLikeProposalForm(prose), false);
});

test('looksLikeProposalForm: a mid-line "### CNCF Project" does not count (start-of-line only)', () => {
  // Only headings at the start of a line count (parseIssueForm's /^### +/m), so
  // a substring buried mid-line cannot fake a form and unlock the labels.
  const body = [
    'prefix ### CNCF Project',
    '### Term\n\nx',
    '### Program Description\n\nx',
    '### Mentors\n\nx',
  ].join('\n\n');
  assert.equal(looksLikeProposalForm(body), false);
});

test('looksLikeProposalForm: false for empty / non-string bodies', () => {
  assert.equal(looksLikeProposalForm(''), false);
  assert.equal(looksLikeProposalForm(undefined), false);
  assert.equal(looksLikeProposalForm(null), false);
  assert.equal(looksLikeProposalForm(42), false);
});

test('looksLikeProposalForm: honours a custom required-headings list', () => {
  assert.equal(looksLikeProposalForm('### Only\n\nx', ['Only']), true);
  assert.equal(looksLikeProposalForm('### Only\n\nx', ['Only', 'Missing']), false);
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
