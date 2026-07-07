'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { findMaintainerInCsv, isProjectMaintainer } = require('../lib/maintainers');

// Mirrors the grouped shape of cncf/foundation/project-maintainers.csv:
// Maturity and Project are set only on each group's first row; continuation
// rows leave them blank. Columns: Maturity,Project,Name,Company,GitHub,OWNERS.
const CSV = [
  'Maturity,Project,Name,Company,GitHub,OWNERS',
  'Graduated,Knative,Ali Ok,Red Hat,aliok,https://github.com/knative/community/blob/main/MAINTAINERS.md',
  ',,Calum Murray,Red Hat,Cali0707,',
  ',,Chris Suszynski,Red Hat,cardil,',
  'Graduated,Kubernetes,Someone Steering,Google,steersperson,https://git.k8s.io/steering#members',
  ',Kubernetes maintainers,Adolfo García Veytia,"Carabiner Systems, Inc",puerco,',
  ',,Carlos Tadeu Panato Jr.,"Chainguard, Inc",cpanato,',
].join('\n');

test('authorizes a project group-header maintainer', () => {
  const hit = findMaintainerInCsv(CSV, 'Knative', 'aliok');
  assert.equal(hit.authorized, true);
  assert.equal(hit.project, 'Knative');
});

test('authorizes a continuation-row maintainer (regression, #1908)', () => {
  // These rows leave the Project column blank; they must inherit "Knative".
  assert.equal(findMaintainerInCsv(CSV, 'Knative', 'Cali0707').authorized, true);
  assert.equal(findMaintainerInCsv(CSV, 'Knative', 'cardil').authorized, true);
});

test('authorizes a subgroup-header maintainer with a quoted-comma company', () => {
  // "Kubernetes maintainers" contains "kubernetes"; the quoted company must
  // not shift the handle out of column 4.
  assert.equal(findMaintainerInCsv(CSV, 'Kubernetes', 'puerco').authorized, true);
});

test('authorizes a continuation row under a subgroup (regression, #1908)', () => {
  const hit = findMaintainerInCsv(CSV, 'Kubernetes', 'cpanato');
  assert.equal(hit.authorized, true);
  assert.equal(hit.project, 'Kubernetes maintainers');
});

test('matching is case-insensitive on handle and project', () => {
  assert.equal(findMaintainerInCsv(CSV, 'Knative', 'ALIOK').authorized, true);
  assert.equal(findMaintainerInCsv(CSV, 'knative', 'Cali0707').authorized, true);
});

test('rejects a handle absent from the CSV', () => {
  assert.equal(findMaintainerInCsv(CSV, 'Knative', 'nobody').authorized, false);
});

test('does not leak a maintainer across group boundaries', () => {
  // Forward-fill must reset at each new group header.
  assert.equal(findMaintainerInCsv(CSV, 'Kubernetes', 'Cali0707').authorized, false);
  assert.equal(findMaintainerInCsv(CSV, 'Knative', 'cpanato').authorized, false);
});

test('rejects on blank project or handle', () => {
  assert.equal(findMaintainerInCsv(CSV, '', 'aliok').authorized, false);
  assert.equal(findMaintainerInCsv(CSV, 'Knative', '').authorized, false);
});

// ── isProjectMaintainer: tier-1 {org}/.project/maintainers.yaml ──────────
// CHARACTERIZATION tests. These lock in the behavior of the hand-rolled
// scanner exactly as it shipped inline, so the extraction is proven
// behavior-preserving. Where a test documents a known limitation it says so;
// those are deliberately NOT "fixed" here (that's a separate behavior change).

// Canonical schema (cncf/automation dot-project util): bare-scalar members.
const CANONICAL = `maintainers:
  - project_id: "cert-manager"
    org: "cert-manager"
    teams:
      - name: "project-maintainers"
        members:
          - munnerz
          - joshvanl
          - SgtCoDFish
`;

test('isProjectMaintainer: authorizes a listed member (canonical schema)', () => {
  assert.equal(isProjectMaintainer(CANONICAL, 'joshvanl'), true);
});

test('isProjectMaintainer: rejects a non-member', () => {
  assert.equal(isProjectMaintainer(CANONICAL, 'stranger'), false);
});

test('isProjectMaintainer: strips a leading @ and is case-insensitive', () => {
  assert.equal(isProjectMaintainer(CANONICAL, '@Munnerz'), true);
  assert.equal(isProjectMaintainer(CANONICAL, 'MUNNERZ'), true);
});

test('isProjectMaintainer: handles a quoted/unquoted team name alike', () => {
  const unquoted = CANONICAL.replace('"project-maintainers"', 'project-maintainers');
  assert.equal(isProjectMaintainer(unquoted, 'munnerz'), true);
});

test('isProjectMaintainer: a team listed BEFORE project-maintainers is excluded', () => {
  const before = `maintainers:
  - org: "acme"
    teams:
      - name: "reviewers"
        members:
          - bob
      - name: "project-maintainers"
        members:
          - alice
`;
  assert.equal(isProjectMaintainer(before, 'alice'), true);
  assert.equal(isProjectMaintainer(before, 'bob'), false);
});

test('isProjectMaintainer: LIMITATION — a team listed AFTER project-maintainers is over-authorized', () => {
  // Once armed at project-maintainers, the reset never fires: a following
  // `- name: "reviewers"` line is swallowed as a bogus member (`name:`), so
  // inMaintainersTeam is never cleared and the next `members:` re-arms the
  // scanner. Every following team's members are wrongly authorized. This is
  // the scanner's actual behavior today, surfaced by characterization, not
  // desired behavior.
  const after = `maintainers:
  - org: "acme"
    teams:
      - name: "project-maintainers"
        members:
          - alice
      - name: "reviewers"
        members:
          - bob
`;
  assert.equal(isProjectMaintainer(after, 'alice'), true);
  assert.equal(isProjectMaintainer(after, 'bob'), true); // over-auth (bug)
});

test('isProjectMaintainer: LIMITATION — mapping-style members are NOT matched', () => {
  // Members written as `- name: foo` (rather than bare `- foo`) are missed by
  // the scanner. Documented current behavior, not desired behavior.
  const mappingStyle = `maintainers:
  - org: "acme"
    teams:
      - name: "project-maintainers"
        members:
          - name: alice
          - name: bob
`;
  assert.equal(isProjectMaintainer(mappingStyle, 'alice'), false);
});

test('isProjectMaintainer: LIMITATION — prefix over-match treats *-emeritus as project-maintainers', () => {
  // The team-name test is a prefix match, so an emeritus team is wrongly
  // treated as the maintainers team. Documented current behavior.
  const emeritus = `maintainers:
  - org: "acme"
    teams:
      - name: "project-maintainers-emeritus"
        members:
          - retiree
`;
  assert.equal(isProjectMaintainer(emeritus, 'retiree'), true);
});

test('isProjectMaintainer: rejects empty/whitespace handle', () => {
  assert.equal(isProjectMaintainer(CANONICAL, ''), false);
  assert.equal(isProjectMaintainer(CANONICAL, '   '), false);
});
