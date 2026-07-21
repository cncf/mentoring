'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  recordedLfxUrlComment, parseRecordedLfxUrl, lfxUrlDecision, findExportedProgram,
  exportTermLabel, readExports, locateExportedProgram, termMismatchWarning,
} = require('../lib/lfx-url');

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

// ── readExports / locateExportedProgram: content discovery across terms (#1938) ──
// Fake fs: `dirs` maps a directory path to its entry names; `files` maps a file
// path to its contents. readdirSync throws for anything that isn't a listed
// directory (models a plain file like README.md); readFileSync throws for a
// missing file. Only these two calls are used by readExports.
const makeFs = (dirs, files) => ({
  readdirSync(p) {
    if (!Object.prototype.hasOwnProperty.call(dirs, p)) throw new Error(`ENOTDIR: ${p}`);
    return dirs[p];
  },
  readFileSync(p) {
    if (!Object.prototype.hasOwnProperty.call(files, p)) throw new Error(`ENOENT: ${p}`);
    return files[p];
  },
});

const ROOT = 'programs/lfx-mentorship';

test('readExports: reads every lfx-export.json under root/<year>/<termDir>', () => {
  const dirs = {
    [ROOT]: ['2025', '2026', 'automation', 'README.md'],
    [`${ROOT}/2025`]: ['03-Sep-Nov'],
    [`${ROOT}/2026`]: ['02-Jun-Aug', '03-Sep-Nov'],
    [`${ROOT}/automation`]: ['lib', 'test'], // no lfx-export.json inside → skipped
  };
  const files = {
    [`${ROOT}/2025/03-Sep-Nov/lfx-export.json`]: JSON.stringify({ _term: '2025 Term 3 (Sep-Nov)', programs: [{ issue_number: 90 }] }),
    [`${ROOT}/2026/02-Jun-Aug/lfx-export.json`]: JSON.stringify({ _term: '2026 Term 2 (Jun-Aug)', programs: [{ issue_number: 100 }] }),
    [`${ROOT}/2026/03-Sep-Nov/lfx-export.json`]: JSON.stringify({ _term: '2026 Term 3 (Sep-Nov)', programs: [{ issue_number: 115 }] }),
  };
  const got = readExports(makeFs(dirs, files), ROOT);
  assert.deepEqual(got.map(e => e.dir).sort(), [
    `${ROOT}/2025/03-Sep-Nov`,
    `${ROOT}/2026/02-Jun-Aug`,
    `${ROOT}/2026/03-Sep-Nov`,
  ]);
  assert.equal(got.find(e => e.dir === `${ROOT}/2026/03-Sep-Nov`).data._term, '2026 Term 3 (Sep-Nov)');
});

test('readExports: skips term dirs without an export and malformed JSON', () => {
  const dirs = {
    [ROOT]: ['2026'],
    [`${ROOT}/2026`]: ['01-Mar-May', '02-Jun-Aug', '03-Sep-Nov'],
  };
  const files = {
    [`${ROOT}/2026/01-Mar-May/lfx-export.json`]: '{ not valid json',
    // 02-Jun-Aug has no lfx-export.json
    [`${ROOT}/2026/03-Sep-Nov/lfx-export.json`]: JSON.stringify({ _term: 'x', programs: [] }),
  };
  const got = readExports(makeFs(dirs, files), ROOT);
  assert.deepEqual(got.map(e => e.dir), [`${ROOT}/2026/03-Sep-Nov`]);
});

test('readExports: returns [] when the root cannot be read', () => {
  assert.deepEqual(readExports(makeFs({}, {}), ROOT), []);
});

test('locateExportedProgram: finds the program and returns its real location', () => {
  const exportsList = [
    { dir: `${ROOT}/2026/02-Jun-Aug`, data: { _term: '2026 Term 2 (Jun-Aug)', programs: [{ issue_number: 100 }] } },
    { dir: `${ROOT}/2026/03-Sep-Nov`, data: { _term: '2026 Term 3 (Sep-Nov)', programs: [{ issue_number: 114 }, { issue_number: 115, cncf_project: 'B' }] } },
  ];
  const got = locateExportedProgram(exportsList, 115);
  assert.equal(got.dir, `${ROOT}/2026/03-Sep-Nov`);
  assert.equal(got.year, '2026');
  assert.equal(got.termDir, '03-Sep-Nov');
  assert.equal(got.term, '2026 Term 3 (Sep-Nov)');
  assert.equal(got.prog.cncf_project, 'B');
  assert.equal(got.data, exportsList[1].data);
});

test('locateExportedProgram: picks the right term among several exports', () => {
  const exportsList = [
    { dir: `${ROOT}/2025/03-Sep-Nov`, data: { _term: '2025 Term 3 (Sep-Nov)', programs: [{ issue_number: 90 }] } },
    { dir: `${ROOT}/2026/02-Jun-Aug`, data: { _term: '2026 Term 2 (Jun-Aug)', programs: [{ issue_number: 100 }] } },
    { dir: `${ROOT}/2026/03-Sep-Nov`, data: { _term: '2026 Term 3 (Sep-Nov)', programs: [{ issue_number: 115 }] } },
  ];
  const got = locateExportedProgram(exportsList, 100);
  assert.equal(got.dir, `${ROOT}/2026/02-Jun-Aug`);
  assert.equal(got.termDir, '02-Jun-Aug');
  assert.equal(got.year, '2026');
});

