'use strict';

// Look up a project entry in projects.yml by display name, returning the
// fields the LFX proposal workflows need. Extracted from the duplicated inline
// parsers in lfx-proposal-approvals.yml, lfx-proposal-validate.yml, and
// lfx-export.yml (getProjectMeta) so the lookup is defined once and
// unit-tested (cncf/mentoring#1908 follow-up).
//
// Behavior is preserved from those inline copies:
//   - slug is lowercased (both call sites did this);
//   - org is returned RAW from repo_url. approvals used the raw (possibly
//     mixed-case, e.g. "WasmEdge") org to build the .project URL; validate
//     lowercases it at its call site for quota keys, and still does. Org
//     extraction requires a path segment after the org (as approvals did), so
//     an org-only repo_url like https://github.com/CoHDI yields '';
//   - hasDotProject reflects `has_dot_project: true`.
// A later change may replace this regex scan with a real YAML parser.

// Return { slug, org, maturity, hasDotProject } for the named project, or null
// if the project is not present. slug is lowercased, org is raw, maturity is
// raw, hasDotProject is bool.
function lookupProject(yamlText, name) {
  if (!name) return null;
  const escaped = String(name).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const projRe = new RegExp(`- name: ${escaped}\\n[\\s\\S]*?(?=\\n- name:|$)`);
  const m = String(yamlText).match(projRe);
  if (!m) return null;
  const block = m[0];

  let slug = '';
  const slugMatch = block.match(/^\s*slug:\s*(\S+)/m);
  if (slugMatch) slug = slugMatch[1].trim().toLowerCase();

  let maturity = '';
  const maturityMatch = block.match(/^\s*maturity:\s*(\S+)/m);
  if (maturityMatch) maturity = maturityMatch[1].trim();

  let org = '';
  const urlMatch = block.match(/repo_url:\s*(\S+)/);
  if (urlMatch) {
    const orgMatch = urlMatch[1].match(/github\.com\/([^/]+)\//);
    if (orgMatch) org = orgMatch[1];
  }

  const hasDotProject = /has_dot_project:\s*true/i.test(block);
  return { slug, org, maturity, hasDotProject };
}

module.exports = { lookupProject };
