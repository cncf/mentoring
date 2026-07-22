'use strict';

// Resolve the Project v2 board fields the populate step needs, from the GraphQL
// node payload of a ProjectV2 `fields` query. The board (created from the
// template) must have a single-select "Status" field and date fields
// "Start Date" and "Due Date"; a missing field or status option is a setup
// error, surfaced clearly so the admin can fix the template and re-run.

const STATUS = 'Status';
const START = 'Start Date';
const DUE = 'Due Date';

// Parse the `{ fields: { nodes: [...] } }` payload into a flat lookup:
//   { statusFieldId, statusOptions: {name->id}, startFieldId, dueFieldId }
function parseBoardFields(projectNode) {
  const nodes = (projectNode && projectNode.fields && projectNode.fields.nodes) || [];
  const byName = new Map(nodes.filter((n) => n && n.name).map((n) => [n.name, n]));
  const status = byName.get(STATUS);
  const start = byName.get(START);
  const due = byName.get(DUE);
  return {
    statusFieldId: status ? status.id : null,
    statusOptions: status && Array.isArray(status.options)
      ? Object.fromEntries(status.options.map((o) => [o.name, o.id]))
      : {},
    startFieldId: start ? start.id : null,
    dueFieldId: due ? due.id : null,
  };
}

// Throw a clear setup error if the board is missing a required field or the
// Status option the populate step sets (default "Todo"). Returns the fields.
function requireFields(fields, { statusOption = 'Todo' } = {}) {
  const missing = [];
  if (!fields.statusFieldId) missing.push(`a single-select "${STATUS}" field`);
  if (!fields.startFieldId) missing.push(`a date "${START}" field`);
  if (!fields.dueFieldId) missing.push(`a date "${DUE}" field`);
  if (missing.length) {
    throw new Error(`Board is missing ${missing.join(', ')}. Add ${missing.length > 1 ? 'them' : 'it'} to the template board and re-run.`);
  }
  if (!fields.statusOptions[statusOption]) {
    throw new Error(`Board "${STATUS}" field has no "${statusOption}" option. Add it (or adjust the template) and re-run.`);
  }
  return fields;
}

module.exports = { parseBoardFields, requireFields, FIELD_NAMES: { STATUS, START, DUE } };
