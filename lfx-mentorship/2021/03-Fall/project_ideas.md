## Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

### Template

```
#### CNCF Project Name
##### Title

- Description:
- Recommended Skills:
- Mentor(s):
- Upstream Issue (URL):
```

### Sample

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): [@Krasi Georgiev](https://github.com/krasi-georgiev)
- Issue: <https://github.com/prometheus/prometheus/issues/3416>


## Participating Projects

#### Kubernetes

##### Improvements to Cluster API provider for GCP (CAPG)

- Description: The Cluster API is a Kubernetes project to bring declarative, Kubernetes-style APIs to cluster creation, configuration, and management. CAPG provides this Kubernetes-native declarative infrastructure for GCP. The project would start with some help wanted issues around quick start and documentation, this will help with understanding mentee with CAPI/CAPG concepts and current implementation. Then we will move on to some long pending improvements documented in the issues link below.
- Recommended Skills: Golang, unit and feature testing.
- Mentor(s): Davanum Srinivas (@dims), Carlos Tadeu Panato Junior (@cpanato)
- Issue: https://github.com/kubernetes-sigs/cluster-api-provider-gcp/issues

##### Improve SIG-Node testing using Kubetest2

- Description: Kubernetes currently uses Kubetest as the interface for launching and running e2e tests. There is a new [kubetest2](https://github.com/kubernetes-sigs/kubetest2) that is in the process of being developed and will need to be rolled out to various CI harnesses and jobs. As part of this project we will focus on SIG-Node related CI jobs. Here's how we currently test SIG-Node related code - [e2e-node-tests.md](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-node/e2e-node-tests.md). There will be a lot of interesting problems to solve and this work is critical to how we test kubernetes not just in GCP, but also across all the other cloud providers going forward.
- Recommended Skills: Golang, python, bash, unit and feature testing.
- Mentor(s): Davanum Srinivas (@dims), Amit Watve (@amwat)
- Enhancement : https://github.com/kubernetes/enhancements/tree/master/keps/sig-testing/2464-kubetest2-ci-migration

#### Kubernetes Policy Working Group (WG)

The Kubernetes policy working group focuses on developing tools and solutions that make Kubernetes secure and easiser to use.

##### KubeArmor support for Policy Report CRD

- Description:
  This project will periodically generate or update a [Policy Report Custom Resource (CR)](https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/master/policy-report/README.md) based on events collected from KubeArmor. This could be implemented as a feature in KubeArmor or developed as an external adapter. The candidate will learn about Kubernetes controllers and various security topics.
- Recommended Skills: Linux, Golang, CLI, Kubernetes
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/59

#### Vitess

##### Add complete parsing support for MySQL constructs

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of MySQL constructs are not parsed and result in syntax errors. For example, we do not have complete support to parse [partition constructs](https://dev.mysql.com/doc/refman/5.7/en/partitioning-overview.html). Parsing for a lot of the newer features in MySQL 8.0 is also missing. The task of the mentee would be to add parsing support for such constructs. 
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): Manan Gupta (@GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>

##### Add support for comparing strings using collations and character-sets

- Description: Vitess does not yet have support for collations and character-sets. So, to compare varchar strings Vitess needs to rely on [WEIGHT_STRING](https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_weight-string) function for now. As per MySQL documentation, WEIGHT_STRING is a debugging function, meant only for internal use. Having the ability to compare strings using collation and character set support we will be able to better implement ORDER BY, GROUP BY, JOIN. It will also allow us to leverage more advanced join techniques than what we currently implement.
- Recommended Skills: go, SQL
- Mentor(s): Vicent Marti (@vmg)
- Issue: <https://github.com/vitessio/vitess/issues/8606>

#### Kyverno

##### Scaled testing for Kyverno

- Description:
  This Project is to perform scaled testing for Kyverno. The candidate has to propose the test plan for performance testing and optimize memory usage of Kyverno for different loads of Kubernetes clusters.
- Recommended Skills: Golang, Test
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/2248

##### Extend Kyverno test command to cover generate policies & Improve test coverage

- Description:
  This Project is to extend the Kyverno CLI to cover generate policies and improve tests coverage for Kyverno. Based on the test results, the candidate has to add more unit/E2E tests.
- Recommended Skills: Golang, Test
- Mentor(s): Shuting Zhao (@realshuting), Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/2249

#### Chaos Mesh

##### Monitoring Metrics about Chaos Mesh

- Description: Observability is very important for each application, we want to monitor more things of Chaos Mesh components, enrich the metrics for both logic patterns and performance data. We want to let users could watch the status of Chaos Mesh on grafana dashboard, and developers could using time-series metrics for debugging and profiling.
- Recommended Skills: golang, prometheus, grafana
- Mentor(s): [@ZhiqiangZhou](https://github.com/strrl)
- Issue: <https://github.com/chaos-mesh/chaos-mesh/issues/2198>

#### KubeVela

##### Integration with developing time to provide consistent experience

- Description: Users can use KubeVela to do application delivery and management. In this project, we hope to integrate KubeVela with developing time. So developers can have a consitent experience between local development and production deploy. There're multiple developing tools such as Tilt or Nocalhost, both of them can integrate with KubeVela by supporting KubeVela Application YAML.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Jianbo Sun (@wonderflow)
- Upstream Issue (URL): https://github.com/oam-dev/kubevela/issues/795

##### Building An Machine Learning Platform on KubeVela

- Description: Data scientists need a ML platform to develop, test, and deploy ML models easily. In this project, we will design and build a self-service ML platform on top of KubeVela. We will use KubeVela to provide high level workflow and APIs to glue and simplify deployment pipelines. We will also use Cloud resources to support deployment and operations tasks like domain routing, monitoring, health checking, etc.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Hongchao Deng (@hongchaodeng)
- Upstream Issue (URL): https://github.com/oam-dev/kubevela/issues/2061

##### Build Gitops continuous deployment tools on kubevela

- Description: Kubevela is like Lego, you can build any platform you need based on kubevela. And GitOps is very popular and user friendly. In this project, we will build Gitops continuous deployment tools on kubevela.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Jian Li (@leejanee)
- Upstream Issue (URL): https://github.com/oam-dev/kubevela/issues/2062

#### WasmEdge

##### Support WASI-Crypto proposal

- Description: After WasmEdge provides an experimental API, WASI Socket, for supporting Berkeley Sockets API in Wasm. WasmEdge enabled a new way to open a new socket, listen to an existed socket, and send and receive data. Moreover, it will be nice if we can do more things in the related features such as SSL support. To achieve this feature, one possible way is to compile the OpenSSL library to Wasm and link it as a library. However, the performance may be not good, because all the computation jobs are done at the wasm level. Here is an alternative way, instead of the previous one, we can wrap the OpenSSL library to Wasm external functions. For example, binding `ssl_connect` to `(import "openssl" "ssl_connect" ... )`. Unfortunately, this is not an easy way to do it. To simply the workload, we decide to implement the WASI-crypto proposal first, and then use this proposal to make the above things happen.
- Recommended Skills: C++, Rust
- Mentor(s): Hung-Ying Tai (@hydai), Shen-Ta Hsieh (@ibmibmibm)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/345

##### Support Wasm-Signature proposal

- Description: The wasm-Signature proposal is specifically about embedded digital signatures in WebAssembly modules, not about package/OCI signatures. When distributing WebAssembly modules, it will be nice if we can have a way to verify. To achieve this target, we choose a Wasm-Signature proposal as our implementation standard. With this proposal, WasmEdge can provide `sign` and `verify` features.
- Recommended Skills: C++, Rust
- Mentor(s): Hung-Ying Tai (@hydai), Shen-Ta Hsieh (@ibmibmibm)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/344

##### Support WASI-NN proposal

- Description: Machine Learning is a big topic nowadays. WasmEdge already provides [a set of TensorFlow host functions](https://github.com/second-state/wasmedge_tensorflow_interface) to enable the ML inference in WebAssembly. However, these TensorFlow host functions are defined by us and they are just a Wasm function binding from the [TensorFlow C API](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/c/c_api.h). Here comes a standard, the [WASI-NN proposal](https://github.com/WebAssembly/wasi-nn) provides a new way to perform neural network inferencing by using a runtime-provided implementation that can leverage host native optimizations, CPU multi-threading, or powerful hardware devices such as GPUs or TPUs.
- Recommended Skills: C++, Rust
- Mentor(s): Hung-Ying Tai (@hydai), Yi-Ying He (@q82419)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/343

##### Support Wasm-C-API proposal

- Description: The wasm-c-api proposal provides the C and C++ API for WASM runtimes. Even though WasmEdge already provided the C API, it's proper to implement the wasm-c-API proposal for the general C/C++ API. In the current status, we've already implemented the non-runtime data structures on the branch. Then, we need to finish the runtime implementation.
- Recommended Skills: C++
- Mentor(s): Hung-Ying Tai (@hydai), Yi-Ying He (@q82419)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/306

