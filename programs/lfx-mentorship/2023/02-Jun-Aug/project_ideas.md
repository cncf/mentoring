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

#### Upgrade Jaeger's internal telemtery to OpenTelemetry

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
---
