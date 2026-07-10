'use strict';

// Project-maintainer authorization resolver shared by the LFX proposal
// workflows. Extracted from the inline tier-1 + tier-2 block of the `/approve`
// handler (lfx-proposal-approvals.yml) so the same "is @handle a maintainer of
// this project?" decision drives both `/approve` (commenter) and the
// validation workflow's proposer-implied approval (issue author).
//
// Tier 1: {org}/.project/maintainers.yaml (source of truth once adopted).
// Tier 2: cncf/foundation/project-maintainers.csv (legacy/fallback).
// The tier-3 approvers.yml fallbacks (per-project delegates, global approvers)
// are intentionally NOT included here: a delegate or global approver filing a
// proposal is not the project maintainers endorsing it, so proposer-implied
// approval is limited to real project maintainers.
//
// Network I/O is injected via `fetchFn` (defaults to global fetch) so the
// resolver is unit-testable without hitting the network.

const { isProjectMaintainer, findMaintainerInCsv } = require('./maintainers.js');

const DOT_PROJECT_URL = (org) => `https://raw.githubusercontent.com/${org}/.project/main/maintainers.yaml`;
const CSV_URL = 'https://raw.githubusercontent.com/cncf/foundation/main/project-maintainers.csv';

// Resolve whether `handle` is a project maintainer authorized to approve
// proposals for `project`. Returns { authorized: boolean, source: string },
// where source is a human-readable origin for the approval (empty when not
// authorized). Mirrors the source strings the /approve handler reported.
async function resolveProjectMaintainer({ handle, project, org, hasDotProject, fetchFn = fetch, log = () => {} }) {
  if (!handle) return { authorized: false, source: '' };

  // Tier 1: {org}/.project/maintainers.yaml (only when the project adopted it)
  if (org && hasDotProject) {
    try {
      const resp = await fetchFn(DOT_PROJECT_URL(org));
      if (resp.ok) {
        const yaml = await resp.text();
        if (isProjectMaintainer(yaml, handle)) {
          return { authorized: true, source: `${org}/.project/maintainers.yaml` };
        }
        log(`.project/maintainers.yaml found for ${org} but ${handle} not in project-maintainers team`);
      } else {
        log(`${org}/.project not found (HTTP ${resp.status}); falling back to CSV`);
      }
    } catch (e) {
      log(`.project check failed: ${e.message}`);
    }
  }

  // Tier 2: cncf/foundation project-maintainers.csv
  if (project) {
    try {
      const resp = await fetchFn(CSV_URL);
      if (resp.ok) {
        const csv = await resp.text();
        const hit = findMaintainerInCsv(csv, project, handle);
        if (hit.authorized) {
          return { authorized: true, source: `project-maintainers.csv (${hit.project})` };
        }
      }
    } catch (e) {
      log(`project-maintainers.csv check failed: ${e.message}`);
    }
  }

  return { authorized: false, source: '' };
}

module.exports = { resolveProjectMaintainer, DOT_PROJECT_URL, CSV_URL };
