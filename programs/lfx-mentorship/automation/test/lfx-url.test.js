'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { recordedLfxUrlComment, parseRecordedLfxUrl } = require('../lib/lfx-url');

const bot = (body) => ({ user: { login: 'github-actions[bot]' }, body });
const user = (login, body) => ({ user: { login }, body });

test('recordedLfxUrlComment: canonical phrasing the parser reads back', () => {
  assert.equal(
    recordedLfxUrlComment('nate-double-u', 'https://mentorship.lfx.linuxfoundation.org/program/abc'),
    'LFX URL recorded from @nate-double-u: https://mentorship.lfx.linuxfoundation.org/program/abc'
  );
  // A leading @ on the user is normalized away.
  assert.equal(
    recordedLfxUrlComment('@nate', 'https://x/y'),
    'LFX URL recorded from @nate: https://x/y'
  );
});

test('parseRecordedLfxUrl: round-trips a recorded comment', () => {
  const url = 'https://mentorship.lfx.linuxfoundation.org/program/abc';
  const comments = [bot(recordedLfxUrlComment('nate', url))];
  assert.equal(parseRecordedLfxUrl(comments), url);
});

test('parseRecordedLfxUrl: matches even with a leading emoji/prefix', () => {
  const url = 'https://mentorship.lfx.linuxfoundation.org/p/1';
  assert.equal(parseRecordedLfxUrl([bot('✅ ' + recordedLfxUrlComment('nate', url))]), url);
});

test('parseRecordedLfxUrl: latest recorded URL wins (a correction supersedes)', () => {
  const comments = [
    bot(recordedLfxUrlComment('nate', 'https://mentorship.lfx.linuxfoundation.org/old')),
    user('someone', 'chatter'),
    bot(recordedLfxUrlComment('nate', 'https://mentorship.lfx.linuxfoundation.org/new')),
  ];
  assert.equal(parseRecordedLfxUrl(comments), 'https://mentorship.lfx.linuxfoundation.org/new');
});

test('parseRecordedLfxUrl: ignores non-bot comments (anti-spoof)', () => {
  const spoof = user('imposter', recordedLfxUrlComment('imposter', 'https://evil.example/x'));
  assert.equal(parseRecordedLfxUrl([spoof]), '');
});

test('parseRecordedLfxUrl: empty / none → empty string', () => {
  assert.equal(parseRecordedLfxUrl([]), '');
  assert.equal(parseRecordedLfxUrl(null), '');
  assert.equal(parseRecordedLfxUrl([bot('no url here')]), '');
});
