'use strict';

// Example term-setup config for the LFX term-setup tooling.
//
// Copy this to a real config (e.g. terms/2027-t1.js), edit the term number and
// the schedule dates from the LFX schedule, then run the phase runners:
//   node bin/scaffold-term.js term-setup.example.js --dry-run
//
// A .json config works too (same shape, no comments). The schedule is the single
// source of truth for both the README Timeline table and the board's key dates,
// so the dates only get entered once.
//
// Schedule entry fields:
//   key      required, stable id (snake_case). Must include "proposals_open".
//   label    required, the Activity cell text in the README timeline.
//   start    required, YYYY-MM-DD.
//   end      optional, YYYY-MM-DD for a date range.
//   time     optional, comma-appended suffix, e.g. "18:00 UTC" or "Times TBD (…)".
//   note     optional, space-appended suffix, e.g. an italic "*(…)*" aside.
//   timeline optional, set false to keep a board-only anchor out of the README.

module.exports = {
  term: { year: 2026, number: 3 },

  schedule: [
    { key: 'proposals_open', label: 'Project Proposals Open', start: '2026-07-01', end: '2026-07-28', time: '18:00 UTC' },
    { key: 'candidate_info_sessions', label: 'Mentee Candidate Info Sessions', start: '2026-07-21', time: 'Times TBD (will be multiple timezone options)' },
    { key: 'applications_open', label: 'Mentee Applications Open', start: '2026-08-03', end: '2026-08-18', time: '18:00 UTC' },
    { key: 'application_review', label: 'Application Review Period (2 weeks)', start: '2026-08-19', end: '2026-09-01', time: '18:00 UTC' },
    { key: 'selection_notify', label: 'Selection Notifications', start: '2026-09-02', end: '2026-09-04', note: '*(notifications may take a few days to reach all mentees)*' },
    { key: 'term_start', label: 'Mentorship Program Begins', start: '2026-09-07' },
    { key: 'kickoff_call', label: 'Mentorship Kick Off Call', start: '2026-09-08', time: 'Times TBD (will be multiple timezone options)' },
    { key: 'midterm_evals', label: 'Midterm Mentee Evaluations', start: '2026-10-20', time: '18:00 UTC' },
    { key: 'first_stipends', label: 'First Stipend Payments', start: '2026-10-21' },
    { key: 'final_evals', label: 'Final Mentee Evaluations', start: '2026-11-24', time: '18:00 UTC' },
    { key: 'second_stipends', label: 'Second Stipend Payments', start: '2026-11-25' },
    { key: 'term_end', label: 'Last Day of Term', start: '2026-11-27' },
  ],

  // Used by later phases (issues/board). Safe to leave for the scaffold phase.
  // repo: 'nate-double-u/mentoring',   // dev fork; use cncf/mentoring for prod
  // project: 90,                       // org Project v2 number (created from the template)
};
