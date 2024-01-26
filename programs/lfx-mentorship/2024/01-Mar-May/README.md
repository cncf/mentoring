# Term 01 - 2024 March - May

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |   
| project proposals | Monday Jan 8 - Wednesday Jan 24, 8:00 AM PDT |
| mentee applications open | Monday Jan 29 - Tues Feb 13, 5:00 PM PDT |
| application review/admission decisions | Wed Feb 14 - Tues Feb 27, 5:00 PM PDT |
| selection notifications | Tues Feb 27, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | Monday March 4 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | Wednesday April 10 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed May 22, 5:00 PM PST (Week 12) |
| Last day of term | Friday May 31 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2024/01-Mar-May/project_ideas.md, by January 24, 2024.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Table of Contents

---

## Accepted Projects

---

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/12b695a0-e05c-46b9-a42d-c7e4709f0129

#### Ability to install / upgrade Antrea using the CLI

- Description: Currently Antrea can be installed using a K8s YAML manifest or through the provided Helm chart. We believe there is value in providing a 3rd installation method, using the "antctl" CLI. The CLI installation / upgrade method would have the following advantages: a) more user-friendly, with support for command-line options to customize the installation, b) ability to run sanity checks on the K8s cluster before comitting to the installation, c) when upgrading, the CLI will ensure that Antrea components are upgraded in the optimal order, to minimize workload disruption.
- Expected Outcome: A new command for antctl, the Antrea CLI, which will provide support for installation and upgrade.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, UX experience would be great but not required.
- Mentor(s):
  - Quan Tian (@tnqn, tianquan23@gmail.com)
  - Lan Luo (@luolanzone, luolanzone@gmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/5896
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ae950bcf-d16b-4d26-aed0-702c1eedb507

#### Replace deprecated bincover with golang built-in coverage profiling tool

- Description: Currently Antrea uses a third-party tool called [bincover](https://github.com/confluentinc/bincover) to measure code coverage when running end-to-end (e2e) tests. This tool has been deprecated in favor of the built-in Go coverage profiling tool (https://go.dev/testing/coverage/) starting with Go 1.20, and it is no longer maintained. We would like to remove usage of bincover from the Antrea project and start using the built-in Go tool.
- Expected Outcome: Complete removal of the bincove dependency. Code coverage can still be measured with the same accuracy when running Antrea e2e tests and the results can still be reported to [Codecov](https://about.codecov.io/).
- Recommended Skills: familiarity with Golang and the Golang testing framework.
- Mentor(s):
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
  - Lan Luo (@luolanzone, luolanzone@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/4962
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8f08ebb1-05a8-41fb-8c4c-85626f63c195

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8ad2c24f-120d-4369-866c-c911a5c885e9

### Cilium

#### Governance Documentation

- Description: This project will focus on governance documentation for the Cilium project with two key parts. First, the governenace documentation should be moved out of the main docs and into the community repo. Second, we need to do an inventory of all of the repos under the project and come up with a lifecycle for them.
- Expected Outcome: Governance docs in community repo. All repos accounted for and with a lifecycle plan.
- Recommended Skills: enthusiasm for governance and basic markdown experience
- Mentor(s):
  - Bill Mulligan(@xmulligan, bill@isovalent.com)
- Upstream Issue: https://github.com/cilium/community/issues/78 https://github.com/cilium/community/issues/27
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/eeaec4a9-5a9c-4cae-945d-f99265e85275

### Cloud Native Buildpacks

#### Proof of concept for creating multi-arch images using buildkit

- Description: A proof of concept to add buildkit support to pack in order to build multi-arch images. Pack is the reference implementation of a Cloud Native Buildpacks platform used to build application images from source code.
- Expected Outcome: Multi-arch support has been one of the most requested features for Cloud Native Buildpacks, and this would allow end-users/developers to build multi-arch images with the pack cli.
- Recommended Skills: Golang, Software development literacy, Familiarity building multi-arch containers with Docker and Buildkit. Familiarity with buildpacks will be helpful.
- Mentor(s):
  - Jerico Pena (@jericop, jericop@gmail.com)
  - Juan Bustamante (@jjbustamante, bustamantejj@gmail.com)
  - Natalie Arellano (@natalieparellano, natalie.arellano@broadcom.com)
- Upstream Issue: https://github.com/buildpacks/pack/issues/1570
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2c5ced86-d23b-41f5-aec3-59730e29f092

### Harbor

#### Harbor CLI

- Description: Harbor is a popular and widely adopted container registry. We have developed an initial CLI (https://github.com/goharbor/harbor-cli) that we would like to extend and implement additional functionality, and common workflows that are currently only present in the Web UI. We are seeking a Golangs experienced manatee who can work on the project independently. 
- Expected Outcome: Working Golang Harbor CLI which can be used in the CI/CD implementations that compliment the Web UI covering the typical workflows of Harbor administrators and users. Familiarity with Golang library spf13/cobra and REST/Open API. Well-documented CLI that users love to use, and with the corresponding architectural diagrams under the Harbor. Working CI/CD with GitHub actions that create multi architecture binaries and containers.
- Recommended Skills: Golang, spf13/cobra
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Yan Wang (@wy65701436, yan-yw.wang@broadcom.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/search?q=Harbor%20CLI&type=repositories
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8654848d-1233-4e9f-8ed6-559af0ea8298

#### Harbor Satellite

- Description: Containers are becoming more and more omnipresent, event outside their natural habitat, the cloud. It is not common today to see that container are running on small and remote devices on the EDGE. Those fleets of devices often don’t have a reliable internet connection or no internet connection at all. Running containers without being able to fetch images is a hard thing to do. So we are bringing the registry closer to the appliances where they are running.
Since we are not talking about a few registries but many more, it becomes challenging to manage all the registries, this is where the satellite concept comes into place where images are distributes from a central registry.
The following slides and video outline the concept and its purpose in more detail.
https://youtu.be/GJ3pnfUocEw?si=F9mn4-sgN1_K6rLK&t=1529
https://docs.google.com/presentation/d/e/2PACX-1vRfcwotFzUSmfmSOmRQccBdJuFUFtIxeFE4mB3L9NgnOBM5tBnCs6uYOzyfUCIpd5xiEueMA1RYTFML/pub?start=false&loop=false&delayms=3000
- Expected Outcome: The goal is to create a proof of concept, showcasing that such a solution practically works. Candidates should be able to demonstrate, how images can be replicated from a central registry to a registry on the edge location.
The demonstration should contain a tunneling solution that has a Golang SDK or can be controlled from a Golang application. Part of the project is the selection and evaluation of different tunneling solutions. 
- Recommended Skills: Golang, OSS contributions, distributed systems
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Yan Wang (@wy65701436, yan-yw.wang@broadcom.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/search?q=repo%3Agoharbor%2Fharbor+Satellite&type=issues
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/31d2e818-5ce1-4f87-aba1-a8b2f71a0e01

### Inspektor Gadget

#### Support for new types of eBPF programs

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux hosts. Users can develop gadgets using different kinds of eBPF programs: kprobe, tracepoint, etc. This project will focus on adding support for more kinds of eBPF programs such as uprobes and ensuring the documentation is updated for each of them
- Expected Outcome: Inspektor Gadget has support for additional eBPF program kinds
- Recommended Skills: Go, containers, Linux, basics of eBPF
- Mentor(s):
  - Alban Crequy (@alban, albancrequy@microsoft.com)
  - Mauricio Vásquez (@mauriciovasquezbernal, mauriciov@microsoft.com)
- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/1912
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f016029e-f15f-4ee9-aaf5-5719bee72b59

#### Testing framework for image-based gadgets

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux hosts. Previously, Inspektor Gadget had a set of built-in gadgets. We are now moving to image-based gadgets where users can develop their own gadgets in eBPF and host them in OCI registries. But we don't have a test framework to help gadget authors to test their gadgets. This project will focus on implementing such a framework, possibly taking inspiration from the existing framework for built-in gadgets. The documentation for gadget authors should be updated. This project has the opportunity to expand beyond testing, to work on the gadget development experience over all, for example by creating a github template for gadget development.
- Expected Outcome: Gadget authors can test their gadgets
- Recommended Skills: Go, containers, Linux, testing
- Mentor(s):
  - Alban Crequy (@alban, albancrequy@microsoft.com)
  - Mauricio Vásquez (@mauriciovasquezbernal, mauriciov@microsoft.com)
- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/2046
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/65719d46-b71f-4778-a29b-3bb878d6ec70

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/263ef898-ac07-49d7-9aff-ebd319159163

### Jaeger

#### Jaeger-V2 Storage Backends

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Currently only memory storage is wired in v2, we need to add Elasticsearch, Opensearch, Cassandra, Badger.
- Expected Outcome: Build out full support in jaeger-v2 for all storage backends supported by jaeger-v1
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/66aaa053-e7b1-4682-a285-73ce66420f86

#### Jaeger-V2 Observability

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Currently jaeger-v2 components are initialized without observability clients. We need to instantiate appropriate logging, tracing, and metrics clients and pass them to the components. The existing code uses internal metrics API, which needs to be bridged to OTEL metrics to minimize code changes.
- Expected Outcome: Achieve parity in observability of jaeger-v2 compared to jaeger-v1
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/077f3bec-e3d3-41f7-a527-655c62661f80

#### Jaeger-V2 Adaptive Sampling

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Jaeger-v1 collector can serve sampling configuration to SDKs, and allows either static configuration (with hot reload) or adaptive sampling that continuously re-calculates the desired sampling probabilities. We need to enable all these capabilities in jaeger-v2.
- Expected Outcome: Support adaptive sampling in jaeger-v2
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/00e78fef-e9a7-4e2c-bf29-e6099ac14b65

### KCL

#### KCL Package Version Management

- Description: The KCL package management tool primarily handles the management of third-party KCL packages for the KCL project, which includes tasks such as uploading and downloading these packages. When adding third-party packages to the KCL project, it is important to adhere to version management strategies. This involves carefully selecting and downloading the appropriate version of a package, especially when different versions of the same package are available.
- Expected Outcome: Add version management to the KCL package management tool.
- Recommended Skills: golang
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/246
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/06b5baee-bdcd-4f5e-9a1a-454191445a01

#### KCL IDE Quick Fix

- Description: When the KCL IDE encounters some errors in the KCL code, it can pop up `Quick Fix` prompts to help users quickly fix the errors.
- Expected Outcome: Added Quick Fix for some error prompts in KCL IDE.
- Recommended Skills: rust
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zheng Zhang (@He1pa, he1pa404@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kcl/issues/997
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/391edda7-239d-4471-a36a-c03c24e024cb

#### KCL IDE Update KCL Dependencies

- Description: When a KCL package is loaded using KCL IDE, the IDE automatically updates the dependencies of the current KCL package through kpm.
- Expected Outcome: Add automatic updates for third-party libraries to the IDE.
- Recommended Skills: rust, go
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zheng Zhang (@He1pa, he1pa404@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kcl/issues/998
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/59d5fb6c-153d-4e46-9d1f-2948641b0471

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/eba6b385-1293-4192-b2b4-7da3afb74476

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f304369d-62eb-40e0-b52b-630276bf4000

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/06986e04-9b64-411f-b7f4-35fec6a70d03

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/43693b3c-6512-4c0b-ba1b-f9704bfd0991


