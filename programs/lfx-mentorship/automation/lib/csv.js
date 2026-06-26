'use strict';

// CSV helpers used by the LFX proposal workflows.
//
//   - parseCsvLine: quote-aware row parser, lifted verbatim from
//     lfx-proposal-approvals.yml. A quoted comma (e.g. "Chainguard, Inc")
//     must not shift later columns, or the maintainer-auth lookup would read
//     the wrong GitHub-handle column and reject a real maintainer.
//   - csvEscape: field quoter for the export tracking CSV, adapted from
//     lfx-export.yml. One deliberate change from the original `|| ''`: it
//     uses `?? ''`, so a falsy-but-valid 0 serializes as "0" rather than "".
//     Unreachable today (validation requires a primary mentor); hardened for
//     safety and covered by csv.test.js.

// Parse one CSV row into an array of fields, honouring double-quoted fields
// and "" escaping inside them.
function parseCsvLine(row) {
  const out = [];
  let cur = '', inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (inQuotes) {
      if (ch === '"' && row[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') { inQuotes = false; }
      else { cur += ch; }
    } else if (ch === '"') { inQuotes = true; }
    else if (ch === ',') { out.push(cur); cur = ''; }
    else { cur += ch; }
  }
  out.push(cur);
  return out;
}

// Quote a CSV field when it contains a comma, quote, or newline; escapes
// embedded quotes by doubling them.
function csvEscape(val) {
  const s = String(val ?? '');
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

module.exports = { parseCsvLine, csvEscape };
