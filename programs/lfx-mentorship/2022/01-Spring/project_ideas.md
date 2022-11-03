# Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

- [Projects ideas](#projects-ideas)
  - [Template](#template)
  - [Sample](#sample)
    - [Prometheus (sample)](#prometheus-sample)
      - [Refactor the APIs for better readability and less maintenance overhead](#refactor-the-apis-for-better-readability-and-less-maintenance-overhead)
  - [Proposed Project ideas](#proposed-project-ideas)
      - [LitmusChaos](#litmuschaos)
        - [Develop new feature and add integration tests for LitmusCTL](#develop-new-feature-and-add-integration-tests-for-litmusctl)
      - [KubeArmor](#kubearmor)
        - [Extending kubearmor-cli-tool filtering options](#extending-kubearmor-cli-tool-filtering-options)
        - [Using mutating webhooks for applying pod/container kubearmor annotations](#using-mutating-webhooks-for-applying-podcontainer-kubearmor-annotations)
      - [Chaos Mesh](#chaos-mesh)
        - [Interactive Katacoda Playground for Chaos Experiment Examples](#interactive-katacoda-playground-for-chaos-experiment-examples)
      - [KubeVela](#kubevela)
        - [Enhance multi-cluster observability](#enhance-multi-cluster-observability)
        - [Extend monitoring through VelaQL](#extend-monitoring-through-velaql)
        - [Management of Terraform state](#management-of-terraform-state)
      - [WasmEdge](#wasmedge)
        - [Improving the performance of running miniruby](#improving-the-performance-of-running-miniruby)
        - [Improving the performance of running rustpython](#improving-the-performance-of-running-rustpython)
        - [Enable OpenVINO backend for WASI-NN](#enable-openvino-backend-for-wasi-nn)
        - [Implement typed function references proposal](#implement-typed-function-references-proposal)
      - [Kyverno](#kyverno)
        - [Extend Kyverno CLI test command for Generate policy rules](#extend-kyverno-cli-test-command-for-generate-policy-rules)
        - [e2e tests and CLI tests to cover sample policies](#e2e-tests-and-cli-tests-to-cover-sample-policies)
        - [Automate Performance Testing](#automate-performance-testing)
        - [Security enhancements](#security-enhancements)
        - [OpenTelemetry exporter for Kyverno](#opentelemetry-exporter-for-kyverno)
      - [Kuma](#kuma)
        - [Active monitoring of Cross Zone communication](#active-monitoring-of-cross-zone-communication)
        - [Add status infos in Kubernetes CRDs](#add-status-infos-in-kubernetes-crds)
      - [Karmada](#karmada)
        - [Refactor get command to leverage aggregated API](#refactor-get-command-to-leverage-aggregated-api)
        - [Refactor the scheduler framework](#refactor-the-scheduler-framework)
        - [Enhancement for controllers scalability](#enhancement-for-controllers-scalability)
        - [Dashboard development](#dashboard-development)
      - [Kubernetes](#kubernetes)
        - [Documentation assessment (SIG-Network Gateway API)](#documentation-assessment-sig-network-gateway-api)
        - [Automation of AMI build/test/publish pipelines for Cluster API Provider AWS (CAPA)](#automation-of-ami-buildtestpublish-pipelines-for-cluster-api-provider-aws-capa)
        - [Improvements to Kubernetes maintainers-related automation (SIG Contributor Experience)](#improvements-to-kubernetes-maintainers-related-automation-sig-contributor-experience)
        - [Kubernetes (SIG Contribex: Mentoring Subproject)](#kubernetes-sig-contribex-mentoring-subproject)
          - [Creating Katacoda Scenarios To Help New Contributors](#creating-katacoda-scenarios-to-help-new-contributors)
        - [Kubernetes (SIG Cluster Lifecycle)](#kubernetes-sig-cluster-lifecycle)
          - [Improvising unit test coverage(CAPV)](#improvising-unit-test-coveragecapv)
      - [Elekto and Kubernetes SIG-ContribEx](#elekto-and-kubernetes-sig-contribex)
        - [Elections Security Improvements](#elections-security-improvements)
      - [Vitess](#vitess)
        - [Add complete parsing support for MySQL functions](#add-complete-parsing-support-for-mysql-functions)
      - [Tremor](#tremor)
        - [Database Connectors](#database-connectors)
        - [CI and Release process improvements](#ci-and-release-process-improvements)
      - [KubeEdge](#kubeedge)
        - [Plans for Node Group Management](#plans-for-node-group-management)
        - [Move edge native k8s api interface GA](#move-edge-native-k8s-api-interface-ga)
        - [Design and add more e2e tests especially for edge scenarios](#design-and-add-more-e2e-tests-especially-for-edge-scenarios)
        - [Updating the kubeedge docs](#updating-the-kubeedge-docs)
      - [Thanos](#thanos)
        - [Run a community Thanos demo instance](#run-a-community-thanos-demo-instance)
      - [OpenTelemetry PHP](#opentelemetry-php)
        - [Help drive OpenTelemetry PHP to Beta](#help-drive-opentelemetry-php-to-beta)
      - [Pixie](#pixie)
        - [Add support for new protocols in protocol tracer](#add-support-for-new-protocols-in-protocol-tracer)
      - [Meshery](#meshery)
        - [Workflow engine](#workflow-engine)
        - [Service mesh playground](#service-mesh-playground)
      - [Service Mesh Performance](#service-mesh-performance)
        - [Definition of MeshMark](#definition-of-meshmark)
      - [Service Mesh Interface](#service-mesh-interface)
        - [Conformance Program](#conformance-program)

## Template

```
### CNCF Project Name
#### Title

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
- Upstream Issue: <https://github.com/prometheus/prometheus/issues/3416>

---

## Proposed Project ideas

#### LitmusChaos

##### Develop new feature and add integration tests for LitmusCTL

- Description: [LitmusChaos]("https://litmuschaos.io") is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. This project aims to develop new commands/features for litmusctl along with integration tests for it.
- Recommended Skills: Golang, Kubernetes, CLI
- Mentor(s): Raj Babu Das (@rajdas98), Sarthak Jain (@SarthakJain26), Saranya Jena (@Saranya-jena)
- Upstream Issue (URL): <https://github.com/litmuschaos/litmus/issues/3440>

#### KubeArmor

##### Extending kubearmor-cli-tool filtering options

- Description: [KubeArmor](https://github.com/kubearmor/KubeArmor/) is Cloud Native Runtime Security Enforcement System that restricts the behavior (such as process execution, file access, and networking operation) of containers and nodes at the system level using Linux Kernel LSMs (Linux Security Modules) and eBPF. KubeArmor cli-tool (aka karmor) connects to the kubearmor-relay service to provide command-line telemetry/observability. Karmor cli options could be extended to support various other parameters as described in the given issue.
- Recommended Skills: golang, k8s
- Mentor(s): Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Upstream Issue (URL): <https://github.com/kubearmor/kubearmor-client/issues/40>

##### Using mutating webhooks for applying pod/container kubearmor annotations

- Description: [KubeArmor](https://github.com/kubearmor/KubeArmor/) is Cloud Native Runtime Security Enforcement System that restricts the behavior of containers and nodes at the system level using Linux Kernel LSMs (Linux Security Modules) and eBPF. KubeArmor applies container/pod annotations to achieve some of the goals. Currently, these annotations are applied using k8s rolling update feature that results in pod getting terminated and recreated. Mutating webhooks could achieve the same functionality in a much cleaner way without having to terminate the pods.
- Recommended Skills: golang, k8s
- Mentor(s): Jaehyun Nam (@nam-jaehyun), Rahul Jadhav (@nyrahul), Barun Acharya (@daemon1024)
- Upstream Issue (URL): <https://github.com/kubearmor/KubeArmor/issues/360>

#### Chaos Mesh

##### Interactive Katacoda Playground for Chaos Experiment Examples

- Description: [Chaos Mesh](https://chaos-mesh.org/) is a powerful chaos engineering platform for Kubernetes. There is a Katacoda playground as [interactive tutorial](https://chaos-mesh.org/interactive-tutorial/), and we want to build more Katacoda scenarios as the minimum examples for each certain type of chaos experiment. The basic work would be to create new katacoda scenarios as referred to by <https://github.com/chaos-mesh/chaos-mesh/tree/master/examples>, and build small applications (with well-built observability) as the target of chaos experiment if required. This project will not require you to dive deep into the hard-core parts of Chaos Mesh, instead, it would be a tour of learning and exploring Chaos Mesh.
- Recommended Skills: golang, Kubernetes, Shell scripts
- Mentor(s): Zhiqiang Zhou (@STRRL)
- Upstream Issue: <https://github.com/chaos-mesh/chaos-mesh/issues/2842>

#### KubeVela

##### Enhance multi-cluster observability

- Description: [KubeVela](https://github.com/oam-dev/kubevela) is a modern application delivery platform based on Kubernetes. It is currently a CNCF Sandbox project. KubeVela supports managing application delivery in multi-clusters. One of the basic problem is to validate the health status of managed clusters. Besides, it is also useful to integrate other metrics like CPU core usage or number of available graphical cards. This project aims to establish a mechanism to support these features.
- Recommended Skills: golang, k8s
- Mentor(s): Jianbo Sun (@wonderflow), Da Yin (@somefive)
- Upstream Issue (URL): <https://github.com/oam-dev/kubevela/issues/3177>

##### Extend monitoring through VelaQL

- Description: [KubeVela](https://github.com/oam-dev/kubevela) is a modern application delivery platform based on Kubernetes. It is currently a CNCF Sandbox project. In KubeVela, a CUE-based query mechanism is developed to satisfy the demands of advanced queries behind Kubernetes resources, which is called VelaQL. This project aims to make extensions to this mechanism and support monitoring Kubernetes resources through VelaQL. For example, monitoring the logs of pods in KubeVela Application behind Grafana.
- Recommended Skills: golang, k8s
- Mentor(s): Jianbo Sun (@wonderflow), Da Yin (@somefive)
- Upstream Issue (URL): <https://github.com/oam-dev/kubevela/issues/3178>

##### Management of Terraform state

- Description: To some extent, Terraform state is the most essential component for cloud resources provisioned by Terraform Controller. We need to better manage the state.
- Recommended Skills: Golang, Terraform
- Mentor(s): ZhengXi Zhou (@zzxwill)
- Upstream Issue (URL): <https://github.com/oam-dev/terraform-controller/issues/239>

#### WasmEdge

##### Improving the performance of running miniruby

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. WasmEdge is an official sandbox project hosted by the CNCF. WasmEdge is designed for the general purpose wasm runtime. However, when running miniruby, we found the performance is worse than other runtimes such as wasmtime, even after using the ahead-of-time compilation.
- Recommended Skills: profiling tools, c++
- Mentor(s): Hung-Ying Tai (@hydai), Shen-Ta Hsieh (@ibmibmibm)
- Upstream Issue (URL): <https://github.com/WasmEdge/WasmEdge/issues/1062>

##### Improving the performance of running rustpython

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. WasmEdge is an official sandbox project hosted by the CNCF. WasmEdge is designed for the general purpose wasm runtime. However, when running rustpython, we found the performance is worse than other runtimes such as wasmtime, even after using the ahead-of-time compilation.
- Recommended Skills: profiling tools, c++
- Mentor(s): Hung-Ying Tai (@hydai), Shen-Ta Hsieh (@ibmibmibm)
- Upstream Issue (URL): <https://github.com/WasmEdge/WasmEdge/issues/1061>

##### Enable OpenVINO backend for WASI-NN

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. WasmEdge is an official sandbox project hosted by the CNCF. WasmEdge has implemented some features of WASI-NN. However, the backend is using ONNX. In this ticket, we would like to have both ONNX and OpenVINO backend.
- Recommended Skills: c++, OpenVINO
- Mentor(s): Hung-Ying Tai (@hydai), Yi-Ying He (@q82419)
- Upstream Issue (URL): <https://github.com/WasmEdge/WasmEdge/issues/1063>

##### Implement typed function references proposal

- Description: [WasmEdge](https://github.com/WasmEdge/WasmEdge) is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. WasmEdge is an official sandbox project hosted by the CNCF. This proposal is one of the requirements for GC proposal. Typed function references proposal adds function references that are typed and can be called directly.
- Recommended Skills: c++
- Mentor(s): Hung-Ying Tai (@hydai), Yi-Ying He (@q82419)
- Upstream Issue (URL): <https://github.com/WasmEdge/WasmEdge/issues/1123>

#### Kyverno

##### Extend Kyverno CLI test command for Generate policy rules

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project extends the Kyverno CLI to cover generate policies and improve tests coverage for Kyverno, based on the test results. The enhancement will involve extending the test command for generate policy rules, adding more test cases for the samples, and automating execution of tests.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Prateek Pandey (@prateekpandey14)
- **Upstream Issue (URL)**: <https://github.com/kyverno/kyverno/issues/3114>

##### e2e tests and CLI tests to cover sample policies

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project will create automated test cases for the samples policies which are missing, and automating execution of tests.The enhancement will involve adding more unit/E2E tests.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Vyankatesh Kudtarkar (@vyankyGH), Prateek Pandey (@prateekpandey14)
- **Upstream Issue (URL)**: <https://github.com/kyverno/kyverno/issues/3121>

##### Automate Performance Testing

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project automates scalability tests for Kyverno on large Kubernetes clusters with several namespaces and resources. The candidate has to propose an automation plan to create clusters and resources and help optimize resource usage of Kyverno for different loads for large Kubernetes clusters.
- **Recommended Skills**: Golang, Kubernetes, Test, Automation
- **Mentor(s)**: Shuting Zhao (@realshuting)
- **Upstream Issue (URL)**: <https://github.com/kyverno/kyverno/issues/3113>

##### Security enhancements

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project improves security posture and processes for Kyverno. Improve OSSF Security Scorecard results, define security processes, and add best practice processes like publishing signed images and build attestations for SLSA compliance.
- **Recommended Skills**: Security, Golang
- **Mentor(s)**: Jim Bugwadia (@JimBugwadia)
- **Upstream Issue (URL)**: <https://github.com/kyverno/kyverno/issues/2250>

##### OpenTelemetry exporter for Kyverno

- **Description**: [Kyverno](https://kyverno.io) is a Kubernetes native policy engine that secures and automates Kubernetes configurations. This project will instrument Kyverno to export OpenTelemetry data for metrics, logs, flows, and policy reports. The project will include testing with OpenTelemetry collectors and documenting the integration steps.
- **Recommended Skills**: Observability, Prometheus, OpenTelemetry, Golang
- **Mentor(s)**: Shuting Zhao (@realshuting), Jim Bugwadia (@JimBugwadia)
- **Upstream Issue (URL)**: <https://github.com/kyverno/kyverno/issues/3120>

#### Kuma

##### Active monitoring of Cross Zone communication

- Description: [Kuma](https://github.com/kumahq/kuma) is a modern Envoy-based service mesh that can run on every cloud, in a single or multi-zone capacity, across both Kubernetes and VMs. It is currently a CNCF Sandbox project. Because Kuma is heavily built with multi zones in mind it is needed for Kuma to provide a good level of observability of connectivity between these zones. This project aims to provide active monitoring of connections between each zone and create new apis to bubble up this information in the GUI and in our Grafana dashboards. This project goes from design to complete implementation, documentation and demonstration.
- Recommended Skills: golang, k8s
- Mentor(s): Jakub Dyszkiewicz (@jakubdyszkiewicz), Bart Smykla (@bartsmykla), Charly Molter (@lahabana)
- Upstream Issue (URL): <https://github.com/kumahq/kuma/issues/1907>

##### Add status infos in Kubernetes CRDs

- Description: [Kuma](https://github.com/kumahq/kuma) is a modern Envoy-based service mesh that can run on every cloud, in a single or multi-zone capacity, across both Kubernetes and VMs. It is currently a CNCF Sandbox project. While Kuma currently exposes information about status in its [api](https://kuma.io/docs/1.4.x/documentation/http-api/#mesh-insights) Kubernetes users usualy expect these to be also present in the Status fields of their resources. This project aims in adding status to all Kuma CRD and to improve our controllers to set these as cluster state changes.
- Recommended Skills: golang, k8s
- Mentor(s): Jakub Dyszkiewicz (@jakubdyszkiewicz), Bart Smykla (@bartsmykla), Charly Molter (@lahabana)
- Upstream Issue (URL): <https://github.com/kumahq/kuma/issues/3734>

#### Karmada

##### Refactor get command to leverage aggregated API

- Description: Now karmadactl get command retrieves resources by Cluster token stored in Cluster object, we want to refactor it to leverage the Aggregated API.
- Recommended Skills: golang, k8s
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): <https://github.com/karmada-io/karmada/issues/1329>

##### Refactor the scheduler framework

- Description: Refactor the framework of karmada-scheduler to make it easier to extend and adopt more scheduling policies.
- Recommended Skills: golang, k8s
- Mentor(s): Kevin Wang (@kevin-wangzefeng)
- Upstream Issue (URL): <https://github.com/karmada-io/karmada/issues/1330>

##### Enhancement for controllers scalability

- Description: Ensures the controllers are suitable for large-scale deployment in production cases.
- Recommended Skills: golang, k8s
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): <https://github.com/karmada-io/karmada/issues/1331>

##### Dashboard development

- Description: The initial version of karmada-dashboard just getting on board, and more pages waiting for development.
- Recommended Skills: golang, k8s
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): <https://github.com/karmada-io/dashboard/issues/10>

#### Kubernetes

##### Documentation assessment (SIG-Network Gateway API)

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
- Upstream Issue (URL): <https://github.com/kubernetes-sigs/gateway-api/issues/1003>

##### Automation of AMI build/test/publish pipelines for Cluster API Provider AWS (CAPA)

- **Description**: Cluster API (CAPI) is a Kubernetes sub-project focused on providing declarative APIs and tooling to simplify lifecycle management of Kubernetes clusters. CAPA is the infrastructure provider that extends Cluster API to manage Kubernetes clusters on AWS. As a mentee, you will start with learning CAPI/CAPA concepts and then, will work on the main project which is to automate AMI build, test, and publish workflows using Prow, Github, and other Kubernetes automation tools.
- **Recommended Skills**: Golang, GitHub, Test, Automation, CI/CD pipelines
- **Mentor(s)**: Sedef Savas (@sedefsavas)
- **Upstream Issue (URL)**: <https://github.com/kubernetes-sigs/cluster-api-provider-aws/issues/1982>

##### Improvements to Kubernetes maintainers-related automation (SIG Contributor Experience)

- **Description**: Kubernetes uses OWNERS files to delegate responsibility over different parts of the codebase. These files are also used in the code review process. Unfortunately, over time, there are lots of OWNERS files which have languished and have stale information. Since the velocity of a project is also determined by the number of people reviewing code, it is essential to keep the OWNERS files up-to-date. To ensure this, the `maintainers` project was created.
  This internship involves improving `maintainers` through adding new features and integrating the tool in suitable automation so that it is actively used by the community to signal out-of-date OWNERS files. A stretch goal would also be to improve similar automation tools used to handle github membership for the community.

- **Recommended Skills**: golang (required), experience with GitHub APIs (preferred but not required)
- **Mentor(s)**: Nikhita Raghunath (@nikhita), Nabarun Pal (@palnabarun)
- **Upstream Issue (URL)**: <https://github.com/kubernetes/org/issues/3208>

##### Kubernetes (SIG Contribex: Mentoring Subproject)

###### Creating Katacoda Scenarios To Help New Contributors

- **Description**: There are various Katacoda scenarios available for diverse aspects of Kubernetes, but they focus on an end-user perspective. There is a need to create interactive tutorials to help folks interested in contributing to the project. As a first step, a Katacoda scenario to set up Kubernetes and run tests locally was created that can be found [here](https://github.com/kubernetes-sigs/contributor-katacoda).

This internship involves improving the existing Katacoda scenario and adding new scenarios to further include aspects of contributing such as spinning up a `kind` cluster with the changes made and testing those changes out. Through the course of this internship, you will also learn how one can contribute to other projects of the Kubernetes community such as the Kubernetes website, and document these processes as Katacoda scenarios to help new contributors get started in their contribution journey.

- **Recommended Skills**: Technical Writing, Kubernetes, Golang (preferred but not required)
- **Mentor(s)**: Debabrata Panigrahi (@Debanitrkl), Madhav Jivrajani (@MadhavJivrajani)
- **Upstream Issue (URL)**: <https://github.com/kubernetes/community/issues/5576>

##### Kubernetes (SIG Cluster Lifecycle)

###### Improving unit test coverage(CAPV)

- **Description**: Cluster API (CAPI) is a Kubernetes sub-project focused on providing declarative APIs and tooling to simplify lifecycle management of Kubernetes clusters. CAPV is the infrastructure provider that extends Cluster API to manage Kubernetes clusters on vSphere. As a mentee, you will start with learning CAPI/CAPV concepts and then, will work on the main project which is to improve unit test coverage.
- **Recommended Skills**: Golang, GitHub, Test, Automation, CI/CD pipelines
- **Mentor(s)**: Ankita Swamy(@Ankitasw),Geetika Batra(@geetikabatra)
- **Upstream Issue (URL)**: <https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/issues/1392>

#### Elekto and Kubernetes SIG-ContribEx

##### Elections Security Improvements

- **Description**: [Elekto](https://elekto.dev) is a project for running preference elections for open source projects hosted by the CNCF. It is used for elections for the Kubernetes and Knative projects, and will soon be used by others. During the 2021 elections, a security audit identified several areas of improvement in both in the security and privacy of Elekto, and in the security of the Kubernetes deployment. The mentee for this project would be implementing those recommendations in order to make Elekto and Kubernetes elections more secure.
- **Recommended Skills**:
  - Python/Flask programming
  - Understand basic HTML/CSS
  - Moderate knowledge of SQL and database migrations
  - How to use basic cryptographic functions available in existing libraries
- **Mentor(s)**: Josh Berkus (@jberkus)
- **Issue**: [Implement Security Recommendations](https://github.com/elekto-io/elekto/issues/51)

#### Vitess

##### Add complete parsing support for MySQL functions

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of MySQL functions are not parsed correctly and result in syntax errors. Parsing for a lot of the newer features in MySQL 8.0 is also missing. The task of the mentee would be to add parsing support for such functions and features.
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): Manan Gupta (@GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>

#### Tremor

##### Database Connectors

- Description: Connectors are tremors interface to the outside world, they allow us to integrate with third-party systems. Currently, tremor only has a limited set of connectors for databases, we support s3 and google cloud storage for object stores, and have a k/v connector that offers a simple integrated key-value store. While this is a good starting point interfacing with more databases will make tremor easier to use for our end users. The primary target will be integrating with Yandex Clickhouse.
- Recommended Skills: Rust, Databases, Testing
- Mentor(s): Matthias Wahl, Darach Ennis
- Upstream Issue (URL):<https://github.com/tremor-rs/tremor-runtime/issues/1453>

##### CI and Release process improvements

- Description: Tremor has a lot of headroom when it comes to improving the CI and the build process. Those improvements will make the day-to-day life of contributors better and gives end-users more frequent and up-to-date builds allowing them to be used in a more cloud-native fashion. The goal is to make the general developer and user experience around contributing and releasing better. This project is well suited for someone interested in the DevOps/SRE world but offer stretch goals to reach into other topics.
- Recommended Skills: Make, Git/GitHub, CI/GitHub Actions, GitOps, DevOps, Packaging
- Mentor(s): Heinz Gies, Darach Ennis
- Upstream Issue (URL): <https://github.com/tremor-rs/tremor-runtime/issues/1452>

#### KubeEdge

##### Plans for Node Group Management

- Description: In edge computing scenarios, nodes are geographically distributed. The same application may be deployed on nodes at different locations. We have plans for achieving the feature of Pod Scheduling among node groups.
- Recommended Skills: Kubernetes, KubeEdge
- Mentor(s): Vincent Lin(@vincentgoat), Kevin Wang(@kevin-wangzefeng)
- Upstream Issue (URL):<https://github.com/kubeedge/kubeedge/issues/3582>

##### Move edge native k8s api interface GA

- Description: Now we have add the edge native k8s api interface, apps like operator running in edgeside can access the apiserver and obtain resources. We still need to fix bug and improve the stability.
- Recommended Skills: Kubernetes, KubeEdge
- Mentor(s): Shelley Bao(@Shelley-BaoYue), Fisher Xu(@fisherxu)
- Upstream Issue (URL): <https://github.com/kubeedge/kubeedge/issues/3596>

##### Design and add more e2e tests especially for edge scenarios

- Description: We have many features for edge scenarios, as edge autonomy, reliable message transmission, etc. We need to add e2e tests for them.
- Recommended Skills: Kubernetes, KubeEdge
- Mentor(s): Wack Xu(@wackxu), Fisher Xu(@fisherxu)
- Upstream Issue (URL): <https://github.com/kubeedge/kubeedge/issues/3595>

##### Updating the kubeedge docs

- Description: Now we have lots of new features, we need add more docs for them.
- Recommended Skills: Kubernetes, KubeEdge
- Mentor(s): Fisher Xu(@fisherxu)
- Upstream Issue (URL): <https://github.com/kubeedge/website/issues/189>

#### Thanos

##### Run a community Thanos demo instance

- Description: Thanos is a distributed system that has a user interface written in React. Let's create a community instance with continuous integration for easy testing of how Thanos works. Also, it could serve as a testing ground for new React components. A server is provided by CNCF (<https://github.com/cncf/cluster/issues/190>).
- Recommended Skills: Linux, Ansible, Python, Shell Scripting
- Mentor(-s): Giedrius Statkevičius (@GiedriusS)
- Upstream Issue (URL): <https://github.com/thanos-io/thanos/issues/4606>

#### OpenTelemetry PHP

##### Help drive OpenTelemetry PHP to Beta

- Description: Help to drive our [project board](https://github.com/open-telemetry/opentelemetry-php/projects/1) for OpenTelemetry PHP. This includes validating spec compliance and writing PHP code to implement some of these features
- Recommended Skills: PHP
- Mentor(s): @bobstrecansky, @tidal, @brettmc
- Upstream Issue (URL): <https://github.com/open-telemetry/opentelemetry-php/projects/1>

#### Pixie

##### Add support for new protocols in protocol tracer

- Description: [Pixie](https://github.com/pixie-io/pixie) performs automatic tracing and parsing of various protocols (e.g. HTTP, MySQL, Kafka), but there are many others that still need to be added. You can help add protocol parsers for technologies such as Mongo, AMQP (used by RabbitMQ and other message queues), or another protocol of your choice.
- Recommended Skills: C++
- Mentor(s): Omid Azizi (@oazizi000)
- Upstream Issue (URL): <https://github.com/pixie-io/pixie/issues/332>, <https://github.com/pixie-io/pixie/issues/341>

#### Service Mesh Performance

##### Definition of MeshMark

- Description: Create MeshMark provides a universal performance index to gauge your mesh’s efficiency against deployments in other organizations’ environments. MeshMark functions as a service mesh performance index (a scale) to provide people the ability to weigh the value of their service mesh versus the overhead of their service mesh and assess whether they are getting out of the mesh what they are “paying” for in it. Work with maintainers from Layer5, Intel, Red Hat, and HashiCorp on researching cloud native infrastructure performance. Internship involves: machine learning, adaptive algorithms, running and analyzing performance statistics.
- Recommended Skills: Analytics, Algorithms, Data Science, (Golang and/or C++ helpful, but not necessary)
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Aditya Chatterjee](http://github.com/warunicorn19)
- Issue: <https://github.com/service-mesh-performance/service-mesh-performance/issues/227>

#### Meshery

##### Service mesh playground

- Description: Create the world’s service mesh playground. Meshery’s genesis is that of helping teach people about service mesh technology and enabling to operate this type of cloud native infrastructure confidently. The proposed project is aimed at furthering this mission with interactive API documentation connected to a service mesh learning playground (a running instance of Meshery).
- Recommended Skills: Golang, ReactJS
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Debopriya Bhattacharjee](https://github.com/debo19)
- Issue: <https://github.com/layer5io/meshery/issues/2931>

##### Workflow engine

- Description: Integrate a new architectural component into Meshery: a workflow engine. This project involves shifting Meshery off of bitcask and off of sqlite over to postgres using gorm (golang). Interns will familiarize with concepts of orchestration engines, including chaining workflows, and content lifecycle management.
- Recommended Skills: Golang, Temporal, ReactJS
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Ashish Tiwari](https://github.com/revolyssup)
- Issue: <https://github.com/meshery/meshery/issues/3934>

#### Service Mesh Interface

##### Conformance Program

- Description: Ensure that a service mesh is properly configured and that its behavior conforms to official SMI specifications. Advance the definition of conformance tests and the test framework, Meshery (see [design specification](https://docs.google.com/document/d/1HL8Sk7NSLLj-9PRqoHYVIGyU6fZxUQFotrxbmfFtjwc/edit)).
- Recommended Skills**: Golang, ReactJS, GitHub Actions 
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Abhishek Kumar](https://github.com/Abhishek-kumar09)
- Issue: [https://github.com/servicemeshinterface/smi-spec/issues/70](https://github.com/servicemeshinterface/smi-spec/issues/70)
