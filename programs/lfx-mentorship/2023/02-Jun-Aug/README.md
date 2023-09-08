# Term 02 - 2023 June - August

Status: Complete

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |   
| project proposals due | Tue, May 9, 5:00 PM PDT |
| mentee applications open | Wed May 10 - Tue May 23, 5:00 PM PDT |
| application review/admission decisions | Wed May 24 - Mon May 29, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments |  Thur June 1 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | Wed July 12 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed Aug 23, 5:00 PM PST (Week 12) |
| Last day of term | Thur Aug 31 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2023/02-Jun-Aug/project_ideas.md, by Tuesday, May 9, 2023.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

Table of Contents

- [Armada](#armada)
  - [Build interfaces around Postgres for Armada](#build-interfaces-around-postgres-for-armada)
- [Cilium/Tetragon](#ciliumtetragon)
  - [Implement a Kubernetes operator to maintain pod IP to pod metadata mapping](#implement-a-kubernetes-operator-to-maintain-pod-ip-to-pod-metadata-mapping)
- [CNCF Landscape ](#cncf-landscape)
  - [UX / UI Improvements II](#ux--ui-improvements-ii)
- [CoreDNS](#coredns)
  - [Add DNS-over-QUIC (DoQ) and/or DNS-over-HTTP/3 (DoH3) support](#add-dns-over-quic-doq-andor-dns-over-http3-doh3-support)
- [Jaeger](#jaeger)
  - [Upgrade Jaeger's internal telemetry to OpenTelemetry](#upgrade-jaegers-internal-telemetry-to-opentelemetry)
  - [Implement Critical Path analysis](#implement-critical-path-analysis)
- [Knative](#knative)
  - [Self-Balancing Knative Kafka Broker partitions](#self-balancing-knative-kafka-broker-partitions)
  - [Porting Knative Serving to Microshift](#porting-knative-serving-to-microshift)
- [Konveyor](#konveyor)
  - [Add Integration test suite and components testing to Konveyor](#add-integration-test-suite-and-components-testing-to-konveyor)
- [KubeArmor](#kubearmor)
  - [Implement DNS visibility with KubeArmor](#implement-dns-visibility-with-kubearmor)
  - [Manage KubeArmor policies using OCI registry and use OCI hooks for container events](#manage-kubearmor-policies-using-oci-registry-and-use-oci-hooks-for-container-events)
- [Kubescape](#kubescape)
  - [Store Kubescape configuration scan results as CRs](#store-kubescape-configuration-scan-results-as-crs)
  - [Prometheus exporter for image vulnerabilities](#prometheus-exporter-for-image-vulnerabilities)
  - [Vulnerability-based Dockerfile generator](#vulnerability-based-dockerfile-generator)
- [KubeVela](#kubevela)
  - [Expand multiple database drivers for the API server](#expand-multiple-database-drivers-for-the-api-server)
  - [Auto-generate the TypeScript and Java languages API SDK](#auto-generate-the-typescript-and-java-languages-api-sdk)
- [Kyverno](#kyverno)
  - [Kuttl tests for the Kyverno policy library](#kuttl-tests-for-the-kyverno-policy-library)
  - [Sigstore Cosign Updates](#sigstore-cosign-updates)
  - [ValidatingAdmissionPolicy support, Phase 2](#validatingadmissionpolicy-support-phase-2)
  - [Cleanup Policies, Phase 2](#cleanup-policies-phase-2)
- [LitmusChaos](#litmuschaos)
  - [Migrate chaos workflow api from graphql to rest and improve chaos center code base](#migrate-chaos-workflow-api-from-graphql-to-rest-and-improve-chaos-center-code-base)
  - [Enhance/Upgrade chaos operator and chaos exporter module](#enhanceupgrade-chaos-operator-and-chaos-exporter-module)
- [Meshery](#meshery)
  - [Meshery UI Permissions Framework](#meshery-ui-permissions-framework)
  - [OPA policy evaluation in-browser using WebAssembly and Rego](#opa-policy-evaluation-in-browser-using-webassembly-and-rego)
  - [Adopt OCI as the packaging and distribution format for Meshery MeshModels](#adopt-oci-as-the-packaging-and-distribution-format-for-meshery-meshmodels)
  - [OCI compatible Kubernetes ontology](#oci-compatible-kubernetes-ontology)
- [Notary](#notary)
  - [Design and implement the new Notary website](#design-and-implement-the-new-notary-website)
  - [Develop content for Notary documentation and blogs](#develop-content-for-notary-documentation-and-blogs)
- [ORAS](#oras)
  - [Design and implement Artifact Explore web portal](#design-and-implement-artifact-explore-web-portal)
  - [Refactor the ORAS documentation structure and write new user guides](#refactor-the-oras-documentation-structure-and-write-new-user-guides)
- [Service Mesh Performance](#service-mesh-performance)
  - [Service Mesh Performance IDE Plugin](#service-mesh-performance-ide-plugin)
- [Strimzi](#strimzi)
  - [Proof of Concept of an MQTT to Apache Kafka bridge for producing messages](#proof-of-concept-of-an-mqtt-to-apache-kafka-bridge-for-producing-messages)
- [Thanos](#thanos)
  - [Continuation of add query observability for the new engine](#continuation-of-add-query-observability-for-the-new-engine)
- [Vitess](#vitess)
  - [Rework the frontend UI of Vitess’ benchmarking tools](#rework-the-frontend-ui-of-vitess-benchmarking-tools)
- [WasmEdge](#wasmedge)
  - [Serialization Completion](#serialization-completion)
  - [zlib Plugin Support](#zlib-plugin-support)
  - [Support Tensorflow and PyTorch in WasmEdge’s Python runtime](#support-tensorflow-and-pytorch-in-wasmedges-python-runtime)
  - [A stream log processing framework for WasmEdge](#a-stream-log-processing-framework-for-wasmedge)

---

## Accepted projects

### Armada

#### Build interfaces around Postgres for Armada

- Description: Open source projects should not be hard coded to a particular Database. Armada currently only allows users to use Postgres. This project is to build interfaces around our connections to Postgres so we can allow other databases.
- Expected outcomes:
  - A interface is created that allows Armada to interact with any SQL database without exposing implementation details of postgres
  - increase Test coverage
- Recommend Skills: Go, SQL
- Mentor(s):
  - Geoffrey Wilson, @suprjinx, geoff@gr-oss.io
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): https://github.com/armadaproject/armada/issues/2121
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/73d90321-62b3-498e-bf37-d899ec99df9e

### Cilium/Tetragon

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
  - Goassign
  - Kubernetes
- Mentor(s):
  - Kornilios Kourtis (@kkourt, kornilios@isovalent.com)
  - Michi Mutsuzaki (@michi-covalent, michi@isovalent.com)
- Upstream Issue:
  - https://github.com/cilium/tetragon/issues/794
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/659fe584-68e6-46bf-bd13-12653ef60268

### CNCF Landscape 

#### UX / UI Improvements II

- Description: With your collaboration, we aim to analyze findings and meaningful information (quantitative and qualitative data) and run a series of ideation rounds. We will create user personas, empathy maps, and other UX deliverables that will be the foundation to lay out a set of solutions to improve the current way to search, navigate and find relevant information on the Landscape.
- Expected Outcome: Creation user personas, empathy maps, and other UX deliverables.
- Recommended Skills: UX reaserach, desighn thinking, Figma and prototyping. 
- Mentors: Andrea Velázquez @andreuxxxx andrea@buoyant.io, Nate W. @nate-double-u natew@cncf.io, Chris Aniszczyk @caniszczyk caniszczyk@linuxfoundation.org
- Upstream Issue: https://github.com/cncf/landscape/issues/2467
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c45cc842-278f-4663-9ff4-deecc3fc040d

### CoreDNS

#### Add DNS-over-QUIC (DoQ) and/or DNS-over-HTTP/3 (DoH3) support

- Description: DNS-over-QUIC (DoQ) and DNS-over-HTTP/3 (DoH3) are relatively new protocols for transmitting DNS queries with security and privacy. Additionally, DoQ and DoH3 also offers other benefits such as improved latency and better error detection. The goal of this proposal is to add DoQ and/or DoH3 support to CoreDNS.
- Expected Outcome: An implementation of DoQ or DoH3 for CoreDNS. A stretch goal of adding both DoQ and DoH3 is also within scope.
- Recommended Skills: Golang, DNS.
- Mentor(s): Yong Tang @yongtang (yong.tang.github@outlook.com); Chris O'Haver @chrisohaver (cohaver@infoblox.com)
- Upstream Issue (URL): https://github.com/coredns/coredns/issues/5583, https://github.com/coredns/coredns/issues/5539
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/dd10bf62-53d1-4a96-bea2-65bbb78bd10e

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
- Mentor(s): Yuri Shkuro (@yurishkuro, github@ysh.us); Albert Teoh (@albertteoh, see.kwang.teoh@gmail.com)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/3381
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b8009398-1252-4f63-82fe-363846ccc11d

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
- Mentor(s): Yuri Shkuro (@yurishkuro, github@ysh.us), Yash Sharma (yashrsharma44@meta.com)
- Upstream Issue (URL): https://github.com/jaegertracing/jaeger-ui/issues/1288
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0fc6c44b-5ddf-467f-8016-72cc35b4e3ff

### Knative

#### Self-Balancing Knative Kafka Broker partitions

- Description: Creating a Knative Kafka Broker requires developers to specify the number of partitions the backing Kafka topic should have, however, this is not an easy decision to make and it requires planning based on the expected load the Knative Broker could receive. This project aims to remove this configuration setting by having an autoscaler that is responsible to add or remove partitions based on the effective load the Knative Kafka Broker receives while preserving [ordered and unordered delivery features](https://knative.dev/docs/eventing/brokers/broker-types/kafka-broker/#configuring-the-order-of-delivered-events) for Triggers.
- Expected outcome: A Knative Kafka Broker can be created without setting the number of partitions and the number of partitions for a topic backing the Knative Kafka Broker increases or decreases based on the observed load received.
- Recommended Skills: Kubernetes, Apache Kafka, Go, Java
- Mentor(s): Pierangelo Di Pilato @pierDipi (pierdipi AT redhat DOT com), Ali Ok @aliok (aliok AT redhat DOT com)
- Upstream Issue (URL): https://github.com/knative-sandbox/eventing-kafka-broker/issues/2917
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ac483209-2b08-4f74-aaa5-4ab3203b0677

#### Porting Knative Serving to Microshift

- Description: More and more workload is moving towards running on the edge. We saw experiments running Kubernetes on vehicles, fighter jets, 5G antenna and various far edge, near edge and fat edge environments. We would like to see what the challenges are when Knative is run in a resource limited environment. While there are multiple edge-friendly Kubernetes distributions, we would like to see [Microshift](https://github.com/openshift/microshift) used as the base platform. Knative consists of Serving and Eventing modules but focusing on Knative Serving as a first step should be more approachable. The project consists of 2 stages. First one is to run Knative on Microshift with minimal resources. This requires finding out problems here, solving them. A stretch goal is to find out what happens with architectures other than x86_64.
- Expected outcome:  Having Knative Serving with an ingress layer running on top of Microshift. Having a Hello-World Knative Service running on top. Finding issues blocking the edge setup, and possibly fixing them.
- Recommended Skills: Golang, Kubernetes, Knative, good understanding of networking, good understanding of CI/CD
- Mentor(s): Reto Lehmann @ReToCode (rlehmann AT redhat DOT com),  Stavros Kontopoulos @skonto (skontopo AT redhat DOT com)
- Upstream Issue (URL): https://github.com/knative/serving/issues/12718
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/830eb064-cf8a-4a8e-bba3-97d429a6ca79

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
  - https://github.com/konveyor/tackle2-operator/issues/220
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/78852896-9785-4156-bb9b-bc3c5cb6ed17

### KubeArmor

#### Implement DNS visibility with KubeArmor

* Description: The project aims to provide better visibility into the domains accessed from pods, with a focus on identifying and containing attacks that use techniques like Domain Generation Algorithms (DGA) to connect to remote command and control (C&C) servers. By gathering information on which domains are being accessed and applying network rules to allow only specific domains, the project aims to empower security operations (secops) teams to better prevent and respond to such attacks.
* Expected Outcome:  
  * KubeArmor to emit telemetry events for any DNS lookups from any pods.
  * Ability to see egress DNS lookups done from any pods using karmor summary.
  * Documentation
* Recommended Skills: Go, K8s, familiarity with network security and a basic understanding of KubeArmor is a plus.
* Mentors:
  * Anurag Kumar (@kranurag7, contact.anurag7@gmail.com)
  * Barun Acharya (@daemon1024, barun1024@gmail.com)
  * Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com)
* Upstream Issue: [Issue #1219](https://github.com/kubearmor/KubeArmor/issues/1219)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cfa22331-36f3-4d20-abf0-667a31fd2ba8

#### Manage KubeArmor policies using OCI registry and use OCI hooks for container events

* Description: The feature aims to manage KubeArmor policies using OCI registry and use OCI hooks to get container events. Currently, KubeArmor uses a UNIX domain socket file to watch for container events, but the proposed feature aims to use OCI hooks instead.
* Expected Outcome: To provide a more secure and efficient way of managing KubeArmor policies by leveraging OCI registry. Storing policies in OCI registries will make it easier to distribute policies across multiple clusters and environments. Using OCI hooks will also reduce the overhead of monitoring container events and make it easier to integrate KubeArmor with other container runtimes.
* Recommended Skills: Go, K8s, understanding of the Open Container Initiative (OCI) and container runtimes.
* Mentors:
  * Anurag Kumar (@kranurag7, contact.anurag7@gmail.com)
  * Barun Acharya (@daemon1024, barun1024@gmail.com)
  * Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com)
* Upstream Issue: [Issue #1130](https://github.com/kubearmor/KubeArmor/issues/1130)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/08d245cb-001f-4292-90eb-e8895189c77a

### Kubescape

#### Store Kubescape configuration scan results as CRs

- Description: [Kubescape](http://kubescape.io/) is a utility that can scan a Kubernetes cluster and report on its security posture. There is an "operator" which can be installed in the cluster to perform scheduled scans scan, but this is largely used to send the data to an external service. In this project, you will implement a mechanism in the Kubescape operator to save scan results locally in a custom resource (CR), as well as a watch so that scans can be performed on cluster state changes.
- Expected Outcome: Having the ability to scan a cluster when it changes, and have the results saved inside the cluster. This will allow users and automations to judge the security posture of changes that are made to the cluster (for example, deployments or rollouts.)
- Recommended Skills: Go
- Mentors:
  - Ben Hirschberg (@slashben, ben AT armosec.io)
  - Craig Box (@craigbox, craigb AT armosec.io)
  - David Wertenteil (@dwertent, dwertent AT armosec.io)
 - Upstream Issue: https://github.com/kubescape/kubescape/issues/1225
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1a6a7aaf-7436-431b-9131-9422e4b2fb71

#### Prometheus exporter for image vulnerabilities

- Description: Kubescape has a component that runs in-cluster which performs image scanning on all the container images deployed to a cluster. This function is largely used to send the data to an external service.  In this projet, you will develop a Prometheus exporter for the image vulnerability information produced by Kubescape.  This will allow users to access the data from within the cluster, as well as use it for alerting.
- Expected Outcome: Access to cluster vulnerability data through Prometheus.  For example, you should have the ability to alert on number or percentage of "Critical" level vulnerabilities in containers running in the cluster.
- Recommended Skills: Go, Prometheus
- Mentors:
  - Ben Hirschberg (@slashben, ben AT armosec.io)
  - Craig Box (@craigbox, craigb AT armosec.io)
  - David Wertenteil (@dwertent, dwertent AT armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1226
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8c701687-7cde-42fc-8195-08d35fdb5ee8

#### Vulnerability-based Dockerfile generator

- Description: Kubescape can detect vulnerabilities in a container image. Some can automatically be remediated by changing the base image version (or other package information) inside the Dockerfile which created the image. This project is to automate this remediation.
- Expected Outcome: An enhancement to Kubescape to generate a Dockerfile that proposes fixes for vulnerabilities found in a container image. This may be by integration with existing open source tools or developing something new.
- Recommended Skills: Go
- Mentors:
  - Ben Hirschberg (@slashben, ben AT armosec.io)
  - Craig Box (@craigbox, craigb AT armosec.io)
  - David Wertenteil (@dwertent, dwertent AT armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1227
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/fbaf3d52-77ee-469c-8eb4-3e0378896159


### KubeVela

#### Expand multiple database drivers for the API server
- Description: Now KubeVela's VelaUX uses two kinds of Database to store metadata: Kubernetes ConfigMap and MongoDB. As more users are expecting using different kinds of database. We proposing to expanding multiple database drivers for the VelaUX API server. 
- Expected Outcome: The outcome of this project will be expand two more database driver for KubeVela VelaUX API server:
  - Mysql
  - PostgreSQL
- Recommended Skills:
  - Golang
  - Kubernetes
  - Backend APIs Development
- Mentor(s):
  - Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com)
  - Zeng Qingguo (@barnettZQG, barnett.zqg@gmail.com)
- Upstream Issue (URL): https://github.com/kubevela/kubevela/issues/5426
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/21c95d53-dd75-4a2f-a8fd-92374c54940d

#### Auto-generate the TypeScript and Java languages API SDK
- Description: The VelaUX API server follows the Open API schema. It could auto-generate the swagger configs via CLI. When VelaUX frontend or other projects need to call these API, they must write the model code and request the API code. We can provide SDK for them to start faster. [OpenAPI generator](https://openapi-generator.tech/) could help to generate most codes. But there are still some special cases like:
  - Dynamic component/trait/policy/workflowsteps properties need to be generated according to CUE.
  - Automatically handles the user authentication process, including automatically refreshing tokens.
  - The API definition may be incomplete accuracy, we should check it to generate high-quality code.
- Expected Outcome: The outcome of this project will be expand two more database driver for KubeVela VelaUX API server:
  - VelaUX APIServer TypeScript SDK
  - VelaUX APIServer Java SDK
- Recommended Skills:
  - Golang
  - Kubernetes
  - Backend APIs Development
  - OpenAPI schema
  - CUE
- Mentor(s):
  - Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com)
  - Yin Da (@somefive, Somefive@foxmail.com)
- Upstream Issue (URL): https://github.com/kubevela/kubevela/issues/5428
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b97b2f2d-4dbd-45f5-9121-0e865aa6dfd9

### Kyverno

#### Kuttl tests for the Kyverno policy library

- Description: Kyverno has the largest policy library of any policy tool for Kubernetes. Ensuring that policies work effectively across releases of both Kyverno and Kubernetes is important for users. Additionally, these tests can be leveraged in the CI processes ensuring that changes to the Kyverno codebase do not cause regressions which impact areas relevant to these policies. In this mentorship, you will learn how the `kuttl` tool works and write test cases using `kuttl` to cover all policies in the official Kyverno policy library.
- Expected outcome: All policies have corresponding tests using the `kuttl` tool.
- Recommended Skills: Kubernetes, Kyverno
- Mentor(s): Chip Zoller @chipzoller (chipzoller AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/policies/issues/546
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/85ebe560-e9ee-42fe-9dff-f8dc6a11ef27

#### Sigstore Cosign Updates

- Description: Kyverno supports image signature and attestation verification using the Sigstore Cosign tooling. Re-implement the Kyverno Sigstore Cosign module to use OCI artifacts and references and remove dependencies to the Cosign CLI packages.
- Expected outcome: Kyverno can use OCI artifacts to verify container images that are in Cosign format.
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s):
  - Shuting Zhao @realshuting (shuting AT nirmata DOT com)
  - Vishal Choudhary @Vishal-Chdhry (contactvishaltech AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/7087
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cabb007c-5669-4b16-8778-36d995a71591

#### ValidatingAdmissionPolicy support, Phase 2

- Description: Kyverno is working towards support of ValidatingAdmissionPolicy (CEL admission). Extend this support for other items such as CLI, reporting, and auto-generating ValidatingAdmissionPolicies from Kyverno policies.
- Expected outcome: Extended support and integration with ValidatingAdmissionPolicies
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s):
  - Jim Bugwadia @jimbugwadia (jim AT nirmata DOT com)
  - Mariam Fahmy @MariamFahmy98 (mariamfahmy66 AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/7088
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e4be265d-fa05-46b7-8fad-2585b6a76082

#### Cleanup Policies, Phase 2

- Description: Kyverno has a policy type called Cleanup Policies which allow removal of resources defined in a policy. In this second phase, we would like to extend this ability to cleanup resources based upon defining a label for even more fine-grained control.
- Expected outcome: Extend Cleanup Policies feature by allowing per-resource removal based upon label assignment
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s): Charles-Edouard Brétéché @eddycharly (charled.breteche AT gmail DOT com)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/5748
  - https://github.com/kyverno/KDP/blob/main/proposals/cleanup.md#proposal
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4689c5fa-165e-4015-ad21-951d9babcb7e

### LitmusChaos

#### Enhance/improve chaos center code base and redesign chaos workflow apis
- Description: This project focuses on enhancing and improving the Chaos Center code base, specifically redesigning the Chaos Workflow APIs to provide an enhanced user experience. The main objectives include refining the functionality of the Chaos Workflow and Workflow Run APIs, modularizing the chaos-workflow package into separate packages, and addressing security vulnerabilities and golangci-lint issues in the Chaos Center backend components. The project aims to deliver a more robust and secure Chaos Center platform, offering improved usability and performance for users.
- Expected outcome: The outcome of this project will be improved functionality, security, and usability of the chaos workflow APIs and chaos-center backend components through the implementation of new features, refactoring of existing code, and addressing of security vulnerabilities.
- Recommended Skills:
  - Golang
  - Kubernetes
  - Backend APIs Development
- Mentor(s):
  - Amit Kumar Das (@amityt, amit.das@harness.io)
  - Arkajyoti Mukherjee (@arkajyotiMukherjee, arkajyoti.mukherjee@harness.io)
- Upstream Issue (URL): https://github.com/litmuschaos/litmus/issues/3970
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/983193ea-9cca-405f-baa5-e6ade4df1ba2

#### Enhance/Upgrade chaos operator and chaos exporter module

- Description: LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. This project idea involves upgrading the Chaos Operator and Chaos Exporter repositories by updating their dependencies, addressing security vulnerabilities, and adding new functionality. Specifically, the project aims to upgrade the operator-sdk and Prometheus exporter versions, add new Prometheus metrics to the Chaos Exporter, and fix security vulnerabilities pointed out by trivy and golangci-lint. Furthermore, the project seeks to add unit test cases to both repositories to ensure that their functionality is robust and reliable. Overall, this project aims to improve the stability, security, and functionality of the Chaos Operator and Chaos Exporter repositories, making them better suited for use in production environments.
- Expected outcome: The outcome of this project will be improved stability, security, and functionality of the Chaos Operator and Chaos Exporter modules through the upgrade of dependencies, addition of new metrics, and implementation of unit tests.
- Recommended Skills:
  - Golang
  - Kubernetes and k8s golang client
  - Prometheus
- Mentor(s):
  - Shubham Chaudhary (@ispeakc0de, shubham.chaudhary@harness.io)
  - Vansh Bhatia (@vanshBhatia-A4k9, vansh.bhatia@harness.io)
- Upstream Issue (URL): https://github.com/litmuschaos/litmus/issues/3969
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bd6e875a-a64c-4405-af1c-677d8c45014b

### Meshery

#### Meshery UI Permissions Framework

- Description: Meshery UI lacks a permissions framework. The existing internal implementation is simple, fragile and must be completely rewritten. The approach to implemention a permmissions framework includes using React.js and CASL.js. Meshery UI's approach needs to be extensible given that this framework will be an extension point for Remote Providers to supply their own permissions.
- Expected outcome: Definition of permissions and their enforcement in Meshery with an aim for deep granularity and extensibility with each user interface input component carrying a unique permission key id. Each key is then put into a group of keys in a keychain, keychains assigned to user roles, in turn, roles assigned to users. With users having the ability to create own custom roles, the framework will be dynamic based on the associated server-side permissions for the currently auth’ed user.
- Recommended Skills: React.js, CASL.js
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com), Abhishek Kumar @Abhishek-kumar09 (abhimait1909@gmail.com)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/7436, https://github.com/meshery/meshery/issues/7382
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f4a9804f-2e46-42a4-b2ae-ad3ea7b29734

#### OPA policy evaluation in-browser using WebAssembly and Rego

- Description: Meshery's highly dynamic infrastructure configuration capabilities require real-time evaluation of complex policies. Policies of various types and with a high number of parameters need to be evaluted client-side. With policies expressed in Rego, the goal of this project is to incorporate use of the https://github.com/open-policy-agent/golang-opa-wasm project into Meshery UI.
- Expected outcome: a powerful real-time multi-user collaboration experience.
- Recommended Skills: Golang, Open Policy Agent, WASM
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com), Abhishek Kumar @Abhishek-kumar09 (abhimait1909@gmail.com)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/7019
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/005db8db-7efe-4433-9605-91d14174c72c

#### Adopt OCI as the packaging and distribution format for Meshery MeshModels

- Description: Meshery MeshModels represent a schema-based description of cloud native infratructure. MeshModels need to be portable between Meshery deployments as well as easily versionable in external repositories.
- Expected outcome:
  - Meshery clients (mesheryctl and Meshery UI) should be able to import/export MeshModels as OCI images.
  - Meshery clients (mesheryctl and Meshery UI) should be able to push/pull from OCI-compatible registries.
  - Stretch Goal: OCI image signing; Verify the authenticity of MeshModels using [cosign](https://github.com/sigstore/cosign).
  - Target registries: Meshery Catalog (https://meshery.io/catalog), Artifact Hub.
- Recommended Skills: Reactjs, Golang, GraphQL
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/6447
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/26377c30-9ffd-41e3-bfea-839bf126f8f6

#### OCI compatible Kubernetes ontology

- Description: Network topologies and graph databases go hand-in-hand. The OpenAPI specifications for Kubernetes provides taxonomy, but augmenting a graph data model with formalized ontologies enables any number of capabilities, one of the more straightforward is the inferencing requisite for natural language processing, and consequently, a human-centric query / response interaction becomes becomes possible. More importantly, more advanced systems can be built when a graph data model of connected systems is upgraded to be a knowledge semantic graph. Deliverables (among other items):

- MeshModel capabilities browser
- Import/export of MeshModel models and components as OCI images
- augmentation of cuelang-based component generator

- Recommended Skills: cuelang, golang, OCI
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com)
- Issue: https://github.com/cncf/tag-network/issues/24
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bb8ddf84-31d7-4a89-9e4b-e6aa9601c0db

### Notary

#### Design and implement the new Notary website

- Description: Design the new Notary website using the Figma tool and develop it based on the design layout. We redesigned the Notary website and finished the first phase development work with CNCF employee @thisisobate in [#PR 139](https://github.com/notaryproject/notaryproject.dev/pull/139). This project is to continue to design and implement the new Notary website and ensure deliver a developer-friendly experience.
- Expected Outcome: 
   - Design and implement the Adopters page
   - Redesign a Community page
   - Improve the landing page design; add an installation section with a terminal effect design
   - Support mobile responsive design
   - Add a pop-up window on the landing page to tell users how to join the community
   - Add Algolia search for the website
   - Design and implement a video page to list Youtube videos
   - Refine the content on the website
   - Add Broken link check to Netlify CI
- Recommended Skills: Figma design, HTML, CSS, JavaScript, Hugo
- Mentor(s):  Feynman Zhou (@FeynmanZhou , feynmanzhou@microsoft.com)
- Upstream Issue (URL): https://github.com/notaryproject/notaryproject.dev/issues/194
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/06774504-da91-469e-89f9-14fb18b6e0d8

#### Develop content for Notary documentation and blogs

- Description: Develop content for Notary documentation and write blog posts to educate users about the Notary use cases. Write user guides, contributing guides, and developer guides for every new Notary release and keep those content up-to-date.
- Expected Outcome: 
   - Write user guides with end-to-end scenarios based on given doc structure and requirement
   - Write contributing guides and developer guides, ensure new developers can easily build and start contributing to Notary subprojects 
   - Write blog posts to educate users to use Notation with cloud-native ecosystem tools
- Recommended Skills: OCI, Docker, Kubernetes, Notary, Git, Markdown, Technical writing experience
- Mentor(s): Mentor(s):  Yi Zha, @yizha1 (yizha1@microsoft.com)
- Upstream Issue (URL): https://github.com/notaryproject/notaryproject.dev/issues/195
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/007ca3e9-c121-4428-8e63-57bc0418e98a

### ORAS

#### Design and implement Artifact Explore web portal

- Description: This project goal is to improve the efficiency of the image developers and users through the artifact explorer tool with ORAS under the hood. This tool helps users to explore and search the content of an artifact or a registry. This doc is to gather ideas for early brainstorming purposes. For users, this tool reduces CLI learning cost and improve efficiency for developers. They don’t need to memorize and type the CLI commands to explore the content of an OCI artifact and registry.

- Expected Outcome:
   - Provides a web portal to view the content of OCI artifacts from any public registries
   - Users can drill down into the detailed content of an image manifest or a layer
   - Users can view the artifact reference graph from the web portal
   - Users can view and download the supply chain artifacts like the signature, SBOM, attestation 
   - Provides search capabilities to allow users to search container images or OCI artifacts on a central web portal. We can combine it with Artifact [Search API capabilities](https://docs.google.com/document/d/1rcQROZP31q7BOjoZ977Ok7pt28z_UXfW0vAK3xC0wdI/edit#heading=h.rx512bvufn5q).
   - Explore the image’s file system of layer (tentative)
   
- Recommended Skills: Figma design, HTML, CSS, JavaScript, Hugo, Docker
- Mentor(s):  Feynman Zhou (@FeynmanZhou , feynmanzhou@microsoft.com), Billy Zha (@qweeah , jinzha1@microsoft.com), Asmit Malakannawar (@asmitbm , asmitbm2952002@gmail.com) 
- Upstream issue: https://github.com/oras-project/oras-www/issues/158
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9749bc0a-04c9-498d-a16c-e66c0930e819

#### Refactor the ORAS documentation structure and write new user guides

- Description: Refactor the ORAS documentation structure and write new user guides based on the latest version of ORAS. The detailed ORAS documentation structure and content should be refactored according to the proposal in the [upstream issue](https://github.com/oras-project/oras-www/issues/65). 
- Expected Outcome: Deliver a developer-friendly documentation structure for ORAS and write new user guides according to the proposed documentation structure. Publish all content at https://oras.land/
- Recommended Skills: OCI, Docker, ORAS, Markdown
- Mentor(s): Terry Howe (@TerryHowe , terrylhowe@gmail.com), Asmit Malakannawar (@asmitbm , asmitbm2952002@gmail.com), Feynman Zhou (@FeynmanZhou , feynmanzhou@microsoft.com)
- Upstream issue: https://github.com/oras-project/oras-www/issues/65
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2314fcc1-f09b-4dab-90fb-d0ef092b6c0e

### Service Mesh Performance

#### Service Mesh Performance IDE Plugin

- Description: The objective of this project is to develop IDE plugins that can enhance the developer experience while working with Service Mesh Performance Performance Profiles. The proposed plugins will leverage technologies such as golang and cuelang to provide features such as syntax highlighting, auto-completion, validation, and rendering previews for Service Mesh Performance profile and model definitions.
- Expected outcome:
- 1. Release VS Code Extension
- 2. Syntax Highlighting and Auto-completion: The plugin can fetch SMP Model definitions such as cloud-native components and their relationships. This information can be used to provide syntax highlighting and auto-completion for these definitions in the JSON files, making it easier for developers to write error-free code.
- 3. Validation and Reference: For Meshery MeshModel definitions such as cloud-native components and their relationships, the plugin can use the CUE language to provide validation for the CUE input and preview the rendering result. The plugin can also fetch the SMP Model schemas and display them in the IDE for reference.
- Recommended Skills: Cuelang
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com), Xin Huang @gyohuangxin (xin1.huang@intel.com)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/379
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4735d0fa-229f-43e7-9415-dff9220bf687

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8d301adf-94d8-4e5d-821d-f904ed15c3f9

### Thanos

#### Continuation of add query observability for the new engine

- Description: We have added solid foundation for query observability in the new engine during the previous LFX mentorship term. Let's continue the awesome work by Pradyumna by implementing other features.
- Expected outcome: other query observability visualizations are implemented; extra observability data has been added
- Recommended skills: Golang, React
- Mentor(s): @saswatamcode, Saswata Mukherjee saswataminsta@yahoo.com, @GiedriusS Giedrius Statkevičius giedriuswork@gmail.com
- Difficulty: Medium
- Upstream issue (URL): https://github.com/thanos-community/promql-engine/issues/106
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1953e512-fa8c-4f0e-9b24-0e6c81a7cd39

### Vitess

#### Rework the frontend UI of Vitess’ benchmarking tools

- Description: Vitess uses a couple of tools to benchmark its codebase and to make sure that new code doesn’t introduce performance regressions. These tools are: arewefastyet and the VReplication Benchmarking Framework. We currently have an old frontend UI that serves arewefastyet. However, this UI is slow, not optimized and not easily extensible. It uses the built-in Golang template system to serve pages. We would like to create a common frontend UI that will be used by both benchmarking tools and that will replace the current arewefastyet’s UI. The mentee will have the responsibility of creating the UI using (most likely) React/Vite on Vercel. The frontend component will connect to our already-existing backend components: a MySQL database and arewefastyet’s REST API.
- Expected Outcome: The expected outcome is to have a working frontend UI that integrates well with our different backends (databases and benchmarking tools’ APIs).
- Recommended Skills: React, Vercel, Vite, REST API, (Optional writing APIs in Golang)

- Mentor(s):
  - @fouioui Florent Poinsard frouioui@planetscale.com
  - Rohit Nayak @rohit-nayak-ps rohit@planetscale.com
- Upstream Issue (URL): https://github.com/vitessio/arewefastyet/issues/328 
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8299d27a-9e36-4de6-abbc-c9282634ee03

### WasmEdge

#### Serialization Completion

- Description: WasmEdge is a WebAssembly runtime in both interpreter and ahead-of-time mode. However, WasmEdge only supports the binary format for the input WebAssembly file. To help the text format WebAssembly loader feature in the future, the implementation of serializing a WebAssembly module is necessary. In this mentorship, we hope the mentee should complete the serialization functions already in [the `dev/serialize` branch](https://github.com/WasmEdge/WasmEdge/tree/dev/serialize) of the `WasmEdge` repo.
- Expected outcome: Complete the serialization functions of WebAssembly modules, such as the element segment and data segment encoding. Complete the WebAssembly instructions encoding. Generate the unit test data and pass the unit tests. >80% of code coverage for serialization.
- Recommended Skills: C/C++, WebAssembly
- Mentor(s): Yi-Ying He @q82419 (yiying at secondstate dot io), Hung-Ying Tai @hydai (hydai at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2262
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4a8a4f26-0ca9-4517-8cce-582c92092e33

#### zlib Plugin Support

- Description: The zlib is required for compiling and running many existing C / C++ / Rust apps in Wasm. Most noticeably, it is [needed in the Python port to Wasm](https://github.com/python/cpython/issues/93819). The VMWare Wasm Labs team is using a zlib port from [Singlestore](https://github.com/singlestore-labs/python-wasi) in [their Python Wasm runtime](https://wasmlabs.dev/articles/python-wasm32-wasi/). In WasmEdge, we could support the zlib host functions through our [plugin system](https://wasmedge.org/book/en/plugin.html). This way, any existing zlib apps can be compiled to Wasm and runs inside WasmEdge.
- Expected outcome: Create a new [WasmEdge plugin](https://wasmedge.org/book/en/plugin.html) that exports all public functions in `zlib`. Implement SDK (in C/Rust) that uses the C ABI to generate corresponding headers for the above plugin. Generate the unit tests and pass the unit tests. >80% of code coverage for verification.
- Recommended Skills: C/C++, Rust, WebAssembly
- Mentor(s): Yi-Ying He @q82419 (yiying at secondstate dot io), Hung-Ying Tai @hydai (hydai at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2244
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/74cecdf7-e886-4830-8bb0-7814f0d1aa2d

#### Support Tensorflow and PyTorch in WasmEdge’s Python runtime

- Description: In this project, you will incorporate WasmEdge’s NN (Neural Network) extensions into the Python interpreter. WasmEdge provides C and Rust APIs for guest applications to access host functions in the underlying Tensorflow and PyTorch libraries. You will make those functions accessible from the CPython-based interpreter as Python wrappers. This way, Python applications can do lightweight AI inference on the WasmEdge container.
- Expected outcome:
  * Investigate and list all C-based host function APIs for Tensorflow and PyTorch inference in WasmEdge NN.
  * Create CPython wrappers for those host functions.
  * Create high-level Python wrapper functions that are ergonomic for Python developers.
  * Create CI and demo apps to validate the Python wrapper API.
  * Create detailed documentation and tutorials.
- Recommended Skills: Proficient in C programming including creating dynamic libraries; Proficient in Python and machine learning programming. Basic understanding of WebAssembly and WasmEdge.
- Mentor(s): Michael Yuan @juntao (michael at secondstate dot io), Asen Alexandrov @adalexandrov (alexandrov at vmware dot com)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2471
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/884ff3f2-3ea3-4010-8928-ca27bbae219a

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/55c226fe-d119-4b2c-aba0-e7415867f6e5

