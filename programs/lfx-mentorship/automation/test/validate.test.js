'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  emailRe, urlRe, ghHandleRe, lfidRe,
  validateMentors, validateUpstreamUrl,
  mentorCountWarning, MIN_PREFERRED_MENTORS,
  validateCustomPrerequisite,
  CUSTOM_PREREQ_NAME_MAX, CUSTOM_PREREQ_DESC_MAX,
  normalizeUpstreamUrl, findDuplicateUpstreamIssues,
  expectedFormSections, missingSections,
  validateCodingChallenge,
} = require('../lib/validate');

const codes = (result) => result.errors.map(e => e.code);

// ── mentorCountWarning ───────────────────────────────────────────────
// Soft preference (not a hard rule): programs are encouraged to have at least
// two mentors so the load is shared, but a lone experienced mentor is fine.
// Takes the validateMentors() result so it can stay silent when the field is
// invalid — the count is unreliable then and the proposer already has hard
// errors to fix, so the nudge would be misleading noise.

const okResult = (count) => ({ ok: true, count, errors: [] });
const badResult = (count) => ({ ok: false, count, errors: [{ code: 'lfid-missing' }] });

test('MIN_PREFERRED_MENTORS: the preferred minimum is two', () => {
  assert.equal(MIN_PREFERRED_MENTORS, 2);
});

test('mentorCountWarning: one valid mentor is flagged as below the preference', () => {
  assert.deepEqual(mentorCountWarning(okResult(1)), { code: 'few-mentors', count: 1 });
});

test('mentorCountWarning: two or more valid mentors are not flagged', () => {
  assert.equal(mentorCountWarning(okResult(2)), null);
  assert.equal(mentorCountWarning(okResult(3)), null);
  assert.equal(mentorCountWarning(okResult(4)), null);
});

test('mentorCountWarning: zero mentors is not flagged (already a hard error)', () => {
  assert.equal(mentorCountWarning(okResult(0)), null);
});

test('mentorCountWarning: a single MALFORMED mentor is not flagged (validation failed)', () => {
  // One line, wrong shape: count is 1 but ok is false. The proposer already has
  // a hard error, so we must not also nudge "only one mentor listed".
  assert.equal(mentorCountWarning(badResult(1)), null);
});

test('mentorCountWarning: null / missing result returns null', () => {
  assert.equal(mentorCountWarning(undefined), null);
  assert.equal(mentorCountWarning(null), null);
});

test('mentorCountWarning: non-finite / non-number count returns null', () => {
  assert.equal(mentorCountWarning(okResult(NaN)), null);
  assert.equal(mentorCountWarning(okResult('1')), null);
  assert.equal(mentorCountWarning({ ok: true }), null);
});

test('validateMentors: a full valid 4-field line passes with no errors', () => {
  assert.deepEqual(
    validateMentors('Jane Doe | @janedoe | jane@example.com | janedoe'),
    { ok: true, count: 1, errors: [] },
  );
});

test('validateMentors: empty field flags "empty"', () => {
  assert.deepEqual(validateMentors(''), { ok: false, count: 0, errors: [{ role: null, code: 'empty' }] });
  assert.deepEqual(validateMentors('   '), { ok: false, count: 0, errors: [{ role: null, code: 'empty' }] });
});

test('validateMentors: a 3-field line flags missing LFID (optional at submit, required to pass)', () => {
  assert.deepEqual(
    validateMentors('Jane Doe | @janedoe | jane@example.com').errors,
    [{ role: 'Primary mentor', code: 'lfid-missing' }],
  );
});

test('validateMentors: a 4-field line with empty trailing LFID also flags missing', () => {
  assert.deepEqual(codes(validateMentors('Jane Doe | @janedoe | jane@example.com | ')), ['lfid-missing']);
});

test('validateMentors: wrong field counts flag "count" and skip the line', () => {
  assert.deepEqual(codes(validateMentors('Jane Doe | @janedoe')), ['count']);
  assert.deepEqual(codes(validateMentors('Jane | @j | j@x.com | jlfid | extra')), ['count']);
});

test('validateMentors: the "count" error carries the offending line for the message', () => {
  const e = validateMentors('Jane Doe | @janedoe').errors[0];
  assert.equal(e.code, 'count');
  assert.equal(e.got, 2);
  assert.equal(e.line, 'Jane Doe | @janedoe');
});

