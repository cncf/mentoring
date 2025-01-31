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

### Headlamp (a Kubernetes UI)

#### Headlamp: Instrument with OpenTelemetry

- Description: Headlamp is a Kubernetes UI which is extensible. Having it instrumented with OpenTelemetry would allow those operating it to get information for debugging it when problems happen.
- Expected Outcome: Headlamp backend and frontend are instrumented so those that want to use OpenTelemetry when operating Headlamp can. There's documentation and a blog post with a demo video explaining how it's used.
- Recommended Skills: golang, TypeScript
- Mentor(s):
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
- Upstream Issue: https://github.com/headlamp-k8s/headlamp/issues/2799

#### Headlamp: Make a Headlamp plugin for KEDA

- Description: Headlamp is a Kubernetes UI which is extensible. KEDA is a Kubernetes-based Event Driven Autoscaler. With KEDA, one can drive the scaling of any container in Kubernetes based on the number of events needing to be processed. While KEDA provides excellent functionality for scaling workloads based on event sources and custom metrics, monitoring and managing KEDA resources through Kubernetes dashboards remains challenging.
- Expected Outcome: Create a Headlamp plugin that provides comprehensive visibility and management capabilities for KEDA resources, enabling users to do the following. 1. View and manage ScaledObjects and ScaledJobs through a intuitive interface. 2. Monitor real-time scaling metrics and trigger states. 3. Troubleshoot scaling behaviors with integrated logging and event visualization.
- Recommended Skills: Golang, TypeScript. Kubernetes and KEDA too would be nice to have.
- Mentor(s):
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
- Upstream Issue: https://github.com/headlamp-k8s/headlamp/issues/2791

#### Headlamp: Build Plugin Installation Container

- Description: Headlamp is a Kubernetes UI which is extensible through plugins. Currently, plugin installation in Kubernetes environments requires manual intervention.  We need a containerized solution that can automatically install plugins during Headlamp's deployment using Kubernetes-native approaches like init containers and ConfigMaps.
- Expected Outcome:
  1. A containerized version of headlamp-plugin CLI that can be used as an init container
  2. Helm chart updates to support plugin installation via configuration
  3. Automated container builds as part of Headlamp's release process
  4. Documentation and examples showing how to use the plugin installer container
  5. Integration tests validating the plugin installation process
- Recommended Skills: Kubernetes, TypeScript, Shell scripting
- Mentor(s):
  - Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
- Upstream Issue: https://github.com/headlamp-k8s/headlamp/issues/2787

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

### Karmada

#### Karmada Self-Signed Certificate Content Standardization

