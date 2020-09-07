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

#### Prometheus (sample)
##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
-	Recommended Skills: golang
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Issue: https://github.com/prometheus/prometheus/issues/3416

### Proposed Project ideas

#### Kubernetes
##### Create Application for Elections Authenticated by External Oauth

-	Description: Create a web-based voting application, with voting logic based on CIVS project, that allows use of external Oauth, such as Github, for voter authentication
-	Recommended Skills: Application development, schedule management, programming
-	Mentor(s): Josh Berkus, Marky Jackson, Jaice Singer DuMars
-	Upstream Issue (URL): [Kubernetes community 5096](https://github.com/kubernetes/community/issues/5096)

##### Kubernetes working group for CSI driver

- Description: Container Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes. This project mainly focus on [SMB CSI driver](https://github.com/kubernetes-csi/csi-driver-smb) and [NFS CSI driver](https://github.com/kubernetes-csi/csi-driver-nfs): set up solid unit tests, test coverage data, e2e test pipeline first and then implement a few new CSI features, e.g. dynamc provisioning support, inline volume support, etc.
- Recommended Skills: golang, Kubernetes
- Mentor(s): Andy Zhang [@andyzhangx](https://github.com/andyzhangx)
- Upstream Issue (URL):
  - https://github.com/kubernetes-csi/csi-driver-smb/issues
- Community Bridge project (URL): https://people.communitybridge.org/project/2d438b9a-c539-46d0-9eed-c6ee4404c88a

#### Chaos Mesh
##### Create a debug information collector for Chaos Mesh

-	Description: Create a diagnotic info collector for Chaos Mesh to collect debugging info of a specific chaos experiment, covering chaos-daemon log, tc rules, iptables rules, etc.
-	Recommended Skills: Chaos Mesh, Kubernetes, golang
-	Mentor(s): Keao Yang([@YangKeao](https://github.com/YangKeao)), Cwen Yin([@cwen0](https://github.com/cwen0))
-	Issue: https://github.com/chaos-mesh/chaos-mesh/issues/694

#### KubeEdge
##### Support list-watch from edgecore for applications on the edge

-	Description: Some applications running on the edge side need to connect to the k8s master through list-watch interface, but on the edge it cannot directly connect to the k8s master. So we need forward the list-watch requests to the k8s master through the cloud-side channel.
-	Recommended Skills: KubeEdge, Kubernetes, golang
-	Mentor(s): Kevin Wang([@kevin-wangzefeng](https://github.com/kevin-wangzefeng)), Fei Xu([@fisherxu](https://github.com/fisherxu))
-	Issue: https://github.com/kubeedge/kubeedge/issues/1758

##### Use device API both on cloud and edge

-	Description: Now we have defined device API in the cloud side, but the edgeside(edgecore and mapper) still don't use the API, we should refactor edgeside and use same API on cloud and edge to reduce complexity.
-	Recommended Skills: KubeEdge, Kubernetes, golang
-	Mentor(s): Kevin Wang([@kevin-wangzefeng](https://github.com/kevin-wangzefeng)), Fei Xu([@fisherxu](https://github.com/fisherxu))
-	Issue: https://github.com/kubeedge/kubeedge/issues/2140

##### Add EdgeGateway as the ingress gateway on Edge

-	Description: Add the EdgeGateway as the ingress gateway on Edge to dispatch request to multiple backend pods on the Edge side.
-	Recommended Skills: KubeEdge, Kubernetes, golang
-	Mentor(s): Kevin Wang([@kevin-wangzefeng](https://github.com/kevin-wangzefeng)), Fei Xu([@fisherxu](https://github.com/fisherxu))
-	Issue: https://github.com/kubeedge/kubeedge/issues/1432

#### TiKV
##### Support ENUM / SET push down for TiKV Coprocessor

- Description: Coprocessor is a TiKV component to handle predicate push down. This task is to add `ENUM` and `SET` data type to it, so that the performance can be improved in scenarios that involve with these two data types.
- Recommended Skills: Rust, Database
- Mentor(s): Chi Zhang (@skyzh)
- Upstream Issue (URL): https://github.com/tikv/tikv/issues/8605