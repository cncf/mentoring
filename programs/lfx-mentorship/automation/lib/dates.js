'use strict';

// Shared ISO (YYYY-MM-DD) date helpers for the term-setup tooling.
//
// Kept dependency-free (no js-yaml) so any lib or test can use them without the
// ad-hoc CI install, and so date handling lives in exactly one place rather
// than being re-derived per module.

// Strict YYYY-MM-DD check: right shape, real calendar date, and round-trips
// (so 2026-02-30 is rejected rather than silently rolled forward to March).
function isValidISODate(s) {
  if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

// Parse a YYYY-MM-DD string into a UTC Date. Throws on anything that is not a
// real calendar date (wrong shape, out of range, or a date that would silently
// roll forward), so callers never receive a rolled-over Date.
function parseISO(iso) {
  if (!isValidISODate(iso)) throw new Error(`Invalid date: ${iso}`);
  return new Date(`${iso}T00:00:00Z`);
}

module.exports = { isValidISODate, parseISO };
