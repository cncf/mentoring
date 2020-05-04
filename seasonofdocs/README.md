# Season of Docs

Google [Season of Docs](https://developers.google.com/season-of-docs) gives technical writers an opportunity to work with open source projects.

The CNCF has applied to participate in the Season of Docs in 2020. We'll announce more details pending our acceptance into the program.

### Program Cycles and Archive data

| Year | Term | Status  | Announcement | Details              |
|------|------|---------|--------------|----------------------|
| 2020 | Q2   | Applied | TBD          | [Q2'2020](README.md) |

## Program Maintainers

-	Chris Aniszczyk ([@caniszczyk](https://github.com/caniszczyk)\): https://twitter.com/cra
-   Zach Corleissen ([@zacharysarah](https://github.com/zacharysarah)\): https://twitter.com/zachorsarah
-	Ihor Dvoretskyi ([@idvoretskyi](https://github.com/idvoretskyi)\): https://twitter.com/idvoretskyi

## 2020 project ideas

### Provide a robust collection of example Falco rules

[Falco](https://falcosecurity.org) is a runtime behavior detection and alerting engine for Linux that enables you to write [rules](https://falco.org/docs/rules/) that determine conditions under which security notifications are produced, for example when a shell is run inside a container or when a sensitive file is read. Because Falco rules require useres to learn a specific syntax and a specific set of built-in functions, it's vital that those users have access to a comprehensive and use-case-specific "library" of example rules that they can draw upon for guidance and inspiration.

#### Project goals

Our goal is to enable Falco users to create more robust detection and alerting systems for their containerized workloads. To that end, the Season of Docs project would involve:

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

### Thanos: Complete Katacoda tutorials

This is a great project for a writer with some passion for Docker and Kubernetes, interested in doing interactive docs: specifically learning to build [Katacoda Course](https://katacoda.com/scenario-examples/scenarios/create-course).

Currently, we have a single [Katacoda](https://katacoda.com/bwplotka/courses/thanos/1-globalview) tutorial, which helps Thanos users to start up quickly and understand the concepts. To help improve the user experience further we have planned five more tutorials.

The Katacoda tutorials are written in YAML format and don't require a lot of custom tooling. We have a moderate amount of docs on our website [thanos.io](https://thanos.io/), which should help you to get started quickly. Also, there are many youtube videos explaining the concepts. 

We can offer friendly community support and technical guidance and feedback.
We're looking for one contributor to explore interactive tutorials and learn some technical concepts along the way. We are definitely not looking for perfection on the first try.

#### Project goals

Our goal is a helpful, consistent, user experience for understanding Thanos and the problems it solves.

Writing interactive tutorials: 
- Intro: Downsampling and unlimited metric retention for Prometheus
- Intro: Global and meta alerts with Thanos
- Advanced: Connecting remote Prometheuses to Thanos using simple Envoy setup.
- Advanced: Using Prometheus remote write to stream metrics to Thanos
- Advanced: Query low tail latency with low cost: Introducing caching to Thanos

More details on Thanos open issue: https://github.com/thanos-io/thanos/issues/2041

#### What you'll learn

A writer who takes on this project will learn:

- How to work with open source projects
- How to write user-focused tutorials that are clear and simple to understand
- How to work with tools for doing interesting and interactive tutorials
