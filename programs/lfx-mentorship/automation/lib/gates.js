'use strict';

// Pure label-transition logic for the LFX proposal validation workflow's
// approval/confirmation gates. Given the resolved gate state (whether the
// proposer implies maintainer approval and/or mentor confirmation) and the
// labels currently on the issue, return the label mutations to apply. The
// workflow performs the I/O; the decision lives here so it is unit-tested.
//
// Gates:
//   - Maintainer: 'Maintainer/Contribex Approved' vs 'Awaiting Maintainer/Contribex Approval'
//   - Mentor:     'Mentors Confirmed'              vs 'Awaiting Mentor Confirmation'
// When BOTH are satisfied, signal readiness for the CNCF admin with
// 'Awaiting CNCF Admin Approval' (mirrors the approvals workflow's
// checkBothGates), unless already CNCF-approved.

const MAINTAINER_APPROVED = 'Maintainer/Contribex Approved';
const AWAITING_MAINTAINER = 'Awaiting Maintainer/Contribex Approval';
const MENTORS_CONFIRMED = 'Mentors Confirmed';
const AWAITING_MENTORS = 'Awaiting Mentor Confirmation';
const AWAITING_CNCF = 'Awaiting CNCF Admin Approval';
const CNCF_APPROVED = 'CNCF Approved';

// { pass, maintainerApproved, mentorsConfirmed, currentLabels } → { add, remove }.
// maintainerApproved / mentorsConfirmed reflect the proposer-implied resolution
// for THIS run; existing labels are still honored (idempotent, never downgrades
// an approval/confirmation already recorded by a slash command).
function gateLabelChanges({ pass, maintainerApproved, mentorsConfirmed, currentLabels }) {
  const has = (l) => currentLabels.includes(l);
  const add = [];
  const remove = [];

  // Validation regressed (previously passing, now failing): clear only the
  // awaiting labels so the board doesn't show "waiting on approvals" while the
  // slash commands are gated off by the lost Validation Passed. Recorded
  // approvals/confirmations are left intact (as before).
  if (!pass) {
    for (const l of [AWAITING_MAINTAINER, AWAITING_MENTORS]) if (has(l)) remove.push(l);
    return { add, remove };
  }

  // Maintainer gate
  if (maintainerApproved) {
    if (!has(MAINTAINER_APPROVED)) add.push(MAINTAINER_APPROVED);
    if (has(AWAITING_MAINTAINER)) remove.push(AWAITING_MAINTAINER);
  } else if (!has(MAINTAINER_APPROVED) && !has(AWAITING_MAINTAINER)) {
    add.push(AWAITING_MAINTAINER);
  }

  // Mentor gate
  if (mentorsConfirmed) {
    if (!has(MENTORS_CONFIRMED)) add.push(MENTORS_CONFIRMED);
    if (has(AWAITING_MENTORS)) remove.push(AWAITING_MENTORS);
  } else if (!has(MENTORS_CONFIRMED) && !has(AWAITING_MENTORS)) {
    add.push(AWAITING_MENTORS);
  }

  // Both gates satisfied (now or already) → await CNCF admin.
  const willHaveMaintainer = maintainerApproved || has(MAINTAINER_APPROVED);
  const willHaveMentors = mentorsConfirmed || has(MENTORS_CONFIRMED);
  if (willHaveMaintainer && willHaveMentors && !has(CNCF_APPROVED) && !has(AWAITING_CNCF)) {
    add.push(AWAITING_CNCF);
  }

  return { add, remove };
}

module.exports = { gateLabelChanges };
