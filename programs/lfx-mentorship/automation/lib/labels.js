'use strict';

// Label bootstrap for LFX proposal issues.
//
// GitHub only applies an issue template's `labels:` when the issue author has
// triage (or higher) access. Proposals come from external project maintainers
// with read-only access, so the template's identifying labels are silently
// dropped and every label-gated proposal workflow (validate, board sync,
// approvals) skips. These helpers let the validation workflow detect a proposal
// from its title (label-independent) and add the identifying labels itself.

const { parseIssueForm } = require('./parse');

// Issue title prefix set by .github/ISSUE_TEMPLATE/lfx-program-proposal.yml.
const PROPOSAL_TITLE_PREFIX = '[CNCF LFX Proposal]';

// Labels every proposal must carry for the pipeline to key off. Mirrors the
// template's `labels:` minus 'Needs Validation' — the validation step manages
// that transient lifecycle label itself, so bootstrapping it would only add
// and immediately remove it in the same run.
const PROPOSAL_LABELS = ['lfx mentorship', 'Proposal'];

// Core headings the proposal issue form always emits (as "### <label>"; see
// lib/parse.js parseIssueForm). Used to tell a genuine template submission from
// an arbitrary issue that merely borrows the title prefix.
const PROPOSAL_FORM_HEADINGS = ['CNCF Project', 'Term', 'Program Description', 'Mentors'];

// True when an issue title marks it as an LFX proposal. Case-sensitive and
// untrimmed on purpose: it is the precise, authoritative check the workflow
// steps use, matching the exact prefix the template emits. The YAML job gate's
// startsWith() is looser (case-insensitive) but only acts as a cheap
// pre-filter — these step-level helpers are what actually gate labelling.
function isProposalTitle(title) {
  return typeof title === 'string' && title.startsWith(PROPOSAL_TITLE_PREFIX);
}

// True when an issue body carries every required proposal-form heading. A magic
// title alone must not let any author apply the identifying labels (which
// unlock the token-bearing downstream workflows), so the bootstrap also
// requires the body to look like a real template submission. Detection reuses
// parseIssueForm, so a heading only counts in the same start-of-line "### "
// shape the rest of the pipeline relies on — not a substring mid-line or in a
// code block.
function looksLikeProposalForm(body, required = PROPOSAL_FORM_HEADINGS) {
  if (typeof body !== 'string' || !body) return false;
  const fields = parseIssueForm(body);
  return required.every((heading) => Object.prototype.hasOwnProperty.call(fields, heading));
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
  PROPOSAL_FORM_HEADINGS,
  isProposalTitle,
  looksLikeProposalForm,
  missingLabels,
};
