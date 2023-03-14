# Google Season of Docs 2023

Flux is interested in applying to the 2023 Google Season of Docs to improve the documentation experience for our users and contributors. Below is our project ideas, if you have any questions, please reach out to <daniel@weave.works>.

## Improving the Flux User Onramp

### About Our Organisation

[Flux](https://fluxcd.io) is a tool for keeping Kubernetes clusters in sync with sources of configuration (like Git repositories and OCI artifacts), and automating updates to configuration when there is new code to deploy.

Flux was created in 2016 and helped to formalise GitOps, or "Operations by Pull Request" as industry standard. In 2020 a rewrite of the project was started which helped to drastically modernise the code base and make new use-cases possible. [The Flux project](https://github.com/fluxcd) has become center of a rich ecosytem of GitOps solutions. Its controllers have become the basis for products, services and other tools. That's why the project is seeing contributors from end-user companies, integrators and e.g. cloud vendors.

Flux is used by SREs, Platform Engineers, Architects and Developers. GitOps is the natural evolution of configuration as code. Organisations moving to Flux can deal with infrastructure at scale more easily, and allow their developers to focus on code, no on deployment problems.

Flux is licensed under the Apache License 2.0 license and is a graduated Cloud Native Computing Foundation (CNCF) project, used in production by various organisations and cloud providers.

### About The Problem

Flux users come with different amounts of background knowledge to the project. Some have been using Kubernetes in earnest for some time, others don't. Understanding the core concepts is critical to your success as a user installing Flux.

Other users are past the hurdles of the initial setup, but are looking at ways to simplify operations or to further automate processes. The docs currently contain most of what users need, the information might be just a bit hard to find. Reflecting the different stages of preparation, knowledge and state of implementation clearly in the navigation and information architecture will be beneficial.

Solving the problem will help our users find their way around more easily, they will have a more seamless experience and feel more self-effective. For us as a community, it will likely result in having to respond to less support requests.

### Project Scope

In this project we would like to accomplish the following:

Part 1: Improve the navigating experience

- Review the navigation / information architecture of the Flux documentation
  and assess to which stage of the users' adoption journey the content belongs.
- Write up a plan to recategorise relevant documentation.
- Collect feedback on the new IA. Voices from Flux developers and users should be heard.
- Implement plan, place relevant redirects. Implement link-checking.
- Background information: [#717](https://github.com/fluxcd/website/issues/717), [#718](https://github.com/fluxcd/website/issues/718) (further thoughts [#72](https://github.com/fluxcd/website/issues/72), [#120](https://github.com/fluxcd/website/issues/120))

Part 2: Help understanding core concepts better

- Talk to Flux developers and folks doing online support and get an idea of which Flux concepts are least understood and which basic knowledge is missing when interacting with new Flux users.
- Review Core Concepts documentation, review flow of beginner docs.
- Close potential gap in core concepts documentation. Refer to core concepts in documentation where appropriate.
- Background information: [#111](https://github.com/fluxcd/website/issues/111), [#493](https://github.com/fluxcd/website/issues/493), [#760](https://github.com/fluxcd/website/issues/760), [#783](https://github.com/fluxcd/website/issues/783)

Part 3: Installing Flux - could this be easier?

- Understand overlap between "Installation", cheatsheet entries and current "use-cases" docs.
- Review how other projects deal with this in their documentation. "Tasks" are often a concept used.
- Review Installation docs - should they be broken up? Are references between these and others docs missing, e.g. the cheatsheets and CLI reference?
- Background information: [#523](https://github.com/fluxcd/website/issues/523)

### Team

- [Flux Org Admins](https://github.com/fluxcd/community/blob/main/ORG-ADMINS): Hidde Beydals, Michael Bridgen, Stefan Prodan
- Project mentor: Daniel Holbach

### Measuring the success

The Flux developers spend a lot of their time on supporting Flux users and often it takes a while to discover the misunderstanding of a new user. That's why we ideally would like to see the number of support requests go down and get the sense that users can more easily "help themselves".

We get support requests through different channels, and e.g. Slack does not make it easy to measure, especially as we are in a growing field and have a growing user-base. Still we want to monitor the number of Github discussions and Slack requests and compare with the previous months and hope for 20% number of requests.

- [Questions in Flux issues](https://github.com/fluxcd/flux2/issues?q=is%3Aissue+label%3Aquestion+)
- [Q&A discussions on GitHub](https://github.com/fluxcd/flux2/discussions/categories/q-a)
- [#flux Slack channel](https://cloud-native.slack.com/archives/flux)

We also want the number of broken links to be 0.

We also want the updated navigation demonstrated to community and see a positive result of a poll about the new navigation experience.

### Timeline

| Dates | Action Items
| ----- | ------------
| May   | Orientation: get to know the team. Familiarise yourself with `fluxcd/website` code and documentation structure.
| June  | Review navigation of docs of other CNCF projects. Draft a new proposal for the docs structure (cf. [previous proposal](https://github.com/fluxcd/website/issues/717)). Create PR, ask team and community for feedback.
| July | Finish navigation, test redirects and see if there are broken links. Talk to Flux team to figure out contention points and common questions of new users. Review flow of "beginner docs".
| August | Analyse "beginner docs". Create plan for where core concepts should go into more detail. Work with Flux maintainers and contributors to write enhance the core concepts documentation.
| September | Integrate work and ask for feedback from community. Celebrate success so far - get a nice blog post on the website!
| October | Review overlap between Install docs, cheatsheet entries and use-cases. Compare with other projects. (Hopefully with what's been done in June, it will be easier to distinguish Day 1 from Day 2 tasks.) If there is a lot more work to be done to e.g. break up pieces into "tasks", maybe focus on low-hanging fruit instead. Ask for feedback again, publish.
| November | Tidy up loose ends. Celebrate with another blog post on the website!

### Project budget

| Budget item | Amount | Running Total | Notes/justifications
| ----------- | ------ | ------------- | --------------------
| Technical writer audit, update, test, and publish new documentation | 8000.00 | 8000.00 |
| Project t-shirts (10 t-shirts) | 250.00 | 8250.00 |
| TOTAL | 8250.00 | |

## Additional information

**Previous experience with technical writers or documentation:** End of November 2021 the Celeste Horgan of the CNCF Tech Docs team [assessed the Flux documentation](https://github.com/cncf/techdocs/blob/main/assessments/0005-fluxcd.md). Some of the [identified areas were addressed](https://github.com/orgs/fluxcd/projects/3) since then. Some of the findings are key issues we want to tackle as part of this proposal.

**Previous participation in Google Season of Docs, Google Summer of Code or others:**

Flux has not participated in any of these initiatives, so we are looking forward to being part of this (if chosen) and work together with the wider Docs community!

### Getting Started

If you are interested in participating in Google Season of Docs as a technical writer, please do the following:

1. Join the `#flux-contributors` channel on [CNCF Slack](http://slack.cncf.io/).
1. Review this project proposal and familiarise yourself with the [documentation website](https://fluxcd.io/flux). Particularly the sections `Core Concepts`, `Get Started` and `Installation` are read by our users all them time. Getting a general sense of the structure of the organisation of the documentation will be of help as well.
1. You will need some familiarity with Cloud Native technologies such as [Kubernetes](https://kubernetes.io), so you can more easily understand the problems and background of users.
1. Talk to us on Slack, introduce yourself - we are happy to tell you more.
