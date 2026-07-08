'use strict';

// Orchestration for populating a term's board with its admin issues.
// PURE of GitHub: every side effect goes through an injected `client`, so the
// sequencing (parents before children, correct sub-issue links, board dates) is
// unit-tested with a recording fake. The real `gh`-backed client lives in a thin
// adapter; this module never calls `gh` itself.
//
// client interface (all async):
//   createIssue({ title, labels })            -> { number, id }
//   addSubIssue({ parentNumber, childId })    -> void
//   addToBoard({ number })                    -> { itemId }
//   setFields({ itemId, status, start, due }) -> void

// Resolve a schedule_key to board dates. A ranged entry maps to start + end; a
// single-day entry sets due = start; a null/unknown key, or an entry that is
// not scheduled yet (no start), yields no dates.
function resolveDates(scheduleKey, schedule) {
  if (!scheduleKey) return { start: null, due: null };
  const entry = (schedule || []).find((e) => e.key === scheduleKey);
  if (!entry || !entry.start) return { start: null, due: null };
  return { start: entry.start, due: entry.end || entry.start };
}

// Guard against an accidental double-run: refuse to create when the term
// already has admin issues unless the caller forces it. Pure; the runner
// supplies the existing count from a `gh` query.
function assertSafeToCreate({ existingCount, force } = {}) {
  if (existingCount > 0 && !force) {
    throw new Error(
      `This term already has ${existingCount} admin issue(s). ` +
      `Re-running would duplicate them; tear down first, or pass --force.`,
    );
  }
}

// Create every issue in the plan (pre-order, so a parent exists before its
// children), link each child as a sub-issue of its parent, add each to the
// board, and set Status + resolved dates. Returns a small summary.
async function populateTerm(plan, ctx, client) {
  const schedule = (ctx && ctx.schedule) || [];
  const numberById = new Map(); // plan id -> created issue number
  let created = 0;

  for (const item of plan) {
    const issue = await client.createIssue({ title: item.title, labels: item.labels });
    numberById.set(item.id, issue.number);
    created += 1;

    if (item.parentId !== null && item.parentId !== undefined) {
      const parentNumber = numberById.get(item.parentId);
      if (parentNumber === undefined) {
        throw new Error(
          `plan is not in pre-order: parent "${item.parentId}" of "${item.id}" has not been created yet`,
        );
      }
      await client.addSubIssue({ parentNumber, childId: issue.id });
    }

    const boardItem = await client.addToBoard({ number: issue.number });
    const { start, due } = resolveDates(item.scheduleKey, schedule);
    await client.setFields({ itemId: boardItem.itemId, status: 'Todo', start, due });
  }

  return { created };
}

module.exports = { resolveDates, assertSafeToCreate, populateTerm };
