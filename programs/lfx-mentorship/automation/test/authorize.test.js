'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  resolveProjectMaintainer,
  DOT_PROJECT_URL,
  CSV_URL,
} = require('../lib/authorize');

// ── Fixtures mirroring the real rosters ───────────────────────────────
const dotProjectYaml = `maintainers:
  - project_id: "apicurio-registry"
    org: "Apicurio"
    teams:
      - name: "project-maintainers"
        members:
          - EricWittmann
          - carlesarnal
`;

// CSV: grouped — Project column set only on a group's first row.
// Columns: Maturity,Project,Name,Company,GitHub,OWNERS
const csv = `Maturity,Project,Name,Company,GitHub,OWNERS
sandbox,Foobar,Alice Example,Acme,aliceh,
,,Bob Example,Acme,bobh,
graduated,Kubernetes,Carol,Acme,carolh,
`;

// A fetch stub: maps URL -> { ok, status, text }. Records calls.
function makeFetch(routes) {
  const calls = [];
  const fetchFn = async (url) => {
    calls.push(url);
    const r = routes[url];
    if (!r) return { ok: false, status: 404, text: async () => '' };
    if (r.throw) throw new Error('network boom');
    return { ok: r.ok !== false, status: r.status || 200, text: async () => r.body || '' };
  };
  fetchFn.calls = calls;
  return fetchFn;
}

const APICURIO = { org: 'Apicurio', hasDotProject: true, project: 'Apicurio Registry' };

// ── URL builders ──────────────────────────────────────────────────────
test('DOT_PROJECT_URL / CSV_URL match the raw.githubusercontent paths', () => {
  assert.equal(DOT_PROJECT_URL('Apicurio'), 'https://raw.githubusercontent.com/Apicurio/.project/main/maintainers.yaml');
  assert.equal(CSV_URL, 'https://raw.githubusercontent.com/cncf/foundation/main/project-maintainers.csv');
});

// ── Tier 1: .project/maintainers.yaml ─────────────────────────────────
test('tier-1 authorizes a project-maintainers team member', async () => {
  const fetchFn = makeFetch({ [DOT_PROJECT_URL('Apicurio')]: { body: dotProjectYaml } });
  const r = await resolveProjectMaintainer({ handle: 'carlesarnal', ...APICURIO, fetchFn });
  assert.deepEqual(r, { authorized: true, source: 'Apicurio/.project/maintainers.yaml' });
  // Tier-2 not consulted once tier-1 authorizes.
  assert.deepEqual(fetchFn.calls, [DOT_PROJECT_URL('Apicurio')]);
});

test('tier-1 is skipped when hasDotProject is false (goes to CSV)', async () => {
  const fetchFn = makeFetch({ [CSV_URL]: { body: csv } });
  const r = await resolveProjectMaintainer({ handle: 'aliceh', project: 'Foobar', org: 'Foobar', hasDotProject: false, fetchFn });
  assert.equal(r.authorized, true);
  assert.equal(r.source, 'project-maintainers.csv (Foobar)');
  assert.deepEqual(fetchFn.calls, [CSV_URL]); // never fetched .project
});

test('tier-1 is skipped when org is empty', async () => {
  const fetchFn = makeFetch({ [CSV_URL]: { body: csv } });
  const r = await resolveProjectMaintainer({ handle: 'aliceh', project: 'Foobar', org: '', hasDotProject: true, fetchFn });
  assert.equal(r.authorized, true);
  assert.deepEqual(fetchFn.calls, [CSV_URL]);
});

// ── Tier 1 miss → Tier 2 fallback ─────────────────────────────────────
test('tier-1 present but handle not on team → falls through to CSV', async () => {
  const fetchFn = makeFetch({
    [DOT_PROJECT_URL('Apicurio')]: { body: dotProjectYaml },
    [CSV_URL]: { body: csv },
  });
  // handle only in CSV (as "aliceh" under Foobar), not in the .project team
  const r = await resolveProjectMaintainer({ handle: 'aliceh', org: 'Apicurio', hasDotProject: true, project: 'Foobar', fetchFn });
  assert.equal(r.authorized, true);
  assert.equal(r.source, 'project-maintainers.csv (Foobar)');
  assert.deepEqual(fetchFn.calls, [DOT_PROJECT_URL('Apicurio'), CSV_URL]);
});

test('tier-1 fetch 404 → falls through to CSV', async () => {
  const fetchFn = makeFetch({
    [DOT_PROJECT_URL('Apicurio')]: { ok: false, status: 404 },
    [CSV_URL]: { body: csv },
  });
  const r = await resolveProjectMaintainer({ handle: 'bobh', ...APICURIO, project: 'Foobar', fetchFn });
  assert.equal(r.authorized, true);
  assert.equal(r.source, 'project-maintainers.csv (Foobar)'); // forward-filled group
});

test('tier-1 fetch throwing is caught → falls through to CSV', async () => {
  const logs = [];
  const fetchFn = makeFetch({
    [DOT_PROJECT_URL('Apicurio')]: { throw: true },
    [CSV_URL]: { body: csv },
  });
  const r = await resolveProjectMaintainer({ handle: 'aliceh', ...APICURIO, project: 'Foobar', fetchFn, log: (m) => logs.push(m) });
  assert.equal(r.authorized, true);
  assert.ok(logs.some((m) => /check failed/i.test(m)));
});

// ── Negative cases ────────────────────────────────────────────────────
test('neither tier authorizes → not authorized, empty source', async () => {
  const fetchFn = makeFetch({
    [DOT_PROJECT_URL('Apicurio')]: { body: dotProjectYaml },
    [CSV_URL]: { body: csv },
  });
  const r = await resolveProjectMaintainer({ handle: 'nobody', ...APICURIO, fetchFn });
  assert.deepEqual(r, { authorized: false, source: '' });
});

test('empty handle → not authorized, no fetches', async () => {
  const fetchFn = makeFetch({});
  const r = await resolveProjectMaintainer({ handle: '', ...APICURIO, fetchFn });
  assert.deepEqual(r, { authorized: false, source: '' });
  assert.deepEqual(fetchFn.calls, []);
});

test('tier-2 not consulted when project is empty', async () => {
  const fetchFn = makeFetch({ [DOT_PROJECT_URL('Apicurio')]: { body: dotProjectYaml } });
  const r = await resolveProjectMaintainer({ handle: 'nobody', org: 'Apicurio', hasDotProject: true, project: '', fetchFn });
  assert.equal(r.authorized, false);
  assert.deepEqual(fetchFn.calls, [DOT_PROJECT_URL('Apicurio')]); // no CSV fetch
});

test('handle match is case-insensitive and tolerates a leading @', async () => {
  const fetchFn = makeFetch({ [DOT_PROJECT_URL('Apicurio')]: { body: dotProjectYaml } });
  const r = await resolveProjectMaintainer({ handle: '@CarlesArnal', ...APICURIO, fetchFn });
  assert.equal(r.authorized, true);
});
