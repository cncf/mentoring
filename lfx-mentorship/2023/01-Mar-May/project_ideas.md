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
