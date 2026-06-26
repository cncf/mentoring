'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { buildReadme } = require('../lib/readme');

const TITLE = 'Term 03 - 2026 September - November';

const stub = `# Term 03 - 2026 September - November

Status: Planning

Mentorship duration - three months (full-time schedule)

### Timeline

| Activity | Dates (2026) |
|----------|--------------|
| Project Proposals Open | Wed, Jul 1 - Tue, Jul 28 |
| Last Day of Term | Fri, Nov 27 |

### Project instructions

Project maintainers ... submitting a PR ... project_ideas.md, by July 28, 2026.

### Application instructions

Mentee application instructions can be found on the Program Guidelines page.

---


`;

const body = [
  '## Table of Contents', '',
  '- [OpenTelemetry](#opentelemetry)', '',
  '## Accepted Projects', '',
  '### OpenTelemetry', '', '#### Some program', '',
];

test('buildReadme: preserves term frontmatter and appends the generated body', () => {
  const out = buildReadme(stub, body, TITLE);
  assert.match(out, /### Timeline/);
  assert.match(out, /\| Last Day of Term \| Fri, Nov 27 \|/);
  assert.match(out, /### Project instructions/);
  assert.match(out, /### Application instructions/);
  assert.match(out, /## Table of Contents/);
  assert.match(out, /## Accepted Projects/);
  assert.ok(out.indexOf('---') < out.indexOf('## Table of Contents'));
  assert.equal((out.match(/^# Term 03/m) || []).length, 1);
});

test('buildReadme: re-export is idempotent (no duplicated frontmatter or TOC)', () => {
  const first = buildReadme(stub, body, TITLE);
  const second = buildReadme(first, body, TITLE);
  assert.equal((second.match(/### Timeline/g) || []).length, 1);
  assert.equal((second.match(/## Table of Contents/g) || []).length, 1);
  assert.equal((second.match(/### Project instructions/g) || []).length, 1);
  assert.equal(second, first);
});

test('buildReadme: a README with no --- rule falls back to a minimal header', () => {
  const out = buildReadme('# Old\n\nsome stuff no rule\n', body, TITLE);
  assert.ok(out.startsWith(`# ${TITLE}`));
  assert.match(out, /Status: Planning/);
  assert.match(out, /---/);
  assert.match(out, /## Table of Contents/);
});

test('buildReadme: no existing README falls back to a minimal header', () => {
  const out = buildReadme(null, body, TITLE);
  assert.ok(out.startsWith(`# ${TITLE}`));
  assert.match(out, /## Accepted Projects/);
});
