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

---

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

---
