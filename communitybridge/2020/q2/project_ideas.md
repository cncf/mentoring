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

#### Allow running prombench locally

- Description: Currently prombench development requires the user to setup GKE environment. Having prombench to run in a local k8s cluster would make adding changes much easier and faster. Support for kubeconfig and a proper way to switch local and GKE environment is not available yet. Adding these features will be essential to the completion of the project.
- Recommended Skills: CI, Golang, Kubernetes
- Mentor(s): Hrishikesh Barman (@geekodour)
- Issue: https://github.com/prometheus/test-infra/issues/333.
