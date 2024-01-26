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
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

#### Leverage OCI Hooks for Container Events

- Description: Use OCI hooks and get events in context to container start/stop: Currently KubeArmor mounts docker/containerd/crio UNIX domain socket file in KubeArmor to watch for container events. The aim is to use OCI hooks for getting such container events.
- Expected Outcome: Eliminate exposing docker/containerd/crio UNIX domain sockets inside a container.
- Recommended Skills: Go, Kubernetes, Linux
- Mentor(s): 
  - Barun Acharya  (@daemon1024, barun1024@gmail.com)
  - Akshay Gaikwad (@akshay196, akgaikwad001@gmail.com)
  - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com )
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1390
- LFX URL: 

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
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1591
- LFX URL: 

### KubeEdge

#### Auto Generate KubeEdge API Document 

- Description: KubeEdge has introduced several custom APIs, but currently, there is no corresponding API documentation available. We would like to implement automated generation of API documentation and display it on the website documentation to assist users in quickly understanding the APIs and help developers reduce maintenance costs.
- Expected Outcome: A tool for automatically generating API documentation.
- Recommended Skills: Golang, Kubernetes, Swagger
- Mentor(s): 
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5159
- LFX URL: 

#### Image PrePull Feature Enhancement

- Description: In the latest release, KubeEdge has implemented the ability for image pre pull. However, each task execution only supports images from the same image repository currently. We hope to enhance this feature to support capabilities like overriding images and secrets, complete end-to-end tests for this feature.
- Expected Outcome: Support image and secret override in image pre pull feature. And E2e tests for this feature are added. 
- Recommended Skills: Golang, Kubernetes, KubeEdge
- Mentor(s):
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5341
- LFX URL: 

#### Keadm Tool Enhancement

