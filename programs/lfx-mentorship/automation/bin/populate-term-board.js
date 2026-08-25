#!/usr/bin/env node
'use strict';

// Populate a term's admin board: create the ~62 tracking issues from
// term-issues.yml, nest them as native sub-issues, add each to the Project v2
// board the admin created from the template, and set Status + Start/Due dates.
// Phase 3 of the term-setup tooling; see ADMIN_GUIDE.md.
//
//   node bin/populate-term-board.js <config.(yml|json)> [--repo-root DIR] [--dry-run] [--force] [--resume]
//
// --resume continues an interrupted run from its manifest: recorded issues are
// skipped, the last recorded one is re-verified (its nest/board/fields may have
// been lost in the crash), and the rest are created as usual.
//
// The config must carry `repo` (owner/repo) and `project` (the board URL). This
// is the impure glue: the plan, dates, board-field resolution and the client are
// all in lib/ (unit-tested); this file spawns `gh` and wires them together.

const fs = require('node:fs');
const path = require('node:path');
const { execFile } = require('node:child_process');
const { validateConfig, parseConfig } = require('../lib/config');
const { termIdentity } = require('../lib/term');
const { parseIssues, buildIssuePlan } = require('../lib/term-issues');
const { assertSafeToCreate, populateTerm, formatPlanPreview } = require('../lib/populate');
const { parseProjectRef } = require('../lib/project-ref');
const { parseBoardFields, requireFields } = require('../lib/board-fields');
const { createGhClient } = require('../lib/gh-client');
const { runManifestPath, openRunManifest } = require('../lib/run-manifest');

const USAGE =
  'Usage: node bin/populate-term-board.js <config.(yml|json)> [--repo-root DIR] [--dry-run] [--force] [--resume]';

const FIELDS_QUERY =
  'query($id:ID!){node(id:$id){... on ProjectV2{fields(first:50){nodes{'
  + '... on ProjectV2FieldCommon{id name} ... on ProjectV2SingleSelectField{id name options{id name}}}}}}}';

