'use strict';

// Maintain terms.yml — the LFX proposal term dropdown source — as a scaffold
// output, so a new term is listed once (from its config) instead of by hand.
//
// terms.yml is a plain block list of quoted term strings under a `terms:` key,
// and the landscape-projects-sync workflow reads it verbatim to render the
// issue-form and export dropdowns. To keep that contract (and the comment
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
  const lines = String(text).split('\n');
  const idx = lines.findIndex((l) => /^terms:\s*$/.test(l));
  if (idx === -1) throw new Error('terms.yml has no "terms:" key');
  if (listedTerms(text).includes(label)) return text;
  lines.splice(idx + 1, 0, `  - "${label}"`);
  return lines.join('\n');
}

module.exports = { addTermToDropdown, listedTerms };
