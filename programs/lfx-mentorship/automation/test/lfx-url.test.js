'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  recordedLfxUrlComment, parseRecordedLfxUrl, lfxUrlDecision, findExportedProgram,
  exportTermLabel, readExports, locateExportedProgram, termMismatchWarning,
  recordedPrograms, renderRecordedIssues, recordedUrlNextSteps, populateRecordedUrls,
  changedRecordedPrograms, programCountLabel, upsertLfxUrlBlock, stripLfxUrlBlock,
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

test('termMismatchWarning: folds en/em dashes to a hyphen so a cosmetic dash difference is not a mismatch', () => {
  // termPaths() folds en/em dashes to '-' when resolving the directory, so a
  // Term differing only by dash style resolves to the same term and must not
  // warn. Keeps the warning consistent with the rest of the automation.
  assert.equal(termMismatchWarning('2026 Term 3 (Sep\u2013Nov)', '2026 Term 3 (Sep-Nov)'), '', 'en-dash equals hyphen');
  assert.equal(termMismatchWarning('2026 Term 3 (Sep\u2014Nov)', '2026 Term 3 (Sep-Nov)'), '', 'em-dash equals hyphen');
});

// ── recordedPrograms / renderRecordedIssues: the /lfx-url PR title count and
//    body issue-links, derived from the term export so the PR cross-links back
//    to each proposal issue whose URL has been recorded. ──
const exportWith = (programs) => ({ _term: '2026 Term 3 (Sep-Nov)', programs });

test('recordedPrograms: returns only programs with a non-empty lfx_url, in order', () => {
  const data = exportWith([
    { issue_number: 10, program_name_full: 'A', lfx_url: 'https://x/1' },
    { issue_number: 11, program_name_full: 'B', lfx_url: '' },
    { issue_number: 12, program_name_full: 'C' },
    { issue_number: 13, program_name_full: 'D', lfx_url: '   ' },
    { issue_number: 14, program_name_full: 'E', lfx_url: 'https://x/2' },
  ]);
  assert.deepEqual(recordedPrograms(data).map(p => p.issue_number), [10, 14]);
});

test('recordedPrograms: empty for missing/empty/malformed export data', () => {
  assert.deepEqual(recordedPrograms(null), []);
  assert.deepEqual(recordedPrograms({}), []);
  assert.deepEqual(recordedPrograms({ programs: [] }), []);
  assert.deepEqual(recordedPrograms({ programs: 'nope' }), []);
});

test('renderRecordedIssues: one "- #<n> <name>" line per program, no em-dash', () => {
  const md = renderRecordedIssues([
    { issue_number: 1924, program_name_full: 'CNCF - WasmEdge Runtime: Wide Arithmetic (2026 Term 3)', lfx_url: 'https://x/1' },
    { issue_number: 1930, program_name_full: 'CNCF - OpenTelemetry: Zero-code (2026 Term 3)', lfx_url: 'https://x/2' },
  ]);
  assert.equal(md,
    '- #1924 CNCF - WasmEdge Runtime: Wide Arithmetic (2026 Term 3)\n' +
    '- #1930 CNCF - OpenTelemetry: Zero-code (2026 Term 3)');
  assert.ok(!md.includes('\u2014') && !md.includes('\u2013'), 'no en/em dash');
});

test('renderRecordedIssues: falls back to just "- #<n>" when the name is missing', () => {
  assert.equal(renderRecordedIssues([{ issue_number: 42, lfx_url: 'https://x/1' }]), '- #42');
});

test('renderRecordedIssues: empty string for an empty list', () => {
  assert.equal(renderRecordedIssues([]), '');
});

