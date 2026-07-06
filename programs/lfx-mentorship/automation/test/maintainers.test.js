'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { findMaintainerInCsv } = require('../lib/maintainers');

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
