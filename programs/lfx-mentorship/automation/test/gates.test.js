'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { gateLabelChanges } = require('../lib/gates');

const MA = 'Maintainer/Contribex Approved';
const AMA = 'Awaiting Maintainer/Contribex Approval';
const MC = 'Mentors Confirmed';
const AMC = 'Awaiting Mentor Confirmation';
const ACNCF = 'Awaiting CNCF Admin Approval';

// Helper to compare add/remove as sets (order-independent).
function eq(actual, add, remove) {
  assert.deepEqual([...actual.add].sort(), [...add].sort());
  assert.deepEqual([...actual.remove].sort(), [...remove].sort());
}

test('pass, neither gate auto-satisfied, no labels → add both Awaiting', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: false, currentLabels: [] }),
    [AMA, AMC], []);
});

test('pass, maintainer auto but not mentors → approve maintainer, await mentors', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: false, currentLabels: [] }),
    [MA, AMC], []);
});

test('pass, both auto-satisfied → approve+confirm and await CNCF admin', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: true, currentLabels: [] }),
    [MA, MC, ACNCF], []);
});

test('pass, maintainer auto with a stale Awaiting label → add approved, drop awaiting', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: false, currentLabels: [AMA] }),
    [MA, AMC], [AMA]);
});

test('pass, mentor auto-confirmed while maintainer already approved → confirm + await CNCF', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: true, currentLabels: [MA, AMC] }),
    [MC, ACNCF], [AMC]);
});

test('pass, both already satisfied (recomputed) → only add Awaiting CNCF', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: true, currentLabels: [MA, MC] }),
    [ACNCF], []);
});

test('pass, both satisfied and Awaiting CNCF already present → no changes', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: true, currentLabels: [MA, MC, ACNCF] }),
    [], []);
});

test('pass, both satisfied but already CNCF Approved → do NOT re-add Awaiting CNCF', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: true, currentLabels: ['CNCF Approved'] }),
    [MA, MC], []);
});

test('pass, maintainer already approved (idempotent) → no maintainer add, still await mentors', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: false, currentLabels: [MA] }),
    [AMC], []);
});

test('validation failed → clear only the awaiting labels present, no adds', () => {
  eq(gateLabelChanges({ pass: false, maintainerApproved: false, mentorsConfirmed: false, currentLabels: [AMA, AMC, 'Validation Passed'] }),
    [], [AMA, AMC]);
});

test('validation failed leaves approved/confirmed labels intact', () => {
  eq(gateLabelChanges({ pass: false, maintainerApproved: false, mentorsConfirmed: false, currentLabels: [MA, MC] }),
    [], []);
});

test('validation failed also clears the Awaiting CNCF Admin prompt', () => {
  eq(gateLabelChanges({ pass: false, maintainerApproved: false, mentorsConfirmed: false, currentLabels: [MA, MC, ACNCF] }),
    [], [ACNCF]);
});

test('pass, already fully awaiting (re-validation, nothing auto) → no changes', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: false, currentLabels: [AMA, AMC] }),
    [], []);
});

// ── Mentor gate reflects the CURRENT roster (roster-driven; can downgrade) ──
// If a proposal was Mentors Confirmed (e.g. sole proposer-mentor) and a new,
// unconfirmed mentor is later added, re-validation must re-open confirmation.

test('pass, roster grew (recompute not-all-confirmed) → downgrade Confirmed to Awaiting', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: false, currentLabels: [MA, MC] }),
    [AMC], [MC]);
});

test('pass, downgrade also clears the CNCF-admin signal', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: false, currentLabels: [MA, MC, ACNCF] }),
    [AMC], [MC, ACNCF]);
});

test('pass, still confirmed on re-validation (recompute true) → no churn', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: true, currentLabels: [MA, MC, ACNCF] }),
    [], []);
});

// ── Material edit clears CONTENT approvals (maintainer + CNCF) ──────────
// A field-level edit invalidates the maintainer's and CNCF admin's approval of
// the content. Maintainer approval survives only when re-granted this run
// (proposer is a maintainer → maintainerApproved true). Mentor confirmation is
// NOT cleared here (participation commitment; roster changes handle it).

test('material edit, proposer not a maintainer → clear Maintainer Approved', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: true, materialChange: true, currentLabels: [MA, MC] }),
    [AMA], [MA]);
});

test('material edit, proposer not a maintainer, CNCF-approved → clear both, re-await maintainer', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: true, materialChange: true, currentLabels: [MA, MC, 'CNCF Approved'] }),
    [AMA], [MA, 'CNCF Approved']);
});

test('material edit by a maintainer-proposer, CNCF-approved → keep maintainer, clear CNCF', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: true, materialChange: true, currentLabels: [MA, MC, 'CNCF Approved'] }),
    [ACNCF], ['CNCF Approved']);
});

test('material edit, roster also grew, CNCF-approved → clear maintainer + mentor + CNCF', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: false, materialChange: true, currentLabels: [MA, MC, 'CNCF Approved'] }),
    [AMA, AMC], [MA, MC, 'CNCF Approved']);
});

test('trivial edit (not material) while CNCF-approved → leave everything', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: true, materialChange: false, currentLabels: [MA, MC, 'CNCF Approved'] }),
    [], []);
});

test('material edit while only awaiting CNCF (not yet approved) → no churn', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: true, materialChange: true, currentLabels: [MA, MC, ACNCF] }),
    [], []);
});

// ── A material edit clears content approvals even when it BREAKS validation ──
// A field edit invalidates the maintainer + CNCF approvals regardless of whether
// the edit leaves validation passing. Previously the !pass branch returned early
// and kept them, so a materially-changed, now-failing proposal still carried a
// stale maintainer/CNCF approval (and could be /cncf-approve'd). Awaiting prompts
// are still cleared on failure; mentor confirmation persists (participation).
// Note: on the failing path the validation workflow always passes
// maintainerApproved=false (proposer-implied approval is resolved only on a
// passing run), so the maintainer approval is cleared here and re-granted once
// validation passes again — there is no "keep maintainer on a failing edit" case.

test('material edit breaks validation, proposer not a maintainer → clear Maintainer Approved and the awaiting prompt', () => {
  eq(gateLabelChanges({ pass: false, maintainerApproved: false, mentorsConfirmed: false, materialChange: true, currentLabels: [MA, AMC] }),
    [], [MA, AMC]);
});

test('material edit breaks validation while CNCF-approved (proposer not a maintainer) → clear maintainer + CNCF, keep mentors', () => {
  eq(gateLabelChanges({ pass: false, maintainerApproved: false, mentorsConfirmed: true, materialChange: true, currentLabels: [MA, MC, 'CNCF Approved'] }),
    [], [MA, 'CNCF Approved']);
});

test('non-material validation failure keeps content approvals intact', () => {
  eq(gateLabelChanges({ pass: false, maintainerApproved: false, mentorsConfirmed: false, materialChange: false, currentLabels: [MA, MC, 'CNCF Approved'] }),
    [], []);
});
