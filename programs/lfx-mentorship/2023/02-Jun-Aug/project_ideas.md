## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s): Mentor Name (@mentor_github, mentor@email.addy)
- Upstream Issue:

```

---

## Proposed Project ideas

* [Armada](#armada)
* [CoreDNS](#coredns)
* [Jaeger](#jaeger)
* [Knative](#knative)
* [Kyverno](#kyverno)
* [Tetragon](#tetragon)
* [WasmEdge](#wasmedge)
* [Konveyor](#konveyor)

### Armada

#### Build interfaces around Postgres for Armada

- Description: Open source projects should not be hard coded to a particular Database. Armada currently only allows users to use Postgres. This project is to build interfaces around our connections to Postgres so we can allow other databases.
- Expected outcomes:
  - A interface is created that allows Armada to interact with any SQL database without exposing implementation details of postgres
Test coverage could increase
- Recommend Skills: Go, SQL
- Mentor(s):
  - Geoffrey Wilson, @suprjinx, geoff@gr-oss.com
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): armadaproject/armada#2121

### CoreDNS

#### Add DNS-over-QUIC (DoQ) and/or DNS-over-HTTP/3 (DoH3) support

- Description: DNS-over-QUIC (DoQ) and DNS-over-HTTP/3 (DoH3) are relatively new protocols for transmitting DNS queries with security and privacy. Additionally, DoQ and DoH3 also offers other benefits such as improved latency and better error detection. The goal of this proposal is to add DoQ and/or DoH3 support to CoreDNS.
- Expected Outcome: An implementation of DoQ or DoH3 for CoreDNS. A stretch goal of adding both DoQ and DoH3 is also within scope.
- Recommended Skills: Golang, DNS.
- Mentor(s): Yong Tang @yongtang (yong.tang.github@outlook.com); Chris O'Haver @chrisohaver (cohaver@infoblox.com)
- Upstream Issue (URL): https://github.com/coredns/coredns/issues/5583, https://github.com/coredns/coredns/issues/5539

### Jaeger

#### Upgrade Jaeger's internal telemetry to OpenTelemetry

- Description: historically, the Jaeger backend used the OpenTracing API, with Jaeger's own Go SDK `jaeger-client-go`, for instrumenting its own internals for distributed tracing. Since Jaeger's SDKs have been deprecated, we want to upgrade the Jaeger backend to use the OpenTelemetry tracing API and SDK directly.
- Expected Outcome:
  - Replace the use of OpenTracing API with OpenTelemetry
  - Remove `jaeger-client-go` and `jaeger-lib` as dependencies
  - Remove `opentracing-go` and `opentracing-contrib/*` as dependencies
  - Switch to standard instrumentation libraries where available (e.g. for HTTP, gRPC)
  - Rethink/rework `crossdock` integration tests to test end-to-end flow with OpenTelemetry data
  - Publish a blog post on medium.com/jaegertracing documenting the experience
- Recommended Skills: Go
- Mentor(s): Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/3381

#### Implement Critical Path analysis

- Description: Jaeger (https://jaegertracing.io) is a popular platform for distributed tracing. Critical path analysis is an important tool in the latency investigations. This project aims to add support for critical path analysis to Jaeger UI.
- Expected outcomes:
  - Implement critical path determination algorithm (maybe in the backend)
  - Enhance Trace Timeline view to overlay critical path on top of the trace.
  - Add relevant documentation to the Jaeger website
  - Author a blog post on Jaeger blog explaining the new feature
- Stretch goals:
  - Add critical path visualization to other trace views (graph, table, flamechart)
- Recommended Skills: Javascript, Typescript, Go
- Mentor(s): Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue (URL): https://github.com/jaegertracing/jaeger-ui/issues/1288

### Knative

#### Self-Balancing Knative Kafka Broker partitions

- Description: Creating a Knative Kafka Broker requires developers to specify the number of partitions the backing Kafka topic should have, however, this is not an easy decision to make and it requires planning based on the expected load the Knative Broker could receive. This project aims to remove this configuration setting by having an autoscaler that is responsible to add or remove partitions based on the effective load the Knative Kafka Broker receives while preserving [ordered and unordered delivery features](https://knative.dev/docs/eventing/brokers/broker-types/kafka-broker/#configuring-the-order-of-delivered-events) for Triggers.
- Expected outcome: A Knative Kafka Broker can be created without setting the number of partitions and the number of partitions for a topic backing the Knative Kafka Broker increases or decreases based on the observed load received.
- Recommended Skills: Kubernetes, Apache Kafka, Go, Java
- Mentor(s): Pierangelo Di Pilato @pierDipi (pierdipi AT redhat DOT com), Ali Ok @aliok (aliok AT redhat DOT com)
- Upstream Issue (URL): https://github.com/knative-sandbox/eventing-kafka-broker/issues/2917

#### Porting Knative Serving to Microshift

- Description: More and more workload is moving towards running on the edge. We saw experiments running Kubernetes on vehicles, fighter jets, 5G antenna and various far edge, near edge and fat edge environments. We would like to see what the challenges are when Knative is run in a resource limited environment. While there are multiple edge-friendly Kubernetes distributions, we would like to see [Microshift](https://github.com/openshift/microshift) used as the base platform. Knative consists of Serving and Eventing modules but focusing on Knative Serving as a first step should be more approachable. The project consists of 2 stages. First one is to run Knative on Microshift with minimal resources. This requires finding out problems here, solving them. A stretch goal is to find out what happens with architectures other than x86_64.
- Expected outcome:  Having Knative Serving with an ingress layer running on top of Microshift. Having a Hello-World Knative Service running on top. Finding issues blocking the edge setup, and possibly fixing them.
- Recommended Skills: Golang, Kubernetes, Knative, good understanding of networking, good understanding of CI/CD
- Mentor(s): Reto Lehmann @ReToCode (rlehmann AT redhat DOT com),  Stavros Kontopoulos @skonto (skontopo AT redhat DOT com)
- Upstream Issue (URL): https://github.com/knative/serving/issues/12718

### Kyverno

#### Kuttl tests for the Kyverno policy library

- Description: Kyverno has the largest policy library of any policy tool for Kubernetes. Ensuring that policies work effectively across releases of both Kyverno and Kubernetes is important for users. Additionally, these tests can be leveraged in the CI processes ensuring that changes to the Kyverno codebase do not cause regressions which impact areas relevant to these policies. In this mentorship, you will learn how the `kuttl` tool works and write test cases using `kuttl` to cover all policies in the official Kyverno policy library.
- Expected outcome: All policies have corresponding tests using the `kuttl` tool.
- Recommended Skills: Kubernetes, Kyverno
- Mentor(s): Chip Zoller @chipzoller (chipzoller AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/policies/issues/546

#### Sigstore Cosign Updates

- Description: Kyverno supports image signature and attestation verification using the Sigstore Cosign tooling. Re-implement the Kyverno Sigstore Cosign module to use OCI artifacts and references and remove dependencies to the Cosign CLI packages.
- Expected outcome: Kyverno can use OCI artifacts to verify container images that are in Cosign format.
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s):
  - Shuting Zhao @realshuting (shuting AT nirmata DOT com)
  - Vishal Choudhary @Vishal-Chdhry (contactvishaltech AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/7087

#### ValidatingAdmissionPolicy support, Phase 2

- Description: Kyverno is working towards support of ValidatingAdmissionPolicy (CEL admission). Extend this support for other items such as CLI, reporting, and auto-generating ValidatingAdmissionPolicies from Kyverno policies.
- Expected outcome: Extended support and integration with ValidatingAdmissionPolicies
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s):
  - Jim Bugwadia @jimbugwadia (jim AT nirmata DOT com)
  - Mariam Fahmy @MariamFahmy98 (mariamfahmy66 AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/7088

#### Cleanup Policies, Phase 2

- Description: Kyverno has a policy type called Cleanup Policies which allow removal of resources defined in a policy. In this second phase, we would like to extend this ability to cleanup resources based upon defining a label for even more fine-grained control.
- Expected outcome: Extend Cleanup Policies feature by allowing per-resource removal based upon label assignment
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s): Charles-Edouard Brétéché @eddycharly (charles.edouard AT nirmata DOT com)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/5748
  - https://github.com/kyverno/KDP/blob/main/proposals/cleanup.md#proposal

### Tetragon

#### Implement a Kubernetes operator to maintain pod IP to pod metadata mapping

- Description:

  Tetragon currently depends on Cilium to look up pod information by their IP
  addresses. The goal of this project is to remove this Cilium dependency by
  implementing a Kubernetes operator that provides this information. The idea
  is for this operator to maintain a new custom resource that provide a mapping
  from IPs to the small subset of pod information that Tetragon needs.

- Expected Outcome:
  - A Kubernetes operator that maintains IP to pod info mapping used by Tetragon.
  - The operator should be installable via Helm as a Kubernetes deployment.
  - Replace Cilium dependency in the code base with this new custom resource.
  - Some performance benchmarks in a high pod churn environment.
- Recommended Skills:
  - Go
  - Kubernetes
- Mentor(s):
  - Kornilios Kourtis (@kkourt, kornilios@isovalent.com)
  - Michi Mutsuzaki (@michi-covalent, michi@isovalent.com)
- Upstream Issue:
  - https://github.com/cilium/tetragon/issues/794

### WasmEdge

#### Serialization Completion

- Description: WasmEdge is a WebAssembly runtime in both interpreter and ahead-of-time mode. However, WasmEdge only supports the binary format for the input WebAssembly file. To help the text format WebAssembly loader feature in the future, the implementation of serializing a WebAssembly module is necessary. In this mentorship, we hope the mentee should complete the serialization functions already in [the `dev/serialize` branch](https://github.com/WasmEdge/WasmEdge/tree/dev/serialize) of the `WasmEdge` repo.
- Expected outcome: Complete the serialization functions of WebAssembly modules, such as the element segment and data segment encoding. Complete the WebAssembly instructions encoding. Generate the unit test data and pass the unit tests. >80% of code coverage for serialization.
- Recommended Skills: C/C++, WebAssembly
- Mentor(s): Yi-Ying He @q82419 (yiying at secondstate dot io), Hung-Ying Tai @hydai (hydai at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2262

#### `zlib` Plugin Support

- Description: The zlib is required for compiling and running many existing C / C++ / Rust apps in Wasm. Most noticeably, it is [needed in the Python port to Wasm](https://github.com/python/cpython/issues/93819). The VMWare Wasm Labs team is using a zlib port from [Singlestore](https://github.com/singlestore-labs/python-wasi) in [their Python Wasm runtime](https://wasmlabs.dev/articles/python-wasm32-wasi/). In WasmEdge, we could support the zlib host functions through our [plugin system](https://wasmedge.org/book/en/plugin.html). This way, any existing zlib apps can be compiled to Wasm and runs inside WasmEdge.
- Expected outcome: Create a new [WasmEdge plugin](https://wasmedge.org/book/en/plugin.html) that exports all public functions in `zlib`. Implement SDK (in C/Rust) that uses the C ABI to generate corresponding headers for the above plugin. Generate the unit tests and pass the unit tests. >80% of code coverage for verification.
- Recommended Skills: C/C++, Rust, WebAssembly
- Mentor(s): Yi-Ying He @q82419 (yiying at secondstate dot io), Hung-Ying Tai @hydai (hydai at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2244

#### Support Tensorflow and PyTorch in WasmEdge’s Python runtime

- Description: In this project, you will incorporate WasmEdge’s NN (Neural Network) extensions into the Python interpreter. WasmEdge provides C and Rust APIs for guest applications to access host functions in the underlying Tensorflow and PyTorch libraries. You will make those functions accessible from the CPython-based interpreter as Python wrappers. This way, Python applications can do lightweight AI inference on the WasmEdge container.
- Expected outcome:
  * Investigate and list all C-based host function APIs for Tensorflow and PyTorch inference in WasmEdge NN.
  * Create CPython wrappers for those host functions.
  * Create high-level Python wrapper functions that are ergonomic for Python developers.
  * Create CI and demo apps to validate the Python wrapper API.
  * Create detailed documentation and tutorials.
- Recommended Skills: Proficient in C programming including creating dynamic libraries; Proficient in Python and machine learning programming. Basic understanding of WebAssembly and WasmEdge.
- Mentor(s): Michael Yuan @juntao (michael at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2471

#### A stream log processing framework for WasmEdge

- Description: In this project, we aim to build a Rust-based log processing framework. Applications built on this framework will be compiled into WebAssembly and run in WasmEdge containers side by side with Linux containers and apps. The WasmEdge app collects logs from other containerized apps and then sends them to a streaming database or processing pipeline.
- Expected outcome:
  * Create a Rust framework with 3 traits similar to the [`Transformer`](https://github.com/second-state/MEGA/blob/main/mega_etl/src/lib.rs#L99) trait in the [MEGA framework](https://github.com/second-state/MEGA).
    * The `Collector` trait abstracts operations needed for a log collector.
    * The `Transformer` trait abstracts the transformation algorithms that can be applied to the logs.
    * The `Destination` trait abstracts operations needed to send transformed to a streaming data pipeline or database.
  * Implement at least two `Collector`s. One for MySQL database binlog and the other for a generic log file in a Linux container in the same Kubernetes pod.
  * Implement at least two `Transformer` algorithms supported by [FileBeat](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-overview.html).
  * Implement at least three `Destination`s. One for a Kafka queue, one for a Redis database, and the other for ElasticSearch.
  * Provide CI and demo test cases.
  * Provide documentation and tutorials.
- Recommended Skills: Proficient in the Rust programming language; Familiarity with MySQL, Kafka, ElasticSearch, and FileBeat; Familiarity with Kubernetes and related container management tools; Basic understanding of WebAssembly and WasmEdge
- Mentor(s): Michael Yuan @juntao (michael at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2470

### Konveyor

#### Add Integration test suite and components testing to Konveyor

- Description:
The Konveyor project helps modernize applications by providing open source tools to rehost, replatform, and refactor applications to Kubernetes and cloud-native technologies.We’re looking for help on building integration tests on application level as well as work on missing parts of Konveyor component tests.There is open testing work to better applications analysis, tasks coverage, more detailed Hub API tests and Hub integration with addons. All of those use the Hub API that is covered with basic tests already. Based on existing Hub API tests, it is expected to continue work to cover more Konveyor functionality with tests.
The development environment is based on golang and Kubernetes. A minikube instance will work well for local development on Linux or Mac systems.
- Expected Outcome:
  - Integration test suite and components testing added to existing Konveyor upstream automated test suite
- Recommended Skills:
  - Go
  - Basic software development skills (command line, git)
- Mentor(s):
  - Marek Aufart (@aufi, maufart@redhat.com)
  - David Zager (@djzager, dzager@redhat.com)
- Upstream Issue:
  - https://github.com/konveyor/tackle2-hub/issues/312


### Strimzi

#### Proof of Concept of an MQTT to Apache Kafka bridge for producing messages

- Description: A really common use case we have been seeing is about enabling an IoT scenario with MQTT based devices and using an Apache Kafka cluster as the events and storage platform running on Kubernetes via Strimzi. In order to do that, there is the need to map the MQTT protocol to the custom Apache Kafka one and bridge from one to the other. This project idea is about designing such a mapping and developing a pure [Netty](https://github.com/netty/netty/tree/4.1/codec-mqtt/src/main/java/io/netty/handler/codec/mqtt) based MQTT server component (not a full MQTT broker) able to accept MQTT client connections and handling the corresponding communication based on the [MQTT 3.1.1 specification](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html). Finally, developing the Kafka producer part to get messages from MQTT clients and sending them to an Apache Kafka cluster.
- Expected outcome: POC source code for an MQTT to Apache Kafka bridge
- Recommended Skills:
  - Java
  - Apache Kafka (not mandatory but to be learned)
  - MQTT protocol (not mandatory but to be learned)
- Mentor(s):
  - Paolo Patierno (@ppatierno, ppatiern@redhat.com)
  - Kyle Liberti (@kyguy, kliberti@redhat.com)
- Upstream Issue (URL): https://github.com/strimzi/strimzi-kafka-operator/issues/8030

---
