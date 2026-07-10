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
// (handles in first-seen order; de-duplicated case-insensitively, since GitHub
// logins are case-insensitive, while preserving the first-seen casing).
function findRecordedApprovers(comments) {
  const maintainers = [];
  const cncfAdmins = [];
  const seenM = new Set();
  const seenC = new Set();
  const add = (arr, seen, handle) => {
    const key = handle.toLowerCase();
    if (!seen.has(key)) { seen.add(key); arr.push(handle); }
  };
  for (const c of comments || []) {
    if ((c.user && c.user.login) !== 'github-actions[bot]') continue;
    const body = c.body || '';
    for (const m of body.matchAll(MAINTAINER_RE)) add(maintainers, seenM, m[1]);
    for (const m of body.matchAll(CNCF_RE)) add(cncfAdmins, seenC, m[1]);
  }
  return { maintainers, cncfAdmins };
}

module.exports = { findRecordedApprovers };
