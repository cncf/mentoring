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

#### Chaos Mesh

##### Interactive Katacoda Playground for Chaos Experiment Examples

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

#### WasmEdge

##### Improving the performance of running miniruby

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. WasmEdge is an official sandbox project hosted by the CNCF. WasmEdge is designed for the general purpose wasm runtime. However, when running miniruby, we found the performance is worse than other runtimes such as wasmtime, even after using the ahead-of-time compilation.
- Recommended Skills: profiling tools, c++
- Mentor(s): Hung-Ying Tai (@hydai), Shen-Ta Hsieh (@ibmibmibm)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/1062

##### Improving the performance of running rustpython

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. WasmEdge is an official sandbox project hosted by the CNCF. WasmEdge is designed for the general purpose wasm runtime. However, when running rustpython, we found the performance is worse than other runtimes such as wasmtime, even after using the ahead-of-time compilation.
- Recommended Skills: profiling tools, c++
- Mentor(s): Hung-Ying Tai (@hydai), Shen-Ta Hsieh (@ibmibmibm)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/1061

##### Enable OpenVINO backend for WASI-NN

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. WasmEdge is an official sandbox project hosted by the CNCF. WasmEdge has implemented some features of WASI-NN. However, the backend is using ONNX. In this ticket, we would like to have both ONNX and OpenVINO backend.
- Recommended Skills: c++, OpenVINO
- Mentor(s): Hung-Ying Tai (@hydai), Yi-Ying He (@q82419)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/1063

##### Implement typed function references proposal

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. WasmEdge is an official sandbox project hosted by the CNCF. This proposal is one of the requirements for GC proposal. Typed function references proposal adds function references that are typed and can be called directly.
- Recommended Skills: c++
- Mentor(s): Hung-Ying Tai (@hydai), Yi-Ying He (@q82419)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/1123

#### Kyverno

##### Extend Kyverno CLI test command for Generate policy rules

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project extends the Kyverno CLI to cover generate policies and improve tests coverage for Kyverno, based on the test results. The enhancement will involve extending the test command for generate policy rules, adding more test cases for the samples, and automating execution of tests.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Prateek Pandey (@prateekpandey14)
- **Upstream Issue (URL)**: https://github.com/kyverno/kyverno/issues/3114


##### e2e tests and CLI tests to cover sample policies

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project will create automated test cases for the samples policies which are missing, and automating execution of tests.The enhancement will involve adding more unit/E2E tests.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Vyankatesh Kudtarkar (@vyankyGH), Prateek Pandey (@prateekpandey14)
- **Upstream Issue (URL)**: https://github.com/kyverno/kyverno/issues/3121

##### Automate Performance Testing

- **Description**:  [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project automates scalability tests for Kyverno on large Kubernetes clusters with several namespaces and resources. The candidate has to propose an automation plan to create clusters and resources and help optimize resource usage of Kyverno for different loads for large Kubernetes clusters.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Shuting Zhao (@realshuting)
- **Upstream Issue (URL)**: https://github.com/kyverno/kyverno/issues/3113


##### Security enhancements

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

#### Vitess

##### Add complete parsing support for MySQL functions

 - Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of MySQL functions are not parsed correctly and result in syntax errors. Parsing for a lot of the newer features in MySQL 8.0 is also missing. The task of the mentee would be to add parsing support for such functions and features. 
 - Recommended Skills: go, SQL, yacc, compilers and lexers
 - Mentor(s): Manan Gupta (@GuptaManan100)
 - Issue: <https://github.com/vitessio/vitess/issues/8604>
