'use strict';

// Scan an issue's comments for the approval records that the /approve and
// /cncf-approve handlers post (lfx-proposal-approvals.yml), so the validation
// workflow can @-tag the people whose approval it clears after a material edit.
//
// Coupled to those confirmation-comment strings — if the approvals workflow
// changes the wording, update these patterns (and their tests) with it. Only
// github-actions[bot] comments are scanned, so a user quoting the phrase can't
// spoof an approver.

const MAINTAINER_RE = /Maintainer approval recorded from @([A-Za-z0-9-]+)/g;
const CNCF_RE = /CNCF admin approval granted by @([A-Za-z0-9-]+)/g;

// comments: [{ user: { login }, body }] → { maintainers: [], cncfAdmins: [] }
// (handles in first-seen order, de-duplicated).
function findRecordedApprovers(comments) {
  const maintainers = [];
  const cncfAdmins = [];
  for (const c of comments || []) {
    if ((c.user && c.user.login) !== 'github-actions[bot]') continue;
    const body = c.body || '';
    for (const m of body.matchAll(MAINTAINER_RE)) {
      if (!maintainers.includes(m[1])) maintainers.push(m[1]);
    }
    for (const m of body.matchAll(CNCF_RE)) {
      if (!cncfAdmins.includes(m[1])) cncfAdmins.push(m[1]);
    }
  }
  return { maintainers, cncfAdmins };
}

module.exports = { findRecordedApprovers };
