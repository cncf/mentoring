## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description: 
- Expected Outcome:
- Recommended Skills: 
- Mentor(s): Mentor Name (@mentor_github, mentor@email.addy) 
- Upstream Issue: 

---

```

## Proposed Project ideas

### Cilium

#### Website Use Cases pages

- Description: Cilium would like to have use case pages built out on its website to make it easy for people to find the information and relevant content to the problems they are trying to solve with Cilium.
- Expected Outcome: The mentee will read through relevant docs, blogs, case studies, user stories, and labs to understand the use cases which will drive the content for each of the pages being built. The finished product will be a new use cases section on the Cilium website.
- Recommended Skills: Content Writing, Javascript, CSS
- Mentor(s): Bill Mulligan (@xmulligan, bill@isovalent.com) 
- Upstream Issue: https://github.com/cilium/cilium.io/issues/226

### Cloud Native Buildpacks

#### Pack Performance enhancements

- Description: Pack is the reference implementation of a Cloud Native Buildpacks platform used to build application images in multiple organizations. Because all developers want their code to build and deploy as quickly as possible, small speedups in pack can have significant benefits, and slow-downs in pack are undesirable. Today, pack has no benchmark suite that would safe-guard against regressions in execution speed.
- Expected Outcome: The mentee will create a benchmark suite around some critical path sections identified with help from maintainers. The mentee will be supported in applying profiling tools to identify possible speedups, hopefully leading to at least one user-facing performance improvement.
- Recommended Skills: Golang, git, software development.  (Mentee does not need prior experience in profiling or performance tuning)
- Mentor(s): Natalie Arellano (@natalieparellano, narellano@vmware.com); Joe Kimmel (@joe-kimmel-vmw, jkimmel@vmware.com) 
- Upstream Issue: https://github.com/buildpacks/pack/issues/1610

#### Multi-Architecture Builds Support
- Description: The rise of ARM processors has created new binary targets for pre-compiled executables. Additionally, there are tales of widespread use of operating systems that aren't linux? In the ideal case a `pack` user could create a build for an abritrary architecture and operating system, regardless of the host system they used to run the command.
- Expected outcome: Improved multi-architecture (including ARM) and multi-os "cross-compilation" support in [pack](https://github.com/buildpacks/pack/)
- Recommended Skills: Golang, software development literacy. Familiarity with buildpacks will be helpful.
- Mentor(s): Aidan Delaney (@AidanDelaney); Jerico Pena (@jpena-r7); Juan Bustamante (jbustamante@vmware.com, @jjbustamante)
- Expected project size: 350 Hours
- Difficulty: Medium
- Upstream Issue (URL): https://github.com/buildpacks/pack/issues/1459 and https://github.com/buildpacks/pack/issues/1460

### Kubernetes

#### Cluster API Provider GCP (CAPG)

##### Add telemetry and profiling support

- Description: Cluster API Provider GCP (CAPG) enables the creation of Kubernetes clusters in GCP with Cluster API. With increasing adoption of Cluster API (CAPI) in general and of CAPG we want to improve the supportability of CAPG, especially for production environments. The first part of this is to add telemetry/tracing using OpenTelemetry so that we can understand and visualize the flow of reconciliation within the provider. The next part is to add a **pprof** endpoint that can be optionally enabled to enable operations/support users to collect profiling information from a running instances of CAPG.
- Expected Outcome: This work will enable tracing and profiling of a running instance of CAPG (along with supporting docs) to supports operations/support engineers.
- Recommend Skills: Golang, Kubernetes
- Mentors(s): Carlos Panato (@cpanato, ctadeu@gmail.com), Richard Case (@richardcase, richmcase@gmail.com)
- Upstream Issue: https://github.com/kubernetes-sigs/cluster-api-provider-gcp/issues/810

#### Cluster API Provider AWS (CAPA)

##### Reimagining how we handle AWS account preparation

- Description: Cluster API Provider AWS (CAPA) can create and manage the lifecycle of Kubernetes clusters in AWS (with the help of Cluster API in general). For each target AWS account where a user wants to create clusters it must be prepared for usage first. This is currently done using [clusterawsadm](https://cluster-api-aws.sigs.k8s.io/topics/using-clusterawsadm-to-fulfill-prerequisites.html) which creates/updates a CloudFormation stack that in turn creates/updates IAM resources. This approach has caused issues as CloudFormation is region specific but IAM is global and users often run the tool in different regions which results in failed stacks that cannot easily be deleted. As a project we want to move away from using CloudFormation and instead use API calls (like the rest of CAPA). We also want to make the process idempotent so it doesn't matter if you run it against different regions. This account preparation is key to CAPA and with out it CAPA cannot run.
- Expected Outcome: A new approach to handling the prerequisites required for CAPA. We need to continue to support the cli based approach (so clusterawsadm will be updated) but we can also explore a declarative approach with an operator.
- Recommend Skills: Golang, Kubernetes
- Mentors(s): Richard Case (@richardcase, richmcase@gmail.com), Ankita Swamy (@Ankitasw, ankita.swamy20@gmail.com)
- Upstream Issue: https://github.com/kubernetes-sigs/cluster-api-provider-aws/issues/3715

### Kubescape

#### Implement security controls based on penetration testing best practices

- Description: Kubescape covers different hardening guidelines around Kubernetes: NSA-CISA, MITRE and CIS. Detection capabilities of potential security issues could be even more enriched by researching pen-testing tools and practices regarding Kubernetes and implementing these as controls. An example pen-test writeup is https://hacktricks.boitatech.com.br/pentesting/pentesting-kubernetes. This and others could help define a set of “offensive” controls to complement the “defensive” controls we have today.
- Expected Outcome: ~10 controls for detecting challenges that would commonly be found in a cluster penetration test. Documentation on how they were selected and how to use them.
- Recommended Skills: Cybersecurity, Rego 
- Mentor(s): Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1072

### Build debugging capabilities for Helm

- Description: The Go standard templating package (`text/template`) is the base on which Helm templates are built. We wish to be able to backtrack lines and fields in objects after rendering Helm charts. This would help users of Helm to be able to understand quickly where different security issues in the final object are coming from in the source. To do this, the `text/template` package should be extended to include debug markers that point from the output lines to the input lines. 
- Expected Outcome: Propose and implement an extension to the Go package which solves this.
- Recommended Skills: Go
- Mentor(s): Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/helm/helm/issues/11552

### Release engineering: add Kubescape to commonly-requested package managers

- Description: The Kubescape client binary is built from GitHub using standard patterns. Support for homebrew and krew exists, but users have requested RPM and DEB packages. In this project you will stabilize the delivery of new builds to existing package managers, and implement support for RPM and DEB packages using GitHub Actions.
- Expected Outcome: When a new Kubescape version is released, it is available in homebrew, krew, RPM and DEB repositories.
- Recommended Skills: Release management, scripting
- Mentor(s): Craig Box (@craigbox, craigb@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/400


### KubeVela

#### Extend the capability of KubeVela by making several useful addons

- Description: KubeVela currently have a variety of addons , including experimental options, that address scenarios such as Continual Delivery and observability. To further enhance the out-of-box functionality for users of KubeVela, we can offer additional useful addons.
- Expected Outcome: 10+ eperimetal addons, clear documentation should be provided for enabling and using these addons, including examples of useful use-cases.
- Recommended Skills: golang, kubernetes, cueLang
- Mentor(s): Jianbo Sun (@wonderflow, wonderflow.sun@gmail.com), Wong Yike (@wangyikewxgm, wangyike_wyk@163.com) 
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5358

#### Support auto generation of CUE schema and docs from Go struct

- Description: In KubeVela's provider system, we can use our defined Go functions in CUE schema. The Go providers usually have a parameter and return. Fields in Go providers are the same as fields in CUE schema, so it is possible and important to support automatic generation of CUE schemas and documents from Go structs.
- Expected Outcome: Auto-generators of CUE schemas and docs from Go structs, the capabilities should be wrapped in vela cli command.
- Recommended Skills: Go, CUE
- Mentor(s): Fog Dong (@FogDong, wuwuglu19@gmail.com), Da Yin(@Somefive, yd219913@alibaba-inc.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5364

#### Support auto generation of multiple languages SDK from CUE

- Description: In KubeVela, we use CUElang to code the definition. We want to support auto generation of multiple languages SDK from CUE, so that users can use KubeVela in their own language.
- Expected Outcome: Support auto generation of multiple languages SDK from CUE, including Golang, Java, Python, etc. The capabilities should be wrapped in vela cli command.
- Recommended Skills: Go, Kubernetes, CUE
- Mentor(s): Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com) Zeng Qingguo (@barnettZQG, barnett.zqg@gmail.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5365

### Kyverno

#### Pod Security Admission Integrations

- Description: Integrate Kubernetes Pod Security with Kyverno - Part II
- Expected Outcome: PR sent to kubernetes/kubernetes containing necessary changes to implement the behavior on the Kyverno side.
- Recommended Skills: Golang, Kubernetes, Pod Security
- Mentor(s): Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/6144

#### Kubernetes Validating Admission Policy Support

- Description: Kubernetes Validating Admission Policy Support
- Expected Outcome: Kyverno support for ValidatingAdmissionPolicy in one of the identified proposals.
- Recommended Skills: Golang, Kubernetes, Admission Controls
- Mentor(s): Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/5441

#### OCI references support

- Description: Use OCI References in image verification
- Expected Outcome: PR sent to kyverno/kyverno implementing support for OCI references in verifyImages rules
- Recommended Skills: Golang, Kubernetes, OCI images
- Mentor(s): Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/6142

#### Artifact Hub listing of Kyverno Policy Library

- Description: Develop a system to reflect all Kyverno Policies in the community library on Artifact Hub
- Expected Outcome: All Kyverno policies searchable on Artifact Hub with an extensible system for future use
- Recommended Skills: Golang, Artifact Hub, DevOps Automation, GitHub Actions
- Mentor(s): Chip Zoller (@chipzoller, chipzoller@gmail.com)
- Upstream Issue: https://github.com/kyverno/policies/issues/491

### Vitess

#### Implement a benchmarking and load testing framework for the VReplication module in Vitess
- Description: Vitess is a distributed database system built around MySQL. VReplication is core technology built into Vitess that is used to enable many features like vertical and horizontal sharding, change data capture and materialized views. The project involves designing and implementing a customizable framework that enables us to test different VReplication workflows at scale and to obtain benchmarks that can be used to monitor performance improvements and regression from code changes. The framework will consist of a custom DSL (Domain Specific Language) which will be used to define each test case and a driver which will read the DSLs and execute the tests. The DSL will be based on the Hashicorp Configuration Language (https://github.com/hashicorp/hcl). The driver will be written in Golang and target AWS using Terraform for provisioning and Ansible for automation. The results and benchmarks will be stored in PlanetScale (https://planetscale.com/) in the existing vitess benchmark database.
- Expected Outcome: The test framework with at least one working test and stored benchmark metrics for a MoveTables workflow.
- Recommended Skills: golang
- Mentor: Rohit Nayak (@rohit-nayak-ps, rohit@planetscale.com) 
- Upstream Issue: https://github.com/vitessio/vitess/issues/12136

#### Add complete parsing support for Spatial MySQL functions
- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of spatial MySQL functions are not parsed correctly and result in syntax errors. The task of the mentee would be to add parsing support for such functions and features which can be found at https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): [Manan Gupta](https://github.com/GuptaManan100) (manan@planetscale.com)
- Issue: <https://github.com/vitessio/vitess/issues/8604>


### LitmusChaos

#### Improve code quality and add unit tests of litmus chaos components
- Description:  [LitmusChaos](https://litmuschaos.io) is an open-source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. This project aims to improve the code quality of the golang components of litmus chaos and refactor the codebase for adding the unit test cases.
- Expected Outcome: This will help the project to improve code quality, enhance the unit test suite, and identification of weaknesses
- Recommended Skills: Golang, Kubernetes
- Mentor: Amit Kumar Das (@amityt, amit.das@harness.io)  Sayan Mondal (@S-ayanide, sayan.mondal@harness.io)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/3892


### Thanos

#### Add query observability for new promql engine
- Description: The new [Thanos Promql Engine](https://github.com/thanos-community/promql-engine) lacks observability down to operator level and we don't have a way to track each operator's performance. This project aims to extend the `Explain` method of each operator, and return an operator tree with time taken recorded. Then Thanos Query UI could then visualize the operator trace.
- Expected Outcome: Add a button in Query UI that when enabled will show query tree + how much time has been spent in each operator
- Recommended Skills: Golang, React
- Mentor: Giedrius Statkevičius (@GiedriusS, giedriuswork@gmail.com), Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-community/promql-engine/issues/106

#### Series Cardinality API
- Description: Prometheus has a TSDB stats API https://prometheus.io/docs/prometheus/latest/querying/api/#tsdb-stats which contains information about series cardinality and the API is supported by Thanos. However, it can only return 10 results per stats, which is not flexible to track the arbitrary metrics. This project aims to design and implement APIs that expose cardinalities. Stretch goal can be to add cardinality explorer page to Thanos UI.
- Expected Outcome: New Thanos APIs to expose series cardinality.
- Recommended Skills: Golang, React
- Mentor: Ben Ye (@yeya24, yb532204897@gmail.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/6007

#### Querying Apache Parquet files with PromQL
- Description: The new [Thanos PromQL Engine](https://github.com/thanos-community/promql-engine) has a sufficient separation between the syntax tree and the execution plan to allow us to query arbitrary data sources. In this project we would like to explore ways to query data stored in Apache Parquet files.
- Expected Outcome: The Thanos PromQL engine can query timeseries data from Apache Parquet files.
- Recommended Skills: Golang
- Mentor: Filip Petkovski (@fpetkovski, filip.petkovsky@gmail.com), Prem Saraswat (@onprem, prmsrswt@gmail.com)
- Upstream Issue: https://github.com/thanos-community/promql-engine/issues/167


### Cortex

#### Experimental Auth Gateway
- Description: Cortex server has a simple authentication mechanism (X-Scope-OrgId) but users can’t use the multi tenancy features out of the box without complicated proxy configuration. It’s hard to support all the different authentication mechanisms used by different companies but plan to have a simple but opinionated auth-gateway that provides value out of the box.
- Expected Outcome: A new experimental cortex component called auth-gateway that validates tenants requests and proxies valid requests to distributors and query-frontend.
- Recommended Skills: Golang, HTTP proxies
- Mentor: Friedrich Gonzalez (@friedrichg, friedrichg@gmail.com)
- Upstream Issue: https://github.com/cortexproject/cortex/issues/5106

#### API to import Prometheus & Thanos blocks
- Description: For users who want to migrate from Prometheus to Cortex, currently it is supported via a tool called [Thanosconvert](https://cortexmetrics.io/docs/blocks-storage/migrate-storage-from-thanos-and-prometheus/#when-migrating-from-prometheus). However, having this feature as part of the tool is limited in some usecase like SaaS because users usually don’t have permissions to access their storage layer directly. It would be nice to extend this feature into an API so that users can import their Prometheus TSDB compatible blocks for easier migration.
- Expected Outcome: An API that imports Prometheus blocks into Cortex.
- Recommended Skills: Golang, Prometheus, Thanos
- Mentor: Alan Protasio (@alanprot, alanprot@gmail.com)
- Upstream Issue: https://github.com/cortexproject/cortex/issues/4956

#### Switch Cortex Ruler to query Query Frontend
- Description: Cortex Ruler queries ingester directly for rule evaluation. This is okay but if Cortex Ruler could query Query Frontend instead for rule evaluation, it can benefit from more features in the Query Frontend like vertical sharding. This also simplifies the Cortex ruler to not embed a querier and uses less resources. For this project, we would like to switch Cortex Ruler to query Query Frontend. You are expected to work with a microservice architecture and write unit tests and end to end tests to make sure the feature works correctly.
- Expected Outcome: Cortex Ruler talks to Query Frontend for rules evaluation.
- Recommended Skills: Golang, distributed systems
- Mentor: Alvin Lin (@alvinlin123, alvinlin123@gmail.com)
- Upstream Issue: https://github.com/cortexproject/cortex/issues/5105

#### Automated nightly benchmarks
- Description: In order to make sure Cortex doesn’t introduce performance regressions across releases and major changes, we would like to introduce an automated way to run some nightly macro/micro benchmarks for Cortex clusters. This project could potentially involve setting up Kubernetes clusters, Cortex components, and load generators. We’d love to keep track of performance metrics for each test run and visualize them through a UI.
- Expected Outcome: An automated workflow that runs performance macro/micro benchmarks everyday or on demand and performance metrics can be visualized through a UI.
- Recommended Skills: Golang, Kubernetes
- Mentor: Ben Ye (@yeya24, yb532204897@gmail.com)
- Upstream Issue: https://github.com/cortexproject/cortex/issues/5107


### WasmEdge

#### Streaming data processing with WasmEdge

- Description: WasmEdge would like to integrate WasmEdge as an alternative runtime for Fluvio. We would like to create a compile-time feature for the [fluvio-smartengine](https://github.com/infinyon/fluvio/tree/master/crates/fluvio-smartengine) crate. Once this feature is turned on, the compiler will choose to embed WasmEdge into the binary build using the [WasmEdge Rust SDK](https://wasmedge.org/book/en/sdk/rust.html).
- Expected Outcome: A complete PR and a demo app that uses WasmEdge to process streaming data using a Tensorflow or Pytorch model
- Recommended Skills: working knowledge of the Rust language and WebAssembly Rust SDK
- Mentor(s): Michael Yuan (@juntao, michael@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2231

#### A Rust library crate for mediapipe models for WasmEdge NN

- Description: WasmEdge would like to build a Rust library crate that enables easy integration of Mediapipe models in WasmEdge applications. Each Mediapipe model has [a description page](https://google.github.io/mediapipe/solutions/face_detection.html) that describes its input and output tensors. The [models](https://google.github.io/mediapipe/solutions/models.html) are available in Tensorflow Lite format, which is supported by the WasmEdge Tensorflow Lite plugin.
- Expected Outcome: We need at least one set of library functions for each model in Mediapipe. Each library function takes in a media object and returns the inference result.
- Recommended Skills: basic knowledge of Rust and experience in working with AI models and image processing.
- Mentor(s): Michael Yuan (@juntao, michael@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2229

#### Unified WasmEdge tools

- Description: WasmEdge provides two tools in the release assets: `wasmedgec` and `wasmedge`. However, providing multiple tools will make it too complicated to use. That's why we want a simple entry point, `wasmedge`. As its subcommands, all the tools above should be collected into this new tool.
- Expected Outcome: A document to explain the new WasmEdge tools, a test suite covers the implementation details, and implement `wasmedge run` and `wasmedge compile` featues.
- Recommended Skills: C++ programming language, WebAssembly knowledge.
- Mentor(s): Hung-ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2226


#### WasmEdge C++ SDK

- Description: WasmEdge provides C SDK as the based library and uses this to implement other languages SDK such as Golang, Rust, Java, and Python(developing). We would like to provide C++ SDK in this task.
- Expected Outcome: A document to explain the C++ SDK, a test suite cover the implementation details, and the implementation of WasmEdge Basics and VM sections in the C SDK.
- Recommended Skills: C++ programming language, WebAssembly knowledge.
- Mentor(s): Yiying He (@q82419, yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2241


### Kubewarden

#### Kubewarden SDKs feature parity

- Description:  Kubewarden currently allow policy writers to use 4 different programming languages. Therefore, there are 4 SDKs to be maintained. However, they lack feature parity. In other words, some SDK have feature that have features not available in other SDKs. It's necessary to map what are the features missing between the Go and Rust SDKs and implement some of them. For that, it is necessary to read and understand what is done in the Rust SDK and implement the equivalent in the Go SDK.
- Expected Outcome: Map all the features missing between the Go and Rust SKDs and implement some of the missing features
- Recommended Skills: Rust, Go, Kubernetes
- Mentor(s): José Guilherme Vanz (@jvanz), Victor Cuadrado Juan (@viccuad)
- Upstream Issue: https://github.com/kubewarden/kubewarden-controller/issues/392


#### Kubewarden policies enhancements

- Description:  Kubewarden has many policies to validate and mutate Kubernetes resources. Therefore, there are many enhancements to be made on them. However, these improvements are still to be made. Thus, it's necessary to fix the open issues in the policies repositories and implement new policies to add more value to the Kubewarden users. 
- Expected Outcome: Fix as many open issues in the Kubewarden policies as possible and create new policies requested by the community
- Recommended Skills: Rust, Go, Kubernetes
- Mentor(s): José Guilherme Vanz (@jvanz), Victor Cuadrado Juan (@viccuad)
- Upstream Issue: https://github.com/kubewarden/kubewarden-controller/issues/393


### OpenKruise

#### Bring progressive delivery to daemon workload

- Description: Kruise Rollout enable progressive delivery of various workload ranging from stateless workload such as Deployment to stateful workload such as StatefulSet or customized operators. This project aims to bring progress delivery capability to daemon workload, which is run on each node of a k8s cluster. The project involves implementing common API of progressive delivery for OpenKruise Advance DaemonSet, and integrate with the Kruise Rollout framework. 
- Expected Outcome: Support progressive delivery for OpenKruise Advance DaemonSet(along with supporting test cases and docs) , that is, update new version of daemon pods in batches with user defined pause strategy. Traffic scheduling is not required for this project. 
- Recommended Skills: Go, Kubernetes
- Mentor(s):  Zhang Zhen (@furykerry, furykerry@gmail.com), Zhang Lei(@resouer, resouer@gmail.com)
- Upstream Issue: https://github.com/openkruise/rollouts/issues/69

#### Support customize arbitary fields of workload subset in UnitedDeployment

- Description: UnitedDeployment in OpenKruise enable users to manage a set of k8s workloads in whole while be able to customize the topology and replicas of each workload. This project extends the customization capability to arbitary workload fields by adding common patch fields, so that 
each subset of UnitedDeployment can have different metadata, container configuration etc. 
- Expected Outcome: Support generate patches for new creating pods of each subset workload while the users can rollout and scale the UnitedDeployment in whole. 
- Recommended Skills: Go, Kubernetes
- Mentor(s): Zhang Zhen (@furykerry, furykerry@gmail.com), Zhang Lei(@resouer, resouer@gmail.com)
- Upstream Issue: https://github.com/openkruise/kruise/issues/811

### KubeArmor

#### KubeArmor Telemetry Monitoring and Dashboards

- Description: KubeArmor generates a large amount of data through logs and alerts, but interpreting this data can be difficult. To make it easier to understand, it is necessary to parse the telemetry, create meaningful metrics, enable data filtering, and create visualizations such as graphs to display on a dashboard.
- Expected Outcome: Create a telemetry dashboard, write setup documentation and usage guide.
- Recommended Skills: ELK stack (Elasticsearch, Logstash & Kibana), Fluentd, Loki and Grafana
- Mentors: Anurag Kumar (@kranurag7, contact.anurag7@gmail.com), Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com), Barun Acharya (@daemon1024, barun1024@gmail.com), Rahul Jadhav (@nyrahul, nyrahul@gmail.com)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/836>


#### Adding OpenTelemetry Support

- Description: To integrate KubeArmor with OpenTelemetry, an adapter needs to be created. OpenTelemetry is a standard for telemetry data, including distributed tracing, metrics, and logs, and has an SDK and a collector component that can run on Kubernetes. Applications can directly expose OpenTelemetry data through in-app instrumentation using the OpenTelemetry SDK. The collector can then gather data from multiple applications in a cluster and send it to various backends for storage and visualization, such as Jaeger.
- Expected Outcome: The mentee's task is to develop an OpenTelemetry adapter for KubeArmor that can receive logs, alerts, and telemetry from the kubearmor-relay-service and convert it into the OpenTelemetry format. They are also expected to create documentation and usage guides that describe how to set up and use the adapter, as well as demonstrate the integration with a backend that supports OpenTelemetry.
- Recommended Skills: OpenTelemetry, Go
- Mentor(s): Anurag Kumar (@kranurag7, contact.anurag7@gmail.com), Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com), Barun Acharya (@daemon1024, barun1024@gmail.com), Rahul Jadhav (@nyrahul, nyrahul@gmail.com)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/894>


#### Rancher Plugin Integration

- Description: The goal is to create an extension for Rancher, a Kubernetes management platform, which will enable interaction with KubeArmor. The extension will have the capability to install KubeArmor, allow for the management of security policies, and provide monitoring of workload behavior through alerts and telemetry.
- Expected Outcome: Rancher plugin address the following points: Install KubeArmor within Rancher, document and demonstrate the usage.
Note: This item is a work in progress. The selected mentee is expected to continue the same work.
- Recommended Skills: Rancher, Grafana stack, Javascript
- Mentor(s): Anurag Kumar (@kranurag7, contact.anurag7@gmail.com), Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com), Barun Acharya (@daemon1024, barun1024@gmail.com), Rahul Jadhav (@nyrahul, nyrahul@gmail.com)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/992>


### KubeEdge

#### Design and implement the KubeEdge Dashboard

- Description: Users now can use K8s API or Kubectl to talk to KubeEdge, in this project we will design and implement the KubeEdge dashboard, so users can talk to KubeEdge cluster through UI.
- Expected Outcome: Create the KubeEdge dashboard, users can view and operate the resource through UI.
- Recommended Skills: JS, Kubernetes, KubeEdge, Html
- Mentors: Vincent Lin (@vincentgoat, linguohui1@huawei.com), Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Issue: <https://github.com/kubeedge/dashboard/issues/1>


#### Re-design and implement the KubeEdge website

- Description: KubeEdge's website has been running for a few years, and now we have more customer cases and more developer courses, so this project will update KubeEdge's website, with more readable documents on the homepage, covering user cases, developer courses, etc.
- Expected Outcome: The website has more readable documentation, covering user cases, developer courses, etc.
- Recommended Skills: JS, KubeEdge, Html
- Mentor(s):  Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com), Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Issue: <https://github.com/kubeedge/website/issues/292>


#### Cloud-Robotic AI Benchmarking for Edge-cloud Collaborative Lifelong Learning

- Description: Based on real-world datasets provided by industry members of KubeEdge SIG AI, the issue aims to build a lifelong learning benchmarking on KubeEdge-Ianvs. Namely, it aims to help all Edge AI application developers to validate and select the best-matched algorithm of lifelong learning.
- Expected Outcome: The benchmark includes: 1) Work together to release a new dataset to the public! 2) Implement critical algorithm or system metrics, e.g., BWT, FWT and thoughput; 3) (Optional) Develop a baseline algorithm for this benchmark.
- Recommended Skills: TensorFlow/Pytorch, Python, Kubernetes
- Mentor(s): Siqi Luo (@luosiqi, luosiqi2@huawei.com), Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Issue: <https://github.com/kubeedge/ianvs/issues/48>


### Karmada

#### Provide interactive environments for Karmada users
- Description: Using interactive environments(like killercoda) for users to get started quickly.
- Expected Outcome: Implement 2 Karmada examples in killercoda, including a CLI installation example and script installation example, both contains installation and deploying workload to multi-clusters steps.
- Recommended Skills: Kubernetes, Karmada
- Mentor(s): Wei Jiang (@jwcesign, jiangwei115@huawei.com), Hongcai Ren(@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/3085

#### Enhance Karmada testing coverage

- Description: Karmada would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects.
- Expected Outcome: Increase the UT coverage rate to 65% (currently, the UT coverage rate is [43%](https://app.codecov.io/gh/karmada-io/karmada) ), increase the code coverage rate by about 20%.
- Recommended Skills: Golang, Git
- Mentor(s): Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com), Hongcai Ren(@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/3086

#### Bundle third-party resources into the Resource Interpreter framework

- Description: Karmada's Resource Interpreter Framework is designed for interpreting resource structure. It consists of built-in and customized interpreters. Karmada could bundle some popular and open-sourced resources so that users can save the effort to customize them.
- Expected Outcome: The resources from projects, including Argo Workflow/Flux CD/Kyverno/OpenKurise, could be bundled in Karmada, and the corresponding documentation should also be supplemented.
- Recommended Skills: Go, Cloud Native
- Mentor(s): Tiecheng Shen (@Poor12, shentiecheng@huawei.com), Hongcai Ren(@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/3087


### Linkerd

#### Linkerd Dashboard Improvements

- Description: Improve the Linkerd web dashboard with improved topology visualization, support for Linkerd conformance to the Gateway API project, and improved multi-cluster support.
- Expected Outcome: A period of focused investment in the Linkerd viz dashboard experience will greatly improve the experience for Linkerd users. 
- Recommended Skills: React/JavaScript, Kubernetes
- Mentor(s): Oliver Gould (@olixOr, ver@buoyant.io), Alex Leong (@adleong, alex@buoyant.io) 
- Upstream Issue: https://github.com/linkerd/linkerd2/issues/7865, https://github.com/linkerd/linkerd2/issues/9243, https://github.com/linkerd/linkerd2/issues/9554

#### Add dynamic profiling to Linkerd Rust controllers
- Description: The Linkerd control plane includes controllers that are written in Rust. Enable users to dynamically profile the running application can aid significantly in debugging and diagnostics. 
- Expected Outcome: In an upcoming release of Linkerd the policy controller would expose endpoints (leveraging [pprof](https://github.com/tikv/pprof-rs/blob/master/README.md) or another tool) for profiling controller resource consumption.
- Recommended Skills: Rust, Kubernetes
- Mentor(s): Oliver Gould (@olixOr, ver@buoyant.io), Alex Leong (@adleong, alex@buoyant.io) 
- Upstream Issue: https://github.com/linkerd/linkerd2/issues/10227

#### Prototype multi-cluster service discovery and operations
- Description: When deploying a multi-cluster resource one has to perform certain contortions such as providing a list of other clusters to each cluster. This places a dependency ordering on spinning up new clusters and a requirement for application operators to coordinate with cluster operators.
- Expected Outcome: Develop a prototype where each cluster only needs to reference a common service definition to discover peers without knowledge of the names or even number of other clusters.
- Recommended Skills: Go, Rust, Kubernetes
- Mentor(s): Oliver Gould (@olixOr, ver@buoyant.io), Matei David (@mateiidavid, matei@buoyant.io) 
- Upstream Issue: https://github.com/linkerd/linkerd2/issues/7566


### TestGrid

#### Frontend development inside Lit Component Framework

- Description: [TestGrid](http://testgrid.k8s.io) is the test visualization tool attached to Prow to
  collate and display historical test results for the k8s and k8s-adjacent
  communities. The UI is in the process of being rewritten.
- Expected Outcome: Create Lit-based view components for TestGrid (summary, index, etc.) that display data from the API. Implement Jasmine and Storybook testing for these components.
- Recommended Skills: TypeScript, CSS, Golang
- Mentor(s): Sean Chase (@chases2, slchase@google.com)
- Upstream Issue: https://github.com/GoogleCloudPlatform/testgrid/issues/1005


### NATS

#### End-to-end example of a multiplayer game using NATS in Unity

- Description: This project consists of developing an example Unity setup of a multiplayer game using the latest version of the NATS Server.

- Expected Outcome: A well documented repository under the `nats-io` GitHub organization that contains the artifacts and sample code of the setup using the .NET NATS Client (https://github.com/nats-io/nats.net)

- Recommended Skills: .NET, C#, Unity, NATS

- Mentor(s): Waldemar Quevedo (@wallyqs)

- Upstream Issue: https://github.com/nats-io/dot-net-nats-examples/issues/1

---
