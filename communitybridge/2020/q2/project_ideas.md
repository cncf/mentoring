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

### Argo

##### Kruise Deployment Wizard

-	Description: The Kruise Wizard is a tool that streamlines the creation of initial deployment manifests for complex Kubernetes applications. Development and traditional Ops teams can now use a wizard-like tool to define application deployments and generate a set of Kustomized based YAML files. These files are committed to a Git repository allowing seamless GitOps adoption. Kustomized based Kubernetes deployments can then be deployed utilizing a variety of CD tools as in our case: ArgoCD.
-	Recommended Skills: golang, kubernetes, argoCD, Kustomize
-	Mentor(s): Ken Owens (@kenowens12)
-	Upstream Issue (URL):https://github.com/Mastercard/Kruise-API
