'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseIssueForm, parseCheckboxes, parseMentors } = require('../lib/parse');

test('parseIssueForm: splits ### sections into a label->value map', () => {
  const body = [
    '### CNCF Project', '', 'Kubernetes', '',
    '### Program Description', '', 'Do cool things.', '',
  ].join('\n');
  assert.deepEqual(parseIssueForm(body), {
    'CNCF Project': 'Kubernetes',
    'Program Description': 'Do cool things.',
  });
});

test('parseIssueForm: _No response_ becomes empty string', () => {
  const body = '### Skills same as Technologies?\n\n_No response_';
  assert.equal(parseIssueForm(body)['Skills same as Technologies?'], '');
});

test('parseIssueForm: a heading with no following newline is skipped', () => {
  assert.deepEqual(parseIssueForm('### Solo'), {});
});

test('parseIssueForm: values are trimmed', () => {
  assert.equal(parseIssueForm('### A\n\n   spaced   ')['A'], 'spaced');
});

test('parseCheckboxes: keeps only checked items, stripping the box', () => {
  const raw = '- [x] Resume\n- [ ] Cover letter\n- [X] Sample PR\nnot a checkbox';
  assert.deepEqual(parseCheckboxes(raw), ['Resume', 'Sample PR']);
});

test('parseCheckboxes: empty input yields empty array', () => {
  assert.deepEqual(parseCheckboxes(''), []);
});

test('parseMentors: a 4-field line yields lfid and strips @', () => {
  assert.deepEqual(
    parseMentors('Jane Doe | @janedoe | jane@example.com | janedoe'),
    [{ name: 'Jane Doe', github_handle: 'janedoe', email: 'jane@example.com', lfid: 'janedoe', role: 'primary' }],
  );
});

test('parseMentors: roles are assigned primary then co-mentor', () => {
  const roles = parseMentors(
    'Jane Doe | @janedoe | jane@example.com | janedoe\n' +
    'Sam Lee | @samlee | sam@example.com | samlee',
  ).map(m => m.role);
  assert.deepEqual(roles, ['primary', 'co-mentor']);
});

test('parseMentors: a 3-field line is kept with empty lfid (LFID optional)', () => {
  assert.deepEqual(
    parseMentors('Jane Doe | @janedoe | jane@example.com'),
    [{ name: 'Jane Doe', github_handle: 'janedoe', email: 'jane@example.com', lfid: '', role: 'primary' }],
  );
});

test('parseMentors: lines with 2 or 5 fields are dropped', () => {
  assert.deepEqual(parseMentors('Jane Doe | @janedoe'), []);
  assert.deepEqual(parseMentors('Jane | @j | j@x.com | jlfid | extra'), []);
});

test('parseMentors: lfid is captured distinct from the github handle', () => {
  assert.equal(parseMentors('A B | @abhandle | a@b.com | a-b-lfid')[0].lfid, 'a-b-lfid');
});

test('parseMentors: empty input yields empty array', () => {
  assert.deepEqual(parseMentors(''), []);
});
