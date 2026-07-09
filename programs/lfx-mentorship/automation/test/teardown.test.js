'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { assertTeardownAllowed, PROD_REPO } = require('../lib/teardown');

test('assertTeardownAllowed: refuses the production repo outright', () => {
  assert.throws(() => assertTeardownAllowed('cncf/mentoring'), /production|cncf\/mentoring/i);
  assert.equal(PROD_REPO, 'cncf/mentoring');
});

test('assertTeardownAllowed: is case-insensitive on the prod repo', () => {
  assert.throws(() => assertTeardownAllowed('CNCF/Mentoring'), /production|cncf\/mentoring/i);
});

test('assertTeardownAllowed: allows a dev fork', () => {
  assert.doesNotThrow(() => assertTeardownAllowed('nate-double-u/mentoring'));
  assert.doesNotThrow(() => assertTeardownAllowed('someone/mentoring'));
});

test('assertTeardownAllowed: rejects a missing repo', () => {
  assert.throws(() => assertTeardownAllowed(''), /repo/i);
  assert.throws(() => assertTeardownAllowed(undefined), /repo/i);
});
