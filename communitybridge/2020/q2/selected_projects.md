Selected Projects
-----------------

Project maintainers and mentors, please submit the selected below (under the Selected Projects section) section using the template below.

### Template

```
#### CNCF Project Name
##### Title

-	Description:
-	Recommended Skills:
-	Mentor(s):
-       Mentee (Communty Bridge URL):
-	Upstream Issue (URL):
-       Community Bridge project (URL):
```

### Sample

#### Prometheus

##### Refactor the APIs for better readability and less maintenance overhead

-	Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
-	Recommended Skills: golang
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Mentee: Jane Doe
-	Issue: https://github.com/prometheus/prometheus/issues/3416
-	Community Bridge project (URL): https://people.communitybridge.org/project/9595fbe7-6a8d-43d4-aebb-a54d57f33fdd

List of Selected Projects
-------------------------

### Service Mesh Interface

#### SMI Conformance with Meshery

-	Description: Ensure that a service mesh is properly configured and that its behavior conforms to official SMI specifications. Leverage Meshery as an SMI-integrated tool to provide conformance of both capabilities and compliance status as outlined in the [design specification](https://docs.google.com/document/d/1HL8Sk7NSLLj-9PRqoHYVIGyU6fZxUQFotrxbmfFtjwc/edit).
-	Mentors: Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), Vinayak Shinde ([@vinushnd](https://twitter.com/vinushnd)\)
-	Mentee: [Kanishkar J](https://people.communitybridge.org/mentee/2733c465-9ea8-4889-a3a3-e1b9215393ee,359dda52-7fb7-4fa8-82cd-a27216757a57)
-	Issue: [https://github.com/servicemeshinterface/smi-spec/issues/70](https://github.com/servicemeshinterface/smi-spec/issues/70)

### Kubernetes

#### Kubernetes working group for CSI driver

-	Description: Container Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes. The idea is to implement a few new CSI features and also e2e tests to cover those features, e.g. volume expansion, Windows support, inline volume support etc. Also, there are requirements to rewrite some flexvolume drivers(e.g. [SMB CSI Driver](https://github.com/kubernetes-csi/csi-driver-smb)) to CSI driver.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Andy Zhang [@andyzhangx](https://github.com/andyzhangx)
-	Mentee: [Animesh Kumar](https://people.communitybridge.org/mentee/51d3fad8-fac8-49c0-ba18-9c96635b07f1,2d438b9a-c539-46d0-9eed-c6ee4404c88a)
-	Upstream Issue (URL):
	-	https://github.com/kubernetes/kubernetes/issues/56005
	-	https://github.com/kubernetes-sigs/azurefile-csi-driver/issues
-	Community Bridge project (URL): https://people.communitybridge.org/project/2d438b9a-c539-46d0-9eed-c6ee4404c88a

##### Kubernetes working group for Multi-tenancy: Multi-tenancy benchmark project

-	Description: The Kubernetes Multi-Tenancy Working Group is chartered with exploring and defining multi-tenancy models for Kubernetes. An overview of working group activities can be found in this Kubernetes Multi-Tenancy Working Group . The Multitenancy Benchmarks effort focuses on measuring and validating the desired behaviors for multitenancy. Part of this effort is to automate behavioral and configuration checks on existing clusters, which will be the focus of this project. This automated test suit will help all Kubernetes users validate whether their clusters are setup correctly for multi-tenancy.
-	Recommended Skills: Go, Kubernetes
-	Mentor(s): Tasha Drew [@tashimi](https://github.com/tashimi), Ryan Bezdicek [@rjbez17](https://github.com/rjbez17), Jim Bugwadia [@JimBugwadia](https://github.com/JimBugwadia)
-	Mentee: [Divya Rani](https://people.communitybridge.org/mentee/b65e7f25-a1c7-458a-98d5-e990122c843d,2d438b9a-c539-46d0-9eed-c6ee4404c88a)
-	Upstream Issue (URL): 
	-	https://github.com/kubernetes-sigs/multi-tenancy/issues/551 
-	Community Bridge project: [Kubernetes](https://people.communitybridge.org/project/2d438b9a-c539-46d0-9eed-c6ee4404c88a)

### Linkerd

#### Service Topologies

-	Description: It is valuable to have metadata related to the topology of a cluster when making load balancing decisions. This metadata can be used to control egress costs between regions or even make advanced routing decisions in multicluster situations. As part of Kubernetes 1.17, [service topology](https://kubernetes.io/docs/concepts/services-networking/service-topology/) landed. This provides extra metadata as part of endpoints for a service to control weighting. Imagine transparently failing over to nodes running in a different zone if the pods locally are no longer running. Linkerd should implement support for this functionality.
-	Recommended Skills: golang, Kubernetes, rust, Tokio
-	Mentor(s): [Thomas Rampelberg](https://twitter.com/grampelberg) (@grampelberg)
-	Mentee: [Matei David](https://people.communitybridge.org/mentee/17c3eb19-8878-40cc-bc8c-61fa0c97b381,65742dc0-7217-4c4a-a609-f5f0fcde5c0a)
-	Issue:
	-	[https://github.com/linkerd/linkerd2/issues/4325](https://github.com/linkerd/linkerd2/issues/4325)
-	Community Bridge project (URL): [https://people.communitybridge.org/project/65742dc0-7217-4c4a-a609-f5f0fcde5c0a](https://people.communitybridge.org/project/65742dc0-7217-4c4a-a609-f5f0fcde5c0a)

### KubeEdge

#### Support metrics-server in cloud

- Description: Now we have integrated cadvisor in edge, and it also needs to integrate metrics-server in the cloud to collect monitoring data of edge nodes.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Kevin Wang (@kevin-wangzefeng)
- Mentee: [Tiecheng Shen](https://people.communitybridge.org/mentee/b26f53c3-4b47-4bf8-80ff-262aff137722,1b931913-44a4-43a7-92ed-d7b2089060b1)
- Related Issues:
  - https://github.com/kubeedge/kubeedge/issues/1561
- Community Bridge project (URL): [https://people.communitybridge.org/project/1b931913-44a4-43a7-92ed-d7b2089060b1](https://people.communitybridge.org/project/1b931913-44a4-43a7-92ed-d7b2089060b1)

#### Add certificate rotation for edge node

- Description: At present, the edge nodes of KubeEdge only apply for certificates when they first started. And we need to automatically generate a new key and request a new certificate from the cloudcore periodically.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Kevin Wang (@kevin-wangzefeng), Fisher Xu (@fisherxu)
- Mentee: [Jiejie Xu](https://people.communitybridge.org/mentee/571fd9fa-0253-4525-af33-dcab4d2e0454,1b931913-44a4-43a7-92ed-d7b2089060b1)
- Related Issues:
  - https://github.com/kubeedge/kubeedge/issues/1630
- Community Bridge project (URL): [https://people.communitybridge.org/project/1b931913-44a4-43a7-92ed-d7b2089060b1](https://people.communitybridge.org/project/1b931913-44a4-43a7-92ed-d7b2089060b1)

### TiKV

#### Full Chunk-based Computing

- Description: Currently, TiKV uses a simple but inefficient memory layout in computing framework. Using Chunk, a column-based memory layout, could improve memory locality and reduce memory allocation during expression evaluation.
- Recommended Skills: Rust, Database
- Mentor(s): Tianyi Zhuang ([@TennyZhuang](https://github.com/TennyZhuang)), breeswish ([@breeswish](https://github.com/breeswish))
- Mentee: [Chi Zhang](https://people.communitybridge.org/mentee/4a9369ba-d561-4849-99cb-3544aff51294,c6a0326c-b053-41a3-9bf2-1e7e78481ca6)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/7724
- Community Bridge project (URL): [https://people.communitybridge.org/project/c6a0326c-b053-41a3-9bf2-1e7e78481ca6](https://people.communitybridge.org/project/c6a0326c-b053-41a3-9bf2-1e7e78481ca6)

### Envoy

#### Improve Envoy observability for http module

- Description: Currently there are multiple useful metrics  missing for http requests that are proxied through Envoy. Adding corresponding metrics would increase observability for Envoy based systems and improve user experience.
- Recommended Skills: C++
- Mentor(s): Kateryna Nezdolii ([@nezdolik](https://github.com/nezdolik))
- Mentee: [Ranjith Kumar Adha](https://people.communitybridge.org/mentee/9654d6c4-1ea5-46d4-b72e-fb78c2326aa6,872be524-7465-4639-be88-1b451c581826)
- Upstream Issue (URL): https://github.com/envoyproxy/envoy/issues/10308, https://github.com/envoyproxy/envoy/issues/3621
- Community Bridge project (URL): [https://people.communitybridge.org/project/872be524-7465-4639-be88-1b451c581826](https://people.communitybridge.org/project/872be524-7465-4639-be88-1b451c581826)

### CoreDNS

##### External health check and orchestration of CoreDNS in Kubernetes clusters**

- Description: CoreDNS is the cluster DNS server for Kubernetes and is very much critical for the overall health of the Kubernetes cluster. It is very important to monitoring the health of CoreDNS itself and restarting or repairing any CoreDNS pods that are not behaving correctly. While CoreDNS exposes a health check itself, the health check is not UDP (DNS) based. The existing health check is also launched locally which could be very much different when accessed by other pods remotely.
  This project intends to build an application that checks CoreDNS health through UDP (DNS) externally, and, restart CoreDNS pods by interacting with Kubernetes API through golang. This is an important project that will greatly improve the overall health of Kubernetes clusters through automation.
- Recommended Skills:  Go, DNS, Kubernetes
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Mentee: [Jayesh Sharma](https://people.communitybridge.org/mentee/4ea84460-17c7-4cbb-be95-11ade6195ed3,6705be57-130f-43f5-ba80-11605ffdb1f9)
- Implementation: The deliverable of this project is a golang program that could be deployed in a Kubernetes cluster independently while at the same time, monitoring CoreDNS pods in the same cluster and interacting Kubernetes API (server) to restart CoreDNS pods as needed.
- Related Issues:
  - https://github.com/coredns/rfc/issues/7

### OPA

#### OPA - MongoDB query translator

- Description: MongoDB is a general-purpose, document-based, distributed database with a rich query language. OPA features a high-level declarative language called `Rego` purpose-built for expressing policies over complex hierarchical data structures. OPA is often used to enforce policies over incoming API requests, but using OPA's "partial evaluation" feature it is also possible to enforce policies when data is accessed inside of document-oriented databases like MongoDB. In this model, callers query OPA to obtain a set of conditions to apply to the database query and then rewrite the database query accordingly. There are existing projects that translate "partial evaluation" results to SQL and Elasticsearch. This project would involve designing and implementing a Rego to MongoDB query translator that supports basic relational operations like ==, !=, >, <, etc. This project would hugely benefit the community to perform authorization and data-filtering in MongoDB using OPA.
- Recommended Skills: Go/Python, MongoDB (not required, but nice to have)
- Mentor(s): Ash Narkar (@ashutosh-narkar)
- Mentee: [Vineeth Pothulapati](https://people.communitybridge.org/mentee/1027186d-a51f-49cc-a8d8-a8a69b9ceb55,12a9270f-8673-4acb-92ec-fd539fc2b567)
- Upstream Issue: https://github.com/open-policy-agent/opa/issues/2059
- Community Bridge project (URL): [https://people.communitybridge.org/project/12a9270f-8673-4acb-92ec-fd539fc2b567](https://people.communitybridge.org/project/12a9270f-8673-4acb-92ec-fd539fc2b567)

### KubeVirt

#### Kernel boot

-	Description: KubeVirt allows to boot from regular (virtual) disks, an alternative booting method is to directly provide a kernel, initrd, and cmdline to a VM for booting. Such a feature is generally useful for many unikernel projects like the European Project Unicore. This project is about defining the relevant API and adding the necessary kernel boot support to KubeVirt.
-	Recommended Skills: golang, Kubernetes, virtualization
-	Mentor(s): Daniel Belenky (@danielBelenky), Daniel Hiller (@dhiller)
-       Mentee: [Hritvi Bhandari](https://people.communitybridge.org/mentee/cb7362a0-d10b-4806-8c43-6ffa4031515b,de7ca1c2-2d22-4919-bef8-6cca50a54426)
-	Issue:
	- https://github.com/kubevirt/kubevirt/issues/2741

#### Improve Observability
-	Description: KubeVirt is running VMs on Kubernetes, in order to simplify operations, KubeVirt should expose more metrics about the VMs (workloads) and it's infrastructure components, in order to improve serviceability by integrating with projects like prometheus. This project is about adding a couple of more metrics to different KubeVirt components.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Daniel Belenky (@danielBelenky), Daniel Hiller (@dhiller)
-       Mentee: [Arthur Silva Sens](https://people.communitybridge.org/mentee/bd26d0f8-0af5-4032-9fb2-ae6becb621c4,de7ca1c2-2d22-4919-bef8-6cca50a54426)
-	Issue:
	- https://github.com/kubevirt/kubevirt/issues/3385

### OpenEBS

#### A easy to use command-line interface (CLI) for OpenEBS.

-	Description: OpenEBS is completely Kubernetes native and is implemented using microservices. OpenEBS can be installed via kubectl or helm chart and managed via custom resources. To improve the usability of OpenEBS, the proposal is to have a easy to use OpenEBS CLI (similar to `kubectl`) to perform operations mentioned below.
	-	install  => Install OpenEBS
	-	upgrade  => Upgrade OpenEBS components
	-	status   => Print the readiness of various components, verify prerequisites are met to run openebs pools and volumes.
	-	version  => Print the OpenEBS version and associated images
	-	describe => Describe OpenEBS resources like pools and volumes.
	-	create   => Create OpenEBS resources
	-	delete   => Delete OpenEBS resources
-	Recommended Skills: Go, Kubernetes
-	Mentor(s): Kiran Mova (@kmova)
-	Mentee: [Vani Singh](https://people.communitybridge.org/mentee/fdfc538b-938b-475f-a68b-52cca059386f,40a443f9-cb78-49e6-96ad-26616acb2113)
-	Related Issues:
	-	https://github.com/openebs/openebs/issues/2946
	-	https://github.com/openebs/openebs/issues/1248
	-	https://github.com/openebs/openebs/issues/290

#### New storage backend using raw disk images

-	Description: OpenEBS Dynamic Local PV with Hostpath are great for use cases with low latency requirements and running on nodes with few attached drives or block devices. Using bare hostpath has the limitation of enforcing the capacity limits requested by PVC. The proposal is to implement a new type of storage, backed by a raw disk image on the host, that is mounted inside the pod. The storage backend should:
	-	have near-zero performance overhead, compared to using local disks
	-	be thin-provisioned
	-	be able to enforce storage size limits
	-	be able to expose volume metrics
-	Recommended Skills: Kubernetes, Linux, Python, Go
-	Mentor(s): Kiran Mova (@kmova)
-	Mentee: [Mehran Kholdi](https://people.communitybridge.org/mentee/b72c04dc-9650-4e3a-a335-14c5123b8f32,40a443f9-cb78-49e6-96ad-26616acb2113)
-	Related Issues:
	-	https://github.com/openebs/openebs/issues/2871
