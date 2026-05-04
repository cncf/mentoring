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

### KubeArmor

#### KubeArmor Supply Chain Security with SLSA Level 3 Compliance and OpenSSF Scorecard Hardening

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

## Kubernetes

### Headlamp

#### Add Argo CD to Headlamp: GitOps Application Management UI

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

#### Add Metal3 to Headlamp: Kubernetes Bare Metal Management UI

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

#### Add Agones to Headlamp: Kubernetes Game Server Management UI

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

#### Add Tinkerbell to Headlamp: Bare Metal Provisioning UI

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

#### Add Kueue to Headlamp: Kubernetes Batch Queueing UI

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

### KubeSlice

#### KubeSlice Controller HA (Active/Standby) Support

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
    
#### Partial Mesh Support (MVP: Hub-and-Spoke)

- Description: Add partial mesh support to KubeSlice using a small-scope MVP topology: **Hub-and-Spoke**. Users can define one (or two) hub clusters for a slice; the controller computes desired connections so only hub↔spoke links are established (no spoke↔spoke), and workers reconcile connectivity accordingly. Includes status reporting for convergence and failure reasons.
- Expected Outcome: Users can create a slice with hub-and-spoke partial mesh topology and see it converge across multiple worker clusters. Topology updates (e.g., changing the hub) rewire connections safely. Slice/worker status surfaces readiness and errors for debugging.
- Recommended Skills: Go, Kubernetes (CRDs, controllers, client-go)
- Mentor(s):
  - Gourish Biradar (email: biradar.gourish@gmail.com, github: gourishkb) , Prabhu Navali (email: prabhu@avesha.io, github: pnavali), Rahul Kumar (email: rahulparida933@gmail.com, github: Rahul-D78)
- Upstream Issue(s):
  - https://github.com/kubeslice/kubeslice-controller/issues/306

### Meshery

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
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

