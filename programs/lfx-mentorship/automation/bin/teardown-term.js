#!/usr/bin/env node
'use strict';

// Tear down a term's admin board issues on a dev fork by deleting exactly what a
// populate-term-board run recorded in its manifest — nothing it didn't create.
// Deleting an issue also removes its board item and any sub-issue links, so this
// fully reverses a run for a repeatable dev test. Phase 4; see ADMIN_GUIDE.md.
//
//   node bin/teardown-term.js <config.(yml|json)> [--repo-root DIR] [--yes]
//
// Previews the recorded issues by default; pass --yes to actually delete them.
// Refuses to run against production (cncf/mentoring). Manifest-only: if no run
// manifest exists it stops rather than guessing. This is the impure glue; the
// guard and manifest logic live in lib/ (unit-tested); this file spawns `gh`.

const fs = require('node:fs');
const path = require('node:path');
const { execFile } = require('node:child_process');
const { validateConfig, parseConfig } = require('../lib/config');
const { termIdentity } = require('../lib/term');
const { assertTeardownAllowed } = require('../lib/teardown');
const { runManifestPath, openRunManifest } = require('../lib/run-manifest');

const USAGE = 'Usage: node bin/teardown-term.js <config.(yml|json)> [--repo-root DIR] [--yes]';

function parseArgs(argv) {
  const opts = { config: null, repoRoot: null, yes: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--yes') opts.yes = true;
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

function ghExec(args) {
  return new Promise((resolve, reject) => {
    execFile('gh', args, { maxBuffer: 16 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) reject(new Error(`gh ${args.join(' ')}\n${stderr || err.message}`));
      else resolve(stdout);
    });
  });
}

async function main(argv) {
  const opts = parseArgs(argv);
  if (opts.help || !opts.config) {
    console.log(USAGE);
    return opts.help ? 0 : 1;
  }

  const cfg = validateConfig(loadConfig(opts.config));
  if (!cfg.repo) throw new Error('config is missing "repo" (e.g. nate-double-u/mentoring)');
  assertTeardownAllowed(cfg.repo);

  const identity = termIdentity(cfg.term);
  const repoRoot = opts.repoRoot ? path.resolve(opts.repoRoot) : path.resolve(__dirname, '../../../..');
  const automationDir = path.join(repoRoot, 'programs/lfx-mentorship/automation');
  const manifest = openRunManifest({ path: runManifestPath(automationDir, identity, cfg.repo) });

  if (!manifest.exists()) {
    throw new Error(
      `No run manifest at ${manifest.path}. Teardown only removes what a populate run ` +
      'recorded, so there is nothing to tear down (or the manifest was lost — clean up by hand).',
    );
  }

  const records = manifest.read();
  if (records.length === 0) {
    console.log(`Run manifest ${manifest.path} is empty; removing it.`);
    manifest.remove();
    return 0;
  }

  console.log(`${records.length} issue(s) recorded for ${identity.title} on ${cfg.repo}:`);
  for (const r of records) console.log(`  #${r.number}  ${r.title}`);

  if (!opts.yes) {
    console.log(`\nPreview only. Re-run with --yes to permanently delete these ${records.length} issues.`);
    return 0;
  }

  console.log(`\nDeleting ${records.length} issues …`);
  let deleted = 0;
  for (const r of records) {
    await ghExec(['issue', 'delete', String(r.number), '--yes', '--repo', cfg.repo]);
    deleted += 1;
    process.stdout.write(`  deleted #${r.number}\n`);
  }
  manifest.remove();
  console.log(`\nDone: ${deleted} issues deleted (board items and sub-issue links go with them); manifest removed.`);
  return 0;
}

if (require.main === module) {
  main(process.argv.slice(2))
    .then((code) => process.exit(code))
    .catch((err) => { console.error(`Error: ${err.message}`); process.exit(1); });
}

module.exports = { parseArgs };
