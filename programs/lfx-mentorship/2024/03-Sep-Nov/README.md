# Term 03 - 2024 September - November

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity                                                                                                     | date                                                                                |
|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|   
| project proposals                                                                                            | Jul 3 - Jul 30 5:00 PM PDT                                                          |
| mentee applications open                                                                                     | Jul 31 - Aug 13 5:00 PM PDT                                                         |
| application review/admission decisions                                                                       | Aug 14 - Aug 27 5:00 PM PDT                                                         |
| selection notifications                                                                                      | Sept 3, 2024 5:00 PM PDT                                                            |
| Mentorship program begins with the initial work assignments                                                  | Sept 9, 2024                                                                        | 
| Midterm mentee evaluations and first stipend payments                                                        | October 15, 2024 5:00 PM PDT (the week following the National Day holiday in China) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Nov 26, 2024 5:00 PM PDT (Giving some time after KubeCon NA)                        |
| Last day of term                                                                                             | November 29, 2024                                                                   |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here [2024/03-Sep-Nov/project_ideas.md](./project_ideas.md), by July 23, 2024.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Accepted projects

### Envoy Gateway

#### IPv4/IPv6 Dual Stack Support

CNCF - Envoy Gateway: IPv4/IPv6 Dual Stack Support (2024 Term 3)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/408607a5-22a7-469e-ba9b-773e8fb06ace

### Inspektor Gadget

#### New gadget for detecting deadlocks

CNCF - Inspektor Gadget: New gadget for detecting deadlocks (2024 Term 3)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7fdda09c-0eb8-466b-9fdf-e4b3c6a1d5b3

#### Testing Inspektor Gadget gadgets on different kernel versions

CNCF - Inspektor Gadget: Testing Inspektor Gadget gadgets on different kernel versions (2024 Term 3)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a0e8bcc0-5c52-48ec-9959-506ce27ad46e

#### Exploring Chaos Engineering with eBPF and Inspektor Gadget

CNCF - Inspektor Gadget: Exploring Chaos Engineering with eBPF and Inspektor Gadget (2024 Term 3)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c99b5a1f-a1e8-4a9c-93f1-3ee965dabbae

#### Develop DNS/HTTP event generation capabilities in Inspektor Gadget

CNCF - Inspektor Gadget: DNS/HTTP Event Generation Capabilities (2024 Term 3)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c7ba30b5-625d-4086-ad09-c60071e01a8c

### Istio

#### Improve documentation build infrastructure

CNCF - Istio: Improve documentation build infrastructure (2024 Term 3)

- Description: The build infrastructure for istio.io currently carries a complete archived copy of the site for each release of Istio.  These archived versions should be separated to their own branch, with only the supported versions published.  We should also separate out content which is not version-specific (e.g. the home page, news and blogs) so that only the latest version of this content is visible online.
- Expected Outcome: Updated publishing infrastructure for istio.io which separates evergreen content (home page, blogs) with versioned content (documentation).  Drop-downs per docs page allow switching between the supported versions.  
- Recommended Skills: Systems engineering, scripting, programming (Go/Bash), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15463
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7a9cac67-6cfc-4915-bc39-8f2b5c1a4d00

#### Implement new site search

CNCF - Istio: Implement new site search (2024 Term 3)

- Description: Up to four versions of Istio are supported at one time, and so the documentation for each must be available. Our current site search is outdated and needs to be replaced, so that the search content only exists in the site search, and only fresh content is available on google.com.
- Expected Outcome: Working site search on istio.io, which lets you search for content for the currently supported versions.
- Recommended Skills: Hugo, Systems engineering, scripting, programming (Bash/go), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15464
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/557f553d-6cab-41e5-925e-c8063dc99d7e

### Jaeger

#### Jaeger v2 Kubernetes Operator

CNCF - Jaeger: Jaeger v2 Kubernetes Operator (2024 Term 3)

