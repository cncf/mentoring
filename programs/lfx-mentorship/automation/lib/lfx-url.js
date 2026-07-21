'use strict';

// LFX program URL recording, shared by the /lfx-url command (§4.3.5, which
// writes the record) and the export (§4.5, which reads it back). Keeping the
// writer and reader together guarantees they agree on the phrasing.
//
// The record is a github-actions[bot] comment on the proposal issue, mirroring
// the approval-record pattern in approvals.js. Only bot comments are trusted:
// a user cannot spoof a URL by typing the phrase themselves.

const BOT_LOGIN = 'github-actions[bot]';
const RECORD_RE = /LFX URL recorded from @[A-Za-z0-9-]+:\s*(\S+)/g;

// The exact shape of an LFX Mentorship program URL, e.g.
// https://mentorship.lfx.linuxfoundation.org/project/005db8db-7efe-4433-9605-91d14174c72c
// Confirmed against every URL recorded in previous terms: https only, the
// mentorship host, a /project/ segment, then a UUID. Anything else (the bare
// host, other lfx.linuxfoundation.org products, a mistyped id) is not a program
// URL. If LFX ever changes this shape, update this one pattern.
const LFX_PROGRAM_URL_RE =
  /^https:\/\/mentorship\.lfx\.linuxfoundation\.org\/project\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

// The canonical recorded-URL comment body. A leading '@' on the user is
// normalized away so the phrasing is stable.
function recordedLfxUrlComment(user, url) {
  return `LFX URL recorded from @${String(user || '').replace(/^@/, '')}: ${url}`;
}

// Extract the most recently recorded LFX URL from an issue's comments, or ''
// when none is present. Comments are assumed chronological (as returned by the
// issues API); the last recorded URL wins, so re-running /lfx-url to correct a
// URL supersedes the earlier value. Only github-actions[bot] comments count.
function parseRecordedLfxUrl(comments) {
  let url = '';
  for (const c of comments || []) {
    if (c.user && c.user.login !== BOT_LOGIN) continue;
    if (!c.user) continue;
    const body = c.body || '';
    let m;
    RECORD_RE.lastIndex = 0;
    while ((m = RECORD_RE.exec(body)) !== null) url = m[1];
  }
  return url;
}

// Decision for the `/lfx-url <url>` command (§4.3.5). Returns { ok: true, url }
// (url is the trimmed argument, recorded verbatim) when the command may proceed,
// otherwise { ok: false, reason } where reason is one of:
//   'not-admin'    commenter is not a CNCF global approver
//   'issue-closed' the proposal issue is closed (reopen it to record a URL)
//   'not-exported' the issue has not been exported yet (no `Exported` label)
//   'missing-url'  no URL argument was given
//   'invalid-url'  the argument is not an LFX Mentorship program URL
//
// admins: lowercased global-approver handles (approvers.js getGlobalApprovers);
// commenter is compared case-insensitively, matching /cncf-approve. closed is
// the issue's closed state: a closed proposal is not being posted to LFX, so it
// is rejected outright (no record, no file change, no board move) rather than
// leaking its URL into the published term files.
function lfxUrlDecision({ commenter, admins, currentLabels, arg, closed }) {
  const labels = currentLabels || [];

  if (!(admins || []).includes(String(commenter || '').toLowerCase())) {
    return { ok: false, reason: 'not-admin' };
  }
  if (closed) {
    return { ok: false, reason: 'issue-closed' };
  }
  if (!labels.includes('Exported')) {
    return { ok: false, reason: 'not-exported' };
  }
  const url = String(arg || '').trim();
  if (!url) return { ok: false, reason: 'missing-url' };
  if (!LFX_PROGRAM_URL_RE.test(url)) return { ok: false, reason: 'invalid-url' };

  return { ok: true, url };
}

// Locate a program in a term's parsed export data by issue number, or null.
// /lfx-url uses this to confirm the term's export has been merged to `main`
// (and contains this program) BEFORE recording a URL — so a command issued
// while the export PR is still open is rejected atomically (nothing recorded,
// no board move) rather than half-applied. exportData is the parsed
// lfx-export.json, or null/undefined when the file isn't on main yet.
function findExportedProgram(exportData, issueNumber) {
  if (!exportData || !Array.isArray(exportData.programs)) return null;
  return exportData.programs.find(p => p.issue_number === issueNumber) || null;
}

// The term label used in /lfx-url PR metadata (title, commit subject, body).
// Prefer the canonical _term the export recorded (from the admin's export-time
// workflow_dispatch input) over the issue-body Term, which is editable and may
// contain newlines; collapse whitespace to a single line so it can't break the
// PR title or commit subject. Falls back to the issue term, then ''.
function exportTermLabel(exportData, fallbackTerm) {
  const raw = (exportData && exportData._term) || fallbackTerm || '';
  return String(raw).replace(/\s+/g, ' ').trim();
}

// Read every term export on disk: programs/lfx-mentorship/<year>/<termDir>/
// lfx-export.json. Returns [{ dir, data }] (data = the parsed JSON). Entries
// that aren't directories (e.g. README.md), term dirs without an export, and
// files that don't parse are all skipped. `fs` is injected (node's fs in the
// workflow) so the two-level walk is unit-testable; only readdirSync and
// readFileSync are used. Backs /lfx-url's content-based export lookup (#1938).
function readExports(fs, root) {
  const out = [];
  let years;
  try { years = fs.readdirSync(root); } catch { return out; }
  for (const year of years) {
    let termDirs;
    try { termDirs = fs.readdirSync(`${root}/${year}`); } catch { continue; }
    for (const termDir of termDirs) {
      const dir = `${root}/${year}/${termDir}`;
      let raw;
      try { raw = fs.readFileSync(`${dir}/lfx-export.json`, 'utf8'); } catch { continue; }
      let data;
      try { data = JSON.parse(raw); } catch { continue; }
      out.push({ dir, data });
    }
  }
  return out;
}