function parseArgs(argv) {
  const opts = { config: null, repoRoot: null, dryRun: false, force: false, resume: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--force') opts.force = true;
    else if (a === '--resume') opts.resume = true;
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

// Spawn `gh` with an argv array (no shell) and resolve its stdout.
function ghExec(args) {
  return new Promise((resolve, reject) => {
    execFile('gh', args, { maxBuffer: 16 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) reject(new Error(`gh ${args.join(' ')}\n${stderr || err.message}`));
      else resolve(stdout);
    });
  });
}

// Resolve the board node id + required field ids from the config's project URL.
async function resolveBoard(projectUrl, exec) {
  const { owner, number } = parseProjectRef(projectUrl);
  const projectId = JSON.parse(await exec(['project', 'view', String(number), '--owner', owner, '--format', 'json'])).id;
  const node = JSON.parse(await exec(['api', 'graphql', '-f', `query=${FIELDS_QUERY}`, '-f', `id=${projectId}`])).data.node;
  const fields = requireFields(parseBoardFields(node));
  return { projectId, fields };
}

// Count the term's existing admin issues (all four standard labels). A first run
// with no such issues returns 0 (gh lists an empty array); a real gh failure
// propagates and aborts before anything is created, so the double-run guard is
// never silently bypassed.
async function countExisting(repo, labels, exec) {
  const args = ['issue', 'list', '--repo', repo, '--state', 'all', '--limit', '400', '--json', 'number'];
  for (const l of labels) args.push('--label', l);
  return JSON.parse(await exec(args)).length;
}

function dryRun(plan, schedule, repo, completed = []) {
  if (completed.length > 0) {
    const last = completed[completed.length - 1];
    console.log(
      `[dry-run] resuming: ${completed.length} of ${plan.length} issues already recorded; ` +
      `would re-verify "${last.title}" (#${last.number}) and create the remaining ${plan.length - completed.length}:\n`,
    );
    console.log(formatPlanPreview(plan.slice(completed.length), schedule).join('\n'));
  } else {
    console.log(`[dry-run] would create ${plan.length} issues on ${repo} and add them to the board:\n`);
    console.log(formatPlanPreview(plan, schedule).join('\n'));
  }
  console.log('\n(no issues created; re-run without --dry-run to apply)');
}

async function main(argv) {
  const opts = parseArgs(argv);
  if (opts.help || !opts.config) {
    console.log(USAGE);
    return opts.help ? 0 : 1;
  }

  const cfg = validateConfig(loadConfig(opts.config));
  const identity = termIdentity(cfg.term);
  const repoRoot = opts.repoRoot ? path.resolve(opts.repoRoot) : path.resolve(__dirname, '../../../..');
  const issuesPath = path.join(repoRoot, 'programs/lfx-mentorship/automation/term-issues.yml');
  const plan = buildIssuePlan(parseIssues(fs.readFileSync(issuesPath, 'utf8')), identity);

  const automationDir = path.join(repoRoot, 'programs/lfx-mentorship/automation');
  const manifest = cfg.repo
    ? openRunManifest({ path: runManifestPath(automationDir, identity, cfg.repo) })
    : null;
  const completed = opts.resume && manifest && manifest.exists() ? manifest.read() : [];
  if (opts.resume && completed.length === 0) {
    throw new Error(
      '--resume needs an existing run manifest (and "repo" in the config); nothing to resume' +
      (manifest ? ` at ${manifest.path}` : ''),
    );
  }

  if (opts.dryRun) {
    dryRun(plan, cfg.schedule, cfg.repo || '<config.repo>', completed);
    return 0;
  }

  if (!cfg.repo) throw new Error('config is missing "repo" (e.g. nate-double-u/mentoring)');
  if (!cfg.project) throw new Error('config is missing "project" (the board URL the admin created)');

  if (!opts.resume) {
    if (manifest.exists()) {
      throw new Error(
        `A run manifest already exists at ${manifest.path}. Resume the interrupted run ` +
        '(--resume), tear it down (bin/teardown-term.js), or remove the manifest, ' +
        'before starting a new one.',
      );
    }
    const labels = ['lfx mentorship', identity.label, identity.yearLabel, 'administration'];
    const existingCount = await countExisting(cfg.repo, labels, ghExec);
    assertSafeToCreate({ existingCount, force: opts.force });
  }

  console.log(`Resolving board ${cfg.project} …`);
  const { projectId, fields } = await resolveBoard(cfg.project, ghExec);

  if (completed.length > 0) {
    const last = completed[completed.length - 1];
    console.log(
      `Resuming on ${cfg.repo}: ${completed.length - 1} issues already done, ` +
      `re-verifying #${last.number}, creating the remaining ${plan.length - completed.length}:`,
    );
  } else {
    console.log(`Creating ${plan.length} issues on ${cfg.repo} and populating the board:`);
  }
  const client = createGhClient({ repo: cfg.repo, projectId, fields, exec: ghExec });
  // Record each issue in the run manifest the instant it is created (before
  // the board add), and log progress. Recording at creation time means resume
  // and teardown can always find an issue even if a later step crashes.
  const onCreated = (rec) => {
    manifest.append(rec);
    process.stdout.write(`  #${rec.number}  ${rec.title}\n`);
  };
  const { created, repaired } = await populateTerm(
    plan,
    { schedule: cfg.schedule, completed, onCreated },
    client,
  );

  console.log(
    `\nDone: ${created} issues created${repaired ? ` (+${repaired} re-verified)` : ''}, ` +
    `linked, and added to the board for ${identity.title}.`,
  );
  console.log(`Recorded in ${manifest.path}.`);
  console.log('Tip: run bin/teardown-term.js with the same config to remove exactly this run (dev cleanup).');
  return 0;
}

if (require.main === module) {
  main(process.argv.slice(2))
    .then((code) => process.exit(code))
    .catch((err) => { console.error(`Error: ${err.message}`); process.exit(1); });
}

module.exports = { parseArgs };