test('validateMentors: a malformed LFID (URL) flags "lfid-format"', () => {
  assert.deepEqual(
    codes(validateMentors('Jane Doe | @janedoe | jane@example.com | https://openprofile.dev/profile/janedoe')),
    ['lfid-format'],
  );
});

test('validateMentors: bad handle and email are both flagged on one line', () => {
  const result = validateMentors('Jane Doe | janedoe | not-an-email | janedoe');
  assert.deepEqual(codes(result), ['handle', 'email']);
  assert.deepEqual(result.errors.map(e => e.role), ['Primary mentor', 'Primary mentor']);
});

test('validateMentors: more than four mentors flags "too-many" but still checks lines', () => {
  const five = Array.from({ length: 5 }, (_, i) => `M${i} | @m${i} | m${i}@x.com | lf${i}`).join('\n');
  const result = validateMentors(five);
  assert.equal(result.count, 5);
  assert.ok(result.errors.some(e => e.code === 'too-many' && e.count === 5));
});

test('validateMentors: duplicate handle, email, and LFID are each flagged on the later line', () => {
  const dupHandle = validateMentors('A | @dup | a@x.com | la\nB | @dup | b@x.com | lb');
  assert.ok(dupHandle.errors.some(e => e.code === 'dup-handle' && e.role === 'Mentor 2'));

  const dupEmail = validateMentors('A | @a | same@x.com | la\nB | @b | same@x.com | lb');
  assert.ok(dupEmail.errors.some(e => e.code === 'dup-email' && e.role === 'Mentor 2'));

  const dupLfid = validateMentors('A | @a | a@x.com | shared\nB | @b | b@x.com | shared');
  assert.ok(dupLfid.errors.some(e => e.code === 'dup-lfid' && e.role === 'Mentor 2'));
});

test('validateUpstreamUrl: classifies empty, malformed, multiple, and valid', () => {
  assert.equal(validateUpstreamUrl(''), 'empty');
  assert.equal(validateUpstreamUrl('not a url'), 'format');
  // A comma with no whitespace passes the URL regex, then trips the single-URL check.
  assert.equal(validateUpstreamUrl('https://example.com/a,https://example.com/b'), 'multiple');
  assert.equal(validateUpstreamUrl('https://github.com/cncf/mentoring/issues/1'), null);
});

test('validateUpstreamUrl: whitespace fails the URL regex first (format, not multiple)', () => {
  // urlRe requires \S+$, so any space yields "format" before the single-URL check.
  assert.equal(validateUpstreamUrl('https://example.com/a, https://example.com/b'), 'format');
});

test('lfidRe: accepts plain usernames and dot/dash/underscore', () => {
  assert.equal(lfidRe.test('janedoe'), true);
  assert.equal(lfidRe.test('jane.doe-1_x'), true);
});

test('lfidRe: rejects empty, spaces, emails, and URLs', () => {
  assert.equal(lfidRe.test(''), false);
  assert.equal(lfidRe.test('jane doe'), false);
  assert.equal(lfidRe.test('jane@example.com'), false);
  assert.equal(lfidRe.test('https://openprofile.dev/profile/janedoe'), false);
});

test('emailRe / ghHandleRe / urlRe: basic accept and reject', () => {
  assert.equal(emailRe.test('jane@example.com'), true);
  assert.equal(emailRe.test('jane@example'), false);
  assert.equal(ghHandleRe.test('@jane-doe'), true);
  assert.equal(ghHandleRe.test('jane'), false);
  assert.equal(urlRe.test('https://example.com/x'), true);
  assert.equal(urlRe.test('ftp://example.com'), false);
});

// ── validateCustomPrerequisite ───────────────────────────────────────
// There is a custom prerequisite to validate when the "Custom Prerequisite"
// box is checked OR any copy is present; a fully empty, unchecked prerequisite
// is skipped. Name and description are required and must fit LFX's limits
// (name <= 20, description <= 500). The export sends the prerequisite only when
// the box is checked, so copy left with the box unchecked would be silently
// dropped and is flagged. All problems come back together so the proposer sees
// every needed edit at once. Codes: 'unchecked-with-copy', 'name-missing',
// 'name-too-long', 'description-missing', 'description-too-long'.

test('validateCustomPrerequisite: unchecked with both fields empty is ok (no custom prerequisite)', () => {
  assert.deepEqual(validateCustomPrerequisite({ checked: false, name: '', description: '' }), { ok: true, errors: [] });
  // whitespace-only trims to empty, so still no custom prerequisite
  assert.deepEqual(validateCustomPrerequisite({ checked: false, name: '   ', description: '  ' }), { ok: true, errors: [] });
});

