# Term 01 - 2023 March - May

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

| activity | date |
| --- | --- |   
| project proposals | January 16 - 31, 5:00 PM PDT |
| mentee applications open | February 1 - 14, 5:00 PM PDT |
| application review/admission decisions/HR paperwork | February 15 - 28, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | March 1 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | April 5 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | May 17, 5:00 PM PST (Week 12) |
| Last day of term | May 26 |


### Project Instructions

Project proposals open Jan 16th, 2023.

Once opened, Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/lfx-mentorship/2023/01-Mar-May/project_ideas.md, by January 31, 2023.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/lfx-mentorship/README.md#program-guidelines) page.

## Accepted Projects

### Cilium

#### Website Use Cases pages

- Description: Cilium would like to have use case pages built out on its website to make it easy for people to find the information and relevant content to the problems they are trying to solve with Cilium.
- Expected Outcome: The mentee will read through relevant docs, blogs, case studies, user stories, and labs to understand the use cases which will drive the content for each of the pages being built. The finished product will be a new use cases section on the Cilium website.
- Recommended Skills: Content Writing, Javascript, CSS
- Mentor(s): Bill Mulligan (@xmulligan, bill@isovalent.com) 
- Upstream Issue: https://github.com/cilium/cilium.io/issues/226
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/81a0e506-1c05-45fa-90c4-6bde8bdc0e61


### Cloud Native Buildpacks

#### Pack Performance enhancements

- Description: Pack is the reference implementation of a Cloud Native Buildpacks platform used to build application images in multiple organizations. Because all developers want their code to build and deploy as quickly as possible, small speedups in pack can have significant benefits, and slow-downs in pack are undesirable. Today, pack has no benchmark suite that would safe-guard against regressions in execution speed.
- Expected Outcome: The mentee will create a benchmark suite around some critical path sections identified with help from maintainers. The mentee will be supported in applying profiling tools to identify possible speedups, hopefully leading to at least one user-facing performance improvement.
- Recommended Skills: Golang, git, software development.  (Mentee does not need prior experience in profiling or performance tuning)
- Mentor(s): Natalie Arellano (@natalieparellano, narellano@vmware.com); Joe Kimmel (@joe-kimmel-vmw, jkimmel@vmware.com) 
- Upstream Issue: https://github.com/buildpacks/pack/issues/1610
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/33e0747c-4ab8-4074-aa90-3b908b3a588e


#### Multi-Architecture Builds Support

