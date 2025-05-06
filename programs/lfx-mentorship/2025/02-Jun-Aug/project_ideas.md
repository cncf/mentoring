## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
- Upstream Issue:

```

---

## Proposed Project ideas

### Kubernetes

#### Graduate the kubeadm feature gate WaitForAllControlPlaneComponents to GA

- Description:  
The feature gate WaitForAllControlPlaneComponents is used to
enhance the health checks performed by kubeadm on control plane node creation,
to not only check the availability of the kube-apisever, but also check
the kube-controller-manager and kube-scheduler. In kubeadm 1.33, the feature gate
was promoted to Beta. As part of this LFX project it can be promoted to GA,
by finalizing the remaining work, such as, code changes, documentation updates
and e2e test updates.
- Expected Outcome: The feature gate is graduated to GA
- Recommended Skills: golang, Kubernetes, kubeadm
- Mentor(s):
  - Shida Qiu (@SataQiu)
  - Paco Xu (@pacoxu)
- Type: maintainer mentorship (only for maintainers to work on as part of a one-off LFX Project)
- Upstream Issue (URL): https://github.com/kubernetes/kubeadm/issues/2907

### KubeStellar

#### Building a Marketplace for KubeStellar Plugins

- Description:  
This project aims to develop a marketplace system for KubeStellar that will allow users to discover, install, and manage plugins that extend KubeStellar's functionality. The marketplace will provide a centralized hub for community-contributed plugins, enhancing KubeStellar's extensibility and user experience. The implementation will include a backend API written in Go and a frontend interface built with React.

- Expected Outcome
  - A fully functional plugin marketplace integrated into KubeStellar's UI
  - Backend API for plugin management (upload, discovery, installation, updates)
  - Frontend components for browsing, searching, and installing plugins
  - Plugin versioning and compatibility checking
  - User ratings and reviews for plugins
  - Documentation for plugin developers and users

- Recommended Skills
  - Go 
  - React.ts
  - REST API
  - Kubernetes
  - KubeStellar 
  - Docker
  - containerization
  - Git
  - GitHub workflow

- Mentor
  - Rishi Mondal (@MAVRICK-1 , mavrickrishi@gmail.com)
  - Andy Anderson (@clubanderson , andy@clubanderson.com)
  - Rahul Vishwakarma (@manzil-infinity180 , rahulvs2809@gmail.com)
- Upstream Issue: [https://github.com/kubestellar/ui/issues/606](https://github.com/kubestellar/ui/issues/606)


#### Implementing a Model Context Protocol for KubeStellar MCP Server

- Description:  
This project aims to develop a Model Context Protocol for KubeStellar's Management Control Plane (MCP) server. The protocol will establish a standardized communication framework between KubeStellar's internal components and the AI models used for command interpretation. By defining clear context boundaries, semantic structures, and state management patterns, the protocol will enable the MCP server to maintain consistent understanding of the multi-cluster environment while processing natural language management commands across KubeStellar deployments.

- Expected Outcome
  - A fully specified Model Context Protocol defining the interaction between KubeStellar and AI models
  - Implementation of protocol handlers in TypeScript or Python for the MCP server
  - Context management system that maintains KubeStellar state information for accurate command interpretation
  - Serialization and deserialization mechanisms for efficiently passing cluster state to models
  - Protocol extension mechanisms for supporting different AI providers
  - Performance optimizations for minimizing latency in command processing
  - Comprehensive test suite validating protocol reliability under various operational conditions

- Recommended Skills
  - KubeStellar
  - Model Context Protocol
  - protocol design and implementation
  - TypeScript
  - Python
  - AI model
  - GenAi  
  - serialization formats 
  - efficient data structures
  - distributed systems state management

- Mentor
  - Rishi Mondal (@MAVRICK-1 , mavrickrishi@gmail.com)
  - Andy Anderson (@clubanderson , andy@clubanderson.com)

- Upstream Issue: [https://github.com/kubestellar/ui/issues/607](https://github.com/kubestellar/ui/issues/607)


#### Enhancing KubeStellar: UI Modernization & Marketplace Integration

- Description:
This project aims to significantly transform the KubeStellar experience through comprehensive UI modernization with a central focus on introducing a robust Marketplace feature. The implementation will deliver a seamless way for users to discover and integrate extensions while also improving installation workflows, enhancing UI/UX elements, upgrading topology visualizations, and modernizing documentation. The marketplace will serve as a pivotal community hub that accelerates adoption and extensibility of the KubeStellar platform.

- Expected Outcome
  - A comprehensive Marketplace integrated directly into KubeStellar UI that pulls from kubestellar/galaxy, showcasing project cards with repository links, related blogs, star counts, categorization (Kubeflow, Argo Workflows, Keueu, etc.), and providing valuable social/usage insights to drive community engagement
  - Installation and Setup Guide integrated directly into KubeStellar UI with cluster readiness checker, guided installation wizard, and real-time error feedback and resolution flows
  - UI/UX Enhancements including performance optimizations, responsive design for various screen sizes, skeleton loading for improved perceived performance, and user management with role-based access controls
  - Topology Visualization Enhancements with improved graphical representations, more intuitive navigation, and enhanced interaction models
  - KubeStellar UI Documentation featuring integration of React components within the existing documentation site, interactive examples and demos, and component showcases

- Recommended Skills
  - React
  - TypeScript
  - Kubernetes
  - KubeStellar
  - UI/UX Design
  - REST API
  - Golang
  - GitHub workflow

- Mentor
  - Rishi Mondal (@MAVRICK-1 , mavrickrishi@gmail.com)
  - Andy Anderson (@clubanderson , andy@clubanderson.com)

- Upstream Issue: [https://github.com/kubestellar/ui/issues/615](https://github.com/kubestellar/ui/issues/615)

### OpenKruise

#### add best practice to use openkruise workload with Karmada etc

- Description: 
Karmada and OCM are popular multi-cluster orchestration system, OpenKruise advance workload had been integrated with these orchestration system by community users, this project aims to provide official guidelines for the usage of OpenKruise in Karmada and OCM.

- Expected Outcome:
  - A complete document of Karmada and OCM integration with common OpenKruise workload(e.g. CloneSet, Advance StatefulSet) including supported features and current limitation
  - Possible code fix of problems found in the integration 

- Recommended Skills
  - Kuberntetes
  - technical document writing with markdown
 
- Mentor(s):
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
  - Sun Weixiang(@veophi, Vec.G.Sun@gmail.com)

- Upstream Issue: [https://github.com/openkruise/kruise/issues/2005](https://github.com/openkruise/kruise/issues/2005)

#### OpenKruiseGame controlplane HA deployment support

- Description:
The Kruise Game Controller Manager currently stores cache information for network plugins in memory, resulting in its single-replica deployment. From a business stability architecture perspective, it is necessary to migrate the cache out of memory to enable Kruise Game to transition to a multi-replica deployment. Besides, the current webhook certificate is self-signed by the controller. When the number of copies is more than one, an unauthenticated error will occur, so this needs to be modified.

- Expected Outcome:
  - support multi-replicas deployment
  - support webhook certificate signing using cert manager 

- Recommended Skills:
  - Go
  - Kubernetes

- Mentor:
  - Qiuyang Liu (@chrisliu1995, chrisliu1995@163.com)
  - Zhongwei Liu (@ringtail, zhongwei.lzw@alibaba-inc.com)

- Upstream Issue:[https://github.com/openkruise/kruise-game/issues/220](https://github.com/openkruise/kruise-game/issues/220)

#### Support progressDeadlineSeconds for Cloneset

This project aims to support progressDeadlineSeconds in CloneSet so as to provide information about whether the deployment is failed. The meaning of `progressDeadlineSeconds` is quite similar to the one in native kuberentes workload(`deployment`), but it need extra support for the time counting during CloneSet is paused due to partition restriction.

- Recommended Skills
  - Kubernetes
  - Golang
  - operator development

- Expected Outcome
  - A fully functional progressDeadlineSeconds supporting code with necessary unit and integration tests
  - complete document of the progressDeadlineSeconds and related CloneSet new condition in the status 

- Mentor
  - Yuxing Yuan(@ABNER-1, abner199709@gmail.com)
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
  
- Upstream Issue:[https://github.com/openkruise/kruise/issues/2006](https://github.com/openkruise/kruise/issues/2006)

#### Build simple dashboard to view and operate OpenKruise workload 
- Description: Currently, OpenKruise depends solely on the PaaS or CLI to listing OpenKruise workload display and operations. The lack of a general purpose Web-UI greatly hinder the adoption among developer users. This project is about to build a simple Web-UI that can list OpenKruise workload along with the native K8s workload, and support enhanced operation such as container restart or workload rollout. The Web-UI is preferably developed using UI extensions of existing PaaS e.g. Kubesphere and Rancher.

- Expected Outcome:
  - simple Web-UI
  - integration of the Web-UI with existing PaaS such as [KubeSphere](https://dev-guide.kubesphere.io/extension-dev-guide)
- Recommended Skills: 
    - UX/UI(react)
    - JavaScript
    - GoLang
    - Kubesphere/Rancher development(prefered but not mandatory ) 
- Mentor(s):
    - Zhang Zhen (@furykerry, furykerry@gmail.com)
    - Zhong Tianyun (@AiRanthem, airanthem666@gmail.com)
- Upstream Issue: https://github.com/openkruise/kruise/issues/1497
