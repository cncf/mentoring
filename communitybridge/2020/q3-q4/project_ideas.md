Projects ideas
--------------

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

### Template

```
#### CNCF Project Name
##### Title

-	Description:
-	Recommended Skills:
-	Mentor(s):
-	Upstream Issue (URL):
```

### Sample:

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

-	Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
-	Recommended Skills: golang
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Issue: https://github.com/prometheus/prometheus/issues/3416

### Proposed Project ideas

#### Kubernetes

##### Create Application for Elections Authenticated by External Oauth

-	Description: Create a web-based voting application, with voting logic based on CIVS project, that allows use of external Oauth, such as Github, for voter authentication
-	Recommended Skills: Application development, schedule management, programming
-	Mentor(s): Josh Berkus, Marky Jackson, Jaice Singer DuMars
-	Upstream Issue (URL): [Kubernetes community 5096](https://github.com/kubernetes/community/issues/5096)

##### Kubernetes working group for CSI driver

-	Description: Container Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes. This project mainly focus on [SMB CSI driver](https://github.com/kubernetes-csi/csi-driver-smb) and [NFS CSI driver](https://github.com/kubernetes-csi/csi-driver-nfs): set up solid unit tests, test coverage data, e2e test pipeline first and then implement a few new CSI features, e.g. dynamc provisioning support, inline volume support, etc.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Andy Zhang [@andyzhangx](https://github.com/andyzhangx)
-	Upstream Issue (URL):
	-	https://github.com/kubernetes-csi/csi-driver-smb/issues
-	Community Bridge project (URL): https://people.communitybridge.org/project/2d438b9a-c539-46d0-9eed-c6ee4404c88a

#### Chaos Mesh

##### Create a debug information collector for Chaos Mesh

-	Description: Create a diagnotic info collector for Chaos Mesh to collect debugging info of a specific chaos experiment, covering chaos-daemon log, tc rules, iptables rules, etc.
-	Recommended Skills: Chaos Mesh, Kubernetes, golang
-	Mentor(s): Keao Yang([@YangKeao](https://github.com/YangKeao)), Cwen Yin([@cwen0](https://github.com/cwen0)\)
-	Issue: https://github.com/chaos-mesh/chaos-mesh/issues/694

##### Support chaos-daemon work independently on a non-k8s node.

-	Description: At present, chaos-daemon can only be run as a daemonset service in the Kubernetes environment, but some users want to inject faults into Kubernetes cluster itself, and they cannot use Chaos Mesh to do this. There are also some users who are unable to use Chaos Mesh because their applications are not deployed in the Kubernetes environment. So we need to make the chaos-daemon component run on non-k8s nodes alone, and inject faults directly into this node to solve the problems mentioned above.
-	Recommended Skills: Chaos Mesh, Kubernetes, golang
-	Mentor(s): Keao Yang([@YangKeao](https://github.com/YangKeao)), Cwen Yin([@cwen0](https://github.com/cwen0)\)
-	Issue: https://github.com/chaos-mesh/chaos-mesh/issues/888

#### KubeEdge

##### Support list-watch from edgecore for applications on the edge

-	Description: Some applications running on the edge side need to connect to the k8s master through list-watch interface, but on the edge it cannot directly connect to the k8s master. So we need forward the list-watch requests to the k8s master through the cloud-side channel.
-	Recommended Skills: KubeEdge, Kubernetes, golang
-	Mentor(s): Kevin Wang([@kevin-wangzefeng](https://github.com/kevin-wangzefeng)), Fei Xu([@fisherxu](https://github.com/fisherxu)\)
-	Issue: https://github.com/kubeedge/kubeedge/issues/1758

##### Use device API both on cloud and edge

-	Description: Now we have defined device API in the cloud side, but the edgeside(edgecore and mapper) still don't use the API, we should refactor edgeside and use same API on cloud and edge to reduce complexity.
-	Recommended Skills: KubeEdge, Kubernetes, golang
-	Mentor(s): Kevin Wang([@kevin-wangzefeng](https://github.com/kevin-wangzefeng)), Fei Xu([@fisherxu](https://github.com/fisherxu)\)
-	Issue: https://github.com/kubeedge/kubeedge/issues/2140

##### Add EdgeGateway as the ingress gateway on Edge

-	Description: Add the EdgeGateway as the ingress gateway on Edge to dispatch request to multiple backend pods on the Edge side.
-	Recommended Skills: KubeEdge, Kubernetes, golang
-	Mentor(s): Kevin Wang([@kevin-wangzefeng](https://github.com/kevin-wangzefeng)), Fei Xu([@fisherxu](https://github.com/fisherxu)\)
-	Issue: https://github.com/kubeedge/kubeedge/issues/1432

#### TiKV

##### Support ENUM / SET push down for TiKV Coprocessor

-	Description: Coprocessor is a TiKV component to handle predicate push down. This task is to add `ENUM` and `SET` data type to it, so that the performance can be improved in scenarios that involve with these two data types.
-	Recommended Skills: Rust, Database
-	Mentor(s): Chi Zhang (@skyzh)
-	Upstream Issue (URL): https://github.com/tikv/tikv/issues/8605

#### Support rbac control for data accessing in TiKV

-	Description: This task is to support the authorization and authentication ability by rbac control in TiKV, so that the security of the data accessing in TiKV will become more complete.
-	Recommended Skills: Rust, Golang
-	Mentors(s): Song Gao (@yisaer), Yutong Liang (@rleungx)
-	Upstream Issue (URL): https://github.com/tikv/tikv/issues/8621

#### Volcano

##### Implement hierarchy queue to better support fair-share

-	Description: Implement hierarchy queue to better support fair-share
-	Recommended Skills: Volcano, Scheduling, Golang
-	Mentor(s): Zhonghu Xu(@hzxuzhonghu), Klaus Ma(@k82cn)
-	Upstream Issue (URL): https://github.com/volcano-sh/volcano/issues/1033

##### Customize scheduling algorithms per queue

-	Description: Support customized scheduling algorithms per queue
-	Recommended Skills: Kubernetes, Scheduling, Golang
-	Mentor(s): Zhonghu Xu(@hzxuzhonghu), Klaus Ma(@k82cn)
-	Upstream Issue (URL): https://github.com/volcano-sh/volcano/issues/1035

##### Implement specific job types to improve usability

-	Description: Improve Job API to support specific types of job
-	Recommended Skills: Volcano, Job Management, Golang
-	Mentor(s): Zhonghu Xu(@hzxuzhonghu), Klaus Ma(@k82cn)
-	Upstream Issue (URL): https://github.com/volcano-sh/volcano/issues/1034

#### Keptn

##### Keptn CLI to support multiple contexts like KUBECONFIG

-	Description: Improve the Keptn CLI to make it easier for users to authenticate to a cluster by just configuring the Kubernetes context. This will enable the user to switch between multiple Keptn installations easily.
-	Recommended Skills: Golang, Kubernetes
-	Mentor(s): Jürgen Etzlstorfer ([@jetzlstorfer](https://github.com/jetzlstorfer)), Christian Kreuzberger ([@christian-kreuzberger-dtx](https://github.com/christian-kreuzberger-dtx)), Andreas Grimmer ([@agrimmer](https://github.com/agrimmer)\)
-	Upstream Issue (URL): https://github.com/keptn/keptn/issues/2300

##### Visualize remediation actions as counteractions for alerts

-	Description: Improve the existing UI by adding UI elements for existing (multi-stage) remediation actions for services that are managed by Keptn.
-	Recommended Skills: Angular
-	Mentor(s): Jürgen Etzlstorfer ([@jetzlstorfer](https://github.com/jetzlstorfer)), Johannes Bräuer ([@johannes-b](https://github.com/johannes-b)\)
-	Upstream Issue (URL): https://github.com/keptn/keptn/issues/2299

#### Opentelemetry

##### ETW exporter

-	Description: Add exporter for ETW (Event Tracing for Windows) as one of the optional recommended exporters that languages may decide to implement as part of SDK. Initial set of languages to support: C++ and/or C#.
-	Recommended Skills: some C++ or C# coding experience. Windows development environment is needed
-	Mentor(s): @maxgolov
-	Upstream Issue (URL): https://github.com/open-telemetry/opentelemetry-cpp/issues/326

##### OpenTelemetry to FluentBit exporter

-	Description: Define a data format and create an exporter from OpenTelemetry to FluentBit. This will allow customers to use existing log delivery pipeline to upload telemetry collected by the rich set of various OpenTelemetry SDKs.
-	Recommended Skills: one of the languages suported by OpenTelemetry. Ideally C# or Go
-	Mentor(s): @SergeyKanzhelev
-	Upstream Issue (URL): https://github.com/open-telemetry/opentelemetry-dotnet-contrib/issues/31

##### PHP Exporter Development

-	Description: Develop some of the exporters for PHP that are found in the ([Spec Compliance Matrix](https://github.com/open-telemetry/opentelemetry-specification/blob/master/spec-compliance-matrix.md#exporters)) that are not yet completed for PHP. There are some really neat exporter implementations that would be excellent candidates.
-	Recommended Skills: PHP experience
-	Mentor(s): @bobstrecansky
-	Upstream Issue (URL): https://github.com/open-telemetry/opentelemetry-php/issues/175

#### Thanos

##### Receive: Hashring Update Improvements

-	Description: Currently, any change to the hashring configuration file will trigger all Thanos Receive nodes to flush their multi-TSDBs, causing them to enter an unready state until the flush is complete. This unavailability during a flush allows for a clear state transition, however it can result in downtimes on the order of five minutes for every configuration change. We propose modifying how the Thanos Receive component re-configures itself after the hashring configuration file has changed so that the system experiences no downtime.
-	Recommended Skills: Thanos, Timeseries database, Golang
-	Mentor(s): Lucas Servén Marín(@squat), Frederic Branczyk(@brancz)
-	Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3141

##### UI: Enhancements

-	Description: The Thanos project has recently migrated its UI to one built on re-usable and shareable components written in React, with the goal of fostering collaboration with the broader Prometheus community. As part of this proposal, we would like create further UI components like status, configuration and discovery pages for better debuggability as well as basic benchmarking and regressions test. Additionally the plan is to collaborate with the Prometheus community to continue building a shared UI component library and to contribute upstream to Prometheus so that it can leverage these components in its UI.
-	Recommended Skills: React, JavaScript, Golang
-	Mentor(s): Kemal Akkoyun(@kakkoyun), Prem Saraswat(@prmsrswt)
-	Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3142

##### UI: Extending BlockViewer

-	Description: Thanos BlockViewer UI proven to be essential part of debuggability story for the Thanos proejct. It allows to see exact state of data in Object Storage in an provider agnostic way. This project is about extending this UI with richer features, context and actions to increase observability and control. As part of this proposal, we would like to also contribute the same BlockViewer to Prometheus community to make sure it gives the same value for Prometheus project.
-	Recommended Skills: React, JavaScript, Golang, ObjectStorage
-	Mentor(s): Prem Saraswat(@prmsrswt), Bartek Plotka(@bwplotka)
-	Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3112

#### Open Service Mesh, Kuma and Service Mesh Interface

##### Standards validation for OSM and Kuma

-	Description: As two of the service meshes in the CNCF, both Kuma and Open Service Mesh need their implementations of standard specifications validated. This is true for Service Mesh Interface (SMI) and Service Mesh Performance (SMP) specifications. Both API specifications spanning many service meshes. Each service mesh implementing the SMI and SMP specifciation need their conformance validated.
-	Recommended Skills: golang
-	Mentor(s): Lee Calcote (@leecalcote), Abishek Kumar (@kumarabd)
-	Upstream Issue (URL): https://github.com/openservicemesh/osm/issues/172

#### Open Service Mesh

##### Support for WebAssembly filters

-	Description: Bring OSM on par with other service meshes that support WASM filters in their data plane. OSM's Envoy proxies can be extended at runtime with filters that are running in a WebAssembly sandbox (https://github.com/envoyproxy/envoy-wasm). Provide ability to dynamically load and unload Envoy WASM filters.
-	Recommended Skills: golang, rust
-	Mentor(s): Lee Calcote (@leecalcote), Dev Kalra (@kalradev)
-	Upstream Issue (URL): https://github.com/openservicemesh/osm/issues/1671

#### Prometheus

##### Add various post processing steps in query API after PromQL execution

-	Description: The results from the `query`/`query_range` are often unordered w.r.t. the label values and sample value. Also, there is no limit on how many series the endpoint can return. In this project, we want to extend those query APIs to include options for post processing the output to do the following:
	-	Support nested sorting (ascending/descending) of time series based on (1) Label values (2) Sample values for `/query` endpoint.
	-	Support limiting the number of time series returned by `query`/`query_range` endpoint.
	-	If time permits, expore how we can do nested sorting of time series for `query_range` API.
-	Recommended Skills: golang
-	Mentor(s): Bartek Plotka(@bwplotka), Ganesh Vernekar (@codesome)
-	Upstream Issue (URL): https://github.com/prometheus/prometheus/issues/7947, https://github.com/prometheus/prometheus/issues/7948
