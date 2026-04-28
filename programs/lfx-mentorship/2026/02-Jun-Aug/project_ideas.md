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

