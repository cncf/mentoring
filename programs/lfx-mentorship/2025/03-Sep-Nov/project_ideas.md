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

### Karmada

### Support TFJob and PyTorchJob in Karmada via Default Resource Interpreters

- Description: Implement default resource interpreters for TFJob and PyTorchJob workloads in Karmada.
- Expected Outcome: This includes writing the interpreter logic in Golang and Lua, ensuring proper scheduling and propagation of these workloads across member clusters. Additionally, create documentation on how to run TFJob and PyTorchJob on Karmada, and introduce the integration and best practices to the Kubeflow community.
- Recommended Skills: Golang, Lua, Basic understanding of Karmada, Familiarity with TFJob Job and PyTorchJob workloads.
- Mentors
  - Yiheng Ci (@lfbear, lfbear@gmail.com)
  - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/6586

### Support TrainJob and SparkApplication in Karmada via Default Resource Interpreters

- Description: Develop default resource interpreters for TrainJob and SparkApplication workloads in Karmada.
- Expected Outcome: The task involves implementing interpreter logic, validating scheduling/propagation, and documenting the process of running these workloads on Karmada. Share the practice and integration details with the Kubeflow and Spark communities.
- Recommended Skills: Golang, Lua, Basic understanding of Karmada, Familiarity with TrainJob Job and SparkApplication workloads.
- Mentors
  - Zhuang Zhang (@zhzhuang-zju, m17799853869@163.com)
  - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/6587

### Support RayCluster and RayJob in Karmada via Default Resource Interpreters

- Description: Implement default resource interpreters for RayCluster and RayJob workloads in Karmada.
- Expected Outcome: This includes interpreter development, validation, and comprehensive documentation on deploying and managing Ray workloads with Karmada. Present the integration and usage guide to the KubeRay community.
- Recommended Skills: Golang, Lua, Basic understanding of Karmada, Familiarity with RayCluster Job and RayJob workloads.
- Mentors
  - Junhua He (@whitewindmills, jayfantasyhjh@gmail.com)
  - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/6588

#### Support Volcano Job and Notebook in Karmada via Default Resource Interpreters

- Description: Implement default resource interpreters for Volcano Job and Notebook workloads in Karmada.
- Expected Outcome: This includes developing interpreter logic in Golang and Lua, ensuring correct scheduling and propagation of these workloads across member clusters. Additionally, create documentation on how to run Volcano Job and Notebook on Karmada, and introduce the integration and best practices to the Volcano and Kubeflow communities.
- Recommended Skills: Golang, Lua, Basic understanding of Karmada, Familiarity with Volcano Job and Notebook workloads.
- Mentors
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/6589

### Kubernetes

#### Improve Kubernetes Reference Docs Generator

- Description: The reference documentation for the Kubernetes API is generated at the end of every release cycle. Due to difficulties with the tools used to do this, and the state of that tool's documentation, intimate knowledge of how the tool works is required and generating the reference docs can only reliably be performed by one specific person. Currently, it is possible for the generator to fail at multiple points in the process. Many of these failures are entirely undocumented and without any error handling.
- Expected Outcome: A measurable improvement in the usability of the reference docs generator, through some combination of an improvement in documentation, error handling, and code refactoring. It should be possible for other contributors to follow instructions and reliably produce the reference API docs, with solutions to any remaining common failure modes thoroughly documented. 
- Recommended Skills:
  - Go
  - Bash
  - Python
  - Technical Writing
  - Patience when faced with undocumented failure modes
- Mentor(s):
  - Kat Cosgrove (@katcosgrove, kat.cosgrove@gmail.com)
  - Nate Waddington (@nate-double-u, natew@cncf.io)
  - Xander Grzywinski (@salaxander, xandergrzyw@gmail.com)
  - Rey Lejano (@reylejano, rlejano@gmail.com)
- Upstream Issue: https://github.com/kubernetes-sigs/reference-docs/issues/398

### WasmEdge

#### Pointer alignment checking for WASI host function arguments