test('validateCustomPrerequisite: unchecked but copy present flags unchecked-with-copy (would be silently dropped)', () => {
  // valid-length copy, box unchecked: the only problem is the unchecked box
  assert.deepEqual(codes(validateCustomPrerequisite({ checked: false, name: 'Writing Sample', description: 'A short writing sample.' })),
    ['unchecked-with-copy']);
  // a single filled field is enough copy to count as intent
  assert.deepEqual(codes(validateCustomPrerequisite({ checked: false, name: 'Writing Sample', description: '' })),
    ['unchecked-with-copy', 'description-missing']);
});

test('validateCustomPrerequisite: unchecked reports the box AND every field problem together', () => {
  // over-limit name + over-limit description + unchecked: all surfaced at once
  const r = validateCustomPrerequisite({ checked: false, name: 'x'.repeat(50), description: 'y'.repeat(600) });
  assert.deepEqual(codes(r), ['unchecked-with-copy', 'name-too-long', 'description-too-long']);
  assert.equal(r.ok, false);
});

test('validateCustomPrerequisite: checked with a valid name and description passes', () => {
  const r = validateCustomPrerequisite({ checked: true, name: 'Writing Sample', description: 'Please share a short writing sample.' });
  assert.equal(r.ok, true);
  assert.deepEqual(r.errors, []);
});

test('validateCustomPrerequisite: checked requires a name and a description', () => {
  assert.deepEqual(codes(validateCustomPrerequisite({ checked: true, name: '', description: '' })),
    ['name-missing', 'description-missing']);
  assert.deepEqual(codes(validateCustomPrerequisite({ checked: true, name: '   ', description: 'ok' })),
    ['name-missing']);
  assert.deepEqual(codes(validateCustomPrerequisite({ checked: true, name: 'Name', description: '  ' })),
    ['description-missing']);
});

test('validateCustomPrerequisite: name over 20 / description over 500 are flagged with lengths', () => {
  const r = validateCustomPrerequisite({
    checked: true,
    name: 'x'.repeat(21),
    description: 'y'.repeat(501),
  });
  assert.deepEqual(codes(r), ['name-too-long', 'description-too-long']);
  const nameErr = r.errors.find(e => e.code === 'name-too-long');
  const descErr = r.errors.find(e => e.code === 'description-too-long');
  assert.deepEqual({ length: nameErr.length, max: nameErr.max }, { length: 21, max: 20 });
  assert.deepEqual({ length: descErr.length, max: descErr.max }, { length: 501, max: 500 });
});

test('validateCustomPrerequisite: the limits are inclusive boundaries (20 / 500 pass)', () => {
  const r = validateCustomPrerequisite({
    checked: true,
    name: 'x'.repeat(20),
    description: 'y'.repeat(500),
  });
  assert.equal(r.ok, true);
});

test('validateCustomPrerequisite: length is measured after trimming (matches the exported value)', () => {
  // get() trims the field before export, so surrounding whitespace does not
  // count toward the limit.
  const r = validateCustomPrerequisite({
    checked: true,
    name: '  ' + 'x'.repeat(20) + '  ',
    description: '  ' + 'y'.repeat(500) + '  ',
  });
  assert.equal(r.ok, true);
});

test('validateCustomPrerequisite: exposes the LFX limits as constants', () => {
  assert.equal(CUSTOM_PREREQ_NAME_MAX, 20);
  assert.equal(CUSTOM_PREREQ_DESC_MAX, 500);
});

// ── normalizeUpstreamUrl ─────────────────────────────────────────────
// Canonical form for comparing upstream-issue URLs across proposals, chosen to
// avoid false negatives (missing a real duplicate). Drops protocol, a leading
// "www.", the #fragment, and any trailing slash; lowercases host AND path so
// github.com/Org/Repo/issues/5 and .../org/repo/issues/5 (the same issue)
// compare equal. Blank in, blank out.

test('normalizeUpstreamUrl: blank / nullish normalizes to empty string', () => {
  assert.equal(normalizeUpstreamUrl(''), '');
  assert.equal(normalizeUpstreamUrl('   '), '');
  assert.equal(normalizeUpstreamUrl(null), '');
  assert.equal(normalizeUpstreamUrl(undefined), '');
});

