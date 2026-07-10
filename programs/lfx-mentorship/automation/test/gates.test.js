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

test('pass, already fully awaiting (re-validation, nothing auto) → no changes', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: false, mentorsConfirmed: false, currentLabels: [AMA, AMC] }),
    [], []);
});

// ── Mentor gate reflects the CURRENT roster (can downgrade) ───────────
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

test('pass, mentor gate not met but already CNCF-approved → do NOT downgrade', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: false, currentLabels: [MA, MC, 'CNCF Approved'] }),
    [], []);
});

test('pass, still confirmed on re-validation (recompute true) → no churn', () => {
  eq(gateLabelChanges({ pass: true, maintainerApproved: true, mentorsConfirmed: true, currentLabels: [MA, MC, ACNCF] }),
    [], []);
});
