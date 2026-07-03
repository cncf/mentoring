'use strict';

// Standing, org-wide mentee prerequisites injected onto every LFX program.
//
// Per cncf/mentoring#1866 every accepted mentee must complete LFC102 (Inclusive
// Open Source Community Orientation). This is CNCF policy, uniform across every
// program in a term, and is not authored by maintainers.
//
// An LFX prerequisite exposes exactly four fields: name (<=20 chars), a due
// date, a description, and a "requires file upload" flag. The course URL is
// carried inline in the description (LFX has no URL field). The due date is
// term-wide and stamped at upload time, so it is intentionally absent here.
// The export imports this object today; the Phase 2 upload will import it too,
// so the LFC102 copy is defined once in code. The proposal form shows its own
// hardcoded note describing this requirement; GitHub issue forms can't import a
// JS constant, so that copy is maintained separately in
// .github/ISSUE_TEMPLATE/lfx-program-proposal.yml.
const INCLUSIVE_COMMUNITY = {
  name: 'Inclusive Community',
  description:
    'Please upload the completion certificate for the Inclusive Open Source ' +
    'Community Orientation (LFC102) course: ' +
    'https://training.linuxfoundation.org/training/inclusive-open-source-community-orientation-lfc102/\n\n' +
    'Once completed you can find the certificate in your openprofile.dev ' +
    'dashboard under Training & Certifications -> Certificates of Completion.',
  file_upload: true,
};

// Returns the prerequisites added to every program automatically. Fresh copies
// are returned so callers cannot mutate the shared constant.
function standardPrerequisites() {
  return [{ ...INCLUSIVE_COMMUNITY }];
}

module.exports = { INCLUSIVE_COMMUNITY, standardPrerequisites };
