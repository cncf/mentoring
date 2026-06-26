'use strict';

// Markdown anchor slug helper, lifted verbatim from lfx-export.yml. Used to
// build the README Table of Contents links from project and program names.
//
// Note: this captures the current behaviour exactly, including the quirk that
// leading/trailing spaces become hyphens (whitespace is converted to '-'
// before the final trim, which only removes whitespace). The known duplicate-
// anchor issue is a separate, deliberate behaviour change, not done here.
function slugify(text) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

module.exports = { slugify };
