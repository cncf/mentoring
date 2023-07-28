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

### KubeVela

#### Support auto generation of multiple languages SDK from CUE

- Description: In KubeVela, we use [CUElang](https://cuelang.org/) to code the X-Definition. We want to support auto generation of multiple languages SDK from CUE, so that users can buidling KubeVela Application in their own language. This helps to adoptors to build platform based on KubeVela.
- Expected Outcome: Support auto generation of multiple languages SDK from CUE, including Java, Typescript ,Python. This capability should be part of vela CLI command.
- Recommended Skills: Java, Typescript ,Python, Kubernetes, CUE
- Mentor(s): 
    - Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com) 
    - Wang YiKe (@wangyikewxgm, wangyike.wyk@gmail.com)
- Upstream Issue: [kubevela/kubevela#5365](https://github.com/kubevela/kubevela/issues/5365)
- LFX URL: 

### Carvel

#### kctrl to support exporting package repository as tar

- Description: While generating Package Repository kctrl to create the tar version of the Package Repository instead of pushing the OCI Image to a registry. 
- Expected Outcome: 
    - Proposal containing design discussions and options considered.
    - Function Implementation to support a flag which allows to export the package repo to tar
    - Documentation changes as required 
- Recommended Skills: Golang
- Mentor(s): 
    - Soumik Majumder (@100mik, carvel-mentor)
    - Renu Yarday (@renuy, ryarday@vmware.com)
- Upstream Issue (URL): https://github.com/carvel-dev/kapp-controller/issues/1277
- LFX URL: 

### Kubernetes

#### Build a Go library and CLI for interacting with OpenBuildService

- Description: Kubernetes is set to start using [OpenBuildService](http://openbuildservice.org) as a platform for building, publishing, and hosting Kubernetes system (Debian and RPM) packages. The current integration with the OpenBuildService platform assumes a lot of manual tasks and depending on `osc` command-line tool written in Python. At SIG Release, we're striving to automate as many tasks as possible. We want to build a library and CLI written in Go for interacting with the OpenBuildService APIs and platform that can be integrated with our existing [release tooling (`krel`)](http://github.com/kubernetes/release).
- Expected Outcome: Library and CLI tool for interacting with OpenBuildService platform via their publicly available APIs. Both library and CLI tool should be properly tested via unit, integration, and end-to-end tests, and properly documented.
- Recommended Skills: Golang, working with APIs
- Mentor(s):
  - Carlos Panato (@cpanato, ctadeu@gmail.com)
  - Marko Mudrinić (@xmudrii, mudrinic.mare@gmail.com)
- Upstream Issue: https://github.com/kubernetes/sig-release/issues/2295
- LFX URL: 

### OpenKruise

#### Integrate Openkruise workload with ArgoCD and Helm

- Description: ArgoCD and Helm are popular tools to delivery k8s workload, yet currently only the k8s built-in workload are supported out-of-box for ArgoCD and Helm. OpenKruise provide advanced worklood that resemble with the built-in workload,  users can use OpenKruise workload with ArgoCD and Helm, yet they cannot tell ArgoCD and Helm whether Openkruise workload is ready or not. 
- Expected Outcome:
  - Improve ArgoCD integration by writing custom lua script to tell whether OpenKruise workload is healthy. The lua script can be submited to the Argo-CD repository.
  - Improve Helm intergration by building a job container that can check whether OpenKruise workload is healthy during helm install/upgrade process. 
- Recommended Skills: Lua ,Docker, Kubernetes
- Mentor(s):
    - Zhang zhen (@furykerry, furykerry@gmail.com)
    - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
- Upstream Issue: [openkruise/kruise#1345](https://github.com/openkruise/kruise/issues/1345)
- LFX URL: 

---
