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

### Istio

#### Improve Test Coverage for Istio Ambient Mesh

- Description: Ambient mesh is now one of the biggest features in Istio, but it is in its early stage. We are in the process of improving the test coverage for Ambient Mesh in order to move it to Beta. Ztunnel works as shared data plane within a node, it subscribes to `Workload` and `Authorization` resources, both need to be well tested.
- Expected Outcome:
  - Enhanced UnitTest coverage for `Workload` and `Authorization` Delta xDS/Stow interface.
  - Enhanced integration tests for ztunnel Authorization Policy 
- Recommended Skills: Go, Istio Test Framework
- Mentor(s):
  - Zhonghu Xu (@hzxuzhonghu, zhhxu2011@gmail.com) 
  - Faseela K (@kfaseela, k.faseela@gmail.com) 
- Upstream Issue:
  - https://github.com/orgs/istio/projects/9
  - https://github.com/istio/ztunnel/issues/251

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

### Konveyor

#### Move2Kube: Exploratory approaches to artifact manipulation.

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has built-in support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. As part of replatforming, we want to allow artifact manipulation at various levels to handle complex cases of replatforming flows. Example - while re-platforming from Netflix OSS spring boot feign client + eureka setup to Kubernetes (kubedns, kube-dns, services, ingress etc.) could need some artifact changes at different levels (code, architecture etc.).
- Expected Outcome:
  - Identify various forms of artifact manipulation and explore approaches to support such manipulations.
- Recommended Skills:
  - Golang
  - program analysis
- Mentor(s):
  - Akash Nayak (@akash.nayak1, akash.nayak1@ibm.com)
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
  - Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1130

#### Move2Kube: Simplify plugin architecture of m2k

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. The tool has a powerful plugin based transformer architecture where developers can write their own custom transformer plugins to fulfil their re-platforming needs. However, concepts like path mappings etc could be simplified for better adoption. Example - writing a Move2Kube custom transformer needs developers to understand various concepts such as path mappings etc, can we reduce this learning overhead by simplifying the Move2Kube architecture?
- Expected Outcome:
  - Come up with a simplified alternative design for plugin architecture for M2K
  - Migrate existing components to support the new design with backward compatibility (good to have).
- Recommended Skills:
  - Golang
  - K8s
- Mentor(s):
  - Akash Nayak (@akash.nayak1, akash.nayak1@ibm.com)
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
  - Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1131

#### Move2Kube: Advanced Resources support and enhance other Move2Kube components

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has built-in support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. Currently we have support for resources such as ArgoCD, Tekton, etc. There is still a gap to be covered in the support Move2Kube provides. Example - enhance support for external transformers (GRPC, file/folder permissions, etc.).
- Expected Outcome:
  - More comprehensive support for Move2Kube advanced resources and other components.
- Recommended Skills:
  - Golang
  - K8s
  - ArgoCD
  - Tekton
- Mentor(s):
  - Akash Nayak (@akash.nayak1, akash.nayak1@ibm.com)
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
  - Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1132

### Kubearmor

#### Kubearmor Kata Container Support

- Description: Kata Containers is an open source community working to build a secure container runtime with lightweight virtual machines that feel and perform like containers, but provide stronger workload isolation using hardware virtualization technology as a second layer of defense.
- Expected Outcome: KubeArmor natively protecting Kata containers with required Integration.
- Recommended Skills: Go, Kubernetes, Linux
- Mentor(s): 
  - Barun Acharya  (@daemon1024, barun1024@gmail.com)
  - Prashant Mishra (@primalpimmy, prashant20.pm@gmail.com)
  - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com )
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1340

#### Leverage OCI Hooks for Container Events

- Description: Use OCI hooks and get events in context to container start/stop: Currently KubeArmor mounts docker/containerd/crio UNIX domain socket file in KubeArmor to watch for container events. The aim is to use OCI hooks for getting such container events.
- Expected Outcome: Eliminate exposing docker/containerd/crio UNIX domain sockets inside a container.
- Recommended Skills: Go, Kubernetes, Linux
- Mentor(s): 
  - Barun Acharya  (@daemon1024, barun1024@gmail.com)
  - Akshay Gaikwad (@akshay196, akgaikwad001@gmail.com)
  - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com )
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1390

#### Dashboards for application behavior and KubeArmor state

