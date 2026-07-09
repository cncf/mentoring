'use strict';

// Guard for the teardown tool. Teardown permanently deletes a term's admin
// issues (and with them their board items and sub-issue links), so it is a
// dev-fork cleanup tool only and must never touch production.

const PROD_REPO = 'cncf/mentoring';

// Throw if `repo` is the production repo (or missing). Any other repo (a dev
// fork) is allowed.
function assertTeardownAllowed(repo) {
  if (!repo || typeof repo !== 'string') {
    throw new Error('teardown needs a "repo" (owner/repo) in the config');
  }
  if (repo.toLowerCase() === PROD_REPO) {
    throw new Error(
      `Refusing to tear down ${repo}: teardown permanently deletes issues and is a dev-fork ` +
      'cleanup tool only. It must never run against production.',
    );
  }
}

module.exports = { assertTeardownAllowed, PROD_REPO };
