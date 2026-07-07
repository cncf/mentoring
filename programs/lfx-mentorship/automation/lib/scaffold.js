'use strict';

// Initial term-folder content for the LFX term-setup tooling.
//
// Produces the two files a fresh term folder starts with:
//   programs/lfx-mentorship/<year>/<NN-Mon-Mon>/README.md
//   programs/lfx-mentorship/<year>/<NN-Mon-Mon>/project_ideas.md
// The README is the hand-authored "frontmatter" (title, status, duration,
// Timeline table, project + application instructions, closing `---`) that the
// export path (lib/readme.js buildReadme) later preserves verbatim while it
// regenerates the accepted-projects body below the rule. Generating it here from
// the same key dates that drive the board keeps the README Timeline and the
// board's Start/Due fields from drifting apart.
//
// Pure string assembly only: the runner does the fs writes.

const EN_DASH = '\u2013';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function parseISO(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) throw new Error(`Invalid date: ${iso}`);
  return d;
}

// "2026-07-01" -> "Wed, Jul 1" (UTC, no leading zero on the day).
function fmtShort(iso) {
  const d = parseISO(iso);
  return `${WEEKDAYS[d.getUTCDay()]}, ${MONTHS_SHORT[d.getUTCMonth()]} ${d.getUTCDate()}`;
}

// "2026-07-28" -> "July 28, 2026".
function fmtLong(iso) {
  const d = parseISO(iso);
  return `${MONTHS_LONG[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

// Compose a Timeline "Dates" cell from a schedule entry:
//   { start, end?, time?, note? }
// -> "Wed, Jul 1 – Tue, Jul 28, 18:00 UTC" (+ " <note>" appended verbatim so the
// runner controls any italics/parenthetical wording).
function dateCell({ start, end, time, note }) {
  let cell = fmtShort(start);
  if (end) cell += ` ${EN_DASH} ${fmtShort(end)}`;
  if (time) cell += `, ${time}`;
  if (note) cell += ` ${note}`;
  return cell;
}

// Render the "### Timeline" block (no trailing newline) from the ordered
// schedule. Entries flagged `timeline: false` are board-only anchors and are
// omitted here. The header stamps the term year, matching the existing READMEs.
function renderTimeline(schedule, year) {
  const rows = schedule
    .filter((e) => e.timeline !== false)
    .map((e) => `| ${e.label} | ${dateCell(e)} |`);
  return [
    '### Timeline',
    '',
    `| Activity | Dates (${year}) |`,
    '|----------|--------------|',
    ...rows,
  ].join('\n');
}

// The proposal deadline shown in the instructions is the close of the proposal
// window (proposals_open end, or its start if it is a single day).
function proposalDeadline(schedule) {
  const e = schedule.find((s) => s.key === 'proposals_open');
  if (!e) throw new Error('schedule is missing a "proposals_open" entry');
  return fmtLong(e.end || e.start);
}

// Assemble the initial term README frontmatter. `identity` comes from
// lib/term.js termIdentity(); `schedule` is the ordered Timeline input.
function buildTermReadme({ identity, schedule }) {
  const deadline = proposalDeadline(schedule);
  const lines = [
    `# ${identity.title}`,
    '',
    'Status: Planning',
    '',
    'Mentorship duration - three months (full-time schedule)',
    '',
    renderTimeline(schedule, identity.year),
    '',
    '### Project instructions',
    '',
    'Project maintainers and potential mentors propose programs by opening an issue ' +
      'with the [LFX Mentorship Program Proposal form]' +
      '(https://github.com/cncf/mentoring/issues/new?template=lfx-program-proposal.yml), ' +
      `by ${deadline}. Submit one issue per program, and please limit proposals to 4-5 ` +
      'per CNCF project. See [How to propose a program]' +
      '(https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#how-to-propose-a-program) ' +
      'for the full process and what happens after you submit.',
    '',
    '### Application instructions',
    '',
    'Mentee application instructions can be found on the [Program Guidelines]' +
      '(https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.',
    '',
    '---',
    '',
  ];
  return lines.join('\n');
}

// The project_ideas.md stub: proposals moved to the issue form, so this file is
// now just a signpost.
const PROJECT_IDEAS_NOTICE = [
  '# Project proposals have moved',
  '',
  'LFX Mentorship program proposals for this term are no longer submitted as a',
  'pull request to this file.',
  '',
  'Open an issue with the [LFX Mentorship Program Proposal form]' +
    '(https://github.com/cncf/mentoring/issues/new?template=lfx-program-proposal.yml)',
  'instead. See [How to propose a program]' +
    '(https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#how-to-propose-a-program)',
  'for the full process.',
  '',
].join('\n');

module.exports = {
  fmtShort,
  fmtLong,
  dateCell,
  renderTimeline,
  proposalDeadline,
  buildTermReadme,
  PROJECT_IDEAS_NOTICE,
};
