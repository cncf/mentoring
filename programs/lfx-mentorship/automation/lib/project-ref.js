'use strict';

// Parse the Project v2 URL an admin pastes into the term config (the board they
// created from the template) into { owner, number }. The runner resolves the
// board's node id from these with `gh project view`. Supports org and user
// project URLs, with an optional trailing view segment or query string:
//   https://github.com/orgs/<org>/projects/<n>
//   https://github.com/users/<user>/projects/<n>
function parseProjectRef(ref) {
  const s = String(ref || '').trim();
  const m = s.match(/^https:\/\/github\.com\/(?:orgs|users)\/([^/]+)\/projects\/(\d+)(?:[/?#].*)?$/);
  if (!m) {
    throw new Error(
      `Not a Project v2 URL: ${ref} ` +
      '(want https://github.com/orgs/<org>/projects/<n> or /users/<user>/projects/<n>)',
    );
  }
  return { owner: m[1], number: Number(m[2]) };
}

module.exports = { parseProjectRef };
