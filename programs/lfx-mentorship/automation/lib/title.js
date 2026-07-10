'use strict';

// The LFX program title format, shared by the validation workflow (Program Name
// budget check + the title shown to proposers) and the export workflow. LFX
// caps the full title at 100 characters.

const LFX_TITLE_MAX = 100;

// Strip the month parenthetical from a term:
// "2026 Term 3 (Sep-Nov)" → "2026 Term 3".
function termToken(term) {
  return String(term || '').replace(/\s*\(.*$/, '');
}

// Full LFX title: "CNCF - <project>: <programName> (<term token>)".
function lfxTitle({ project, programName, term } = {}) {
  return `CNCF - ${project || ''}: ${programName || ''} (${termToken(term)})`;
}

// Characters available for the Program Name so the full title fits within
// LFX_TITLE_MAX (i.e. 100 minus the fixed overhead of the surrounding format).
function programNameBudget({ project, term } = {}) {
  return LFX_TITLE_MAX - lfxTitle({ project, programName: '', term }).length;
}

module.exports = { LFX_TITLE_MAX, termToken, lfxTitle, programNameBudget };
