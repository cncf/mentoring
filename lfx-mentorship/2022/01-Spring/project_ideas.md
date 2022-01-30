# Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

## Template

```
#### CNCF Project Name
##### Title

- Description:
- Recommended Skills:
- Mentor(s):
- Upstream Issue (URL):
```

## Sample

### Prometheus (sample)

#### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Issue: <https://github.com/prometheus/prometheus/issues/3416>

## Proposed Project ideas

#### LitmusChaos

##### Develop new feature and add integration tests for LitmusCTL

- Description: [LitmusChaos]("https://litmuschaos.io") is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. This project aims to develop new commands/features for litmusctl along with integration tests for it.
- Recommended Skills: Golang, Kubernetes, CLI
- Mentor(s): Raj Babu Das (@rajdas98), Sarthak Jain (@SarthakJain26), Saranya Jena (@Saranya-jena)
- Upstream Issue (URL): https://github.com/litmuschaos/litmus/issues/3440

#### KubeArmor

##### Extending kubearmor-cli-tool filtering options

- Description: [KubeArmor](https://github.com/kubearmor/KubeArmor/) is Cloud Native Runtime Security Enforcement System that restricts the behavior (such as process execution, file access, and networking operation) of containers and nodes at the system level using Linux Kernel LSMs (Linux Security Modules) and eBPF. KubeArmor cli-tool (aka karmor) connects to the kubearmor-relay service to provide command-line telemetry/observability. Karmor cli options could be extended to support various other parameters as described in the given issue.
- Recommended Skills: golang, k8s
- Mentor(s): Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Upstream Issue (URL): https://github.com/kubearmor/kubearmor-client/issues/40

##### Using mutating webhooks for applying pod/container kubearmor annotations

- Description: [KubeArmor](https://github.com/kubearmor/KubeArmor/) is Cloud Native Runtime Security Enforcement System that restricts the behavior of containers and nodes at the system level using Linux Kernel LSMs (Linux Security Modules) and eBPF. KubeArmor applies container/pod annotations to achieve some of the goals. Currently, these annotations are applied using k8s rolling update feature that results in pod getting terminated and recreated. Mutating webhooks could achieve the same functionality in a much cleaner way without having to terminate the pods.
- Recommended Skills: golang, k8s
- Mentor(s): Jaehyun Nam (@nam-jaehyun), Rahul Jadhav (@nyrahul), Barun Acharya (@daemon1024)
- Upstream Issue (URL): https://github.com/kubearmor/KubeArmor/issues/360

### Chaos Mesh

#### Interactive Katacoda Playground for Chaos Experiment Examples

- Description: [Chaos Mesh](https://chaos-mesh.org/) is a powerful chaos engineering platform for Kubernetes. There is a Katacoda playground as [interactive tutorial](https://chaos-mesh.org/interactive-tutorial/), and we want to build more Katacoda scenarios as the minimum examples for each certain type of chaos experiment. The basic work would be to create new katacoda scenarios as referred to by https://github.com/chaos-mesh/chaos-mesh/tree/master/examples, and build small applications (with well-built observability) as the target of chaos experiment if required. This project will not require you to dive deep into the hard-core parts of Chaos Mesh, instead, it would be a tour of learning and exploring Chaos Mesh.
- Recommended Skills: golang, Kubernetes, Shell scripts
- Mentor(s): Zhiqiang Zhou (@STRRL)
- Upstream Issue: <https://github.com/chaos-mesh/chaos-mesh/issues/2842>

#### KubeVela

##### Enhance multi-cluster observability

- Description: [KubeVela](https://github.com/oam-dev/kubevela) is a modern application delivery platform based on Kubernetes. It is currently a CNCF Sandbox project. KubeVela supports managing application delivery in multi-clusters. One of the basic problem is to validate the health status of managed clusters. Besides, it is also useful to integrate other metrics like CPU core usage or number of available graphical cards. This project aims to establish a mechanism to support these features.
- Recommended Skills: golang, k8s
- Mentor(s): Jianbo Sun (@wonderflow), Da Yin (@somefive)
- Upstream Issue (URL): https://github.com/oam-dev/kubevela/issues/3177

##### Extend monitoring through VelaQL

- Description: [KubeVela](https://github.com/oam-dev/kubevela) is a modern application delivery platform based on Kubernetes. It is currently a CNCF Sandbox project. In KubeVela, a CUE-based query mechanism is developed to satisfy the demands of advanced queries behind Kubernetes resources, which is called VelaQL. This project aims to make extensions to this mechanism and support monitoring Kubernetes resources through VelaQL. For example, monitoring the logs of pods in KubeVela Application behind Grafana.
- Recommended Skills: golang, k8s
- Mentor(s): Jianbo Sun (@wonderflow), Da Yin (@somefive)
- Upstream Issue (URL): https://github.com/oam-dev/kubevela/issues/3178


#### Kubernetes SIG-Network Gateway API

##### Docuemntation assessment

- Description: [Gateway API](https://gateway-api.sigs.k8s.io/) is an evolution of Kubernetes Ingress and Service networking that aims to upgrade and improve these APIs. This project is to have a [docs assessment](https://github.com/cncf/techdocs/blob/main/assessments/howto.md) performed, to help us come with a plan for improving our documentaion. In particular, we're looking for someone to look at the content organization, the clarity of the language and concepts, and to make sure it's as readable as possible for both implementors and end users. You'll be working with the mentors and maintainers of the project, with a stretch goal being to make the changes you produce in the initial assessment.
- Please provide a writing sample with the application.
- Recommended Skills:
  - Technical Writing
  - Documentation
  - English
  - git/GitHub
    - Familiarity with Kubernetes and Ingress may also be helpful, but are not required.
- Mentor(s):
  - Primary: [Nick Young](https://github.com/youngnick)
  - Adjunct: [Nate Waddington](https://github.com/nate-double-u)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/gateway-api/issues/1003