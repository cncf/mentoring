'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseCsvLine, csvEscape } = require('../lib/csv');

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
