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

// { pass, maintainerApproved, mentorsConfirmed, materialChange, currentLabels }
//   → { add, remove }.
//
// maintainerApproved: is the maintainer gate satisfied THIS run — an existing
//   /approve (honored on non-material edits) OR the proposer being a project
//   maintainer? A material edit that is NOT re-approved clears it (content the
//   maintainer signed off on changed).
// mentorsConfirmed: are ALL current mentors confirmed, freshly recomputed from
//   the current roster (proposer's own slot + persisted /confirm comments)?
//   Roster-driven: adding an unconfirmed mentor flips it false; a non-roster
//   edit keeps everyone confirmed (their /confirm comments still count).
// materialChange: did a parsed form field change (vs a cosmetic edit)? A
//   material edit invalidates content approvals — the maintainer's (unless
//   re-approved) and the CNCF admin's.
function gateLabelChanges({ pass, maintainerApproved, mentorsConfirmed, materialChange, currentLabels }) {
  const has = (l) => currentLabels.includes(l);
  const add = [];
  const remove = [];

  // Validation regressed (previously passing, now failing): clear the awaiting
  // prompts (maintainer, mentor, and CNCF-admin) so nothing shows "waiting on
  // approvals" while the slash commands are gated off by the lost Validation
  // Passed. If the regression was caused by a MATERIAL edit, the content the
  // approvers signed off on changed, so the maintainer + CNCF approvals are
  // invalidated here too — exactly as on the passing path (a stale approval must
  // not survive on a now-failing proposal, where it could still be
  // /cncf-approve'd). The maintainer's approval survives only when re-granted
  // this run (proposer is a project maintainer); mentor confirmation persists
  // (participation commitment). A non-material failure leaves approvals intact.
  if (!pass) {
    for (const l of [AWAITING_MAINTAINER, AWAITING_MENTORS, AWAITING_CNCF]) if (has(l)) remove.push(l);
    if (materialChange) {
      if (has(MAINTAINER_APPROVED) && !maintainerApproved) remove.push(MAINTAINER_APPROVED);
      if (has(CNCF_APPROVED)) remove.push(CNCF_APPROVED);
    }
    return { add, remove };
  }

  // Maintainer gate: satisfied when approved this run; a material edit that
  // isn't re-approved clears it (see maintainerApproved above).
  if (maintainerApproved) {
    if (!has(MAINTAINER_APPROVED)) add.push(MAINTAINER_APPROVED);
    if (has(AWAITING_MAINTAINER)) remove.push(AWAITING_MAINTAINER);
  } else if (materialChange && has(MAINTAINER_APPROVED)) {
    remove.push(MAINTAINER_APPROVED);
    if (!has(AWAITING_MAINTAINER)) add.push(AWAITING_MAINTAINER);
  } else if (!has(MAINTAINER_APPROVED) && !has(AWAITING_MAINTAINER)) {
    add.push(AWAITING_MAINTAINER);
  }

  // Mentor gate: roster-driven. Not cleared by content edits (persisted
  // /confirm comments still count); only a roster change moves it.
  if (mentorsConfirmed) {
    if (!has(MENTORS_CONFIRMED)) add.push(MENTORS_CONFIRMED);
    if (has(AWAITING_MENTORS)) remove.push(AWAITING_MENTORS);
  } else {
    if (has(MENTORS_CONFIRMED)) remove.push(MENTORS_CONFIRMED);
    if (!has(AWAITING_MENTORS)) add.push(AWAITING_MENTORS);
  }

  // CNCF approval is valid only while both gates hold AND the approved content
  // is unchanged. A material edit, or either gate regressing, invalidates it.
  const willHaveMaintainer = (maintainerApproved || has(MAINTAINER_APPROVED)) && !remove.includes(MAINTAINER_APPROVED);
  const willHaveMentors = (mentorsConfirmed || has(MENTORS_CONFIRMED)) && !remove.includes(MENTORS_CONFIRMED);
  const bothGates = willHaveMaintainer && willHaveMentors;
  if (has(CNCF_APPROVED) && (materialChange || !bothGates)) {
    remove.push(CNCF_APPROVED);
  }
  const cncfApprovedAfter = has(CNCF_APPROVED) && !remove.includes(CNCF_APPROVED);

  // Signal the CNCF admin when both gates hold and it isn't already approved;
  // otherwise clear that signal if a gate regressed.
  if (bothGates && !cncfApprovedAfter) {
    if (!has(AWAITING_CNCF)) add.push(AWAITING_CNCF);
  } else if (has(AWAITING_CNCF)) {
    remove.push(AWAITING_CNCF);
  }

  return { add, remove };
}

module.exports = { gateLabelChanges };
