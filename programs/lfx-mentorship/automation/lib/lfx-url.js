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

module.exports = { recordedLfxUrlComment, parseRecordedLfxUrl };