test('locateExportedProgram: null when no export contains the issue', () => {
  const exportsList = [
    { dir: `${ROOT}/2026/03-Sep-Nov`, data: { _term: 'x', programs: [{ issue_number: 114 }] } },
  ];
  assert.equal(locateExportedProgram(exportsList, 115), null);
  assert.equal(locateExportedProgram([], 115), null);
  assert.equal(locateExportedProgram(null, 115), null);
});

test('locateExportedProgram: skips malformed entries; missing _term → empty term', () => {
  const exportsList = [
    { dir: 'ignored', data: null },
    { dir: `${ROOT}/2026/03-Sep-Nov`, data: { programs: [{ issue_number: 115 }] } }, // no _term
  ];
  const got = locateExportedProgram(exportsList, 115);
  assert.equal(got.dir, `${ROOT}/2026/03-Sep-Nov`);
  assert.equal(got.term, '');
});

// ── exportTermLabel: the term string used in /lfx-url PR metadata ──
test('exportTermLabel: prefers the canonical _term from the merged export', () => {
  assert.equal(
    exportTermLabel({ _term: '2026 Term 3 (Sep-Nov)' }, '2026 Term 3 (Sep-Nov)\ninjected'),
    '2026 Term 3 (Sep-Nov)');
});

test('exportTermLabel: falls back to the issue term when _term is absent', () => {
  assert.equal(exportTermLabel({}, '2026 Term 3 (Sep-Nov)'), '2026 Term 3 (Sep-Nov)');
  assert.equal(exportTermLabel(null, '2026 Term 3 (Sep-Nov)'), '2026 Term 3 (Sep-Nov)');
});

test('exportTermLabel: collapses whitespace/newlines to a single line', () => {
  // Guards the peter-evans PR title / commit subject against a multi-line term.
  assert.equal(exportTermLabel({ _term: '  2026   Term 3\n\n(Sep-Nov)  ' }, ''), '2026 Term 3 (Sep-Nov)');
  assert.equal(exportTermLabel(null, 'line1\r\nline2'), 'line1 line2');
});

test('exportTermLabel: empty when neither source has a term', () => {
  assert.equal(exportTermLabel(null, ''), '');
  assert.equal(exportTermLabel({}, undefined), '');
});

// ── termMismatchWarning: surface a stale/edited Term vs the exported term ──
// (#1938) /lfx-url trusts the export (content wins), but a Term-field mismatch
// means a human should reconcile it, so we warn instead of correcting silently.
test('termMismatchWarning: empty when the declared term matches the export', () => {
  assert.equal(termMismatchWarning('2026 Term 3 (Sep-Nov)', '2026 Term 3 (Sep-Nov)'), '');
});

test('termMismatchWarning: empty when they match after normalizing space/case', () => {
  assert.equal(termMismatchWarning('  2026   Term 3\n(sep-nov) ', '2026 Term 3 (Sep-Nov)'), '');
});

test('termMismatchWarning: empty when either term is missing (nothing to compare)', () => {
  assert.equal(termMismatchWarning('', '2026 Term 3 (Sep-Nov)'), '');
  assert.equal(termMismatchWarning('2026 Term 1 (Mar-May)', ''), '');
  assert.equal(termMismatchWarning(null, undefined), '');
});

test('termMismatchWarning: warns and names both terms when they differ', () => {
  const w = termMismatchWarning('2026 Term 1 (Mar-May)', '2026 Term 3 (Sep-Nov)');
  assert.ok(w.startsWith('⚠️'), 'starts with the warning glyph');
  // User-controlled term values are wrapped in inline code, matching how the
  // validate workflow echoes user input — neutralizes stray @mentions/Markdown.
  assert.ok(w.includes('`2026 Term 1 (Mar-May)`'), 'names the declared (issue) term in code');
  assert.ok(w.includes('`2026 Term 3 (Sep-Nov)`'), 'names the exported term in code');
});

test('termMismatchWarning: neutralizes an @mention in an edited Term field', () => {
  const w = termMismatchWarning('@acme/team', '2026 Term 3 (Sep-Nov)');
  assert.ok(w.includes('`@acme/team`'), 'wraps the raw value in inline code so it cannot ping');
  assert.ok(!/(^|[^`])@acme\/team/.test(w), 'no bare @mention escapes the code span');
});

test('termMismatchWarning: strips backticks so an edited Term cannot break out of the code span', () => {
  // A backtick is the only character that can terminate an inline code span, so
  // removing it fully neutralizes any embedded Markdown/@mention (no need for a
  // CommonMark variable-length fence). A Term never legitimately contains one.
  const w = termMismatchWarning('2026 `@acme/team` Term', '2026 Term 3 (Sep-Nov)');
  assert.ok(w.includes('`2026 @acme/team Term`'), 'internal backticks removed; value stays inside its span');
  assert.equal((w.match(/`/g) || []).length, 6, 'only the three span wrappers remain; no stray backticks');
});
