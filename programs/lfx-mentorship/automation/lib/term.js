'use strict';

// Per-term identity for the LFX term-setup tooling.
//
// Every LFX year runs exactly three terms on a fixed calendar (Term 1 =
// March-May, Term 2 = June-August, Term 3 = September-November). The strings
// that describe a term appear, hand-authored, in several places:
//   - the repo folder name   programs/lfx-mentorship/<year>/NN-Mon-Mon
//   - the term README H1      "Term NN - YYYY <full months>"
//   - the "Term N: <months>" repo label (reused across years)
//   - the board issue prefix  "[LFX YYYY TN]"
//   - the terms.yml dropdown  "YYYY Term N (Mon-Mon)"
// The month spellings differ per slot (folder abbreviations, full-name title,
// bespoke label) and are NOT a clean algorithm, so they are pinned in a small
// evidence-based table rather than derived. termIdentity() is the single source
// every phase (scaffold, issues, board) reads from.

const TERMS = {
  1: { folderMonths: 'Mar-May', titleMonths: 'March - May', label: 'Term 1: March-May' },
  2: { folderMonths: 'Jun-Aug', titleMonths: 'June - August', label: 'Term 2: June-Aug' },
  3: { folderMonths: 'Sep-Nov', titleMonths: 'September - November', label: 'Term 3: Sept-Nov' },
};

// Build the derived identity for a term from { year, number }. year and number
// may be numbers or numeric strings. Throws on an unknown term number (only
// 1-3 exist) or a non-integer year.
function termIdentity({ year, number } = {}) {
  const n = Number(number);
  if (!Number.isInteger(n) || !TERMS[n]) {
    throw new Error(`Invalid term number: ${number} (expected 1, 2 or 3)`);
  }
  const y = Number(year);
  if (!Number.isInteger(y) || y < 2000) {
    throw new Error(`Invalid year: ${year} (expected a four-digit year)`);
  }
  const t = TERMS[n];
  const padded = String(n).padStart(2, '0');
  const folder = `${padded}-${t.folderMonths}`;
  return {
    year: y,
    number: n,
    folder,
    dir: `programs/lfx-mentorship/${y}/${folder}`,
    title: `Term ${padded} - ${y} ${t.titleMonths}`,
    label: t.label,
    dropdownLabel: `${y} Term ${n} (${t.folderMonths})`,
    yearLabel: String(y),
    issuePrefix: `[LFX ${y} T${n}]`,
  };
}

module.exports = { termIdentity, TERMS };
