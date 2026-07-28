# Term 03 - 2026 September - November

Status: Planning

Mentorship duration - three months (full-time schedule)

### Timeline

| Activity | Dates (2026) |
|--------------|------------------|
| Project Proposals Open | Wed, Jul 1 – Tue, Jul 28, 18:00 UTC |
| Mentee Candidate Info Sessions | Tue, Jul 21, Times TBD (will be multiple timezone options) |
| Mentee Applications Open | Mon, Aug 3, 00:00 UTC – Tue, Aug 18, 23:59 UTC |
| Application Review Period (2 weeks) | Wed, Aug 19 – Tue, Sep 1, 18:00 UTC |
| Selection Notifications | Wed, Sep 2 – Fri, Sep 4 *(notifications may take a few days to reach all mentees)* |
| Mentorship Program Begins | Mon, Sep 7 |
| Mentorship Kick Off Call | Tue, Sep 8, Times TBD (will be multiple timezone options) |
| Midterm Mentee Evaluations | Tue, Oct 20, 18:00 UTC |
| First Stipend Payments | Wed, Oct 21 |
| Final Mentee Evaluations | Tue, Nov 24, 18:00 UTC |
| Second Stipend Payments | Wed, Nov 25 |
| Last Day of Term | Fri, Nov 27 |


### Project instructions

