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
- Mentor(s): Justin Santa Barbara (@justinsb), Leigh Capili (@stealthybox), Sandeep Rajan (@rajansandeep)
- Issue: https://github.com/kubernetes-sigs/cluster-addons/issues/39

### Thanos

#### Per Series Metric Retention

-	Description: Thanos is allowing storing metrics for long, if not unlimited time. Currently however there is no fine-granular process of retaining only some portion of metrics for longer time e.g useful
aggregations), while deleting other part early on. This task is aiming to implment this missing feature in Thanos and potentially Prometheus.
-	Recommended Skills: golang, distributed systems, object storage (AWS, S3)
-	Mentor(s): Bartlomiej Plotka (@bwplotka)
-	Issue: https://github.com/thanos-io/thanos/issues/903

#### End to End Benchmarking Tests on Demand through CI

- Description: In order to increase confidence in Thanos' performance across releases and major changes, we would like to introduce a way to run reproducible e2e benchmark tests, ideally from the PR and with the use of Kubernetes. This work involves setting up Thanos scenarios and load generators that will run benchmarks for a certain period of time and output resource usage for the given Thanos version.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Giedrius Statkevičius (@GiedriusS)
- Issue: https://github.com/thanos-io/thanos/issues/1707

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
- Mentor(s): Alfonso Acosta (@2opremio)
- Issue: https://github.com/fluxcd/flux/issues/2812

### KubeEdge

#### KubeEdge installer to support conversion between different config versions

Description: the latest KubeEdge release introduced component config API to config components. The structure is different with the old configuration file used in prior (v1.2 and older) releases. Providing convert functionality to generate new configuration according old ones would help speed up the upgrade process from an old KubeEdge release. And to provide backward compatibility during follow-up component config API enhancements, conversion framework is needed to support multiple component config API versions in a same release.
Recommended Skills: Go, Kubernetes
Mentor(s): kadis (@kadisi), Kevin Wang (@kevin-wangzefeng)
issue： https://github.com/kubeedge/kubeedge/issues/1437

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

#### Benchmarks for TSDB

-	Description: The TSDB module used in Prometheus doesn’t have proper benchmarks yet, which means we cannot see the potential impact of the changes we are introducing. The idea is to build some automated benchmarking which can be added to the CI pipeline.
-	Recommended Skills: CI, Golang, Kubernetes
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Issue: https://github.com/prometheus/tsdb/issues/235

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

### in-toto

#### Port runlib into in-toto golang

-	Description: The in-toto golang implementation is missing parts of the
    runlib library (the runtime library to capture evidence of a running
    process). Port the missing implementation parts from either the Python or
    the Java implementations.
-	Recommended Skills: Golang
-	Mentor(s): Santiago Torres-Arias (@santiagotorres), Lukas Puehringer (@lukpueh)
-	Issue: https://github.com/in-toto/in-toto-golang/issues/30

#### Port verify into in-toto Java

-	Description: The in-toto java implementation (as used by the Jenkins
    plugin), is missing methods to provie a full `verify()` function. Implement
    those, based off of either the golang or python implementations
-	Recommended Skills: Java
-	Mentor(s): Santiago Torres-Arias (@santiagotorres), Lukas Puehringer (@lukpueh)
-	Issue: https://github.com/in-toto/in-toto-java/issues/17

#### Add metadata pretty print function

-	Description: in-toto could use a method/tool to provide custom-formatting
    and display of metadata to ease integration with third-party tools or to
    ease human-readability
-	Recommended Skills: Python
-	Mentor(s): Santiago Torres-Arias (@santiagotorres), Lukas Puehringer (@lukpueh)
-	Issue: https://github.com/in-toto/in-toto/issues/18

### TUF

#### Reinstate full protection against slow retrieval attacks

-	Description: The current python implementation removed protection for
    slow-retrieval attacks, due to python-lock management, requests and urllib.
    Provie a possibly async-io based replacement to handle timeout on slow
    retrieval attacks
-	Recommended Skills: python, async-io (preferred, but not necessary)
-	Mentor(s): Santiago Torres-Arias (@santiagotorres)
-	Issue: https://github.com/theupdateframework/tuf/issues/932

#### Improve delegation graph management code

-	Description: The reference implementation continues to try to provide a
    1-to-1 mapping of roles to
    keyids-the-role-should-be-signed-by-in-order-to-be-valid. This is not
    correct: the same role may need to be validated expecting different sets of
    keys, based on how the role was reached in the depth-first search while
    looking for target information.
-	Recommended Skills: python
-	Mentor(s): Santiago Torres-Arias (@santiagotorres)
-	Issue: https://github.com/theupdateframework/tuf/issues/660

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