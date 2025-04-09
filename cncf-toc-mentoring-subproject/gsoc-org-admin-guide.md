# CNCF GSoC admin guide

## Introduction

> **Note**
> This is a guide for Google Summer of Code admins at CNCF.

While Google [defines](https://developers.google.com/open-source/gsoc/help/responsibilities#org_admin_responsibilities) responsibilities for organization admins and gives some [tips](https://developers.google.com/open-source/gsoc/help/oa-tips), there are variations in how organizations run the program suitable for their communities.

> **Note** 
> The "contributor" term throughout this document is used as "mentee." Please do not mix the word "contributor" with regular contributors and maintainers of the CNCF projects. Here, the term "contributor" follows Google's terminology for the GSoC program.

## Outline of responsibilities

First of all, GSoC admins are required to read these documents from Google:

* [GSoC admin responsibilities](https://developers.google.com/open-source/gsoc/help/responsibilities#org_admin_responsibilities)
* [GSoC admin tips](https://developers.google.com/open-source/gsoc/help/oa-tips)

In summary, responsibilities can be outlined as follows:

* Recruitment: GSoC admins are responsible for recruiting mentors from among the maintainers of the CNCF projects. They also recruit new contributors to participate in the program as mentees. They reach out to communities, promote the program, and answer questions from interested parties.
* Mentor management: GSoC admins ensure mentors are qualified and have the experience to mentor contributors effectively. They provide guidance and feedback to help mentors improve their mentoring skills.
* Contributor management: GSoC admins set up the foundation for communication between the mentors and the contributors. They provide guidance for contributors and mentors to connect, monitor the progress of projects, and provide non-technical support as needed.
* Program coordination: GSoC admins coordinate the program logistics. This may include applying to the program, ranking proposals, setting deadlines, communicating with involved parties, and ensuring that all contributors and mentors have the resources they need to be successful.
* Program evaluation: Admins evaluate the program's success and identify areas for improvement. They do this by analyzing program data, collecting feedback from contributors and mentors, and making recommendations for future program iterations.

The following are not responsibilities of a GSoC admin:
* Verifying the eligibility of contributors in terms of age, country of residence, and similar criteria. Google does this.
* Providing technical support to mentors or contributors about the project.
* Technically mentoring the contributors (e.g., technical troubleshooting), other than giving general guidance and/or replying to questions by pointing at possible places to find an answer.
* Providing non-technical mentoring to the contributors (e.g., career advice, personal advice, etc.).

## Checklist

### GSoC program announcement

At this stage, Google announces it will have GSoC in the upcoming year. There is no guarantee from Google that CNCF will be accepted to GSoC.

Tasks:
* Create GSoC ideas page in [`cncf/mentoring`](https://github.com/cncf/mentoring/tree/main/programs/summerofcode) repository. An ideas page will be necessary during the organization application.
* [Announce](#Announcements) the intention to participate in the program ([example announcement](https://github.com/cncf/mentoring/discussions/777)). Mention these:
    * Deadline to add ideas is the contributor application period start date.
    * CNCF has not yet been accepted into the program.
    * We are collecting ideas.
    * We encourage communities to add ideas earlier rather than later to give potential contributors more time.
* Start monitoring PRs to ideas page, review ideas added by mentors using the [proposal review guideline](#Project-idea-proposal-review-guidelines).

### Pre- organization application period

At this stage, there is still no guarantee from Google that CNCF will be accepted to GSoC. CNCF is collecting ideas for potential contributors and preparing for the organization's application to GSoC.

Tasks:

* Send a reminder to CNCF project communities to add ideas as stated in the previous stage.


### Organization application

At this stage, an ideas page should be listed with a few ideas.

Tasks:
* Apply to the program.

### Acceptance announcement

* [Announce](#Announcements) the acceptance in the program ([example announcement](https://github.com/cncf/mentoring/discussions/848)). Mention these:
    * CNCF is accepted to the program.
    * It is still possible to add ideas until the contributor application period start date.
    * We encourage communities to add ideas earlier rather than later to give potential contributors more time.
    * We encourage contributors to explore project ideas and engage with mentors and communities.
* Although there can be ideas/mentors added until contributor applications, it is encouraged to get mentors ([example Github task](https://github.com/cncf/mentoring/issues/864)):
    * Added to GSoC platform
    * Added to GSoC program for the current year in GSoC platform

### Contributor applications

* [Announce](#Announcements) that the contributor applications have started ([example announcement](https://github.com/cncf/mentoring/discussions/892)). 
* Mention these:
    * We encourage contributors to submit proposals early to be able to get feedback from mentors and fix any issues.
    * We are no longer collecting ideas from mentors.
* Inform member mentors (mentors who added an idea) about these:
    * They need to review proposals from contributors before they submit the final proposal.
* As we are not collecting ideas anymore, finalize getting mentors:
    * Added to GSoC platform
    * Added to GSoC program for current year in GSoc platform


### Rankings

* Ask mentors to
    * Review proposals and select contributors they want to mentor
    * Provide feedback in the GSoC system around the matters listed in the [contributor+proposal selection and ranking process](#Contributorproposal-selection-and-ranking-process), such as community interaction, proposal quality, etc.
    * Refrain from commenting on any contributor's chances of being accepted.
    * (Example Github discussion [announcement](https://github.com/cncf/mentoring/discussions/918))
* Run the ranking process

### Accepted projects announcement

* [Announce](#Announcements) that accepted contributors and projects have been chosen ([example announcement](https://github.com/cncf/mentoring/discussions/954)).
* Create a mailing list specific to the current GSoC session, which will be used to communicate with accepted mentors.
* Add selected mentors to the mailing list created earlier
* Inform mentors and contributors about:
    * Community bonding
    * Getting up to speed to begin working on projects
    * Other mentoring program opportunities ([example](https://github.com/cncf/mentoring/discussions/918#discussioncomment-5810110))

### Community bonding

* Send a reminder email to mentors about (example email can be found in mailing lists of previous sessions):
    * Reaching out to mentees to let them know how to kick-start coding
    * Informing GSoC admins about any inactive mentees to ask Google to remove them from the program

### Coding period

* Inform mentors and contributors about the following:
    * Coding starting date
    * Midterm evaluation date
* Send periodic reminders to mentors, possibly on Slack as direct messages about:
    * How the progress is
    * Is there a need for extension

### Midterm evaluations
* Inform mentors and contributors about:
    * Midterm evaluations and deadlines
    * [Google's evaluation guide](https://google.github.io/gsocguides/mentor/evaluations)
* Send a reminder 2 weeks before the deadline and at the first day of evaluation period about the deadline.
* During the week of evaluation, emails sent should be a personal email like "Hello Name, LastName" instead of to the mailing list. 


### Final evaluations
* Inform mentors and contributors about:
    * Final evaluations and deadlines
    * [Google's evaluation guide](https://google.github.io/gsocguides/mentor/evaluations)
* Follow the emailing guidelines from the [Midterm evaluations](#Midterm-evaluations) section.

### Results
* Run a retrospective using processes such as:
    * Feedback survey for contributors and mentors
    * Analyze data
    * Retrospective session for GSoC admins
* Fill Google's feedback survey.
* [Announce](#Announcements) the results.

### Additional tasks

* Mentor stipend: This can be only done by CNCF staff.
* Maintain this guide

## Project idea proposal review guidelines

* Make sure the mentor is in the [project-maintainers.csv](https://github.com/cncf/foundation/blob/main/project-maintainers.csv) file for the related project. If not, ask the PR author to ask for a `lgtm` from the people on that list.
* Check if the formatting is right.
* Make sure the upstream ticket actually exists and is open and unassigned.
* Check if the project size in hours is one of the values provided by Google.
* Check if the mentors have names, Github usernames and emails listed.
* Make sure that the description provides a good sense of context and motivation for the idea to attract contributors.
* Ensure the expected outcome benefits contributors (e.g. learning, growth) and the project (e.g. new features/functionality, bug fixes).
* Check if the idea is a coding project. Projects such as documentation-only tasks are not accepted to GSoC per [program rules](https://summerofcode.withgoogle.com/rules).
* Remind the mentor about the deadlines with this text, before merging their PR:
> Please note that GSoC is a program known for its strict deadlines. In addition to responding to your mentee on time, you will be required to submit evaluations on time. Failures to meet the deadlines might affect CNCF's future participation in GSoC.
* Make sure the proposal has at least to mentors and one is noted as the primary mentor.

## Contributor+proposal selection and ranking process

This process is documented in the [Contributor+proposal selection and ranking process](./gsoc-selection-and-ranking-process.md) document.

## Contributor guidance

TBA

## Announcements

* Target channels for the public announcements:
    * Create a Github discussion on [`cncf/mentoring`](https://github.com/cncf/mentoring/discussions), which serves as the main announcement page. Tag people when applicable with `/cc @username`.
    * Post a link to the discussion on the CNCF Slack #mentoring channel.
    * Do the social media promotions of the announcement page.


## References

* [GSoC timeline](https://developers.google.com/open-source/gsoc/timeline)
* [GSoC org admin tips](https://developers.google.com/open-source/gsoc/help/oa-tips)
