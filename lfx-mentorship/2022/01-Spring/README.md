## Q1

_Status: Completed_

### Timeline

**Spring Term: March 1st - May 31st**

- project applications open: Jan 20th - Jan 31st \(1.5 weeks\)
- mentees applications open: Feb 1st - Feb 12th \(2 weeks\)
- application review by the mentors/admission decisions/HR paperwork: Feb 15th - Feb 26th

Mentorship duration - three months \(12 weeks - full-time schedule\)

- March 1 (Week 1): Mentorship program begins with the initial work assignments
- April 12 (End of Week 6): Midterm mentee evaluations and first stipend payments
- May 31 (End of Week 12): Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals

## Participating Projects

#### Kubernetes

##### SIG Storage

###### [Kubernetes working group for CSI driver](https://mentorship.lfx.linuxfoundation.org/project/51cb21c9-62eb-4e1c-9897-08e554a78b32)

- Description: SContainer Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes. The idea is to enhance a few CSI features(e.g. NFS, SMB) and also add e2e, sanity tests to cover those features, e.g. inline volume support, Windows support etc.
- Recommended Skills: golang, Kubernetes
- Mentors: Andy Zhang (@andyzhangx)
- Upstream Issue (URL):
  - https://github.com/kubernetes-csi/csi-driver-nfs/issues
  - https://github.com/kubernetes-csi/csi-driver-smb/issues

##### WG Policy

###### [CIS Benchmarks Policy Report](https://mentorship.lfx.linuxfoundation.org/project/0fd19dde-0990-4987-9ab3-2fe9b2ce26b2)

- Description: Execute CIS benchmark checks and produce a Policy Report CRD.
- Recommended Skills: Golang, CLI, JSON
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/29

##### SIG Usability

###### [Jobs-to-Be-Done study](https://mentorship.lfx.linuxfoundation.org/project/a06b291e-6cab-4506-8d32-2d15264e48dc)

Qualitative analysis of user interview recordings for Jobs-to-Be-done study

- Description: SIG Usability is conducting a Jobs-to-Be-Done study meant to identify the highest impact areas for improving Kubernetes UX. We are in the process of conducting user interviews and need some help going back through the transcribed recordings to annotate and pull out insights from the conversations. Overall, this is a great opportunity for someone who’s studied or engaged in UX/IA/Usability to get involved in open source.
- Recommended Skills: User Research, UX, synthesis
- Mentors: Gaby Moreno (@morengab), Tasha Drew (@tashimi)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/sig-usability/issues/9

##### SIG Architecture

###### [Develop tools for evaluating dependency updates to Kubernetes](https://mentorship.lfx.linuxfoundation.org/project/7c510003-5f52-45c2-b5de-b6664851d3de)

