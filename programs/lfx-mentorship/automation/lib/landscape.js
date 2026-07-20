'use strict';

// Pure, dependency-free logic for the "Sync CNCF Projects from Landscape"
// workflow (landscape-projects-sync.yml). The workflow shell does the impure
// work (HTTP fetch of landscape.yml, the {org}/.project existence checks, YAML
// parse/dump, and file IO) and calls these helpers, so the logic stays
// unit-testable with plain objects and strings.
//
// Ported from the workflow's former inline Python (and the retired
// lib/projects_yml.py render helper). Behaviour is preserved: the generated
// projects.yml is byte-identical to the previous pyyaml output, and render()
// still keeps the "Last updated" date stable when only the date would change.

const MATURITIES = new Set(['graduated', 'incubating', 'sandbox']);

// The landscape's `logo` field is a bare filename (e.g. "argo.svg") that refers
// to a file in cncf/landscape's hosted_logos/ directory. Downstream consumers
// (projects.yml, exports) need a resolvable URL, so logoUrl() composes the full
// raw URL. The landscape's default branch is `master`.
const LOGO_BASE_URL = 'https://raw.githubusercontent.com/cncf/landscape/master/hosted_logos/';

// Resolve a landscape logo value to a full URL. A blank value stays blank (so a
// project without a logo doesn't get a dangling base URL); an already-absolute
// http(s) URL is returned unchanged; otherwise the bare filename is prefixed
// with LOGO_BASE_URL. Surrounding whitespace and any leading "./" (the landscape
// stores some logos as "./file.svg") are stripped so the URL has no /./ segment.
function logoUrl(logo) {
  const v = String(logo || '').trim().replace(/^(\.\/)+/, '');
  if (!v) return '';
  if (/^https?:\/\//i.test(v)) return v;
  return LOGO_BASE_URL + v;
}

// Slug for projects.yml: prefer the landscape's extra.lfx_slug, else the
// project name, lowercased with every non [a-z0-9-] run collapsed to a single
// hyphen and surrounding hyphens trimmed.
//
// This is deliberately NOT lib/slug.js (the README-anchor slug, which keeps
// underscores and strips punctuation); the landscape slug turns underscores and
// punctuation alike into hyphens.
function projectSlug(name, lfxSlug) {
  return String(lfxSlug || name || '')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Extract the CNCF projects (graduated/incubating/sandbox) from a parsed
// landscape.yml object, sorted by lowercased name using JS's default string
// comparison (UTF-16 code units). The landscape's names are ASCII, so this
// orders identically to the former Python sorted(key=str.lower). Keys are
// emitted in a fixed order so the dumped projects.yml is byte-stable.
function extractProjects(landscape) {
  const projects = [];
  for (const cat of landscape.landscape || []) {
    for (const sub of cat.subcategories || []) {
      for (const item of sub.items || []) {
        if (!MATURITIES.has(item.project)) continue;
        const extra = item.extra || {};
        projects.push({
          name: item.name,
          slug: projectSlug(item.name, extra.lfx_slug),
          maturity: item.project,
          homepage: item.homepage_url || '',
          logo: logoUrl(item.logo),
          repo_url: item.repo_url || '',
        });
      }
    }
  }
  projects.sort((a, b) => {
    const an = a.name.toLowerCase();
    const bn = b.name.toLowerCase();
    return an < bn ? -1 : an > bn ? 1 : 0;
  });
  return projects;
}

// Extract the GitHub org from a project's repo_url, or null. Requires a
// trailing slash after the org (so a bare org URL is not treated as a repo),
// matching the former Python regex.
function orgOf(repoUrl) {
  const m = /^https:\/\/github\.com\/([^/]+)\//.exec(repoUrl || '');
  return m ? m[1] : null;
}

const DATE_LINE = /^# Last updated: .*$/gm;

function header(total, today) {
  return (
    '# Auto-generated from cncf/landscape \u2014 DO NOT EDIT MANUALLY.\n' +
    `# Last updated: ${today}\n` +
    `# Total projects: ${total}\n\n`
  );
}

function ignoreDate(text) {
  return text.replace(DATE_LINE, '# Last updated:');
}

// Return the projects.yml content to write.
//   body:     the YAML-dumped project list (no header).
//   total:    project count for the header.
//   today:    ISO date string to use when the content actually changed.
//   existing: current file content on disk, or null if the file is absent.
// When only the date line would change, returns `existing` byte-for-byte so the
// sync produces no diff and no spurious PR.
function render(body, { total, today, existing = null }) {
  const newContent = header(total, today) + body;
  if (existing !== null && ignoreDate(existing) === ignoreDate(newContent)) {
    return existing;
  }
  return newContent;
}

// Rewrite the `options:` block whose preceding lines contain `marker`, replacing
// its option lines with `- "<item>"` for each item at the options indent + 2
// spaces. Only the first matching block is rewritten; everything else is left
// untouched. Mirrors the former inline-Python rewrite used for the CNCF Project
// and Term dropdowns.
function rewriteOptionsBlock(text, marker, items) {
  const lines = text.split('\n');
  const out = [];
  let inOptions = false;
  let done = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!done && /^\s+options:\s*$/.test(line)) {
      const context = lines.slice(Math.max(0, i - 10), i).join('\n');
      if (context.includes(marker)) {
        const indent = line.match(/^(\s+)/)[1] + '  ';
        out.push(line);
        for (const item of items) out.push(`${indent}- "${item}"`);
        inOptions = true;
        done = true;
        continue;
      }
    }
    if (inOptions) {
      if (/^\s+-\s/.test(line)) continue;
      inOptions = false;
    }
    out.push(line);
  }
  return out.join('\n');
}

module.exports = {
  projectSlug,
  extractProjects,
  orgOf,
  render,
  rewriteOptionsBlock,
  logoUrl,
  LOGO_BASE_URL,
};
