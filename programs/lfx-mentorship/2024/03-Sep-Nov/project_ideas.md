## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
  - 2nd Mentor Name (@mentor_github, mentor@email.addy)
- Upstream Issue:

```

---

## Proposed Project ideas

### Envoy Gateway

#### IPv4/IPv6 Dual Stack Support

- Description: Envoy Gateway is an open source project for managing Envoy Proxy as a standalone or Kubernetes-based application gateway. Gateway API resources are used to dynamically provision and configure the managed Envoy Proxies. Currently the implementation only supports Kubernetes clusters with IPv4 enabled, and not IPv6
- Expected Outcome:
  The managed Envoy Proxy fleet can
  - Accept connections/listen on an interface that has an IPv6 address assigned to it
  - Can route to IPv6 pod endpoints/addresses
- Recommended Skills: Golang, familiarity with Kubernetes Networking
- Mentor(s):
  - Jianpeng He (@zirain, zirain@tetrate.io)
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/184

### Konveyor AI

#### Intelli-j IDE plugin integration of analyzer-lsp for real time updates with Konveyor AI

- Description: Konveyor provides a unified experience of tools to help organizations modernize their applications at scale, transitioning them to Kubernetes and cloud-native technologies. Recently the Konveyor community began the development of a Generative AI approach for application modernization called Konveyor-AI.  Konveyor AI accelerates application migration by discovering migration incidents in the source code and providing LLM-generated fixes in a diff view presentation. When proposed changes are accepted, it provides real-time updates on the number of incidents.  The presentation side for this work is currently serviced via an IDE extension for VSCode.
We aim to expand Konveyor AI by developing an IntelliJ plugin. Our first step involves integrating the static code analysis tool, analyzer-lsp, into the IntelliJ plugin. We plan to create a common module for interaction with analyzer-lsp, which can be used in multiple IDE plugins, starting with VSCode and IntelliJ. Currently, the IntelliJ IDE uses the Konveyor CLI tool, Kantra, for analysis and transformation, but we need to replace Kantra with analyzer-lsp to optimize real-time updates.

- Expected Outcome:
Define and implement a new module or library to facilitate integration of analyzer-lsp into multiple IDEs.  We will start with VSCode and IntelliJ to begin.

- Recommended Skills: Typescript, Java, Basic software development skills (command line, git)

- Mentor(s):
  - Hiteshwari Patel (@hhpatel14, patelhiteshwari95@gmail.com)
  - Savitha Raghunathan (@sraghunathan, saveetha13@gmail.com)

- Upstream Issue: https://github.com/konveyor/enhancements/issues/187

### Inspektor Gadget

#### New gadget for detecting deadlocks

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux hosts. In this project, you will write a new gadget in BPF and WASM to detect deadlocks in applications. The BPF program will be attached on mutex locks and mutex unlocks functions with uprobes. The WASM program will build a mutex wait directed graph and look for cycles. Then, the gadget will display the stack trace showing the mutex locks causing the deadlock.

    This project builds upon previous work:

  - In a previous mentorship project, Inspektor Gadget gained support for uprobes and kernel stack traces (https://www.inspektor-gadget.io/blog/2024/06/supporting-uprobe-based-gadgets-lfx-mentorship-report/).
  - BCC tools include deadlock.py doing the same: https://github.com/iovisor/bcc/blob/master/tools/deadlock_example.txt and https://github.com/iovisor/bcc/blob/master/tools/deadlock.py

    However, this project still has challenging issues to resolve:

  - Inspektor Gadget does not support dumping stack traces from userspace applications yet

- Expected Outcome: A new gadget detects lock order inversion and prints the stack traces where each mutex was acquired.

- Recommended Skills: Go, BPF, WASM, graph data structure

- Mentor(s):
  - Alban Crequy (@alban, albancrequy@microsoft.com)
  - Burak Ok (@burak-ok, burakok@microsoft.com)

- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3194

#### Testing Inspektor Gadget gadgets on different kernel versions

- Description: The Inspektor Gadget gadgets are heavily coupled to the kernel version as they need to access internal kernel data and use different eBPF features. One key feature for Inspektor Gadget is to hide all this complexity from its users: the gadgets should work the same regardless the kernel version they’re running in. To be sure our gadgets (and Inspektor Gadget too) are working fine, we need to run tests on different kernel versions we want to support.

    The purpose of this mentorship is to develop a framework that allows gadget developers to (1) implement unit tests for their gadgets (2) and run them on different kernel versions. A previous mentorship successfully implemented a framework for running integration tests (https://github.com/inspektor-gadget/inspektor-gadget/pull/2607), now it’s time to extend that framework to allow running unit tests as well. Some preliminary investigation done in (https://github.com/inspektor-gadget/inspektor-gadget/pull/2638) explored the possibility to use https://github.com/lmb/vimto, it seems it’s the right tool for the job.

Expected Outcome: Gadget developers have a way to run unit tests in different kernel versions for their gadgets in their CI platform

- Recommended Skills: Golang

- Mentor(s):
  - Mauricio Vasquez Bernal (@mauriciovasquezbernal, mauriciov@microsoft.com)
  - Alban Crequy (@alban, albancrequy@microsoft.com)

- Upstream Issue:
  - https://github.com/inspektor-gadget/inspektor-gadget/issues/3195
  - https://github.com/inspektor-gadget/inspektor-gadget/issues/1343


#### Exploring Chaos Engineering with eBPF and Inspektor Gadget

- Description: Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system’s capability to withstand turbulent conditions in production, ref. https://principlesofchaos.org/, i.e. to induce errors on a system and see how it behaves. eBPF can be used to induce such errors on a system, it can change the return value of a kernel function, drop or modify network packets, etc.

    The goal of this mentorship is to implement a set of gadgets for Inspektor Gadget that helps causing system chaos. These are some ideas of the gadgets that should be implemented:

  - DNS: Drop/modify/add latency DNS requests and/or responses based on
    - The container or process performing it
      - The target URL
      - The DNS server
    - TCP/UDP: Drop network packets based on
      - Destination / Source IPs
      - Originating or destination pod or process
    - Simulate system call failures based on
      - Container or process performing the syscall
      - Syscall

    The gadgets should expose metrics with the number of times it induced failures, and possibly also provide notifications when those errors were induced.

- Expected Outcome: A set of gadgets with the above functionality should be implemented and merged on the upstream Inspektor Gadget repository. Those gadgets should include documentation and tests.

- Recommended Skills: Golang, eBPF, networking protocols.

- Mentor(s):
  - Michael Friese (@flyth, mfriese@microsoft.com)
  - Mauricio Vasquez Bernal (@mauriciovasquezbernal, mauriciov@microsoft.com)

- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3196

#### Develop DNS/HTTP event generation capabilities in Inspektor Gadget

- Description: Inspektor Gadget enables users to inspect Linux containers and Kubernetes workloads, offering the powerful capability to monitor traffic for currently running applications. So far, gadgets can only passively monitor events, the ability to generate specific events would be a great addition to the existing features. For example, if users could trigger a DNS request from a specific pod or make an HTTP request to a particular endpoint, Inspektor Gadget could check if the request succeeded or not. Users would then be notified if there are errors/outages/problems in the cluster.

- Expected Outcome: As part of the mentorship, you will:

    1. Explore the best way to implement event generation, external program vs implementing it within Inspektor Gadget.
    2. Develop DNS/HTTP event generator and see how it works with gadgets.
    3. Use the event generation in our integration testing.

- Recommended Skills: Golang, Kubernetes and Understanding of DNS/HTTP protocols.

- Mentor(s):
  - Qasim Sarfraz (@mqasimsarfraz, qasimsarfraz@microsoft.com)
  - Burak Ok (@burak-ok, burakok@microsoft.com)

- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3193

### WasmEdge

#### WASM Serializer with new proposals

- Description: WasmEdge provides WASM module serializer in C API level for developers to convert the loaded WASM structure back into binary format. But after supporting the `function-references`, `GC`, `relaxed-SIMD`, and `exception-handling` proposals in WasmEdge, the partitions of these proposals in serializer are not implemented yet. Thus, we would invite mentees to complete the binary format serialization with the above WASM proposals in WasmEdge.
- Expected Outcome:
  * Complete the serialization of the new module extensions in WASM proposals.
  * Complete the serialization of the new instructions added in WASM proposals.
  * Add some basic unit tests with hand-writing WASM binaries.
- Recommended Skills: C++, WASM, git
- Mentor(s):
  - Yi-Ying He (@q82419, yiying@secondstate.io)
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3585

#### Fix bugs found by fuzzer

- Description: WasmEdge received several bug reports, which Fuzzer found. We would like to ask mentees to investigate and determine whether the issue is real, figure out solutions, or mark it as a `won't-fix` issue if it's invalid. To apply for this mentorship, you should also submit a proposal as part of the application materials. Please check the upstream issue for the detailed target list and the proposal template. 
- Expected Outcome: At least fix/determine 60% of the mentioned issues.
- Recommended Skills: git, C++, WebAssembly
- Mentor(s):
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
  - Yi-Ying He (@q82419, yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3584

#### Create an LLM app with deep understanding of a GitHub repo

- Description: LLM assisted coding is one of the most promising application areas for modern AI. It will also have profound impact on open source software development. As many projects have demonstrated, "feeding" an LLM with contents from a GitHub repo will make it better at understanding coding tasks for this project. In this project, we will take a modern approach to build LLM agents based on LlamaEdge / WasmEdge, and supplement it with deep knowledge of open source projects on GitHub. The goal is for the agent to answer questions and solve problems raised by the open source community.
- Expected Outcome:
  * Build an automated tool to extract and process all files in a repo. That includes source code and docs.
    * develop a GitHub bot to capture all change files and update the knowledge base in real time.
    * generate a summary for each file (using an LLM) and supplement with its file path and other meta data.
    * create a vector database with the summary and original text. The vector is computed from the summary to improve search efficiency.
  * Run an LLM agent node with the RAG database from the repo.
  * Create a GitHub bot that can read new issues and respond with either an answer or a coding suggestion based on the content inside the repo.
  * Evaluate the answer quality.
- Recommended Skills:
  * Rust
  * [LlamaEdge](https://github.com/LlamaEdge/LlamaEdge) -- see a [tutorial](https://llamaedge.com/docs/user-guide/get-started-with-llamaedge)
  * ChatGPT and LLMs
  * The [RAG process](https://llamaedge.com/docs/category/server-side-rag)
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3581

#### Create a Wasm-based LLM app for financial analysts

- Description: We would like to develop an LLM-based financial data analytics application using open source LLMs, embedding models, the LlamaEdge application server, vector databases, and data processing tools. It will provide an open source "template" and showcase "best practices" for similar applications in this fast growing application area.
- Expected Outcome:
  * Create a data processing pipeline in Python or Rust to automatically
    * collect public company’s SEC 10-Q quarterly reports and press releases. e.g., [Apple 10-Q](https://www.sec.gov/edgar/browse/?CIK=0000320193) and [Apple press release](https://www.apple.com/newsroom/2024/05/apple-reports-second-quarter-results/)
    * generate a summary for each SEC 10-Q and press release documents using an LLM service such as [LlamaParse](https://docs.llamaindex.ai/en/stable/llama_cloud/llama_parse/) or [EYELEVEL xRay](https://dashboard.eyelevel.ai/xray/)
    * create and continuously update a vector database with the summary and original text. The vector is computed from the summary to improve search efficiency.
  * Create a server-side RAG app that can chat with the vector knowledge base of financial statements.
  * Evaluate the answer quality
  * Explore LLM function calling to incorporate real-time information and actions
- Recommended Skills:
  * Python
  * [LlamaEdge](https://github.com/LlamaEdge/LlamaEdge) -- see a [tutorial](https://llamaedge.com/docs/user-guide/get-started-with-llamaedge)
  * ChatGPT and LLMs
  * The [RAG process](https://llamaedge.com/docs/category/server-side-rag)
  * Rust (optional)
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3580

### Jaeger
#### Jaeger v2 Kubernetes Operator  
- Description: Jaeger-v1 has its own Kubernetes Operator (https://github.com/jaegertracing/jaeger-operator) which deploys Jaeger components according to the deployment strategy as well as the database or datastore. The goal of this project is to develop a new operator for [Jaeger-v2](https://github.com/jaegertracing/jaeger/issues/4843) that achieves feature parity with the v1 operator while introducing improvements and new capabilities. This new operator will leverage the [OpenTelemetry operator](https://github.com/open-telemetry/opentelemetry-operator) for Jaeger-v2 deployment while maintaining and enhancing the storage management features from the v1 operator.
- Expected Outcome: By the end of this project, we aim to achieve full feature parity between the Jaeger v2 operator and the v1 operator, with the added benefits of OpenTelemetry integration. The new operator will provide a seamless experience for users, maintaining the robustness and flexibility of v1 while introducing the advantages of v2 and OpenTelemetry.
- Recommended Skills: Go, scripting, kubernetes, operator framework, CI/CD
- Mentor(s):  
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net 
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5766
#### Jaeger v2 Helm Chart 
- Description: Currently, Jaeger v1 has an official Helm chart (https://github.com/jaegertracing/helm-charts), but there isn't one yet for Jaeger v2. The goal of this project is to develop a comprehensive Helm chart for Jaeger v2 that allows for easy deployment and management of Jaeger v2 components in Kubernetes environments. This chart should provide flexibility in configuration, support various deployment scenarios, and integrate well with the new architecture of Jaeger v2. Relevant links:
 - Jaeger: https://www.jaegertracing.io/
 - Jaeger v2 announcement: https://medium.com/jaegertracing/announcing-jaeger-v2-a-new-architecture-for-distributed-tracing-e87b1fea0fe4
 - Helm: https://helm.sh/
 - Existing Jaeger Helm charts: https://github.com/jaegertracing/helm-charts
- Expected Outcome: By the end of this project, we aim to have a production-ready Helm chart for Jaeger v2 that is:
 - Fully functional and tested on the current version of Kubernetes
 - Well-documented with clear usage instructions and examples
 - Flexible enough to support a wide range of deployment scenarios
 - Ready for submission to the official Jaeger Helm chart repository
- Recommended Skills: Go, scripting, kubernetes, helm, CI/CD
- Mentor(s):  
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net 
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5767


### KCL

#### New local dependency storage for KCL package management tool

- Description: `kpm` is a package management tool for KCL. `kpm` needs to refactor the local storage structure of the current dependencies to support storage of packages with the same name from different OCI registes and caching of the remote dependencies.
- Expected Outcome: The local storage structure has been designed in issue https://github.com/kcl-lang/kpm/issues/384, and the feature in issue need to be implemented.
- Recommended Skills: golang
- Mentor(s):
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/384

#### The checksum check of the three-party dependencies

- Description: `kpm` is a package management tool for KCL. `kpm` currently lacks checksum verification for dependencies, so this part needs to be completed to support package integrity verification and package source verification

- Expected Outcome: Complete the workflow of adding checksum through `kpm` when uploading package and verifying checksum through `kpm` when downloading package
- Recommended Skills: golang
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Co-Mentor:
  - Akash Kumar (@AkashKumar7902, meakash7902@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/394

#### KCL Language Server Protocol Support on Lsp4IJ for Jetbrains IDEs

- Description: Currently, the KCL IDE plug-in based on Jetbrains LSP cannot support all versions of Jetbrains IDE, so migrate the KCL IDE plug-in to Lsp4IJ to support all versions of Jetbrains IDE.

- Expected Outcome: KCL IDE plug-in is migrated to Lsp4IJ
- Recommended Skills: Java
- Mentor(s):
  - Zheng Zhang (@He1pa, he1pa404@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue (URL): https://github.com/kcl-lang/intellij-kcl-lsp/issues/3

### Kyverno

#### Kyverno CLI for the Mutate Existing Rule

- Description: Support the mutate existing rule in Kyverno CLI.
- Expected Outcome: Allow users to be able to apply mutate existing policies to resources from 1. file systems; 2. clusters.
- Recommended Skills: Golang, Kubernetes, Cobra
- Mentor(s):
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
  - Mariam Fahmy (@MariamFahmy98, mariam@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/4354


#### Policy Exceptions 3.0

- Description: Support some enhancements to Policy Exceptions.
- Expected Outcome:
1. Support list of PolicyException namespaces (--exceptionNamespace flag)
2. PolicyExceptions to have a status object and report readiness in printer column
3. Support imageReferences in Policy Exceptions for verify image rules
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Mariam Fahmy (@MariamFahmy98, mariam@nirmata.com)
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9478
