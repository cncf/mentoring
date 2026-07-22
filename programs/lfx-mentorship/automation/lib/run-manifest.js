'use strict';

// A run manifest records exactly what a populate run created, so teardown can
// delete precisely that set — never anything it didn't create. Records are
// appended one-per-line (JSON Lines) the instant each issue is created, so even
// a crash mid-run leaves an accurate record. Stored under a gitignored .runs/
// dir; the file IO is injectable (default node:fs) so the logic is unit-tested.

const nodeFs = require('node:fs');
const path = require('node:path');

const RUNS_DIR = '.runs';

// The manifest path for a (term, repo) pair under baseDir (the automation dir).
function runManifestPath(baseDir, identity, repo) {
  const slug = `${String(repo).replace('/', '-')}-${identity.year}-t${identity.number}`;
  return path.join(baseDir, RUNS_DIR, `${slug}.jsonl`);
}

function openRunManifest({ path: filePath, fs = nodeFs }) {
  return {
    path: filePath,

    exists() {
      return fs.existsSync(filePath);
    },

    // Append one record. Creates the .runs/ dir on first write.
    append(record) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.appendFileSync(filePath, `${JSON.stringify(record)}\n`);
    },

    // All records in file order; [] if the manifest doesn't exist yet.
    read() {
      if (!fs.existsSync(filePath)) return [];
      return fs.readFileSync(filePath, 'utf8')
        .split('\n')
        .filter((line) => line.trim() !== '')
        .map((line) => JSON.parse(line));
    },

    remove() {
      if (fs.existsSync(filePath)) fs.rmSync(filePath);
    },
  };
}

module.exports = { runManifestPath, openRunManifest, RUNS_DIR };
