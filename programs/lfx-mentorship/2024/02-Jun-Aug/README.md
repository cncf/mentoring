# Term 02 - 2024 June - August

Status: Complete

Mentorship duration - three months (11 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |
| project proposals | Monday April 8 - Wed May 8, 2024, 5:00 PM PDT |
| mentee applications open | Monday May 13 - Tues May 28, 5:00 PM PDT |
| application review/admission decisions | Wed May 29 - Tues June 11, 5:00 PM PDT |
| selection notifications | Wed June 12, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | Monday June 17 (Week 1) |
| Midterm mentee evaluations and first stipend payments | Wednesday July 24 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed Aug 28, 5:00 PM PST (Week 12) |
| Last day of term | Friday Aug 30 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2024/02-Jun-Aug/project_ideas.md, by April 24, 2024.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Accepted projects

- [Cilium](#cilium)
  - [Cilium Technical Outcomes](#cilium-technical-outcomes)
- [Copacetic](#copacetic)
  - [Add new scenarios to Copa's existing image patching features](#add-new-scenarios-to-copas-existing-image-patching-features)
- [Crossplane](#crossplane)
  - [Make Crossplane Easy - Improving the Developer Experience](#make-crossplane-easy---improving-the-developer-experience)
- [Harbor](#harbor)
  - [Harbor CLI](#harbor-cli)
  - [Harbor Satellite](#harbor-satellite)
- [in-toto](#in-toto)
  - [Add GUAC support](#add-guac-support)
  - [Documentation Boost!](#documentation-boost)
  - [Sigstore support for in-toto-jenkins](#sigstore-support-for-in-toto-jenkins)
- [Jaeger](#jaeger)
  - [Jaeger-V2 Observability and Healthchecks](#jaeger-v2-observability-and-healthchecks)
  - [Jaeger-V2 Service Performance Monitoring](#jaeger-v2-service-performance-monitoring)
  - [Jaeger-V2 Kafka-based architecture](#jaeger-v2-kafka-based-architecture)
- [Karmada](#karmada)
  - [Certificate Lifecycle Management](#certificate-lifecycle-management)
- [KCL](#kcl)
  - [KCL Package Management Dependencies Sparse Checkout](#kcl-package-management-dependencies-sparse-checkout)
  - [Optimization of KCL LSP prompt information](#optimization-of-kcl-lsp-prompt-information)
  - [Supports tree-sitter for KCL](#supports-tree-sitter-for-kcl)
- [Knative](#knative)
  - [Improve Knative Eventing Onboarding](#improve-knative-eventing-onboarding)
  - [Knative - applying pre-prepared website design](#knative---applying-pre-prepared-website-design)
- [KubeArmor](#kubearmor)
  - [Improve System Test Coverage and Pratices for KubeArmor](#improve-system-test-coverage-and-pratices-for-kubearmor)
- [KubeEdge](#kubeedge)
  - [Iterating Enhancement for KubeEdge Dashboard](#iterating-enhancement-for-kubeedge-dashboard)
  - [Router Manager Support HA](#router-manager-support-ha)
  - [KubeEdge test cases enhancement](#kubeedge-test-cases-enhancement)
  - [KubeEdge Documentation Improvement](#kubeedge-documentation-improvement)
- [Kubernetes](#kubernetes)
  - [Update Image Signing to Meet New Infra Requirements](#update-image-signing-to-meet-new-infra-requirements)
- [Kubescape](#kubescape)
  - [Advanced Kubescape plugin features for VSCode](#advanced-kubescape-plugin-features-for-vscode)
  - [Backstage plugin that adheres to the new plugin system](#backstage-plugin-that-adheres-to-the-new-plugin-system)
- [KWOK](#kwok)
  - [Enhancement of Test Cases](#enhancement-of-test-cases)
  - [Enhancement of Technical Outcomes](#enhancement-of-technical-outcomes)
- [LitmusChaos](#litmuschaos)
  - [Revamp Litmus Helm Agent, UBI migration of Images](#revamp-litmus-helm-agent-ubi-migration-of-images)
  - [Enhancements in Chaoscenter: GitOps Support for Azure Git, Group Chaos Infra by Environments in Infrastructure Selection Modal](#enhancements-in-chaoscenter-gitops-support-for-azure-git-group-chaos-infra-by-environments-in-infrastructure-selection-modal)
  - [Implementing Upgrade Agent Support in Litmus 3.x](#implementing-upgrade-agent-support-in-litmus-3x)
- [OpenKruise](#openkruise)
  - [Enhancement for Kruise-Game Dashboard](#enhancement-for-kruise-game-dashboard)
- [Prometheus](#prometheus)
  - [Prometheus Remote Write Benchmarking Capabilities](#prometheus-remote-write-benchmarking-capabilities)
  - [Mark Out-of-order ingestion as stable](#mark-out-of-order-ingestion-as-stable)
- [Thanos](#thanos)
  - [Compactor: Display TODO plan in UI](#compactor-display-todo-plan-in-ui)
- [TUF](#tuf)
  - [Documentation analysis and improvements](#documentation-analysis-and-improvements)
- [Vitess](#vitess)
  - [Improve the website of our automated-benchmarking tool (migrate to shadcn ui and typescript)](#improve-the-website-of-our-automated-benchmarking-tool-migrate-to-shadcn-ui-and-typescript)
  - [Community building and engagement](#community-building-and-engagement)
- [WasmEdge](#wasmedge)
  - [Support piper as a new backend of the WASI-NN WasmEdge plugin](#support-piper-as-a-new-backend-of-the-wasi-nn-wasmedge-plugin)
  - [Enabling LLM fine tuning in the WASI-NN ggml plugin](#enabling-llm-fine-tuning-in-the-wasi-nn-ggml-plugin)
  - [Create a search-enabled API server for local LLMs](#create-a-search-enabled-api-server-for-local-llms)
  - [Finetune LLM models for Rust coding assistance](#finetune-llm-models-for-rust-coding-assistance)

### Cilium

#### Cilium Technical Outcomes

- Description: On the Cilium [homepage](https://cilium.io), we want to document technical outcomes from using Cilium. Think of these technical outcomes as aggregating some of cilium features to achieve a high level technical goal. These are the current ones we have in mind: Zero Trust Networking, Network Automation, Distributed Firewalling, Cost and Carbon Savings, Multi-cloud Connectivity.
- Expected Outcome: A section of the Cilium website detailing these technical outcomes. This section on the website can include any supporting materials from the Cilium community i.e blogs, videos, talks, illustrations, etc.
- Recommended Skills: Technical Writing, some basic working knowlegde of Cilium or the willingness to quickly ramp up, Kubernetes, general familiarity with the cloud native ecosystem, basic React.js(the cilium webiste is built with Gatsby).
- Mentor(s):
    - Paul Arah(paularah, <paul.arah@isovalent.com>)
    - Bill Mulligan(xmulligan, <bill.mulligan@isovalent.com>)
- Upstream Issue: <https://github.com/cilium/cilium.io/issues/492>
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9ab5c6dc-4735-4dfb-99c0-d00e86aeae60


### CNCF TAG Network

#### Mapping CNCF Landscape one Relationship-at-a-time

- Description: While the OpenAPI specifications for Kubernetes offer a taxonomy, integrating a graph data model with formalized ontologies unlocks a multitude of capabilities. Among these, enabling inferencing necessary for natural language processing stands out as a straightforward application. This, in turn, facilitates the possibility of a human-centric query/response interaction. Importantly, advancing to a knowledge semantic graph from a connected systems' graph data model opens the door to building more sophisticated systems.

- Expected Outcome:
  - Identifying new technologies from CNCF landscape and creating new YAML-formatted definitions of one or more relationships.
  - Documentation of each relationship - per component.
  - Development of new types of genealogies - new types of ways in which resources relate to one another and how these relationships might be visualized.

- Recommended Skills: Familiarity with Helm charts and Artifact Hub, basic familiarity with Kubernetes, and familiarity with CNCF different projects would be helpful
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Uzair Shaikh (@muzairs15, muzair.shaikh810@gmail.com)
- Upstream Issue: https://github.com/cncf/tag-network/issues/39
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bec63054-bc32-4444-b6c5-2b427f527e16

#### Technical Content Creation CNCF Challenges

- Description: On a periodic basis, the CNCF would like to present a public challenge to those that are interested in participating (e.g. “Challenge: Distributed Tracing with Jaeger”).

Your mission in this internship is technical content creation of said challenges through use of markdown, Meshery, and any number of other CNCF projects. Challenges will be created using the Meshery Playground and potentially published in the proposed CNCF Hub. They will be similar too, but slightly different from these [example tutorials](https://docs.meshery.io/guides/tutorials/).

Understand that your challenges will be promoted through CNCF channels, reviewed by various project maintainers, and that each challenger (participant) will receive a certain number of points, depending upon whether or not they successfully complete the challenges that you create and in what timeframe they complete those challenges (the faster, the more points). Your challenges will need to vary in level of difficulty.

- Expected Outcome:
  - 10+ new challenges published in CNCF Hub (and Meshery Catalog and Artifact Hub).
  - Challenges can contain more than one objective. Points are earned for each objective completed.
  - Bonus: Extend one or more of Meshery’s Learning Paths.

- Recommended Skills: written English, Kubernetes, DevOps, and familiarity with any number of other CNCF projects, like Prometheus, CoreDNS, Istio, Jaeger, Helm, Harbor, OPA, Rook, SPIFEE, Flux, Argo, Flux, Falco, etc., Jekyll, strong organizational skills
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Nic Jackson (@nicholasjackson), jackson.nic@gmail.com)
- Upstream Issue: https://github.com/cncf/tag-network/issues/40
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1a620529-f2be-4a6f-8b4d-0562731cb840


### Copacetic

#### Add new scenarios to Copa's existing image patching features
- Description: This project will focus on a series of initial TODOs that are present in the codebase and that have been recently added as issues in GitHub. The issues range from adding custom image repos, to handling custom configuration at the package and system level.
- Expected Outcome: Added features as suggested by current TODOs in code to enhance Copacetic user experience and features.
- Recommended Skills: Go, Linux Package Management tools, container images, distroless images, Trivy, knowledge of Copacetic codebase would be useful.
- Mentors(s):
    - Ashna Mehrotra (@ashnamehrotra, asmehrotra@microsoft.com)
    - Robert Kielty (@RobertKielty, robert.kielty@cncf.io)
- Upstream Issues: https://github.com/project-copacetic/copacetic/issues/611
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/955a5956-de58-44ea-8760-d606feb82165

### Crossplane

#### Make Crossplane Easy - Improving the Developer Experience

- Description: Crossplane is in use at scale in many production environments, but we get often get feedback that there are many obstacles to learn Crossplane and get to a successfully built production-ready control plane. A major reason for this learning curve is the lack of supporting tools and experiences on top of core Crossplane that could accelerate the community’s attempts to successfully build their platforms. These higher level experiences have recently become a focus for the project and we want to keep delivering awesome experiences that make Crossplane easier to use.
- Expected Outcome: We expect the mentee to design and code multiple improvements to the Crossplane tooling from the issue linked below. We will start with smaller scoped issues to ramp up and then focus on a bigger deliverable such as adding [validation for Crossplane Functions](https://github.com/crossplane/crossplane/issues/5094). By the end of the term, the mentee will have multiple code PRs merged into the Crossplane codebase.
- Recommended Skills: Go, Kubernetes, Crossplane, CLI tools, passion for DevEx
- Mentor(s):
    - Jared Watts (primary) (@jbw976, jbw976@gmail.com)
    - Ezgi Demirel (secondary) (@ezgidemirel, ezgi@upbound.io)
- Upstream Issue: https://github.com/crossplane/crossplane/issues/3957
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/87e81040-eb5e-4628-babd-820ef23cd261

### Harbor

#### Harbor CLI

- Description: Harbor is a popular and widely adopted container registry. We have developed an initial CLI (https://github.com/goharbor/harbor-cli) that we would like to extend and implement additional functionality, and common workflows that are currently only present in the Web UI. We are seeking a Golangs experienced manatee who can work on the project independently.
- Expected Outcome: Working Golang Harbor CLI which can be used in the CI/CD implementations that compliment the Web UI covering the typical workflows of Harbor administrators and users. Familiarity with Golang library spf13/cobra and REST/Open API. Well-documented CLI that users love to use, and with the corresponding architectural diagrams under the Harbor. Working CI/CD with GitHub actions that create multi architecture binaries and containers.
- Recommended Skills: Golang, spf13/cobra
- Mentor(s):
    - Vadim Bauer (@vad1mo, vb@container-registry.com)
    - Yan Wang (@wy65701436, yan-yw.wang@broadcom.com)
    - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/goharbor/harbor-cli/issues/41
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a8a71ad1-4a1b-422e-9928-01c153ac2daf

#### Harbor Satellite

- Description: In recent years, containers have extended beyond their traditional cloud environments, becoming increasingly prevalent in remote and edge computing contexts. These environments often lack reliable internet connectivity, posing significant challenges in managing and running containerized applications due to difficulties in fetching container images. To address this, the project aims to decentralize container registries, making them more accessible to edge devices. The need for a satellite that can operate independently, store images on disk, and run indefinitely with stored data is crucial for maintaining operations in areas with limited or no internet connectivity.
  Harbor Satellite aims to bring Harbor container registries to edge locations, ensuring consistent, available, and integrity-checked images for edge computing environments. This proposal outlines the development of a stateful, standalone satellite that can function as a primary registry for edge locations and as a fallback option if the central Harbor registry is unavailable.
- Expected Outcome:
  The goal is to extend the proof of concept
  and demonstrate that such a solution practically works.
  Candidates should be able understanding and implementing the [image](https://github.com/opencontainers/image-spec) and [distribution spec](https://github.com/opencontainers/distribution-spec)
  to replicate images from a central registry to a registry on the edge location.
- Recommended Skills: Golang, Container, Image-spec, Distribution-spec
- Mentor(s):
    - Vadim Bauer (@vad1mo, vb@container-registry.com)
    - Yan Wang (@wy65701436, yan-yw.wang@broadcom.com)
    - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/goharbor/harbor/issues/20404
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/93a94aec-8026-4587-b840-52c96ab25020

### in-toto

### Add GUAC support

- Description: The project aims to integrate Graph for Understanding Artifact Composition (GUAC) with in-toto, a framework safeguarding software supply chain integrity. [Graph for Understanding Artifact Composition (GUAC)](https://guac.sh/) aggregates software security metadata into a high fidelity graph database—normalizing entity identities and mapping standard relationships between them. This project seeks to extend in-toto's capabilities by incorporating GUAC, enabling users to query GUAC with Package URLs (purls) and retrieve pertinent attestations.
- Expected Outcome: Adds functionality to query GUAC, retrieve and parse relevant attestations for the specified artifact.
- Recommended Skills: Go, Python
- Mentor(s):
    - Santiago Torres-Arias (@SantiagoTorres, santiagotorres@purdue.edu)
    - Pradyumna Krishna (@PradyumnaKrishna, git@onpy.in)
- Upstream Issue: https://github.com/in-toto/attestation-verifier/issues/29
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/abfb7093-b057-40da-8be1-c67bd8839698

#### Documentation Boost!

- Description:
    - Help contributors get started with improving the documentation of CNCF projects and TAGs.  To start, we'd like mentees to help to
      improve both the documentation of a project, and also encourage them to contribute to other projects.  So, view the issues as a starting
      point to help start your career in open source.
- Expected Outcome:
    - Develop effective documentation for CNCF projects.  As a start, the CNCF project in-toto has a fairly clear set of requirements for what
      documentation changes are needed.
- Recommended Skills:
    - Technical writing
    - Basic understanding of cloud native projects (or a desire to learn!)
- Mentor(s):
    - Justin Cappos @JustinCappos jcappos@nyu.edu
    - Patrice Chalin @chalin chalin@cncf.io
    - Lukas Pühringer @lukpueh lukas.puehringer@nyu.edu
- Upstream Issues:
    -   https://github.com/in-toto/docs/issues/85
    -   https://github.com/in-toto/docs/issues/90
    -   https://github.com/in-toto/docs/issues/91
    -   https://github.com/in-toto/docs/issues/92
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/34314eb1-0fc3-4802-ab04-2265418c2e48

#### Sigstore support for in-toto-jenkins

- Description: The [in-toto Jenkins plugin](https://github.com/in-toto/in-toto-jenkins-plugin) allows users to generate metadata in their build pipelines. Currently keys or credentials must be provided to the plugin to sign the metadata, whereas Sigstore offers keyless signing and verification. The addition of Sigstore transport will allow seamless uploading of metadata to Rekor transparency log. This project aims to enhance the Jenkins plugin by adding [Sigstore](https://www.sigstore.dev) support, allowing keyless signing and adding Sigstore transport.
- Expected Outcome: in-toto-jenkins plugins gets support for Sigstore
- Recommended Skills: Java, Jenkins
- Mentor(s):
    - Santiago Torres-Arias (@SantiagoTorres, santiagotorres@purdue.edu)
    - Pradyumna Krishna (@PradyumnaKrishna, git@onpy.in)
- Upstream Issue: https://github.com/in-toto/in-toto-jenkins-plugin/issues/6
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/fd34fe37-e736-47bb-b0d5-54a2a0d9875a

### Jaeger

#### Jaeger-V2 Observability and Healthchecks

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. (1) Currently jaeger-v2 components are initialized without observability clients. We need to instantiate appropriate logging, tracing, and metrics clients and pass them to the components. The existing code uses internal metrics API, which needs to be bridged to OTEL metrics to minimize code changes. (2) Jaeger-v1 components can report their readiness using an internal health check API that is connected to the healthcheck endpoint on the admin port. We need to implement similar capability in Jaeger-v2.
- Expected Outcome: Achieve parity in observability of jaeger-v2 compared to jaeger-v1
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
    - Yuri Shkuro (@yurishkuro, github@ysh.us)
    - Jonah Kowall (@jkowall, jkowall@kowall.net)
    - Yash Sharma (yashrsharma44@meta.com)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5240
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bd752f55-9080-4826-af09-ad86d3614ab2

#### Jaeger-V2 Service Performance Monitoring

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Jaeger-v1 implements a functionality known as [SPM](https://www.jaegertracing.io/docs/latest/spm/), but it requires a separately running OpenTelemetry Collector to produce metrics out of spans using [SpanMetrics Connector](https://pkg.go.dev/github.com/open-telemetry/opentelemetry-collector-contrib/connector/spanmetricsconnector#section-readme). Since Jaeger-v2 is built on top of OTEL Collector, we can run SpanMetrics Connector directly in the Jaeger binary and simplify the setup for the users.
- Expected Outcome: Achieve parity in SPM of jaeger-v2 compared to jaeger-v1. Implement integration tests. Update documentation accordingly.
    - Extra credit: implement metrics reader directly on top of Elasticsearch/Opensearch and bypass the need for Prometheus.
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
    - Yuri Shkuro (@yurishkuro, github@ysh.us)
    - Jonah Kowall (@jkowall, jkowall@kowall.net)
    - Yash Sharma (yashrsharma44@meta.com)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5240
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/574c4759-09fa-468d-9cfd-4fbb0fb98c09

#### Jaeger-V2 Kafka-based architecture

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. The goal is to implement a deployment mode (supported in Jaeger-v1) that uses Kafka as an intermediate buffer for spans between collector and ingester. It should use the latest version of ibm/sarama driver ([related issue](https://github.com/jaegertracing/jaeger/issues/4591)) and support both original Jaeger formats as well as OpenTelemetry OTLP. It may be possible to utilize the Kafka exporter/receiver from OTEL contrib.
- Expected Outcome: Achieve parity for Kafka-based deployment jaeger-v2 compared to jaeger-v1, including internal observability. Implement integration tests. Update documentation accordingly.
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
    - Yuri Shkuro (@yurishkuro, github@ysh.us)
    - Jonah Kowall (@jkowall, jkowall@kowall.net)
    - Yash Sharma (yashrsharma44@meta.com)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5240
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/6c6181c6-030a-4053-af29-18f09e5e2c4f

### Karmada

#### Certificate Lifecycle Management

- Description: The Karmada Certificate Lifecycle Management project addresses user challenges in certificate management, focusing on mitigating service disruptions and security risks due to expirations. Key goals include implementing a feature for real-time monitoring of certificates with advance notification for upcoming expirations; creating a comprehensive manual for manual replacement with best practices and visuals; allowing configurable certificate validity during deployment via CLI, Helm charts, and Operator; and designing an automated certificate rotation system to streamline certificate maintenance and ensure continuous security across Karmada environments.
- Expected Outcome: Certificate Visibility Tool/Feature, Manual Certificate Replacement Guide, Updated Installation Tools with Customizable Certificate Validity, and Automated Certificate Rotation Solution Design or Integration
- Recommended Skills: Golang, Kubernetes Admin, certificate management, Helm.
- Mentor(s):
    - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
    - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/community/issues/69
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9120164b-feef-4a5a-bd2a-d9ac42bb8d4a

### KCL

#### KCL Package Management Dependencies Sparse Checkout

- Description: `kpm` is a package management tool for KCL. When the scale of KCL project becomes larger and larger, and the external packages that KCL project relies on become more and more, `kpm` will become slow due to the need to download a large number of third-party dependencies. `kpm` needs to support `Sparse-Checkout`, which means downloading specific dependencies as needed rather than all of them, to improve the performance of the kpm.
- Expected Outcome: When kpm requests dependencies, it can request specific content based on the actual use of the required dependencies, but not all of them.
- Recommended Skills: golang, rust
- Mentor(s):
    - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
    - Pengfei Xu (@Peefy, xpf6677@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/304
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/09391266-0de5-426b-9e11-ceb4c28202ef

#### Optimization of KCL LSP prompt information

- Description: Optimize KCL LSP(language server protocol) prompt information, including the implementation of type inlayhint and optimization of hover content rendering. Currently, KCL’s hover content is in plain text format and needs to be rendered into a more beautiful style.
- Expected Outcome: Added type inlayhint in KCL IDE and optimize hover content render.
- Recommended Skills: rust, LSP
- Mentor(s):
    - Pengfei Xu (@Peefy, xpf6677@gmail.com)
    - Zheng Zhang (@He1pa, he1pa404@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kcl/issues/1244
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/6d85e491-332b-4667-9b57-6ec052310494

#### Supports tree-sitter for KCL

- Description: Tree-sitter is a parser generator tool and an incremental parsing library. In order to support more features of the IDE, we need a more complete syntax tree, and for easy integration with the community, we intend to use tree-sitter to build a more complete parser system for KCL.

- Expected Outcome: Supports all of the current KCL syntax, which can pass all test cases.
- Recommended Skills: rust, LSP
- Mentor(s):
    - Zheng Zhang (@He1pa, he1pa404@gmail.com)
    - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue (URL): https://github.com/kcl-lang/tree-sitter-kcl/issues/2
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/47661e9d-d390-45d8-b05e-0fb3a30612f4

### Knative

#### Improve Knative Eventing Onboarding

- Description:
  Onboarding new end users into a sophisticated system like Knative Eventing presents significant challenges, especially as it involves understanding not only the operational components but also a distinct architectural style - event driven architecture (EDA). These issues are also seen in the current documentation which is often too technical and not geared towards practical guidance.  This project seeks to perform a thorough investigation into the barriers that prevent smooth user onboarding and sustained engagement. By identifying these obstacles and developing clearer, more actionable onboarding materials, we aim to enhance the ease of entry and ongoing use of Knative Eventing for all users.

- Expected Outcome:
1. Produce a detailed report based on user research that outlines the current onboarding experience for new users of Knative Eventing. This report will highlight key barriers and challenges in the documentation and setup process, and recommend actionable improvements to make the onboarding process more user-friendly and less technically daunting.

2. Implement the proposed changes within the Knative community by developing comprehensive onboarding materials and enhancing existing documentation to better support new users.

- Recommended Skills: User Research, Communication, Technical Writing, Content Design

- Mentor(s):
    - Leo Li (@Leo6Leo,leoli@redhat.com)
    - Mariana Mejia (@mmejia02, mariana.mejia@ocadu.ca )

- Upstream Issue:
  https://github.com/knative/ux/issues/130
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1da7e3d2-b170-4236-a2c6-0fa4b0e792e3

#### Knative - applying pre-prepared website design

- Description: Current design of the Knative website (https://knative.dev) does not look modern and contains inconsistent style. Knative UX working group has prepared a new design for the website. We would like to get this design implemented on the website. We also want to ensure with this implementation that the figures in the website include alt text descriptions. We are not looking for full WCAG compliance though.Also, currently the website is not really responsive and doesn’t look good on a mobile device. The group also has a design for the mobile. Finally we have many diagrams on the website that have different styles. We would like to have these diagrams more cohesive. This part is an extended goal though.

- Expected Outcome: New design applied to website; website is made responsive; diagrams look and feel more cohesive.

- Recommended Skills: HTML, CSS, Markdown, SVG, Material for Mkdocs, Figma

- Mentor(s):
    - Ali Ok (@aliok, aliok@redhat.com)
    - Calum Murray (@cali0707, cmurray@redhat.com)
    - Zainab Husain (@zainabhusain227, zainabhusain227@gmail.com)

- Upstream Issue: https://github.com/knative/ux/issues/137
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e18d5c08-312d-4fc1-884c-47c676c12c87

### KubeArmor

#### Improve System Test Coverage and Pratices for KubeArmor

- Description: KubeArmor supports securing many environments ranging from Kubernetes, unorchestrated containers, bare metal and virtual machines. Our testing matrix however doesn't cover many of these completely. In this project, we plan to improve this coverage by introducing automated testing of some of these environments and imrove the scenarios covered in some existing ones. These tests would be written using the Ginkgo framework and automated via GitHub workflows. The matrix we'll target can be found in the upstream issue.
- Expected Outcome: Improved test coverage; Standards for writing tests for KubeArmor; Stabilization of KubeArmor
- Recommended Skills: Go, Scripting, Kubernetes, CI/CD (GitHub Actions)
- Mentor(s):
    - Barun Acharya (@daemon1024, barun1024@gmail.com)
    - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
    - Anurag Kumar (@kranurag7, kranurag7@linux.com)
    - Prashant Mishra (@primalpimmy, prashant20.pm@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1749
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a6a22ae5-856d-472f-9a11-17a2375b86ba

### KubeEdge

#### Iterating Enhancement for KubeEdge Dashboard

- Description: Based on the previous release of KubeEdge, a version of the dashboard has been implemented. With the iterative updates of the backend API, the current dashboard may have several issues. In this project, we aim to iterate and update the dashboard to ensure its compatibility with the latest version of KubeEdge. Additionally, we want to refactor the dashboard using more mainstream frameworks such as Material and optimize the user experience of the dashboard.
- Expected Outcome: new release Dashboard which supports new KubeEgde APIs.
- Recommended Skills: KubeEdge, Front-end, nodejs
- Mentor(s):
    - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
    - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/dashboard/issues/22
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/174db042-047a-4036-a523-1598fa386325

#### Router Manager Support HA

- Description: Users need to communicate between the cloud and the edge. For example, the cloud calls the rest interface of the edge service. In this case, the routing management function of KubeEdge can be used. Currently, routing management function of KubeEdge has some problems in the case of multiple CloudCore copies. The main problem is that when there are multiple copies of CloudCore, whether the cloud sends messages to the edge or reports the message to the cloud, it is not known which CloudCore is sent to it for processing, and there is confusion in message management in the cloud. In this project, we hope router manager can be optimized to support multi-CloudCore scenario.
- Expected Outcome: Support using router manager in multi-CloudCore scenario.
- Recommended Skills: Golang, KubeEdge
- Mentor(s):
    - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
    - jiawei (@JiaweiGithub, jiawei.liu@daocloud.io)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5561
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0cf43d24-c7f3-4792-81c9-bff4aa01a96e

#### KubeEdge test cases enhancement

- Description: Testing is an important task to ensure project stability, security, and other aspects. Since KubeEdge is built on top of native Kubernetes, in this project, we aim to integrate Kubernetes end-to-end (E2E) test cases into KubeEdge's CI. This integration will help ensure the native compatibility and usability of KubeEdge. Additionally, we also aim to improve the unit tests and increase the coverage of integration tests for KubeEdge.
- Expected Outcome: Improve KubeEdge test coverage scenarios
- Recommended Skills: Golang, KubeEdge
- Mentor(s):
    - Fisher Xu (@fisherxu, fisherxu1@gmail.com)
    - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5562
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ea773daf-d755-46ec-a80c-1eb5f8bbaf16

#### KubeEdge Documentation Improvement

- Description: Recently, we have updated the directory and structure of the community's official website documentation. We have listed some documentation improvement tasks. In this project, we would like you to have a thorough understanding of KubeEdge and complete these documentation optimization tasks to help users or developers gain a better understanding of and utilize KubeEdge effectively.
- Expected Outcome: Document optimization of setup, usage guide, and developer guide, adding more FAQs, etc.
- Recommended Skills: Kubernetes, KubeEdge, docs
- Mentor(s):
    - zhiying (@zhiyingfang2022, zhiying.fang@daocloud.io)
    - wbc6080 (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/website/issues/433
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0add127b-8504-4940-97ac-ad989f58e109

### Kubernetes

#### Update Image Signing to Meet New Infra Requirements

- Description: The process that signs with Sigstore all container images released on community
  infra was designed for a different serving architecture. When the community
  moved to [registry.k8s.io](https://kubernetes.io/blog/2022/11/28/registry-k8s-io-faster-cheaper-ga/)
  and increased 10x the number of registries, the replication of signatures broke
  due to rate limits imposed on the new registries. As part of the project, you will
  be instrumental in implementing the new signing process currently being designed
  by the Kubernetes Release Engineering team. This project will involve heavy rewrites and
  refactoring of parts of the [Image Promoter](https://github.com/kubernetes-sigs/promo-tools),
  the tool that releases community images.
- Expected Outcome: Implementation of the new signing process, ideally we'll fix
  all inconsistent signatures across community registries.
- Recommended Skills: Go programming, strong container architecture and registry
  fundamentals, familiarity with [sigstore](https://www.sigstore.dev/),
  [go-containerregistry](https://github.com/google/go-containerregistry) and infrastructure (GCP & AWS).
- Mentor(s):
    - Adolfo García Veytia (@puerco, puerco@stacklok.com)
    - Jeremy Rickard (@jeremyrickard jrickard@microsoft.com)
    - Marko Mudrinić (@xmudrii, mudrinic.mare@gmail.com)
    - Meha Bhalodiya (@mehabhalodiya, mehabhalodiya@gmail.com)
- Upstream Issues:
    - https://github.com/kubernetes/registry.k8s.io/issues/187
    - https://github.com/kubernetes/release/issues/2962
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b17b4e21-0c42-4418-91a0-2db3579ffb52

### Kubescape


#### Advanced Kubescape plugin features for VSCode


- Description: Kubescape has a VSCode plugin to facilitate applying configuration fixes that harden Kubernetes infrastrcutture without creating a burden of context switching on engineers tasked with security scanning and implementing their results.
- Expected Outcome: Inetgrating container image scanning capabilities in the Kubescape VSCode plugin and implementing
  Kubescape's ability to apply fixes for configuration issues to YAML files or Helm charts directly within their development environment.

- Recommended Skills: Javascript, some familiarity with the inner workings of the VSCode plugin system.
- Mentor(s):
    - Ben Hirschberg (@slashben, ben@armosec.io)
    - David Wertenteil (@dwertent, dwertent@armosec.io)
- Upstream Issue: [kubescape/Kubescape#1666](https://github.com/kubescape/kubescape/issues/1666)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b846284b-76e6-45f1-85da-cd36b9bb489e


#### Backstage plugin that adheres to the new plugin system


- Description: Backstage has become a popular option for an internal portal that provides information for engineers in different capacities. Creating a backstage plugin for Kubescape will ultimately help users achieve their goal of hardening Kubernetes clusters, by being able to view security posture information on Backstage and without context switching.
- Expected Outcome: A Kubescape plugin for Backstage in which users will be able to get information about their security posture and highest risk workloads at a glance within the orgnizational portal.

- Recommended Skills: Typescript, React, some familiarity with new Backstage plugin system.
- Mentor(s):
    - Rotem Refael (@rotemamsa, rotem@armosec.io)
    - Matthias Bertschy (@matthyx, matthiasb@armosec.io)
- Upstream Issue: [kubescape/Kubescape#1667](https://github.com/kubescape/kubescape/issues/1667)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1e20bf55-4bcf-40ef-afee-d2b73948cd79


### Kubespray

#### Kubernetes SIG Project Kubespray: bug fixes & enhance helm support for add-ons

- Description: Kubespray is a sig project of Kubernetes. It helps deploy a production-ready Kubernetes cluster with Ansible. The project wants maintainers to help fix bugs and enhance the new features, as shown in the following link: https://github.com/kubernetes-sigs/kubespray/issues/5432. The project will start by tackling some 'help wanted' issues related to bug fixes and documentation. This initial involvement will help the mentee understand the Kubespray implementation and pave the way for potential maintainership.
- Expected Outcome: Bug fix and enhancement of the helm support for add-ons.
- Recommended Skills: Ansible, Kubernetes
- Mentor(s):
    - Kay Yan (yankay, <kay.yan@daocloud.io>)
    - Mohamed Zaian (mzaian, <mohamedzaian@gmail.com> )
- Upstream Issue: https://github.com/kubernetes-sigs/kubespray/issues/5432
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/22b0ef86-d390-4ea2-b302-79e819dcbdfc


### KWOK

#### Enhancement of Test Cases

- Description: KWOK (Kubernetes WithOut Kubelet) is a toolkit that enables setting up a cluster of thousands of Nodes in seconds. KWOK is currently being used by a number of projects for testing and performance. It is crucial that KWOK itself behaves consistently. The following tests are currently being considered: Unit Test, E2E Test, Edge Cases.
- Expected Outcome: Improved test coverage for KWOK.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
    - Shiming Zhang (wzshiming, <wzshiming@hotmail.com>)
    - Zhenghao Zhu (Zhuzhenghao, <zhenghao.zhu@daocloud.io>)
- Upstream Issue: https://github.com/kubernetes-sigs/kwok/issues/1062
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1969ce6c-5468-4842-89a2-06c020bd2ad1

#### Enhancement of Technical Outcomes

- Description: KWOK (Kubernetes WithOut Kubelet) is a toolkit that enables setting up a cluster of thousands of Nodes in seconds. On the KWOK homepage (https://kwok.sigs.k8s.io/), we aim to document the technical outcomes of using KWOK. These outcomes represent the aggregation of some of KWOK's features to achieve a high-level technical goal. Currently, we have the following areas of focus: Chaos Testing, Performance, Simulation, and Scalability.
- Expected Outcome: A section of the KWOK website detailing these technical outcomes.
- Recommended Skills: Kubernetes, Technical Writing
- Mentor(s):
    - Shiming Zhang (wzshiming, <wzshiming@hotmail.com>)
    - Zhenghao Zhu (Zhuzhenghao, <zhenghao.zhu@daocloud.io>)
- Upstream Issue: https://github.com/kubernetes-sigs/kwok/issues/1063
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ef8e7637-2eb6-4672-8f6c-c9f9f0677da0

### LitmusChaos

#### Revamp Litmus Helm Agent, UBI migration of Images

- Description: The Litmus Helm Agent, one of the microservice in Litmus, requires modernization for compatibility with Litmus 3.x API changes. Simultaneously, migrating Litmus Chaos container images to Red Hat's Universal Base Image (UBI) enhances security and compatibility. This project aims to revitalize the Helm Agent and streamline image management, ensuring seamless integration and robust deployment in containerized environments.
- Expected Outcome:
    - Seamless Integration: The Litmus Helm Agent will seamlessly support Litmus 3.x API changes, ensuring compatibility and uninterrupted functionality within the ecosystem.
    - Enhanced Security: Migrating Litmus Chaos container images to Red Hat's Universal Base Image (UBI) will bolster security and compatibility, optimizing deployment in diverse containerized environments.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
    - Sayan Mondal (@S-ayanide, sayan.mondal@harness.io)
    - Vedant Shrotria (@Jonsy13, vedant.shrotria@harness.io)
    - Raj Babu Das (@imrajdas, mail.rajdas@gmail.com)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/4634
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/98777e02-dc5b-4380-b6cb-c57603b56e37

### Enhancements in Chaoscenter: GitOps Support for Azure Git, Group Chaos Infra by Environments in Infrastructure Selection Modal

- Description: In this project, we aim to implement GitOps support specifically for Azure Git within Chaoscenter. Additionally, we will enhance the Infrastructure Selection Modal by introducing the capability to group chaos infrastructure based on environments, ensuring better organization and management.
- Expected Outcome:
    - Seamless integration with Azure Git for GitOps workflows.
    - Introduction of environment-based grouping in the Infrastructure Selection Modal.
    - Improved chaos infrastructure management and user experience in Chaoscenter.
- Recommended Skills: Golang, Kubernetes, ReactJS
- Mentors(s):
    - Shubham Chaudhary (@ispeakc0de, shubham.chaudhary@harness.io)
    - Amit Das (@amityt, amit.das@harness.io)
    - Sahil Kumar (@SahilKr24, sahil.kumar@harness.io)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/4633
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e9bf62a9-a7f6-41bb-be7a-e16b7a35a58a

### Implementing Upgrade Agent Support in Litmus 3.x

- Description: Integrating an upgrade agent into Litmus 3.x streamlines Chaoscenter upgrades, eliminating the need for fresh installations. This feature ensures seamless transitions between versions, especially useful when facing significant changes.
- Expected Outcome:
    - Seamless Upgrades: Integration of the Upgrade Agent ensures smooth transitions during Chaoscenter upgrades, removing the necessity for fresh installations.
    - Simplified Process: Users can upgrade from one version to another without the hassle of reinstallation, saving time and effort.
- Recommended Skills: Golang, Kubernetes
- Mentors(s):
    - Saranya Jena (@Saranya-jena, saranya.jena@harness.io)
    - Sarthak Jain (@SarthakJain26, sarthak.jain@harness.io)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/4632
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9ac6f8b4-4f76-41d0-b02b-89c79534e619


### Meshery

#### Meshery: Meshery: Project tutorials, design patterns, & publish reference architectures

- Description: Meshery the CNCF’s 10th fastest growing project. As a cloud native manager, Meshery [integrates with 250+ projects](https://meshery.io/integrations) and technologies. For each CNCF project integrated with Meshery, tutorials, sample designs, and deployment patterns with reference architectures need to be created. For the earnest, DevOps-minded intern, this internship represents a vast opportunity to learn, document, and publish tutorials and best practices not only around Meshery, but for any number of the other CNCF projects, too. You will use the [Meshery Playground](https://play.meshery.io)

- Expected Outcome:
  - 25+ new design patterns published in Meshery Catalog and Artifact Hub.
  - 5 new Meshery tutorials published in Meshery Docs.
  - Bonus: Extend one or more of Meshery’s Learning Paths.

- Recommended Skills: written English, Kubernetes, DevOps, and familiarity with any number of other CNCF projects, like Jaeger, Helm, Harbor, Flux, Argo, Flux, Falco, etc., Jekyll, strong organizational skills
- Mentor(s): Yash Sharma (@Yahsharma1911, yashsharma2572@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/10888
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7ec5139b-fca8-43db-bafc-bdb2faa58047

#### Meshery: End-to-End Testing with Playwright

- Description: Meshery integrates with many other CNCF projects and technologies. Sustaining those integrations is only possible through automation. End-to-end testing with Playwright, GitHub Workflows, and self-documenting test reports is the means to the end of maintaining a healthy state of each of these [Meshery integrations](https://meshery.io/integrations).

- Expected Outcome:
  - Successful migration of E2E tests from Cypress to the Playwright test library within the Meshery project.
  - Implementation of robust and reliable test cases using Playwright to cover a wide range of Meshery's E2E scenarios.
  - Documentation detailing the migration process, and guidelines for future contributions to maintain test quality.
  - Integration of Playwright test suite into the Meshery CI/CD pipeline to ensure continuous testing and reliability of the platform.
- Recommended Skills: JavaScript, Playwright, GitHub Workflows, Jekyll, Markdown, familiarity with React or Nextjs would be helpful, CI/CD
  - Mentor Name: Aabid Sofi (@aabidsofi19, mailtoaabid01@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com),
- Upstream Issue: https://github.com/meshery/meshery/issues/10890
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/62f4866e-9461-490d-890d-9f221a3941b4

#### Meshery: Support versioning for Meshery designs

- Description: Meshery design is a common practice of both configuring and operating cloud native infrastructure functionality in a single, universal file. We are seeking to enhance Meshery's capabilities by supporting automatic versioning of Meshery designs based on user sessions. This functionality will enable users to track changes made to their designs by individuals, facilitating the ability to rollback changes at any time.

- Expected Outcome:
  - Update Meshery server and pattern engine to support Meshery design versioning.
  - Update UI to allow users to perform actions related to design versioning.
  - Document changes made in pattern engine and server.

- Recommended Skills: Golang, Kubernetes, Meshery, Familiarity with Helm charts and Artifact Hub, familiarity with React, Nextjs would be helpful
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Uzair Shaikh (@muzairs15, muzair.shaikh810@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/10889
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8e1ab317-9043-4f29-8b83-9b9ffa2b8b40


### OpenKruise

#### Enhancement for Kruise-Game Dashboard

- Description: The OpenKruiseGame Dashboard is presently in its basic form, and we aim to significantly expand its functionality going forward. We plan to introduce features such as the ability to filter game servers and perform batch updates on them.
- Expected Outcome: new release Dashboard which supports searching, querying, updating objects in batch.
- Recommended Skills: Kubernetes, nodejs, javascript
- Mentor(s):
    - Qiuyang Liu (@chrisliu1995, chrisliu1995@163.com)
    - Zhongwei Liu (@ringtail, zhongwei.lzw@alibaba-inc.com)
- Upstream Issue: https://github.com/openkruise/kruise-game/issues/139
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3967228d-75a7-4963-b092-f2e92fcd57c8

### Prometheus

#### Prometheus Remote Write Benchmarking Capabilities

- Description: Prometheus remote write allows users to send their metrics to other time series databases. Though the [Prombench tool](https://github.com/prometheus/test-infra/tree/master/prombench) has existed for a number of years, it has never been extended to support performance testing of Remote Write in a realistic production like environment. With the upcomming Remote Write 2.0 changes to both the underlying implementation as well as the wire format, the need for benchmarking of remote write beyond static Go bechmark tests has increased.
- Expected Outcome: Build additional (or extends existing) tooling, similar to Prombench’s [load-generator](https://github.com/prometheus/test-infra/tree/master/tools/load-generator) and [avalanche](https://github.com/prometheus-community/avalanche), to support scenarios under which remote write should be performance tested. For example; allowing gradual increases/decreases in # of active series, sudden spikes in active series, various amounts of latency in the server receiving the remote write data, etc. Time permitted, extend Prombench's test suite to include a set of Remote Write tests that can be run via a new command.
- Recommended Skills: Go, some familiarity with Prometheus or metrics, basic Docker knowledge
- Mentor(s):
    - Callum Styan (@cstyan, callumstyan@gmail.com),
    - Jesús Vázquez (@jesusvazquez, jesusvzpg@gmail.com)
    - Nico Pazos and Alex Greenbank from Grafana also available to help
- Upstream Issue: https://github.com/prometheus/prometheus/issues/13995
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0462446f-aeea-4a19-9bd6-f4241ee5e8f2

#### Mark Out-of-order ingestion as stable

- Description: Prometheus is known by not accepting out-of-order samples during ingestion, but recently (2 years ago) [support was added behind a feature-flag](https://github.com/prometheus/prometheus/pull/11075). Since then, many improvements have been made to out-of-order ingestion and it has become one of the requirements for OTLP ingestion in Prometheus. We want to deliver Prometheus 3.0 in a few months, and that requires marking out-or-order ingestion as a stable feature. In this project we will clean up several smaller issues around out-of-order ingestion, hopefully marking it as stable by the end of the mentorship.
- Recommended Skills: Go, familiarity with Prometheus TSDB.
- Mentor(s):
    - Bryan Boreham (@bboreham, bjboreham@gmail.com)
    - Jesus Vazquez (@jesusvazquez, jesusvzpg@gmail.com)
- Upstream Issue: https://github.com/prometheus/prometheus/issues/12631
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/454caa5a-6fd5-4e27-bde4-7649abf6d8ca


### Service Mesh Performance

#### Service Mesh Performance: Convergence of Network and Graph topologies

- Description: Opens the door to leveraging algorithms in the areas of Centrality, Community Detection, Pathfinding, Topological Link Prediction, etc. Bringing to bear advances made in Machine Learning / AI / recommendation systems, fraud detection could really help to derive meaning and comprehension for future tools. Another example is how ML + graph approaches are used to find and determine the optimal molecular structure of atoms such that desired physical properties are targeted. This approach could be applied to the problem of workload sizing and estimation for service mesh operators and would-be adopters.

- Expected outcome:
  - Use Neo4j's ability to create graph projections, which copy a subgraph to RAM so that algorithms can be efficiently run.
- Recommended Skills: Golang, familiarity with Service Mesh, grpc, docker, kubernetes
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Xin Huang (@gyohuangxin, xin1.huang@intel.com)
- Upstream Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/422
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c605139b-8736-477a-835a-c6b45112bee4


### Thanos

#### Compactor: Display TODO plan in UI

- Description: In the Thanos Compactor UI there is visibility of the global block list and loaded block list. But it would be useful to also have a list of planned and currently running compaction groups in order to see what exactly is in progress. This way it would be easier to diagnose what the Thanos Compactor is currently working on, and possibly what is delaying the progress of compactions. This is especially useful if you have large TSDB blocks in S3 buckets that take time to get compacted.
- Expected Outcome: We have an endpoint in Compactor that details compaction plan, and this is also visualized in a Compactor UI page.
- Recommended Skills: Go, React, some familiarity with Prometheus and Thanos
- Mentor(s):
    - Michael Hoffmann (@MichaHoffmann, mhoffm@posteo.de)
    - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/7285
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/05b3d261-f874-4b8c-bd7e-c4fa83c979b4

### TUF

#### Documentation analysis and improvements

- Description:
    - Open source projects need help with their documentation!  The TUF project is a good place to start.  We'd welcome help from others to help here
      and become contributors to other projects / TAGs later in the project period.  The mentee will (with minimal guidance from the CNCF team and TUF project) do a [CNCF analysis](https://github.com/cncf/techdocs/blob/main/docs/analysis/howto.md) for the TUF documentation
- Expected Outcome:
    - Both an improvement of project docs and the development of a new contributor.  A mentee will understand how to do technical writing for an open source project.
- Recommended Skills:
    - Technical writing
    - Basic understanding of security principles
- Mentor(s):
    - Justin Cappos @JustinCappos jcappos@nyu.edu
    - Patrice Chalin @chalin chalin@cncf.io
    - Lukas Pühringer @lukpueh lukas.puehringer@nyu.edu
- Upstream Issues:
    - https://github.com/cncf/techdocs/issues/162
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e35f28f9-f333-47a8-a76a-119567cf10ca

### Vitess

#### Improve the website of our automated-benchmarking tool (migrate to shadcn ui and typescript)

- Description:
    - Vitess uses arewefastyet to automatically benchmark its codebase and ensure no performance regression is introduced. This tool benchmarks Vitess every day, and is used to visualize the results of those benchmarks. It is an important tool in the development cycle of Vitess and is used by its maintainers and adopters.
    - [Arewefastyet' website](https://benchmark.vitess.io) has changed quite a lot over the last year, we want to continue improving it by finishing the migration to TypeScript and by using Shadcn components.
    - Moreover, we want to make the website responsive and have a proper Figma that serves as a reference for current and future contributors.
- Expected Outcome:
    - The mentee is expected to produce a Figma with the design of the website that will be co-authored with the mentor.
    - Re-vamp most of the pages using Shadcn and the design defined with the mentor at the start of the internship period.
    - Add type information for all/most components using TypeScript.
- Recommended Skills:
    - Be skilled in React/Vite/TypeScript.
    - Must know how to simply use Docker and docker-compose.
    - Experience with Figma is a big plus.
    - Experience with Rest APIs and Golang is a plus too.
- Mentor(s):
    - Florent Poinsard @frouioui florent@planetscale.com
    - Frances Thai @notfelineit frances@planetscale.com
- Upstream Issue (URL): https://github.com/vitessio/arewefastyet/issues/525
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cba8a6c6-4b09-4618-98f7-bf24391e8c9e

#### Community building and engagement

- Description:
    - [Vitess](https://vitess.io) is a CNCF project that has been around for a while. It has a strong community of users and contributors. We want to continue growing this community and make sure that everyone feels welcome and included.
- Expected Outcome:
    - The mentee is expected to evaluate contributor ladder schemes and rewards and produce a recommendation for the Vitess maintainers.
    - Once a decision is made, the mentee is expected to implement the decisions from the maintainer team.
    - The mentee is expected to collect data about Vitess usage from the community and publish the highlights as a blog post.
    - The mentee is expected to review the [Getting Started docs on the Vitess website](https://vitess.io/docs/20.0/get-started/) and enhance them to improve the onboarding experience.
    - The mentee is expected to research and recommend marketing opportunities for Vitess. These could be guest blog posts, podcasts, live streams etc.
- Recommended Skills:
    - Excellent verbal and written communication skills.
    - Prior experience participating in an open source community is a plus.
    - Should be able to install and run Vitess according to the user guides.
    - Website development skills are a plus.
- Mentor(s):
    - Deepthi Sigireddi @deepthi deepthi@planetscale.com
    - Florent Poinsard @frouioui florent@planetscale.com
- Upstream Issue (URL): https://github.com/vitessio/vitess/issues/15895
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1e395914-9adb-4254-a02d-08e6e03e3b93

### WasmEdge

#### Support piper as a new backend of the WASI-NN WasmEdge plugin

- Description: WasmEdge supports PyTorch, TensorFlow Lite, llama.cpp, and more NN backend. Dealing with the text-to-voice is a big thing that we want to achieve. To make it possible, we would like to integrate [piper](https://github.com/rhasspy/piper), A fast, local neural text-to-speech system in C++ as a new [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend.
- Expected Outcome:
    - A new plugin provides a piper [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend
    - A test suite for validating the plugin
    - Documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
    - Hung-Ying Tai (@hydai, hydai@secondstate.io)
    - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3381
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/61014739-ac16-4188-bdab-c87c0a502470

#### Enabling LLM fine tuning in the WASI-NN ggml plugin

- Description: WasmEdge is a lightweight and cross-platform runtime for LLM applications. It allows developers to create LLM apps on a Mac or Windows dev machine, compile them to Wasm, and deploy them on Nvidia machines without any changes to the binary app. It achieves application portability across CPUs and GPUs by supporting a W3C standard API called  [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn), which abstracts GPU-related AI functions as high-level APIs. At this stage, however, only inference functions are supported. In this project, we aim to support fine-tuning features in WasmEdge. It will improve the developer experience for WasmEdge-enabled LLM tools. To achieve this, we plan to extend the current WASI-NN spec by adding a set of extra APIs, and then implement them by delegating to corresponding functions in llama.cpp embedded in the WasmEdge GGML plugin.
- Expected Outcome:
    - Use llama2-7b as the base LLM for fine-tuning; the final implementation should handle it correctly.
    - Extend the [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) spec if needed to support the fine-tuning feature.
    - Implement the fine-tuning functions inside [WASI-NN ggml plugin](https://github.com/WasmEdge/WasmEdge/blob/master/plugins/wasi_nn/ggml.h). They will call the corresponding functions in llama.cpp, as the inference functions do.
    - Implement the LoRA-related functions inside the WASI-NN ggml plugin to load the pre-trained LoRA and verify the fine-tuned model.
    - Documentation, examples, tutorials, and demonstration are required.
- Recommended Skills: C++, WebAssembly, LLM fine-tuning
- Mentor(s):
    - Hung-Ying Tai (@hydai, hydai@secondstate.io)
    - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3209
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/41c5a3df-0b84-4b78-b343-bacfc2a3c4ff

#### Create a search-enabled API server for local LLMs

- Description: WasmEdge is a lightweight inference runtime for AI and LLM applications. The [LlamaEdge project](https://github.com/LlamaEdge) has developed an [OpenAI-compatible API server](https://github.com/LlamaEdge/LlamaEdge/tree/main/api-server) and a [server-side RAG app](https://llamaedge.com/docs/category/server-side-rag) based on WasmEdge. In this project, we aim to use the LlamaEdge components to build a new API server that incorporates real-time Internet search results into LLM answers.
- Expected Outcome: An OpenAI-compatible local LLM API server that uses Google Search for supplemental context
- Recommended Skills:
    - Rust language
    - LlamaEdge
- Mentor(s):
    - Michael Yuan (@juntao, michael@secondstate.io)
    - Hung-Ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3372
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0a4e08a1-3404-46fc-b0d0-5117ec4ec119

#### Finetune LLM models for Rust coding assistance

- Description: WasmEdge is a lightweight inference runtime for AI and LLM applications. We want to build specialized and finetuned models for WasmEdge community. The model should be supported by WasmEdge and its applications should benefit the WasmEdge community.
  In this project, we will build and compare two finetuned model for Rust coding assistance.
    * A code review model. It aims to be a new backend for the [PR review bot](https://github.com/flows-network/github-pr-summary/) we currently use in the community.
    * A QA model. It should be able to answer user questions about the Rust language and provide explanations. Our goal is to provide an alternative to our [Learn Rust](https://flows.network/learn-rust) app.
- Expected Outcome: Two finetuned models based on Llama3-8b for Rust code review and QA.
- Recommended Skills:
    - Rust language
    - ChatGPT and Claude
    - LlamaEdge
    - llama.cpp
- Mentor(s):
    - Michael Yuan (@juntao, michael@secondstate.io)
    - Hung-Ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3371
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d52d172e-598d-4817-be97-3338d5b96432
