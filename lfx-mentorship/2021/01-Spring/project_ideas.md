## Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

### Template

```
#### CNCF Project Name
##### Title

-	Description:
-	Recommended Skills:
-	Mentor(s):
-	Upstream Issue (URL):
```

### Sample:

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Issue: https://github.com/prometheus/prometheus/issues/3416

### Proposed Project ideas

#### Kubernetes

##### WG Policy

###### CIS Benchmarks Policy Report

- Description: Execute CIS benchmark checks and produce a Policy Report CRD.
- Recommended Skills: Golang, CLI, JSON
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/29

##### SIG Usability

###### Jobs-to-Be-Done study

Qualitative analysis of user interview recordings for Jobs-to-Be-done study

- Description: SIG Usability is conducting a Jobs-to-Be-Done study meant to identify the highest impact areas for improving Kubernetes UX. We are in the process of conducting user interviews and need some help going back through the transcribed recordings to annotate and pull out insights from the conversations. Overall, this is a great opportunity for someone who’s studied or engaged in UX/IA/Usability to get involved in open source.
- Recommended Skills: User Research, UX, synthesis
- Mentors: Gaby Moreno (@morengab), Tasha Drew (@tashimi)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/sig-usability/issues/9

##### SIG Architecture

###### Develop tools for evaluating dependency updates to Kubernetes

- Description: Implement command line utilities that can help Kubernetes developers evaluate new dependencies by capturing statistics/metrics and estimating cost of adding something new. This will 
  involve diving deep into golang dependency chains (transitive/shared dependencies) and coming up with new metrics to estimate how burdensome something new can be or how much we will save by getting 
  rid of something so we can prioritize work and get more efficient from a developer workflow perspective.