// ── changedRecordedPrograms: the URLs THIS /lfx-url PR actually changes vs the
//    export on main (newly recorded or corrected), so the PR references only the
//    issues it touches, not every program that already has a URL (which would
//    re-cross-reference already-merged issues and spam them). ──
test('changedRecordedPrograms: includes a newly-recorded URL (empty on main)', () => {
  const before = exportWith([
    { issue_number: 10, program_name_full: 'A', lfx_url: LFX },
    { issue_number: 11, program_name_full: 'B', lfx_url: '' },
  ]);
  const after = exportWith([
    { issue_number: 10, program_name_full: 'A', lfx_url: LFX },
    { issue_number: 11, program_name_full: 'B', lfx_url: LFX2 },
  ]);
  assert.deepEqual(changedRecordedPrograms(before, after).map((p) => p.issue_number), [11]);
});
test('changedRecordedPrograms: excludes a URL already recorded on main (unchanged)', () => {
  const before = exportWith([{ issue_number: 10, program_name_full: 'A', lfx_url: LFX }]);
  const after = exportWith([{ issue_number: 10, program_name_full: 'A', lfx_url: LFX }]);
  assert.deepEqual(changedRecordedPrograms(before, after), []);
});
test('changedRecordedPrograms: includes a corrected URL (different value on main)', () => {
  const before = exportWith([{ issue_number: 10, program_name_full: 'A', lfx_url: LFX }]);
  const after = exportWith([{ issue_number: 10, program_name_full: 'A', lfx_url: LFX2 }]);
  assert.deepEqual(changedRecordedPrograms(before, after).map((p) => p.issue_number), [10]);
});
test('changedRecordedPrograms: mix of new + corrected listed, unchanged excluded', () => {
  const before = exportWith([
    { issue_number: 10, program_name_full: 'A', lfx_url: LFX },   // unchanged
    { issue_number: 11, program_name_full: 'B', lfx_url: '' },    // new
    { issue_number: 12, program_name_full: 'C', lfx_url: LFX },   // corrected
  ]);
  const after = exportWith([
    { issue_number: 10, program_name_full: 'A', lfx_url: LFX },
    { issue_number: 11, program_name_full: 'B', lfx_url: LFX2 },
    { issue_number: 12, program_name_full: 'C', lfx_url: LFX2 },
  ]);
  assert.deepEqual(changedRecordedPrograms(before, after).map((p) => p.issue_number), [11, 12]);
});
test('changedRecordedPrograms: null/malformed baseline treats all recorded as changed', () => {
  const after = exportWith([{ issue_number: 10, program_name_full: 'A', lfx_url: LFX }]);
  assert.deepEqual(changedRecordedPrograms(null, after).map((p) => p.issue_number), [10]);
  assert.deepEqual(changedRecordedPrograms({}, after).map((p) => p.issue_number), [10]);
  assert.deepEqual(changedRecordedPrograms({ programs: 'nope' }, after).map((p) => p.issue_number), [10]);
});
test('changedRecordedPrograms: ignores after-entries with no/empty URL (via recordedPrograms)', () => {
  const before = exportWith([]);
  const after = exportWith([
    { issue_number: 10, program_name_full: 'A', lfx_url: '' },
    { issue_number: 11, program_name_full: 'B' },
  ]);
  assert.deepEqual(changedRecordedPrograms(before, after), []);
});

// ── programCountLabel: correct singular/plural for the /lfx-url PR title ──
test('programCountLabel: singular for exactly one program', () => {
  assert.equal(programCountLabel(1), '1 program');
});
test('programCountLabel: plural for many', () => {
  assert.equal(programCountLabel(3), '3 programs');
});
test('programCountLabel: guards zero / non-integer / negative to "0 programs"', () => {
  assert.equal(programCountLabel(0), '0 programs');
  assert.equal(programCountLabel(undefined), '0 programs');
  assert.equal(programCountLabel(-2), '0 programs');
  assert.equal(programCountLabel(2.5), '0 programs');
});

// ── recordedUrlNextSteps: the post-record next steps appended to the /lfx-url
//    success comment. Once the URL is recorded the program is live on LFX, so
//    the next actions are on the LFX platform (admin approval, then mentors). ──
test('recordedUrlNextSteps: lists LFX admin approval then CNCF mentor assignment', () => {
  const s = recordedUrlNextSteps();
  assert.match(s, /Next on LFX/);
  assert.match(s, /1\.\s+An LFX admin approves the program\./);
  assert.match(s, /2\.\s+Once approved, CNCF admins add the mentors\./);
  assert.ok(!s.includes('\u2014') && !s.includes('\u2013'), 'no en/em dash');
});

