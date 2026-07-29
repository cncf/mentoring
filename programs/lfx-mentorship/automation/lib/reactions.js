'use strict';

// The GitHub reaction the bot adds to a command comment for a given reply
// emoji, used by the reply() helper in lfx-proposal-approvals.yml. A success
// gets a thumbs up, a failure a thumbs down, and everything else (an
// informational reply) gets NO reaction.
//
// It deliberately never returns 'confused'. Stamping a confused face on a
// comment where someone used a command as intended (e.g. a mentor confirming
// their participation) reads as discouraging, which is the opposite of what
// this automation is for.
function replyReaction(emoji) {
  if (emoji === '✅') return '+1';
  if (emoji === '❌') return '-1';
  return null;
}

module.exports = { replyReaction };
