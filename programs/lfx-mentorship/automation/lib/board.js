'use strict';

// Project-board status logic shared by all four LFX proposal workflows.
//
// Automation owns the proposal lifecycle only through "Exported". The
// post-export columns are advanced by hand by the administrator, so they are
// listed in ADMIN_OWNED and never overwritten by automation (except to reflect
// a closed issue). Extracted from lfx-proposal-board-sync.yml (status cascade +
// sync guard + status read retry) and lfx-export.yml (export guard).

const ADMIN_OWNED = new Set([
  'Posted to LFX',
  'LFX Approved',
  'Mentors added',
  'Mentors listed',
  'Open for Applications',
  'Applications Closed',
]);

// Map issue labels (and the triggering action) to the target board status.
// A closed issue always maps to "Closed"; otherwise the status is derived from
// labels, advancing only as far as "Exported".
function determineStatus(labels, action) {
  if (action === 'closed') return 'Closed';
  if (labels.includes('Exported')) return 'Exported';
  if (labels.includes('CNCF Approved')) return 'CNCF Approved';
  if (labels.includes('Maintainer/Contribex Approved') && labels.includes('Mentors Confirmed')) {
    return 'Approved/confirmed';
  }
  if (labels.includes('Awaiting Maintainer/Contribex Approval')
      || labels.includes('Awaiting Mentor Confirmation')) {
    return 'Awaiting approvals/confirmations';
  }
  return 'Inbox';
}

// Resolve the approvals workflow's target board status, honoring the precedence
// closed > /lfx-url force > label-derived status. A closed issue always maps to
// "Closed" so the §4.3.5 board move never resurrects a closed card; otherwise a
// successful /lfx-url advance forces "Posted to LFX".
function resolveBoardStatus({ labels, closed, forcePosted }) {
  if (closed) return 'Closed';
  if (forcePosted) return 'Posted to LFX';
  return determineStatus(labels, null);
}

// Sync guard (board-sync / validate / approvals): skip the board write when the
// card already sits in an admin-owned column (unless the issue just closed), or
// when the status read failed and we are about to advance the card (set
// "Exported" or the /lfx-url "Posted to LFX"), so a transient read error never
// pulls a manually-placed card back.
function shouldSkipSync(currentStatus, targetStatus, readFailed) {
  if (currentStatus && ADMIN_OWNED.has(currentStatus) && targetStatus !== 'Closed') return true;
  if (readFailed && (targetStatus === 'Exported' || targetStatus === 'Posted to LFX')) return true;
  return false;
}

// Export guard: the export loop always targets "Exported", so skip whenever the
// card is admin-owned or the status read failed.
function shouldSkipExport(currentStatus, readFailed) {
  if (currentStatus && ADMIN_OWNED.has(currentStatus)) return true;
  if (readFailed) return true;
  return false;
}

// Read the card's current Status with a small retry. readFn(attempt) is called
// with the 1-based attempt number and must resolve to the GraphQL node shape
// ({ node: { fieldValueByName: { name } } }); on every attempt throwing,
// readFailed is true. onError(attempt, err), when given, is called for each
// failed attempt (used to preserve the workflows' per-attempt warning logs).
// The sleep is injectable so tests need not wait.
async function readStatusWithRetry(readFn, { attempts = 2, delayMs = 1000, sleep, onError } = {}) {
  const wait = sleep || ((ms) => new Promise(r => setTimeout(r, ms)));
  let currentStatus = null;
  let readFailed = false;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const _cur = await readFn(attempt);
      currentStatus = _cur?.node?.fieldValueByName?.name || null;
      readFailed = false;
      break;
    } catch (e) {
      readFailed = true;
      if (onError) onError(attempt, e);
      if (attempt < attempts) await wait(delayMs);
    }
  }
  return { currentStatus, readFailed };
}

module.exports = {
  ADMIN_OWNED,
  determineStatus,
  resolveBoardStatus,
  shouldSkipSync,
  shouldSkipExport,
  readStatusWithRetry,
};
