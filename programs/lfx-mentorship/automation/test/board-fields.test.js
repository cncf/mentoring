'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseBoardFields, requireFields } = require('../lib/board-fields');

// Shape of a ProjectV2 `fields(first:n){ nodes { ...FieldCommon, ...SingleSelect } }`
// GraphQL response node.
function fullNode() {
  return {
    fields: {
      nodes: [
        { id: 'PVTF_status', name: 'Status', options: [
          { id: 'opt_todo', name: 'Todo' },
          { id: 'opt_prog', name: 'In Progress' },
          { id: 'opt_done', name: 'Done' },
        ] },
        { id: 'PVTF_start', name: 'Start Date' },
        { id: 'PVTF_due', name: 'Due Date' },
        { id: 'PVTF_title', name: 'Title' },
        {}, // an unnamed node (e.g. an unsupported field type) is ignored
      ],
    },
  };
}

test('parseBoardFields: extracts status field id, options, and date field ids', () => {
  const f = parseBoardFields(fullNode());
  assert.equal(f.statusFieldId, 'PVTF_status');
  assert.deepEqual(f.statusOptions, { Todo: 'opt_todo', 'In Progress': 'opt_prog', Done: 'opt_done' });
  assert.equal(f.startFieldId, 'PVTF_start');
  assert.equal(f.dueFieldId, 'PVTF_due');
});

test('parseBoardFields: missing fields yield nulls and empty options', () => {
  const f = parseBoardFields({ fields: { nodes: [{ id: 'x', name: 'Title' }] } });
  assert.equal(f.statusFieldId, null);
  assert.deepEqual(f.statusOptions, {});
  assert.equal(f.startFieldId, null);
  assert.equal(f.dueFieldId, null);
});

test('parseBoardFields: tolerates an empty or malformed node', () => {
  assert.deepEqual(parseBoardFields(null).statusOptions, {});
  assert.equal(parseBoardFields({}).startFieldId, null);
});

test('requireFields: passes a complete board and returns the fields', () => {
  const f = parseBoardFields(fullNode());
  assert.equal(requireFields(f), f);
});

test('requireFields: lists every missing required field', () => {
  const f = parseBoardFields({ fields: { nodes: [{ id: 's', name: 'Status', options: [{ id: 'o', name: 'Todo' }] }] } });
  assert.throws(() => requireFields(f), /Start Date/);
  assert.throws(() => requireFields(f), /Due Date/);
});

test('requireFields: rejects a board whose Status has no Todo option', () => {
  const f = parseBoardFields({
    fields: { nodes: [
      { id: 's', name: 'Status', options: [{ id: 'o', name: 'Backlog' }] },
      { id: 'st', name: 'Start Date' },
      { id: 'du', name: 'Due Date' },
    ] },
  });
  assert.throws(() => requireFields(f), /Todo/);
});

test('requireFields: honors a custom status option name', () => {
  const f = parseBoardFields({
    fields: { nodes: [
      { id: 's', name: 'Status', options: [{ id: 'o', name: 'Backlog' }] },
      { id: 'st', name: 'Start Date' },
      { id: 'du', name: 'Due Date' },
    ] },
  });
  assert.doesNotThrow(() => requireFields(f, { statusOption: 'Backlog' }));
});
