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

// ── formFieldsChanged: material (field-level) diff of two issue bodies ──
// Used to decide whether an edit is "non-trivial" (a form field changed) vs
// cosmetic (whitespace, a prepended HTML comment, a trailing newline).
const { formFieldsChanged } = require('../lib/parse');

const bodyV1 = [
  '### CNCF Project', '', 'Kubernetes', '',
  '### Program Description', '', 'Do cool things.', '',
  '### Mentors', '', 'Jane | @jane | jane@x.io | jane', '',
].join('\n');

test('formFieldsChanged: identical bodies → false', () => {
  assert.equal(formFieldsChanged(bodyV1, bodyV1), false);
});

test('formFieldsChanged: a trailing newline is not material', () => {
  assert.equal(formFieldsChanged(bodyV1, bodyV1 + '\n'), false);
});

test('formFieldsChanged: a prepended HTML comment is not material', () => {
  assert.equal(formFieldsChanged(bodyV1, '<!-- re-validate -->\n\n' + bodyV1), false);
});

test('formFieldsChanged: changing a field value is material', () => {
  const v2 = bodyV1.replace('Do cool things.', 'Do cooler things.');
  assert.equal(formFieldsChanged(bodyV1, v2), true);
});

test('formFieldsChanged: adding a mentor is material', () => {
  const v2 = bodyV1.replace(
    'Jane | @jane | jane@x.io | jane',
    'Jane | @jane | jane@x.io | jane\nBob | @bob | bob@x.io | bob',
  );
  assert.equal(formFieldsChanged(bodyV1, v2), true);
});

test('formFieldsChanged: adding a whole new field/section is material', () => {
  assert.equal(formFieldsChanged(bodyV1, bodyV1 + '\n### Technologies\n\nGo\n'), true);
});

test('formFieldsChanged: tolerates empty/undefined bodies', () => {
  assert.equal(formFieldsChanged('', ''), false);
  assert.equal(formFieldsChanged(undefined, undefined), false);
  assert.equal(formFieldsChanged('', bodyV1), true);
});

test('formFieldsChanged: removing a mentor is material', () => {
  const v2 = bodyV1.replace('\nJane | @jane | jane@x.io | jane', '');
  assert.equal(formFieldsChanged(bodyV1, v2), true);
});

test('formFieldsChanged: internal whitespace reflow/indent is not material', () => {
  const v2 = bodyV1.replace('Do cool things.', 'Do    cool\n   things.');
  assert.equal(formFieldsChanged(bodyV1, v2), false);
});

// The /lfx-url bot appends a marker-delimited "LFX program" block to the issue
// body (lib/lfx-url.js). parseIssueForm must ignore it so it never leaks into
// the last form field, and so a body that gains the block is not seen as a
// material edit (which would otherwise reset approvals).
const { upsertLfxUrlBlock } = require('../lib/lfx-url');
const A_LFX_URL = 'https://mentorship.lfx.linuxfoundation.org/project/005db8db-7efe-4433-9605-91d14174c72c';

test('parseIssueForm: ignores an appended /lfx-url block (last field not polluted)', () => {
  const body = '### CNCF Project\n\nKubernetes\n\n### Upstream Issue URL\n\nhttps://example.test/1';
  const withBlock = upsertLfxUrlBlock(body, { title: 'CNCF - Kubernetes: X (2026 Term 3)', url: A_LFX_URL });
  assert.equal(parseIssueForm(withBlock)['Upstream Issue URL'], 'https://example.test/1');
});

test('formFieldsChanged: adding the /lfx-url block is not a material edit', () => {
  const body = '### CNCF Project\n\nKubernetes\n\n### Upstream Issue URL\n\nhttps://example.test/1';
  const withBlock = upsertLfxUrlBlock(body, { title: 'CNCF - Kubernetes: X (2026 Term 3)', url: A_LFX_URL });
  assert.equal(formFieldsChanged(body, withBlock), false);
});
