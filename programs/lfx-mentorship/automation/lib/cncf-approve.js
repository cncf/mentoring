'use strict';

// Decision logic for the `/cncf-approve` command (CNCF admin finalization),
// extracted from the inline block in lfx-proposal-approvals.yml so the gate is
// unit-tested. The workflow keeps the I/O (reading approvers.yml, posting the
// reply, and setting labels); this returns the decision only.
//
// Returns { ok: true } when the command may proceed, otherwise
// { ok: false, reason, missing? } where reason is one of:
//   'not-admin'        commenter is not a CNCF global approver
//   'already-approved' the proposal is already CNCF Approved
//   'not-validated'    the proposal is not currently passing validation
//   'missing-gates'    maintainer approval and/or mentor confirmation missing
//                      (missing: the outstanding label names)

const MAINTAINER_APPROVED = 'Maintainer/Contribex Approved';
const MENTORS_CONFIRMED = 'Mentors Confirmed';
const CNCF_APPROVED = 'CNCF Approved';
const VALIDATION_PASSED = 'Validation Passed';

// admins: lowercased global-approver handles (as returned by
// approvers.js getGlobalApprovers). commenter is compared case-insensitively,
// matching the original inline check.
function cncfApproveDecision({ commenter, admins, currentLabels }) {
  const labels = currentLabels || [];
  const has = (l) => labels.includes(l);

  if (!(admins || []).includes(String(commenter || '').toLowerCase())) {
    return { ok: false, reason: 'not-admin' };
  }
  if (has(CNCF_APPROVED)) {
    return { ok: false, reason: 'already-approved' };
  }
  // A proposal must be currently passing validation to be finalized. Without
  // this, a proposal approved earlier then edited into a failing state (labels
  // may linger for a non-material regression) could still be CNCF-approved.
  if (!has(VALIDATION_PASSED)) {
    return { ok: false, reason: 'not-validated' };
  }
  const missing = [];
  if (!has(MAINTAINER_APPROVED)) missing.push(MAINTAINER_APPROVED);
  if (!has(MENTORS_CONFIRMED)) missing.push(MENTORS_CONFIRMED);
  if (missing.length) return { ok: false, reason: 'missing-gates', missing };

  return { ok: true };
}

module.exports = { cncfApproveDecision };
