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
const yaml = require('js-yaml');

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
// Parses the document with js-yaml and navigates the canonical dot-project
// schema (cncf/automation utilities/dot-project): maintainers[].teams[] where
// team.name === "project-maintainers" has members[] of bare GitHub handles.
// Only members of an exactly-named project-maintainers team authorize; other
// teams (reviewers, sig-*-leads, *-emeritus) do not. Non-string members and
// malformed YAML are ignored (returns false, never throws). Handle matching is
// case-insensitive and tolerates a leading '@'.
function isProjectMaintainer(yamlText, handle) {
  const who = String(handle || '').replace(/^@/, '').trim().toLowerCase();
  if (!who) return false;

  let doc;
  try {
    doc = yaml.load(String(yamlText));
  } catch {
    return false;
  }

  const groups = doc && Array.isArray(doc.maintainers) ? doc.maintainers : [];
  for (const group of groups) {
    const teams = group && Array.isArray(group.teams) ? group.teams : [];
    for (const team of teams) {
      if (!team || String(team.name || '').trim().toLowerCase() !== 'project-maintainers') {
        continue;
      }
      const members = Array.isArray(team.members) ? team.members : [];
      for (const m of members) {
        if (typeof m === 'string' && m.replace(/^@/, '').trim().toLowerCase() === who) {
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = { findMaintainerInCsv, isProjectMaintainer };