// ── populateRecordedUrls: fill every term program's lfx_url from the durable
//    source (each issue's recorded-URL comment), so recording URLs for several
//    programs before merging the per-term PR doesn't clobber the earlier ones
//    (the PR is always rebuilt from main). Current issue is set directly. ──
const recComment = (url) => bot(`LFX URL recorded from @admin: ${url}`);
const PROJ = 'https://mentorship.lfx.linuxfoundation.org/project';

test('populateRecordedUrls: sets current from currentUrl, others from comments; skips fetching current', async () => {
  const programs = [
    { issue_number: 10, lfx_url: '' },
    { issue_number: 11, lfx_url: '' },
    { issue_number: 12, lfx_url: '' },
  ];
  const comments = {
    11: [recComment(`${PROJ}/aaaaaaaa-0000-4000-8000-000000000011`)],
    12: [],
  };
  const fetched = [];
  await populateRecordedUrls(programs, {
    currentIssue: 10,
    currentUrl: `${PROJ}/aaaaaaaa-0000-4000-8000-000000000010`,
    fetchComments: async (n) => { fetched.push(n); return comments[n] || []; },
  });
  assert.equal(programs[0].lfx_url, `${PROJ}/aaaaaaaa-0000-4000-8000-000000000010`);
  assert.equal(programs[1].lfx_url, `${PROJ}/aaaaaaaa-0000-4000-8000-000000000011`);
  assert.equal(programs[2].lfx_url, '', 'sibling with no recorded comment stays empty');
  assert.deepEqual(fetched.sort((a, b) => a - b), [11, 12], 'did not fetch the current issue');
});

test('populateRecordedUrls: preserves an existing sibling url when it has no recorded comment', async () => {
  const programs = [
    { issue_number: 1, lfx_url: `${PROJ}/aaaaaaaa-0000-4000-8000-000000000001` },
    { issue_number: 2, lfx_url: '' },
  ];
  await populateRecordedUrls(programs, {
    currentIssue: 2,
    currentUrl: `${PROJ}/aaaaaaaa-0000-4000-8000-000000000002`,
    fetchComments: async () => [],
  });
  assert.equal(programs[0].lfx_url, `${PROJ}/aaaaaaaa-0000-4000-8000-000000000001`, 'never regressed to empty');
  assert.equal(programs[1].lfx_url, `${PROJ}/aaaaaaaa-0000-4000-8000-000000000002`);
});

test('populateRecordedUrls: empty program list makes no fetches', async () => {
  let called = 0;
  const out = await populateRecordedUrls([], { currentIssue: 1, currentUrl: 'x', fetchComments: async () => { called++; return []; } });
  assert.deepEqual(out, []);
  assert.equal(called, 0);
});

test('populateRecordedUrls: skips null/non-object entries without throwing', async () => {
  const programs = [null, 'nope', { issue_number: 5, lfx_url: '' }];
  await populateRecordedUrls(programs, {
    currentIssue: 5,
    currentUrl: `${PROJ}/aaaaaaaa-0000-4000-8000-000000000005`,
    fetchComments: async () => [],
  });
  assert.equal(programs[2].lfx_url, `${PROJ}/aaaaaaaa-0000-4000-8000-000000000005`);
});

test('recordedPrograms: excludes entries without a numeric issue_number', () => {
  const data = { programs: [
    { issue_number: 10, lfx_url: `${PROJ}/aaaaaaaa-0000-4000-8000-000000000010` },
    { lfx_url: `${PROJ}/aaaaaaaa-0000-4000-8000-000000000099` },            // no issue_number
    { issue_number: 'nope', lfx_url: `${PROJ}/aaaaaaaa-0000-4000-8000-000000000098` }, // non-numeric
  ] };
  assert.deepEqual(recordedPrograms(data).map((p) => p.issue_number), [10]);
});

test('populateRecordedUrls: skips entries without a numeric issue_number (no fetch, no throw)', async () => {
  const programs = [
    { lfx_url: '' },                     // no issue_number
    { issue_number: null, lfx_url: '' }, // non-numeric
    { issue_number: 7, lfx_url: '' },
  ];
  const fetched = [];
  await populateRecordedUrls(programs, {
    currentIssue: 7,
    currentUrl: `${PROJ}/aaaaaaaa-0000-4000-8000-000000000007`,
    fetchComments: async (n) => { fetched.push(n); return []; },
  });
  assert.equal(programs[2].lfx_url, `${PROJ}/aaaaaaaa-0000-4000-8000-000000000007`);
  assert.deepEqual(fetched, [], 'no fetch for malformed entries; current issue set directly');
});

