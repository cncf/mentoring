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

### Fluid

#### Design and implement a CLI tool to help easily use Fluid

CNCF - Fluid: Design and implement a CLI tool for Fluid (2026 Term 1)

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

### Volcano

#### Add Volcano to Headlamp: Job and Queue Management UI

CNCF - Volcano: Add Volcano to Headlamp: Job & Queue Management UI (2026 Term 1)

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

CNCF - Volcano: Volcano documentation & website revamp with Docusaurus (2026 Term 1)

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

CNCF - Volcano: E2E test suite for Volcano-global (2026 Term 1)

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

CNCF - Volcano: E2E test suite for Volcano agent scheduling (2026 Term 1)

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

### volcano/kthena

#### E2E Test Suite for Kthena

CNCF - Volcano: Kthena: E2E test suite (2026 Term 1)

- Description: kthena now has components such as router, ModelServing controller, etc. However, it lacks necessary e2e test coverage.
- Expected Outcome:
  - 1.E2E Test of modelserving Router and modelBooster.
  - 2.Write an E2E test for each of the three on GitHub workflows. Run them separately.
  - 3.Developer Guide of How to run and expend E2E test 
- Recommended Skills: go, kind, docker
- Mentor(s):
  - Zengzeng Yao(@YaoZengzeng, yaozengzeng@huawei.com), 
  - ZhenCheng Li(@LiZhenCheng9527, lizhencheng6@huawei.com),
- Upstream Issue: https://github.com/volcano-sh/kthena/issues/662

#### Optimising Kthena's autoscaler

CNCF - Volcano: Kthena: Optimize autoscaler with HPA/KEDA integration (2026 Term 1)

- Description: Kthena already possesses an autoscaler, but lacks ecosystem integration with peripherals such as HPA and KEDA. Consequently, users may harbour reservations when employing it. Therefore, there is a desire to optimise Kthena's autoscaler.
- Expected outcome:
  - 1.The ecological integration of HPA and KEDA.
  - 2.Scaling capability of replicas for servingGroup and role
  - 3.Transition of HPA configuration
  - 4.UserGuide and Proposal
  - 5.Unit test and e2e test for the new feature
- Recommended Skills: go, kind, docker, HPA
- Mentor(s):
  - ZhenCheng Li(@LiZhenCheng9527, lizhencheng6@huawei.com),
  - Zhonghu xu(@hzxuzhonghu, zhhxu2011@gmail.com),
- Upstream Issue: https://github.com/volcano-sh/kthena/issues/663

### Volcano/AgentCube

#### Establishing agentCube's authentication and authorisation capabilities

CNCF - Volcano: AgentCube: Establish authentication and authorization (2026 Term 1)

- Description: AgentCube is a proposed subproject in the Volcano community. It is designed to extend Volcano's capabilities to natively support and manage AI Agent workloads. At present, agentCube lacks authentication and authorisation capabilities. Therefore, it is hoped that basic authentication and authorisation capabilities for request identities can be established.
- Expected Outcome:
  - 1. The ability to authenticate and authorise requests. Such as Token, JWT, OAuth, Cookie...
  - 2. Documentation containing the proposal and user guide
  - 3. Unit test and E2E test for the feature
- Recommended Skills: go, kind, docker, authorization and authentication
- Mentor(s):
  - Zengzeng Yao(@YaoZengzeng, yaozengzeng@huawei.com), 
  - Zhonghu xu(@hzxuzhonghu, zhhxu2011@gmail.com),
- Upstream Issue: https://github.com/volcano-sh/agentcube/issues/156

