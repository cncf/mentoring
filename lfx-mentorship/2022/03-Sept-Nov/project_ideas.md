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

### Sample

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): [@Krasi Georgiev](https://github.com/krasi-georgiev)
- Issue: <https://github.com/prometheus/prometheus/issues/3416>


#### Vitess

##### Add complete parsing support for Spatial MySQL functions

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of spatial MySQL functions are not parsed correctly and result in syntax errors. The task of the mentee would be to add parsing support for such functions and features which can be found at https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): [Manan Gupta](https://github.com/GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>

#### Improve evaluation engine

- Description: Improve the compatbility of Vitess' evaluation engine against MySQL by adding support for more built-in SQL functions.
- Detailed description: The evaluation engine in Vitess is one of the most critical parts of our query serving infrastructure. This engine is capable of evaluating arbitrary SQL expressions directly inside Vitess' process, without reaching out to a live MySQL instance, and this allows us to plan and execute complex user queries (e.g. queries that contain WHERE and similar filter clauses) between Vitess shards much more efficiently. If you're interested in this GSoC project, your task for the summer will involve continuing the work on this evaluation engine by implementing support for as many built-in SQL functions as possible, using the behavior of MySQL as a reference.
- Expected outcomes: We expect the Evaluation Engine in Vitess to be close to 100% compatible with MySQL after all the leftover SQL built-ins have been implemented.
- Recommended Skills: Golang, MySQL
- Mentor(s): Vicent Marti (@vmg)
- Expected size of the project: 350h
- Difficulty rating: Medium
- Upstream Issue (URL): https://github.com/vitessio/vitess/issues/9647


#### KubeArmor

##### Add BTF and BPF CO-RE Support to KubeArmor

- Description: Currently KubeArmor depends on kernel headers to use various kernel structures. This creates difficulty in having portability.
Linux Kernel versions with BTF (BPF Type Format) information available allows us to write portable BPF CO-RE (or Compile Once - Run Everywhere) applications that can run on multiple kernel versions and configurations without any modification or runtime compilation on the target machine.  
But there is a restriction that CO-RE requires to have the BTF information of the target kernel, which is provided by the kernel itself when it's compiled with CONFIG_DEBUG_INFO_BTF=y. This option was introduced in Linux 5.2.  
For kernels < 5.2 we can use BTFGen to ship BTF information with KubeArmor code or use pahole to generate BTF information from the vmlinux image (with DWARF information) at runtime.  
The project aims to make KubeArmor truly portable across all kernel versions by reducing host environment dependencies.

- Recommended Skills: Kernel, go, C 
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/789>

##### Use non-privileged containers for KubeArmor daemonset

- Description: KubeArmor currently uses privileged mode for its daemonset containers. But it is not a good practice. Privileged containers are usually frowned upon. In many cases, specific admission controllers are deployed to not allow containers to be installed in privileged mode.
It is best to not use privileged mode but to define specific capabilities for KubeArmor.  
The aim of the project is to analyse and reduce the system privileges required by KubeArmor, thereby reducing the potential attack surface.

- Recommended Skills: go, Kernel, k8s
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/781>


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

### Devfile

#### Add Compose file support in the spec API

- Description: Devfiles are YAML files that define remote development environments. The main part of a Devfile is the `components` section and that's where the containers required to code, build and test an application are specified. The Devfile can either include those containers defintions or reference external files such as Dockerfiles or Kubernetes manifests. [The Compose file](https://github.com/compose-spec/compose-spec/blob/master/spec.md) is a popular format in open source development projects to define runtime environments for testing the application but those cannot be referenced by a Devfile yet. The goal is to continue the work that has been started a couple of months ago to allow referencing a Compose file from a Devfile. The expected outcome is to create a PoC written in go that parses a Compose file such as [this one](https://github.com/microservices-demo/microservices-demo/blob/master/deploy/docker-compose/docker-compose.yml) using [kompose](https://github.com/kubernetes/kompose) (as a library, not as an executable) and that creates the objects corresponding to the Compose file services in a Kubernetes cluster.
- Recommended Skills: Golang, Compose, Kubernetes
- Mentor(s): Mario Loriedo (@l0rd)
- Upstream Issue (URL): https://github.com/devfile/api/issues/501
