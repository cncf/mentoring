'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { lookupProject } = require('../lib/projects');

// Fixture modeled on real programs/lfx-mentorship/automation/projects.yml
// entries: a .project adopter, a non-adopter, a paren-in-name project directly
// followed by a name it must not bleed into, and a mixed-case org.
const YAML = `# Auto-generated from cncf/landscape — DO NOT EDIT MANUALLY.
- name: Aeraki Mesh
  slug: aerakimesh
  maturity: sandbox
  repo_url: https://github.com/aeraki-mesh/aeraki
  has_dot_project: true
- name: Agones
  slug: agones
  maturity: sandbox
  repo_url: https://github.com/agones-dev/agones
- name: Open Policy Agent (OPA)
  slug: openpolicyagent
  maturity: graduated
  repo_url: https://github.com/open-policy-agent/opa
- name: Open Policy Containers
  slug: openpolicycontainers
  maturity: sandbox
  repo_url: https://github.com/open-policy-containers/opcr
- name: WasmEdge Runtime
  slug: wasmedge-runtime
  maturity: sandbox
  repo_url: https://github.com/WasmEdge/WasmEdge
`;

test('lookupProject: returns slug, org, maturity, hasDotProject for a .project adopter', () => {
  assert.deepEqual(lookupProject(YAML, 'Aeraki Mesh'), {
    slug: 'aerakimesh', org: 'aeraki-mesh', maturity: 'sandbox', hasDotProject: true,
  });
});

test('lookupProject: extracts maturity (raw) for the named project', () => {
  assert.equal(lookupProject(YAML, 'Open Policy Agent (OPA)').maturity, 'graduated');
  assert.equal(lookupProject(YAML, 'Agones').maturity, 'sandbox');
});

test('lookupProject: hasDotProject is false when the field is absent', () => {
  const info = lookupProject(YAML, 'Agones');
  assert.equal(info.hasDotProject, false);
  assert.equal(info.org, 'agones-dev');
  assert.equal(info.slug, 'agones');
});

test('lookupProject: preserves a mixed-case org verbatim (no lowercasing)', () => {
  // approvals uses org raw for the .project URL; it must not be lowercased here.
  assert.equal(lookupProject(YAML, 'WasmEdge Runtime').org, 'WasmEdge');
});

test('lookupProject: escapes regex-special characters in the name', () => {
  const info = lookupProject(YAML, 'Open Policy Agent (OPA)');
  assert.equal(info.slug, 'openpolicyagent');
  assert.equal(info.org, 'open-policy-agent');
});

test('lookupProject: a name does not bleed into the following entry', () => {
  // "Open Policy Agent (OPA)" is immediately followed by "Open Policy
  // Containers"; the block must stop at the next entry.
  assert.equal(lookupProject(YAML, 'Open Policy Agent (OPA)').slug, 'openpolicyagent');
});

test('lookupProject: a name that is only a prefix of an entry does not match', () => {
  assert.equal(lookupProject(YAML, 'Open Policy'), null);
});

test('lookupProject: an org-only repo_url (no repo path) yields an empty org', () => {
  // Preserves the prior approvals behavior; real example: CoHDI.
  const orgOnly = `- name: CoHDI
  slug: cohdi
  repo_url: https://github.com/CoHDI
`;
  const info = lookupProject(orgOnly, 'CoHDI');
  assert.equal(info.slug, 'cohdi');
  assert.equal(info.org, '');
});

test('lookupProject: returns null for an unknown project', () => {
  assert.equal(lookupProject(YAML, 'Nonexistent Project'), null);
});

test('lookupProject: returns null for an empty or missing name', () => {
  assert.equal(lookupProject(YAML, ''), null);
  assert.equal(lookupProject(YAML, undefined), null);
});
