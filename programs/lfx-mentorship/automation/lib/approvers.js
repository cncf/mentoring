'use strict';

// Parsing helpers for approvers.yml (the LFX proposal fallback-approver file),
// used by the /approve and /cncf-approve authorization checks in
// lfx-proposal-approvals.yml. Extracted verbatim from that workflow so the
// parsing is defined once, de-duplicated (global_approvers was parsed in two
// places), and unit-tested (cncf/mentoring#1908 follow-up). Behavior is
// unchanged; a later change may switch to a real YAML parser (js-yaml is
// already available in that workflow).

// global_approvers: lowercased handles that may /approve any project, and the
// /cncf-approve admin allowlist.
function getGlobalApprovers(raw) {
  const block = String(raw).match(/global_approvers:\s*\n((?:\s+-\s+\S+.*\n?)*)/);
  if (!block) return [];
  return [...block[1].matchAll(/-\s+(\S+)/g)].map((m) => m[1].toLowerCase());
}

// The indented block for the first matching project key, or '' if none match.
// Keys are tried in order; key matching is case-insensitive.
function getProjectSection(raw, keys) {
  const text = String(raw);
  for (const key of keys || []) {
    if (!key) continue;
    const re = new RegExp(`^${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:`, 'im');
    const parts = text.split(re);
    if (parts.length > 1) {
      return parts[1].split(/^\S/m)[0];
    }
  }
  return '';
}

// fallback_handles within a project section: lowercased handles.
function getFallbackHandles(section) {
  const block = String(section).match(/fallback_handles:\s*\n((?:\s+-\s+\S+.*\n?)*)/);
  if (!block) return [];
  return [...block[1].matchAll(/-\s+(\S+)/g)].map((m) => m[1].toLowerCase());
}

// fallback_teams within a project section: raw "org/team" strings (case kept,
// since GitHub team slugs are matched by the API downstream).
function getFallbackTeams(section) {
  const block = String(section).match(/fallback_teams:\s*\n((?:\s+-\s+\S+.*\n?)*)/);
  if (!block) return [];
  return [...block[1].matchAll(/-\s+(\S+)/g)].map((m) => m[1]);
}

module.exports = {
  getGlobalApprovers,
  getProjectSection,
  getFallbackHandles,
  getFallbackTeams,
};
