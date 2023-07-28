# Term 03 - 2023 September - November

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |   
| project proposals | Thur July 27, 5:00 PM PDT |
| mentee applications open | Wed Aug 2 - Tues 15, 5:00 PM PDT |
| application review/admission decisions | Wed Aug 16 - Tues Aug 29, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | Mon Sept 4 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | Wed Oct 11 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed Nov 22, 5:00 PM PST (Week 12) |
| Last day of term | Thur Nov 30 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2023/03-Sep-Nov/project_ideas.md, by Thursday, July 27, 2023.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

Table of Contents

---

## Accepted projects

### Armada

#### Build a virtual-kubelet provider for Armada

- Description: [Virtual Kubelet](https://github.com/virtual-kubelet/virtual-kubelet) is a way to bring a Kubernetes front end and allow for your execution environment to be something other than Kubernetes. We want to add a virtual-kubelet provider for Armada so we can allow for a k8 front end integration with Armada.
- Expected outcomes:
  - A provider for virtual-kubelet that allows integration of Armada with Virtual-Kubelet
- Recommend Skills: Go
- Mentor(s):
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): https://github.com/armadaproject/armada/issues/2702
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a80908c1-c05b-46c4-a41b-32392c4822cb

### CRI-O

#### Add additional log drivers to conmon-rs

- Description: conmon-rs is a container monitor written in Rust, used by CRI-O to monitor a container's lifecycle. Part of its responsibilities is log forwarding--taking the output of the container and writing that output to various places. Currently, conmon-rs supports one format: the one required by the Kubernetes CRI. The goal of this proposal is to add new log formats from the list of standardized ones, like JSON, Splunk, Journald.
- Expected outcome: A JSON log driver and Journald log driver are added to conmon-rs. A stretch goal of adding a Splunk log driver is also within scope.
- Recommended Skills: Rust, familiarity with containers
- Mentor(s):
  - Peter Hunt, haircommander, pehunt@redhat.com
  - Sascha Grunert, saschagrunert, sgrunert@redhat.com
- Upstream Issue (URL): https://github.com/containers/conmon-rs/issues/1126
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/99274b1a-694b-4af5-b7ca-39311f38a646

#### CRI stats KEP

