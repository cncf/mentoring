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

### PipeCD

### Plugin Development Book, Docs DX, and Adoption Growth

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

### Harbor

#### Harbor CLI: Bubbletea v2 TUI Refactor and OIDC Device-Flow Login

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

#### Harbor Satellite: Ground Control CLI and Kubernetes Fleet Operator

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

### Jaeger

#### Jaeger for GenAI Observability: Specialized Trace Visualization

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

### Kubescape

#### In-cluster, GitOps-native SecurityException CRD for Kubescape, with Headlamp plugin support

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
  - Matthias Bertschy (@matthyx, matthiasb@armosec.io) - primary
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: [kubescape/kubescape#1982](https://github.com/kubescape/kubescape/issues/1982)

#### CEL rule engine support and Rego-to-CEL control migration

- Description: Kubescape evaluates compliance controls using OPA/Rego today, while Kubernetes has shipped native `ValidatingAdmissionPolicy` / `MutatingAdmissionPolicy` resources that use CEL expressions. The [`kubescape/cel-admission-library`](https://github.com/kubescape/cel-admission-library) project already ships a growing set of Kubescape controls as VAP resources, but Kubescape cannot evaluate them locally — so a resource passing `kubescape scan` may still fail the cluster's admission controller. This project adds a native CEL evaluation engine to Kubescape (running alongside Rego), using the same `ValidatingAdmissionPolicy` YAML format and `google/cel-go` library that Kubernetes uses internally. With the same rule expression evaluated in both places, Kubescape becomes directly comparable to — and competitive with — Kyverno for teams wanting a single policy language across CI, runtime scanning, and admission enforcement. A sample of existing Rego controls are then converted to CEL as proof-of-concept, validating the conversion pattern end-to-end.
- Expected Outcome:
  - New `CELLanguage` rule type dispatched from the existing `runOPAOnSingleRule()` extension point in `core/pkg/opaprocessor/processorhandler.go`.
  - `runCELOnK8s()` implementation: loads `ValidatingAdmissionPolicy` YAML from `cel-admission-library`, evaluates with `google/cel-go` in a VAP-compatible environment (`object`, `params`, stubbed `request`), maps violations to `reporthandling.RuleResponse`.
  - Equivalence guarantee documented: for `object`-scoped rules, `kubescape scan` and the cluster admission controller produce identical results. Known gap (`authorizer`, `request.userInfo`) documented.
  - 10–20 existing regolibrary (Rego) controls converted to CEL and contributed to `cel-admission-library` as `ValidatingAdmissionPolicy` resources, with a conversion guide for future contributors.
  - Unit and integration tests; end-to-end verification showing a converted control evaluated identically by Kubescape and a live VAP on a real cluster.
- Recommended Skills: Go, Kubernetes (CEL, ValidatingAdmissionPolicy, client-go), familiarity with OPA/Rego a plus.
- Mentor(s):
  - Matthias Bertschy (@matthyx, matthiasb@armosec.io) - primary
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: [kubescape/kubescape#2001](https://github.com/kubescape/kubescape/issues/2001)

### KubeStellar

#### AI-driven test coverage architect for KubeStellar Console

- Description: The KubeStellar Console (console.kubestellar.io) is the web dashboard for the KubeStellar multi-cluster platform. It currently has minimal automated test coverage — Playwright E2E tests exist but are flaky and not CI-blocking, and component-level tests are sparse. UI regressions, broken cards, and auth flow failures are caught manually or not at all. This project takes a novel approach: the mentee acts as a test architect, defining coverage goals, test plans, and acceptance criteria, then directs an AI coding agent (an advanced AI coding agent) to generate, iterate on, and validate the test suite. The mentee is evaluated on test design quality, coverage achieved, and bugs discovered — not on lines of code manually written. Work includes designing test matrices (browsers, screen sizes, demo vs live mode, error states), building Playwright E2E and Vitest component tests, stabilizing flaky tests to become CI-blocking, and — critically — building autonomous GitHub Actions workflows that continuously improve test coverage after the mentorship ends. This includes a workflow that detects untested new components in PRs and auto-generates test PRs via AI agent, a nightly test health workflow that detects flaky tests and auto-files issues, and a coverage regression gate that blocks PRs dropping below threshold. The mentee presents their testing strategy and results at KubeStellar community calls at midpoint and end of term. Note: this program is independent from the companion "bug discovery and remediation" program — this role focuses exclusively on test infrastructure, coverage automation, and CI pipelines. It does not involve production error analysis, GA4 data, or bug triage. The two programs have separate mentees, separate deliverables, and no overlapping scope. Prerequisite: access to and license for an advanced AI coding agent capable of autonomous multi-file code generation.
- Expected Outcome: Playwright E2E tests covering 15-20 core user flows, Vitest component tests for all 30+ card types, test matrix covering 3 browsers x 2 screen sizes x 2 modes (demo/live), all E2E tests stable enough to be CI-blocking, coverage dashboard with >=70% target, >=15 bugs discovered and filed, GitHub Actions workflow that auto-generates tests for new untested components via AI agent, nightly test health workflow that detects flaky tests and auto-files issues, coverage regression gate blocking PRs that drop coverage, documented test authoring guide for future contributors, 2 community call presentations (midpoint + final).
- Recommended Skills: Test design and quality assurance principles, basic familiarity with React/TypeScript, experience using advanced AI coding agents, familiarity with GitHub Actions, understanding of Kubernetes concepts helpful but not required.
- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Arpit Srivastava (@Arpit529Srivastava, arpitsrivastava529@gmail.com)
- Upstream Issue: https://github.com/kubestellar/console/issues/4189

#### AI-driven bug discovery and remediation architect for KubeStellar Console

- Description: The KubeStellar Console (console.kubestellar.io) has GA4 error tracking that surfaces JavaScript errors, failed API calls, and rendering failures in production — but no one systematically triages or investigates them. Common issues include undefined data guards causing crashes, stale WebSocket state showing outdated cluster data, chunk load failures on deployments, and silent error swallowing that hides failures behind blank cards. This project takes a novel approach: the mentee acts as a bug discovery architect, designing investigation strategies, analyzing production error data, and directing an AI coding agent (an advanced AI coding agent) to audit code paths, identify defects, and propose validated fixes with regression tests. The mentee is evaluated on bugs found, bugs fixed, reduction in production error rates, and quality of the automated bug-hunting workflows they create — not on lines of code manually written. Critically, the mentee builds autonomous GitHub Actions workflows that continuously find and fix bugs after the mentorship ends. This includes a weekly automated bug sweep that uses an AI agent to scan the codebase for new error patterns, unsafe access, and missing guards — auto-filing issues for each finding. A GA4 error regression workflow compares error rates week-over-week and auto-files issues when a category spikes. An auto-triage workflow triggers an AI agent to investigate new GA4 errors, reproduce them, and propose fix PRs. The mentee also builds a public Console Quality Dashboard tracking error trends, bug fix rates, and open issues, and presents findings at KubeStellar community calls at midpoint and end of term. Note: this program is independent from the companion "test coverage architect" program — this role focuses exclusively on production error analysis, bug discovery, GA4 data, and quality dashboards. It does not involve test infrastructure, coverage metrics, or CI pipeline work. The two programs have separate mentees, separate deliverables, and no overlapping scope. Prerequisite: access to and license for an advanced AI coding agent capable of autonomous multi-file code generation.
- Expected Outcome: Triage and root-cause analysis of all existing GA4 errors, >=25 bugs discovered/filed/fixed with regression tests, >=50% reduction in production GA4 error rate, weekly automated bug sweep GitHub Actions workflow using AI agent to scan for error patterns and auto-file issues, GA4 error regression workflow that auto-detects week-over-week spikes, auto-triage workflow that investigates new errors and proposes fix PRs via AI agent, public Console Quality Dashboard tracking error trends and bug fix rates, improved error states across all card types (blank cards replaced with actionable messages), documented bug-hunting playbook for future contributors, 2 community call presentations (midpoint + final).
- Recommended Skills: Analytical mindset for error triage and root cause analysis, basic familiarity with React/TypeScript and web error handling, experience using advanced AI coding agents, familiarity with GitHub Actions and browser developer tools, understanding of Kubernetes concepts helpful but not required.
- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Ghanshyam Singh (@ghanshyam2005singh, ghanshyam2005singh@gmail.com)
- Upstream Issue: https://github.com/kubestellar/console/issues/4190

#### AI-driven operational knowledge base and mission control testing for KubeStellar Console

- Description: KubeStellar Console's mission control feature uses an AI assistant backed by a knowledge base (console-kb) to help users perform operational tasks — installations, upgrades, troubleshooting, and multi-cluster sync fixes. The knowledge base needs comprehensive, validated operational content, and the full mission control pipeline (user question → KB lookup → command generation → cluster execution) needs end-to-end testing to ensure generated commands actually work. The mentee acts as an operational knowledge architect, using an AI coding agent (an advanced AI coding agent) to generate runbooks, installers, YAML templates, and troubleshooting fixes, then tests the complete mission control execution loop against real clusters. Critically, the mentee builds autonomous GitHub Actions workflows that nightly re-validate all KB operational content against live clusters, auto-filing issues when content goes stale, commands fail, or prerequisites change. The mentee also builds a feedback loop tracking which user queries return no results or bad results, auto-generating drafts for missing content. The mentee presents their findings at KubeStellar community calls at midpoint and end of term. Note: this program is independent from the companion "test coverage architect" and "bug discovery" programs — this role focuses exclusively on operational knowledge content, mission control pipeline validation, and KB coverage. It does not involve UI test infrastructure, coverage metrics, production error analysis, or GA4 data. The three programs have separate mentees, separate deliverables, and no overlapping scope. Prerequisite: access to and license for an advanced AI coding agent capable of autonomous multi-file code generation.
- Expected Outcome: Runbooks covering all common operations (install, upgrade, rollback, disaster recovery, multi-cluster sync failures), library of validated YAML templates and fixes for known issues, end-to-end mission control pipeline tests (user query → KB → command generation → successful cluster execution), nightly GitHub Actions workflow that re-validates all KB content against live clusters and auto-files issues on failures, KB gap analysis with auto-generated drafts for missing content, >=90% of KB operational content validated as working on current KubeStellar versions, documented KB contribution guide for future contributors, 2 community call presentations (midpoint + final).
- Recommended Skills: Familiarity with Kubernetes operations (kubectl, helm, YAML), technical writing ability for operational documentation, experience using advanced AI coding agents, familiarity with GitHub Actions and CI/CD, understanding of multi-cluster Kubernetes concepts helpful but not required.
- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
- Upstream Issue: https://github.com/kubestellar/console/issues/4196

### Lima

#### Improve Windows support (host and guest)

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

- Upstream Issues: https://github.com/lima-vm/lima/issues/4852, https://github.com/lima-vm/lima/issues/4820, https://github.com/lima-vm/lima/issues/4819

### OpenEverest

#### Transform everestctl into a Powerful Database Management CLI

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

#### Plugin Developer Playground: Interactive UI Schema Editor with Live Preview

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


### OpenTelemetry

#### UX Research & Information Architecture: How Users Discover and Use OpenTelemetry Instrumentation Information

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

### Volcano

#### Support Namespace-scoped Queue in Volcano

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

#### Scheduler Management, Observability & Log Explorer UI

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

### WasmEdge

#### Memory alignment in WASM instructions

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

### urunc

#### Integration of urunc's sandbox execution with Argo

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

#### Improve lifecycle management of sandbox monitors

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

#### Extensive evaluation of urunc's sandboxing execution model

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

#### Improving DNS and localhost based networking compatibility for urunc across CNIs

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

### Kyverno

#### Address findings from the Kyverno CNCF TAG Security & Compliance and General Technical Review assessments

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
  - https://github.com/kyverno/kyverno/issues/15335
  - https://github.com/kyverno/kyverno/issues/15473

#### Kyverno Technical Outcomes

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

### Kuadrant

#### Investigate and prototype A2A protocol support in the Kuadrant agentic gateway project

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

#### Implement AccessPolicy CRD for tool-level authorization in the Kuadrant agentic gateway

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

#### Investigate native Envoy MCP filter as replacement for ext-proc parsing in the Kuadrant agentic gateway

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

#### Transform Kuadrant Policy YAML Editors into Interactive Form Views

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