- Description: The rise of ARM processors has created new binary targets for pre-compiled executables. Additionally, there are tales of widespread use of operating systems that aren't linux? In the ideal case a `pack` user could create a build for an abritrary architecture and operating system, regardless of the host system they used to run the command.
- Expected outcome: Improved multi-architecture (including ARM) and multi-os "cross-compilation" support in [pack](https://github.com/buildpacks/pack/)
- Recommended Skills: Golang, software development literacy. Familiarity with buildpacks will be helpful.
- Mentor(s): Aidan Delaney (@AidanDelaney); Jerico Pena (@jpena-r7); Juan Bustamante (jbustamante@vmware.com, @jjbustamante)
- Expected project size: 350 Hours
- Difficulty: Medium
- Upstream Issue (URL): https://github.com/buildpacks/pack/issues/1459 and https://github.com/buildpacks/pack/issues/1460
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ee387e1b-de4e-4c1e-9bef-0239a2e9ca40


### Kubescape

#### Implement security controls based on penetration testing best practices

- Description: Kubescape covers different hardening guidelines around Kubernetes: NSA-CISA, MITRE and CIS. Detection capabilities of potential security issues could be even more enriched by researching pen-testing tools and practices regarding Kubernetes and implementing these as controls. An example pen-test writeup is https://hacktricks.boitatech.com.br/pentesting/pentesting-kubernetes. This and others could help define a set of “offensive” controls to complement the “defensive” controls we have today.
- Expected Outcome: ~10 controls for detecting challenges that would commonly be found in a cluster penetration test. Documentation on how they were selected and how to use them.
- Recommended Skills: Cybersecurity, Rego 
- Mentor(s): Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1072
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/db63c23a-2b41-40e0-a833-cf0e2c33c739

#### Build debugging capabilities for Helm

- Description: The Go standard templating package (`text/template`) is the base on which Helm templates are built. We wish to be able to backtrack lines and fields in objects after rendering Helm charts. This would help users of Helm to be able to understand quickly where different security issues in the final object are coming from in the source. To do this, the `text/template` package should be extended to include debug markers that point from the output lines to the input lines. 
- Expected Outcome: Propose and implement an extension to the Go package which solves this.
- Recommended Skills: Go
- Mentor(s): Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/helm/helm/issues/11552
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/570b1bba-206d-47ac-9667-22268ff7a6d9

#### Release engineering: add Kubescape to commonly-requested package managers

- Description: The Kubescape client binary is built from GitHub using standard patterns. Support for homebrew and krew exists, but users have requested RPM and DEB packages. In this project you will stabilize the delivery of new builds to existing package managers, and implement support for RPM and DEB packages using GitHub Actions.
- Expected Outcome: When a new Kubescape version is released, it is available in homebrew, krew, RPM and DEB repositories.
- Recommended Skills: Release management, scripting
- Mentor(s): Craig Box (@craigbox, craigb@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/400
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/138e9cac-ec86-43cb-a04f-c2980e3c2865


### KubeVela

#### Extend the capability of KubeVela by making several useful addons

- Description: KubeVela currently have a variety of addons , including experimental options, that address scenarios such as Continual Delivery and observability. To further enhance the out-of-box functionality for users of KubeVela, we can offer additional useful addons.
- Expected Outcome: 10+ eperimetal addons, clear documentation should be provided for enabling and using these addons, including examples of useful use-cases.
- Recommended Skills: golang, kubernetes, cueLang
- Mentor(s): Jianbo Sun (@wonderflow, wonderflow.sun@gmail.com), Wong Yike (@wangyikewxgm, wangyike_wyk@163.com) 
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5358
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/51398c19-87c2-4b50-9dd3-760fbd820688

#### Support auto generation of CUE schema and docs from Go struct

- Description: In KubeVela's provider system, we can use our defined Go functions in CUE schema. The Go providers usually have a parameter and return. Fields in Go providers are the same as fields in CUE schema, so it is possible and important to support automatic generation of CUE schemas and documents from Go structs.
- Expected Outcome: Auto-generators of CUE schemas and docs from Go structs, the capabilities should be wrapped in vela cli command.
- Recommended Skills: Go, CUE
- Mentor(s): Fog Dong (@FogDong, wuwuglu19@gmail.com), Da Yin(@Somefive, yd219913@alibaba-inc.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5364
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/85f61cae-02d7-4931-8d87-d3da3128060e

#### Support auto generation of multiple languages SDK from CUE

- Description: In KubeVela, we use CUElang to code the definition. We want to support auto generation of multiple languages SDK from CUE, so that users can use KubeVela in their own language.
- Expected Outcome: Support auto generation of multiple languages SDK from CUE, including Golang, Java, Python, etc. The capabilities should be wrapped in vela cli command.
- Recommended Skills: Go, Kubernetes, CUE
- Mentor(s): Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com) Zeng Qingguo (@barnettZQG, barnett.zqg@gmail.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5365
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2981c1de-49af-4bd8-b87d-02e455a96ee1


### Kyverno

#### Pod Security Admission Integrations

- Description: Integrate Kubernetes Pod Security with Kyverno - Part II
- Expected Outcome: PR sent to kubernetes/kubernetes containing necessary changes to implement the behavior on the Kyverno side.
- Recommended Skills: Golang, Kubernetes, Pod Security
- Mentor(s): Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/6144
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/59afc794-c33e-4930-a5b8-eb3abd8d9896

#### Kubernetes Validating Admission Policy Support

- Description: Kubernetes Validating Admission Policy Support
- Expected Outcome: Kyverno support for ValidatingAdmissionPolicy in one of the identified proposals.
- Recommended Skills: Golang, Kubernetes, Admission Controls
- Mentor(s): Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/5441
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a00294be-06a0-4e66-a2a5-6e2dfb3a097c

#### OCI references support

- Description: Use OCI References in image verification
- Expected Outcome: PR sent to kyverno/kyverno implementing support for OCI references in verifyImages rules
- Recommended Skills: Golang, Kubernetes, OCI images
- Mentor(s): Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/6142
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e5da551f-8a3d-42ec-8c00-e9ae10a86aa2

#### Artifact Hub listing of Kyverno Policy Library

- Description: Develop a system to reflect all Kyverno Policies in the community library on Artifact Hub
- Expected Outcome: All Kyverno policies searchable on Artifact Hub with an extensible system for future use
- Recommended Skills: Golang, Artifact Hub, DevOps Automation, GitHub Actions
- Mentor(s): Chip Zoller (@chipzoller, chipzoller@gmail.com)
- Upstream Issue: https://github.com/kyverno/policies/issues/491
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f502b839-a804-4a6c-8da5-3985ce25883e


### Vitess

#### Implement a benchmarking and load testing framework for the VReplication module in Vitess
- Description: Vitess is a distributed database system built around MySQL. VReplication is core technology built into Vitess that is used to enable many features like vertical and horizontal sharding, change data capture and materialized views. The project involves designing and implementing a customizable framework that enables us to test different VReplication workflows at scale and to obtain benchmarks that can be used to monitor performance improvements and regression from code changes. The framework will consist of a custom DSL (Domain Specific Language) which will be used to define each test case and a driver which will read the DSLs and execute the tests. The DSL will be based on the Hashicorp Configuration Language (https://github.com/hashicorp/hcl). The driver will be written in Golang and target AWS using Terraform for provisioning and Ansible for automation. The results and benchmarks will be stored in PlanetScale (https://planetscale.com/) in the existing vitess benchmark database.
- Expected Outcome: The test framework with at least one working test and stored benchmark metrics for a MoveTables workflow.
- Recommended Skills: golang
- Mentor: Rohit Nayak (@rohit-nayak-ps, rohit@planetscale.com) 
- Upstream Issue: https://github.com/vitessio/vitess/issues/12136
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b903d812-c3ff-47bf-8626-0b9274fec742

#### Add complete parsing support for Spatial MySQL functions
- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of spatial MySQL functions are not parsed correctly and result in syntax errors. The task of the mentee would be to add parsing support for such functions and features which can be found at https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): [Manan Gupta](https://github.com/GuptaManan100) (manan@planetscale.com)
- Upstraeam Issue: https://github.com/vitessio/vitess/issues/8604
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d338ee93-e767-4f44-a0ea-02dbf803a55a


### LitmusChaos

#### Improve code quality and add unit tests of litmus chaos components
- Description:  [LitmusChaos](https://litmuschaos.io) is an open-source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. This project aims to improve the code quality of the golang components of litmus chaos and refactor the codebase for adding the unit test cases.
- Expected Outcome: This will help the project to improve code quality, enhance the unit test suite, and identification of weaknesses
- Recommended Skills: Golang, Kubernetes
- Mentor: Amit Kumar Das (@amityt, amit.das@harness.io)  Sayan Mondal (@S-ayanide, sayan.mondal@harness.io)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/3892
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a222f58a-08ee-4727-80c8-41c4d6f5a2a9


### Thanos

#### Add query observability for new promql engine
- Description: The new [Thanos Promql Engine](https://github.com/thanos-community/promql-engine) lacks observability down to operator level and we don't have a way to track each operator's performance. This project aims to extend the `Explain` method of each operator, and return an operator tree with time taken recorded. Then Thanos Query UI could then visualize the operator trace.
- Expected Outcome: Add a button in Query UI that when enabled will show query tree + how much time has been spent in each operator
- Recommended Skills: Golang, React
- Mentor: Giedrius Statkevičius (@GiedriusS, giedriuswork@gmail.com), Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-community/promql-engine/issues/106
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a0958ddf-1fd6-4c8e-887f-adb28639a9f4

#### Series Cardinality API
- Description: Prometheus has a TSDB stats API https://prometheus.io/docs/prometheus/latest/querying/api/#tsdb-stats which contains information about series cardinality and the API is supported by Thanos. However, it can only return 10 results per stats, which is not flexible to track the arbitrary metrics. This project aims to design and implement APIs that expose cardinalities. Stretch goal can be to add cardinality explorer page to Thanos UI.
- Expected Outcome: New Thanos APIs to expose series cardinality.
- Recommended Skills: Golang, React
- Mentor: Ben Ye (@yeya24, yb532204897@gmail.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/6007
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/dbce5279-d029-46f3-b117-9e9dd7f84bd6

#### Querying Apache Parquet files with PromQL
- Description: The new [Thanos PromQL Engine](https://github.com/thanos-community/promql-engine) has a sufficient separation between the syntax tree and the execution plan to allow us to query arbitrary data sources. In this project we would like to explore ways to query data stored in Apache Parquet files.
- Expected Outcome: The Thanos PromQL engine can query timeseries data from Apache Parquet files.
- Recommended Skills: Golang
- Mentor: Filip Petkovski (@fpetkovski, filip.petkovsky@gmail.com), Prem Saraswat (@onprem, prmsrswt@gmail.com)
- Upstream Issue: https://github.com/thanos-community/promql-engine/issues/167
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a04cfbe4-4dde-4c7e-8b70-9570639b48a7


### Cortex

#### Experimental Auth Gateway
- Description: Cortex server has a simple authentication mechanism (X-Scope-OrgId) but users can’t use the multi tenancy features out of the box without complicated proxy configuration. It’s hard to support all the different authentication mechanisms used by different companies but plan to have a simple but opinionated auth-gateway that provides value out of the box.
- Expected Outcome: A new experimental cortex component called auth-gateway that validates tenants requests and proxies valid requests to distributors and query-frontend.
- Recommended Skills: Golang, HTTP proxies
- Mentor: Friedrich Gonzalez (@friedrichg, friedrichg@gmail.com)
- Upstream Issue: https://github.com/cortexproject/cortex/issues/5106
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/820f9269-ddef-44e9-bf77-95a8d2444c1e

#### API to import Prometheus & Thanos blocks
- Description: For users who want to migrate from Prometheus to Cortex, currently it is supported via a tool called [Thanosconvert](https://cortexmetrics.io/docs/blocks-storage/migrate-storage-from-thanos-and-prometheus/#when-migrating-from-prometheus). However, having this feature as part of the tool is limited in some usecase like SaaS because users usually don’t have permissions to access their storage layer directly. It would be nice to extend this feature into an API so that users can import their Prometheus TSDB compatible blocks for easier migration.
- Expected Outcome: An API that imports Prometheus blocks into Cortex.
- Recommended Skills: Golang, Prometheus, Thanos
- Mentor: Alan Protasio (@alanprot, alanprot@gmail.com)
- Upstream Issue: https://github.com/cortexproject/cortex/issues/4956
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/184ccb3e-6abe-4bf9-9659-b42b5c07c5a5

#### Switch Cortex Ruler to query Query Frontend
- Description: Cortex Ruler queries ingester directly for rule evaluation. This is okay but if Cortex Ruler could query Query Frontend instead for rule evaluation, it can benefit from more features in the Query Frontend like vertical sharding. This also simplifies the Cortex ruler to not embed a querier and uses less resources. For this project, we would like to switch Cortex Ruler to query Query Frontend. You are expected to work with a microservice architecture and write unit tests and end to end tests to make sure the feature works correctly.
- Expected Outcome: Cortex Ruler talks to Query Frontend for rules evaluation.
- Recommended Skills: Golang, distributed systems
- Mentor: Alvin Lin (@alvinlin123, alvinlin123@gmail.com)
- Upstream Issue: https://github.com/cortexproject/cortex/issues/5105
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/fe5c060e-420b-4c0f-90ae-389d893c50b6

#### Automated nightly benchmarks
- Description: In order to make sure Cortex doesn’t introduce performance regressions across releases and major changes, we would like to introduce an automated way to run some nightly macro/micro benchmarks for Cortex clusters. This project could potentially involve setting up Kubernetes clusters, Cortex components, and load generators. We’d love to keep track of performance metrics for each test run and visualize them through a UI.
- Expected Outcome: An automated workflow that runs performance macro/micro benchmarks everyday or on demand and performance metrics can be visualized through a UI.
- Recommended Skills: Golang, Kubernetes
- Mentor: Ben Ye (@yeya24, yb532204897@gmail.com)
- Upstream Issue: https://github.com/cortexproject/cortex/issues/5107
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0071e2ff-f538-4817-978b-07b267cfcd6a


### WasmEdge

#### Streaming data processing with WasmEdge

- Description: WasmEdge would like to integrate WasmEdge as an alternative runtime for Fluvio. We would like to create a compile-time feature for the [fluvio-smartengine](https://github.com/infinyon/fluvio/tree/master/crates/fluvio-smartengine) crate. Once this feature is turned on, the compiler will choose to embed WasmEdge into the binary build using the [WasmEdge Rust SDK](https://wasmedge.org/book/en/sdk/rust.html).
- Expected Outcome: A complete PR and a demo app that uses WasmEdge to process streaming data using a Tensorflow or Pytorch model
- Recommended Skills: working knowledge of the Rust language and WebAssembly Rust SDK
- Mentor(s): Michael Yuan (@juntao, michael@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2231
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/484542b0-84d6-43e3-b3fe-16fb2624f1b2

#### A Rust library crate for mediapipe models for WasmEdge NN

- Description: WasmEdge would like to build a Rust library crate that enables easy integration of Mediapipe models in WasmEdge applications. Each Mediapipe model has [a description page](https://google.github.io/mediapipe/solutions/face_detection.html) that describes its input and output tensors. The [models](https://google.github.io/mediapipe/solutions/models.html) are available in Tensorflow Lite format, which is supported by the WasmEdge Tensorflow Lite plugin.
- Expected Outcome: We need at least one set of library functions for each model in Mediapipe. Each library function takes in a media object and returns the inference result.
- Recommended Skills: basic knowledge of Rust and experience in working with AI models and image processing.
- Mentor(s): Michael Yuan (@juntao, michael@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2229
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e4e6d486-e6df-475d-8074-a363d0361076

#### Unified WasmEdge tools

- Description: WasmEdge provides two tools in the release assets: `wasmedgec` and `wasmedge`. However, providing multiple tools will make it too complicated to use. That's why we want a simple entry point, `wasmedge`. As its subcommands, all the tools above should be collected into this new tool.
- Expected Outcome: A document to explain the new WasmEdge tools, a test suite covers the implementation details, and implement `wasmedge run` and `wasmedge compile` featues.
- Recommended Skills: C++ programming language, WebAssembly knowledge.
- Mentor(s): Hung-ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2226
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2ebb39fd-3497-44f3-90d7-e95b444b2bc8


#### WasmEdge C++ SDK

- Description: WasmEdge provides C SDK as the based library and uses this to implement other languages SDK such as Golang, Rust, Java, and Python(developing). We would like to provide C++ SDK in this task.
- Expected Outcome: A document to explain the C++ SDK, a test suite cover the implementation details, and the implementation of WasmEdge Basics and VM sections in the C SDK.
- Recommended Skills: C++ programming language, WebAssembly knowledge.
- Mentor(s): Yiying He (@q82419, yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2241
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1d5d1fcd-b671-4367-b6db-13ef263aece1


### Kubernetes

#### Cluster API Provider GCP (CAPG)

##### Add telemetry and profiling support

- Description: Cluster API Provider GCP (CAPG) enables the creation of Kubernetes clusters in GCP with Cluster API. With increasing adoption of Cluster API (CAPI) in general and of CAPG we want to improve the supportability of CAPG, especially for production environments. The first part of this is to add telemetry/tracing using OpenTelemetry so that we can understand and visualize the flow of reconciliation within the provider. The next part is to add a **pprof** endpoint that can be optionally enabled to enable operations/support users to collect profiling information from a running instances of CAPG.
- Expected Outcome: This work will enable tracing and profiling of a running instance of CAPG (along with supporting docs) to supports operations/support engineers.
- Recommend Skills: Golang, Kubernetes
- Mentors(s): Carlos Panato (@cpanato ctadeu@gmail.com), Richard Case (@richardcase richmcase@gmail.com)
- Upstream Issue: https://github.com/kubernetes-sigs/cluster-api-provider-gcp/issues/810
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/55469b74-0c98-44f1-b8e1-4244a736bf82

#### Cluster API Provider AWS (CAPA)

##### Reimagining how we handle AWS account preparation

- Description: Cluster API Provider AWS (CAPA) can create and manage the lifecycle of Kubernetes clusters in AWS (with the help of Cluster API in general). For each target AWS account where a user wants to create clusters it must be prepared for usage first. This is currently done using [clusterawsadm](https://cluster-api-aws.sigs.k8s.io/topics/using-clusterawsadm-to-fulfill-prerequisites.html) which creates/updates a CloudFormation stack that in turn creates/updates IAM resources. This approach has caused issues as CloudFormation is region specific but IAM is global and users often run the tool in different regions which results in failed stacks that cannot easily be deleted. As a project we want to move away from using CloudFormation and instead use API calls (like the rest of CAPA). We also want to make the process idempotent so it doesn't matter if you run it against different regions. This account preparation is key to CAPA and with out it CAPA cannot run.
- Expected Outcome: A new approach to handling the prerequisites required for CAPA. We need to continue to support the cli based approach (so clusterawsadm will be updated) but we can also explore a declarative approach with an operator.
- Recommend Skills: Golang, Kubernetes
- Mentors(s): Richard Case (@richardcase richmcase@gmail.com)
- Upstream Issue: https://github.com/kubernetes-sigs/cluster-api-provider-aws/issues/3715
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2d76dbe6-43eb-465e-a852-64b2e48f2c68