- Description: For showing an application's behaviour, we'd like to have a Kibana/Grafana dashboard. We have existing integrations for
visualizing alerts with Elastic/Loki and we can use them for creating these.
We want to leverage the above for creating a plugin which will allow users to see an application's behavior based on visibility logs sent by KubeArmor.
- Expected Outcome: A kubernetes dashboard setup that also has the app behaviours described.
- Recommended Skills: Grafana, Javascript, Go, Kubernetes, Linux
- Mentor(s): 
  - Barun Acharya  (@daemon1024, barun1024@gmail.com)
  - Prashant Mishra (@primalpimmy, prashant20.pm@gmail.com)
  - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com )
  - Anurag Kumar (@kranurag7, kranurag7@linux.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1390

### KubeVela

#### Support versioning for definitions

- Description: In KubeVela, X-Definitions provide the foundation for users to construct their applications. Currently we will automatically upgrade the definitions' version for our users, however, we still need the capability of explicit versioning in definitions. With this feature, our users can now manage the version easily for application upgrades and migrations.
- Expected Outcome: Support expilict versioning in definitions to help application upgrades and migrations.
- Recommended Skills: Go, Kubernetes
- Mentor(s):
  - Fog Dong (@FogDong, wuwuglu19@gmail.com)
  - Zhongpei Qiao(@chivalryq, chivalry.pp@gmail.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/6435

### Kyverno

#### Kyverno for Envoy Authorization

- Description: Build an Envoy plugin to support authorisation based on Kyverno policies.
- Expected Outcome: Enable users to perform autorisation with similar concepts as kyverno and kyverno-JSON using policies.
- Recommended Skills: Golang, Kubernetes, Envoy
- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charles.edouard@nirmata.com)
  - Anushka Mittal (@anushkamittal2001, anushka@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9488

#### Kyverno VPA Recommender 

- Description: A common pain-point heard from users is improper resource allocations, and if Kyverno policies can help with that. This is an exploratory project to see if Kyverno can work with Kubernetes Vertical Pod Autoscalers (VPA).
- Expected Outcome: Kyverno policies that work with VPA recommender.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
  - Khaled Emara (@KhaledEmaraDev, khaled.emara@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9429


#### Convert Kubernetes Best Practices Policies to CEL 

- Description: Kubernetes Best Practices policies are written using Kyverno patterns and JMESPath, which means they cannot be executed as ValidatingAdmissionPolicy resources in the API server. This project aims to convert Kubernetes Best Practices policies, and other validating policies, to CEL wherever possible.
- Expected Outcome: Convert Kyverno policies for Kubernetes best practices to CEL.
- Recommended Skills: Kubernetes, Kyverno policies, CEL
- Mentor(s):
  - Anusha Hegde (@anusha94, anusha.hegde@nirmata.com)
  - Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com)
- Upstream Issue: https://github.com/kyverno/policies/issues/891

#### Verify Multiple Image Attestations

- Description: Currently Kyverno cannot verify data across multiple attestations e.g. an image vulnerability scan report and a OpenVEX document. This project will enhance the image verification rules to support flexible checks across multiple attestations.
- Expected Outcome: Support condition validation across multiple image verification attestations or context entry.
- Recommended Skills: Golang, Kubernetes, VEX, Cosign, Notary
- Mentor(s):
  - Vishal Choudhary (@vishal-chdhry, vishal.choudhary@nirmata.com)
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9456

### K8sGPT

#### Enhance K8sGPT's analyzers Unit Test Coverage

- Description: K8sGPT is a tool for scanning Kubernetes clusters, diagnosing and triaging issues with the help of GenAI. It has SRE experience codified into its analyzers. These analyzers are critical for K8sGPT to perform its in-depth analysis. There are a few analysers that have either limited or absent unit tests. The goal is to introduce more unit tests which will reflect mocked problematic/misconfigured K8s resources and assure K8sGPT analysers can catch and identify those test scenarios.
- Expected Outcome: Introduce and enhance Test Coverage of K8sGPT's analyzers
- Recommended Skills: Go, Kubernetes 
- Mentor(s):
  - Alex Jones (@AlexsJones, alex@k8sgpt.ai)
  - Aris Boutselis (@arbreezy, arisboutselis08@gmail.com)
- Issue: https://github.com/k8sgpt-ai/k8sgpt/issues/889

### OpenTelemetry

#### One Logging Bridge per Language

- Description: One of the goals set for the OpenTelemetry project in 2024 is to have at least one logging bridge per Language SIG, so that our end-users can start using OTLP Logging natively in their applications. While some languages have such a bridge already, some have the desire to implement at least one bridge but are lacking the engineering resources to do so. This internship starts by taking a look at the current state, marking which languages have a bridge already and which are lacking. The next step is to propose and implement at least one bridge for at least one language that doesn't have such a bridge yet.
- Expected Outcome: At least one logging bridge is implemented for at least one language.
- Recommended Skills: One (or more!) of the missing languages supported by OpenTelemetry
  - C++
  - Erlang
  - Go
  - JavaScript
  - PHP
  - Ruby
  - Swift
- Mentor(s):
  - Juraci Paixão Kröhling (@jpkrohling, juraci.kroehling@grafana.com)
  - Andrzej Stencel (@astencel-sumo, andrzej@andrzejstencel.pl)
- Upstream Issue: https://github.com/open-telemetry/community/issues/1865

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
