# Term 01 - 2025 March - May

Status: Planning

Mentorship duration - three months (full-time schedule)

### Timeline

| **Activity**                       | **Date**                                                                 |
|------------------------------------|--------------------------------------------------------------------------|
| **Project Proposals Open**         | Wednesday, January 8 - Tuesday February 4, 2025                          |
| **Mentee Applications Open**       | Wednesday, February 5 - Tuesday February 18, 2025 11AM PST (19:00 UTC)   |
| **Application Review Period**      | Wednesday, February 19 – Tuesday, February 25, 2025 11AM PST (19:00 UTC) |
| **Selection Notifications**        | Thursday, February 27, 2025                                              |
| **Mentorship Program Begins**      | Monday, March 3, 2025                                                    |
| **Midterm Mentee Evaluations Due** | Tuesday, April 15, 2025 11AM PDT (18:00 UTC)                             |
| **First Stipend Payments**         | Wednesday, April 16, 2025                                                |
| **Final Mentee Evaluations Due**   | Tuesday, May 27, 2025 11AM PDT (18:00 UTC)                               |
| **Second Stipend Payments**        | Wednesday, May 28, 2025                                                  |
| **Last Day of Term**               | Friday, May 30, 2025                                                     |

### Project instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2025/01-Mar-May/project_ideas.md, by February 4, 2025.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Table of Contents
<!-- TOC -->
* [Antrea](#antrea)
  * [Support L4 protocol filters in PacketCapture API](#support-l4-protocol-filters-in-packetcapture-api)
* [Envoy Gateway](#envoy-gateway)
  * [Integrating CNCF Fuzzing Framework for Envoy Gateway](#integrating-cncf-fuzzing-framework-for-envoy-gateway)
  * [Enhancing Envoy Gateway Documentation Using CNCF Tech Docs Analysis Framework](#enhancing-envoy-gateway-documentation-using-cncf-tech-docs-analysis-framework)
* [Harbor](#harbor)
  * [Harbor CLI](#harbor-cli)
  * [Harbor Satellite](#harbor-satellite)
* [Headlamp (a Kubernetes UI)](#headlamp-a-kubernetes-ui)
  * [Headlamp: Instrument with OpenTelemetry](#headlamp-instrument-with-opentelemetry)
  * [Headlamp: Make a Headlamp plugin for KEDA](#headlamp-make-a-headlamp-plugin-for-keda)
  * [Headlamp: Build Plugin Installation Container](#headlamp-build-plugin-installation-container)
* [Inspektor Gadget](#inspektor-gadget)
  * [Building gadgets with Rust](#building-gadgets-with-rust)
  * [Implementing unit tests](#implementing-unit-tests)
  * [Inspekting and analysing gadgets](#inspekting-and-analysing-gadgets)
* [Istio](#istio)
  * [Support TLS for Istio metrics endpoints](#support-tls-for-istio-metrics-endpoints)
  * [Improve documentation build infrastructure](#improve-documentation-build-infrastructure)
  * [Implement new site search](#implement-new-site-search)
* [Jaeger](#jaeger)
  * [Jaeger: Upgrade Storage Backends to V2 Storage API](#jaeger-upgrade-storage-backends-to-v2-storage-api)
  * [Upgrade charts and graphs in Jaeger UI](#upgrade-charts-and-graphs-in-jaeger-ui)
* [Karmada](#karmada)
  * [Karmada Self-Signed Certificate Content Standardization](#karmada-self-signed-certificate-content-standardization)
  * [Implement multi-cluster management in the Karmada dashboard](#implement-multi-cluster-management-in-the-karmada-dashboard)
* [KCL](#kcl)
  * [A test framework developed for the KCL package management tool](#a-test-framework-developed-for-the-kcl-package-management-tool)
  * [KPM & LSP Integrated](#kpm--lsp-integrated)
* [Kmesh](#kmesh)
  * [Re-design and implement the Kmesh website](#re-design-and-implement-the-kmesh-website)
  * [Kmesh eBPF unit test](#kmesh-ebpf-unit-test)
  * [Add the Kmesh e2e Test](#add-the-kmesh-e2e-test)
  * [Metrics for TCP Long Connection](#metrics-for-tcp-long-connection)
* [Knative](#knative)
  * [Design and Implement Levels for Educational Game](#design-and-implement-levels-for-educational-game)
* [KubeArmor](#kubearmor)
  * [Providing Zero-Trust policies for popular workloads](#providing-zero-trust-policies-for-popular-workloads)
* [KubeEdge](#kubeedge)
  * [Domain-specific large model benchmarks: the edge perspective](#domain-specific-large-model-benchmarks-the-edge-perspective)
  * [Enhance Dependency Management and Documentation for KubeEdge-Ianvs](#enhance-dependency-management-and-documentation-for-kubeedge-ianvs)
  * [Enhance KubeEdge testing coverage](#enhance-kubeedge-testing-coverage)
  * [KubeEdge Dashboard Enhancement - BFF](#kubeedge-dashboard-enhancement---bff)
  * [Community Website Comprehensive Upgrade Project: Homepage Renewal and Expansion of Core Pages](#community-website-comprehensive-upgrade-project-homepage-renewal-and-expansion-of-core-pages)
* [KubeStellar](#kubestellar)
  * [Implement a Binding Policy Frontend Supported by Binding Policy Backend Endpoints](#implement-a-binding-policy-frontend-supported-by-binding-policy-backend-endpoints)
  * [Implement a Binding Policy Backend to Support UI Frontend](#implement-a-binding-policy-backend-to-support-ui-frontend)
  * [Implement a WDS Backend to Support UI Frontend Operations](#implement-a-wds-backend-to-support-ui-frontend-operations)
  * [Implement a WDS Frontend Supported by WDS Backend](#implement-a-wds-frontend-supported-by-wds-backend)
  * [Implement an ITS Frontend Supported by ITS Backend Endpoints](#implement-an-its-frontend-supported-by-its-backend-endpoints)
  * [Implement an ITS Backend to Support UI Frontend Operations](#implement-an-its-backend-to-support-ui-frontend-operations)
* [Kyverno](#kyverno)
  * [Chainsaw Tests For New Policy Types](#chainsaw-tests-for-new-policy-types)
  * [Sample Policies For New Policy Types](#sample-policies-for-new-policy-types)
  * [Mutating Admission Policy Integration](#mutating-admission-policy-integration)
* [LitmusChaos](#litmuschaos)
  * [Enhancing CI/CD Integration for LitmusChaos: SDK Development and Chaos-CI-Lib Revamp](#enhancing-cicd-integration-for-litmuschaos-sdk-development-and-chaos-ci-lib-revamp)
  * [Improve the code coverage for observability in the LitmusChaos components](#improve-the-code-coverage-for-observability-in-the-litmuschaos-components)
  * [Expanding the LitmusChaos Tutorials - Day 0, Day 1, and Day 2 User Flows](#expanding-the-litmuschaos-tutorials---day-0-day-1-and-day-2-user-flows)
* [Meshery](#meshery)
  * [Meshery Model Support for kro ResourceGraphDefinitions (RGDs)](#meshery-model-support-for-kro-resourcegraphdefinitions-rgds)
  * [Hands-on tutorials using Meshery Playground](#hands-on-tutorials-using-meshery-playground)
  * [Expanding end-to-end test coverage in Meshery using Playwright](#expanding-end-to-end-test-coverage-in-meshery-using-playwright)
* [Microcks](#microcks)
  * [Improving Microcks CLI](#improving-microcks-cli)
  * [Update the Microcks Hub frontend and make it deployable on-premises](#update-the-microcks-hub-frontend-and-make-it-deployable-on-premises)
  * [Microcks Hub: Expanding Sandbox and Mocking Capabilities for Key Industry APIs](#microcks-hub-expanding-sandbox-and-mocking-capabilities-for-key-industry-apis)
  * [Expanding Microcks community documentation for advanced installations](#expanding-microcks-community-documentation-for-advanced-installations)
  * [Improving Microcks delivery and validation with GitHub Actions CI deployment tests](#improving-microcks-delivery-and-validation-with-github-actions-ci-deployment-tests)
  * [Building Community-Driven documentation for deploying Microcks in cloud production environments](#building-community-driven-documentation-for-deploying-microcks-in-cloud-production-environments)
  * [Streamlining Microcks Deployment on AWS Marketplace](#streamlining-microcks-deployment-on-aws-marketplace)
* [OpenKruise](#openkruise)
  * [Implement Fuzz testing for OpenKruise](#implement-fuzz-testing-for-openkruise)
* [Prometheus](#prometheus)
  * [Get `PrometheusRemoteWriteReceiver` in OTel-Collector to Alpha Maturity](#get-prometheusremotewritereceiver-in-otel-collector-to-alpha-maturity)
  * [UX Research: How users expect to use OTLP Resource Attributes in Prometheus](#ux-research-how-users-expect-to-use-otlp-resource-attributes-in-prometheus)
* [Thanos](#thanos)
  * [Add support for new PromQL aggregations](#add-support-for-new-promql-aggregations)
* [TUF](#tuf)
  * [Metadata Repository Visualization](#metadata-repository-visualization)
* [Vitess](#vitess)
  * [Enhance flag support across Vitess Components](#enhance-flag-support-across-vitess-components)
  * [Develop an FAQ Chatbot for Vitess using Retrieval-Augmented Generation](#develop-an-faq-chatbot-for-vitess-using-retrieval-augmented-generation)
* [Volcano](#volcano)
  * [Volcano supports queue-level scheduling policies](#volcano-supports-queue-level-scheduling-policies)
  * [Coordinate descheduler and Volcano to support resource defragmentation](#coordinate-descheduler-and-volcano-to-support-resource-defragmentation)
  * [Volcano dashboard feature enhancements](#volcano-dashboard-feature-enhancements)
* [WasmEdge](#wasmedge)
  * [Implement a new WasmEdge installer in Rust](#implement-a-new-wasmedge-installer-in-rust)
  * [Implement component model's validator](#implement-component-models-validator)
  * [Improve the WasmEdge-based Rust coding assistant for inference-time scaling](#improve-the-wasmedge-based-rust-coding-assistant-for-inference-time-scaling)
  * [Create a Japanese translation agent for CNCF videos](#create-a-japanese-translation-agent-for-cncf-videos)
<!-- TOC -->

## Projects

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

#### Enhancing Envoy Gateway Documentation Using CNCF Tech Docs Analysis Framework

- Description: The **Envoy Gateway** project provides a simplified way to use **Envoy Proxy as an API Gateway**,
and its documentation is critical to enabling adoption, onboarding new users, and improving developer experience.
While the existing documentation covers core concepts and use cases, applying the **CNCF Tech Docs Analysis Framework**
will help assess and systematically enhance its **clarity, completeness, and usability**.

This project aims to evaluate and improve the [Envoy Gateway website and documentation](https://gateway.envoyproxy.io) by
leveraging the structured analysis methodology from the [CNCF Tech Docs Analysis Framework](https://github.com/cncf/techdocs/blob/main/docs/analysis/howto.md).
The outcome will be a **comprehensive documentation improvement plan**, with targeted updates and best practices implemented.

- Expected Outcome:
  - Apply the **CNCF Tech Docs Analysis Framework** to assess Envoy Gateway docs
  - Identify gaps in **content, structure, readability, and technical accuracy**
  - Improve documentation **organization, navigation, and developer onboarding**
  - Optimize technical guides, examples, and API references
  - (Stretch Goal) Introduce best practices for **continuous documentation improvement**

- Recommended Skills:
  - Familiarity with **Envoy Proxy, Envoy Gateway, Kubernetes, and API Gateways** (or willingness to learn)
  - Experience with **Markdown, static site generators (e.g., Hugo), and GitHub-based workflows**
  - Interest in **developer experience, technical writing, and open-source documentation**
  - Ability to conduct structured **documentation analysis and usability improvements**

- Mentor(s):
  - Erica Hughberg (@missBerg, erica.hughberg@tetrate.io)
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/5203
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2b752e3d-d55b-40de-a702-13b88aff974a

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
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d961bfc7-00e1-4c05-bf1a-f9c7ddf1756a

#### Headlamp: Make a Headlamp plugin for KEDA

- Description: Headlamp is a Kubernetes UI which is extensible. KEDA is a Kubernetes-based Event Driven Autoscaler. With KEDA, one can drive the scaling of any container in Kubernetes based on the number of events needing to be processed. While KEDA provides excellent functionality for scaling workloads based on event sources and custom metrics, monitoring and managing KEDA resources through Kubernetes dashboards remains challenging.
- Expected Outcome: Create a Headlamp plugin that provides comprehensive visibility and management capabilities for KEDA resources, enabling users to do the following. 1. View and manage ScaledObjects and ScaledJobs through a intuitive interface. 2. Monitor real-time scaling metrics and trigger states. 3. Troubleshoot scaling behaviors with integrated logging and event visualization.
- Recommended Skills: Golang, TypeScript. Kubernetes and KEDA too would be nice to have.
- Mentor(s):
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
- Upstream Issue: https://github.com/headlamp-k8s/headlamp/issues/2791
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ceebb991-978f-4782-8435-195637f433aa

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
  - Ian Rudie (@ilrudie, ian.rudie@solo.io)
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

### KCL

#### A test framework developed for the KCL package management tool

- Description: The main content of this topic is to refer to the structure of the test part of common programming languages, such as go and rust, to develop a test framework for KCL's package management tool to help developers better write test cases for the project. The main function of the test framework is to provide a mock environment that supports compiling KCL and interacting with simulated environments such as OCI/Git registry.
- Expected Outcome: 
  - A mock environment is started during testing. This mock environment can complete the test without being affected by the network.
  - In this mock environment, complete the test of: `kcl run`, `kcl mod add`, `kcl mod pull`, `kcl mod push`.
- Recommended Skills: Go, Rust
- Mentor(s):
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
  - Heipa (@He1pa, he1pa404@gmail.com)
- Upstream Issue: https://github.com/kcl-lang/kpm/issues/593
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b9fafd6f-194a-48c8-be37-05a644b00b6d

#### KPM & LSP Integrated

- Description: Sometimes users will edit the `kcl.mod` file in the IDE to update project dependencies. The integration between LSP and KPM needs to be strengthened, it mainly includes two parts of functions. 
  - According to the content written by the user in the kcl.mod file, the IDE automatically calls the `kcl run/mod add/mod metadata` and other functions, and feeds back the results in the IDE. 
  - According to the user's operations in the command line, the changes of `kcl.mod` and project content are synchronized to the IDE.

examples:

1. When users update kcl.mod in the IDE, the required dependencies are automatically downloaded.

2. When users use the kpm tool to update dependencies, the IDE can be updated (recompiled). For example
```kcl
import k8s  # Error: Module not found
```

use `kcl mod add k8s` to download the dependency `k8s`.

kpm will download the k8s package and then the IDE errors will be eliminated

- Expected Outcome: 
  - Complete at least the following parts:
    - IDE triggers automatic dependencies updates of package management tools.
    - Automatic synchronization of kcl.mod files.
    - IDE users actively trigger dependency downloads, it looks like: a button or link for user to download the missing dependencies.
    - After the dependency update is complete, the IDE triggers a recompile to clear the error
- Recommended Skills: Go, Rust
- Mentor(s):
    - Heipa (@He1pa, he1pa404@gmail.com)
    - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue: https://github.com/kcl-lang/kcl/issues/1847
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/012a9fb4-286b-4a76-ad7a-2de644427109

### Kmesh

#### Re-design and implement the Kmesh website

- Description: The existing Kmesh website theme struggled to meet existing development needs. Therefore, there is a need to redesign the Kmesh website and replace the theme to make it easier for developers to add documentation. Development instructions for the website are also provided.
- Expected Outcome:
  - The website has more readable documentation, covering user cases, developer courses, etc. 
  - Docs about how to develop website.
- Recommended Skills: JS, Kmesh, Html
- Mentor(s):
  - ZhenCheng Li(@LiZhenCheng9527, leezhencheng6@gmail.com),
  - Zhonghu Xu(@hzxuzhonghu, zhhxu2011@gmail.com)
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
  - Xin Liu(@bitcoffeeiux, 854182924@qq.com)
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
  - Zhonghu Xu(@hzxuzhonghu, zhhxu2011@gmail.com)
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

### KubeArmor

#### Providing Zero-Trust policies for popular workloads

- Description: KubeArmor can whitelist processes and assets based on set of rules provided through the policies. This feature allows KubeArmor to achieve zero trust for a workload. However, knowing the allowed behaviour for a workload and manually creating these policies is a pain. Therefore we want to provide Zero-trust policies for popular workloads like grafana, WordPress, redis, etc. (let's say some 100 workloads). We want to make these Zero-Trust policies available as artifacts.
  
- Expected Outcome: Create a registry of policies that allow users to seamlessly fetch and apply policies for popular workloads.

- Extended Goal: Since applications will have newer versions and the existing Zero-Trust policies may not work as expected. We can have an automated system to generate these Zero-Trust policies and so we can also automate the process of generating Zero-Trust policies for every version available or newer versions as well.
  
- Recommended Skills: familiarity with Golang, K8s CRD(Custom Resource Definition), YAML.
- Mentor(s):
  - Rishabh Soni (@rootxrishabh, risrock02@gmail.com)
  - Prateek Nandle (@Prateeknandle, prateeknandle@gmail.com)
  - Barun Acharya (@daemon1024, barun1024@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1959
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5f7ef24a-a57b-477d-940f-9989f1bec481

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

#### Implement a Binding Policy Frontend Supported by Binding Policy Backend Endpoints

_CNCF - KubeStellar: Implement Binding Policy Frontend with Backend Endpoints (2025 Term 1)_

- Description
This project focuses on developing the UI components necessary for managing Binding Policies in KubeStellar. Users should be able to create, update, delete, and view policies via an intuitive interface while ensuring seamless integration with the backend API.

- Objectives
  - Develop UI components for managing Binding Policies (CRUD operations).
  - Implement validation mechanisms to ensure policies comply with Kubernetes standards.
  - Provide real-time updates on policy status and binding information.
  - Improve UI design for a seamless user experience.
- Expected Outcomes
  - A fully functional Binding Policy management UI.
  - Smooth user interaction with the backend API.
  - Modern UI with real-time validation and feedback.
- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.
- Mentor(s)
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)
- Upstream Issue: https://github.com/kubestellar/ui/issues/54
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8bbb76e3-07e5-404d-9335-28cc0d8ecf0c

#### Implement a Binding Policy Backend to Support UI Frontend

Description
This project focuses on implementing the backend API for managing Binding Policies. The API should support creating, reading, updating, and deleting policies while ensuring robust validation and performance.

- Objectives
  - Develop backend API endpoints for Binding Policy management.
  - Ensure proper validation and enforcement of Kubernetes standards.
  - Optimize backend performance for handling multiple policy requests.
  - Implement logging and error handling for better debugging.
- Expected Outcomes
  - A secure and scalable backend API for Binding Policies.
  - Full CRUD functionality accessible from the UI.
  - Improved validation and performance optimizations.
- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.
- Mentor(s)
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)
- Upstream Issue: https://github.com/kubestellar/ui/issues/53
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d9f46954-3b56-4e42-b83c-dd3dee2b8b6d

#### Implement a WDS Backend to Support UI Frontend Operations

- Description
This project will focus on implementing the backend infrastructure necessary to manage Workload Description Space (WDS) operations. The backend will support UI functionalities such as workload deployment and visualization.

- Objectives
  - Develop API endpoints for workload deployment to WDS.
  - Implement workload status tracking and log retrieval.
  - Ensure efficient workload resource retrieval.
- Expected Outcomes
  - A robust WDS backend to support UI functionalities.
  - Secure API integrations for workload management.
  - Efficient backend processes for workload deployment and tracking.
- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.
- Mentor(s)
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)
- Upstream Issue: https://github.com/kubestellar/ui/issues/52
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/885239e6-6a95-410f-9aae-00fd8b4c5f09

#### Implement a WDS Frontend Supported by WDS Backend

- Description
This project focuses on enhancing the KubeStellar UI with WDS-related functionalities, allowing users to manage and deploy workloads effectively.

- Objectives
  - Implement UI components for managing workloads in WDS.
  - Integrate real-time workload deployment tracking.
  - Enhance UI design for better user experience and usability.
  - Display visual indicators for workload placement across multiple clusters.
- Expected Outcomes
  - A user-friendly UI for managing WDS workloads.
  - Real-time feedback on deployment status.
  - Improved visualization of workload distribution.
- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.
- Mentor(s)
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)
- Upstream Issue: https://github.com/kubestellar/ui/issues/51
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e549191d-6880-4a98-8fd2-ec5fc47ecc92

#### Implement an ITS Frontend Supported by ITS Backend Endpoints

- Description
This project aims to develop the frontend components for managing clusters in the Inventory and Transport Space (ITS). Users should be able to onboard and manage clusters through an intuitive UI.

- Objectives
  - Develop UI components for cluster onboarding and management.
  - Implement validation and error handling for cluster registration.
  - Ensure smooth integration with backend APIs for real-time updates.
  - Provide a guided onboarding experience for adding new clusters.
- Expected Outcomes
  - A fully functional ITS management UI.
  - Improved usability for adding and managing clusters.
  - Seamless backend integration for real-time data updates.
- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.
- Mentor(s)
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)
- Upstream Issue: https://github.com/kubestellar/ui/issues/50
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b3805d32-03c4-4d5f-b56e-613ac24629c1

#### Implement an ITS Backend to Support UI Frontend Operations

- Description
This project focuses on building the backend functionality necessary for managing clusters in ITS. It will provide API endpoints to support the frontend’s cluster onboarding and management features.

- Objectives
  - Develop backend APIs for ITS cluster management.
  - Implement validation and security features for onboarding new clusters.
  - Ensure high performance and scalability for handling multiple clusters.
  - Optimize API interactions for faster response times.
- Expected Outcomes
  - A fully functional ITS backend with API support.
  - Secure and efficient cluster onboarding processes.
  - Scalable architecture for managing large Kubernetes deployments.
- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.
- Mentor(s)
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)
- Upstream Issue: https://github.com/kubestellar/ui/issues/49
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/11478e3c-ac06-4d15-a11f-a7bf1f9994e3

### Kyverno

#### Chainsaw Tests For New Policy Types

- Description: Kyverno 1.14 is introducing new policy types based on the upstream Kubernetes ValidatingAdmissionPolicy and MutatingAdmissionPolicy resources, as well as a new ImageVerificationPolicy based on CEL. This project will add e2e tests using Chainsaw for these new policy types.
- GitHub Issue: [Chainsaw testing](https://github.com/kyverno/kyverno/issues/12065)
- Recommended Skills: Golang, Kubernetes, ValidatingAdmissionPolicy
- Mentor(s):  Charles-Edouard Brétéché (@eddycharly, charles.edouard@nirmata.com)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d9683d35-0ad4-4c32-b32d-f058d37cf94f

#### Sample Policies For New Policy Types

- Description:  Kyverno 1.14 is introducing new policy types based on the upstream Kubernetes ValidatingAdmissionPolicy and MutatingAdmissionPolicy resources, as well as a new ImageVerificationPolicy based on CEL.  This project will focus on the website and sample policy updates using the new policy types.
- GitHub Issue: https://github.com/kyverno/kyverno/issues/12085 
- Recommended Skills: Golang, Kubernetes, ValidatingAdmissionPolicy, MutatingAdmissionPolicy
- Mentor(s): Jim Bugwadia [@JimBugwadia](https://github.com/JimBugwadia)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/59295005-33de-4665-82b5-d315d108da31

#### Mutating Admission Policy Integration
- Description: This project will focus on Integrating the new Kubernetes MutatingAdmissionPolicy with Kyverno CLI for the apply and test commands. 
- GitHub Issue: https://github.com/kyverno/kyverno/issues/10573
- Recommended Skills: Golang, Kubernetes, MutatingAdmissionPolicy
- Mentor(s): Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com), Shuting Zhao (@realshuting, shuting@nirmata.com)
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1db4df12-49f2-467e-93c2-1625e462eb20

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

### Meshery

#### Meshery Model Support for kro ResourceGraphDefinitions (RGDs)

- Description: Enhance Meshery's existing orchestration capabilities to include support for kro ResourceGraphDefinitions (RGDs) as first-class [Meshery Models](https://docs.meshery.io/concepts/logical/models). This involves enabling Meshery to manage and orchestrate RGDs, similar to how it handles other Kubernetes resources.  The project will also include generating support for ResourceGraphDefinition in Meshery's Model generator.

- Expected Outcome:  Meshery will be able to orchestrate and manage kro RGDs.  This includes the ability to deploy, configure, and manage the lifecycle of RGDs through Meshery.  The Meshery Model generator will be updated to automatically generate models for kro RGDs, simplifying their integration and management within Meshery. This will be an officially supported feature of Meshery.
- Recommended Skills: Golang, Cuelang, Well-written and well-spoken English, Kubernetes, DevOps
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Mia Grenell (@miacycle, mia.grenell2337@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/13520
- LFX URL: https://crowdfunding.lfx.linuxfoundation.org/projects/2ce4cf0b-05e0-430a-b9e1-3df46d917ef6

#### Hands-on tutorials using Meshery Playground

- Description: Learning paths with hands-on labs are a crucial resource for DevOps engineers and cloud-native practitioners. The Meshery Playground provides a live cluster environment, making it an ideal platform for learning every kind of cloud and cloud native technology. Meshery Docs is in need of comprehensive tutorials and scenarios covering common infrastructure management use cases.

Your mission in this internship is to create and publish a series of hands-on tutorials using Meshery Playground. Each tutorial will include step-by-step guides, live demonstrations, and interactive labs using the Playground allowing learners to apply their knowledge directly without the hassle of any configuration.These tutorials will be reviewed by various project maintainers and then published in [guides/tutorials](https://docs.meshery.io/guides/tutorials).

- Expected Outcome:
  - 10+ new tutorials published in Meshery Docs.
  - Each tutorial should be interactive, guiding users through infrastructure management scenarios.
  - Tutorials should vary in complexity, catering to beginners and advanced learners
- Recommended Skills: written English, Markdown, Kubernetes, DevOps, and hands-on experience with cloud-native tools.
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), James Horti (@hortison, james.horton2337@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/13521
- LFX URL: https://crowdfunding.lfx.linuxfoundation.org/projects/4cca92b8-ede6-4396-8d3f-68cfa2ec911c

#### Expanding end-to-end test coverage in Meshery using Playwright

- Description: Meshery integrates with many other CNCF projects and technologies. Sustaining those integrations is only possible through automation. To automate functional integration and end-to-end testing, Meshery now uses Playwright as one of the tools for browser testing. End-to-end tests run with each pull request to ensure that changes do not break existing functionality.

Expanding the coverage of E2E tests is crucial to improving the reliability of Meshery’s UI and workflows. This project focuses on writing Playwright-based tests for more Meshery components, ensuring robust test coverage across the platform.

- Expected Outcome:
  - Development of comprehensive E2E test cases for additional Meshery components using Playwright.
- Recommended Skills: JavaScript, Playwright, GitHub Workflows, familiarity with React or Nextjs would be helpful, CI/CD
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Aabid Sofi (@aabidsofi19, mailtoaabid01@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/13514
- LFX URL: https://crowdfunding.lfx.linuxfoundation.org/projects/abd10fed-e03f-4425-863e-157accfe354f

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

### OpenKruise

#### Implement Fuzz testing for OpenKruise

- Description: Implement fuzz testing for OpenKruise using a suitale tool like oss-fuzz. Generate a comprehensive input set to guide the fuzz testing, and identify features that accept complex user inputs for testing. Document the entire process for repeatability in future versions and integrate the fuzz testing into CI pipeline.
- Expected Outcome:
  - Add a fuzz test that covers important features including workoadspread,uniteddeployment, sidecarset and resourcedistribution.
  - Enable continuous fuzzing using [OSS-Fuzz](https://github.com/google/oss-fuzz).
- Recommended Skills: Go, Kubernetes, Fuzz Testing Experience
- Mentor(s):
  - Zhang Zhen (@furykerry, furykerry@gmail.com)
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
- Upstream Issue: https://github.com/openkruise/kruise/issues/1713
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/82bfa5b9-67a9-41ce-ba8b-f027cda4521e

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
    - Andrej Kiripolsky (@AndrejKiri, andrej.kiripolsky@gmail.com)
- Upstream Issue: https://github.com/prometheus/prometheus/issues/15909
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/36e3f336-ce78-4074-b833-012015eb59be

### Thanos

#### Add support for new PromQL aggregations

Thanos (https://thanos.io) has its own PromQL (Prometheus (https://prometheus.io) querying language) engine. The original PromQL engine recently added support for new aggregations. We are missing support for them in the Thanos PromQL engine (https://github.com/thanos-io/promql-engine).

In this project you will implement support for `limitk` and `limit_ratio`. See issue (https://github.com/thanos-io/promql-engine/issues/515). This will unblock users who need this functionality.

The project is interesting because you will learn how query engines are implemented, about distributed query execution.

- Expected Outcome: `limitk`, `limit_ratio` are supported in the Thanos PromQL engine (local & distributed modes), tests are written for them
- Recommended Skills: Go programming language experience
- Mentor(s): #
  - Giedrius Statkevičius (@GiedriusS, giedriuswork@gmail.com)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue (URL): https://github.com/thanos-io/promql-engine/issues/515
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d58c0d26-e276-4ca5-b2ca-21e6582fbcf7

### TUF

#### Metadata Repository Visualization

A [TUF](https://theupdateframework.com/) metadata repository consists of signed metadata files, which are read by TUF clients when securely downloading artifacts. The [metadata](https://theupdateframework.com/docs/metadata/) contains information about the artifacts and about the metadata itself, most notably, who is trusted to sign what.

A suitable visual representation of this trust hierarchy makes TUF's security properties more accessible to end-users, and, more importantly, allows metadata signers to carefully review metadata changes before signing them.

In this project you will, together with your mentor and the TUF community, identify requirements for the visualization of a TUF metadata repository and build a corresponding web app.

- Expected Outcome: Identify requirements and build a basic web app to visualize TUF metadata. *(Initial requirements may be inspired by the `tuf-on-ci` use case.)*
- Recommended Skills: Front-end web development, Information Visualization
- Mentor(s): # 
  - Lukas Pühringer (@lukpueh, lukas.puehringer@nyu.edu) - primary
  - Jussi Kukkonen (@jku, jku@goto.fi)
- Upstream Issue (URL): https://github.com/theupdateframework/specification/issues/312
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

### Volcano

#### Volcano supports queue-level scheduling policies

- Description: Volcano supports unified scheduling of online and offline workloads, provides a wealth of scheduling plugins and algorithms, and can distinguish different tenants through queue distinction. The current scheduling policy is a global configuration, and all jobs in the queue use the same scheduling policy, but in actual scenarios, different tenants may need to use different scheduling policies due to different usage scenarios. Therefore, volcano needs to support setting and using different scheduling policies at the queue level instead of using a globally unified scheduling policy.
- Expected Outcome:
  - A new field is added to the queue CRD, and users can set scheduling policies at the queue level.
  - Volcano scheduler implements different scheduling policies based on the queue in which the job is located.
- Recommended Skills: Kubernetes, GO, Volcano
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3992
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a785c059-fb70-41aa-88a2-62692ab2ca98

#### Coordinate descheduler and Volcano to support resource defragmentation

- Description: Volcano community has provided Volcano descheduler to support descheduling. Currently, load-aware rescheduling is supported. Resource fragmentation is a problem that users are more concerned about. Volcano needs to provide a resource defragmentation strategy based on the existing descheduler, and needs to ensure that the evicted pods can be rescheduled successfully, which requires the cooperation of the rescheduler and the scheduler to solve resource fragmentation and maximize resource utilization.
- Expected Outcome:
  - Implementing a resource defragmentation strategy based on Volcano descheduler.
  - The Volcano descheduler works in conjunction with the Volcano scheduler to ensure that evicted pods can be re-scheduled successfully.
- Recommended Skills: Kubernetes, GO, Volcano
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3948
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/607246c3-f48b-446c-a7cc-10c0068c553f

#### Volcano dashboard feature enhancements

- Description: Volcano dashboard is a volcano resource front-end display tool. Currently, it only supports viewing resources, and the resources displayed are limited. It needs to support viewing more resources, and supports operations such as creation and deletion.
- Expected Outcome:
  - Supports viewing resources other than volcano related resources.
  - Supports add, delete, modify and query resources such as queues and volcano jobs.
- Recommended Skills: Kubernetes, React, Node, JS
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/dashboard/issues/11
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/438c1fec-d3d3-4ab0-82ce-499993f8b681

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
