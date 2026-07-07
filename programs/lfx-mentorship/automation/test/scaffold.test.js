'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  fmtShort,
  fmtLong,
  dateCell,
  renderTimeline,
  buildTermReadme,
  PROJECT_IDEAS_NOTICE,
} = require('../lib/scaffold');
const { termIdentity } = require('../lib/term');

const EN_DASH = '\u2013';

test('fmtShort: ISO date -> "Ddd, Mon D" (UTC, no leading zero)', () => {
  assert.equal(fmtShort('2026-07-01'), 'Wed, Jul 1');
  assert.equal(fmtShort('2026-09-07'), 'Mon, Sep 7');
  assert.equal(fmtShort('2026-11-27'), 'Fri, Nov 27');
});

test('fmtLong: ISO date -> "Month D, YYYY"', () => {
  assert.equal(fmtLong('2026-07-28'), 'July 28, 2026');
  assert.equal(fmtLong('2026-11-27'), 'November 27, 2026');
});

test('dateCell: single date, range, time and note compose predictably', () => {
  assert.equal(dateCell({ start: '2026-09-07' }), 'Mon, Sep 7');
  assert.equal(
    dateCell({ start: '2026-07-01', end: '2026-07-28' }),
    `Wed, Jul 1 ${EN_DASH} Tue, Jul 28`,
  );
  assert.equal(
    dateCell({ start: '2026-07-01', end: '2026-07-28', time: '18:00 UTC' }),
    `Wed, Jul 1 ${EN_DASH} Tue, Jul 28, 18:00 UTC`,
  );
  assert.equal(
    dateCell({ start: '2026-09-02', end: '2026-09-04', note: '*(notifications may take a few days)*' }),
    `Wed, Sep 2 ${EN_DASH} Fri, Sep 4 *(notifications may take a few days)*`,
  );
});

test('renderTimeline: builds the ### Timeline block with a year-stamped header', () => {
  const schedule = [
    { key: 'proposals_open', label: 'Project Proposals Open', start: '2026-07-01', end: '2026-07-28', time: '18:00 UTC' },
    { key: 'term_start', label: 'Mentorship Program Begins', start: '2026-09-07' },
    { key: 'term_end', label: 'Last Day of Term', start: '2026-11-27' },
  ];
  const out = renderTimeline(schedule, 2026);
  assert.match(out, /^### Timeline\n/);
  assert.match(out, /\| Activity \| Dates \(2026\) \|/);
  assert.match(out, /\| Project Proposals Open \| Wed, Jul 1 \u2013 Tue, Jul 28, 18:00 UTC \|/);
  assert.match(out, /\| Mentorship Program Begins \| Mon, Sep 7 \|/);
  assert.match(out, /\| Last Day of Term \| Fri, Nov 27 \|/);
});

const SCHEDULE = [
  { key: 'proposals_open', label: 'Project Proposals Open', start: '2026-07-01', end: '2026-07-28', time: '18:00 UTC' },
  { key: 'applications_open', label: 'Mentee Applications Open', start: '2026-08-03', end: '2026-08-18', time: '18:00 UTC' },
  { key: 'term_start', label: 'Mentorship Program Begins', start: '2026-09-07' },
  { key: 'term_end', label: 'Last Day of Term', start: '2026-11-27' },
];

test('renderTimeline: entries flagged timeline:false are omitted (board-only anchors)', () => {
  const schedule = [
    { key: 'term_start', label: 'Mentorship Program Begins', start: '2026-09-07' },
    { key: 'work_period', label: 'Work period', start: '2026-09-07', end: '2026-11-27', timeline: false },
    { key: 'term_end', label: 'Last Day of Term', start: '2026-11-27' },
  ];
  const out = renderTimeline(schedule, 2026);
  assert.match(out, /\| Mentorship Program Begins \|/);
  assert.match(out, /\| Last Day of Term \|/);
  assert.doesNotMatch(out, /Work period/);
});

test('buildTermReadme: frontmatter has title, Planning status, timeline and instructions', () => {
  const identity = termIdentity({ year: 2026, number: 3 });
  const out = buildTermReadme({ identity, schedule: SCHEDULE });
  assert.ok(out.startsWith('# Term 03 - 2026 September - November\n'));
  assert.match(out, /\nStatus: Planning\n/);
  assert.match(out, /Mentorship duration - three months \(full-time schedule\)/);
  assert.match(out, /### Timeline/);
  assert.match(out, /### Project instructions/);
  assert.match(out, /### Application instructions/);
});

test('buildTermReadme: proposal deadline is the proposals_open END date (no drift)', () => {
  const identity = termIdentity({ year: 2026, number: 3 });
  const out = buildTermReadme({ identity, schedule: SCHEDULE });
  assert.match(out, /by July 28, 2026\./);
  // instructions link to the canonical repo, never a fork
  assert.match(out, /cncf\/mentoring\/issues\/new\?template=lfx-program-proposal\.yml/);
});

test('buildTermReadme: output is entirely frontmatter (export buildReadme compatible)', () => {
  const identity = termIdentity({ year: 2026, number: 3 });
  const out = buildTermReadme({ identity, schedule: SCHEDULE });
  // ends with the horizontal rule that the export path preserves
  assert.match(out, /\n---\n$/);
  // exactly one --- rule, and it is the last line
  assert.equal((out.match(/^---[ \t]*$/gm) || []).length, 1);
});

test('PROJECT_IDEAS_NOTICE: points contributors to the issue form', () => {
  assert.match(PROJECT_IDEAS_NOTICE, /Project proposals have moved/);
  assert.match(PROJECT_IDEAS_NOTICE, /lfx-program-proposal\.yml/);
  assert.ok(PROJECT_IDEAS_NOTICE.endsWith('\n'));
});
