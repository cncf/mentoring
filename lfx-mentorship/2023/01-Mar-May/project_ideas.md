## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description: 
- Expected Outcome:
- Recommended Skills: 
- Mentor(s): Mentor Name (@mentor_github, mentor@email.addy) 
- Upstream Issue: 

---

```

## Proposed Project ideas



### OpenKruise

#### Bring progressive delivery to daemon workload

- Description: Kruise Rollout enable progressive delivery of various workload ranging from stateless workload such as Deployment to stateful workload such as StatefulSet or customized operators. This project aims to bring progress delivery capability to daemon workload, which is run on each node of a k8s cluster. The project involves implementing common API of progressive delivery for OpenKruise Advance DaemonSet, and integrate with the Kruise Rollout framework. 
- Expected Outcome: Support progressive delivery for OpenKruise Advance DaemonSet(along with supporting test cases and docs) , that is, update new version of daemon pods in batches with user defined pause strategy. Traffic scheduling is not required for this project. 
- Recommended Skills: Go, Kubernetes
- Mentor(s):  Zhang Zhen (@furykerry, furykerry@gmail.com), Zhang Lei(@resouer, resouer@gmail.com)
- Upstream Issue: https://github.com/openkruise/rollouts/issues/69
- LFX URL: 

#### Support customize arbitary fields of workload subset in UnitedDeployment

- Description: UnitedDeployment in OpenKruise enable users to manage a set of k8s workloads in whole while be able to customize the topology and replicas of each workload. This project extends the customization capability to arbitary workload fields by adding common patch fields, so that 
each subset of UnitedDeployment can have different metadata, container configuration etc. 
- Expected Outcome: Support generate patches for new creating pods of each subset workload while the users can rollout and scale the UnitedDeployment in whole. 
- Recommended Skills: Go, Kubernetes
- Mentor(s): Zhang Zhen (@furykerry, furykerry@gmail.com), Zhang Lei(@resouer, resouer@gmail.com)
- Upstream Issue: https://github.com/openkruise/kruise/issues/811
- LFX URL: 

### KubeArmor

#### KubeArmor Telemetry Monitoring and Dashboards

- Description: KubeArmor generates a large amount of data through logs and alerts, but interpreting this data can be difficult. To make it easier to understand, it is necessary to parse the telemetry, create meaningful metrics, enable data filtering, and create visualizations such as graphs to display on a dashboard.
- Expected Outcome: Create a telemetry dashboard, write setup documentation and usage guide.
- Recommended Skills: ELK stack (Elasticsearch, Logstash & Kibana), Fluentd, Loki and Grafana
- Mentors: Anurag Kumar (@kranurag7, contact.anurag7@gmail.com), Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com), Barun Acharya (@daemon1024, barun1024@gmail.com), Rahul Jadhav (@nyrahul, nyrahul@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/836
- LFX URL: 


#### Adding OpenTelemetry Support

- Description: To integrate KubeArmor with OpenTelemetry, an adapter needs to be created. OpenTelemetry is a standard for telemetry data, including distributed tracing, metrics, and logs, and has an SDK and a collector component that can run on Kubernetes. Applications can directly expose OpenTelemetry data through in-app instrumentation using the OpenTelemetry SDK. The collector can then gather data from multiple applications in a cluster and send it to various backends for storage and visualization, such as Jaeger.
- Expected Outcome: The mentee's task is to develop an OpenTelemetry adapter for KubeArmor that can receive logs, alerts, and telemetry from the kubearmor-relay-service and convert it into the OpenTelemetry format. They are also expected to create documentation and usage guides that describe how to set up and use the adapter, as well as demonstrate the integration with a backend that supports OpenTelemetry.
- Recommended Skills: OpenTelemetry, Go
- Mentor(s): Anurag Kumar (@kranurag7, contact.anurag7@gmail.com), Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com), Barun Acharya (@daemon1024, barun1024@gmail.com), Rahul Jadhav (@nyrahul, nyrahul@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/894
- LFX URL: 


#### Rancher Plugin Integration

- Description: The goal is to create an extension for Rancher, a Kubernetes management platform, which will enable interaction with KubeArmor. The extension will have the capability to install KubeArmor, allow for the management of security policies, and provide monitoring of workload behavior through alerts and telemetry.
- Expected Outcome: Rancher plugin address the following points: Install KubeArmor within Rancher, document and demonstrate the usage.
Note: This item is a work in progress. The selected mentee is expected to continue the same work.
- Recommended Skills: Rancher, Grafana stack, Javascript
- Mentor(s): Anurag Kumar (@kranurag7, contact.anurag7@gmail.com), Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com), Barun Acharya (@daemon1024, barun1024@gmail.com), Rahul Jadhav (@nyrahul, nyrahul@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/992
- LFX URL: 


### KubeEdge

#### Design and implement the KubeEdge Dashboard

- Description: Users now can use K8s API or Kubectl to talk to KubeEdge, in this project we will design and implement the KubeEdge dashboard, so users can talk to KubeEdge cluster through UI.
- Expected Outcome: Create the KubeEdge dashboard, users can view and operate the resource through UI.
- Recommended Skills: JS, Kubernetes, KubeEdge, Html
- Mentors: Vincent Lin (@vincentgoat, linguohui1@huawei.com), Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Upstream Issue: https://github.com/kubeedge/dashboard/issues/1
- LFX URL: 


#### Re-design and implement the KubeEdge website

- Description: KubeEdge's website has been running for a few years, and now we have more customer cases and more developer courses, so this project will update KubeEdge's website, with more readable documents on the homepage, covering user cases, developer courses, etc.
- Expected Outcome: The website has more readable documentation, covering user cases, developer courses, etc.
- Recommended Skills: JS, KubeEdge, Html
- Mentor(s):  Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com), Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Upstream Issue: https://github.com/kubeedge/website/issues/292
- LFX URL: 

#### Cloud-Robotic AI Benchmarking for Edge-cloud Collaborative Lifelong Learning

- Description: Based on real-world datasets provided by industry members of KubeEdge SIG AI, the issue aims to build a lifelong learning benchmarking on KubeEdge-Ianvs. Namely, it aims to help all Edge AI application developers to validate and select the best-matched algorithm of lifelong learning.
- Expected Outcome: The benchmark includes: 1) Work together to release a new dataset to the public! 2) Implement critical algorithm or system metrics, e.g., BWT, FWT and thoughput; 3) (Optional) Develop a baseline algorithm for this benchmark.
- Recommended Skills: TensorFlow/Pytorch, Python, Kubernetes
- Mentor(s): Siqi Luo (@luosiqi, luosiqi2@huawei.com), Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/48
- LFX URL: 


### Karmada

#### Provide interactive environments for Karmada users
- Description: Using interactive environments(like killercoda) for users to get started quickly.
- Expected Outcome: Implement 2 Karmada examples in killercoda, including a CLI installation example and script installation example, both contains installation and deploying workload to multi-clusters steps.
- Recommended Skills: Kubernetes, Karmada
- Mentor(s): Wei Jiang (@jwcesign, jiangwei115@huawei.com), Hongcai Ren(@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/3085
- LFX URL: 

#### Enhance Karmada testing coverage

- Description: Karmada would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects.
- Expected Outcome: Increase the UT coverage rate to 65% (currently, the UT coverage rate is [43%](https://app.codecov.io/gh/karmada-io/karmada) ), increase the code coverage rate by about 20%.
- Recommended Skills: Golang, Git
- Mentor(s): Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com), Hongcai Ren(@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/3086
- LFX URL: 

#### Bundle third-party resources into the Resource Interpreter framework

- Description: Karmada's Resource Interpreter Framework is designed for interpreting resource structure. It consists of built-in and customized interpreters. Karmada could bundle some popular and open-sourced resources so that users can save the effort to customize them.
- Expected Outcome: The resources from projects, including Argo Workflow/Flux CD/Kyverno/OpenKurise, could be bundled in Karmada, and the corresponding documentation should also be supplemented.
- Recommended Skills: Go, Cloud Native
- Mentor(s): Tiecheng Shen (@Poor12, shentiecheng@huawei.com), Hongcai Ren(@RainbowMango, qdurenhongcai@gmail.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/3087
- LFX URL: 


### Linkerd

#### Linkerd Dashboard Improvements

- Description: Improve the Linkerd web dashboard with improved topology visualization, support for Linkerd conformance to the Gateway API project, and improved multi-cluster support.
- Expected Outcome: A period of focused investment in the Linkerd viz dashboard experience will greatly improve the experience for Linkerd users. 
- Recommended Skills: React/JavaScript, Kubernetes
- Mentor(s): Oliver Gould (@olixOr, ver@buoyant.io), Alex Leong (@adleong, alex@buoyant.io) 
- Upstream Issue: https://github.com/linkerd/linkerd2/issues/7865, https://github.com/linkerd/linkerd2/issues/9243, https://github.com/linkerd/linkerd2/issues/9554
- LFX URL: 

#### Add dynamic profiling to Linkerd Rust controllers
- Description: The Linkerd control plane includes controllers that are written in Rust. Enable users to dynamically profile the running application can aid significantly in debugging and diagnostics. 
- Expected Outcome: In an upcoming release of Linkerd the policy controller would expose endpoints (leveraging [pprof](https://github.com/tikv/pprof-rs/blob/master/README.md) or another tool) for profiling controller resource consumption.
- Recommended Skills: Rust, Kubernetes
- Mentor(s): Oliver Gould (@olixOr, ver@buoyant.io), Alex Leong (@adleong, alex@buoyant.io) 
- Upstream Issue: https://github.com/linkerd/linkerd2/issues/10227
- LFX URL: 

#### Prototype multi-cluster service discovery and operations
- Description: When deploying a multi-cluster resource one has to perform certain contortions such as providing a list of other clusters to each cluster. This places a dependency ordering on spinning up new clusters and a requirement for application operators to coordinate with cluster operators.
- Expected Outcome: Develop a prototype where each cluster only needs to reference a common service definition to discover peers without knowledge of the names or even number of other clusters.
- Recommended Skills: Go, Rust, Kubernetes
- Mentor(s): Oliver Gould (@olixOr, ver@buoyant.io), Matei David (@mateiidavid, matei@buoyant.io) 
- Upstream Issue: https://github.com/linkerd/linkerd2/issues/7566
- LFX URL: 


### TestGrid

#### Frontend development inside Lit Component Framework

- Description: [TestGrid](http://testgrid.k8s.io) is the test visualization tool attached to Prow to
  collate and display historical test results for the k8s and k8s-adjacent
  communities. The UI is in the process of being rewritten.
- Expected Outcome: Create Lit-based view components for TestGrid (summary, index, etc.) that display data from the API. Implement Jasmine and Storybook testing for these components.
- Recommended Skills: TypeScript, CSS, Golang
- Mentor(s): Sean Chase (@chases2, slchase@google.com)
- Upstream Issue: https://github.com/GoogleCloudPlatform/testgrid/issues/1005
- LFX URL: 


### NATS

#### End-to-end example of a multiplayer game using NATS in Unity

- Description: This project consists of developing an example Unity setup of a multiplayer game using the latest version of the NATS Server.
- Expected Outcome: A well documented repository under the `nats-io` GitHub organization that contains the artifacts and sample code of the setup using the .NET NATS Client (https://github.com/nats-io/nats.net)
- Recommended Skills: .NET, C#, Unity, NATS
- Mentor(s): Waldemar Quevedo (@wallyqs)
- Upstream Issue: https://github.com/nats-io/dot-net-nats-examples/issues/1
- LFX URL: 

---
