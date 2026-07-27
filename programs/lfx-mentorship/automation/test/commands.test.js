'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseCommands } = require('../lib/commands');

// parseCommands scans an issue-comment body for slash commands, one per line,
// and returns them as ordered { command, arg } objects. It backs the LFX
// proposal approvals workflow, which executes each command in turn, so a
// single comment can carry e.g. `/confirm` and `/approve` and have both act
// (cncf/mentoring#1977, #1978, where only the first was processed).

test('parseCommands: a single command with no argument', () => {
  assert.deepEqual(parseCommands('/approve'), [{ command: 'approve', arg: '' }]);
});

test('parseCommands: multiple commands are returned in document order', () => {
  assert.deepEqual(
    parseCommands('/confirm\n/approve'),
    [{ command: 'confirm', arg: '' }, { command: 'approve', arg: '' }],
  );
});

test('parseCommands: a command may appear on any line, not just the first', () => {
  assert.deepEqual(
    parseCommands('thanks all, looks good\n\n/approve'),
    [{ command: 'approve', arg: '' }],
  );
});

test('parseCommands: /lfx-url keeps its (trimmed) URL argument', () => {
  assert.deepEqual(
    parseCommands('/lfx-url   https://mentorship.lfx.linuxfoundation.org/project/abc  '),
    [{ command: 'lfx-url', arg: 'https://mentorship.lfx.linuxfoundation.org/project/abc' }],
  );
});

test('parseCommands: cncf-approve is not misparsed as approve', () => {
  assert.deepEqual(parseCommands('/cncf-approve'), [{ command: 'cncf-approve', arg: '' }]);
});

test('parseCommands: duplicate commands are de-duped, keeping the first occurrence', () => {
  assert.deepEqual(parseCommands('/approve\n/approve'), [{ command: 'approve', arg: '' }]);
  // First occurrence's argument wins.
  assert.deepEqual(
    parseCommands('/lfx-url https://a\n/lfx-url https://b'),
    [{ command: 'lfx-url', arg: 'https://a' }],
  );
});

test('parseCommands: a realistic three-command comment, in order', () => {
  assert.deepEqual(
    parseCommands('/confirm\n/approve\n/cncf-approve'),
    [
      { command: 'confirm', arg: '' },
      { command: 'approve', arg: '' },
      { command: 'cncf-approve', arg: '' },
    ],
  );
});

test('parseCommands: no command yields an empty array', () => {
  assert.deepEqual(parseCommands('just a normal comment, no commands here'), []);
  assert.deepEqual(parseCommands(''), []);
  assert.deepEqual(parseCommands(null), []);
  assert.deepEqual(parseCommands(undefined), []);
});

test('parseCommands: a slash command mid-sentence does not match (must lead its line)', () => {
  assert.deepEqual(parseCommands('please /approve this'), []);
});

test('parseCommands: a longer word starting with a command name does not match', () => {
  // The command must be followed by whitespace or end-of-line, so neither a
  // word-char continuation (/approved) nor a hyphenated token (/approve-now)
  // reads as the command.
  assert.deepEqual(parseCommands('/approved'), []);
  assert.deepEqual(parseCommands('/approve-now'), []);
  assert.deepEqual(parseCommands('/confirm-please'), []);
  assert.deepEqual(parseCommands('/cncf-approve-x'), []);
});

test('parseCommands: leading whitespace on the line is tolerated', () => {
  assert.deepEqual(parseCommands('   /approve'), [{ command: 'approve', arg: '' }]);
});

test('parseCommands: CRLF line endings are handled', () => {
  assert.deepEqual(
    parseCommands('/confirm\r\n/approve\r\n'),
    [{ command: 'confirm', arg: '' }, { command: 'approve', arg: '' }],
  );
});
