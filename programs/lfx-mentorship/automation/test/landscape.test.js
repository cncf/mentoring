'use strict';

// Unit tests for the landscape sync logic (lib/landscape.js), used by the
// "Sync CNCF Projects from Landscape" workflow (landscape-projects-sync.yml).
//
// The render cases are ported verbatim from the retired Python test
// (test_projects_yml.py); the rest characterize the project-extraction, slug,
// org-parsing, and dropdown-rewrite logic moved out of the workflow's former
// inline Python.

const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  projectSlug,
  extractProjects,
  orgOf,
  render,
  rewriteOptionsBlock,
  logoUrl,
  LOGO_BASE_URL,
} = require('../lib/landscape');

// ── render: date-preservation (ported from test_projects_yml.py) ──

const BODY =
  '- name: Aeraki Mesh\n' +
  '  slug: aerakimesh\n' +
  '  maturity: sandbox\n';

test('render: first write uses today', () => {
  const out = render(BODY, { total: 1, today: '2026-06-29', existing: null });
  assert.ok(out.includes('# Last updated: 2026-06-29\n'));
  assert.ok(out.includes('# Total projects: 1\n'));
  assert.ok(out.endsWith(BODY));
});

test('render: body unchanged preserves the old date (no spurious diff)', () => {
  const existing = render(BODY, { total: 1, today: '2026-06-25', existing: null });
  const out = render(BODY, { total: 1, today: '2026-06-29', existing });
  assert.equal(out, existing);
  assert.ok(out.includes('# Last updated: 2026-06-25\n'));
});

test('render: body change bumps the date', () => {
  const existing = render(BODY, { total: 1, today: '2026-06-25', existing: null });
  const newBody = BODY + '- name: Argo\n  slug: argo\n  maturity: graduated\n';
  const out = render(newBody, { total: 2, today: '2026-06-29', existing });
  assert.ok(out.includes('# Last updated: 2026-06-29\n'));
  assert.ok(out.includes('# Total projects: 2\n'));
  assert.ok(out.endsWith(newBody));
});

test('render: a count change alone bumps the date (count is real content)', () => {
  const existing = render(BODY, { total: 1, today: '2026-06-25', existing: null });
  const out = render(BODY, { total: 99, today: '2026-06-29', existing });
  assert.ok(out.includes('# Last updated: 2026-06-29\n'));
  assert.ok(out.includes('# Total projects: 99\n'));
});

test('render: keeps the literal header (including the em-dash) byte-for-byte', () => {
  const out = render(BODY, { total: 1, today: '2026-06-29', existing: null });
  assert.ok(out.startsWith(
    '# Auto-generated from cncf/landscape \u2014 DO NOT EDIT MANUALLY.\n'
  ));
});

// ── projectSlug ──

test('projectSlug: prefers the explicit lfx_slug over the name', () => {
  assert.equal(projectSlug('Aeraki Mesh', 'aerakimesh'), 'aerakimesh');
});

test('projectSlug: derives from the name when no lfx_slug', () => {
  assert.equal(projectSlug('Aeraki Mesh', undefined), 'aeraki-mesh');
});

test('projectSlug: lowercases and turns non [a-z0-9-] runs into single hyphens', () => {
  assert.equal(projectSlug('Foo:  Bar_Baz!', null), 'foo-bar-baz');
});

test('projectSlug: trims leading and trailing hyphens', () => {
  assert.equal(projectSlug('  Spaced Out  ', null), 'spaced-out');
});

// ── extractProjects ──

const LANDSCAPE = {
  landscape: [
    {
      name: 'Orchestration',
      subcategories: [
        {
          name: 'Scheduling',
          items: [
            {
              name: 'Argo',
              project: 'graduated',
              homepage_url: 'https://argoproj.github.io/',
              logo: 'argo.svg',
              repo_url: 'https://github.com/argoproj/argo-workflows',
              extra: { lfx_slug: 'argo' },
            },
            {
              name: 'Aeraki Mesh',
              project: 'sandbox',
              homepage_url: 'https://www.aeraki.net/',
              logo: 'aeraki-mesh.svg',
              repo_url: 'https://github.com/aeraki-mesh/aeraki',
              extra: { lfx_slug: 'aerakimesh' },
            },
            {
              // not a CNCF maturity level: must be excluded
              name: 'Some Member Product',
              repo_url: 'https://github.com/acme/thing',
            },
            {
              // archived: must be excluded
              name: 'Old Thing',
              project: 'archived',
              repo_url: 'https://github.com/acme/old',
            },
          ],
        },
      ],
    },
    {
      name: 'Observability',
      subcategories: [
        {
          name: 'Metrics',
          // no items key at all: must be tolerated
        },
        {
          name: 'Tracing',
          items: [
            {
              name: 'beta tool', // lowercase: sorts after capitalized names? case-insensitive
              project: 'incubating',
              // no extra, no homepage_url, no logo: defaults to ''
              repo_url: 'https://github.com/beta/tool',
            },
          ],
        },
      ],
    },
  ],
};

test('extractProjects: includes only graduated/incubating/sandbox items', () => {
  const names = extractProjects(LANDSCAPE).map((p) => p.name);
  assert.deepEqual(names, ['Aeraki Mesh', 'Argo', 'beta tool']);
});

test('extractProjects: sorts by name case-insensitively', () => {
  // "beta tool" (lowercase) sorts after "Aeraki Mesh"/"Argo" by lowercased name,
  // not by raw ASCII (which would put it first).
  const names = extractProjects(LANDSCAPE).map((p) => p.name);
  assert.deepEqual(names, ['Aeraki Mesh', 'Argo', 'beta tool']);
});

