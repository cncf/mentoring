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

### Armada

#### Build a virtual-kubelet provider for Armada

- Description: [Virtual Kubelet](https://github.com/virtual-kubelet/virtual-kubelet) is a way to bring a Kubernetes front end and allow for your execution environment to be something other than Kubernetes. We want to add a virtual-kubelet provider for Armada so we can allow for a k8 front end integration with Armada.
- Expected outcomes:
  - A provider for virtual-kubelet that allows integration of Armada with Virtual-Kubelet
- Recommend Skills: Go
- Mentor(s):
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): https://github.com/armadaproject/armada/issues/2702

### CRI-O

#### Add additional log drivers to conmon-rs

- Description: conmon-rs is a container monitor written in Rust, used by CRI-O to monitor a container's lifecycle. Part of its responsibilities is log forwarding--taking the output of the container and writing that output to various places. Currently, conmon-rs supports one format: the one required by the Kubernetes CRI. The goal of this proposal is to add new log formats from the list of standardized ones, like JSON, Splunk, Journald.
- Expected outcome: A JSON log driver and Journald log driver are added to conmon-rs. A stretch goal of adding a Splunk log driver is also within scope.
- Recommended Skills: Rust, familiarity with containers
- Mentor(s):
  - Peter Hunt, haircommander, pehunt@redhat.com
  - Sascha Grunert, saschagrunert, sgrunert@redhat.com
- Upstream Issue (URL): https://github.com/containers/conmon-rs/issues/1126

### Konveyor

#### Extend use-case of detecting deprecated Kubernetes API usage

