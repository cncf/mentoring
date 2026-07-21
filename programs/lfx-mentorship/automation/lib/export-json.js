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

module.exports = { serializeExport, ignoreGenerated };
