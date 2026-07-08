'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { addTermToDropdown, listedTerms } = require('../lib/terms-file');

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

test('listedTerms: returns the current entries, unquoted, in order', () => {
  assert.deepEqual(listedTerms(SAMPLE), ['2026 Term 3 (Sep-Nov)']);
  const grown = addTermToDropdown(SAMPLE, '2027 Term 1 (Mar-May)');
  assert.deepEqual(listedTerms(grown), ['2027 Term 1 (Mar-May)', '2026 Term 3 (Sep-Nov)']);
});
