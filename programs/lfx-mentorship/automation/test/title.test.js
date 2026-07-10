'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { lfxTitle, termToken, programNameBudget, LFX_TITLE_MAX } = require('../lib/title');

test('LFX_TITLE_MAX is 100', () => {
  assert.equal(LFX_TITLE_MAX, 100);
});

test('termToken strips the month parenthetical', () => {
  assert.equal(termToken('2026 Term 3 (Sep-Nov)'), '2026 Term 3');
  assert.equal(termToken('2026 Term 3'), '2026 Term 3'); // no parenthetical
  assert.equal(termToken(''), '');
  assert.equal(termToken(undefined), '');
});

test('lfxTitle builds "CNCF - <project>: <programName> (<term>)"', () => {
  assert.equal(
    lfxTitle({ project: 'Apicurio Registry', programName: 'Federated AI Agent Search', term: '2026 Term 3 (Sep-Nov)' }),
    'CNCF - Apicurio Registry: Federated AI Agent Search (2026 Term 3)',
  );
});

test('lfxTitle tolerates missing parts', () => {
  assert.equal(lfxTitle({}), 'CNCF - :  ()');
});

test('programNameBudget = 100 minus the fixed overhead (matches the KServe/Term 3 example)', () => {
  // project "KServe" (6) + term token "2026 Term 3" (11) + fixed 12 = 29 overhead.
  assert.equal(programNameBudget({ project: 'KServe', term: '2026 Term 3 (Sep-Nov)' }), 71);
});

test('programNameBudget + programName length === full title length', () => {
  const project = 'KServe';
  const term = '2026 Term 3 (Sep-Nov)';
  const programName = 'x'.repeat(programNameBudget({ project, term }));
  assert.equal(lfxTitle({ project, programName, term }).length, LFX_TITLE_MAX);
});
