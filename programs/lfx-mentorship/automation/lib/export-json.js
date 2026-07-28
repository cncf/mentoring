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
function collectExportChanges(beforeData, afterData) {
  const before = new Map();
  const baseline = beforeData && Array.isArray(beforeData.programs) ? beforeData.programs : [];
  for (const p of baseline) {
    if (p && Number.isInteger(p.issue_number)) before.set(p.issue_number, JSON.stringify(p));
  }
  const after = afterData && Array.isArray(afterData.programs) ? afterData.programs : [];
  const changed = [];
  const added = [];
  const updated = [];
  for (const p of after) {
    if (!p || !Number.isInteger(p.issue_number)) continue;
    const serialized = JSON.stringify(p);
    if (!before.has(p.issue_number)) {
      changed.push(p);
      added.push(p);
    } else if (before.get(p.issue_number) !== serialized) {
      changed.push(p);
      updated.push(p);
    }
  }
  return { changed, added, updated };
}

function changedExportPrograms(beforeData, afterData) {
  return collectExportChanges(beforeData, afterData).changed;
}

function partitionExportChanges(beforeData, afterData) {
  const { added, updated } = collectExportChanges(beforeData, afterData);
  return { added, updated };
}

// Merge the freshly-built approved programs with programs already in the term's
// baseline export, so an exported program is never silently dropped when its
// CNCF-Approved label lapses (e.g. a post-approval material edit cleared it;
// cncf/mentoring#2015). A program in the baseline but absent from
// `approvedPrograms` is carried forward FROZEN (the exact record LFX was loaded
// with) until a deliberate re-approval regenerates it. An approved program always
// uses its fresh record. Nothing is ever auto-removed: once exported (loaded into
// LFX) a program stays, since dropping it is the very failure this prevents. The
// returned programs are sorted by issue_number descending (the order the export
// has always emitted, now deterministic across both sources). Returns
// { programs, carriedForward }.
function applyStickyExport(approvedPrograms, beforeData) {
  const approved = new Map();
  for (const p of approvedPrograms || []) {
    if (p && Number.isInteger(p.issue_number)) approved.set(p.issue_number, p);
  }
  const baseline = beforeData && Array.isArray(beforeData.programs) ? beforeData.programs : [];
  const carriedForward = [];
  for (const p of baseline) {
    if (!p || !Number.isInteger(p.issue_number)) continue;
    if (approved.has(p.issue_number)) continue; // approved: fresh record wins
    carriedForward.push(p);                      // lapsed approval: carry forward frozen
  }
  const programs = [...approved.values(), ...carriedForward]
    .sort((a, b) => b.issue_number - a.issue_number);
  return { programs, carriedForward };
}

module.exports = { serializeExport, ignoreGenerated, changedExportPrograms, partitionExportChanges, applyStickyExport };
