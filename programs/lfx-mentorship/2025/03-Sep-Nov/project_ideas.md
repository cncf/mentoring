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

### KubeEdge 

#### Deep integration of KubeEdge with AMD edge nodes

- Description: AMD chips, with their powerful x86 architecture, exceptional computing performance, and advanced NPUs, demonstrate significant potential in fields such as industrial automation, in-vehicle systems, and high-performance edge computing. Introducing AMD's robust general-purpose and heterogeneous computing capabilities into the KubeEdge ecosystem is crucial for handling increasingly complex and latency-sensitive edge AI applications.However, the deep integration, performance optimization, and best practices between KubeEdge and AMD's high-performance edge platforms—particularly their built-in NPUs and other hardware acceleration units—still require systematic exploration and validation. This project aims to establish a complete link between KubeEdge and AMD edge nodes, building a comprehensive edge computing solution from hardware deployment to NPU acceleration, thereby greatly enriching KubeEdge's hardware ecosystem.
- Expected Outcome: 
  - Debug and support KubeEdge edge nodes running on AMD chips
  - Successfully deploying and managing edge application Pods on AMD-based edge nodes
  - Scheduling and managing AMD NPU resources through KubeEdge to achieve performance acceleration for edge AI inference applications.
  - Implement monitoring and metric collection for nodes, applications, and NPUs
  - Using KubeEdge to achieve the complete platform setup, configuration, and management from the cloud to AMD edge nodes
  - Complete hardware compatibility testing and produce high-quality technical documentation or blogs
- Recommended Skills: Go, Kubernetes, KubeEdge, Linux, Hardware Integration, AI/ML
- Mentors:
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6429 

#### Industrial Embodied Intelligence Benchmarking Dataset for KubeEdge-Ianvs

- Description: As industrial manufacturing accelerates its digital transformation through advancements in robotics, adaptive production lines, and smart testing systems, cloud-edge collaboration has emerged as a critical enabler for deploying embodied intelligence in complex operational environments. Contemporary industry requirements for embodied intelligence now extend beyond basic task execution to encompass multimodal perception and decision integration, dynamic environment adaptation, and distributed device orchestration. Existing benchmarking frameworks exhibit limitations in evaluating scenario-specific embodied attributes inherent to industrial settings. This initiative leverages the KubeEdge-Ianvs collaborative AI framework, integrating domain-specific test datasets, simulation environments, and quantitative metrics to establish a certified industrial-grade evaluation infrastructure for embodied intelligence systems.
- Expected Outcome:
  - Develop an industrial-grade embodied intelligence dataset through systematic classification and reorganization of existing resources/ examples
  - Deploy baseline algorithms and introduce metrics to establish performance benchmarks within KubeEdge-Ianvs
- Recommended Skills: Python, Benchmark, Dataset, Embodied Intelligence
- Mentors:
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
  - Mengzhuo Chen (@IcyFeather233, icyfeather@foxmail.com)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/197

#### Comprehensive Example Restoration for KubeEdge Ianvs

- Description: Ianvs serves as KubeEdge SIG AI distributed benchmark toolkit. As more and more contributors running, KubeEdge Ianvs now has 25 examples and the number is still increasing. KubeEdge Ianvs then faces mounting usability issues due to dependency evolution and validation mechanisms. As Python versions, third-party libraries, and Ianvs features advance, partial historical examples fail to execute. This has led to surging user-reported Issues from confused contributors, untested PRs breaking core functionality of legacy features, severely outdated documentation misaligning with actual capabilities. Without systematic intervention, the example risks becoming obsolete for edge-AI developers and especially newcomers. We then try to resurrect Ianvs’ usability with comprehensive example restoration.
- Expected Outcome:
  - Diagnose & fix bugs across examples, including dependency manifests, license scan and runtime configurations.
  - Documentation Modernization, including revamp tutorials with reproducible step-by-step guides, publish developer-focused debugging playbooks for common failures
  - Build a CI pipeline testing examples with GitHub Actions against multiple Python versions, critical Ianvs/upstream updates and block PRs that break validated examples
- Recommended Skills: Python, Benchmark, KubeEdge-Ianvs, AI/ML
- Mentors:
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
  - Shijing Hu (@hsj576, sjhu21@m.fudan.edu.cn)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/230

#### Research on Deploying Small Language Models with KubeEdge and Integrating with Enterprise AI Platforms

- Description: KubeEdge, as a native edge computing platform built on the Kubernetes ecosystem, offers capabilities such as reliable cloud-edge communication, edge autonomy, and IoT device integration. However, its ability to support intelligent model execution at the edge has yet to be systematically validated and practiced in real-world scenarios. This research aims to explore the feasibility and performance of deploying and running small language models on edge nodes using KubeEdge
- Expected Outcome:
  - Verification of KubeEdge's model deployment capability at the edge. Deployment and testing of model engines such as vLLM and llama.cpp on edge nodes, along with providing practical examples and detailed documentation for deploying small language models.
  - Exploration of integration schemes between KubeEdge and the OPEA platform. Connecting KubeEdge with OPEA’s model registry and workflow orchestrator to support automated model distribution and deployment from the cloud to edge nodes.
- Recommended Skills: KubeEdge, LLM, Golang, Python
- Mentors:
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6428

#### Device Anomaly Detection Framework Based on KubeEdge

- Description: The current KubeEdge platform represents device states using three statuses: Desired, ObservedDesired, and Reported. The device states displayed on the platform are entirely reliant on the Mapper, which collects and reports data from the device side. However, due to limitations in the Mapper implementation, physical device malfunctions, network delays, and potential network attacks, the device states shown on the platform may not accurately reflect the actual state of the devices. In the KubeEdge platform, if applications depend on device states for decision-making, such inconsistencies in state representation may lead to undesirable outcomes. Therefore, this project aims to design a device state anomaly detection framework for KubeEdge. By exploring the causal relationships among device states, the framework will establish lightweight anomaly detection capabilities and provide a comprehensive toolchain encompassing data collection, model training, real-time anomaly detection, and results visualization.
- Expected Outcome:
  - A general-purpose device anomaly detection framework that supports user-defined detection algorithms
  - A complete technical design document including model selection, training procedures, and detailed architecture diagrams for both training and online detection components
  - A machine learning model and corresponding anomaly detection algorithm capable of capturing causal relationships among device states, trained and tested using standard frameworks
  - An online anomaly detection module integrated into the KubeEdge device state reporting workflow, enabling real-time analysis through a model inference hook
- Recommended Skills: KubeEdge, IoT, Machine Learning
- Mentor(s):
  - Liwei Shen (@meixiezichuan, shenliwei@fudan.edu.cn)
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6312

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

