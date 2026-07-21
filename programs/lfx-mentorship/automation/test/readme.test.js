'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { buildReadme, renderAcceptedProgramsBody } = require('../lib/readme');
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

// ── renderAcceptedProgramsBody: the TOC + Accepted Projects body ──
// Characterizes the body assembly extracted from lfx-export.yml. Programs are
// grouped by CNCF project and the projects sorted case-insensitively; the CSV
// (see csv.test.js) keeps input order, but this body sorts.

const RENDER_PROGRAMS = [
  {
    cncf_project: 'Backstage',
    program_name_short: 'Alpha Program',
    program_name_full: 'CNCF - Backstage: Alpha Program (2026 Term 3)',
    description: 'Line one.\nLine two.',
    skills: 'Go, Kubernetes',
    technologies: 'Go, Kubernetes',
    mentors: [
      { name: 'Jane Doe', github_handle: 'janedoe', email: 'jane@example.com', lfid: 'janedoe' },
      { name: 'Sam Lee', github_handle: 'samlee', email: 'sam@example.com', lfid: 'samlee' },
    ],
    upstream_issue_url: 'https://github.com/cncf/mentoring/issues/1883',
  },
  {
    cncf_project: 'Argo',
    program_name_short: 'Beta Program',
    program_name_full: 'CNCF - Argo: Beta Program (2026 Term 3)',
    description: 'Solo desc.',
    skills: 'Rust',
    technologies: 'Rust',
    mentors: [
      { name: 'Al Pha', github_handle: 'alpha', email: 'al@example.com', lfid: 'alpha' },
    ],
    upstream_issue_url: 'https://github.com/argoproj/argo/issues/1',
  },
];

const EXPECTED_BODY = [
  '## Table of Contents',
  '',
  '- [Argo](#argo)',
  '  - [Beta Program](#beta-program)',
  '- [Backstage](#backstage)',
  '  - [Alpha Program](#alpha-program)',
  '',
  '## Accepted Projects',
  '',
  '### Argo',
  '',
  '#### Beta Program',
  '',
  'CNCF - Argo: Beta Program (2026 Term 3)',
  '',
  '- Description:',
  '',
  '  > Solo desc.',
  '',
  '- Recommended Skills: Rust',
  '- Technologies: Rust',
  '- Mentor(s):',
  '  - Al Pha (@alpha, al@example.com)',
  '- Upstream Issue: https://github.com/argoproj/argo/issues/1',
  '- LFX URL: TBD',
  '',
  '### Backstage',
  '',
  '#### Alpha Program',
  '',
  'CNCF - Backstage: Alpha Program (2026 Term 3)',
  '',
  '- Description:',
  '',
  '  > Line one.',
  '  > Line two.',
  '',
  '- Recommended Skills: Go, Kubernetes',
  '- Technologies: Go, Kubernetes',
  '- Mentor(s):',
  '  - Jane Doe (@janedoe, jane@example.com)',
  '  - Sam Lee (@samlee, sam@example.com)',
  '- Upstream Issue: https://github.com/cncf/mentoring/issues/1883',
  '- LFX URL: TBD',
  '',
];

test('renderAcceptedProgramsBody: sorts projects, nests programs, renders full detail', () => {
  assert.deepEqual(renderAcceptedProgramsBody(RENDER_PROGRAMS), EXPECTED_BODY);
});

test('renderAcceptedProgramsBody: output feeds buildReadme cleanly', () => {
  const out = buildReadme(null, renderAcceptedProgramsBody(RENDER_PROGRAMS), TITLE);
  assert.match(out, /## Table of Contents/);
  assert.match(out, /#### Beta Program/);
  assert.match(out, /- LFX URL: TBD/);
});

test('renderAcceptedProgramsBody: a recorded lfx_url replaces the TBD placeholder', () => {
  const url = 'https://mentorship.lfx.linuxfoundation.org/project/005db8db-7efe-4433-9605-91d14174c72c';
  const withUrl = [{ ...RENDER_PROGRAMS[1], lfx_url: url }];
  const body = renderAcceptedProgramsBody(withUrl).join('\n');
  assert.match(body, new RegExp(`- LFX URL: ${url.replace(/[.\/]/g, '\\$&')}`));
  assert.doesNotMatch(body, /- LFX URL: TBD/);
});

test('renderAcceptedProgramsBody: no lfx_url still renders TBD', () => {
  assert.match(renderAcceptedProgramsBody(RENDER_PROGRAMS).join('\n'), /- LFX URL: TBD/);
});

test('renderAcceptedProgramsBody: a __proto__ project name neither pollutes nor crashes', () => {
  // cncf_project is untrusted issue-form input used as a grouping key; a
  // prototype-polluting name like __proto__ must not throw or mutate Object.
  const evil = [{
    cncf_project: '__proto__',
    program_name_short: 'Evil Program',
    program_name_full: 'CNCF - __proto__: Evil Program (2026 Term 3)',
    description: 'desc',
    skills: 'Go',
    technologies: 'Go',
    mentors: [{ name: 'A B', github_handle: 'ab', email: 'a@example.com', lfid: 'ab' }],
    upstream_issue_url: 'https://github.com/cncf/mentoring/issues/1',
  }];
  let body;
  assert.doesNotThrow(() => { body = renderAcceptedProgramsBody(evil).join('\n'); });
  assert.match(body, /### __proto__/);
  assert.equal({}.polluted, undefined);
});
