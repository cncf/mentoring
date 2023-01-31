# Term 03 - 2022 September - November 

Status: Completed

## Table of Contents

  - [Timeline](#timeline)
    - [Term 3 September 5th November 30th](#term-3-september-5th-november-30th)
    - [Project Instructions](#project-instructions)
    - [Application instructions](#application-instructions)
  - [Accepted Projects](#accepted-projects)
    - [Cilium](#cilium)
      - [Improving Security posture of the Cilium/Hubble/Tetragon release process](#improving-security-posture-of-the-ciliumhubbletetragon-release-process)
    - [CNCF TAG Contributor Strategy](#cncf-tag-contributor-strategy)
      - [Mentoring Workspaces - GITHUBUSER.PROJECT.cncf.io (w/ VSCode)](#mentoring-workspaces---githubuserprojectcncfio-w-vscode)
    - [CNCF TAG Network and Observability](#cncf-tag-network-and-observability)
      - [Kubernetes ontology and subgraph module design](#kubernetes-ontology-and-subgraph-module-design)
    - [Devfile](#devfile)
      - [Add Compose file support in the spec API II](#add-compose-file-support-in-the-spec-api-ii)
    - [Karmada](#karmada)
      - [Enable configurable resource interpreter](#enable-configurable-resource-interpreter)
    - [KubeArmor](#kubearmor)
      - [Add BTF and BPF CO-RE Support to KubeArmor](#add-btf-and-bpf-co-re-support-to-kubearmor)
      - [Use non-privileged containers for KubeArmor daemonset](#use-non-privileged-containers-for-kubearmor-daemonset)
    - [Kyverno](#kyverno)
      - [Policy Exceptions](#policy-exceptions)
      - [Enable resource clean-up](#enable-resource-clean-up)
      - [Implement new custom JMESPath filters](#implement-new-custom-jmespath-filters)
      - [Logging in JSON plus other enhancements](#logging-in-json-plus-other-enhancements)
      - [More support for subresources](#more-support-for-subresources)
    - [Meshery](#meshery)
      - [Integration of Open Policy Agent (OPA) and Meshery](#integration-of-open-policy-agent-opa-and-meshery)
      - [User Interface Overhaul: State Management w/Apollo/GraphQL](#user-interface-overhaul-state-management-wapollographql)
    - [Service Mesh Performance](#service-mesh-performance)
      - [Adaptive Load Controller](#adaptive-load-controller)
      - [Convergence of Network and Graph topologies](#convergence-of-network-and-graph-topologies)
    - [Thanos](#thanos)
      - [Receive: Support for tenant-specific external labels](#receive-support-for-tenant-specific-external-labels)
      - [Load balancing of API communication in Thanos](#load-balancing-of-api-communication-in-thanos)
    - [Vitess](#vitess)
      - [Add complete parsing support for Spatial MySQL functions II](#add-complete-parsing-support-for-spatial-mysql-functions-ii)
      - [Improve evaluation engine](#improve-evaluation-engine)
    - [Volcano](#volcano)
      - [Pick out reasonable victim pods for rescheduling plugin](#pick-out-reasonable-victim-pods-for-rescheduling-plugin)
      - [Implement pod filter chain for rescheduling](#implement-pod-filter-chain-for-rescheduling)
      - [Avoid hot node in dynamic scheduling based on real workload](#avoid-hot-node-in-dynamic-scheduling-based-on-real-workload)
      - [Integrate Volcano with Ray](#integrate-volcano-with-ray)
      - [Support hot update daemon log level](#support-hot-update-daemon-log-level)
    - [WasmEdge](#wasmedge)
      - [Support serialize and deserialize in WasmEdge](#support-serialize-and-deserialize-in-wasmedge)
      - [Porting OpenVINO on multiple platforms for the WASI-NN proposal in WasmEdge](#porting-openvino-on-multiple-platforms-for-the-wasi-nn-proposal-in-wasmedge)
      - [Node API support for WasmEdge QuickJS](#node-api-support-for-wasmedge-quickjs)
      - [OpenCV SDKs for Wasm in WasmEdge](#opencv-sdks-for-wasm-in-wasmedge)


### Timeline

#### Term 3: September 5th - November 30th

Mentorship duration - three months (12 weeks - full-time schedule)

| activity | date |
| --- | --- |   
| project proposals | August 1 - August 12, 5:00 PM PDT |
| mentee applications open | August 15 - August 24, 5:00 PM PDT |
| application review/admission decisions/HR paperwork | August 25 - September 1, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | September 5 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | October 6 (End of Week 5) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | November 16, 5:00 PM PST (End of Week 11) |
| Last day of term | November 30 |


### Project Instructions

Project proposals open August 1st, 2022.

Once opened, Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/lfx-mentorship/2022/03-Sept-Nov/project_ideas.md, by August 12th, 2022.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/lfx-mentorship/README.md#program-guidelines) page.


## Accepted Projects

### Cilium

#### Improving Security posture of the Cilium/Hubble/Tetragon release process

- Description: To be able to improve the Security posture of the Cilium family’s open source projects (Cilium, Hubble, Tetragon), we would need to create signed SBOMs, signed release artifacts for each open source project and automate all of these steps.

- Recommended Skills: Golang, GitHub Actions, Kubernetes, Docker, Security
- Mentor(s): [André Martins](https://github.com/aanm)  [Natália Réka Ivánkó](https://github.com/sharlns) [Jed Salazar](https://github.com/jedsalazar)
- Issues: <https://github.com/cilium/cilium/issues/19282> <https://github.com/cilium/cilium/issues/20712> <https://github.com/cilium/cilium/issues/20850>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/680e32e5-d056-46fa-a94d-4af453d4e81d


### CNCF TAG Contributor Strategy

#### Mentoring Workspaces - GITHUBUSER.PROJECT.cncf.io (w/ VSCode)

- Description: pair.sharing.io is a mentoring / pair environment used by ii.nz that brings up clusters to co-learn and co-author via tmate+emacs and a live cluster with many features useful to cloud native development. However, while many folks find the ideas useful, it would be good to reach a wider audience by bringing up workspaces w/ VSCode as an alternative to emacs. The request is for a PoC deploying coder.com to CNCF Infrastructure (likely Packet) and bringing over some of the methods of collaboration learned by ii on pair to a wider audience.
  "If you want to go fast, go by yourself. If you want to go far, go together." African Proverb – Martha Goedert
- Recommended Skills: shell, terminals, VSCode, k8s, System Administration
- Mentor(s): Hippie Hacker (@hh), Caleb Woodbine (@BobyMCBobs)
- Issue: <https://github.com/sharingio/pair/issues/173>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/2f5582f4-6cfa-41af-88d2-2bfdd8768756

### CNCF TAG Network and Observability

#### Kubernetes ontology and subgraph module design

- Description: Network topologies and graph databases go hand-in-hand. The OpenAPI specifications for Kubernetes provides taxonomy, but augmenting a graph data model with formalized ontologies enables any number of capabilities, one of the more straightforward is the inferencing requisite for natural language processing, and consequently, a human-centric query / response interaction becomes becomes possible. More importantly, more advanced systems can be built when a graph data model of connected systems is upgraded to be a knowledge semantic graph. Deliverables (among other items):



- a Kubernetes ontology using OWL as a popular (and mature) way of doing this.
- a cuelang-based component generator

- Recommended Skills: cuelang, golang, neo4j
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Matt Young](https://github.com/halcyondude)
- Issue: https://github.com/cncf/tag-network/issues/21

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/df449a23-ac20-4ee9-8a2c-e0e5d08ba727


### Devfile

#### Add Compose file support in the spec API II

- Description: Devfiles are YAML files that define remote development environments. The main part of a Devfile is the `components` section and that's where the containers required to code, build and test an application are specified. The Devfile can either include those containers defintions or reference external files such as Dockerfiles or Kubernetes manifests. [The Compose file](https://github.com/compose-spec/compose-spec/blob/master/spec.md) is a popular format in open source development projects to define runtime environments for testing the application but those cannot be referenced by a Devfile yet. The goal is to continue the work that has been started a couple of months ago to allow referencing a Compose file from a Devfile. The expected outcome is to create a PoC written in go that parses a Compose file such as [this one](https://github.com/microservices-demo/microservices-demo/blob/master/deploy/docker-compose/docker-compose.yml) using [kompose](https://github.com/kubernetes/kompose) (as a library, not as an executable) and that creates the objects corresponding to the Compose file services in a Kubernetes cluster.
- Recommended Skills: Golang, Compose, Kubernetes
- Mentor(s): Mario Loriedo (@l0rd)
- Upstream Issue (URL): https://github.com/devfile/api/issues/501

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/8b4aeab0-f891-4a67-a510-61393ca38520


### Karmada

#### Enable configurable resource interpreter

- Description: Now Resource Interpreter framework enabled both built-in and customized interpreter, we are going to provide a way for people customize the interpreter by applying a configuration.
- Recommended Skills: golang, k8s, lua
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): <https://github.com/karmada-io/karmada/issues/2371>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/40b17a86-e470-4406-b7f0-731e689a39f4


### KubeArmor

#### Add BTF and BPF CO-RE Support to KubeArmor

- Description: Currently KubeArmor depends on kernel headers to use various kernel structures. This creates difficulty in having portability.
Linux Kernel versions with BTF (BPF Type Format) information available allows us to write portable BPF CO-RE (or Compile Once - Run Everywhere) applications that can run on multiple kernel versions and configurations without any modification or runtime compilation on the target machine.  
But there is a restriction that CO-RE requires to have the BTF information of the target kernel, which is provided by the kernel itself when it's compiled with CONFIG_DEBUG_INFO_BTF=y. This option was introduced in Linux 5.2.  
For kernels < 5.2 we can use BTFGen to ship BTF information with KubeArmor code or use pahole to generate BTF information from the vmlinux image (with DWARF information) at runtime.  
The project aims to make KubeArmor truly portable across all kernel versions by reducing host environment dependencies.

- Recommended Skills: Kernel, go, C 
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/789>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/d61e1b05-2a4f-432d-b715-57c818b3e120

#### Use non-privileged containers for KubeArmor daemonset

- Description: KubeArmor currently uses privileged mode for its daemonset containers. But it is not a good practice. Privileged containers are usually frowned upon. In many cases, specific admission controllers are deployed to not allow containers to be installed in privileged mode.
It is best to not use privileged mode but to define specific capabilities for KubeArmor.  
The aim of the project is to analyse and reduce the system privileges required by KubeArmor, thereby reducing the potential attack surface.

- Recommended Skills: go, Kernel, k8s
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/781>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/3cc962b4-cd8b-46ea-9c77-83304145fd51


### Kyverno

#### Policy Exceptions

- Description: Enable flexible management of policy exceptions without requiring changes to the policy definitions.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/2627 

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/0eb98f34-bfd8-4ba1-b9e5-47fc67b6fd41

#### Enable resource clean-up

- Description: Support a new type of Kyverno rule to delete resources based on various criterias, such as the type, age, metadata and status.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3483
  - https://github.com/kyverno/KDP/pull/25 

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/25e0fa72-8260-4c6f-819b-d87b865e58f2

#### Implement new custom JMESPath filters

- Description: Kyverno uses JMESPath to perform filtering and selection of JSON content in a flexible and advanced way. Many custom filters have been implemented specifically for Kyverno to date. Implement two more filters which fill needed gaps in Kyverno today: a grouping filter and an index locator.
- Recommended Skills: Golang
- Mentor(s): Chip Zoller, Shuting Zhao
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3981 
  - https://github.com/kyverno/kyverno/issues/4336

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/bb0ff695-3d54-4ce2-b93c-3ab92842b3ee

#### Logging in JSON plus other enhancements

- Description: Add an ability allowing a user to tell Kyverno to log in JSON format rather than klog.
- Recommended Skills: Golang
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3411

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/e5ef8032-3dd3-44c3-8746-620f4f678d60

#### More support for subresources

- Description: Kyverno lacks the ability to operate on some important subresources like /scale and /status in areas such as validation and mutation.
- Recommended Skills: Golang
- Mentor(s): Shuting Zhao
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3118
  - https://github.com/kyverno/kyverno/issues/2843
  - https://github.com/kyverno/kyverno/issues/4313 

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/9ac41a72-62f4-48e9-8630-5f9be261e2bf


### Meshery

#### Integration of Open Policy Agent (OPA) and Meshery

- Description: As a golang library integrate OPA into Meshery Server, enabling users to define policies to dictate the manner in which their cloud native infrastructure is to both run and be configured. Design an extensible policy framework in which rules may be augmented and dynamically supplied at runtime. 
- Recommended Skills: golang, rego, reactjs
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Ashish Tiwari](https://github.com/revolyssup)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/544

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/ea439582-8c63-498d-9066-dc563ce1172e

#### User Interface Overhaul: State Management w/Apollo/GraphQL

- Description: Overcome current architectural issues of:
1) No Caching - In Meshery UI, List of adapters is a state that is being used in multiple components i.e Settings , Dashboard , Connection Wizard and Performance. Refetching the data on every mount of each of these components degrades the user experience. The same goes for all the other data that are being used across multiple components.
2) Multiple Sources of Truth - There is no single source of truth in Meshery UI as all react components manage their own state. Since Meshery UI has to deal with data that frequently changes, like Control Plane Data, Meshsync data etc. it will become hard to keep them in sync if they all manage their own copy of them  in their local state.

- Recommended Skills: reactjs, apollo, graphql, redux
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Nithish Karthik](https://github.com/sudo-NithishKarthik)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/5094

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/7592d7db-5517-445b-95e8-14144c49e9b1


### Service Mesh Performance

#### Adaptive Load Controller

- Description: The adaptive load controller is to execute optimization routines recursivley to determine the maximum load a system can sustain. The maximum load is usually defined by the maximum requests per second (rps) the system can handle. The metrics (CPU usage, latency etc) collected from the system under test are the constraints we provide to judge whether a system under test (SUT) is sustaining the load.

A use-case that fits very well is be the ability to use it to run performance tests on a schedule and track the maximum load a system can handle over time. This could give insights to performance improvements or degradations.

- Recommended Skills: golang, grpc, docker, kubernetes
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Xin Huang](https://github.com/gyohuangxin)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/350

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/9959277e-eefc-4c88-83b6-e8c4b011d557

#### Convergence of Network and Graph topologies

- Description: Use Neo4j's ability to create graph projections, which copy a subgraph to RAM so that algorithms can be efficiently run. This opens the door to leveraging algorithms in the areas of Centrality, Community Detection, Pathfinding, Topological Link Prediction, etc. Bringing to bear advances made in Machine Learning / AI / recommendation systems, fraud detection could really help to derive meaning and comprehension for future tools. Another example is how ML + graph approaches are used to find and determine the optimal molecular structure of atoms such that desired physical properties are targeted. This approach could be applied to the problem of workload sizing and estimation for service mesh operators and would-be adopters.
- Recommended Skills: cuelang, golang, neo4j
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Nic Jackson](https://github.com/nicholasjackson)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/351

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/2c4510d6-7b73-4082-a3f4-209f61767263


### Thanos

#### Receive: Support for tenant-specific external labels

- Description: Tenants in Thanos Receivers currently get one external label which indicates their tenant ID. We would like to implement attaching arbitrary external labels to each Thanos Tenant. This functionality is useful for various different use cases, such as improving performance when querying data for tenants which share the same labels.
- Recommended Skills: Golang
- Mentor(s): [Filip Petkovski](https://github.com/fpetkovski), [Saswata Mukherjee](https://github.com/saswatamcode)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/5434

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/7a13b009-0365-4910-8fbf-9088294870fd

#### Load balancing of API communication in Thanos 

- Description: Thanos uses gRPC for the majority of network communication. It performs fanouts and sharding of different queries to multiple nodes in a distributed system. Unfortunately, due to the nature of the gRPC, a conventional TCP-based load balancer (e.g. K8s Service) is not enough to distribute requests equally to multiple replicas of the same stateless node. As a result, there is a need to figure out the pragmatic way for Thanos users to load balance requests to multiple backends either by gRPC client load balancing or by guides and integration with popular load balancing proxies like nginx, caddy or envoy.
- Recommended Skills: Golang, HTTP, gRPC
- Mentor(s): [Bartłomiej Plotka](https://github.com/bwplotka), [Aditi Ahuja](https://github.com/metonymic-smokey)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3016 + https://github.com/thanos-io/thanos/issues/1083

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/de2d206e-32cc-45da-bc5a-1fbc7bc1f5c8


### Vitess

#### Add complete parsing support for Spatial MySQL functions II

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of spatial MySQL functions are not parsed correctly and result in syntax errors. The task of the mentee would be to add parsing support for such functions and features which can be found at https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): [Manan Gupta](https://github.com/GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/845ccf34-d7aa-45cf-abc2-1b3064e96af1

#### Improve evaluation engine

- Description: Improve the compatbility of Vitess' evaluation engine against MySQL by adding support for more built-in SQL functions.
- Detailed description: The evaluation engine in Vitess is one of the most critical parts of our query serving infrastructure. This engine is capable of evaluating arbitrary SQL expressions directly inside Vitess' process, without reaching out to a live MySQL instance, and this allows us to plan and execute complex user queries (e.g. queries that contain WHERE and similar filter clauses) between Vitess shards much more efficiently. If you're interested in this GSoC project, your task for the summer will involve continuing the work on this evaluation engine by implementing support for as many built-in SQL functions as possible, using the behavior of MySQL as a reference.
- Expected outcomes: We expect the Evaluation Engine in Vitess to be close to 100% compatible with MySQL after all the leftover SQL built-ins have been implemented.
- Recommended Skills: Golang, MySQL
- Mentor(s): Vicent Marti (@vmg)
- Expected size of the project: 350h
- Difficulty rating: Medium
- Upstream Issue (URL): https://github.com/vitessio/vitess/issues/9647

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/29ec853c-3ab9-4457-ac91-d273fa073d49


### Volcano

#### Pick out reasonable victim pods for rescheduling plugin

- Description: Currently, rescheduling is a little rough to evict victim pods without difference. It should distinguish pods with more consideration such as pod priority, namespace and so on. Your task is to take a full consideration about all the scenarios, provide a design documentation, implement your idea and give a full test.
- Recommended Skills: golang, Volcano
- Mentor(s): [Thor-wl](https://github.com/Thor-wl)
- Issue: <https://github.com/volcano-sh/volcano/issues/2425>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/9f0d56c0-9781-4912-988f-86443b0dd161

#### Implement pod filter chain for rescheduling

- Description: Currently, Volcano will regard all pods as potential victims in rescheduling, which is not so reasonable in some scenarios. Your task is to implement a pod filter chain to support custom configurations.
- Recommended Skills: golang, Volcano
- Mentor(s): [Thor-wl](https://github.com/Thor-wl)
- Issue: <https://github.com/volcano-sh/volcano/issues/2428>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/4dc62372-c04f-432f-847c-2cddd2cf786a

#### Avoid hot node in dynamic scheduling based on real workload

- Description: In v1.6.0, Volcano has supported dynamic scheduling based on real workload. However, the scheduler cannot be aware of hot nodes which may receive too many bound pods. Your task is to design an algorithm to avoid hot nodes and balance node pressure.
- Recommended Skills: golang, Volcano
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2426>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/2ceeee35-a85d-4768-9f22-d22838e27cd5

#### Integrate Volcano with Ray

- Description: Volcano has supported a lot of mainstream computing platforms such as Spark and TensorFlow. As [Ray](https://github.com/ray-project/ray) is a new and popular computing platform, Volcano should integrate with it.
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2429>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/c6dff087-9b4d-4ff5-865d-abd876974534

#### Support hot update daemon log level

- Description: Users have no ways to update log level of Volcano components now, which is difficult to track bugs especially in the production environment. Your task is to achieve it.
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2430>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/02972292-469d-431a-96be-149a04ea2746


### WasmEdge

#### Support serialize and deserialize in WasmEdge

- Description: WasmEdge can load the WASM binary and instantiate into WASM module instances for execution. In an use case, we need to serialize the loaded WASM data structure back into the encoded WASM binary, or deserialize the serialized one into the WASM data structure in WasmEdge. With the serializing mechanism, WasmEdge can control the WASM binary wisely such as caching or snapshotting.

- Recommended Skills: C++, WebAssembly
- Mentor(s): [Hung-Ying Tai](https://github.com/hydai) (hydai[at]secondstate.io), [Yi-Ying He](https://github.com/q82419) (yiying[at]secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1741>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/da1162c6-2aaf-496f-9f23-a96a3e52c277

#### Porting OpenVINO on multiple platforms for the WASI-NN proposal in WasmEdge

- Description: The [OpenVINO](https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/download.html) official release supports various platforms. WasmEdge supports the WASI-NN proposal with OpenVINO backend now, but only in Ubuntu 20.04. In this project, we want to porting and integrating the OpenVINO installation for the multiple platforms such as MacOS, Windows, or manylinux with the WasmEdge WASI-NN plugin.

- Recommended Skills: C++, WebAssembly
- Mentor(s): [Hung-Ying Tai](https://github.com/hydai) (hydai[at]secondstate.io), [Yi-Ying He](https://github.com/q82419) (yiying[at]secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1742>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/d01efa41-87a7-4f34-adfe-63c7bab7c1ca

#### Node API support for WasmEdge QuickJS

- Description: The [WasmEdge QuickJS runtime](https://wasmedge.org/book/en/dev/js.html) is a secure, fast, and lightweight JavaScript runtime for cloud-native applications. Compared with more established JavaScript runtimes like Nodejs and Deno, the WasmEdge QuickJS runtime provides runtime isolation and security at a very low overhead. In order for WasmEdge QuickJS to be more widely adopted, it needs to support [nodejs](https://wasmedge.org/book/en/dev/js/nodejs.html) applications. WasmEdge QuickJS already supports [NPM and CJS modules](https://wasmedge.org/book/en/dev/js/npm.html).

- Recommended Skills: Javascript, Rust
- Mentor(s): [Michael Yuan](https://github.com/juntao) (michael@secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1745>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/4853174a-267d-4cd4-a62d-6e68d0c338b1

#### OpenCV SDKs for Wasm in WasmEdge

- Description: WasmEdge is a leading WebAssembly runtime for AI inference. It supports AI frameworks such as Tensorflow, OpenVINO and PyTorch. A compelling use case is computer vision applications on the edge. Computer vision applications need to pre-process images and videos into tensor formats before applying the AI model. They then often need to overlay the tensor results onto the original image. In our existing demos, we use the Rust [image crate](https://crates.io/crates/image) to process images. However, the crate only has limited features and is inadequate for many computer vision applications. In the Python-based computer vision applications, the image pre-processing is often done with the Python wrapper for OpenCV library. The OpenCV library itself is written in C and can be compiled into WebAssembly. We would like to create an OpenCV SDK that allows WebAssembly applications to call OpenCV functions.

- Recommended Skills: C++, WebAssembly, Rust
- Mentor(s): [Michael Yuan](https://github.com/juntao) (michael@secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1747>

- **LFX URL**: https://mentorship.lfx.linuxfoundation.org/project/17fc622c-5674-4381-b597-2f49409fda01

