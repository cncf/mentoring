# Term 01 - 2026 March - May

Status: Planning

Mentorship duration - three months (full-time schedule)

### Timeline

| **Activity**                        | **Date**                                                                 |
|-------------------------------------|--------------------------------------------------------------------------|
| **Project Proposals Open**          | Wednesday, January 7 – Tuesday, January 20, 2026                         |
| **Mentee Applications Open**        | Monday, January 26 – Tuesday, February 10, 2026, 11AM PST (19:00 UTC)    |
| **Application Review Period**       | Wednesday, February 11 – Tuesday, February 24, 2026, 11AM PST (19:00 UTC)|
| **Selection Notifications**         | Thursday, February 26, 2026                                              |
| **Mentorship Program Begins**       | Monday, March 2, 2026                                                    |
| **Midterm Mentee Evaluations Due**  | Tuesday, April 14, 2026, 11AM PDT (18:00 UTC)                            |
| **First Stipend Payments**          | Wednesday, April 15, 2026                                                |
| **Final Mentee Evaluations Due**    | Tuesday, May 26, 2026, 11AM PDT (18:00 UTC)                              |
| **Second Stipend Payments**         | Wednesday, May 27, 2026                                                  |
| **Last Day of Term**                | Friday, May 29, 2026                                                     |

### Project instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2026/01-Mar-May/project_ideas.md, by January 20, 2026. Please limit proposals to 4-5 projects per CNCF project.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Table of Contents

