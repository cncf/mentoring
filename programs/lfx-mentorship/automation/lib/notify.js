'use strict';

// Logic for the LFX Export Merge Notify workflow, extracted as pure functions
// so it can be unit-tested while the workflow's side effects stay thin.

// Extract the issue numbers the export workflow records in the PR body as
// "- #<n> — <name>" (emitted by lfx-export.yml). The em-dash (U+2014) is a
// functional delimiter: this regex must match the line format lfx-export.yml
// emits, so changing that output means changing this too. Returns an array of
// numbers (order preserved, no de-dup).
function parseExportedIssueNumbers(body) {
  return [...String(body || '').matchAll(/-\s+#(\d+)\s+—/g)].map(m => parseInt(m[1], 10));
}

// True when ref is a branch the export workflow created. Guards the
// destructive branch delete so only automation/lfx-export-* branches are
// removed, mirroring the workflow's job-level scope.
function isExportBranch(ref) {
  return typeof ref === 'string' && ref.startsWith('automation/lfx-export-');
}

// The term export file path for an export branch
// (automation/lfx-export-<year>-<termDir>), or null when ref isn't one or is
// malformed. Lets the notify workflow read the export as it was before this PR
// (at the base commit) to tell which issues are newly added.
function exportPathForBranch(ref) {
  if (!isExportBranch(ref)) return null;
  const rest = ref.slice('automation/lfx-export-'.length); // e.g. "2026-03-Sep-Nov"
  // Validate <year>-<termDir> where termDir is NN-Months (letters/hyphen),
  // mirroring term-paths.js, so a crafted branch ref can't traverse out of
  // programs/lfx-mentorship/ (e.g. "2026-03/../../secrets").
  const m = rest.match(/^(\d{4})-(\d{2}-[A-Za-z]+(?:-[A-Za-z]+)*)$/);
  if (!m) return null;
  return `programs/lfx-mentorship/${m[1]}/${m[2]}/lfx-export.json`;
}

// Issue numbers recorded in a parsed export (its programs[]), in order.
function exportedIssueNumbers(exportData) {
  if (!exportData || !Array.isArray(exportData.programs)) return [];
  return exportData.programs
    .map((p) => p && p.issue_number)
    .filter((n) => typeof n === 'number');
}

// Issue numbers present in `current` but not in `previous` (order preserved).
// Used to notify only issues newly added by a re-export, so programs exported
// (and already notified) in an earlier run aren't notified again.
function newIssueNumbers(current, previous) {
  const seen = new Set(previous || []);
  return (current || []).filter((n) => !seen.has(n));
}

module.exports = {
  parseExportedIssueNumbers, isExportBranch,
  exportPathForBranch, exportedIssueNumbers, newIssueNumbers,
};
