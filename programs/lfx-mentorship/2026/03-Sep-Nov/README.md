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
- [Kubeflow](#kubeflow)
  - [Abstracting Pod Lifecycle Diagnostics for Kubeflow Pipelines](#abstracting-pod-lifecycle-diagnostics-for-kubeflow-pipelines)
- [OpenTelemetry](#opentelemetry)
  - [Declarative instrumentation configuration for otelc](#declarative-instrumentation-configuration-for-otelc)
  - [Zero-code AI Agent observability for otelc](#zero-code-ai-agent-observability-for-otelc)
- [OpenYurt](#openyurt)
  - [Add Claude Code Skills for deploying OpenYurt and configuring Raven](#add-claude-code-skills-for-deploying-openyurt-and-configuring-raven)
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
- LFX URL: TBD

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
- LFX URL: TBD

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
- LFX URL: TBD

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

### Kubeflow

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
- LFX URL: TBD

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
- LFX URL: TBD

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
- LFX URL: TBD

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