test('normalizeUpstreamUrl: protocol, www, fragment, and trailing slash are ignored', () => {
  const canon = 'github.com/cncf/mentoring/issues/5';
  assert.equal(normalizeUpstreamUrl('https://github.com/cncf/mentoring/issues/5'), canon);
  assert.equal(normalizeUpstreamUrl('http://github.com/cncf/mentoring/issues/5'), canon);
  assert.equal(normalizeUpstreamUrl('https://www.github.com/cncf/mentoring/issues/5'), canon);
  assert.equal(normalizeUpstreamUrl('https://github.com/cncf/mentoring/issues/5/'), canon);
  assert.equal(normalizeUpstreamUrl('https://github.com/cncf/mentoring/issues/5#issuecomment-9'), canon);
  assert.equal(normalizeUpstreamUrl('  https://github.com/cncf/mentoring/issues/5  '), canon);
});

test('normalizeUpstreamUrl: the query string is PRESERVED verbatim (filtered issues list, cncf/mentoring#1960)', () => {
  // A valid upstream link can be a filtered issues list whose identity is the
  // query, not the path. Dropping it would collapse distinct filters to the
  // same /issues path and raise false duplicates. Host+path are lowercased, but
  // the query is preserved as-is (query values can be case-sensitive).
  assert.equal(
    normalizeUpstreamUrl('https://github.com/Kubernetes/Kubernetes/issues?q=is%3Aissue+label%3AArea%2FAPI'),
    'github.com/kubernetes/kubernetes/issues?q=is%3Aissue+label%3AArea%2FAPI',
  );
  // Same list, different filter → distinct (must NOT be flagged as duplicates).
  assert.notEqual(
    normalizeUpstreamUrl('https://github.com/kubernetes/kubernetes/issues?q=label%3Aarea%2Fapi'),
    normalizeUpstreamUrl('https://github.com/kubernetes/kubernetes/issues?q=label%3Aarea%2Fnet'),
  );
  // Queries differing ONLY by case stay distinct (no false-positive merge).
  assert.notEqual(
    normalizeUpstreamUrl('https://example.com/x?token=AbC'),
    normalizeUpstreamUrl('https://example.com/x?token=abc'),
  );
  // Trailing slash on the path before the query does not change identity.
  assert.equal(
    normalizeUpstreamUrl('https://github.com/kubernetes/kubernetes/issues/?q=x'),
    normalizeUpstreamUrl('https://github.com/kubernetes/kubernetes/issues?q=x'),
  );
});

test('normalizeUpstreamUrl: host and path are lowercased (same issue, different casing)', () => {
  assert.equal(
    normalizeUpstreamUrl('https://GitHub.com/CNCF/Mentoring/issues/5'),
    'github.com/cncf/mentoring/issues/5',
  );
});

test('normalizeUpstreamUrl: distinct issues stay distinct', () => {
  assert.notEqual(
    normalizeUpstreamUrl('https://github.com/cncf/mentoring/issues/5'),
    normalizeUpstreamUrl('https://github.com/cncf/mentoring/issues/6'),
  );
});

// ── findDuplicateUpstreamIssues ──────────────────────────────────────
// Given the current proposal's URL and other proposals ({ number, url }),
// return the numbers whose upstream URL matches (after normalization). Blank
// URLs never match (so two proposals that both omit the URL are not flagged).

test('findDuplicateUpstreamIssues: flags others sharing the URL despite formatting differences', () => {
  const others = [
    { number: 12, url: 'http://www.github.com/cncf/mentoring/issues/5/' },
    { number: 34, url: 'https://github.com/cncf/mentoring/issues/6' },
    { number: 56, url: 'https://github.com/CNCF/Mentoring/issues/5#note' },
  ];
  assert.deepEqual(
    findDuplicateUpstreamIssues('https://github.com/cncf/mentoring/issues/5', others),
    [12, 56],
  );
});

test('findDuplicateUpstreamIssues: filtered issues lists match by query, not just path', () => {
  const base = 'https://github.com/kubernetes/kubernetes/issues';
  const others = [
    { number: 12, url: `${base}?q=label%3Aarea%2Fapi` },  // same filter → dup
    { number: 34, url: `${base}?q=label%3Aarea%2Fnet` },  // different filter → not
  ];
  assert.deepEqual(
    findDuplicateUpstreamIssues(`${base}?q=label%3Aarea%2Fapi`, others),
    [12],
  );
});

test('findDuplicateUpstreamIssues: no matches returns empty', () => {
  const others = [{ number: 34, url: 'https://github.com/cncf/mentoring/issues/6' }];
  assert.deepEqual(findDuplicateUpstreamIssues('https://github.com/cncf/mentoring/issues/5', others), []);
});

