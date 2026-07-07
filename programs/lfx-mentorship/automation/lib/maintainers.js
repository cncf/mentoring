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

// Whether `handle` is a member of the `project-maintainers` team in an
// {org}/.project/maintainers.yaml document (tier-1 of the /approve check).
//
// This is the hand-rolled line-scanner that shipped inline in
// lfx-proposal-approvals.yml, extracted verbatim so the extraction itself
// changes no behavior (locked by characterization tests). Its known
// limitations are intentionally preserved here and documented by those tests;
// hardening them (e.g. via a real YAML parser) is a separate, deliberate step:
//   - members written as mappings (`- name: foo`) are NOT matched;
//   - the team-name test is a prefix match, so `project-maintainers-emeritus`
//     is treated as `project-maintainers`.
function isProjectMaintainer(yamlText, handle) {
  const who = String(handle || '').replace(/^@/, '').toLowerCase();
  if (!who) return false;

  let inMaintainersTeam = false;
  let inMembers = false;
  for (const line of String(yamlText).split('\n')) {
    if (/name:\s*["']?project-maintainers/.test(line)) {
      inMaintainersTeam = true;
      continue;
    }
    if (inMaintainersTeam && /members:/.test(line)) {
      inMembers = true;
      continue;
    }
    if (inMembers) {
      const memberMatch = line.match(/^\s+-\s+(\S+)/);
      if (memberMatch) {
        const h = memberMatch[1].replace(/^@/, '').toLowerCase();
        if (h === who) return true;
      } else if (/^\s+-\s*name:/.test(line) || /^\s*\S.*:/.test(line)) {
        inMaintainersTeam = false;
        inMembers = false;
      }
    }
  }
  return false;
}

module.exports = { findMaintainerInCsv, isProjectMaintainer };
