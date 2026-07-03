'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { INCLUSIVE_COMMUNITY, standardPrerequisites } = require('../lib/prerequisites');

// The exact, admin-provided LFC102 description (cncf/mentoring#1866). Kept
// verbatim on purpose: this test fails loudly if the copy is ever paraphrased.
const VERBATIM_DESCRIPTION =
  'Please upload the completion certificate for the Inclusive Open Source ' +
  'Community Orientation (LFC102) course: ' +
  'https://training.linuxfoundation.org/training/inclusive-open-source-community-orientation-lfc102/\n\n' +
  'Once completed you can find the certificate in your openprofile.dev ' +
  'dashboard under Training & Certifications -> Certificates of Completion.';

test('INCLUSIVE_COMMUNITY: name is the verbatim LFX prerequisite name', () => {
  assert.equal(INCLUSIVE_COMMUNITY.name, 'Inclusive Community');
});

test('INCLUSIVE_COMMUNITY: name fits the LFX 20-character limit', () => {
  assert.ok(INCLUSIVE_COMMUNITY.name.length <= 20);
});

test('INCLUSIVE_COMMUNITY: description is the verbatim LFC102 copy with URL inline', () => {
  assert.equal(INCLUSIVE_COMMUNITY.description, VERBATIM_DESCRIPTION);
});

test('INCLUSIVE_COMMUNITY: requires a file upload', () => {
  assert.equal(INCLUSIVE_COMMUNITY.file_upload, true);
});

test('INCLUSIVE_COMMUNITY: exposes only the fields LFX can store', () => {
  // LFX prerequisites have exactly four fields: name, due date, description,
  // and a file-upload flag. The due date is term-wide (stamped at upload), so
  // it is intentionally absent here; the course URL lives inside description.
  assert.deepEqual(
    Object.keys(INCLUSIVE_COMMUNITY).sort(),
    ['description', 'file_upload', 'name'],
  );
});

test('standardPrerequisites: returns Inclusive Community as the only standing prereq', () => {
  const prereqs = standardPrerequisites();
  assert.equal(prereqs.length, 1);
  assert.equal(prereqs[0].name, 'Inclusive Community');
});

test('standardPrerequisites: returns fresh copies, not the shared constant', () => {
  const first = standardPrerequisites();
  first[0].name = 'MUTATED';
  assert.equal(INCLUSIVE_COMMUNITY.name, 'Inclusive Community');
  assert.equal(standardPrerequisites()[0].name, 'Inclusive Community');
});
