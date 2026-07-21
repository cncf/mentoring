'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseExportedIssueNumbers, isExportBranch, exportPathForBranch, exportedIssueNumbers, newIssueNumbers } = require('../lib/notify');

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

// ── Part B: notify only newly-added issues on a re-export ──
// exportPathForBranch derives the term export path from the export branch name,
// so the notify workflow can fetch the export as it was before this PR.
test('exportPathForBranch: derives the export json path from an export branch', () => {
  assert.equal(
    exportPathForBranch('automation/lfx-export-2026-03-Sep-Nov'),
    'programs/lfx-mentorship/2026/03-Sep-Nov/lfx-export.json',
  );
});

test('exportPathForBranch: null for non-export branches or malformed refs', () => {
  assert.equal(exportPathForBranch('automation/landscape-sync'), null);
  assert.equal(exportPathForBranch('automation/lfx-export-'), null);      // no year/termdir
  assert.equal(exportPathForBranch('automation/lfx-export-99-x'), null);  // year not 4 digits
  assert.equal(exportPathForBranch(''), null);
  assert.equal(exportPathForBranch(null), null);
});

// exportedIssueNumbers pulls issue numbers out of a parsed export.
test('exportedIssueNumbers: returns programs[].issue_number in order', () => {
  assert.deepEqual(
    exportedIssueNumbers({ programs: [{ issue_number: 5 }, { issue_number: 9 }] }),
    [5, 9],
  );
});

test('exportedIssueNumbers: empty for missing/malformed data', () => {
  assert.deepEqual(exportedIssueNumbers(null), []);
  assert.deepEqual(exportedIssueNumbers({}), []);
  assert.deepEqual(exportedIssueNumbers({ programs: 'nope' }), []);
});

// newIssueNumbers is the set difference (current not already exported).
test('newIssueNumbers: returns current issues not in previous, order preserved', () => {
  assert.deepEqual(newIssueNumbers([1, 2, 3], [2]), [1, 3]);
  assert.deepEqual(newIssueNumbers([1, 2], [1, 2]), []);
  assert.deepEqual(newIssueNumbers([7], []), [7]);
  assert.deepEqual(newIssueNumbers([], [1]), []);
});
