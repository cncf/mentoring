'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  getGlobalApprovers,
  getProjectSection,
  getFallbackHandles,
  getFallbackTeams,
  maintainersCanApprove,
  projectKeys,
} = require('../lib/approvers');

// Fixture mirrors the real approvers.yml shape: a global_approvers list plus
// per-project sections keyed by GitHub org, with fallback_teams and an optional
// commented fallback_handles entry.
const YAML = `# comment header
global_approvers:
  - nate-double-u
  - dkrook
  - Swil78

kubernetes:
  fallback_teams:
    - kubernetes/sig-contribex

open-telemetry:
  fallback_teams:
    - open-telemetry/governance-committee
  fallback_handles:
    - maryliag    # GC liaison for mentorship
`;

test('getGlobalApprovers: returns all handles, lowercased', () => {
  assert.deepEqual(getGlobalApprovers(YAML), ['nate-double-u', 'dkrook', 'swil78']);
});

test('getGlobalApprovers: returns [] when the key is absent', () => {
  assert.deepEqual(getGlobalApprovers('kubernetes:\n  fallback_handles:\n    - x\n'), []);
});

test('getProjectSection: returns the block for the first matching key', () => {
  const section = getProjectSection(YAML, ['nope', 'kubernetes']);
  assert.match(section, /fallback_teams:/);
  assert.match(section, /kubernetes\/sig-contribex/);
  // Must stop before the next top-level key.
  assert.doesNotMatch(section, /open-telemetry/);
});

test('getProjectSection: key matching is case-insensitive', () => {
  assert.match(getProjectSection(YAML, ['KUBERNETES']), /sig-contribex/);
});

test('getProjectSection: a key that is only a prefix does not match', () => {
  // "open" must not match "open-telemetry:".
  assert.equal(getProjectSection(YAML, ['open']), '');
});

test('getProjectSection: returns empty string when no key matches', () => {
  assert.equal(getProjectSection(YAML, ['does-not-exist']), '');
  assert.equal(getProjectSection(YAML, []), '');
});

test('getFallbackHandles: lowercased, ignoring trailing comments', () => {
  const section = getProjectSection(YAML, ['open-telemetry']);
  assert.deepEqual(getFallbackHandles(section), ['maryliag']);
});

test('getFallbackHandles: returns [] for a section without fallback_handles', () => {
  const section = getProjectSection(YAML, ['kubernetes']);
  assert.deepEqual(getFallbackHandles(section), []);
});

test('getFallbackTeams: returns raw org/team strings with case preserved', () => {
  assert.deepEqual(
    getFallbackTeams(getProjectSection(YAML, ['kubernetes'])),
    ['kubernetes/sig-contribex'],
  );
  assert.deepEqual(
    getFallbackTeams(getProjectSection(YAML, ['open-telemetry'])),
    ['open-telemetry/governance-committee'],
  );
});

test('getFallbackTeams: returns [] for a section without fallback_teams', () => {
  assert.deepEqual(getFallbackTeams('fallback_handles:\n    - someone\n'), []);
});

// ── maintainersCanApprove: the per-project "exclusive approvers" flag ─────────
// Default true = the additive model (project maintainers + fallbacks + global
// approvers can /approve). A project sets `maintainers_can_approve: false` to
// make its fallback_handles/fallback_teams (+ global_approvers) the EXCLUSIVE
// approver set, so its individual maintainers cannot /approve (e.g. Kubernetes
// routes approvals through SIG ContribEx, not per-maintainer).

test('maintainersCanApprove: false when the section sets it false', () => {
  assert.equal(maintainersCanApprove('  maintainers_can_approve: false\n  fallback_handles:\n    - a\n'), false);
});

test('maintainersCanApprove: true when the section sets it true', () => {
  assert.equal(maintainersCanApprove('  maintainers_can_approve: true\n'), true);
});

test('maintainersCanApprove: defaults to true when the key is absent', () => {
  assert.equal(maintainersCanApprove('  fallback_teams:\n    - a/b\n'), true);
});

test('maintainersCanApprove: defaults to true for an empty or nullish section', () => {
  assert.equal(maintainersCanApprove(''), true);
  assert.equal(maintainersCanApprove(null), true);
  assert.equal(maintainersCanApprove(undefined), true);
});

test('maintainersCanApprove: value is case-insensitive', () => {
  assert.equal(maintainersCanApprove('  maintainers_can_approve: False\n'), false);
});

test('maintainersCanApprove: a commented flag line is ignored (stays default true)', () => {
  assert.equal(maintainersCanApprove('  # maintainers_can_approve: false\n  fallback_handles:\n    - a\n'), true);
});

// ── projectKeys: the approvers.yml/quotas.yml lookup keys for a project ───────
// A project section may be keyed by its name (lowercased, spaces to hyphens),
// its GitHub org (lowercased), or its projects.yml slug; the lookup tries each.

test('projectKeys: dedupes name-hyphenated, org, and slug (first-match order)', () => {
  assert.deepEqual(
    projectKeys({ project: 'Open Telemetry', org: 'open-telemetry', slug: 'otel' }),
    ['open-telemetry', 'otel'],
  );
});

test('projectKeys: collapses to one when name, org, and slug coincide', () => {
  assert.deepEqual(
    projectKeys({ project: 'Kubernetes', org: 'kubernetes', slug: 'kubernetes' }),
    ['kubernetes'],
  );
});

test('projectKeys: lowercases and hyphenates the project name', () => {
  assert.deepEqual(projectKeys({ project: 'Cloud Custodian' }), ['cloud-custodian']);
});

test('projectKeys: drops falsy keys', () => {
  assert.deepEqual(projectKeys({ project: '', org: 'foo', slug: undefined }), ['foo']);
});

test('projectKeys: empty array when no identity is given', () => {
  assert.deepEqual(projectKeys({}), []);
  assert.deepEqual(projectKeys(), []);
});

// ── Guard: the real approvers.yml resolves to the intended policy per project.
// Ties the pure helpers to the actual data, so a typo, wrong key, or a dropped
// kubernetes flag fails here (the exclusive-approver behavior can't be fully
// exercised in e2e without a non-global maintainer identity).
const fs = require('node:fs');
const path = require('node:path');
const REAL_APPROVERS = fs.readFileSync(path.join(__dirname, '..', 'approvers.yml'), 'utf8');
const resolveMaintainersOk = (ids) =>
  maintainersCanApprove(getProjectSection(REAL_APPROVERS, projectKeys(ids)));

test('real approvers.yml: Kubernetes restricts approvals to its listed approvers', () => {
  assert.equal(
    resolveMaintainersOk({ project: 'Kubernetes', org: 'kubernetes', slug: 'kubernetes' }),
    false,
  );
});

test('real approvers.yml: OpenTelemetry keeps the additive model', () => {
  assert.equal(
    resolveMaintainersOk({ project: 'OpenTelemetry', org: 'open-telemetry', slug: 'open-telemetry' }),
    true,
  );
});

test('real approvers.yml: an unlisted project keeps the additive model (default)', () => {
  assert.equal(
    resolveMaintainersOk({ project: 'Some Project', org: 'some-org', slug: 'some-slug' }),
    true,
  );
});
