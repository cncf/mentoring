Status: Completed

# Table of contents

- [Table of contents](#table-of-contents)
- [Q2](#q2)
  - [Timeline](#timeline)
    - [Summer Term: June 6th - August 31st](#summer-term-june-6th---august-31st)
    - [Mentorship duration - three months (**11 weeks** - full-time schedule)](#mentorship-duration---three-months-11-weeks---full-time-schedule)
  - [Accepted Projects](#accepted-projects)
    - [Crossplane](#crossplane)
      - [Report breaking changes in CustomResourceDefinition schemas for Pull Requests](#report-breaking-changes-in-customresourcedefinition-schemas-for-pull-requests)
      - [Document and add automated testing for pulling packages from private registries](#document-and-add-automated-testing-for-pulling-packages-from-private-registries)
    - [Karmada](#karmada)
      - [Cluster Resource modeling](#cluster-resource-modeling)
      - [Develop Override policy, Resource Binding, Work Page](#develop-override-policy-resource-binding-work-page)
      - [Develop Propagation policy, Settings, About Pages](#develop-propagation-policy-settings-about-pages)
      - [Design & Develop FederatedResourceQuota, SearchRegistry & MultiClusterIngress page](#design--develop-federatedresourcequota-searchregistry--multiclusteringress-page)
    - [Tremor](#tremor)
      - [Pluggable logging](#pluggable-logging)
      - [Hygenic error handling and validation for pipelines](#hygenic-error-handling-and-validation-for-pipelines)
    - [Volcano](#volcano)
      - [Official Website Docs Enhancement](#official-website-docs-enhancement)
      - [Volcano scalability enhancement](#volcano-scalability-enhancement)
    - [KubeArmor](#kubearmor)
      - [Supporting KubeArmor on ARM platforms](#supporting-kubearmor-on-arm-platforms)
      - [Support for OpenShift](#support-for-openshift)
      - [Extend kArmor to include KubeArmor configuration](#extend-karmor-to-include-kubearmor-configuration)
    - [Thanos](#thanos)
      - [Implement Unified Endpoint Discovery](#implement-unified-endpoint-discovery)
    - [WasmEdge](#wasmedge)
      - [Create a Tokio-like async runtime in WasmEdge](#create-a-tokio-like-async-runtime-in-wasmedge)
      - [Provide a wasm-compatible Rust TLS implementation](#provide-a-wasm-compatible-rust-tls-implementation)
      - [Support Durable Objects (DO) in WasmEdge](#support-durable-objects-do-in-wasmedge)
      - [Implement component-model proposal in WasmEdge](#implement-component-model-proposal-in-wasmedge)
    - [Kyverno](#kyverno)
      - [Integrate Kubernetes Pod Security with Kyverno](#integrate-kubernetes-pod-security-with-kyverno)
      - [Kyverno SLSA 3](#kyverno-slsa-3)
      - [CLI test schema and enhancements](#cli-test-schema-and-enhancements)
    - [OpenFunction](#openfunction)
      - [Support and update the Python Functions Framework](#support-and-update-the-python-functions-framework)
    - [OpenELB](#openelb)
      - [Support BGP policy in OpenELB](#support-bgp-policy-in-openelb)
      - [Provide the OpenELB Web UI for managing EIP and IP pool](#provide-the-openelb-web-ui-for-managing-eip-and-ip-pool)
    - [Meshery](#meshery)
      - [Cloud Native Playground](#cloud-native-playground)
      - [Design Configurator](#design-configurator)
    - [Service Mesh Performance](#service-mesh-performance)
      - [Implementation of MeshMark](#implementation-of-meshmark)
    - [Devfile](#devfile)
      - [Add Compose file support in the spec API](#add-compose-file-support-in-the-spec-api)
      - [Add some syntax sugar to speficy the components that are deployed at startup and those that are not](#add-some-syntax-sugar-to-speficy-the-components-that-are-deployed-at-startup-and-those-that-are-not)
    - [Cluster API Provider GCP](#cluster-api-provider-gcp)
      - [Add GPU Support](#add-gpu-support)
    - [Vitess](#vitess)
      - [Add complete parsing support for Spatial MySQL functions](#add-complete-parsing-support-for-spatial-mysql-functions)

# Q2

Status: Accepting applications

## Timeline

**Note, this has been updated**

### Summer Term: June 6th - August 31st

- mentorships available on LFX Mentorship: May 8th, 2021 (no change, existing proposals still available for application)
- **proposals cutoff May 24th**
- applications open: May 9th - **May 29th**
- application review/admission decisions/HR paperwork: **May 31st - June 3rd**

### Mentorship duration - three months (**11 weeks** - full-time schedule)

- **June 6 (Week 1)**: Mentorship program begins with the initial work assignments
- July 15 (**End of Week 5**): Midterm mentee evaluations and first stipend payments
- August 31 (**End of Week 11**): Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals

---

## Accepted Projects

### Crossplane

#### Report breaking changes in CustomResourceDefinition schemas for Pull Requests

- Description: As Crossplane ecosystem expands, it's not unusual anymore to have 100s of `CustomResourceDefinition`s in a provider. A big part of this is thanks to code generation tooling we've been building. However, the changes we make with those tools may result in thousands of lines of changes and it's hard to tell whether there is a breaking change in given `CustomResourceDefinition` in those PRs. Today, we're checking manually to see if there is a breaking change and mark the PR as such so that the notice ends up in the release notes. We can have a GH Action that processes diff in `package/crds` folder and report breaking changes in the OpenAPI v3 Schemas of CRDs. It'd comment on the PR and automatically label it with `breaking-change`. This tool would be useful for the whole Kubernetes community that works to extend Kubernetes with `CustomResourceDefinition`s. We should document the variety of ways to pull packages from popular private registries, and also have testing in place to ensure we don't break any of the mechanisms from release to release.
- Recommended Skills: golang
- Mentor(s): Muvaffak Onus (@muvaf), Jared Watts (@jbw976)
- Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/2863
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/06fe8a5b-c3b9-4d12-975f-19f5ec49d006

#### Document and add automated testing for pulling packages from private registries

- Description: Crossplane supports pulling packages from private registries through a variety of mechanisms, including [IRSA](https://aws.amazon.com/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts/), [Workload Identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), and [`packagePullSecrets`](https://doc.crds.dev/github.com/crossplane/crossplane/pkg.crossplane.io/Provider/v1@v1.6.3#spec-packagePullSecrets). There are a wide variety of environments in which a user is pulling a private package, which can lead to confusion about which to use, the precedence with which each is invoked, etc. This can lead to issues such as https://github.com/crossplane/crossplane/issues/2876, where I suspect that we are resolving to [Application Default Credentials](https://cloud.google.com/docs/authentication/production#auth-cloud-implicit-go), when we actually want to be using the provided `packagePullSecret`.
- Recommended Skills: golang
- Mentor(s): Daniel Mangum (@hasheddan), Jared Watts (@jbw976)
- Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/2913
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c6e63427-09d9-42e5-b2af-c9c66e57881a

### Karmada

#### Cluster Resource modeling

- Description: In the scheduling progress, the `karmada-scheduler` makes decisions as per a bunch of factors, one of the factors is the resource details of the cluster. We don't want to collect and store each node's resources in detail(That's a burden for Karmada to maintain the information), but we want to build a resource model for each cluster.
- Recommended Skills: golang, k8s, algorithm
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): https://github.com/karmada-io/karmada/issues/772
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2b3edea5-1f6a-4f6b-a80a-38f5be4ec339

#### Develop Override policy, Resource Binding, Work Page

- Description: These pages on the web dashboard will help to perform different operations for Override policies, Resource Binding in karmada.
- Recommended Skills: Front-end development, Reactjs, Redux, Figma
- Mentor(s): Hongcai Ren (@RainbowMango), Chinmay Mehta (@chinmaym07)
- Upstream Issue (URL): https://github.com/karmada-io/dashboard/issues/15
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bcccd290-87c5-4ad1-9360-e6041d51521c

#### Develop Propagation policy, Settings, About Pages

- Description: Propogation Policy page on the web dashboard will help to perform different operations for Propagation policies in karmada, Settings page will help the user to modify the dashboard according to their needs.
- Recommended Skills: Front-end development, Reactjs, Redux, Figma
- Mentor(s): Hongcai Ren (@RainbowMango), Chinmay Mehta (@chinmaym07)
- Upstream Issue (URL): https://github.com/karmada-io/dashboard/issues/16
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/25122df1-5e92-4d63-9ccc-b0c068237e00

#### Design & Develop FederatedResourceQuota, SearchRegistry & MultiClusterIngress page

- Description:
More pages need to be designed & added to the dashboard which are required to make great use of the functionalities of the karmada project using the web ui client.
- Recommended Skills: Front-end development, Reactjs, Redux, Figma
- Mentor(s): Hongcai Ren (@RainbowMango), Chinmay Mehta (@chinmaym07)
- Upstream Issue (URL): https://github.com/karmada-io/dashboard/issues/17
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4c4ccc69-8a71-4f5e-913f-c3c79f9af9a4

### Tremor

#### Pluggable logging
- Description:  Tremor is an event processing system that can - among other things - process logs and metrics. Currently, Tremor uses log4rs to handle its own logging. We would like tremor to have a facility to handle its logs through its own pipelines (similar to the pluggable metrics experience). A starting point could be a sink for log4rs, which could then be replaced completely, making log4rs an optional output.
- Recommended Skills: Rust, Testing
- Mentor(s): Ramona Łuczkiewicz (@agares), Darach Ennis (@darach)
- Upstream Issue: https://github.com/tremor-rs/tremor-runtime/issues/1621
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1218d516-45af-46a3-977b-e5a9de818cec

#### Hygenic error handling and validation for pipelines
- Description: Tremor uses its own language for pluggable user defined functionality. The language interconnects internal operators via the `connect` statement and the `select` statement. Currently, neither `select` nor `connect` verifies that the operator port of the receiving or the sending part is correct ( exists, and is an expected type ) - this can lead to silent or confusing errors. User experience is super important to tremor, so that is a solution state we’re not happy with. The goal of this mentorship is to add validation and provide targeted hygienic errors to users that are trivial to diagnose and resolve as this will massively improve user experience.
- Recommended Skills: Rust, Programming Language Design
- Mentor(s): Matthias Wahl (@mfelsche), Heinz N. Gies (@Licenser)
- Upstream Issue: https://github.com/tremor-rs/tremor-runtime/issues/1358
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b503dac3-3b2f-49c5-be17-1d95404ef0a9

### Volcano

#### Official Website Docs Enhancement

- Description: Official website docs has not been updated for a long time including technology docs, talks, best practice and so on, which bothers users and developers a lot.
- Recommended Skills: Kubernetes, golang, technical writing, English, Chinese
- Mentor(s): Lei Wu (@Thor-wl)
- Upstream Issue: <https://github.com/volcano-sh/website/issues/209>
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d5a09dfc-c4cc-4733-8c4c-ff3aab2e3688

#### Volcano scalability enhancement

- Description: In order to have a better support of other AI/HPC platforms and GPU, it is necessary to enhance the integration with third-party operators and GPU support.
- Recommended Skills: Kubernetes, golang
- Mentor(s): Liang Tang (@shinytang6)
- Upstream Issue: <https://github.com/volcano-sh/volcano/issues/2211>
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8d1c8ff1-24da-4839-9072-3a6070eeb482


### KubeArmor

#### Supporting KubeArmor on ARM platforms

-   Description: KubeArmor has garnered interests from edge computing platforms (such as LF Edge OpenHorizon) that leverages k8s control plane for workload orchestration. The primary requirement is to support ARM platforms that are prevalent on the edge devices (especially Raspberry PI). KubeArmor leverages eBPF for observability and Linux Security Modules (such as AppArmor) for policy enforcement. One of the challenges is to check if the eBPF primitives such as observing kprobe, kretprobe, tracepoints that are typically available on the x86 platform are also available on the ARM platform and check if the parameter list fulfills the requirement. Post this analysis, the KubeArmor code might have to be changed to accommodate any differences in the eBPF behavior.
-   Recommended Skills: golang, raspberry-pi, ebpf, k8s
-   Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
-   Upstream Issue (URL):[  kubearmor/KubeArmor#614](https://github.com/kubearmor/KubeArmor/issues/614)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a91eab39-88b3-4a42-82bf-2bd963772acb

#### Support for OpenShift

-   Description: KubeArmor is a cloud-native runtime security enforcement system that restricts the behavior (such as process execution, file access, and networking operation) of containers and nodes (VMs) at the system level.
This project aims to support KubeArmor on OpenShift. The work will include compatibility analysis of KubeArmor on OpenShift, finding limitations (if any), and eventually testing it on OpenShift.
-   Recommended Skills: OpenShift, k8s
-   Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
-   Upstream Issue (URL): [kubearmor/KubeArmor/#221](https://github.com/kubearmor/KubeArmor/issues/221)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/af03f76c-6253-4efc-b26b-17c522794813

#### Extend kArmor to include KubeArmor configuration

-   Description: KubeArmor is a cloud-native runtime security enforcement system that restricts the behavior (such as process execution, file access, and networking operation) of containers and nodes (VMs) at the system level. kArmor is a KubeArmor CLI tool that connects to the kubearmor-relay service to provide command-line telemetry and observability data.
The project aims to extend KubeArmor CLI-tool kArmor to check KubeArmor configurations in the running environment. This feature will provide various information about KubeArmor like the current running mode (audit or enforcement), the enforcer used by KubeArmor (SELinux or AppArmor or BPF-LSM), whether it's running in systemd mode or on k8s, etc.
-   Recommended Skills: go, k8s
-   Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
-   Upstream Issue (URL): [kubearmor/kubearmor-client/#19](https://github.com/kubearmor/kubearmor-client/issues/19#issue-1048413733)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/65cabd48-6a5a-4eb6-9e80-4420c152da6a

### Thanos

#### Implement Unified Endpoint Discovery

Description: Thanos Querier microservice is one of the core component of the Thanos system responsible for asking relevent data stores for metrics, labels, metadata, exemplars, targets, alerts and more and merging their results. One of the key challenges to Querier configuration is telling which endpoints it should talk to and what APIs it should expect. For this we proposed the [Unified Endoint Discovery](https://thanos.io/tip/proposals-accepted/202101-endpoint-discovery.md/) idea, which allows consistency and easy to use configuration across all APIs. This project is meant to continue the implementation of this proposal and make sure it works well for all the edge cases using our e2e testing framework.
Recommended Skills: Go, DNS
Mentor(s): Bartlomiej Plotka (@bwplotka), Saswata Mukherjee (@saswatamcode)
Upstream Issue: https://github.com/thanos-io/thanos/issues/5340
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0afef0c2-6ad0-41f1-8c56-10a52afe87b7

### WasmEdge

#### Create a Tokio-like async runtime in WasmEdge

- Description: One of the most important features of WasmEdge is its support for [non-blocking network sockets](https://wasmedge.org/book/en/dev/rust/networking-nonblocking.html). However, the current WasmEdge API for async networking is still cumbersome. Rust developers would prefer to use a Tokio-like async / await API for such tasks. But Tokio is multi-threaded and cannot run correctly in standard single-threaded WebAssembly. Yet, it is possible to [provide a single-threaded Tokio runtime](https://stackoverflow.com/questions/61763072/is-there-a-way-to-use-tokiomain-with-a-single-threaded-runtime-in-tokio-0-2). Our goal is to create a WebAssembly compatible Tokio scheduler.
- Recommended Skills: Rust, tokio, wasm
- Mentor(s): juntao(@juntao)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/1429
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/666271e6-7bdf-4050-a2a2-3adaac5a7c13

#### Provide a wasm-compatible Rust TLS implementation

- Description: The WasmEdge networking socket API provides support for TCP and HTTP connections. But many web services today require HTTPS connections. That means we need to support TLS in WasmEdge. The [Rustls](https://github.com/rustls/rustls) crate is the most popular TLS implementation in Rust. However, Rustls is based on the Ring library, which cannot be compiled into WebAssembly. In WasmEdge, we now [support](https://github.com/WasmEdge/WasmEdge/issues/345) the [wasi-crypto spec](https://github.com/WebAssembly/wasi-crypto). That allows us to compile the [rust-crypto](https://crates.io/crates/crypto) library into WebAssembly and run on WasmEdge. The goal of this project is to create a Rust TLS implementation based on rust-crypto.
- Recommended Skills: Rust, wasm, crypto
- Mentor(s): juntao(@juntao), WenShuo Yang(@sonder-joker)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/1430
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/fca1338f-5be0-41e6-a499-b44e2e722096

#### Support Durable Objects (DO) in WasmEdge

- Description: Durable Objects (DO) are persistent data objects available to applications at runtime. They can be stored in a persistent KV store or a data cache. [DOs are important for stateful serverless functions](https://blog.cloudflare.com/introducing-workers-durable-objects/). The [Anna KVS](https://github.com/hydro-project/anna) project developed by UC Berkeley is an autoscaling KVS ideally suited for edge nodes. It is a good match for WasmEdge to support stateful serverless functions on the edge cloud. The goal of this task is to create Rust and JavaScript clients for Anna KVS using the WasmEdge socket API. It allows Rust-based WasmEdge applications to connect to Anna KVS, and store or retrieve DOs in the KVS. _Note_: A new Rust-based version of Anna KVS is going to be released soon. We will likely use the new version for this task. The network socket API for accessing the KVS will remain largely unchanged from the old version.
- Recommended Skills: Anna KVS, Rust, wasm, JavaScript, Database
- Mentor(s): juntao(@juntao)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/1431
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/232a19f2-40de-4dfa-8966-2c1586bc6ecc

#### Implement component-model proposal in WasmEdge

- Description: The [component-model](https://github.com/WebAssembly/component-model) proposal merges and supersedes the [Module Linking](https://github.com/WebAssembly/module-linking/) and [Interface Types](https://github.com/WebAssembly/interface-types) proposals. With this feature, WasmEdge can execute multiple modules wasm with Module Linking and and more flexible types with Interface Type.
- Recommended Skills: C++, wasm
- Mentor(s): Hung-Ying Tai(@hydai), Yi-Ying He (@q82419)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/1433
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5def28a6-3ec2-4ba3-b56f-403a03a2b9ef

### Kyverno

#### Integrate Kubernetes Pod Security with Kyverno

- Description: Integrate Kubernetes Pod Security with Kyverno for finer grained controls.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/3830
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d145fd38-b533-49a8-9b02-60220f9f618c

#### Kyverno SLSA 3

- Description: Implement software supply chain security best practices to achieve SLSA Level 3 compliance (https://slsa.dev/). This includes generation of build provenance data for Kyverno.   [Kyverno - SLSA](https://docs.google.com/presentation/d/1jWbSVyQkMn1VdXfg7kW1dYmk8fgcvzBfZ-4ZCAaVOLs/edit#slide=id.g35f391192_00).
- Recommended Skills: Security, CI/CD, Golang
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/3119
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/457cabc9-90d3-4519-bfad-92966501dbd4

#### CLI test schema and enhancements

- Description: The Kyverno CLI does not have a formalized schema with proper validation for its `test` command. Create a formal schema which is documented allowing for full validation and related other capabilities which enhance its usage.
- Recommended Skills: Golang
- Mentor(s): Vyankatesh Kudtarkar, Chip Zoller,
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/2323
  - https://github.com/kyverno/kyverno/issues/2315
  - https://github.com/kyverno/kyverno/issues/2302
  - https://github.com/kyverno/kyverno/issues/2857
  - https://github.com/kyverno/kyverno/issues/2945
  - https://github.com/kyverno/kyverno/issues/3271
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0e385057-2c8f-48b2-8ff9-b4244870c10c

### OpenFunction

#### Support and update the Python Functions Framework

- Description: [OpenFunction](https://github.com/OpenFunction/OpenFunction) is a cloud-native open source FaaS (Function as a Service) platform. [OpenFunction 0.6.0](https://openfunction.dev/blog/2022/03/25/announcing-openfunction-0.6.0-faas-observability-http-trigger-and-more/) brings notable features including function plugin, distributed tracing for functions, control autoscaling behavior, HTTP trigger to async function, etc. Meanwhile, the asynchronous runtime definition has also been refactored. The core API has been upgraded from `v1alpha1` to `v1beta1`. So far, the Go Function Framework fully supports the latest features of OpenFunction 0.6.0. We hope the Python Functions Framework could also be applicable in OpenFunction 0.6.0.
- Recommended Skills: Python, Kubernetes, OpenFunction
- Mentor(s): [Kehui Li](https://github.com/kehuili), [Haili Zhang](https://github.com/webup), [Feynman Zhou](https://github.com/feynmanzhou)
- Upstream Issue: https://github.com/OpenFunction/functions-framework/issues/18
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0c5cecb1-3de8-435a-acdf-7adfcbd759d3

### OpenELB

#### Support BGP policy in OpenELB

- Description: OpenELB is an open-source load balancer implementation designed for exposing the LoadBalancer type of Kubernetes services in bare metal, edge, and virtualization environments. Currently, OpenELB supports the BGP protocol. However, the BGP policy is not fully supported in OpenELB. Therefore, based on the BGP protocol, OpenELB is supposed to support the BGP policy to enable leveraging the GoBGP policy feature for controlling the route advertisement.
- Recommended Skills: Golang, Kubernetes, Helm, Docker
- Mentor(s): [Chauncey Jiang](https://github.com/chaunceyjiang/)，[Yunkang Ren](https://github.com/renyunkang), [Feynman Zhou](https://github.com/feynmanzhou)
- Upstream Issue: https://github.com/openelb/openelb/issues/267
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b97a815b-6900-4a3e-a4af-7460551f933c

#### Provide the OpenELB Web UI for managing EIP and IP pool

- Description: OpenELB is an open-source load balancer implementation designed for exposing the LoadBalancer type of Kubernetes services in bare metal, edge, and virtualization environments. Currently, Currently, the allocation of OpenELB EIP pool and EIP can only be viewed and managed using command in the terminal. We hope to provide a simple web console to make OpenELB much developer-friendly. Users could manage EIP pool and EIP resources using web UI.
- Recommended Skills: Javascript, HTML, Docker, Kubernetes
- Mentor(s): [Yunkang Ren](https://github.com/renyunkang), [Changjiang Li](https://github.com/weili520), [Feynman Zhou](https://github.com/feynmanzhou)
- Upstream Issue: https://github.com/openelb/openelb/issues/244
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/947885e1-6b32-4b3c-85cb-955cb617237e

### Meshery

#### Cloud Native Playground

- Description: Hosted at play.meshery.io, build a unique learning environment for learning modern application networking through Meshery's support of every service mesh, orchestration of Kubernetes, and integration with many other CNCF projects. Meshery's genesis is that of helping teach people about service mesh technology and enabling to operate this type of cloud native infrastructure confidently. The proposed project is aimed at furthering this mission with interactive API documentation connected to a cloud native playground (a running instance of Meshery).
- Recommended Skills: Golang, ReactJS
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Aditya Chatterjee](https://github.com/warunicorn19)
- Issue: <https://github.com/meshery/play/issues/16>
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bb6cf95e-bbdc-4b50-8446-45507c9e5a6a

#### Design Configurator

- Description: Integrate a new user experience into Meshery: a cloud native design configurator. This project involves presentation of Kuberenetes core resources and any custom resource (CRD) as a configurable component in a React-based user interface in which users design (in great detail) and deploy their cloud native infrastructure. Interns will familiarize with concepts of content lifecycle management.
- Recommended Skills: ReactJS, OpenAPI, JSON Schema.
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Ashish Tiwari](https://github.com/revolyssup)
- Issue: <https://github.com/meshery/meshery/issues/5504>
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cf4de999-41a9-4769-a298-d7d4b208ab3d

### Service Mesh Performance

#### Implementation of MeshMark

- Description: MeshMark functions as a service mesh performance index (a scale) to provide people the ability to weigh the value of their service mesh versus the overhead of their service mesh and assess whether they are getting out of the mesh what they are “paying” for in it. Implementation of this new performance index involves integration with Meshery, Prometheus, and more.
- Recommended Skills\*\*: Golang, ReactJS, GitHub Actions
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Abhishek Kumar](https://github.com/Abhishek-kumar09)
- Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/325
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cf992af8-6102-4c2d-8394-c3462112e39f

### Devfile

#### Add Compose file support in the spec API

- Description: Devfiles are YAML files that define development environment running in the cloud. The main part of a Devfile is the components section and specify the containers required to code, build and test an application. The Devfile can either include those containers defintions or reference external files such as Dockerfiles or Kubernetes manifests. [The Compose file](https://github.com/compose-spec/compose-spec/blob/master/spec.md) is a popular format in open source development projects to define runtime environments for testing the application but those cannot be referenced by a Devfile yet. The goal is to update the API specification to allow referencing a Compose file from a Devfile and to implement the support in the Devfile library.
- Expected outcome: Create a PR against https://github.com/devfile/api to update the spec with the support for Compose files and a PR against https://github.com/devfile/libary to implement it using (the use of an external library such as [kompose](https://github.com/kubernetes/kompose) is recommended). As a stretch goal, implement Compose file support for the DevWorkspace Kubernetes operator too.
- Expected size of the project: 350h
- Difficulty rating: Medium
- Recommended Skills: Golang, Compose, Kubernetes
- Mentor(s): Mario Loriedo (@l0rd)
- Upstream Issue (URL): https://github.com/devfile/api/issues/501
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ef552046-cf54-4fe1-ac31-0a1014210e15

#### Add some syntax sugar to speficy the components that are deployed at startup and those that are not

- Description: Devfiles are YAML files that define development environment running in the cloud. The main part of a Devfile is the components section and specify the containers required to code, build and test an application. Some components, such as those to code and build the application, need to be deployed as soon as development environment is provisioned. Others instead are supposed to be started later, usually when a command is triggered by the developer to test the applicaiton she is working on (a database for example). The current definition of the latter type of coponents is complicated and not self explanatory. The goal of this project is to add a new component field to specify if the component should be included at startup or not.
- Expected outcome: Create a PR against https://github.com/devfile/api to update the component spec and a PR against https://github.com/devfile/library to implement it using. As a stretch goal, implement the support for the new field for the DevWorkspace Kubernetes operator too.
- Expected size of the project: 350h
- Difficulty rating: Medium
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Mario Loriedo (@l0rd)
- Upstream Issue (URL): https://github.com/devfile/api/issues/852
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3feec75a-3d80-476a-83ab-89ee90f48aad

### Cluster API Provider GCP

#### Add GPU Support

- Description: Cluster API Provider GCP (a.k.a. CAPG) enables the creation of Kubernetes clusters in GCP with Cluster API. Currently the clusters it creates do not support running workloads in them that take advantage of GPUs and so this rules out things like highly performant machine learning and computational heavy work workloads. We want to enhance CAPG so that it supports GPUs so that users can run these type of workloads. This will require creating a proposal for the change (i.e. design work) and then implementing the propsal which may include changes to the api/controllers, base images and driver installation.
- Expected outcome: This work will enable CAPG to support the creation of Kubernetes clusters where workfloads can take advantage of GPUs.
- Difficulty rating: Medium
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Carlos Panato (@cpanato), Davanum Srinivas (@dims), Richard Case (@richardcase)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/cluster-api-provider-gcp/issues/289
- LFX URL: [https://mentorship.lfx.linuxfoundation.org/project/e799bb33-a695-420b-af32-e596938c6960](https://mentorship.lfx.linuxfoundation.org/project/e799bb33-a695-420b-af32-e596938c6960)

### Vitess

#### Add complete parsing support for Spatial MySQL functions

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of spatial MySQL functions are not parsed correctly and result in syntax errors. The task of the mentee would be to add parsing support for such functions and features which can be found at https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): Manan Gupta (@GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/75533c12-1487-40b0-858c-42babeabf782
