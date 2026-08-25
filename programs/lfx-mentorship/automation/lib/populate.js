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
//   listIssues({ labels })                    -> [{ number, title, nodeId }, ...]
//                                                (resume only; open issues, every label required)
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
//
// Records are matched to plan items by position and verified field-by-field:
// title, scheduleKey, parent number, and the dates the current schedule
// resolves must all equal what the recorded run used, so an edited record
// prefix refuses to resume rather than silently mispairing existing issues.
// Unrecorded plan items do not exist yet, so they are created from the
// current plan exactly as a fresh run would; editing them between runs is
// allowed. Fields absent from a record (a legacy manifest) skip their checks.
//
// A create can succeed remotely without being recorded (the response is lost
// or the process dies before the manifest write). Resume closes that gap by
// searching for an issue matching the next uncreated plan item; if one exists
// outside the manifest, it refuses with instructions to adopt or close it
// rather than creating a duplicate.
//
// ctx.onCreated, when given, receives each created issue's full record
// ({ number, title, nodeId, parentNumber, scheduleKey, start, due }) the
// moment it exists, so the runner can persist it before any later step can
// crash; skipped and repaired issues are already recorded.
async function populateTerm(plan, ctx, client) {
  const schedule = (ctx && ctx.schedule) || [];
  const completed = (ctx && ctx.completed) || [];
  const onCreated = (ctx && ctx.onCreated) || null;

  if (completed.length > plan.length) {
    throw new Error(
      `manifest has ${completed.length} records but the plan has ${plan.length} issues; ` +
      'the plan must be the one the recorded run used',
    );
  }

  const numberById = new Map(); // plan id -> issue number (created or recorded)
  completed.forEach((rec, i) => numberById.set(plan[i].id, rec.number));

  const refuse = (i, what) => {
    throw new Error(`manifest record ${i} ("${completed[i].title}") ${what}; the plan must be unchanged to resume`);
  };
  completed.forEach((rec, i) => {
    const item = plan[i];
    if (rec.title !== item.title) {
      refuse(i, `does not match the plan ("${item.title}")`);
    }
    const planKey = item.scheduleKey || null;
    if (rec.scheduleKey !== undefined && rec.scheduleKey !== planKey) {
      refuse(i, `was created with scheduleKey ${JSON.stringify(rec.scheduleKey)} but the plan now has ${JSON.stringify(planKey)}`);
    }
    if (rec.parentNumber !== undefined) {
      const expected = item.parentId != null ? numberById.get(item.parentId) : null;
      if (rec.parentNumber !== expected) {
        refuse(i, `recorded parent ${rec.parentNumber === null ? 'none' : `#${rec.parentNumber}`} but the plan now expects ${expected === null ? 'none' : `#${expected}`}`);
      }
    }
    if (rec.start !== undefined || rec.due !== undefined) {
      const { start, due } = resolveDates(item.scheduleKey, schedule);
      if (rec.start !== start || rec.due !== due) {
        refuse(i, `recorded dates ${rec.start}/${rec.due} but the schedule now resolves ${start}/${due}`);
      }
    }
  });

  if (completed.length > 0 && completed.length < plan.length) {
    const next = plan[completed.length];
    const recorded = new Set(completed.map((rec) => rec.number));
    const strays = (await client.listIssues({ labels: next.labels })).filter(
      (x) => x.title === next.title && !recorded.has(x.number),
    );
    if (strays.length > 0) {
      const s = strays[0];
      const line = JSON.stringify({ number: s.number, title: s.title, nodeId: s.nodeId });
      throw new Error(
        `found issue #${s.number} ("${s.title}") matching the next uncreated plan item but ` +
        'missing from the manifest; a create likely succeeded without being recorded. ' +
        `To adopt it, append this line to the manifest and re-run with --resume: ${line} ` +
        'Or close the issue and re-run with --resume to recreate it.',
      );
    }
  }

  let created = 0;
  let repaired = 0;
  const skipped = completed.length > 0 ? completed.length - 1 : 0;

  for (let i = 0; i < plan.length; i++) {
    if (i < completed.length - 1) continue; // finished on the recorded run
    const item = plan[i];
    const repairing = i === completed.length - 1;

    // Resolve the parent first, so a malformed plan fails before an orphan
    // issue is created, and the created record can carry its parent number.
    let parentNumber = null;
    if (item.parentId !== null && item.parentId !== undefined) {
      parentNumber = numberById.get(item.parentId);
      if (parentNumber === undefined) {
        throw new Error(
          `plan is not in pre-order: parent "${item.parentId}" of "${item.id}" has not been created yet`,
        );
      }
    }
    const { start, due } = resolveDates(item.scheduleKey, schedule);

    let issue;
    if (repairing) {
      issue = await client.getIssue({ number: completed[i].number });
      repaired += 1;
    } else {
      issue = await client.createIssue({ title: item.title, labels: item.labels });
      numberById.set(item.id, issue.number);
      created += 1;
      if (onCreated) {
        await onCreated({
          number: issue.number,
          title: item.title,
          nodeId: issue.nodeId,
          parentNumber,
          scheduleKey: item.scheduleKey || null,
          start,
          due,
        });
      }
    }

    if (parentNumber !== null) {
      const alreadyNested =
        repairing && (await client.getSubIssues({ parentNumber })).includes(issue.id);
      if (!alreadyNested) await client.addSubIssue({ parentNumber, childId: issue.id });
    }

    const boardItem = await client.addToBoard({ contentId: issue.nodeId });
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
