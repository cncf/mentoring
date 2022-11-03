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

#### Prometheus
##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
-	Recommended Skills: golang
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Issue: https://github.com/prometheus/prometheus/issues/3416

### Proposed Project ideas

### Kubernetes

#### Kubernetes working group for CSI driver

-	Description: Container Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes. The idea is to implement a few new CSI features and also e2e tests to cover those features, e.g. volume expansion, Windows support, inline volume support etc. Also, there are requirements to rewrite some flexvolume drivers(e.g. [smb driver](https://github.com/Azure/kubernetes-volume-drivers/tree/master/flexvolume/smb)) to CSI driver.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Andy Zhang @andyzhangx
-	Issue:
	-	https://github.com/kubernetes-sigs/azurefile-csi-driver/issues
	-	https://github.com/Azure/kubernetes-volume-drivers/issues/48

#### Kubernetes Multi-Tenancy Working Group: Multi-Tenancy Benchmarks

-	Description: The Kubernetes Multi-Tenancy Working Group is chartered with exploring and defining multi-tenancy models for Kubernetes. An overview of working group activities can be found in this Kubernetes Multi-Tenancy Working Group . The Multitenancy Benchmarks effort focuses on measuring and validating the desired behaviors for multitenancy. Part of this effort is to automate behavioral and configuration checks on existing clusters, which will be the focus of this project. This automated test suit will help all Kubernetes users validate whether their clusters are setup correctly for multi-tenancy.
-	Recommended Skills: Go, Kubernetes
-	Mentor(s):Tasha Drew (@tashimi), Ryan Bezdicek (@rjbez17), Jim Bugwadia (@JimBugwadia)
-	Issue: https://github.com/kubernetes-sigs/multi-tenancy/issues/551

#### Kubernetes Policy Working Group: Policy Violation CRD

-   Description: The Kubernetes Policy Working Group is providing an overall architecture that describes both the current policy related implementations as well as future policy related proposals in Kubernetes. As part of this effort, the group is proposing a Kubernetes Custom Resources Definition (CRD) for policy violations and writing adapters to convert from various Kubernetes policy management tools such as OPA, Falco, Kyverno, kube-bench, etc. to report policy violations in a common format. The Policy Violation CRD can then be used by the Dashboard to show violations.
-   Recommended Skills: Go, Kubernetes
-   Mentor(s): Jim Bugwadia (@JimBugwadia)
-   Issue: https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/3


### Argo

#### Kruise Deployment Wizard

-	Description: The Kruise Wizard is a tool that streamlines the creation of initial deployment manifests for complex Kubernetes applications. Development and traditional Ops teams can now use a wizard-like tool to define application deployments and generate a set of Kustomized based YAML files. These files are committed to a Git repository allowing seamless GitOps adoption. Kustomized based Kubernetes deployments can then be deployed utilizing a variety of CD tools as in our case: ArgoCD.
-	Recommended Skills: golang, kubernetes, argoCD, Kustomize
-	Mentor(s): Ken Owens (@kenowens12)
-	Upstream Issue (URL):https://github.com/Mastercard/Kruise-API


### OPA

#### OPA Go APIs

-	Description: We embed OPA in our applications to implement policy as code. We found that current OPA Go APIs are not designed for API calls. It is mainly for standalone CLI.  For example, policy input has to be file via file path. In APIs, policy input could be either string or bytes.  We have to write policy data into temp file in order to call OPA APIs.  In addition to OPA APIs, we also want to build policy repository to support policy agent
-	Recommended Skills: golang, OPA
-	Mentor(s): Jingnan Zhou (@jingnanzhou)
-	Upstream Issue (URL): https://github.com/open-policy-agent/opa/issues/2336

#### OPA - MongoDB query translator

-   Description: MongoDB is a general-purpose, document-based, distributed database with a rich query language. OPA features a high-level declarative language called `Rego` purpose-built for expressing policies over complex hierarchical data structures. OPA is often used to enforce policies over incoming API requests, but using OPA's "partial evaluation" feature it is also possible to enforce policies when data is accessed inside of document-oriented databases like MongoDB. In this model, callers query OPA to obtain a set of conditions to apply to the database query and then rewrite the database query accordingly. There are existing projects that translate "partial evaluation" results to SQL and Elasticsearch. This project would involve designing and implementing a Rego to MongoDB query translator that supports basic relational operations like ==, !=, >, <, etc. This project would hugely benefit the community to perform authorization and data-filtering in MongoDB using OPA.
-   Recommended Skills: Go/Python, MongoDB (not required, but nice to have)
-   Mentor(s): Ash Narkar (@ashutosh-narkar)
-   Issue: https://github.com/open-policy-agent/opa/issues/2059

### Thanos

#### Thanos Query Frontend

- Description: As per [proposal](https://thanos.io/proposals/202004_embedd_cortex_frontend.md/) we plan to embedd Cortex query frontend as new Thanos command. With this project you will have opportunity to work in
both Cortex and Thanos codebase to improve both worlds while creating shiny new command in Thanos project for this microservice proxy.
- Recommended Skills: go, distributed systems, caching
- Mentor(s): Bartlomiej Plotka (@bwplotka)
- Issue: https://github.com/thanos-io/thanos/issues/2454

#### Versioned Website Docs

- Description: The Thanos website includes a documentation area that contains per-component docs and configuration built by rendering the markdown files from the tip of master of the Thanos repository. This frequently causes confusion for users, as breaking changes are often merged into master that conflict with the APIs of previous releases. To solve this user-facing issue, we would like to allow the website to show a different set of docs for every Thanos release. This project will involve designing a documentation structure and version picker in the website to select different versions of documents. We will also need to design a workflow for managing docs that integrates with our Git workflow, i.e. updating corresponding docs on pull requests, cherry-picks, etc.
- Recommended Skills: go, HTML, JavaScript, CSS
- Mentor(s): Lucas Servén Marín (@squat), Bartlomiej Plotka (@bwplotka)
- Issue: https://github.com/thanos-io/thanos/issues/2488

#### Per Request Query Tracking and Limiting

- Description: Thanos is at the very high-level: durable and cheap database capable of storing a very large amount of metric data. This means that querying that data can be expensive. Imagine someone queries years of data for millions of series. No matter how fast or efficient our indexing is, even the amount of data being passed through the network can get expensive. This is why users should have control, potentially someday per tenant to tell what query was performed, for how long and how much data it was using, and what happened or error. Users should also be able to limit such large queries.
Recommended Skills: go, distributed systems, Linux
- Mentor(s): Bartek Plotka (@bwplotka), Kemal Akkoyun (@kakkoyun)
- Issue: https://github.com/thanos-io/thanos/issues/1706 and https://github.com/thanos-io/thanos/issues/2527

### Complete Katacoda tutorials

- Description: This is a great project for a writer with some passion for Docker and Kubernetes, interested in doing interactive docs: specifically learning to build [Katacoda Course](https://katacoda.com/scenario-examples/scenarios/create-course). Currently, we have a single [Katacoda](https://katacoda.com/bwplotka/courses/thanos/1-globalview) tutorial, which helps Thanos users to start up quickly and understand the concepts. To help improve the user experience further we have planned five more tutorials. The Katacoda tutorials are written in YAML format and don't require a lot of custom tooling. We have a moderate amount of docs on our website [thanos.io](https://thanos.io/), which should help you to get started quickly. Also, there are many youtube videos explaining the concepts. We can offer friendly community support and technical guidance and feedback.
We're looking for one contributor to explore interactive tutorials and learn some technical concepts along the way. We are definitely not looking for perfection on the first try. Writing interactive tutorials: 
  * Intro: Downsampling and unlimited metric retention for Prometheus
  * Intro: Global and meta alerts with Thanos
  * Advanced: Connecting remote Prometheuses to Thanos using simple Envoy setup.
  * Advanced: Using Prometheus remote write to stream metrics to Thanos
  * Advanced: Query low tail latency with low cost: Introducing caching to Thanos
Recommended Skills: Distributed systems, Linux, Kubernetes, Docker
- Mentor(s): Bartek Plotka (@bwplotka), Povilas Versockas (@povilasv)
- Issue: https://github.com/thanos-io/thanos/issues/2041

### Prometheus

#### Persist Retroactive Rule Reevaluations

- Description: Right now one of the biggest issues with recording rules is that data is only available since the rule was created. Which means any dashboards that use the recording rule will not have data prior to the recording rules create time. We can already reevaluate queries on old data, but we should be able to persist that for a certain window from [Oldest, Now).
- Recommended Skills: Golang
- Mentor(s): Bartlomiej Plotka (@bwplotka), Callum Styan (@cstyan)
- Issue: https://github.com/prometheus/prometheus/issues/11.

#### Remote Write WAL Pointer + Other Improvements

- Description: Remote write has gone through a rewrite in the last year, but there are still open improvements and feature additions that can be explored. For example, because remote write now sends data via Prometheus' WAL, the pointer for each remote write queue into the WAL should be persisted across restarts. The addition of new record types, or a new remote write specific WAL, so that new data not currently part of the WAL can be remote written coulda also be investigated.
- Recommended Skills: Golang, database and dist. systems nice to have.
- Mentor(s): Callum Styan (@cstyan), Chris Marchbanks (@csmarchbanks)
- Issue: https://github.com/prometheus/prometheus/issues/6333

### Envoy

#### Enrich Envoy stats with header size histogram

- Description: Currently there is lack of visibility into size of request headers that are proxied through Envoy. Adding corresponding histogram would increase observability for Envoy based systems.
- Recommended Skills: C++
- Mentor(s): Kateryna Nezdolii (@nezdolik)
- Issue: https://github.com/envoyproxy/envoy/issues/10308.

### Service Mesh Interface

#### SMI Conformance Testing

- Description: Ensure that a service mesh is properly configured and that its behavior conforms to official SMI specifications. Conformance consists of both capabilities and compliance status as outlined in the [design specification](https://docs.google.com/document/d/1HL8Sk7NSLLj-9PRqoHYVIGyU6fZxUQFotrxbmfFtjwc/edit).
- Recommended Skills**: Golang (nice to have: Kubernetes, Service Mesh)
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), Vinayak Shinde ([@vinushnd](https://twitter.com/vinushnd))
- Issue: [https://github.com/servicemeshinterface/smi-spec/issues/70](https://github.com/servicemeshinterface/smi-spec/issues/70)

### TiKV

#### Full Chunk-based Computing

- Description: Currently, TiKV uses a simple but inefficient memory layout in computing framework. Using Chunk, a column-based memory layout, could improve memory locality and reduce memory allocation during expression evaluation.
- Recommended Skills: Rust, Database
- Mentor(s): Tianyi Zhuang (@TennyZhuang), breeswish (@breeswish)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/7724


### OpenEBS

#### A easy to use command-line interface (CLI) for OpenEBS.

- Description: OpenEBS is completely Kubernetes native and is implemented using microservices. OpenEBS can be installed via kubectl or helm chart and managed via custom resources. To improve the usability of OpenEBS, the proposal is to have a easy to use OpenEBS CLI (similar to `kubectl`) to perform operations like:
  - install  => Install OpenEBS
  - upgrade  => Upgrade OpenEBS components
  - status   => Print the readiness of various components, verify prerequisites are met to run openebs pools and volumes.
  - version  => Print the OpenEBS version and associated images
  - describe => Describe OpenEBS resources like pools and volumes.
  - create   => Create OpenEBS resources
  - delete   => Delete OpenEBS resources

- Recommended Skills: Go, Kubernetes
- Mentor(s): Kiran Mova (@kmova)
- Related Issues:
  - https://github.com/openebs/openebs/issues/2946
  - https://github.com/openebs/openebs/issues/1248
  - https://github.com/openebs/openebs/issues/290

#### Multiarch support for OpenEBS Docker images

- Description: OpenEBS Supports automated builds for amd64 and arm64. It will be good to make use of the "docker manifest" command to link different arch images into a single docker repository. This should allow kubernetes nodes to pull in the required container images.
- Recommended Skills: Docker, Shell, Makefile
- Mentor(s): Kiran Mova (@kmova)
- Related Issues:
  - https://github.com/openebs/openebs/issues/3023

#### New storage backend using raw disk images

- Description: OpenEBS Dynamic Local PV with Hostpath are great for use cases with low latency requirements and running on nodes with few attached drives or block devices. Using bare hostpath has the limitation of enforcing the capacity limits requested by PVC. The proposal is to implement a new type of storage, backed by a raw disk image on the host, that is mounted inside the pod. The storage backend should:
  - have near-zero performance overhead, compared to using local disks
  - be thin-provisioned
  - be able to enforce storage size limits
  - be able to expose volume metrics

- Recommended Skills: Kubernetes, Linux, Python, Go
- Mentor(s): Kiran Mova (@kmova)
- Related Issues:
  - https://github.com/openebs/openebs/issues/2871


### KubeEdge

#### Support metrics-server in cloud

- Description: Now we have integrated cadvisor in edge, and it also needs to integrate metrics-server in the cloud to collect monitoring data of edge nodes.
- Recommended Skills: Golang
- Mentor(s): Kevin Wang (@kevin-wangzefeng)
- Related Issues:
  - https://github.com/kubeedge/kubeedge/issues/1561

#### Add certificate rotation for edge node

- Description: At present, the edge nodes of KubeEdge only apply for certificates when they first started. And we need to automatically generate a new key and request a new certificate from the cloudcore periodically.
- Recommended Skills: Golang
- Mentor(s): Fisher Xu (@fisherxu)
- Related Issues:
  - https://github.com/kubeedge/kubeedge/issues/1630


### Fluentd
##### Fluent Bit Monitoring: Web UI

- Description:  Fluent Bit exposes internal metrics from the data processing pipeline through its HTTP interface. This project aims to build a Web UI to show the components of the data pipeline and its continuous metrics with dashboards and further info. The metrics are exposed in JSON format and should be scrapped by the UI. The UI can be deployable on any HTTP server without the need for NodeJS.


  Please refer to the Upstream Issue link for more details and candidate requirements.
-	Recommended Skills: Javascript, VueJS, CSS, HTML & general design skills
-	Mentor(s): Eduardo Silva (@edsiper)
-	Upstream Issue (URL): https://github.com/fluent/fluent-bit/issues/2147


### CoreDNS

##### External health check and orchestration of CoreDNS in Kubernetes clusters**

- Description: CoreDNS is the cluster DNS server for Kubernetes and is very much critical for the overall health of the Kubernetes cluster. It is very important to monitoring the health of CoreDNS itself and restarting or repairing any CoreDNS pods that are not behaving correctly. While CoreDNS exposes a health check itself, the health check is not UDP (DNS) based. The existing health check is also launched locally which could be very much different when accessed by other pods remotely.
  This project intends to build an application that checks CoreDNS health through UDP (DNS) externally, and, restart CoreDNS pods by interacting with Kubernetes API through golang. This is an important project that will greatly improve the overall health of Kubernetes clusters through automation.
- Recommended Skills:  Go, DNS, Kubernetes
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Implementation: The deliverable of this project is a golang program that could be deployed in a Kubernetes cluster independently while at the same time, monitoring CoreDNS pods in the same cluster and interacting Kubernetes API (server) to restart CoreDNS pods as needed.
- Related Issues:
  - https://github.com/coredns/rfc/issues/7


### Linkerd

#### Egress Metrics

-	Description: Linkerd provides rich metrics for traffic inside the mesh. As most external services utilize HTTPS, it is unable to provide metrics today. This project intends to provide visibility into the traffic that is leaving clusters and surface metrics for that traffic.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Thomas Rampelberg (@grampelberg)
-	Issue:
	- https://github.com/linkerd/linkerd2/issues/3190

#### Service Topologies

- Description: It is valuable to have metadata related to the topology of a cluster when making load balancing decisions. This metadata can be used to control egress costs between regions or even make advanced routing decisions in multicluster situations. As part of Kubernetes 1.17, [service topology](https://kubernetes.io/docs/concepts/services-networking/service-topology/) landed. This provides extra metadata as part of endpoints for a service to control weighting. Imagine transparently failing over to nodes running in a different zone if the pods locally are no longer running. Linkerd should implement support for this functionality.
- Recommended Skills: golang, Kubernetes, rust, Tokio
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue:
  - https://github.com/linkerd/linkerd2/issues/4325

#### PCAP-NG Export

- Description: It is difficult to debug what is happening to the network traffic for workloads on Kubernetes. Linkerd provides tap and stat to provide some glimpses into what's happening. Many times, this is enough. Unfortunately, when low level problems and protocol issues crop up, the existing tools are not enough. This causes users to inject the debug container and tcpdump traffic on a pod by pod basis. This project will add PCAP-NG as an export format for tap. This can then be dumped locally or forwarded to Wireshark for analysis and debugging.
- Recommended Skills: golang, Kubernetes, rust, Tokio
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue:
  - https://github.com/linkerd/linkerd2/issues/4326

#### Granular RBAC for Metrics

- Description: Kubernetes is a multitenant system, many users can interact without seeing what others are working with. Today, Linkerd runs a single control plane per cluster. This results in the metrics collected being stored in a single backend (Prometheus). In some high security environments, this means that the users of the cluster are unable to get the benefit of Linkerd's rich metrics. This project will introduce Kubernetes based, granular RBAC so that cluster operators can control what end users are able to view.
- Recommended Skills: golang, Kubernetes, Prometheus
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue:
  - https://github.com/linkerd/linkerd2/issues/3312

#### Kafka Proxy Codec

- Description: HTTP based traffic is only one type of modern applications. Many use message queues such as Kafka. Getting the metrics for consumers/producers/messages are just as critical to application health as requests and responses in HTTP. This project will implement a Kafka codec that allows the Linkerd proxy to introspect Kafka's protocol and provide metrics for the communications between consumers and producers. This should show up as a CLI command, dashboard and visualization of the topology between message consumers and HTTP actors.
- Recommended Skills: golang, Kubernetes, rust, Tokio, Kafka
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue:
  - https://github.com/linkerd/linkerd2/issues/2214

#### JWT Authentication

- Description: Linkerd implements service-service authentication today via. mTLS. This does not yet extend to user based authentication. This project will implement JWT authentication to provide applications using the service mesh a method for implementing authorization on a per-user basis.
- Recommended Skills: golang, Kubernetes, rust, Tokio
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue:
  - https://github.com/linkerd/linkerd2/issues/3704

#### Network Diagnostics

- Description: It can be challenging to diagnose why things aren't working in a remote cluster. Is there a connectivity issue? What happens when a specific request is sent to a service? How do I work with the data that comes back? Linkerd should make this kind of interaction with a cluster's traffic easy and seamless. This project introduces a new command to the CLI: `exec`. This will wire up the networking locally for a user where local binaries (such as curl or ping) can interact with a Kubernetes cluster natively. It will use local binaries and produce local output to allow users to use their local tools and files to diagnose what's going on with their cluster.
- Recommended Skills: golang, Kubernetes
- Mentor(s): Thomas Rampelberg (@grampelberg)
- Issue:
  - https://github.com/linkerd/linkerd2/issues/4327

### KubeVirt

#### Kernel boot

-	Description: KubeVirt allows to boot from regular (virtual) disks, an alternative booting method is to directly provide a kernel, initrd, and cmdline to a VM for booting. Such a feature is generally useful for many unikernel projects like the European Project Unicore. This project is about defining the relevant API and adding the necessary kernel boot support to KubeVirt.
-	Recommended Skills: golang, Kubernetes, virtualization
-	Mentor(s): Daniel Belenky (@danielBelenky)
-	Issue:
	- https://github.com/kubevirt/kubevirt/issues/2741

#### Improve Observability
-	Description: KubeVirt is running VMs on Kubernetes, in order to simplify operations, KubeVirt should expose more metrics about the VMs (workloads) and it's infrastructure components, in order to improve serviceability by integrating with projects like prometheus. This project is about adding a couple of more metrics to different KubeVirt components.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Daniel Belenky (@danielBelenky)
-	Issue:
	- https://github.com/kubevirt/kubevirt/issues/3385
