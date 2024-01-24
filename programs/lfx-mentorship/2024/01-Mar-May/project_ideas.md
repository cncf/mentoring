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

### Antrea

#### East-west connectivity monitoring tool for Pod network

- Description: As a K8s network plugin (CNI plugin), Antrea provides networking functions for K8s Pods. These Pods are located on different Nodes, which can be in different availability zones, or even different geos. We would like to provide as part of Antrea (built-in capability) a tool to monitor Pod connectivity across the cluster. This tool should be able to report the average network latency between any 2 Nodes in the cluster. The latency information could then be visualized using a heatmap representation in the Antrea web UI.
- Expected Outcome: A new Antrea API which reports network health information and latency between K8s Nodes. If time allows, the Antrea web UI should also be extended so that latency information can be easily visualized through a heatmap.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, some basic networking knowledge (TCP/IP stack), frontend development experience (React, TypeScript) would be great but not required.
- Mentor(s):
  - Yang Ding (@Dyanngg, dingyany1995@outlook.com)
  - Anlan He (@heanlan, anlan9771@gmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/5514

#### Ability to install / upgrade Antrea using the CLI

- Description: Currently Antrea can be installed using a K8s YAML manifest or through the provided Helm chart. We believe there is value in providing a 3rd installation method, using the "antctl" CLI. The CLI installation / upgrade method would have the following advantages: a) more user-friendly, with support for command-line options to customize the installation, b) ability to run sanity checks on the K8s cluster before comitting to the installation, c) when upgrading, the CLI will ensure that Antrea components are upgraded in the optimal order, to minimize workload disruption.
- Expected Outcome: A new command for antctl, the Antrea CLI, which will provide support for installation and upgrade.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, UX experience would be great but not required.
- Mentor(s):
  - Quan Tian (@tnqn, tianquan23@gmail.com)
  - Lan Luo (@luolanzone, luolanzone@gmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/5896

#### Replace deprecated bincover with golang built-in coverage profiling tool

- Description: Currently Antrea uses a third-party tool called [bincover](https://github.com/confluentinc/bincover) to measure code coverage when running end-to-end (e2e) tests. This tool has been deprecated in favor of the built-in Go coverage profiling tool (https://go.dev/testing/coverage/) starting with Go 1.20, and it is no longer maintained. We would like to remove usage of bincover from the Antrea project and start using the built-in Go tool.
- Expected Outcome: Complete removal of the bincove dependency. Code coverage can still be measured with the same accuracy when running Antrea e2e tests and the results can still be reported to [Codecov](https://about.codecov.io/).
- Recommended Skills: familiarity with Golang and the Golang testing framework.
- Mentor(s):
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
  - Lan Luo (@luolanzone, luolanzone@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/4962

### Chaos Mesh

#### Observability for StressChaos

- Description: StressChaos is a chaos experiment that injects stress to the system. The current implementation of StressChaos is lack of observability, most of observability solutions could not observe the stress at Pod level, but only at Node level. This project is to enhance observability for StressChaos.
- Expected Outcome: Chaos Mesh end users could observe the injected stress at Pod level.
- Recommended Skills: Golang, Kubernetes, Linux, Observability Tools(e.g. Prometheus, Grafana, etc.)
- Mentor(s):
  - Zhiqiang Zhou(@STRRL, im@strrl.dev)
  - Yue Yang(@g1eny0ung, g1enyy0ung@gmail.com)
  - Cwen Yin(@cwen0, yincwego@gmail.com)
- Upstream Issue: https://github.com/chaos-mesh/chaos-mesh/discussions/3012, https://github.com/chaos-mesh/chaos-mesh/issues/3651

### Cilium

#### Governance Documentation

- Description: This project will focus on governance documentation for the Cilium project with two key parts. First, the governenace documentation should be moved out of the main docs and into the community repo. Second, we need to do an inventory of all of the repos under the project and come up with a lifecycle for them.
- Expected Outcome: Governance docs in community repo. All repos accounted for and with a lifecycle plan.
- Recommended Skills: enthusiasm for governance and basic markdown experience
- Mentor(s):
  - Bill Mulligan(@xmulligan, bill@isovalent.com)
- Upstream Issue: https://github.com/cilium/community/issues/78 https://github.com/cilium/community/issues/27

### Jaeger

#### Jaeger-V2 Storage Backends

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Currently only memory storage is wired in v2, we need to add Elasticsearch, Opensearch, Cassandra, Badger.
- Expected Outcome: Build out full support in jaeger-v2 for all storage backends supported by jaeger-v1
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084

#### Jaeger-V2 Observability

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Currently jaeger-v2 components are initialized without observability clients. We need to instantiate appropriate logging, tracing, and metrics clients and pass them to the components. The existing code uses internal metrics API, which needs to be bridged to OTEL metrics to minimize code changes.
- Expected Outcome: Achieve parity in observability of jaeger-v2 compared to jaeger-v1
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084

#### Jaeger-V2 Adaptive Sampling

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Jaeger-v1 collector can serve sampling configuration to SDKs, and allows either static configuration (with hot reload) or adaptive sampling that continuously re-calculates the desired sampling probabilities. We need to enable all these capabilities in jaeger-v2.
- Expected Outcome: Support adaptive sampling in jaeger-v2
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084

### KCL

#### KCL Package Version Management

- Description: The KCL package management tool primarily handles the management of third-party KCL packages for the KCL project, which includes tasks such as uploading and downloading these packages. When adding third-party packages to the KCL project, it is important to adhere to version management strategies. This involves carefully selecting and downloading the appropriate version of a package, especially when different versions of the same package are available.
- Expected Outcome: Add version management to the KCL package management tool.
- Recommended Skills: golang
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/246

#### KCL IDE Quick Fix

- Description: When the KCL IDE encounters some errors in the KCL code, it can pop up `Quick Fix` prompts to help users quickly fix the errors.
- Expected Outcome: Added Quick Fix for some error prompts in KCL IDE.
- Recommended Skills: rust
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zheng Zhang (@He1pa, he1pa404@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kcl/issues/997

#### KCL IDE Update KCL Dependencies

- Description: When a KCL package is loaded using KCL IDE, the IDE automatically updates the dependencies of the current KCL package through kpm.
- Expected Outcome: Add automatic updates for third-party libraries to the IDE.
- Recommended Skills: rust, go
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zheng Zhang (@He1pa, he1pa404@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kcl/issues/998

### Knative Eventing

#### Cross Namespace Event Links

- Description: One of the most requested features in Knative Eventing over the past few years has been for triggers in different namespaces than brokers, and for subscriptions
  in different namespaces than channels. More information can be found in the upstream issue.
- Expected Outcome: Knative Eventing Triggers and Subscriptions can reference Brokers or Channels in a namespace different from their own if the user possesses the necessary
  permissions to do so.
- Recommended Skills: Go, Kubernetes
- Mentor(s):
  - Calum Murray (@Cali0707, cmurray@redhat.com)
  - Pierangelo Di Pilato (@pierdipi, pierdipi@redhat.com)
- Upstream Issue: https://github.com/knative/eventing/issues/7530

### KubeVela

#### Support versioning for definitions

- Description: In KubeVela, X-Definitions provide the foundation for users to construct their applications. Currently we will automatically upgrade the definitions' version for our users, however, we still need the capability of explicit versioning in definitions. With this feature, our users can now manage the version easily for application upgrades and migrations.
- Expected Outcome: Support expilict versioning in definitions to help application upgrades and migrations.
- Recommended Skills: Go, Kubernetes
- Mentor(s):
  - Fog Dong (@FogDong, wuwuglu19@gmail.com)
  - Zhongpei Qiao(@chivalryq, chivalry.pp@gmail.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/6435

### Prometheus

#### Client_golang CI/CD improvements

- Description: Prometheus' client_golang is the Prometheus SDK for metrics instrumentation for Go applications. Client_golang promises full support for the 3 latests major Go versions, and for this task a lot of manual effort is executed by the community. Client_golang could receive several improvements around its CI/CD pipelines and automation:
  - Golang version upgrades requires autogenerating go files that Go Collector uses to collect Go runtime metrics.
  - Unit tests need to be run for the 3 latest Go versions, and running tests locally with different Go versions is hard at the moment. We can explore locally reproducible CI/CD.
  - The changelog of new releases still requires a lot of manual work, like going through commit history and hand-picking commits that need to be advertised. We want to explore automation around semantic conventional commits that allows Changelog/Release automation.
- Recommended Skills: Go, Shell, CI/CD
- Mentor(s):
  - [Arthur Sens](https://github.com/ArthurSens) (arthursens2005@gmail.com)
  - [Kemal Akkoyun](https://github.com/kakkoyun) (kakkoyun@gmail.com)
- Issue: 
  - https://github.com/prometheus/client_golang/issues/1434
  - https://github.com/prometheus/client_golang/issues/1435
  - https://github.com/prometheus/client_golang/issues/1436

### Vitess

#### Improve Unit Test Coverage

- Description: Vitess is a scalable cloud-native database system for horizontal scaling of MySQL.The project is over 10 years old and there are parts of the code that don’t have very good unit test coverage. Revamping these code files and adding unit test coverage will help with the overall project health. Having strong unit testing is also useful in preventing introducing bugs when making code changes to these files. The task of the mentee would be to add said unit tests for the given code files. At the time of writing this proposal, the unit test coverage in Vitess stands at 47.3% of all lines of code.
- Expected Outcome: Improved unit test coverage in Vitess.
- Recommended Skills: Go, SQL, Unit testing
- Mentor(s): 
  - [Manan Gupta](https://github.com/GuptaManan100) (manan@planetscale.com)
  - [Harshit Gangal](https://github.com/harshit-gangal) (harshit@planetscale.com)
- Issue: <https://github.com/vitessio/vitess/issues/14931>

### WasmEdge

#### Integrate MLX as a new WASI-NN backend

- Description: LLM is a hot topic, there are more and more frameworks to make the execution of LLM faster. WasmEdge already integrated the [llama.cpp](https://github.com/ggerganov/llama.cpp) as one of the backend. And we want to bring more. [MLX](https://github.com/ml-explore/mlx) is an array framework on Apple silicon created by Apple machine learning research. With MLX, we believe it can have a huge improvement on macOS.
- Expected Outcome: A new plugin provides a MLX [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3168

#### Integrate Intel Extension for Transformers as a new WASI-NN backend

- Description: LLM is a hot topic, there are more and more frameworks to make the execution of LLM faster. WasmEdge already integrated the [llama.cpp](https://github.com/ggerganov/llama.cpp) as one of the backend. Running LLM with CPU only is huge for those users who don't have GPU. We would like to integrate [Intel Extension for Transformers](https://github.com/intel/intel-extension-for-transformers) as a new WASI-NN backend to provide a faster CPU inference performance.
- Expected Outcome: A new plugin provides a Intel Extension for Transformers [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3169

#### Integrate whisper.cpp as a new WASI-NN backend

- Description: WasmEdge supports PyTorch, TensorFlow Lite, llama.cpp, and more NN backend. Dealing with the Voice to Text is a big thing that we want to achieve. To make it possible, we would like to integrate [whisper.cpp](https://github.com/ggerganov/whisper.cpp), a port of OpenAI's Whisper model in C/C++ as a new [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend.
- Expected Outcome: A new plugin provides a whisper.cpp [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3170

#### Integrate burn.rs as a new WASI-NN backend

- Description: WasmEdge supports PyTorch, TensorFlow Lite, llama.cpp, and more NN backend. [Burn.rs](https://github.com/tracel-ai/burn) is a new deep learning framework built using Rust. The portability, flexibility, and compute efficiency are important to Wasm. That's why we would love to have `burn.rs` as a new [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend.
- Expected Outcome: A new plugin provides a burn.rs [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: Rust, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3172

