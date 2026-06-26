'use strict';

// Per-mentor confirmation tally for the `/confirm` handler in
// lfx-proposal-approvals.yml. The Mentor Confirmation gate flips only once
// EVERY listed mentor has confirmed. Confirmations are gathered from the
// issue's comment history (plus the current commenter) and compared to the
// roster.
//
// mentorHandles: GitHub handles parsed from the Mentors field (with or without
//   a leading '@'); deduplicated and lower-cased here.
// commenter: the login of the mentor issuing this `/confirm`.
// comments: prior issue comments, each { user: { login }, body }.
//
// A comment counts as a confirmation only when its author is on the roster and
// a line in its body starts with `/confirm` (mid-sentence mentions do not
// count).
function computeConfirm(mentorHandles, commenter, comments) {
  const roster = [...new Set(mentorHandles.map(h => h.replace(/^@/, '').toLowerCase()))];
  const confirmed = new Set([commenter.toLowerCase()]);
  const hasConfirm = (body) => (body || '').split(/\r?\n/)
    .some(l => /^\/confirm\b/.test(l.trim()));
  for (const c of comments) {
    const author = (c.user?.login || '').toLowerCase();
    if (roster.includes(author) && hasConfirm(c.body)) confirmed.add(author);
  }
  const remaining = roster.filter(h => !confirmed.has(h));
  return { flip: remaining.length === 0, remaining, count: confirmed.size, total: roster.length };
}

module.exports = { computeConfirm };
