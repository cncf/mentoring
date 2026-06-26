'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../lib/slug');

test('slugify: lowercases a single word', () => {
  assert.equal(slugify('OpenTelemetry'), 'opentelemetry');
});

test('slugify: spaces become single hyphens', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('slugify: punctuation is dropped', () => {
  assert.equal(slugify('Foo: Bar!'), 'foo-bar');
});

test('slugify: runs of hyphens collapse to one', () => {
  assert.equal(slugify('a---b'), 'a-b');
});

test('slugify: underscores are preserved (word characters)', () => {
  assert.equal(slugify('Underscore_keep'), 'underscore_keep');
});

// Characterization of two known quirks of the current implementation (not
// fixed here): surrounding whitespace becomes leading/trailing hyphens, and
// non-ASCII letters are stripped. Documented so a future deliberate change is
// an obvious diff.
test('slugify: surrounding whitespace becomes hyphens (current quirk)', () => {
  assert.equal(slugify('  pad  '), '-pad-');
});

test('slugify: non-ASCII letters are stripped (current quirk)', () => {
  assert.equal(slugify('Café'), 'caf');
});
