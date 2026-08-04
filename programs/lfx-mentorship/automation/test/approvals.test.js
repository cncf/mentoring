'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { findRecordedApprovers, maintainerApprovalComment, cncfApprovalComment } = require('../lib/approvals');

const bot = (body) => ({ user: { login: 'github-actions[bot]' }, body });

test('finds the maintainer approver from the recorded comment', () => {
  const comments = [bot('✅ Maintainer approval recorded from @carlesarnal (Apicurio/.project/maintainers.yaml).')];
  assert.deepEqual(findRecordedApprovers(comments), { maintainers: ['carlesarnal'], cncfAdmins: [] });
});

test('finds the CNCF admin from the granted comment', () => {
  const comments = [bot('CNCF admin approval granted by @nate-double-u.\n\nThis proposal is approved.')];
  assert.deepEqual(findRecordedApprovers(comments), { maintainers: [], cncfAdmins: ['nate-double-u'] });
});

test('collects both, de-duplicates, ignores non-bot comments (anti-spoof)', () => {
  const comments = [
    bot('✅ Maintainer approval recorded from @alice (source).'),
    { user: { login: 'someuser' }, body: 'Maintainer approval recorded from @evil (spoof).' },
    bot('CNCF admin approval granted by @bob.'),
    bot('✅ Maintainer approval recorded from @alice (again).'),
  ];
  assert.deepEqual(findRecordedApprovers(comments), { maintainers: ['alice'], cncfAdmins: ['bob'] });
});

test('empty / null input → empty result', () => {
  assert.deepEqual(findRecordedApprovers([]), { maintainers: [], cncfAdmins: [] });
  assert.deepEqual(findRecordedApprovers(null), { maintainers: [], cncfAdmins: [] });
});

test('de-dupes case-insensitively, preserving first-seen casing', () => {
  const comments = [
    bot('✅ Maintainer approval recorded from @CarlesArnal (source).'),
    bot('✅ Maintainer approval recorded from @carlesarnal (again).'),
  ];
  assert.deepEqual(findRecordedApprovers(comments), { maintainers: ['CarlesArnal'], cncfAdmins: [] });
});

// ── Copy contract: the /approve and /cncf-approve handlers (approvals.yml) emit
// these comments, and findRecordedApprovers (read by the validate workflow)
// parses them back to tally approvers. Emitter and parser live in different
// workflows, so a wording drift would silently break approval tallying. These
// round-trips tie the emitted copy to the parser so neither can drift alone.
test('findRecordedApprovers round-trips maintainerApprovalComment (copy contract)', () => {
  const c = [bot(maintainerApprovalComment({ commenter: 'alice', source: 'Foo/.project/maintainers.yaml' }))];
  assert.deepEqual(findRecordedApprovers(c), { maintainers: ['alice'], cncfAdmins: [] });
});

test('findRecordedApprovers round-trips cncfApprovalComment (copy contract)', () => {
  const c = [bot(cncfApprovalComment({ commenter: 'bob' }))];
  assert.deepEqual(findRecordedApprovers(c), { maintainers: [], cncfAdmins: ['bob'] });
});
