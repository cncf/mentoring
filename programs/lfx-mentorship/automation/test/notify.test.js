'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseExportedIssueNumbers, isExportBranch } = require('../lib/notify');

// parseExportedIssueNumbers extracts the issue numbers the export workflow
// writes into the PR body as "- #<n> — <name>". The em-dash (U+2014) is a
// functional delimiter shared with lfx-export.yml: it must match exactly.
test('parseExportedIssueNumbers: single issue', () => {
  assert.deepEqual(
    parseExportedIssueNumbers('- #29 — CNCF - OpenTelemetry: Testing (2026 Term 3)'),
    [29]
  );
});

test('parseExportedIssueNumbers: multiple issues across lines', () => {
  const body = '**Exported proposals:**\n- #12 — Foo\n- #34 — Bar\n';
  assert.deepEqual(parseExportedIssueNumbers(body), [12, 34]);
});

test('parseExportedIssueNumbers: empty string yields none', () => {
  assert.deepEqual(parseExportedIssueNumbers(''), []);
});

test('parseExportedIssueNumbers: null/undefined yields none', () => {
  assert.deepEqual(parseExportedIssueNumbers(null), []);
  assert.deepEqual(parseExportedIssueNumbers(undefined), []);
});

test('parseExportedIssueNumbers: only the em-dash delimiter matches', () => {
  // hyphen-minus and en-dash must not be treated as the delimiter
  assert.deepEqual(parseExportedIssueNumbers('- #5 - Foo'), []);
  assert.deepEqual(parseExportedIssueNumbers('- #5 \u2013 Foo'), []);
});

test('parseExportedIssueNumbers: requires the leading list dash', () => {
  assert.deepEqual(parseExportedIssueNumbers('#7 — no leading dash'), []);
});

test('parseExportedIssueNumbers: does not de-duplicate (captures current behaviour)', () => {
  assert.deepEqual(parseExportedIssueNumbers('- #5 — A\n- #5 — A again'), [5, 5]);
});

// isExportBranch guards the destructive branch delete: only branches the
// export workflow creates (automation/lfx-export-*) may be removed.
test('isExportBranch: true for an export branch', () => {
  assert.equal(isExportBranch('automation/lfx-export-2026-03-Sep-Nov'), true);
});

test('isExportBranch: true for the bare prefix', () => {
  assert.equal(isExportBranch('automation/lfx-export-'), true);
});

test('isExportBranch: false for other automation branches', () => {
  assert.equal(isExportBranch('automation/landscape-sync'), false);
});

test('isExportBranch: false for main and unrelated branches', () => {
  assert.equal(isExportBranch('main'), false);
  assert.equal(isExportBranch('feature/x'), false);
});

test('isExportBranch: false for empty or non-string input', () => {
  assert.equal(isExportBranch(''), false);
  assert.equal(isExportBranch(undefined), false);
  assert.equal(isExportBranch(null), false);
  assert.equal(isExportBranch(42), false);
});
