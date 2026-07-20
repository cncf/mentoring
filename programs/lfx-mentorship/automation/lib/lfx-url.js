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

// The LFX platform host. A recorded URL on a different host is allowed but
// flagged (a likely paste mistake), not blocked — LFX could add a redirect or
// change hosts.
const LFX_HOST = 'mentorship.lfx.linuxfoundation.org';

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

// Decision for the `/lfx-url <url>` command (§4.3.5). Returns { ok: true, url,
// hostWarning } when the command may proceed (url is the trimmed argument,
// recorded verbatim; hostWarning flags a non-LFX host), otherwise
// { ok: false, reason } where reason is one of:
//   'not-admin'    commenter is not a CNCF global approver
//   'not-exported' the issue has not been exported yet (no `Exported` label)
//   'missing-url'  no URL argument was given
//   'invalid-url'  the argument is not a valid http(s) URL
//
// admins: lowercased global-approver handles (approvers.js getGlobalApprovers);
// commenter is compared case-insensitively, matching /cncf-approve.
function lfxUrlDecision({ commenter, admins, currentLabels, arg }) {
  const labels = currentLabels || [];

  if (!(admins || []).includes(String(commenter || '').toLowerCase())) {
    return { ok: false, reason: 'not-admin' };
  }
  if (!labels.includes('Exported')) {
    return { ok: false, reason: 'not-exported' };
  }
  const url = String(arg || '').trim();
  if (!url) return { ok: false, reason: 'missing-url' };

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return { ok: false, reason: 'invalid-url' };
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return { ok: false, reason: 'invalid-url' };
  }

  return { ok: true, url, hostWarning: parsed.hostname !== LFX_HOST };
}

module.exports = { recordedLfxUrlComment, parseRecordedLfxUrl, lfxUrlDecision, LFX_HOST };
