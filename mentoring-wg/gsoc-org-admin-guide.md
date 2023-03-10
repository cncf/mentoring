# CNCF GSoC admin guide

## Introduction

> **Note**
> This is a guide for Google Summer of Code admins at CNCF.

While Google [defines](https://developers.google.com/open-source/gsoc/help/responsibilities#org_admin_responsibilities) responsibilities for organization admins and gives some [tips](https://developers.google.com/open-source/gsoc/help/oa-tips), there are variations in how organizations run the program suitable for their communities.

## Outline of responsibilities

First of all, GSoC admins are required to read these documents from Google:

* [GSoC admin responsibilities](https://developers.google.com/open-source/gsoc/help/responsibilities#org_admin_responsibilities)
* [GSoC admin tips](https://developers.google.com/open-source/gsoc/help/oa-tips)

In summary, responsibilities can be outlined as following:

* Recruitment: GSoC admins are responsible for recruiting mentors from the CNCF communities and also contributors to participate in the program. They reach out to communities, promote the program, and answer questions from interested parties.
* Mentor management: GSoC admins ensure that mentors are qualified and have the necessary experience to mentor contributors effectively. They provide guidance and feedback as needed to help mentors improve their mentoring skills.
* Contributor management: GSoC admins set up the foundation for the communication between the mentors and the contributors. They provide guidance for contributors and mentors to connect, monitor the progress of projects, and provide non-technical support as needed.
* Program coordination: GSoC admins coordinate the program logistics. This may include applying to the program, ranking proposals, setting deadlines, communicating with involved parties, and ensuring that all contributors and mentors have the resources they need to be successful.
* Program evaluation: Admins evaluate the success of the program and identify areas for improvement. They do this by analyzing program data, collecting feedback from contributors and mentors, and making recommendations for future iterations of the program.

Following are not responsibilities of a GSoC admin:
* Verifying the eligibilities of contributors in terms of age, country of residence and similar criteria. These are done by Google.
* Providing technical support to mentors or contributors about the project.
* Technically or not-techically mentoring the contributors, other than giving general guidance and replying questions by pointing at possible places to find an answer.

## Checklist

### GSoC program announcement

At this stage, Google announces that they will have GSoC in the upcoming year. There is no guarantee from Google that CNCF will be accepted to GSoC.

Tasks:
* Reach out to CNCF board/TOC to get approval for applying to GSoC.
* Create GSoC ideas page in [`cncf/mentoring`](https://github.com/cncf/mentoring/tree/main/summerofcode) repository. Ideas page will be necessary during organization application.
* [Announce](#Announcements) the intention to participate in the program. Mention these:
    * Deadline to add ideas is the contributor application period start date.
    * CNCF has not yet been accepted into the program.
    * We are collecting ideas.
    * We are encouraging communities to add ideas earlier rather than later to give potential contributors more time.
* Start monitoring PRs to ideas page, review ideas added by mentors using the [proposal review guideline](#Project-idea-proposal-review-guidelines).

### Pre- organization application period

At this stage, there is still no guarantee from Google that CNCF will be accepted to GSoC. CNCF is collecting ideas for potential contributors and preparing for the organization application to GSoC.

Tasks:

* Send a reminder to CNCF project communities to add ideas as stated in the previous stage.


### Organization application

At this stage, there should be an ideas page with a few ideas listed.

Tasks:
* Apply to the program.

### Acceptance announcement

* [Announce](#Announcements) the acceptance in the program. Mention these:
    * CNCF is accepted to the program.
    * It is still possible to add ideas until the contributor application period start date.
    * We are encouraging communities to add ideas earlier rather than later to give potential contributors more time.
    * We are encouraging contributors to explore project ideas and engage with mentors and communities.
* Create a mailing list specific to the current GSoC session as early as possible as it might take time to get this created.
* Although there can be ideas/mentors added until contributor applications, it is encouraged to get mentors ([example Github task](https://github.com/cncf/mentoring/issues/864)):
    * Added to GSoC platform
    * Added to GSoC program for current year in GSoc platform

### Contributor applications

* [Announce](#Announcements) that the contributor applications started. Mention these:
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
    * Provide feedback in the GSoC system around the matters listed in the [contributor+proposal selection and ranking criteria](#Contributorproposal-selection-and-ranking-criteria), such as community interaction, proposal quality, etc.
    * Do not comment on chance of acceptance to a contributor
* Run the ranking process

### Accepted projects announcement

* [Announce](#Announcements) that accepted contributors and projects have been chosen.
* Add selected mentors to the mailing list created earlier
* Inform mentors and contributors about:
    * Community bonding
    * Getting up to speed to begin working on projects

### Coding period

* Inform mentors and contributors about:
    * Coding started
    * Midterm evaluation date
    * TODO: anything to inform around monitoring their progress? While GSoC admins cannot technically review the progress, we can ask biweekly/monthly reports from mentors

### Midterm evaluations
* Inform mentors and contributors about:
    * Midterm evaluations and deadlines
    * [Google's evaluation guide](https://google.github.io/gsocguides/mentor/evaluations)


### Final evaluations
* Inform mentors and contributors about:
    * Final evaluations and deadlines
    * [Google's evaluation guide](https://google.github.io/gsocguides/mentor/evaluations)


### Results
* Run a retrospective using processes such as:
    * Feedback survey for contributors and mentors
    * Analyze data
    * Retrospective session for GSoC admins
* Fill Google's feedback survey.
* [Announce](#Announcements) the results.

### Additional tasks

* Mentor stipend: TODO
* Maintain this guide

## Project idea proposal review guidelines

* Make sure the mentor is in the [project-maintainers.csv](https://github.com/cncf/foundation/blob/main/project-maintainers.csv) file for the related project. If not, ask the PR author to ask for a `lgtm` from the people on that list.
* Check if the formatting is right.
* Make sure the upstream ticket actually exists and is open and unassigned.
* Check if the project size in hours is one of the values provided by Google.
* Check if the mentors have names, Github usernames and emails listed.
* Make sure that the description provides a good sense of context and motivation for the idea to attract contributors.
* Also make sure the expected outcome is describing something valuable.
* Check if the idea is a coding project. Projects such as documentation-only tasks are not accepted to GSoC per [program rules](https://summerofcode.withgoogle.com/rules).

## Contributor+proposal selection and ranking criteria

TBA

## Contributor guidance

TBA

## Announcements

* Target channels for the public announcements:
    * Create a Github discussion on  [`cncf/mentoring`](https://github.com/cncf/mentoring), which serves as the main announcement page
    * Do the social media promotions of the announcement page.


## References

* [GSoC timeline](https://developers.google.com/open-source/gsoc/timeline)
* [GSoC org admin tips](https://developers.google.com/open-source/gsoc/help/oa-tips)