- Description: WasmEdge implemented a series of WASI host functions to support the official WASI APIs. There are some arguments of WASI APIs are in pointer types. According to the WASI document, the pointer values are expected to be aligned to the alignment of their pointee type, otherwise the the function shall trap. In this mentorship, the mentee should check all functions of WASI interface in WasmEdge, and implement the alignment checking of pointer type arguments.
- Expected Outcome:
  - Add the alignment checking to the pointee type of [WASI host functions in WasmEdge](https://github.com/WasmEdge/WasmEdge/blob/master/include/host/wasi/wasifunc.h), according to the [alignment requirement in WASI functions](https://github.com/WebAssembly/WASI/blob/main/legacy/preview1/docs.md#modules).
  - Hand-write some basic WASM tests to prove the correctness of the implementation.
- Recommended Skills:
  - C/C++
  - WebAssembly
  - GitHub workflows
- Mentor(s):
  - YiYing He (@q82419 , yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/4280

#### Implement the remaining features of wasmedgeup

- Description: WasmEdge currently offers three installers—v0 (deprecated shell script), v1 (Python-based, Linux/macOS only), and v2 (bash-based, limited functionality). A new cross-platform installer, [wasmedgeup](https://github.com/WasmEdge/wasmedgeup), is being developed to unify installation across Linux, macOS, and Windows, simplifying setup and managing versions, dependencies, and hardware detection. Mentees need to implement these key features include uninstall commands, plugin management, and automatic system capability detection.
- Expected Outcome:
  - Implement the remaining features listed above in [wasmedgeup](https://github.com/WasmEdge/wasmedgeup).
  - A document describing how to use.
  - A CI workflow for verifying these new features and ensuring that they can be built and tested on Linux (Ubuntu, Fedora), macOS, and Windows.
- Recommended Skills:
  - Rust
  - GitHub workflows
  - Cross-platform development
- Mentor(s):
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/4283

#### Rust Coder for Claude Code

- Description:
        This is a continuation of our past two LFX mentorship projects -- the Rust Coder.
        https://www.cncf.io/blog/2025/01/10/rustcoder-ai-assisted-rust-learning/
        https://github.com/cardea-mcp/RustCoder
        Users of Rust Coder, which was originally a chatbot and then an MCP server, have told us that they wanted a modern approach like Claude Code. A new focus would also be to port existing Python / C++ projects to Rust, instead of creating Rust projects from scratch. This new proposed LFX mentorship project will
        1 Fork or add to the open-source Claude Code project
        2 Create new workflows to ask the user to import Python / C++ projects, make plans for how to port, and ask the user for preferred Rust crates
        3 Use MCP to add Rust-specific prompts, knowledge base search tools, web-based documentation import tools etc
        4 Use open source coding models to evaluate the results
- Expected Outcome:
  - A Claude Code add-on or fork that is specialized optimized for "rewriting in Rust".
- Recommended Skills:
  - Rust
  - Python or C++
  - Vibe coding tools (e.g., Claude Code, Qwen Coder etc)
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Vivian Hu (@alabulei1, vivian@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/4284

#### Support the Responses API in Llama Nexus

- Description:
        The llama nexus project is an API proxy to provide OpenAI-compatible and unified API endpoints for multiple downstream API servers, including LLamaEdge API servers running open-source LLMs.

        https://github.com/LlamaEdge/llama-nexus

        Currently, the Llama Nexus supports the stateless /chat/completions API endpoint for LLMs. We would like to expand this to support the /responses stateful API from OpenAI as well.

        https://platform.openai.com/docs/api-reference/responses

        https://platform.openai.com/docs/guides/responses-vs-chat-completions

        In particular, we aim to implement support for

        MCP
        Code interpreter
        Web search
        File search
        Browser use (optional)
- Expected Outcome:
  - New features for the Llama Nexus proxy server.
- Recommended Skills:
  - Rust
  - OpenAI API
  - MCP Rust SDK
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Sam Liu (@apepkuss, sam@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/4286