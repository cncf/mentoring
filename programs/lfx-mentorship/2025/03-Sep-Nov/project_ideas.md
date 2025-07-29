## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
- Upstream Issue:

```

---

## Proposed Project ideas

### Cilium

#### Evaluate SEO, AEO, and AIO for cilium.io

- Description: Improve how cilium.io content is discovered, ranked, and reused by search engines and AI tools. This includes enhancing technical SEO, optimizing for answer engines like Google SGE and Perplexity (AEO), and structuring content to be easily cited and used by large language models (AIO). The mentee will perform audits, recommend improvements, and implement changes across meta tags, structured data, documentation formatting, and content strategy.
- Expected Outcome: SEO, AEO, and AIO audit report for cilium.io, Implementation of structured metadata (e.g., FAQ schema, article metadata, canonical URLs), TL;DR summaries or answer-first formatting added to key documentation and product pages, Deep-linked, self-contained concept pages created or refactored for LLM usability, Improved search visibility and AI result representation (tracked via baseline comparison)
- Recommended Skills: Basic web development (HTML, Markdown, GitHub-based sites), Understanding of SEO fundamentals, Interest in AI, answer engines, or technical documentation, Familiarity with static site generators
- Mentor(s):
  - Bill Mulligan (@xmulligan, bill@isovalent.com)
- Upstream Issue: https://github.com/cilium/cilium.io/issues/633

### Jaeger

#### Next-Generation Jaeger Demo with OpenTelemetry and OpenSearch (2025 Term 3)

- Description: This project will create a Kubernetes deployment for the full stack: the OpenTelemetry Demo application, the Jaeger backend components (Collector, Query), and OpenSearch as a storage backend. The environment will be automatically redeployed weekly to ensure it is always fresh and to solve the problem of data retention. The entire stack will be hosted on a managed Kubernetes cluster (Oracle Kubernetes Engine) within an Oracle Cloud environment generously donated to the project.
- Expected Outcome:
  - A working, publicly accessible Jaeger demo featuring the OpenTelemetry Demo application, deployed on Oracle Cloud.
  - Fully automated, weekly deployments using the existing Helm-based automation and GitHub Actions.
  - The entire environment defined as "Configuration as Code".
  - A secure deployment following best practices for public-facing services.
  - The UIs for Jaeger, the OTel Demo, the load generator, and OpenSearch Dashboards exposed -publicly via the existing demo.jaegertracing.io URL.
  - Public-facing documentation on the Jaeger website explaining the demo architecture and linking to the automation code.
- Recommended Skills: Kubernetes, Cloud, Security, Monitoring
- Mentor(s):
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/7327

### OpenCost

#### Develop MCP Server for Agentic AI interaction with OpenCost

- Description: We would like OpenCost to more effectively integrate with AI agents. To do this, we need to implement a Model Context Protocol (MCP) server to surface the information from the OpenCost API. This is a great opportunity to learn about MCP servers, and help us build an interface for AI agents to obtain reliable cost/usage information so that they can accomplish their business goals. 
- Expected Outcome: We would like an MCP server integrated into OpenCost. This MCP server should support queries on allocations, assets, and cloud costs. The MCP server should support the full range of allocations, assets, and cloud cost query parameters. A demo video should be recorded showing an interaction with the MCP server, and used to obtain costing information in a conversational setting. In addition, integration tests must be created in the OpenCost Integration Tests repo that test all interactions with the MCP server
- Recommended Skills: Golang, MCP, Comfort with OpenCost, Cost/Usage reporting, AI agent interfacing and usage, documentation writing
- Mentors 
  - Alex Meijer (@ameijer, alexander.meijer@ibm.com)
  - Matt Bolt (@Mbolt35, matthew.bolt@ibm.com)
- Upstream Issue: https://github.com/opencost/opencost/issues/3239

####  OpenCost Data Model 2.0

- Description: OpenCost's data model is now 6 years old, and we have learned a great deal long the way. Based on these learnings, we would like to revamp how OpenCost represents its cost and usage data across the stack. We want to set OpenCost up for the next set of features and scale by building a solid foundation for the way we represent data. 
- Expected Outcome: We would make the UID of Kubernetes objects into a first class citizen. These UID based objects would then be grouped in a similar hierarchy to the way Kubernetes itself is organized. A successful conclusion of this project would see an additional emitter implemented in OpenCost, that emits data objects stored in compressed protobuf which reflect a hierarchy of Kubernetes objects. The mentors will help establish this hierarchy. This hierarchy should then be tested via integration tests against the existing objects, and key metrics compared to be equal across those. 
- Recommended Skills: Golang, Object Oriented Design, Comfort with OpenCost, Cost/Usage reporting, Protobuf, Compression, Prometheus, documentation writing
- Mentors 
  - Alex Meijer (@ameijer, alexander.meijer@ibm.com)
  - Sean Holcomb (@Sean-Holcomb, sean.holcomb@ibm.com)
- Upstream Issue: https://github.com/opencost/opencost/issues/3240

### OpenTelemetry

#### Developing Guidelines for OTel Survey Analysis and Communication
- Description: Various special interest groups (a.k.a. SIGs) in the OpenTelemetry project run surveys to understand the experience of the end-users better. To run surveys efficiently, SIG End-user provides guidelines and assistance to people running surveys. In the past, SIG End-user focused on providing guidelines around survey design. Now we would like to move forward and cover survey data analysis and communication findings. 
- Expected Outcome: The mentee in this project will describe a step-by-step survey data analysis process and tools that OTel contributors without deep data analytics knowledge can leverage to analyze their survey data – from cleaning and coding of data, through descriptive statistics, cross-tabulation, to visualization. In addition, the mentee will come up with suggestions on how to improve existing and/or propose new ways to communicate survey findings from surveys to the OpenTelemetry community. [Bonus] The mentee might also execute one survey to test out the guidelines.
- Recommended Skills
  - Being comfortable to talk with end-users and stakeholders in English.
  - Interest or currently working in UX, user research, or data analytics
  - Familiarity with spreadsheets (Google Sheets, Excel)
  - Basic understanding of databases and querying
  - [Bonus] Familiarity with Python and its data science libraries (e.g., pandas, numpy)
- Mentors
  - Adriana Villela (@avillela, adriana.villela@gmail.com) 
  - Andrej Kiripolsky (@AndrejKiri andrej.kiripolsky@gmail.com)
- Upstream Issue: https://github.com/open-telemetry/sig-end-user/issues/143

### KubeStellar

#### Allow a WDS to work with more than one ITS

- Description: Currently a Workload Description Space (WDS) has Binding objects that refer to inventory objects in exactly one Inventory and Transport Space (ITS). This mentorship project would generalize that, allowing references to inventory objects in multiple ITSes. Bear in mind scalability concerns.
- Expected Outcome: generalized API and implementation as described.
- Recommended Skills: Familiarity with Kubernetes and KubeStellar.
- Mentor(s):
  - Rainui Ly (@rxinui, rainui.ly@gmail.com)
  - Mike Spreitzer (@Mike Spreitzer, mspreitz@us.ibm.com)
- Upstream Issue: https://github.com/kubestellar/kubestellar/issues/3072

#### Implementing End-to-End Playwright Testing for KubeStellar UI

- Description:
  This project focuses on building a robust end-to-end testing framework for the KubeStellar UI using Playwright. The goal is to ensure seamless user experiences by automating critical workflows, enhancing test coverage, and catching UI issues early across various browsers and environments. This includes setting up Playwright from scratch, writing reusable and scalable test suites using the Page Object Model (POM), and integrating these tests into the CI/CD pipeline. Special focus will be given to WebSocket-based testing, authentication, and resource-heavy scenarios in a multi-cluster Kubernetes context.
- Expected Outcome:
  - End-to-end testing setup with Playwright integrated into the KubeStellar frontend
  - Comprehensive test suites for login, cluster/resource management, and binding policy workflows
  - Page Object Model-based modular test architecture
  - Mocking framework for WebSocket and REST API-based interactions
  - Visual regression testing integrated into GitHub Actions CI
  - Test coverage for key workflows
  - Cross-browser testing across Chromium, Firefox, Safari, and WebKit
  - Flaky test rate under 5% with parallel test execution and retry strategies
  - Documentation for writing, running, and debugging tests locally and in CI
- Recommended Skills:
  - TypeScript / JavaScript
  - Playwright or similar frameworks (Cypress, Puppeteer)
  - React and frontend testing
  - Page Object Model architecture
  - GitHub Actions / CI/CD
  - WebSocket and REST API mocking
  - HTML/CSS/browser debugging
  - Kubernetes basics (optional but helpful)
- Mentor(s):
  - Shivam Kumar (@btwshivam, shivam200446@gmail.com) 
  - Andy Anderson (@clubanderson, andy@clubanderson.com)  
  - Rishi Mondal (@MAVRICK-1, mavrickrishi@gmail.com)  
  - Onkar Shelke (@onkar717, onkarwork2234@gmail.com)
- Upstream Issue: 
  [https://github.com/kubestellar/ui/issues/1334](https://github.com/kubestellar/ui/issues/1334)

#### KubeStellar Design System Implementation and Cloud Hosting

- Description:  
  This LFX Term 3 project will transform the KubeStellar Design System foundations (created in Term 2) into a production-ready implementation using Next.js (Nextra or Mintlify) and deploy it on Oracle Cloud Infrastructure. The project will deliver a unified design language across all KubeStellar interfaces, featuring immersive animations and interactive components that enhance UX while maintaining performance and accessibility.
- Expected Outcome:  
  - Implement the complete KubeStellar Design System as a production-ready component library.
  - Build an interactive documentation site using Nextra or Mintlify.
  - Develop advanced 3D visualizations and micro-interactions using Three.js and animation libraries.
  - Deploy the design system and documentation to Oracle Cloud with enterprise-grade reliability.
  - Establish automated CI/CD pipelines for continuous deployment and semantic versioning.
  - Provide seamless integration paths for all KubeStellar interfaces (web UI, docs, CLI tools).
  - Ensure accessibility compliance while delivering visually engaging experiences.
- Recommended Skills:  
    - React & Next.js (Nextra, Mintlify) expertise.
    - Design Systems: Token-based implementation at scale.
    - 3D & Animation Development: Three.js, Framer Motion, GSAP, Lottie.
    - TypeScript, Tailwind, CSS Modules expertise.
    - Cloud Deployment: Oracle Cloud or similar experience.
    - DevOps & CI/CD: GitHub Actions, Docker, Kubernetes.
    - Accessibility & Performance Optimization.
- Mentor(s):
    - Saumya Kumar (@oksaumya, saumyakr2006@gmail.com)
    - Shivam Kumar (@btwshivam, shivam200446@gmail.com) 
    - Andrea Velázquez (@andreuxxxx, andrea@buoyant.io)
    - Kevin Roche (@KPRoche, kproche@us.ibm.com)  
- Upstream Issue:  
    https://github.com/kubestellar/docs/issues/5
  
#### Developer Relations & Community Growth for KubeStellar UI

- Description: This Developer Relations project aims to accelerate KubeStellar UI adoption by building a vibrant community around this multi-cluster Kubernetes management interface. The mentee will establish KubeStellar's online presence across key platforms, create technical content showcasing multi-cluster management capabilities, produce regular demo livestreams, improve documentation for contributors, implement community feedback mechanisms, and represent the project at CNCF events.
- Expected Outcome: Established social media presence for KubeStellar, daily technical blog series, weekly/bi-weekly livestream demos, improved contributor documentation, active GitHub Discussions, community feedback system with analytics, and at least one CNCF talk submission.
- Recommended Skills: Technical writing for developer content, video production and demo skills, Kubernetes and multi-cluster management knowledge, community management experience, social media strategy, basic web analytics, public speaking, familiarity with open-source workflows
- Mentor(s):
  - Onkar Shelke (@onkar717, onkarwork2234@gmail.com)
  - Andy Anderson (@clubanderson, andrew.anderson@ibm.com)
  - Rishi Mondal (@MAVRICK-1, mavrickrishi@gmail.com)
  - Aayush Saini (@AayushSaini101, kumaraayush9810@gmail.com)
- Upstream Issue: https://github.com/kubestellar/ui/issues/1403

#### Model Context Protocol and A2A Communication Framework for KubeStellar UI

- Description: This project focuses on implementing an enhanced Model Context Protocol (MCP) and A2A communication framework for KubeStellar's Management Control Plane server. It builds upon the foundation MCP implementation to include advanced A2A coordination capabilities, distributed AI agent communication, and sophisticated context management for multi-cluster environments.
- Expected Outcome: A fully specified Model Context Protocol with A2A communication extensions, implementation of protocol handlers in Python for the MCP server, A2A communication framework enabling AI agent coordination, context management system for KubeStellar state information, serialization mechanisms for cluster state, protocol extension mechanisms for different AI providers, performance optimizations, and comprehensive test suite.
- Recommended Skills: Knowledge of KubeStellar's component architecture, protocol design and implementation experience, strong TypeScript or Python skills, familiarity with AI model interaction patterns, understanding of KubeStellar's object model, experience with serialization formats and data structures, distributed systems state management, and A2A communication patterns.
- Mentor(s):
  - Rishi Mondal (@MAVRICK-1, mavrickrishi@gmail.com)
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Onkar Shelke (@onkar717, onkarwork2234@gmail.com)
  - Shivam Kumar (@btwshivam, shivam200446@gmail.com)
- Upstream Issue: https://github.com/kubestellar/ui/issues/1481

#### Implement KubeStellar controller logic to map WECs resources status to READY state of corresponding resource definitions in WDSes

- Description:  
  This project aims to enhance the KubeStellar controller to reflect the readiness status of WEC resources in their corresponding WDS resource definitions. Currently, users must inspect status objects manually to determine propagation and readiness. This improvement is especially useful for tools like Argo CD, which rely on accurate READY status to show resources as synced.

- Expected Outcome:  
  - Design an efficient architecture to map the status of WEC resources back to their originating WDS resource.
  - Implement the controller logic to update WDS resource readiness based on the aggregated readiness of all corresponding WECs.
  - Ensure the updated WDS READY state integrates well with tools like Argo CD, showing accurate sync states.
  - Validate and demonstrate that resources in WDS appear correctly synced post implementation.

- Recommended Skills:  
  - Golang  
  - Kubernetes controllers and CRDs  
  - Distributed systems basics  
  - Familiarity with Argo CD (optional but preferred)

- Mentor(s):  
  - [Franco Stellari] (@francostellari, fstellari@gmail.com)
  - [Rupam Manna] (@Rupam-It, mannarupam3@gmail.com)

- Upstream Issue:  
  https://github.com/kubestellar/kubestellar/issues/2809

### Prometheus

#### Prototyping Prometheus for exploratory use cases

- Description: Through a LFX Mentorship done in March-May, we performed [UX research](https://github.com/prometheus/prometheus/issues/15909) focusing on different ways Prometheus could deal with OpenTelemetry's Resource Attributes. One of the insights that this research showed us is that Prometheus and OpenTelemetry were primarily designed for different use-cases. While Prometheus focuses on monitoring metrics that the user knows that exist, one of OpenTelemetry's goals is to enable exploration of your data while the user doesn't really know what he/she is looking for. This mentorship will take the next steps on those research findings, exploring ideas about how Prometheus can enable the "Exploration" use case. 
- Expected Outcome:
    - Two or more sets of wireframes based on ideation workshop
    - Spoken presentation and report summarizing the findings and deliverables
    - Stretch goal: Apply to present findings at an upcoming conference
- Recommended Skills:
    - Interest or currently working in UX Research and Design.
    - Familiarities with databases and querying.
    - Being comfortable to talk with End-Users in English.
- Mentors:
    - Arthur Silva Sens (@ArthurSens, arthursens2005@gmail.com)
    - Amy Super (@amy-super, amy.super@grafana.com) 
- Upstream Issue: https://github.com/prometheus/prometheus/issues/16924

#### Podman Container Tools

##### Implement flushing of conntrack entries in Netavark on network changes

- Description:
  This project will involve implementing conntrack entry clearing into Netavark, Podman's network management tool.
  Stale conntrack entries can cause network traffic to be dropped if a UDP port is rebound while a container is running.
  Netavark is written in Rust, but the Rust netlink bindings (located [here](https://github.com/rust-netlink/netlink-packet-netfilter)) presently do not include support for Conntrack.
  As such, the first step of the project will be to expand these bindings to cover Conntrack.
  Netavark can then make use of the bindings to flush Conntrack entries on network change, and tests implemented to verify this functionality.
- Expected Outcome:
  - Rust bindings for Conntrack implemented in the [rust-netlink](https://github.com/rust-netlink/netlink-packet-netfilter) library
  - Netavark modified to use these bindings to drop Conntrack entries at appropriate times
  - Tests in Netavark repository to verify this functionality
- Recommended Skills:
  - Rust
  - Some C knowledge preferred
  - Basic networking - knowledge of IP addresses, ports, etc
- Mentor(s):
  - Matthew Heon (@mheon, mheon@redhat.com) - primary
  - Paul Holzinger (@Luap99, pholzing@redhat.com)
- Upstream Issue (URL):
  [containers/netavark#1045](https://github.com/containers/netavark/issues/1045)

### Kubernetes

#### Graduate the kubeadm feature gate ControlPlaneKubeletLocalMode to GA

- Description: If the kubeadm feature gate ControlPlaneKubeletLocalMode
is enabled, it tells the kubelet on a control plane node to communicate only with
the local kube-apiserver running on the same node. If it is not enabled, the kubelets
can try to reach out to a leading kube-apiserver trough the load balancer sitting
in front of all control plane nodes. This can violate the Kubernetes version
skew policy between kubelet and kube-apiserver during upgrade scenarios, leading
to potential component failures. By graduating the feature gate to GA, kubeadm will
ensure such policy violation scenarios are avoided. 
- Expected Outcome: The feature gate is graduated to GA
- Recommended Skills: golang, Kubernetes, kubeadm
- Mentor(s):
  - Shida Qiu (@SataQiu)
  - Paco Xu (@pacoxu)
- Type: maintainer mentorship (only for maintainers to work on as part of a one-off LFX Project)
- Upstream Issue: https://github.com/kubernetes/kubeadm/issues/2271

### Kube State Metrics

#### Automate the release process

- Description: Build upon the stale patches that aim to automate the release process for Kube State Metrics. This project will focus on implementing a fully automated release pipeline that includes steps outlined in the subproject's [RELEASE.md](https://github.com/kubernetes/kube-state-metrics/blob/main/RELEASE.md). The mentee will work on integrating these features into the existing CI/CD workflow, ensuring that releases are consistent, reliable, and easy to manage.
- Expected Outcome: A fully automated release process for Kube State Metrics, including versioning, changelog generation, and artifact creation (through k8s.io).
- Recommended Skills: Familiarity with CI/CD pipelines, basic scripting skills, understanding of versioning and changelog best practices, experience with GitHub Actions or similar CI/CD tools.
- Mentor(s):
  - Pranshu Srivastava (@rexagod, rexagod@gmail.com)
  - Manuel Rüger (@mrueg, manuel@rueg.eu)
- Upstream Issue: https://github.com/kubernetes/kube-state-metrics/issues/2711

