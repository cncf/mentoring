'use strict';

// Per-mentor confirmation tally for the `/confirm` handler in
// lfx-proposal-approvals.yml and the proposer-implied confirmation in
// lfx-proposal-validate.yml. The Mentor Confirmation gate flips only once
// EVERY listed mentor has confirmed. Confirmations are gathered from the
// issue's comment history (plus the current commenter and the issue author)
// and compared to the roster.
//
// A `/confirm` line confirms a SUBJECT: the `@handle` it names, or the comment
// author when it names none. The subject is credited only when it is on the
// roster AND the author is allowed to confirm it: the author IS the subject
// (self-confirm), or the author is a CNCF universal approver acting on the
// mentor's behalf (`admins`). This lets an approver run `/confirm @mentor` for
// a mentor who never confirmed, while a mentor naming someone else confirms no
// one. Trailing prose after `/confirm` is ignored, so intent survives a
// friendly note; only a leading `@` marks a target handle.

// Parse a comment body into one entry per `/confirm` line, in order: the
// lowercased handle for `/confirm @handle`, or null for a bare `/confirm`
// (any trailing prose ignored). A `/confirm` must lead its line (after
// trimming); mid-sentence mentions never count.
function confirmTargets(body) {
  const targets = [];
  for (const raw of String(body == null ? '' : body).split(/\r?\n/)) {
    const m = raw.trim().match(/^\/confirm\b\s*(.*)$/);
    if (!m) continue;
    const rest = (m[1] || '').trim();
    if (rest.startsWith('@')) {
      const handle = rest.split(/\s+/)[0].replace(/^@+/, '').toLowerCase();
      targets.push(handle || null);
    } else {
      targets.push(null);
    }
  }
  return targets;
}

// mentorHandles: GitHub handles parsed from the Mentors field (with or without
//   a leading '@'); deduplicated and lower-cased here.
// commenter: the login of the mentor issuing this `/confirm` (may be null when
//   evaluated outside a comment, e.g. at validation time). Counted only for a
//   bare self-confirm; on-behalf `/confirm @handle` flows through `comments`.
// comments: prior issue comments, each { user: { login }, body }.
// author: the issue author (proposer). Counted as a confirmation when on the
//   roster — filing a proposal that lists yourself as a mentor is itself your
//   commitment to mentor, so it counts as that mentor's `/confirm`.
// admins: CNCF universal (global) approvers, who may `/confirm @handle` on a
//   mentor's behalf. Normalized here; defaults to none (additive).
function computeConfirm(mentorHandles, commenter, comments, author, admins = []) {
  const norm = (h) => String(h || '').replace(/^@/, '').trim().toLowerCase();
  const roster = [...new Set(mentorHandles.map(norm))];
  const adminSet = new Set((admins || []).map(norm));
  const onRoster = (h) => h && roster.includes(norm(h));
  const confirmed = new Set();
  if (onRoster(commenter)) confirmed.add(norm(commenter));
  if (onRoster(author)) confirmed.add(norm(author));
  for (const c of comments) {
    const commentAuthor = norm(c.user?.login);
    for (const target of confirmTargets(c.body)) {
      if (target === null) {
        // Bare self-confirm: credits the author when on the roster.
        if (roster.includes(commentAuthor)) confirmed.add(commentAuthor);
      } else if (roster.includes(target) && (target === commentAuthor || adminSet.has(commentAuthor))) {
        // Explicit @handle: the mentor themselves, or an approver on their
        // behalf. The confirmed party is the handle, not the commenter.
        confirmed.add(target);
      }
    }
  }
  const remaining = roster.filter(h => !confirmed.has(h));
  return { flip: remaining.length === 0, remaining, count: confirmed.size, total: roster.length };
}

module.exports = { computeConfirm, confirmTargets };
