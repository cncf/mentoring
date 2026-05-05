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

### Knative Functions

#### End-to-End Agentic Workflow for Serverless Functions

CNCF - Knative Functions: End-to-End Agentic Workflow for Serverless Functions (2026 Term 2)

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

- LFX URL: 

### Koordinator

#### Native Support for AI Agent Orchestration and High-Concurrency Sandbox Scheduling

- Description: AI agentic workflows (multi-agent collaboration frameworks, automated evaluation systems such as SWE-bench) frequently spawn and tear down large numbers of short-lived sandboxes (gVisor, Wasm, Kata Containers) to execute skills or tools. Current Kubernetes scheduling models are too heavy for these transient workloads, causing high latency, weak isolation, and APIServer pressure. This project will extend Koordinator to provide first-class support for AI agent scenarios by integrating sandbox runtimes with Koordinator QoS classes, implementing equivalence-class scheduling for near-identical sandbox requests, and introducing a dedicated Sandbox Pipeline that handles pre-warming, capacity reservation, and actionable scheduling feedback to enable agent self-healing.
- Expected Outcome:
  - Native integration of agent sandbox runtimes (gVisor/Wasm/Kata) with Koordinator QoS classes (LSR, LS, BE) and resource hardening templates
  - Equivalence-class scheduling logic in the Koordinator scheduler that skips redundant Predicate/Priority calculations for batches of similar sandbox pods
  - A Sandbox Pipeline mechanism with pre-warming, automated environment provisioning, and reservation hooks
  - Annotation/Status-based scheduling diagnostics that surface actionable next-step suggestions to upstream agents
  - End-to-end tests and benchmarks demonstrating throughput and latency improvements for high-concurrency sandbox workloads
- Recommended Skills:
  - Go programming
  - Kubernetes scheduler-framework, CRDs, controllers
  - Familiarity with sandbox runtimes (gVisor/Kata/Wasm)
  - Performance profiling and benchmarking
- Mentor(s):
  - Rougang Han (@saintube, saintube@foxmail.com)
  - Jianyu Wang (@ZiMengSheng, zmsjianyu@gmail.com)
- Upstream Issue: https://github.com/koordinator-sh/koordinator/issues/2879

#### End-to-End Performance and Scalability Test Harness for Koordinator Scheduler

- Description: As the Koordinator scheduler grows additional plugins (NUMA, Device Sharing, Reservation, Coscheduling, ElasticQuota), the project needs a continuous, lightweight performance harness to detect regressions and validate scaling targets defined in the 2026 roadmap. This project will build a Kwok-based simulation framework that drives realistic workload mixes (LSR/LS/BE, gang, reservations, GPU sharing) at scale (target 10k-100k pods), captures throughput, queueing latency, and per-plugin profiling data, and publishes results from a scheduled GitHub Actions workflow.
- Expected Outcome:
  - Kwok-based simulation harness with reusable workload generators for the major Koordinator plugins
  - Scheduled GitHub Actions workflow that runs the harness on each release branch and publishes Markdown reports
  - Baseline performance metrics and regression-detection thresholds for the 2026 release line
  - Profiling integration (pprof, scheduler_perf) and dashboards for triage
  - Documentation for contributors on adding new scenarios
- Recommended Skills:
  - Go programming
  - Kwok, kube-scheduler internals, scheduler_perf
  - GitHub Actions and shell scripting
- Mentor(s):
  - Jianyu Wang (@ZiMengSheng, zmsjianyu@gmail.com)
  - Rougang Han (@saintube, saintube@foxmail.com)
- Upstream Issue: https://github.com/koordinator-sh/koordinator/milestone/19

#### Plugin-level Cache and Nominator Shared Across Scheduler Profiles

