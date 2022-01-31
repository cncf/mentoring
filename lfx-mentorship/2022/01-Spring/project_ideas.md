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

### Kyverno

#### Extend Kyverno CLI test command for Generate policy rules

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project extends the Kyverno CLI to cover generate policies and improve tests coverage for Kyverno, based on the test results. The enhancement will involve extending the test command for generate policy rules, adding more test cases for the samples, and automating execution of tests.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Prateek Pandey (@prateekpandey14)
- **Upstream Issue (URL)**: https://github.com/kyverno/kyverno/issues/3114


#### e2e tests and CLI tests to cover sample policies

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project will create automated test cases for the samples policies which are missing, and automating execution of tests.The enhancement will involve adding more unit/E2E tests.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Vyankatesh Kudtarkar (@vyankyGH), Prateek Pandey (@prateekpandey14)
- **Upstream Issue (URL)**: https://github.com/kyverno/kyverno/issues/3121

#### Automate Performance Testing

- **Description**:  [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project automates scalability tests for Kyverno on large Kubernetes clusters with several namespaces and resources. The candidate has to propose an automation plan to create clusters and resources and help optimize resource usage of Kyverno for different loads for large Kubernetes clusters.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Shuting Zhao (@realshuting)
- **Upstream Issue (URL)**: https://github.com/kyverno/kyverno/issues/3113


#### Security enhancements

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project improves security posture and processes for Kyverno. Improve OSSF Security Scorecard results, define security processes, and add best practice processes like publishing signed images and build attestations for SLSA compliance.
- **Recommended Skills**: Security, Golang
- **Mentor(s)**: Jim Bugwadia (@JimBugwadia)
- **Upstream Issue (URL)**: https://github.com/kyverno/kyverno/issues/2250

#### OpenTelemetry exporter for Kyverno

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project will instrument Kyverno to export OpenTelemetry data for metrics, logs, flows, and policy reports. The project will include testing with OpenTelemetry collectors and documenting the integration steps.
- **Recommended Skills**: Observability, Prometheus, OpenTelemetry, Golang
- **Mentor(s)**: Shuting Zhao (@realshuting), Jim Bugwadia (@JimBugwadia)
- **Upstream Issue (URL)**: https://github.com/kyverno/kyverno/issues/3120

#### Kuma

##### Active monitoring of Cross Zone communication

- Description: [Kuma](https://github.com/kumahq/kuma) is a modern Envoy-based service mesh that can run on every cloud, in a single or multi-zone capacity, across both Kubernetes and VMs. It is currently a CNCF Sandbox project. Because Kuma is heavily built with multi zones in mind it is needed for Kuma to provide a good level of observability of connectivity between these zones. This project aims to provide active monitoring of connections between each zone and create new apis to bubble up this information in the GUI and in our Grafana dashboards. This project goes from design to complete implementation, documentation and demonstration.
- Recommended Skills: golang, k8s
- Mentor(s): Jakub Dyszkiewicz (@jakubdyszkiewicz), Bart Smykla (@bartsmykla), Charly Molter (@lahabana)
- Upstream Issue (URL): https://github.com/kumahq/kuma/issues/1907

##### Add status infos in Kubernetes CRDs

- Description: [Kuma](https://github.com/kumahq/kuma) is a modern Envoy-based service mesh that can run on every cloud, in a single or multi-zone capacity, across both Kubernetes and VMs. It is currently a CNCF Sandbox project. While Kuma currently exposes information about status in its [api](https://kuma.io/docs/1.4.x/documentation/http-api/#mesh-insights) Kubernetes users usualy expect these to be also present in the Status fields of their resources. This project aims in adding status to all Kuma CRD and to improve our controllers to set these as cluster state changes.
- Recommended Skills: golang, k8s
- Mentor(s): Jakub Dyszkiewicz (@jakubdyszkiewicz), Bart Smykla (@bartsmykla), Charly Molter (@lahabana)
- Upstream Issue (URL): https://github.com/kumahq/kuma/issues/3734

#### Karmada

##### Refactor get command to leverage aggregated API

- Description: Now karmadactl get command retrieves resources by Cluster token stored in Cluster object, we want to refactor it to leverage the Aggregated API.
- Recommended Skills: golang, k8s
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): https://github.com/karmada-io/karmada/issues/1329

##### Refactor the scheduler framework

- Description: Refactor the framework of karmada-scheduler to make it easier to extend and adopt more scheduling policies.
- Recommended Skills: golang, k8s
- Mentor(s): Kevin Wang (@kevin-wangzefeng)
- Upstream Issue (URL): https://github.com/karmada-io/karmada/issues/1330

##### Enhancement for controllers scalability

- Description: Ensures the controllers are suitable for large-scale deployment in production cases.
- Recommended Skills: golang, k8s
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): https://github.com/karmada-io/karmada/issues/1331

##### Dashboard development

- Description: The initial version of karmada-dashboard just getting on board, and more pages waiting for development.
- Recommended Skills: golang, k8s
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): https://github.com/karmada-io/dashboard/issues/10
