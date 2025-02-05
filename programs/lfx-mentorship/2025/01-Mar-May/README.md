# Term 01 - 2025 March - May

Status: Planning

Mentorship duration - three months (full-time schedule)

### Timeline

| **Activity**                       | **Date**                                            |
|------------------------------------|-----------------------------------------------------|
| **Project Proposals Open**         | Wednesday, January 8 - Tuesday February 4, 2025     |
| **Mentee Applications Open**       | Wednesday, February 5 - Tuesday February 18, 2025   |
| **Application Review Period**      | Wednesday, February 19 – Tuesday, February 25, 2025 |
| **Selection Notifications**        | Wednesday, February 26, 2025                        |
| **Mentorship Program Begins**      | Monday, March 3, 2025                               |
| **Midterm Mentee Evaluations Due** | Tuesday, April 15, 2025                             |
| **First Stipend Payments**         | Wednesday, April 16, 2025                           |
| **Final Mentee Evaluations Due**   | Tuesday, May 27, 2025                               |
| **Second Stipend Payments**        | Wednesday, May 28, 2025                             |
| **Last Day of Term**               | Friday, May 30, 2025                                |

### Project instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2025/01-Mar-May/project_ideas.md, by February 4, 2025.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

### Antrea

#### Support L4 protocol filters in PacketCapture API

