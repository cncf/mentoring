'use strict';

// Field validation shared by the LFX proposal workflows.
//
// The regexes are lifted verbatim from lfx-proposal-validate.yml. validateMentors
// and validateUpstreamUrl capture the decision logic of that workflow's mentor
// loop (validate.yml mentor block) and Upstream Issue URL check as pure
// functions that return structured error codes (presentation stays in the
// workflow). Error codes, not prose, are the stable contract.

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlRe = /^https?:\/\/\S+$/;
const ghHandleRe = /^@[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;
// LF Username (LFID): a single token, no spaces, '@', or URL slashes.
const lfidRe = /^[^\s@/]+$/;

// Validate the Mentors field (pipe-separated, one mentor per line).
// Returns { ok, count, errors }, where each error is { role, code, ... }.
// Codes: 'empty', 'too-many', 'count', 'name', 'handle', 'email',
//        'dup-handle', 'dup-email', 'lfid-missing', 'lfid-format', 'dup-lfid'.
function validateMentors(raw) {
  const errors = [];
  if (!raw || !raw.trim()) {
    errors.push({ role: null, code: 'empty' });
    return { ok: false, count: 0, errors };
  }

  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (lines.length > 4) {
    errors.push({ role: null, code: 'too-many', count: lines.length });
  }

  const handles = new Set();
  const emails = new Set();
  const lfids = new Set();

  lines.forEach((line, i) => {
    const role = i === 0 ? 'Primary mentor' : `Mentor ${i + 1}`;
    const parts = line.split('|').map(p => p.trim());

    if (parts.length !== 3 && parts.length !== 4) {
      errors.push({ role, code: 'count', got: parts.length, line });
      return;
    }

    const [name, handle, email, lfid] = parts;

    if (!name) errors.push({ role, code: 'name' });
    if (!ghHandleRe.test(handle)) errors.push({ role, code: 'handle', value: handle });
    if (!emailRe.test(email)) errors.push({ role, code: 'email', value: email });

    if (handles.has(handle.toLowerCase())) errors.push({ role, code: 'dup-handle', value: handle });
    handles.add(handle.toLowerCase());

    if (emails.has(email.toLowerCase())) errors.push({ role, code: 'dup-email', value: email });
    emails.add(email.toLowerCase());

    if (!lfid) {
      errors.push({ role, code: 'lfid-missing' });
    } else if (!lfidRe.test(lfid)) {
      errors.push({ role, code: 'lfid-format', value: lfid });
    } else if (lfids.has(lfid.toLowerCase())) {
      errors.push({ role, code: 'dup-lfid', value: lfid });
    }
    if (lfid) lfids.add(lfid.toLowerCase());
  });

  return { ok: errors.length === 0, count: lines.length, errors };
}

// Validate the Upstream Issue URL field. Returns a single error code or null.
// Codes: 'empty', 'format', 'multiple'.
function validateUpstreamUrl(raw) {
  const url = (raw || '').trim();
  if (!url) return 'empty';
  if (!urlRe.test(url)) return 'format';
  if (url.includes(',')) return 'multiple';
  return null;
}

// LFX programs are encouraged — not required — to have at least two mentors, so
// the load is shared and a co-mentor can cover absences. This is a soft
// preference the reviewers have long applied by hand (see PRs #1321, #1323,
// #1348): a lone experienced mentor is acceptable. Given a validateMentors()
// result, returns a warning descriptor { code, count } when the field is valid
// but lists at least one and fewer than MIN_PREFERRED_MENTORS mentors, else
// null. Stays silent when validation failed (result.ok === false): the count is
// unreliable then and the proposer already has hard errors to fix, so nudging
// "only one mentor" on top would be misleading. Zero mentors is likewise a hard
// error (validateMentors 'empty'), so it is not nudged. Prose stays in the
// workflow, mirroring the error-code pattern of validateMentors.
const MIN_PREFERRED_MENTORS = 2;

function mentorCountWarning(result) {
  if (!result || result.ok !== true) return null;
  const { count } = result;
  if (typeof count !== 'number' || !Number.isFinite(count)) return null;
  if (count >= 1 && count < MIN_PREFERRED_MENTORS) return { code: 'few-mentors', count };
  return null;
}

module.exports = {
  emailRe,
  urlRe,
  ghHandleRe,
  lfidRe,
  validateMentors,
  validateUpstreamUrl,
  mentorCountWarning,
  MIN_PREFERRED_MENTORS,
};
