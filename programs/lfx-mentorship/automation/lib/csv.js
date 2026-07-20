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

// Render the export tracking CSV from the program records. Extracted verbatim
// from lfx-export.yml so the same renderer backs both the export and the
// /lfx-url command (§4.3.5). Rows keep the input program order (the README body
// sorts; this does not). The LFX URL column is blank at export time and later
// populated from the issue's recorded URL. Returns the full file content,
// including the trailing newline.
function renderTrackingCsv(programs) {
  const csvHeaders = [
    'PROJECT', 'LFX URL', 'Upstream issue', '',
    'mentor count',
    'Mentor 1', 'Mentor 1 GitHub', 'Mentor 1 email address', 'Mentor 1 LFID',
    'Mentor 2', 'Mentor 2 GitHub', 'Mentor 2 email address', 'Mentor 2 LFID',
    'Mentor 3', 'Mentor 3 GitHub', 'Mentor 3 email address', 'Mentor 3 LFID',
    'Mentor 4', 'Mentor 4 GitHub', 'Mentor 4 email address', 'Mentor 4 LFID',
  ];

  const csvRows = [csvHeaders.map(csvEscape).join(',')];
  for (const prog of programs) {
    const mentors = prog.mentors || [];
    const row = [
      prog.program_name_full,
      prog.lfx_url || '',  // LFX URL — recorded post-export by /lfx-url (§4.3.5)
      prog.upstream_issue_url,
      '',  // spacer column
      mentors.length,
    ];
    for (let i = 0; i < 4; i++) {
      const m = mentors[i];
      row.push(m ? m.name : '');
      row.push(m ? m.github_handle : '');
      row.push(m ? m.email : '');
      row.push(m ? m.lfid : '');
    }
    csvRows.push(row.map(csvEscape).join(','));
  }
  return csvRows.join('\n') + '\n';
}

module.exports = { parseCsvLine, csvEscape, renderTrackingCsv };
