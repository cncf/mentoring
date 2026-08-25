'use strict';

// Orchestration for populating a term's board with its admin issues.
// PURE of GitHub: every side effect goes through an injected `client`, so the
// sequencing (parents before children, correct sub-issue links, board dates) is
// unit-tested with a recording fake. The real `gh`-backed client lives in a thin
// adapter; this module never calls `gh` itself.
//
// client interface (all async):
//   createIssue({ title, labels })            -> { number, id, nodeId }
//   getIssue({ number })                      -> { number, id, nodeId }
//   getSubIssues({ parentNumber })            -> [childDatabaseId, ...]
//   addSubIssue({ parentNumber, childId })    -> void
//   addToBoard({ contentId })                 -> { itemId }
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
//
// Resume: ctx.completed carries the run manifest's records (creation = plan
// order) from an interrupted run. Every record but the last finished its full
// loop, so those plan items are skipped (their numbers still seed the parent
// map). The last record was created, but the crash window means its nest,
// board add, or fields may be missing, so it is re-verified idempotently.
// Records are matched to plan items by position and checked by title, so a
// changed plan (edited term-issues.yml) refuses to resume rather than
// mispairing issues.
async function populateTerm(plan, ctx, client) {
  const schedule = (ctx && ctx.schedule) || [];
  const completed = (ctx && ctx.completed) || [];

  if (completed.length > plan.length) {
    throw new Error(
      `manifest has ${completed.length} records but the plan has ${plan.length} issues; ` +
      'the plan must be the one the recorded run used',
    );
  }
  completed.forEach((rec, i) => {
    if (rec.title !== plan[i].title) {
      throw new Error(
        `manifest record ${i} ("${rec.title}") does not match the plan ("${plan[i].title}"); ` +
        'the plan must be unchanged to resume',
      );
    }
  });

  const numberById = new Map(); // plan id -> issue number (created or recorded)
  completed.forEach((rec, i) => numberById.set(plan[i].id, rec.number));

  let created = 0;
  let repaired = 0;
  const skipped = completed.length > 0 ? completed.length - 1 : 0;

  for (let i = 0; i < plan.length; i++) {
    if (i < completed.length - 1) continue; // finished on the recorded run
    const item = plan[i];
    const repairing = i === completed.length - 1;

    let issue;
    if (repairing) {
      issue = await client.getIssue({ number: completed[i].number });
      repaired += 1;
    } else {
      issue = await client.createIssue({ title: item.title, labels: item.labels });
      numberById.set(item.id, issue.number);
      created += 1;
    }

    if (item.parentId !== null && item.parentId !== undefined) {
      const parentNumber = numberById.get(item.parentId);
      if (parentNumber === undefined) {
        throw new Error(
          `plan is not in pre-order: parent "${item.parentId}" of "${item.id}" has not been created yet`,
        );
      }
      const alreadyNested =
        repairing && (await client.getSubIssues({ parentNumber })).includes(issue.id);
      if (!alreadyNested) await client.addSubIssue({ parentNumber, childId: issue.id });
    }

    const boardItem = await client.addToBoard({ contentId: issue.nodeId });
    const { start, due } = resolveDates(item.scheduleKey, schedule);
    await client.setFields({ itemId: boardItem.itemId, status: 'Todo', start, due });
  }

  return { created, skipped, repaired };
}

// Render a human preview of the populate plan: one line per issue, children
// indented under their section, with resolved dates in brackets. Pure — the
// runner prints it for --dry-run. Note parentId 0 is a real parent (the first
// section), so nesting is decided by an explicit null check, not truthiness.
function formatPlanPreview(plan, schedule) {
  return plan.map((item) => {
    const { start, due } = resolveDates(item.scheduleKey, schedule);
    const dates = start ? `  [${start}${due && due !== start ? ` \u2013 ${due}` : ''}]` : '';
    const indent = item.parentId != null ? '    ' : '  ';
    return `${indent}${item.title}${dates}`;
  });
}

module.exports = { resolveDates, assertSafeToCreate, populateTerm, formatPlanPreview };
