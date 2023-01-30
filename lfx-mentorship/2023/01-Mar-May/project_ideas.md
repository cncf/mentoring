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

### Cilium

#### Website Use Cases pages

- Description: Cilium would like to have use case pages built out on its website to make it easy for people to find the information and relevant content to the problems they are trying to solve with Cilium.
- Expected Outcome: The mentee will read through relevant docs, blogs, case studies, user stories, and labs to understand the use cases which will drive the content for each of the pages being built. The finished product will be a new use cases section on the Cilium website.
- Recommended Skills: Content Writing, Javascript, CSS
- Mentor(s): Bill Mulligan (@xmulligan, bill@isovalent.com) 
- Upstream Issue: https://github.com/cilium/cilium.io/issues/226

### Cloud Native Buildpacks

#### Pack Performance enhancements

- Description: Pack is the reference implementation of a Cloud Native Buildpacks platform used to build application images in multiple organizations. Because all developers want their code to build and deploy as quickly as possible, small speedups in pack can have significant benefits, and slow-downs in pack are undesirable. Today, pack has no benchmark suite that would safe-guard against regressions in execution speed.
- Expected Outcome: The mentee will create a benchmark suite around some critical path sections identified with help from maintainers. The mentee will be supported in applying profiling tools to identify possible speedups, hopefully leading to at least one user-facing performance improvement.
- Recommended Skills: Golang, git, software development.  (Mentee does not need prior experience in profiling or performance tuning)
- Mentor(s): Natalie Arellano (@natalieparellano, narellano@vmware.com); Joe Kimmel (@joe-kimmel-vmw, jkimmel@vmware.com) 
- Upstream Issue: https://github.com/buildpacks/pack/issues/1610

### Kubernetes

#### Cluster API Provider GCP (CAPG)

##### Add telemetry and profiling support

- Description: Cluster API Provider GCP (CAPG) enables the creation of Kubernetes clusters in GCP with Cluster API. With increasing adoption of Cluster API (CAPI) in general and of CAPG we want to improve the supportability of CAPG, especially for production environments. The first part of this is to add telemetry/tracing using OpenTelemetry so that we can understand and visualize the flow of reconciliation within the provider. The next part is to add a **pprof** endpoint that can be optionally enabled to enable operations/support users to collect profiling information from a running instances of CAPG.
- Expected Outcome: This work will enable tracing and profiling of a running instance of CAPG (along with supporting docs) to supports operations/support engineers.
- Recommend Skills: Golang, Kubernetes
- Mentors(s): Carlos Panato (@cpanato), Richard Case (@richardcase)
- Upstream Issue: https://github.com/kubernetes-sigs/cluster-api-provider-gcp/issues/810

### KubeVela

#### Extend the capability of KubeVela by making several useful addons

- Description: KubeVela currently have a variety of addons , including experimental options, that address scenarios such as Continual Delivery and observability. To further enhance the out-of-box functionality for users of KubeVela, we can offer additional useful addons.
- Expected Outcome: 10+ eperimetal addons, clear documentation should be provided for enabling and using these addons, including examples of useful use-cases.
- Recommended Skills: golang, kubernetes, cueLang
- Mentor(s): Jianbo Sun (@wonderflow, wonderflow.sun@gmail.com), Wong Yike (@wangyikewxgm, wangyike_wyk@163.com) 
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5358

#### Support auto generation of CUE schema and docs from Go struct

- Description: In KubeVela's provider system, we can use our defined Go functions in CUE schema. The Go providers usually have a parameter and return. Fields in Go providers are the same as fields in CUE schema, so it is possible and important to support automatic generation of CUE schemas and documents from Go structs.
- Expected Outcome: Auto-generators of CUE schemas and docs from Go structs, the capabilities should be wrapped in vela cli command.
- Recommended Skills: Go, CUE
- Mentor(s): Fog Dong (@FogDong, wuwuglu19@gmail.com), Da Yin(@Somefive, yd219913@alibaba-inc.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5364

#### Support auto generation of multiple languages SDK from CUE

- Description: In KubeVela, we use CUElang to code the definition. We want to support auto generation of multiple languages SDK from CUE, so that users can use KubeVela in their own language.
- Expected Outcome: Support auto generation of multiple languages SDK from CUE, including Golang, Java, Python, etc. The capabilities should be wrapped in vela cli command.
- Recommended Skills: Go, Kubernetes, CUE
- Mentor(s): Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com) Zeng Qingguo (@barnettZQG, barnett.zqg@gmail.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5365
 
### Vitess

#### Implement a benchmarking and load testing framework for the VReplication module in Vitess
- Description: Vitess is a distributed database system built around MySQL. VReplication is core technology built into Vitess that is used to enable many features like vertical and horizontal sharding, change data capture and materialized views. The project involves designing and implementing a customizable framework that enables us to test different VReplication workflows at scale and to obtain benchmarks that can be used to monitor performance improvements and regression from code changes. The framework will consist of a custom DSL (Domain Specific Language) which will be used to define each test case and a driver which will read the DSLs and execute the tests. The DSL will be based on the Hashicorp Configuration Language (https://github.com/hashicorp/hcl). The driver will be written in Golang and target AWS using Terraform for provisioning and Ansible for automation. The results and benchmarks will be stored in PlanetScale (https://planetscale.com/) in the existing vitess benchmark database.
- Expected Outcome: The test framework with at least one working test and stored benchmark metrics for a MoveTables workflow.
- Recommended Skills: golang
- Mentor: Rohit Nayak (@rohit-nayak-ps, rohit@planetscale.com) 
- Upstream Issue: https://github.com/vitessio/vitess/issues/12136


### OpenKruise

#### Bring progressive delivery to daemon workload

- Description: Kruise Rollout enable progressive delivery of various workload ranging from stateless workload such as Deployment to stateful workload such as StatefulSet or customized operators. This project aims to bring progress delivery capability to daemon workload, which is run on each node of a k8s cluster. The project involves implementing common API of progressive delivery for OpenKruise Advance DaemonSet, and integrate with the Kruise Rollout framework. 
- Expected Outcome: Support progressive delivery for OpenKruise Advance DaemonSet(along with supporting test cases and docs) , that is, update new version of daemon pods in batches with user defined pause strategy. Traffic scheduling is not required for this project. 
- Recommended Skills: Go, Kubernetes
- Mentor(s):  Zhang Zhen (@furykerry, furykerry@gmail.com), Zhang Lei(@resouer, resouer@gmail.com)
- Upstream Issue: https://github.com/openkruise/rollouts/issues/69

#### Support customize arbitary fields of workload subset in UnitedDeployment

- Description: UnitedDeployment in OpenKruise enable users to manage a set of k8s workloads in whole while be able to customize the topology and replicas of each workload. This project extends the customization capability to arbitary workload fields by adding common patch fields, so that 
each subset of UnitedDeployment can have different metadata, container configuration etc. 
- Expected Outcome: Support generate patches for new creating pods of each subset workload while the users can rollout and scale the UnitedDeployment in whole. 
- Recommended Skills: Go, Kubernetes
- Mentor(s): Zhang Zhen (@furykerry, furykerry@gmail.com), Zhang Lei(@resouer, resouer@gmail.com)
- Upstream Issue: https://github.com/openkruise/kruise/issues/811