- [Antrea](#antrea)
  - [Compare Antrea BPF generation for PacketCapture to tcpdump / libpcap](#compare-antrea-bpf-generation-for-packetcapture-to-tcpdump-libpcap)
- [Cartography](#cartography)
  - [Model and Parse AWS IAM Policy Conditions for Accurate Permission Analysis](#model-and-parse-aws-iam-policy-conditions-for-accurate-permission-analysis)
- [Cilium](#cilium)
  - [Cilium Project Pillar Pages](#cilium-project-pillar-pages)
- [Drasi](#drasi)
  - [Drasi for IoT: MQTT Integration and Real-Time Sensor Monitoring](#drasi-for-iot-mqtt-integration-and-real-time-sensor-monitoring)
- [etcd](#etcd)
  - [Dive deep into etcd by contributing to the self-Assessment of etcd](#dive-deep-into-etcd-by-contributing-to-the-self-assessment-of-etcd)
- [Fluid](#fluid)
  - [Extend Cache Runtime Interface to Support Full Data Lifecycle and In-Place Operations](#extend-cache-runtime-interface-to-support-full-data-lifecycle-and-in-place-operations)
  - [Unify and Modernize Fluid’s Unit Testing Framework and enhance testing coverage](#unify-and-modernize-fluids-unit-testing-framework-and-enhance-testing-coverage)
- [Jaeger](#jaeger)
  - [AI-Powered Trace Analysis with Local LLM Support](#ai-powered-trace-analysis-with-local-llm-support)
  - [Upgrading Core Routing and State Management in Jaeger UI](#upgrading-core-routing-and-state-management-in-jaeger-ui)
- [Karmada](#karmada)
  - [Enhance Karmada's Quick Start Experience and Incorporate macOS Support](#enhance-karmadas-quick-start-experience-and-incorporate-macos-support)
  - [OmniControl for Karmada Dashboard](#omnicontrol-for-karmada-dashboard)
  - [Protect Karmada Component Flags from Unexpected Changes](#protect-karmada-component-flags-from-unexpected-changes)
- [kgateway](#kgateway)
  - [Add support for Chaos Engineering/Fault Injection](#add-support-for-chaos-engineeringfault-injection)
  - [Ecosystem Integrations & Tutorials for kgateway's AI Gateway](#ecosystem-integrations-tutorials-for-kgateways-ai-gateway)
  - [Modernize and improve kgateway end-to-end testing](#modernize-and-improve-kgateway-end-to-end-testing)
- [Knative](#knative)
  - [Enhancing the Knative Educational Game with Advanced EDA Patterns and Web Deployment](#enhancing-the-knative-educational-game-with-advanced-eda-patterns-and-web-deployment)
- [kube-burner](#kube-burner)
  - [kube-burner](#kube-burner)
- [Kubernetes](#kubernetes)
  - [#Add OpenTelemetry support](#add-opentelemetry-support)
- [KubeStellar](#kubestellar)
  - [Documentation and Self-Service Enablement Specialist](#documentation-and-self-service-enablement-specialist)
  - [Integration and Ecosystem Development Specialist](#integration-and-ecosystem-development-specialist)
- [Kyverno](#kyverno)
  - [DevRel](#devrel)
  - [Test Enhancements -  Kyverno CLI Tests - envtest, fake client](#test-enhancements---kyverno-cli-tests---envtest-fake-client)
  - [Test Enhancements -  Testing Framework / Toolset for integration tests](#test-enhancements---testing-framework-toolset-for-integration-tests)
- [LitmusChaos](#litmuschaos)
  - [Add Prometheus Metrics to LitmusChaos Control Plane Service](#add-prometheus-metrics-to-litmuschaos-control-plane-service)
- [OpenCost](#opencost)
  - [OpenCost UI Revamp](#opencost-ui-revamp)
- [OpenTelemetry](#opentelemetry)
  - [Tooling for detecting impact of behavioral changes in Go libraries](#tooling-for-detecting-impact-of-behavioral-changes-in-go-libraries)
- [OpenYurt](#openyurt)
  - [Implement Label-Driven Automated Installation and Uninstallation of YurtHub on Edge Nodes](#implement-label-driven-automated-installation-and-uninstallation-of-yurthub-on-edge-nodes)
- [PipeCD](#pipecd)
  - [Amazon ECS plugin for Pipedv1](#amazon-ecs-plugin-for-pipedv1)

  - [Community Building and Social Media Growth for PipeCD](#community-building-and-social-media-growth-for-pipecd)
  - [Multi-cluster Kubernetes plugin for Pipedv1](#multi-cluster-kubernetes-plugin-for-pipedv1)
- [Prometheus](#prometheus)
  - [Improving Documentation for Prometheus and OpenTelemetry Interoperability](#improving-documentation-for-prometheus-and-opentelemetry-interoperability)
- [urunc](#urunc)
  - [Create a dashboard and a notification system for CI testing in `urunc`](#create-a-dashboard-and-a-notification-system-for-ci-testing-in-urunc)

  - [Investigate missing custom OCI Annotations in urunc containers](#investigate-missing-custom-oci-annotations-in-urunc-containers)
  - [Optimizing Rootfs Handling with block-based snapshotters in `urunc`](#optimizing-rootfs-handling-with-block-based-snapshotters-in-urunc)
## Accepted Projects

### Antrea

#### Compare Antrea BPF generation for PacketCapture to tcpdump / libpcap

CNCF - Antrea: Compare PacketCapture BPF generation vs tcpdump/libpcap (2026 Term 1)

- Description: Antrea's [PacketCapture feature](https://github.com/antrea-io/antrea/blob/main/docs/packetcapture-guide.md) includes custom BPF code generation for packet filters defined in the PacketCapture CRD. The code is currently tested using manually-generated test cases, which is tedious, error-prone, and limits testing coverage. Given that the code attempts to mimic the BPF generation done by tcpdump, we should improve the testing approach by: 1) using AI to generate comprehensive test inputs, 2) using tcpdump to generate reference BPF code for the inputs, 3) comparing our generated BPF with the tcpdump reference, 4) analyzing any differences to determine if our BPF is incorrect or equivalent, 5) updating our BPF generation to match tcpdump when possible, and 6) committing all test cases to run in CI.
- Expected Outcome: A comprehensive test suite for the PacketCapture BPF generation code that uses tcpdump-generated BPF as a reference. The test suite should be integrated into CI and should increase testing coverage compared to the current manually-generated test cases. Any discrepancies between Antrea's BPF generation and tcpdump's should be analyzed and resolved, with the BPF generation code updated as needed to match tcpdump's output when appropriate.
- Recommended Skills: Golang, familiarity with BPF (Berkeley Packet Filter), basic understanding of packet filtering and tcpdump/libpcap. We encourage using AI tools to generate test cases and improve the BPF code generation, but we expect careful review of generated artifacts before submitting them for review.
- Mentor(s):
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
  - Hang Yan (@hangyan, hang.yan@hotmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/7701
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/39be2843-94f8-4ac6-aa0a-3537631aca86


### Cartography

#### Model and Parse AWS IAM Policy Conditions for Accurate Permission Analysis

CNCF - Cartography: Model and parse AWS IAM policy conditions for permission analysis (2026 Term 1)

- Description:
  [Cartography](https://github.com/cartography-cncf/cartography) currently models AWS IAM policies and their relationships to principals and resources, but does not parse or represent IAM policy _conditions_. This means permission analysis overstates effective access: a policy that only allows access from a specific IP range or requires MFA is treated the same as an unrestricted policy.
  
  This project will extend Cartography's IAM module to parse common condition keys (e.g., `aws:SourceIp`, `aws:MultiFactorAuthPresent`, `aws:PrincipalOrgID`, `aws:PrincipalTag`) and model them in the graph, enabling downstream tools to build more accurate attack paths and permission analysis.

- Expected Outcome:
  - Work with mentor to design way to model IAM policy conditions, including nodes/properties for condition operators and keys
  - Parse IAM policy condition blocks covering the top 10 most common condition keys
  - Update relationships between IAM policies and principals/resources that surface condition constraints
  - Unit and integration tests with realistic IAM policies
  - Documentation and example queries demonstrating condition-aware permission analysis

- Recommended Skills:
  - Python
  - AWS IAM policies and condition grammar (or willingness to learn)
  - Neo4j / graph data modeling (or willingness to learn)
  - Familiarity with Cartography's codebase (helpful but not required)

- Mentor(s):
  - Alex Chantavy (@achantavy, alex@subimage.io)
  - Kunaal Sikka (@kunaals, kunaal@subimage.io)

- Upstream Issue:
  - https://github.com/cartography-cncf/cartography/issues/2250
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a5407d4c-6496-4715-a785-3d9fa862c174


### Cilium

#### Cilium Project Pillar Pages

CNCF - Cilium: Cilium Project Pillar Pages (2026 Term 1)

- Description: cilium.io could benefit from SEO pillar pages that capture higher level problems that people will search for. Each page should deep dive into a comprehensive overview of the topic and contain high quality architectural images and diagrams that will also be discovered in search. These pages will capture high-intent search traffic and guide users from "Curious" to "Installed."
- Expected Outcome: 8 pillar pages with content and images deployed on the website
- Recommended Skills: Markdown, Figma, Writing
- Mentor(s):
  - Bill Mulligan (@xmulligan, bill@isovalent.com)
- Upstream Issue: https://github.com/cilium/cilium.io/issues/841
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/854310e3-e1ac-472c-945f-97bb16bc1aca


### Drasi

#### Drasi for IoT: MQTT Integration and Real-Time Sensor Monitoring

CNCF - Drasi: IoT: MQTT integration and real-time sensor monitoring (2026 Term 1)

- Description: Drasi is a Data Change Processing platform that enables developers to detect and react to meaningful data changes using declarative Cypher queries. Drasi excels at complex change detection with unique features like `drasi.trueFor()` (detecting conditions that persist over time) and absence-of-change detection (alerting when expected events don't occur). However, it currently lacks native connectivity to IoT protocols.

  Drasi Lib provides Drasi's powerful graph-aware decision engine as an embeddable Rust library that can run completely offline on constrained hardware—enabling edge computing scenarios where logic runs directly on sensors and gateways. IoT applications fundamentally need to detect state transitions, but developers typically must write boilerplate code and manage state persistence manually. Drasi's diff-engine handles state management and change computation automatically, emitting events only when meaningful changes occur.

  MQTT (Message Queuing Telemetry Transport) is the de-facto standard protocol for IoT, used by AWS IoT Core, Azure IoT Hub, and virtually every IoT deployment. Adding MQTT support to Drasi Lib will unlock the entire IoT ecosystem for Drasi users.

  In this project, the mentee will build a suite of lightweight Rust crates that enable Drasi Lib to communicate with MQTT brokers. They will create connectors to ingest sensor data (MQTT Source), execute local actions (Shell Reaction), and close the control loop (MQTT Reaction). Finally, they will demonstrate the complete stack with a demo showcasing Drasi's unique temporal capabilities for IoT.

  The mentee will gain hands-on experience with async Rust (tokio), IoT protocols (MQTT), stream processing concepts, and graph-based data modeling.

- Expected Outcome:
  - Build MQTT Source Plugin - A new Rust crate that enables Drasi to ingest data from MQTT brokers
  - Build Shell/Command Reaction - A new Rust crate that enables Drasi to execute local system commands based on query results
  - Build MQTT Reaction Plugin - A new Rust crate that enables Drasi to publish alerts/commands to MQTT topics
  - Create IoT Demo Scenario - A complete, runnable demonstration showing Drasi's power for IoT use cases
  - Create Documentation & Tutorial - Comprehensive guide for IoT developers to adopt Drasi
  - (Stretch Goal) Build InfluxDB Source - Enables Drasi to ingest from InfluxDB, unlocking Telegraf's 200+ input plugins for IoT
- Recommended Skills:
  - Rust (intermediate level: ownership, traits, async/await with tokio)
  - Basic understanding of IoT concepts (MQTT protocol, pub/sub patterns)
  - Git and GitHub workflow
  - (Helpful) Docker and Docker Compose for testing
  - (Helpful) Basic understanding of graph concepts or Cypher query language
  - (Helpful) Experience with message brokers (MQTT, Kafka, etc.)
- Mentor(s):
  - Aman Singh (@amansinghoriginal, singh.amandeep@microsoft.com) - Primary
  - Allen Jones (@agentofreality, Jones.Allen@microsoft.com)
- Upstream Issue: https://github.com/drasi-project/drasi-core/issues/155
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/febb9f7b-8516-41b5-8815-770d333ac978


### etcd

#### Dive deep into etcd by contributing to the self-Assessment of etcd

CNCF - etcd: Contribute to etcd Self-Assessment (2026 Term 1)

- Description:
  This project continues the work initiated in the [etcd - technical scope of the assessment](https://docs.google.com/document/d/1RTXffyDJ8hLoHl_Mo-frQheRQ-8QIVQJ6mqAw69zcP4/edit?pli=1&tab=t.0). The goal is to dive deep into etcd's architecture in depth by completing and publishing the self-assessment for SIG-Security review. The project has two key components: (1) collaborating with mentors, project maintainers, and Special Interest Groups (SIGs) to investigate etcd and kube-apiserver internals, particularly the lifecycle of requests and consensus mechanisms, and (2) updating and enhancing the [etcd.io website](https://etcd.io/) documentation by creating new pages, refining existing content, and publishing blog posts to ensure the documentation reflects current architecture and best practices.
  Whether you're a new contributor, already active in the community, or simply curious about etcd, we welcome you to join this project!

- Expected Outcome:
  - Complete the etcd self-assessment draft currently in progress in this [document](https://docs.google.com/document/d/1RTXffyDJ8hLoHl_Mo-frQheRQ-8QIVQJ6mqAw69zcP4/edit?pli=1&tab=t.0) and prepare it for review by SIG-Security and etcd maintainers.
  - Publish the finalized self-assessment in the SIG-Security repository (see [example format](https://github.com/kubernetes/sig-security/blob/main/sig-security-assessments/cluster-api/self-assessment.md)).
  - Develop comprehensive understanding of etcd internals including read and write flows, Raft consensus algorithm, high availability mechanisms, data stores, and data flow diagrams within Kubernetes environments.
  - Update the etcd.io website with improved documentation, new pages covering architectural insights, and blog posts highlighting key findings from the assessment work.
  - Coordinate a full SIG-Security review process.
  - Actively participate in project SIG meetings, communication channels, and SIG Security discussions.

- Recommended Skills:
  - Golang
  - Understanding of distributed systems (etcd, kube-apiserver) and systems architecture
  - Cybersecurity knowledge
  - Open Source Mindset
  - Familiarity with Git and contributing via pull requests
  - Participation in project SIG meetings, SIG communication channels

- Mentors:
  - Ronald Ngounou (@ronaldngounou, ronald.ngounou@yahoo.com)
  - Siyuan Zhang (@siyuanfoundation, physicsbug@gmail.com)
  - Carol Valencia (@krol3, carol.valencia@konghq.com)
- Upstream Issue:
  - https://github.com/etcd-io/etcd/issues/21159
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/90bcea22-62eb-4e81-aa0f-89b517b2a620


### Fluid

#### Extend Cache Runtime Interface to Support Full Data Lifecycle and In-Place Operations

CNCF - Fluid: Extend cache runtime interface for full data lifecycle (2026 Term 1)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/44b75328-8f4b-48f0-a4d5-c8c6d5e86a0a

#### Unify and Modernize Fluid’s Unit Testing Framework and enhance testing coverage

CNCF - Fluid: Modernize unit testing framework and increase UT coverage (2026 Term 1)

- Description: To enhance code quality, maintainability, and developer experience, Fluid plans to migrate its unit testing framework from Testify to Ginkgo + Gomega—a more expressive and behavior-driven testing stack widely adopted in the Go ecosystem. Concurrently, we aim to significantly improve unit test (UT) coverage, raising it from the current 57% to at least 75%, thereby reducing regression risks and strengthening overall system reliability
- Expected Outcome: 
   - Deliver comprehensive migration guidelines, coding best practices, and hands-on team training for Ginkgo + Gomega adoption.
   - Achieve a measurable increase in unit test coverage—from 57% to 75%—across core modules of the Fluid codebase.
- Recommended Skills:  Fluid, Go, unit testing frameworks (gomonkey, ginkgo, gomega, testify)
- Mentor(s):
   - Zhihao Xu (@TrafalgarZZZ， [trafalgarz@outlook.com](mailto:trafalgarz@outlook.com))
   - Yang Che (@cheyang, [cheyang52@gmail.com](mailto:cheyang52@gmail.com))
- Upstream Issues: https://github.com/fluid-cloudnative/fluid/issues/5407
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/daf54f56-a7e6-48a8-ab9f-45915d05a203


### Jaeger

#### AI-Powered Trace Analysis with Local LLM Support

CNCF - Jaeger: AI-Powered Trace Analysis with Local LLM Support (2026 Term 1)

- Description: Jaeger is a widely used distributed tracing platform. This project aims to integrate Small Language Models (SLMs) and Large Language Models (LLMs) into the Jaeger ecosystem to provide intelligent trace analysis. Key features include natural language search mapping (mapping English queries to Jaeger's internal search parameters), contextual analysis, and summarization ("Explain this Span" or "Explain this trace"). The project involves backend integration using Go and LangChainGo, and frontend integration within the Jaeger React UI.
- Expected Outcome: A working "Natural Language Search" input that populates the Jaeger search form, contextual "Explain" buttons for errors and spans, a robust backend implementation using langchaingo supporting local models (e.g., Ollama) via YAML config, and comprehensive documentation.
- Recommended Skills: Backend: Strong Go (Golang) experience. Architecture: Understanding of OpenTelemetry Collector architecture. AI/LLM: Familiarity with LangChain and prompt engineering for SLMs. Frontend: React.js experience.
- Mentor(s):
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/7832
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/27ef67ba-24a4-4683-872e-d56bcc11d66a

#### Upgrading Core Routing and State Management in Jaeger UI

CNCF - Jaeger: Upgrade core routing and state management in Jaeger UI (2026 Term 1)

- Description: This project focuses on modernizing the Jaeger-UI by upgrading its foundational routing and state management libraries. The primary goals are to migrate from legacy react-router patterns to React Router v7 and replace the deprecated history package and older Redux integration patterns with modern standards like redux-first-history. This refactoring will improve long-term maintainability, enhance performance, and simplify the code for one of the industry's most critical observability tools.
- Expected Outcome: A fully migrated Jaeger-UI running on React Router v7, removal of deprecated history v4/v5 dependencies, refactored functional components using modern hooks (useNavigate, useParams), and a robust test suite ensuring no regressions in trace visualization or search functionality.
- Recommended Skills: JavaScript/TypeScript & React: Deep familiarity with hooks and component lifecycles. State Management: Experience with Redux. Routing Knowledge: Understanding of SPAs and browser history APIs. Testing: Experience with React Testing Library or similar.
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/3313
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d13df7c9-06d3-4589-bef8-c13e5c79c2a2


### Karmada

#### Enhance Karmada's Quick Start Experience and Incorporate macOS Support

CNCF - Karmada: Enhance quick start experience and add macOS support (2026 Term 1)

- Description: The initial interaction for many users with a project often begins with its "Quick Start" guide. Ensuring this guide is of high quality and up-to-date is crucial. Currently, the community offers several quick start methods, including a one-click setup script (hack/local-up-karmada.sh), installation tools such as Helm, karmadactl, and the operator, alongside learning tutorials on Killercoda.
Although the community's CI effectively maintains these installation methods, it lacks support for different operating systems, notably macOS. Furthermore, some Killercoda tutorials are outdated and do not reflect the latest features and best practices. This project aims to ease the entry barrier for new users by enhancing the quick start process, ensuring cross-platform compatibility, and updating educational content.
- Expected Outcome:
  - Verify the feasibility of installing hack/local-up-karmada.sh on macOS environments, including both macOS ARM and Intel and address any issues that arise.
  - Implement a new CI workflow in GitHub Actions to test Karmada's installation and basic functionalities on macOS. GitHub Actions can select specific environments through runs-on, covering both macOS ARM and Intel.
  - Revise existing outdated scenarios on Killercoda and develop valuable new scenarios to guide users through current features. This includes:
    - Extracting common functions from various scenarios to reduce code duplication.
    - Updating the course information of existing scenarios by correcting outdated content and optimizing the material to enhance learning outcomes.
    - Adding new scenarios, such as:
      - A tutorial on FHPA usage.
      - An application-level failover guide.
      - Multi-component workload scheduling (support for workloads common in AI and big data).
- Recommended Skills:
  - Go programming language
  - Familiarity with macOS
  - Bash/shell scripting
  - CI/CD systems (e.g., GitHub Actions)
  - Documentation tools and best practices
- Mentor(s): 
  - Zhuang Zhang (@zhzhuang-zju, m17799853869@163.com)
  - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/community/issues/170#issuecomment-3736732294
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/28f6a413-4190-40bd-9226-cdce5767e210

#### OmniControl for Karmada Dashboard

CNCF - Karmada: OmniControl for Karmada Dashboard (2026 Term 1)

- Description: We have already implemented management for all types of resources on the control plane and for particial resources on member clusters in the Karmada Dashboard. However, resource management is currently atomic, and the relationships between resources are not presented intuitively. As a result, users may find it difficult to understand and manage relationship across resources.
For example:
1. On the control plane, after a user creates a ResourceTemplate, it is not easy to tell which Policy matched that ResourceTemplate and then generated the corresponding ResourceBinding and subsequent Work resources.
2. Across the control plane and member clusters plane, users cannot easily see which member clusters a ResourceTemplate has been propagated to, or the status of the distributed resources in each member cluster.
Therefore, we aim to provide a unified management and control capability (OmniControl). From the perspective of ResourceTemplate, users should be able to view the resource’s status on both the control plane and member clusters plane, building on the existing atomic capabilities. This will help users understand the end-to-end status of resources more intuitively and quickly identify and resolve issues when propagation or distribution failures occur.
- Expected Outcome:
  - Comprehensive design and API documentation
  - Topology visualization of Karmada core resources and Kubernetes resources ([Karmada architecture diagram](https://karmada.io/docs/core-concepts/architecture/))
  - Control-plane resource integration: users can view details of policy resources and multi-cloud resources by clicking the corresponding nodes in the topology graph (read-only)
  - Member-cluster resource integration: users can view details of Kubernetes resources (including workloads, configs, and services) with the same UX
  - A demo showcasing abnormal resource distribution cases (e.g., insufficient GPU resources; one example is sufficient)
- Recommended Skills:
  - Go
  - Kubernetes
  - React
  - CI/CD systems (GitHub Actions)
  - Documentation tools and best practices
- Mentor(s): 
  - Wenjiang Ding (@warjiang, 1096409085@qq.com)
  - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/dashboard/issues/227
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2fc906da-cc46-4606-8b8d-600b47ff0a95

#### Protect Karmada Component Flags from Unexpected Changes

CNCF - Karmada: Protect component flags from unexpected changes (2026 Term 1)

- Description: The Karmada project consists of several components (e.g., controller-manager, scheduler, karmada-search, etc.), each accepting various command-line flags for configuration. These flags come from multiple sources: third-party dependencies (e.g., Kubernetes, controller-runtime) and custom flags defined by Karmada itself. During dependency upgrades or internal refactoring, flags can be unexpectedly added, removed, or modified, potentially impacting users who rely on specific configurations. This project aims to create comprehensive documentation and tooling to track and document all flags for Karmada's maintained components, establishing a baseline to detect and manage flag changes carefully.
- Expected Outcome: 
  - Comprehensive flag documentation for all Karmada components (controller-manager, scheduler, karmada-search, webhook, aggregated-apiserver, descheduler, metrics-adapter, scheduler-estimator)
  - Automated flag extraction and documentation generation tool
  - CI/CD pipeline integration to detect and alert on flag changes
  - Documentation of flag lifecycle management (deprecation, removal)
- Recommended Skills: 
  - Go programming language
  - Kubernetes and its flag management patterns
  - Bash/shell scripting
  - CI/CD systems (GitHub Actions)
  - Documentation tools and best practices
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/community/issues/170#issuecomment-3728029454
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cb8a5f0e-fdd4-4e6d-b937-b98b2c80381e


### kgateway

#### Add support for Chaos Engineering/Fault Injection

CNCF - kgateway: Add Chaos Engineering / fault injection support (2026 Term 1)

- Description: This project focuses on adding fault injection support in kgateway, enabling platform operators and developers to test system resiliency under controlled failure scenarios. Fault injection allows teams to proactively identify weaknesses by introducing network latency, service errors, or resource constraints. This project will involve designing a configuration API for specifying fault injection rules, implementing support in the kgateway plugin framework, integrating with Envoy’s native fault injection capabilities, and creating documentation and examples to demonstrate practical use cases in Kubernetes environments.

Expected Outcome:
- Create a design doc outlining the proposed API for fault injection and present at a community meeting
- Implement the fault injection plugin in kgateway, leveraging Envoy capabilities
- Develop e2e tests to validate fault injection scenarios
- Write developer-facing documentation with example configurations
- Create blogs and tutorials demonstrating how to use Chaos Engineering in kgateway
- Demo fault injection features during kgateway community meetings

Recommended Skills:
- Go
- Kubernetes
- Kubernetes Gateway API
- Envoy

Mentor(s):
- Primary Mentor: Omar Hammami (@puertomontt, omar.hammami@solo.io)
- Secondary Mentor: Tim Flannagan (@timflannagan, tim.flannagan@solo.io)

- Upstream Issue: https://github.com/kgateway-dev/kgateway/issues/11188
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b8acc432-094a-431a-877a-97f209893672

#### Ecosystem Integrations & Tutorials for kgateway's AI Gateway

CNCF - kgateway: Ecosystem integrations & tutorials for AI Gateway (2026 Term 1)

- Description: This project focuses on creating clear, approachable, and practical documentation that shows how to integrate kgateway’s AI Gateway (agentgateway) with popular AI tools, developer UIs, and other CNCF ecosystem projects. Its aim is to make kgateway’s documentation more practical, discoverable, and reflective of real ecosystem usage, so users can better understand what’s possible and how kgateway fits into the broader AI and cloud-native landscape.

Examples of integrations and tutorials include:
- Open WebUI / OpenAI Codex / Claude Code: Step-by-step guides showing how to connect agentgateway to interactive UIs for testing, demos, and common integration patterns
- Demonstrate how agentgateway fits into the CNCF ecosystem by integrating with tools such as:
	- Argo Rollouts: Update the Argo Rollout Gateway API guides with the latest agentgateway example config. Create docs using Argo Rollouts with AgentgatewayBackends for LLM providers and MCP servers. 
  - KServe: Using agentgateway as an ingress for model serving, enabling rate limiting, authentication, and observability
  - Knative: Add a guide for setting up kgateway with agentgateway as a custom ingress gateway

- Expected Outcome:
- A series of integration guides and tutorials demonstrating how to use kgateway with AI developer tools and CNCF ecosystem projects
- New examples, improvements, and documentation pages contributed to the kgateway documentation site
- GitHub issues opened for usability gaps, missing documentation, and friction points discovered during hands-on testing
- Live or recorded demo integrations presented during kgateway community meetings
- Fun! 🎉

- Recommended Skills:
- Strong written communication skills
- Interest in learning and exploring new projects! 
- Basic understanding of GitHub, Markdown, and technical blogging 
- (Bonus) Experience using any of the following: Open WebUI, OpenAI Codex, Claude Code
- (Bonus) Experience with CNCF projects like Argo Rollouts, KServe and Knative 

- Mentor(s):
  - Primary Mentor: Nina Polshakova (@npolshakova, ninapolshakova@gmail.com)
  - Secondary Mentor: Art Berger (@artberger, art.berger@solo.io)

- Upstream Issue: https://github.com/kgateway-dev/kgateway.dev/issues/606
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1c354620-3475-474a-9641-a0a93f6961cf

#### Modernize and improve kgateway end-to-end testing

CNCF - kgateway: Modernize and improve end-to-end testing (2026 Term 1)

- Description: Kgateway has a large number of end-to-end (e2e) tests that functionally test the full end-to-end flow of various routing and policy features present for both supported dataplane proxies, Envoy and agentgateway.

  However, these tests have been implemented with a custom e2e framework which is starting to show some cracks, notably around the speed of execution and general obtuseness of the framework.

  This project will contain two main phases:
  1. Analyze the gaps of the current custom e2e framework and work with kgateway maintainers to decide whether or not it is worth migrating to an alternative solution
  2. Depending on the outcome of phase 1, identify a set of e2e tests to either migrate to the new framework or improve the execution of in the current framework

  This project will provide exposure to a wide range of features in kgateway as well as real-world experience with ensuring the kgateway project is providing rock solid reliability for its users!

- Expected Outcome:
  - An approved design doc with a decision on whether to use the existing custom E2E framework vs. using an alternative approach
  - A set of e2e tests that have been migrated or modernized that will run as part of the kgateway CI pipeline
  - A well-defined pattern that can be followed for e2e tests that have not been worked on as part of this project

- Recommended Skills:
  - Go
  - Kubernetes
  - Kubernetes Gateway API
  - End-to-end testing experience

- Mentor(s):
  - Primary Mentor: Seth Heidkamp (@sheidkamp, seth.heidkamp@solo.io)
  - Secondary Mentor: Lawrence Gadban (@lgadban, lawrence.gadban@solo.io)

- Upstream Issue: https://github.com/kgateway-dev/kgateway/issues/13351
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4343c10e-7c14-416f-b26b-6094312aa397


### Knative

#### Enhancing the Knative Educational Game with Advanced EDA Patterns and Web Deployment

CNCF - Knative: Enhance Knative Educational Game & web deployment (2026 Term 1)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/414b7749-fe19-4874-a260-b6017c2c3242


### kube-burner

#### Enhancements around k8s performance testing

CNCF - kube-burner: Enhancements around Kubernetes performance testing (2026 Term 1)

- Description:
  We intend to get some help around open issues in the repository and also come up with new use cases and scenarios for performance testing any kubernetes distribution. We love new perspectives and are always open to new ideas alongside what we have as tracked work in github issues. 

  For the purpose of this mentorship program term, we have created an umbrella issue that outlines some of the critical enhancements to the project.
- Expected Outcome:
  To knock down some of open critical issues and bring in new perspective to the project. There are no restrictions while working with issues/enhancements.
- Recommended Skills:
  - Golang
  - Kubernetes
  - Cloud Platforms
- Mentor(s):
  -  Vishnu Challa (@vishnuchalla, vchalla@redhat.com) 
  -  Raul Sevilla (@rsevilla87, rsevilla@redhat.com)
- Upstream Issues: (https://github.com/kube-burner/kube-burner/issues/1079)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8f651e4b-a0bf-468a-ab2b-a8167bd85e87


### Kubernetes


#### Cluster API Provider AWS (CAPA)

##### Add OpenTelemetry support

CNCF - Kubernetes: CAPA: Add OpenTelemetry support (2026 Term 1)

- Description: Cluster API Provider AWS (CAPA) enables the creation of Kubernetes clusters in AWS with Cluster API. With increasing adoption of Cluster API (CAPI) in general and of CAPA we want to improve the supportability of CAPA, especially for production environments. The first part of this is to add telemetry/tracing using OpenTelemetry so that we can understand and visualize the flow of reconciliation within the provider. This will enable the project and its end users to understand the behavior of reconciliation (including API services called) and will help diagnose issues and performance problems.
- Expected Outcome: An implementation of OpenTelemetry in CAPA with associated documentation that has been released in a new version of CAPA.
- Recommended Skills: Golang, Kubernetes, AWS
- Mentor(s):
  - Richard Case (@richardcase, richmcase@gmail.com)
  - Daniel Lipovetsky (@dlipovetsky, daniel.lipovetsky@gmail.com )
- Upstream Issue: https://github.com/kubernetes-sigs/cluster-api-provider-aws/issues/2178
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e60d11ff-bf0a-47d6-a873-0583428c8cb3


### KubeStellar

#### Documentation and Self-Service Enablement Specialist

CNCF - KubeStellar: Documentation and self-service enablement specialist (2026 Term 1)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7a1357be-6d84-439a-8cad-4f9b90d491c9

#### Integration and Ecosystem Development Specialist

CNCF - KubeStellar: Integration and ecosystem development specialist (2026 Term 1)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1cf30f20-dea9-42ae-a115-2747d6755d9c


### Kyverno

#### DevRel

CNCF - Kyverno: DevRel (junior) mentorship (2026 Term 1)

- Description: 
  Option 1: General Junior DevRel Mentorship

  This mentorship is designed for a junior Developer Relations or community-focused contributor who wants hands-on experience supporting a fast-growing open source project in the cloud native ecosystem. The mentee will work closely with the Kyverno maintainers and community to improve the overall developer and end-user experience through better documentation, tutorials, example content, and community-facing resources.

  The mentee will contribute upstream to Kyverno by helping create clear getting-started guides, improving existing documentation, supporting educational content such as blogs or walkthroughs, and assisting with community enablement initiatives. The mentorship focuses on foundational DevRel skills including technical communication, open source contribution workflows, user empathy, and translating complex technical concepts into approachable learning materials, while building a visible portfolio of real-world open source contributions. 

  Option 2: Concise Version of the CEL-Focused Mentorship (1–2 Paragraphs)
  This mentorship offers a junior DevRel contributor the opportunity to work directly with the Kyverno community to support the adoption of Kyverno’s new CEL-based policy capabilities. The mentee will help create and refine documentation, tutorials, and example content that make it easier for new users to get started with CEL policies and for existing users to migrate from traditional policy types to CEL policies.

  Working upstream with Kyverno maintainers, the mentee will gain hands-on experience with Kubernetes policy, developer education, and open source collaboration, while learning core DevRel skills such as technical storytelling, community-focused documentation, and content-driven adoption.

- Recommended Skills:  
  - Technical communication
  - Documentation and content creation
  - Kubernetes policy knowledge

- Mentor(s): 
  - Cortney Nickerson (@CortNick, cortney.nickerson@nirmata.com)
  - Mariam Fahmy (@MariamFahmy98, mariamfahmy66@gmail.com)

- Upstream Issue:  https://github.com/kyverno/kyverno/issues/14726
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5c1581e3-04c2-40ed-ab50-b888e02f973f


#### Test Enhancements -  Kyverno CLI Tests - envtest, fake client

CNCF - Kyverno: Test enhancements: Kyverno CLI tests with envtest/fake client (2026 Term 1)

- Description: The Kyverno CLI should be flexible enough to perform real variable substitutions when CEL libraries are used in policies, in addition to static substitutions. This enhancement would enable comprehensive policy testing without requiring a real Kubernetes cluster, significantly speeding up development and CI/CD pipelines.

- Recommended Skills: 
  - Golang
  - Kubebernetes
  - Cobra
  - fake client
  - envTest

- Mentor(s): Shuting Zhao (@realshuting, shuting@nirmata.com)

- Upstream Issue: 
  - https://github.com/kyverno/kyverno/issues/14629
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/206776e3-e3c2-4418-8536-2ce9642302eb


#### Test Enhancements -  Testing Framework / Toolset for integration tests

CNCF - Kyverno: Test enhancements: integration test framework/toolset (2026 Term 1)

- Description: Currently Kyverno uses Chainsaw as the primary testing tool, which executes end-to-end tests on a real cluster. While this provides a large test coverage, it takes a long time to be executed and is also used to test very basic/simple cases. This project is about creating a framework to allow and simplify the creation of integration tests on the code level, without spinning up an actual cluster. This allows easier and faster testing locally as well as in our CI pipelines.

- Recommended Skills: 
  - Go tests
  - CLI 
- Mentor(s): 
  - Frank Jogeleit (@fjogeleit, frank.jogeleit@nirmata.com)
  - Ammar Yasser (@aerosouund, ammar.yasser@nirmata.com)

- Upstream Issue: 
  - https://github.com/kyverno/kyverno/issues/14725
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/72445950-34e9-4e80-82ef-251882464336


### LitmusChaos

#### Add Prometheus Metrics to LitmusChaos Control Plane Service 

CNCF - LitmusChaos: Add Prometheus Metrics to Control Plane Service (2026 Term 1)

- Description: Expose service health, API observability and experiment execution data as prometheus metrics in the chaos manager/litmusportal server
- Expected Outcome: Public Grafana dashboard for LitmusChaos observability
- Recommended Skills: Golang, Kubernetes, Prometheus, Chaos Engineering
- Mentor(s):
  - Shubham Chaudhary (@ispeakc0de, shubham.chaudhary@harness.io)
  - Adarsh Kumar (@Adarshkumar14, adarsh.kumar@harness.io)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/5338
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9e3e1e1c-e04b-401e-8eba-edc5894fdf9f


### OpenCost

#### OpenCost UI Revamp

CNCF - OpenCost: OpenCost UI Revamp (2026 Term 1)

- Description: OpenCost has helped a lot of people save a lot of money on their infrastructure. We like to think that this has contributed to things like engineering headcounts not getting reduced, small businesses and startups surviving longer, and so on. The OpenCost UI is a key part of this - it lets people visualize their spend, find inefficiencies, and so on. It's time to uplevel the OpenCost UI to enable the next generation of savings!
- Expected Outcome: We would like all pages of the OpenCost app to be implemented in Carbon or similar modern design system. We would like dashboarding functionality and a unified color scheme. All implementations should be delivered with unit and end-to-end tests. All existing functionality of the UI should be present in the revamped design.
- Recommended Skills: React, UX Design, Frontend Development, APIs, Carbon Design System
- Mentors 
  - Alex Meijer (@ameijer, alexander.meijer@ibm.com)
  - Warwick Peatey (@peatey, warwick.peatey@ibm.com)
- Upstream Issue: https://github.com/opencost/opencost-ui/issues/155
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ee1610ae-5850-4aa2-b3aa-edf39fded503


### OpenTelemetry

#### Tooling for detecting impact of behavioral changes in Go libraries

CNCF - OpenTelemetry: Tooling for detecting impact of behavioral changes in Go lib (2026 Term 1)

- Description:
  Maintenance of a stable Go library often involves value-judgement calls regarding what changes can impact downstream consumers. While some existing tooling like [apidiff](https://pkg.go.dev/golang.org/x/exp/apidiff) can go some way towards preventing breakage, these tools work purely in terms of API-level breakage such as changing the type of a symbol. Inspired by [tooling in other language ecosystems such as Rust](https://github.com/rust-lang/crater) this proposal sets out to build a tool that can give statistical information about the impact of any change on downstream consumers by running the build pipelines and test suites of dependents before and after a particular change. This would empower maintainers to make better informed choices about changes and foster an ecosystem. We think this is specially important for the OpenTelemetry project since the OpenTelemetry Go modules and the OpenTelemetry Collector modules are foundational modules used within the CNCF on other projects (e.g Kubernetes, Jaeger) as well as outside of it. The intent is to build a tool that could be used as well by other CNCF projects since Go is the *lingua franca* of the foundation, enabling all projects to have a flourishing ecosystem.
- Expected Outcome:
  We would like to have a tool written in Go that is able to (i) gather all publicly-listed dependencies of a module, (ii) safely run the test suite of dependencies for a given version of the code and (iii) compare two test suites and provide a statistical summary of the differences between the two to help in decision-making.
- Recommended Skills: 
   - Working Golang skills including testing and building Go code
   - Working knowledge of CI/CD systems
   - Containerization and securely running untrusted code
- Mentor(s):
  - Pablo Baeyens (@mx-psi, pbaeyens31+github@gmail.com)
  - Damien Mathieu (@dmathieu, damien.mathieu@elastic.co)
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-go-build-tools/issues/1528
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5f537fc2-548b-487a-99ed-c61f7e8bcd47


### OpenYurt

#### Implement Label-Driven Automated Installation and Uninstallation of YurtHub on Edge Nodes

CNCF - OpenYurt: Label-driven install/uninstall of YurtHub on edge nodes (2026 Term 1)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d92d9590-63ea-4551-93b7-047f32ae2b17


### PipeCD

#### Amazon ECS plugin for Pipedv1

CNCF - PipeCD: Amazon ECS plugin for Pipedv1 (2026 Term 1)

- Description: PipeCD v1 - the new version based on a plugin architecture (ref: [PipeCD plugin-arch overview blog](https://pipecd.dev/blog/2024/11/28/overview-of-the-plan-for-pluginnable-pipecd/)), has released an alpha version, and we are rapidly adding features supported in v0. We need to develop a plugin for PipeCD v1 to support [Amazon ECS](https://aws.amazon.com/ecs) deployment.
- Expected Outcome:
  - ECS plugin for PipeCD
  - Possible update plugin SDK while develop the plugin
  - Possible update docs how to develop PipeCD plugin
  - Blog about how to develop a PipeCD plugin on [https://pipecd.dev/blog/](https://pipecd.dev/blog/)
- Recommended Skills:
  - Golang
  - Amazon ECS
  - GitOps
  - Continuous Delivery (CD)
- Mentor(s):
  - Khanh Tran (@khanhtc1202, khanhtc1202@gmail.com)
  - Shinnosuke Sawada-Dazai (@Warashi, shin@warashi.dev)
- Upstream Issue:
  - https://github.com/pipe-cd/pipecd/issues/6443
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2d9f66f5-4c10-435c-98f9-160e7caa0989


#### Community Building and Social Media Growth for PipeCD

CNCF - PipeCD: Community building and social media growth (2026 Term 1)

- Description: The release of PipeCD v1 introduced a plugin-based architecture that enables deployments on any platform. This is a significant evolution in the project's capabilities, but community awareness and adoption haven't kept pace with the technical progress. This project focuses on growing PipeCD's community through consistent content creation across developer platforms, producing technical content around the v1 release, improving documentation for users and contributors, and engaging with the community through demos and discussions. The mentee will work closely with maintainers to translate PipeCD's technical strengths into accessible content that drives adoption and contributions.

- Expected Outcome: Established social media presence for PipeCD across key developer platforms, along with technical content covering v1 features, plugin development, and real-world deployment patterns. Demo content including video walkthroughs and livestreams that make the project easier to adopt. Improved contributor documentation and onboarding materials, with active community engagement through GitHub Discussions and other channels. At least one CNCF talk or meetup presentation delivered.
- Recommended Skills:
  - Technical writing and documentation
  - Experience with Git, CI/CD, GitOps, and deployment workflows
  - Content creation (written and video) and social media
  - Public speaking and community engagement
- Mentor(s):
    - Eeshaan Sawant (@EeshaanSA, eeshaans1@gmail.com)
    - Khanh Tran (@khanhtc1202, khanhtc1202@gmail.com)

- Upstream Issue: https://github.com/pipe-cd/pipecd/issues/6441
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/59990960-32be-4bb7-937f-4c749c02e715


#### Multi-cluster Kubernetes plugin for Pipedv1

CNCF - PipeCD: Multi-cluster Kubernetes plugin for Pipedv1 (2026 Term 1)

- Description: PipeCD v1 - the new version based on a plugin architecture (ref: [PipeCD plugin-arch overview blog](https://pipecd.dev/blog/2024/11/28/overview-of-the-plan-for-pluginnable-pipecd/)), has released an alpha version, and we are rapidly adding features supported in v0. With a better architecture, support for multi-cluster Kubernetes deployments is a natural extension. This project will focus on developing the Piped v1 plugin to support multi-cluster Kubernetes deployments.

- Expected Outcome:
  - Multi-cluster Kubernetes plugin for PipeCD
  - Possible update plugin SDK while develop the plugin
  - Possible update docs how to develop PipeCD plugin
  - Blog about how to develop a PipeCD plugin on [https://pipecd.dev/blog/](https://pipecd.dev/blog/)
- Recommended Skills:
  - Golang
  - Kubernetes
  - GitOps
  - Continuous Delivery (CD)
- Mentor(s):
  - Khanh Tran (@khanhtc1202, khanhtc1202@gmail.com)
  - Shinnosuke Sawada-Dazai (@Warashi, shin@warashi.dev)
- Upstream Issue:
  - https://github.com/pipe-cd/pipecd/issues/6446
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d1c5f444-3679-4102-b0a8-dd66e225dc65


### Prometheus

#### Improving Documentation for Prometheus and OpenTelemetry Interoperability

CNCF - Prometheus: Improve docs for Prometheus & OpenTelemetry interoperability (2026 Term 1)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b703834b-9250-4413-b056-76a8ad885ea2
### urunc

#### Create a dashboard and a notification system for CI testing in `urunc`

CNCF - urunc: Dashboard and notification system for CI testing (2026 Term 1)

- Description:

GitHub Actions provides detailed views of CI workflows at the repository level,
but it can be difficult for maintainers to quickly track the overall status of
recurring workflows, such as nightly tests, over time. Important
information, like historical failures or trends, often requires manual
inspection of individual workflow runs.

This work aims to improve CI observability for `urunc` by creating a
centralized dashboard that presents an aggregated view of its nightly (and
other CI) test workflows. The dashboard will provide maintainers with a clear
overview of recent runs, success and failure states, and relevant metadata in a
single place.

In addition to visualization, this work includes the design and implementation of a
notification mechanism that alerts maintainers when tests fail. This
will help ensure that regressions are noticed quickly and addressed in a timely
manner, improving overall project reliability.

- Expected Outcome:
  - Design and implementation of a dashboard summarizing nightly (and CI) test results.
  - Clear visualization of workflow status and execution history.
  - Implementation of a notification system for nightly test failures.
  - Documentation describing the dashboard, notification setup, and maintenance.

- Recommended Skills:
  - Basic understanding of CI/CD, GitHub Actions and GitHub API.
  - Experience with a suitable programming language (e.g., Go, Python, JavaScript)

- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Panagiotis Mavrikos (@panosmaurikos, pmavrikos@nubificus.co.uk)

- Upstream Issue: https://github.com/urunc-dev/urunc/issues/106
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/6d6e52c9-d4a0-4d0d-a3d8-f289935d9906


#### Investigate missing custom OCI Annotations in urunc containers

CNCF - urunc: Investigate missing custom OCI annotations in urunc containers (2026 Term 1)

- Description:

In order to pass sandbox-specific configuration, such as the guest type,
monitor type, rootfs information and others, `urunc` relies on a set of [custom
OCI annotations](https://urunc.io/package/#annotations). However, these
annotations are missing from the container's configuration in
non-Kubernetes-deployments. To work around this issue, a `urunc.json` file
containing the same information is currently injected into the container’s
root filesystem. This works aims to investigate the OCI image build and runtime
flow to understand where and why these custom annotations are dropped or
ignored in non-Kubernetes setups.

- Expected Outcome:
  - A clear summary of the investigation, including where and why the custom
    annotations are lost.
  - A proposed solution enabling `urunc` to correctly consume its custom OCI
    annotations.
  - Alternatively, the design and implementation of a cleaner mechanism than
    injecting a file into the container’s root filesystem.

- Recommended Skills:
  - Go
  - Familiarity with container tools (docker, nerdctl, skopeo etc.)
  - Familiarity with container runtimes (containerd, runc, urunc)
  - familiarity with the OCI specification
- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Anastassios Nanos (@ananos, ananos@nubificus.co.uk)
- Upstream Issue: https://github.com/urunc-dev/urunc/issues/12
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f1fb6914-eab7-481b-85ce-78f095ad4989


#### Optimizing Rootfs Handling with block-based snapshotters in `urunc`

CNCF - urunc: Optimize rootfs handling with block-based snapshotters (2026 Term 1)

- Description:

When `urunc` is used together with a block-based snapshotter, it can take
advantage of block-device backed container root filesystem and pass it
directly to the sandbox as a disk image. This approach avoids filesystem
conversion and enables efficient access to the container root filesystem.

However, in order to spawn the sandbox, urunc requires access to the guest
kernel and the initrd (if present). Since these files are part of the
container rootfs, `urunc` must first extract and store them elsewhere before
attaching the block-based root filesystem to the sandbox. As a result, this
process introduces unnecessary file copies and additional I/O overhead.

A more efficient approach is to leverage read-only (view) snapshots. Instead of
copying files, `urunc` could request a read-only snapshot of the container root
filesystem and mount it separately. The kernel binary and other required
artifacts could then be read directly from this snapshot without modifying or
duplicating data. Since view snapshots simply redirect read requests to the
underlying snapshot layers, this approach is expected to introduce little to no
additional storage overhead while simplifying the runtime flow.

- Expected Outcome:
  - A document explaining block-based snapshots in containerd, along with the
    respective APIs to snapshot creation and management.
  - An implementation in `urunc` that requests and mounts a read-only snapshot
    of the container root filesystem.
  - Evaluation of performance, storage overhead, and limitations of the
    snapshot-based approach.

- Recommended Skills:
  - Go
  - Familiarity with containerd
  - Familiarity with Linux filesystems and block devices
- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Anastassios Nanos (@ananos, ananos@nubificus.co.uk)
- Upstream Issue: https://github.com/urunc-dev/urunc/issues/43
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/59a4a90b-fc38-4aae-a712-b622eab55d61

