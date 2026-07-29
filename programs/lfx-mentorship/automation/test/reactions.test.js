'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { replyReaction } = require('../lib/reactions');

test('replyReaction maps a success reply to a thumbs up', () => {
  assert.equal(replyReaction('✅'), '+1');
});

test('replyReaction maps a failure reply to a thumbs down', () => {
  assert.equal(replyReaction('❌'), '-1');
});

test('replyReaction adds no reaction for an informational reply', () => {
  assert.equal(replyReaction('ℹ️'), null);
});

test('replyReaction never returns confused for ANY input', () => {
  // Reacting with a confused face to someone using a command (e.g. a mentor
  // confirming participation) is discouraging; the bot must never do it.
  for (const e of ['✅', '❌', 'ℹ️', '🎯', '🎉', '', ' ', undefined, null, 42]) {
    assert.notEqual(replyReaction(e), 'confused');
  }
});