Project maintainers and potential mentors propose programs by opening an issue with the [LFX Mentorship Program Proposal form](https://github.com/cncf/mentoring/issues/new?template=lfx-program-proposal.yml), by July 28, 2026. Submit one issue per program, and please limit proposals to 4-5 per CNCF project. See [How to propose a program](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#how-to-propose-a-program) for the full process and what happens after you submit.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Table of Contents

- [Apicurio Registry](#apicurio-registry)
  - [MCP Tool Validation and Compatibility Checking](#mcp-tool-validation-and-compatibility-checking)
  - [CloudEvents Webhook Notifications for Schema Changes](#cloudevents-webhook-notifications-for-schema-changes)
  - [Prompt Template Playground in the Registry UI](#prompt-template-playground-in-the-registry-ui)
  - [Federated AI Agent Search Across Instances](#federated-ai-agent-search-across-instances)
- [Flatcar Container Linux](#flatcar-container-linux)
  - [Nebraska Reporting & Metrics Uplift](#nebraska-reporting-metrics-uplift)
  - [Cloud-Init to Butane YAML config transpiler](#cloud-init-to-butane-yaml-config-transpiler)
- [HAMi](#hami)
  - [Reduce HAMi-core Initialization Lock Contention](#reduce-hami-core-initialization-lock-contention)
  - [Fix GPU Memory Isolation for Child and SSH Processes](#fix-gpu-memory-isolation-for-child-and-ssh-processes)
  - [HAMi GPU Sharing Workshop and Documentation](#hami-gpu-sharing-workshop-and-documentation)
- [Kmesh](#kmesh)
  - [Develop MCP Server for AI-Native Kmesh Service Mesh Management](#develop-mcp-server-for-ai-native-kmesh-service-mesh-management)
- [KubeEdge](#kubeedge)
  - [Enable RuntimeClass and Confidential Containers on KubeEdge](#enable-runtimeclass-and-confidential-containers-on-kubeedge)
  - [Modernize KubeEdge Controllers and Admission Webhooks](#modernize-kubeedge-controllers-and-admission-webhooks)
- [Kubeflow](#kubeflow)
  - [Evolve SparkClient into Kubeflow's Unified Data Processing Layer](#evolve-sparkclient-into-kubeflows-unified-data-processing-layer)
  - [Abstracting Pod Lifecycle Diagnostics for Kubeflow Pipelines](#abstracting-pod-lifecycle-diagnostics-for-kubeflow-pipelines)
- [Kubernetes](#kubernetes)
  - [Expand Declarative Validation (DV) in Kubernetes](#expand-declarative-validation-dv-in-kubernetes)
  - [Extract and enforce shared behaviors between resolvers](#extract-and-enforce-shared-behaviors-between-resolvers)
- [Kubescape](#kubescape)
  - [Agent Sandbox: CRD Posture Controls + gVisor Runtime Visibility](#agent-sandbox-crd-posture-controls-gvisor-runtime-visibility)
  - [Native Multi-Cluster Fleet Posture Aggregation](#native-multi-cluster-fleet-posture-aggregation)
  - [External VEX Ingestion for Kubescape Vulnerability Scanning](#external-vex-ingestion-for-kubescape-vulnerability-scanning)
  - [Evidence of Finding: Path-Level Evidence in Scan Output](#evidence-of-finding-path-level-evidence-in-scan-output)
- [Kyverno](#kyverno)
  - [Update Pod Security Standards for User Namespaces](#update-pod-security-standards-for-user-namespaces)
  - [AI Assistant](#ai-assistant)
- [OpenTelemetry](#opentelemetry)
  - [Declarative instrumentation configuration for otelc](#declarative-instrumentation-configuration-for-otelc)
  - [Zero-code AI Agent observability for otelc](#zero-code-ai-agent-observability-for-otelc)
- [OpenYurt](#openyurt)
  - [Add Claude Code Skills for deploying OpenYurt and configuring Raven](#add-claude-code-skills-for-deploying-openyurt-and-configuring-raven)
- [Podman Container Tools](#podman-container-tools)
  - [Website Design and UX Improvements](#website-design-and-ux-improvements)
  - [Agentic CI Flake Categorization and Analysis](#agentic-ci-flake-categorization-and-analysis)
- [urunc](#urunc)
  - [Fuzzing and robustness testing for urunc](#fuzzing-and-robustness-testing-for-urunc)
  - [Integration of urunc's sandbox execution with Argo](#integration-of-uruncs-sandbox-execution-with-argo)
- [Velero](#velero)
  - [Add CSI Snapshot E2E Tests to Kind CI](#add-csi-snapshot-e2e-tests-to-kind-ci)
- [WasmEdge Runtime](#wasmedge-runtime)
  - [Support for the Wide Arithmetic Proposal](#support-for-the-wide-arithmetic-proposal)

## Accepted Projects

### Apicurio Registry

#### MCP Tool Validation and Compatibility Checking

CNCF - Apicurio Registry: MCP Tool Validation and Compatibility Checking (2026 Term 3)

- Description:

  > ## Description
  > Apicurio Registry supports MCP_TOOL artifacts and exposes them via well-known endpoints. As organizations deploy more MCP servers with more tools, they need to know: does this tool definition conform to the MCP spec? And if I chain Tool A's output into Tool B's input, are their schemas compatible?
  > 
  > This project adds validation and compatibility checking for MCP tools — the same schema governance Apicurio already provides for Avro, Protobuf, and JSON Schema. The mentee will implement spec validation on create/update, build input/output compatibility checking between tools, add a "Compatible Tools" API endpoint, and create a compatibility view in the UI.
  > 
  > ## Expected outcomes
  > - MCP spec validation on artifact create/update (required fields, valid JSON Schema for parameters)
  > - Input/output compatibility checking between tools using existing JSON Schema compatibility infrastructure
  > - "Compatible Tools" API endpoint: given a tool, return all tools with compatible input schemas
  > - UI view: select a tool and see which others can consume its output
  > - Unit and integration tests for validation and compatibility rules

- Recommended Skills: Java, Quarkus, JSON Schema, React, TypeScript, REST
- Technologies: Java, Quarkus, JSON Schema, React, TypeScript, REST
- Mentor(s):
  - Vandana Yadav (@vandanayadav7, vandana.yadav.vs@gmail.com)
  - Carles Arnal (@carlesarnal, carnalca@ibm.com)
- Upstream Issue: https://github.com/Apicurio/apicurio-registry/issues/8427
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/764a7403-9878-463f-a12f-9b173c3fd0a7

#### CloudEvents Webhook Notifications for Schema Changes

CNCF - Apicurio Registry: CloudEvents Webhook Notifications for Schema Changes (2026 Term 3)

- Description:

  > ## Description
  > In event-driven architectures, a schema change in the registry can break every producer and consumer downstream. Today, the only way to detect changes in Apicurio Registry is to poll the API. A breaking schema change could cascade through a Kafka pipeline before anyone notices.
  > 
  > This project adds a webhook notification system that emits CloudEvents (CNCF Graduated) when registry state changes. The mentee will design the event schema, implement the subscription API, build the delivery engine with at-least-once semantics and retry logic, and store everything in the SQL database. The result is a production-ready notification system for the SQL storage variant.
  > 
  > ## Expected outcomes
  > - CloudEvents-compliant event schema for artifact created, version published, rule violated, artifact deprecated
  > - Webhook subscription REST API (register endpoints, choose event types, filter by group/artifact type)
  > - Delivery engine with at-least-once semantics and exponential backoff retry
  > - SQL schema migration for subscriptions and delivery logs
  > - Integration tests covering subscribe → trigger → verify delivery → verify retry

- Recommended Skills: Java, Quarkus, PostgreSQL, CloudEvents, REST, Testcontainers
- Technologies: Java, Quarkus, PostgreSQL, CloudEvents, REST, Testcontainers
- Mentor(s):
  - Carles Arnal (@carlesarnal, carnalca@ibm.com)
  - Paolo Antinori (@paoloantinori, pantinor@ibm.com)
- Upstream Issue: https://github.com/Apicurio/apicurio-registry/issues/8426
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f85f019e-f28a-4116-a87f-fe77608b7ac9

#### Prompt Template Playground in the Registry UI

CNCF - Apicurio Registry: Prompt Template Playground in the Registry UI (2026 Term 3)

- Description:

  > ## Description
  > Apicurio Registry supports PROMPT_TEMPLATE artifacts — versioned prompt templates with variable schemas that can be rendered via the REST API and MCP server. But there's no way to work with prompts interactively in the UI. Users must use the raw API or external tools to test and compare templates.
  > 
  > This project builds a Prompt Template Playground into the Registry UI. The mentee will create an interactive prompt editor with syntax highlighting and live variable extraction, a test panel for rendering prompts with sample values, side-by-side version diff, and version tagging for lifecycle tracking (production/staging/experimental).
  > 
  > ## Expected outcomes
  > - Interactive prompt editor with variable auto-detection and input form generation
  > - Test panel: fill in variables, see the fully rendered prompt in real-time
  > - Side-by-side version diff for prompt template text and variable schemas
  > - Version tagging using the existing labels system
  > - End-to-end tests for the playground UI

- Recommended Skills: React, TypeScript, UI/UX design, REST APIs, prompt engineering concepts
- Technologies: React, TypeScript, REST, Java, Quarkus
- Mentor(s):
  - Carles Arnal (@carlesarnal, carnalca@ibm.com)
  - Eric Wittmann (@EricWittmann, ewittman@ibm.com)
- Upstream Issue: https://github.com/Apicurio/apicurio-registry/issues/8425
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/20cb824d-ab31-4d28-ae2e-f54c24ebb00e

#### Federated AI Agent Search Across Instances

CNCF - Apicurio Registry: Federated AI Agent Search Across Instances (2026 Term 3)

- Description:

  > ## Description
  > Apicurio Registry is a CNCF Sandbox API and schema registry with built-in Agent-to-Agent (A2A) protocol support. AI agents register their Agent Cards and can be discovered via well-known endpoints. But in organizations with multiple registry instances (per team, per environment), there's no way to search for agents across all of them from one place.
  > 
  > This project adds a federation layer: a registry instance can register peers and fan out agent card queries across all of them, returning merged results. The mentee will implement the peer registration API, the federated search endpoint, a UI page for managing peers and browsing agents, and graceful handling of unavailable peers. Integration tests use Testcontainers to spin up multiple registry instances.
  > 
  > ## Expected outcomes
  > - Peer registration API (add/remove/list remote registry instances)
  > - Federated search endpoint that queries all peers and returns unified results
  > - "Remote Registries" page in the React UI
  > - Partial results when peers are unavailable (timeouts, clear error reporting)
  > - Integration tests verifying cross-instance agent search

- Recommended Skills: Java, Quarkus, React, TypeScript, REST, Testcontainers
- Technologies: Java, Quarkus, React, TypeScript, REST, Testcontainers
- Mentor(s):
  - Carles Arnal (@carlesarnal, carnalca@ibm.com)
  - Eric Wittmann (@EricWittmann, ewittman@ibm.com)
- Upstream Issue: https://github.com/Apicurio/apicurio-registry/issues/8424
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/06ed3695-1b51-4166-a1df-0131887ec4fb

### Flatcar Container Linux

#### Nebraska Reporting & Metrics Uplift

CNCF - Flatcar Container Linux: Nebraska Reporting & Metrics Uplift (2026 Term 3)

- Description:

  > Nebraska is Flatcar Container Linux's update server: Flatcar machines periodically check in with it to ask "is there a newer OS version for me?", and Nebraska tracks the fleet's update status and lets operators control how rollouts happen.
  > 
  > This project is a set of four improvements to Nebraska's own reporting and metrics - the dashboards and monitoring numbers operators rely on - each of which stands alone and can be built entirely within the Nebraska stack.
  > 
  > **The four pieces:**
  > 
  > 1. **Distribution report** - surfaces information Nebraska already records but never displays, such as which hardware/cloud platform (the "OEM", e.g. AWS, Azure, VMware) each machine runs on. Built end to end as a database query, a backend API endpoint, a chart in the web dashboard, and a monitoring metric.
  > 2. **Faster reporting pages** - speeding up reporting pages that are currently slow, by finding the bottleneck and fixing the underlying database query or index, measured with concrete before/after numbers.
  > 3. **Index cleanup** - cleaning up redundant database indexes that have accumulated over time on frequently-written tables.
  > 4. **Broader monitoring coverage** - broadening Nebraska's monitoring coverage (for example, per-group rollout progress and update failure rates) so operators can watch fleet health in tools like Prometheus and Grafana.
  > 
  > The mentee is not expected to complete all four; the exact selection and order can be settled with the maintainers. A natural place to start is the distribution report - it is small and well-defined, yet touches every layer of the stack (database, API, frontend, metrics), which makes it an ideal way to learn the whole system before taking on the others.
  > 
  > By the end of the term the mentee should have delivered at least one of these pieces end to end, with the option to continue into further pieces as time allows.

- Recommended Skills: SQL, PostgreSQL, Go, REST API, React, TypeScript, Prometheus, Full Stack, databases
- Technologies: SQL, PostgreSQL, Go, REST API, React, TypeScript, Prometheus, Full Stack, databases
- Mentor(s):
  - Jan Bronicki (@John15321, jan.bronicki.flatcar@gmail.com)
  - Ervin Racz (@ervcz, raczervin@microsoft.com)
- Upstream Issue: https://github.com/flatcar/Flatcar/issues/2239
- LFX URL: TBD

#### Cloud-Init to Butane YAML config transpiler

CNCF - Flatcar Container Linux: Cloud-Init to Butane YAML config transpiler (2026 Term 3)

- Description:

  > This is a software development project (Go language) for transpiling from one well-defined YAML format (cloud-config) into another (butane). The project aims to implement the minimum functionality necessary to support ClusterAPI worker node provisioning. This limits the transpiler's scope to support only basic Butane features (users, groups, certificates, files, systemd units, etc.).
  > 
  > While the project itself is well scoped and both formats the transpiler is supposed to work with are well defined, it exists in a complex environment of Linux OS operations and OS provisioning.
  > 
  > Mentors are aware and will give support and guidance, in particular with:
  > - scope, goals, and non-goals
  > - on-boarding, development loop, and local testing
  > - integration with Flatcar and ClusterAPI

- Recommended Skills: Go, YAML, ClusterAPI, Linux Based OS
- Technologies: Go, YAML, ClusterAPI, Linux Based OS
- Mentor(s):
  - Mathieu Tortuyaux (@tormath1, mathieu.tortuyaux@gmail.com)
  - Thilo Fromm (@t-lo, thilo.fromm.work@gmail.com)
  - Michael McCune (@elmiko, msm@opbstudios.com)
- Upstream Issue: https://github.com/flatcar/Flatcar/issues/2226
- LFX URL: TBD

### HAMi

#### Reduce HAMi-core Initialization Lock Contention

CNCF - HAMi: Reduce HAMi-core Initialization Lock Contention (2026 Term 3)

- Description:

  > ## Description
  > 
  > Improve HAMi-core startup performance when hundreds of processes initialize CUDA concurrently and compete for the shared unified lock. The work should follow the maintainer discussion in the upstream issue and preserve correctness while reducing initialization latency and contention.
  > 
  > ## Expected outcomes
  > 
  > - A reproducible benchmark for concurrent HAMi-core initialization.
  > - A maintainer-approved locking design based on the approaches accepted in the upstream discussion.
  > - An implementation with concurrency and regression tests.
  > - Before-and-after measurements of startup latency, throughput, and relevant resource usage.
  > - Documentation of the design, compatibility considerations, and operational impact.
  > - The implementation submitted for HAMi maintainer review.

- Recommended Skills: Linux concurrency, performance profiling, benchmarking, synchronization design, testing
- Technologies: C/C++, Linux, CUDA, NVML, HAMi-core
- Mentor(s):
  - Mengxuan Li (@archlitchi, mengxuan.li@dynamia.ai)
  - Shouren Yang (@shouren, yangshouren@gmail.com)
- Upstream Issue: https://github.com/Project-HAMi/HAMi/issues/1662
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ce2ebae3-6936-409d-a9d7-c98b109ec814

#### Fix GPU Memory Isolation for Child and SSH Processes

CNCF - HAMi: Fix GPU Memory Isolation for Child and SSH Processes (2026 Term 3)

- Description:

  > ## Description
  > 
  > Investigate and fix cases where processes started later inside a HAMi-managed container, including child processes and processes reached through SSH or a new login shell, may not retain the expected GPU memory limit. The first milestone is to reproduce the behavior on a current supported HAMi release. The implementation approach must be agreed with HAMi maintainers rather than assuming a specific configuration mechanism in advance.
  > 
  > ## Expected outcomes
  > 
  > - A reproducible test case and documented root cause.
  > - A maintainer-reviewed design covering the intended isolation boundary, compatibility, and failure modes.
  > - A maintainer-approved implementation, or a validated design and prototype if platform constraints prevent full delivery within the term.
  > - Regression tests covering the original process, child processes, and supported SSH or new-shell scenarios.
  > - Documentation of supported configuration, migration guidance, and known limitations.
  > - The implementation submitted for HAMi maintainer review.

- Recommended Skills: Linux debugging, container runtime analysis, security reasoning, C/C++, testing
- Technologies: Kubernetes, Linux containers, NVIDIA GPU, HAMi-core
- Mentor(s):
  - Mengxuan Li (@archlitchi, mengxuan.li@dynamia.ai)
  - Jimmy Song (@rootsongjc, rootsongjc@gmail.com)
- Upstream Issue: https://github.com/Project-HAMi/HAMi/issues/2125
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e5e55e8c-fab1-4453-9d49-a4a5e013c4c5

#### HAMi GPU Sharing Workshop and Documentation

CNCF - HAMi: HAMi GPU Sharing Workshop and Documentation (2026 Term 3)

- Description:

  > ## Description
  > 
  > Create practical, reproducible learning materials that help users and new contributors deploy HAMi, understand GPU sharing, and troubleshoot common installation, scheduling, and allocation problems. The work should contribute to active HAMi documentation repositories and use a documented, supported HAMi environment.
  > 
  > ## Expected outcomes
  > 
  > - Hands-on workshop labs for HAMi GPU sharing.
  > - Examples for representative AI inference workloads such as vLLM, Ray, or SGLang, based on mentor-approved priorities.
  > - Troubleshooting guides covering common installation, scheduling, and runtime issues.
  > - Tested manifests or scripts with clear prerequisites, expected output, verification, and cleanup steps.
  > - At least one reviewed and merged contribution to the active HAMi website or another mentor-approved HAMi repository.

- Recommended Skills: Technical writing, documentation testing, troubleshooting, GitHub workflow
- Technologies: Kubernetes, HAMi, Markdown, Docusaurus
- Mentor(s):
  - Reza Jelveh (@fishman, reza.jelveh@gmail.com)
  - Jimmy Song (@rootsongjc, rootsongjc@gmail.com)
- Upstream Issue: https://github.com/Project-HAMi/website/issues/656
- LFX URL: TBD

### Kmesh

#### Develop MCP Server for AI-Native Kmesh Service Mesh Management

CNCF - Kmesh: Develop MCP Server for AI-Native Kmesh Service Mesh Management (2026 Term 3)

- Description:

  > ## Description:
  > 
  > Build a Model Context Protocol (MCP) server that exposes Kmesh's capabilities as callable tools for AI agents (Claude, Cursor, GitHub Copilot). The MCP server acts as a middle layer between AI tools and Kmesh infrastructure, enabling natural language queries like "What services are running?" or "Why is service A not reaching service B?" instead of requiring users to learn complex `kmeshctl` commands, xDS APIs, and eBPF internals.
  > 
  > ## Expected Outcome:
  > 
  >   - **MCP Server** — Go-based, 10 core tools, MCP v1.0+ compliant (HTTP/SSE transport), under `mcp/` directory
  >   - **Integration** — Makefile targets (`make mcp-server`, `make mcp-test`, `make mcp-image`), container image
  >   - **Testing** — Unit tests (>80% coverage), integration tests, E2E tests, MCP protocol compliance tests
  >   - **Documentation** — User guide, developer guide (architecture + adding new tools), AI client setup examples (Claude Desktop, Cursor, Copilot)
  >   - **Community** — Blog post on kmesh.net, demo video showing AI agents interacting with Kmesh, community meeting presentation
  >   - **Stretch Goals** — 5 additional tools (total 15), read-write mode with safeguards, `kmeshctl mcp serve` subcommand, MCP resource templates

- Recommended Skills: go/kubernetes/RUST API/MCP
- Technologies: go/kubernetes/RUST API/MCP
- Mentor(s):
  - Yash Israni (@yashisrani, imailyash57@gmail.com)
  - Sumit Goyal (@itvi-1234, sumit.goyal.cse@gmail.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1800
- LFX URL: TBD

### KubeEdge

#### Enable RuntimeClass and Confidential Containers on KubeEdge

CNCF - KubeEdge: Enable RuntimeClass and Confidential Containers on KubeEdge (2026 Term 3)

- Description:

  > ## Description
  > 
  > KubeEdge does not yet provide complete RuntimeClass support for workloads running on edge nodes. This prevents users from selecting alternative runtime handlers such as Kata Containers and limits the use of confidential or hardware-isolated workloads at the edge.
  > 
  > Kubernetes RuntimeClass provides a standard way for a Pod to select a runtime handler through `spec.runtimeClassName`. This project will implement and validate the missing end-to-end RuntimeClass workflow in KubeEdge, covering resource synchronization, edge-side caching, runtime handler resolution, error handling, restart recovery, and cloud-edge reconnection.
  > 
  > The first stage will validate RuntimeClass with Kata Containers in a reproducible KubeEdge environment. After the basic workflow is completed, the project will integrate and validate a Confidential Containers runtime. Intel TDX or another supported confidential computing platform may be used when suitable infrastructure and community support are available.
  > 
  > The project focuses on RuntimeClass and confidential workload enablement. It does not require developing a new container runtime, rebuilding the Confidential Containers stack, or implementing a complete attestation service.
  > 
  > ## Expected Outcome
  > 
  > * Study the upstream Kubernetes RuntimeClass workflow and identify missing KubeEdge integration points.
  > * Build a reproducible KubeEdge and Kata Containers test environment.
  > * Submit a design proposal covering RuntimeClass synchronization, edge caching, handler resolution, compatibility, failure handling, and recovery.
  > * Synchronize required RuntimeClass resources from the Kubernetes control plane to edge nodes.
  > * Enable edge Pods to use `spec.runtimeClassName`.
  > * Ensure Edged selects the corresponding CRI runtime handler.
  > * Handle missing, invalid, or unavailable RuntimeClass handlers with clear status and events.
  > * Preserve RuntimeClass behavior after EdgeCore restart and temporary cloud-edge disconnection.
  > * Validate at least one alternative runtime using Kata Containers.
  > * Migrate or add the manifests, configuration, RBAC, and certificate settings required by the selected runtime.
  > * Add unit tests and end-to-end tests for synchronization, runtime selection, failures, restart, and reconnection.
  > * Provide deployment manifests, validation scripts, architecture documentation, and troubleshooting guidance.
  > * Validate a Confidential Containers workload when suitable infrastructure is available.
  > * Optional: validate remote attestation and protected secret delivery on Intel TDX or another supported platform.
  > * Publish a technical blog or user guide for secure edge workloads on KubeEdge.

- Recommended Skills: Go, Kubernetes, KubeEdge, RuntimeClass, Containerd, Container Runtime Interface, Kata Containers, Confidential Containers, Linux, Confidential Computing
- Technologies: Go, Kubernetes, KubeEdge, RuntimeClass, Containerd, Container Runtime Interface, Kata Containers, Confidential Containers, Linux, Confidential Computing
- Mentor(s):
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/7106
- LFX URL: TBD

#### Modernize KubeEdge Controllers and Admission Webhooks

CNCF - KubeEdge: Modernize KubeEdge Controllers and Admission Webhooks (2026 Term 3)

- Description:

  > ## Description
  > 
  > KubeEdge currently uses separate implementation and deployment models for cloud-side controllers and admission webhooks. The controller manager already uses controller-runtime and reconciliation, while admission remains an independent command, HTTP server, Deployment, Service, and manually registered webhook configuration.
  > 
  > Modern Kubebuilder and controller-runtime projects can run reconciliation controllers and admission webhooks through the same Manager, sharing lifecycle, client, scheme, cache, logging, health checks, leader election, metrics, certificates, and deployment management.
  > 
  > This project will modernize the KubeEdge controller framework by upgrading the Go and Kubebuilder-related toolchain, aligning controller-runtime and controller-tools with KubeEdge's Kubernetes dependencies, migrating existing admission handlers to controller-runtime webhooks, and consolidating controller and admission capabilities into one controller manager component. It will also add automated vulnerability checks and improve toolchain version consistency.
  > 
  > ## Expected Outcome
  > 
  > * Audit the current Go, Kubernetes, controller-runtime, controller-tools, code-generation, controller manager, and admission implementations.
  > * Select compatible Go, controller-runtime, controller-tools, and Kubebuilder-related versions.
  > * Submit a design proposal covering architecture, migration, compatibility, certificates, deployment changes, and rollback.
  > * Align Go versions across `go.mod`, builder images, Dockerfiles, build scripts, GitHub Actions, and documentation.
  > * Upgrade controller-runtime, controller-tools, `controller-gen`, and `setup-envtest`.
  > * Integrate the webhook server into the existing controller-runtime Manager.
  > * Migrate validating and mutating handlers to controller-runtime admission handlers or Kubebuilder-style validators and defaulters.
  > * Share Manager lifecycle, scheme, client, cache, logging, health checks, metrics, and leader election.
  > * Replace manual webhook registration with declarative or generated webhook configurations.
  > * Preserve admission behavior for Device, DeviceModel, Rule, RuleEndpoint, NodeUpgradeJob, and offline migration workloads.
  > * Consolidate the separate admission command, Deployment, Service, RBAC, configuration, and certificate handling after feature parity is verified.
  > * Regenerate and verify CRDs, RBAC, webhook manifests, and generated API code.
  > * Add unit tests, envtest integration tests, and end-to-end tests.
  > * Integrate `govulncheck` or an equivalent Go vulnerability check.
  > * Validate AMD64 and ARM64 builds and generated-file consistency.
  > * Update installation, upgrade, development, and troubleshooting documentation.

- Recommended Skills: Go, Kubernetes, KubeEdge, KubeBuilder, controller-runtime, controller-tools, Admission Webhooks, Custom Resource Definitions, GitHub Actions, Docker, Linux
- Technologies: Go, Kubernetes, KubeEdge, KubeBuilder, controller-runtime, controller-tools, Admission Webhooks, Custom Resource Definitions, GitHub Actions, Docker, Linux
- Mentor(s):
  - Chuanhao Jin (@DoisLONG, 15221580643@163.com)
  - Willard Hu (@WillardHu, wei.hu@daocloud.io)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/7105
- LFX URL: TBD

### Kubeflow

#### Evolve SparkClient into Kubeflow's Unified Data Processing Layer

CNCF - Kubeflow: Evolve SparkClient into Kubeflow's Unified Data Processing Layer (2026 Term 3)

- Description:

  > # Description:
  > 
  >   Kubeflow SparkClient (KEP-107) gives Python users a simple way to run Apache Spark on Kubernetes: interactive Spark Connect sessions via `connect()`, batch jobs via `submit_job()`, lifecycle APIs, and a pluggable backend (Kubernetes, future scope - gateway/livy). The foundation lands this term through KEP-107 and GSoC 2026. This program evolves SparkClient into the unified, Pythonic data-processing layer of the Kubeflow SDK, so users go from raw data to trained models through one consistent API, alongside Trainer, Pipelines, Katib, and Model Registry.
  > 
  >   The mentee advances four connected workstreams:
  > 
  >   1. **Production readiness & observability** — surface metrics, events, and structured logs through the client; add debugging tooling and a richer job/session status model for running Spark at scale.
  >   2. **Kubeflow ecosystem integration** — Integrate with Kubeflow ecosystem and components like Kubeflow Notebook, Kubeflow pipeline, and other. Explore to make SparkClient the SDK's data layer. Flagship deliverable: hand a dataset written by SparkClient to Kubeflow Trainer via a DataFusion-backed cache, with hooks toward Pipelines, Katib, and Model Registry.
  >   4. **Multi-mode execution** — extend beyond interactive/batch to scheduled (`ScheduledSparkApplication`) and streaming jobs behind one consistent Python API. We would like to make it for simple for ML users but making sure advance usecases are also available for data engineers. 
  >   5. **Spark ML experience** — Explore  Spark MLlib workflows (preprocessing, training, evaluation) through SparkClient, registering results to Model Registry.
  >   6. Writing blogs, examples, and improve IT, unit tests as well as making user AI assistants are helping well writing Spark Client.
  > 
  > # Expected Outcome:
  > 
  >   - Observability APIs on SparkClient: job/session metrics, events, and log streaming; an expanded status model; a debugging guide.
  >   - A working Spark → Trainer data handoff through a DataFusion cache, with a runnable end-to-end example.
  >   - Scheduled and streaming execution modes added to SparkClient, with tests and docs.
  >   - Explore Spark MLlib workflow example wired through SparkClient into Model Registry.
  >   - KEP-107 updates, unit and integration tests, and user-facing documentation for each capability and what to add in AI tools/Kubeflow MCP for easy usage for users.

- Recommended Skills: Python, Java, Apache Spark, Kubernetes, distributed data processing, ML workflows; nice-to-have: DataFusion/Arrow, Prometheus/observability tooling
- Technologies: Python, Java, Apache Spark, Kubernetes, distributed data processing, ML workflows; nice-to-have: DataFusion/Arrow, Prometheus/observability tooling
- Mentor(s):
  - Shekhar Rajak (@shekharrajak, rshekhar.prasad@gmail.com)
  - Tariq Hasan (@tariq-hasan, mmtariquehsn@gmail.com)
  - Rishabh Singh (@RobuRishabh, roburishabh@outlook.com)
- Upstream Issue: https://github.com/kubeflow/sdk/issues/655
- LFX URL: TBD

#### Abstracting Pod Lifecycle Diagnostics for Kubeflow Pipelines

CNCF - Kubeflow: Abstracting Pod Lifecycle Diagnostics for Kubeflow Pipelines (2026 Term 3)

- Description:

  > **Background**
  > [Kubeflow Pipelines](https://github.com/kubeflow/pipelines) (KFP) is an orchestrator for containerized ML workloads. Featuring a Python SDK as well as a UI that visualizes pipeline run workloads as directed acyclic graphs, KFP is designed to be a Kubernetes abstraction for ML engineers and data scientists scaling their containerized training and experimentation workflows. 
  > 
  > But this abstraction breaks when a Kubernetes pod hits lifecycle failure. These failures can occur at the provisioning level (e.g., `ImagePullBackOff` or `Unschedulable`), runtime level (e.g., `CrashLoopBackOff` or `OOMKilled`), or node level (e.g., `NodeLost` or `Preempted`). On failure, the KFP UI displays a pipeline frozen at the current pod – not succeeding, progressing, or failing.
  > 
  > The KFP console provides visual support for pod failures that result from errors in user-supplied pipeline code. But this support does not extend to the pod lifecycle failures defined above, forcing a user to debug with the Kubernetes CLI. Additionally, even after a user has retrieved pod status, they also require an advanced understanding of Kubernetes pod events and infrastructure. While AI tooling can ease the burden of Kubernetes debugging, it should not be a prerequisite for the project’s target users. This proposal aims to reduce technical friction in KFP by abstracting away low-level Kubernetes details for ML engineers and data scientists.
  > 
  > **Qualifications**
  > A successful applicant for this project is proficient in Go and Typescript and has practical experience with Kubernetes and pod debugging. Experience with Kubeflow is preferred.
  > 
  > **Project Deliverables**
  > This project introduces a new abstraction layer to visualize and manage Kubernetes pod lifecycle failures directly within the KFP UI. Spanning the entire KFP stack, the implementation is divided into three core phases:
  > 
  > - **UI-level Diagnostic Support:** An upgraded visual console featuring color-coded pod lifecycle statuses, inline failure messages, and educational hover tooltips linked to documentation.
  > - **API Server-level Pod Failure Management:** A more robust API layer capable of handling per-error custom timeouts and a repaired data pipeline that prevents Argo Workflow failure logs from being dropped.
  > - **Enablement & Docs:** Complete feature documentation (within the KFP repository and the Kubeflow website) alongside an interactive website demo.

- Recommended Skills: Kubernetes (including kubectl CLI), Go, Typescript
- Technologies: Kubernetes (including kubectl CLI), Go, Typescript
- Mentor(s):
  - Alyssa Goins (@alyssacgoins, agoins@redhat.com)
  - Matt Prahl (@mprahl, mprahl@redhat.com)
- Upstream Issue: https://github.com/kubeflow/pipelines/issues/12843
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/aba3293b-593c-4afd-a22d-27d70fc50ff8

### Kubernetes

#### Expand Declarative Validation (DV) in Kubernetes

CNCF - Kubernetes: Expand Declarative Validation (DV) in Kubernetes (2026 Term 3)

- Description:

  > ## Description
  > 
  > This mentorship project focuses on advancing the Declarative Validation (DV) framework across the Kubernetes codebase. The project aims to reduce technical debt, improve API validation safety, and streamline schema migrations.
  > The mentee will work closely with maintainers to migrate existing handwritten validations of Pod and ObjectMeta to DV, graduate beta declarative validations to stable, expand the validation tag catalog, and assist with reviewing incoming community PRs. This directly impacts core API Machinery infrastructure and helps accelerate new API development in Kubernetes.
  > 
  > ## Expected outcomes
  > 
  > - At least 10 new validations of ObjectMeta and Pod types are migrated to Declarative Validation.
  > - At least 30 migrated validations are graduated to stable, and the corresponding handwritten validations are deleted.

- Recommended Skills: Go, Kubernetes, API machinery, Code Generation
- Technologies: Go, Kubernetes, API machinery, Code Generation
- Mentor(s):
  - Lalit chauhan (@lalitc375, laitchauhan@google.com)
  - Yongrui Lin (@yongruilin, yongrlin@google.com)
- Upstream Issue: https://github.com/kubernetes/kubernetes/issues?q=is%3Aissue%20state%3Aopen%20label%3Aarea%2Fapi-validation
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/841f2363-4c93-4d3e-931b-030499af82df

#### Extract and enforce shared behaviors between resolvers

CNCF - Kubernetes: Extract and enforce shared behaviors between resolvers (2026 Term 3)

- Description:

  > One of the most prominent selling points of [`kubernetes-sigs/resource-state-metrics`](https://github.com/kubernetes/enhancements/issues/4785) is its extensibility, allowing it to support a number of DSLs as the community deems.
  > 
  > At the moment, there are three resolvers supported in the subproject, in increasing order of their ability to deal with complex tasks: [`unstructured`](https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1/unstructured#NestedFieldNoCopy), [CEL](https://github.com/cel-expr/cel-go), and [Starlark](https://github.com/bazelbuild/starlark). Every resolver is required to implement a `Resolver` interface, with a single `Resolve` method, specifying a signature that helps set the same expectations when sending queries and receiving resolutions from these resolvers, so the same wrapper code can work with any `Resolver` implementation that is plugged into it.
  > 
  > However, there is room for improvement for this particular interface. Essentially, we'd like for this to be broken down into methods that track the implementations on a much more granular level. Output resolution for various composite data-types, as well as unique traits such as underscore replacement for unsupported runes are eligible candidates for shared behaviors that should be abstracted.
  > 
  > Ideally, the cover letter should detail the specifics of such gaps in the common behaviors between resolvers today that can be surfaced to the interface and how they will be addressed, for a much better onboarding experience for more resolvers in the future.
  > 
  > _Please note that we're actively looking for long-term contributors to the project (as it's relatively new, and still in BETA) through the means of the LFX project, and we'd like for someone with similar expectations to drive this task, who'd later be interested in joining the maintainer team as well, but this is not a requirement._

- Recommended Skills: Go, Kubernetes, Observability
- Technologies: Go, Kubernetes, Observability
- Mentor(s):
  - Pranshu Srivastava (@rexagod, rexagod@gmail.com)
  - Manuel Rüger (@mrueg, manuel@rueg.eu)
- Upstream Issue: https://github.com/kubernetes-sigs/resource-state-metrics/issues/15
- LFX URL: TBD

### Kubescape

#### Agent Sandbox: CRD Posture Controls + gVisor Runtime Visibility

CNCF - Kubescape: Agent Sandbox: CRD Posture Controls + gVisor Runtime Visibility (2026 Term 3)

- Description:

  > Google shipped GKE Agent Sandbox to GA and introduced Agent Substrate in
  > May 2026, pushing agent security-relevant configuration into new object
  > types (`WorkerPool`, `ActorTemplate`, sandbox resources) that live outside
  > the workloads Kubescape scans today. An `ActorTemplate` decides whether
  > model-generated code runs under gVisor/Kata or a shared kernel; a
  > `WorkerPool` decides whether one runaway actor can starve every other
  > session multiplexed onto it. Nothing currently treats these as posture
  > decisions, even though the workload is untrusted by definition — the code
  > an agent runs is generated by a model at request time, so the isolation and
  > egress posture of the resource defining it *is* the trust boundary.
  > 
  > This term combines two complementary halves of the same problem: static
  > posture (cheap, ships day one) and runtime visibility (harder, the actual
  > gap once isolation is misconfigured or bypassed).
  > 
  > **Part A — static posture and admission (near-term, PR #10 scope):**
  > - A new "Agent Runtime Hardening" Rego control framework against the
  >   `WorkerPool` / `ActorTemplate` / sandbox CRD schemas, covering: runtime
  >   isolation class pinned to gVisor/Kata (not shared-kernel default),
  >   default-deny egress with explicit allowlist, CPU/memory ceilings per
  >   actor, image provenance/registry allowlisting, per-session credential
  >   scoping, and encrypted/access-scoped snapshot storage.
  > - Findings surfaced through the existing CLI, operator, and MCP-server
  >   paths, with framework mapping to OWASP LLM / MITRE ATLAS where controls
  >   map cleanly.
  > - An admission-control variant (VAP or Kubescape admission) that rejects or
  >   warns on non-hardened `ActorTemplate`/sandbox definitions before they run.
  > 
  > **Part B — runtime visibility into gVisor sandboxes (stretch, this term's
  > research contribution):**
  > - gVisor intercepts syscalls in userspace (the Sentry), so Kubescape's
  >   node-agent, which relies on kernel-level eBPF hooks, cannot see inside a
  >   gVisor-isolated actor the way it sees a normal container. This is the
  >   concrete visibility gap PR #10 explicitly defers.
  > - Investigate and prototype a feasible signal source for gVisor-sandboxed
  >   actors without requiring in-Sentry code changes — candidates include
  >   `runsc`'s built-in trace/strace export, Sentry-level seccomp/audit event
  >   forwarding, and host-visible boundary signals (network egress, process
  >   lifecycle of the Sentry process itself) — and feed whichever proves
  >   viable into the node-agent's existing event pipeline.
  > - Deliver at minimum a design doc with a working proof-of-concept for one
  >   signal source (e.g. sandbox start/stop and network egress visibility),
  >   clearly scoped against what remains genuinely out of reach this term.
  > 
  > Explicit non-goals: no per-session/per-actor runtime attribution, and no
  > claim of full in-sandbox behavioral enforcement — this term establishes
  > posture + admission plus a first, honest answer to the visibility question,
  > not a complete gVisor introspection layer.

- Recommended Skills: Go, OPA/Rego, Kubernetes admission control (ValidatingAdmissionPolicy), eBPF, gVisor (runsc)
- Technologies: Go, OPA/Rego, Kubernetes admission control (ValidatingAdmissionPolicy), eBPF, gVisor (runsc)
- Mentor(s):
  - Matthias Bertschy (@matthyx, matthias.bertschy@gmail.com)
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/2557
- LFX URL: TBD

#### Native Multi-Cluster Fleet Posture Aggregation

CNCF - Kubescape: Native Multi-Cluster Fleet Posture Aggregation (2026 Term 3)

- Description:

  > Kubescape scans exactly one cluster per invocation, but almost every real
  > user operates more than one (prod/staging/DR, per-region, per-tenant).
  > Today there is no first-class way to ask fleet-wide questions like "which
  > clusters fail control C-0016?" or "staging passes this control but prod
  > fails it — where did we drift?". Users fall back to shell loops over
  > `KUBECONFIG` plus hand-rolled `jq` merges, the commercial ARMO SaaS
  > platform (excluding air-gapped/privacy-sensitive users), or bespoke CI glue
  > — none of it shared or tested.
  > 
  > Two things currently block this: there is no type above the single-cluster
  > `PostureReport` anywhere in the codebase, and the Kubernetes client is a
  > process-global singleton (kubescape/kubescape#2004), so even holding two
  > live cluster clients at once is unsafe today.
  > 
  > This proposal adds a `kubescape scan fleet` command that scans a list of
  > kubeconfig contexts **sequentially**, through the existing, entirely
  > unmodified single-cluster scan path — re-pointing the global client once
  > per cluster and never holding two live clients at once — and aggregates the
  > resulting `PostureReport`s into a new, purely additive `FleetReport` type.
  > Concurrency is explicitly deferred to a later phase gated on the #2004
  > singleton refactor, which keeps this term's scope small, self-contained,
  > and mergeable without touching any existing report schema, printer, or
  > public API.
  > 
  > **Deliverables for the term:**
  > - `cmd/scan/fleet.go`: new `scan fleet` subcommand accepting
  >   `--contexts` (comma-separated kubeconfig contexts) and `--baseline`,
  >   reusing existing scan flags.
  > - `core/pkg/fleet/orchestrator.go`: sequential orchestrator that runs a
  >   complete, unmodified scan per context and collects per-cluster results.
  > - A `FleetReport` type carrying a cross-cluster control matrix (control ×
  >   cluster status) plus drift detection: controls whose result diverges from
  >   a chosen baseline cluster are flagged explicitly.
  > - At least one printer for `FleetReport` (e.g. table or JSON) so results are
  >   usable from the CLI and in CI.
  > - Tests covering multi-context orchestration, missing/unreachable contexts,
  >   and drift computation against a baseline.
  > 
  > Open design questions the mentee will help resolve early in the term:
  > where `FleetReport` should live in the module layout, and where OSS fleet
  > aggregation stops versus where platform-level (SaaS) aggregation begins.

- Recommended Skills: Go, Kubernetes client-go, CLI design
- Technologies: Go, Kubernetes client-go, CLI design
- Mentor(s):
  - Matthias Bertschy (@matthyx, matthias.bertschy@gmail.com)
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/2004
- LFX URL: TBD

#### External VEX Ingestion for Kubescape Vulnerability Scanning

CNCF - Kubescape: External VEX Ingestion for Kubescape Vulnerability Scanning (2026 Term 3)

- Description:

  > Kubescape was the first open-source project to *produce* OpenVEX documents
  > from its own scan results, but it does not *consume* VEX published by
  > anyone else. Distribution base images (nginx, alpine, python, RHEL UBI)
  > dominate CVE counts in most clusters, and vendors already triage most of
  > those CVEs as `not_affected` or `fixed` — Red Hat publishes CSAF/VEX for
  > every CVE touching its portfolio, and Chainguard publishes OpenVEX for
  > Wolfi/Chainguard images. Grype, the scanner engine kubevuln already runs,
  > can consume both formats via `--vex`. Kubescape's own pipeline currently
  > ignores all of this, so users see dozens of CVEs their upstream vendor has
  > already resolved or ruled out.
  > 
  > The storage shape and pipeline hook already exist: kubevuln persists VEX as
  > `OpenVulnerabilityExchangeContainer` objects today (for its own generated
  > VEX), and the scan pipeline has a well-defined point where a manifest is
  > produced per image. What's missing is (a) a way to declare and fetch
  > external VEX feeds, and (b) a join step that applies vendor statements to
  > suppress matching findings, with provenance preserved.
  > 
  > **Deliverables for the term:**
  > - A new namespaced `VEXSource` CRD declaring a feed URL, format (OpenVEX
  >   JSON or CSAF), applicable image scope, and refresh interval.
  > - A controller (built on kubevuln's existing `WatchHandler` /
  >   `CooldownQueue` machinery) that fetches, validates, and persists external
  >   VEX documents into the existing `OpenVulnerabilityExchangeContainer`
  >   shape (or a clearly-scoped sibling kind).
  > - A join step in the scan pipeline that matches external `not_affected` /
  >   `fixed` statements against scan results and suppresses matching findings
  >   before they reach a user, recording which document/statement caused each
  >   suppression.
  > - Deduplication and normalization across feeds referencing the same
  >   CVE/image.
  > - End-to-end tests against at least one real feed (Red Hat CSAF/VEX or
  >   Chainguard OpenVEX).
  > 
  > This composes with — but does not require — the SecurityException CRD work;
  > a vendor `not_affected` statement is functionally the same shape as a
  > user-authored exception, so the design intentionally reuses that matching
  > model. Authoring/editing VEX inside the cluster stays out of scope: this
  > proposal is read-only ingestion of third-party data.

- Recommended Skills: Go, Kubernetes controller-runtime/operators, OpenVEX, CSAF, Grype
- Technologies: Go, Kubernetes controller-runtime/operators, OpenVEX, CSAF, Grype
- Mentor(s):
  - Matthias Bertschy (@matthyx, matthias.bertschy@gmail.com)
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubevuln/issues/387
- LFX URL: TBD

#### Evidence of Finding: Path-Level Evidence in Scan Output

CNCF - Kubescape: Evidence of Finding: Path-Level Evidence in Scan Output (2026 Term 3)

- Description:

  > Kubescape reports that a control failed on a resource, but not *why*: which
  > field triggered it, what value it held, or where in the source manifest to
  > look. Users adopting Kubescape for audit and compliance work end up
  > re-reading every flagged manifest by hand to validate each finding, and
  > cannot distinguish a real failure from a false positive (e.g. control C-0012
  > firing on a `Deployment` that only uses `valueFrom.secretKeyRef`) without
  > that context. This is the long-standing ask in
  > kubescape/kubescape#1563 and the concrete complaint in
  > kubescape/kubescape#1737 and kubescape/kubescape#1714.
  > 
  > The underlying data already exists. Every Rego rule emits an
  > `AssistedRemediation` block (`FailedPaths`, `ReviewPaths`, `DeletePaths`,
  > `FixPaths`) alongside the full triggering Kubernetes object
  > (`AlertObject.K8SApiObjects`) in opa-utils. A survey of the ~278 rules in
  > regolibrary found 201 already emit at least one real evidence path; the gap
  > is entirely on the presentation side — there is no renderer that resolves a
  > path against the captured object, shows the offending value, maps it back to
  > a source file/line, or redacts secrets before display.
  > 
  > **Deliverables for the term:**
  > - A path resolver that walks a JSON-path against the captured
  >   `K8SApiObjects` payload and returns the matched value.
  > - A `--show-evidence` (`-E`) pretty-printer mode that renders, per failing
  >   resource, the matched path(s), resolved value(s), and — for file-based
  >   scans (raw YAML, Helm, Kustomize) — the originating file name and line
  >   number.
  > - A redaction-by-default policy for evidence values, with an explicit
  >   `--show-secrets` opt-in, so evidence output is safe to share by default.
  > - Test coverage against representative rules from each of the classified
  >   buckets (always-real paths, mixed, placeholder-only) to confirm the
  >   renderer degrades gracefully when no path-level evidence exists.
  > - Documentation of the evidence contract for rule authors, so new
  >   regolibrary rules populate it correctly going forward.
  > 
  > Stretch goals (time permitting): extending evidence rendering to the JSON
  > and SARIF output formats, and live-cluster evidence pointers
  > (`kubectl` command instead of file/line).
  > 
  > This is a self-contained, mergeable slice of the full proposal in
  > designs-and-proposals#4 — it does not require changes to regolibrary rule
  > logic or the kubevuln pipeline, both of which are explicitly phased later.

- Recommended Skills: Go, OPA/Rego, JSON, YAML, SARIF, Kubernetes
- Technologies: Go, OPA/Rego, JSON, YAML, SARIF, Kubernetes
- Mentor(s):
  - Matthias Bertschy (@matthyx, matthias.bertschy@gmail.com)
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1563
- LFX URL: TBD

### Kyverno

#### Update Pod Security Standards for User Namespaces

CNCF - Kyverno: Update Pod Security Standards for User Namespaces (2026 Term 3)

- Description:

  > ## Description
  > 
  > Kubernetes user namespaces is now GA!
  > 
  > https://kubernetes.io/docs/concepts/workloads/pods/user-namespaces/
  > https://kubernetes.io/blog/2025/04/25/userns-enabled-by-default/
  > 
  > This impacts pod security standards and the Kyverno policy set that supports these.
  > 
  > ## Expected outcomes
  > 
  > We need to be update the pod security libraries to add user namespaces:
  > 
  > https://kubernetes.io/docs/concepts/workloads/pods/user-namespaces/#integration-with-pod-security-admission-checks

- Recommended Skills: Go, Kubernenets, Containers, Security
- Technologies: Go, Kubernenets, Containers, Security
- Mentor(s):
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
  - Ammar Yasser (@aerosouund, ammar.yasser@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/15979
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/898098d8-ce58-409a-834e-32306fc2f46e

#### AI Assistant

CNCF - Kyverno: AI Assistant (2026 Term 3)

- Description:

  > ## Description
  > 
  > Kyverno's maintainers spend significant recurring effort on low-judgment, repetitive tasks: reviewing/merging Dependabot PRs, keeping open PRs rebased with  main  and re-running CI, triaging a high volume of incoming issues, reproducing bug reports, running the right subset of conformance/unit tests for a given diff, and answering repeat questions in Slack/GitHub Discussions. This work competes for maintainer time with code review, design, and roadmap work, and slows down contributor turnaround (stale PRs, delayed triage labels, slow first response on issues).
  > 
  > ## Expected Outcomes
  > 
  > Build an AI Maintainer Assistant: a sandboxed, permission-scoped autonomous agent (e.g., running an agent runtime such as OpenHands/OpenClaw/Hermes-style sandboxed coding agent) that runs on a schedule and via GitHub/Slack webhooks to automate routine maintainer workflows, always via auditable, revertible actions (comments, labels, draft PRs).

- Recommended Skills: AI Engineering, AI agent harness, Claude Code, GitHub Copilot, GitHub Actions, Hermes
- Technologies: AI Engineering, AI agent harness, Claude Code, GitHub Copilot, GitHub Actions, Hermes
- Mentor(s):
  - Jim Bugwadia (@JimBugwadia, jim@nirmata.com)
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/16665
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c869e19a-8815-459b-8a2d-3a068e8863c3

### OpenTelemetry

#### Declarative instrumentation configuration for otelc

CNCF - OpenTelemetry: Declarative instrumentation configuration for otelc (2026 Term 3)

- Description:

  > ## Description
  > 
  > [`otelc`](https://github.com/open-telemetry/opentelemetry-go-compile-instrumentation) instruments Go applications at compile time with zero code changes. Today it can only switch instrumentations on and off through environment variables. There is no way to capture a specific HTTP header, redact a sensitive URL query parameter, or gate a semantic convention migration. Configuration granularity has been one of the top adopter asks since v1.0.
  > 
  > OpenTelemetry already defines the data model for this. The [declarative configuration](https://github.com/open-telemetry/opentelemetry-configuration) spec has an `instrumentation/development` node with a cross-language `general` section and a free-form `go` section that each language owns.
  > 
  > This project makes instrumentation configurable in otelc by implementing that node. The mentee will build the subsystem that reads and validates the config file at build time, bakes it into the generated runtime package, and exposes a typed API to hooks, then prove the design on instrumentation that already ships. To keep it maintainable, each instrumentation declares its options in a manifest that generates the schema, the docs catalog, and the defaults, following the Java agent's `metadata.yaml` pattern.
  > 
  > ## Qualifications
  > 
  > Comfortable with Go and with YAML or JSON Schema, and familiar with OpenTelemetry basics such as semantic conventions and SDK configuration. Exposure to code generation or Go build tooling is a plus, not a requirement.
  > 
  > ## Expected Outcomes
  > 
  > - A working configuration subsystem in otelc, so users can tune instrumentation behavior through a declarative config file instead of coarse environment variables
  > - A sustainable way for instrumentations to declare their options, keeping schema, defaults, and documentation in sync as the project grows
  > - Real instrumentations consuming the new configuration, with tests, documentation, and a runnable example
  > - Backward compatibility with the existing environment-variable controls
  > - A written RFC recording the configuration model, so future contributors know where new options belong
  > - Feedback and contributions upstream to the OpenTelemetry declarative configuration spec

- Recommended Skills: Go, OpenTelemetry, JSON
- Technologies: Go, OpenTelemetry, JSON
- Mentor(s):
  - Xabier Martinez Beneitez (@txabman42, x42.martinez@gmail.com)
  - Azhar Momin (@amazingakai, azhar-momin@outlook.com)
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-go-compile-instrumentation/issues/705
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3db981bf-404b-4c8e-96f8-b0433688e8cf

#### Zero-code AI Agent observability for otelc

CNCF - OpenTelemetry: Zero-code AI Agent observability for otelc (2026 Term 3)

- Description:

  > Design and build an **AI provider adapter interface** in `otelc` (`opentelemetry-go-compile-instrumentation`) — OpenTelemetry's compile-time, zero-code instrumentation for Go — that emits the `gen_ai.*` semantic conventions (spans, metrics, events) through a single shared abstraction, so AI providers and libraries plug into a common contract instead of being instrumented ad hoc.
  > 
  > The already-merged OpenAI instrumentation (#604) is migrated onto this interface as the reference implementation, then the adapter is extended to additional providers and libraries: `anthropic-sdk-go`, Gemini, and the MCP / LangChain frameworks. MCP/LangChain require non-HTTP hooks (following the Kafka/Redis instrumentation patterns) rather than the HTTP-based path.
  > 
  > This design-first framing gives the mentee real architecture and problem-solving work — defining the adapter contract, mapping heterogeneous provider APIs onto shared semconv, and validating it across libraries — rather than repetitive per-library instrumentation.
  > 
  > Community demand is concrete and vendor-neutral: the OpenAI instrumentation (#604) closed community issue #327, and the request pipeline is active (#706 for aws-sdk-go-v2, #553 MongoDB shipped).
  > 
  > Deliverables follow a week-by-week plan where each milestone ships a runnable demo + green CI so progress is visible at a glance: adapter interface + OpenAI migration → anthropic-sdk-go → Gemini → MCP → LangChain, each with instrumentation rules, tests under the paired `test/` directory, and an example app emitting `gen_ai.*` spans.
  > 
  > Privacy posture: message bodies are off by default and strictly opt-in via `OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT` — nothing is captured unless the operator turns it on.

- Recommended Skills: Go, OpenTelemetry, compile-time instrumentation, gen_ai semantic conventions, API/interface design
- Technologies: Go, OpenTelemetry, compile-time instrumentation, gen_ai semantic conventions, API/interface design
- Mentor(s):
  - Haibin Zhang (@NameHaibinZhang, namehaibinzhang@gmail.com)
  - Xabier Martinez (@txabman42, x42.martinez@gmail.com)
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-go-compile-instrumentation/issues/709
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/91cab14a-42aa-4e08-9144-3b243309e68c

### OpenYurt

#### Add Claude Code Skills for deploying OpenYurt and configuring Raven

CNCF - OpenYurt: Add Claude Code Skills for deploying OpenYurt and configuring Raven (2026 Term 3)

- Description:

  > ## Description
  > OpenYurt extends Kubernetes to the edge, but its deployment and Raven network configuration involve complex prerequisites, CRDs (Custom Resource Definitions), and node conversions, creating a steep learning curve. This project aims to integrate executable "Claude Code Skills" directly into the OpenYurt repository, transforming static documentation into interactive, AI-driven deployment workflows triggered by slash commands such as `/openyurt-deploy`.
  > 
  > You will need to build Markdown-based skills with security constraints that guide the AI ​​assistant through the end-to-end setup of OpenYurt. Key tasks include implementing the `/openyurt-deploy` skill—covering label-based node conversion and autonomous capability verification—followed by the `/openyurt-raven` skill for cross-region VPN configuration. These skills will utilize YAML Frontmatter to restrict the AI ​​tool to executing only safe shell commands and will decouple entry points from troubleshooting references to ensure maintainability.
  > 
  > ## Expected Outcomes
  > - Create Structured Troubleshooting Reference Documentation: Develop modular reference docs containing decision-tree diagnostics for common conversion Job failures, separating troubleshooting logic from the main deployment flow to ensure long-term maintainability.
  > - Deliver /openyurt-deploy Skill with Full Lifecycle Support: Implement a safety-scoped Claude Code skill that handles end-to-end deployment on existing Kubernetes clusters, including preflight checks, NodePool creation, label-driven node conversion, and built-in uninstall/rollback procedures.
  > - Deliver the `/openyurt-raven` Skill: implement Raven tunnel configuration, connectivity testing, and more.

- Recommended Skills: Go, Kubernetes, Markdown
- Technologies: Go, Kubernetes, Markdown
- Mentor(s):
  - Rambohe (@rambohe-ch, rambohe.ch@gmail.com)
  - Bingchang Tang (@zyjhtangtang, bingchang07@gmail.com)
  - Lu Chen (@luc99hen, luc99.en@gmail.com)
- Upstream Issue: https://github.com/openyurtio/openyurt/issues/2559
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/675bb1ec-015c-4b26-a1dd-e1ab517f20cf

### Podman Container Tools

#### Website Design and UX Improvements

CNCF - Podman Container Tools: Website Design and UX Improvements (2026 Term 3)

- Description:

  > ## Description
  > 
  > The [podman.io](https://podman.io) website is how most people first find and learn about Podman, but it has a few gaps and a growing list of open issues that need attention.
  > 
  > Right now, there's no dedicated downloads page -- clicking "Other Install Options" just sends users to the installation docs. Community meeting minutes are shown in a scrollable modal popup instead of having their own page, so they can't be bookmarked or easily shared. The blog is also missing its own stylesheet, which causes readability issues like low-contrast text. On top of that, there are formatting problems, broken links, and stale content scattered across the site. A bigger challenge and is that our documentation is fragmented -- we link out to several external sources instead of having everything unified under podman.io.
  > 
  > This internship is about fixing all of that. We’re looking for a mentee with a strong eye for design who will build out new pages, clean up styling, and work through the backlog of open issues on the podman.io repo. If our mentee wants to go above and beyond, they can also attempt to unify our docs!
  > 
  > ## Expected Outcomes
  > 
  > Downloads page: A new page with direct download links for Podman CLI and Podman Desktop across all platforms, with OS auto-detection.
  > 
  > Meeting minutes page: Replace the modal popup with a proper page where each meeting's notes have their own shareable URL.
  > 
  > Blog styling: Add a stylesheet for the blog to fix contrast, typography, and formatting issues.
  > 
  > Bug fixes: Work through open issues -- broken links, dead demos, incorrect carousel text, RSS feed problems, layout/alignment fixes, etc.
  > 
  > 
  > ## Bonus Outcomes
  > 
  > Create a better tie-in with our [YouTube](https://youtube.com/podman) page to the site.  If it makes sense, have the most recent YouTube video playing on a page, or perhaps on the home page somewhere.
  > 
  > Unified docs: Start bringing documentation under podman.io instead of linking out to scattered external sources.
  > 
  > A documented process created to allow less knowledgeable web developers to make updates to the site.

- Recommended Skills: Design, UI/UX
- Technologies: Docusaurus, React, TypeScript, Tailwind CSS, HTML/CSS, GitHub Actions
- Mentor(s):
  - Ashley Cui (@ashley-cui, acui@redhat.com)
  - Tom Sweeney (@TomSweeneyRedHat, tsweeney@redhat.com)
- Upstream Issue: https://github.com/containers/podman.io/issues/512
- LFX URL: TBD

#### Agentic CI Flake Categorization and Analysis

CNCF - Podman Container Tools: Agentic CI Flake Categorization and Analysis (2026 Term 3)

- Description:

  > ## Description
  > Continuous Integration (CI) pipelines are the backbone of our development, but "flaky" tests—tests that exhibit both false positive and false negative outcomes randomly—severely degrade developer velocity and erode trust in the CI system.
  > Currently, our project relies on GitHub Actions for its CI/CD processes. Manually digging through extensive GitHub Actions logs to identify, categorize, and troubleshoot these flaky failures is a massive, time-consuming burden for maintainers.
  > This internship aims to solve this by building an intelligent, automated toolchain that monitors our GitHub Actions workflows for flaky behavior and leverages an agentic AI workflow to handle the heavy lifting of analysis. The intern will build a system that automatically extracts failing logs, uses AI agents to reason about the failure (differentiating between infrastructure blips, race conditions, network timeouts, etc.), and surfaces actionable mitigation strategies directly to the maintainers.
  > 
  > ## Expected Outcomes
  > Data Ingestion Pipeline: A mechanism to automatically fetch, filter, and parse flaky CI run data and logs directly from the GitHub Actions API.
  > Agentic Analysis Engine: An integration with an AI/LLM framework designed to read failure logs, categorize the root cause of the flake, and generate a plain-English analysis.
  > Mitigation & Reporting: A reporting layer that takes the agent's findings and seamlessly integrates them into the developer workflow (e.g., auto-generating GitHub Issues, compiling weekly flake reports, or posting PR comments with suggested fixes).
  > Documentation: Comprehensive documentation covering the architecture of the tool, how to deploy it, and how maintainers can tweak the agent's prompts and behaviors.
  > 
  > # Recommended Skills
  > Proficiency in Python or Go (for scripting and API interactions).
  > Familiarity with GitHub Actions, CI/CD concepts, and log analysis.
  > Interest or experience in Generative AI, LLMs, and agentic workflows (prompt engineering, AI tool calling).
  > Experience with the GitHub API is a strong plus.
  > Familiarity with Local AI is a plus

- Recommended Skills: AI, CI/CD, Github Actions, Go, Python
- Technologies: AI, CI/CD, Github Actions, Go, Python
- Mentor(s):
  - Paul Holzinger (@Luap99, pholzing@redhat.com)
  - Tim Zhou (@timcoding1988, tizhou@redhat.com)
  - Mohan Boddu (@mohanboddu, mboddu@redhat.com)
- Upstream Issue: https://github.com/podman-container-tools/podman/issues/29265
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/050e89d9-aec2-47ad-9113-3ba41a639d55

### urunc

#### Fuzzing and robustness testing for urunc

CNCF - urunc: Fuzzing and robustness testing for urunc (2026 Term 3)

- Description:

  > ## Description
  > 
  > As a container runtime, `urunc` is a crucial component of the whole container stack and as a result it s very important to ensure its robustness, reliability and expected behavior. One of the best ways to do so is with fuzzing
  > 
  > This project aims to extend the current testing suite of urunc, increasing test and fuzzing coverage with the goal of improving its robustness, predictability, and error reporting. Apart of the implementation, the tests should also be included in the CI and even integrating them with [OSS-Fuzz](https://github.com/google/oss-fuzz) (or [ClusterFuzzLite](https://google.github.io/clusterfuzzlite/) so that fuzzing runs continuously and its outcomes are automatically reported.
  > 
  > ## Expected Outcome
  > 
  > - A notable increase in testing and fuzzing coverage.
  > - Code improvements based on testing and fuzzing.
  > - Integration with OSS-Fuzz or ClusterFuzzLite, ensuring that fuzzing runs continuously and its results (coverage statistics, crashes) are automatically reported.
  > - Documentation on how to maintain and extend the fuzzing tests as the project evolves.

- Recommended Skills: Go, contianer runtimes, fuzzing, testing
- Technologies: Go, contianer runtimes, fuzzing, testing
- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Anastassios Nanos (@ananos, ananos@nubificus.co.uk)
- Upstream Issue: https://github.com/urunc-dev/urunc/issues/852
- LFX URL: TBD

#### Integration of urunc's sandbox execution with Argo

CNCF - urunc: Integration of urunc's sandbox execution with Argo (2026 Term 3)

- Description:

  > ## Description
  > 
  > While urunc has successfully enabled the use of unikernels and single application kernels within Kubernetes environments, its integration with other CNCF projects has been less seamless. A notable example is Argo, a widely adopted platform for defining and managing workflows, complex pipelines, and distributed applications on Kubernetes.
  > 
  > In urunc's execution model, untrusted components of a deployment run inside sandboxed environments as unikernels or single-application kernels, while trusted components run as standard containers. Although this separation enables fine-grained workload isolation, it introduces friction in deployments like Argo, since it breaks pod-level assumptions (e.g. shared networking, storage).
  > 
  > This project aims to bridge that gap between Argo deployments and urunc's sandboxed execution model by enabling compatibility at the runtime and workflow levels. The expected outcome is that users can easily choose which parts of their Argo deployment run in isolated urunc sandboxes.
  > 
  > ## Expected Outcome:
  > 
  > - A document describing the architecture of Argo and the execution model of urunc, including a clear breakdown of the main incompatibilities.
  > - A working integration with the necessary changes required in urunc and its components.
  > - A tutorial showing how to deploy and run Argo workflows using urunc, including setup, configuration, and example use cases.

- Recommended Skills: Go, container runtimes, Argo, Kubernetes
- Technologies: Go, container runtimes, Argo, Kubernetes
- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Anastassios Nanos (@ananos, ananos@nubificus.co.uk)
- Upstream Issue: https://github.com/urunc-dev/urunc/issues/573
- LFX URL: TBD

### Velero

#### Add CSI Snapshot E2E Tests to Kind CI

CNCF - Velero: Add CSI Snapshot E2E Tests to Kind CI (2026 Term 3)

- Description:

  > ## Description
  > 
  > Velero supports CSI volume snapshots for backing up and restoring persistent volumes, and e2e tests for this functionality already exist in the codebase, labeled with `Snapshot`, `CSISnapshot`, and `CSIDataMover` in the Ginkgo test suite. However, these tests never run in the project's Kind-based CI pipeline.
  > 
  > The Kind e2e workflow (`e2e-test-kind.yaml`) creates a cluster with MinIO for object storage but installs no CSI driver, no external-snapshotter, and no snapshot controller. The Ginkgo label matrix explicitly excludes all `Snapshot` and `CSI*` labels, so existing CSI tests are filtered out of every PR check and nightly run.
  > 
  > This means CSI snapshot regressions are only caught late, during manual testing against real cloud providers, rather than in automated CI on every PR.
  > 
  > The [kubernetes-csi/csi-driver-host-path](https://github.com/kubernetes-csi/csi-driver-host-path) project provides a lightweight CSI driver that supports VolumeSnapshots and VolumeGroupSnapshots on local storage, runs on single-node Kind clusters, and requires no cloud infrastructure. It is the approach recommended in the upstream tracking issue [#7507](https://github.com/velero-io/velero/issues/7507).
  > 
  > ## Expected outcomes
  > 
  > By the end of the term, the mentee will have contributed the following to the Velero project:
  > 
  > - **CSI infrastructure in Kind CI** -- install external-snapshotter CRDs, snapshot controller, and csi-driver-host-path in the Kind e2e workflow, with a StorageClass and VolumeSnapshotClass configured for testing.
  > - **Existing CSI tests enabled and passing** -- add `Snapshot` and `CSI*` labels to the Kind CI Ginkgo label matrix, fix any test failures when running against csi-driver-host-path, and ensure tests in `test/e2e/basic/backup-volume-info/` pass reliably.
  > - **New VolumeGroupSnapshot (VGS) e2e test scenarios** -- add test coverage for VGS backup and restore using csi-driver-host-path's VolumeGroupSnapshot support.
  > - **CI workflow updated** -- the `e2e-test-kind.yaml` GitHub Actions workflow runs CSI snapshot tests as part of the standard PR check suite.
  > - **Documentation** describing the Kind CSI test setup, how to run CSI tests locally, and how to add new CSI test scenarios.
  > - **Blog post** on the Velero blog summarizing the work, the CSI e2e architecture, and lessons learned.

- Recommended Skills: Go, Kubernetes, container storage concepts (PVC/PV/CSI/VolumeSnapshots), GitHub Actions CI, shell scripting
- Technologies: Go, Kubernetes, CSI, GitHub Actions
- Mentor(s):
  - Shubham Pampattiwar (@shubham-pampattiwar, spampatt@redhat.com)
  - Tiger Kaovilai (@kaovilai, tkaovila@redhat.com)
- Upstream Issue: https://github.com/velero-io/velero/issues/7507
- LFX URL: TBD

### WasmEdge Runtime

#### Support for the Wide Arithmetic Proposal

CNCF - WasmEdge Runtime: Support for the Wide Arithmetic Proposal (2026 Term 3)

- Description:

  > ## Description
  > 
  > Add support for the WebAssembly Wide Arithmetic proposal to WasmEdge by implementing the `i64.add128`, `i64.sub128`, `i64.mul_wide_s`, and `i64.mul_wide_u` instructions. These instructions enable efficient 128-bit addition and subtraction, as well as signed and unsigned 64×64-bit widening multiplication.
  > 
  > Since this is not a large proposal, the mentee must implement it in all execution modes, including interpreter, JIT, and AOT.
  > 
  > ## Expected Outcome
  > 
  > 1. WasmEdge must be able to correctly parse, validate, and execute all four Wide Arithmetic instructions while preserving the semantics defined by the proposal.
  > 2. The implementation must pass the corresponding WebAssembly specification tests and provide consistent behavior across the interpreter, AOT compiler, and JIT engine.
  > 3. The document must be completed within the WasmEdge/docs repository.

- Recommended Skills: C++, WebAssembly, LLVM
- Technologies: C++, WebAssembly, LLVM
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - Yi-Ying He (@q82419, yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/5153
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/14d8a870-ed14-4a49-8b8c-8ac50c4605cc