- Description: Implement command line utilities that can help Kubernetes developers evaluate new dependencies by capturing statistics/metrics and estimating cost of adding something new. This will involve diving deep into golang dependency chains (transitive/shared dependencies) and coming up with new metrics to estimate how burdensome something new can be or how much we will save by getting rid of something so we can prioritize work and get more efficient from a developer workflow perspective.
- Recommended Skills: Golang, CLI
- Mentor(s): Davanum Srinivas (@dims)
- Upstream Issue (URL): [code organization meeting notes](https://docs.google.com/document/d/1HtTI0rJEGP_MSf6eO87aCmx_tzpovPAAg7U2Zxwm8FE/edit?ts=5c9d0a4c#heading=h.8phgvuqrxjsg)

##### SIG Cluster Lifecycle

###### [Add support for phases in "kubeadm upgrade apply"](https://mentorship.lfx.linuxfoundation.org/project/790f44dd-a690-4149-aad7-c7a5cbd7dc96)

- Description: Implement support for "phases" in the "upgrade apply" command of kubeadm. Phases act like subcommands and allow granular execution of functiodnality.
- Recommended Skills: Golang, CLI
- Mentor(s): Lubomir I. Ivanov (@neolit123)
- Upstream Issue (URL): https://github.com/kubernetes/kubeadm/issues/1318

#### Keptn

##### [Improve Prometheus integration and exposure of Prometheus metrics](https://mentorship.lfx.linuxfoundation.org/project/54adaade-8537-4150-b4ea-988454615ed7)

- Description: In the current implementation the Prometheus integration in Keptn lacks customisability and configuration options. Also, Keptn core services should be instrumented to expose Prometheus metrics. The goal of this project is to refactor or rewrite the integration and add Prometheus to Keptn core services.
- Recommended Skills: golang, experience with Prometheus
- Mentor(s): Jürgen Etzlstorfer (@jetzlstorfer)
- Upstream Issue (URL): https://github.com/keptn-contrib/prometheus-service/issues/53

##### [Generate service skeleton via CLI](https://mentorship.lfx.linuxfoundation.org/project/630a656a-74ee-4494-9467-b10201ae9b20)

- Description: Provide a CLI command for Keptn CLI that generates a template repository to start developing a Keptn service integration.
- Recommended Skills: golang, go-templates, Docker
- Mentor(s): Jürgen Etzlstorfer(@jetzlstorfer)
- Upstream Issue (URL): https://github.com/keptn/keptn/issues/3034

#### Kyverno

##### [Monitor Kyverno with Prometheus](https://mentorship.lfx.linuxfoundation.org/project/e01ba557-af88-4716-8efe-398ce31a6fb2)

- Description: Publish Kyverno policy execution metrics to Prometheus and Grafana
- Recommended Skills: Golang, Prometheus
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/256

##### [Integration of Kyverno with Litmus for chaos testing](https://mentorship.lfx.linuxfoundation.org/project/523735c3-9cb9-466f-977b-5719635a5ce7)

- Description: Integrate Litmus Chaos testing with Kyevrno.
- Recommended Skills: Golang, LitmusChaos
- Mentor(s): Shuting Zhao (@realshuting), Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/1622

#### OpenTelemetry

##### [Work through OpenTelemetry User Research Documentation and Implement Fixes](https://mentorship.lfx.linuxfoundation.org/project/08b86a82-9603-4b17-89b1-cace6b341c16)

- Description: Implement the fixes suggested in the user research documentation to make this project more consumable for end users.
- Recommended Skills: PHP
- Mentor: Bob Strecansky (@bobstrecansky)
- Upstream Issue (Project URL): https://github.com/open-telemetry/opentelemetry-php/projects/5

#### TiKV

##### [Coprocessor plugin](https://mentorship.lfx.linuxfoundation.org/project/f0bb4ba5-e7e9-4678-8cd1-75f7a7977381)

- Description: Implement a basic coprocessor plugin runtime on top of Wasmer.
- Recommended Skills: Rust
- Mentor(s): Andy Lok (@andylokandy), Alex Chi (@skyzh)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/8036

##### [Implement Jepsen test for TiKV](https://mentorship.lfx.linuxfoundation.org/project/1417be44-d2e2-4cdd-8ba7-9de70b87e1a2)

- Description: Build an intergration test framework with Jepsen for TiKV,
  using the TiKV Rust client.
- Recommended Skills: Rust/Clojure
- Mentor(s): ZiQian Qin (@ekexium), Andy Lok (@andylokandy)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/9588

##### [Build on Windows](https://mentorship.lfx.linuxfoundation.org/project/0b27faeb-8d89-4f25-aabf-a6e4908c8450)

- Description: Make TiKV build and run on Windows.
- Recommended Skills: Rust
- Mentor(s): Andy Lok (@andylokandy)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/9103

#### Tremor

##### [Support for Syslog Protocol](https://mentorship.lfx.linuxfoundation.org/project/8e98bdb5-a131-4298-a195-31962d1a8564)

- Description: Enable Tremor to receive and send Syslog Protocol Messages (https://tools.ietf.org/html/rfc5424) , supporting as much syslog implementations as possible that might deviate from the standard
- Recommended Skills: Rust Programming (beginner is ok), some experience with syslog (beginner is ok)
- Mentor(s): Matthias Wahl (@mfelsche), Anup Dhamala (@anupdhml)
- Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/12

##### [Continuous benchmarking and benchmarking infrastructure](https://mentorship.lfx.linuxfoundation.org/project/187dd140-0a0b-44f0-b5b8-23910692c1cf)

- Description: Set up infrastructure for running Tremor benchmarks periodically
- Recommended Skills: Rust Programming, Github CI, Shell scripting, Linux command line
- Mentor(s): Anup Dhamala (@anupdhml), Darach Ennis (@darach)
- Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/722

##### [Property based tests for tremor-script](https://mentorship.lfx.linuxfoundation.org/project/04fda726-ab2a-4111-aaf2-3ec7b95771e5)

- Description: Extend property-based testing for tremor script
- Recommended Skills: Erlang Programming, Rust Programming, Property Based Testing (EQC)
- Mentor(s): Heinz Gies (@Licenser), Matthias Wahl (@mfelsche)
- Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/721

##### [Google Cloud Connector](https://mentorship.lfx.linuxfoundation.org/project/4e30e06e-1e2e-4f0b-b618-834599446c0c)

- Description: Enhance tremor with connectors for the Google Cloud Platform
- Recommended Skills: Rust programming ( beginner is ok ), some experience with Google Cloud or other platforms
- Mentor(s): Darach Ennis (@darach), Heinz Gies (@Licenser)
- Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/724

#### Chaos Mesh

##### [Chaos Engineering as a Service](https://mentorship.lfx.linuxfoundation.org/project/5dd87db8-769b-4647-97c1-2bc4ab571808)

- Description: Chaos Mesh is not like Chaos Engineering as a Service now:
  - Poor observability: the result of chaos experiments are not easy to observe and judge, the users need to check whether the Chaos effects by manual.
  - [Chaosd](https://github.com/chaos-mesh/chaosd)(for physic node) is too simple: only supports command line operation, does not support task scheduling and life cycle management.
  - The costs of learning operation and maintenance are high: the maintenance of Chaos Mesh and Chaosd are not unified.
  - It should be a unified place to manage Chaos experiments for multiple platforms and multiple clusters, and can see the monitoring data of the experiment.
- Recommended Skills: Golang
- Mentor(s): Wang Xiang (@[WangXiangUSTC](https://github.com/WangXiangUSTC))
- Upstream Issue (URL): https://github.com/chaos-mesh/chaos-mesh/issues/1462

##### [Enriching AWS chaos](https://mentorship.lfx.linuxfoundation.org/project/1d49ebad-29fa-430c-8492-44f29ee61cc1)

- Description: We have already made a technical previewing implementation for AWS Chaos, it could inject some simple chaos now, such as stop/restart the EC2. And we want to make it more stable and structured. And there is another direction of AWS chaos: AWS service failure. It might be useful for testing infrastructure automation tools. Basically there are two things that we want to do: - enriching e2e test cases using localstack - more chaos by simulating AWS service failure by hijacking `awscli` request to a modified localstack
- Recommended Skills: Golang, Python(Optional)
- Mentor(s): Zhiqiang Zhou(@STRRL)
- Upstream Issue (URL): https://github.com/chaos-mesh/chaos-mesh/issues/1472

#### KubeEdge

##### [Support multi-instance high availability cloudcore for large-scale cluster](https://mentorship.lfx.linuxfoundation.org/project/083f4362-1046-4939-9db7-fd0553de5875)

- Description:Cloudcore is the core component of kubeegde in cloud, which is responsible for sending resources of cloud to the edge. Now the cloudcore is running in leader/follower mode, only one instance can run at the same time. For the more larger scale cluster, we need to support multi-instance high availability for cloudcore.
- Recommended Skills: Golang, KubeEdge
- Mentor(s): Kevin(Zefeng) Wang (@[kevin-wangzefeng](https://github.com/kevin-wangzefeng))
- Upstream Issue (URL): https://github.com/kubeedge/kubeedge/issues/2543

##### [Design more tests for specific scenarios of edge computing](https://mentorship.lfx.linuxfoundation.org/project/cf597b73-56fd-45b8-a605-5bb73f6b838d)

- We need to do some designs for adding more tests especially for the specific scenarios of edge computing, eg:
  - Application migration when the network is disconnected
  - System stability when the network is unstable
  - Run large-scale cluster tests periodically
- Recommended Skills: Golang, KubeEdge
- Mentor(s): Fisher(Fei) Xu (@[fisherxu](https://github.com/fisherxu))
- Upstream Issue (URL): https://github.com/kubeedge/kubeedge/issues/2544

##### [Integration and verification of third-party CNI/CSI based on the edge side list-watch](https://mentorship.lfx.linuxfoundation.org/project/fc674c5f-3429-4591-9cae-8f58d347560f)

- We need to integration and verification of third-party CNI/CSI for the edge applications.
- Recommended Skills: Golang, KubeEdge
- Mentor(s): Zhe Gong (@[GsssC](https://github.com/GsssC)), Fisher(Fei) Xu (@[fisherxu](https://github.com/fisherxu))
- Upstream Issue (URL): https://github.com/kubeedge/kubeedge/issues/2545

#### Thanos

##### [Multi-Tenant Instrumentation for Thanos operations](https://mentorship.lfx.linuxfoundation.org/project/328fcf60-0dd2-425d-93a4-06046e4166fb)

- Description: Thanos can store and serve the data for multiple tenants at once. However, currently, Thanos does not always provide the needed introspective information about actions related to the tenant (e.g external labels). Allowing admins to obtain tenants’ information on per tenant queries, operations and ingestion would give actionable insight and answer questions such as: What data is used/queried the most for a tenant X? During this mentorship, you will implement logic that will enormously improve the experience of running multi-tenant Thanos on the scale. You will learn more about Go, instrumentation, multitenancy, APIs, and SRE concepts like SLOs.
- Recommended Skills: Go, Prometheus (basic), Instrumentation (basic)
- Mentor(s): [@yashrsharma44](https://github.com/yashrsharma44), [@kakkoyun](https://github.com/kakkoyun)
- Upstream Issue (URL):
  - https://github.com/thanos-io/thanos/issues/3572

##### [Stateless Ruler](https://mentorship.lfx.linuxfoundation.org/project/74a898a5-d741-4c92-87c9-456541214395)

- Description: Thanos Ruler is a critical component in Thanos that is responsible for the alert evaluation and recording rules. However, a few extensive rules can create a significant amount of resulting time-series, limiting the scalability of Thanos Rule, as it uses a single embedded TSDB. Recording/Alerting Rules are a substantial piece of monitoring infrastructure, so we want to ensure users can operate Rulers and scale them in an easy way. There is no way to scale rule evaluation and storage today except functionally sharding rules onto multiple instances of the Thanos Ruler component. Luckily, we have already solved scaling storage of time-series across various processes using Thanos Receiver. To scale rule evaluations and storage, during this mentorship, you will have a chance to implement the proposal that allows the Thanos rule component to have a stateless mode, storing results of queries by sending them to a Thanos receive hash-ring instead of storing them locally. You will learn about Go, Time-series databases, distributed system design, Prometheus, and of course Thanos.
- Recommended Skills: Go
- Mentor(s): [@bwplotka](https://github.com/bwplotka), [@squat](https://github.com/squat), [@kakkoyun](https://github.com/kakkoyun)
- Upstream Issue (URL):
  - https://github.com/thanos-io/thanos/issues/3761

##### [Vertical Block Sharding](https://mentorship.lfx.linuxfoundation.org/project/9920021d-11d2-4c7b-9534-c13e1b5660cc)

- Description: Current Thanos topology is generally horizontally scalable. However, the use cases and approaches of deploying Thanos shifted through time. While initially, Thanos was enabling ingestion through sidecars, now it’s not uncommon to see Thanos receiver usage. This means that the invariant of definite size TSDB block is no longer true. With offline deduplication and arbitrary Receive tenants data can be ingested into huge, often hundreds GB size [TSDB blocks](https://thanos.io/tip/thanos/storage.md/#tsdb-block). This makes it harder to scale compaction and query operation on top of such blocks. The idea of this work is to vertically split larger blocks into smaller ones with the common scaling technique called sharding. As a mentee, we will guide you to make progress towards this goal by teaming up with experienced developers to deliver transparent automation for vertical block sharding! We are looking forward to working with you! During this mentorship, you will learn a lot about programming in Go, distributed Systems, TimeSeries Database, Prometheus, Thanos!
- Recommended Skills: Go
- Mentor(s): [@bwplotka](https://github.com/bwplotka), [@kakkoyun](https://github.com/kakkoyun)
- Upstream Issue (URL):
  - https://github.com/thanos-io/thanos/issues/3068

##### [gRPC Exemplars API](https://mentorship.lfx.linuxfoundation.org/project/7ce99708-8ead-40df-ba12-6ed02f639c04)

- Description: Exemplars are an amazing solution that allows linking metrics to logs, traces, and more! Recently Prometheus added support to Exemplars as defined by OpenMetrics API. In Thanos with our powerful deployment flexibility, we can allow federating Exemplars up to multi-cluster, global level! During this task mentee will develop together with mentors a new gRPC API that allows to access Prometheus exemplars on Thanos level. This is a work item bringing novel and edge technology to the open-source, which will enormously help Thanos users. During this mentorship, you will learn a lot about programming in Go, distributed Systems, gRPC Observability, Prometheus, Thanos!
- Recommended Skills: Go, gRPC
- Mentor(s): [@squat](https://github.com/squat), [@prmsrswt](https://github.com/prmsrswt)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3435

#### Crossplane

##### [Crisscross - Write controllers in your language of choice](https://mentorship.lfx.linuxfoundation.org/project/55f5e428-bf78-480d-81db-55eef0c4d293)

- Description: Crossplane provides a broad library of Kubernetes custom resources that let you orchestrate systems external to Kubernetes. These include AWS S3 buckets, GCP CloudSQL instances, Azure Cosmos tables, plain old SQL databases, Helm releases, and Dominos pizzas. We call these 'managed resources'. Crossplane's goal is to allow platform teams to build their own custom resources that are in turn composed of these primitives without needing to write Kubernetes controllers in Go. [Crisscross](https://github.com/hasheddan/crisscross) is an experimental project that lets folks add new managed resources to Crossplane without writing Go code. We would love help fleshing out the Crisscross proof of concept. This will likely take the form of writing a web service with endpoints that accept CRUD verbs from Crossplane and uses them to orchstrate an external system - for example CRUDing a DigitalOcean Droplet or an OpenStack Server. Familiarity with Go is a bonus (Crisscross itself is written in Go), but not necessary (Crisscross managed resources can be written in any language).
- Recommended Skills: Programming REST APIs in any language. Some Go experience, or interest in learning.
- Mentor(s): @hasheddan, @muvaf, @jbw976
- Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/2109

##### [Import cloud resources into Crossplane](https://mentorship.lfx.linuxfoundation.org/project/c63704b7-7199-486a-b715-4f17e4cf64ef)

- Description: Crossplane provides a broad library of Kubernetes custom resources that let you orchestrate systems external to Kubernetes. These include AWS S3 buckets, GCP CloudSQL instances, Azure Cosmos tables, plain old SQL databases, Helm releases, and Dominos pizzas. We call these 'managed resources'. Crossplane's goal is to allow platform teams to build their own custom resources that are in turn composed of these primitives without needing to write Kubernetes controllers in Go. Crossplane currently supports 'importing' your existing cloud infrastructure (databases etc) into Crossplane management, but doing so is onerous. You need to write Crossplane YAML that exactly matches the current state of your infrastructure. Ideally Crossplane would provide an import tool that our users could point at an existing RDS instance (for example) in order to generate the Crossplane YAML that represented that instance.
- Recommended Skills: Ideally Go programming, though we'd consider prototyping this tool in another language.
- Mentor(s): @muvaf, @hasheddan, @jbw976
- Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/1243

##### [Automated end-to-end testing infrastructure](https://mentorship.lfx.linuxfoundation.org/project/2e2239cf-2964-434f-a5c9-676b857fc29a)

- Description: Crossplane provides a broad library of Kubernetes custom resources that let you orchestrate systems external to Kubernetes. These include AWS S3 buckets, GCP CloudSQL instances, Azure Cosmos tables, plain old SQL databases, Helm releases, and Dominos pizzas. We call these 'managed resources'. Crossplane's goal is to allow platform teams to build their own custom resources that are in turn composed of these primitives without needing to write Kubernetes controllers in Go. Crossplane currently has extensive unit testing, but not much in the way of automated integration/e2e tests. We have a very broad surface area to test (we have around a hundred controllers that interact with cloud providers) and would like to establish some integration testing best practices so that the community can easily contribute integration tests when they work on Crossplane.
- Recommended Skills: Go programming, testing best practices.
- Mentor(s): @hasheddan, @muvaf, @jbw976
- Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/1033

#### OpenEBS

##### [A easy to use command-line interface (CLI) for OpenEBS](https://mentorship.lfx.linuxfoundation.org/project/ca619db0-1b2d-4fbb-a9a7-d4d24c4340c3)

- Description: OpenEBS is completely Kubernetes native and is implemented using microservices. OpenEBS can be installed via kubectl or helm chart and managed via Kubernetes custom resources. To improve the usability of OpenEBS, the proposal is to have a easy to use OpenEBS CLI (similar to `kubectl`) to perform operations like:
  - upgrade => Upgrade OpenEBS pools and volumes
  - status => Print the readiness of various components, verify prerequisites are met to run openebs pools and volumes.
  - version => Print the OpenEBS version and associated images
  - describe => Describe OpenEBS component status like component/control plane, pools and volumes.
  - create => Create OpenEBS resources
  - delete => Delete OpenEBS resources
- Recommended Skills: Go, Kubernetes
- Mentor(s): Kiran Mova (@kmova)
- Upstream Issues (URL): https://github.com/openebs/openebs/issues/2946

##### [Grafana Dashboards for monitoring OpenEBS](https://mentorship.lfx.linuxfoundation.org/project/d797e3e7-a036-4aa1-831a-fd06b00ed316)

- Description: OpenEBS is completely Kubernetes native and is implemented using microservices. OpenEBS can be installed via kubectl or helm chart and managed via Kubernetes custom resources. Each of the OpenEBS components/services expose prometheus metrics. This proposal is to provide Grafana dashboards for monitoring the OpenEBS services.
- Recommended Skills: Go, Kubernetes, Grafana, Prometheus
- Mentor(s): Kiran Mova (@kmova)
- Upstream Issues (URL): https://github.com/openebs/openebs/issues/3333

#### Volcano

##### [Enhanced Support to GPU](https://mentorship.lfx.linuxfoundation.org/project/4d74f4f4-7eb0-4568-8e25-c58a736c08dd)

- Description: Volcano has supported GPU sharing, but not enough. It's a lack of supporting multiple GPUs used for one container in device plugin. Your task is to complete related features about GPU support.
- Recommended Skills: Go(basic), Kubernetes(basic), Volcano
- Mentor(s): [@William-Wang](https://github.com/william-wang)
- Upstream Issue (URL):
  - https://github.com/volcano-sh/devices/issues/12

##### [System Stability Enhancement](https://mentorship.lfx.linuxfoundation.org/project/79b69ae1-0ce4-46a6-affe-6338022ff40a)

- Description: Add more UT/E2E to cover more classical scenarios. Conduct complete stress testing and regression testing, Offer test report, give the improvement plan and put it into practice.
- Recommended Skills: Go, Test
- Mentor(s): [@Thor-wl](https://github.com/Thor-wl), [@William-Wang](https://github.com/william-wang)
- Upstream Issue (URL):
  - https://github.com/volcano-sh/volcano/issues/1284

##### [Reading Materials Update And Supplement](https://mentorship.lfx.linuxfoundation.org/project/3562429e-6650-49e5-bcac-87095cdb0622)

- Description: In order to make volcano easy to use and understand, you task is to improve reading materials.
- Recommended Skills: English, Volcano
- Mentor(s): [@Thor-wl](https://github.com/Thor-wl)
- Upstream Issue (URL):
  - https://github.com/volcano-sh/volcano/issues/1285

#### Project Rekor

##### [CNCF release signing security](https://mentorship.lfx.linuxfoundation.org/project/8ffde3ac-79a5-4715-8d4d-10f2ce952536)

- Description: [Rekor](https://rekor.dev) is a new project that provides a secure supply chain transparency log / ledger. The proposed work is to research how CNCF projects could implement cryptographic signing of releases and store those signatures into rekors transparency log. Following this, simple steps and methods should be outlined for how users can gain security guarantees on releases available for download.
- Recommended Skills: Scripting, Github, information security (understand basic application of crypto signing, for example GPG).
- Mentor(s): @lukehinds, @dlorenc, @bobcallaway
- Upstream Issue (URL): https://github.com/projectrekor/rekor/issues/144

#### LitmusChaos

##### [Add event & alerts infrastructure to the litmus portal](https://mentorship.lfx.linuxfoundation.org/project/d9968740-faa6-4f6a-a943-dc9f427fd81c)

- Description: [LitmusChaos](https://litmuschaos.io) is a Kubernetes native chaos engineering framework that helps SREs & developers find weaknesses in their deployments, with the chaos intent being defined via custom resources. The Litmus portal is a dashboard focused on simplifying the chaos-engineering experience for users and allows execution of complex "chaos workflows" that comprise one or more chaos experiments. This portal dashboard needs to be improved to hold more observability information, primarily in the form of an event log & alerts to help users gather important information about the state of the chaos experiments & cluster in general.
- Recommended Skills: Golang, Typescript
- Mentor(s): @gdsoumya, @ksatchit
- Upstream Issue (URL): https://github.com/litmuschaos/litmus/issues/2429

#### SPIFFE/SPIRE

##### [Design and implement a health/status subsystem in SPIRE](https://mentorship.lfx.linuxfoundation.org/project/5c4a200d-b81e-4332-bea6-50120fbf28b4)

- Description: [SPIRE](https://spiffe.io), the SPIFFE Runtime Environment, is an extensible system that implements the principles embodied in the SPIFFE standards. SPIRE manages platform and workload attestation, provides an API for controlling attestation policies, and coordinates certificate issuance and rotation. Being a critical system, it is important that operators be able to monitor (and respond to) the current health/state of their SPIRE deployments. To do this, SPIRE needs to grow a full-featured health subsystem that is capable of collecting the status of other subsystems and reporting on it. In this project, you will design and implement this new subsystem with the help and guidance of the SPIRE maintainers.
- Recommended Skills: Go
- Mentor(s): Andrew Harding (@azdagron), Evan Gilman (@evan2645)
- Upstream Issue (URL): https://github.com/spiffe/spire/issues/2047

#### Cloud Native Buildpacks

##### [Design and implement Buildpack Registry Search](https://mentorship.lfx.linuxfoundation.org/project/4b711f9e-90f8-486a-90fc-d832e1c852ca)

- Description: The [Buildpack Registry](https://github.com/buildpacks/rfcs/blob/main/text/0022-client-side-buildpack-registry.md) is a place to publish, store, and discover buildpacks. It will provide a centralized service that platforms can use to resolve a buildpack ID and version into a concrete buildpack that can be downloaded and used. The search service will extend the existing [registry index stored in git](https://github.com/buildpacks/registry-index) in a way that can be consumed on the web as defined in this [RFC](https://github.com/buildpacks/rfcs/blob/main/text/0068-buildpack-registry-search-api.md).
- Recommended Skills: React, CSS, Ruby, Rails, Github
- Mentor(s): Joe Kutner (@jkutner), Travis Longoria (@elbandito)
- Upstream Issue (URL): https://github.com/buildpacks/registry-api/issues/21

