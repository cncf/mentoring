'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { runManifestPath, openRunManifest } = require('../lib/run-manifest');

const identity = { year: 2026, number: 3 };

function memFs() {
  const files = new Map();
  return {
    files,
    mkdirSync() {},
    appendFileSync(p, s) { files.set(p, (files.get(p) || '') + s); },
    readFileSync(p) { if (!files.has(p)) { const e = new Error('ENOENT'); e.code = 'ENOENT'; throw e; } return files.get(p); },
    existsSync(p) { return files.has(p); },
    rmSync(p) { files.delete(p); },
  };
}

test('runManifestPath: derives a per-repo, per-term path under .runs/', () => {
  const p = runManifestPath('/base', identity, 'nate-double-u/mentoring');
  assert.equal(p, '/base/.runs/nate-double-u-mentoring-2026-t3.jsonl');
});

test('openRunManifest: append then read round-trips records in order', () => {
  const fs = memFs();
  const m = openRunManifest({ path: '/base/.runs/x.jsonl', fs });
  m.append({ number: 1, title: 'A', nodeId: 'N1' });
  m.append({ number: 2, title: 'B', nodeId: 'N2' });
  assert.deepEqual(m.read(), [
    { number: 1, title: 'A', nodeId: 'N1' },
    { number: 2, title: 'B', nodeId: 'N2' },
  ]);
});

test('openRunManifest: read on a missing file yields an empty list', () => {
  const m = openRunManifest({ path: '/nope.jsonl', fs: memFs() });
  assert.deepEqual(m.read(), []);
  assert.equal(m.exists(), false);
});

test('openRunManifest: exists reflects state; remove deletes', () => {
  const fs = memFs();
  const m = openRunManifest({ path: '/base/.runs/x.jsonl', fs });
  assert.equal(m.exists(), false);
  m.append({ number: 1, title: 'A', nodeId: 'N1' });
  assert.equal(m.exists(), true);
  m.remove();
  assert.equal(m.exists(), false);
  assert.deepEqual(m.read(), []);
});

test('openRunManifest: tolerates a trailing newline / blank lines on read', () => {
  const fs = memFs();
  fs.files.set('/m.jsonl', '{"number":1,"title":"A","nodeId":"N1"}\n\n');
  const m = openRunManifest({ path: '/m.jsonl', fs });
  assert.deepEqual(m.read(), [{ number: 1, title: 'A', nodeId: 'N1' }]);
});

test('openRunManifest: remove on a missing file is a no-op', () => {
  const m = openRunManifest({ path: '/nope.jsonl', fs: memFs() });
  assert.doesNotThrow(() => m.remove());
});
