'use strict';

// Validation for a term-setup config (the per-term input a maintainer fills).
//
// The config is a plain object loaded from a .yml, .yaml, or .json file by the runner
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
const { isValidISODate } = require('./dates');
const yaml = require('js-yaml');

// Parse a config file's text into an object, chosen by extension. YAML is
// parsed with CORE_SCHEMA so unquoted ISO dates (2026-07-01) stay strings
// rather than being coerced to Date objects by the default schema. Supported:
// .yml / .yaml (YAML) and .json (JSON). The runner supplies the raw text and
// the file extension; validation happens separately in validateConfig.
function parseConfig(text, ext) {
  const e = String(ext || '').toLowerCase();
  if (e === '.yml' || e === '.yaml') {
    return yaml.load(text, { schema: yaml.CORE_SCHEMA });
  }
  if (e === '.json') {
    return JSON.parse(text);
  }
  throw new Error(`Config must be a .yml, .yaml, or .json file (got ${ext || 'no extension'})`);
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
    if (e.end != null && e.end < e.start) {
      throw new Error(`schedule "${e.key}" has end date ${e.end} before start date ${e.start}`);
    }
    if (seen.has(e.key)) throw new Error(`schedule has a duplicate key: ${e.key}`);
    seen.add(e.key);
  });

  if (!seen.has('proposals_open')) {
    throw new Error('schedule must include a "proposals_open" entry (the README proposal deadline uses it)');
  }

  return raw;
}

module.exports = { validateConfig, parseConfig, isValidISODate };
