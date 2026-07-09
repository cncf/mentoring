#!/usr/bin/env node
'use strict';

// Populate a term's admin board: create the ~62 tracking issues from
// term-issues.yml, nest them as native sub-issues, add each to the Project v2
// board the admin created from the template, and set Status + Start/Due dates.
// Phase 3 of the term-setup tooling; see ADMIN_GUIDE.md.
//
//   node bin/populate-term-board.js <config.(yml|json)> [--repo-root DIR] [--dry-run] [--force]
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

const USAGE =
  'Usage: node bin/populate-term-board.js <config.(yml|json)> [--repo-root DIR] [--dry-run] [--force]';

const FIELDS_QUERY =
  'query($id:ID!){node(id:$id){... on ProjectV2{fields(first:50){nodes{'
  + '... on ProjectV2FieldCommon{id name} ... on ProjectV2SingleSelectField{id name options{id name}}}}}}}';

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

// Log each issue as the client creates it, so a ~62-issue run shows progress.
function withProgress(inner) {
  return Object.assign({}, inner, {
    async createIssue(a) {
      const r = await inner.createIssue(a);
      process.stdout.write(`  #${r.number}  ${a.title}\n`);
      return r;
    },
  });
}

function dryRun(plan, schedule, repo) {
  console.log(`[dry-run] would create ${plan.length} issues on ${repo} and add them to the board:\n`);
  console.log(formatPlanPreview(plan, schedule).join('\n'));
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

  if (opts.dryRun) {
    dryRun(plan, cfg.schedule, cfg.repo || '<config.repo>');
    return 0;
  }

  if (!cfg.repo) throw new Error('config is missing "repo" (e.g. nate-double-u/mentoring)');
  if (!cfg.project) throw new Error('config is missing "project" (the board URL the admin created)');

  const labels = ['lfx mentorship', identity.label, identity.yearLabel, 'administration'];
  const existingCount = await countExisting(cfg.repo, labels, ghExec);
  assertSafeToCreate({ existingCount, force: opts.force });

  console.log(`Resolving board ${cfg.project} …`);
  const { projectId, fields } = await resolveBoard(cfg.project, ghExec);

  console.log(`Creating ${plan.length} issues on ${cfg.repo} and populating the board:`);
  const client = withProgress(createGhClient({ repo: cfg.repo, projectId, fields, exec: ghExec }));
  const { created } = await populateTerm(plan, { schedule: cfg.schedule }, client);

  console.log(`\nDone: ${created} issues created, linked, and added to the board for ${identity.title}.`);
  console.log('Tip: run bin/teardown-term.js with the same config to remove them (dev cleanup).');
  return 0;
}

if (require.main === module) {
  main(process.argv.slice(2))
    .then((code) => process.exit(code))
    .catch((err) => { console.error(`Error: ${err.message}`); process.exit(1); });
}

module.exports = { parseArgs };
