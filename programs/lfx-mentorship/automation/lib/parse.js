'use strict';

// Issue-form parsing shared by the LFX proposal workflows.
//
// Extracted verbatim from the inline `github-script` blocks so the workflows
// can `require()` a single source of truth instead of copy-pasting it:
//   - parseIssueForm:  lfx-proposal-validate.yml, lfx-export.yml,
//                      lfx-proposal-approvals.yml (three identical copies)
//   - parseCheckboxes: lfx-export.yml
//   - parseMentors:    lfx-export.yml

// Split a GitHub issue-form body into a { label: value } map. Sections are
// delimited by "### <label>" headings; "_No response_" is normalised to ''.
function parseIssueForm(body) {
  const fields = {};
  for (const section of body.split(/^### +/m).slice(1)) {
    const nl = section.indexOf('\n');
    if (nl === -1) continue;
    const label = section.slice(0, nl).trim();
    let value = section.slice(nl + 1).trim();
    if (value === '_No response_') value = '';
    fields[label] = value;
  }
  return fields;
}

// Return the labels of the checked items from a checkbox field's raw value.
function parseCheckboxes(raw) {
  if (!raw) return [];
  return raw.split('\n')
    .filter(l => /- \[.\]/.test(l))
    .filter(l => /- \[x\]/i.test(l))
    .map(l => l.replace(/^- \[.\]\s*/, '').trim());
}

// Parse the pipe-separated Mentors field into structured mentor objects. Lines
// with 3 or 4 fields are kept (LFID is the optional 4th); any other field count
// drops the line. Role is by position: the first non-empty line is primary, the
// rest co-mentors (a malformed first line is a blocking validation error upstream).
function parseMentors(raw) {
  if (!raw) return [];
  return raw.split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean)
    .map((line, i) => {
      const parts = line.split('|').map(p => p.trim());
      if (parts.length !== 3 && parts.length !== 4) return null;
      return {
        name: parts[0],
        github_handle: parts[1].replace(/^@/, ''),
        email: parts[2],
        lfid: parts[3] || '',
        role: i === 0 ? 'primary' : 'co-mentor',
      };
    })
    .filter(Boolean);
}

module.exports = { parseIssueForm, parseCheckboxes, parseMentors, formFieldsChanged };

// True when two issue-form bodies differ in any parsed field value — i.e. the
// edit was "material" (a field's content changed), not merely cosmetic
// (whitespace anywhere, a prepended HTML comment, a trailing newline, or
// reflowing/re-indenting a field's text). Field values are whitespace-
// normalized (runs of whitespace collapsed) before comparison, so only a real
// content change counts. Compares the { label: value } maps from parseIssueForm.
function formFieldsChanged(oldBody, newBody) {
  const a = parseIssueForm(oldBody || '');
  const b = parseIssueForm(newBody || '');
  const norm = (v) => String(v || '').replace(/\s+/g, ' ').trim();
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of keys) {
    if (norm(a[k]) !== norm(b[k])) return true;
  }
  return false;
}
