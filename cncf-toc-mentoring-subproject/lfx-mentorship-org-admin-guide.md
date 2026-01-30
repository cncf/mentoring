# CNCF LFX Mentorship Admin Guide

## Introduction

> **Note**
> This is a guide for LFX Mentorship program admins at CNCF.

The [LFX Mentorship](https://lfx.linuxfoundation.org/tools/mentorship/) platform (previously known as Community Bridge) is developed by the Linux Foundation to accelerate the adoption, innovation, and sustainability of open source software. CNCF actively uses this platform for mentorship programs across CNCF projects.

While the Linux Foundation provides [general documentation](https://docs.linuxfoundation.org/lfx/mentorship) for the LFX Mentorship platform, this guide outlines CNCF-specific processes and responsibilities for organization admins.

> **Note**
> The term "mentee" is used throughout this document to refer to program participants who are being mentored. This aligns with LFX Mentorship terminology.

## Outline of Responsibilities

LFX Mentorship admins at CNCF are responsible for the following:

* **Recruitment**: Admins recruit mentors from among the maintainers of CNCF projects. They also promote the program to attract potential mentees, answer questions from interested parties, and reach out to communities to encourage participation.

* **Mentor Management**: Admins ensure mentors are qualified and have experience to mentor effectively. They provide guidance to help mentors understand the program requirements and deadlines.

* **Mentee Coordination**: Admins set up the foundation for communication between mentors and mentees. They provide guidance for mentees and mentors to connect, monitor project progress, and provide non-technical support as needed.

* **Program Coordination**: Admins coordinate program logistics, including setting up term timelines, reviewing project proposals, communicating deadlines, and ensuring all participants have the resources they need to succeed.

* **Platform Liaison**: Admins serve as the liaison between CNCF communities and the LFX Mentorship platform, coordinating with the Linux Foundation on any platform-related issues.

* **Program Evaluation**: Admins evaluate program success and identify areas for improvement by analyzing program data, collecting feedback from mentees and mentors, and making recommendations for future terms.

The following are **not** responsibilities of an LFX Mentorship admin:

* Verifying the eligibility of mentees in terms of age, country of residence, or similar criteria. The LFX platform handles this.
* Providing technical support to mentors or mentees about specific project implementation.
* Technically mentoring the mentees (e.g., debugging code, architecture decisions).
* Processing stipend payments. The Linux Foundation handles this.

## Program Checklist

### New Term Preparation

At the start of each term cycle, admins should begin preparations approximately 6-8 weeks before the project proposal deadline.

Tasks:
* Create the term's project ideas page in the [`cncf/mentoring`](https://github.com/cncf/mentoring/tree/main/programs/lfx-mentorship) repository (e.g., `2025/01-Mar-May/project_ideas.md`).
* Create the term's README with timeline information.
* [Announce](#announcements) the call for project proposals. Include:
    * Deadline for project idea submissions
    * Link to the project idea template
    * Encourage communities to submit ideas early
* Begin monitoring PRs for new project ideas, reviewing them using the [proposal review guidelines](#project-idea-proposal-review-guidelines).

### Project Proposals Open

During the project proposal period (typically ~4 weeks):

Tasks:
* Send reminder announcements to CNCF project communities about submitting ideas.
* Continue reviewing incoming project proposals.
* Answer questions from potential mentors about the program.
* Ensure all accepted project ideas have complete information before the deadline.

### Mentee Applications Open

When the mentee application period begins (typically ~2 weeks):

Tasks:
* [Announce](#announcements) that mentee applications are open. Include:
    * Application deadline
    * Link to LFX Mentorship platform
    * Encourage early applications
* Notify mentors that:
    * Applications are now being accepted
    * They should prepare to review applications when the review period starts
* Monitor for any questions or issues from applicants.

### Application Review Period

During the application review period (typically ~1 week):

Tasks:
* Remind mentors to review applications and select mentees.
* Ensure mentors understand the selection criteria and conflict of interest policies.
* Answer questions from mentors about the review process.
* Coordinate with mentors who have not completed their reviews as the deadline approaches.

### Selection Notifications

After mentees are selected:

Tasks:
* Ensure all selections are finalized on the LFX platform.
* [Announce](#announcements) the accepted projects and mentees.
* Create a communication channel (e.g., mailing list or Slack channel) for the current term's mentors.
* Inform mentors and mentees about:
    * Program start date
    * Communication expectations
    * Midterm and final evaluation dates

### Mentorship Program Begins

When the mentorship period starts:

Tasks:
* Send kickoff communication to mentors with:
    * Important dates and deadlines
    * Expectations for mentor-mentee communication
    * How to reach out if issues arise
* Remind mentors to establish regular check-ins with their mentees.
* Monitor for any early program issues.

### Midterm Evaluations

Approximately halfway through the term:

Tasks:
* Send reminder to mentors about the midterm evaluation deadline (2 weeks before, 1 week before, and day of).
* Inform mentors and mentees about:
    * Midterm evaluation deadline
    * What the evaluation covers
    * Importance of completing evaluations on time
* Follow up individually with mentors who have not submitted evaluations.
* Coordinate with the Linux Foundation on any mentee issues (e.g., non-participation, poor performance).

### Final Evaluations

Near the end of the term:

Tasks:
* Send reminder to mentors about the final evaluation deadline (2 weeks before, 1 week before, and day of).
* Inform mentors and mentees about:
    * Final evaluation deadline
    * Project completion expectations
    * Stipend payment timeline
* Follow up individually with mentors who have not submitted evaluations.

### Program Completion

After the term ends:

Tasks:
* [Announce](#announcements) program completion and successful mentees.
* Collect feedback from mentors and mentees via surveys.
* Run a retrospective with other admins to identify improvements.
* Check if mentees have written a blog post about their experience. Encourage them to use the [Mentee Blog Post Template](../../MENTEE_BLOGPOST_TEMPLATE.md).
* Compile program statistics for reporting.
* Archive the term's documentation.
* Begin preparation for the next term.

## Project Idea Proposal Review Guidelines

When reviewing project idea proposals submitted as PRs:

* **Mentor Verification**: Verify the mentor is listed in the [project-maintainers.csv](https://github.com/cncf/foundation/blob/main/project-maintainers.csv) file for the related project. If not, request a `lgtm` from someone on that list.

* **Formatting**: Check that the proposal follows the [project idea template](/PROJECT_IDEA_TEMPLATE.md) format correctly.

* **Upstream Issue**: Ensure the upstream issue exists, is open, and is unassigned.

* **Mentor Information**: Verify mentors have their names, GitHub usernames, and email addresses listed.

* **Description Quality**: Ensure the description provides:
    * Good context and motivation for the project
    * Clear expected outcomes
    * Benefits to both the mentee (learning, growth) and the project (features, improvements)

* **Recommended Skills**: Check that recommended skills are listed and reasonable for the project scope.

* **Two Mentors Required**: Ensure at least two mentors are listed, with one designated as the primary mentor.

* **Deadline Reminder**: Before merging, remind mentors about program deadlines:
    > Please note that LFX Mentorship has strict deadlines. In addition to responding to your mentee on time, you will be required to submit evaluations by the deadline. Failure to meet deadlines may affect your mentee's stipend payments and the success of the mentorship.

## Term Planning Guidelines

### Standard Term Structure

LFX Mentorship at CNCF follows a three-term annual structure:

| Term | Months | Typical Timeline |
|------|--------|------------------|
| Term 1 | March - May | Q1 |
| Term 2 | June - August | Q2 |
| Term 3 | September - November | Q3 |

Each term is approximately 12 weeks (3 months) of active mentorship.

### Recommended Timeline Distribution

When planning a new term, use the following distribution:

| Phase | Duration | Notes |
|-------|----------|-------|
| Project Proposals | ~4 weeks | Allow sufficient time for communities to submit ideas |
| Mentee Applications | ~2 weeks | Balance between enough time for applications and maintaining momentum |
| Application Review | ~1 week | Mentors need focused time to review and select |
| Mentorship Period | ~12 weeks | Standard LFX term duration |

### Key Timeline Considerations

When determining specific dates for a term:

* **Avoid Major Holidays**: Schedule around major holidays (e.g., winter holidays for Term 3, spring breaks for Term 1).

* **Midterm Placement**: Place midterm evaluations at the approximate midpoint of the coding period. This allows:
    * Sufficient time for mentees to demonstrate progress
    * Opportunity for course correction if needed
    * Fair assessment point for first stipend payment

* **Buffer Days**: Include 1-2 buffer days between phases to account for timezone differences and processing time.

* **Consistent Day of Week**: Use consistent days (e.g., always start phases on Monday/Wednesday) to simplify communication.

* **UTC Times**: Always specify deadlines in UTC (or with UTC conversion) to avoid confusion across timezones.

### Example Timeline (Term 1 2025)

| Activity | Date |
|----------|------|
| Project Proposals Open | January 8 - February 4 |
| Mentee Applications Open | February 5 - February 18 |
| Application Review Period | February 19 - February 25 |
| Selection Notifications | February 27 |
| Mentorship Program Begins | March 3 |
| Midterm Evaluations Due | April 15 |
| Final Evaluations Due | May 27 |
| Last Day of Term | May 30 |

## Mentee Selection Process

Mentors are responsible for selecting mentees for their projects. Admins facilitate this process by ensuring mentors understand the guidelines.

### Selection Criteria

Mentees should be chosen based on:

* **Best Fit for Project**: Technical skills, qualifications, and ability to complete the proposed work.
* **Collaboration Skills**: Ability to work well with others and communicate effectively.
* **Statement of Purpose**: Quality and thoughtfulness of their application.
* **Community Engagement**: Prior interaction with the project community (if any).

Diversity considerations may only be used as a tie-breaker when candidates are equally qualified.

### Conflict of Interest

Mentors must not participate in mentee selection if there is a conflict of interest:

* Family member, household member, close personal friend, or romantic partner has applied
* Any other reason the mentor could not be deemed impartial

### Application Review

* Mentees provide a Statement of Purpose when applying.
* Mentors may conduct interviews to assess qualification levels.
* Selection must be completed before the notification deadline.

## Announcements

Target channels for announcements:

* **GitHub Discussions**: Create a discussion on [`cncf/mentoring`](https://github.com/cncf/mentoring/discussions) as the main announcement page. Tag relevant people with `/cc @username`.
* **CNCF Slack**: Post to the #mentoring channel with a link to the GitHub discussion.
* **Social Media**: Coordinate with CNCF for Twitter/LinkedIn promotions of major announcements.
* **Mailing Lists**: Send to relevant CNCF mailing lists when appropriate.

Example announcements:
* [Call for project proposals](https://github.com/cncf/mentoring/discussions/777) (adapt from GSoC example)
* [Applications open](https://github.com/cncf/mentoring/discussions/892) (adapt from GSoC example)
* [Accepted mentees](https://github.com/cncf/mentoring/discussions/954) (adapt from GSoC example)

## Additional Tasks

* **Stipend Coordination**: While stipends are processed by the Linux Foundation, admins may need to coordinate on any issues or questions.
* **Platform Issues**: Report any LFX platform issues to the [LFX support team](https://support.linuxfoundation.org/).
* **Guide Maintenance**: Keep this guide updated based on program changes and lessons learned.

## References

* [LFX Mentorship Documentation](https://docs.linuxfoundation.org/lfx/mentorship)
* [LFX Mentorship Mentor Guide](https://docs.linuxfoundation.org/lfx/mentorship/mentor-guide)
* [LFX Mentorship Mentee Guide](https://docs.linuxfoundation.org/lfx/mentorship/mentee-guide)
* [LFX Mentee Stipends](https://docs.linuxfoundation.org/lfx/mentorship/mentee-stipends)
* [CNCF Mentoring Repository](https://github.com/cncf/mentoring)
* [CNCF Mentoring Discussions](https://github.com/cncf/mentoring/discussions)
* [Project Idea Template](/PROJECT_IDEA_TEMPLATE.md)