- Description: Keadm(KubeEdge installation tool) now only supports configuring a subset of parameters during EdgeCore installation. We would like to support specifying parameters using `--set` or directly using an existing local configuration file to achieve full parameter configuration and meet the users' requirements. 
- Expected Outcome: Users can use `keadm join --set` or specify the local `edgecore.yaml` to configure EdgeCore.
- Recommended Skills: Golang, Kubernetes, KubeEdge
- Mentor(s):
  - Willard Hu (@WillardHu, wei.hu@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5317 
- LFX URL: 

#### Support latest version in keink and run demo on keink

- Description: keink(represent for KubeEdge IN kind) is a project for running local KubeEdge clusters using Docker container "nodes", so developers can install a multi-node
  edge cluster in one node. Now we need to support the latest version installation in keink.
- Expected Outcome: keink can install the latest version of KubeEdge and developers can quickly use keink to run kubeedge, and then develop applications on KubeEdge.
- Recommended Skills: Kubernetes, KubeEdge, Golang
- Mentor(s): 
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/keink/issues/8
- LFX URL: 

### KubeVela

#### Support versioning for definitions

- Description: In KubeVela, X-Definitions provide the foundation for users to construct their applications. Currently we will automatically upgrade the definitions' version for our users, however, we still need the capability of explicit versioning in definitions. With this feature, our users can now manage the version easily for application upgrades and migrations.
- Expected Outcome: Support expilict versioning in definitions to help application upgrades and migrations.
- Recommended Skills: Go, Kubernetes
- Mentor(s):
  - Fog Dong (@FogDong, wuwuglu19@gmail.com)
  - Zhongpei Qiao(@chivalryq, chivalry.pp@gmail.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/6435
- LFX URL: 

### Kyverno

#### Kyverno for Envoy Authorization

- Description: Build an Envoy plugin to support authorisation based on Kyverno policies.
- Expected Outcome: Enable users to perform autorisation with similar concepts as kyverno and kyverno-JSON using policies.
- Recommended Skills: Golang, Kubernetes, Envoy
- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charles.edouard@nirmata.com)
  - Anushka Mittal (@anushkamittal2001, anushka@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9488
- LFX URL: 

#### Kyverno VPA Recommender 

- Description: A common pain-point heard from users is improper resource allocations, and if Kyverno policies can help with that. This is an exploratory project to see if Kyverno can work with Kubernetes Vertical Pod Autoscalers (VPA).
- Expected Outcome: Kyverno policies that work with VPA recommender.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
  - Khaled Emara (@KhaledEmaraDev, khaled.emara@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9429
- LFX URL: 


#### Convert Kubernetes Best Practices Policies to CEL 

- Description: Kubernetes Best Practices policies are written using Kyverno patterns and JMESPath, which means they cannot be executed as ValidatingAdmissionPolicy resources in the API server. This project aims to convert Kubernetes Best Practices policies, and other validating policies, to CEL wherever possible.
- Expected Outcome: Convert Kyverno policies for Kubernetes best practices to CEL.
- Recommended Skills: Kubernetes, Kyverno policies, CEL
- Mentor(s):
  - Anusha Hegde (@anusha94, anusha.hegde@nirmata.com)
  - Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com)
- Upstream Issue: https://github.com/kyverno/policies/issues/891
- LFX URL: 

#### Verify Multiple Image Attestations

- Description: Currently Kyverno cannot verify data across multiple attestations e.g. an image vulnerability scan report and a OpenVEX document. This project will enhance the image verification rules to support flexible checks across multiple attestations.
- Expected Outcome: Support condition validation across multiple image verification attestations or context entry.
- Recommended Skills: Golang, Kubernetes, VEX, Cosign, Notary
- Mentor(s):
  - Vishal Choudhary (@vishal-chdhry, vishal.choudhary@nirmata.com)
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9456
- LFX URL: 

### K8sGPT

#### Enhance K8sGPT's analyzers Unit Test Coverage

- Description: K8sGPT is a tool for scanning Kubernetes clusters, diagnosing and triaging issues with the help of GenAI. It has SRE experience codified into its analyzers. These analyzers are critical for K8sGPT to perform its in-depth analysis. There are a few analysers that have either limited or absent unit tests. The goal is to introduce more unit tests which will reflect mocked problematic/misconfigured K8s resources and assure K8sGPT analysers can catch and identify those test scenarios.
- Expected Outcome: Introduce and enhance Test Coverage of K8sGPT's analyzers
- Recommended Skills: Go, Kubernetes 
- Mentor(s):
  - Alex Jones (@AlexsJones, alex@k8sgpt.ai)
  - Aris Boutselis (@arbreezy, arisboutselis08@gmail.com)
- Issue: https://github.com/k8sgpt-ai/k8sgpt/issues/889
- LFX URL: 

### Litmus Chaos

#### Enhancement of litmusctl: Adding E2E Tests, CRUD Probes Commands, and Package Manager Availability

- Description: The [project](https://github.com/litmuschaos/litmusctl) aims to improve litmusctl by introducing end-to-end (E2E) tests for better release testing and adding CRUD commands for probes, addressing user needs. Additionally, it seeks to enhance user accessibility by making litmusctl available on Brew and Chocolatey package managers.
- Expected Outcome: The enhancement of litmusctl will include comprehensive E2E testing for improved reliability, the addition of CRUD commands for probes to expand functionality, and availability on Brew and Chocolatey for greater accessibility and user convenience.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Vedant Shrotria (@Jonsy13, vedant.shrotria@harness.io)
  - Sarthak Jain (@SarthakJain26, sarthak.jain@harness.io)
  - Nagesh Bansal (@Nageshbansal, nageshbansal59@gmail.com)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/4405
- LFX URL: 

#### Enhancing Chaos Center: Implementing E2E Test Cases and Addressing CVE Issues

- Description: This initiative focuses on augmenting the [Chaos Center](https://github.com/litmuschaos/litmus/tree/master/chaoscenter) with comprehensive end-to-end (E2E) test cases, addressing the current gap in testing capabilities. The lack of extensive E2E tests has been a challenge, especially during release cycles. The project also targets fixing identified Common Vulnerabilities and Exposures (CVEs) in the Chaos Center, enhancing the overall security and reliability of the system.
- Expected Outcome: The project aims to establish a robust E2E testing framework for the Chaos Center, significantly improving test coverage and reliability during releases. Additionally, it focuses on resolving all identified CVEs, thereby enhancing the system's security. These improvements are expected to result in more stable and secure releases, increasing user trust in the Chaos Center.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Namkyu Park (@namkyu1999, lak9348@gmail.com)
  - Shubham Chaudhary (@ispeakc0de, shubham.chaudhary@harness.io)
  - Raj Babu Das (@imrajdas, mail.rajdas@gmail.com)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/4406
- LFX URL: 

#### Enhancements in Chaos Center: Multiple Project Owners and Log Download API
- Description: This project focuses on two major enhancements for the [Chaos Center](https://github.com/litmuschaos/litmus/tree/master/chaoscenter). First, it aims to enable the support for multiple project owners, a feature highly requested by users. This addition will allow for more collaborative and flexible project management within the Chaos Center. Second, the project will develop an API for downloading logs, providing users with easier access to log data. Furthermore, there's a need to update the API documentation to reflect these new changes and ensure that users have the latest information for seamless integration and usage.
- Expected Outcome: The successful completion of this project will result in the Chaos Center supporting multiple project owners, fostering collaborative and efficient project management. The new log download API will enhance user experience by simplifying access to log data. Additionally, the updated API documentation will ensure that users have clear and current guidelines, supporting better utilization of the new features.
- Recommended Skills: Golang, ReactJs
- Mentor(s):
  - Saranya Jena (@Saranya-jena, saranya.jena@harness.io)
  - Sahil Kumar (@SahilKr24, sahil.kumar@harness.io)
  - Hrishav Kumar (@hrishavjha, hrishav.kumar@harness.io)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/4407
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

### Vitess

#### Improve Unit Test Coverage

- Description: Vitess is a scalable cloud-native database system for horizontal scaling of MySQL.The project is over 10 years old and there are parts of the code that don’t have very good unit test coverage. Revamping these code files and adding unit test coverage will help with the overall project health. Having strong unit testing is also useful in preventing introducing bugs when making code changes to these files. The task of the mentee would be to add said unit tests for the given code files. At the time of writing this proposal, the unit test coverage in Vitess stands at 47.3% of all lines of code.
- Expected Outcome: Improved unit test coverage in Vitess.
- Recommended Skills: Go, SQL, Unit testing
- Mentor(s): 
  - [Manan Gupta](https://github.com/GuptaManan100) (manan@planetscale.com)
  - [Harshit Gangal](https://github.com/harshit-gangal) (harshit@planetscale.com)
- Issue: https://github.com/vitessio/vitess/issues/14931
- LFX URL: 

### Volcano

#### Volcano supports multi-cluster AI workloads scheduling

- Description: Volcano provides rich scheduling capabilities for AI workloads in the field of single cluster. In large model training scenarios, a single cluster cannot meet the computing power requirements of jobs, more and more users hope to submit jobs uniformly on multiple clusters for large model training, volcano needs to provide various scheduling capabilities, such as job management, gang scheduling, queue management, etc., and select the appropriate cluster for jobs to cope with the requirements of large model training.
- Expected Outcome:
  - Implement a basic multi-clusters scheduling framework integrated with multi-clusters scheduler like [Karmada](https://github.com/karmada-io/karmada) or other multi-cluster orchestration.
  - Implement gang scheduling, fair scheduling in multi-cluster.
  - Implement queue management in multi-cluster.
- Recommended Skills: Go, Kubernetes, Volcano
- Mentor(s):
  -   william wang(@william-wang, wang.platform@gmail.com)
  -   Xuzheng Chang(@Monokaix, changxuzheng@huawei.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3310
- LFX URL: 

#### Volcano supports DRA integration

- Description:  [DRA](https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/) is a new generation device management mechanism for kubernetes. It introduces a new resource request API `ResourceClaim`, which requires kubelet, kube-controller-manager, scheduler, and third-party device management controllers to cooperate with each other to work. The kube-scheduler has implemented corresponding scheduling capabilities, Volcano also needs to implement the DRA scheduling plug-in to integrate the DRA function.
- Expected Outcome:
  - A design document describing how to integrate DRA into volcano.
  - Implement DRA plugin in volcano.
- Recommended Skills: Go, Kubernetes, Volcano
- Mentor(s):
  -   william wang(@william-wang, wang.platform@gmail.com)
  -   Xuzheng Chang(@Monokaix, changxuzheng@huawei.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3143
- LFX URL: 

### WasmEdge

#### Integrate MLX as a new WASI-NN backend

- Description: LLM is a hot topic, there are more and more frameworks to make the execution of LLM faster. WasmEdge already integrated the [llama.cpp](https://github.com/ggerganov/llama.cpp) as one of the backend. And we want to bring more. [MLX](https://github.com/ml-explore/mlx) is an array framework on Apple silicon created by Apple machine learning research. With MLX, we believe it can have a huge improvement on macOS.
- Expected Outcome: A new plugin provides a MLX [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3168
- LFX URL: 

#### Integrate Intel Extension for Transformers as a new WASI-NN backend

- Description: LLM is a hot topic, there are more and more frameworks to make the execution of LLM faster. WasmEdge already integrated the [llama.cpp](https://github.com/ggerganov/llama.cpp) as one of the backend. Running LLM with CPU only is huge for those users who don't have GPU. We would like to integrate [Intel Extension for Transformers](https://github.com/intel/intel-extension-for-transformers) as a new WASI-NN backend to provide a faster CPU inference performance.
- Expected Outcome: A new plugin provides a Intel Extension for Transformers [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3169
- LFX URL: 

#### Integrate whisper.cpp as a new WASI-NN backend

- Description: WasmEdge supports PyTorch, TensorFlow Lite, llama.cpp, and more NN backend. Dealing with the Voice to Text is a big thing that we want to achieve. To make it possible, we would like to integrate [whisper.cpp](https://github.com/ggerganov/whisper.cpp), a port of OpenAI's Whisper model in C/C++ as a new [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend.
- Expected Outcome: A new plugin provides a whisper.cpp [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3170
- LFX URL: 

#### Integrate burn.rs as a new WASI-NN backend

- Description: WasmEdge supports PyTorch, TensorFlow Lite, llama.cpp, and more NN backend. [Burn.rs](https://github.com/tracel-ai/burn) is a new deep learning framework built using Rust. The portability, flexibility, and compute efficiency are important to Wasm. That's why we would love to have `burn.rs` as a new [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend.
- Expected Outcome: A new plugin provides a burn.rs [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend, a test suite for validating the plugin, documents and examples for explaining how to use the plugin.
- Recommended Skills: Rust, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3172
- LFX URL: 

