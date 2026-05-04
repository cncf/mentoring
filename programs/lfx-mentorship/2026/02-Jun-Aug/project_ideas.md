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
