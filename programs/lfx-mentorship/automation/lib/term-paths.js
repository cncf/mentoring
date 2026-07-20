'use strict';

// Derive the per-term output directory (and its components) plus the README
// display title from an LFX term string like "2026 Term 3 (Sep-Nov)". Extracted
// from lfx-export.yml so the export and the /lfx-url command (§4.3.5) resolve
// the same paths and synthesize an identical README header. En/em dashes in the
// month range are normalized to a hyphen; a malformed term falls back to safe
// placeholders rather than throwing.
function termPaths(term) {
  const s = String(term || '');
  const yearMatch = s.match(/^(\d{4})/);
  const termNumMatch = s.match(/Term\s+(\d)/);
  const monthsMatch = s.match(/\(([^)]+)\)/);

  const year = yearMatch ? yearMatch[1] : 'unknown';
  const termNum = termNumMatch ? termNumMatch[1].padStart(2, '0') : '00';
  const monthsRaw = monthsMatch
    ? monthsMatch[1].replace(/[\u2013\u2014]/g, '-').trim()
    : 'unknown';
  // months feeds outDir, and the Term field is untrusted issue-form input, so
  // reject anything outside letters/hyphen (e.g. "../", ".", "/") to keep the
  // path inside programs/lfx-mentorship/<year>/ rather than traversing out.
  const months = /^[A-Za-z]+(-[A-Za-z]+)*$/.test(monthsRaw) ? monthsRaw : 'unknown';
  const termDir = `${termNum}-${months}`;
  const outDir = `programs/lfx-mentorship/${year}/${termDir}`;

  // Human-readable README H1, e.g. "Term 03 - 2026 September - November". Only
  // used when a term README has no frontmatter to preserve (buildReadme ignores
  // it otherwise), so the export and /lfx-url never synthesize a broken "# ".
  const monthMap = {
    'Mar': 'March', 'May': 'May', 'Jun': 'June',
    'Aug': 'August', 'Sep': 'September', 'Nov': 'November',
  };
  const monthParts = months.split('-').map(m => monthMap[m.trim()] || m.trim());
  const readmeTitle = `Term ${termNum} - ${year} ${monthParts.join(' - ')}`;

  return { year, termNum, months, termDir, outDir, readmeTitle };
}

module.exports = { termPaths };
