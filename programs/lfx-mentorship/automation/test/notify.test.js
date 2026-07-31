'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseExportedIssueNumbers, isExportBranch, exportPathForBranch, exportedIssueNumbers, newIssueNumbers } = require('../lib/notify');
const { renderExportChangeBody } = require('../lib/lfx-url');

// parseExportedIssueNumbers extracts the issue numbers the export workflow
// writes into the PR body as "- #<n> <name>" list items (see
// renderExportChangeBody). The writer/reader format contract is enforced by the
// round-trip test below; these cases pin the parser's own behavior.
test('parseExportedIssueNumbers: single issue', () => {
  assert.deepEqual(
    parseExportedIssueNumbers('- #29 CNCF - OpenTelemetry: Testing (2026 Term 3)'),
    [29]
  );
});

test('parseExportedIssueNumbers: multiple issues across lines', () => {
  const body = '**Newly added:**\n- #12 Foo\n- #34 Bar\n';
  assert.deepEqual(parseExportedIssueNumbers(body), [12, 34]);
});

test('parseExportedIssueNumbers: a bare "- #<n>" line (no name) still matches', () => {
  assert.deepEqual(parseExportedIssueNumbers('- #42'), [42]);
});

test('parseExportedIssueNumbers: empty string yields none', () => {
  assert.deepEqual(parseExportedIssueNumbers(''), []);
});

test('parseExportedIssueNumbers: null/undefined yields none', () => {
  assert.deepEqual(parseExportedIssueNumbers(null), []);
  assert.deepEqual(parseExportedIssueNumbers(undefined), []);
});

test('parseExportedIssueNumbers: only list items match, not inline refs', () => {
  // an issue ref in prose or mid-line (not a "- #<n>" list item) is ignored
  assert.deepEqual(parseExportedIssueNumbers('See #5 for context.'), []);
  assert.deepEqual(parseExportedIssueNumbers('a name that mentions #5 mid-line'), []);
});

test('parseExportedIssueNumbers: ignores the "Export files" backtick list', () => {
  // the real export PR body carries a "- `path`" file list; only "- #<n>" counts
  const body = [
    '**Newly added:**', '- #12 CNCF - Foo', '',
    '**Export files:**',
    '- `programs/lfx-mentorship/2026/03-Sep-Nov/lfx-export.json`: JSON',
    '- `programs/lfx-mentorship/2026/03-Sep-Nov/README.md`: list', '',
  ].join('\n');
  assert.deepEqual(parseExportedIssueNumbers(body), [12]);
});

// ── Format contract (the test that was missing) ──────────────────────────────
// parseExportedIssueNumbers (notify.js) reads the export PR body that
// renderExportChangeBody (lfx-url.js) writes. They share a line format; testing
// each against its own hand-written fixture let them silently drift (#1945
// dropped the em-dash from the renderer but not the parser), which killed the
// merge notification in prod. This round-trip fails if either side drifts.
test('parseExportedIssueNumbers round-trips renderExportChangeBody output (format contract)', () => {
  const added = [
    { issue_number: 218, program_name_full: 'CNCF - Backstage: Knative eventing' },
    { issue_number: 219, program_name_full: 'CNCF - Kyverno: Policy log' },
  ];
  const updated = [{ issue_number: 220, program_name_full: 'CNCF - Meshery: Registry' }];
  const body = renderExportChangeBody(added, updated);
  assert.deepEqual(parseExportedIssueNumbers(body), [218, 219, 220]);
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

test('exportPathForBranch: null for a term-dir with path traversal or bad shape', () => {
  // termDir must be NN-Months (2-digit term, letters/hyphen months), mirroring
  // term-paths.js, so a crafted branch cannot escape programs/lfx-mentorship/.
  assert.equal(exportPathForBranch('automation/lfx-export-2026-03/../../secrets'), null);
  assert.equal(exportPathForBranch('automation/lfx-export-2026-..'), null);
  assert.equal(exportPathForBranch('automation/lfx-export-2026-3-Sep'), null);      // term not 2 digits
  assert.equal(exportPathForBranch('automation/lfx-export-2026-03-Sep_Nov'), null); // underscore not allowed
  assert.equal(exportPathForBranch('automation/lfx-export-2026-01-Mar'), 'programs/lfx-mentorship/2026/01-Mar/lfx-export.json'); // single month still ok
});
