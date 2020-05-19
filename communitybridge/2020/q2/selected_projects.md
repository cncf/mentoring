## Selected Projects

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

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
-	Recommended Skills: golang
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-       Mentee: Jane Doe
-	Issue: https://github.com/prometheus/prometheus/issues/3416
-       Community Bridge project (URL): https://people.communitybridge.org/project/9595fbe7-6a8d-43d4-aebb-a54d57f33fdd

## List of Selected Projects

### Service Mesh Interface

#### SMI Conformance with Meshery

- Description: Ensure that a service mesh is properly configured and that its behavior conforms to official SMI specifications. Leverage Meshery as an SMI-integrated tool to provide conformance of both capabilities and compliance status as outlined in the [design specification](https://docs.google.com/document/d/1HL8Sk7NSLLj-9PRqoHYVIGyU6fZxUQFotrxbmfFtjwc/edit).
- Mentors: Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), Vinayak Shinde ([@vinushnd](https://twitter.com/vinushnd))
- Mentee: [Kanishkar J](https://people.communitybridge.org/mentee/2733c465-9ea8-4889-a3a3-e1b9215393ee,359dda52-7fb7-4fa8-82cd-a27216757a57)
- Issue: [https://github.com/servicemeshinterface/smi-spec/issues/70](https://github.com/servicemeshinterface/smi-spec/issues/70)

### Kubernetes

#### Kubernetes working group for CSI driver

-	Description: Container Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes. The idea is to implement a few new CSI features and also e2e tests to cover those features, e.g. volume expansion, Windows support, inline volume support etc. Also, there are requirements to rewrite some flexvolume drivers(e.g. [SMB CSI Driver](https://github.com/kubernetes-csi/csi-driver-smb)) to CSI driver.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Andy Zhang [@andyzhangx](https://github.com/andyzhangx)
-   Mentee: [Animesh Kumar](https://people.communitybridge.org/mentee/51d3fad8-fac8-49c0-ba18-9c96635b07f1,2d438b9a-c539-46d0-9eed-c6ee4404c88a)
-	Upstream Issue (URL):
	-	https://github.com/kubernetes/kubernetes/issues/56005
	-	https://github.com/kubernetes-sigs/azurefile-csi-driver/issues
-   Community Bridge project (URL): https://people.communitybridge.org/project/2d438b9a-c539-46d0-9eed-c6ee4404c88a

### Linkerd

#### Service Topologies

- Description: It is valuable to have metadata related to the topology of a cluster when making load balancing decisions. This metadata can be used to control egress costs between regions or even make advanced routing decisions in multicluster situations. As part of Kubernetes 1.17, [service topology](https://kubernetes.io/docs/concepts/services-networking/service-topology/) landed. This provides extra metadata as part of endpoints for a service to control weighting. Imagine transparently failing over to nodes running in a different zone if the pods locally are no longer running. Linkerd should implement support for this functionality.
- Recommended Skills: golang, Kubernetes, rust, Tokio
- Mentor(s): [Thomas Rampelberg](https://twitter.com/grampelberg) (@grampelberg)
- Mentee: [Matei David](https://people.communitybridge.org/mentee/17c3eb19-8878-40cc-bc8c-61fa0c97b381,65742dc0-7217-4c4a-a609-f5f0fcde5c0a)
- Issue:
  - [https://github.com/linkerd/linkerd2/issues/4325](https://github.com/linkerd/linkerd2/issues/4325)
- Community Bridge project (URL): [https://people.communitybridge.org/project/65742dc0-7217-4c4a-a609-f5f0fcde5c0a](https://people.communitybridge.org/project/65742dc0-7217-4c4a-a609-f5f0fcde5c0a)
