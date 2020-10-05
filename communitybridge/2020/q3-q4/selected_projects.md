## Selected Projects

Project maintainers and mentors, please submit the selected below (under the Selected Projects section) section using the template below.

### Template

```
### CNCF Project Name
#### Title

-	Description:
-	Recommended Skills:
-	Mentor(s):
-       Mentee (Communty Bridge URL):
-	Upstream Issue (URL):
-       Community Bridge project (URL):
```

### Sample

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Mentee: Jane Doe
- Issue: https://github.com/prometheus/prometheus/issues/3416
- Community Bridge project (URL): https://people.communitybridge.org/project/9595fbe7-6a8d-43d4-aebb-a54d57f33fdd

## List of Selected Projects

#### OpenTelemetry

##### OpenTelemetry C++ SDK ETW exporter

-	Description: Add exporter for ETW (Event Tracing for Windows) as one of the optional recommended exporters that languages may decide to implement as part of SDK. Initial set of languages to support: C++ and/or C#. ETW exporter allows any open source project running on Windows (e.g. Docker) to leverage OpenTelemetry C++ SDK, emitting telemetry events (traces, logs) over ETW channel. Subsequently a listener Agent may forward events to fluent, ELK stack, or other destination. For example, events may be transformed and forwarded OTLP protocol collector. Min-bar is to implement the necessary OT C++ SDK changes (C++) and a test listener (C#). Additional scope may include some concrete examples of instrumentation: Docker ETW logs driver, or an additional out-of-proc forwarder from ETW provider listener to OTLP receiver. Simple projection for node.js (console log to OT C++ SDK - ETW) may also be designed, time-permitting.
-	Recommended Skills: some C++ or C# coding experience. Windows development environment is needed.
-	Mentor(s): Max Golovanov (@maxgolov)
- Mentee: Mishal Shah (@mishal23)
-	Issue: https://github.com/open-telemetry/opentelemetry-cpp/issues/326
- Community Bridge project (URL): https://people.communitybridge.org/project/f1275c0e-7152-4e09-8d8b-6b14598afbc3

#### Keptn

##### Keptn CLI to support multiple contexts like KUBECONFIG

