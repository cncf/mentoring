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

### KubeEdge 

#### Deep integration of KubeEdge with AMD edge nodes

- Description: AMD chips, with their powerful x86 architecture, exceptional computing performance, and advanced NPUs, demonstrate significant potential in fields such as industrial automation, in-vehicle systems, and high-performance edge computing. Introducing AMD's robust general-purpose and heterogeneous computing capabilities into the KubeEdge ecosystem is crucial for handling increasingly complex and latency-sensitive edge AI applications.However, the deep integration, performance optimization, and best practices between KubeEdge and AMD's high-performance edge platforms—particularly their built-in NPUs and other hardware acceleration units—still require systematic exploration and validation. This project aims to establish a complete link between KubeEdge and AMD edge nodes, building a comprehensive edge computing solution from hardware deployment to NPU acceleration, thereby greatly enriching KubeEdge's hardware ecosystem.
- Expected Outcome: 
  - Debug and support KubeEdge edge nodes running on AMD chips
  - Successfully deploying and managing edge application Pods on AMD-based edge nodes
  - Scheduling and managing AMD NPU resources through KubeEdge to achieve performance acceleration for edge AI inference applications.
  - Implement monitoring and metric collection for nodes, applications, and NPUs
  - Using KubeEdge to achieve the complete platform setup, configuration, and management from the cloud to AMD edge nodes
  - Complete hardware compatibility testing and produce high-quality technical documentation or blogs
- Recommended Skills: Go, Kubernetes, KubeEdge, Linux, Hardware Integration, AI/ML
- Mentors:
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6429 

#### Industrial Embodied Intelligence Benchmarking Dataset for KubeEdge-Ianvs

- Description: As industrial manufacturing accelerates its digital transformation through advancements in robotics, adaptive production lines, and smart testing systems, cloud-edge collaboration has emerged as a critical enabler for deploying embodied intelligence in complex operational environments. Contemporary industry requirements for embodied intelligence now extend beyond basic task execution to encompass multimodal perception and decision integration, dynamic environment adaptation, and distributed device orchestration. Existing benchmarking frameworks exhibit limitations in evaluating scenario-specific embodied attributes inherent to industrial settings. This initiative leverages the KubeEdge-Ianvs collaborative AI framework, integrating domain-specific test datasets, simulation environments, and quantitative metrics to establish a certified industrial-grade evaluation infrastructure for embodied intelligence systems.
- Expected Outcome:
  - Develop an industrial-grade embodied intelligence dataset through systematic classification and reorganization of existing resources/ examples
  - Deploy baseline algorithms and introduce metrics to establish performance benchmarks within KubeEdge-Ianvs
- Recommended Skills: Python, Benchmark, Dataset, Embodied Intelligence
- Mentors:
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
  - Mengzhuo Chen (@IcyFeather233, icyfeather@foxmail.com)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/197

#### Comprehensive Example Restoration for KubeEdge Ianvs

- Description: Ianvs serves as KubeEdge SIG AI distributed benchmark toolkit. As more and more contributors running, KubeEdge Ianvs now has 25 examples and the number is still increasing. KubeEdge Ianvs then faces mounting usability issues due to dependency evolution and validation mechanisms. As Python versions, third-party libraries, and Ianvs features advance, partial historical examples fail to execute. This has led to surging user-reported Issues from confused contributors, untested PRs breaking core functionality of legacy features, severely outdated documentation misaligning with actual capabilities. Without systematic intervention, the example risks becoming obsolete for edge-AI developers and especially newcomers. We then try to resurrect Ianvs’ usability with comprehensive example restoration.
- Expected Outcome:
  - Diagnose & fix bugs across examples, including dependency manifests, license scan and runtime configurations.
  - Documentation Modernization, including revamp tutorials with reproducible step-by-step guides, publish developer-focused debugging playbooks for common failures
  - Build a CI pipeline testing examples with GitHub Actions against multiple Python versions, critical Ianvs/upstream updates and block PRs that break validated examples
- Recommended Skills: Python, Benchmark, KubeEdge-Ianvs, AI/ML
- Mentors:
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
  - Shijing Hu (@hsj576, sjhu21@m.fudan.edu.cn)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/230

#### Research on Deploying Small Language Models with KubeEdge and Integrating with Enterprise AI Platforms

- Description: KubeEdge, as a native edge computing platform built on the Kubernetes ecosystem, offers capabilities such as reliable cloud-edge communication, edge autonomy, and IoT device integration. However, its ability to support intelligent model execution at the edge has yet to be systematically validated and practiced in real-world scenarios. This research aims to explore the feasibility and performance of deploying and running small language models on edge nodes using KubeEdge
- Expected Outcome:
  - Verification of KubeEdge's model deployment capability at the edge. Deployment and testing of model engines such as vLLM and llama.cpp on edge nodes, along with providing practical examples and detailed documentation for deploying small language models.
  - Exploration of integration schemes between KubeEdge and the OPEA platform. Connecting KubeEdge with OPEA’s model registry and workflow orchestrator to support automated model distribution and deployment from the cloud to edge nodes.
- Recommended Skills: KubeEdge, LLM, Golang, Python
- Mentors:
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6428

#### Device Anomaly Detection Framework Based on KubeEdge

- Description: The current KubeEdge platform represents device states using three statuses: Desired, ObservedDesired, and Reported. The device states displayed on the platform are entirely reliant on the Mapper, which collects and reports data from the device side. However, due to limitations in the Mapper implementation, physical device malfunctions, network delays, and potential network attacks, the device states shown on the platform may not accurately reflect the actual state of the devices. In the KubeEdge platform, if applications depend on device states for decision-making, such inconsistencies in state representation may lead to undesirable outcomes. Therefore, this project aims to design a device state anomaly detection framework for KubeEdge. By exploring the causal relationships among device states, the framework will establish lightweight anomaly detection capabilities and provide a comprehensive toolchain encompassing data collection, model training, real-time anomaly detection, and results visualization.
- Expected Outcome:
  - A general-purpose device anomaly detection framework that supports user-defined detection algorithms
  - A complete technical design document including model selection, training procedures, and detailed architecture diagrams for both training and online detection components
  - A machine learning model and corresponding anomaly detection algorithm capable of capturing causal relationships among device states, trained and tested using standard frameworks
  - An online anomaly detection module integrated into the KubeEdge device state reporting workflow, enabling real-time analysis through a model inference hook
- Recommended Skills: KubeEdge, IoT, Machine Learning
- Mentor(s):
  - Liwei Shen (@meixiezichuan, shenliwei@fudan.edu.cn)
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6312

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

