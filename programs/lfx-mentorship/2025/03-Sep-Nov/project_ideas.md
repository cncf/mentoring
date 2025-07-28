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
