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