- Description: Today most Koordinator scheduler plugins (DeviceShare, NodeNUMAResource, Reservation, etc.) keep their own private cache per scheduling framework/profile, so configuring multiple profiles in a single `KubeSchedulerConfiguration` produces duplicated plugin caches even though the upstream `SchedulerCache` and `PodNominator` are singletons per scheduler instance. This duplication wastes memory, desynchronizes state across profiles, and exposes correctness bugs: in `RunFilterPluginsWithNominatedPods`, `AddPod` is invoked for pods that are still in scheduling and are therefore missing from `nodeDeviceCache`'s used map, which causes DeviceShare and NodeNUMAResource to fail to reserve resources for high-priority pods in RDMA / VF / NV-Switch scenarios. This project will introduce a unified plugin-level Cache and Nominator abstraction that is shared across all profiles in the same scheduler instance, correctly integrates with `Reserve` / `UnReserve` lifecycle hooks, and fixes the `AddPod` / `RemovePod` handling for high-priority device and NUMA workloads.
- Expected Outcome:
  - A shared plugin-level `Cache` and `Nominator` framework exposed to Koordinator scheduler plugins, with a lifecycle tied to the scheduler instance rather than individual profiles
  - Migration of DeviceShare, NodeNUMAResource, and Reservation plugin caches to the shared implementation, removing per-profile duplication
  - Correct `AddPod` / `RemovePod` handling via reused `Reserve` logic that records assignment placements in the nominator, cleared symmetrically on `Reserve` / `UnReserve`
  - Regression and stress tests covering multi-profile scheduling, preemption with nominated pods, and high-priority RDMA / VF / NV-Switch device assignment
  - Developer documentation describing the shared Cache / Nominator API and migration guidance for other plugins
- Recommended Skills:
  - Go programming
  - Deep understanding of the Kubernetes scheduler-framework (Cache, PodNominator, Reserve/UnReserve)
  - Familiarity with device plugins, NUMA topology, and preemption semantics
  - Concurrency and cache-invalidation reasoning
- Mentor(s):
  - Rougang Han (@saintube, saintube@foxmail.com)
  - Jianyu Wang (@ZiMengSheng, zmsjianyu@gmail.com)
- Upstream Issue: https://github.com/koordinator-sh/koordinator/issues/2749 , https://github.com/koordinator-sh/koordinator/issues/1959

#### Fragmentation-Aware Rescheduling and Scale-Down Binpack for Koordinator

- Description: Resource fragmentation in a cluster has two common sources: (1) intra-node imbalance between resource types — e.g. a node reaches 90% CPU allocation while memory allocation stays at 50%, leaving memory stranded; and (2) scale-down that evicts the "wrong" pods, leaving many nodes partially filled instead of fully drained. Koordinator currently has no dedicated strategy for either case. This project will add two coordinated capabilities: a descheduler plugin that detects nodes whose per-resource allocation imbalance (measured via standard deviation, consistent with the kube-scheduler `NodeResourcesBalancedAllocation` plugin) exceeds a configurable threshold and evicts pods whose removal most reduces the std; and a scale-down binpack strategy that, when upper-layer controllers scale workloads down, picks pod victims so that remaining allocations are concentrated on fewer nodes (inspired by Volcano's scale-down binpack). Both capabilities will reuse Koordinator's `ReservationFirst` eviction mode to preserve workload stability, and cooperate with the scheduler's `NodeResourcesBalancedAllocation` so rebalanced pods land on better-balanced nodes.
- Expected Outcome:
  - New descheduler plugin that detects intra-node resource-type imbalance above a configurable threshold using standard deviation across CPU/memory (and optionally other resources)
  - Pod eviction prioritization that picks pods maximally reducing the per-node std after eviction
  - Scale-down binpack strategy exposed to upper-layer controllers so scale-down victims are chosen to reduce cluster-level fragmentation
  - Integration with the `ReservationFirst` eviction mode to preserve workload stability
  - Coordination with the scheduler `NodeResourcesBalancedAllocation` plugin so evicted pods land on better-balanced nodes
  - Unit tests, e2e tests, and a documented benchmark showing reduced resource fragmentation for both rescheduling and scale-down scenarios
  - User-facing documentation and example descheduler / scale-down configurations
- Recommended Skills:
  - Go programming
  - Kubernetes descheduler and scheduler-framework internals
  - Understanding of resource allocation metrics, binpack algorithms, and eviction safety
- Mentor(s):
  - Tao Song (@songtao98, songtao2603060@gmail.com)
  - Jianyu Wang (@ZiMengSheng, zmsjianyu@gmail.com)
- Upstream Issue: https://github.com/koordinator-sh/koordinator/issues/2332 , https://github.com/koordinator-sh/koordinator/issues/2790
