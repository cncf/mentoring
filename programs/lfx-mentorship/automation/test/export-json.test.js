'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { serializeExport, ignoreGenerated } = require('../lib/export-json');

// Build an export file's text the same way the workflow does.
const mk = (generated, programs) =>
  JSON.stringify(
    { _generated: generated, _term: '2026 Term 3 (Sep-Nov)', _count: programs.length, programs },
    null,
    2,
  ) + '\n';

const P1 = [{ issue_number: 1, lfx_url: '' }];
const P2 = [{ issue_number: 1, lfx_url: '' }, { issue_number: 2, lfx_url: '' }];

test('serializeExport: returns a fresh body when there is no existing file', () => {
  const data = { _generated: 'NOW', _term: 'T', _count: 0, programs: [] };
  assert.equal(serializeExport(data, null), JSON.stringify(data, null, 2) + '\n');
});

test('serializeExport: preserves the existing file (and its timestamp) when only _generated differs', () => {
  const existing = mk('2026-01-01T00:00:00.000Z', P1);
  const data = { _generated: '2026-09-09T09:09:09.999Z', _term: '2026 Term 3 (Sep-Nov)', _count: 1, programs: P1 };
  // Byte-identical to the existing file, so git sees no change and no PR opens.
  assert.equal(serializeExport(data, existing), existing);
});

test('serializeExport: returns a fresh body (new timestamp) when the content changes', () => {
  const existing = mk('2026-01-01T00:00:00.000Z', P1);
  const data = { _generated: '2026-09-09T09:09:09.999Z', _term: '2026 Term 3 (Sep-Nov)', _count: 2, programs: P2 };
  const out = serializeExport(data, existing);
  assert.equal(out, JSON.stringify(data, null, 2) + '\n');
  assert.notEqual(ignoreGenerated(out), ignoreGenerated(existing));
});

test('ignoreGenerated: strips the _generated line so content-equal exports match', () => {
  assert.equal(ignoreGenerated(mk('A', P1)), ignoreGenerated(mk('B', P1)));
  assert.notEqual(ignoreGenerated(mk('A', P1)), ignoreGenerated(mk('A', P2)));
});

// ── changedExportPrograms: new-or-changed programs vs the main baseline ──────
// The export regenerates the whole term every run, but the PR body/title and
// the "included in export" notification should reference only what THIS run
// adds or changes vs the export already on main, mirroring the /lfx-url
// batch-list fix (#1949). Compares each program's full serialization keyed by
// issue_number.
const { changedExportPrograms } = require('../lib/export-json');

const prog = (n, over = {}) => ({ issue_number: n, program_name_full: `P${n}`, description: `d${n}`, lfx_url: '', ...over });
const data = (...programs) => ({ _generated: 'NOW', _term: 'T', _count: programs.length, programs });

test('changedExportPrograms: null/malformed baseline treats every program as changed', () => {
  const after = data(prog(1), prog(2));
  assert.deepEqual(changedExportPrograms(null, after).map(p => p.issue_number), [1, 2]);
  assert.deepEqual(changedExportPrograms({}, after).map(p => p.issue_number), [1, 2]);
});

test('changedExportPrograms: an unchanged re-export yields no changed programs', () => {
  const before = data(prog(1), prog(2));
  const after = data(prog(1), prog(2));
  assert.deepEqual(changedExportPrograms(before, after), []);
});

test('changedExportPrograms: only newly-added issues are returned', () => {
  const before = data(prog(1), prog(2));
  const after = data(prog(1), prog(2), prog(3));
  assert.deepEqual(changedExportPrograms(before, after).map(p => p.issue_number), [3]);
});

test('changedExportPrograms: a content-changed program is returned', () => {
  const before = data(prog(1), prog(2));
  const after = data(prog(1), prog(2, { description: 'edited' }));
  assert.deepEqual(changedExportPrograms(before, after).map(p => p.issue_number), [2]);
});

test('changedExportPrograms: returns new + changed, not unchanged, order preserved', () => {
  const before = data(prog(1), prog(2), prog(3));
  const after = data(prog(1), prog(2, { lfx_url: 'x' }), prog(3), prog(4));
  assert.deepEqual(changedExportPrograms(before, after).map(p => p.issue_number), [2, 4]);
});

test('changedExportPrograms: comparison is independent of baseline ordering', () => {
  const before = data(prog(2), prog(1));
  const after = data(prog(1), prog(2), prog(3));
  assert.deepEqual(changedExportPrograms(before, after).map(p => p.issue_number), [3]);
});

test('changedExportPrograms: guards a missing/!array after programs list', () => {
  assert.deepEqual(changedExportPrograms(data(prog(1)), null), []);
  assert.deepEqual(changedExportPrograms(data(prog(1)), {}), []);
});
