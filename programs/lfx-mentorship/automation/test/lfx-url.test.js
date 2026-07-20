'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { recordedLfxUrlComment, parseRecordedLfxUrl, lfxUrlDecision } = require('../lib/lfx-url');

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

// ── lfxUrlDecision: the /lfx-url gate (§4.3.5) ──
// Same admin allowlist as /cncf-approve; requires the Exported label; and the
// argument must be an exact LFX Mentorship program URL
// (https://mentorship.lfx.linuxfoundation.org/project/<uuid>). Anything else —
// other lfx.linuxfoundation.org products, the bare host, a bad id — is rejected,
// so the board only advances on a real program URL.
const admins = ['natedoubleu', 'dkrook'];
const LFX = 'https://mentorship.lfx.linuxfoundation.org/project/005db8db-7efe-4433-9605-91d14174c72c';

test('lfxUrlDecision: non-admin is rejected', () => {
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'randomuser', admins, currentLabels: ['Exported'], arg: LFX }),
    { ok: false, reason: 'not-admin' });
});

test('lfxUrlDecision: admin match is case-insensitive', () => {
  const d = lfxUrlDecision({ commenter: 'NateDoubleU', admins, currentLabels: ['Exported'], arg: LFX });
  assert.equal(d.ok, true);
});

test('lfxUrlDecision: requires the Exported label', () => {
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: ['CNCF Approved'], arg: LFX }),
    { ok: false, reason: 'not-exported' });
});

test('lfxUrlDecision: missing URL argument', () => {
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: ['Exported'], arg: '' }),
    { ok: false, reason: 'missing-url' });
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: ['Exported'], arg: '   ' }),
    { ok: false, reason: 'missing-url' });
});

test('lfxUrlDecision: a valid LFX program URL passes', () => {
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: ['Exported'], arg: LFX }),
    { ok: true, url: LFX });
});

test('lfxUrlDecision: an uppercase-hex UUID still passes', () => {
  const upper = 'https://mentorship.lfx.linuxfoundation.org/project/005DB8DB-7EFE-4433-9605-91D14174C72C';
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: ['Exported'], arg: upper }),
    { ok: true, url: upper });
});

test('lfxUrlDecision: trims surrounding whitespace and records the URL as given', () => {
  const d = lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: ['Exported'], arg: `  ${LFX}  ` });
  assert.deepEqual(d, { ok: true, url: LFX });
});

test('lfxUrlDecision: anything that is not an exact LFX program URL is rejected', () => {
  const bad = [
    'not a url',
    'javascript:alert(1)',
    'http://mentorship.lfx.linuxfoundation.org/project/005db8db-7efe-4433-9605-91d14174c72c', // http, not https
    'https://mentorship.lfx.linuxfoundation.org',                                              // bare host, no program
    'https://mentorship.lfx.linuxfoundation.org/project/not-a-uuid',                           // malformed id
    'https://mentorship.lfx.linuxfoundation.org/program/005db8db-7efe-4433-9605-91d14174c72c', // wrong path segment
    'https://crowdfunding.lfx.linuxfoundation.org/projects/005db8db-7efe-4433-9605-91d14174c72c', // different LFX product
    'https://example.com/whatever',
    `${LFX}/`,       // trailing slash
    `${LFX}?x=1`,    // query string
    `${LFX}#frag`,   // fragment
    `${LFX}extra`,   // trailing junk
  ];
  for (const arg of bad) {
    assert.deepEqual(
      lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: ['Exported'], arg }),
      { ok: false, reason: 'invalid-url' }, arg);
  }
});