test('extractProjects: maps fields and defaults missing ones to empty strings', () => {
  const byName = Object.fromEntries(
    extractProjects(LANDSCAPE).map((p) => [p.name, p])
  );
  assert.deepEqual(byName['Argo'], {
    name: 'Argo',
    slug: 'argo',
    maturity: 'graduated',
    homepage: 'https://argoproj.github.io/',
    logo: 'https://raw.githubusercontent.com/cncf/landscape/master/hosted_logos/argo.svg',
    repo_url: 'https://github.com/argoproj/argo-workflows',
  });
  assert.deepEqual(byName['beta tool'], {
    name: 'beta tool',
    slug: 'beta-tool',
    maturity: 'incubating',
    homepage: '',
    logo: '',
    repo_url: 'https://github.com/beta/tool',
  });
});

test('extractProjects: emits keys in a stable order for byte-stable YAML', () => {
  const keys = Object.keys(extractProjects(LANDSCAPE)[0]);
  assert.deepEqual(keys, ['name', 'slug', 'maturity', 'homepage', 'logo', 'repo_url']);
});

// ── logoUrl: bare landscape filenames become full hosted_logos URLs ──
// The landscape stores logos as bare filenames pointing at its own
// hosted_logos/ directory; downstream consumers need a resolvable URL.

test('logoUrl: prefixes a bare filename with the landscape hosted_logos base', () => {
  assert.equal(
    logoUrl('argo.svg'),
    'https://raw.githubusercontent.com/cncf/landscape/master/hosted_logos/argo.svg'
  );
  // The base constant and the composed URL agree.
  assert.equal(logoUrl('argo.svg'), LOGO_BASE_URL + 'argo.svg');
});

test('logoUrl: leaves an already-absolute URL untouched', () => {
  const abs = 'https://example.com/custom/logo.svg';
  assert.equal(logoUrl(abs), abs);
  assert.equal(logoUrl('http://example.com/logo.png'), 'http://example.com/logo.png');
});

test('logoUrl: empty / missing stays empty (no dangling base URL)', () => {
  assert.equal(logoUrl(''), '');
  assert.equal(logoUrl(null), '');
  assert.equal(logoUrl(undefined), '');
});

test('logoUrl: strips a leading "./" the landscape sometimes prefixes (no /./ in the URL)', () => {
  assert.equal(
    logoUrl('./k-serve-color.svg'),
    'https://raw.githubusercontent.com/cncf/landscape/master/hosted_logos/k-serve-color.svg'
  );
  // Defensive: repeated leading ./ and surrounding whitespace.
  assert.equal(
    logoUrl('  ././llm-d.svg  '),
    'https://raw.githubusercontent.com/cncf/landscape/master/hosted_logos/llm-d.svg'
  );
  // The composed URL never contains a redundant /./ segment.
  assert.ok(!logoUrl('./k-serve-color.svg').includes('/./'));
});

test('logoUrl: trims surrounding whitespace before composing', () => {
  assert.equal(
    logoUrl('  argo.svg  '),
    'https://raw.githubusercontent.com/cncf/landscape/master/hosted_logos/argo.svg'
  );
});

test('extractProjects: tolerates an empty/# landscape', () => {
  assert.deepEqual(extractProjects({}), []);
  assert.deepEqual(extractProjects({ landscape: [] }), []);
});

// ── orgOf ──

test('orgOf: extracts the org from a github repo URL', () => {
  assert.equal(orgOf('https://github.com/aeraki-mesh/aeraki'), 'aeraki-mesh');
});

test('orgOf: requires a trailing slash after the org (a bare org is not a repo)', () => {
  assert.equal(orgOf('https://github.com/aeraki-mesh'), null);
});

test('orgOf: returns null for non-github or empty URLs', () => {
  assert.equal(orgOf('https://gitlab.com/foo/bar'), null);
  assert.equal(orgOf(''), null);
  assert.equal(orgOf(undefined), null);
});

// ── rewriteOptionsBlock ──

const FORM = [
  'body:',
  '  - type: dropdown',
  '    id: cncf_project',
  '    attributes:',
  '      label: CNCF Project',
  '      options:',
  '        - "Old A"',
  '        - "Old B"',
  '  - type: dropdown',
  '    id: term',
  '    attributes:',
  '      label: Term',
  '      options:',
  '        - "2026 Term 1"',
  '  - type: input',
  '    id: notes',
  '',
].join('\n');

test('rewriteOptionsBlock: replaces the options under the matching context marker', () => {
  const out = rewriteOptionsBlock(FORM, 'id: cncf_project', ['Argo', 'Aeraki Mesh']);
  assert.ok(out.includes('        - "Argo"\n'));
  assert.ok(out.includes('        - "Aeraki Mesh"\n'));
  assert.ok(!out.includes('Old A'));
  assert.ok(!out.includes('Old B'));
});

test('rewriteOptionsBlock: leaves other option blocks untouched', () => {
  const out = rewriteOptionsBlock(FORM, 'id: cncf_project', ['Argo']);
  // the term block is untouched
  assert.ok(out.includes('        - "2026 Term 1"'));
  // structure after the rewritten block survives
  assert.ok(out.includes('    id: notes'));
});

test('rewriteOptionsBlock: preserves the option indentation (options indent + 2)', () => {
  const out = rewriteOptionsBlock(FORM, 'id: term', ['2026 Term 3']);
  assert.ok(out.includes('        - "2026 Term 3"'));
  assert.ok(!out.includes('        - "2026 Term 1"'));
});

test('rewriteOptionsBlock: only the first matching block is rewritten', () => {
  // marker present once; ensure idempotent shape and single rewrite
  const once = rewriteOptionsBlock(FORM, 'id: cncf_project', ['X']);
  const twice = rewriteOptionsBlock(once, 'id: cncf_project', ['X']);
  assert.equal(once, twice);
});
