CNCF + Summer of Code
=====================

The Cloud Native Computing Foundation participates in [Google Summer of Code](https://summerofcode.withgoogle.com/) (GSoC). CNCF is a great place to spend a summer learning, coding, participating and contributing. We are an exciting open source foundation with a vibrant community of projects, and we look forward to your application and your project ideas!

Organization Admins
-------------------

If you need help with anything CNCF + Summer of code related, you can file an issue or contact one of the admins below:

-	Chris Aniszczyk ([@caniszczyk](https://github.com/caniszczyk)\): https://twitter.com/cra
-	Ihor Dvoretskyi ([@idvoretskyi](https://github.com/idvoretskyi)\): https://twitter.com/idvoretskyi
-	Nikhita Raghunath ([@nikhita](https://github.com/nikhita)\): https://twitter.com/TheNikhita

Communication
-------------

Please reach out to us on the #gsoc channel on the [CNCF slack](https://slack.cncf.io/).
Please don't use DMs unless strictly necessary as doing so both has the potential of overwhelming project maintainers and others with similar questions lose the benefit of public discussion.

It's best if you use a public communication channel whenever possible; however, if you need to communicate in private, please feel free to send the admins a note via soc@cncf.io (please use the public channels for any project-related discussion).

Current Year
------------

CNCF is planning to participate in GSoC 2020. Please stay tuned before the
official announcement (Q1'2020).

Project Ideas
-------------

If you are a project maintainer and consider mentoring during the GSoC 2020 cycle, please, submit your ideas below using the [template](/PROJECT_IDEA_TEMPLATE.md).

For example:

### Prometheus (sample):

#### Refactor the APIs for better readability and less maintenance overhead

-	Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
-	Recommended Skills: golang
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Issue: https://github.com/prometheus/prometheus/issues/3416

_Add your project ideas below:_

### Kubernetes

#### Cluster Addons: Package all the things!

- Description: The cluster-addons project aims to make kubernetes
  simpler and more reliable, by dividing clusters into simple,
  reusable, modularized parts.  Collaboration between the various
  approaches in the ecosystem has now gotten us to a point where we
  have a reasonable framework and a few example operators, but it's
  time to start building out the full set of real-world operators that
  will run on the world's Kubernetes clusters.  That's where you come
  in!  Though this should start gently (there are plenty of simple
  addons), it won't be quite that simple: you should expect to find
  lots of fun challenges that need fixing, likely a few design flaws,
  and plan to get involved with the kubernetes community in fixing
  them.
- Recommended Skills: Go, Kubernetes
- Mentor(s): Justin Santa Barbara (@justinsb), Leigh Capili (@stealthybox)
- Issue: https://github.com/kubernetes-sigs/cluster-addons/issues/39

#### CoreDNS operator: Prototype to Reality 
- Description: CoreDNS Operator aims to manage the lifecycle of the CoreDNS installation in the cluster. 
  It is concerned with the installation, updating, and configuration of CoreDNS. The current operator 
  is a proof of concept of the add-on library. The goal of the alpha operator is to provide a minimal feature 
  set that is manageable, predictable, and reliable in a production environment. You will work with
  various CNCF groups to understand the problem and set milestones and criteria for the productionization
  of the operator. You will establish the  fundamental testing for the operator to ensure long term 
  success of the project. The project is ran out of the cluster addons working group which provides a 
  friendly venue to learn more about the internals of Kubernetes.
- Recommended Skills: Go, Kubernetes, Bash, CoreDNS
- Mentor(s): Jeff Johnson (@johnsonj), Sandeep Rajan (@rajansandeep)
- Issue: https://github.com/kubernetes-sigs/cluster-addons/issues/47

#### Kubernetes Multitenancy Working Group: Benchmarks

-   Description: The Kubernetes Multi-Tenancy Working Group is chartered with exploring and defining multi-tenancy models for Kubernetes.  An overview of working group activities can be found in this [Kubernetes Multi-Tenancy Working Group](https://drive.google.com/file/d/1VFVE0lktXq9zaV6H04GyZBV3oQzoYKV6/edit) . The [Multitenancy Benchmarks](https://github.com/kubernetes-sigs/multi-tenancy/tree/master/benchmarks) effort focuses on measuring and validating the desired behaviors for multitenancy. Part of this effort is to automate behavioral and configuration checks on existing clusters, which will be the focus of this project. This automated test suit will help all Kubernetes users validate whether their clusters are setup correctly for multi-tenancy.
-   Recommended Skills: Go, Kubernetes
-   Mentor(s): Jim Bugwadia (@JimBugwadia)
-   Issue: Multiple issues - https://github.com/kubernetes-sigs/multi-tenancy/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+MTB

#### A better experience for Kubernetes to provision and consume cloud resources

- Description: This task focus on creating a better experience for Kubernetes to provision cloud resources by simply using CRDs to model them and leveraging various existing mechanisms including Service Catalog, OAM Trait system and Service Binding Operator to achieve smarter connection information injection and consuming. It also helps a lot to achieve better interoperability between Kubernetes community and public cloud providers.
- Recommended Skills: Go, Kubernetes
- Mentor(s): Jianbo Sun (@wonderflow), Lei Zhang (@resouer)
- Issue: Multiple issues - https://github.com/kubernetes/kubernetes/issues/14475, https://github.com/kubernetes/community/pull/254, https://github.com/oam-dev/cloud-provider/issues/13

### Thanos

#### Per Series Metric Retention

-	Description: Thanos is allowing storing metrics for long, if not unlimited time. Currently however there is no fine-granular process of retaining only some portion of metrics for longer time e.g useful
aggregations), while deleting other part early on. This task is aiming to implment this missing feature in Thanos and potentially Prometheus.
-	Recommended Skills: golang, distributed systems, object storage (AWS, S3)
-	Mentor(s): Bartlomiej Plotka (@bwplotka), Giedrius Statkevičius (@GiedriusS)
-	Issue: https://github.com/thanos-io/thanos/issues/903

#### Enriching and Extending Thanos UIs with React for Awesome User Experience!

- Description: Thanos allows scaling Prometheus metrics in an easy and gradual process. So far we used successfully pieces of old Prometheus UI with some improvements. However, since Prometheus now moved all UI pages to React, it opens new possibilities for Thanos as well. Thanks to reacting we can enrich our UI even more while resuing many components from Prometheus with ease. As part of this task, we plan to move all UI to React and enrich them with Thanos features. We also plan to add UI to every component of Thanos ensuring consistency and improve the experience of using Thanos even more! Help us and work with friendly community and team towards our goals! 💪
- Mentor(s): Bartlomiej Plotka (@bwplotka), Lucas Servén Marín (@squat)
- Issue: https://github.com/thanos-io/thanos/issues/2198

### TiKV

#### Support Cold/Hot Tier storage in TiKV
- Description:
TiKV uses RocksDB as its storage layer, currently RocksDB support assigns a list of path, newer data is placed into paths specified earlier in the list while older data gradually moves to paths specified later in the list. For example we may use a 300GB fast local SSD as the first path, and a 2TB HDD disk as the second path, and an 16TB remote network disk as the last path. This will reduce the total cost, but the older data doesn’t mean it is cold data. If there is some older but frequently accessed data, it will host in block-cache normally, but the total memory is limited. If this frequently accessed data can be pulled up to the first path(the local fast ssd), it can achieve a better read performance for TiKV.
-	Recommended Skills: Rust, RocksDB
-	Mentor(s): Yi Wu (@yiwu-arbug), Wei Liu (@Little-Wallace)
-	Issue: https://github.com/tikv/tikv/issues/6507

#### Versioned RawKV.
- Description: TiKV with raw-mode does not support multiple version with one key. When user migrate data from HBase to TiKV, they want to read history record and hope TiKV could delete expired key. In addition, atomic operations like incrementAndGet and checkAndPut can be introduced to ease HBase to TiKV migration. See more in  Versioned KV
- Recommended Skills: HBase or BigTable, Rust
- Mentor(s): Wei Liu (@Little-Wallace)
- Issue: https://github.com/tikv/tikv/issues/6508

#### Cloud-native KV-service
- Description: Explore cloud-native design for distributed KV-service that is cost effective. Investigate using different storage backend (local/persistent SSDs, EBS, S3, etc) to store TiKV data, and their pros and cons.
- Recommended Skills:  Golang, Rust
- Mentor(s): Yi Wu (@yiwu-arbug), Wei Liu (@Little-Wallace)
- Issue: https://github.com/tikv/tikv/issues/6506

### Cortex

#### Allow Cortex to selectively disable indexing of labels.

- Description: The idea is that Cortex should have config saying "do not index any label `kubernetes_io_arch`", then ingester skips indexing it and querier knows if it does appear in a query to fall back to scanning each chunk.
Rationale: some labels are not very selective, or very rarely come up in queries. Not indexing them reduces IO and storage cost.
- Recommended Skills:  Go
- Mentor(s): Bryan Boreham (@bboreham)
- Issue: https://github.com/cortexproject/cortex/issues/2068

### Dragonfly

#### Optimize the p2p scheduling algorithm for stremaing-p2p in Dragonfly

- Description: Dragonfly is plannig to implement a new P2P based on streaming, which sends the data between p2p network to user end directly, in order to achieve the purpose of reading and writing to disk as few as possible. And the **P2P Streaming Sliding Window** is designed to control the number of pieces of a file that can be scheduled and downloaded to avoid unlimited memory usage. So It's better to optimize the p2p scheduling algorithm for this new feature, which can reduce the memory usage of client and promote the p2p transmisstion.
- Recommended Skills:  Go
- Mentor(s): Jin Zhang (@lowzj), Yuxing Liu (@Starnop)
- Issue: https://github.com/dragonflyoss/Dragonfly/issues/1164


### Flux

#### Improve observability and error reporting in Flux.

- Description: Users have been requesting better observability and error reporting in Flux for a while. We should improve that situation, letting users monitor the state of Flux and diagnose any problems easily. Among other ways, this can be done by improving/replacing Flux's events API, improving logs and error reporting, adding Prometheus metrics and adding a Grafana dashboard.
- Recommended Skills: Go, Prometheus, Grafana, Kubernetes
- Mentor(s): Hidde Beydals (@hiddeco)
- Issue: https://github.com/fluxcd/flux/issues/2812

### KubeEdge

#### KubeEdge installer to support conversion between different config versions

- Description: the latest KubeEdge release introduced component config API to config components. The structure is different with the old configuration file used in prior (v1.2 and older) releases. Providing convert functionality to generate new configuration according old ones would help speed up the upgrade process from an old KubeEdge release. And to provide backward compatibility during follow-up component config API enhancements, conversion framework is needed to support multiple component config API versions in a same release.
- Recommended Skills: Go, Kubernetes
- Mentor(s): kadis (@kadisi), Kevin Wang (@kevin-wangzefeng)
- Issue： https://github.com/kubeedge/kubeedge/issues/1437

#### KubeEdge AI application

- Description: KubeEdge has a repository (https://github.com/kubeedge/example) shows sample applications and demos to illustrate possible use cases of KubeEdge platform. The idea is to build a new sample application to run OpenCV on KubeEdge platform to demo image processing (or computer vision) at edge.
- Recommended Skills: Go, Python, Kubernetes
- Mentor(s): Yin Ding (@dingyin)
- Issue：https://github.com/kubeedge/examples/issues/39

### OpenTelemetry

#### OpenTelemetry integration with Azure, Amazon, and Google Cloud metadata services

- Description: OpenTelemetry C# SDK can be used on any cloud. All major clouds provide a similar mechanisms to obtain deployment instance information. The task is to obtain those properties from the service like [this](https://docs.microsoft.com/azure/virtual-machines/windows/instance-metadata-service) and associate resulting properties with the telemetry reported by SDK.
- Recommended Skills: C# (or any other major language)
- Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)

#### OpenTelemetry libraries compatibility tests

- Description: OpenTelemetry project has a unique challenge - it implements similar patterns for data collection on many languages. Building a framework and a set of libraries compatibility tests is a great way to ensure the best experience for end users. Need to know one or more programming languages. Specified C# which I maintain, but happy to mentor on other languages.
- Recommended Skills: C# (or any other major language)
- Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)

### Prometheus

#### Persist Retroactive Rule Reevaluations

-	Description: Right now one of the biggest issues with recording rules is that data is only available since the rule was created. Which means any dashboards that use the recording rule will not have data prior to the recording rules create time. We can already reevaluate queries on old data, but we should be able to persist that for a certain window from [Oldest, Now).
-	Recommended Skills: Golang
-	Mentor(s): Ganesh Vernekar (@codesome)
-	Issue: https://github.com/prometheus/prometheus/issues/11.

#### Rule formatting tool

-	Description: Like "gofmt" for Go, we ought to have a "promfmt" for Prometheus since we have a syntax tree. The idea being that the system produces uniform style that minimizes deviation and learning curve. Care should be taken to preserve comments.
-	Recommended Skills: Golang
-	Mentor(s): Ganesh Vernekar (@codesome)
-	Issue: https://github.com/prometheus/prometheus/issues/21.

#### Allow running prombench locally
-	Description: Currently prombench development requires the user to setup GKE environment. Having prombench to run in a local k8s cluster would make adding changes much easier and faster. Support for kubeconfig and a proper way to switch local and GKE environment is not available yet. Adding these features will be essential to the completion of the project.
-	Recommended Skills: CI, Golang, Kubernetes
-	Mentor(s): Hrishikesh Barman (@geekodour)
-	Issue: https://github.com/prometheus/test-infra/issues/333.

#### Allow running prombench on EKS
-	Description: Currently prombench benchmarking infrastructure runs on GKE. It'll be good to have it run on EKS as well if we need to migrate away from GKE, that'll be very useful. This is similar to [#333](https://github.com/prometheus/test-infra/issues/333) and could possibly be worked on together.
-	Recommended Skills: CI, Golang, Kubernetes
-	Mentor(s): Hrishikesh Barman (@geekodour)
-	Issue: https://github.com/prometheus/test-infra/issues/341.

#### Update Grafana dashboards for test-infra
-	Description: The test-infra dashboards available at [prombench.prometheus.io/grafana](http://prombench.prometheus.io/grafana/) could be improved on different aspects, some of it will require understanding prometheus metrics and make the dashboards more useful to catch bugs during the bench tests. There are various high and low priority issues to work on.
-	Recommended Skills: CI, Golang, Grafana, Kubernetes, Prometheus
-	Mentor(s): Hrishikesh Barman (@geekodour)
-	Issue: https://github.com/prometheus/test-infra/issues/328.

### in-toto

#### Port runlib into in-toto golang

-	Description: The in-toto golang implementation is missing parts of the
    runlib library (the runtime library to capture evidence of a running
    process). Port the missing implementation parts from either the Python or
    the Java implementations.
-	Recommended Skills: Golang
-	Mentor(s): Santiago Torres-Arias (@santiagotorres), Lukas Puehringer (@lukpueh), Justin Cappos (@JustinCappos)
-	Issue: https://github.com/in-toto/in-toto-golang/issues/30

#### Port verify into in-toto Java

-	Description: The in-toto java implementation (as used by the Jenkins
    plugin), is missing methods to provie a full `verify()` function. Implement
    those, based off of either the golang or python implementations
-	Recommended Skills: Java
-	Mentor(s): Santiago Torres-Arias (@santiagotorres), Lukas Puehringer (@lukpueh), Justin Cappos (@JustinCappos)
-	Issue: https://github.com/in-toto/in-toto-java/issues/17

#### Add metadata pretty print function

-	Description: in-toto could use a method/tool to provide custom-formatting
    and display of metadata to ease integration with third-party tools or to
    ease human-readability
-	Recommended Skills: Python
-	Mentor(s): Santiago Torres-Arias (@santiagotorres), Lukas Puehringer (@lukpueh), Justin Cappos (@JustinCappos)
-	Issue: https://github.com/in-toto/in-toto/issues/18

### TUF

#### Reinstate full protection against slow retrieval attacks

-	Description: The current python implementation removed protection for
    slow-retrieval attacks, due to python-lock management, requests and urllib.
    Provie a possibly async-io based replacement to handle timeout on slow
    retrieval attacks
-	Recommended Skills: python, async-io (preferred, but not necessary)
-	Mentor(s): Santiago Torres-Arias (@santiagotorres), Lukas Puehringer (@lukpueh), Justin Cappos (@JustinCappos)
-	Issue: https://github.com/theupdateframework/tuf/issues/932

#### Improve delegation graph management code

-	Description: The reference implementation continues to try to provide a
    1-to-1 mapping of roles to
    keyids-the-role-should-be-signed-by-in-order-to-be-valid. This is not
    correct: the same role may need to be validated expecting different sets of
    keys, based on how the role was reached in the depth-first search while
    looking for target information.
-	Recommended Skills: python
-	Mentor(s): Santiago Torres-Arias (@santiagotorres), Lukas Puehringer (@lukpueh), Justin Cappos (@JustinCappos)
-	Issue: https://github.com/theupdateframework/tuf/issues/660

### CoreDNS

#### Anomaly detection of CoreDNS server through machine learning

- Description: As a DNS server, CoreDNS is critical to overall devops infrastructure. Any anomaly related to CoreDNS server should be taken seriously. While altering rules (combined with monitoring tools such as Prometheus) helps in discovering issues, those rules are often crafted manually and requires human expertise. It would help a lot if machine learning could be utilized to further automate the monitoring/alerting in case of anomaly.
  This project intends to build and train a model that could be used for anomaly detection of CoreDNS server through metrics collected from Prometheus. Since the metrics pipeline to Prometheus is already available in CoreDNS, the project’s focus is mostly on model building. It is suggested to use tf.keras to build the model. A successful model should at least be able to detect a scenario that is alerting and requires further devops or security intervention.  
- Recommended Skills:  DNS/CoreDNS, Prometheus, Keras/TensorFlow, Python
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Issue: https://github.com/coredns/coredns/issues/3658



#### External health check and orchestration of CoreDNS in Kubernetes clusters 

- Description: CoreDNS is the cluster DNS server for Kubernetes and is very much critical for the overall health of the Kubernetes cluster. It is very important to monitoring the health of CoreDNS itself and restarting or repairing any CoreDNS pods that are not behaving correctly. While CoreDNS exposes a health check itself, the health check is not UDP (DNS) based. The existing health check is also launched locally which could be very much different when accessed by other pods remotely.
  This project intends to build an application that checks CoreDNS health through UDP (DNS) externally, and, restart CoreDNS pods by interacting with Kubernetes API through golang. This is an important project that will greatly improve the overall health of Kubernetes clusters through automation.
- Recommended Skills:  Go, DNS, Kubernetes
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Issue: https://github.com/coredns/coredns/issues/3658


### Open Policy Agent (OPA)

OPA is a domain-agnostic policy engine that embodies "policy as code": https://www.openpolicyagent.org/

#### IntelliJ plugin to experiment with and visualize policy evaluation

-   Description: OPA features a high-level declarative language that lets you express policies like "user X can perform operation Y on resource Z" or "all images deployed in Kubernetes must come from an internal registry and be scanned for vulnerabilities". The language supports many features: unit testing, dry running, tracing, etc. While users can access these features via the command-line, IDE integrations greatly improve the policy authoring experience. The idea is to port functionality that we have inside of [VS Code](https://github.com/tsandall/vscode-opa) to IntelliJ. This would significantly improve the authoring experience for people that use IntelliJ on a day-to-day basis.
-   Recommended Skills: Java, IntelliJ (not required, but nice to have)
-   Mentor(s): Asad Ali (@asadali)
-   Issue: https://github.com/open-policy-agent/opa/issues/1085

#### OPA - MongoDB query translator

-   Description: MongoDB is a general-purpose, document-based, distributed database with a rich query language. OPA features a high-level declarative language called `Rego` purpose-built for expressing policies over complex hierarchical data structures. OPA is often used to enforce policies over incoming API requests, but using OPA's "partial evaluation" feature it is also possible to enforce policies when data is accessed inside of document-oriented databases like MongoDB. In this model, callers query OPA to obtain a set of conditions to apply to the database query and then rewrite the database query accordingly. There are existing projects that translate "partial evaluation" results to SQL and Elasticsearch. This project would involve designing and implementing a Rego to MongoDB query translator that supports basic relational operations like ==, !=, >, <, etc. This project would hugely benefit the community to perform authorization and data-filtering in MongoDB using OPA.
-   Recommended Skills: Go/Python, MongoDB (not required, but nice to have)
-   Mentor(s): Ash Narkar (@ashutosh-narkar)
-   Issue: https://github.com/open-policy-agent/opa/issues/2059

### Virtual Kubelet

#### Enhance Volcano scheduler to support Virtual Kubelet

- Description: When there're not enough resources in one cluster, virtual kubelet is one of solutions to scale out cluster.
  It's better to enhance scheduler to balance resource in cluster and virtual kubelet. It's also a good example to the other
  scheduler on how to integrate with Virtual Kubelet.
- Recommended Skills: Go, Kubernetes, Virtual Kubelet, Volcano
- Mentor(s): Klaus Ma (@k82cn)
- Issue: https://github.com/volcano-sh/volcano/issues/624 , https://github.com/virtual-kubelet/virtual-kubelet/issues/812

### Vitess

#### Native Failover without Orchestrator

- Description: Currently Vitess relies on [Orchestrator](https://github.com/openark/orchestrator) to provide automated failover. While the functionality provided meets user expectations, it increases the complexity of [getting started](https://vitess.io/docs/user-guides/integration-with-orchestrator/) and operating Vitess. We see benefit in having a native implementation.
- Recommended Skills: golang, mysql
- Mentor(s): Anthony Yeh (@enisoc)
- Issue: https://github.com/vitessio/vitess/issues/2366

#### Support for collations in VTGate

- Description: Currently the Vitess router (vtgate) does not support MySQL collations. This makes it difficult to push down queries that have constraints, ordering or grouping requirements on types that support character sets (i.e. varchar, char, text).
- Recommended Skills: golang, mysql
- Mentor(s): Morgan Tocker (@morgo)
- Issue: https://github.com/vitessio/vitess/issues/3591

### Cloud Native Buildpacks

#### Build Process Instrumentation

- Description: Provide better insight into the events that occur during the build process. This would include event output, outcomes of various commands, performance tracking. This is geared less towards user facing output and more towards generating consumable data.
- Recommended Skills: Go
- Mentor(s): Javier Romero (@jromero)
- Issue: https://github.com/buildpacks/lifecycle/issues/265

#### CI/CD Proof of Concepts

- Description: Cloud Native Buildpacks' primary function is to turn source code into a runnable image and because of that it's natural for it to be used within various CI/CD platform pipelines. Let's create some proof-of-concept integrations with various CI/CD platforms. Some of the integrations would be adopted by the CNB project. Others could yield samples or documentation depending on the outcome.
- Recommended Skills: Go, Docker
- Mentor(s): Javier Romero (@jromero)
- Issue: https://github.com/buildpacks/pack/issues/515

#### Client Side Buildpack Registry

- Description: The Buildpack Registry is a place to publish, store, and discover buildpacks. The initial implementation is a client side with minimal server-side support. The first pass will include setting up the GitHub repo and adding the relevant commands in the CLI.
- Recommended Skills: Go, Docker
- Mentor(s): Javier Romero (@jromero), Joe Kutner (@codefinger), Terence Lee (@hone)
- Issue: https://github.com/buildpacks/rfcs/blob/master/text/0022-client-side-buildpack-registry.md

#### Isolate Registry Credentials from Builder Images

- Description: pack is a CLI for doing builds with Cloud Native Buildpacks. It uses builder images to create all lifecycle phase containers. When pack build is run with the --publish flag, the user's registry credentials are injected into the analyze and export containers as environment variables. This means that users must place a high level of trust in their selected builder image. Users may not realize that credentials are given to builder images and experiment with builders from untrusted vendors. This change isolates analyze, restore, and export phases in containers built from trusted images rather than the builder image.
- Recommended Skills: Go, Docker
- Mentor(s): Javier Romero (@jromero), Emily Casey (@ekcasey)
- Issue: https://github.com/buildpacks/rfcs/blob/master/text/0025-dont-trust-builders.md

#### Lifecycle Transparency

- Description: Cloud Native Buildpacks are magic! Magic is great, but sometimes users want to better understand what is going on under the hood. Redesign the lifecycle output to demystify the build process for users. This will require some creativity.
- Recommended Skills: Go
- Mentor(s): Javier Romero (@jromero), Emily Casey (@ekcasey)
- Issue: https://github.com/buildpacks/lifecycle/issues/264

### OpenEBS

#### kubectl plugin for OpenEBS

- Description: OpenEBS is completely Kubernetes native and is implemented using microservices. The microservices are deployed as Kubernetes deployments, statefulset or daemon sets and so forth. In order to know the status of the components - like OpenEBS control plane or a given OpenEBS volume, a user may have to multiple kubectl commands to get the required information. To improve the usability, the proposal is to have a kubectl plugin for OpenEBS can provide a simple CLI to perform common operations. 
- Recommended Skills: Go, Kubernetes
- Mentor(s): Kiran Mova (@kmova), Amit Kumar Das (@AmitKumarDas)
- Issue: https://github.com/openebs/openebs/issues/2946, https://github.com/openebs/openebs/issues/290

#### Grafana dashboards for OpenEBS
- Description: All the openebs components are deployed as Kubernetes native objects and support scraping of metrics via Prometheus. This is a feature request to implement Grafana dashboards for: overall status, volume and pool usage. 
- Recommended Skills: Prometheus, Grafana
- Mentor(s): Kiran Mova (@kmova)
- Issue: https://github.com/openebs/openebs/issues/2947

#### Improve the release management process for OpenEBS
- Description: OpenEBS uses microservices architecture pattern and its components are developed in different GitHub repositories. Tagging the repository with a new release, will trigger a build process on Travis CI and new version of the component is built and pushed to container registeries. There is certain order/dependency in which the components are released, and requires release tagging the components to happen in a specified order. It would be nice to automate this process by making use of web hooks on docker, travis and github or there could be a better alternative that needs to be explored. 
- Recommended Skills: Build and Release Management, Makefiles, GitHub, Travis
- Mentor(s): Kiran Mova (@kmova)
- Issue: https://github.com/openebs/openebs/issues/288

### Rook
#### Rewrite NFS Operator to use controller runtime and fix other open issues along with it.

- Description: Convert the [NFS controller](https://github.com/rook/rook/blob/master/pkg/operator/nfs/controller.go) to be managed with the controller-runtime.
  Currently Rook only has a simple watch in an informer as seen [here](https://github.com/rook/rook/blob/master/pkg/operator/k8sutil/customresource.go#L54).
  What is use case behind this feature ?
  - The controller runtime will improve reliability of the operator in several areas:
  - Events can be re-queued if failed or the operator is not able to complete the operation
  - Exponential backoff is provided automatically for re-queued events
  - Waiting for the next event does not need to block on the current event if it is taking a long time and the event can be re-queued.
  Several controllers in Rook are using the controller runtime. For examples, see the [pool controller](https://github.com/rook/rook/blob/master/pkg/operator/ceph/pool/controller.go) or [disruption budget controller](https://github.com/rook/rook/blob/master/pkg/operator/ceph/disruption/clusterdisruption/reconcile.go).
  Also other open NFS Operator issues can be easily addressed while rewriting the operator.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Ashish Ranjan(@ashishranjan738), Jared Watts(@jbw976), Rohan Gupta(@rohan47)
- Issues: 
  - https://github.com/rook/rook/issues/4950
  - https://github.com/rook/rook/issues/4259
  - https://github.com/rook/rook/issues/2721
  - https://github.com/rook/rook/issues/3073
  - https://github.com/rook/rook/issues/3074




