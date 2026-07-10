'use strict';

// Per-mentor confirmation tally for the `/confirm` handler in
// lfx-proposal-approvals.yml and the proposer-implied confirmation in
// lfx-proposal-validate.yml. The Mentor Confirmation gate flips only once
// EVERY listed mentor has confirmed. Confirmations are gathered from the
// issue's comment history (plus the current commenter and the issue author)
// and compared to the roster.
//
// mentorHandles: GitHub handles parsed from the Mentors field (with or without
//   a leading '@'); deduplicated and lower-cased here.
// commenter: the login of the mentor issuing this `/confirm` (may be null when
//   evaluated outside a comment, e.g. at validation time).
// comments: prior issue comments, each { user: { login }, body }.
// author: the issue author (proposer). Counted as a confirmation when on the
//   roster — filing a proposal that lists yourself as a mentor is itself your
//   commitment to mentor, so it counts as that mentor's `/confirm`.
//
// A comment counts as a confirmation only when its author is on the roster and
// a line in its body starts with `/confirm` (mid-sentence mentions do not
// count). The commenter and issue author are likewise only counted when they
// are on the roster, so `count` never exceeds the roster.
function computeConfirm(mentorHandles, commenter, comments, author) {
  const norm = (h) => String(h || '').replace(/^@/, '').trim().toLowerCase();
  const roster = [...new Set(mentorHandles.map(norm))];
  const onRoster = (h) => h && roster.includes(norm(h));
  const confirmed = new Set();
  if (onRoster(commenter)) confirmed.add(norm(commenter));
  if (onRoster(author)) confirmed.add(norm(author));
  const hasConfirm = (body) => (body || '').split(/\r?\n/)
    .some(l => /^\/confirm\b/.test(l.trim()));
  for (const c of comments) {
    const commentAuthor = norm(c.user?.login);
    if (roster.includes(commentAuthor) && hasConfirm(c.body)) confirmed.add(commentAuthor);
  }
  const remaining = roster.filter(h => !confirmed.has(h));
  return { flip: remaining.length === 0, remaining, count: confirmed.size, total: roster.length };
}

module.exports = { computeConfirm };
