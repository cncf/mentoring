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

### Envoy Gateway

#### Integrating CNCF Fuzzing Framework for Envoy Gateway

- Description: [Envoy Gateway](https://gateway.envoyproxy.io) has become a crucial part of modern cloud-native infrastructures, 
providing a simplified way to deploy and manage [Envoy Proxy](https://www.envoyproxy.io).
Ensuring the reliability and security of Envoy Gateway is paramount for its growing user base.

Fuzzing, a widely-used technique for identifying software vulnerabilities and bugs, can significantly enhance the robustness of Envoy Gateway.
By integrating the [CNCF Fuzzing Framework](https://github.com/cncf/cncf-fuzzing), this project aims to improve the 
security posture of Envoy Gateway through comprehensive automated testing.
- Expected Outcome:
  - Add a fuzz test that covers 80% of code paths for translating Gateway API input configuration into xDS output.
  - Enable continuous fuzzing using [OSS-Fuzz](https://github.com/google/oss-fuzz).
- Recommended Skills: Go, scripting.
- Mentor(s):
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
  - Teju Nareddy (@nareddyt, tnareddy@confluent.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/3124

### Inspektor Gadget

#### Building gadgets with Rust

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux
 hosts. A Gadget is an OCI image that includes one or more eBPF programs, metadata YAML file, and optionally, WASM modules for post processing. Today, Inspektor Gadget provides tooling to build gadgets from source code written in C (for the eBPF module) and Go (for the WASM module). This project is about adding support from building gadgets from Rust both for eBPF programs and for WASM modules.
- Expected Outcome: users can write their gadgets in Rust.
- Recommended Skills: Rust, Go, eBPF, WASM
- Mentor(s):
  - Mauricio Vasquez Bernal (@mauriciovasquezbernal, mauriciov@microsoft.com)
  - Francis Laniel (@eiffel-fl, flaniel@linux.microsoft.com)
- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3950

#### Implementing unit tests

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux hosts. A Gadget is an OCI image that includes one or more eBPF programs, metadata YAML file, and optionally, WASM modules for post processing. As OCI images, they use the same tooling as containers: building, pushing/pulling from OCI Registries.
Even though there are many integration tests, we wish to increase the coverage of unit tests for the majority of internal packages. These packages are essential, and a bad commit could lead to unseen disruptions. Debugging and diagnosing through integration tests is cumbersome and takes too much time.
- Expected Outcome:
  - Find out which packages are in most need of unit tests
  - Create a mock class/framework if needed
  - Implement unit tests
- Recommended Skills: Go
- Mentors:
  - Burak Ok (@burak-ok, burakok@microsoft.com)
  - Qasim Sarfraz (@mqasimsarfraz,  qasimsarfraz@microsoft.com)
- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3835

#### Inspekting and analysing gadgets

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux
 hosts. A Gadget is an OCI image that includes one or more eBPF programs, metadata YAML file, and optionally, WASM modules for post processing. As OCI images, they use the same tooling as containers: building, pushing/pulling from OCI Registries. But today, Inspektor Gadget does not have good tooling for inspecting a gadget: the `ig image inspect` command just gives the gadget name, digest and creation date without further details.
- Expected Outcome: the `ig image inspect` command tells the architectures supported by the gadget, the layers included in the OCI image, the data sources with their fields, the eBPF parameters. Additionally, inspecting the eBPF module can provide the ELF sections, the eBPF maps and the disassembled eBPF bytecode annotated with the source when available.
- Recommended Skills: Go, eBPF
- Mentors:
  - Alban Crequy (@alban, albancrequy@microsoft.com)
  - Jose Blanquicet (@blanquicet, josebl@microsoft.com)
- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3387

### Jaeger

#### Jaeger: Upgrade Storage Backends to V2 Storage API

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. A critical component of Jaeger is its storage backends, where traces captured by Jaeger are stored. With the release of Jaeger v2 last year we introduced a new, more efficient Storage API v2. However, the existing backend implementations in Jaeger are still using v1 API that is only wrapped in the v2 adapter, which prevents them from benefiting from the new capabilities such as batch writes and result streaming. The objective of this project is to upgrade some (or all) backend implementations to use the Storage API v2 natively. Please refer to the upstream issue for more details.
- Expected Outcome:
  - Upgrade memory and Elasticsearch backends to use the Storage API v2 natively.
  - Bonus: upgrade Cassandra and Badger backends to use the Storage API v2 natively.
- Recommended Skills: Go, scripting, CI/CD, familiarity with Elasticsearch/Cassandra a plus but not required.
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Mahad Zaryab (@mahadzaryab1, mahadzaryab1@gmail.com)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/6458

#### Upgrade charts and graphs in Jaeger UI

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. Jaeger UI pioneered many new visualizations for analyzing distributed traces. However, over time, it accumulated views that utilize different and sometimes deprecated viz libraries. The objective is to standardize charting / graphing libraries used in Jaeger UI, upgrade their dependencies, and add new visualization features. Please refer to the upstream issue for more details.
- Expected Outcome:
  - Jaeger UI is not using deprecated dependencies
  - Consistent look and feel of graphs
  - Bonus: side panel for details for a given node
  - Bonus: overlaying metrics on the graph (as edge annotations and node coloring to reflect health / error rates)
  - Bonus: varying node displays depending on the type of node and implementation language
- Recommended Skills: Javascript, Typescript, React, NPM, Vite.js
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/2534

### KubeStellar

#### Enhancing KubeStellar UI for Expanded Functionality and User Experience

- Description: [KubeStellar](https://kubestellar.io) is a flexible solution for challenges associated with multi-cluster configuration management for edge, multi-cloud, and hybrid cloud. KubeStellar's UI is a tool for interacting with KubeStellar components, managing its inventory and transport space (ITS), and workload description space (WDS). Currently, the UI is in its early stages, providing only basic features like reading kubeconfig info and displaying ITS and WDS. The goal of this project is to significantly enhance the functionality and usability of the KubeStellar UI by implementing additional core features, improving its user interface, and ensuring a seamless experience for Kubernetes cluster operators.

- Objectives
  1. Implement BindingPolicies CRUD:
    - Develop intuitive interfaces for creating, reading, updating, and deleting binding policies.
    - Ensure policies are validated against Kubernetes standards and KubeStellar’s architecture.
    - Allow users to view and manage binding policies tied to specific workloads or clusters.
  2. Add Workload Deployment to WDS:
    - Build functionality for deploying workloads to one or more WDS.
    - Provide real-time feedback on deployment status and logs.
    - Add visualization for workload placement across multiple WDS, ensuring clarity of resource distribution.
  3. Cluster Onboarding to ITS:
    - Create an onboarding wizard to guide users through adding new clusters to the ITS.
    - Validate clusters' compatibility and connection during the onboarding process.
    - Automatically generate and display kubeconfig details for onboarded clusters.
  4. Enhance UI Usability and Performance:
    - Upgrade the UI with modern design principles for a consistent and intuitive user experience.
    - Leverage React and Vite to optimize load times and component rendering.
    - Introduce real-time updates for ITS and WDS data using WebSocket or API polling.
  5. Backend Integration with Go:
    - Extend the Go backend to support new API endpoints for the proposed features.
    - Ensure secure and efficient communication between the UI and Kubernetes API.
    - Validate backend performance under high-scale usage.

- Expected Outcomes
  - New Features:
    - BindingPolicies CRUD operations accessible via the UI.
    - Workload deployment support to one or more WDS.
    - Seamless onboarding process for adding clusters to the ITS.
  - Improved Usability:
    - A polished UI with a modern look and feel, supporting intuitive navigation.
    - Real-time insights into cluster operations and workload deployments.
  - Robust Performance:
    - Scalable backend integration with Go for handling large cluster environments.
    - Optimized frontend with Node.js, React, and Vite for faster interaction.

- Bonus Features
  - Visualization Improvements:
    - Visual dashboard for workload deployments and cluster health monitoring.
    - Integration of charts to show resource utilization trends across ITS and WDS.
  - User Customizations:
    - Add support for user-defined themes (dark/light mode).
    - Exportable configurations for sharing binding policies or deployment setups.

- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.

- Mentor
  Andy Anderson
  GitHub: @clubanderson
  Email: andy@clubanderson.com
  Braulio Dumba
  GitHub: dumb0002
  Email: braulio.dumba@ibm.com

- Repository
  GitHub Repository: kubestellar/ui

By implementing these enhancements, KubeStellar UI will evolve into a comprehensive tool for cluster management, empowering users to efficiently deploy and manage resources while offering an intuitive and modern interface.

### WasmEdge

#### Implement a new WasmEdge installer in Rust

- Description: Create a new tool in Rust that provides: Support cross-operating systems, including Linux(amd64 and aarch64), macOS(Intel models and Apple Silicon models), and Windows(amd64); Simplifies installation of the WasmEdge runtime and its plugins in a single tool called wasmedgeup; Automatically handles versioning, dependencies, OS/ARCH detection, and ensure the same user experience across operating systems and architectures. For more details, please refer to the upstream issue.
- Expected Outcome:
  - A Rust implemented installer in [wasmedgeup](https://github.com/WasmEdge/wasmedgeup).
  - A document to describe how to use.
  - A CI workflow to build and test on Linux(Ubuntu, Fedora), macOS, and Windows.
- Recommended Skills:
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3990

#### Implement component model's validator

- Description: The current validator of component model inside of WasmEdge only check nested module and ensure VM can run the nested modules without problem, but the validations from component model are mostly skipped.
- Expected Outcome:
  - One should create a workable (merged into upstream) implementation of validator by working on
  - `include/validator/validator_component.h`
  - `lib/validator/validator_component.cpp`
  - The visitor pattern are already setup.
- Recommended Skills:
  - Since component model proposal separate their validation spec, one should able to
find requirements from https://github.com/WebAssembly/component-model/tree/main/design/mvp
  - Implements it in C++.
- Mentor(s):
  - Lîm Tsú-thuàn (@dannypsnl, dannypsnl@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3966

#### Improve the WasmEdge-based Rust coding assistant for inference-time scaling

- Description: In a [previous LFX mentorship project](https://github.com/WasmEdge/WasmEdge/issues/3495), we have created an [LLM-based coding assistant grounded in Rust programming language skills](https://huggingface.co/datasets/gaianet/learn-rust). We aim to further improve the Rust coding assistant by incorporating inference-time compute that utilizes the Rust compiler for feedback. One of the greatest advantages of Rust is its powerful and strict compiler, and the detailed error message generated by the compiler. The Rust compiler could give valuable feedbacks to code generating LLMs to improve the code quality.
- Expected Outcome:
  - Run a [Qwen Coder 2.5 LLM locally](https://github.com/GaiaNet-AI/node-configs/tree/main/qwen-2.5-coder-7b-instruct) or access it via an API.
  - Create an LLM system prompt that describes the structure and key elements of a `cargo` project. It will guide the LLM to generate multiple files (artifacts) for a complete project.
  - Create a Python program to send user requests to the LLM and parse the generated result into locally cached files.
  - Use a local Rust compiler to build the generated project. Sends the error messages back to the LLM to re-generate.
  - Iterate until there is no more errors.
  - Build a web API for the Python program that takes OpenAI compatible requests and return OpenAI compatible results.
- Recommended Skills:
  - Rust
  - [LlamaEdge](https://llamaedge.com/docs/user-guide/llm/full-openai)
  - LLMs like ChatGPT
  - Coding assistant like GitHub Copilot
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3985

#### Create a Japanese translation agent for CNCF videos

- Description: WasmEdge is a cross-platform and lightweight runtime for AI models. It can run a variety of GenAI models, such as [LLM](https://llamaedge.com/docs/user-guide/llm/get-started-with-llamaedge), [whisper](https://llamaedge.com/docs/user-guide/speech-to-text/quick-start-whisper) (voice to text), and [GPT-SoVITS](https://llamaedge.com/docs/user-guide/text-to-speech/gpt-sovits) (text to voice) on your own computers. By combining those 3 models together, developers in the WasmEdge community has created “video translation” applications that can translate video and audio content into another language. One such application is [VideoLangua.com](http://videolangua.com/) In this mentorship, we would like to build a Japanese translator agent that are specifically tailored to CNCF technical content.
- Expected Outcome:
  - Use whisper to extract a time-stamped English transcript from a sample of CNCF videos. Develop whisper prompt that are suitable for CNCF technical content.
  - Evaluate and select LLMs that are good at English to Japanese translation.
  - Develop LLM prompts that are suitable for CNCF technical content.
  - Train Japanese TTS actor models for GPT-SoVITS using PyTorch.
  - Create dictionaries for how to pronounce CNCF technical words in Japanese.
  - Evaluate the synthesized Japanese voice.
- Recommended Skills:
  - The mentee must speak Japanese fluently.
  - He or she needs to be familiar with technical content in CNCF videos.
  - He or she should also be familiar with GenAI APIs (eg OpenAI API) and be able use PyTorch.
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Miley Fu (@MileyFu, miley@secondstate.io)
  - Vivian Hu (@alabulei1, vivian@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3986
