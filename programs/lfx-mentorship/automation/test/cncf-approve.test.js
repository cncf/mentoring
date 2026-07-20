'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { cncfApproveDecision } = require('../lib/cncf-approve');

const MA = 'Maintainer/Contribex Approved';
const MC = 'Mentors Confirmed';
const VP = 'Validation Passed';
const admins = ['natedoubleu', 'dkrook'];

test('commenter not a global approver → not-admin', () => {
  assert.deepEqual(
    cncfApproveDecision({ commenter: 'randomuser', admins, currentLabels: [MA, MC, VP] }),
    { ok: false, reason: 'not-admin' });
});

test('commenter match is case-insensitive', () => {
  assert.deepEqual(
    cncfApproveDecision({ commenter: 'NateDoubleU', admins, currentLabels: [MA, MC, VP] }),
    { ok: true });
});

test('already CNCF-approved → already-approved', () => {
  assert.deepEqual(
    cncfApproveDecision({ commenter: 'natedoubleu', admins, currentLabels: [MA, MC, VP, 'CNCF Approved'] }),
    { ok: false, reason: 'already-approved' });
});

test('missing both gates → missing-gates lists both', () => {
  assert.deepEqual(
    cncfApproveDecision({ commenter: 'natedoubleu', admins, currentLabels: [VP] }),
    { ok: false, reason: 'missing-gates', missing: [MA, MC] });
});

test('missing only maintainer approval', () => {
  assert.deepEqual(
    cncfApproveDecision({ commenter: 'natedoubleu', admins, currentLabels: [MC, VP] }),
    { ok: false, reason: 'missing-gates', missing: [MA] });
});

test('missing only mentor confirmation', () => {
  assert.deepEqual(
    cncfApproveDecision({ commenter: 'natedoubleu', admins, currentLabels: [MA, VP] }),
    { ok: false, reason: 'missing-gates', missing: [MC] });
});

test('both gates present and validated → ok', () => {
  assert.deepEqual(
    cncfApproveDecision({ commenter: 'natedoubleu', admins, currentLabels: [MA, MC, VP] }),
    { ok: true });
});

test('both gates present but validation NOT passing → not-validated (cannot finalize a failing proposal)', () => {
  assert.deepEqual(
    cncfApproveDecision({ commenter: 'natedoubleu', admins, currentLabels: [MA, MC] }),
    { ok: false, reason: 'not-validated' });
});
