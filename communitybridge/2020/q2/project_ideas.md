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

#### Metrics Deletion 

- Description: Thanos is allowing storing metrics for long, if not unlimited time. Currently, however there is no fine-granular process of retaining only some portion of metrics for a longer time e.g useful aggregations), while deleting another part early on. This task is aiming to implement this missing feature in Thanos and potentially Prometheus. You will learn how to write efficient and reliable distributed systems, and how to deal with large scale challenges.
- Recommended Skills: go, distributed systems, object storage (AWS, S3)
- Mentor(s): Bartlomiej Plotka (@bwplotka), Matthias Loibl (@metalmatze)
- Issue: https://github.com/thanos-io/thanos/issues/1598

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

### Prometheus

#### Persist Retroactive Rule Reevaluations

- Description: Right now one of the biggest issues with recording rules is that data is only available since the rule was created. Which means any dashboards that use the recording rule will not have data prior to the recording rules create time. We can already reevaluate queries on old data, but we should be able to persist that for a certain window from [Oldest, Now).
- Recommended Skills: Golang
- Mentor(s): Bartlomiej Plotka (@bwplotka)
- Issue: https://github.com/prometheus/prometheus/issues/11.

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

- Description: Currently, TiKV computing framework using a simple and inefficient memory layout in computing framework. Using Chunk (a column-based memory layout) instead to improve memory locality and reduce memory allocation during expression evaluation.
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
  