- Description: As a Kubernetes (K8s) network plugin (CNI plugin), Antrea provides networking functions for K8s Pods and includes various troubleshooting tools for cluster administrators and application developers to diagnose networking issues. The [PacketCapture feature](https://github.com/antrea-io/antrea/blob/main/docs/packetcapture-guide.md) was introduced recently and allows capturing network traffic for specific endpoints using predefined filters similar to those supported by libpcap/tcpdump. Users can initiate a packet capture through a Kubernetes Custom Resource Definition (CRD) or a CLI command. The Antrea control plane then generates and injects the corresponding BPF program, and the captured packets can be exported as a pcap file. Currently, only a limited set of filters is supported. With this project, we aim to introduce additional filters, particularly Layer 4 protocol filters, such as TCP flags for the TCP transport protocol. These new filters will enable Antrea users to target network traffic more precisely.
- Expected Outcome: Extend the API definition for the PacketCapture CRD with additional filter fields, and implement the new API functionality by mapping the new fields to the corresponding BPF instructions. The new fields should also be exposed in the corresponding `antctl` CLI commands. The implementation should come with a sufficient amount of tests (both unit tests and e2e tests), ensuring that the new functionality is working as expected.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, basic knowledge about networking protocols (IP/TCP/UDP/ICMP).
- Mentor(s):
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
  - Hang Yan (@hangyan, hang.yan@hotmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/6864
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c1b6fda9-e2e6-41e1-8495-68abe9e980ca

### Envoy Gateway

#### Integrating CNCF Fuzzing Framework for Envoy Gateway

- Description: [Envoy Gateway](https://gateway.envoyproxy.io) has become a crucial part of modern cloud-native infrastructures, 
providing a simplified way to deploy and manage [Envoy Proxy](https://www.envoyproxy.io).
Ensuring the reliability and security of Envoy Gateway is paramount for its growing user base.

Fuzzing, a widely-used technique for identifying software vulnerabilities and bugs, can significantly enhance the robustness of Envoy Gateway.
By integrating the [CNCF Fuzzing Framework](https://github.com/cncf/cncf-fuzzing), this project aims to improve the 
security posture of Envoy Gateway through comprehensive automated testing.

- Expected Outcome:
  - Add a fuzz test that covers 80% of code paths for translating Gateway API input configuration into xDS output.
  - Enable continuous fuzzing using [OSS-Fuzz](https://github.com/google/oss-fuzz).
- Recommended Skills: Go, scripting.
- Mentor(s):
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
  - Teju Nareddy (@nareddyt, tnareddy@confluent.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/3124
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/44020e81-1218-49aa-95e0-ee3e03998eb3

### Harbor

#### Harbor CLI

- Description: Harbor is a widely adopted container registry, and its initial CLI has been developed by LFX mentees. The goal is to extend this CLI by implementing additional functionalities and workflows that are currently only available in the Web UI. The CLI should be useful for Harbor administrators and users, especially to manage workflows within CI/CD pipelines. We seek a Golang-experienced mentee to enhance the CLI independently.
- Expected Outcome:
  - Extend the Harbor CLI to include essential commands not yet implemented.
  - Add new features to improve Harbor management via the CLI, enabling robust workflows in CI/CD environments.
- Recommended Skills: Golang, spf13/cobra
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)
- Upstream Issue: https://github.com/goharbor/harbor-cli/issues/315
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/769b7e87-f2f5-4532-b247-392b1897ea50

#### Harbor Satellite

- Description: Containers have extended beyond their traditional cloud environments, becoming increasingly prevalent in remote and edge computing contexts. These environments often lack reliable internet connectivity, posing significant challenges in managing and running containerized applications due to difficulties in fetching container images. To address this, the project aims to decentralize container registries, making them more accessible to edge devices.
- Expected Outcome:
  The goal is to extend the proof of concept and demonstrate that such a solution practically works.
  Candidates should be able understanding and implementing the [image](https://github.com/opencontainers/image-spec) and [distribution spec](https://github.com/opencontainers/distribution-spec)
  to replicate images from a central registry to a registry on the edge location.
- Recommended Skills: Golang, Container, Image-spec, Distribution-spec
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)
- Upstream Issue: https://github.com/goharbor/harbor/issues/21469
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ff3431c0-3cb1-4c07-bd10-21a8e495c897

### Headlamp (a Kubernetes UI)

#### Headlamp: Instrument with OpenTelemetry

- Description: Headlamp is a Kubernetes UI which is extensible. Having it instrumented with OpenTelemetry would allow those operating it to get information for debugging it when problems happen.
- Expected Outcome: Headlamp backend and frontend are instrumented so those that want to use OpenTelemetry when operating Headlamp can. There's documentation and a blog post with a demo video explaining how it's used.
- Recommended Skills: golang, TypeScript
- Mentor(s):
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
- Upstream Issue: https://github.com/headlamp-k8s/headlamp/issues/2799
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/63ae2083-f0a7-4458-a279-e10b9662ea16

#### Headlamp: Make a Headlamp plugin for KEDA

- Description: Headlamp is a Kubernetes UI which is extensible. KEDA is a Kubernetes-based Event Driven Autoscaler. With KEDA, one can drive the scaling of any container in Kubernetes based on the number of events needing to be processed. While KEDA provides excellent functionality for scaling workloads based on event sources and custom metrics, monitoring and managing KEDA resources through Kubernetes dashboards remains challenging.
- Expected Outcome: Create a Headlamp plugin that provides comprehensive visibility and management capabilities for KEDA resources, enabling users to do the following. 1. View and manage ScaledObjects and ScaledJobs through a intuitive interface. 2. Monitor real-time scaling metrics and trigger states. 3. Troubleshoot scaling behaviors with integrated logging and event visualization.
- Recommended Skills: Golang, TypeScript. Kubernetes and KEDA too would be nice to have.
- Mentor(s):
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
- Upstream Issue: https://github.com/headlamp-k8s/headlamp/issues/2791
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2199847c-f5e6-4287-850a-64b25f2cc246

#### Headlamp: Build Plugin Installation Container

- Description: Headlamp is a Kubernetes UI which is extensible through plugins. Currently, plugin installation in Kubernetes environments requires manual intervention.  We need a containerized solution that can automatically install plugins during Headlamp's deployment using Kubernetes-native approaches like init containers and ConfigMaps.
- Expected Outcome:
  1. A containerized version of headlamp-plugin CLI that can be used as an init container
  2. Helm chart updates to support plugin installation via configuration
  3. Automated container builds as part of Headlamp's release process
  4. Documentation and examples showing how to use the plugin installer container
  5. Integration tests validating the plugin installation process
- Recommended Skills: Kubernetes, TypeScript, Shell scripting
- Mentor(s):
  - Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
- Upstream Issue: https://github.com/headlamp-k8s/headlamp/issues/2787
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/992fc67e-ff9e-41fd-8062-28ec8733903f

### Inspektor Gadget

#### Building gadgets with Rust

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux
 hosts. A Gadget is an OCI image that includes one or more eBPF programs, metadata YAML file, and optionally, WASM modules for post processing. Today, Inspektor Gadget provides tooling to build gadgets from source code written in C (for the eBPF module) and Go (for the WASM module). This project is about adding support from building gadgets from Rust both for eBPF programs and for WASM modules.
- Expected Outcome: users can write their gadgets in Rust.
- Recommended Skills: Rust, Go, eBPF, WASM
- Mentor(s):
  - Mauricio Vasquez Bernal (@mauriciovasquezbernal, mauriciov@microsoft.com)
  - Francis Laniel (@eiffel-fl, flaniel@linux.microsoft.com)
- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3950
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/42dd5a60-47f9-4f7c-b895-49ce6c81a59a

#### Implementing unit tests

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux hosts. A Gadget is an OCI image that includes one or more eBPF programs, metadata YAML file, and optionally, WASM modules for post processing. As OCI images, they use the same tooling as containers: building, pushing/pulling from OCI Registries.
Even though there are many integration tests, we wish to increase the coverage of unit tests for the majority of internal packages. These packages are essential, and a bad commit could lead to unseen disruptions. Debugging and diagnosing through integration tests is cumbersome and takes too much time.
- Expected Outcome:
  - Find out which packages are in most need of unit tests
  - Create a mock class/framework if needed
  - Implement unit tests
- Recommended Skills: Go
- Mentors:
  - Burak Ok (@burak-ok, burakok@microsoft.com)
  - Qasim Sarfraz (@mqasimsarfraz,  qasimsarfraz@microsoft.com)
- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3835
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d3a1a899-1ca0-4e10-a402-01ef6fde26f2

#### Inspekting and analysing gadgets

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux
 hosts. A Gadget is an OCI image that includes one or more eBPF programs, metadata YAML file, and optionally, WASM modules for post processing. As OCI images, they use the same tooling as containers: building, pushing/pulling from OCI Registries. But today, Inspektor Gadget does not have good tooling for inspecting a gadget: the `ig image inspect` command just gives the gadget name, digest and creation date without further details.
- Expected Outcome: the `ig image inspect` command tells the architectures supported by the gadget, the layers included in the OCI image, the data sources with their fields, the eBPF parameters. Additionally, inspecting the eBPF module can provide the ELF sections, the eBPF maps and the disassembled eBPF bytecode annotated with the source when available.
- Recommended Skills: Go, eBPF
- Mentors:
  - Alban Crequy (@alban, albancrequy@microsoft.com)
  - Jose Blanquicet (@blanquicet, josebl@microsoft.com)
- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3387
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a6d66c40-3d12-4fa4-88bf-18574f6b4ec0

### Istio

#### Support TLS for Istio metrics endpoints

- Description: [Istio](https://istio.io) extends Kubernetes to establish a programmable, application-aware network. Working with both Kubernetes and traditional workloads, Istio brings standard, universal traffic management, telemetry, and security to complex deployments

Istio does not support HTTPs based metric scraping for control plane, gateway, and Envoy sidecar [metrics](https://istio.io/latest/docs/ops/integrations/prometheus/#tls-settings)

This could have some security related consequences:

- An attacker might find some sensitive information that they can use for their advantage. For example, Envoy /stats endpoint can be used to enumerate all upstream services in the cluster.
- In theory an attacker could masquerade the metrics endpoint(s) and inject fake data to monitoring systems, in order to e.g. hide an ongoing attack, confuse the system to autoscale up/down etc.

It would be nice to protect the metrics endpoints with TLS, using mutual authentication. While this feature is a big one covering multiple components,
the easiest component alone is intended to be covered as part of this internship.

- Expected Outcome:
  - Implement HTTPS metrics for ztunnel component
  - Add unit tests and integration tests for the feature
  - Add documentation for the functionality
- Recommended Skills: Rust, Go, scripting, Kubernetes, Istio Ambient basics.
- Mentor(s):
  - Faseela K (@kfaseela, k.faseela@gmail.com)
  - Benjamin Leggett (@bleggett, benjamin.leggett@solo.io)
  - Jianpeng He(@zirain, zirain2009@gmail.com)
- Upstream Issue: https://github.com/istio/istio/issues/54760
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9b1a1e87-2757-4f4f-aa58-49d55fc07b16 

#### Improve documentation build infrastructure

- Description: The build infrastructure for istio.io currently carries a complete archived copy of the site for each release of Istio.  These archived versions should be separated to their own branch, with only the supported versions published.  We should also separate out content which is not version-specific (e.g. the home page, news and blogs) so that only the latest version of this content is visible online.
- Expected Outcome: Updated publishing infrastructure for istio.io which separates evergreen content (home page, blogs) with versioned content (documentation).  Drop-downs per docs page allow switching between the supported versions.  
- Recommended Skills: Systems engineering, scripting, programming (Go/Bash), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15463
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2fe99eb2-abc3-454f-b80a-ffd336fa2788

#### Implement new site search

- Description: Up to four versions of Istio are supported at one time, and so the documentation for each must be available. Our current site search is outdated and needs to be replaced, so that the search content only exists in the site search, and only fresh content is available on google.com.
- Expected Outcome: Working site search on istio.io, which lets you search for content for the currently supported versions.
- Recommended Skills: Hugo, Systems engineering, scripting, programming (Bash/go), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15464
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a8165dc1-fb52-40ca-bd1f-862a5176df98

### Jaeger

#### Jaeger: Upgrade Storage Backends to V2 Storage API

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. A critical component of Jaeger is its storage backends, where traces captured by Jaeger are stored. With the release of Jaeger v2 last year we introduced a new, more efficient Storage API v2. However, the existing backend implementations in Jaeger are still using v1 API that is only wrapped in the v2 adapter, which prevents them from benefiting from the new capabilities such as batch writes and result streaming. The objective of this project is to upgrade some (or all) backend implementations to use the Storage API v2 natively. Please refer to the upstream issue for more details.
- Expected Outcome:
  - Upgrade memory and Elasticsearch backends to use the Storage API v2 natively.
  - Bonus: upgrade Cassandra and Badger backends to use the Storage API v2 natively.
- Recommended Skills: Go, scripting, CI/CD, familiarity with Elasticsearch/Cassandra a plus but not required.
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Mahad Zaryab (@mahadzaryab1, mahadzaryab1@gmail.com)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/6458
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5ce2b62c-94a9-44e9-95bc-b83a13c0a0e6

#### Upgrade charts and graphs in Jaeger UI

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. Jaeger UI pioneered many new visualizations for analyzing distributed traces. However, over time, it accumulated views that utilize different and sometimes deprecated viz libraries. The objective is to standardize charting / graphing libraries used in Jaeger UI, upgrade their dependencies, and add new visualization features. Please refer to the upstream issue for more details.
- Expected Outcome:
  - Jaeger UI is not using deprecated dependencies
  - Consistent look and feel of graphs
  - Bonus: side panel for details for a given node
  - Bonus: overlaying metrics on the graph (as edge annotations and node coloring to reflect health / error rates)
  - Bonus: varying node displays depending on the type of node and implementation language
- Recommended Skills: Javascript, Typescript, React, NPM, Vite.js
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/2534
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/48ebfb59-eab7-4d22-8373-30a0bbfb12f7

### Karmada

#### Karmada Self-Signed Certificate Content Standardization

- Description: In the existing [Karmada](https://github.com/karmada-io/karmada) architecture, each component should have its own unique certificates to ensure clear identity and security. Best practices dictate that each component's name be used as the Common Name (CN) in its certificate to facilitate identity differentiation. However, currently, all Karmada components share same identical certificate content, leading to confusion and potential security risks.
The objective of this project is to enhance the compliance of the Karmada certificate system by ensuring that each component possesses distinct certificates that reflect its identity. This will improve system security, reduce management complexity, and align with industry standards. This project aims to achieve the following standards:
  - Utilize a single CA certificate for the entire Karmada system.
  - Issue individual server certificates for each server component, using the component name as the CN.
  - Issue individual client certificates for each client component, using the component name as the CN, same client can use consistent certificate for different servers.
- Expected Outcome:
  - Complete the issuance of different certificates for 8 server components and import the certificate content into the corresponding certificate Secrets.
  - Complete the issuance of different certificates for 11 client components and import the certificate content into the corresponding certificate Secrets or Config Secrets.
- Recommended Skills:
  - Familiarity with Golang, Kubernetes, and Karmada.
  - Basic understanding of certificate management.
- Mentor(s):
  - Chaosi Pan (@chaosi-zju, chaosi@zju.edu.cn)
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/6091
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8d2d522f-8838-4baa-9be4-d13dab30289b

#### Implement multi-cluster management in the Karmada dashboard

- Description: The Karmada dashboard has already implemented the management of resources in the control plane. Apart from that, we hope to implement the management of resources in the member cluster: once users add Kubernetes resources and the corresponding policy resources on the control plane, they can switch to the corresponding member cluster seamlessly, check the status of Kubernetes resources in the specific member cluster. Kubernetes dashboard is one of the most popular single-cluster management tools, which uses client-go sdk to communicate with the apiserver to manage resources in the cluster. A great deal of client-go related logic can be extended to muli-cluster easily, due to the karmada-aggregated-apiserver component and the compatibility design between Kubernetes resource and Karmada resoruces. So we hope to combine the Kubernetes dashboard with the karmada-aggregated-apiserver component to implement multi-cluster management in the Karmada dashboard.
- Expected Outcome:
  - Proposal for multi-cluster management base on `karmada-aggregated-apiserver`.
  - Tools to lift Kubernetes dashboard with specific version into Karmada dashboard repo, and implement management of resources in member cluster based on `karmada-aggregated-apiserver`.
  - Typical ui for member-cluster management:
    - list/detail/delete/update action for `deployment` resources.
    - log viewer for `pod`.
    - web terminal for `pod`，which user can attach the running pod, and execute tempory commands.
- Recommended Skills: Kubernetes, Go, gin, react, webgl
- Mentor(s):
  - Wenjiang Ding (@warjiang, 1096409085@qq.com)
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/dashboard/issues/182
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/4fb84d25-bcc0-4190-a233-760ef0b22797

### Kmesh

#### Re-design and implement the Kmesh website

- Description: The existing Kmesh website theme struggled to meet existing development needs. Therefore, there is a need to redesign the Kmesh website and replace the theme to make it easier for developers to add documentation. Development instructions for the website are also provided.
- Expected Outcome:
  - The website has more readable documentation, covering user cases, developer courses, etc. 
  - Docs about how to develop website.
- Recommended Skills: JS, Kmesh, Html
- Mentor(s):
  - ZhenCheng Li(@LiZhenCheng9527, leezhencheng6@gmail.com),
  - Zhonghu Xu(@hzxuzhonghu, zhhxu2011@163.com)
- Upstream Issue: https://github.com/kmesh-net/website/issues/115
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/6269bdd1-1004-465c-bbdc-6a230988c899

#### Kmesh eBPF unit test

- Description: As the community features continue to expand, the number of eBPF programs in the data plane has increased. Due to the inherent limitations of eBPF (third-state encoding, neither user space nor kernel space, running in a kernel virtual machine with a dedicated instruction set), Kmesh implements complex governance logic through features like tail call and map-in-map, which poses challenges for data plane quality protection.
eBPF, a recently introduced programmable technology in the kernel, currently has an immature ecosystem. The industry is actively exploring eBPF testing capabilities (e.g., Unit Testing eBPF). This project aims to develop an eBPF UT testing framework in conjunction with the Kmesh project to ensure the quality of the Kmesh data plane.
- Expected Outcome:
  - Export Kmesh eBPF programs to support UT test case.
  - Export design documentation for eBPF UT tests
- Recommended Skills: C, eBPF,  (go)
- Mentor(s):
  - Xin Liu(@bitcoffeeiux, liuxin350@huawei.com)
  - Changye Wu(@nlgwcy, wuchangye@huawei.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1209
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/58b458ba-6be0-4dd9-b194-bfe6f98d2a2c

#### Add the Kmesh e2e Test

- Description: Kmesh now has an e2e testing framework, but it only covers some of the usage scenarios for key features. More test cases need to be covered to ensure the stability of key features.
- Expected Outcome:
  - e2e Test Cases
  - Documentation maintenance for e2e testing
- Recommended Skills: go, Kmesh
- Mentor(s):
  - Zengzeng Yao(@yaozegzeng, yaozengzeng@huawei.com)
  - Zhonghu Xu(@hzxuzhonghu, zhhxu2011@163.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1210
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2a955954-1a86-4835-be29-f4c70bfd77d2

#### Metrics for TCP Long Connection

- Description: Currently, Kmesh metrics are only reported when a TCP connection is closed. In the case of long connections, it is not possible to know the status before the connection is closed. Therefore, we hope to add the capability to periodically report metrics for long connections.
- Expected Outcome:
  - proposal
  - code
  - user guide.
- Recommended Skills: go, c, eBPF
- Mentor(s):
  - Changye wu(@nlgwcy, wuchangye@huawei.com)
  - ZhenCheng Li(@LiZhenCheng9527, leezhencheng6@gmail.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1211
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c5dadaed-445e-4a74-825b-3e2f1a8b2be1

### Knative

#### Design and Implement Levels for Educational Game

- Description: The Knative community is developing an educational game to teach concepts about event driven architectures and how to build them with Knative. A good overview of the project was [presented at KubeCon NA 2024](https://youtu.be/TTBKh6F4v-g?si=MRmx6a2YJsl7y0Q-). We are currently looking to tale our initial prototype and turn it into a full game. In this project, you will help achieve this by designing levels that teach architectural concepts, and implementing those levels in the Godot game engine.
- Expected Outcome: Identify key event driven architecture patterns, design levels to teach the patterns, implement the levels in Godot.
- Recommended Skills: Godot, Game Development, Event Driven Architecture
- Mentor(s):
  - Calum Murray (@Cali0707, calum.murray@mail.utoronto.ca)
  - Zainab Husain (@zainabhusain227, zainabhusain227@gmail.com)
  - Angelina Zhai (@AngelinaZhai, angelina.zhai@mail.utoronto.ca)
- Upstream Issue: https://github.com/knative-extensions/educational-game/issues/8
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/58392ddd-4d5a-491e-9b09-6035aa4c907e

#### Create high fidelity audio and animations to Educational Game

- Description: The Knative community is developing an educational game to teach concepts about event driven architectures and how to build them with Knative. A good overview of the project was [presented at KubeCon NA 2024](https://youtu.be/TTBKh6F4v-g?si=MRmx6a2YJsl7y0Q-). We are currently looking to tale our initial prototype and turn it into a full game. In this project, you will help achieve this by creating both visual and audio assets, giving the game a polished look.
- Expected Outcome: Identify which assets should be created, create audio assets, create visual assets, add assets Godot.
- Recommended Skills: Audio Design, Animation, Graphic Design, Game Development 
- Mentor(s):
  - Calum Murray (@Cali0707, calum.murray@mail.utoronto.ca)
  - Zainab Husain (@zainabhusain227, zainabhusain227@gmail.com)
  - Angelina Zhai (@AngelinaZhai, angelina.zhai@mail.utoronto.ca)
- Upstream Issue: https://github.com/knative-extensions/educational-game/issues/9
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/707084fe-ea4d-469e-a867-5d0a5e04b7c1

### KubeEdge

#### Domain-specific large model benchmarks: the edge perspective

- Description: Based on existing datasets, the issue aims to build an advanced benchmark for edge-oriented domain-specific large models on KubeEdge-Ianvs. It aims to help all Edge AI application developers validate and select the best-matched domain-specific large models. For Edge AI service providers, it also helps identify which scenarios, edge nodes, or even locations could have the best performance or improvement for their models.
- Expected Outcome: 
  - Domain-specific Large Model Benchmark for the edge, including test datasets, testing toolkits, and usage guidelines.
  - (Advanced) Design and implementation of specific evaluation metrics.
  - (Advanced) Survey and research reports.
- Recommended Skills: KubeEdge-Ianvs, Python, LLMs
- Mentor(s):
  - Zimu Zheng (@MooreZheng, zimu.zheng@hotmail.com)
  - hsj576 (@hsj576, sjhu21@m.fudan.edu.cn)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/177
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e3fc44d9-9ddd-42e6-a9be-8f6c2a114672

#### Enhance Dependency Management and Documentation for KubeEdge-Ianvs

- Description: Ianvs is currently grappling with significant dependency management challenges. It lacks a robust system to handle updates and ensure compatibility. As Python versions, dependency libraries, and Ianvs features continuously evolve, many existing examples fail to run, resulting in a surge of inquiries in the Issues section. Moreover, new PRs are often merged without being tested against historical examples, making it difficult to guarantee the functionality of past features through manual Code Review alone. There is an urgent need for a more comprehensive CI testing framework to maintain the usability of Ianvs features as the project progresses. Additionally, the online documentation is outdated, which can be quite confusing for new users.
- Expected Outcome: 
  - Update the Contributing Guide
  - Develop a New Quick Start Example with Comprehensive Documentation
  - Update Documentation for Other Paradigm Usage
- Recommended Skills:  KubeEdge, Ianvs, Python, CI/CD pipelines
- Mentor(s):
  - FuryMartin (@FuryMartin, furymartin9910@outlook.com)
  - hsj576 (@hsj576, sjhu21@m.fudan.edu.cn)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/178
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8961c0b4-0e34-43be-9022-384a4847f5d3

#### Enhance KubeEdge testing coverage

- Description: KubeEdge would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects. Increase the UT coverage rate to 60% to 70% (currently, the UT coverage rate is 38.69% ). It is important to note that in addition to requiring the overall UT coverage of KubeEdge to meet the requirements, the UT coverage of each core code directory(cloud/, edge/, keadm/ and pkg/) also needs to exceed 60%.
- Expected Outcome: Increase the UT coverage rate to 60% to 70%
- Recommended Skills:  KubeEdge, Go, Testing
- Mentor(s):
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6101
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a85be883-5139-4e69-8859-6662f7ffd71d

#### KubeEdge Dashboard Enhancement - BFF

- Description: To improve the performance of KubeEdge dashboard, we would like to introduce a BFF (Backend for Frontend) layer. It serves as a middle layer to handle the communication between the dashboard and the KubeEdge API, providing a more efficient, secure, and maintainable solution.
- Expected Outcome: 
  - Integrate with [keink](https://github.com/kubeedge/keink)
  - Error handling and retry
  - Data pre-processing (Optional)
- Recommended Skills:  KubeEdge, JavaScript, React
- Mentor(s):
  - Chen Su (@ghosind, ghosind@gmail.com)
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/dashboard/issues/37
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/16217666-64ec-45e7-842b-9df5ceb07382

#### Community Website Comprehensive Upgrade Project: Homepage Renewal and Expansion of Core Pages

- Description: To improve the user experience of the KubeEdge official website, this project will focus on homepage design enhancements, the addition of new pages, and improvements to community resources. The goal of this project is to enhance the website's usability, increase user engagement, and attract more users to KubeEdge by enhancing training content and hardware compatibility support.
- Expected Outcome:
  - Design and optimization of the homepage, including design and code updates. 
  - New page: Showcase for KubeEdge course videos, including design and code updates. 
  - New page: "Hardware Compatibility" page, including design and code updates. 
  - Design and optimization of the partner page, including design and code updates. 
  - Optimization of community resources, improving documentation and onboarding experience to ensure users can easily get started and effectively use KubeEdge.
- Recommended Skills:  KubeEdge, JavaScript, Docusaurus
- Mentor(s):
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/website/issues/665
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/576c6710-942b-41cc-9e51-113c1957fc02

### KubeStellar

#### Enhancing KubeStellar UI for Expanded Functionality and UX

- Description: [KubeStellar](https://kubestellar.io) is a flexible solution for challenges associated with multi-cluster configuration management for edge, multi-cloud, and hybrid cloud. KubeStellar's UI is a tool for interacting with KubeStellar components, managing its inventory and transport space (ITS), and workload description space (WDS). Currently, the UI is in its early stages, providing only basic features like reading kubeconfig info and displaying ITS and WDS. The goal of this project is to significantly enhance the functionality and usability of the KubeStellar UI by implementing additional core features, improving its user interface, and ensuring a seamless experience for Kubernetes cluster operators.

- Objectives
  1. Implement BindingPolicies CRUD:
    - Develop intuitive interfaces for creating, reading, updating, and deleting binding policies.
    - Ensure policies are validated against Kubernetes standards and KubeStellar’s architecture.
    - Allow users to view and manage binding policies tied to specific workloads or clusters.
  2. Add Workload Deployment to WDS:
    - Build functionality for deploying workloads to one or more WDS.
    - Provide real-time feedback on deployment status and logs.
    - Add visualization for workload placement across multiple WDS, ensuring clarity of resource distribution.
  3. Cluster Onboarding to ITS:
    - Create an onboarding wizard to guide users through adding new clusters to the ITS.
    - Validate clusters' compatibility and connection during the onboarding process.
    - Automatically generate and display kubeconfig details for onboarded clusters.
  4. Enhance UI Usability and Performance:
    - Upgrade the UI with modern design principles for a consistent and intuitive user experience.
    - Leverage React and Vite to optimize load times and component rendering.
    - Introduce real-time updates for ITS and WDS data using WebSocket or API polling.
  5. Backend Integration with Go:
    - Extend the Go backend to support new API endpoints for the proposed features.
    - Ensure secure and efficient communication between the UI and Kubernetes API.
    - Validate backend performance under high-scale usage.

- Expected Outcomes
  - New Features:
    - BindingPolicies CRUD operations accessible via the UI.
    - Workload deployment support to one or more WDS.
    - Seamless onboarding process for adding clusters to the ITS.
  - Improved Usability:
    - A polished UI with a modern look and feel, supporting intuitive navigation.
    - Real-time insights into cluster operations and workload deployments.
  - Robust Performance:
    - Scalable backend integration with Go for handling large cluster environments.
    - Optimized frontend with Node.js, React, and Vite for faster interaction.

- Bonus Features
  - Visualization Improvements:
    - Visual dashboard for workload deployments and cluster health monitoring.
    - Integration of charts to show resource utilization trends across ITS and WDS.
  - User Customizations:
    - Add support for user-defined themes (dark/light mode).
    - Exportable configurations for sharing binding policies or deployment setups.

By implementing these enhancements, KubeStellar UI will evolve into a comprehensive tool for cluster management, empowering users to efficiently deploy and manage resources while offering an intuitive and modern interface.

- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.

- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)

- Upstream Issue: https://github.com/kubestellar/ui/issues/63
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/129bdb9e-9f8d-47c0-b643-23d50a19e6c7

### LitmusChaos

#### Enhancing CI/CD Integration for LitmusChaos: SDK Development and Chaos-CI-Lib Revamp

CNCF - LitmusChaos: CI/CD Integration, SDK Development & Chaos-CI-Lib Revamp (2025 Term 1)

- Description: This task aims to improve the CI/CD experience for LitmusChaos by developing a dedicated SDK that integrates seamlessly with existing CI libraries. The revamped Chaos CI Library will align with Litmus 3.x, eliminating outdated installation steps and enabling direct invocation of prebuilt chaos experiments. Additionally, CI action templates will be refined to optimize tunables, ensuring a smoother and more efficient workflow for users leveraging GitHub and GitLab pipelines.
- Expected Outcome:
  - Seamless CI/CD integration with a new Chaos CI SDK
  - A modernized Chaos-CI-Lib compatible with Litmus 3.x
  - Optimized CI action templates for GitHub and GitLab pipelines
- Recommended Skills: Go, scripting, CI/CD, familiarity with LitmusChaos is a plus but not required.
- Mentor(s):
  - Shubham Chaudhary (@ispeakc0de, shubham.chaudhary@harness.io)
  - Vedant Shrotria (@Jonsy13, vedant.shrotria@harness.io )
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/5038
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/445a6158-3ba7-429e-b0e1-f7417ff9a724

#### Improve the code coverage for observability in the LitmusChaos components

CNCF - LitmusChaos: Improve code coverage for observability in LitmusChaos components (2025 Term 1)

- Description: Enhancing observability across key components, including chaos-runner, chaos-operator, and litmus-go. By adding distributed tracing(span, span attributes, and error tracking) and exporting logs to the Open Telemetry Collector.
- Expected Outcome:
  - Enhanced observability with OpenTelemetry in key LitmusChaos components
  - Detailed span instrumentation for improved tracing and error tracking
  - Logs seamlessly exported to OpenTelemetry Collector
- Recommended Skills: OpenTelemetry, Go, familiarity with LitmusChaos is a plus but not required
- Mentor(s):
  - Namkyu Park (@namkyu1999, lak9348@gmail.com)
  - Adarsh Kumar (@Adarshkumar14, adarsh.kumar@harness.io)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/5039
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/55d8f0a4-86d5-4a90-890b-e8750a27dc60

#### Expanding the LitmusChaos Tutorials - Day 0, Day 1, and Day 2 User Flows

CNCF - LitmusChaos: Expand Tutorials – Day 0, Day 1 & Day 2 User Flows (2025 Term 1)

- Description: This task focuses on improving the LitmusChaos documentation by structuring and creating tutorials into Day 0, Day 1, and Day 2 workflows tailored for different users. Instead of documenting individual faults (which would require constant maintenance), the goal is to create user-flow-based guides that help users understand chaos engineering principles at different levels of expertise, from beginners experimenting with sample apps to advance users implementing chaos in real-world systems. Additionally, this task will involve tech doc improvements, fixing structural issues, removing duplicates, and ensuring a clear and intuitive documentation experience for the community
- Expected Outcome:
  - Structured Day 0, Day 1, and Day 2 tutorials for different user levels
  - Improved documentation clarity and reduced redundancy
  - Persona-based chaos experiment guides for real-world use cases
- Recommended Skills: Techincal Writing, Research Skills, familiarity with LitmusChaos is a plus but not required
- Mentor(s):
  - Sayan Mondal (@S-ayanide, sayanmondal342@gmail.com)
  - Smriti Satyanarayana (@SmritiSatya, smriti.satyanarayana@harness.io)
- Upstream Issue: https://github.com/litmuschaos/litmus/issues/5037
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e10bdb01-ef2b-41c5-9a84-6891ecaf6364

### Microcks

#### Improving Microcks CLI

- Description: Microcks (https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
This project seeks to enhance our CLI tool by integrating frameworks like Cobra CLI.
- Expected Outcome: @JulienBreux has started some work on creating a utility tool called `mksctl` [here](https://github.com/JulienBreux/mksctl).
The base of `mksctl` has also been reversed into the `1.x` branch of the `microcks-cli` repo [here](https://github.com/microcks/microcks-cli/tree/1.x). The main goals of a new CLI version are:
  - Provide the same interface for exiting test and import commands
  - Provide a way to easily install this tool via integration with packet manager (brew, apt or others)
  - Allow developers to easily start new Microcks instances with mksctl start and mksctl stop, for example
  - Allows quick addition of new commands like import from URL, import all the files from a directory, create job, list jobs, and so on.
Moving to standard tools like Cobra CLI is a way to make it more scalable so that people can contribute and add the features they want.
- Recommended Skills: Go, scripting, CLI, APIs.
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
  - Julien Breux (@JulienBreux, julien.breux@gmail.com)
- Upstream Issue: https://github.com/microcks/microcks-cli/issues/97
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7ceac2ef-6290-4e2a-87aa-db93d909b27b

#### Update the Microcks Hub frontend and make it deployable on-premises

- Description: Microcks (https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
[Microcks Hub](https://hub.microcks.io) is a community-driven hub that aggregates standards or product-related API mocks and test suites.
Microcks hub was created a long time ago with a technology stack we should refresh (Angular 8 at the moment). 
- Expected Outcome:
  - refresh UI aligned with ongoing work and decisions taken for the main Microcks UI, see: https://github.com/orgs/microcks/discussions/1458
  - It was initially designed to be deployable only in a single public instance, but there are requests to make it deployable on-premises.
  - We're looking for contributions on this part, such as helping develop Docker Compose files, Kubernetes Helm Charts, or whatever makes sense.
  - The code base is hosted on https://github.com/microcks/hub.microcks.io
- Recommended Skills: UI, Front End Developer, [Svelte](https://svelte.dev/) and [SvelteKIt](https://svelte.dev/docs/kit/introduction#What-is-SvelteKit), [Vite](https://vite.dev/)...
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/hub.microcks.io/issues/76
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/faccb875-1d96-44f5-aef7-95c53403d636

#### Microcks Hub: Expanding Sandbox and Mocking Capabilities for Key Industry APIs

CNCF - Microcks: Expand Microcks Hub Sandbox & Mocking for Key Industry APIs (2025 Term 1)

- Description: Microcks (https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
This project aims to enhance the [Microcks Hub](https://hub.microcks.io/) by updating the existing sandbox environment or adding new hub entries to mock key APIs IT industry leaders use. The goal is to make it easier for developers to test and prototype integrations with popular APIs like GitHub, Twilio, Stripe, or Salesforce using Microcks.
- Expected Outcome: Participants can choose to focus on one or both of the following aspects:
  1. Update and Refresh the Existing Sandbox:
    - Improve the sandbox environment provided by Microcks Hub for existing mock APIs.
    - Ensure compliance with the latest versions of existing APIs.
    - Enhance documentation, usability, and deployment mechanisms.
  2. Add New Hub Entries for Key Industry APIs:
    - Develop mock entries for leading APIs like GitHub, Twilio, Stripe, or Salesforce, but we welcome any ideas...
    - Ensure the mocks cover essential endpoints and realistic request-response pairs.
    - Provide detailed examples and use cases to support integration testing.
- Recommended Skills: OpenAPI, API dev mock & test, YAML, 
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/hub.microcks.io/issues/77
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/04da9d38-b9f8-435f-9200-8359f55ccf92

#### Expanding Microcks community documentation for advanced installations

- Description: Microcks (https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
Microcks depends on community contributions to address installation, setup, and infrastructure maintenance topics that fall outside the scope of the core project. This project aims to enhance the [Microcks Community Repository](https://github.com/microcks/community/tree/main/install) by providing detailed guides to help users with advanced and production-grade setups.
- Expected Outcome:
  - Fostering community members to share their technical knowledge on those topics,
  - Making contributions easy and straightforward - easily gathering this knowledge
  - Promoting contributed content with new access from the documentation, improved integration with our social communications, etc...
- Recommended Skills: Technical Writer, open source principles and community management  
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/community/issues/34
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/6b4c516d-fc01-4ab3-8147-13273fcde76b

#### Improving Microcks delivery and validation with GitHub Actions CI deployment tests

CNCF - Microcks: Improve delivery & validation with GitHub Actions CI deployment tests (2025 Term 1)

- Description: Microcks (https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
This project focuses on enhancing the reliability and quality of Microcks releases by introducing comprehensive CI deployment tests and validations using GitHub Actions. While the project already includes unit and integration tests, recent issues (ex: https://github.com/microcks/microcks/issues/1470 and https://bugs.openjdk.org/browse/JDK-8345296) with dependencies have underscored the need for end-to-end validation to ensure new integrations do not introduce bugs or regressions.\
\
Participants will develop workflows for building and deploying Microcks and running automated tests to confirm its functionality under real-world scenarios. This will help prevent edge cases and dependency-related issues affecting the Microcks community and adopters. This project improves the delivery process to ensure that Microcks' releases meet the community's expectations for quality and reliability.
- Expected Outcome: Workflows encompass a bunch of deployment tests:
  - Test container images (with docker, with podman, and on different architectures)
  - Testing of common docker-compose configurations
  - Testing of Helm chart with different setup options
- Recommended Skills: GitHub actions, deployment tests, QA, Docker, Helm chart...
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/microcks/issues/1480
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0c667baa-94bf-405c-ada6-c2bea3bf3e56

#### Building Community-Driven documentation for deploying Microcks in cloud production environments

CNCF - Microcks: Community-Driven Docs for Deploying Microcks in Cloud Production (2025 Term 1)

- Description: Microcks (https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
This project aims to support the growing Microcks adopter community by fostering a collaborative effort to document production-grade deployment strategies for cloud environments. While the core Microcks maintainers focus on features, security, and enhancements, the adopters are responsible for production setups. However, a shared repository of best practices can help users learn from one another in a true open-source spirit. This project will empower the community to deploy Microcks confidently in diverse cloud environments, fostering collaboration and sharing of expertise among adopters.
- Expected Outcome: Participants will contribute to the Microcks community repository (https://github.com/microcks/community/tree/main/install) by documenting deployment workflows for popular cloud providers, such as AWS, GCP, and Azure, as well as other providers like OVH, Oracle, Scaleway, or Koyeb. Deliverables will include guides on utilizing cloud-native services (e.g., PostgreSQL, MongoDB, IDP) to create robust and scalable Microcks installations ideally on managed Kubernetes services from the provider.
- Recommended Skills: GitOps, SRE, Infra as code, cloud.
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/community/issues/32
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1b766ba2-3de6-4eb4-8e0d-f79105b000b0

#### Streamlining Microcks Deployment on AWS Marketplace

- Description: Microcks (https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
This project focuses on creating a validated and repeatable SaaS architecture for deploying Microcks on AWS, with the ultimate goal of listing it on the AWS Marketplace through the AWS Partner Network Co-Sell program. By addressing the community's frequent demand, this initiative will simplify Microcks' adoption while leveraging a complete suite of AWS services to ensure scalability, security, and ease of deployment.\ The core Microcks maintainers focus on features, security, and enhancements. The adopters are responsible for production setups. However, a shared repository of best practices can help users learn from one another in a true open-source spirit. Participants will contribute to the  Microcks community repository (https://github.com/microcks/community/tree/main/install) by documenting the AWS Marketplace deployment.
- Expected Outcome: This project will enable Microcks adopters to confidently deploy production-ready setups on AWS, ensuring the scalability and reliability needed for enterprise environments. By integrating Microcks into the AWS Marketplace, the project will further enhance its visibility and adoption within the AWS ecosystem. Key objectives include:
  - Designing and validating a SaaS architecture that is compliant with AWS Foundational Technical Review (FTR).
  - Utilizing AWS-native services such as EKS, Aurora (PostgreSQL), DocumentDB, API Gateway, IAM, and CloudFormation for an end-to-end deployment.
  - Streamlining deployment workflows to create an open source, community-maintained solution that organizations can quickly adopt.
- Recommended Skills: AWS and AWS services, CloudFormation.
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/community/issues/33
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/51c0d803-95ea-48c1-b966-5946b8599662

### Prometheus

#### Get `PrometheusRemoteWriteReceiver` in OTel-Collector to Alpha Maturity

- Description: In recent discussions with the team, we decided that Prometheus won't be exporting its data with the OTLP format, however, Prometheus is still committed to have good import/export compatibility with OpenTelemetry. Last year Prometheus release the second version of its Remote-Write protocol, which translates a lot better with the OTLP format and the team started working on a PRW receiver in the collector-contrib project. This project is about getting this component into the finish line and publish it as an stable component in the collector.
- Expected Outcome: PrometheusRemoteWriteReceiver considered Alpha and released with OpenTelemetry-Collector-Contrib.
- Recommended Skills: Prometheus Remote-Write, OTLP, Go.
- Mentor(s):
  - Arthur Sens (@ArthurSens, arthursens2005@gmail.com)
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/37277
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/47603a7d-4dc7-48f0-968f-21c2f18f4e3c

#### UX Research: How users expect to use OTLP Resource Attributes in Prometheus

- Description: In the last year Prometheus has tackled and solved many UX problems that OTel users had when sending OTLP data to Prometheus. One challenge that remains unsolved is how do users expect to use OTLP Resource Attributes in Prometheus. This project is about conducting a UX research that explores the main problems users are facing today with the current state of Resource Attributes and Prometheus and coming up with ideas how to solve them.
- Expected Outcome: 
  -  Preliminary artifacts (e.g., research plan) shared as project progresses.
  - Research report, summarizing the findings.
  - A spoken presentation including research method and results.
    - Stretch goal: apply to present the project at KubeCon.
- Recommended Skills:
  - Interest or currently working in UX Research and Design.
  - Familiarity with databases and querying.
  - Being comfortable to talk with End-Users in English.
- Mentor(s):
    - Arthur Sens (@ArthurSens, arthursens2005@gmail.com)
    - Amy Super (@amy-super, amy.super@grafana.com)
    - Andrej Kiripolsky (@AndrejKiri, andrej.kiripolsky@grafana.com)
- Upstream Issue: https://github.com/prometheus/prometheus/issues/15909
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/36e3f336-ce78-4074-b833-012015eb59be

### TUF

#### Metadata Repository Visualization

A [TUF](https://theupdateframework.com/) metadata repository consists of signed metadata files, which are read by TUF clients when securely downloading artifacts. The [metadata](https://theupdateframework.com/docs/metadata/) contains information about the artifacts and about the metadata itself, most notably, who is trusted to sign what.

A suitable visual representation of this trust hierarchy makes TUF's security properties more accessible to end-users, and, more importantly, allows metadata signers to carefully review metadata changes before signing them.

In this project you will, together with your mentor and the TUF community, identify requirements for the visualization of a TUF metadata repository and build a corresponding web app.

- Expected Outcome: Identify requirements and build a basic web app to visualize TUF metadata. *(Initial requirements may be inspired by the `tuf-on-ci` use case.)*
- Recommended Skills: Front-end web development, Information Visualization
- Mentor(s): # 
  - Lukas Pühringer (@lukpueh, lukas.puehringer@nyu.edu) - primary
  - TBD
- Upstream Issue (URL): TBD, https://github.com/theupdateframework/tuf-on-ci/issues/39 (initial ideas)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ea1a5098-29ce-4799-82e0-07416ab4b56a

### Vitess

#### Enhance flag support across Vitess Components

Vitess is a distributed database system built on MySQL. Flags are widely used in Vitess for configuring components. As part of a major Vitess flag restructure, support for dynamic flag configuration was introduced. However, several Vitess components have not yet fully adopted this feature. This project involves modifying these components to fully integrate dynamic flags and performing additional flag-related refactors where necessary.

- Expected Outcome: Improved flag support across all Vitess components, ensuring consistent and flexible configuration management.
- Recommended Skills: golang
- Mentor(s):
-  Deepthi Sigireddi (@deepthi, deepthi@planetscale.com)
-  Rohit Nayak (@rohit-nayak-ps, rohit@planetscale.com)
- Upstream Issue: https://github.com/vitessio/vitess/issues/17687
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2bb1bdc0-3fd7-4537-b44f-9afde27ed9fe

#### Develop an FAQ Chatbot for Vitess using Retrieval-Augmented Generation

Vitess is a distributed database system built on MySQL. Developers often need to search through documentation, Slack 
discussions, and GitHub issues to find answers. This project will implement an AI-powered FAQ chatbot using 
**Retrieval-Augmented Generation**, integrating **vector search** with an **LLM** (like OpenAI, DeepSeek, 
GPT-4, Mistral, Llama3). The chatbot will be available via a **CLI and Slack bot** for developer support.

- Expected Outcome: A chatbot that provides accurate Vitess-related answers via CLI and Slack, using indexed documentation and discussions for retrieval.
- Recommended Skills: golang, python, LLM APIs, vector databases
- Mentor(s):
  -  Rohit Nayak (@rohit-nayak-ps, rohit@planetscale.com)
  -  Manan Gupta (@GuptaManan100, manan@planetscale.com)
- Upstream Issue: https://github.com/vitessio/vitess/issues/17690
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/077e714c-63ad-477d-8124-e879a7ea8fe2

### WasmEdge

#### Implement a new WasmEdge installer in Rust

- Description: Create a new tool in Rust that provides: Support cross-operating systems, including Linux(amd64 and aarch64), macOS(Intel models and Apple Silicon models), and Windows(amd64); Simplifies installation of the WasmEdge runtime and its plugins in a single tool called wasmedgeup; Automatically handles versioning, dependencies, OS/ARCH detection, and ensure the same user experience across operating systems and architectures. For more details, please refer to the upstream issue.
- Expected Outcome:
  - A Rust implemented installer in [wasmedgeup](https://github.com/WasmEdge/wasmedgeup).
  - A document to describe how to use.
  - A CI workflow to build and test on Linux(Ubuntu, Fedora), macOS, and Windows.
- Recommended Skills:
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3990
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/79119ceb-7c52-4b9f-b1f2-694b9d1117e3

#### Implement component model's validator

- Description: The current validator of component model inside of WasmEdge only check nested module and ensure VM can run the nested modules without problem, but the validations from component model are mostly skipped.
- Expected Outcome:
  - One should create a workable (merged into upstream) implementation of validator by working on
  - `include/validator/validator_component.h`
  - `lib/validator/validator_component.cpp`
  - The visitor pattern are already setup.
- Recommended Skills:
  - Since component model proposal separate their validation spec, one should able to
    find requirements from https://github.com/WebAssembly/component-model/tree/main/design/mvp
  - Implements it in C++.
- Mentor(s):
  - Lîm Tsú-thuàn (@dannypsnl, dannypsnl@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3966
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/97f77900-7f5c-45e4-9b0c-638c2db6a8e4

#### Improve the WasmEdge-based Rust coding assistant for inference-time scaling

- Description: In a [previous LFX mentorship project](https://github.com/WasmEdge/WasmEdge/issues/3495), we have created an [LLM-based coding assistant grounded in Rust programming language skills](https://huggingface.co/datasets/gaianet/learn-rust). We aim to further improve the Rust coding assistant by incorporating inference-time compute that utilizes the Rust compiler for feedback. One of the greatest advantages of Rust is its powerful and strict compiler, and the detailed error message generated by the compiler. The Rust compiler could give valuable feedbacks to code generating LLMs to improve the code quality.
- Expected Outcome:
  - Run a [Qwen Coder 2.5 LLM locally](https://github.com/GaiaNet-AI/node-configs/tree/main/qwen-2.5-coder-7b-instruct) or access it via an API.
  - Create an LLM system prompt that describes the structure and key elements of a `cargo` project. It will guide the LLM to generate multiple files (artifacts) for a complete project.
  - Create a Python program to send user requests to the LLM and parse the generated result into locally cached files.
  - Use a local Rust compiler to build the generated project. Sends the error messages back to the LLM to re-generate.
  - Iterate until there is no more errors.
  - Build a web API for the Python program that takes OpenAI compatible requests and return OpenAI compatible results.
- Recommended Skills:
  - Rust
  - [LlamaEdge](https://llamaedge.com/docs/user-guide/llm/full-openai)
  - LLMs like ChatGPT
  - Coding assistant like GitHub Copilot
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3985
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/626ca1e4-9869-4401-8e45-68041ebc98cf

#### Create a Japanese translation agent for CNCF videos

- Description: WasmEdge is a cross-platform and lightweight runtime for AI models. It can run a variety of GenAI models, such as [LLM](https://llamaedge.com/docs/user-guide/llm/get-started-with-llamaedge), [whisper](https://llamaedge.com/docs/user-guide/speech-to-text/quick-start-whisper) (voice to text), and [GPT-SoVITS](https://llamaedge.com/docs/user-guide/text-to-speech/gpt-sovits) (text to voice) on your own computers. By combining those 3 models together, developers in the WasmEdge community has created “video translation” applications that can translate video and audio content into another language. One such application is [VideoLangua.com](http://videolangua.com/) In this mentorship, we would like to build a Japanese translator agent that are specifically tailored to CNCF technical content.
- Expected Outcome:
  - Use whisper to extract a time-stamped English transcript from a sample of CNCF videos. Develop whisper prompt that are suitable for CNCF technical content.
  - Evaluate and select LLMs that are good at English to Japanese translation.
  - Develop LLM prompts that are suitable for CNCF technical content.
  - Train Japanese TTS actor models for GPT-SoVITS using PyTorch.
  - Create dictionaries for how to pronounce CNCF technical words in Japanese.
  - Evaluate the synthesized Japanese voice.
- Recommended Skills:
  - The mentee must speak Japanese fluently.
  - He or she needs to be familiar with technical content in CNCF videos.
  - He or she should also be familiar with GenAI APIs (eg OpenAI API) and be able use PyTorch.
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Miley Fu (@MileyFu, miley@secondstate.io)
  - Vivian Hu (@alabulei1, vivian@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3986
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5ba528fe-9704-4e11-b46d-607a5ad1e838
