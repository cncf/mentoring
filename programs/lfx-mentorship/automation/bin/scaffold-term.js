#!/usr/bin/env node
'use strict';

// Scaffold a fresh LFX term folder (README.md + project_ideas.md) from a
// term-setup config. Phase 1 of the term-setup tooling; see ADMIN_GUIDE.md.
//
//   node bin/scaffold-term.js <config.(yml|json)> [--repo-root DIR] [--dry-run] [--force]
//
// Writes programs/lfx-mentorship/<year>/<NN-Mon-Mon>/{README.md,project_ideas.md}
// relative to the repo root, then prints the git/PR steps. Refuses to overwrite
// existing files unless --force. This is the impure glue: all string assembly
// lives in lib/ (unit-tested); this file only parses args, loads the config, and
// touches the filesystem.

const fs = require('node:fs');
const path = require('node:path');
const { validateConfig, parseConfig } = require('../lib/config');
const { termIdentity } = require('../lib/term');
const { buildTermReadme, PROJECT_IDEAS_NOTICE } = require('../lib/scaffold');

const USAGE =
  'Usage: node bin/scaffold-term.js <config.(yml|json)> [--repo-root DIR] [--dry-run] [--force]';

function parseArgs(argv) {
  const opts = { config: null, repoRoot: null, dryRun: false, force: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--force') opts.force = true;
    else if (a === '--repo-root') opts.repoRoot = argv[++i];
    else if (a === '-h' || a === '--help') opts.help = true;
    else if (a.startsWith('-')) throw new Error(`Unknown option: ${a}`);
    else if (!opts.config) opts.config = a;
    else throw new Error(`Unexpected argument: ${a}`);
  }
  return opts;
}

function loadConfig(configPath) {
  const abs = path.resolve(configPath);
  if (!fs.existsSync(abs)) throw new Error(`Config not found: ${abs}`);
  return parseConfig(fs.readFileSync(abs, 'utf8'), path.extname(abs));
}

function main(argv) {
  const opts = parseArgs(argv);
  if (opts.help || !opts.config) {
    console.log(USAGE);
    return opts.help ? 0 : 1;
  }

  const cfg = validateConfig(loadConfig(opts.config));
  const identity = termIdentity(cfg.term);
  const repoRoot = opts.repoRoot
    ? path.resolve(opts.repoRoot)
    : path.resolve(__dirname, '../../../..');

  const dir = path.join(repoRoot, identity.dir);
  const files = [
    { path: path.join(dir, 'README.md'), content: buildTermReadme({ identity, schedule: cfg.schedule }) },
    { path: path.join(dir, 'project_ideas.md'), content: PROJECT_IDEAS_NOTICE },
  ];

  const rel = (p) => path.relative(repoRoot, p);

  if (opts.dryRun) {
    console.log(`[dry-run] would scaffold ${identity.title}\n`);
    for (const f of files) {
      console.log(`----- ${rel(f.path)} -----`);
      console.log(f.content);
    }
    return 0;
  }

  const clobbering = files.filter((f) => fs.existsSync(f.path));
  if (clobbering.length && !opts.force) {
    throw new Error(
      `Refusing to overwrite existing files (use --force):\n  ${clobbering.map((f) => rel(f.path)).join('\n  ')}`,
    );
  }

  fs.mkdirSync(dir, { recursive: true });
  for (const f of files) fs.writeFileSync(f.path, f.content);

  console.log(`Scaffolded ${identity.title}:`);
  for (const f of files) console.log(`  ${rel(f.path)}`);
  console.log('\nNext:');
  console.log(`  git checkout -b lfx-${identity.year}-t${identity.number}-setup`);
  console.log(`  git add ${rel(dir)}`);
  console.log(`  git commit -s -S -m "Add LFX ${identity.year} Term ${identity.number} program folder"`);
  console.log('  # then open a PR to cncf/mentoring');
  return 0;
}

if (require.main === module) {
  try {
    process.exit(main(process.argv.slice(2)));
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { parseArgs };
