'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { isValidISODate, parseISO } = require('../lib/dates');

test('isValidISODate: accepts real YYYY-MM-DD dates', () => {
  assert.equal(isValidISODate('2026-07-01'), true);
  assert.equal(isValidISODate('2026-11-27'), true);
  assert.equal(isValidISODate('2028-02-29'), true); // leap day
});

test('isValidISODate: rejects wrong shape, non-strings, and impossible dates', () => {
  assert.equal(isValidISODate('not-a-date'), false);
  assert.equal(isValidISODate('2026-7-1'), false); // unpadded
  assert.equal(isValidISODate('2026-13-40'), false); // out of range
  assert.equal(isValidISODate('2026-02-30'), false); // impossible calendar date
  assert.equal(isValidISODate('2026-04-31'), false); // April has 30 days
  assert.equal(isValidISODate(20260701), false); // not a string
  assert.equal(isValidISODate(null), false);
});

test('parseISO: parses a valid date to a UTC Date', () => {
  const d = parseISO('2026-07-01');
  assert.equal(d.getUTCFullYear(), 2026);
  assert.equal(d.getUTCMonth(), 6); // July is month 6
  assert.equal(d.getUTCDate(), 1);
});

test('parseISO: throws on unparseable input', () => {
  assert.throws(() => parseISO('not-a-date'), /Invalid date/);
});

test('parseISO: rejects impossible calendar dates instead of rolling them forward', () => {
  assert.throws(() => parseISO('2026-02-30'), /Invalid date/);
  assert.throws(() => parseISO('2026-13-01'), /Invalid date/);
});
