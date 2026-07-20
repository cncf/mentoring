'use strict';

// Derive the per-term output directory (and its components) from an LFX term
// string like "2026 Term 3 (Sep-Nov)". Extracted from lfx-export.yml so the
// export and the /lfx-url command (§4.3.5) resolve the same paths. En/em dashes
// in the month range are normalized to a hyphen; a malformed term falls back to
// safe placeholders rather than throwing.
function termPaths(term) {
  const s = String(term || '');
  const yearMatch = s.match(/^(\d{4})/);
  const termNumMatch = s.match(/Term\s+(\d)/);
  const monthsMatch = s.match(/\(([^)]+)\)/);

  const year = yearMatch ? yearMatch[1] : 'unknown';
  const termNum = termNumMatch ? termNumMatch[1].padStart(2, '0') : '00';
  const months = monthsMatch
    ? monthsMatch[1].replace(/[\u2013\u2014]/g, '-')
    : 'unknown';
  const termDir = `${termNum}-${months}`;
  const outDir = `programs/lfx-mentorship/${year}/${termDir}`;

  return { year, termNum, months, termDir, outDir };
}

module.exports = { termPaths };
