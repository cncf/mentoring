'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { addTermToDropdown, listedTerms, unknownTermMessage } = require('../lib/terms-file');

const SAMPLE = `# Active terms for LFX Mentorship proposals.
#
# This is the single source of truth for the term dropdown.

terms:
  - "2026 Term 3 (Sep-Nov)"
`;

test('addTermToDropdown: inserts the new term as the first list item', () => {
  const out = addTermToDropdown(SAMPLE, '2027 Term 1 (Mar-May)');
  const lines = out.split('\n');
  const i = lines.indexOf('terms:');
  assert.equal(lines[i + 1], '  - "2027 Term 1 (Mar-May)"');
  assert.equal(lines[i + 2], '  - "2026 Term 3 (Sep-Nov)"');
});

test('addTermToDropdown: is idempotent when the term is already listed', () => {
  assert.equal(addTermToDropdown(SAMPLE, '2026 Term 3 (Sep-Nov)'), SAMPLE);
});

test('addTermToDropdown: preserves the comment header verbatim', () => {
  const out = addTermToDropdown(SAMPLE, '2027 Term 1 (Mar-May)');
  assert.match(out, /^# Active terms for LFX Mentorship proposals\.\n/);
  assert.match(out, /single source of truth/);
});

test('addTermToDropdown: throws when there is no terms: key', () => {
  assert.throws(() => addTermToDropdown('nope: true\n', '2027 Term 1 (Mar-May)'), /terms:/);
});

test('addTermToDropdown: returns a string on both paths, even given a Buffer', () => {
  const buf = Buffer.from(SAMPLE);
  assert.equal(typeof addTermToDropdown(buf, '2027 Term 1 (Mar-May)'), 'string'); // modified path
  assert.equal(typeof addTermToDropdown(buf, '2026 Term 3 (Sep-Nov)'), 'string'); // idempotent path
});

test('listedTerms: returns the current entries, unquoted, in order', () => {
  assert.deepEqual(listedTerms(SAMPLE), ['2026 Term 3 (Sep-Nov)']);
  const grown = addTermToDropdown(SAMPLE, '2027 Term 1 (Mar-May)');
  assert.deepEqual(listedTerms(grown), ['2027 Term 1 (Mar-May)', '2026 Term 3 (Sep-Nov)']);
});

// ── unknownTermMessage ──
// Backs the export workflow's free-text term input: the term dropdown used to
// be hardcoded in lfx-export.yml, which the landscape sync could never update
// (GITHUB_TOKEN pushes may not touch workflow files), so the input is now
// validated here against terms.yml at run time.

test('unknownTermMessage: null for an active term', () => {
  assert.equal(unknownTermMessage(SAMPLE, '2026 Term 3 (Sep-Nov)'), null);
});

test('unknownTermMessage: names the bad term and lists the active ones', () => {
  const grown = addTermToDropdown(SAMPLE, '2027 Term 1 (Mar-May)');
  const msg = unknownTermMessage(grown, '2026 Term 3');
  assert.match(msg, /Unknown term "2026 Term 3"/);
  assert.match(msg, /"2027 Term 1 \(Mar-May\)"/);
  assert.match(msg, /"2026 Term 3 \(Sep-Nov\)"/);
});

test('unknownTermMessage: exact match only — no trimming or case folding', () => {
  assert.notEqual(unknownTermMessage(SAMPLE, ' 2026 Term 3 (Sep-Nov)'), null);
  assert.notEqual(unknownTermMessage(SAMPLE, '2026 term 3 (sep-nov)'), null);
});

test('unknownTermMessage: says so when terms.yml lists nothing', () => {
  const msg = unknownTermMessage('terms:\n', '2026 Term 3 (Sep-Nov)');
  assert.match(msg, /no active terms/);
});
