'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { recordedLfxUrlComment, parseRecordedLfxUrl, lfxUrlDecision, findExportedProgram } = require('../lib/lfx-url');

const bot = (body) => ({ user: { login: 'github-actions[bot]' }, body });
const user = (login, body) => ({ user: { login }, body });

// Realistic LFX Mentorship program URLs — the exact shape /lfx-url enforces.
const LFX = 'https://mentorship.lfx.linuxfoundation.org/project/005db8db-7efe-4433-9605-91d14174c72c';
const LFX2 = 'https://mentorship.lfx.linuxfoundation.org/project/0071e2ff-f538-4817-978b-07b267cfcd6a';

test('recordedLfxUrlComment: canonical phrasing the parser reads back', () => {
  assert.equal(
    recordedLfxUrlComment('nate-double-u', LFX),
    `LFX URL recorded from @nate-double-u: ${LFX}`
  );
  // A leading @ on the user is normalized away.
  assert.equal(
    recordedLfxUrlComment('@nate', LFX2),
    `LFX URL recorded from @nate: ${LFX2}`
  );
});

test('parseRecordedLfxUrl: round-trips a recorded comment', () => {
  const comments = [bot(recordedLfxUrlComment('nate', LFX))];
  assert.equal(parseRecordedLfxUrl(comments), LFX);
});

test('parseRecordedLfxUrl: matches even with a leading emoji/prefix', () => {
  assert.equal(parseRecordedLfxUrl([bot('✅ ' + recordedLfxUrlComment('nate', LFX))]), LFX);
});

test('parseRecordedLfxUrl: latest recorded URL wins (a correction supersedes)', () => {
  const comments = [
    bot(recordedLfxUrlComment('nate', LFX)),
    user('someone', 'chatter'),
    bot(recordedLfxUrlComment('nate', LFX2)),
  ];
  assert.equal(parseRecordedLfxUrl(comments), LFX2);
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

test('lfxUrlDecision: a closed issue is rejected (reopen first)', () => {
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: ['Exported'], arg: LFX, closed: true }),
    { ok: false, reason: 'issue-closed' });
});

test('lfxUrlDecision: auth is checked before the closed state', () => {
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'randomuser', admins, currentLabels: ['Exported'], arg: LFX, closed: true }),
    { ok: false, reason: 'not-admin' });
});

test('lfxUrlDecision: closed is reported before not-exported', () => {
  assert.deepEqual(
    lfxUrlDecision({ commenter: 'natedoubleu', admins, currentLabels: [], arg: LFX, closed: true }),
    { ok: false, reason: 'issue-closed' });
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

// ── findExportedProgram: the "export merged to main" guard (§4.3.5, option C) ──
test('findExportedProgram: returns the matching program by issue number', () => {
  const data = { programs: [{ issue_number: 114, cncf_project: 'A' }, { issue_number: 115, cncf_project: 'B' }] };
  assert.equal(findExportedProgram(data, 115).cncf_project, 'B');
});

test('findExportedProgram: null when the program is not in the export', () => {
  const data = { programs: [{ issue_number: 114 }] };
  assert.equal(findExportedProgram(data, 115), null);
});

test('findExportedProgram: null when the export data is missing or malformed', () => {
  // Models lfx-export.json not being on main yet (export PR unmerged).
  assert.equal(findExportedProgram(null, 115), null);
  assert.equal(findExportedProgram(undefined, 115), null);
  assert.equal(findExportedProgram({}, 115), null);
  assert.equal(findExportedProgram({ programs: 'nope' }, 115), null);
});
