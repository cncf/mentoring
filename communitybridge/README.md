## Community Bridge by The Linux Foundation

[Community Bridge](https://communitybridge.org/) is a platform Developed by the Linux Foundation, which accelerates the adoption, innovation, and sustainability of open source software.

Community Bridge is actively used by the Cloud Native Computing Foundation as
a mentorship platform across the CNCF projects.

### 2020

#### Q1

See our recent post with the program announcement on [CNCF
Blog](https://www.cncf.io/blog/2019/12/05/cncf-to-participate-in-the-community-bridge-mentorship-program/).

#### Timeline

- December 5 2019 - December 15 2019: applications opened; students matching to
  projects/mentors
- December 16 2019: 5 projects/slots are announced by CNCF; students may apply
  via the [Community Bridge platform](https://people.communitybridge.org/)
- December 16 2019 - March 16 2020: coding
- March 20 2020: results announced

#### How to apply?

Project maintainers and mentors, please, submit your ideas below (under the Project Ideas) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

#### Project Ideas:

### Kubernetes

#### Kubernetes working group for multi-tenancy: HNC + Tenant Operator 

-	Description: Integrate the Tenant Operator with the Hierarchical Namespace Controller, per [this design document](https://docs.google.com/document/d/1QAWtYdRZGseSar_KgyfiIisL7JTGMHCfqB_Legfa39w/edit#heading=h.7wst4safj8dx)
-	Recommended Skills: golang, some familiarity with the Hierarchical Namespace Controller
-	Mentor(s): Adrian Ludwin @aludwin, Tasha Drew @tashimi 
-	Issue: https://github.com/kubernetes-sigs/multi-tenancy/issues/300

#### Kubernetes working group for multi-tenancy: Add label aggregation and overrides to Hierarchical Namespace Controller
- Description: add label aggregation and overrides to hierarchical namespace controller ("hnc")
- Recommended Skills: golang, some familiarity with the Hierarchical Namespace Controller, Kubernetes CRDs 
- Mentor(s): Adrian Ludwin @aludwin, Tasha Drew @tashimi
- Issue: https://github.com/kubernetes-sigs/multi-tenancy/issues/303

### Prometheus

#### Benchmarks for TSDB
- Description: The TSDB module used in Prometheus  doesn’t have proper benchmarks yet, which means we cannot see the potential impact of the changes we are introducing. The idea is to build some automated benchmarking which can be added to the CI pipeline.
- Recommended Skills: CI, Golang, K8s
- Relevant Issues: https://github.com/prometheus/tsdb/issues/235 
- Potential Mentors: Krasi Georgiev @krasi-georgiev

#### PromQL/Rule formatting tool
- Description: Like "gofmt" for Go, we ought to have a "promfmt" for Prometheus since we have a syntax tree. The idea being that the system produces uniform style that minimizes deviation and learning curve. Care should be taken to preserve comments.
- Recommended Skills: Golang
- Relevant Issues: https://github.com/prometheus/prometheus/issues/21
- Potential Mentors: Ganesh Vernekar @codesome

#### Persist retroactive rule evaluations
- Description: We can already reevaluate queries on old data, but we should be able to persist that for a certain window from (Oldest, Now).
- Recommended Skills: Golang
- Relevant Issues: https://github.com/prometheus/prometheus/issues/11
- Potential Mentors: Ganesh Vernekar @codesome, Goutham Veeramachaneni @gouthamve

#### e2e test SD mechanisms 
- Description: We're not really excellent in the correctness / bug-free-ness department yet, partially because certain key components either lack tests or you'd have to run them in a real-world scenario for a while to discover certain bugs. I'm especially looking at our under-tested service discovery mechanisms here that require e.g. a Zookeeper or Consul as a dependency to test them for real. It'd be cool to have a test environment that runs a Prometheus release end-to-end (with different SD mechanisms) for a while and checks the results (evaluated expressions, alerts, etc.) for sanity.
- Recommended Skills: Golang
- Relevant Issues: https://github.com/prometheus/prometheus/issues/2935 
- Potential Mentors: Gouthamve @gouthamve 

#### Various React UI improvements and filtering label values API with matchers.
- Description: Now that Prometheus has a brand new experimental React UI it would need various bug fixes and improvements. It is still missing a few features from the old UI, and as an addition to this we want to add support for showing multiple expressions in one graph.
- Recommended Skills: React, Golang
- Relevant Issues: https://github.com/prometheus/prometheus/issues/6178, https://github.com/prometheus/prometheus/issues/1237, https://github.com/prometheus/prometheus/issues/39
- Potential Mentors: Krasi Georgiev @krasi-georgiev and Julius Volz  @juliusv

### Cortex

#### Storage Plugins
- Description: So there are serveral open issues to support new storage types. As adoption increases, there will be new requests coming up. Further, we're re-using cortex in Loki a fair bit and are finding that the storage trade-offs in Loki and Cortex are different and seeing some implementation details for Loki leaking into Cortex. We need a good way to come up with a plugin system that lets the new storage codes live outside the cortex tree. One of the first obvious candidate is the grpc-plugin system from Hashicorp, that has been used to do similar storage plugins for Jaeger.
- Recommended Skills: Golang
- Relevant Issues: https://github.com/cortexproject/cortex/issues/1681
- Potential Mentors: Gouthamve @gouthamve

### OpenTelemetry

#### Implement zPages for OpenTelemetry

-   Description: zPages is a great practice many organizations and SRE uses for
    the last line of defence while troubleshooting application issues. zPages
    aggregate telemetry in-process in a memory buffer and allow to query this
    informaiton directly from the app. It will be great to design and implement
    zPages for the language of your choice. I set C# as a language I maintain,
    but will be happy to mentor in other languages as well.
-	Recommended Skills: C#, basic html/css
-	Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)
-	Issue: https://github.com/open-telemetry/opentelemetry-dotnet/issues/81

#### OpenTelemetry integrations registry

-   Description: The goal of OpenTelemetry is to make robust, portable telemetry
    a built-in feature of cloud-native software. One step towards this goal is
    tracking of all integrations implemented or desired. Similar to
    https://opentracing.io/registry/, but also include automatic status updates
    and versions.
-	Recommended Skills: Go, html/css
-	Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)
-	Issue: https://github.com/open-telemetry/opentelemetry.io/issues/59

#### OpenTelemetry libraries compatibility tests

-   Description: OpenTelemetry project has a unique challange - it implements
    similar patterns for data collection on many languages. Building a framework
    and a set of libraries compatibility tests is a great way to ensure the best
    expirience for end users. Need to know one or more programming languages.
    Specified C# which I maintain, but happy to mentor on other languages.
-	Recommended Skills: C#
-	Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)
-	Issue: https://github.com/open-telemetry/opentelemetry.io/issues/59

#### OpenTelemetry C# integration with Azure, Amazon, and Google Cloud metadata services

-   Description: OpenTelemetry C# SDK can be used on any cloud. All major clouds
    provide a similar mechanisms to obtain deployment instance information. The
    task is to obtain those properties from the service like
    [this](https://docs.microsoft.com/azure/virtual-machines/windows/instance-metadata-service)
    and associate resulting properties with the telemetry reported by SDK.
-	Recommended Skills: C#
-	Mentor(s): Sergey Kanzhelev (@SergeyKanzhelev)

### 2019

2019 year, CNCF was participating in the Community Bridge, sponsoring three students to work on Kubernetes and CoreDNS projects during the foundations’ pilot stage.

See our blog post here on the [CNCF
Blog](https://www.cncf.io/blog/2019/08/22/cncf-hosts-three-student-internships-for-kubernetes-and-coredns-projects-through-linux-foundations-communitybridge/).