- Description: [CRI stats KEP](https://github.com/kubernetes/enhancements/issues/2371) is an effort to take the container stats and metrics collection from cAdvisor and move it to the CRI implementations. CRI-O will soon have support for stats and metrics collected through CRI, but work needs to be done to verify and validate these fields, and make sure their collection is performant as possible.
- Expected outcome: A test suite verifying the correctness of CRI-O's stats and metrics collection, as well as data verifying performance regressions are minimal at worst.
- Recommended Skills: Golang, familiarity with containers
- Mentor(s):
  - Peter Hunt, haircommander, pehunt@redhat.com
  - Sohan Kunkerkar, sohankunkerkar, skunkerk@redhat.com
- Upstream Issue (URL): https://github.com/cri-o/cri-o/issues/7175
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cb189d71-3943-450a-9d5f-d71bd66d73c9

### Jaeger

#### Upgrade Jaeger UI to the latest version of React.js

- Description: Jaeger UI is built on React. While we are seemingly already on v18.x of React, the upgrade was not done across the board and some other dependencies are still lagging behind, e.g. `"@types/react": "16.8.7"`. It's also blocking upgrades of other dependencies. This project is likely to involve a substantial amount of code contribution, as certain upgrade require fixing the code to use the new APIs, and sometimes we may run into dependencies that are EOL and need to be replaced altogether.
- Expected Outcome: Ideal outcome is to have _all_ dependencies upgraded to the latest versions (with the help of @dependabot) and fix all deprecation warnings during the build. But incremental progress towards that goal is also acceptable.
- Recommended Skills: Javascript, Typescript, NPM, Yarn, Vite.js
- Mentor(s):
  - Yash Sharma (yashrsharma44@meta.com)
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/998
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/83cc55fe-b97a-4195-8dd2-cc9aed7e509c

#### Combine three distinct graph views in Jaeger UI into one

- Description: Jaeger UI provides several views to visualize service dependencies, also known as service topology maps. However, these views are using different drawing libraries, resulting in very different look & feel and inconsistent experience. One of the views is using a `plexus` library that was purposely built as part of Jaeger UI that provides rich capabilities for displaying graphs, which may be a good candidate for the other views.
- Expected Outcomes:
  - Remove the dependency on react-vis library (https://github.com/jaegertracing/jaeger-ui/issues/1597).
  - Use a single library for graph visualizations.
  - Provide consistent look and feel of different graph views.
- Recommended Skills: Javascript, Typescript, NPM, Yarn, Vite.js, web worker
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/1466
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1e67c90b-de3e-4c4e-a2be-a5583a948864

#### Build official support in Jaeger for Elasticsearch 8

- Description: Jaeger has always supported Elasticsearch (ES) as an official backend. Unfortunately, the Go driver we are using, `olivere/elastic`, does not support ESv8 and not planning to release any new versions. Despite the licensing changes, Elasticsearch remains a popular choice and v8 support question often comes up. In this project we want to add official support for ESv8. However, we also want to take this opportunity to do a better alignment with the OpenTelemetry Collector, which already has an [ESv8 exporter](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/elasticsearchexporter), perhaps we can use it directly and minimize the amount of code.
- Expected Outcomes:
  - Use OTEL ESv8 exporter from Jaeger, if possible, otherwise build internal implementation
  - Stretch goal: use ES data as the source for Jaeger SPM views
- Recommended Skills: Go, Elasticsearch
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/4600
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/37cf2714-668d-4014-ac44-953f70f9dc8e

### Istio

#### Implement performance testing

- Description: Up until version 1.16, [Istio](https://istio.io/) published [performance and scale testing results](https://istio.io/v1.16/docs/ops/deployment/performance-and-scalability/). These should be returned to service, and updated to support ambient mesh. Third-party benchmarking tools should be updated to support testing the performance of ambient mesh.
- Expected Outcome: Performance testing pages are returned to istio.io, and include both sidecar and ambient mesh results.
- Recommended Skills:
  - Python
  - Networking
- Mentors:
  - Lin Sun (@linsun, lin.sun@solo.io)
- Upstream Issue: https://github.com/istio/istio/issues/44009
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bbebd511-1a3e-4c4f-b106-2f09690825c5

#### Documentation for Ambient Mesh

- Description: [Istio](https://istio.io/) is working on [a new operating mode called ambient mesh](https://istio.io/latest/blog/2022/introducing-ambient-mesh/). As this moves from experimental to the recommended method of operating a service mesh, we will need to revise our documentation to discuss the new model, explain the tradeoffs, and tell users how to choose.
- Expected Outcome: Revisions to Istio's documentation to reflect the availability of ambient mesh.  These will be maintained in a parallel branch of istio.io that can be pulled from when Ambient is in Beta or GA.
- Recommended Skills: 
  - Technical writing
  - Developer advocacy
- Mentors:
  - Lin Sun (lin.sun@solo.io)
- Upstream Issue: https://github.com/istio/istio.io/issues/13481
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/89ee4357-dd58-4e15-a601-c411742a587c

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/989d0ad3-976a-4514-b2fc-34e9e6081567

#### Move2Kube: Compile Move2Kube to WASM/WASI and run it in the browser

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. We want to compile targetting WASM/WASI and run the resulting WASM module in the browser. This will help up showcase Move2Kube for demos and allow users to quickly try out Move2Kube without having to install it or any of its dependencies.
- Expected Outcome:
  - Run Move2Kube CLI in the browser using WebAssembly.
- Recommended Skills:
  - Golang
  - WASM
- Mentor(s):
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
  - Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1062
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c2b5f721-2666-4d9e-85d6-7bedae27e144

#### Move2Kube: WASM Transformers

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. Move2Kube has a very plugin friendly architecture, users can write custom logic in the form of "Transformers" that Move2Kube can integrate seamlessly into its transformation pipeline. So far we have support for both Starlark and container image based transformers. We would like to support writing transformers as WASM modules that Move2Kube can run. WASM provides extensive sandboxing for security, it allows writing transformers in different language stacks like Rust, C/C++, etc. other than Golang, and WASM is just as lightweight and fast as Starlark.
- Expected Outcome:
  - Implement a feature in Move2Kube CLI to allow running WASM modules as custom transformers.
- Recommended Skills:
  - Golang
  - WASM
- Mentor(s):
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
  - Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1061
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ec286a9e-e48d-4c83-a991-9c79a4ec213a

#### Move2Kube: Advanced Resources support - ArgoCD, Tekton, Stateful Set, etc.

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. Currently we have rudimentary support for resources such as ArgoCD, Tekton, etc. We need to enhance this to make it useful. Example: https://github.com/konveyor/move2kube/issues/930
- Expected Outcome:
  - More comprehensive support for advanced K8s resources so as to support real world use cases.
- Recommended Skills:
  - Golang
  - K8s
  - ArgoCD
  - Tekton
- Mentor(s):
  - Akash Nayak (@Akash-Nayak, akash.nayak1@ibm.com)
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1063
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b9aad4e2-d9c7-405e-8482-5aced0a4ecdb

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/271852c6-3348-4ec7-bf09-035913b1c86e


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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ccd3fc5f-a0a9-441f-bd4c-5caae8ab6509

### Kyverno

#### Pod Security Admission Integrations II

- Description: Integrate Kubernetes Pod Security with Kyverno - Part Ⅲ
- Expected Outcome: Kyverno's podSecurity "subrule" has the ability to exclude based on specific field paths and not just the control level.
- Recommended Skills: Golang, Kubernetes, Pod Security
- Mentor(s):
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/6144
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a7f754b4-5c8c-48a3-8f5f-b3ff6307b0f4

#### Policy Exceptions 2.0

- Description: Enhancements for Kyverno Policy Exceptions including support for images and conditions.
- Expected Outcome: A future version of Kyverno has enhanced support for its Policy Exception resource.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
  - Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/7907
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7ffb0f63-e1e4-477b-ab0c-a69cb681f112

#### Kyverno Kuttl Enhancements

- Description: Add new features to the kuttl application used by the Kyverno project to aid in its end-to-end testing process.
- Expected Outcome: Kyverno's fork of kuttl has these enhancements allowing more and better test cases to be written.
- Recommended Skills: Golang
- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charles.edouard@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kuttl/issues/18
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/919e8b57-8fc1-4f61-8bc8-3c8b06dd5e7a

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/fde90e7f-0410-4b84-ad9c-99f7139267ed

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/237b7300-d749-4f14-bd4c-9375e5ec39b6

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f21bec94-085e-4e2d-94ac-3b61b4471818

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3ee046ab-29d9-4e5c-bb7a-4564bd4e2765

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/63adcf97-cd3e-4c96-a5fc-6076b5a5d511

#### Create a ffmpeg plugin

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/41a8bf79-a903-4c03-afb7-256fd373c0b0

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5a96f43c-d858-40c2-b556-2770ba6b03d4

#### Release the distributed query engine in Thanos

- Description:
  The Thanos engine is capable of executing queries in a distributed manner, by pushing down aggregations to other querier nodes. This querying mode is not yet integrated well in the UI and is not exposed to users.
  The goal of this project is to add the needed integrations to the Thanos UI and officially release the feature to end users.
- Expected Outcome:
  The expected outcome of the project is to have a fully integrated distributed querying capability through the Thanos UI.
- Recommended Skills:
  - Golang
  - React.js with TypeScript
  - Git + GitHub
  - Any Prometheus/PromQL/Thanos understanding is a plus
- Mentor(s):
  - Filip Petkovski (@fpetkovski, filip.petkovsky@gmail.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/6124
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3d6d3534-24e9-4261-9b91-7de3d78554f7

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
- Upstream Issue: https://github.com/karmada-io/karmada/issues/3842
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/60b43efd-79e0-457e-989f-d4d59d55d8a6

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
- Upstream Issue: https://github.com/karmada-io/karmada/issues/3843
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/54940f04-54b8-41ee-94bf-153f977b31e7

### Carvel

#### kctrl to support exporting package repository as tar

- Description: While generating Package Repository kctrl to create the tar version of the Package Repository instead of pushing the OCI Image to a registry. 
- Expected Outcome: 
    - Proposal containing design discussions and options considered.
    - Function Implementation to support a flag which allows to export the package repo to tar
    - Documentation changes as required 
- Recommended Skills: Golang
- Mentor(s): 
    - Soumik Majumder (@100mik, carvel-mentor)
    - Renu Yarday (@renuy, ryarday@vmware.com)
- Upstream Issue (URL): https://github.com/carvel-dev/kapp-controller/issues/1277
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/91398424-f095-4b85-bb0f-e7c56e777ea0

### KubeVela

#### Support auto generation of multiple languages SDK from CUE II

- Description: In KubeVela, we use [CUElang](https://cuelang.org/) to code the X-Definition. We want to support auto generation of multiple languages SDK from CUE, so that users can buidling KubeVela Application in their own language. This helps to adoptors to build platform based on KubeVela.
- Expected Outcome: Support auto generation of multiple languages SDK from CUE, including Java, Typescript ,Python. This capability should be part of vela CLI command.
- Recommended Skills: Java, Typescript ,Python, Kubernetes, CUE
- Mentor(s): 
    - Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com) 
    - Wang YiKe (@wangyikewxgm, wangyike.wyk@gmail.com)
- Upstream Issue: [kubevela/kubevela#5365](https://github.com/kubevela/kubevela/issues/5365)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e8c0d16a-c263-4a6c-bce7-0b896c925a52

### Kubernetes

#### Build a Go library and CLI for interacting with OpenBuildService

- Description: Kubernetes is set to start using [OpenBuildService](http://openbuildservice.org) as a platform for building, publishing, and hosting Kubernetes system (Debian and RPM) packages. The current integration with the OpenBuildService platform assumes a lot of manual tasks and depending on `osc` command-line tool written in Python. At SIG Release, we're striving to automate as many tasks as possible. We want to build a library and CLI written in Go for interacting with the OpenBuildService APIs and platform that can be integrated with our existing [release tooling (`krel`)](http://github.com/kubernetes/release).
- Expected Outcome: Library and CLI tool for interacting with OpenBuildService platform via their publicly available APIs. Both library and CLI tool should be properly tested via unit, integration, and end-to-end tests, and properly documented.
- Recommended Skills: Golang, working with APIs
- Mentor(s):
  - Carlos Panato (@cpanato, ctadeu@gmail.com)
  - Marko Mudrinić (@xmudrii, mudrinic.mare@gmail.com)
- Upstream Issue: https://github.com/kubernetes/sig-release/issues/2295
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/47f53d22-ff5c-4479-b701-3ca3dbc7df0a


