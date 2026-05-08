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

### Volcano

#### AgentCube

##### Support multi-AgentCube Capability

- Description: At present, AgentCube launches a single agent for both Code Interpretation and agent runtime. However, we have now entered the era of multi-agent collaboration. Consequently, AgentCube aims to support multi-AgentCube orchestration, enabling multiple agents to collaborate on a single task, with AgentCube providing unified management of the lifecycle of these agents.
- Expected Outcome:
  1. Proposal
  2. Code(Including Unit test and E2E test)
  3. User guide and another related docs.
- Recommended Skills:
  - Go, Kubernetes, agent
- Mentor(s):
  - Zhonghu xu(@hzxuzhonghu, zhhxu2011@gmail.com),
  - ZhenCheng Li(@LiZhenCheng9527, lizhencheng6@huawei.com),
- Upstream Issue: https://github.com/volcano-sh/agentcube/issues/301

#### kthena

##### Kthena Router supports APIs for third-party models

- Description: At present, the Kthena router provides robust support for routing within the cluster. However, during discussions with customers, some users have expressed a need for the ability to integrate with external large language model APIs. Consequently, the Kthena community plans to use this LFX to enable the router to access third-party LLM APIs.
- Expected OUtcome:
  1. Proposal
  2. Code(Include unit test. It would be even better if end-to-end testing were included. However, external LLM APIs are unlikely to offer stable, long-term free access, so end-to-end testing is not a prerequisite.)
  3. User Guide and related documents.
- Recommended: Go, Kubernetes, Network, LLM.
- Mentor(s): Zengzeng Yao(@yaozengzeng, yaozengzeng@huawei.com)
- Upstream Issue: https://github.com/volcano-sh/kthena/issues/939

##### Kthena Router Benchmark

- Description: Kthena Router is the LLM routing component in the Volcano/Kthena project, responsible for forwarding inference requests to in-cluster and (soon) third-party model backends. As Kthena gradually matures, the community needs a reproducible benchmark to understand the router's performance characteristics (throughput, latency, tail latency, resource usage) under realistic LLM traffic patterns, and to detect regressions across releases. This project asks the mentee to design and implement a benchmark framework for Kthena Router, produce a complete report. Where the benchmark surfaces clear bottlenecks or inefficiencies, the mentee will also work with maintainers to land code-level optimizations upstream.
- Expected Outcome:
  - A reusable benchmark framework for Kthena Router (load generator, scenario configs, metrics collection, result aggregation), runnable locally and in CI.
  - A defined set of test scenarios covering typical LLM routing patterns (varying QPS, prompt/response sizes, concurrency, number of backends, routing strategies).
  - End-to-end test procedure documented as a runbook (cluster setup, mock/real backends, how to run, how to interpret results).
  - A benchmark report with metrics (throughput, TPOT, TTFT, GPU/CPU/memory) and analysis of bottlenecks.
  - Upstream PR(s) implementing optimizations for any clear hotspots identified, with before/after numbers.
- Recommended Skills: Go, Kubernetes, performance benchmarking and profiling (pprof), basic familiarity with LLM inference and HTTP/gRPC routing.
- Mentor(s):
  - Zengzeng Yao (@yaozengzeng, yaozengzeng@huawei.com),
  - Zhonghu Xu (@hzxuzhonghu, zhhxu2011@gmail.com),
- Upstream Issue: https://github.com/volcano-sh/kthena/issues/942
