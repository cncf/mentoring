'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseProjectRef } = require('../lib/project-ref');

test('parseProjectRef: parses an org project URL', () => {
  assert.deepEqual(parseProjectRef('https://github.com/orgs/cncf/projects/90'),
    { owner: 'cncf', number: 90 });
});

test('parseProjectRef: parses a user project URL', () => {
  assert.deepEqual(parseProjectRef('https://github.com/users/nate-double-u/projects/7'),
    { owner: 'nate-double-u', number: 7 });
});

test('parseProjectRef: tolerates a trailing slash, view segment, or query', () => {
  assert.deepEqual(parseProjectRef('https://github.com/orgs/cncf/projects/90/'),
    { owner: 'cncf', number: 90 });
  assert.deepEqual(parseProjectRef('https://github.com/orgs/cncf/projects/90/views/1'),
    { owner: 'cncf', number: 90 });
  assert.deepEqual(parseProjectRef('https://github.com/users/nate-double-u/projects/7?pane=info'),
    { owner: 'nate-double-u', number: 7 });
});

test('parseProjectRef: rejects a non-project URL or junk', () => {
  assert.throws(() => parseProjectRef('https://github.com/cncf/mentoring'), /Project v2 URL/);
  assert.throws(() => parseProjectRef('not a url'), /Project v2 URL/);
  assert.throws(() => parseProjectRef(''), /Project v2 URL/);
});