// Find the export that actually contains this issue's program by scanning
// content, rather than deriving the path from the (editable, untrusted) issue
// Term (#1938). `exports` is readExports() output. Returns
// { dir, year, termDir, term, data, prog } for the first matching export — an
// issue is exported to exactly one term — or null when no on-disk export
// contains it. dir/year/termDir come from the file's real location; term is the
// export's canonical _term (used for PR metadata and the README title).
function locateExportedProgram(exports, issueNumber) {
  for (const entry of exports || []) {
    const prog = findExportedProgram(entry && entry.data, issueNumber);
    if (prog) {
      const parts = String(entry.dir).split('/');
      return {
        dir: entry.dir,
        year: parts[parts.length - 2],
        termDir: parts[parts.length - 1],
        term: (entry.data && entry.data._term) || '',
        data: entry.data,
        prog,
      };
    }
  }
  return null;
}

// Warn when the issue's declared Term disagrees with the term its export
// actually lives under. /lfx-url trusts the export (content wins, #1938), but a
// mismatch means the editable Term field is stale or wrong, so we surface it for
// a human to reconcile rather than correcting silently. Returns the ⚠️ note
// (appended to the recorded-URL comment) when both terms are present and differ
// (whitespace- and case-insensitively), or '' when they match or either is
// unknown.
function termMismatchWarning(declaredTerm, exportedTerm) {
  // Strip backticks (the only char that can break an inline code span) before
  // wrapping the values below, so an edited Term can't escape and render an
  // @mention/Markdown. Fold en/em dashes to a hyphen to match termPaths()
  // (term-paths.js), so a Term differing only by dash style in the months range
  // isn't flagged as a mismatch. Then collapse whitespace and trim.
  const norm = (s) => String(s || '').replace(/`/g, '').replace(/[\u2013\u2014]/g, '-').replace(/\s+/g, ' ').trim();
  const d = norm(declaredTerm);
  const e = norm(exportedTerm);
  if (!d || !e || d.toLowerCase() === e.toLowerCase()) return '';
  return `⚠️ This issue's **Term** field (\`${d}\`) doesn't match the term it ` +
    `was exported under (\`${e}\`). Recorded under \`${e}\`. ` +
    `Fix whichever is wrong: the Term field or the export.`;
}

// Programs in a term export that already have an LFX URL recorded (non-empty
// lfx_url), in export order. Backs the /lfx-url PR title count and body issue
// list. `data` is the parsed lfx-export.json.
function recordedPrograms(data) {
  const programs = data && Array.isArray(data.programs) ? data.programs : [];
  return programs.filter(
    (p) => p && typeof p.lfx_url === 'string' && p.lfx_url.trim() !== '' && Number.isInteger(p.issue_number),
  );
}

// Markdown list (one "- #<issue> <name>" line per program) for the /lfx-url PR
// body, so each recorded issue is #-mentioned and the PR cross-links back to it.
// `programs` is a list of program objects (typically recordedPrograms(data)).
// Falls back to "- #<issue>" when a program has no name; '' for an empty list.
function renderRecordedIssues(programs) {
  return (programs || [])
    .map((p) => (p.program_name_full ? `- #${p.issue_number} ${p.program_name_full}` : `- #${p.issue_number}`))
    .join('\n');
}

// The next steps appended to the /lfx-url success comment. Recording the URL
// means the program is live on LFX, so the remaining actions happen on the LFX
// platform: an LFX admin approves the program, then CNCF admins add the mentors.
// Stated explicitly so readers don't assume recording the URL is the last step.
function recordedUrlNextSteps() {
  return [
    '**Next on LFX:**',
    '1. An LFX admin approves the program.',
    '2. Once approved, CNCF admins add the mentors.',
  ].join('\n');
}

// Populate every term program's lfx_url from the durable source of truth (each
// proposal issue's recorded-URL comment, §4.5) rather than only the issue that
// triggered this run. /lfx-url rebuilds the per-term PR from `main`, where a
// sibling's URL recorded but not yet merged is absent; without this, recording
// URLs for several programs before merging the PR clobbers all but the last.
// The current issue is set from `currentUrl` directly to avoid a read-after-
// write race on the comment just posted; siblings are read via the injected
// `fetchComments` (issue_number to comments array). A sibling with no recorded
// comment keeps its existing value, so a merged URL is never regressed.
async function populateRecordedUrls(programs, { currentIssue, currentUrl, fetchComments }) {
  for (const prog of programs || []) {
    if (!prog || typeof prog !== 'object') continue;
    if (!Number.isInteger(prog.issue_number)) continue;
    if (prog.issue_number === currentIssue) {
      prog.lfx_url = currentUrl;
      continue;
    }
    const url = parseRecordedLfxUrl(await fetchComments(prog.issue_number));
    if (url) prog.lfx_url = url;
  }
  return programs;
}

module.exports = {
  recordedLfxUrlComment, parseRecordedLfxUrl, lfxUrlDecision,
  findExportedProgram, exportTermLabel, readExports, locateExportedProgram,
  termMismatchWarning, recordedPrograms, renderRecordedIssues, recordedUrlNextSteps,
  populateRecordedUrls,
  LFX_PROGRAM_URL_RE,
};
