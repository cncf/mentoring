'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { termIdentity } = require('../lib/term');

test('termIdentity: derives every per-term string for Term 3', () => {
  const t = termIdentity({ year: 2026, number: 3 });
  assert.equal(t.year, 2026);
  assert.equal(t.number, 3);
  assert.equal(t.folder, '03-Sep-Nov');
  assert.equal(t.title, 'Term 03 - 2026 September - November');
  assert.equal(t.label, 'Term 3: Sept-Nov');
  assert.equal(t.yearLabel, '2026');
  assert.equal(t.issuePrefix, '[LFX 2026 T3]');
  assert.equal(t.dir, 'programs/lfx-mentorship/2026/03-Sep-Nov');
});

test('termIdentity: Term 1 and Term 2 match the existing folders and labels', () => {
  const t1 = termIdentity({ year: 2026, number: 1 });
  assert.equal(t1.folder, '01-Mar-May');
  assert.equal(t1.title, 'Term 01 - 2026 March - May');
  assert.equal(t1.label, 'Term 1: March-May');
  assert.equal(t1.issuePrefix, '[LFX 2026 T1]');

  const t2 = termIdentity({ year: 2026, number: 2 });
  assert.equal(t2.folder, '02-Jun-Aug');
  assert.equal(t2.title, 'Term 02 - 2026 June - August');
  assert.equal(t2.label, 'Term 2: June-Aug');
});

test('termIdentity: a different year flows through folder, title, prefix and label', () => {
  const t = termIdentity({ year: 2027, number: 1 });
  assert.equal(t.dir, 'programs/lfx-mentorship/2027/01-Mar-May');
  assert.equal(t.title, 'Term 01 - 2027 March - May');
  assert.equal(t.yearLabel, '2027');
  assert.equal(t.issuePrefix, '[LFX 2027 T1]');
});

test('termIdentity: accepts numeric strings for year and number', () => {
  const t = termIdentity({ year: '2026', number: '3' });
  assert.equal(t.folder, '03-Sep-Nov');
  assert.equal(t.year, 2026);
  assert.equal(t.number, 3);
});

test('termIdentity: dropdownLabel matches the terms.yml dropdown format', () => {
  assert.equal(termIdentity({ year: 2026, number: 3 }).dropdownLabel, '2026 Term 3 (Sep-Nov)');
  assert.equal(termIdentity({ year: 2027, number: 1 }).dropdownLabel, '2027 Term 1 (Mar-May)');
  assert.equal(termIdentity({ year: 2027, number: 2 }).dropdownLabel, '2027 Term 2 (Jun-Aug)');
});

test('termIdentity: rejects an unknown term number', () => {
  assert.throws(() => termIdentity({ year: 2026, number: 4 }), /term number/i);
  assert.throws(() => termIdentity({ year: 2026, number: 0 }), /term number/i);
});

test('termIdentity: rejects a missing or invalid year', () => {
  assert.throws(() => termIdentity({ number: 1 }), /year/i);
  assert.throws(() => termIdentity({ year: 'nope', number: 1 }), /year/i);
});
