### Project Ideas:

### Fluentd

#### Extend internal metrics support on Fluent Bit

-	Description: [Fluent Bit](https://fluentbit.io) already collect internal metrics from the data pipeline, these metrics are exposed through a HTTP end-point which already provides a Prometheus format for remote consumption. On this project, the student will work in the following tasks:
	-	Dig into the internal metrics design, improve the API so other core components can register their own metrics.
	-	Implement a new mechanism to let Fluent Bit ship metrics through current available output plugins.
	-	Minor tasks associated with project metrics, performance benchmarks and documentation.
-	Recommended Skills: C, Linux user-space development and basics of system calls
-	Mentor(s): Eduardo Silva @edsiper
-	Issue: https://github.com/fluent/fluent-bit/issues/1811

#### Improve Fluent Bit usability / user-experience

-	Description: Nowadays [Fluent Bit](https://fluentbit.io) is a very advanced tool for log processing, so there is some intrinsic complexity and from a usability perspective (end user), it is very easy to make mistakes from a configuration perspective. The team is working on different improvement areas to reduce the number of mistakes and reduce the learning curve, the student aims to help with all these areas. Some related tasks:
	-	Help to migrate plugins to the new Config Maps mechanism [FLB #1672](https://github.com/fluent/fluent-bit/issues/1672)
	-	Improve error messages handling
	-	Extend internal logging mechanism to support a structure and messages routable mode.
	-	General tasks associated with core API usage and documentation.
-	Recommended Skills: C, Linux user-space development ands basics of system calls
-	Mentor(s): Eduardo Silva @edsiper
-	Issue: https://github.com/fluent/fluent-bit/issues/1812

### Kubernetes

#### Kubernetes working group for multi-tenancy: HNC + Tenant Operator

-	Description: Integrate the Tenant Operator with the Hierarchical Namespace Controller, per [this design document](https://docs.google.com/document/d/1QAWtYdRZGseSar_KgyfiIisL7JTGMHCfqB_Legfa39w/edit#heading=h.7wst4safj8dx)
-	Recommended Skills: golang, some familiarity with the Hierarchical Namespace Controller
-	Mentor(s): Adrian Ludwin @aludwin, Tasha Drew @tashimi
-	Issue: https://github.com/kubernetes-sigs/multi-tenancy/issues/300

#### Kubernetes working group for CSI driver

-	Description: Container Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes without ever having to touch the core Kubernetes code. The idea is to implement a few new CSI features and also e2e tests to cover those features, e.g. inline volume support, volume expansion, windows support, monitoring, etc.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Andy Zhang @andyzhangx
-	Issue:
	-	https://github.com/kubernetes-sigs/azuredisk-csi-driver/issues
	-	https://github.com/kubernetes-sigs/blobfuse-csi-driver/issues

### Prometheus

#### Benchmarks for TSDB

-	Description: The TSDB module used in Prometheus doesn’t have proper benchmarks yet, which means we cannot see the potential impact of the changes we are introducing. The idea is to build some automated benchmarking which can be added to the CI pipeline.
-	Recommended Skills: CI, Golang, K8s
-	Relevant Issues: https://github.com/prometheus/tsdb/issues/235
-	Potential Mentors: Krasi Georgiev @krasi-georgiev

#### PromQL/Rule formatting tool

-	Description: Like "gofmt" for Go, we ought to have a "promfmt" for Prometheus since we have a syntax tree. The idea being that the system produces uniform style that minimizes deviation and learning curve. Care should be taken to preserve comments.
-	Recommended Skills: Golang
-	Relevant Issues: https://github.com/prometheus/prometheus/issues/21
-	Potential Mentors: Ganesh Vernekar @codesome

#### Persist retroactive rule evaluations

-	Description: We can already reevaluate queries on old data, but we should be able to persist that for a certain window from (Oldest, Now).
-	Recommended Skills: Golang
-	Relevant Issues: https://github.com/prometheus/prometheus/issues/11
-	Potential Mentors: Ganesh Vernekar @codesome, Goutham Veeramachaneni @gouthamve

#### e2e test SD mechanisms

-	Description: We're not really excellent in the correctness / bug-free-ness department yet, partially because certain key components either lack tests or you'd have to run them in a real-world scenario for a while to discover certain bugs. I'm especially looking at our under-tested service discovery mechanisms here that require e.g. a Zookeeper or Consul as a dependency to test them for real. It'd be cool to have a test environment that runs a Prometheus release end-to-end (with different SD mechanisms) for a while and checks the results (evaluated expressions, alerts, etc.) for sanity.
-	Recommended Skills: Golang
-	Relevant Issues: https://github.com/prometheus/prometheus/issues/2935
-	Potential Mentors: Gouthamve @gouthamve

#### Various React UI improvements and filtering label values API with matchers.

-	Description: Now that Prometheus has a brand new experimental React UI it would need various bug fixes and improvements. It is still missing a few features from the old UI, and as an addition to this we want to add support for showing multiple expressions in one graph.
-	Recommended Skills: React, Golang
-	Relevant Issues: https://github.com/prometheus/prometheus/issues/6178, https://github.com/prometheus/prometheus/issues/1237, https://github.com/prometheus/prometheus/issues/39
-	Potential Mentors: Krasi Georgiev @krasi-georgiev and Julius Volz @juliusv

### Cortex

#### Storage Plugins

-	Description: So there are serveral open issues to support new storage types. As adoption increases, there will be new requests coming up. Further, we're re-using cortex in Loki a fair bit and are finding that the storage trade-offs in Loki and Cortex are different and seeing some implementation details for Loki leaking into Cortex. We need a good way to come up with a plugin system that lets the new storage codes live outside the cortex tree. One of the first obvious candidate is the grpc-plugin system from Hashicorp, that has been used to do similar storage plugins for Jaeger.
-	Recommended Skills: Golang
-	Relevant Issues: https://github.com/cortexproject/cortex/issues/1681
-	Potential Mentors: Gouthamve @gouthamve

### OpenTelemetry

#### Implement zPages for OpenTelemetry

-	Description: zPages is a great practice many organizations and SRE uses for the last line of defence while troubleshooting application issues. zPages aggregate telemetry in-process in a memory buffer and allow to query this informaiton directly from the app. It will be great to design and implement zPages for the language of your choice. I set C# as a language I maintain, but will be happy to mentor in other languages as well.
-	Recommended Skills: C#, basic html/css
-	Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)
-	Issue: https://github.com/open-telemetry/opentelemetry-dotnet/issues/81

#### OpenTelemetry integrations registry

-	Description: The goal of OpenTelemetry is to make robust, portable telemetry a built-in feature of cloud-native software. One step towards this goal is tracking of all integrations implemented or desired. Similar to https://opentracing.io/registry/, but also include automatic status updates and versions.
-	Recommended Skills: Go, html/css
-	Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)
-	Issue: https://github.com/open-telemetry/opentelemetry.io/issues/59

#### OpenTelemetry libraries compatibility tests

-	Description: OpenTelemetry project has a unique challange - it implements similar patterns for data collection on many languages. Building a framework and a set of libraries compatibility tests is a great way to ensure the best expirience for end users. Need to know one or more programming languages. Specified C# which I maintain, but happy to mentor on other languages.
-	Recommended Skills: C#
-	Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)
-	Issue: https://github.com/open-telemetry/opentelemetry.io/issues/59

#### OpenTelemetry C# integration with Azure, Amazon, and Google Cloud metadata services

-	Description: OpenTelemetry C# SDK can be used on any cloud. All major clouds provide a similar mechanisms to obtain deployment instance information. The task is to obtain those properties from the service like[this](https://docs.microsoft.com/azure/virtual-machines/windows/instance-metadata-service) and associate resulting properties with the telemetry reported by SDK.
-	Recommended Skills: C#
-	Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)

