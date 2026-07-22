'use strict';

// Turn the canonical term-issues YAML tree (term-issues.yml) into an ordered,
// flat issue plan the runner creates on the board. Pure logic (no IO); the
// runner does the `gh` calls.
//
// Structure rules (mirroring the sample boards #85/#89/#90):
//   - A node with `children` is a section/sub-section parent; its title gets
//     the "[LFX YYYY TN]" prefix. Leaf tasks keep their plain title.
//   - Pre-order DFS, so a parent always precedes its children (the runner needs
//     the parent's issue number before it can link a sub-issue).
//   - Every issue gets four labels: "lfx mentorship", the term label, the year,
//     and "administration".
//   - `schedule_key` is carried through for the board-date phase; keyless nodes
//     (info sessions, kickoff, ...) are left undated.

const yaml = require('js-yaml');

// Parse term-issues YAML text into its document object.
function parseIssues(text) {
  return yaml.load(String(text), { schema: yaml.CORE_SCHEMA });
}

// Build the ordered issue plan. Each item:
//   { id, title, labels, parentId, scheduleKey, isParent }
// `id` is a stable index; `parentId` is the parent item's id (null at top level).
function buildIssuePlan(doc, identity) {
  const sections = doc && Array.isArray(doc.sections) ? doc.sections : [];
  const labels = ['lfx mentorship', identity.label, identity.yearLabel, 'administration'];
  const plan = [];
  let nextId = 0;

  function walk(node, parentId) {
    if (!node || typeof node.title !== 'string' || !node.title.trim()) {
      throw new Error(`Every issue needs a title (parentId=${parentId})`);
    }
    const children = Array.isArray(node.children) ? node.children : [];
    const isParent = children.length > 0;
    const id = nextId++;
    plan.push({
      id,
      title: isParent ? `${identity.issuePrefix} ${node.title}` : node.title,
      labels: labels.slice(),
      parentId,
      scheduleKey: node.schedule_key || null,
      isParent,
    });
    for (const child of children) walk(child, id);
  }

  for (const section of sections) walk(section, null);
  return plan;
}

module.exports = { parseIssues, buildIssuePlan };
