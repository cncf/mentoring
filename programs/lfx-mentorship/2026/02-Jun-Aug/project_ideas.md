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

### Knative Functions

#### End-to-End Agentic Workflow for Serverless Functions

- Description: Knative Functions ships an MCP (Model Context Protocol) server that exposes its toolchain to AI agents. This project builds on that foundation: deepening the MCP server to cover initial environment setup and CI/CD integration, and authoring a companion skill that walks agents through the full lifecycle of a Function. Together these enable end-to-end agentic usage of Serverless Functions; from initial scaffolding through deployment with CI/CD.

- Expected Outcome:
  - New agentic installer
  - New MCP operations covering prerequisite checks with guidance.
  - A companion skill that composes initialization, CI/CD setup, and deployment into a guided workflow.
  - End-to-end demonstration.
  - User-facing and agent-facing documentation.

- Recommended Skills:
  - Familiarity with the Go programming language (ideal) or Python (secondarily).
  - Experience with AI/ML agents and interest in programmatic LLM integrations.
  - Familiarity with Kubernetes, Serverless, GitOps, CI/CD systems a plus.
  - Strong communication skills, with the ability to research and document clearly.

- Mentor(s):
  - Luke Kingland (@lkingland, kingland@redhat.com) - Primary
  - David Fridrich (@gauron99, dfridric@redhat.com)

- Upstream Issue: https://github.com/knative/func/issues/3646
