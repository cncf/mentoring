'use strict';

// Builds the "What happens next" section of the LFX proposal validation
// comment. Pure and unit-tested so the copy (and the gate-state it reflects)
// is verifiable, not buried inline in the workflow YAML.
//
// The prior inline version was binary per gate ("✅ recorded" vs a generic
// prompt), so a proposer who is also a listed mentor and/or a project
// maintainer got no signal that their own slot was already satisfied and would
// needlessly comment `/confirm` (cncf/mentoring#1928). This surfaces the
// partial mentor tally, notes when the proposer is auto-counted, and lists who
// is still needed.

// state:
//   proposer              issue author's handle (no leading '@'); may be null
//   maintainerApproved    is the maintainer gate satisfied this run?
//   maintainerAutoApproved satisfied because the proposer is a project maintainer?
//   confirm               computeConfirm result: { count, total, remaining }
//                         (remaining = normalized handles still to `/confirm`)
//   proposerIsMentor      is the proposer on the current mentor roster?
//   guideUrl              link to the proposal-process guide
// → array of markdown lines for the "What happens next" section.
function nextSteps({
  proposer,
  maintainerApproved,
  maintainerAutoApproved,
  confirm,
  proposerIsMentor,
  guideUrl,
}) {
  const { count = 0, total = 0, remaining = [] } = confirm || {};
  const mentorsConfirmed = remaining.length === 0;
  const at = (h) => `@${String(h || '').replace(/^@/, '')}`;

  const lines = ['### What happens next', ''];

  // 1. Maintainer approval
  if (maintainerApproved && maintainerAutoApproved) {
    lines.push(`1. **Maintainer approval** — ✅ recorded; proposer ${at(proposer)} is a project maintainer.`);
  } else if (maintainerApproved) {
    lines.push('1. **Maintainer approval** — ✅ recorded.');
  } else {
    lines.push('1. **Maintainer approval** — ⏳ a project maintainer (or authorized delegate) comments `/approve`.');
  }

  // 2. Mentor confirmation
  const auto = proposerIsMentor ? `; ${at(proposer)} auto-counted as proposer` : '';
  if (mentorsConfirmed) {
    lines.push(`2. **Mentor confirmation** — ✅ all ${total} confirmed${auto}.`);
  } else {
    lines.push(`2. **Mentor confirmation** — ⏳ ${count} of ${total} confirmed${auto}. Awaiting \`/confirm\` from ${remaining.map(at).join(', ')}.`);
  }

  // 3. CNCF approval — always pending at validation time
  lines.push('3. **CNCF approval** — ⏳ a CNCF admin comments `/cncf-approve` to finalize.');

  lines.push('', `[Proposal process guide](${guideUrl})`);
  return lines;
}

module.exports = { nextSteps };