### Thanos

#### Improved Read Write Coordination for Object Storage

-	Description: Thanos is a distributed system that runs different operations on object storage. Components that read from the bucket synchronize files from storage lazilly, implying eventually consistency of file uploads. Additionally, some object storage systems have some form of eventual consistency on a different level, e.g "read after update" in AWS or ["list after write" for OpenStack Swift](https://docs.openstack.org/swift/latest/overview_architecture.html#updaters). With growing adoption, we need to make sure the Thanos project is fully resilient to those cases, which is why we designed [read write coordination](https://thanos.io/proposals/201901-read-write-operations-bucket.md/). We are happy to mentor candidates to implement this task, which will greatly help the Thanos community and increase the candidate's knowledge in Go and distributed systems.
-	Recommended Skills: Golang
-	Relevant Issues: https://thanos.io/proposals/201901-read-write-operations-bucket.md/ https://github.com/thanos-io/thanos/issues/1528
-	Potential Mentors: Bartek Plotka (@bwplotka)

#### End to End Benchmarking Tests on Demand through CI

-	Description: In order to increase confidence in Thanos' performance across releases and major changes, we would like to introduce a way to run reproducible e2e benchmark tests, ideally from the PR and with the use of Kubernetes. This work involves setting up Thanos scenarios and load generators that will run benchmarks for a certain period of time and output resource usage for the given Thanos version.
-	Recommended Skills: Golang, Kubernetes
-	Relevant Issues: https://github.com/thanos-io/thanos/issues/1707
-	Potential Mentors: Giedrius Statkevičius (@GiedriusS)

### CoreDNS

#### Autoscaling CoreDNS Nodes on Kubernetes Clusters Through Exposed Metrics

-	Description: [CoreDNS](https://github.com/coredns/coredns) is Kubernetes' default DNS server for service discovery. As service discovery with DNS is the (often overlooked) critical piece for clusters, it is important to maintain enough capacity for serving the cluster-wide service discovery. CoreDNS already have a `metrics` plugin with metrics information exposed. In this project, the student will work on the following tasks:
	-	Write metrics scraping method to extract the metrics from exposed CoreDNS metrics plugin.
	-	Develop a method in transforming collected metrics into desired capacity for CoreDNS nodes.
	-	Implement a routine to interact with Kubernetes API to autoscaling CoreDNS node with designed capacity.
-	Bonus Task: Use machine learning algorithm for transforming metrics to above mentioned designed capacity. We will provide a start algorithm to help student getting started with machine learning, if student is willing to take this bonus task.
-	Recommended Skills: Golang and DNS for this project, basic machine learning for bonus task.
-	Mentor(s): Yong Tang @yongtang
-	Issue: https://github.com/coredns/coredns/issues/3541
