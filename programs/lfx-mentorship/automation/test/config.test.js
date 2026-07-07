'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateConfig } = require('../lib/config');

function validRaw() {
  return {
    term: { year: 2026, number: 3 },
    schedule: [
      { key: 'proposals_open', label: 'Project Proposals Open', start: '2026-07-01', end: '2026-07-28', time: '18:00 UTC' },
      { key: 'term_start', label: 'Mentorship Program Begins', start: '2026-09-07' },
      { key: 'term_end', label: 'Last Day of Term', start: '2026-11-27' },
    ],
  };
}

test('validateConfig: accepts a well-formed config and returns term + schedule', () => {
  const cfg = validateConfig(validRaw());
  assert.equal(cfg.term.number, 3);
  assert.equal(cfg.schedule.length, 3);
});

test('validateConfig: tolerates extra fields (project, repo) for later phases', () => {
  const raw = validRaw();
  raw.project = 91;
  raw.repo = 'nate-double-u/mentoring';
  assert.doesNotThrow(() => validateConfig(raw));
});

test('validateConfig: rejects a missing term', () => {
  const raw = validRaw();
  delete raw.term;
  assert.throws(() => validateConfig(raw), /term/i);
});

test('validateConfig: rejects an invalid term number via termIdentity', () => {
  const raw = validRaw();
  raw.term.number = 9;
  assert.throws(() => validateConfig(raw), /term number/i);
});

test('validateConfig: rejects a missing or empty schedule', () => {
  const noSched = validRaw();
  delete noSched.schedule;
  assert.throws(() => validateConfig(noSched), /schedule/i);

  const empty = validRaw();
  empty.schedule = [];
  assert.throws(() => validateConfig(empty), /schedule/i);
});

test('validateConfig: rejects a schedule entry missing key, label or start', () => {
  const noStart = validRaw();
  delete noStart.schedule[1].start;
  assert.throws(() => validateConfig(noStart), /start/i);

  const noLabel = validRaw();
  delete noLabel.schedule[1].label;
  assert.throws(() => validateConfig(noLabel), /label/i);

  const noKey = validRaw();
  delete noKey.schedule[1].key;
  assert.throws(() => validateConfig(noKey), /key/i);
});

test('validateConfig: rejects a malformed date', () => {
  const raw = validRaw();
  raw.schedule[1].start = '2026-13-40';
  assert.throws(() => validateConfig(raw), /date/i);
  const raw2 = validRaw();
  raw2.schedule[0].end = 'not-a-date';
  assert.throws(() => validateConfig(raw2), /date/i);
});

test('validateConfig: rejects duplicate schedule keys', () => {
  const raw = validRaw();
  raw.schedule[2].key = 'term_start';
  assert.throws(() => validateConfig(raw), /duplicate/i);
});

test('validateConfig: requires a proposals_open entry (README deadline depends on it)', () => {
  const raw = validRaw();
  raw.schedule[0].key = 'something_else';
  assert.throws(() => validateConfig(raw), /proposals_open/i);
});
