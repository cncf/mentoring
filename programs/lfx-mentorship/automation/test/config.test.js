'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateConfig, parseConfig } = require('../lib/config');

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

test('validateConfig: rejects a schedule entry missing key or label', () => {
  const noLabel = validRaw();
  delete noLabel.schedule[1].label;
  assert.throws(() => validateConfig(noLabel), /label/i);

  const noKey = validRaw();
  delete noKey.schedule[1].key;
  assert.throws(() => validateConfig(noKey), /key/i);
});

test('validateConfig: start is required only for proposals_open (others may be TBD)', () => {
  const noAnchorDate = validRaw();
  delete noAnchorDate.schedule[0].start; // proposals_open
  delete noAnchorDate.schedule[0].end;
  assert.throws(() => validateConfig(noAnchorDate), /proposals_open/i);

  const tbd = validRaw();
  delete tbd.schedule[1].start; // a not-yet-scheduled activity is fine
  assert.doesNotThrow(() => validateConfig(tbd));
});

test('validateConfig: rejects an end date with no start', () => {
  const raw = validRaw();
  delete raw.schedule[1].start;
  raw.schedule[1].end = '2026-09-10';
  assert.throws(() => validateConfig(raw), /end/i);
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

test('validateConfig: rejects a schedule entry whose end date precedes its start', () => {
  const raw = validRaw();
  raw.schedule[0].start = '2026-07-28';
  raw.schedule[0].end = '2026-07-01';
  assert.throws(() => validateConfig(raw), /before start date/i);
});

test('validateConfig: requires a proposals_open entry (README deadline depends on it)', () => {
  const raw = validRaw();
  raw.schedule[0].key = 'something_else';
  assert.throws(() => validateConfig(raw), /proposals_open/i);
});

// ── parseConfig: text + extension → config object ────────────────────────
// YAML is parsed with CORE_SCHEMA so unquoted ISO dates stay strings (the
// default schema would coerce 2026-07-01 to a Date and break validation).

test('parseConfig: parses YAML and keeps unquoted dates as strings', () => {
  const yml = [
    'term:',
    '  year: 2026',
    '  number: 3',
    'schedule:',
    '  - key: proposals_open',
    '    label: Project Proposals Open',
    '    start: 2026-07-01',
    '    end: 2026-07-28',
  ].join('\n');
  const cfg = parseConfig(yml, '.yml');
  assert.equal(cfg.term.number, 3);
  assert.equal(typeof cfg.schedule[0].start, 'string');
  assert.equal(cfg.schedule[0].start, '2026-07-01');
  assert.doesNotThrow(() => validateConfig(cfg));
});

test('parseConfig: accepts .yaml as well as .yml', () => {
  assert.equal(parseConfig('term:\n  year: 2027\n  number: 1', '.yaml').term.year, 2027);
});

test('parseConfig: is case-insensitive on the extension', () => {
  assert.equal(parseConfig('term:\n  number: 1', '.YML').term.number, 1);
});

test('parseConfig: parses JSON', () => {
  const cfg = parseConfig('{"term":{"year":2026,"number":2},"schedule":[]}', '.json');
  assert.equal(cfg.term.number, 2);
});

test('parseConfig: rejects an unsupported extension', () => {
  assert.throws(() => parseConfig('x: 1', '.txt'), /yml|yaml|json/i);
});

test('parseConfig: surfaces malformed YAML as an error', () => {
  assert.throws(() => parseConfig('term: [unclosed', '.yml'));
});
