# Term 02 - 2023 June - August

Status: Planning

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

* [Armada](#armada)
* [CoreDNS](#coredns)
* [Jaeger](#jaeger)
* [Knative](#knative)
* [Kubescape](#kubescape)
* [Kyverno](#kyverno)
* [Notary](#notary)
* [Meshery](#meshery)
* [ORAS](#oras)
* [Tetragon](#tetragon)
* [WasmEdge](#wasmedge)
* [Konveyor](#konveyor)
* [Strimzi](#strimzi)
* [Thanos](#thanos)
* [KubeArmor](#kubearmor)
* [LitmusChaos](#litmuschaos)
* [Vitess](#vitess)
* [KubeVela](#kubevela)
* [Service Mesh Performance](#service-mesh-performance)

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
  - Geoffrey Wilson, @suprjinx, geoff@gr-oss.com
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): https://github.com/armadaproject/armada/issues/2121
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/73d90321-62b3-498e-bf37-d899ec99df9e

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
- Mentor(s): Yuri Shkuro (@yurishkuro, github@ysh.us)
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
- Mentor(s): Yuri Shkuro (@yurishkuro, github@ysh.us)
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
  - Ben Hirschberg (@slashben, ben AT armosec.io)
  - Craig Box (@craigbox, craigb AT armosec.io)
  - David Wertenteil (@dwertent, dwertent AT armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1227
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/fbaf3d52-77ee-469c-8eb4-3e0378896159

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
- Mentor(s): Charles-Edouard Brétéché @eddycharly (charles.edouard AT nirmata DOT com)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/5748
  - https://github.com/kyverno/KDP/blob/main/proposals/cleanup.md#proposal
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4689c5fa-165e-4015-ad21-951d9babcb7e

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
- Mentor(s):  Feynman Zhou (@FeynmanZhou , feynmanzhou@microsoft.com), Billy Zha (@qweeah , jinzha1@microsoft.com) 
- Upstream issue: https://github.com/oras-project/oras-www/issues/158
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9749bc0a-04c9-498d-a16c-e66c0930e819

#### Refactor the ORAS documentation structure and write new user guides

- Description: Refactor the ORAS documentation structure and write new user guides based on the latest version of ORAS. The detailed ORAS documentation structure and content should be refactored according to the proposal in the [upstream issue](https://github.com/oras-project/oras-www/issues/65). 
- Expected Outcome: Deliver a developer-friendly documentation structure for ORAS and write new user guides according to the proposed documentation structure. Publish all content at https://oras.land/
- Recommended Skills: OCI, Docker, ORAS, Markdown
- Mentor(s): Terry Howe (@TerryHowe , terrylhowe@gmail.com), Asmit Malakannawar (@asmitbm , asmitbm2952002@gmail.com), Feynman Zhou (@FeynmanZhou , feynmanzhou@microsoft.com)
- Upstream issue: https://github.com/oras-project/oras-www/issues/65
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2314fcc1-f09b-4dab-90fb-d0ef092b6c0e


