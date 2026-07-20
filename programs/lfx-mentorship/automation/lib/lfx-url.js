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

module.exports = { recordedLfxUrlComment, parseRecordedLfxUrl, lfxUrlDecision, LFX_PROGRAM_URL_RE };
