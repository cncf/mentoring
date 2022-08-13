# Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

### Template

```
#### CNCF Project Name
##### Title

- Description:
- Recommended Skills:
- Mentor(s): (please include email info, either here, or contact @nate-double-u on the CNCF slack)
- Upstream Issue (URL):
```


#### Kyverno

##### Policy Exceptions

- Description: Enable flexible management of policy exceptions without requiring changes to the policy definitions.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/2627 

##### Enable resource clean-up

- Description: Support a new type of Kyverno rule to delete resources based on various criterias, such as the type, age, metadata and status.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3483
  - https://github.com/kyverno/KDP/pull/25 

##### Implement new custom JMESPath filters

- Description: Kyverno uses JMESPath to perform filtering and selection of JSON content in a flexible and advanced way. Many custom filters have been implemented specifically for Kyverno to date. Implement two more filters which fill needed gaps in Kyverno today: a random string generator and an index locator.
- Recommended Skills: Golang
- Mentor(s): Chip Zoller, Shuting Zhao
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3598 
  - https://github.com/kyverno/kyverno/issues/3981

##### Logging in JSON plus other enhancements

- Description: Add an ability allowing a user to tell Kyverno to log in JSON format rather than klog.
- Recommended Skills: Golang
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3411

##### More support for subresources

- Description: Kyverno lacks the ability to operate on some important subresources like /scale and /status in areas such as validation and mutation.
- Recommended Skills: Golang
- Mentor(s): Shuting Zhao
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3118
  - https://github.com/kyverno/kyverno/issues/2843
  - https://github.com/kyverno/kyverno/issues/4313 


#### WasmEdge

##### Support serialize and deserialize in WasmEdge

- Description: WasmEdge can load the WASM binary and instantiate into WASM module instances for execution. In an use case, we need to serialize the loaded WASM data structure back into the encoded WASM binary, or deserialize the serialized one into the WASM data structure in WasmEdge. With the serializing mechanism, WasmEdge can control the WASM binary wisely such as caching or snapshotting.