- Description: [Konveyor](https://www.konveyor.io/) provides a [unified experience](https://github.com/konveyor/enhancements/tree/master/enhancements/unified_experience) of tools to help organizations modernize their applications at scale to Kubernetes and cloud-native technologies. We are looking for help on extending a use-case of detecting usage of [deprecated and removed Kubernetes APIs](https://kubernetes.io/docs/reference/using-api/deprecation-guide/) in applications.  This work will involve determining what API resources have been deprecated or removed in each version of Kubernetes and then building [Analyzer Rules](https://github.com/konveyor/analyzer-lsp/blob/main/docs/rules.md) to be contributed to our [Rulesets repository](https://github.com/konveyor/rulesets), curation or development of sample applications in Golang, Java, and YAML to aid test scenarios, and documentation to help show a guided walkthrough of this capability.  You can see the beginning of this use-case being addressed with a [sample rule](https://github.com/konveyor/analyzer-lsp/blob/main/rule-example.yaml#L42-L45) in this [demo of analyzer-lsp](https://github.com/konveyor/analyzer-lsp/tree/main#quick-demo). The development environment is based on Golang and Kubernetes. A minikube instance will work well for local development on Linux or Mac systems.
- Expected Outcome:
  - [Rules](https://github.com/konveyor/analyzer-lsp/blob/main/docs/rules.md) contributed to [konveyor/rulesets](https://github.com/konveyor/rulesets) to detect usage of deprecated or removed Kubernetes APIs.  Coverage for YAML, Golang, and Java source code, addition of this scenario into the project's automated test suite, and documentation of a guided scenario showing usage of these rules via a curated set of application source code examples.
- Recommended Skills:
  - Go
  - Basic understanding of interaction with Kubernetes via kubectl
  - Basic software development skills (command line, git)
- Mentor(s):
  - Emily McMullan (@eemcmullan, emcmulla@redhat.com)
  - Jonah Sussman (@JonahSussman, jsussman@redhat.com)
  - John Matthews (@jwmatthews, jwmatthews@gmail.com)
- Upstream Issue:
  - https://github.com/konveyor/operator/issues/251

### Kubescape

#### Build an admission controller for Kubescape

- Description: [Kubescape](http://kubescape.io/) is a utility that can scan a Kubernetes cluster and report on its security posture. It can also scan individual workloads (e.g. YAML files) before they are applied. By creating a Kubescape admission controller, we will be able to combine the two, denying workloads into a cluster where it would reduce the security posture.
- Expected Outcome: The Kubescape application will be extended and packaged to operate as an admission controller inside a cluster. The controller will be well documented, safe to install, and instrumented with logging and telemetry data to be able to diagnose problems.
- Recommended Skills:
  - Go
  - Experience using Kubernetes and understanding of its concepts
- Mentors:
  - Craig Box (@craigbox, craigb AT armosec.io)
  - Ben Hirschberg (@slashben, ben AT armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1301


#### Upgrade the documentation publishing pipeline for Kubescape controls

- Description: [Kubescape's control library](https://github.com/kubescape/regolibrary) includes more than 200 controls, tests that codify Kubernetes best practices derived from the most prevalent security frameworks in the industry. Metadata in the controls is used to generate documentation pages in the ARMO website. This project will update this automation to make this control documentation available on kubescape.io.
- Expected Outcome: A full set of documentation for Kubescape controls on kubescape.io. Stretch goals include better README-style documentation inside the repository, and documentation pages on how the controls, frameworks and tests relate.
- Recommended Skills: 
  - Python
  - Technical writing
  - Rego
- Mentors:
  - Ben Hirschberg (@slashben, ben AT armosec.io)
  - Craig Box (@craigbox, craigb AT armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1302

### Kyverno

#### Pod Security Admission Integrations

- Description: Integrate Kubernetes Pod Security with Kyverno - Part Ⅲ
- Expected Outcome: Kyverno's podSecurity "subrule" has the ability to exclude based on specific field paths and not just the control level.
- Recommended Skills: Golang, Kubernetes, Pod Security
- Mentor(s):
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/6144

#### Policy Exceptions 2.0

- Description: Enhancements for Kyverno Policy Exceptions including support for images and conditions.
- Expected Outcome: A future version of Kyverno has enhanced support for its Policy Exception resource.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
  - Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/7907

#### Kyverno Kuttl Enhancements

- Description: Add new features to the kuttl application used by the Kyverno project to aid in its end-to-end testing process.
- Expected Outcome: Kyverno's fork of kuttl has these enhancements allowing more and better test cases to be written.
- Recommended Skills: Golang
- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charles.edouard@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kuttl/issues/18

### LitmusChaos

#### Improve litmusctl UX and codebase and add new functionalities to litmusctl
- Description: [LitmusChaos](https://litmuschaos.io) is an open-source chaos engineering platform for Kubernetes, enabling users to test and improve the resilience of their cloud-native applications. The project focuses on improving litmusctl by enhancing its interactive mode with promptui, and refactoring code to Go interfaces for better unit testing and code quality. Additionally, it aims to replace kubectl with client-go for more efficient Kubernetes operations, resulting in a more user-friendly and reliable command-line tool for chaos engineering and workload management.
- Expected outcome: The expected outcome of the project includes an improved litmusctl tool with a user-friendly promptui-based interactive mode, enhanced code quality through Go interfaces, and a robust test suite. The migration to client-go for Kubernetes operations will ensure better performance and reduced external dependencies, providing users with a reliable and efficient command-line utility for chaos engineering and Kubernetes management tasks.
- Recommended Skills:
  - Golang
  - Kubernetes (Basic understanding of interaction with Kubernetes via kubectl)
- Mentor(s):
  - Saranya Jena (@Saranya-jena, saranya.jena@harness.io)
  - Sayan Mondal (@S-ayanide, sayan.mondal@harness.io)
- Upstream Issue (URL): https://github.com/litmuschaos/litmus/issues/4101

#### Improve Chaoscenter Web and Authentication Server: Add Unit Test Cases, Enhance GQL APIs, Update API Documentation

- Description: [LitmusChaos](https://litmuschaos.io) is an open-source chaos engineering platform for Kubernetes, enabling users to test and improve the resilience of their cloud-native applications. The task is add unit tests for Chaoscenter Web and test cases for the Authentication Server. The GraphQL API documentation will be updated with the latest APIs, while the GraphQL server's APIs and handler functions will be optimized to reduce code duplicacy. Additionally, comprehensive documentation and video tutorials will be created for local development setup, promoting easier onboarding and collaboration.
- Expected outcome: The expected outcome of this issue is an improved Chaoscenter Web and Authentication Server with added unit tests, updated GraphQL API documentation, and optimized APIs and handler functions. The enhancements will result in a more reliable, efficient, and user-friendly chaos engineering platform, promoting better collaboration within the community.
- Recommended Skills:
  - Golang
  - TypeScript
- Mentor(s):
  - Sarthak Jain (@SarthakJain26, sarthak.jain@harness.io)
  - Neelanjan Manna (@neelanjan00, neelanjan.manna@harness.io)
- Upstream Issue (URL): https://github.com/litmuschaos/litmus/issues/4102

### WasmEdge

#### Add matrix operations for OpenCVMini-Wasm-Plugin

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a WebAssembly runtime that supports both interpreter and ahead-of-time modes. To expand its capabilities, WasmEdge provides a plugin system that helps people attach more existing software. OpenCVMini is one of them, intended to help users get a limited OpenCV interface. With this feature, AI inference will have more flexible helper functions for pre-processing and post-processing. In this mentorship, we aim to add more OpenCV capabilities to the WasmEdge environment.
- Expected Outcome:
  - Define the new interfaces for the OpenCVMini plugin, which supports those functions listed in the upstream issue.
  - Use the above interface and generate related APIs.
  - Implement the functions of the plugin with OpenCV 4.x.
  - Design unit tests and examples for verifying the above functions.
  - Enable the building, testing, and packaging on the upstream CI.
  - Write documents about how to build and use this plugin.
- Recommended Skills:
  - C++
  - Basic understanding of the Wasm spec
  - Basic understanding of using OpenCV
  - Basic understanding of writing Rust programs
- Mentor(s):
  - Lîm Tsú-thuàn (@dannypsnl, dannypsnl@secondstate.io)
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2680

#### Support AOT mode in proxy-wasm

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a WebAssembly runtime that supports both interpreter and ahead-of-time modes. For proxy-wasm support, WasmEdge only provides the interpreter mode currently. Such as the other runtimes, WasmEdge should be able to support the AOT mode for better performance. In this mentorship, the mentees will help the WasmEdge project to complete the AOT mode in proxy-wasm proposal and write the docs for examples of running with proxy-wasm.
- Expected Outcome:
  - Modify the Bazel file to include the LLVM dependency.
  - Modify the code to support running WASM in AOT mode.
  - Add the documentation of proxy-wasm in the WasmEdge docs repo.
- Recommended Skills:
  - C++
  - Basic understanding of bazel
- Mentor(s):
  - Yi-Ying He (@q82419, yiying@secondstate.io)
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2686

#### Create a Rust crate for YOLO model

- Description:
  With [WASI-NN plugins](https://wasmedge.org/docs/category/neural-networks-for-wasi), WasmEdge is well-suited for running AI applications. However, AI applications are more than just the model. The application must pre-process data (such as images, audio and video) into TFLite / PyTorch formats, and convert the inference results back into application data in post-processing. Here are some examples:

  * The [mediapipe-rs](https://github.com/WasmEdge/mediapipe-rs) project provides a Rust SDK to build applications for the mediapipe AI models.
  * The [llama2.c](https://github.com/karpathy/llama2.c) application is [compiled to Wasm and runs in WasmEdge](https://medium.com/@michaelyuan_88928/running-llama2-c-in-wasmedge-15291795c470) to generate text using the [llama2](https://ai.meta.com/llama/) models.

  In this project, we would like to build a Rust SDK to support applications on the [YOLO models](https://pjreddie.com/darknet/yolo/).
- Expected Outcome:
  - A Rust SDK that implements the pre-processing and post-processing functions required for the YOLO models. Those functions are implemented in OpenCV and Python in the official YOLO release.
  - Both image and video inputs should be supported.
  - Examples and documentation should be provided.
- Recommended Skills:
  - OpenCV
  - Rust
  - Tensorflow / Pytorch
  - WebAssembly
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2690

#### create a ffmpeg plugin

- Description:
  The [mediapipe-rs](https://github.com/WasmEdge/mediapipe-rs) project provides a Rust SDK to support mediapipe AI models. The SDK provides utility functions to pre-process application data (such as images, audio and video) into TFLite / PyTorch formats, and convert the inference results back into application data. In order to accomplish this, the [mediapipe-rs](https://github.com/WasmEdge/mediapipe-rs) project has made extensive use of the [ffmpeg](https://www.ffmpeg.org/) library. It [compiles ffmpeg to Wasm](https://github.com/WasmEdge/mediapipe-rs/blob/main/src/build.rs) and then builds it together with the application binary.

  However, the issue with this approach is that those Wasm-compiled ffmpeg functions are slow. We believe a better approach is to create a ffmpeg plugin for WasmEdge, and allow Wasm applications to call native ffmpeg functions as host functions.
- Expected Outcome:
  - The deliverables will be
    - A WasmEdge plugin for ffmpeg that is similar to the [WasmEdge OpenCV-mini plugin](https://github.com/WasmEdge/WasmEdge/tree/master/plugins/wasmedge_opencvmini). That is to re-export ffmpeg functions in C style as plugin functions as covered in the [plugin developer guide](https://wasmedge.org/docs/category/wasmedge-plugin-system).
    - A Rust SDK for Wasm programs to access ffmpeg functions in the plugin. Similar to the [WasmEdge OpenCV-mini SDK](https://github.com/second-state/opencvmini)
    - Refactor the mediapipe-rs project to use the ffmpeg plugin instead of compiling ffmpeg to Wasm.
  - We expect the deliverable will cover at least 80% of all ffmpeg functions, and have complete unit test and documentation coverage.
- Recommended Skills:
  - C/C++
  - ffmpeg
  - Rust
  - WebAssembly
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2689

### Thanos

#### Implement fan-out query observability in Thanos

- Description:
  In the previous mentorship sessions we added the foundation required for query observability in Thanos's new [promql-engine](https://github.com/thanos-io/promql-engine) and hooked it up in the UI. We now have the foundation to record telemetry from our query engine as well such as time consumed per operator.
  This project aims to expand on this and add more metadata to the query execution, both on the promql-engine operator tree level and Thanos Query `Select()` calls for fan-out query observability.
  Once we have this metadata, we would like to visualize it in the Query UI.
- Expected Outcome:
  The end goal is to have a query execution tree decorated with the metadata, collected during execution (ideally even visualized in the Thanos UI). This will help users to understand the performance implications of their PromQL queries and the bottlenecks in their Thanos Query setups.
- Recommended Skills:
  - Golang
  - React.js with TypeScript
  - Git + GitHub
  - Any Prometheus/PromQL/Thanos understanding is a plus
- Mentor(s):
  - Giedrius Statkevičius (@GiedriusS, giedriuswork@gmail.com)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/6517, https://github.com/thanos-community/promql-engine/issues/106

### Karmada

#### Karmada supports promote dependent resources automatically

- Description: Provide an automatic promotion mechanism for dependent resources in karmadactl. When promoting a resource, all the resources that it depends on will be automatically promoted as well. For example, promoting the Secret that is dependent by a Deployment.
- Expected Outcome:
  - Technical Documentation: design description and analysis
  - Function Implementation: support promote the dependent resources automatically
  - Test coverage: add test cases to cover new functions
- Recommended Skills:
  - Go
  - Cloud Native
- Mentor(s):
  - Wei Jiang (@jwcesign, jiangwei115@huawei.com)
  - Hongcai Ren(@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: [karmada-io/karmada#3842](https://github.com/karmada-io/karmada/issues/3842)

#### Add Karmada API documentation on the website

- Description: Add the Karmada API documentation on the [website](https://github.com/karmada-io/website),and complete the script for automatic document generation.
- Expected Outcome:
  - Technical Documentation: design description and analysis
  - Script Complete: automatic document generation
  - Maintaining Documentation: add maintaining document on the website
- Recommended Skills:
  - Go
  - Cloud Native
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Hongcai Ren(@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: [karmada-io/karmada#3843](https://github.com/karmada-io/karmada/issues/3843)

---