-	Description: Improve the Keptn CLI to make it easier for users to authenticate to a cluster by just configuring the Kubernetes context. This will enable the user to switch between multiple Keptn installations easily.
-	Recommended Skills: Golang, Kubernetes
-	Mentor(s): Jürgen Etzlstorfer ([@jetzlstorfer](https://github.com/jetzlstorfer)), Christian Kreuzberger ([@christian-kreuzberger-dtx](https://github.com/christian-kreuzberger-dtx))
- Mentee: Ankit Jain (@ankitjain28may)
-	Upstream Issue (URL): https://github.com/keptn/keptn/issues/2300
- Community Bridge project (URL): https://people.communitybridge.org/project/ba41187f-fa8d-47e1-8046-4040e5b35b73

##### Visualize remediation actions as counteractions for alerts

-	Description: Improve the existing UI by adding UI elements for existing (multi-stage) remediation actions for services that are managed by Keptn.
-	Recommended Skills: Angular
-	Mentor(s): Jürgen Etzlstorfer ([@jetzlstorfer](https://github.com/jetzlstorfer)), Johannes Bräuer ([@johannes-b](https://github.com/johannes-b)\)
- Mentee: Ayush Nawal (@ayushnawal)
-	Upstream Issue (URL): https://github.com/keptn/keptn/issues/2299
- Community Bridge project (URL): https://people.communitybridge.org/project/ba41187f-fa8d-47e1-8046-4040e5b35b73
=======
##### OpenTelemetry SDK PHP Exporter
   -   Description: Develop some of the exporters for PHP that are found in the ([Spec Compliance Matrix](https://github.com/open-telemetry/opentelemetry-specification/blob/master/spec-compliance-matrix.md#exporters)) that are not yet completed for PHP.  There are some really neat exporter implementations that would be excellent candidates for creation / improvements:
      - OTLP (priority)
      - Zipkin
      - Jaeger
      - Prometheus
- Recommended Skills: PHP
- Mentor: Bob Strecansky (@bobstrecansky)
- Mentee: Ritick Singh (@riticksingh)
- Issue: https://github.com/open-telemetry/opentelemetry-php/issues/175
- Community Bridge Project (URL): https://people.communitybridge.org/project/f1275c0e-7152-4e09-8d8b-6b14598afbc3

#### TiKV

##### Support ENUM / SET push down for TiKV Coprocessor

-  Description: Coprocessor is a TiKV component to handle predicate push down. This task is to add `ENUM` and `SET` data type to it, so that the performance can be improved in scenarios that involve with these two data types.
-  Recommended Skills: Rust, Database
-  Mentor(s): Chi Zhang (@skyzh)
-  Mentee: Hao Ding (@Xuanwo)
-  Upstream Issue (URL): https://github.com/tikv/tikv/issues/8605
-  Community Bridge Project (URL): https://people.communitybridge.org/project/c6a0326c-b053-41a3-9bf2-1e7e78481ca6

##### Support rbac control for data accessing in TiKV

-  Description: This task is to support the authorization and authentication ability by rbac control in TiKV, so that the security of the data accessing in TiKV will become more complete.
-  Recommended Skills: Golang, Rust
-  Mentor(s): Song Gao (@Yisaer)
-  Mentee: Yanning Chen (@PhotonQuantum)
-  Upstream Issue (URL): https://github.com/tikv/tikv/issues/8621
-  Community Bridge Project (URL): https://people.communitybridge.org/project/c6a0326c-b053-41a3-9bf2-1e7e78481ca6

#### Volcano

##### Implement hierarchy queue to better support fair-share

- Description: Implement hierarchy queue to better support fair-share
- Recommended Skills: Volcano, Scheduling, Golang
- Mentor(s): Zhonghu Xu(@hzxuzhonghu), Klaus Ma(@k82cn)
- Mentee: wangqian qian(@My-pleasure)
- Issue: https://github.com/volcano-sh/volcano/issues/1033
- Community Bridge Project (URL): https://people.communitybridge.org/project/837a970d-64c3-46d1-ade2-5b8b8997a0d4


##### Customize scheduling algorithms per queue

- Description: Support customized scheduling algorithms per queue
- Recommended Skills: Kubernetes, Scheduling, Golang
- Mentor(s): Zhonghu Xu(@hzxuzhonghu), Klaus Ma(@k82cn)
- Mentee: Srestha Srivastava(@sresthas)
- Issue: https://github.com/volcano-sh/volcano/issues/1035
- Community Bridge Project (URL): https://people.communitybridge.org/project/837a970d-64c3-46d1-ade2-5b8b8997a0d4


##### Implement specific job types to improve usability

- Description: Improve Job API to support specific types of job
- Recommended Skills: Volcano, Job Management, Golang
- Mentor(s): Zhonghu Xu(@hzxuzhonghu), Klaus Ma(@k82cn)
- Mentee: Liang Tang(@shinytang6)
- Issue: https://github.com/volcano-sh/volcano/issues/1034
- Community Bridge Project (URL): https://people.communitybridge.org/project/837a970d-64c3-46d1-ade2-5b8b8997a0d4

#### Chaos Mesh

##### Create a debug information collector for Chaos Mesh

- Description: Create a diagnotic info collector for Chaos Mesh to collect debugging info of a specific chaos experiment, covering chaos-daemon log, tc rules, iptables rules, etc.
- Recommended Skills: Chaos Mesh, Kubernetes, golang
- Mentor(s): Keao Yang([@YangKeao](https://github.com/YangKeao)), Cwen Yin([@cwen0](https://github.com/cwen0)\)
- Mentee: [Shuyang Wu](https://people.communitybridge.org/mentee/3a7e3c44-6a0e-4be1-a722-5176d97569ab,12a8bfec-ba3f-496e-bc26-118e9f5eebe6)([@Yiyiyimu](https://github.com/yiyiyimu/))
- Issue: https://github.com/chaos-mesh/chaos-mesh/issues/694
- Community Bridge Project (URL): https://people.communitybridge.org/project/12a8bfec-ba3f-496e-bc26-118e9f5eebe6

##### Support chaos-daemon work independently on a non-k8s node.

- Description: At present, chaos-daemon can only be run as a daemonset service in the Kubernetes environment, but some users want to inject faults into Kubernetes cluster itself, and they cannot use Chaos Mesh to do this. There are also some users who are unable to use Chaos Mesh because their applications are not deployed in the Kubernetes environment. So we need to make the chaos-daemon component run on non-k8s nodes alone, and inject faults directly into this node to solve the problems mentioned above.
- Recommended Skills: Chaos Mesh, Kubernetes, golang
- Mentor(s): Keao Yang([@YangKeao](https://github.com/YangKeao)), Cwen Yin([@cwen0](https://github.com/cwen0)\)
- Mentee: [Manish Dangi](https://people.communitybridge.org/mentee/4778882c-f043-4fc1-a567-dc5e7a4437ed,12a8bfec-ba3f-496e-bc26-118e9f5eebe6)([@manishdangi98](https://github.com/manishdangi98/))
- Issue: https://github.com/chaos-mesh/chaos-mesh/issues/888
- Community Bridge Project (URL): https://people.communitybridge.org/project/12a8bfec-ba3f-496e-bc26-118e9f5eebe6

#### Kubernetes

##### Working group for CSI driver
-	Description: Container Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes. This project mainly focus on [SMB CSI driver](https://github.com/kubernetes-csi/csi-driver-smb) and [NFS CSI driver](https://github.com/kubernetes-csi/csi-driver-nfs): set up solid unit tests, test coverage data, e2e test pipeline first and then implement a few new CSI features, e.g. dynamc provisioning support, inline volume support, etc.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Andy Zhang [@andyzhangx](https://github.com/andyzhangx)
-   Mentee: Mayank Shah (@mayankshah1607)
-	Upstream Issue (URL):
	-	https://github.com/kubernetes-csi/csi-driver-smb/issues
-	Community Bridge project (URL): https://people.communitybridge.org/project/2d438b9a-c539-46d0-9eed-c6ee4404c88a

#### Thanos

##### Receive: Hashring Update Improvements

- Description: Currently, any change to the hashring configuration file will trigger all Thanos Receive nodes to flush their multi-TSDBs, causing them to enter an unready state until the flush is complete. This unavailability during a flush allows for a clear state transition, however it can result in downtimes on the order of five minutes for every configuration change. We propose modifying how the Thanos Receive component re-configures itself after the hashring configuration file has changed so that the system experiences no downtime.
- Recommended Skills: Thanos, Timeseries database, Golang
- Mentor(s): Lucas Servén Marín(@squat), Frederic Branczyk(@brancz)
- Mentee: [T.S.S. Chandana @Chans321](https://people.communitybridge.org/mentee/402c80c6-c37d-4575-8120-41849ada956e,f51284ab-f652-47b1-9819-cd4135e75c00)
- Issue: https://github.com/thanos-io/thanos/issues/3141
- Community Bridge project (URL): https://people.communitybridge.org/project/f51284ab-f652-47b1-9819-cd4135e75c00

##### UI: Enhancements

- Description: The Thanos project has recently migrated its UI to one built on re-usable and shareable components written in React, with the goal of fostering collaboration with the broader Prometheus community. As part of this proposal, we would like create further UI components like status, configuration and discovery pages for better debuggability as well as basic benchmarking and regressions test. Additionally the plan is to collaborate with the Prometheus community to continue building a shared UI component library and to contribute upstream to Prometheus so that it can leverage these components in its UI.
- Recommended Skills: React, JavaScript, Golang
- Mentor(s): Kemal Akkoyun(@kakkoyun), Prem Saraswat(@prmsrswt)
- Mentee: [Raphael Noriode @Oghenebrume50](https://people.communitybridge.org/mentee/194d1349-15b0-41e7-bb4e-db19021765da,f51284ab-f652-47b1-9819-cd4135e75c00)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3142
- Community Bridge project (URL): https://people.communitybridge.org/project/f51284ab-f652-47b1-9819-cd4135e75c00

##### UI: Extending BlockViewer

- Description: Thanos BlockViewer UI proven to be essential part of debuggability story for the Thanos proejct. It allows to see exact state of data in Object Storage in an provider agnostic way. This project is about extending this UI with richer features, context and actions to increase observability and control. As part of this proposal, we would like to also contribute the same BlockViewer to Prometheus community to make sure it gives the same value for Prometheus project.
- Recommended Skills: React, JavaScript, Golang, ObjectStorage
- Mentor(s): Prem Saraswat(@prmsrswt), Bartek Plotka(@bwplotka)
- Mentee: [Kunal Kushwaha @kunal-kushwaha](https://people.communitybridge.org/mentee/13a85bc2-0972-4f90-9f91-5d34bee5c15b,9595fbe7-6a8d-43d4-aebb-a54d57f33fdd)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3112
- Community Bridge project (URL): https://people.communitybridge.org/project/f51284ab-f652-47b1-9819-cd4135e75c00

#### Prometheus

##### Add various post processing steps in query API after PromQL execution

-	Description: The results from the query/query_range are often unordered w.r.t. the label values and sample value. Also, there is no limit on how many series the endpoint can return. In this project, we want to extend those query APIs to include options for post processing the output to do the following:
  * Support nested sorting (ascending/descending) of time series based on (1) Label values (2) Sample values for /query endpoint.
  * Support limiting the number of time series returned by query/query_range endpoint.
  * If time permits, expore how we can do nested sorting of time series for query_range API.
-	Recommended Skills: Go, PromQL
-	Mentor(s): Bartek Plotka(@bwplotka), Ganesh Vernekar (@codesome)
-  Mentee (Communty Bridge URL): [Gayathri Venkatesh @GayathriVenkatesh](https://people.communitybridge.org/mentee/9bc4e5a8-41f4-4daa-9982-edaaeb8988b5,9595fbe7-6a8d-43d4-aebb-a54d57f33fdd)
-	Upstream Issue (URL):  https://github.com/prometheus/prometheus/issues/7947, https://github.com/prometheus/prometheus/issues/7948
-  Community Bridge project (URL): https://people.communitybridge.org/project/9595fbe7-6a8d-43d4-aebb-a54d57f33fdd

