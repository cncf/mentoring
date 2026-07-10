'use strict';

// Label bootstrap for LFX proposal issues.
//
// GitHub only applies an issue template's `labels:` when the issue author has
// triage (or higher) access. Proposals come from external project maintainers
// with read-only access, so the template's identifying labels are silently
// dropped and every label-gated proposal workflow (validate, board sync,
// approvals) skips. These helpers let the validation workflow detect a proposal
// from its title (label-independent) and add the identifying labels itself.

// Issue title prefix set by .github/ISSUE_TEMPLATE/lfx-program-proposal.yml.
const PROPOSAL_TITLE_PREFIX = '[CNCF LFX Proposal]';

// Labels every proposal must carry for the pipeline to key off. Mirrors the
// template's `labels:` minus 'Needs Validation' — the validation step manages
// that transient lifecycle label itself, so bootstrapping it would only add
// and immediately remove it in the same run.
const PROPOSAL_LABELS = ['lfx mentorship', 'Proposal'];

// True when an issue title marks it as an LFX proposal. Tolerates surrounding
// whitespace; case-sensitive to match the workflow's YAML startsWith() gate.
function isProposalTitle(title) {
  return typeof title === 'string' && title.trim().startsWith(PROPOSAL_TITLE_PREFIX);
}

// Given the labels already on an issue, return the required identifying labels
// that are missing, preserving the order of `required`. Defaults to the
// PROPOSAL_LABELS set.
function missingLabels(current, required = PROPOSAL_LABELS) {
  const have = new Set(current || []);
  return required.filter((label) => !have.has(label));
}

module.exports = {
  PROPOSAL_TITLE_PREFIX,
  PROPOSAL_LABELS,
  isProposalTitle,
  missingLabels,
};
