---
maintainers:
- caniszczyk
- idvoretskyi
- zacharysarah
---

# Season of Docs

Google [Season of Docs](https://developers.google.com/season-of-docs) gives technical writers an opportunity to work with open source projects.

:stop_sign: **UPDATE June 4, 2020:** Thank you to everyone who reached out for more information! We've been overwhelmed by interest, and we're no longer reviewing candidate proposals. :stop_sign:

## Contact us

Contact the CNCF about Google Season of Docs only through [mentoring@cncf.io](mailto:mentoring@cncf.io). Do not contact project organizers through other platforms.

## 2020 participation

The CNCF has been [accepted as a mentoring organization](https://opensource.googleblog.com/2020/05/season-of-docs-announces-participating.html) in Season of Docs (GSoD) 2020!

### What's happening now?

All steps are based on the [GSoD 2020 timeline](https://developers.google.com/season-of-docs/docs/timeline).

#### August 17 - September 13

We are in the [community bonding period](https://developers.google.com/season-of-docs/docs/timeline):

> Technical writers get to know mentors, get up to speed with the open source organization, and refine their projects in collaboration with mentors

## 2020 project ideas

### Provide a robust collection of example Falco rules

[Falco](https://falco.org/) is a runtime behavior detection and alerting engine for Linux. It enables you to write [rules](https://falco.org/docs/rules) that determine (a) the conditions under which a security notification should be produced and (b) what alert output should be provided. Examples include outputting JSON when a shell is run inside a container and logging to syslog when a sensitive file is read.

Because Falco rules require users to learn a specific syntax and a specific set of built-in functions, it's vital that those users have access to a comprehensive and use-case-specific "library" of example rules that they can draw upon for guidance and inspiration.

#### Project goals

Our goal is to enable Falco users to create more robust detection and alerting systems for their Linux workloads. To that end, the Season of Docs project would involve:

- Creating a library of example rules, organized based on use case
- Formulating a set of best practices for Falco rules
- Assembling a "cheatsheet" of some of the most important or illustrative rules
- Providing usability feedback to Falco project maintainers

#### What you'll learn

A writer who takes on this project stands to learn a great deal about:

- The Linux operating system (filesystems, networking, processes)
- Detection and alerting practices
- Security concerns in a cloud native context

### Update how the Kubernetes website serves API references

This is a great project for a writer interested in doc tooling: specifically, publishing API references with the [Hugo](https://gohugo.io).

Currently, the Kubernetes API references are large HTML documents generated from Swagger specs by scripts hosted outside the docs repository, then added into the website repository.

The manual build process is cumbersome and fragile. Docs are generated and imported by hand at release time (once per quarter), rather than automated (continuous integration and delivery) like the rest of the docs. The result is an unfriendly UX that isn't integrated with the rest of the site, either in UX or tooling.

To help improve API reference docs, we're applying Google's [Docsy Hugo theme](https://www.docsy.dev/about/) to the [kubernetes.io](https://kubernetes.io) website.

One of the features Docsy provides is native Swagger support. We're excited about automating our API reference generation. We need a technical writer to guide our migration from our existing process to a friendlier set of API references that are continuously generated like the rest of our docs.

We can offer strong, friendly community support and technical guidance and feedback.
We recognize that there are many unknowns in this process. It's OK to be scared! We're looking for one or more writers to explore and guide us in the right direction, not for perfection on the first try.

#### Project goals

Our goal is a helpful, consistent, integrated experience for contributing, delivering, and reading API reference docs.

- Using the Docsy theme's [`swaggerui` shortcode](https://www.docsy.dev/docs/adding-content/shortcodes/#swaggerui), transform Kubernetes API Swagger specs in kubernetes/kubernetes into pages in k/website.

   This goal requires engaging the Kubernetes developer community and helping achieve community buy-in for a transformed toolchain. You'll get lots of support here from the docs, infrastructure, and contributor special interest groups (SIGs).

- Update the contribution docs on [how to generate API references](https://kubernetes.io/docs/contribute/generate-ref-docs/), hopefully by deleting them.

#### What you'll learn

A writer who takes on this project will learn:

- How to work with stakeholders in open source projects
- How to render beautiful API docs
- How to work with tools for website publishing

### Improve docs for Kubernetes services

Kubernetes deployments support [services](https://kubernetes.io/docs/concepts/services-networking/service/): a way for other people (and other services) to interact with your application.

Currently, the documentation that [describes services conceptually](https://kubernetes.io/docs/concepts/services-networking/service/) is long, convoluted, and sometimes unfriendly for people who are learning Kubernetes. We need a writer to clarify what services are, how various Kubernetes components (like [Ingress controllers](https://kubernetes.io/docs/concepts/services-networking/ingress/) and [Endpoint Slices](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/)) interact with services, and how services [interact with applications](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/).

This project will grow your ability to explain highly technical concepts to a wide range of learners.

#### Project goals

- Revise and improve the conceptual overview of Kubernetes services
- Replace outdated architecture images with more resilient tooling, for example, [mermaid](https://mermaid-js.github.io/mermaid/#/).
- Make it easier for new learners to understand and work with Kubernetes services

#### What you'll learn

A writer who takes on this project will learn:

- How to work with stakeholders in open source projects
- Kubernetes services architecture
- How to work with text-based diagrams

### Document more examples for kubectl

The [`kubectl` cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) is the most visited page on the Kubernetes website. It's clear, friendly, and provides helpful examples of how to use [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/), a command line tool with a name that's [easily pronounced](https://www.youtube.com/watch?v=2wgAIvXpJqU).

The [kubectl command reference](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands) could use more examples like the cheat sheet. The Kubernetes special interest group for command line interfaces ([SIG CLI](https://github.com/kubernetes/community/tree/master/sig-cli)) will work with you to determine which examples readers need most. Your docs mentors will provide guidance on information architecture and how to work in an open source workflow.

#### Project goals

- Work with SIG CLI to create more kubectl examples
- Add more kubectl examples to the kubectl cheatsheet, or:
- Refactor kubectl docs for maximum helpfulness

#### What you'll learn

- How to work with stakeholders in open source projects
- How to write effective code examples
- Kubectl commands

### Document new interfaces with SIG CLI

The Kubernetes special interest group (SIG) for command line interfaces (CLI), or [SIG CLI](https://github.com/kubernetes/community/tree/master/sig-cli), is working on new command line tools for Kubernetes. As a technical writer, you'll work with SIG CLI to document new tools, with a goal of reaching an alpha feature state for developers to test and adopt.

#### Project goals

- Document one or more new command line tools

#### What you'll learn

- How to work with stakeholders in open source projects
- How to document a new tool
- Bleeding edge command line tools for Kubernetes


### Update the Kubernetes Developer Guide

The [Kubernetes Developer Guide][kdg] serves as the source of truth for contributors to the core Kubernetes project. Along with our [Contributor Guide][kcg], the Developer Guide is the primary means of onboarding new contributors. While the Contributor Guide benefits from several large iterations and improvements, and is useful for new contributors, our developer documentation has fallen behind and isn't in sync with current development practices. This causes a great deal of friction with contributors, especially new and prospective ones. 

We are looking for a technical writer to improve the developer experience for all contributors. The developer documentation can be overwhelming. Its deficiencies aren’t always obvious, even to seasoned contributors. We know the developer guide is large, and aren’t expecting a full overhaul. Our goal is to make iterative improvements.

We are a friendly, passionate, and supportive [community][kcom] with experienced developers who are available to answer questions and mentor a writer.

#### Project Goals

- Revise, improve and update the [Kubernetes Developer Guide][kdg]
- Establish new best practices for developers
- Add well-organized metadata to surface the documentation on the [Kubernetes contributor site][kcs]

#### What you’ll learn

- How to work with a large diverse and distributed team
- How to manage content with the [Hugo site framework][hugo]
- How to contribute effectively to the Kubernetes project
- How to work with open source developers of new APIs and developer features 

### Improve documentation of SMI & related service meshes

Currently, There is no well-structured, hands-on tutorial that walk users through various service meshes & user flows. There is a need of documentation that provides developer playground and test interactions for SMI to users. Also, we need to design and create a complete set of User Guide, Admin Guide, Install & Upgrade Guide, and so on.

We are looking for a technical writer to improve the developer experience for all contributors at SMI. Your docs mentors will provide guidance on information architecture, user-tutorial detailed guide and how to work in an open source workflow.

#### Project Goals 

- Use the [Swaggo][swaggo] Tool to generate the API endpoint documentation
- Use any open-source training track tool to create tutorial for Linkerd & performance management for service meshes
- Update the contributors documentation and create an user guide for SMI

#### What you'll learn

- How to work with stakeholders in open-source projects
- How to work with different open-source tools to create training tutorials
- How to work with different service meshes and exploring service mesh architecture
- How to create and render beautiful API docs using [swaggo/swag][swaggo]


[swaggo]: https://github.com/swaggo/swag
[kdg]: https://github.com/kubernetes/community/tree/master/contributors/devel
[kcg]:https://github.com/kubernetes/community/tree/master/contributors/guide
[kcom]: https://kubernetes.io/community/
[kcs]: https://github.com/kubernetes-sigs/contributor-site
[hugo]: https://gohugo.io/

## Program Cycles and Archive data

| Year | Term | Status   | Announcement           | Details              |
|------|------|----------|------------------------|----------------------|
| 2020 | Q2   | Accepted | http://goo.gle/2WOt8xs | [Q2'2020](README.md) |
