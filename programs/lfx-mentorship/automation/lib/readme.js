'use strict';

// Term README assembly for the LFX export, extracted from lfx-export.yml.
//
// The export preserves the term frontmatter (title, timeline, project and
// application instructions) up to and including the first horizontal rule,
// then regenerates only the body (Table of Contents + Accepted Projects)
// below it. This keeps a re-export idempotent and never wipes the hand-written
// term timeline. When the term README has no frontmatter yet, a minimal header
// is synthesised. The fs read/write stays in the workflow; this is the pure
// string assembly.
function buildReadme(existingReadme, bodyLines, readmeTitle) {
  const sep = existingReadme ? existingReadme.match(/^---[ \t]*$/m) : null;
  let header;
  if (sep) {
    header = existingReadme.slice(0, sep.index + sep[0].length) + '\n\n';
  } else {
    header = [
      `# ${readmeTitle}`,
      '',
      'Status: Planning',
      '',
      'Mentorship duration - three months (full-time schedule)',
      '',
      '---',
      '',
      '',
    ].join('\n');
  }
  return header + bodyLines.join('\n') + '\n';
}

module.exports = { buildReadme };
