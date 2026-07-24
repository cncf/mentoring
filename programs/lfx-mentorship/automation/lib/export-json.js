'use strict';

// Serialize a term export (lfx-export.json), preserving the existing
// _generated timestamp when the rest of the content is unchanged.
//
// The export stamps `_generated` on every run. Without this, re-running the
// export with no substantive change still diffs on the timestamp line, so the
// workflow's change check sees a change and opens a no-op PR (see #1944).
// Mirrors lib/landscape.js render()/ignoreDate, which keeps projects.yml's
// "Last updated" date stable unless the project list actually changes.

// Remove the "_generated" line so two serialized exports can be compared on
// their substantive content alone.
function ignoreGenerated(text) {
  return String(text).replace(/^[ \t]*"_generated":.*\r?\n/m, '');
}

// Return the JSON text to write for `data`. When `existingText` (the current
// file on disk) differs from the freshly serialized `data` only by the
// _generated line, return it verbatim so the write is byte-identical and git
// sees no change; otherwise return the fresh serialization.
function serializeExport(data, existingText) {
  const body = JSON.stringify(data, null, 2) + '\n';
  if (existingText != null && ignoreGenerated(existingText) === ignoreGenerated(body)) {
    return existingText;
  }
  return body;
}

// Programs in `afterData` that are new or content-changed versus `beforeData`
// (the term export currently on `main`). The export regenerates the whole term
// every run, so the git diff already contains only what changed; this backs the
// human-facing summaries (PR body list + title count, and the "included in
// export" notification) so they reference only the issues THIS run adds or
// changes, not every program already exported. Mirrors changedRecordedPrograms
// in lib/lfx-url.js (the /lfx-url batch-list fix #1949). Each program is keyed by
// issue_number and compared by full JSON serialization; a program is "changed"
// when absent from the baseline or serialized differently. A null/malformed
// baseline yields every program (a safe fallback to the pre-change "list all"
// behavior, e.g. a term's first export). Insertion order of afterData is kept.
function changedExportPrograms(beforeData, afterData) {
  const before = new Map();
  const baseline = beforeData && Array.isArray(beforeData.programs) ? beforeData.programs : [];
  for (const p of baseline) {
    if (p && Number.isInteger(p.issue_number)) before.set(p.issue_number, JSON.stringify(p));
  }
  const after = afterData && Array.isArray(afterData.programs) ? afterData.programs : [];
  return after.filter((p) => p && Number.isInteger(p.issue_number)
    && before.get(p.issue_number) !== JSON.stringify(p));
}

module.exports = { serializeExport, ignoreGenerated, changedExportPrograms };
