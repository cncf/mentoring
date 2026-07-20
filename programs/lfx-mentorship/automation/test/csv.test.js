'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseCsvLine, csvEscape, renderTrackingCsv } = require('../lib/csv');

// Columns: Maturity, Project, Name, Company, GitHub, OWNERS (handle = cols[4]).

test('parseCsvLine: a plain row splits on commas', () => {
  assert.deepEqual(
    parseCsvLine(',Kubernetes steering,Antonio Ojea,Google,aojea,https://git.k8s.io/steering#members'),
    ['', 'Kubernetes steering', 'Antonio Ojea', 'Google', 'aojea', 'https://git.k8s.io/steering#members'],
  );
});

test('parseCsvLine: a quoted comma does not shift the handle column', () => {
  const row = ',Kubernetes maintainers,Adolfo García Veytia,"Carabiner Systems, Inc",puerco,';
  assert.equal(parseCsvLine(row)[4], 'puerco');
  assert.equal(parseCsvLine(row)[1], 'Kubernetes maintainers');
  assert.equal(parseCsvLine(',,Carlos Tadeu Panato Jr.,"Chainguard, Inc",cpanato,')[4], 'cpanato');
});

test('parseCsvLine: escaped double-quotes inside a quoted field', () => {
  const moris = parseCsvLine(',,"Satoshi ""Moris"" Tagomori",,tagomoris,');
  assert.equal(moris[2], 'Satoshi "Moris" Tagomori');
  assert.equal(moris[4], 'tagomoris');
});

test('parseCsvLine: a naive split would have mislabeled the handle (regression contrast)', () => {
  const bugRow = ',Kubernetes maintainers,Adolfo García Veytia,"Carabiner Systems, Inc",puerco,';
  assert.notEqual(bugRow.split(',')[4], 'puerco');
  assert.equal(parseCsvLine(bugRow)[4], 'puerco');
});

test('csvEscape: leaves a plain value untouched', () => {
  assert.equal(csvEscape('plain'), 'plain');
});

test('csvEscape: quotes values containing comma, quote, or newline', () => {
  assert.equal(csvEscape('has,comma'), '"has,comma"');
  assert.equal(csvEscape('has "quote"'), '"has ""quote"""');
  assert.equal(csvEscape('line\nbreak'), '"line\nbreak"');
});

test('csvEscape: coerces null/undefined to empty and numbers to strings', () => {
  assert.equal(csvEscape(null), '');
  assert.equal(csvEscape(undefined), '');
  assert.equal(csvEscape(5), '5');
  assert.equal(csvEscape(0), '0');
});

// ── renderTrackingCsv: the export tracking sheet ──
// Characterizes the CSV assembly extracted from lfx-export.yml. Rows keep the
// input program order (unlike the README body, which sorts). LFX URL column is
// blank at export time (populated later by /lfx-url, §4.3.5).

const CSV_PROGRAMS = [
  {
    program_name_full: 'CNCF - Backstage: Alpha Program (2026 Term 3)',
    upstream_issue_url: 'https://github.com/cncf/mentoring/issues/1883',
    mentors: [
      { name: 'Jane Doe', github_handle: 'janedoe', email: 'jane@example.com', lfid: 'janedoe' },
      { name: 'Sam Lee', github_handle: 'samlee', email: 'sam@example.com', lfid: 'samlee' },
    ],
  },
  {
    program_name_full: 'CNCF - Argo: Beta Program (2026 Term 3)',
    upstream_issue_url: 'https://github.com/argoproj/argo/issues/1',
    mentors: [
      { name: 'Al Pha', github_handle: 'alpha', email: 'al@example.com', lfid: 'alpha' },
    ],
  },
];

const CSV_HEADER = 'PROJECT,LFX URL,Upstream issue,,mentor count,'
  + 'Mentor 1,Mentor 1 GitHub,Mentor 1 email address,Mentor 1 LFID,'
  + 'Mentor 2,Mentor 2 GitHub,Mentor 2 email address,Mentor 2 LFID,'
  + 'Mentor 3,Mentor 3 GitHub,Mentor 3 email address,Mentor 3 LFID,'
  + 'Mentor 4,Mentor 4 GitHub,Mentor 4 email address,Mentor 4 LFID';

test('renderTrackingCsv: header, input order, blank LFX URL, 4 mentor slots', () => {
  const out = renderTrackingCsv(CSV_PROGRAMS);
  const lines = out.split('\n');
  assert.equal(out.endsWith('\n'), true);
  assert.equal(lines[lines.length - 1], '');            // trailing newline
  const rows = lines.slice(0, -1);
  assert.equal(rows.length, 3);                          // header + 2 programs
  assert.equal(rows[0], CSV_HEADER);

  // Row 1 = first input program (Backstage), 2 mentors, blank LFX URL.
  const r1 = parseCsvLine(rows[1]);
  assert.equal(r1.length, 21);
  assert.equal(r1[0], 'CNCF - Backstage: Alpha Program (2026 Term 3)');
  assert.equal(r1[1], '');                               // LFX URL blank
  assert.equal(r1[2], 'https://github.com/cncf/mentoring/issues/1883');
  assert.equal(r1[3], '');                               // spacer
  assert.equal(r1[4], '2');                              // mentor count
  assert.deepEqual(r1.slice(5, 9), ['Jane Doe', 'janedoe', 'jane@example.com', 'janedoe']);
  assert.deepEqual(r1.slice(9, 13), ['Sam Lee', 'samlee', 'sam@example.com', 'samlee']);
  assert.deepEqual(r1.slice(13, 21), ['', '', '', '', '', '', '', '']); // mentors 3 & 4 empty

  // Row 2 = second input program (Argo), 1 mentor.
  const r2 = parseCsvLine(rows[2]);
  assert.equal(r2[0], 'CNCF - Argo: Beta Program (2026 Term 3)');
  assert.equal(r2[4], '1');
  assert.deepEqual(r2.slice(5, 9), ['Al Pha', 'alpha', 'al@example.com', 'alpha']);
  assert.deepEqual(r2.slice(9, 21), ['', '', '', '', '', '', '', '', '', '', '', '']);
});

test('renderTrackingCsv: a recorded lfx_url fills the LFX URL column', () => {
  const withUrl = [{ ...CSV_PROGRAMS[0], lfx_url: 'https://mentorship.lfx.linuxfoundation.org/p/1' }];
  const r1 = parseCsvLine(renderTrackingCsv(withUrl).split('\n')[1]);
  assert.equal(r1[1], 'https://mentorship.lfx.linuxfoundation.org/p/1');
});
