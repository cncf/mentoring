'use strict';

// Maintain terms.yml — the LFX proposal term dropdown source — as a scaffold
// output, so a new term is listed once (from its config) instead of by hand.
//
// terms.yml is a plain block list of quoted term strings under a `terms:` key;
// the landscape-projects-sync workflow reads it verbatim to render the
// issue-form dropdown, and the export workflow validates its free-text term
// input against it at run time. To keep that contract (and the comment
// header) intact, entries are inserted as text rather than round-tripped
// through a YAML dumper, which would drop comments and re-quote everything.

// The term strings currently listed under `terms:`, in file order, unquoted.
// Used for the idempotency check and by callers that want the active set.
function listedTerms(text) {
  const out = [];
  let inTerms = false;
  for (const line of String(text).split('\n')) {
    if (/^terms:\s*$/.test(line)) { inTerms = true; continue; }
    if (!inTerms) continue;
    const item = line.match(/^\s*-\s*(.*\S)\s*$/);
    if (item) { out.push(item[1].replace(/^["']|["']$/g, '')); continue; }
    if (/^\S/.test(line)) break; // a new top-level key ends the block
    // blank lines inside/after the list are tolerated
  }
  return out;
}

// Insert `label` as the first item under `terms:` (most-recent-first, matching
// the program README archive table). Idempotent: if the term is already listed
// the text is returned unchanged. Throws if there is no `terms:` key.
function addTermToDropdown(text, label) {
  const source = String(text);
  const lines = source.split('\n');
  const idx = lines.findIndex((l) => /^terms:\s*$/.test(l));
  if (idx === -1) throw new Error('terms.yml has no "terms:" key');
  if (listedTerms(source).includes(label)) return source;
  lines.splice(idx + 1, 0, `  - "${label}"`);
  return lines.join('\n');
}

// Validation for the export workflow's free-text term input. The term choices
// used to be hardcoded in lfx-export.yml, but the landscape sync could never
// update them there: GITHUB_TOKEN pushes may not touch workflow files. Returns
// null when `term` exactly matches a listed entry, otherwise a setFailed-ready
// message naming the term and the active list.
function unknownTermMessage(termsText, term) {
  const active = listedTerms(termsText);
  if (active.includes(term)) return null;
  const listing = active.length
    ? `Active terms in terms.yml: ${active.map((t) => `"${t}"`).join(', ')}`
    : 'terms.yml lists no active terms';
  return `Unknown term "${term}". ${listing}.`;
}

module.exports = { addTermToDropdown, listedTerms, unknownTermMessage };
