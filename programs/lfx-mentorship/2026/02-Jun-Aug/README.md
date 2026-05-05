# Term 02 - 2026 June - August

Status: Planning

Mentorship duration - three months (full-time schedule)

### Timeline

| Activity | Dates (2026) |
|--------------|------------------|
| Project Proposals Open | Wed, Apr 1 – Tue, Apr 28, 2026, 11:00 AM PDT (18:00 UTC) |
| Mentee Applications Open | Tuesday, May 5 – Tue, May 19, 2026, 11:00 AM PDT (18:00 UTC) |
| Application Review Period (2 weeks) | Wed, May 20 – Tue, Jun 2, 2026, 11:00 AM PDT (18:00 UTC) |
| Selection Notifications | Wed, Jun 3, 2026 *(notifications may take a few days to reach all mentees) |
| Mentorship Program Begins | Mon, Jun 8, 2026 |
| Midterm Mentee Evaluations | Tue, Jul 21, 2026, 11:00 AM PDT (18:00 UTC) |
| First Stipend Payments | Wed, Jul 22, 2026 |
| Final Mentee Evaluations | Tue, Aug 25, 2026, 11:00 AM PDT (18:00 UTC) |
| Second Stipend Payments | Wed, Aug 26, 2026 |
| Last Day of Term | Mon, Aug 31, 2026 |


### Project instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2026/02-Jun-Aug/project_ideas.md, by April 28, 2026. Please limit proposals to 4-5 projects per CNCF project.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Table of Contents

