'use strict';

// Slash-command parsing for the LFX proposal approvals workflow
// (lfx-proposal-approvals.yml). Extracted so the workflow is thin glue over a
// unit-tested function.
//
// A comment may carry more than one command (e.g. a mentor who is also a
// maintainer writing `/confirm` and `/approve` together): the workflow executes
// each in document order, so both act instead of only the first
// (cncf/mentoring#1977, #1978, where the earlier single-command parser stopped
// at the first match and silently dropped the rest).

// The recognized commands. cncf-approve is listed before approve so the
// alternation matches the longer command first (both are anchored, and the
// trailing \b prevents /approved matching /approve, but ordering keeps intent
// clear).
const COMMAND_RE = /^\/(lfx-url|cncf-approve|approve|confirm)\b\s*(.*)$/;

// Parse an issue-comment body into an ordered list of { command, arg }.
// - A command must be the first non-whitespace token on its own line; it may
//   appear on any line (prose before it is fine).
// - arg is the remainder of the line, trimmed (only /lfx-url uses it).
// - Duplicate commands are removed, keeping the first occurrence (and its arg),
//   so a comment expresses each intent once.
// Returns [] when the body is blank or carries no recognized command.
function parseCommands(body) {
  const seen = new Set();
  const commands = [];
  for (const line of String(body == null ? '' : body).split('\n')) {
    const m = line.trim().match(COMMAND_RE);
    if (!m) continue;
    const command = m[1];
    if (seen.has(command)) continue;
    seen.add(command);
    commands.push({ command, arg: (m[2] || '').trim() });
  }
  return commands;
}

module.exports = { parseCommands, COMMAND_RE };
