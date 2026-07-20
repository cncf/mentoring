'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { termPaths } = require('../lib/term-paths');

test('termPaths: standard term string', () => {
  assert.deepEqual(termPaths('2026 Term 3 (Sep-Nov)'), {
    year: '2026',
    termNum: '03',
    months: 'Sep-Nov',
    termDir: '03-Sep-Nov',
    outDir: 'programs/lfx-mentorship/2026/03-Sep-Nov',
  });
});

test('termPaths: normalizes en/em dashes in the months to hyphens', () => {
  assert.equal(termPaths('2026 Term 2 (Jun\u2013Aug)').termDir, '02-Jun-Aug');
  assert.equal(termPaths('2026 Term 2 (Jun\u2014Aug)').months, 'Jun-Aug');
});

test('termPaths: malformed term falls back to safe placeholders', () => {
  assert.deepEqual(termPaths('garbage'), {
    year: 'unknown',
    termNum: '00',
    months: 'unknown',
    termDir: '00-unknown',
    outDir: 'programs/lfx-mentorship/unknown/00-unknown',
  });
});