- [Chaos Mesh](#chaos-mesh)
  - [Refactor PodChaos and NetworkChaos E2E Tests into Gherkin-based BDD Scenarios](#refactor-podchaos-and-networkchaos-e2e-tests-into-gherkin-based-bdd-scenarios)
  - [Runtime Fact Checker for Chaos Mesh Experiments](#runtime-fact-checker-for-chaos-mesh-experiments)
- [Harbor](#harbor)
  - [Harbor CLI: Bubbletea v2 TUI Refactor and OIDC Device-Flow Login](#harbor-cli-bubbletea-v2-tui-refactor-and-oidc-device-flow-login)
  - [Harbor Satellite: Ground Control CLI and Kubernetes Fleet Operator](#harbor-satellite-ground-control-cli-and-kubernetes-fleet-operator)
- [Jaeger](#jaeger)
  - [AI-Powered Trace Analysis: Phase 2 - Self-Service "Skills" Framework](#ai-powered-trace-analysis-phase-2---self-service-skills-framework)
  - [Jaeger for GenAI Observability: Specialized Trace Visualization](#jaeger-for-genai-observability-specialized-trace-visualization)
- [Karmada](#karmada)
  - [Build Karmada Agent Skills](#build-karmada-agent-skills)
- [kgateway](#kgateway)
  - [Documentation improvements for OIDC and JWT IdPs integrations](#documentation-improvements-for-oidc-and-jwt-idps-integrations)
- [Kmesh](#kmesh)
  - [Integrating Kmesh into Headlamp UI](#integrating-kmesh-into-headlamp-ui)
- [krkn - Chaos](#krkn---chaos)
  - [Automated Documentation Sync Bot for Krkn-Chaos Projects](#automated-documentation-sync-bot-for-krkn-chaos-projects)
  - [Dynamic Cluster-Aware Configuration Generation for Krkn-AI](#dynamic-cluster-aware-configuration-generation-for-krkn-ai)
- [Kuadrant](#kuadrant)
  - [Implement AccessPolicy CRD for tool-level authorization in the Kuadrant agentic gateway](#implement-accesspolicy-crd-for-tool-level-authorization-in-the-kuadrant-agentic-gateway)
  - [Investigate and prototype A2A protocol support in the Kuadrant agentic gateway project](#investigate-and-prototype-a2a-protocol-support-in-the-kuadrant-agentic-gateway-project)
  - [Investigate native Envoy MCP filter as replacement for ext-proc parsing in the Kuadrant agentic gateway](#investigate-native-envoy-mcp-filter-as-replacement-for-ext-proc-parsing-in-the-kuadrant-agentic-gateway)
  - [Transform Kuadrant Policy YAML Editors into Interactive Form Views](#transform-kuadrant-policy-yaml-editors-into-interactive-form-views)
- [KubeArmor](#kubearmor)
  - [KubeArmor Supply Chain Security with SLSA Level 3 Compliance and OpenSSF Scorecard Hardening](#kubearmor-supply-chain-security-with-slsa-level-3-compliance-and-openssf-scorecard-hardening)
- [KubeEdge](#kubeedge)
  - [Building an Edge-Cloud Collaborative Framework for Embodied AI Applications with KubeEdge](#building-an-edge-cloud-collaborative-framework-for-embodied-ai-applications-with-kubeedge)
  - [Comprehensive Example Restoration for KubeEdge Ianvs: Phase III](#comprehensive-example-restoration-for-kubeedge-ianvs-phase-iii)
  - [Enabling Edge-Native Inference for Lightweight Large Language Models with KubeEdge](#enabling-edge-native-inference-for-lightweight-large-language-models-with-kubeedge)
  - [Exploring AI PCs as KubeEdge-Managed Edge Nodes for Intelligent Workload Orchestration](#exploring-ai-pcs-as-kubeedge-managed-edge-nodes-for-intelligent-workload-orchestration)
  - [Exploring Alternatives to iptableManager: Optimizing Edge-Cloud Request Forwarding via Apiserver Redirection to cloudcore](#exploring-alternatives-to-iptablemanager-optimizing-edge-cloud-request-forwarding-via-apiserver-redirection-to-cloudcore)
- [Kubernetes](#kubernetes)
  - [Headlamp](#headlamp)
    - [Add Agones to Headlamp: Kubernetes Game Server Management UI](#add-agones-to-headlamp-kubernetes-game-server-management-ui)
    - [Add Argo CD to Headlamp: GitOps Application Management UI](#add-argo-cd-to-headlamp-gitops-application-management-ui)
    - [Add Kueue to Headlamp: Kubernetes Batch Queueing UI](#add-kueue-to-headlamp-kubernetes-batch-queueing-ui)
    - [Add Metal3 to Headlamp: Kubernetes Bare Metal Management UI](#add-metal3-to-headlamp-kubernetes-bare-metal-management-ui)
    - [Add Tinkerbell to Headlamp: Bare Metal Provisioning UI](#add-tinkerbell-to-headlamp-bare-metal-provisioning-ui)
  - [SIG Node / node-readiness-controller](#sig-node-node-readiness-controller)
    - [Advanced Observability: Per-Rule Metrics and Headlamp Plugin](#advanced-observability-per-rule-metrics-and-headlamp-plugin)
    - [Scalability Testing and Release Reliability](#scalability-testing-and-release-reliability)
- [Kubescape](#kubescape)
  - [CEL rule engine support and Rego-to-CEL control migration](#cel-rule-engine-support-and-rego-to-cel-control-migration)
  - [In-cluster, GitOps-native SecurityException CRD for Kubescape, with Headlamp plugin support](#in-cluster-gitops-native-securityexception-crd-for-kubescape-with-headlamp-plugin-support)
- [KubeSlice](#kubeslice)
  - [KubeSlice Controller HA (Active/Standby) Support](#kubeslice-controller-ha-activestandby-support)
  - [Partial Mesh Support (MVP: Hub-and-Spoke)](#partial-mesh-support-mvp-hub-and-spoke)
- [KubeStellar](#kubestellar)
  - [AI-driven bug discovery and remediation architect for KubeStellar Console](#ai-driven-bug-discovery-and-remediation-architect-for-kubestellar-console)
  - [AI-driven operational knowledge base and mission control testing for KubeStellar Console](#ai-driven-operational-knowledge-base-and-mission-control-testing-for-kubestellar-console)
  - [AI-driven test coverage architect for KubeStellar Console](#ai-driven-test-coverage-architect-for-kubestellar-console)
- [KubeVela](#kubevela)
  - [LRU Cache Eviction for the Native Helm Provider](#lru-cache-eviction-for-the-native-helm-provider)
  - [Native Secret-Sourced HTTP Headers and CRD-Based Config Management with Server-Side Validation](#native-secret-sourced-http-headers-and-crd-based-config-management-with-server-side-validation)
- [Kyverno](#kyverno)
  - [Address findings from the Kyverno CNCF TAG Security & Compliance and General Technical Review assessments](#address-findings-from-the-kyverno-cncf-tag-security-compliance-and-general-technical-review-assessments)
  - [Kyverno Technical Outcomes](#kyverno-technical-outcomes)
- [Lima](#lima)
  - [Improve Windows support (host and guest)](#improve-windows-support-host-and-guest)
- [Meshery](#meshery)
  - [Adapter for AI and LLMs](#adapter-for-ai-and-llms)
  - [Agentic CI Pipelines: GitHub Action Workflow Overhaul](#agentic-ci-pipelines-github-action-workflow-overhaul)
  - [Meshery Models Support for OCI Registries](#meshery-models-support-for-oci-registries)
  - [Relationships and Solutions Architecture of Cloud Native Deployments](#relationships-and-solutions-architecture-of-cloud-native-deployments)
- [Microcks](#microcks)
  - [Microcks-CLI v2 - IDE (Vs code) Integration and Local Dev Loop Enhancement](#microcks-cli-v2---ide-vs-code-integration-and-local-dev-loop-enhancement)
- [OpenEverest](#openeverest)
  - [Plugin Developer Playground: Interactive UI Schema Editor with Live Preview](#plugin-developer-playground-interactive-ui-schema-editor-with-live-preview)
  - [Transform everestctl into a Powerful Database Management CLI](#transform-everestctl-into-a-powerful-database-management-cli)
- [OpenKruise](#openkruise)
  - [Build Document Agent for OpenKruise Website](#build-document-agent-for-openkruise-website)
  - [Dynamic Volume Mounting for JuiceFS and Ceph in OpenKruise Agents](#dynamic-volume-mounting-for-juicefs-and-ceph-in-openkruise-agents)
  - [Lightweight and Continuous Load Testing for OpenKruise Agents Using Kwok](#lightweight-and-continuous-load-testing-for-openkruise-agents-using-kwok)
- [OpenTelemetry](#opentelemetry)
  - [Expanding Go Compile-Time Instrumentation Support and Improving otelc Tooling](#expanding-go-compile-time-instrumentation-support-and-improving-otelc-tooling)
  - [UX Research & Information Architecture: How Users Discover and Use OpenTelemetry Instrumentation Information](#ux-research-information-architecture-how-users-discover-and-use-opentelemetry-instrumentation-information)
- [PipeCD](#pipecd)
  - [Plugin Development Book, Docs DX, and Adoption Growth](#plugin-development-book-docs-dx-and-adoption-growth)
- [urunc](#urunc)
  - [Extensive evaluation of urunc's sandboxing execution model](#extensive-evaluation-of-uruncs-sandboxing-execution-model)
  - [Improve lifecycle management of sandbox monitors](#improve-lifecycle-management-of-sandbox-monitors)
  - [Improving DNS and localhost based networking compatibility for urunc across CNIs](#improving-dns-and-localhost-based-networking-compatibility-for-urunc-across-cnis)
  - [Integration of urunc's sandbox execution with Argo](#integration-of-uruncs-sandbox-execution-with-argo)
- [Volcano](#volcano)
  - [Scheduler Management, Observability & Log Explorer UI](#scheduler-management-observability-log-explorer-ui)
  - [Support Namespace-scoped Queue in Volcano](#support-namespace-scoped-queue-in-volcano)
- [WasmEdge](#wasmedge)
  - [Memory alignment in WASM instructions](#memory-alignment-in-wasm-instructions)

## Accepted Projects

### Chaos Mesh

#### Refactor PodChaos and NetworkChaos E2E Tests into Gherkin-based BDD Scenarios

CNCF - Chaos Mesh: Refactor PodChaos & NetworkChaos E2E Tests into Gherkin BDD (2026 Term 2)

- Description: Chaos Mesh has an existing Go-based E2E test suite for validating chaos behavior on Kubernetes. The current tests are effective, but many scenarios mix test intent, fixture setup, Chaos Mesh custom resource creation, probing logic, assertions, and cleanup in Go code. This makes the E2E suite harder to read and extend, especially for new contributors who need to understand both the user-facing chaos behavior and the underlying Kubernetes test implementation at the same time. This project will introduce a Gherkin + Godog based BDD layer for selected Chaos Mesh E2E tests. The mentee will migrate the existing PodChaos and NetworkChaos E2E tests into executable Gherkin feature files backed by reusable Go step definitions. The new feature files should preserve Chaos Mesh-specific behavior and network/pod verification details, rather than hiding them behind overly broad user-story wording.
- Expected Outcome:
  - A Godog-based BDD test layer that can run Chaos Mesh E2E scenarios from Gherkin feature files
  - Gherkin feature files for all existing PodChaos E2E scenarios
  - Gherkin feature files for all existing NetworkChaos E2E scenarios
  - Reusable Go step definitions for common E2E operations such as preparing workloads, applying Chaos Mesh custom resources, probing pod/network behavior, checking expected failure or delay, and verifying recovery
  - Integration with the existing E2E development workflow, with exact command and CI integration decided during implementation
  - Documentation explaining the Gherkin scenario style, step definition conventions, and migration guidance for other Chaos Mesh E2E tests
- Recommended Skills: Go, Kubernetes, Kubernetes E2E testing, Ginkgo/Gomega, Gherkin, Godog, Chaos Mesh usage, test refactoring
- Mentor(s):
  - Yue Yang (@g1eny0ung, g1enyy0ung@gmail.com)
  - Zhiqiang ZHOU (@STRRL, im@strrl.dev)
  - Andrewmatilde (@Andrewmatilde, davis6813585853062@gmail.com)
- Upstream Issue: https://github.com/chaos-mesh/chaos-mesh/issues/4902
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/383fa84a-116a-414e-94e9-4e050fc5b6a8

#### Runtime Fact Checker for Chaos Mesh Experiments

CNCF - Chaos Mesh: Runtime Fact Checker for Experiments (2026 Term 2)

- Description: Chaos Mesh can report the lifecycle and status of a chaos experiment, but users often still need to manually verify whether the real runtime behavior matches the intended chaos behavior. For example, a user may want to know whether a PodChaos experiment actually affected the selected pods, whether a DNSChaos experiment actually changed DNS responses, or whether a NetworkChaos experiment actually changed connectivity or latency between workloads. This project will build a runtime fact checker for Chaos Mesh experiments. The first version should be a standalone CLI prototype where users specify one Chaos Mesh custom resource to check. The tool will collect runtime evidence from Kubernetes resources, Chaos Mesh status, events, and active probes when needed, then compare the observed behavior with the expected behavior implied by the Chaos CR. Core matching logic should be implemented by deterministic collectors, probes, and rules. LLM support, if added, should only summarize or explain collected facts; it should not be the source of truth for the verdict.
- Expected Outcome:
  - A standalone CLI prototype for checking one specified Chaos Mesh experiment
  - Runtime fact checking support for PodChaos, DNSChaos, and NetworkChaos
  - Evidence collectors for Kubernetes resources, Chaos Mesh CR spec/status, events, pod/container lifecycle, and target matching
  - Active probes for DNSChaos and NetworkChaos, because Kubernetes status alone cannot prove DNS or network behavior
  - A verdict model with at least matched, mismatched, inconclusive, and unsupported states
  - Human-readable reports that explain observed facts, expected behavior, verdict, and uncertainty
  - Structured JSON output for future integration with CI, Chaos Dashboard, or a Kubernetes report CRD
  - Documentation covering usage, supported chaos types, limitations, and future integration paths
- Recommended Skills: Go, Kubernetes, Kubernetes client-go/controller-runtime, Chaos Mesh custom resources, networking basics, DNS basics, CLI development, testing
- Mentor(s):
  - Yue Yang (@g1eny0ung, g1enyy0ung@gmail.com)
  - Zhiqiang ZHOU (@STRRL, im@strrl.dev)
  - Andrewmatilde (@Andrewmatilde, davis6813585853062@gmail.com)
- Upstream Issue: https://github.com/chaos-mesh/chaos-mesh/issues/4903
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3ee1332b-7cdb-4b63-ba02-a4e6a8d67897

### Harbor

#### Harbor CLI: Bubbletea v2 TUI Refactor and OIDC Device-Flow Login

CNCF - Harbor: Bubbletea v2 TUI Refactor and OIDC Device-Flow Login (2026 Term 2)

- Description: Harbor CLI needs two foundational improvements this term. First, migrate the TUI from Bubbletea v1 to v2 and refactor the fragmented list/table/selection models into a unified `loadingtablelist` abstraction with consistent loading, pagination, and error states across all commands. Second, replace static credentials with an OAuth 2.0 Device Authorization Grant (RFC 8628) and OIDC login flow so users and CI/CD pipelines can authenticate against Harbor through their identity provider without long-lived secrets.
- Expected Outcome:
  - Bubbletea v2 upgrade and unified `loadingtablelist` model adopted across all list-style commands
  - `harbor login --sso` device-code flow plus a non-interactive CI/CD path with short-lived tokens
  - Encrypted local token storage with automatic refresh and provider-agnostic OIDC config
  - Tests for TUI state transitions and a mock OIDC provider covering device flow and refresh
  - Updated docs covering the new TUI patterns and OIDC setup for common providers
- Recommended Skills: Golang, Charmbracelet Bubbletea, OAuth 2.0 / OIDC, spf13/cobra, testing
- Mentor(s):
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/goharbor/harbor-cli/issues/821
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/007ce352-4c84-441c-9665-5f2fdc4ffb42

#### Harbor Satellite: Ground Control CLI and Kubernetes Fleet Operator

CNCF - Harbor: Satellite Ground Control CLI and Kubernetes Fleet Operator (2026 Term 2)

- Description: Harbor Satellite needs first-class fleet management on top of the new Swagger-first Ground Control API. The mentee will build a `groundctl` CLI generated from the OpenAPI spec covering satellite lifecycle, user management, and a GitOps-style `apply -f` workflow, and pair it with a lightweight Kubernetes operator that manages Satellite instances as custom resources so fleets can be driven through ArgoCD or Flux on edge clusters (k3s, RKE2, microk8s).
- Expected Outcome:
  - Finalized Ground Control OpenAPI spec and generated Go client
  - `groundctl` CLI for satellite lifecycle (register, list, inspect, update-config, delete), users, and `apply -f` GitOps mode
  - `Satellite` CRD plus controller reconciling against Ground Control and deploying via the existing Helm chart
  - Status subresource reporting registration, sync, and cache health back to the cluster
  - End-to-end tests on kind/k3d deploying multiple satellites via CRD; CLI and operator docs with ArgoCD/Flux examples
- Recommended Skills: Golang, OpenAPI/Swagger, spf13/cobra, Kubernetes (CRDs, controller-runtime, kubebuilder), Helm, GitOps
- Mentor(s):
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/container-registry/harbor-satellite/issues/375
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0d89fb23-337d-45a1-a108-23424efa2bf8

### Jaeger

#### AI-Powered Trace Analysis: Phase 2 - Self-Service "Skills" Framework

CNCF - Jaeger: AI-Powered Trace Analysis Phase 2 - Skills Framework (2026 Term 2)

- **Description:** Jaeger is the industry-standard platform for distributed tracing. As microservice architectures grow complex, finding root causes in massive trace data becomes increasingly difficult. While Phase 1 of this initiative established a baseline AI assistant for natural language search, the system currently relies on hard-coded capabilities. This project (Phase 2\) aims to transform the Jaeger AI agent from a static chatbot into an extensible, user-programmable platform. The primary objective is to implement a "Self-Service Skills" framework, architecturally similar to "Claude Code Skills." This will allow end-users to teach the Jaeger AI new debugging workflows (e.g., "Analyze Critical Path" or "Detect N+1 Queries") by simply adding configuration files containing system prompts and logic rules, without needing to recompile the Jaeger binary. The applicant will build this extension within the Jaeger v2 (OpenTelemetry-based) architecture, utilizing **LangChainGo** to orchestrate interactions with Language Models (SLMs/LLMs). This project bridges the gap between generic AI reasoning and domain-specific observability expertise.
- **Expected Outcome:**
  - **Skills Engine Implementation:** An approach compatible with our [BYOA (bring your own agent)](https://docs.google.com/document/d/1qD0OpyRfq-JbO6MCB5gmVxsdPcpPhxz1R_pPnKDdYOg/edit?tab=t.0#heading=h.qgr5ifum0a9m) direction that dynamically discovers, validates, and loads user-defined "Skills" (prompts and tool definitions) from configuration.
  - **Smart Analysis Features:** A polished implementation of Natural Language Search and Contextual Trace Explanation that intelligently leverages these loaded skills.
  - **Local-First Support:** Verified compatibility with local model runners (e.g., Ollama, Llama.cpp) to ensure deterministic performance without sending data to public clouds.
  - **UI Integration:** Enhancements to the Jaeger React UI to expose these AI capabilities and visualize the "reasoning steps" taken by the agent.
  - **Documentation:** A complete guide for users on "How to Author Custom AI Skills for Jaeger."
- **Learning Opportunities:**
  - **Agentic AI Architecture:** Learn to design stateful AI agents in Go that utilize "Tool Calling" and "Reasoning Loops" rather than simple text generation.
  - **OpenTelemetry Internals:** Gain deep familiarity with the OpenTelemetry Collector architecture, as Jaeger v2 is built directly on top of it.
  - **Cloud-Native Engineering:** Experience contributing to a graduated CNCF project, including navigating code reviews, writing design docs (RFDs), and adhering to open-source best practices.
  - **Full-Stack Development:** Practical experience bridging a complex Go backend with a modern React frontend.
- **Recommended Skills:**
  - **Languages:** Strong proficiency in **Go (Golang)** is required. Experience with **TypeScript/React** is highly recommended.
  - **AI/LLM:** Familiarity with LLM concepts (Prompt Engineering, RAG, Function Calling) and frameworks like LangChain.
  - **Domain Knowledge:** Basic understanding of distributed systems, observability, or debugging workflows is beneficial.
- **Mentors:**
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/8440
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4f36fd67-e77b-4c40-91be-1d3150ad34f9

#### Jaeger for GenAI Observability: Specialized Trace Visualization

CNCF - Jaeger: Jaeger for GenAI Observability: Specialized Trace Visualization (2026 Term 2)

- Description: Distributed tracing is essential for GenAI observability, but observing AI Agents differs fundamentally from observing microservices. While microservice traces focus on network latency and error codes, AI traces focus on the "reasoning process." The current Jaeger UI displays traces in a standard waterfall timeline, making it difficult to distinguish between logical "Tool Calls" and technical operations, and nearly impossible to read multi-paragraph prompts or view generated images. This project aims to transform the Jaeger UI into a first-class GenAI observability tool. When Jaeger detects a trace containing GenAI-specific metadata (following OpenTelemetry semantic conventions), it should automatically adapt its presentation to prioritize the "Agentic Flow."
- Expected Outcome:
  - Automatic "GenAI Mode" detection: detect `gen_ai.*` attributes and offer/switch to a specialized visualization mode
  - Agentic hierarchy with iconography: use distinct icons to differentiate span types (e.g., "brain" for LLM calls, "wrench" for tool calls, "database" for RAG retrieval)
  - Rich-media side panel leveraging ADR-0006 side-panel capability, with Markdown support for prompts and completions, pretty-printed JSON for tool inputs/outputs, and direct rendering of images/audio previews
  - Simplified "logical" view: toggle to hide infrastructure-level noise and reveal a clean, high-level reasoning flow
  - More compact table view of multiple traces on the Search page
- Recommended Skills: React, TypeScript, Ant Design components, OpenTelemetry Semantic Conventions (specifically for GenAI), basic knowledge of LLM application patterns (prompting, RAG, tool use)
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/8401
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/46a525b2-568b-4aff-8156-459c8600c759

### Karmada

#### Build Karmada Agent Skills

CNCF - Karmada: Build Agent Skills (2026 Term 2)

- Description: Karmada is a multi-cluster orchestration system, but AI coding agents still lack a Karmada-specific skill set. Without a dedicated skill repository, agents often need to search scattered documentation, infer policy structure from incomplete context, and may produce incorrect `PropagationPolicy`, `OverridePolicy`, or troubleshooting guidance. This project aims to build the Karmada skill set for AI coding agents. The design follows mature multi-skill repository patterns, with a shared knowledge base, focused workflow skills, and deterministic helpers for schema-sensitive tasks.
- Expected Outcome:
  - A shared knowledge base for policy APIs, policy patterns, troubleshooting cases, component guides, and reusable examples.
  - Initial skills:
    - karmada-knowledge
    - karmada-create-policy
    - karmada-audit-policy
    - karmada-explain-placement
    - karmada-debug-propagation
    - karmada-search
    - karmada-controller-manager
  - Deterministic helper scripts, fixtures, and example scenarios for policy generation, policy review, placement explanation, propagation debugging, and multi-country cluster management.
  - Contributor documentation for adding new skills, examples, and knowledge files under hack/agent-skills/.
- Recommended Skills:
  - Kubernetes and multi-cluster orchestration concepts
  - Familiarity with Karmada policies and components
  - YAML and Markdown authoring
  - Python or Go for helper scripts
  - Bash/shell scripting
  - CI/testing for open-source repositories
  - Experience using AI coding agents or designing agent skills
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/community/issues/190#issuecomment-4248950867
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/12821d1d-9528-4cf3-ac3c-d57a6b585599

### kgateway

#### Documentation improvements for OIDC and JWT IdPs integrations

CNCF - kgateway: Documentation improvements for OIDC and JWT IdPs integrations (2026 Term 2)

- Description: The goal of this project is to test and document common 
JWT validation scenarios (e.g., JWKS, multiple issuers, and claim-based validation)
and demonstrate kgateway integration with multiple OAuth identity providers.

- Expected Outcome: 
  - Design a repeatable documentation pattern for identity providers
  - A set of documentation guides for integrating kgateway with popular IdPs
  - A det of documentation guides covering common JWT validation scenarios
  - Working, reproducible configuration examples (YAML manifests) that users can directly apply

- Recommended Skills:
  - Technical writing
  - Kubernetes
  - Understanding of authentication/authorization concepts (JWT, OAuth2, etc.)
  - Git 

- Mentor(s):
  - Art Berger (@artberger, art.berger@solo.io)  
  - Nina Polshakova (@npolshakova, ninapolshakova@gmail.com)

- Upstream Issue: https://github.com/kgateway-dev/kgateway.dev/issues/725
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/13040ac0-7b51-48c1-bcd9-8e4e0cf4a905

### Kmesh

#### Integrating Kmesh into Headlamp UI

CNCF - Kmesh: Integrating Kmesh into Headlamp UI (2026 Term 2)

- Description: [Headlamp](https://headlamp.dev) is an open-source, extensible Kubernetes web UI offering easy cluster management, multi-cluster support, RBAC, and a plugin system for adding custom functionality. Users who work with Kmesh today have to switch back and forth between Headlamp (for general Kubernetes resource management) and CLI tools / `kubectl` (for Kmesh-specific inspection), which creates a fragmented workflow and a poor user experience. There is currently no simple visual way to view Kmesh resources, inspect waypoints and related components, understand overall mesh status, or troubleshoot issues quickly from within an interface users already use. This project proposes building a Headlamp plugin for Kmesh that brings Kmesh resources directly into the Headlamp UI, providing lightweight visibility of Kmesh resources alongside other Kubernetes resources. The full-featured Kmesh dashboard remains the place for advanced operations; the Headlamp plugin focuses on reducing context switching and improving ease of use for day-to-day workflows.
- Expected Outcome:
  - A Headlamp plugin (TypeScript/React) that registers Kmesh CRDs and surfaces them as first-class resources in the Headlamp UI.
  - List and detail views for core Kmesh resources (e.g., waypoints and eBPF map)
  - Visual indicators of mesh status: per-resource health, readiness, and recent Events; cluster-level summary of Kmesh components.
  - Inspection helpers: pretty-printed YAML, related-pod views, and quick links to associated workloads/services.
  - Documentation (README, screenshots, install guide) and a published plugin (Helm/manifest or Headlamp plugin registry entry).
  - Unit/component tests for the plugin and an end-to-end smoke test against a kind/minikube cluster running Kmesh.
- Recommended Skills:
  - Kubernetes (CRDs, RBAC, kubectl)
  - React / Next.js
  - TypeScript
  - Familiarity with Kmesh (or service mesh concepts in general)
  - Headlamp UI
- Mentor(s):
  - Yash Israni (yashisrani, imailyash57@gmail.com),
  - Jayesh Savaliya (jayesh9747, savaliyajayesh2405@gmail.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1658
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c5b8d1fa-b75a-4f88-a63b-e6487dc7e39b

### krkn - Chaos

#### Automated Documentation Sync Bot for Krkn-Chaos Projects

CNCF - krkn-chaos: Automated Documentation Sync Bot for Krkn-Chaos Projects (2026 Term 2)

- Description: The krkn-chaos/website repository hosts the unified documentation for the entire krkn-chaos ecosystem (krkn, krkn-hub, krknctl, krkn-ai, krkn-operator, cerberus, etc.) as a Hugo/Docsy site deployed at krkn-chaos.dev. Currently, when changes are made to any of these upstream projects — such as adding a new scenario, modifying configuration options, or updating CLI flags — someone must manually open a PR against the website repo to update the corresponding docs. This is tedious, easy to forget, and often leads to documentation drift where the docs no longer match the actual tool behavior. This issue proposes building a bot or GitHub Action-based workflow that detects documentation-impacting changes in upstream krkn-chaos repositories and automatically creates a draft PR on the website repo with the relevant documentation updates. The bot would analyze the scope of the change (e.g., new config fields, updated parameters, new scenario) and generate or update the corresponding Hugo content files, following the existing content structure and conventions (tabbed scenario layouts, parameter tables, etc.).
- Expected Outcome: 
  - Build a GitHub Action or bot that triggers on merged PRs in upstream krkn-chaos repos and automatically creates draft documentation PRs on the website repository following existing Hugo/Docsy content conventions.
  - Support common change types including new or updated config fields, CLI flag changes, new chaos scenarios, and modified parameter tables.
  - Enable interactive refinement of generated documentation PRs through review comments, similar to code review bots like CodeRabbit.

- Recommended Skills: Python, GitHub Actions/Workflows, Hugo static site basics, LLM, Agent development
- Mentor(s):
  - Rahul Shetty (@rh-rahulshetty , rashetty@redhat.com)
  - Naga Ravi Chaitanya Elluri (@chaitanyaenr , nelluri@redhat.com)
  - Darshan Jain (@ddjain , darjain@redhat.com)
- Upstream Issue: https://github.com/krkn-chaos/website/issues/320
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5b44929d-7570-43a7-80ea-474062b813fb

#### Dynamic Cluster-Aware Configuration Generation for Krkn-AI

CNCF - krkn-chaos: Dynamic Cluster-Aware Configuration Generation for Krkn-AI (2026 Term 2)

- Description: Krkn-AI's [discover command](https://krkn-chaos.dev/docs/krkn_ai/discover/) connects to a Kubernetes/OpenShift cluster and generates a static configuration file by enumerating cluster components (namespaces, pods, services, PVCs, nodes). While useful, the generated config still requires significant manual work before it can actually be used. Health check URLs are commented-out placeholders, the fitness function defaults to a single hardcoded PromQL query, and scenario selection is static regardless of what exists in the cluster. This issue proposes enhancing discover to produce a dynamic, cluster-aware configuration that is closer to runnable out-of-the-box. By inspecting routes, ingresses, services, and available Prometheus metrics during discovery, we can auto-populate health check URLs, suggest relevant fitness function queries scoped to discovered namespaces, and intelligently enable only the scenarios that apply to the discovered infrastructure.
- Expected Outcome: 
  - Auto-discover OpenShift Routes, Kubernetes Ingresses, and Services to populate health check URLs in the generated configuration.
  - Query Prometheus for available metrics to suggest namespace-scoped fitness function queries instead of hardcoded defaults.
  - Intelligently enable chaos scenarios based on discovered cluster components (e.g., PVC, VMI, network interfaces).

- Recommended Skills: Python, Kubernetes/OpenShift (client libraries, API concepts like Routes, Ingresses, Services), Prometheus/PromQL basics
- Mentor(s):
  - Rahul Shetty (@rh-rahulshetty , rashetty@redhat.com)
  - Naga Ravi Chaitanya Elluri (@chaitanyaenr , nelluri@redhat.com)
- Upstream Issue: https://github.com/krkn-chaos/krkn-ai/issues/188
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b89f3736-7588-4e64-9040-1235ed77155a

### Kuadrant

#### Implement AccessPolicy CRD for tool-level authorization in the Kuadrant agentic gateway

CNCF - Kuadrant: Implement AccessPolicy CRD for tool-level authorization (2026 Term 2)

- Description: Kuadrant's MCP Gateway is an Envoy-based gateway for Model Context Protocol (MCP) servers. It currently handles authentication and coarse-grained authorization via AuthPolicy/Authorino, but has no built-in mechanism for tool-level authorization, e.g., allowing agent A to call `add` and `subtract` on a math server while agent B can only call `subtract`. The kube-agentic-networking SIG is defining a standard AccessPolicy CRD for exactly this. MCP Gateway is well-positioned to implement it because its ext_proc already parses MCP request bodies and exposes tool metadata via headers (`x-mcp-method`, `x-mcp-toolname`, `x-mcp-servername`). This project will design how AccessPolicy maps to Kuadrant's AuthPolicy/Authorino, then build an experimental implementation covering CRD definition, a controller that translates tool-level authorization rules into Authorino configuration, identity model integration (starting with OIDC), `tools/list` response filtering so callers only see tools they're authorized to use, and CEL-based authorization expressions. The mentee will work closely with mentors on the design doc, pair on implementation decisions, and engage with both the Kuadrant and kube-agentic-networking communities.
- Expected Outcome:
  - Design document covering AccessPolicy-to-AuthPolicy/Authorino mapping, body parsing strategy (ext_proc vs Envoy MCP filter), identity model choices, `tools/list` filtering, and CEL-based authorization
  - AccessPolicy CRD with status conditions and CEL validation rules
  - Controller that watches AccessPolicy resources and generates/updates AuthPolicy resources with authorization rules based on `x-mcp-toolname` headers
  - OIDC identity source support, with consideration for ServiceAccount and SPIFFE identity types
  - `tools/list` response filtering so callers only see tools they are authorized to invoke
  - CEL-based authorization rule support (e.g., `request.mcp.tool_name.startsWith("read_")`)
  - E2E tests covering allow/deny scenarios for tool-level access control
  - Documentation guide in `docs/guides/`
- Recommended Skills:
  - Go (required)
  - Kubernetes basics (required)
  - Networking background or familiarity with HTTP/REST protocols
  - Interest in AI/agentic networking and protocols (MCP, A2A, others)
- Mentor(s):
  - David Martin (@david-martin, davmarti@redhat.com)
  - Guilherme Cassolato (@guicassolato, guicassolato@gmail.com)
- Upstream Issue: https://github.com/Kuadrant/mcp-gateway/issues/804
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d6231715-be24-40f0-b2a5-1b66652eb835

#### Investigate and prototype A2A protocol support in the Kuadrant agentic gateway project

CNCF - Kuadrant: Prototype A2A protocol support in the agentic gateway (2026 Term 2)

- Description: Kuadrant's MCP Gateway is an Envoy-based gateway for Model Context Protocol (MCP) servers that provides routing, policy enforcement, and tool federation. As the agentic ecosystem grows, we're looking to extend the gateway's capabilities beyond MCP to support other agentic protocols. The A2A (Agent-to-Agent) protocol is an emerging standard for inter-agent communication with capabilities like long-running tasks, streaming, and agent discovery via agent cards. This project will investigate how A2A support can be added to the gateway alongside MCP, then build a proof-of-concept demonstrating federated agent discovery and A2A request routing through the gateway. The mentee will work closely with mentors throughout — collaborating on the design doc, pairing on implementation decisions, and spiking on specific pieces as needed to validate assumptions early. They will also engage with the broader Kuadrant community through PR reviews, design discussions, and community calls.
- Expected Outcome:
  - Analysis of the A2A protocol with a gap assessment comparing A2A and MCP traffic patterns (request/response vs long-running tasks, push notifications, multi-modal artifacts)
  - Design document covering A2A routing through ext_proc, federated agent card serving in the broker, session handling implications, and CRD design
  - Federated agent card endpoint in the broker that aggregates upstream A2A agent cards
  - A2A request routing through the Envoy ext_proc path, with appropriate header handling and policy enforcement
  - CRD design (new resource or MCPServerRegistration extension) for registering A2A agents with the gateway controller
  - E2E tests demonstrating A2A agent discovery and task execution through the gateway
- Recommended Skills:
  - Go (required)
  - Kubernetes basics (required)
  - Networking background or familiarity with HTTP/REST protocols
  - Interest in AI/agentic networking and protocols (MCP, A2A, others)
- Mentor(s):
  - David Martin (@david-martin, davmarti@redhat.com)
  - Craig Brookes (@maleck13, cbrookes@redhat.com)
- Upstream Issue: https://github.com/Kuadrant/mcp-gateway/issues/766
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/530ba5e1-d3ac-4cbc-bad1-824683e97d1a

#### Investigate native Envoy MCP filter as replacement for ext-proc parsing in the Kuadrant agentic gateway

CNCF - Kuadrant: Native Envoy MCP filter as replacement for ext-proc parsing (2026 Term 2)

- Description: Kuadrant's MCP Gateway uses an Envoy external processor (ext_proc) to parse MCP JSON-RPC requests, extract metadata, rewrite request bodies, and route tool calls to backend MCP servers. This works but adds latency via a gRPC hop per request and requires maintaining custom MCP protocol parsing logic. Envoy has been rapidly adding native MCP support, as of v1.38, the Envoy MCP filter can parse MCP messages, populate dynamic metadata for downstream RBAC/ext_authz filters, handle session management, support SSE and Streamable HTTP transport, and aggregate multiple backend MCP servers. A previous investigation rejected the Envoy MCP filter due to missing body modification support, limited method coverage, and no aggregation, but the filter has since evolved considerably. This project will perform a fresh evaluation, produce a design document mapping each ext_proc responsibility to native Envoy capabilities, identify gaps (particularly around request body rewriting for tool prefix stripping and dynamic metadata consumption by Authorino), build a proof-of-concept demonstrating the native filter approach, and propose an incremental migration path. The mentee will work closely with mentors on the design, validate assumptions through prototyping with standalone Envoy, and engage with both the Kuadrant and Envoy communities.
- Expected Outcome:
  - Design document covering capability mapping of each ext_proc responsibility to Envoy MCP filter features, body modification strategy, dynamic metadata vs header trade-offs for Authorino integration, federation/aggregation comparison, session management analysis, and Istio version dependency chain
  - Proof-of-concept demonstrating Envoy MCP filter parsing requests and populating metadata, downstream authorization consuming that metadata, and tool routing to multiple backends
  - Clear identification of what still requires custom code after migration
  - Proposed target architecture and incremental migration plan
  - E2E tests validating the prototype against existing test scenarios
  - Documentation of Istio version requirements and feature gates needed
- Recommended Skills:
  - Go (required)
  - Kubernetes basics (required)
  - Networking background or familiarity with HTTP/REST and Envoy proxy
  - Interest in AI/agentic networking and protocols (MCP, A2A, others)
- Mentor(s):
  - David Martin (@david-martin, davmarti@redhat.com)
  - TBD (@tbd, tbd@email)
- Upstream Issue: https://github.com/Kuadrant/mcp-gateway/issues/809
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1acff18b-c4da-4166-9a79-ceb8a8ad112b

#### Transform Kuadrant Policy YAML Editors into Interactive Form Views

CNCF - Kuadrant: Transform Policy YAML Editors into Interactive Form Views (2026 Term 2)

- Description: The Kuadrant Console Plugin provides a web interface for managing API gateway policies in OpenShift, but currently relies heavily on YAML editing for most policy types. While DNSPolicy and TLSPolicy already have user-friendly form-based interfaces with dual Form/YAML views, validation, and guided workflows, the remaining core policies (RateLimitPolicy, TokenRateLimitPolicy, AuthPolicy, Plan, and OIDC) still require users to manually write YAML. This creates a steep learning curve and error-prone configuration experience. This project aims to bring RateLimitPolicy, TokenRateLimitPolicy, AuthPolicy, Plan, and OIDC policies to feature parity with the existing DNS and TLS form implementations. Form designs will be provided by the Kuadrant team. The mentee will implement these designs as PatternFly-based form interfaces following the established patterns from the DNS and TLS policy forms. These forms will allow users to configure policies through validated form fields while maintaining the flexibility to switch to YAML view for advanced use cases. The forms must support both creation and editing of policies, include proper field validation, handle complex nested structures (such as rate limit configurations and authentication rules), and synchronize seamlessly between form and YAML representations using the same patterns already proven in the DNS and TLS implementations.

- Expected Outcome:
  - Form-based creation and editing interfaces for RateLimitPolicy, TokenRateLimitPolicy, AuthPolicy, Plan, and OIDC policies implemented using the same patterns, components, and structure as the existing DNSPolicy and TLSPolicy forms
  - Dual view toggle (Form View / YAML View) with bidirectional synchronization using js-yaml for all five policy types
  - Field validation following the established validation pattern covering required fields, numeric constraints, conditional dependencies, and Kubernetes resource naming conventions
  - PatternFly component integration matching existing forms: expandable sections for complex nested configurations, validated text inputs, dropdowns for enum fields, and reuse of gateway selection components
  - Policy-specific form fields for: rate limit units and counters (RateLimitPolicy), token-based rate limiting (TokenRateLimitPolicy), authentication strategies and credentials (AuthPolicy), plan tiers and quotas (Plan), and OIDC provider configurations (OIDC)
  - Error handling using the existing error modal and inline validation message patterns
  - Internationalization support for all form labels and validation messages using i18next following the existing localization structure
  - Both create (`/~new`) and edit (`/:name/edit`) routes for each policy type matching the DNS/TLS routing pattern
  - Unit and component tests covering form validation, YAML synchronization, and error states following the established testing patterns

- Recommended Skills: TypeScript, React, PatternFly framework, Kubernetes concepts (CRDs, policies, gateways), OpenShift Console SDK, dynamic plugin development, YAML parsing, form state management

- Mentor(s):
  - Rachel Lawton (@R-Lawton, rlawton@redhat.com)
  - Emma Roche (@emmaaroche, eroche@redhat.com)

- Upstream Issue: https://github.com/Kuadrant/kuadrant-console-plugin/issues/378
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/02638e62-0bba-40d9-bf8e-345b8ca46930

### KubeArmor

#### KubeArmor Supply Chain Security with SLSA Level 3 Compliance and OpenSSF Scorecard Hardening

CNCF - KubeArmor: Supply Chain Security with SLSA L3 and OpenSSF Scorecard Hardening (2026 Term 2)

- Description: KubeArmor is a runtime security engine that enforces zero-trust policies at the kernel level. As a security-critical project in the CNCF ecosystem, it must hold its own supply chain to the highest standards. This project focuses on two tightly related goals. First, achieving SLSA Level 3 compliance by auditing KubeArmor's build and release pipeline against the full SLSA L3 specification — covering hermetic builds, non-falsifiable provenance generation via SLSA GitHub Actions, and signed release attestations using cosign. KubeArmor already signs container images; this project closes the remaining gaps by following a strategy similar to KubeEdge's documented SLSA L3 journey. Second, improving KubeArmor's OpenSSF Scorecard rating by systematically addressing low-scoring checks - including Signed-Releases, Fuzzing (OSS-Fuzz integration), SAST (CodeQL), Pinned-Dependencies, and CII Best Practices. Also integrating the Scorecard GitHub Action into CI for continuous score tracking. The pre-task for mentee candidates will be submitting a pull request that enables and verifies the Signed-Releases check on KubeArmor's OpenSSF Scorecard, establishing a clear baseline before the full term begins.

- Expected Outcome:
  - Full SLSA Level 3 compliance for KubeArmor releases, with SLSA provenance attestations generated and published for each release artifact
  - Signed release artifacts (binaries, container images, SBOMs) verified end-to-end using cosign and SLSA verifier
  - Measurable improvement in KubeArmor's OpenSSF Scorecard aggregate score, with targeted checks resolved: Signed-Releases, Fuzzing, SAST (CodeQL integration), and Pinned-Dependencies
  - OpenSSF Scorecard GitHub Action integrated into KubeArmor's CI pipeline for automated, ongoing score tracking
  - A gap analysis document and follow-up GitHub issues capturing any remaining SLSA or Scorecard items for future contributors
  - Documentation covering the supply chain security posture: how to verify release provenance, how to reproduce builds, and how Scorecard checks are enforced

- Recommended Skills: Go, GitHub Actions, cosign, SLSA framework (slsa-github-generator), OpenSSF Scorecard, CI/CD pipelines, Git, Kubernetes

- Mentor(s):
  - Rishabh Soni (@rootxrishabh, risrock02@gmail.com)
  - Aryan Sharma (@Aryan-sharma11, aryan1126.sharma@gmail.com)
  - Ramakant Sharma (@rksharma95, ramakant@accuknox.com)
  - Barun Acharya (@daemon1024, barun1024@gmail.com)

- Upstream Issue:
  - https://github.com/kubearmor/KubeArmor/issues/1164
  - https://securityscorecards.dev/viewer/?uri=github.com/kubearmor/KubeArmor

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7fbac80e-bc33-4362-81fa-47950ef45bb2

### KubeEdge

#### Building an Edge-Cloud Collaborative Framework for Embodied AI Applications with KubeEdge

CNCF - KubeEdge: Edge-Cloud Collaborative Framework for Embodied AI Applications (2026 Term 2)

- Description: This project aims to explore how KubeEdge can support real-world embodied AI applications, where intelligent devices such as robots, inspection systems, or autonomous mobile platforms need to perceive, process, and respond in edge environments.
The mentee will select a representative embodied AI scenario and build an end-to-end edge-cloud collaboration solution with KubeEdge. The solution should cover device or data source access, edge-side data processing, lightweight AI inference, cloud-edge synchronization, and system behavior under unstable network conditions.
Through this project, the community will gain a reproducible reference implementation that demonstrates how KubeEdge can be used as the infrastructure foundation for embodied AI workloads.
- Expected Outcome:
  - Select a specific scenario related to embodied intelligence.
  - Set up the KubeEdge edge-cloud environment: complete the deployment and configuration of CloudCore and EdgeCore, enable edge node access, and verify status synchronization and basic communication capabilities.
  - Implement a closed loop for device access and edge AI inference: complete device or data source access, data collection, device status modeling, deployment of edge-side AI inference services, and inference result reporting.
  - Verify edge-cloud collaboration and edge autonomy: implement cloud-side model delivery, configuration updates, and data aggregation, and verify continuous edge operation and recovery synchronization under weak network or disconnected scenarios.
  - Provide reproducible engineering assets and evaluation documents, including architecture diagrams, KubeEdge configuration files, deployment and validation scripts, sample data, running instructions, and performance and reliability evaluation reports.
- Recommended Skills: Kubernetes, KubeEdge, Go, Python, Edge Computing, Edge AI
- Mentor(s):
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Chen Su (@ghosind, ghosind@gmail.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6755
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/6cc78cc8-721d-4ea9-9cbf-59f31fd02f25

#### Comprehensive Example Restoration for KubeEdge Ianvs: Phase III

CNCF - KubeEdge: Comprehensive Example Restoration for Ianvs: Phase III (2026 Term 2)

- Description: Ianvs serves as the KubeEdge SIG AI distributed benchmark toolkit. As more and more contributors running, KubeEdge Ianvs now has up to 30 examples, and the number is still increasing. KubeEdge Ianvs then faces mounting usability issues due to dependency evolution and validation mechanisms. As Python versions, third-party libraries, and Ianvs features advance, partial historical examples fail to execute. This has led to surging user-reported Issues from confused contributors, untested PRs breaking core functionality of legacy features, and severely outdated documentation misaligning with actual capabilities. Without systematic intervention, the example risks becoming obsolete for edge-AI developers and especially newcomers. We then try to resurrect Ianvs’ usability with a comprehensive example restoration.
- Expected Outcome:
  - Diagnose & fix bugs across examples, including dependency manifests, license scan, and runtime configurations.
  - Documentation Modernization, including revamp tutorials with reproducible step-by-step guides, publish developer-focused debugging playbooks for common failures. Write and upload the corresponding blog to the KubeEdge Website.
  - Advanced: Build a CI pipeline testing examples with GitHub Actions against multiple Python versions, critical Ianvs/upstream updates, and block PRs that break validated examples
- Recommended Skills: Python, Benchmark, KubeEdge-Ianvs, AI/ML
- Mentor(s):
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
  - hsj576 (@hsj576, sjhu21@m.fudan.edu.cn)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/230
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/123576ab-9c3a-4c63-a1b0-4f35c41845f2

#### Enabling Edge-Native Inference for Lightweight Large Language Models with KubeEdge

CNCF - KubeEdge: Edge-Native Inference for Lightweight LLMs (2026 Term 2)

- Description: This project focuses on validating KubeEdge as an edge-native infrastructure for lightweight large language model inference. As more AI services move from the cloud to edge devices, lightweight LLMs provide a practical way to reduce latency, protect data privacy, and support local intelligence under limited resources.
The mentee will deploy one or more lightweight LLMs on KubeEdge edge nodes and evaluate the complete workflow, including model packaging, workload scheduling, service exposure, lifecycle management, and performance measurement.
The project is expected to produce a practical reference for running generative AI workloads on edge nodes managed by KubeEdge.
- Expected Outcome:
  - Successfully deploy and run one or more small-parameter large models on KubeEdge edge nodes, and complete end-to-end inference workflow validation.
  - Explore deployment methods and best practices for managing lightweight model services based on KubeEdge.
  - Evaluate basic performance on edge devices, including startup time, memory usage, inference latency, and runtime stability.
  - Fix issues discovered during validation, and submit PRs to KubeEdge or related example repositories when necessary.
  - Publish a blog or document to kubeedge/website introducing how to deploy and run small-parameter large models based on KubeEdge.
  - Optional: complete example validation with a lightweight scenario, such as local Q&A, document summarization, or lightweight multimodal inference.
- Recommended Skills: Kubernetes, KubeEdge, Python, Go, LLM Inference, Edge AI, Model Deployment
- Mentor(s):
  - Chuanhao Jin (@DoisLONG, 15221580643@163.com)
  - Chen Su (@ghosind, ghosind@gmail.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6756
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4e2c706d-5a79-4816-acd8-8d5ca643a88a

#### Exploring AI PCs as KubeEdge-Managed Edge Nodes for Intelligent Workload Orchestration

CNCF - KubeEdge: AI PCs as Managed Edge Nodes for Workload Orchestration (2026 Term 2)

- Description: This project explores how AI PCs can be integrated into the KubeEdge ecosystem as a new type of edge node. With built-in heterogeneous computing capabilities such as CPUs, GPUs, and NPUs, AI PCs are becoming suitable platforms for local AI inference, privacy-sensitive applications, and low-latency intelligent services.
The mentee will connect one or more AI PCs to KubeEdge, deploy representative AI workloads, and explore resource monitoring and workload orchestration patterns for AI PC environments.
The project will summarize practical experience and provide reference documentation for using KubeEdge to manage AI PCs as edge computing infrastructure.
- Expected Outcome:
  - Connect one or more AI PCs to KubeEdge as edge nodes and verify their basic management capabilities.
  - Deploy and run representative AI workloads on AI PCs through KubeEdge, such as lightweight large model inference, vision models, or multimodal services.
  - Explore monitoring methods for local resources and AI-related metrics on AI PCs, such as CPU/GPU/NPU utilization, memory usage, and inference service health status.
  - Summarize best practices for workload deployment, resource management, and edge-cloud collaboration for AI PCs.
  - Fix issues discovered during validation, and submit PRs to KubeEdge, example repositories, or related documentation when necessary.
  - Publish a blog or document to kubeedge/website introducing how to use AI PCs together with KubeEdge.
  - Optional: explore an example scenario combining cloud-side collaboration and device-side inference, focusing on low-latency or privacy-sensitive tasks.
- Recommended Skills: Kubernetes, KubeEdge, Edge AI, AI PC, Heterogeneous Computing, Resource Monitoring, Python, Go
- Mentor(s):
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6757
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/39438a1c-0d94-41d6-9363-d5901f85cae8

#### Exploring Alternatives to iptableManager: Optimizing Edge-Cloud Request Forwarding via Apiserver Redirection to cloudcore

CNCF - KubeEdge: Alternatives to iptableManager via Apiserver Redirection (2026 Term 2)

- Description: Currently, in KubeEdge, the cloudstream component utilizes iptables to redirect requests from the apiserver intended for the edge node's KubeletEndpoint to port 10003 of the cloudcore to which that edge node is connected. The request is then routed through cloudstream to edgestream, ultimately accessing the KubeletEndpoint port on the edged. This requires the iptableManager to use iptables for interception and forwarding every 10 seconds. Since this mechanism depends on iptables, a proposal has been made to explore whether it's possible to have the Apiserver redirect to cloudcore directly, thereby replacing the iptableManager.
- Expected Outcome:
  - Submit a design proposal.
  - Complete the feature development and ultimately meet the requirements for merging the code into the main repository.
- Recommended Skills: Go, Kubernetes, Client-go
- Mentor(s):
  - Zhijia Yang (@luomengY, 2938893385@qq.com)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6754
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9838c889-671f-4b1e-a17f-d1a4c4f9279e

### Kubernetes

#### Headlamp

##### Add Agones to Headlamp: Kubernetes Game Server Management UI

CNCF - Kubernetes: Add Agones to Headlamp - Game Server Management UI (2026 Term 2)

- Description:
 Agones is a Kubernetes-native platform for hosting, running, and scaling dedicated game servers. This project builds a Headlamp plugin that adds an **Agones** section to Headlamp, surfacing Agones CRDs so operators can **view and manage game servers, fleets, and allocations** from the Headlamp UI. The plugin follows Headlamp UX patterns with list and detail views, links between related resources, and visibility into lifecycle and allocation state.

- Expected Outcome:
  - Plugin exposes key Agones CRDs: GameServer, Fleet, GameServerSet.
  - List views, with summary columns (name, namespace, state, address, port, node, replicas).
  - Detail pages, showing config, status conditions, lifecycle state, and sub-resources (game server pods).
  - Relational navigation, fleet → game servers; game server → fleet.
  - Consistent Headlamp UX, icons, tables, detail layouts, Map view enhancements.
  - Structured config display (collapsible sections/YAML toggle), humanized lifecycle states (Ready, Allocated, Shutdown).
  - README with prerequisites and limitations; blog post demoing usage.

- Recommended Skills:
  - TypeScript and React
  - (Optional) Familiarity with Kubernetes CRDs and Operators
  - (Optional) Understanding of game server lifecycle and scheduling concepts
  - (Optional) UX design sensibilities

- Mentor(s):
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)
  - Mark Mandel (@markmandel, mark@compoundtheory.com)
  - Thomas Lacroix (@lacroixthomas, thomas.lacroix@epitech.eu)

- Upstream Issue:  
  https://github.com/kubernetes-sigs/headlamp/issues/5261

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7b09c151-5b46-4c15-9146-6701e177b8d1

##### Add Argo CD to Headlamp: GitOps Application Management UI

CNCF - Kubernetes: Add Argo CD to Headlamp - GitOps Application Management UI (2026 Term 2)

- Description:
  [Argo CD](https://github.com/argoproj/argo-cd) is a Kubernetes-native GitOps continuous delivery tool for managing application deployments from Git. This project builds a Headlamp plugin that integrates Argo CD concepts directly into Kubernetes workflows by extending the **Projects view**. The plugin surfaces high-level GitOps signals (applications, sync status, health, revisions) so SREs, operators, and developers can understand deployment state.

- Expected Outcome:
  - Extend **Projects view** to include Argo CD context per project.
  - Show associated Argo CD Applications with:
    - Sync Status (Synced / OutOfSync)
    - Health Status (Healthy / Degraded)
    - Current Revision (Git commit / branch)
  - Surface minimal GitOps context:
    - Source repository + revision
    - Target namespace / cluster
    - Deployment status summary
  - Lightweight UX enhancements:
    - GitOps status indicators (icons / badges)
    - Inline listing of related Applications
    - Links to Application detail pages and Kubernetes resources
  - Follow **Headlamp UX patterns**:
    - Tables, icons, detail layouts
    - Cross-resource navigation (Project → Application → Workloads)
  - README with prerequisites and limitations; blog post demoing usage.

- Recommended Skills:
  - TypeScript and React
  - (Optional) Familiarity with Kubernetes CRDs and controllers
  - (Optional) Understanding of GitOps concepts
  - (Optional) UX design sensibilities

- Mentor(s):
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)

- Upstream Issue:
  https://github.com/kubernetes-sigs/headlamp/issues/5260

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/09854509-4859-46ea-a5c8-36d9a55b8106

##### Add Kueue to Headlamp: Kubernetes Batch Queueing UI

CNCF - Kubernetes: Add Kueue to Headlamp - Batch Queueing UI (2026 Term 2)

- Description:
  - [Kueue](https://github.com/kubernetes-sigs/kueue) is a Kubernetes-native job queueing system for managing batch workloads and resource sharing across clusters. This project builds a Headlamp plugin that adds a **Kueue** section to kubernetes-sigs/Headlamp, surfacing Kueue CRDs so operators can **view and manage queues, workloads, and resource allocation** from the Headlamp UI. The plugin follows Headlamp UX patterns with list and detail views, links between related resources, and optional metrics embedding.
- Expected Outcome:
  - Plugin exposes key Kueue CRDs: ClusterQueue, LocalQueue, Workload (and related queueing resources).
  - List views, with summary columns (name, namespace, queue, priority, resources, status).
  - Detail pages, showing config, status conditions, queue placement, admitted workloads, and basic actions (pause/resume workloads, inspect queue state).
  - Relational navigation, clusterQueue → localQueues → workloads; workload → owning queue.
  - Consistent Headlamp UX, icons, tables, detail layouts, Map view enhancements.
  - Structured config display (collapsible sections/YAML toggle), humanized statuses, validated forms for mutating actions.
  - README with prerequisites and limitations; blog post demoing usage.

- Recommended Skills:
  - TypeScript and React
  - (Optional) Familiarity with Kubernetes CRDs and Operators
  - (Optional) Understanding of batch workloads and scheduling concepts
  - (Optional) UX design sensibilities

- Mentor(s):
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)
  - Kevin Hannon (@kannon92, kehannon@redhat.com)

- Upstream Issue: 
  https://github.com/kubernetes-sigs/headlamp/issues/5265

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d86084ff-9aa9-46bd-9bdc-a4dd4e294649

##### Add Metal3 to Headlamp: Kubernetes Bare Metal Management UI

CNCF - Kubernetes: Add Metal3 to Headlamp - Bare Metal Management UI (2026 Term 2)

- Description:
 [Metal3](https://metal3.io/) is a Kubernetes-native project for managing bare metal hosts using Kubernetes APIs and operators. This project builds a Headlamp plugin that adds a Metal3 section to Headlamp, surfacing Metal3 CRDs so operators can view and manage bare metal hosts, provisioning states, and infrastructure resources from the Headlamp UI. The plugin follows Headlamp UX patterns with list and detail views, links between related resources, and optional metrics embedding.

- Expected Outcome:
  - Plugin exposes key Metal3 CRDs: BareMetalHost, Provisioning, HardwareData, and related resources.
  - List views, with summary columns (name, namespace, status, provisioning state, power state, hardware profile).
  - Detail pages, showing config, status conditions, hardware data, sub-resources (BMC info, NICs, disks), and basic actions (power on/off, reprovision).
  - Relational navigation, cluster → hosts; host → provisioning state and hardware data.
  - Consistent Headlamp UX, icons, tables, detail layouts, Map view enhancements.
  - Structured config display (collapsible sections/YAML toggle), humanized statuses, validated forms for mutating actions.
  - README with prerequisites and limitations; blog post demoing usage.

- Recommended Skills:
  - TypeScript and React
  - (Optional) Familiarity with Kubernetes CRDs and Operators
  - (Optional) Knowledge of bare metal provisioning concepts (BMC, PXE, Ironic)
  - (Optional) UX design sensibilities

- Mentor(s):
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)
  - Ádám Rozmán (@Rozzii, adam.rozman@est.tech)

- Upstream Issue:
 https://github.com/kubernetes-sigs/headlamp/issues/5268

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/dbf009dd-6eed-4c15-b6fc-391c0bc418dc

##### Add Tinkerbell to Headlamp: Bare Metal Provisioning UI

CNCF - Kubernetes: Add Tinkerbell to Headlamp - Bare Metal Provisioning UI (2026 Term 2)

- Description:
 [Tinkerbell ](https://tinkerbell.org/) is a CNCF sandbox project and a flexible bare metal provisioning engine that enables operators to provision and manage physical hardware using Kubernetes-style declarative workflows.  
 This project builds a Headlamp plugin that adds a **Tinkerbell** section to Headlamp, surfacing Tinkerbell CRDs and resources so operators can view and manage hardware, workflows, and templates directly from the Headlamp UI.  It follows Headlamp UX patterns with list and detail views, resource relationships, and optional workflow status visualization to make bare metal operations easier to understand and control.
- Expected Outcome:
  - Plugin exposes key Tinkerbell CRDs: Hardware, Workflow, Template, and related resources.
  - List views, with summary columns (name, namespace, hardware state, workflow status, last action).
  - Detail pages, showing spec/config, status, workflow steps, execution logs, and associated hardware.
  - Workflow visualization, showing steps and current execution state of provisioning pipelines.
  - Relational navigation, hardware → workflows; workflow → templates and actions.
  - Consistent Headlamp UX, icons, tables, detail layouts, Map view enhancements for hardware resources.
  - Structured config display (collapsible sections/YAML toggle), humanized statuses, and safe action triggers (e.g. retry workflow).
  - README with prerequisites and limitations; blog post demoing bare metal provisioning workflows in Headlamp.

- Recommended Skills:
  - TypeScript and React
  - (Optional) Familiarity with Kubernetes CRDs and controllers
  - (Optional) Understanding of bare metal provisioning concepts
  - (Optional) Experience with infrastructure automation or Cluster API

- Mentor(s):
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Jacob Weinstock (@jacobweinstock, jakobweinstock@gmail.com)

- Upstream Issue:
  https://github.com/kubernetes-sigs/headlamp/issues/5262

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ef8fab6e-9b07-49cb-8d9d-836491fe8e69

#### SIG Node / node-readiness-controller

##### Advanced Observability: Per-Rule Metrics and Headlamp Plugin

CNCF - Kubernetes: Per-Rule Metrics and Headlamp Plugin for node-readiness-controller (2026 Term 2)

- Description: As clusters grow, understanding why a node is not "Ready" becomes complex. This project aims to improve visibility into the `node-readiness-controller`'s operations by enhancing its Prometheus metrics and providing a visual interface. The mentee will extend the internal metrics system to expose granular data for individual `NodeReadinessRule` objects and taint states. Additionally, the mentee will develop a plugin for Headlamp (the extensible Kubernetes UI) to visualize these readiness rules, showing real-time “node-availability” status and failure reasons directly in the dashboard.
- Expected Outcome: New Prometheus metrics (e.g., rule evaluation duration, per-rule pass/fail counts); a functional Headlamp plugin for the project; and a pre-configured Grafana dashboard template.
- Recommended Skills: Go, Prometheus, TypeScript/React (for the Headlamp plugin).
- Mentor(s):
  - Avinesh Tripathi (@AvineshTripathi, avineshtripathi1@gmail.com)
  - Karthik K N (@Karthik-K-N, karthikkn1997@gmail.com)
  - Ajay Sundar Karuppasamy (@ajaysundark, ajaysundar.k@gmail.com)
- Upstream Issue: [sigs.k8s.io/node-readiness-controller#182](https://github.com/kubernetes-sigs/node-readiness-controller/issues/182)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2d006047-8e79-446f-97f5-ceec8e52ea00

##### Scalability Testing and Release Reliability

CNCF - Kubernetes: Scalability Testing & Release Reliability (2026 Term 2)

- Description: For a controller that manages node readiness, reliable performance at scale is critical. This project aims to improve the project's test framework across three key areas: building a comprehensive scale-test suite using `kwok` to simulate clusters with 1,000+ nodes, hardening the release pipeline to automate versioning and promotion to [`registry.k8s.io`](https://registry.k8s.io), and refactoring the E2E test suite in `test/e2e` to be environment-agnostic and more reliable.
- Expected Outcome: A scalable test harness using `kwok`; automated Prow job configurations; and a benchmark report detailing the controller's performance limits.
- Recommended Skills: Kubernetes, Prow, kwok, Go, Shell scripting.
- Mentor(s):
  - Karthik K N (@Karthik-K-N, karthikkn1997@gmail.com)
  - Priyanka Saggu (@Priyankasaggu11929, priyankasaggu11929@gmail.com)
  - Ajay Sundar Karuppasamy (@ajaysundark, ajaysundar.k@gmail.com)
- Upstream Issue: [sigs.k8s.io/node-readiness-controller#151](https://github.com/kubernetes-sigs/node-readiness-controller/issues/151)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/052329cb-9237-4950-90b2-78461302f8af

### Kubescape

#### CEL rule engine support and Rego-to-CEL control migration

CNCF - Kubescape: CEL rule engine support and Rego-to-CEL control migration (2026 Term 2)

- Description: Kubescape evaluates compliance controls using OPA/Rego today, while Kubernetes has shipped native `ValidatingAdmissionPolicy` / `MutatingAdmissionPolicy` resources that use CEL expressions. The [`kubescape/cel-admission-library`](https://github.com/kubescape/cel-admission-library) project already ships a growing set of Kubescape controls as VAP resources, but Kubescape cannot evaluate them locally — so a resource passing `kubescape scan` may still fail the cluster's admission controller. This project adds a native CEL evaluation engine to Kubescape (running alongside Rego), using the same `ValidatingAdmissionPolicy` YAML format and `google/cel-go` library that Kubernetes uses internally. With the same rule expression evaluated in both places, Kubescape becomes directly comparable to — and competitive with — Kyverno for teams wanting a single policy language across CI, runtime scanning, and admission enforcement. A sample of existing Rego controls are then converted to CEL as proof-of-concept, validating the conversion pattern end-to-end.
- Expected Outcome:
  - New `CELLanguage` rule type dispatched from the existing `runOPAOnSingleRule()` extension point in `core/pkg/opaprocessor/processorhandler.go`.
  - `runCELOnK8s()` implementation: loads `ValidatingAdmissionPolicy` YAML from `cel-admission-library`, evaluates with `google/cel-go` in a VAP-compatible environment (`object`, `params`, stubbed `request`), maps violations to `reporthandling.RuleResponse`.
  - Equivalence guarantee documented: for `object`-scoped rules, `kubescape scan` and the cluster admission controller produce identical results. Known gap (`authorizer`, `request.userInfo`) documented.
  - 10–20 existing regolibrary (Rego) controls converted to CEL and contributed to `cel-admission-library` as `ValidatingAdmissionPolicy` resources, with a conversion guide for future contributors.
  - Unit and integration tests; end-to-end verification showing a converted control evaluated identically by Kubescape and a live VAP on a real cluster.
- Recommended Skills: Go, Kubernetes (CEL, ValidatingAdmissionPolicy, client-go), familiarity with OPA/Rego a plus.
- Mentor(s):
  - Matthias Bertschy (@matthyx, matthias.bertschy@gmail.com) - primary
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: [kubescape/kubescape#2001](https://github.com/kubescape/kubescape/issues/2001)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/01e645f6-b673-4b8e-8874-a446bb79c501

#### In-cluster, GitOps-native SecurityException CRD for Kubescape, with Headlamp plugin support

CNCF - Kubescape: GitOps-native SecurityException CRD with Headlamp plugin support (2026 Term 2)

- Description: Kubescape today has no declarative, in-cluster mechanism for posture/compliance exceptions — they only come from JSON files or the ARMO cloud API, which blocks GitOps-native workflows and air-gapped clusters. A design for a `SecurityException` / `ClusterSecurityException` CRD (group `kubescape.io/v1`) already exists and covers both vulnerability and posture exceptions in a single resource with OpenVEX-compatible fields, label/namespace/image selectors, CEL validation, and Kubernetes Events for observability. The kubevuln (vulnerability) side is being implemented by the maintainers; this project focuses on the kubescape (posture) side, the operator rescan integration, and surfacing exceptions in the Kubescape Headlamp plugin so users can view and manage them from the UI.
- Expected Outcome:
  - New `CRDExceptionsGetter` implementing `IExceptionsGetter` in kubescape, wrapping the existing getter and merging CRD posture entries (`SecurityException → armotypes.PostureExceptionPolicy`).
  - Match-field conversion: `resources`, `objectSelector`, and `namespaceSelector` mapped to `PortalDesignator` attributes; cloud-vs-CRD precedence per the design (cloud wins on overlap).
  - `expiresAt` evaluated at scan time; scan-time Kubernetes Events emitted on matched SecurityException resources.
  - Operator `SecurityExceptionWatchHandler` watching both kinds with a debounced `CooldownQueue`, dispatching rescans on changes.
  - CRD manifests with CEL validation rules merged into the Helm chart.
  - Headlamp plugin additions: list/view `SecurityException` and `ClusterSecurityException` resources, show matched findings/events, and a guided form to create new exceptions from a failing control or CVE on a workload.
  - Unit + integration tests for the Go side, plugin tests for the UI, and end-to-end verification against a running cluster.
- Recommended Skills: Go, Kubernetes (controllers, CRDs, client-go / controller-runtime, dynamic client), TypeScript/React (for the Headlamp plugin).
- Mentor(s):
  - Matthias Bertschy (@matthyx, matthias.bertschy@gmail.com) - primary
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: [kubescape/kubescape#1982](https://github.com/kubescape/kubescape/issues/1982)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/207232a3-a41f-481b-bd8d-4838dcf1f37c

### KubeSlice

#### KubeSlice Controller HA (Active/Standby) Support

CNCF - KubeSlice: Controller HA (Active/Standby) Support (2026 Term 2)

- Description: Add Active/Standby HA support for the KubeSlice Controller.
  - Leader election: Only one controller cluster (the “Active” node) holds a distributed lock (e.g., a Lease) and is permitted to write updates to worker clusters or manage Slice configurations.
  - Constant state sync: The Standby cluster continuously mirrors the Active cluster’s state, including relevant KubeSlice CRDs (Slices, ServiceExports, Clusters, etc.).
  - Heartbeating: The Standby cluster monitors the health of the Active cluster.
  - Failover: If the Active cluster fails to renew its lease, the Standby cluster detects the timeout, acquires the lock, promotes itself to Active, and worker clusters are updated to use the new Active controller.
- Expected Outcome: Implement an Active/Standby HA architecture that makes the KubeSlice management plane resilient and disaster-recovery-ready.
- Recommended Skills: Go, Kubernetes (controllers, CRDs, client-go)
- Mentor(s):
  - Gourish Biradar (email: biradar.gourish@gmail.com, github: gourishkb) , Prabhu Navali (email: prabhu@avesha.io, github: pnavali), Rahul Kumar (email: rahulparida933@gmail.com, github: Rahul-D78)
- Upstream Issue(s):
  - https://github.com/kubeslice/kubeslice-controller/issues/305

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f33a330a-a4e8-4e53-b354-2b976689ce40

#### Partial Mesh Support (MVP: Hub-and-Spoke)

CNCF - KubeSlice: Partial Mesh Support (MVP: Hub-and-Spoke) (2026 Term 2)

- Description: Add partial mesh support to KubeSlice using a small-scope MVP topology: **Hub-and-Spoke**. Users can define one (or two) hub clusters for a slice; the controller computes desired connections so only hub↔spoke links are established (no spoke↔spoke), and workers reconcile connectivity accordingly. Includes status reporting for convergence and failure reasons.
- Expected Outcome: Users can create a slice with hub-and-spoke partial mesh topology and see it converge across multiple worker clusters. Topology updates (e.g., changing the hub) rewire connections safely. Slice/worker status surfaces readiness and errors for debugging.
- Recommended Skills: Go, Kubernetes (CRDs, controllers, client-go)
- Mentor(s):
  - Gourish Biradar (email: biradar.gourish@gmail.com, github: gourishkb) , Prabhu Navali (email: prabhu@avesha.io, github: pnavali), Rahul Kumar (email: rahulparida933@gmail.com, github: Rahul-D78)
- Upstream Issue(s):
  - https://github.com/kubeslice/kubeslice-controller/issues/306

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0daa13c2-8a4b-4dd0-8520-20f20de2e580

### KubeStellar

#### AI-driven bug discovery and remediation architect for KubeStellar Console

CNCF - KubeStellar: AI-driven bug discovery and remediation architect for Console (2026 Term 2)

- Description: The KubeStellar Console (console.kubestellar.io) has GA4 error tracking that surfaces JavaScript errors, failed API calls, and rendering failures in production — but no one systematically triages or investigates them. Common issues include undefined data guards causing crashes, stale WebSocket state showing outdated cluster data, chunk load failures on deployments, and silent error swallowing that hides failures behind blank cards. This project takes a novel approach: the mentee acts as a bug discovery architect, designing investigation strategies, analyzing production error data, and directing an AI coding agent (an advanced AI coding agent) to audit code paths, identify defects, and propose validated fixes with regression tests. The mentee is evaluated on bugs found, bugs fixed, reduction in production error rates, and quality of the automated bug-hunting workflows they create — not on lines of code manually written. Critically, the mentee builds autonomous GitHub Actions workflows that continuously find and fix bugs after the mentorship ends. This includes a weekly automated bug sweep that uses an AI agent to scan the codebase for new error patterns, unsafe access, and missing guards — auto-filing issues for each finding. A GA4 error regression workflow compares error rates week-over-week and auto-files issues when a category spikes. An auto-triage workflow triggers an AI agent to investigate new GA4 errors, reproduce them, and propose fix PRs. The mentee also builds a public Console Quality Dashboard tracking error trends, bug fix rates, and open issues, and presents findings at KubeStellar community calls at midpoint and end of term. Note: this program is independent from the companion "test coverage architect" program — this role focuses exclusively on production error analysis, bug discovery, GA4 data, and quality dashboards. It does not involve test infrastructure, coverage metrics, or CI pipeline work. The two programs have separate mentees, separate deliverables, and no overlapping scope. Prerequisite: access to and license for an advanced AI coding agent capable of autonomous multi-file code generation.
- Expected Outcome: Triage and root-cause analysis of all existing GA4 errors, >=25 bugs discovered/filed/fixed with regression tests, >=50% reduction in production GA4 error rate, weekly automated bug sweep GitHub Actions workflow using AI agent to scan for error patterns and auto-file issues, GA4 error regression workflow that auto-detects week-over-week spikes, auto-triage workflow that investigates new errors and proposes fix PRs via AI agent, public Console Quality Dashboard tracking error trends and bug fix rates, improved error states across all card types (blank cards replaced with actionable messages), documented bug-hunting playbook for future contributors, 2 community call presentations (midpoint + final).
- Recommended Skills: Analytical mindset for error triage and root cause analysis, basic familiarity with React/TypeScript and web error handling, experience using advanced AI coding agents, familiarity with GitHub Actions and browser developer tools, understanding of Kubernetes concepts helpful but not required.
- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Ghanshyam Singh (@ghanshyam2005singh, ghanshyam2005singh@gmail.com)
- Upstream Issue: https://github.com/kubestellar/console/issues/4190
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/fa8a2bf8-3dba-4ce5-a0b1-ba9ee116a919

#### AI-driven operational knowledge base and mission control testing for KubeStellar Console

CNCF - KubeStellar: AI-driven operational KB and mission control testing for Console (2026 Term 2)

- Description: KubeStellar Console's mission control feature uses an AI assistant backed by a knowledge base (console-kb) to help users perform operational tasks — installations, upgrades, troubleshooting, and multi-cluster sync fixes. The knowledge base needs comprehensive, validated operational content, and the full mission control pipeline (user question → KB lookup → command generation → cluster execution) needs end-to-end testing to ensure generated commands actually work. The mentee acts as an operational knowledge architect, using an AI coding agent (an advanced AI coding agent) to generate runbooks, installers, YAML templates, and troubleshooting fixes, then tests the complete mission control execution loop against real clusters. Critically, the mentee builds autonomous GitHub Actions workflows that nightly re-validate all KB operational content against live clusters, auto-filing issues when content goes stale, commands fail, or prerequisites change. The mentee also builds a feedback loop tracking which user queries return no results or bad results, auto-generating drafts for missing content. The mentee presents their findings at KubeStellar community calls at midpoint and end of term. Note: this program is independent from the companion "test coverage architect" and "bug discovery" programs — this role focuses exclusively on operational knowledge content, mission control pipeline validation, and KB coverage. It does not involve UI test infrastructure, coverage metrics, production error analysis, or GA4 data. The three programs have separate mentees, separate deliverables, and no overlapping scope. Prerequisite: access to and license for an advanced AI coding agent capable of autonomous multi-file code generation.
- Expected Outcome: Runbooks covering all common operations (install, upgrade, rollback, disaster recovery, multi-cluster sync failures), library of validated YAML templates and fixes for known issues, end-to-end mission control pipeline tests (user query → KB → command generation → successful cluster execution), nightly GitHub Actions workflow that re-validates all KB content against live clusters and auto-files issues on failures, KB gap analysis with auto-generated drafts for missing content, >=90% of KB operational content validated as working on current KubeStellar versions, documented KB contribution guide for future contributors, 2 community call presentations (midpoint + final).
- Recommended Skills: Familiarity with Kubernetes operations (kubectl, helm, YAML), technical writing ability for operational documentation, experience using advanced AI coding agents, familiarity with GitHub Actions and CI/CD, understanding of multi-cluster Kubernetes concepts helpful but not required.
- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
- Upstream Issue: https://github.com/kubestellar/console/issues/4196
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a0fbeeef-f240-4c9f-8941-24a9c861001a

#### AI-driven test coverage architect for KubeStellar Console

CNCF - KubeStellar: AI-driven test coverage architect for KubeStellar Console (2026 Term 2)

- Description: The KubeStellar Console (console.kubestellar.io) is the web dashboard for the KubeStellar multi-cluster platform. It currently has minimal automated test coverage — Playwright E2E tests exist but are flaky and not CI-blocking, and component-level tests are sparse. UI regressions, broken cards, and auth flow failures are caught manually or not at all. This project takes a novel approach: the mentee acts as a test architect, defining coverage goals, test plans, and acceptance criteria, then directs an AI coding agent (an advanced AI coding agent) to generate, iterate on, and validate the test suite. The mentee is evaluated on test design quality, coverage achieved, and bugs discovered — not on lines of code manually written. Work includes designing test matrices (browsers, screen sizes, demo vs live mode, error states), building Playwright E2E and Vitest component tests, stabilizing flaky tests to become CI-blocking, and — critically — building autonomous GitHub Actions workflows that continuously improve test coverage after the mentorship ends. This includes a workflow that detects untested new components in PRs and auto-generates test PRs via AI agent, a nightly test health workflow that detects flaky tests and auto-files issues, and a coverage regression gate that blocks PRs dropping below threshold. The mentee presents their testing strategy and results at KubeStellar community calls at midpoint and end of term. Note: this program is independent from the companion "bug discovery and remediation" program — this role focuses exclusively on test infrastructure, coverage automation, and CI pipelines. It does not involve production error analysis, GA4 data, or bug triage. The two programs have separate mentees, separate deliverables, and no overlapping scope. Prerequisite: access to and license for an advanced AI coding agent capable of autonomous multi-file code generation.
- Expected Outcome: Playwright E2E tests covering 15-20 core user flows, Vitest component tests for all 30+ card types, test matrix covering 3 browsers x 2 screen sizes x 2 modes (demo/live), all E2E tests stable enough to be CI-blocking, coverage dashboard with >=70% target, >=15 bugs discovered and filed, GitHub Actions workflow that auto-generates tests for new untested components via AI agent, nightly test health workflow that detects flaky tests and auto-files issues, coverage regression gate blocking PRs that drop coverage, documented test authoring guide for future contributors, 2 community call presentations (midpoint + final).
- Recommended Skills: Test design and quality assurance principles, basic familiarity with React/TypeScript, experience using advanced AI coding agents, familiarity with GitHub Actions, understanding of Kubernetes concepts helpful but not required.
- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Arpit Srivastava (@Arpit529Srivastava, arpitsrivastava529@gmail.com)
- Upstream Issue: https://github.com/kubestellar/console/issues/4189
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/390bbb3a-e49d-4c1d-8b45-331f34a26e51

### KubeVela

#### LRU Cache Eviction for the Native Helm Provider

CNCF - KubeVela: LRU Cache Eviction for the Native Helm Provider (2026 Term 2)

- Description: KubeVela's native Helm provider currently uses a plain `sync.Map` to cache fetched charts on the controller, keyed by chart-version with TTL-based expiry (24h immutable / 5m mutable). Because the reconciler is stateless and re-renders every Application on every 5-minute resync, this cache sits on the hot path for every reconcile. At scale — 100+ Applications consuming different charts — the unbounded `sync.Map` grows monotonically until the controller pod is OOM-killed. Parsed `*chart.Chart` Go objects are 2–10MB each, so 200 cached charts can mean 1–2GB of memory with no eviction until TTL expires. Deleted Applications' charts also linger for the full TTL window, and there is no mechanism to reclaim memory under pressure. This mentorship will design and implement an LRU eviction layer with configurable byte-size limits, packaged as a generic, Helm-agnostic cache in `pkg/utils/cache/` so it can be reused by the workflow engine and other providers. The mentee will build a generic `LRUByteStore` on top of `hashicorp/golang-lru/v2` with per-entry TTL, byte accounting, and three eviction triggers: synchronous byte-pressure on `Put`, lazy TTL check on `Get`, and a periodic background sweep. The Helm provider will switch from caching parsed `*chart.Chart` objects to compressed `.tgz` bytes (~20–25× memory reduction), with `chartutil.Save` / `loader.LoadArchive` handled in the provider so the cache stays opaque. New controller flags (`--helm-cache-max-bytes`, `--helm-cache-sweep-interval`) will be wired through Helm chart values, and the immutable-version TTL extended from 24h to 30d now that LRU handles memory pressure. `OnEvicted` callbacks will feed Prometheus metrics for hits, misses (by reason), and current cache bytes. The result is a production-ready, reusable cache package that closes a real OOM risk in KubeVela deployments today, with hands-on exposure to Kubernetes controller patterns, Go concurrency, Helm internals, and CUE-driven configuration.
- Expected Outcome:
  - Generic `LRUByteStore` package in `pkg/utils/cache/` built on `hashicorp/golang-lru/v2`, with per-entry TTL, byte accounting, byte-pressure eviction on `Put`, lazy TTL check on `Get`, and a periodic background sweep
  - Helm provider migration from in-memory parsed `*chart.Chart` objects to compressed `.tgz` bytes (~20–25× memory reduction), with `chartutil.Save` / `loader.LoadArchive` encapsulated in the provider so the cache remains opaque
  - New controller flags `--helm-cache-max-bytes` (default 256MB) and `--helm-cache-sweep-interval` (default 60s), wired through Helm chart values; immutable-version TTL extended from 24h to 30d
  - Prometheus metrics fed by `OnEvicted` callbacks: cache hits, misses (by reason: expired/evicted/absent), and current cache bytes
  - Ginkgo/Gomega test suite covering TTL expiry, byte-pressure eviction order, oversized entries, concurrent access, OnEvict callback correctness, and clean goroutine shutdown
  - Migration of existing usages and documentation/sizing guidance for operators
- Recommended Skills:
  - Go (idiomatic Go, structs, interfaces, generics, `sync` primitives)
  - Kubernetes (controllers, reconcile loops, controller-runtime)
  - Helm (chart fetching, OCI/repo sources, `chartutil`, `loader`)
  - Caching concepts (LRU vs LFU, TTL, byte accounting, eviction triggers)
  - Testing in Go (Ginkgo/Gomega, table-driven tests, race detection)
  - Git and GitHub workflow (PRs, code review, rebasing)
  - Curiosity and follow-through on open-ended design problems
  - Async communication and open-source etiquette
  - Clear technical writing for design docs and user-facing documentation
- Mentor(s):
  - Ayush Kumar (@roguepikachu, ayushshyamkumar888@gmail.com)
  - Vishal Kumar (@vishal210893, vishal210893@gmail.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/7106
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e103d436-d906-413c-ae93-8aa4bffff377

#### Native Secret-Sourced HTTP Headers and CRD-Based Config Management with Server-Side Validation

CNCF - KubeVela: Secret-Sourced HTTP Headers and CRD-Based Config Management (2026 Term 2)

- Description: KubeVela's workflow engine and config management layer have two long-standing production gaps that this mentorship will close together. First, the `request` workflow step has no native way to source HTTP headers (bearer tokens, API keys, basic auth) from Kubernetes Secrets — users wanting to call authenticated APIs are forced to hardcode credentials directly in the workflow definition, where they end up visible in `kubectl get` output and Git history. On top of that, attempts to interpolate values into the `header` map using Go templates or CUE string interpolation regularly conflict with native CUE syntax, producing un-rendered strings or silent execution failures. Second, KubeVela's Config Management today stores `ConfigTemplate`s as labeled ConfigMaps (`config-template-*` prefix) and `Config`s as labeled Secrets — there are no proper Kubernetes API types (`kubectl get configs` returns nothing meaningful), and all CUE schema and `validation.$returns` checks run client-side in the `vela` CLI. Configs created through any other path (workflow steps, VelaUX, direct `kubectl apply`) bypass validation entirely, so the same template enforces different rules depending on the entry point. The mentee will tackle both. The first deliverable extends the HTTP provider in `kubevela/workflow` with a `headerFromSecret` field that resolves values from Kubernetes Secrets natively in Go (mirroring how the same provider already handles Secrets for `tlsConfig`), and exposes it as a first-class CUE parameter — bypassing the templating layer entirely. The second introduces a proper Kubernetes API group, `config.oam.dev/v1alpha1`, with `ConfigTemplate` and `Config` CRDs, event-driven controllers built on controller-runtime, and validating admission webhooks that move CUE validation server-side. Sensitive properties never live in the CRD — they sit in a separate Secret referenced via `propertiesFrom.secretRef`. A dual-read controller preserves full backward compatibility: legacy ConfigMap templates, old CLI versions, and existing Secret-based configs continue to work without disruption. Together, the two deliverables harden KubeVela's HTTP integration surface and modernize its configuration layer into a Kubernetes-native, GitOps-friendly API.
- Expected Outcome:
  - New `HeaderFromSecret` field on the `Request` struct in `pkg/providers/http/http.go` (kubevela/workflow), with native Secret resolution inside `runHTTP()` mirroring the existing `getTransport()` TLS pattern
  - Updated `request.cue` definition in kubevela/kubevela exposing `headerFromSecret` as a parameter, with namespace defaulting to `context.namespace`
  - New `config.oam.dev/v1alpha1` API group with `ConfigTemplate` and `Config` CRDs, DeepCopy, and scheme registration
  - `ConfigTemplateReconciler` that parses CUE templates and writes the generated OpenAPI schema to `status.schema`
  - `ConfigReconciler` that materializes `Config` CRDs into Secrets with `ownerRef`s for garbage collection, with dual-read fallback to legacy `config-template-*` ConfigMaps
  - Validating admission webhooks for both kinds, enforcing CUE schema validation, custom `template.validation.$returns` checks, CUE template syntax, and mutual exclusivity of `properties` and `propertiesFrom`
  - Updated `vela` CLI (`config-template apply/list/show/delete`, `config create/list/delete`) and workflow `config` provider operating on the new CRDs, with graceful fallback to the legacy code path
  - Comprehensive Go unit tests, envtest controller tests, webhook tests, and end-to-end tests with a mock echo server (HTTP) and live cluster (Config CRDs)
  - Backward-compatibility tests confirming legacy ConfigMap templates and Secret-based configs continue to work
  - Documentation: usage examples for `headerFromSecret`, migration guidance for the new Config API, and CRD reference
- Recommended Skills:
  - Go (idiomatic Go, structs, interfaces, error handling, `net/http`, `context`)
  - Kubernetes (Secrets, ConfigMaps, namespaces, RBAC, declarative API model)
  - CRDs, controllers, and admission webhooks (controller-runtime / Kubebuilder)
  - CUE — or willingness to learn quickly
  - Go testing (`testing`, table-driven tests, Ginkgo/Gomega, envtest)
  - Git and GitHub workflow (PRs, code review, rebasing)
  - Strong written communication and async collaboration
  - Interest in platform engineering, application delivery, and Kubernetes-native API design
- Mentor(s):
  - Chaitanya Reddy Onteddu (@Chaitanyareddy0702, chaitanyareddy0702@gmail.com)
  - Jerrin Francis (@jerrinfrancis, jerrinfrancis7@gmail.com)
- Upstream Issues:
  - https://github.com/kubevela/kubevela/issues/7104
  - https://github.com/kubevela/kubevela/issues/7105
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5af163e9-b465-45d5-8f14-c18421e66e07

### Kyverno

#### Address findings from the Kyverno CNCF TAG Security & Compliance and General Technical Review assessments

CNCF - Kyverno: Address findings from CNCF TAG Security & GTR assessments (2026 Term 2)

- Description: Kyverno recently completed two CNCF assessments: a security assessment by the CNCF TAG Security & Compliance group and a General Technical Review by the CNCF TOC Project Reviews subproject. Together they produced a set of findings spanning documentation, threat modeling, network policies, global context cache bounds, API server authentication, SAST tooling, API stability and non-goals, UX/adopter research, webhook cert issuance/rotation guidance, "safe-mode" / temporary disable patterns, SLOs/SLIs and alerting/runbooks, dependency lifecycle and SCA workflows, third-party notices, and the security response process. The findings are tracked in umbrella issues for each assessment. In this mentorship, the mentee will work through the open findings from **both** the TAG Security & Compliance assessment and the General Technical Review, propose and implement fixes across the Kyverno codebase, docs, and Helm charts, and help close out both assessments. Work includes implementing cache bounds for the Global Context, restricting Global Context access in namespaced policies, adding API server request authentication for the admission webhook, generating sample/network-policy templates and a CLI command to produce a Kyverno NetworkPolicy, integrating SAST tooling (e.g. semgrep, Nancy) into CI, updating the threat model and architecture diagrams, documenting core CRDs/API stability, webhook cert rotation, safe-mode/incident playbooks, SLOs/SLIs and reference dashboards, the SCA/dependency lifecycle workflow, and improving the security documentation on kyverno.io.
- Expected Outcome:
  - Resolve the open findings tracked in [kyverno/kyverno#15335](https://github.com/kyverno/kyverno/issues/15335) (TAG Security & Compliance assessment) and [kyverno/kyverno#15473](https://github.com/kyverno/kyverno/issues/15473) (General Technical Review assessment).
  - Implement Global Context cache bounds and access restrictions for namespaced policies (kyverno/kyverno#15359).
  - Add admission webhook authentication of requests from the API server.
  - Refresh the threat model (including CLI and other deployment options) and the architecture diagram to separate logical and physical components.
  - Document core CRDs/APIs and per-API-group stability policy, webhook cert issuance/rotation guidance, recommended "temporary disable" / safe-mode patterns, SLOs/SLIs with reference dashboards/runbooks, and the end-to-end dependency/SCA workflow.
  - Update the Kyverno security documentation: fix the audits page links, document risks of external data lookups, link to published security advisories, and link the current security response process.
  - Add tests covering the new behaviors and document the changes in the Kyverno docs site.
- Recommended Skills:
  - Go
  - Kubernetes (admission controllers, CRDs, NetworkPolicy, client-go / controller-runtime)
  - Familiarity with security concepts (threat modeling, SAST, webhook authentication)
  - Technical writing
  - Git workflows
- Mentor(s):
  - Shuting Zhao (@realshuting, shutingz@nirmata.com)
  - Cortney Nickerson (@CortNick, cortney.nickerson@nirmata.com)
- Upstream Issue: 
  - https://github.com/kyverno/kyverno/issues/15999
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3ca9c0e6-475d-4db6-87bd-fcab072ab7b0

#### Kyverno Technical Outcomes

CNCF - Kyverno: Technical Outcomes (2026 Term 2)

- Description:
On the Kyverno website, we want to introduce and document a set of technical outcomes that users can achieve by adopting Kyverno. These outcomes should group together Kyverno’s policy capabilities (validate, mutate, generate, verify images, cleanup) into clear, high-level goals that resonate with platform engineers, security teams, and developers.

Rather than focusing on individual features, this work will highlight what teams can accomplish with Kyverno in real-world environments.

Proposed technical outcomes include:
* Secure-by-Default Kubernetes – Enforce security and compliance policies across clusters automatically
* Policy-Driven Platform Engineering – Enable golden paths and self-service infrastructure using policy as code
* Automated Governance & Compliance – Continuously audit, report, and enforce organizational standards
* Software Supply Chain Security – Verify images, enforce provenance, and reduce risk in CI/CD pipelines
* Kubernetes Configuration Automation – Use mutation and generation to reduce manual configuration overhead
* Multi-Cluster Policy Management – Apply consistent governance across distributed and multi-cloud environments
* AI & Agent Governance – Apply policy controls to AI workloads and agent-driven infrastructure workflows

Each outcome should connect Kyverno capabilities to real-world use cases, supported by artifacts from the community such as blog posts, talks, policy examples, and reference architectures.

- Expected Outcome:
  * A new section of the Kyverno website dedicated to Technical Outcomes, where each outcome includes:
  * A clear description of the problem space and desired outcome
  * Mapping to Kyverno capabilities and policy types
  * Links to supporting resources (blogs, videos, talks, GitHub examples, policy libraries)
  * Optional diagrams or visual flows illustrating how Kyverno enables the outcome

This section should serve as:
* A learning and onboarding resource for new users
* A messaging bridge between technical features and business value
* A foundation for future content, including case studies, solution briefs, and AI-driven policy generation experiences

- Recommended Skills:
  * Technical writing and storytelling
  * Basic understanding of Kubernetes and cloud-native concepts
  * Familiarity with policy-as-code and/or security/compliance workflows (helpful but not required)
  * Willingness to learn Kyverno concepts and ecosystem
  * Experience with documentation or developer-focused content

- Mentor(s):
  - Cortney Nickerson (@CortNick, cortney.nickerson@nirmata.com)
  - Shuting Zhao (@realshuting, shutingz@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/15990
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a37b94f5-b609-48be-9c5c-68825b3b7a73

### Lima

#### Improve Windows support (host and guest)

CNCF - Lima: Improve Windows support (host and guest) (2026 Term 2)

- Description: Lima launches Linux virtual machines with automatic file sharing and port forwarding (similar to WSL2). Currently, Lima supports Linux, macOS, and FreeBSD as guest operating systems. The primary goal of this project is to expand this capability by adding support for Windows guests. Furthermore, the project aims to improve the stability and user experience of running Lima on Windows hosts. This will be achieved by removing dependencies like `cygpath.exe`, researching and developing a native Hyper-V(or a [HCS](https://learn.microsoft.com/en-us/virtualization/api/hcs/overview)) driver to provide optimized, native virtualization on Windows hosts.

- Expected Outcome:
  - Primary:
    - The ability to successfully launch and run Windows guest virtual machines using `limactl start template:windows` using the QEMU driver on any host.
    - Deliver a seamless installation experience on Windows hosts by automating configurations and eliminating the need for [manual setup notes](https://github.com/microsoft/winget-pkgs/pull/356038/changes#diff-9c16ba1b4e8cfc88d634b6cc436e0041d2201ac93e1d4fcd78fca09e0667ca3aR29)
    - Complete removal of the `cygpath.exe` dependency.
  - Secondary (if time permits):
    - Investigate and decide between Hyper-V and HCS for the native driver: HCS is the basis of WSL2 and may be available in Windows 11 Home Edition, while Hyper-V is only available in Pro/Enterprise editions. Research availability and integration feasibility.
    - Potentially integrate the chosen driver (Hyper-V or HCS) as an [external VM driver](https://lima-vm.io/docs/dev/drivers/).
  - Tertiary Goals (if time permits): Upgrade the existing WSL2 driver to drop image restrictions and allow users to run multiple instances, as well as exploring a simple graphical interface (`limagui.exe`) to launch virtual machines.

- Recommended Skills: Go, QEMU, Hyper-V, Windows Developer Environment, Systems programming

- Mentor(s):
  - Akihiro Suda (@AkihiroSuda, suda.kyoto@gmail.com)
  - Ansuman Sahoo (@unsuman, anshumansahoo500@gmail.com)

- Upstream Issues: https://github.com/lima-vm/lima/issues/4907
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f8bb0ffd-0c84-4cb9-8b66-ea63be76b6e2

### Meshery

#### Adapter for AI and LLMs

CNCF - Meshery: Adapter for AI and LLMs (2026 Term 2)

- Description: Meshery is the open source cloud native manager that empowers platform engineers to design and operate infrastructure. As infrastructure complexity grows, the need for intelligent assistance becomes critical. This project focuses on developing and enhancing a dedicated AI Adapter and AI Connections for Meshery. This adapter serves as the bridge between Meshery’s core orchestration engine and various Large Language Models (LLMs). The goal is to enable "Natural Language to Infrastructure" capabilities, allowing users to describe their architectural intent (e.g., "Deploy a highly available Kubernetes cluster on AWS with Prometheus monitoring") and have Meshery auto-generate the visual topology and configuration manifests. The intern will work on decoupling the AI logic from the core platform, allowing users to "Bring Your Own Key" (BYOK)—supporting both cloud-based providers (OpenAI, Anthropic) and local inference runners (Ollama, LocalAI).
- Recommended Skills:
  - Proficiency in Golang (Go) is essential, as Meshery’s backend is written in Go.
  - Familiarity with MCP Servers, REST APIs, LLM APIs (OpenAI, Vertex AI), local inference servers (Ollama).
  - Basic understanding of Kubernetes, Docker, and Infrastructure-as-Code (IaC) concepts.
  - Experience with REST, GraphQL, and gRPC.
  - Nice to have: Experience with React (for frontend integration in Meshery UI).
- Responsibilities:
  - Co-design and implement the interface for the AI Adapter in Go to communicate with the Meshery Server.
  - Implement support for connecting to local LLMs (via Ollama) to ensure data privacy for users who cannot send infrastructure data to the public cloud.
  - Improve the "System Prompt" and context-window management to feed the LLM relevant data regarding Meshery Models (schema definitions) so the AI generates valid infrastructure configurations.
  - Write unit and integration tests to ensure the reliability of the adapter.
  - Create user guides on how to configure the adapter with different AI providers.
- Expected Outcome:
  - A fully functional AI Adapter (or Connection) integrated into the Meshery ecosystem.
  - Demonstrable capability for users to swap between at least two different LLM providers (e.g., OpenAI vs. a local Llama 3 model).
  - Implementation of a feature where natural language queries result in a rendered design.
  - Merged pull requests (PRs) including code, tests, and documentation.
- Mentor(s):
  - Rian Cteulp (@ritzorama, rian.cteulp@gmail.com)
  - Lee Calcote (@leecalcote, leecalcote@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/19092
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/23c263a3-8575-4570-b602-87703a3cced1

#### Agentic CI Pipelines: GitHub Action Workflow Overhaul

CNCF - Meshery: Agentic CI Pipelines: GitHub Action Workflow Overhaul (2026 Term 2)

- Description: Meshery's CI/CD infrastructure spans a large and growing collection of GitHub Action workflows that have accumulated technical debt - inactive workflows, insecure patterns, and duplicated logic. This internship has two phases: first, a comprehensive audit and restructuring of existing workflows; second, the introduction of [GitHub Agentic Workflows](https://github.github.com/gh-aw/) to bring Continuous AI capabilities to Meshery's repository automation. Agentic Workflows allow automation to be defined in plain markdown and compiled into guardrailed GitHub Actions that run AI agents (Copilot, Claude, Codex) on schedule or in response to events - enabling automated CI failure triage, PR analysis, issue management, documentation maintenance, and compliance scanning with minimal human intervention.
- Recommended Skills: GitHub Actions workflow authoring, CI/CD concepts, YAML, supply chain security basics (secret hygiene, fork-safe triggers, pinned actions). Interest in AI-assisted automation is a plus.
- Responsibilities:
  - Audit all workflows in `meshery/meshery`, cataloging each by type, activity status, and identified issues (duplication, insecurity, staleness).
  - Produce a structured report with prioritized remediation recommendations, then implement accepted changes - consolidating redundant workflows and hardening insecure patterns.
  - Author workflow taxonomy definitions (security classification levels, workflow types) for the Meshery Build and Release docs.
  - Design and contribute agentic workflow definitions using the `gh aw` framework - covering CI failure diagnosis, PR feedback summarization, issue triage, and documentation consistency.
- Expected Outcome:
  - Measurably reduced and consolidated workflow set with no inactive or redundant workflows remaining.
  - Published audit report and workflow taxonomy added to docs.meshery.io.
  - A suite of agentic workflow definitions (`.md` + compiled `.lock.yml`) committed to the repository, demonstrating Continuous AI applied to Meshery's software delivery lifecycle.
- Mentor(s): Mia Grenell (@miacycle, mia.grenell2337@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com)
- Issue: https://github.com/meshery/meshery/issues/18795
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2ca5cf08-3206-4b21-88c8-e124f8766466

#### Meshery Models Support for OCI Registries

CNCF - Meshery: Meshery Models Support for OCI Registries (2026 Term 2)

- Description: Meshery Models are declarative representations of infrastructure, applications, and their relationships - the canonical artifacts through which Meshery understands and manages cloud native systems. Today, Meshery lacks a standardized, portable distribution mechanism for these models. OCI registries (Docker Hub, AWS ECR, GitHub GHCR, and others) have emerged as the universal artifact store for the cloud native ecosystem, and [ORAS](https://oras.land) (OCI Registry As Storage) provides the Go-native tooling to push and pull arbitrary artifacts to any OCI-compliant registry. This internship implements end-to-end OCI registry support for Meshery Models - from new Connection and Credential types for major registries, to ORAS-powered push/pull logic in the Meshery server, to a redesigned Registry page in the Meshery UI that gives users full visibility and control over their model artifacts across registries.
- Recommended Skills: Golang, REST API development, React. Familiarity with OCI image specifications, container registries, or ORAS is a plus. Experience with Meshery or other CNCF projects is welcomed but not required.
- Responsibilities:
  - Design and implement Connection and Credential types for Docker Hub, AWS ECR, GitHub GHCR, and additional OCI-compliant registries within Meshery's existing connection framework.
  - Implement Golang server-side logic using the ORAS SDK to push and pull Meshery Models (and their component schemas, relationships, and policies) to and from any OCI-compliant registry.
  - Define the OCI artifact media types, manifest structure, and layer conventions used to package Meshery Models for registry storage.
  - Enhance or rewrite the Registry page in Meshery UI to surface connected registries, browsable model artifacts, push/pull controls, and credential management.
  - Write integration tests covering push, pull, and round-trip fidelity of Meshery Models across at least two registry backends.
  - Document the new registry integration, artifact format, and UI workflows in Meshery's official documentation.
- Expected Outcome:
  - Meshery users can connect to Docker Hub, AWS ECR, GHCR, and other OCI registries using managed credentials and push or pull Meshery Models directly from the Meshery UI and `mesheryctl`.
  - A well-defined OCI artifact convention for Meshery Models, documented and suitable for adoption by the broader Meshery ecosystem.
  - A redesigned Registry UI page providing a unified, registry-agnostic interface for model artifact management.
- Mentor(s):
  - James Hortison (@hortison, james.hortison@layer5.io)
  - Lee Calcote (@leecalcote, leecalcote@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/19093
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ddccc7cc-e5b1-419e-825a-75be1f70aba2

#### Relationships and Solutions Architecture of Cloud Native Deployments

CNCF - Meshery: Relationships and Solutions Architecture of Cloud Native Deployments (2026 Term 2)

- Description: Meshery Models are declarative representations of infrastructure and applications. Within these models, Relationships define how different Components (e.g., Kubernetes resources, Cloud services) interact and depend on each other. These relationships are crucial for visualizing, understanding, and managing complex cloud native systems. This project focuses on expanding Meshery Relationships across a wide range of technologies, including Kubernetes and major cloud providers, to better model their interactions and improve user insights. There is a growing need to accurately model these relationships to provide better insights and control over deployments.
  The next phase focuses on Cloud Solution Architecture through workload design by creating and publishing Meshery designs that use the newly developed relationships to represent real-world deployments. These designs will be turned into structured tutorials with hands-on labs using Meshery Playground, offering step-by-step guidance and interactive learning. All content will be reviewed by maintainers and published in Meshery’s official documentation
- Responsibilities:
  - Research and Analyze Technologies: Dive deep into various cloud-native technologies (e.g., different compute services, databases, messaging systems, network services, etc.) to understand their components and how they interconnect.
  - Develop Relationship Definitions: Create and contribute relationship definitions, typically in JSON or YAML format, to the Meshery models.
  - Model Inter-Technology Interactions: Focus particularly on defining relationships between components from different technologies (e.g., how a Kubernetes deployment relates to an AWS RDS instance, or how a Linkerd service interacts with a Prometheus monitoring component).
  - Document New Relationships: Clearly document the newly defined relationships, their purpose, and how they are represented within Meshery designs, contributing to the official Meshery documentation.
  - Create and publish designs that use newly developed relationships.
  - Create and publish hands-on tutorials using Meshery Playground, featuring step-by-step guides and interactive labs that enable learners to apply concepts without the hassle of any configuration.
- Expected Outcome:
  - A multitude of new intra- and inter-service relationships defined across AWS, Azure, and GCP.
  - Creation and publishing of real-world workload designs that represent cloud solution architectures using the newly defined relationships.
  - Tutorials reviewed by various project maintainers and then published in guides/tutorials.
  - Policy Contribution: For advanced interns, there may be opportunities to contribute to the Rego policies that evaluate and enforce these relationships.
- Recommended Skills: DevOps, systems administration, and solutions architecture, experience with Kubernetes and cloud platforms (AWS, Azure, GCP), proficiency in Markdown and technical writing, familiarity with cloud-native tools.
- Mentor(s):
  - Sangram Rath (@sangramrath, sangram.rath@gmail.com)
  - Lee Calcote (@leecalcote, lee.calcote@gmail.com)
- Upstream Issues:
  - https://github.com/meshery/meshery/issues/14793
  - https://github.com/meshery/meshery/issues/14794
  - https://github.com/meshery/meshery/issues/14796
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f5ed20dd-5604-4c80-a63a-711a1685ecbf

### Microcks

#### Microcks-CLI v2 - IDE (Vs code) Integration and Local Dev Loop Enhancement

CNCF - Microcks: CLI v2 - VS Code Integration and Local Dev Loop Enhancement (2026 Term 2)

- Description: The Microcks CLI (microcks-cli, written in Go) is a key part of Microcks' CI/CD story - it lets developers trigger contract tests and import artifacts from the command line and in GitHub Actions. This project goes into the developer experience layer. Today, developers must navigate to the Microcks web UI in a browser to see test results, check mock status, and diagnose import errors. There is no IDE integration, no offline validation mode, and no way to get mock results inline with the code being tested. This project builds three focused improvements that bring Microcks into the editor and the local dev loop: a VS Code extension, a local dry-run mode powered by Testcontainers, and an updated GitHub Actions output format that annotates PRs with per-operation pass/fail results.
- Expected Outcome:
  - A VS Code extension (microcks-vscode) published to the VS Code Marketplace that connects to a running Microcks instance and shows: loaded services, mock operation status, recent test run results, and importer job logs - all inline in the editor sidebar (Like postman, thunder client)
  - A microcks test --dry-run flag in the CLI that uses Testcontainers (the Microcks uber image) to spin up an ephemeral local Microcks instance, import the specified artifact, run the contract test, report results, and tear down - with no external Microcks server required
  - A demo video and documentation page on microcks.io showing the full local-to-CI workflow
- Recommended Skills:
  - GO
  - VS Code Extension API (TypeScript)
  - Testcontainers
  - basic understanding of CLI UX and Docker
- Mentor(s):
  - Laurent Broudoux (@lbroudoux, laurent.broudoux@gmail.com)
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Harshvardhan Parmar (@Harsh4902, harshparmar4902@gmail.com)
  - Vaishnav Kale (@Vaishnav88sk, vaishnavsk8804@gmail.com)
- Upstream Issue: https://github.com/microcks/microcks-cli/issues/255
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7e8b57e3-0f43-4298-b079-ba9d671b68d8

### OpenEverest

#### Plugin Developer Playground: Interactive UI Schema Editor with Live Preview

CNCF - OpenEverest: Plugin Developer Playground: Interactive UI Schema Editor (2026 Term 2)

- Description: OpenEverest is an open-source cloud-native database platform that helps developers deploy and manage PostgreSQL, MySQL, MongoDB, and other databases on Kubernetes. In V2 it uses a plugin architecture where database providers define their UI through declarative YAML schemas (UISchema in Provider CRD). Currently, plugin developers have no integrated tool for developing and testing these schemas — the only way to see the rendered result is to deploy a full Provider CRD into a running Kubernetes cluster, making the development cycle slow and error-prone. This project aims to build a Plugin Developer Playground — a page inside OpenEverest where plugin developers can write UISchema YAML, see the rendered form in real time, validate the schema structure, inspect the post-processed API payload, and save/share schemas, all without deploying to a cluster. The mentee must solve the CSP compatibility problem by either choosing a CSP-compliant code editor or proposing an isolation architecture (e.g., sandboxed iframe) that keeps the main application's strict security posture intact.

- Expected Outcome:
  - Split-pane YAML editor with syntax highlighting and live form preview using the existing `UIGenerator` component
  - Real-time schema validation: YAML parsing errors and structural validation against the `TopologyUISchemas` type, with inline error markers in the editor
  - Live form rendering with stepper navigation through schema sections and topology switching
  - Dynamic field support: existing API provider fields load real data from the running OpenEverest instance; new/unknown provider types can be mocked
  - Output panel displaying the JSON payload after form data post-processing
  - CSP-compliant solution
  - Unit tests for core logic (schema validation, persistence, mock data injection) and component tests for key panels
  - Plugin developer guide for using the playground and the UISchema format

- Recommended Skills: React, TypeScript, MUI, YAML, Content Security Policy, REST/gRPC APIs, familiarity with Kubernetes CRDs helpful but not required

- Mentor(s):
  - Iaroslavna Soloveva (@solovevayaroslavna, iaroslavna.soloveva@solanica.io)
  - Sergey Pronin (@spron-in, sp@solanica.io)

- Upstream Issue: https://github.com/openeverest/openeverest/issues/2059
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/713b073e-adb4-4d46-95b5-474b8e4c64d9

#### Transform everestctl into a Powerful Database Management CLI

CNCF - OpenEverest: Transform everestctl into a Powerful Database Management CLI (2026 Term 2)

- Description: OpenEverest is an open-source cloud-native database platform that helps developers deploy and manage PostgreSQL, MySQL, MongoDB, and other databases on Kubernetes. Currently, `everestctl` serves primarily as an installation tool for deploying and deleting OpenEverest itself. However, users increasingly need a powerful command-line interface to manage their databases, clusters, and integrations directly from the terminal. This project aims to transform `everestctl` from a basic deployment tool into a comprehensive CLI for managing OpenEverest resources. The mentee will design and implement a modern, user-friendly CLI experience that allows users to provision databases, manage Kubernetes clusters, interact with OpenEverest plugins, and automate database operations — all without leaving their terminal. The project will involve working with Go, Kubernetes APIs, OpenEverest's plugin architecture, and modern CLI frameworks like Cobra.

- Expected Outcome:
  - Core database management commands: `everestctl db list`, `create`, `delete`, `get`, `logs` for PostgreSQL, MySQL, and MongoDB
  - Cluster management: `everestctl cluster list`, `register`, `status` for managing Kubernetes clusters
  - Plugin integration: `everestctl plugin list`, `install`, `configure` for OpenEverest plugins
  - Shell completion scripts (bash, zsh, fish)
  - Unit and integration tests with >80% coverage
  - Comprehensive documentation with usage examples

- Recommended Skills: Go, Kubernetes (CRDs, operators, client-go), Cobra CLI framework, REST/gRPC APIs, database fundamentals (PostgreSQL/MySQL/MongoDB), Git/GitHub workflow

- Mentor(s):
  - Sergey Pronin (@spron-in, sp@solanica.io)
  - Diogo Recharte (@recharte, diogo.recharte@solanica.io)

- Upstream Issue: https://github.com/openeverest/openeverest/issues/1818
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/42dff370-4958-4ec4-959c-4aaf6740698c

### OpenKruise

#### Build Document Agent for OpenKruise Website

CNCF - OpenKruise: Build Document Agent for OpenKruise Website (2026 Term 2)

- Description: The OpenKruise ecosystem comprises multiple rapidly evolving projects, each with its own documentation, blogs, and resources scattered across repositories. Maintaining up-to-date, coherent documentation is challenging. This project aims to build an intelligent document agent for the OpenKruise website that automates the collection, synchronization, and quality evaluation of documentation, blog posts, and other technical resources. The agent will leverage modern context engineering techniques (skills, MCP, RAG, AGENTS.md) to ensure content freshness, consistency, and discoverability across the entire OpenKruise project portfolio.

- Expected Outcome:
  - Agentic harness infrastructure for the OpenKruise website, including AGENTS.md configuration and specialized tools for documentation management
  - Automated GitHub Actions workflows to regularly collect, update, and evaluate documentation, blogs, and resources from all OpenKruise projects and Internet
  - Refreshed and standardized documentation structure with improved navigation and cross-referencing
  - Updated blog archive with consistent formatting and metadata enrichment

- Recommended Skills:
  - Go programming
  - Kubernetes fundamentals (CRDs, controllers, RBAC)
  - Context Engineering techniques (skills, MCP, RAG, AGENTS.md)
  - GitHub Actions workflow development and shell scripting
  - Technical writing and documentation best practices

- Mentor(s):
  - Zhang Zhen (@furykerry, furykerry@gmail.com)
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)

- Upstream Issue: https://github.com/openkruise/openkruise.io/issues/316
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c2c4ac27-70f0-41da-8969-7b22e3f21c68

#### Dynamic Volume Mounting for JuiceFS and Ceph in OpenKruise Agents

CNCF - OpenKruise: Dynamic Volume Mounting for JuiceFS and Ceph in Agents (2026 Term 2)

- Description: Dynamic volume mounting enables data persistence and sharing for pooled sandbox pods without relying on CSI plugins. This capability is essential for Agent workloads such as OpenClaw and Hermes, which need to save workspace data and share skills across sandboxes. Currently, OpenKruise Agents lacks support for open-source storage solutions like JuiceFS and Ceph, limiting adoption in on-premises environments. This project aims to integrate these storage backends by implementing CSI-plugin sidecars compatible with the Agent runtime and modifying the sandbox controller to support generic CSI volume mounting.

- Expected Outcome:
  - CSI-plugin sidecars for JuiceFS and Ceph that integrate seamlessly with the Agent runtime in OpenKruise Agents
  - Sandbox controller enhancements to enable mounting of generic CSI volumes
  - E2E tests covering core SandboxClaim flows involving JuiceFS and Ceph storage
  - Comprehensive user-facing documentation published on the OpenKruise website and repository

- Recommended Skills:
  - Go programming
  - Kubernetes (CRDs, controllers, RBAC)
  - Familiarity with CSI plugins (particularly JuiceFS and Ceph)
  - E2E testing frameworks (Ginkgo)

- Mentor(s):
  - Kai Shi (@BH4AWS, bh4aws@gmail.com)
  - Zhang Zhen (@furykerry, furykerry@gmail.com)

- Upstream Issue: https://github.com/openkruise/agents/issues/314
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/76a279ba-ffb9-4e4e-baa9-e36a7fd9852a

#### Lightweight and Continuous Load Testing for OpenKruise Agents Using Kwok

CNCF - OpenKruise: Lightweight and Continuous Load Testing for Agents Using Kwok (2026 Term 2)

- Description: Rapid, large-scale sandbox provisioning is critical for agentic workloads. OpenKruise Agents has optimized this through techniques like pooling and efficient sandbox discovery. To prevent performance regressions, continuous testing at scale is essential. This project will build a lightweight, resource-efficient load testing framework using Kwok to evaluate OpenKruise Agents' performance at scale (e.g., 100,000 sandboxes). Additionally, it will establish an automated workflow to regularly execute load tests and report performance metrics, ensuring consistent validation of provisioning capabilities.

- Expected Outcome:
  - A scalable load testing framework capable of evaluating OpenKruise Agents' performance with up to 100,000 sandboxes
  - GitHub Actions workflows and scripts to automate regular load testing and generate performance reports
  - Sandbox controller optimizations to facilitate lightweight load testing scenarios
  - Performance baseline documentation and regression detection mechanisms

- Recommended Skills:
  - Go programming
  - Kubernetes (CRDs, controllers, RBAC)
  - Familiarity with Kwok for cluster simulation
  - GitHub Actions workflow development and shell scripting

- Mentor(s):
  - Zhong Tianyun (@AiRanthem, airanthem666@gmail.com)
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)

- Upstream Issue: https://github.com/openkruise/agents/issues/314
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/fe38c553-a066-44b0-8192-f5a5bee5074b

### OpenTelemetry

#### Expanding Go Compile-Time Instrumentation Support and Improving otelc Tooling

CNCF - OpenTelemetry: Expanding Go Compile-Time Instrumentation and otelc Tooling (2026 Term 2)

- Description: The [OpenTelemetry Go Compile Instrumentation](https://github.com/open-telemetry/opentelemetry-go-compile-instrumentation) project provides `otelc`, a compile-time auto-instrumentation tool for Go applications. It injects OpenTelemetry instrumentation during the Go build process without requiring manual source-code changes in the target application. As the project moves toward its v1.0 release and continues feature-parity work with mature compile-time instrumentation efforts such as [Orchestrion](https://github.com/DataDog/orchestrion) and [Loongsuite](https://github.com/alibaba/loongsuite-go-agent), the next phase is to broaden real-world library coverage while hardening the tooling and contributor workflow needed to maintain those integrations over time. This mentorship focuses on adding several mentor-approved integrations from the project roadmap and backlog, such as messaging, database/cache, logging, Kubernetes client, or GenAI SDK libraries, while improving `otelc` whenever the integration work exposes gaps in rule authoring, hook implementation, testing, or debugging. The mentee will also document the science behind compile-time instrumentation: how Go symbols and versions are matched, how hooks are injected, how OpenTelemetry semantic conventions are applied, and how compatibility is verified across library releases.
- Expected Outcome:
  - Add `otelc` instrumentation support for 3-4 widely used Go libraries selected with mentors from the project roadmap/backlog, depending on complexity and project priorities.
  - For each new integration, implement instrumentation rules and hook code, define supported version ranges, and follow the relevant OpenTelemetry semantic conventions.
  - Add meaningful unit, integration, and/or end-to-end tests that verify the instrumented application builds and emits the expected telemetry.
  - Improve the instrumentation tooling or contributor workflow as needed during the work, for example rule validation, hook scaffolding, latest-library compatibility checks, integration layout, or debugging output.
  - Write documentation, examples, and demos that explain how to use the new integrations and how future contributors can build similar ones.
- Recommended Skills:
  - Go
  - OpenTelemetry concepts and semantic conventions, or willingness to learn
  - Understanding of Go AST/DST, code transformation, or compiler/build tooling, or willingness to learn
  - Testing and debugging Go applications
  - Familiarity with Git and GitHub workflows
- Mentor(s):
  - Kemal Akkoyun (@kakkoyun, kakkoyun@gmail.com)
  - Dario Castañé (@darccio, d@rio.hn)
- Acknowledgement: Initial project framing was drafted with help from Azhar Momin (@amazingakai).
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-go-compile-instrumentation/issues/446
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3e530f5c-12f3-4321-836a-39de799a4d15

#### UX Research & Information Architecture: How Users Discover and Use OpenTelemetry Instrumentation Information

CNCF - OpenTelemetry: UX Research & IA for Ecosystem Explorer (2026 Term 2)

- Description: The [Ecosystem Explorer](https://explorer.opentelemetry.io) helps users discover and get detailed documentation around various OpenTelemetry components. As the project expands to more ecosystems (Python, JavaScript, GenAI), information density will increase significantly, requiring patterns and approaches tailored to more than just the initial Java Agent use case. This mentorship involves conducting UX research to understand how users actually want to consume and use this information, covering: how users currently find information about components or instrumentation (LLMs, GitHub, docs, vendor sites, trial and error); what questions they are trying to answer (what telemetry will I get, how do I configure it, what changed between versions); what personas exist (app developers instrumenting code, platform engineers running collectors, SREs debugging production); how similar tools present dense technical information (npm registry, crates.io, Go pkg site, Docker Hub); and how LLMs are being used in this area and what the experience has been with them. The research will inform how we structure information, what features to prioritize, and how to present complex telemetry data in an accessible way.
- Expected Outcome:
  - User Interviews Report: Summarized findings from 3-5 user interviews covering different user types and key tasks
  - Competitive Analysis Report: Findings from reviewing 2-3 similar tools (e.g., package registries, API documentation sites) on how they present component information
  - Information Architecture Recommendations: Proposed structure for presenting a specific type of component data (e.g., "instrumentation" or "collector components")
  - Wireframes/mockups (stretch goal): Visual concepts for key user flows
- Recommended Skills: UX research (user interviews, synthesis), information architecture, competitive/comparative analysis, technical writing, wireframing or prototyping tools (helpful), familiarity with developer tools or documentation sites
- Mentor(s):
  - Jay DeLuca (@jaydeluca, jay.deluca@grafana.com)
  - Andrej Kiripolsky (@AndrejKiri, andrej.kiripolsky@grafana.com)
  - Amy Super (@amy-super, amy.super@grafana.com)
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-ecosystem-explorer/issues/309
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9e72750b-a515-4cef-86c8-0ffcdcd39298

### PipeCD

#### Plugin Development Book, Docs DX, and Adoption Growth

CNCF - PipeCD: Plugin Development Book, Docs DX, and Adoption Growth (2026 Term 2)

- Description: PipeCD v1 introduced a plugin-based architecture enabling deployments on any platform. While the technical capabilities have evolved significantly, resources for building plugins are currently only available in Japanese. This project focuses on translating and expanding the existing [PipeCD Plugin Development Book](https://zenn.dev/warashi/books/try-and-learn-pipecd-plugin) into English and hosting it within PipeCD's docs, making plugin development accessible to the global contributor community.
As part of the project, [examples of pipedv1 will also be created](https://github.com/pipe-cd/pipecd/issues/6266) practical, real-world deployment patterns built around PipeCD's new plugin architecture to help adopters get started.
Alongside this, the mentee will improve documentation experience for contributors and adopters, produce technical content (blogs, articles and walkthrough videos) tied to the book chapters, and grow community awareness through talks and outreach.

- Expected Outcome: English Plugin Development Book published within PipeCD docs, v1 examples completed, improved contributor and adopter onboarding experience, better docs usability and content discoverability, walkthrough videos (2–4) and blog posts tied to book chapters, and measurable community and social media growth.

- Recommended Skills:
  - Technical writing and documentation
  - Community Management
  - Familiarity with Go and PipeCD's plugin architecture
  - Experience with Git, CI/CD, GitOps, and deployment workflows
  - Content creation (written and video) and social media
  - Public speaking and community engagement

- Mentor(s):
  - Eeshaan Sawant (@eeshaanSA, eeshaans1@gmail.com)
  - Khanh Tran (@khanhtc1202, khanhtc1202@gmail.com)

- Upstream Issue(s):
  - [pipe-cd/pipecd#6679](https://github.com/pipe-cd/pipecd/issues/6679)
  - [pipe-cd/pipecd#6266](https://github.com/pipe-cd/pipecd/issues/6266)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c6a906e7-e912-4443-a66d-a496cd0a74ea

### urunc

#### Extensive evaluation of urunc's sandboxing execution model

CNCF - urunc: Extensive evaluation of urunc's sandboxing execution model (2026 Term 2)

- Description:

According to urunc's execution model, the application executes inside a
VM-based or software-based sandbox. While this model strengthens isolation
boundaries, it can introduce performance overhead and additional resource
consumption compared to standard containers. Over the past years, evaluations
of urunc have focused primarily on spawn time and container density and less
on other aspects, such as CPU and memory usage, storage overhead I/O
performance and network latency.

As a result, it is necessary to conduct a thorough performance evaluation of
urunc across multiple metrics. The evaluation should span across
microbenchmarks, macrobenchmarks, and representative real-world workloads.
Apart from the evaluation itself, it is also important to create a reproducible
benchmarking suite, with all scripts, tools and documentation, so that anyone
can extend and reproduce the experiments across different environments and
versions.

- Expected Outcome:
  - A comprehensive evaluation report covering startup latency, CPU and memory
    consumption, storage overhead, I/O throughput, and network performance
    across multiple sandboxes (monitor / guest combinations).
  - A reproducible evaluation suite, including all scripts, tools,
    configurations and documentation required to repeat and extend the
    benchmarks.
  - A blogpost summarizing the methodology and the findings of the evaluation.

- Recommended Skills:
  - Good understanding of benchmarking methodologies and tools (e.g. fio, perf)
  - Experience with scripting (e.g. Bash, Python) for automation of benchmarks.
  - Basic understanding of virtualization and container runtimes concepts.
  - Familiarity with Kubernetes.

- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Anastassios Nanos (@ananos, ananos@nubificus.co.uk)
  - Anastasia Mallikopoulou (@amallikopoulou, amallik@nubificus.co.uk)

- Upstream Issue: https://github.com/urunc-dev/urunc/issues/574
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b4c74c69-7df6-45da-8727-2bca27ed1e8e

#### Improve lifecycle management of sandbox monitors

CNCF - urunc: Improve lifecycle management of sandbox monitors (2026 Term 2)

- Description:

Currently, urunc launches sandbox monitors, such as Firecracker and QEMU
through command-line invocations. This approach offers limited control over the
sandbox lifecycle once the process is started. On the other hand, most
monitors expose remote management interfaces, typically through a socket-based
API.

These interfaces provide access to the same operations currently performed via
CLI, but also enable further control over the sandbox lifecycle. In particular,
they allow more fine-grained lifecycle management of the sandbox, including
querying and monitoring its state, performing device hotplug and unplug
operations and interacting with the guest.

This project aims to extend urunc's sandbox integration layer to support remote
management interfaces and to explore each monitor's capabilities in order to
extend the functionalities of urunc sandboxed containers.

- Expected Outcome:
  - A design document describing the updated architecture and workflow for
    spawning and managing sandbox monitors in urunc.
  - Implementation of the necessary changes in urunc to manage sandbox monitors
    through their respective APIs.

- Recommended Skills:
  - Basic understanding of container runtimes and OCI concepts.
  - Good understanding of Linux systems programming (IPC, process management, etc.)
  - Experience with Go.
  - Familiarity with virtual machine monitors.

- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Anastassios Nanos (@ananos, ananos@nubificus.co.uk)

- Upstream Issue: https://github.com/urunc-dev/urunc/issues/112
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/02b6f81b-a96d-4fc5-894d-3da12a3564bf

#### Improving DNS and localhost based networking compatibility for urunc across CNIs

CNCF - urunc: DNS and localhost networking compatibility across CNIs (2026 Term 2)

- Description:

In a standard container setup, the container shares the network namespace with
its host environment, meaning localhost inside the container refers to the same
loopback interface as the host's network namespace. Many CNI plugins and
container networking services rely on this assumption. For instance, Docker
sets up an internal DNS server listening on localhost within each container's
network namespace and configures `/etc/resolv.conf` accordingly. Similarly,
service meshes (e.g., Istio, Linkerd) inject sidecar proxies that listen on
localhost, and certain CNI plugins expose health checks or metrics endpoints on
the loopback interface.
 
 In urunc, however, workloads execute inside a sandboxed environment
with its own isolated network stack. As a result,
localhost inside the sandbox does not refer to the host's network namespace
loopback interface but to the sandbox's own. This breaks any service that
relies on localhost-based communication between the container and host-level
components.

This project aims to investigate and implement mechanisms to bridge localhost
communication between the host network namespace and the sandbox. The mentee
will survey the landscape of CNI plugins and networking services that rely on
localhost, categorize the different communication patterns, and design a
solution that restores compatibility while preserving the
isolation guarantees that urunc provides.

- Expected Outcome:
  - A survey and categorization of CNI plugins and networking services that
    rely on localhost communication, documenting the specific patterns and
    assumptions each makes.
  - A design proposal of one or more mechanisms to bridge localhost traffic
    between the host network namespace and the sandbox.
  - Implementation of the proposed solution in urunc, with DNS resolution as
    the primary use case.
  - Evaluation of the new mechanism.

- Recommended Skills:
  - Good understanding of Linux networking concepts (network namespaces,
    loopback interfaces, DNS resolution).
  - Basic understanding of container networking (CNI plugin model,
    bridge/overlay networks).
  - Experience with low-level networking tools (iptables, tc, eBPF).

- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Anastassios Nanos (@ananos, ananos@nubificus.co.uk)

- Upstream Issue: https://github.com/urunc-dev/urunc/issues/574
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d11f903e-4d6f-49af-80d8-8fe0d728bce2

#### Integration of urunc's sandbox execution with Argo

CNCF - urunc: Integration of urunc's sandbox execution with Argo (2026 Term 2)

- Description:

While urunc has successfully enabled the use of unikernels and single
application kernels within Kubernetes environments, its integration with other
CNCF projects has been less seamless. A notable example is Argo, a widely
adopted platform for defining and managing workflows, complex pipelines, and
distributed applications on Kubernetes.

In urunc's execution model, untrusted components of a deployment run inside
sandboxed environments as unikernels or single-application kernels, while
trusted components run as standard containers. Although this separation enables
fine-grained workload isolation, it introduces friction in deployments like Argo,
since it breaks pod-level assumptions (e.g. shared networking, storage).

This project aims to bridge that gap between Argo deployments and urunc's sandboxed
execution model by enabling compatibility at the runtime and workflow
levels. The expected outcome is that users can easily choose which parts of
their Argo deployment run in isolated urunc sandboxes.

- Expected Outcome:
  - A document describing the architecture of Argo and the execution model of
    urunc, including a clear breakdown of the main incompatibilities.
  - A working integration with the necessary changes required in urunc and its
    components.
  - A tutorial showing how to deploy and run Argo workflows using urunc,
    including setup, configuration, and example use cases.

- Recommended Skills:
  - Good understanding of Kubernetes.
  - Familiarity with Argo and its architecture.
  - Basic understanding of container runtimes and OCI concepts.
  - Experience with Go.

- Mentor(s):
  - Charalampos Mainas (@cmainas, cmainas@nubificus.co.uk)
  - Panagiotis Mavrikos (@panosmaurikos, pmavrikos@nubificus.co.uk)
  - Anastassios Nanos (@ananos, ananos@nubificus.co.uk)

- Upstream Issue: https://github.com/urunc-dev/urunc/issues/573
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/793f9d3c-179b-4e93-8f7a-2ef17caa1324

### Volcano

#### Scheduler Management, Observability & Log Explorer UI

CNCF - Volcano: Scheduler Management, Observability & Log Explorer UI (2026 Term 2)

- Description: Volcano's scheduler has no presence in the dashboard today. Three critical operator workflows are missing: 
(1) Configuration — the entire scheduling policy (6 actions, 22 plugins, per-plugin toggles and arguments) lives in a raw Kubernetes ConfigMap edited only via `kubectl`, with no validation or UI; 
(2) Observability — Volcano exposes rich Prometheus metrics (scheduling latency, preemption counts, unschedulable job/task counts) that the dashboard never queries, leaving operators dependent on a separate Grafana stack; 
(3) Logs — debugging scheduling issues requires `kubectl logs` against pods in `volcano-system`; the dashboard has no log viewing capability at all. This project adds a `/scheduler` section with three tabs: a Config tab that reads and writes the `volcano-scheduler-configmap` as a structured form, a Metrics tab that proxies and visualizes the scheduler's Prometheus `/metrics` endpoint, and a Logs tab that streams live logs from any Volcano system component (`volcano-scheduler`, `volcano-controller-manager`, `volcano-webhook-manager`, `volcano-agent`) — all backed by new tRPC procedures using the existing `CoreV1Api` client in `packages/trpc/server/utils/k8s.ts`.
- Expected Outcome:
  - Config tab: draggable action pipeline editor, plugin tier editor with per-plugin `enabled` toggles and typed argument fields, live YAML diff preview, and a Save button that patches the ConfigMap via `CoreV1Api.patchNamespacedConfigMap`.
  - Metrics tab: stat cards for unschedulable jobs/tasks and total preemptions; line chart for e2e and per-plugin scheduling latency; bar chart for per-action latency — all from a new `getMetrics` tRPC procedure querying the scheduler's `/metrics` endpoint.
  - Logs tab: component selector dropdown (`scheduler`, `controller-manager`, `webhook-manager`, `agent`), `tailLines` control, keyword filter/highlight, and real-time log streaming via `CoreV1Api.readNamespacedPodLog` with a Server-Sent Events or polling transport.
  - Updated RBAC in `deployment/volcano-dashboard.yaml` for ConfigMap `get`/`update` and Pod logs in `volcano-system`.
  - Tests and user-facing documentation.
- Recommended Skills: TypeScript, React, Next.js, tRPC, Zod, Kubernetes API (`@kubernetes/client-node`), Prometheus metrics parsing, YAML (`js-yaml`), Server-Sent Events or streaming APIs
- Mentor(s):
  - Jesse Stutler (@JesseStutler, jessestutler97@gmail.com)
  - Kuldeep (@de6p, de6p97@gmail.com)

- Upstream Issue: https://github.com/volcano-sh/dashboard/issues/197
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ec54f49d-258f-49b9-9baf-c2c516fbe186

#### Support Namespace-scoped Queue in Volcano

CNCF - Volcano: Support Namespace-scoped Queue in Volcano (2026 Term 2)

- Description: Volcano's `Queue` is a cluster-scoped resource, which means only cluster admins can create or update it. This is a barrier for multi-tenant scenarios, where tenants usually only own their own namespaces and want to leverage Volcano's queue capabilities (resource sharing, capability/guarantee/deserved, hierarchy, etc.) for their own workloads without requesting changes from a cluster admin. This project adds a namespace-scoped `NamespaceQueue` to Volcano. A `NamespaceQueue` is derived from a cluster-scoped `Queue` and behaves consistently with it, so tenants can create and use queues within their own namespace and associate `PodGroup`/`Job` with a `NamespaceQueue` exactly as they would with a cluster `Queue`. The existing cluster `Queue` semantics and APIs remain unchanged for users who do not opt in.

- Expected Outcome:
  - A namespace-scoped `NamespaceQueue` CRD derived from cluster-scoped `Queue`, with consistent semantics for fields such as `capability`, `guarantee`, `deserved`, and hierarchy.
  - Tenants can create and manage `NamespaceQueue` within their own namespace without cluster-admin permission.
  - `PodGroup`/`Job` can reference a `NamespaceQueue` and be scheduled with the same behavior as referencing a cluster `Queue`.
  - Resource accounting, status, and events for `NamespaceQueue` work end-to-end through Volcano's existing queue management path.
  - Compatibility with the existing cluster `Queue` and the `scheduling.volcano.sh/queue-name` annotation, with a clear migration story for existing users.
  - E2E tests covering core `NamespaceQueue` flows, including negative cases.
  - User-facing documentation on the Volcano website and the repository.

- Recommended Skills:
  - Go
  - Kubernetes (CRDs, controllers, RBAC)
  - Familiarity with Volcano (scheduler, queue, PodGroup/Job)
  - E2E testing (Ginkgo)
  - GitHub workflow and shell scripting

- Mentor(s):
  - Jesse Stutler (@JesseStutler, jessestutler97@gmail.com)
  - Hajnal Máté (@hajnalmt, hajnalmt@gmail.com) 
  - João Azevedo (@devzizu, jazevedo960@gmail.com)

- Upstream Issue: https://github.com/volcano-sh/volcano/issues/5251
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9e582ac4-4e12-4fcc-a1cd-27855d79730a

### WasmEdge

#### Memory alignment in WASM instructions

CNCF - WasmEdge: Memory alignment in WASM instructions (2026 Term 2)

- Description: Although WasmEdge checked the memory alignment when accessing the memory instances in WASI functions, the same situation occurs for instructions which would access the addresses on memory instances. For the pointer types, the offset for load/store from/to memory instances should be aligned as 4 in WASM32. In this mentorship, the mentee should collect all the possible situations for alignment checking in WASM instructions, and resolve the related issues.
- Expected Outcome:
  - Fix the memory alignment checking when accessing the memory instances.
  - Add some WASM binary tests for verifying the implementation.
  - Fix the issues: WasmEdge2694, WasmEdge2733, WasmEdge2881
- Recommended Skills:
  - C++
  - WebAssembly
  - Git workflows
- Mentor(s):
  - YiYing He (@q82419 , yiying@secondstate.io )
  - Hung-Ying, Tai (@hydai , hydai@secondstate.io )
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/4820
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/64753a7f-5823-4909-86ac-9d36bd6b7323
