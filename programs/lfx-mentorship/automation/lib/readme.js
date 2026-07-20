'use strict';

const { slugify } = require('./slug.js');

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

// Render the auto-generated README body (Table of Contents + Accepted Projects)
// from the export's program records. Extracted verbatim from lfx-export.yml so
// the same renderer backs both the export and the /lfx-url command (§4.3.5).
// Programs are grouped by CNCF project and the projects sorted
// case-insensitively (the tracking CSV keeps input order; this body sorts).
// Returns the array of markdown lines for buildReadme to append below the term
// frontmatter.
function renderAcceptedProgramsBody(programs) {
  const byProject = {};
  for (const prog of programs) {
    const proj = prog.cncf_project;
    if (!byProject[proj]) byProject[proj] = [];
    byProject[proj].push(prog);
  }
  const sortedProjects = Object.keys(byProject).sort(
    (a, b) => a.toLowerCase().localeCompare(b.toLowerCase())
  );

  const md = [];

  // Table of contents
  md.push('## Table of Contents');
  md.push('');
  for (const proj of sortedProjects) {
    md.push(`- [${proj}](#${slugify(proj)})`);
    for (const prog of byProject[proj]) {
      md.push(`  - [${prog.program_name_short}](#${slugify(prog.program_name_short)})`);
    }
  }
  md.push('');

  // Accepted projects
  md.push('## Accepted Projects');
  md.push('');
  for (const proj of sortedProjects) {
    md.push(`### ${proj}`);
    md.push('');
    for (const prog of byProject[proj]) {
      md.push(`#### ${prog.program_name_short}`);
      md.push('');
      md.push(prog.program_name_full);
      md.push('');
      md.push('- Description:');
      md.push('');
      for (const line of prog.description.split('\n')) {
        md.push(`  > ${line}`);
      }
      md.push('');
      md.push(`- Recommended Skills: ${prog.skills}`);
      md.push(`- Technologies: ${prog.technologies}`);
      md.push('- Mentor(s):');
      for (const m of prog.mentors) {
        md.push(`  - ${m.name} (@${m.github_handle}, ${m.email})`);
      }
      md.push(`- Upstream Issue: ${prog.upstream_issue_url}`);
      md.push(`- LFX URL: ${prog.lfx_url || 'TBD'}`);
      md.push('');
    }
  }
  return md;
}

module.exports = { buildReadme, renderAcceptedProgramsBody };