- Description: In the existing [Karmada](https://github.com/karmada-io/karmada) architecture, each component should have its own unique certificates to ensure clear identity and security. Best practices dictate that each component's name be used as the Common Name (CN) in its certificate to facilitate identity differentiation. However, currently, all Karmada components share same identical certificate content, leading to confusion and potential security risks.
The objective of this project is to enhance the compliance of the Karmada certificate system by ensuring that each component possesses distinct certificates that reflect its identity. This will improve system security, reduce management complexity, and align with industry standards. This project aims to achieve the following standards:
  - Utilize a single CA certificate for the entire Karmada system.
  - Issue individual server certificates for each server component, using the component name as the CN.
  - Issue individual client certificates for each client component, using the component name as the CN, same client can use consistent certificate for different servers.
- Expected Outcome:
  - Complete the issuance of different certificates for 8 server components and import the certificate content into the corresponding certificate Secrets.
  - Complete the issuance of different certificates for 11 client components and import the certificate content into the corresponding certificate Secrets or Config Secrets.
- Recommended Skills:
  - Familiarity with Golang, Kubernetes, and Karmada.
  - Basic understanding of certificate management.
- Mentor(s):
  - Chaosi Pan (@chaosi-zju, chaosi@zju.edu.cn)
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/6091

#### Implement multi-cluster management in the Karmada dashboard

- Description: The Karmada dashboard has already implemented the management of resources in the control plane. Apart from that, we hope to implement the management of resources in the member cluster: once users add Kubernetes resources and the corresponding policy resources on the control plane, they can switch to the corresponding member cluster seamlessly, check the status of Kubernetes resources in the specific member cluster. Kubernetes dashboard is one of the most popular single-cluster management tools, which uses client-go sdk to communicate with the apiserver to manage resources in the cluster. A great deal of client-go related logic can be extended to muli-cluster easily, due to the karmada-aggregated-apiserver component and the compatibility design between Kubernetes resource and Karmada resoruces. So we hope to combine the Kubernetes dashboard with the karmada-aggregated-apiserver component to implement multi-cluster management in the Karmada dashboard.
- Expected Outcome:
  - Proposal for multi-cluster management base on `karmada-aggregated-apiserver`.
  - Tools to lift Kubernetes dashboard with specific version into Karmada dashboard repo, and implement management of resources in member cluster based on `karmada-aggregated-apiserver`.
  - Typical ui for member-cluster management:
    - list/detail/delete/update action for `deployment` resources.
    - log viewer for `pod`.
    - web terminal for `pod`，which user can attach the running pod, and execute tempory commands.
- Recommended Skills: Kubernetes, Go, gin, react, webgl
- Mentor(s):
  - Wenjiang Ding (@warjiang, 1096409085@qq.com)
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/dashboard/issues/182

### Kmesh

#### Re-design and implement the Kmesh website

- Description: The existing Kmesh website theme struggled to meet existing development needs. Therefore, there is a need to redesign the Kmesh website and replace the theme to make it easier for developers to add documentation. Development instructions for the website are also provided.
- Expected Outcome:
  - The website has more readable documentation, covering user cases, developer courses, etc. 
  - Docs about how to develop website.
- Recommended Skills: JS, Kmesh, Html
- Mentor(s):
  - ZhenCheng Li(@LiZhenCheng9527, leezhencheng6@gmail.com),
  - Zhonghu Xu(@hzxuzhonghu, zhhxu2011@163.com)
- Upstream Issue: https://github.com/kmesh-net/website/issues/115

#### Kmesh eBPF unit test

- Description: As the community features continue to expand, the number of eBPF programs in the data plane has increased. Due to the inherent limitations of eBPF (third-state encoding, neither user space nor kernel space, running in a kernel virtual machine with a dedicated instruction set), Kmesh implements complex governance logic through features like tail call and map-in-map, which poses challenges for data plane quality protection.
eBPF, a recently introduced programmable technology in the kernel, currently has an immature ecosystem. The industry is actively exploring eBPF testing capabilities (e.g., Unit Testing eBPF). This project aims to develop an eBPF UT testing framework in conjunction with the Kmesh project to ensure the quality of the Kmesh data plane.
- Expected Outcome:
  - Export Kmesh eBPF programs to support UT test case.
  - Export design documentation for eBPF UT tests
- Recommended Skills: C, eBPF,  (go)
- Mentor(s):
  - Xin Liu(@bitcoffeeiux, liuxin350@huawei.com)
  - Changye Wu(@nlgwcy, wuchangye@huawei.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1209

#### Add the Kmesh e2e Test

- Description: Kmesh now has an e2e testing framework, but it only covers some of the usage scenarios for key features. More test cases need to be covered to ensure the stability of key features.
- Expected Outcome:
  - e2e Test Cases
  - Documentation maintenance for e2e testing
- Recommended Skills: go, Kmesh
- Mentor(s):
  - Zengzeng Yao(@yaozegzeng, yaozengzeng@huawei.com)
  - Zhonghu Xu(@hzxuzhonghu, zhhxu2011@163.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1210

#### Metrics for TCP Long Connection

- Description: Currently, Kmesh metrics are only reported when a TCP connection is closed. In the case of long connections, it is not possible to know the status before the connection is closed. Therefore, we hope to add the capability to periodically report metrics for long connections.
- Expected Outcome:
  - proposal
  - code
  - user guide.
- Recommended Skills: go, c, eBPF
- Mentor(s):
  - Changye wu(@nlgwcy, wuchangye@huawei.com)
  - ZhenCheng Li(@LiZhenCheng9527, leezhencheng6@gmail.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1211

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

By implementing these enhancements, KubeStellar UI will evolve into a comprehensive tool for cluster management, empowering users to efficiently deploy and manage resources while offering an intuitive and modern interface.

- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.

- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)

- Upstream Issue: kubestellar/ui (TBD)


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

### Prometheus

#### Get `PrometheusRemoteWriteReceiver` in OTel-Collector to Alpha Maturity

- Description: In recent discussions with the team, we decided that Prometheus won't be exporting its data with the OTLP format, however, Prometheus is still committed to have good import/export compatibility with OpenTelemetry. Last year Prometheus release the second version of its Remote-Write protocol, which translates a lot better with the OTLP format and the team started working on a PRW receiver in the collector-contrib project. This project is about getting this component into the finish line and publish it as an stable component in the collector.
- Expected Outcome: PrometheusRemoteWriteReceiver considered Alpha and released with OpenTelemetry-Collector-Contrib.
- Recommended Skills: Prometheus Remote-Write, OTLP, Go.
- Mentor(s):
  - Arthur Sens (@ArthurSens, arthursens2005@gmail.com)
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/37277

#### UX Research: How users expect to use OTLP Resource Attributes in Prometheus

- Description: In the last year Prometheus has tackled and solved many UX problems that OTel users had when sending OTLP data to Prometheus. One challenge that remains unsolved is how do users expect to use OTLP Resource Attributes in Prometheus. This project is about conducting a UX research that explores the main problems users are facing today with the current state of Resource Attributes and Prometheus and coming up with ideas how to solve them.
- Expected Outcome: 
  -  Preliminary artifacts (e.g., research plan) shared as project progresses.
  - Research report, summarizing the findings.
  - A spoken presentation including research method and results.
    - Stretch goal: apply to present the project at KubeCon.
- Recommended Skills:
  - Interest or currently working in UX Research and Design.
  - Familiarity with databases and querying.
  - Being comfortable to talk with End-Users in English.
- Mentor(s):
    - Arthur Sens (@ArthurSens, arthursens2005@gmail.com)
    - Amy Super (@amy-super, amy.super@grafana.com)
    - Andrej Kiripolsky (@AndrejKiri, andrej.kiripolsky@grafana.com)
* Upstream Issue: https://github.com/prometheus/prometheus/issues/15909
