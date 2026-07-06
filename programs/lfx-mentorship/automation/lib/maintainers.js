'use strict';

// Maintainer authorization lookup against cncf/foundation's
// project-maintainers.csv, used by the LFX proposal `/approve` check.
//
// Columns: 0 Maturity, 1 Project, 2 Name, 3 Company, 4 GitHub, 5 OWNERS.
//
// The CSV is grouped: the Maturity and Project columns are set only on the
// FIRST maintainer row of each project (or subgroup); every following row in
// the group leaves them blank. The Project cell may also carry a subgroup
// label such as "OpenTelemetry (Governance Committee)", so a project matches
// by prefix/substring rather than equality.
const { parseCsvLine } = require('./csv.js');

// Return { authorized, project } for whether `handle` is listed as a
// maintainer of `project` in the CSV text. Matching is case-insensitive.
function findMaintainerInCsv(csvText, project, handle) {
  const wanted = String(project || '').trim().toLowerCase();
  const who = String(handle || '').trim().toLowerCase();
  if (!wanted || !who) return { authorized: false, project: '' };

  let group = '';  // Project column, forward-filled from each group's first row
  for (const line of String(csvText).split('\n').slice(1)) {
    if (!line.trim()) continue;
    const cols = parseCsvLine(line);
    const rowProject = (cols[1] || '').trim();
    if (rowProject) group = rowProject;  // new group header; blank rows inherit it
    const rowHandle = (cols[4] || '').trim().toLowerCase();
    if (!rowHandle) continue;
    const p = group.toLowerCase();
    if (rowHandle === who && (p.startsWith(wanted) || p.includes(wanted))) {
      return { authorized: true, project: group };
    }
  }
  return { authorized: false, project: '' };
}

module.exports = { findMaintainerInCsv };
