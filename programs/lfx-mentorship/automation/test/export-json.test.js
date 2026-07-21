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
