'use strict';

// Field validation shared by the LFX proposal workflows.
//
// The regexes are lifted verbatim from lfx-proposal-validate.yml. validateMentors
// and validateUpstreamUrl capture the decision logic of that workflow's mentor
// loop (validate.yml mentor block) and Upstream Issue URL check as pure
// functions that return structured error codes (presentation stays in the
// workflow). Error codes, not prose, are the stable contract.

const yaml = require('js-yaml');
const { normalizeMentorEmail, parseIssueForm } = require('./parse.js');

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

    const [name, handle, rawEmail, lfid] = parts;
    const email = normalizeMentorEmail(rawEmail);

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

// Canonical form of an upstream-issue URL for cross-proposal comparison. Drops
// the protocol, a leading "www.", the #fragment, and any trailing slash on the
// path, then lowercases the host and path so the same target in different
// casing compares equal. The ?query string is PRESERVED verbatim (case and all):
// an upstream "issue" is often a filtered issues list whose identity lives
// entirely in the query (e.g. a kubernetes/kubernetes/issues?q=...label:area/foo
// link, cncf/mentoring#1960), so dropping it would collapse distinct upstreams
// to the same /issues path, and case-folding it could merge case-sensitive query
// values; both raise false duplicates. Blank in, blank out.
function normalizeUpstreamUrl(url) {
  const s = String(url == null ? '' : url).trim();
  if (!s) return '';
  let rest = s.replace(/^https?:\/\//i, '').replace(/^www\./i, '');
  rest = rest.split('#')[0];                       // drop fragment (page anchor)
  const qIdx = rest.indexOf('?');
  const path = (qIdx === -1 ? rest : rest.slice(0, qIdx)).replace(/\/+$/, '');
  const query = qIdx === -1 ? '' : rest.slice(qIdx); // preserved verbatim
  return path.toLowerCase() + query;
}

// Given the current proposal's upstream URL and other proposals
// ({ number, url }), return the numbers whose upstream URL matches after
// normalization. A blank current URL matches nothing (so proposals that both
// omit the URL are not flagged as duplicates of each other). Input order is
// preserved.
function findDuplicateUpstreamIssues(url, others) {
  const target = normalizeUpstreamUrl(url);
  if (!target) return [];
  return (others || [])
    .filter((o) => o && normalizeUpstreamUrl(o.url) === target)
    .map((o) => o.number);
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

// LFX caps a custom application prerequisite's name at 20 characters and its
// description at 500. The proposal form documents these limits but nothing
// enforced them, so an over-long custom prereq passed validation and only
// failed later on the LFX platform (see #1954).
const CUSTOM_PREREQ_NAME_MAX = 20;
const CUSTOM_PREREQ_DESC_MAX = 500;

// Validate the custom application prerequisite. There is a custom prerequisite
// to validate when the "Custom Prerequisite" box is checked OR any copy is
// present; only a fully empty, unchecked prerequisite is skipped. The name and
// description are required and must fit the LFX limits (name <= 20, description
// <= 500). Because the export sends the prerequisite to LFX only when the box
// is checked (lfx-export.yml keys off that box), copy left with the box
// unchecked would be silently dropped, so that is flagged too. All problems are
// returned together so the proposer sees every needed edit at once. Fields are
// trimmed before measuring, matching the trimmed value the export sends.
// Returns { ok, errors } with codes 'unchecked-with-copy', 'name-missing',
// 'name-too-long', 'description-missing', 'description-too-long'; the too-long
// codes carry { length, max }. Prose stays in the workflow, mirroring
// validateMentors.
function validateCustomPrerequisite({ checked, name, description } = {}) {
  const errors = [];
  const n = (name || '').trim();
  const d = (description || '').trim();
  const hasCopy = n !== '' || d !== '';

  // A fully empty, unchecked prerequisite: nothing to validate.
  if (!checked && !hasCopy) return { ok: true, errors };

  // Copy filled in but the box unchecked: the export keys off the box, so the
  // details would be silently dropped. Flag it, then still run the field checks
  // below so every needed edit is reported in one pass.
  if (!checked) errors.push({ code: 'unchecked-with-copy' });

  if (!n) {
    errors.push({ code: 'name-missing' });
  } else if (n.length > CUSTOM_PREREQ_NAME_MAX) {
    errors.push({ code: 'name-too-long', length: n.length, max: CUSTOM_PREREQ_NAME_MAX });
  }

  if (!d) {
    errors.push({ code: 'description-missing' });
  } else if (d.length > CUSTOM_PREREQ_DESC_MAX) {
    errors.push({ code: 'description-too-long', length: d.length, max: CUSTOM_PREREQ_DESC_MAX });
  }

  return { ok: errors.length === 0, errors };
}

// ── Structural completeness of the submitted issue form ─────────────────
// A GitHub issue form writes every field as a "### <label>" section (empty ones
// as "_No response_"), so a missing heading means the body was hand-altered.
// expectedFormSections reads the intended section labels from the issue
// template (skipping markdown blocks, which have no heading); missingSections
// returns the expected labels that are absent from a body. The workflow treats
// a non-empty result as a validation error (grandfathering already-approved
// proposals, which may predate a later template field). (#1928)
function expectedFormSections(templateYaml) {
  let doc;
  try { doc = yaml.load(templateYaml); } catch (e) { return []; }
  const body = doc && Array.isArray(doc.body) ? doc.body : [];
  const out = [];
  for (const el of body) {
    if (!el || el.type === 'markdown') continue;
    const label = el.attributes && el.attributes.label;
    if (label != null && String(label).trim()) out.push(String(label).trim());
  }
  return out;
}

function missingSections(body, expected) {
  const present = parseIssueForm(body);
  return (expected || []).filter((label) => !(label in present));
}

// LFX requires a Coding Challenge URL when the "Coding Challenge" prerequisite
// is checked. A URL left with the box unchecked is dropped by the export (it
// keys off the box), so that mismatch is flagged too. Mirrors
// validateCustomPrerequisite. Codes: 'url-missing', 'url-invalid',
// 'unchecked-with-url'.
function validateCodingChallenge({ checked, url } = {}) {
  const errors = [];
  const u = (url || '').trim();
  if (!checked && !u) return { ok: true, errors };
  if (!checked) {
    errors.push({ code: 'unchecked-with-url' });
    return { ok: false, errors };
  }
  if (!u) errors.push({ code: 'url-missing' });
  else if (!urlRe.test(u)) errors.push({ code: 'url-invalid', value: u });
  return { ok: errors.length === 0, errors };
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
  validateCustomPrerequisite,
  validateCodingChallenge,
  CUSTOM_PREREQ_NAME_MAX,
  CUSTOM_PREREQ_DESC_MAX,
  normalizeUpstreamUrl,
  expectedFormSections,
  missingSections,
  findDuplicateUpstreamIssues,
};
