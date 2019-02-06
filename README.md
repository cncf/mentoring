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

It's best if you use a public communication channel whenever possible; however, if you need to communicate in private, please feel free to send the admins a note via soc@cncf.io (please use the public channels for any project-related discussion).

You can join the CNCF slack [here](https://slack.cncf.io/).

Current Year
------------

CNCF is applying as a mentoring organization for Google Summer of Code 2019.

### Timeline

Please, check out the official [GSoC program timeline for 2019](https://developers.google.com/open-source/gsoc/timeline).

### Students

The list of official project ideas will be published below.

You can also take a look at the list of project ideas published for GSoC [2017](/2017.md) and [2018](/2018.md)\.

### Mentors

Add your ideas to the list below.

Project Ideas
-------------

Please, submit your ideas below using the [template](/PROJECT_IDEA_TEMPLATE.md). **IMPORTANT**: The deadline to submit a project idea is February 6 20:00 UTC.

### Kubernetes

Please visit the [Kubernetes GSoC page](https://git.k8s.io/community/mentoring/google-summer-of-code.md) for general information. For any questions or comments, please reach out to us on the #gsoc-apps channel on the [Kubernetes slack](http://slack.k8s.io/).

#### Integrate kube-batch with pytorch-operator/mxnet-operator

-	Description: [kube-batch](https://github.com/kubernetes-sigs/kube-batch) is a batch scheduler for kubernetes by features for batch workload, e.g. coscheduling/gang-scheduling, faire-sharing; the train job of MxNet and Pytorch have requirements to those features. This idea is to integrate kube-batch to support gang-scheduling/coscheduling and other batch features in related operators.
-	Recommended Skills: golang, kubernetes, kubeflow
-	Mentor(s): Klaus Ma (@k82cn)
-	Issue: https://github.com/kubeflow/mxnet-operator/issues/16 , https://github.com/kubeflow/pytorch-operator/issues/129

#### Implement volume snapshotting support into the external Manila provisioner

-	Description: The external OpenStack Manila provisioner lack ability to take a snapshot of the volumes and turn the snapshots to persistent volumes using container orchestrator API. The goal is to implement the missing feature in the Manila (CSI) provisioner.
-	Recommended Skills: Golang, Kubernetes, Ceph, OpenStack
-	Mentor(s): Tomas Smetana (@tsmetana)
-	Issue: https://github.com/kubernetes/cloud-provider-openstack/issues/453

#### Enable full e2e tests for external Azure cloud provider

-	Description: The external Azure cloud provider has added its initial e2e tests, but it’s still not running the full e2e tests today. The goal is to add the missing tests and publish them on the testgrid.
-	Recommended Skills: Golang, Kubernetes, Azure
-	Mentor(s): Pengfei Ni (@feiskyer)
-	Issue: https://github.com/kubernetes/cloud-provider-azure/issues/4

#### CSI drivers for AzureDisk and AzureFile

-	Description: External drivers for AzureDisk and AzureFile would be implemented as new CSI drivers. The goal is mirror the current functions from in-tree drivers and setup e2e tests as well as documentation for them.
-	Recommended Skills: Golang, Kubernetes, Azure
-	Mentor(s): Andy Zhang (@andyzhangx)
-	Issue: https://github.com/kubernetes/org/issues/344

#### Streamline and simplify SASS for the Kubernetes website

-	Description: The website's SASS is prohibitively complex. The goal is to streamline the site's SASS and make attributes easily discoverable and changeable.
-	Recommended Skills: HTML, SASS/CSS
-	Mentor(s): Zach Corleissen (@zacharysarah), Luc Perkins (@lucperkins)
-	Issue: https://github.com/kubernetes/website/issues/12496

#### Fully automate API and reference doc generation

- Description: The process for generating reference docs is fragile and its outputs are inconsistent. The goal is to fully automate reference doc generation with outputs sharing a standard format.
- Recommended Skills: Golang
- Mentor(s): Zach Corleissen (@zacharysarah), Luc Perkins (@lucperkins)
- Issue: https://github.com/kubernetes/website/issues/12503

#### Add support for Custom Resource Definitions to the Dashboard

- Description: Kubernetes Dashboard has no support for Custom Resource Definitions yet. The goal is to provide support for them as it was done for Third Party Resources in the past. Users should be able to perform at least the basic operations on the resources they have defined.
- Recommended Skills: Kubernetes, Golang, TypeScript, Angular
- Mentor(s): Marcin Maciaszczyk (@maciaszczykm), Sebastian Florek (@floreks)
- Issue: https://github.com/kubernetes/dashboard/issues/2493

#### Add plugin mechanism to the Dashboard

- Description: We would like to introduce a plugin mechanism to the Kubernetes Dashboard. The goal is to define the plugin framework architecture, scope, how it could enhance the Dashboard UI and utilize third party APIs to extend its functionality.
- Recommended Skills: Kubernetes, Golang, TypeScript, Angular
- Mentor(s): Marcin Maciaszczyk (@maciaszczykm), Sebastian Florek (@floreks)
- Issue: https://github.com/kubernetes/dashboard/issues/1832

### Prometheus

Prometheus is an open-source systems monitoring and alerting toolkit: https://prometheus.io/

Prometheus ideas:

#### Benchmarks for TSDB

-	Description: The TSDB module used in Prometheus doesn’t have proper benchmarks yet, which means we cannot see the potential impact of the changes we are introducing. The idea is to build some automated benchmarking which can be added to the CI pipeline.
-	Recommended Skills: CI, Golang, Kubernetes
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Issue: https://github.com/prometheus/tsdb/issues/235

#### Continue the work on Prombench

-	Description: Since we finished Prombench there have been few requests to add scalability tests, add more tests with the race enabled and there are few pending issues to be fixed.
-	Recommended Skills: CI, Golang, Kubernetes, Grafana
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Issue: https://github.com/prometheus/prombench/issues - the High priority ones should be addressed first.

### Open Policy Agent (OPA)

OPA is a domain-agnostic policy engine that embodies "policy as code": https://www.openpolicyagent.org/

#### IntelliJ plugin to experiment with and visualize policy evaluation

-   Description: OPA features a high-level declarative language that lets you express policies like "user X can perform operation Y on resource Z" or "all images deployed in Kubernetes must come from an internal registry and be scanned for vulnerabilities". The language supports many features: unit testing, dry running, tracing, etc. While users can access these features via the command-line, IDE integrations greatly improve the policy authoring experience. The idea is to port functionality that we have inside of [VS Code](https://github.com/tsandall/vscode-opa) to IntelliJ. This would significantly improve the authoring experience for people that use IntelliJ on a day-to-day basis.
-   Recommended Skills: Java, IntelliJ (not required, but nice to have)
-   Mentor(s): Torin Sandall (@tsandall)
-   Issue: https://github.com/open-policy-agent/opa/issues/1085

#### Interactive website detailing OPA integrations
- Description: OPA has been integrated with 20+ cloud-native systems to provide rich, context-aware policy support, e.g. Kubernetes, Istio, Envoy, Linkerd, Terraform, Ceph, Minio.  Today there is no authoritative guide for users to understand what those integrations are, how they work, or how to get started.  This project involves designing and implementing an interactive web portal that helps users understand the integrations available with OPA.  It will be data-driven, so that new integrations can easily be added to the portal, and each entry will include code-snippets, videos, blog posts, github-repos, tutorials, reviews, and overall status.
- Recommended Skills: Frontend HTML/CSS/JavaScript, Backend Node/Python/Go/etc.
- Mentor(s): Tim Hinrichs (@timothyhinrichs) and Torin Sandall (@tsandall)
- Issue: https://github.com/open-policy-agent/opa/issues/1194

#### Integration with IPTables
- Description: One common use of policy is to set up IP packet filter rules in the Linux kernel.  The policy dictates what to do with different kinds of packets.  There have been several requests in the past to use OPA policies to control IPTables, but no one has come forth with an integration.  This project involves designing the layout of IPTable rules using OPA's policy language, implementing the algorithms that generate IPTables from that layout, and writing the code that populates the generated IPTables rules into Linux.
- Recommended Skills: Go and Linux
- Mentor(s): Tim Hinrichs (@timothyhinrichs) and Torin Sandall (@tsandall)
- Issue: https://github.com/open-policy-agent/opa/issues/1195

### CoreDNS

CoreDNS is a fast and flexible DNS server. It has a focus of service discovery in a hybrid environment and is the default DNS server in Kubernetes (since 1.13+): https://github.com/coredns/coredns

#### Support source-IP based query block/allow

-	Description: When CoreDNS serves DNS queries publicly or inside Kubernetes clusters, the source IP of the incoming DNS query is an important identity. For security considerations, only certain queries (from specific source-IP or CIDR block) should be allowed to prevent the server from being attacked. The goal of this project is to support a firewall-like source-IP based block/allow mechanism for CoreDNS.
-	Recommended Skills: Golang
-	Mentor(s): Yong Tang (@yongtang)

#### Support Google Cloud DNS backend

-	Description: CoreDNS is able to serve DNS with cloud vendors (such as AWS) as the backend. The feature is very much useful in a hybrid environment where cloud-vendor specific service endpoints need to be exposed to clusters managed by Kubernetes. The goal of this project is to support Google Cloud DNS (similar to already supported [route53 plugin](https://github.com/coredns/coredns/tree/master/plugin/route53)) as a backend for CoreDNS.
-	Recommended Skills: Golang, Google Cloud
-	Mentor(s): Yong Tang (@yongtang)

#### Support Azure DNS backend

-	Description: CoreDNS is able to serve DNS with cloud vendors (such as AWS) as the backend. The feature is very much useful in a hybrid environment where cloud-vendor specific service endpoints need to be exposed to clusters managed by Kubernetes. The goal of this project is to support Azure DNS (similar to already supported [route53 plugin](https://github.com/coredns/coredns/tree/master/plugin/route53)) as a backend for CoreDNS.
-	Recommended Skills: Golang, Microsoft Azure
-	Mentor(s): Yong Tang (@yongtang)

### TiKV

TiKV is an open-source distributed transactional Key-Value database. [https://tikv.org](https://tikv.org).

#### Migrate to tower-grpc

- Description: We use grpc-rs which wraps C gRPC, and we want to work better with Rust community and use a pure Rust gRPC. The goal for this section is to use tower-grpc to replace our current grpc-rs.
- Recommended Skills: Rust, gRPC
- Mentor(s): JianJun Li (@busyjay), Nick Cameron (@nrc)
- Issue: https://github.com/tikv/tikv/issues/3951

#### Introduce other storage engines

- Description: TiKV uses RocksDB as its storage engine, but RocksDB is not suitable for all workloads. The goal for this section is to use other storage engines to satisfy different workloads.
- Recommended Skills: Rust, RocksDB
- Mentor(s): Nick Cameron (@nrc), Yi Wu (@yiwu-arbug)
- Issue: https://github.com/tikv/tikv/issues/4184


#### Build TiKV clients in different languages

- Description: TiKV now only contains an official Go client, we need more. The goal for this section is to build TiKV client with other languages like C++, Java, Rust, etc.
- Recommended Skills: C++/Java/Rust, gRPC
- Mentor(s): Ana Hobden (@hoverbear), JianJun Li (@busyjay)
- Issue: https://github.com/tikv/tikv/issues/4185

#### Auto-tune RocksDB

- Description: TiKV heavily depends on RocksDB, but RocksDB has many configurations and it is hard to choose proper values in production. The goal for this section is to auto-tune RocksDB in real time for different workloads.
- Recommended Skills: Rust, RocksDB
- Mentor(s): Yi Wu (@yiwu-arbug)
- Issue: https://github.com/tikv/tikv/issues/4052

### Rook

Rook is an open source cloud-native storage orchestrator for Kubernetes, providing the platform, framework, and support for a diverse set of storage solutions to natively integrate with cloud-native environments.

Website: https://rook.io/  
GitHub: https://github.com/rook/rook

#### Upgrade Rook to a more advanced operator/controller framework

- Description: Rook currently builds its [operator](https://coreos.com/blog/introducing-operators.html) functionality from its own homegrown [operator kit](https://github.com/rook/operator-kit).
  This framework was a very early effort in the ecosystem and there are now more mature efforts that provide more rich functionality and experience.
  The various available operator/controller frameworks should be evaluated and the best fit for advancing the Rook project should be integrated into the numerous Rook operators and controllers.
  This will provide a more robust experience for both our developer and end user communities, as well as provide the student with a deep experience and familiarity to Kubernetes custom controllers written for production scenarios.
- Recommended Skills: Kubernetes, Golang
- Mentor(s): [Jared Watts](https://github.com/jbw976) and [Yannis Zarkadas](https://github.com/yanniszark)
- Issue: [#1981](https://github.com/rook/rook/issues/1981)

#### Storage provider features and enhancements

- Description: Rook supports many storage providers to integrate them into Kubernetes and provide their storage services to pods and workloads.
  This project will enable you to become familiar with many of Rook's supported storage systems and bring multiple enhancements through the full software development life-cycle.
  Along with the mentor for this project, you will learn about the storage systems supported by Rook, choose the highest impact features to benefit the community, then design and implement the features to be included in a future official release.
  Some examples include:
  - Support a "secure" mode in the CockroachDB operator to include certificates and SSL in all network communication
  - Add a dynamic provisioner to the Network File System (NFS) operator to provision NFS storage for client pods on demand
- Recommended Skills: Kubernetes, Golang, storage concepts and systems
- Mentor(s): [Jared Watts](https://github.com/jbw976) and [Rohan Gupta](https://github.com/rohan47)
- Issue: Multiple issues to be chosen by student, such as [#1809](https://github.com/rook/rook/issues/1809), [#2062](https://github.com/rook/rook/issues/2062), [#2283](https://github.com/rook/rook/issues/2283), [#2531](https://github.com/rook/rook/issues/2531), [#1804](https://github.com/rook/rook/issues/1804)

#### Enable multiple network interfaces for Rook storage providers

- Description: Many of the storage providers supported by Rook can benefit from enabling them to consume multiple network interfaces.
  A common pattern for utilizing these multiple networks is to separate the internal "backend" traffic amongst the storage system components from the client "frontend" traffic to service client requests, increasing performance and throughput.
  This project will include designing a common experience for exposing this concept to storage administrators and also implementing a reusable code implementation for multiple storage providers to easily integrate this functionality.
  Familiarity with networking concepts and architecture will be very beneficial while building this feature.
- Recommended Skills: Kubernetes, Golang. networking
- Mentor(s): [Dmitry Yusupov](https://github.com/dyusupov)
- Issue: [#2621](https://github.com/rook/rook/issues/2621)

#### Enhance and extend the Rook framework for storage solutions

- Description: Rook is more than just a collection of operators and custom resources, it is a framework for storage providers to integrate their solutions into cloud-native environments.
  This framework provides general implementations that each storage solution can consume to integrate with Kubernetes more easily and provide more functionality.
  We'd like to continue growing and developing this framework to broaden its scope of impact.
  For example, it would greatly improve the user experience for many of Rooks supported storage solutions if we could support early validation, status reporting, and progress for long running operations.
  Likewise, many storage solutions would benefit if the Rook framework supported specifying the underlying storage fabric in a more flexible and dynamic way.
  For this project, you will learn about the design and features of the Rook framework then choose the highest impact enhancements to design, implement, and bring through the entire software development life-cycle to be included in a future official release.
- Recommended Skills: Kubernetes, Golang
- Mentor(s): [Jared Watts](https://github.com/jbw976)
- Issue: Multiple issues to be chosen by student, such as [#1539](https://github.com/rook/rook/issues/1539), [#2363](https://github.com/rook/rook/issues/2363), [#2107](https://github.com/rook/rook/issues/2107), [#1744](https://github.com/rook/rook/issues/1744), and [#1228](https://github.com/rook/rook/issues/1228)

#### Expand coverage and scope of Rook's continuous integration (CI) system

- Description: For every pull request, commit to master, and official release, Rook runs a [build and testing continuous integration system](https://jenkins.rook.io/).
  This system builds and packages all of the Rook artifacts, dynamically deploys and configures multiple versions of Kubernetes clusters across multiple environments, and then executes all of the Rook integration tests to ensure that the current version of Rook meets all the quality expectations of the community.
  It would greatly benefit the broader community to expand the coverage of this CI system to cover more hardware architectures, cloud provider environments, and Kubernetes offerings.
  In addition to expanding test coverage to all these new platforms, it would also be beneficial to parallelize the testing pipelines to improve efficiency and lower test run time.
- Recommended Skills: Kubernetes, Golang, testing and quality assurance
- Mentor(s): [Jared Watts](https://github.com/jbw976)
- Issue: Multiple issues, including [#1901](https://github.com/rook/rook/issues/1901), [#1315](https://github.com/rook/rook/issues/1315), [#1841](https://github.com/rook/rook/issues/1841), and [#1218](https://github.com/rook/rook/issues/1218)

#### Dynamic provisioning for portable workloads

- Description: Rook has architected a great solution for integrating many storage systems into cloud-native environments and also supporting the provisioning of storage for clients in these systems.
  This solution can be taken further to support scenarios of workload portability, where an application merely needs to express its need for a general type of storage, and a matching Rook storage provider will dynamically provision this storage on demand, enabling applications to be written once but run anywhere.
  For example, an application could express its general need for an object storage bucket, and at deployment time that bucket could be provided from Ceph, EdgeFS, Minio, or even one of the public cloud providers.
  This project is an early vision and there will be significant design work to bring this to practical fruition, including integration with the [Crossplane project](https://crossplane.io/).
  It is recommended to read the [high level architecture/vision document](https://docs.google.com/document/d/1whncqdUeU2cATGEJhHvzXWC9xdK29Er45NJeoemxebo/edit?usp=sharing) for further background understanding.
- Recommended Skills: Kubernetes, Golang
- Mentor(s): [Jared Watts](https://github.com/jbw976)
- Issue: [#1705](https://github.com/rook/rook/issues/1705), [#1704](https://github.com/rook/rook/issues/1704)

### Linkerd and Envoy

Linkerd is an ultralight service mesh for Kubernetes and beyond: https://linkerd.io.
Envoy is an open source edge and service proxy, designed for cloud-native applications: https://www.envoyproxy.io.

#### Benchmarks for Linkerd and Envoy

- Description: Linkerd, like other service meshes are plagued by the question of adopters asking the question: "what's the performance overhead of the service mesh?". Envoy does not publish performance test results [see How fast is Envoy](https://www.envoyproxy.io/docs/envoy/latest/faq/how_fast_is_envoy)). Linkerd, Istio, Envoy and the list of other service meshes don't have a consistent set of performance benchmarks between them. So, even if Envoy were to publish performance results, users still wouldn't be able to compare overhead between Linkerd and Envoy. The project idea here is to build a multi-mesh performance benchmark tool.

- Recommended Skills: Golang, JavaScript, Kubernetes
- Mentor(s): Lee Calcote (@leecalcote)
- Issue: https://github.com/envoyproxy/envoy/issues/5536 and https://discourse.linkerd.io/t/linkerd-performance/146

### Virtual Kubelet 

Virtual kubelet is a Kubebernetes kubelet implementation.

#### Conformance testing for Virtual Kubelet

* Description: As the project gets closer to stabilizing the interface that providers implement, users of vk are looking for a run through the Kubertenes conformance test suite. This project will direct parts of the virtual kubelet interface.
* Issue: https://github.com/virtual-kubelet/virtual-kubelet/issues/81
* Recommended Skills: Go
* Mentors: Ria Bhatia (rbitia), Brian Goff (cpuguy83)

### Linkerd

Linkerd is an ultralight service mesh for Kubernetes that provides
observability, reliability, and security for your microservices.
[https://linkerd.io](https://linkerd.io)

#### Cross-cloud integration testing

- Description: With the proliferation of managed Kubernetes services on many
  cloud platforms (GKE, AKS, EKS, Kubernetes on DigitalOcean), the subtle
  differences between these providers can create hard to debug and understand
  issues. This project involves building out the tooling to create clusters on
  multiple providers, interact with those and run the integration test suite
  on them. It will surface bugs earlier, make it easier to replicate user
  issues and provide a common framework to build sample workloads on top of.
- Recommended Skills: Bash, TravisCI, Go, Cloud Providers
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue: [https://github.com/linkerd/linkerd2/issues/2213](https://github.com/linkerd/linkerd2/issues/2213)

#### Auto-Update

- Description: Linkerd has frequent updates and keeping up with the weekly edge
  releases can be difficult. This project involves building an Kubernetes
  operator that can observe the version-check API, auto-update the control plane
  and replace the Linkerd data plane proxies with the correct version.
- Recommended Skills: Go, Kubernetes
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue: [https://github.com/linkerd/linkerd2/issues/1903](https://github.com/linkerd/linkerd2/issues/1903)

#### Conformance Validation

- Description: Linkerd has an extensive `check` suite that validates a cluster
  is ready to install Linkerd and that the install was successful. These checks
  are, unfortunately, static checks. Because of the wide number of ways a
  Kubernetes cluster can be configured, Users want a way to validate their
  specific install for conformance over time. This project involves building a
  sample application that exercises all the features of Linkerd and allows an
  end user to run this on their own cluster to validate that everything is
  working and configured correctly over a long time.
- Recommended Skills: Go, Bash, Kubernetes, gRPC
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue: [https://github.com/linkerd/linkerd2/issues/1096](https://github.com/linkerd/linkerd2/issues/1096)

#### Alertmanager Integration

- Description: Linkerd provides rich metrics that are stored in Prometheus out
  of the box. These are for both the control plane and data plane. The goal is
  to provide Alertmanager integration that comes out of the box, is configurable
  with preferred channels (email, slack) and works with ServiceProfiles to
  easily create alerts that are per-service and per-route.
- Recommended Skills: Go, Prometheus, Grafana, Kubernetes
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue: [https://github.com/linkerd/linkerd2/issues/1726](https://github.com/linkerd/linkerd2/issues/1726)

#### Kafka Introspection

- Description: HTTP based traffic is only one type of modern applications. Many use message
  queues such as Kafka. Getting the metrics for consumers/producers/messages are
  just as critical to application health as requests and responses in HTTP. The
  goal of this project is to implement a Kafka codec for the Linkerd proxy that
  allows it to introspect the Kafka protocol and provide metrics on that protocol.
- Recommended Skills: Go, Rust, Kubernetes, Kafka
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue: [https://github.com/linkerd/linkerd2/issues/2214](https://github.com/linkerd/linkerd2/issues/2214)

### rkt

rkt is a pod-native container engine for Linux. It is composable, secure, and built on standards.

#### Add support for the OCI runtime spec by implementing a runc stage2

- Description: rkt implements the App Container Executor specification of the [appc Container Specification](https://github.com/appc/spec) and uses systemd unit properties to implement its features. To implement the OCI runtime spec, systemd unit properties are not suitable since they differ from what the spec defines. The idea is to replace systemd unit properties by runc to implement the OCI runtime spec. Work for this [has already started](https://github.com/rkt/rkt/issues/3408).
- Recommended Skills: Golang.
- Mentor(s): Iago López Galeiras (@iaguis), Alban Crequy (@albanc)

#### Add native OCI image support

- Description: rkt supports the OCI image spec by converting an OCI image to its internal format (appc). The idea is to implement native support for the OCI image spec using the [containers/image library](https://github.com/containers/image). This will also involve coming up with a reasonable scheme to support both appc and OCI images, and refactoring rkt's image store and fetching logic.
- Recommended Skills: Golang.
- Mentor(s): Iago López Galeiras (@iaguis), Alban Crequy (@albanc)
- Issue: [https://github.com/linkerd/linkerd2/issues/2214](https://github.com/linkerd/linkerd2/issues/2214)

### containerd

containerd is a OCI-compliant container runtime for Linux. It is a stable, secure, and performant runtime used in both Docker and Kubernetes, as well as many other projects.

#### Snapshotter implementation for block devices

- Description: containerd uses snapshotter drivers to interface with specific filesystem technologies, like overlayfs, aufs, btrfs, among others. Several projects would benefit from a snapshotter implementation for block or remote devices.
- Recommended Skills: Golang.
- Mentor(s): Derek McGowan (@dmcgowan), Phil Estes (@estesp)

#### p2p or remote blob store implementation

- Description: containerd stores image content (layer blobs) in a local content store today. Implementation of a p2p or remote blob store would be a great addition to containerd capabilities.
- Recommended Skills: Golang.
- Mentor(s): Derek McGowan (@dmcgowan), Phil Estes (@estesp)