- Description: Jaeger-v1 has its own Kubernetes Operator (https://github.com/jaegertracing/jaeger-operator) which deploys Jaeger components according to the deployment strategy as well as the database or datastore. The goal of this project is to develop a new operator for [Jaeger-v2](https://github.com/jaegertracing/jaeger/issues/4843) that achieves feature parity with the v1 operator while introducing improvements and new capabilities. This new operator will leverage the [OpenTelemetry operator](https://github.com/open-telemetry/opentelemetry-operator) for Jaeger-v2 deployment while maintaining and enhancing the storage management features from the v1 operator. More details in the [upstream issue](https://github.com/jaegertracing/jaeger/issues/5766).
- Expected Outcome: By the end of this project, we aim to achieve full feature parity between the Jaeger v2 operator and the v1 operator, with the added benefits of OpenTelemetry integration. The new operator will provide a seamless experience for users, maintaining the robustness and flexibility of v1 while introducing the advantages of v2 and OpenTelemetry.
- Recommended Skills: Go, scripting, kubernetes, operator framework, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5766
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f15ad171-503c-41ae-b573-1e3088312dba

#### Jaeger v2 Helm Chart

- Description: Currently, Jaeger v1 has an official Helm chart (https://github.com/jaegertracing/helm-charts), but there isn't one yet for Jaeger v2. The goal of this project is to develop a comprehensive Helm chart for Jaeger v2 that allows for easy deployment and management of Jaeger v2 components in Kubernetes environments. This chart should provide flexibility in configuration, support various deployment scenarios, and integrate well with the new architecture of Jaeger v2. More details in the [upstream issue](https://github.com/jaegertracing/jaeger/issues/5767).
- Expected Outcome: By the end of this project, we aim to have a production-ready Helm chart for Jaeger v2 that is:
 - Fully functional and tested on the current version of Kubernetes
 - Well-documented with clear usage instructions and examples
 - Flexible enough to support a wide range of deployment scenarios
 - Ready for submission to the official Jaeger Helm chart repository
- Recommended Skills: Go, scripting, kubernetes, helm, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5767
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/330c6397-06ed-481c-8c86-13fdcbce3896

### Konveyor AI

#### Intelli-j IDE plugin integration of analyzer-lsp for real time updates with Konveyor AI

CNCF - Konveyor AI: IntelliJ plugin for Real-Time Updates with analyzer-lsp (2024 Term 3)

- Description: Konveyor provides a unified experience of tools to help organizations modernize their applications at scale, transitioning them to Kubernetes and cloud-native technologies. Recently the Konveyor community began the development of a Generative AI approach for application modernization called Konveyor-AI.  Konveyor AI accelerates application migration by discovering migration incidents in the source code and providing LLM-generated fixes in a diff view presentation. When proposed changes are accepted, it provides real-time updates on the number of incidents.  The presentation side for this work is currently serviced via an IDE extension for VSCode.
We aim to expand Konveyor AI by developing an IntelliJ plugin. Our first step involves integrating the static code analysis tool, analyzer-lsp, into the IntelliJ plugin. We plan to create a common module for interaction with analyzer-lsp, which can be used in multiple IDE plugins, starting with VSCode and IntelliJ. Currently, the IntelliJ IDE uses the Konveyor CLI tool, Kantra, for analysis and transformation, but we need to replace Kantra with analyzer-lsp to optimize real-time updates.

- Expected Outcome:
Define and implement a new module or library to facilitate integration of analyzer-lsp into multiple IDEs.  We will start with VSCode and IntelliJ to begin.

- Recommended Skills: Typescript, Java, Basic software development skills (command line, git)

- Mentor(s):
  - Hiteshwari Patel (@hhpatel14, patelhiteshwari95@gmail.com)
  - Savitha Raghunathan (@sraghunathan, saveetha13@gmail.com)

- Upstream Issue: https://github.com/konveyor/enhancements/issues/187
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0d392e44-e3ce-4799-8082-35ae48910f24

#### Enhancing Kai with Data Querying for Fine-Tuning and Potential InstructLab Integration

CNCF - Konveyor AI: Data Querying for Kai & InstructLab Integration Potential (2024 Term 3)

- Description:
  - Kai is a tool designed to leverage AI for application modernization by analyzing code, identifying issues, and suggesting fixes. We aim to enhance Kai by developing a robust data querying mechanism to facilitate fine-tuning processes. This enhancement will lay the groundwork for potential future integration with InstructLab, an open-source AI project enabling community contributions to Large Language Models (LLMs) by adding new skills or knowledge. The primary focus will be on creating mechanisms to query and utilize data effectively, with a stretch goal of integrating static analysis tools and implementing an agent-based workflow.
  - This project will significantly enhance Kai’s backend, making it more scalable and capable of providing deeper code insights while also contributing to the enrichment of LLMs through InstructLab. It will offer a rich learning experience for participating students, covering backend development, workflow management, and contributing to open-source AI projects.

- Expected Outcome:
  - Successfully develop and implement a data querying mechanism in Kai to facilitate fine-tuning processes.
  - Demonstrate the enhanced backend with improved data querying capabilities.
  - Participate actively in community meetings, presenting progress and insights.
  - Create a detailed blog post documenting the project, its outcomes, and potential future directions, including the possible integration with InstructLab.
  - (Stretch Goal) Develop a reusable module for agent-based workflows into Kai, enhancing its ability to detect and report code issues.

- Recommended Skills:
  - Python
  - Podman / Docker
  - Basic Software Development skills (command line, git)
  
- Mentor(s):
  - Jonah Sussman (@JonahSussman, jsussman@redhat.com)
  - Fabian von Feilitzsch (@fabianvf, fvonfeil@redhat.com)

- Upstream Issue: https://github.com/konveyor/enhancements/issues/187
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8493016e-975f-4559-8833-db4c884b2fc5

### WasmEdge

#### WASM Serializer with new proposals

CNCF - WasmEdge: WASM Serializer with new proposals (2024 Term 3)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c96de5c4-e1c3-4a02-a18a-65507d1cb675

#### Fix bugs found by fuzzer

CNCF - WasmEdge: Fix bugs found by fuzzer (2024 Term 3)

- Description: WasmEdge received several bug reports, which Fuzzer found. We would like to ask mentees to investigate and determine whether the issue is real, figure out solutions, or mark it as a `won't-fix` issue if it's invalid. To apply for this mentorship, you should also submit a proposal as part of the application materials. Please check the upstream issue for the detailed target list and the proposal template.
- Expected Outcome: At least fix/determine 60% of the mentioned issues.
- Recommended Skills: git, C++, WebAssembly
- Mentor(s):
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
  - Yi-Ying He (@q82419, yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3584
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/824beced-74a9-4b65-9db3-c20589b9d0f6

#### Create an LLM app with deep understanding of a GitHub repo

CNCF - WasmEdge: Create an LLM app with deep understanding of a GitHub repo (2024 Term 3)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7909e713-a081-49d9-b14e-4ee5a36e0e97

#### Create a Wasm-based LLM app for financial analysts

CNCF - WasmEdge: Create a Wasm-based LLM app for financial analysts (2024 Term 3)

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/75feef58-e372-4797-846a-c6a5d6087a19