test('findDuplicateUpstreamIssues: a blank current URL matches nothing', () => {
  const others = [{ number: 34, url: '' }, { number: 35, url: 'https://github.com/a/b/issues/1' }];
  assert.deepEqual(findDuplicateUpstreamIssues('', others), []);
  assert.deepEqual(findDuplicateUpstreamIssues('   ', others), []);
});

test('findDuplicateUpstreamIssues: others with blank URLs are skipped', () => {
  const others = [{ number: 34, url: '' }, { number: 35, url: '_No response_' }];
  // '_No response_' is not a URL; normalized it should not equal a real URL.
  assert.deepEqual(findDuplicateUpstreamIssues('https://github.com/a/b/issues/1', others), []);
});

test('findDuplicateUpstreamIssues: preserves input order and handles missing/empty others', () => {
  assert.deepEqual(findDuplicateUpstreamIssues('https://github.com/a/b/issues/1', []), []);
  assert.deepEqual(findDuplicateUpstreamIssues('https://github.com/a/b/issues/1'), []);
  const others = [
    { number: 9, url: 'https://github.com/a/b/issues/1' },
    { number: 3, url: 'https://github.com/a/b/issues/1' },
  ];
  assert.deepEqual(findDuplicateUpstreamIssues('https://github.com/a/b/issues/1', others), [9, 3]);
});

// A mentor's email that arrived Markdown mailto-linked still validates (#1987).
test('validateMentors: accepts a Markdown mailto-autolinked email', () => {
  assert.deepEqual(
    validateMentors('Jane Doe | @janedoe | [jane@example.com](mailto:jane@example.com) | janedoe'),
    { ok: true, count: 1, errors: [] },
  );
});

// ── Structural completeness: expected template sections (#1928) ─────────
// A submitted issue form includes every template field as a "### <label>"
// section; a removed heading means the body was altered.

test('expectedFormSections returns non-markdown field labels in order', () => {
  const tmpl = [
    'name: Test',
    'body:',
    '  - type: markdown',
    '    attributes:',
    '      value: "Intro, no heading"',
    '  - type: dropdown',
    '    attributes:',
    '      label: CNCF Project',
    '  - type: input',
    '    attributes:',
    '      label: Program Name',
    '  - type: checkboxes',
    '    attributes:',
    '      label: Application Prerequisites',
  ].join('\n');
  assert.deepEqual(expectedFormSections(tmpl), ['CNCF Project', 'Program Name', 'Application Prerequisites']);
});

test('missingSections returns expected labels absent from the body', () => {
  const body = '### CNCF Project\n\nA\n\n### Program Name\n\nFoo\n';
  assert.deepEqual(
    missingSections(body, ['CNCF Project', 'Program Name', 'Application Prerequisites']),
    ['Application Prerequisites'],
  );
});

test('missingSections is empty when every section is present, even if empty', () => {
  const body = '### A\n\n_No response_\n\n### B\n\ny\n';
  assert.deepEqual(missingSections(body, ['A', 'B']), []);
});

// ── Coding Challenge URL required when the prerequisite is checked (#2009) ──
// LFX requires the challenge URL when "Coding Challenge" is selected; a URL
// left with the box unchecked is dropped by the export. Mirrors the custom
// prerequisite check.

test('validateCodingChallenge: unchecked and empty passes', () => {
  assert.deepEqual(validateCodingChallenge({ checked: false, url: '' }), { ok: true, errors: [] });
});

test('validateCodingChallenge: checked with a valid URL passes', () => {
  assert.deepEqual(validateCodingChallenge({ checked: true, url: 'https://github.com/x/y/issues/1' }), { ok: true, errors: [] });
});

test('validateCodingChallenge: checked but empty URL flags url-missing', () => {
  assert.deepEqual(validateCodingChallenge({ checked: true, url: '' }).errors, [{ code: 'url-missing' }]);
});

test('validateCodingChallenge: checked with a malformed URL flags url-invalid', () => {
  assert.deepEqual(validateCodingChallenge({ checked: true, url: 'not a url' }).errors, [{ code: 'url-invalid', value: 'not a url' }]);
});

test('validateCodingChallenge: URL filled but box unchecked flags unchecked-with-url', () => {
  assert.deepEqual(validateCodingChallenge({ checked: false, url: 'https://x.com/c' }).errors, [{ code: 'unchecked-with-url' }]);
});
