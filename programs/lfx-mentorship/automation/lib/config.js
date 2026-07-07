'use strict';

// Validation for a term-setup config (the per-term input a maintainer fills).
//
// The config is a plain object loaded from a .js or .json file by the runner
// (see bin/). It drives every phase, so it is validated once, up front, with
// errors that name the offending entry. Only the fields the current phases need
// are checked; unknown fields (e.g. a future board mapping) are passed through
// untouched so one config can grow across phases.
//
// Shape:
//   {
//     term:     { year: 2026, number: 3 },
//     schedule: [ { key, label, start, end?, time?, note? }, ... ],
//     // optional, used by later phases:
//     repo?: 'cncf/mentoring', project?: 91
//   }

const { termIdentity } = require('./term');

// Strict YYYY-MM-DD check: right shape, real calendar date, and round-trips
// (so 2026-02-30 is rejected rather than silently rolled to March).
function isValidISODate(s) {
  if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

// Validate a raw config object. Throws Error with a descriptive message on the
// first problem; returns the config on success.
function validateConfig(raw) {
  if (!raw || typeof raw !== 'object') throw new Error('config must be an object');

  if (!raw.term) throw new Error('config is missing "term"');
  termIdentity(raw.term); // throws on a bad year or term number

  if (!Array.isArray(raw.schedule) || raw.schedule.length === 0) {
    throw new Error('config "schedule" must be a non-empty array');
  }

  const seen = new Set();
  raw.schedule.forEach((e, i) => {
    const where = e && (e.key || e.label) ? `"${e.key || e.label}"` : `entry ${i}`;
    if (!e || typeof e !== 'object') throw new Error(`schedule ${where} must be an object`);
    if (!e.key || typeof e.key !== 'string') throw new Error(`schedule ${where} is missing a "key"`);
    if (!e.label || typeof e.label !== 'string') throw new Error(`schedule "${e.key}" is missing a "label"`);
    if (!e.start) throw new Error(`schedule "${e.key}" is missing a "start" date`);
    if (!isValidISODate(e.start)) {
      throw new Error(`schedule "${e.key}" has an invalid start date: ${e.start} (want YYYY-MM-DD)`);
    }
    if (e.end != null && !isValidISODate(e.end)) {
      throw new Error(`schedule "${e.key}" has an invalid end date: ${e.end} (want YYYY-MM-DD)`);
    }
    if (seen.has(e.key)) throw new Error(`schedule has a duplicate key: ${e.key}`);
    seen.add(e.key);
  });

  if (!seen.has('proposals_open')) {
    throw new Error('schedule must include a "proposals_open" entry (the README proposal deadline uses it)');
  }

  return raw;
}

module.exports = { validateConfig, isValidISODate };
