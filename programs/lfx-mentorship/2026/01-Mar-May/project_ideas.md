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

### Antrea

#### Compare Antrea BPF generation for PacketCapture to tcpdump / libpcap

- Description: Antrea's [PacketCapture feature](https://github.com/antrea-io/antrea/blob/main/docs/packetcapture-guide.md) includes custom BPF code generation for packet filters defined in the PacketCapture CRD. The code is currently tested using manually-generated test cases, which is tedious, error-prone, and limits testing coverage. Given that the code attempts to mimic the BPF generation done by tcpdump, we should improve the testing approach by: 1) using AI to generate comprehensive test inputs, 2) using tcpdump to generate reference BPF code for the inputs, 3) comparing our generated BPF with the tcpdump reference, 4) analyzing any differences to determine if our BPF is incorrect or equivalent, 5) updating our BPF generation to match tcpdump when possible, and 6) committing all test cases to run in CI.
- Expected Outcome: A comprehensive test suite for the PacketCapture BPF generation code that uses tcpdump-generated BPF as a reference. The test suite should be integrated into CI and should increase testing coverage compared to the current manually-generated test cases. Any discrepancies between Antrea's BPF generation and tcpdump's should be analyzed and resolved, with the BPF generation code updated as needed to match tcpdump's output when appropriate.
- Recommended Skills: Golang, familiarity with BPF (Berkeley Packet Filter), basic understanding of packet filtering and tcpdump/libpcap. We encourage using AI tools to generate test cases and improve the BPF code generation, but we expect careful review of generated artifacts before submitting them for review.
- Mentor(s):
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
  - Hang Yan (@hangyan, hang.yan@hotmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/7701

### Cilium

#### Cilium Project Pillar Pages

- Description: cilium.io could benefit from SEO pillar pages that capture higher level problems that people will search for. Each page should deep dive into a comprehensive overview of the topic and contain high quality architectural images and diagrams that will also be discovered in search. These pages will capture high-intent search traffic and guide users from "Curious" to "Installed."
- Expected Outcome: 8 pillar pages with content and images deployed on the website
- Recommended Skills: Markdown, Figma, Writing
- Mentor(s):
  - Bill Mulligan (@xmulligan, bill@isovalent.com)
- Upstream Issue: https://github.com/cilium/cilium.io/issues/841

### Fluid

#### Design and implement a CLI tool to help easily use Fluid

- Description: Fluid manages Kubernetes resources (Statefulsets, PersistentVolumeClaims & PersistentVolume, etc.) under two Fluid custom resources CR called `Dataset` and `Runtime`. Given a pair of Dataset and Runtime CR, users may want to inspect the underlying resources, check their status and diagnose which part is going wrong. A CLI tool (e.g. a kubectl plugin) for Fluid would be a straightforward way for Fluid's users to easily get such information.

- Expected Outcome:
  - Design and implement a CLI tool for Fluid
  - Support `inspect` subcommand: list resource status given a Fluid Dataset CR.
  - Support `diagnose` subcommand: collect related information (e.g. logs, pod status, etc.) to help diagnose what's going wrong.
  - Implement a framework to diagnose Fluid with LLM/AI. (The collected information can be put into the context of an AI inference request)

- Recommended Skills: Fluid, Go, CLI tool development, LangChain(or other alternative LLM frameworks)

- Mentor(s):
  - Zhihao Xu (@TrafalgarZZZ， [trafalgarz@outlook.com](mailto:trafalgarz@outlook.com))
  - Yang Che (@cheyang, [cheyang52@gmail.com](mailto:cheyang52@gmail.com))

#### Unify and Modernize Fluid’s Unit Testing Framework and enhance testing coverage

- Description: To enhance code quality, maintainability, and developer experience, Fluid plans to migrate its unit testing framework from Testify to Ginkgo + Gomega—a more expressive and behavior-driven testing stack widely adopted in the Go ecosystem. Concurrently, we aim to significantly improve unit test (UT) coverage, raising it from the current 57% to at least 75%, thereby reducing regression risks and strengthening overall system reliability
- Expected Outcome: 
   - Deliver comprehensive migration guidelines, coding best practices, and hands-on team training for Ginkgo + Gomega adoption.
   - Achieve a measurable increase in unit test coverage—from 57% to 75%—across core modules of the Fluid codebase.
- Recommended Skills:  Fluid, Go, unit testing frameworks (gomonkey, ginkgo, gomega, testify)
- Mentor(s):
   - Zhihao Xu (@TrafalgarZZZ， [trafalgarz@outlook.com](mailto:trafalgarz@outlook.com))
   - Yang Che (@cheyang, [cheyang52@gmail.com](mailto:cheyang52@gmail.com))
- Upstream Issues: https://github.com/fluid-cloudnative/fluid/issues/5407

#### Extend Cache Runtime Interface to Support Full Data Lifecycle and In-Place Operations

- Description：Fluid’s existing Generic Cache Runtime interface will be extended to support the complete lifecycle of data operations, including data loading, data processing workflows, and cache-aware data mutations. Additionally, the interface will be enhanced to enable in-place cache upgrades and in-place cache rebuilds—allowing runtime updates and recovery without disrupting workloads or requiring dataset re-provisioning.
- Expected Outcomes:
  - Extended Cache Runtime interface covering data load, data operation lifecycle, and state transitions.
  - Working reference adapters for Curvine and Alluxio
  - Support for in-place upgrade (e.g., engine version update) and in-place cache rebuild (e.g., after node failure or config change).
- Recommended Skills:  Fluid, Go, kubernetes operator development
- Mentor(s):
   - Tongyu Guo (@Syspretor，[guotongyu.gty@alibaba-inc.com](mailto:guotongyu.gty@alibaba-inc.com))
   - Yang Che (@cheyang, [cheyang52@gmail.com](mailto:cheyang52@gmail.com))
- Upstream Issues: https://github.com/fluid-cloudnative/fluid/issues/5412

### Jaeger

#### AI-Powered Trace Analysis with Local LLM Support

- Description: Jaeger is a widely used distributed tracing platform. This project aims to integrate Small Language Models (SLMs) and Large Language Models (LLMs) into the Jaeger ecosystem to provide intelligent trace analysis. Key features include natural language search mapping (mapping English queries to Jaeger's internal search parameters), contextual analysis, and summarization ("Explain this Span" or "Explain this trace"). The project involves backend integration using Go and LangChainGo, and frontend integration within the Jaeger React UI.
- Expected Outcome: A working "Natural Language Search" input that populates the Jaeger search form, contextual "Explain" buttons for errors and spans, a robust backend implementation using langchaingo supporting local models (e.g., Ollama) via YAML config, and comprehensive documentation.
- Recommended Skills: Backend: Strong Go (Golang) experience. Architecture: Understanding of OpenTelemetry Collector architecture. AI/LLM: Familiarity with LangChain and prompt engineering for SLMs. Frontend: React.js experience.
- Mentor(s):
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/7832

#### Upgrading Core Routing and State Management in Jaeger UI

- Description: This project focuses on modernizing the Jaeger-UI by upgrading its foundational routing and state management libraries. The primary goals are to migrate from legacy react-router patterns to React Router v7 and replace the deprecated history package and older Redux integration patterns with modern standards like redux-first-history. This refactoring will improve long-term maintainability, enhance performance, and simplify the code for one of the industry's most critical observability tools.
- Expected Outcome: A fully migrated Jaeger-UI running on React Router v7, removal of deprecated history v4/v5 dependencies, refactored functional components using modern hooks (useNavigate, useParams), and a robust test suite ensuring no regressions in trace visualization or search functionality.
- Recommended Skills: JavaScript/TypeScript & React: Deep familiarity with hooks and component lifecycles. State Management: Experience with Redux. Routing Knowledge: Understanding of SPAs and browser history APIs. Testing: Experience with React Testing Library or similar.
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/3313

### Knative

#### Enhancing the Knative Educational Game with Advanced EDA Patterns and Web Deployment

- Description: Knative provides a powerful event-driven platform, but learning its concepts, especially brokers and EDA patterns, can be challenging for beginners. The Knative Educational Game aims to simplify this learning curve through interactive gameplay that visually and conceptually demonstrates Knative components and event-driven patterns. 

  An overview of the project was presented at the [KubeCon NA 2024](https://youtu.be/TTBKh6F4v-g?si=MRmx6a2YJsl7y0Q-), and several technical sketches, gameplay patterns, and level designs were created and implemented during the [LFX Mentorship of Spring 2025](https://github.com/knative-extensions/educational-game/blob/main/Levels/brainstorm.md).

  This project serves as the continuation of that work and is divided into two main parts:
    - The first part focuses on expanding and enhancing the game by implementing existing level designs, introducing advanced EDA patterns (like Outbox and DataRef patterns), designing assets as needed, and improving interactivity.
    - The second part focuses on deploying the game to the web, making it easily accessible for learners to try and share.


- Expected Outcome:
  - A fully implemented and web-deployed Knative Educational Game by completing previously designed levels, and newly added EDA patterns (DataRef and Outbox).
  - Improved learning experience through interactive animations, sounds, and clear visualizations that make Knative Eventing concepts and real-world patterns easier to understand.
  - A Netlify hosted web deployment integrated into the Knative website.

- Recommended Skills: Godot, Game Development, Event Driven Architecture, Graphic Design.

- Mentor(s):
  - Ankita Jana (@ankitajana21 , ankitajana60@gmail.com)
  - Prajjwal Yadav (@prajjwalyd, prajjwalyd@gmail.com)

- Upstream Issue: https://github.com/knative-extensions/educational-game/issues/52

### Kubernetes

#### Cluster API Provider AWS (CAPA)

##### Add OpenTelemetry support

- Description: Cluster API Provider AWS (CAPA) enables the creation of Kubernetes clusters in AWS with Cluster API. With increasing adoption of Cluster API (CAPI) in general and of CAPA we want to improve the supportability of CAPA, especially for production environments. The first part of this is to add telemetry/tracing using OpenTelemetry so that we can understand and visualize the flow of reconciliation within the provider. This will enable the project and its end users to understand the behavior of reconciliation (including API services called) and will help diagnose issues and performance problems.
- Expected Outcome: An implementation of OpenTelemetry in CAPA with associated documentation that has been released in a new version of CAPA.
- Recommended Skills: Golang, Kubernetes, AWS
- Mentor(s):
  - Richard Case (@richardcase, richmcase@gmail.com)
  - Daniel Lipovetsky (@dlipovetsky, daniel.lipovetsky@gmail.com )
- Upstream Issue: https://github.com/kubernetes-sigs/cluster-api-provider-aws/issues/2178

### KubeStellar

#### Documentation and Self-Service Enablement Specialist

- Description: : KubeStellar is a Kubernetes-native multi-cluster synchronization platform. This project focuses on creating a frictionless onboarding experience, enabling first-time users to deploy KubeStellar end-to-end in under 30 minutes using only self-service documentation. The work includes deployment audits, Quickstart optimization, interactive tutorials, video guides, and structured troubleshooting, use-case, and migration documentation to improve adoption and reduce support overhead.  
- Expected Outcome: A validated ≤30-minute Quickstart guide, an interactive hands-on tutorial with automated checks, a 5–7 module video series, a 20-issue troubleshooting guide, 5 production-ready use-case patterns, 3 migration guides from common multi-cluster setups, and measurable onboarding success (≤30 min time-to-first-success, ≥4/5 user satisfaction).  
- Recommended Skills: Kubernetes deployment and troubleshooting, strong technical writing, Markdown-based documentation tools (Docusaurus/Nextra), user-centric documentation design video, DevOps or DevRel background a plus
- Mentor(s):  
  - Shivam Kumar (@btwshivam, shivam200446@gmail.com)
  - Rishi Mondal (@MAVRICK-1, mavrickrishi@gmail.com)
  - Saumya Kumar (@oksaumya, saumyakr2006@gmail.com)
  - Nupur Shivani (@Nupurshivani, nupurjha.me@gmail.com)
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
- Upstream Issue: https://github.com/kubestellar/kubestellar/issues/3521

#### Integration and Ecosystem Development Specialist

- Description: Reduce adoption friction by building integrations between KubeStellar and popular Kubernetes ecosystem tools. The mentee will survey early users to identify integration priorities, design integration architectures, develop working integrations with tools like GitOps platforms, Terraform, CI/CD systems, or monitoring solutions, create comprehensive documentation and examples, and validate integrations with real users. This program emphasizes software development, API integration, understanding ecosystem tools, and creating seamless user experiences.

- Expected Outcome: 2 production-ready integrations with popular Kubernetes tools, Integration documentation with clear setup guides for each, 2 demo videos demonstrating integration value and setup, Sample implementations and templates for common scenarios, 3 users actively adopting each integration, Submissions to relevant tool marketplaces where applicable, Integration maintenance guide for ongoing support, User feedback on integration quality and usefulness, User engagement: 6 GitHub issues filed by integration users, 4 PRs or PR reviews contributed by integration users

- Recommended Skills: Strong programming skills (Go preferred), Experience with GitOps/CI/CD/infrastructure tools, API integration and software development experience, Understanding of Kubernetes ecosystem and tooling, Technical documentation writing, Open source contribution experience helpful

- Mentor(s): 
  - Rishi Mondal (@MAVRICK-1, mavrickrishi@gmail.com)
  - Andy Anderson (@clubanderson, andy@clubanderson.com) 
  - Shivam Kumar (@btwshivam, shivam200446@gmail.com)
  - Naman Jain (@naman9271, namanjain9271@gmail.com)
  - Onkar Shelke (@onkar717, onkarwork2234@gmail.com)
 
- Upstream Issue: https://github.com/kubestellar/kubestellar/issues/3501

### OpenCost

#### OpenCost UI Revamp

- Description: OpenCost has helped a lot of people save a lot of money on their infrastructure. We like to think that this has contributed to things like engineering headcounts not getting reduced, small businesses and startups surviving longer, and so on. The OpenCost UI is a key part of this - it lets people visualize their spend, find inefficiencies, and so on. It's time to uplevel the OpenCost UI to enable the next generation of savings!
- Expected Outcome: We would like all pages of the OpenCost app to be implemented in Carbon or similar modern design system. We would like dashboarding functionality and a unified color scheme. All implementations should be delivered with unit and end-to-end tests. All existing functionality of the UI should be present in the revamped design.
- Recommended Skills: React, UX Design, Frontend Development, APIs, Carbon Design System
- Mentors 
  - Alex Meijer (@ameijer, alexander.meijer@ibm.com)
  - Warwick Peatey (@peatey, warwick.peatey@ibm.com)
- Upstream Issue: https://github.com/opencost/opencost-ui/issues/155
- LFX URL: 

### OpenYurt

#### Implement Label-Driven Automated Installation and Uninstallation of YurtHub on Edge Nodes
- Description:
  Currently, in OpenYurt, the core component YurtHub—which acts as a transparent proxy between edge node system components (e.g., kubelet, CNI, CoreDNS, kube-proxy) and the Kubernetes API server—is deployed as a systemd service on each edge node. The installation is performed exclusively via the community-provided tool YurtAdm during node joining.
  This approach imposes a significant limitation: users must use YurtAdm to onboard nodes, making it impossible to install YurtHub on existing Kubernetes nodes that were not initially provisioned with YurtAdm. To improve flexibility and user experience, the community aims to support a label-driven, declarative installation mechanism:
  - When a specific label (e.g., openyurt.io/is-edge-worker=true) is added to a node, YurtHub should be automatically installed and started on that node.
  - Conversely, when the label is removed, YurtHub should be gracefully uninstalled and its resources cleaned up.
  This enhancement will enable seamless integration of OpenYurt into existing Kubernetes clusters without requiring re-onboarding of nodes.

- Expected Outcome:
  - Design and implement a controller/operator that watches for node labels and triggers YurtHub lifecycle operations.
  - Develop an installation/uninstallation mechanism that:
    - Installs YurtHub as a systemd service.
    - Ensures idempotency and handles failures gracefully.
    - Cleans up all YurtHub-related files, configurations, and services upon label removal.
  - Ensure compatibility with existing YurtAdm-based deployments.
  - Provide comprehensive documentation, including:
    - User guide for enabling label-driven YurtHub management.
    - Design rationale and architecture diagram.
  - Add e2e tests covering both installation and uninstallation scenarios in a real cluster environment.

- Recommended Skills:
  - Strong proficiency in Go programming language.
  - Solid understanding of Kubernetes architecture, especially node lifecycle, kubelet, and API machinery.
  - Experience with Kubernetes controllers/operators (client-go, controller-runtime).
  - Familiarity with systemd and Linux system service management (for interacting with systemd during install/uninstall).
  - Knowledge of OpenYurt architecture (especially YurtHub and YurtAdm) is a plus but not mandatory.
  - Experience writing unit and e2e tests for Kubernetes components.
  - Good communication and documentation skills.

- Mentor(s):
  - Rambohe (@rambohe-ch, rambohe.ch@gmail.com)
  - Bingchang Tang (@zyjhtangtang, bingchang07@gmail.com)
  - Lu Chen (@luc99hen, luc99.en@gmail.com)
- Upstream Issue:
  https://github.com/openyurtio/openyurt/issues/2494

### Prometheus

#### Improving Documentation for Prometheus and OpenTelemetry Interoperability

- Description:
  Prometheus and OpenTelemetry are commonly deployed together, yet many users struggle to understand how the two systems interoperate — especially around concepts such as resource attributes, label mapping, attribute promotion, and recommended integration patterns.

  [Prior UX research](https://opentelemetry.io/blog/2025/ux-research-prometheus-otel/) identified documentation gaps as a primary source of confusion, and [ongoing community discussions](https://opentelemetry.io/blog/2026/slack-community-insights/) continue to surface similar questions. While both projects provide extensive documentation, guidance is often fragmented, highly technical, or lacks practical end-to-end explanations for real-world usage.

  This mentorship focuses on improving the clarity, usability, and consistency of documentation that explains how Prometheus and OpenTelemetry work together. The mentee will analyze existing documentation across both projects, identify high-impact gaps or friction points, and collaborate with mentors to design and deliver meaningful documentation improvements upstream.

  The project is intentionally exploratory and iterative. Part of the mentorship is learning how to evaluate documentation quality, prioritize improvements, and define ways to measure the impact of documentation changes made during the program.
- Expected Outcome:
  - Review and audit existing Prometheus and OpenTelemetry documentation related to interoperability.
  - Define a prioritized documentation improvement plan together with the mentors.
  - Produce and submit documentation improvements upstream in one or both projects. These may include conceptual explanations, practical guides, examples, diagrams, and cross-project references.
  - Establish basic criteria or methods to evaluate documentation effectiveness during the mentorship.
- Recommended Skills:
  - Prior experience with technical writing or clear motivation to pursue a Tech Writing career.
  - Familiarity with Git and contributing via pull requests.
- Mentor(s):
  - Arthur Silva Sens (@arthursens, arthursens2005@gmail.com)
  - Tiffany Hrabusa (@tiffany76, tiffany.hrabusa@gmail.com)
  - Victoria Nduka (@nwanduka, ndukavictoria7@gmail.com)
- Upstream Issue: https://github.com/prometheus/prometheus/issues/17823

### Volcano

#### Add Volcano to Headlamp: Job and Queue Management UI

- Description:
  Volcano is a batch scheduling system for Kubernetes. This project will create a Headlamp plugin that adds first-class UI support for Volcano resources and workflows. The plugin will help users discover, inspect, and manage Volcano objects (e.g., queues, jobs, podgroups) directly inside Headlamp, making batch/HPC-style scheduling easier to operate from a Kubernetes UI. The idea is aligned with maintainer interest in a Volcano-focused Headlamp plugin. 

- Expected Outcome:
  - A working Headlamp plugin that can list and display key Volcano CRDs (e.g., Queue, Job, PodGroup) with meaningful status and relationships. Relevant Volcano related metrics displayed (on map and overview/detail pages).
  - Detail pages for Volcano resources with common actions (where appropriate) such as viewing events, related pods, and logs.
  - UX that fits Headlamp’s plugin patterns (navigation, list/detail views, and resource integration) and is packaged in a way consistent with the Headlamp plugin ecosystem. [1](https://github.com/headlamp-k8s/plugins), [2](https://headlamp.dev/docs/latest/development/plugins/)
  - Documentation covering installation, development workflow, and how to test against a cluster with Volcano installed.
  - Blog post on Kubernetes Blog about the project

- Recommended Skills:
  - TypeScript + React 
  - (Optional) Headlamp UI/plugin development, or other open source development
  - (Optional) Kubernetes fundamentals (CRDs, controllers, RBAC)
  - (Optional) Familiarity with Volcano concepts (queues, batch scheduling semantics)

- Mentor(s):
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)
  - Jesse Stutler (@JesseStutler, jessestutler97@gmail.com)

- Upstream Issue:
  https://github.com/kubernetes-sigs/headlamp/issues/4359

#### Volcano Documentation & Website Revamp with Docusaurus
- Description: The Volcano project currently uses Hugo for building its official website. However, current Hugo version of the website is pretty old and lacks modern features and flexibility, 
especially it is difficult to extend styles such as secondary menus, and there are problems such as invalid rendering of new markdown syntax. Docusaurus is a modern documentation framework that provides better support for versioning, localization, and theming.
This mentorship focuses on modernizing the Volcano website by migrating it to Docusaurus, improving documentation structure, maintainability, and overall user experience. 
The project will involve replicating and enhancing the existing theme, restructuring documentation, improving navigation, and aligning the site with CNCF documentation best practices. 
The mentorship will also explore long-term maintainability and contributor-friendliness of the documentation workflow, especially to ensure that the documentation in the Volcano website is automatically synchronized with the documentation in Volcano's other code repos, 
using some automated tools like agents to keep the Volcano website up-to-date.
- Expected Outcome:
  - Successful migration of the Volcano website from Hugo to Docusaurus
  - Improved documentation structure, navigation, and UX
  - A maintainable and contributor-friendly documentation setup
  - Clear contribution guidelines for future documentation updates
  - Automated synchronization of documentation between the Volcano website and other code repositories.
- Recommended Skills:
  - Basic knowledge of JavaScript/TypeScript
  - Familiarity with React (preferred)
  - Experience with static site generators (Docusaurus/Hugo preferred)
  - Markdown and documentation best practices
  - Git and GitHub workflow
  - Basic understanding of Kubernetes and Volcano concepts
- Mentor(s):
  - Jesse Stutler (@JesseStutler, jessestutler97@gmail.com)
  - Kuldeep (@de6p, de6p97@gmail.com)
- Upstream Issue:
  - https://github.com/volcano-sh/website/issues/398
  - https://github.com/volcano-sh/website/issues/427
  - https://github.com/volcano-sh/website/issues/425

#### E2E Test Suite for Volcano-global
- Description: Volcano-global is a multi-cluster scheduling project designed for cross-cluster resource management. 
Currently, the project lacks a comprehensive end-to-end (e2e) test suite to ensure stability across complex multi-cluster environments. 
This project aims to build a reproducible e2e test framework using Ginkgo and Kind, ensure each feature of Volcano-global is covered by test cases.
- Expected Outcome:
    - A functional e2e test framework integrated with GitHub Actions workflows.
    - Scripts for automated deployment of Volcano-global and bootstrapping of Karmada multi-cluster environments.
    - Test cases covering key scenarios: resource quota & priority, cross-cluster vcjob scheduling, data dependency aware scheduling, and hyperjob scheduling.
    - Comprehensive documentation, including test design docs and guidelines for extending e2e tests in the future.
- Recommended Skills:
    - Familiarity with Kubernetes concepts.
    - Understanding of Karmada and Volcano-global.
    - Ability to write e2e test cases using testing frameworks like Ginkgo.
    - Proficiency with kind and kubectl.
    - Experience with writing Workflows (CI/CD) and Makefiles.
- Mentor(s):
    - Jesse Stutler (@JesseStutler, jessestutler97@gmail.com)
    - FanXu (@fx147, 1473623795@qq.com)
- Upstream Issue:
    - https://github.com/volcano-sh/volcano-global/issues/35

#### E2E Test Suite for Volcano Agent Scheduling
- Description: Volcano has introduced Agent Scheduling feature that supports fast scheduling for AI agent workloads. This includes ShardingController for shard management, agent scheduler for agent workloads scheduling, and enhanced existing Volcano batch scheduler with sharding support to coordinated scheduling with agent scheduler. To ensure correctness and stability of this new scheduling mechanism, we need to build a comprehensive end-to-end (e2e) test suite. Test cases should cover key scenarios including shard creation, node assignment across shards, agent scheduler scheduling in different sharding modes, etc.

- Expected Outcome:
    - A comprehensive e2e test suite using Ginkgo framework covering all agent scheduling scenarios.
    - Test cases for ShardingController: shard creation, node assignment, node addition/removal, configuration changes, and node stability across shards. 
    - Test cases for Agent Scheduler: scheduling in no-sharding, hard-sharding, and soft-sharding modes, shard reconfiguration, and multi-worker scenarios.
    - Test cases for Volcano scheduler with sharding: validation of allocate, preempt, reclaim, and backfill actions under different sharding configurations.
    - Integration with CI/CD workflows for automated testing.
    - Comprehensive documentation including test design, coverage reports, and guidelines for extending tests.
- Recommended Skills:
    - Strong understanding of Kubernetes concepts and Volcano scheduler architecture.
    - Familiarity with Volcano agent scheduling design and shard management mechanisms.
    - Proficiency in writing e2e test cases using Ginkgo testing framework.
    - Experience with Go programming language.
    - Knowledge of kubectl and Kubernetes testing best practices.
    - Experience with CI/CD workflows and test automation.
- Mentor(s):
    - Jesse Stutler (@JesseStutler, jessestutler97@gmail.com)
    - Qi Min (@qi-min, qim_34@163.com)
- Upstream Issue:
    - https://github.com/volcano-sh/volcano/issues/4881
    - https://github.com/volcano-sh/volcano/issues/4882
    - https://github.com/volcano-sh/volcano/issues/4883
- Background:
    - https://github.com/volcano-sh/volcano/issues/4722

### WasmEdge

#### Extend sub-command of WasmEdge CLI tool

- Description: WasmEdge command line tool currently supports only the sub-command about run and compile the WASM files. As a WebAssembly runtime tool, it's welcome to have more functions about verifying the WASM files. In this mentorship, we expect the mentee to plan and implement the functionality of WasmEdge command line tool about parsing, validating, and instantiating WASM files, which developers can do with WasmEdge C API.
- Expected Outcome:
  - Extend the sub-commands for WasmEdge CLI tool contains not only `parse`, `validate`, or `instantiate`, etc.
  - Provide the test cases to verify your implementation.
  - Use WasmEdge C API to trigger the WasmEdge CLI tools for further test cases.
- Recommended Skills:
  - C/C++
  - WebAssembly
  - GitHub workflows
- Mentor(s):
  - YiYing He (@q82419, yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/4513

#### Module instance dependency tree in WASM store

- Description: It's common that there are several modules and linking when running a WebAssemly program. WasmEdge provides the APIs to handle the cases about loading and importing the WASM binaries and register the module instances into store in runtime. But in some complicated cases, the dependencies between module instances occurs. There may be requests to unregister and delete the module instances in store to release the space. In that case, the dependency of module instances should be considered to prevent from causing crash after deleting a module instance. In this mentorship, we expect the mentee to implement the dependency tree and the methodology to handle the module deletion in WasmEdge runtime.
- Expected Outcome:
  - Implement the module instance dependency tree and the maintainance methodology.
  - Design the multiple module instances test cases to verify the implementation.
- Recommended Skills:
  - C/C++
  - WebAssembly
  - GitHub workflows
- Mentor(s):
  - YiYing He (@q82419, yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/4514

#### Enable JIT mode support for per-function compilation

- Description: WasmEdge's JIT mode attempts to compile the entire module before execution, which also includes compiling unused functions in the specific workload. To reduce compilation time and improve performance, we aim to enable compilation on a per-function basis, focusing only on those functions actually used in the workload.
- Expected Outcome:
  - A series of test cases that verify the behavior and demonstrate the difference between entire module compilation and per-function basis compilation.
  - A series of PRs that implement the per-function compilation behavior.
  - An option to control the behavior between entire module and per-function compilation.
  - A document explaining how the new approach works and how to use it.
- Recommended Skills:
  - C++
  - WebAssembly
  - LLVM
  - JIT
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - Shen-Ta Hsieh (@ibmibmibm, beststeve@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/4516

### krkn - Chaos

#### Natural Language–Based Chaos Scenario Discovery
- Description: The objective of this internship task is to design and implement a feature of the
[`[krknctl](https://github.com/krkn-chaos/krknctl)`](https://github.com/krkn-chaos/krknctl) tool that enables users to explore the project’s functionality by submitting queries in **natural language**.
The tool will analyze the user’s request and Identify the most relevant **chaos scenario**, if any.

- Expected Outcome:
  - A **deterministic and lightweight solution** for natural language scenario discovery.
  - Improved robustness to vocabulary, phrasing, and semantic variations in user queries.
  - A measurable and extensible evaluation framework to support future improvements.
  - Clear documentation enabling future contributors to iterate on or extend the approach.
- Recommended Skills:
  - Python and Go programming
  - Basic knowledge of **Natural Language Processing (NLP)**
  - Experience with **machine learning models for text classification or similarity**
  - Familiarity with **Docker** and containerized applications
  - Ability to write clean, testable, and well-documented code
- Mentor(s):
  - Paige Patton (@paigerube14, ppatton@redhat.com)
  - Naga Ravi Chaitanya Elluri (@chaitanyaenr, nelluri@redhat.com)
  - Tullio Sebastiani (@tsebastiani, tsebasti@redhat.com)
- Upstream Issue: https://github.com/krkn-chaos/krkn/issues/1051


### OpenKruise

#### OpenKruise: Promote API Version to v1beta1 part 2

- Description: Many advance workloads in OpenKruise are widely used in production, however the API version of the workload is still in v1alpha1. The goal is to promote the API version of mostly used and mature workload to v1beta1 and optimize the CRD fields for better clarity. This is a follow-up of [previous project](https://mentorship.lfx.linuxfoundation.org/project/7426f5d7-1879-46cc-a933-880ee790d0eb), and target API is the advance operation and resilience policy.
- Expected Outcome:
  1. API definition of v1beta1 resources and the implementation for conversion webhook to convert v1alpha1 resource to v1beta1 resource
  2. Unit and integration tests
  3. Documentation for the usage of v1beta1 resource in the OpenKruise website
- Recommended Skills: Golang, kubernetes operator development
- Mentor(s):
  - Zhang Zhen (@furykerry, furykerry@gmail.com)
  - Zhong Tianyun (@AiRanthem, airanthem666@gmail.com)
- Upstream Issue:
  - https://github.com/openkruise/kruise/issues/2287


#### OpenKruise: Progressive Configmap Inplace Reloading

- Description: Native kubernetes configmap can reload dynamically but lack progressive rollout capability. OpenKruise community had comes up with the [design of new workload](https://github.com/openkruise/kruise/pull/1948) for configmap rolling update, and the [initial implementation](https://github.com/openkruise/kruise/pull/2149) has been running in one end user environment. However the current implementation is not generic enough and had many limitations. The goal is to complete the implementation in a more generic way and to support many configuration reloading strategies.
- Expected Outcome:
  1. The code for dynamic configmap rollout controller (ConfigMapSet)
  2. Unit and integration tests
  3. Documentation for the usage of ConfigMapSet
- Recommended Skills: Golang, kubernetes operator development
- Mentor(s):
  - Yuxing Yuan(@ABNER-1, abner199709@gmail.com)
  - Hao Wu(@Placeboy, psychoogopher@gmail.com) 
- Upstream Issue:
  - https://github.com/openkruise/kruise/issues/2288

#### OpenKruise: Rolling update for agent sandbox warm pool

- Description: OpenKruise Agents is a new sub-project of OpenKruise for agent sandbox lifecycle management. Warm pool is a key technology of OpenKruise Agents to ensure the fast sandbox provision. However existing warm pool lacks rolling update capability which makes the warm pool hard to maintain. The goal is to design and implement the basic rolling update capability for SandboxSet, the CRD for sandbox warm pool.
- Expected Outcome:
  1. The code for warm pool rolling update in SandboxSet
  2. Unit and integration tests
  3. Documentation for the usage of rolling update in SandboxSet
- Recommended Skills: Golang, kubernetes operator development
- Mentor(s):
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
  - Zhang Jinghui (@sivanzcw, sivanzcwzhang@gmail.com)
- Upstream Issue:
  - https://github.com/openkruise/agents/issues/76

#### KruiseGame Cloud-Hosted Version Development

- Description: OKG has attracted many large game companies to embrace cloud-native transformation. However, for many small and medium-sized game companies, they are not familiar with the container and Kubernetes ecosystem. Due to their smaller team sizes, they have relatively weak infrastructure management capabilities. To democratize cloud-native technology for more game companies, OKG plans to launch a cloud-hosted version. Users can deploy the runtime environment with one click and complete game service integration based on the official SDK. This will reduce the complexity of using infrastructure for game companies and adapt to multi-cloud environments.

- Expected Outcome:
  - Cloud Provider Abstraction Layer Design and Implementation
  - One-Click Deployment Tool/CLI Development
  - Official Game Service SDK Development
  - Multi-Cloud Environment Adaptation (AWS, Alibaba Cloud, etc.)
  - Simplified Configuration Management System
  - Comprehensive Documentation and Integration Guides

- Recommended Skills:
  - Golang
  - Kubernetes
  - Cloud Provider SDKs (AWS/Alibaba Cloud)
  - Infrastructure as Code (Terraform/Pulumi)

- Mentor:
  - Qiuyang Liu (@chrisliu1995, [chrisliu1995@163.com](mailto:chrisliu1995@163.com))
  - Zhongwei Liu (@ringtail, [zhongwei.lzw@alibaba-inc.com](mailto:zhongwei.lzw@alibaba-inc.com))

- Upstream Issue:
  - https://github.com/openkruise/kruise-game/issues/304
