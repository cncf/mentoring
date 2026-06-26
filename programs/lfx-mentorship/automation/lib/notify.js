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

module.exports = { parseExportedIssueNumbers, isExportBranch };