- Recommended Skills: Golang, CLI
- Mentor(s): Davanum Srinivas (@dims)
- Upstream Issue (URL): [code organization meeting notes](https://docs.google.com/document/d/1HtTI0rJEGP_MSf6eO87aCmx_tzpovPAAg7U2Zxwm8FE/edit?ts=5c9d0a4c#heading=h.8phgvuqrxjsg)


##### SIG Cluster Lifecycle

###### Add support for phases in "kubeadm upgrade apply"

- Description: Implement support for "phases" in the "upgrade apply" command of kubeadm. Phases act like subcommands and allow granular execution of functiodnality.
- Recommended Skills: Golang, CLI
- Mentor(s): Lubomir I. Ivanov (@neolit123)
- Upstream Issue (URL): https://github.com/kubernetes/kubeadm/issues/1318

#### Keptn

##### Improve Prometheus integration and exposure of Prometheus metrics

- Description: In the current implementation the Prometheus integration in Keptn lacks customisability and configuration options. Also, Keptn core services should be instrumented to expose Prometheus metrics. The goal of this project is to refactor or rewrite the integration and add Prometheus to Keptn core services.
- Recommended Skills: golang, experience with Prometheus
- Mentor(s): Jürgen Etzlstorfer (@jetzlstorfer)
- Upstream Issue (URL): https://github.com/keptn-contrib/prometheus-service/issues/53

##### Generate service skeleton via CLI

- Description: Provide a CLI command for Keptn CLI that generates a template repository to start developing a Keptn service integration.
- Recommended Skills: golang, go-templates, Docker
- Mentor(s): Jürgen Etzlstorfer(@jetzlstorfer)
- Upstream Issue (URL): https://github.com/keptn/keptn/issues/3034

#### Kyverno

##### Monitor Kyverno with Prometheus

- Description: Publish Kyverno policy execution metrics to Prometheus and Grafana
- Recommended Skills: Golang, Prometheus
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/256

#### OpenTelemetry

##### Work through OpenTelemetry User Research Documentation and Implement Fixes

- Description: Implement the fixes suggested in the user research documentation to make this project more consumable for end users.
- Recommended Skills: PHP
- Mentor: Bob Strecansky (@bobstrecansky)
- Upstream Issue (Project URL): https://github.com/open-telemetry/opentelemetry-php/projects/5

#### TiKV

##### Coprocessor plugin

- Description: Implement a basic coprocessor plugin runtime on top of Wasmer.
- Recommended Skills: Rust
- Mentor(s): Andy Lok (@andylokandy), Alex Chi (@skyzh)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/8036

##### Implement Jepsen test for TiKV

- Description: Build an intergration test framework with Jepsen for TiKV,
  using the TiKV Rust client.
- Recommended Skills: Rust/Clojure
- Mentor(s): ZiQian Qin (@ekexium), Andy Lok (@andylokandy)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/9588

##### Build on Windows

- Description: Make TiKV build and run on Windows.
- Recommended Skills: Rust
- Mentor(s): Andy Lok (@andylokandy)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/9103

#### Tremor

##### Support for Syslog Protocol

- Description: Enable Tremor to receive and send Syslog Protocol Messages (https://tools.ietf.org/html/rfc5424) , supporting as much syslog implementations as possible that might deviate from the standard
- Recommended Skills: Rust Programming (beginner is ok), some experience with syslog (beginner is ok)
- Mentor(s): Matthias Wahl (@mfelsche), Anup Dhamala (@anupdhml)
- Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/12

##### Continuous benchmarking and benchmarking infrastructure

- Description: Set up infrastructure for running Tremor benchmarks periodically
- Recommended Skills: Rust Programming, Github CI, Shell scripting, Linux command line
- Mentor(s): Anup Dhamala (@anupdhml), Darach Ennis (@darach)
- Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/722

##### Property based tests for tremor-script

- Description: Extend property-based testing for tremor script
- Recommended Skills: Erlang Programming, Rust Programming, Property Based Testing (EQC)
- Mentor(s): Heinz Gies (@Licenser), Matthias Wahl (@mfelsche)
- Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/721

##### Google Cloud Connector

- Description: Enhance tremor with connectors for the Google Cloud Platform
- Recommended Skills: Rust programming ( beginner is ok ), some experience with Google Cloud or other platforms
- Mentor(s): Darach Ennis (@darach), Heinz Gies (@Licenser)
- Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/724

#### Chaos Mesh

##### Chaos Engineering as a Service

- Description: Chaos Mesh is not like Chaos Engineering as a Service now:

  - Poor observability: the result of chaos experiments are not easy to observe and judge, the users need to check whether the Chaos effects by manual.
  - [Chaosd](https://github.com/chaos-mesh/chaosd)(for physic node) is too simple: only supports command line operation, does not support task scheduling and life cycle management.
  - The costs of learning operation and maintenance are high: the maintenance of Chaos Mesh and Chaosd are not unified.

  It should a unified place to manage Chaos experiments for multiple platforms and multiple clusters, and can see the monitoring data of the experiment.

- Recommended Skills: Golang
- Mentor(s): Wang Xiang (@[WangXiangUSTC](https://github.com/WangXiangUSTC))
- Upstream Issue (URL): https://github.com/chaos-mesh/chaos-mesh/issues/1462

##### Enriching AWS chaos

- Description: We have already made a technical previewing implementation for AWS Chaos, it could inject some simple chaos now, such as stop/restart the EC2. And we want to make it more stable and structured. And there is another direction of AWS chaos: AWS service failure. It might be useful for testing infrastructure automation tools. Basically there are two things that we want to do: - enriching e2e test cases using localstack - more chaos by simulating AWS service failure by hijacking `awscli` request to a modified localstack
- Recommended Skills: Golang, Python(Optional)
- Mentor(s): Zhiqiang Zhou(@STRRL)
- Upstream Issue (URL): https://github.com/chaos-mesh/chaos-mesh/issues/1472

#### KubeEdge

##### Support multi-instance high availability cloudcore for large-scale cluster

- Description:Cloudcore is the core component of kubeegde in cloud, which is responsible for sending resources of cloud to the edge. Now the cloudcore is running in leader/follower mode, only one instance can run at the same time. For the more larger scale cluster, we need to support multi-instance high availability for cloudcore.
- Recommended Skills: Golang, KubeEdge
- Mentor(s): Kevin(Zefeng) Wang (@[kevin-wangzefeng](https://github.com/kevin-wangzefeng))
- Upstream Issue (URL): https://github.com/kubeedge/kubeedge/issues/2543

##### Design more tests for specific scenarios of edge computing

- We need to do some designs for adding more tests especially for the specific scenarios of edge computing, eg:
  - Application migration when the network is disconnected
  - System stability when the network is unstable
  - Run large-scale cluster tests periodically
- Recommended Skills: Golang, KubeEdge
- Mentor(s): Fisher(Fei) Xu (@[fisherxu](https://github.com/fisherxu))
- Upstream Issue (URL): https://github.com/kubeedge/kubeedge/issues/2544

##### Integration and verification of third-party CNI/CSI based on the edge side list-watch

- We need to integration and verification of third-party CNI/CSI for the edge applications.
- Recommended Skills: Golang, KubeEdge
- Mentor(s): Zhe Gong (@[GsssC](https://github.com/GsssC)), Fisher(Fei) Xu (@[fisherxu](https://github.com/fisherxu))
- Upstream Issue (URL): https://github.com/kubeedge/kubeedge/issues/2545

#### Thanos

##### Multi-Tenant Instrumentation for Thanos operations

- Description: Thanos can store and serve the data for multiple tenants at once. However, currently, Thanos does not always provide the needed introspective information about actions related to the tenant (e.g external labels). Allowing admins to obtain tenants’ information on per tenant queries, operations and ingestion would give actionable insight and answer questions such as: What data is used/queried the most for a tenant X? During this mentorship, you will implement logic that will enormously improve the experience of running multi-tenant Thanos on the scale. You will learn more about Go, instrumentation, multitenancy, APIs, and SRE concepts like SLOs.
- Recommended Skills: Go, Prometheus (basic), Instrumentation (basic)
- Mentor(s): [@yashrsharma44](https://github.com/yashrsharma44), [@kakkoyun](https://github.com/kakkoyun)
- Upstream Issue (URL): 
  - https://github.com/thanos-io/thanos/issues/3572


##### Stateless Ruler

- Description: Thanos Ruler is a critical component in Thanos that is responsible for the alert evaluation and recording rules. However, a few extensive rules can create a significant amount of resulting time-series, limiting the scalability of Thanos Rule, as it uses a single embedded TSDB. Recording/Alerting Rules are a substantial piece of monitoring infrastructure, so we want to ensure users can operate Rulers and scale them in an easy way. There is no way to scale rule evaluation and storage today except functionally sharding rules onto multiple instances of the Thanos Ruler component. Luckily, we have already solved scaling storage of time-series across various processes using Thanos Receiver. To scale rule evaluations and storage, during this mentorship, you will have a chance to implement the proposal that allows the Thanos rule component to have a stateless mode, storing results of queries by sending them to a Thanos receive hash-ring instead of storing them locally. You will learn about Go, Time-series databases, distributed system design, Prometheus, and of course Thanos.
- Recommended Skills: Go
- Mentor(s): [@bwplotka](https://github.com/bwplotka), [@squat](https://github.com/squat), [@kakkoyun](https://github.com/kakkoyun)
- Upstream Issue (URL):
  - https://github.com/thanos-io/thanos/issues/3761

##### Vertical Block Sharding

- Description: Current Thanos topology is generally horizontally scalable. However, the use cases and approaches of deploying Thanos shifted through time. While initially, Thanos was enabling ingestion through sidecars, now it’s not uncommon to see Thanos receiver usage. This means that the invariant of definite size TSDB block is no longer true. With offline deduplication and arbitrary Receive tenants data can be ingested into huge, often hundreds GB size [TSDB blocks](https://thanos.io/tip/thanos/storage.md/#tsdb-block). This makes it harder to scale compaction and query operation on top of such blocks. The idea of this work is to vertically split larger blocks into smaller ones with the common scaling technique called sharding. As a mentee, we will guide you to make progress towards this goal by teaming up with experienced developers to deliver transparent automation for vertical block sharding! We are looking forward to working with you! During this mentorship, you will learn a lot about programming in Go, distributed Systems, TimeSeries Database, Prometheus, Thanos!
- Recommended Skills: Go
- Mentor(s): [@bwplotka](https://github.com/bwplotka), [@kakkoyun](https://github.com/kakkoyun)
- Upstream Issue (URL):
  - https://github.com/thanos-io/thanos/issues/3068

##### gRPC Exemplars API

- Description: Exemplars are an amazing solution that allows linking metrics to logs, traces, and more! Recently Prometheus added support to Exemplars as defined by OpenMetrics API. In Thanos with our powerful deployment flexibility, we can allow federating Exemplars up to multi-cluster, global level! During this task mentee will develop together with mentors a new gRPC API that allows to access Prometheus exemplars on Thanos level. This is a work item bringing novel and edge technology to the open-source, which will enormously help Thanos users. During this mentorship, you will learn a lot about programming in Go, distributed Systems, gRPC Observability, Prometheus, Thanos!
- Recommended Skills: Go, gRPC
- Mentor(s): [@squat](https://github.com/squat), [@prmsrswt](https://github.com/prmsrswt)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3435


#### OpenEBS

##### A easy to use command-line interface (CLI) for OpenEBS.

- Description: OpenEBS is completely Kubernetes native and is implemented using microservices. OpenEBS can be installed via kubectl or helm chart and managed via Kubernetes custom resources. To improve the usability of OpenEBS, the proposal is to have a easy to use OpenEBS CLI (similar to `kubectl`) to perform operations like:
  - upgrade  => Upgrade OpenEBS pools and volumes
  - status   => Print the readiness of various components, verify prerequisites are met to run openebs pools and volumes.
  - version  => Print the OpenEBS version and associated images
  - describe => Describe OpenEBS component status like component/control plane, pools and volumes.
  - create   => Create OpenEBS resources
  - delete   => Delete OpenEBS resources

- Recommended Skills: Go, Kubernetes
- Mentor(s): Kiran Mova (@kmova)
- Upstream Issues (URL): https://github.com/openebs/openebs/issues/2946

##### Grafana Dashboards for monitoring OpenEBS.

- Description: OpenEBS is completely Kubernetes native and is implemented using microservices. OpenEBS can be installed via kubectl or helm chart and managed via Kubernetes custom resources. Each of the OpenEBS components/services expose prometheus metrics. This proposal is to provide Grafana dashboards for monitoring the OpenEBS services.

- Recommended Skills: Go, Kubernetes, Grafana, Prometheus
- Mentor(s): Kiran Mova (@kmova)
- Upstream Issues (URL): https://github.com/openebs/openebs/issues/3333

 
=======

#### Volcano

##### Enhanced Support to GPU

- Description: Volcano has supported GPU sharing, but not enough. It's a lack of supporting multiple GPUs used for one container in device plugin. Your task is to complete related features about GPU support. 
- Recommended Skills: Go(basic), Kubernetes(basic), Volcano
- Mentor(s): [@William-Wang](https://github.com/william-wang)
- Upstream Issue (URL):
  - https://github.com/volcano-sh/devices/issues/12
  
##### System Stability Enhancement 

- Description: Add more UT/E2E to cover more classical scenarios. Conduct complete stress testing and regression testing, Offer test report, give the improvement plan and put it into practice.
- Recommended Skills: Go, Test
- Mentor(s): [@Thor-wl](https://github.com/Thor-wl), [@William-Wang](https://github.com/william-wang)
- Upstream Issue (URL):
  - https://github.com/volcano-sh/volcano/issues/1284

##### Reading Materials Update And Supplement

- Description: In order to make volcano easy to use and understand, you task is to improve reading materials.
- Recommended Skills: English, Volcano
- Mentor(s): [@Thor-wl](https://github.com/Thor-wl)
- Upstream Issue (URL):
  - https://github.com/volcano-sh/volcano/issues/1285

#### Crossplane

##### Crisscross - Write controllers in your language of choice

-	Description: Crossplane provides a broad library of Kubernetes custom resources that let you orchestrate systems external to Kubernetes. These include AWS S3 buckets, GCP CloudSQL instances, Azure Cosmos tables, plain old SQL databases, Helm releases, and Dominos pizzas. We call these 'managed resources'. Crossplane's goal is to allow platform teams to build their own custom resources that are in turn composed of these primitives without needing to write Kubernetes controllers in Go. [Crisscross](https://github.com/hasheddan/crisscross) is an experimental project that lets folks add new managed resources to Crossplane without writing Go code. We would love help fleshing out the Crisscross proof of concept. This will likely take the form of writing a web service with endpoints that accept CRUD verbs from Crossplane and uses them to orchstrate an external system - for example CRUDing a DigitalOcean Droplet or an OpenStack Server. Familiarity with Go is a bonus (Crisscross itself is written in Go), but not necessary (Crisscross managed resources can be written in any language).
-	Recommended Skills: Programming REST APIs in any language. Some Go experience, or interest in learning.
-	Mentor(s): @hasheddan, @negz, @jbw976
-	Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/2109

##### Import cloud resources into Crossplane

-	Description: Crossplane provides a broad library of Kubernetes custom resources that let you orchestrate systems external to Kubernetes. These include AWS S3 buckets, GCP CloudSQL instances, Azure Cosmos tables, plain old SQL databases, Helm releases, and Dominos pizzas. We call these 'managed resources'. Crossplane's goal is to allow platform teams to build their own custom resources that are in turn composed of these primitives without needing to write Kubernetes controllers in Go. Crossplane currently supports 'importing' your existing cloud infrastructure (databases etc) into Crossplane management, but doing so is onerous. You need to write Crossplane YAML that exactly matches the current state of your infrastructure. Ideally Crossplane would provide an import tool that our users could point at an existing RDS instance (for example) in order to generate the Crossplane YAML that represented that instance.
-	Recommended Skills: Ideally Go programming, though we'd consider prototyping this tool in another language.
-	Mentor(s): @negz, @hasheddan, @jbw976
-	Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/1243

##### Automated end-to-end testing infrastructure

-	Description: Crossplane provides a broad library of Kubernetes custom resources that let you orchestrate systems external to Kubernetes. These include AWS S3 buckets, GCP CloudSQL instances, Azure Cosmos tables, plain old SQL databases, Helm releases, and Dominos pizzas. We call these 'managed resources'. Crossplane's goal is to allow platform teams to build their own custom resources that are in turn composed of these primitives without needing to write Kubernetes controllers in Go. Crossplane currently has extensive unit testing, but not much in the way of automated integration/e2e tests. We have a very broad surface area to test (we have around a hundred controllers that interact with cloud providers) and would like to establish some integration testing best practices so that the community can easily contribute integration tests when they work on Crossplane.
-	Recommended Skills: Go programming, testing best practices.
-	Mentor(s): @hasheddan, @negz, @jbw976
-	Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/1033

