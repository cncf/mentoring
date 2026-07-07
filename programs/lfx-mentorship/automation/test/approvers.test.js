'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  getGlobalApprovers,
  getProjectSection,
  getFallbackHandles,
  getFallbackTeams,
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