- Recommended Skills: C++, WebAssembly
- Mentor(s): [Hung-Ying Tai](https://github.com/hydai) (hydai[at]secondstate.io), [Yi-Ying He](https://github.com/q82419) (yiying[at]secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1741>

##### Porting OpenVINO on multiple platforms for the WASI-NN proposal in WasmEdge

- Description: The [OpenVINO](https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/download.html) official release supports various platforms. WasmEdge supports the WASI-NN proposal with OpenVINO backend now, but only in Ubuntu 20.04. In this project, we want to porting and integrating the OpenVINO installation for the multiple platforms such as MacOS, Windows, or manylinux with the WasmEdge WASI-NN plugin.

- Recommended Skills: C++, WebAssembly
- Mentor(s): [Hung-Ying Tai](https://github.com/hydai) (hydai[at]secondstate.io), [Yi-Ying He](https://github.com/q82419) (yiying[at]secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1742>

##### Node API support for WasmEdge QuickJS

- Description: The [WasmEdge QuickJS runtime](https://wasmedge.org/book/en/dev/js.html) is a secure, fast, and lightweight JavaScript runtime for cloud-native applications. Compared with more established JavaScript runtimes like Nodejs and Deno, the WasmEdge QuickJS runtime provides runtime isolation and security at a very low overhead. In order for WasmEdge QuickJS to be more widely adopted, it needs to support [nodejs](https://wasmedge.org/book/en/dev/js/nodejs.html) applications. WasmEdge QuickJS already supports [NPM and CJS modules](https://wasmedge.org/book/en/dev/js/npm.html).

- Recommended Skills: Javascript, Rust
- Mentor(s): [Michael Yuan](https://github.com/juntao) (michael@secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1745>

##### OpenCV SDKs for Wasm in WasmEdge

- Description: WasmEdge is a leading WebAssembly runtime for AI inference. It supports AI frameworks such as Tensorflow, OpenVINO and PyTorch. A compelling use case is computer vision applications on the edge. Computer vision applications need to pre-process images and videos into tensor formats before applying the AI model. They then often need to overlay the tensor results onto the original image. In our existing demos, we use the Rust [image crate](https://crates.io/crates/image) to process images. However, the crate only has limited features and is inadequate for many computer vision applications. In the Python-based computer vision applications, the image pre-processing is often done with the Python wrapper for OpenCV library. The OpenCV library itself is written in C and can be compiled into WebAssembly. We would like to create an OpenCV SDK that allows WebAssembly applications to call OpenCV functions.

- Recommended Skills: C++, WebAssembly, Rust
- Mentor(s): [Michael Yuan](https://github.com/juntao) (michael@secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1747>


#### CNCF Tag Contributor Strategy - ii

##### Mentoring Workspaces - GITHUBUSER.PROJECT.cncf.io (w/ VSCode)

- Description: pair.sharing.io is a mentoring / pair environment used by ii.nz that brings up clusters to co-learn and co-author via tmate+emacs and a live cluster with many features useful to cloud native development. However, while many folks find the ideas useful, it would be good to reach a wider audience by bringing up workspaces w/ VSCode as an alternative to emacs. The request is for a PoC deploying coder.com to CNCF Infrastructure (likely Packet) and bringing over some of the methods of collaboration learned by ii on pair to a wider audience.
  "If you want to go fast, go by yourself. If you want to go far, go together." African Proverb – Martha Goedert
- Recommended Skills: shell, terminals, VSCode, k8s, System Administration
- Mentor(s): Hippie Hacker (@hh), Caleb Woodbine (@BobyMCBobs)
- Issue: <https://github.com/sharingio/pair/issues/173>

#### Karmada

##### Enable configurable resource interpreter

- Description: Now Resource Interpreter framework enabled both built-in and customized interpreter, we are going to provide a way for people customize the interpreter by applying a configuration.
- Recommended Skills: golang, k8s, lua
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): <https://github.com/karmada-io/karmada/issues/2371>


#### Volcano

##### Pick out reasonable victim pods for rescheduling plugin

- Description: Currently, rescheduling is a little rough to evict victim pods without difference. It should distinguish pods
with more consideration such as pod priority, namespace and so on. Your task is to take a full consideration about all the scenarios,
provide a design documentation, implement your idea and give a full test.
- Recommended Skills: golang, Volcano
- Mentor(s): [Thor-wl](https://github.com/Thor-wl)
- Issue: <https://github.com/volcano-sh/volcano/issues/2425>

##### Implement pod filter chain for rescheduling

- Description: Currently, Volcano will regard all pods as potential victims in rescheduling, which is not so reasonable in some
scenarios. Your task is to implement a pod filter chain to support custom configurations.
- Recommended Skills: golang, Volcano
- Mentor(s): [Thor-wl](https://github.com/Thor-wl)
- Issue: <https://github.com/volcano-sh/volcano/issues/2428>

##### Avoid hot node in dynamic scheduling based on real workload

- Description: In v1.6.0, Volcano has supported dynamic scheduling based on real workload. However, the scheduler cannot be aware of
hot nodes which may receive too many bound pods. Your task is to design an algorithm to avoid hot nodes and balance node pressure.
- Recommended Skills: golang, Volcano
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2426>

##### Integrate Volcano with Ray

- Description: Volcano has supported a lot of mainstream computing platforms such as Spark and TensorFlow. As [Ray](https://github.com/ray-project/ray) is
a new and popular computing platform, Volcano should integrate with it.
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2429>

##### Support hot update daemon log level

- Description: Users have no ways to update log level of Volcano components now, which is difficult to track bugs especially in the production environment. Your
task is to achieve it.
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2430>


#### Thanos

##### Receive: Support for tenant-specific external labels
- Description: Tenants in Thanos Receivers currently get one external label which indicates their tenant ID. We would like to implement attaching arbitrary external labels to each Thanos Tenant. This functionality is useful for various different use cases, such as improving performance when querying data for tenants which share the same labels.
- Recommended Skills: Golang
- Mentor(s): [Filip Petkovski](https://github.com/fpetkovski), [Saswata Mukherjee](https://github.com/saswatamcode)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/5434

##### Load balancing of API communication in Thanos 
- Description: Thanos uses gRPC for the majority of network communication. It performs fanouts and sharding of different queries to multiple nodes in a distributed system. Unfortunately, due to the nature of the gRPC, a conventional TCP-based load balancer (e.g. K8s Service) is not enough to distribute requests equally to multiple replicas of the same stateless node. As a result, there is a need to figure out the pragmatic way for Thanos users to load balance requests to multiple backends either by gRPC client load balancing or by guides and integration with popular load balancing proxies like nginx, caddy or envoy.
- Recommended Skills: Golang, HTTP, gRPC
- Mentor(s): [Bartłomiej Plotka](https://github.com/bwplotka), [Aditi Ahuja](https://github.com/metonymic-smokey)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3016 + https://github.com/thanos-io/thanos/issues/1083

#### CNCF TAG Network and Observability

##### Kubernetes ontology and subgraph module design

Description: Network topologies and graph databases go hand-in-hand. The OpenAPI specifications for Kubernetes provides taxonomy, but augmenting a graph data model with formalized ontologies enables any number of capabilities, one of the more straightforward is the inferencing requisite for natural language processing, and consequently, a human-centric query / response interaction becomes becomes possible. More importantly, more advanced systems can be built when a graph data model of connected systems is upgraded to be a knowledge semantic graph. Deliverables (among other items):

- a Kubernetes ontology using OWL as a popular (and mature) way of doing this.
- a cuelang-based component generator

Recommended Skills: cuelang, golang, neo4j
Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Matt Young](https://github.com/halcyondude)
Issue: https://github.com/cncf/tag-network/issues/21

#### Service Mesh Performance

##### Adaptive Load Controller

- Description: The adaptive load controller is to execute optimization routines recursivley to determine the maximum load a system can sustain. The maximum load is usually defined by the maximum requests per second (rps) the system can handle. The metrics (CPU usage, latency etc) collected from the system under test are the constraints we provide to judge whether a system under test (SUT) is sustaining the load.

A use-case that fits very well is be the ability to use it to run performance tests on a schedule and track the maximum load a system can handle over time. This could give insights to performance improvements or degradations.

- Recommended Skills: golang, grpc, docker, kubernetes
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Xin Huang](https://github.com/gyohuangxin)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/350

##### Convergence of Network and Graph topologies

- Description: Use Neo4j's ability to create graph projections, which copy a subgraph to RAM so that algorithms can be efficiently run. This opens the door to leveraging algorithms in the areas of Centrality, Community Detection, Pathfinding, Topological Link Prediction, etc. Bringing to bear advances made in Machine Learning / AI / recommendation systems, fraud detection could really help to derive meaning and comprehension for future tools. Another example is how ML + graph approaches are used to find and determine the optimal molecular structure of atoms such that desired physical properties are targeted. This approach could be applied to the problem of workload sizing and estimation for service mesh operators and would-be adopters.
- Recommended Skills: cuelang, golang, neo4j
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Nic Jackson](https://github.com/nicholasjackson)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/351

#### Meshery

##### Integration of Open Policy Agent (OPA) and Meshery

- Description: As a golang library integrate OPA into Meshery Server, enabling users to define policies to dictate the manner in which their cloud native infrastructure is to both run and be configured. Design an extensible policy framework in which rules may be augmented and dynamically supplied at runtime. 
- Recommended Skills: golang, rego, reactjs
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Ashish Tiwari](https://github.com/revolyssup)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/544

##### User Interface Overhaul: State Management w/Apollo/GraphQL

- Description: Overcome current architectural issues of:
1) No Caching - In Meshery UI, List of adapters is a state that is being used in multiple components i.e Settings , Dashboard , Connection Wizard and Performance. Refetching the data on every mount of each of these components degrades the user experience. The same goes for all the other data that are being used across multiple components.
2) Multiple Sources of Truth - There is no single source of truth in Meshery UI as all react components manage their own state. Since Meshery UI has to deal with data that frequently changes, like Control Plane Data, Meshsync data etc. it will become hard to keep them in sync if they all manage their own copy of them  in their local state.
3) Maintainability of Code - Since we don't have any restrictions on how the code should be structured in Meshery UI, we can't expect every contributor to write efficient and bug free (relative term) code, which also makes it difficult to maintain.

- Recommended Skills: reactjs, apollo, graphql, redux
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Nithish Karthik](https://github.com/sudo-NithishKarthik)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/5094

### Devfile

#### Add Compose file support in the spec API

- Description: Devfiles are YAML files that define remote development environments. The main part of a Devfile is the `components` section and that's where the containers required to code, build and test an application are specified. The Devfile can either include those containers defintions or reference external files such as Dockerfiles or Kubernetes manifests. [The Compose file](https://github.com/compose-spec/compose-spec/blob/master/spec.md) is a popular format in open source development projects to define runtime environments for testing the application but those cannot be referenced by a Devfile yet. The goal is to continue the work that has been started a couple of months ago to allow referencing a Compose file from a Devfile. The expected outcome is to create a PoC written in go that parses a Compose file such as [this one](https://github.com/microservices-demo/microservices-demo/blob/master/deploy/docker-compose/docker-compose.yml) using [kompose](https://github.com/kubernetes/kompose) (as a library, not as an executable) and that creates the objects corresponding to the Compose file services in a Kubernetes cluster.
- Recommended Skills: Golang, Compose, Kubernetes
- Mentor(s): Mario Loriedo (@l0rd)
- Upstream Issue (URL): https://github.com/devfile/api/issues/501
