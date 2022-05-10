- [Q2](#q2)
  - [Timeline](#timeline)
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

# Q2

Status: Accepting applications

## Timeline

**Summer Term: June 1st - August 31st**

- mentorships available on LFX Mentorship: May 8th, 2022
- applications open: May 9th - May 24th (2 weeks)
- application review/admission decisions/HR paperwork: May 25th - May 31st

Mentorship duration - three months \(12 weeks - full-time schedule\)

- June 1 (Week 1): Mentorship program begins with the initial work assignments
- July 15 (End of Week 6): Midterm mentee evaluations and first stipend payments
- August 31 (End of Week 12): Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals

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