// ── upsertLfxUrlBlock: pin the LFX program link into the issue body ──────────
// The recorded-URL comment folds in a long thread; the OP body never does. This
// splices an idempotent, machine-delimited block carrying a linked program
// title. The recorded-URL comment stays the export's source of truth; this is a
// human-facing convenience.

test('upsertLfxUrlBlock: adds a rule-separated linked-title block to an empty body', () => {
  const out = upsertLfxUrlBlock('', { title: 'CNCF - kubernetes: Foo (2026 Term 3)', url: LFX });
  assert.equal(
    out,
    `<!-- lfx-url:start -->\n\n---\n**LFX program:** [CNCF - kubernetes: Foo (2026 Term 3)](${LFX})\n<!-- lfx-url:end -->\n`
  );
});

test('upsertLfxUrlBlock: appends the block below existing body content, rule-separated', () => {
  const body = '### CNCF Project\n\nkubernetes\n\n### Term\n\n2026 Term 3 (Sep-Nov)';
  const out = upsertLfxUrlBlock(body, { title: 'T', url: LFX });
  assert.ok(out.startsWith(`${body}\n\n`), 'original body preserved verbatim at the top');
  assert.ok(
    out.endsWith(`<!-- lfx-url:start -->\n\n---\n**LFX program:** [T](${LFX})\n<!-- lfx-url:end -->\n`),
    'block appended at the bottom under a rule'
  );
});

test('upsertLfxUrlBlock: is idempotent — same URL does not duplicate', () => {
  const once = upsertLfxUrlBlock('proposal text', { title: 'T', url: LFX });
  const twice = upsertLfxUrlBlock(once, { title: 'T', url: LFX });
  assert.equal(twice, once);
  assert.equal((twice.match(/<!-- lfx-url:start -->/g) || []).length, 1);
});

test('upsertLfxUrlBlock: updates the URL/title in place, no move, no duplicate', () => {
  const first = upsertLfxUrlBlock('proposal text', { title: 'T', url: LFX });
  const updated = upsertLfxUrlBlock(first, { title: 'T2', url: LFX2 });
  assert.equal((updated.match(/<!-- lfx-url:start -->/g) || []).length, 1);
  assert.ok(updated.includes(`**LFX program:** [T2](${LFX2})`));
  assert.ok(!updated.includes(LFX), 'old URL removed');
  assert.ok(updated.startsWith('proposal text'), 'body preserved at the top');
});

test('upsertLfxUrlBlock: escapes/neutralizes untrusted title characters', () => {
  const mk = (title) => upsertLfxUrlBlock('', { title, url: LFX });
  assert.ok(mk('A [b] c').includes('[A \\[b\\] c]('), 'square brackets escaped');
  assert.ok(mk('a\\b').includes('[a\\\\b]('), 'backslash escaped');
  assert.ok(mk('a`b`c').includes('[a\\`b\\`c]('), 'backtick escaped');
  assert.ok(mk('x<y>&z').includes('[x&lt;y&gt;&amp;z]('), 'HTML escaped');
  assert.ok(mk('@foo #12').includes('[&#64;foo &#35;12]('), 'mention/ref neutralized');
});

test('upsertLfxUrlBlock: collapses whitespace and falls back when title is empty', () => {
  assert.ok(upsertLfxUrlBlock('', { title: 'a\n b\t c', url: LFX }).includes('[a b c]('));
  assert.ok(upsertLfxUrlBlock('body', { title: '', url: LFX }).includes(`**LFX program:** [LFX program](${LFX})`));
});

test('stripLfxUrlBlock: removes the block and its separating whitespace', () => {
  const body = '### CNCF Project\n\nkubernetes';
  const withBlock = upsertLfxUrlBlock(body, { title: 'T', url: LFX });
  assert.equal(stripLfxUrlBlock(withBlock).trimEnd(), body);
});

test('stripLfxUrlBlock: is a no-op when there is no block', () => {
  const body = '### CNCF Project\n\nkubernetes';
  assert.equal(stripLfxUrlBlock(body), body);
  assert.equal(stripLfxUrlBlock(''), '');
});
