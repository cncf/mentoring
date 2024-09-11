# Term 03 - 2024 September - November

Status: Ongoing

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity                                                                                                     | date                                                                                |
|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|   
| project proposals                                                                                            | Jul 3 - Jul 30 5:00 PM PDT                                                          |
| mentee applications open                                                                                     | Jul 31 - Aug 13 5:00 PM PDT                                                         |
| application review/admission decisions                                                                       | Aug 14 - Aug 27 5:00 PM PDT                                                         |
| selection notifications                                                                                      | Sept 3, 2024 5:00 PM PDT                                                            |
| Mentorship program begins with the initial work assignments                                                  | Sept 9, 2024                                                                        | 
| Midterm mentee evaluations and first stipend payments                                                        | October 15, 2024 5:00 PM PDT (the week following the National Day holiday in China) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Nov 26, 2024 5:00 PM PDT (Giving some time after KubeCon NA)                        |
| Last day of term                                                                                             | November 29, 2024                                                                   |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here [2024/03-Sep-Nov/project_ideas.md](./project_ideas.md), by July 23, 2024.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Accepted projects

<!-- TOC -->
* [Antrea](#antrea)
  * [Support application-level DNS caches when using FQDN-based security rules](#support-application-level-dns-caches-when-using-fqdn-based-security-rules)
* [CNCF TAG Network](#cncf-tag-network)
  * [Interrelating Kubernetes Resources: Identifying relationships between all standard and custom resources](#interrelating-kubernetes-resources-identifying-relationships-between-all-standard-and-custom-resources)
  * [CNCF Challenges: Technical Content Creation](#cncf-challenges-technical-content-creation)
* [Envoy Gateway](#envoy-gateway)
  * [IPv4/IPv6 Dual Stack Support](#ipv4ipv6-dual-stack-support)
* [Harbor](#harbor)
  * [Harbor CLI](#harbor-cli)
  * [Harbor Satellite](#harbor-satellite)
* [Inspektor Gadget](#inspektor-gadget)
  * [New gadget for detecting deadlocks](#new-gadget-for-detecting-deadlocks)
  * [Testing Inspektor Gadget gadgets on different kernel versions](#testing-inspektor-gadget-gadgets-on-different-kernel-versions)
  * [Exploring Chaos Engineering with eBPF and Inspektor Gadget](#exploring-chaos-engineering-with-ebpf-and-inspektor-gadget)
  * [Develop DNS/HTTP event generation capabilities in Inspektor Gadget](#develop-dnshttp-event-generation-capabilities-in-inspektor-gadget)
* [Istio](#istio)
  * [Improve documentation build infrastructure](#improve-documentation-build-infrastructure)
  * [Implement new site search](#implement-new-site-search)
* [Jaeger](#jaeger)
  * [Jaeger v2 Kubernetes Operator](#jaeger-v2-kubernetes-operator)
  * [Jaeger v2 Helm Chart](#jaeger-v2-helm-chart)
* [Karmada](#karmada)
  * [Collect and visualize Karmada metrics](#collect-and-visualize-karmada-metrics)
  * [Enhance Karmada controller-manager and schedule testing coverage](#enhance-karmada-controller-manager-and-schedule-testing-coverage)
  * [Enhance the test coverage for the Karmada search, operator, and webhook components](#enhance-the-test-coverage-for-the-karmada-search-operator-and-webhook-components)
* [KCL](#kcl)
  * [New local dependency storage for KCL package management tool](#new-local-dependency-storage-for-kcl-package-management-tool)
  * [The checksum check of the three-party dependencies](#the-checksum-check-of-the-three-party-dependencies)
  * [KCL Language Server Protocol Support on Lsp4IJ for Jetbrains IDEs](#kcl-language-server-protocol-support-on-lsp4ij-for-jetbrains-ides)
* [Konveyor AI](#konveyor-ai)
  * [Intelli-j IDE plugin integration of analyzer-lsp for real time updates with Konveyor AI](#intelli-j-ide-plugin-integration-of-analyzer-lsp-for-real-time-updates-with-konveyor-ai)
  * [Enhancing Kai with Data Querying for Fine-Tuning and Potential InstructLab Integration](#enhancing-kai-with-data-querying-for-fine-tuning-and-potential-instructlab-integration)
* [KubeArmor](#kubearmor)
  * [Implement Fuzz testing for KubeArmor Components](#implement-fuzz-testing-for-kubearmor-components)
  * [Support Podman and OCI Hooks support for unorchestrated environments](#support-podman-and-oci-hooks-support-for-unorchestrated-environments)
  * [Non K8s KubeArmor Enhancements](#non-k8s-kubearmor-enhancements)
* [KubeEdge](#kubeedge)
  * [Decouple the node cooperation ability and batch management ability of the edgeapplication](#decouple-the-node-cooperation-ability-and-batch-management-ability-of-the-edgeapplication-)
  * [Elastic Inference for Deep Learning Models Using KubeEdge](#elastic-inference-for-deep-learning-models-using-kubeedge-)
  * [Multimodal Large Model Joint Learning Algorithm: Reproduction Based on KubeEdge-Ianvs](#multimodal-large-model-joint-learning-algorithm-reproduction-based-on-kubeedge-ianvs)
  * [Cloud-edge collaborative speculative decoding for LLM based on KubeEdge-Ianvs](#cloud-edge-collaborative-speculative-decoding-for-llm-based-on-kubeedge-ianvs)
  * [Integrate KubeEdge, Sedna, and Volcano for High-Performance Training Task Scheduling](#integrate-kubeedge-sedna-and-volcano-for-high-performance-training-task-scheduling-)
* [Kubernetes](#kubernetes)
  * [Testeable documentation for the Pod Lifecycle events](#testeable-documentation-for-the-pod-lifecycle-events)
* [Kyverno](#kyverno)
  * [Cleanup policy - Add deletion propagation support](#cleanup-policy---add-deletion-propagation-support)
  * [Controller autogen - Implement new approach to autogen](#controller-autogen---implement-new-approach-to-autogen)
  * [Kyverno CLI for the Mutate Existing Rule](#kyverno-cli-for-the-mutate-existing-rule)
  * [Policy Exceptions 3.0](#policy-exceptions-30)
* [Meshery](#meshery)
  * [Meshery: End-to-End Testing with Playwright (Round 2)](#meshery-end-to-end-testing-with-playwright-round-2)
  * [Meshery: Migrate APIs to be schema-driven](#meshery-migrate-apis-to-be-schema-driven)
  * [Meshery: UI Migration from MUI v4 to MUI v5 and Sistent](#meshery-ui-migration-from-mui-v4-to-mui-v5-and-sistent)
* [OpenKruise](#openkruise)
  * [Visualize Kruise Rollout progress with kubectl plugin](#visualize-kruise-rollout-progress-with-kubectl-plugin)
  * [Game operation and maintenance API](#game-operation-and-maintenance-api)
* [Prometheus](#prometheus)
  * [Enhance Prometheus Benchmark Suite](#enhance-prometheus-benchmark-suite)
  * [Prometheus Remote-Write v2 support in otel-collector's `prometheusremotewriteexporter`.](#prometheus-remote-write-v2-support-in-otel-collectors-prometheusremotewriteexporter)
* [Service Mesh Performance](#service-mesh-performance)
  * [CNCF Project Performance Test Dashboard](#cncf-project-performance-test-dashboard)
* [Thanos](#thanos)
  * [Add support for hedged requests](#add-support-for-hedged-requests)
* [Vitess](#vitess)
  * [Add new getting started examples](#add-new-getting-started-examples)
* [WasmEdge](#wasmedge)
  * [WASM Serializer with new proposals](#wasm-serializer-with-new-proposals)
  * [Fix bugs found by fuzzer](#fix-bugs-found-by-fuzzer)
  * [Create an LLM app with deep understanding of a GitHub repo](#create-an-llm-app-with-deep-understanding-of-a-github-repo)
  * [Create a Wasm-based LLM app for financial analysts](#create-a-wasm-based-llm-app-for-financial-analysts)
<!-- TOC -->

### Antrea

#### Support application-level DNS caches when using FQDN-based security rules

CNCF - Antrea: Application-Level DNS Caches for FQDN-Based Security Rules (2024 Term 3)

- Description: Antrea provides [Network Policy APIs](https://github.com/antrea-io/antrea/blob/main/docs/antrea-network-policy.md) (in the form of K8s CRDs) for K8s cluster administrators and application developers to declare security rules in order to protect workloads. These APIs complement the [Network Policies supported natively in K8s](https://kubernetes.io/docs/concepts/services-networking/network-policies/). When using the Antrea-specific Network Policy APIs, it is possible to use Fully Qualified Domain Names (FQDNs) in order to select the list of external domains with which a K8s application is allowed to communicate, or forbidden from communicating. The current implementation of this feature is not compatible with applications which directly cache the result of DNS queries. We have found that this type of caching is frequent for Java applications, which greatly impacts the usability of FQDN-based security rules. We believe that by defining a new configuration parameter for the Antrea implementation, we can bypass the issue and ensure that the feature can be used even with such applications, providing of course that the parameter is set correctly by users.
- Expected Outcome: Definition and implementation of a new configuration parameter (`minTLS`) for the Antrea Agent, which will ensure that FQDN-based security rules can be used even with application that cache DNS results. The implementation should come with a sufficient amount of tests (both unit tests and e2e tests), ensuring that the feature is working as expected.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, basic knowledge about networking in particular of the DNS protocol.
- Mentor(s):
  - Quan Tian (@tnqn, tianquan23@gmail.com)
  - Yang Ding (@Dyanngg, dingyany1995@outlook.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/6229
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/99e8e0a0-4d82-4ac5-88bc-55b1d1a2c1f4

### CNCF TAG Network

#### Interrelating Kubernetes Resources: Identifying relationships between all standard and custom resources

CNCF - TAG Network: Relating Standard and Custom Kubernetes Resources (2024 Term 3)

- Description: The OpenAPI specifications for Kubernetes provides taxonomy, but augmenting a graph data model with formalized ontologies enables any number of capabilities, one of the more straightforward is the inferencing requisite for natural language processing, and consequently, a human-centric query / response interaction becomes becomes possible. More importantly, more advanced systems can be built when a graph data model of connected systems is upgraded to be a knowledge semantic graph.
- Expected Outcome: 
  - YAML-formatted definition of one or more relationships per Kubernetes resource.
  - Documentation of each relationship - per component.
  - Development of new types of genealogies - new types of ways in which resources relate to one another and how these relationships might be visualized.
  - Verification of functional relationships
- Recommended Skills: DevOps, Kubernetes Administration, Light familiarity with all of the CNCF projects and a desire to study each project and their operators/resources.
- Mentor(s):
  - Mentor Name: Uzair Shaikh (@muzairs15, muzair.shaikh810@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com),
- Upstream Issue: https://github.com/cncf/tag-network/issues/43
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9a276131-1dd9-4816-8518-3da2ce9b6fb1

#### CNCF Challenges: Technical Content Creation

CNCF - TAG Network: CNCF Challenges: Technical Content Creation (2024 Term 3)

- Description: On a periodic basis, the CNCF would like to present a public challenge to those that are interested in participating (e.g. “Challenge: Distributed Tracing with Jaeger”).

Your mission in this internship is technical content creation of said challenges through use of markdown, Meshery, and any number of other CNCF projects. Challenges will be created using the Meshery Playground and published (in what is potentially the CNCF Hub). They will be similar too, but slightly different from these [example tutorials](https://docs.meshery.io/guides/tutorials/).

Understand that your challenges will be promoted through CNCF channels, reviewed by various project maintainers, and that each challenger (participant) will receive a certain number of points, depending upon whether or not they successfully complete the challenges that you create and in what timeframe they complete those challenges (the faster, the more points). Your challenges will need to vary in level of difficulty. 

- Expected Outcome:
  - 5+ new challenges published
  - Challenges can contain more than one objective. Points are earned for each objective completed.
  - Bonus: Extend one or more of Meshery’s Learning Paths.

- Recommended Skills: written English, Kubernetes, DevOps, and familiarity with any number of other CNCF projects, like Prometheus, CoreDNS, Istio, Jaeger, Helm, Harbor, OPA, Rook, SPIFEE, Flux, Argo, Flux, Falco, etc., Jekyll, strong organizational skills
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Nic Jackson (@nicholasjackson), jackson.nic@gmail.com)
- Upstream Issue: https://github.com/cncf/tag-network/issues/44
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5c1b69c5-2315-4ec2-8883-7d59f1650a11

### Envoy Gateway

#### IPv4/IPv6 Dual Stack Support

CNCF - Envoy Gateway: IPv4/IPv6 Dual Stack Support (2024 Term 3)

- Description: Envoy Gateway is an open source project for managing Envoy Proxy as a standalone or Kubernetes-based application gateway. Gateway API resources are used to dynamically provision and configure the managed Envoy Proxies. Currently the implementation only supports Kubernetes clusters with IPv4 enabled, and not IPv6
- Expected Outcome:
  The managed Envoy Proxy fleet can
  - Accept connections/listen on an interface that has an IPv6 address assigned to it
  - Can route to IPv6 pod endpoints/addresses
- Recommended Skills: Golang, familiarity with Kubernetes Networking
- Mentor(s):
  - Jianpeng He (@zirain, zirain@tetrate.io)
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/184
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/408607a5-22a7-469e-ba9b-773e8fb06ace

### Harbor

#### Harbor CLI

CNCF - Harbor: Harbor CLI (2024 Term 3)

- Description: Harbor is a popular and widely adopted container registry. LFX manatees have developed an initial CLI (https://github.com/goharbor/harbor-cli) that we would like to extend and implement additional functionality, and common workflows that are currently only present in the Web UI. We are seeking a Golang experienced manatee who can work on the project independently.
- Expected Outcome: Working Golang Harbor CLI which can be used in the CI/CD implementations that compliment the Web UI covering the typical workflows of Harbor administrators and users. Familiarity with Golang library spf13/cobra and REST/Open API. Well-documented CLI that users love to use, and with the corresponding architectural diagrams under the Harbor. Working CI/CD with GitHub actions that create multi architecture binaries and containers.
- Recommended Skills: Golang, spf13/cobra
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Yan Wang (@wy65701436, yan-yw.wang@broadcom.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/goharbor/harbor-cli/issues/142
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/11beb7c5-02b3-4f33-9dc5-3480a43b0869

#### Harbor Satellite

- Description: Containers have extended beyond their traditional cloud environments, becoming increasingly prevalent in remote and edge computing contexts. These environments often lack reliable internet connectivity, posing significant challenges in managing and running containerized applications due to difficulties in fetching container images. To address this, the project aims to decentralize container registries, making them more accessible to edge devices.

- Expected Outcome:
  The goal is to extend the proof of concept 
  and demonstrate that such a solution practically works.
  Candidates should be able understanding and implementing the [image](https://github.com/opencontainers/image-spec) and [distribution spec](https://github.com/opencontainers/distribution-spec)
  to replicate images from a central registry to a registry on the edge location.
- Recommended Skills: Golang, Container, Image-spec, Distribution-spec
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Yan Wang (@wy65701436, yan-yw.wang@broadcom.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/goharbor/harbor/issues/20790
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ed963c1b-6697-4b3f-bef6-578cd9722f47

### Inspektor Gadget

#### New gadget for detecting deadlocks

CNCF - Inspektor Gadget: New gadget for detecting deadlocks (2024 Term 3)

- Description: Inspektor Gadget is an eBPF tool and systems inspection framework for Kubernetes, containers and Linux hosts. In this project, you will write a new gadget in BPF and WASM to detect deadlocks in applications. The BPF program will be attached on mutex locks and mutex unlocks functions with uprobes. The WASM program will build a mutex wait directed graph and look for cycles. Then, the gadget will display the stack trace showing the mutex locks causing the deadlock.

    This project builds upon previous work:

  - In a previous mentorship project, Inspektor Gadget gained support for uprobes and kernel stack traces (https://www.inspektor-gadget.io/blog/2024/06/supporting-uprobe-based-gadgets-lfx-mentorship-report/).
  - BCC tools include deadlock.py doing the same: https://github.com/iovisor/bcc/blob/master/tools/deadlock_example.txt and https://github.com/iovisor/bcc/blob/master/tools/deadlock.py

    However, this project still has challenging issues to resolve:

  - Inspektor Gadget does not support dumping stack traces from userspace applications yet

- Expected Outcome: A new gadget detects lock order inversion and prints the stack traces where each mutex was acquired.

- Recommended Skills: Go, BPF, WASM, graph data structure

- Mentor(s):
  - Alban Crequy (@alban, albancrequy@microsoft.com)
  - Burak Ok (@burak-ok, burakok@microsoft.com)

- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3194
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7fdda09c-0eb8-466b-9fdf-e4b3c6a1d5b3

#### Testing Inspektor Gadget gadgets on different kernel versions

CNCF - Inspektor Gadget: Testing Inspektor Gadget gadgets on different kernel versions (2024 Term 3)

- Description: The Inspektor Gadget gadgets are heavily coupled to the kernel version as they need to access internal kernel data and use different eBPF features. One key feature for Inspektor Gadget is to hide all this complexity from its users: the gadgets should work the same regardless the kernel version they’re running in. To be sure our gadgets (and Inspektor Gadget too) are working fine, we need to run tests on different kernel versions we want to support.

    The purpose of this mentorship is to develop a framework that allows gadget developers to (1) implement unit tests for their gadgets (2) and run them on different kernel versions. A previous mentorship successfully implemented a framework for running integration tests (https://github.com/inspektor-gadget/inspektor-gadget/pull/2607), now it’s time to extend that framework to allow running unit tests as well. Some preliminary investigation done in (https://github.com/inspektor-gadget/inspektor-gadget/pull/2638) explored the possibility to use https://github.com/lmb/vimto, it seems it’s the right tool for the job.

Expected Outcome: Gadget developers have a way to run unit tests in different kernel versions for their gadgets in their CI platform

- Recommended Skills: Golang

- Mentor(s):
  - Mauricio Vasquez Bernal (@mauriciovasquezbernal, mauriciov@microsoft.com)
  - Alban Crequy (@alban, albancrequy@microsoft.com)

- Upstream Issue:
  - https://github.com/inspektor-gadget/inspektor-gadget/issues/3195
  - https://github.com/inspektor-gadget/inspektor-gadget/issues/1343
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a0e8bcc0-5c52-48ec-9959-506ce27ad46e

#### Exploring Chaos Engineering with eBPF and Inspektor Gadget

CNCF - Inspektor Gadget: Exploring Chaos Engineering with eBPF and Inspektor Gadget (2024 Term 3)

- Description: Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system’s capability to withstand turbulent conditions in production, ref. https://principlesofchaos.org/, i.e. to induce errors on a system and see how it behaves. eBPF can be used to induce such errors on a system, it can change the return value of a kernel function, drop or modify network packets, etc.

    The goal of this mentorship is to implement a set of gadgets for Inspektor Gadget that helps causing system chaos. These are some ideas of the gadgets that should be implemented:

  - DNS: Drop/modify/add latency DNS requests and/or responses based on
    - The container or process performing it
      - The target URL
      - The DNS server
    - TCP/UDP: Drop network packets based on
      - Destination / Source IPs
      - Originating or destination pod or process
    - Simulate system call failures based on
      - Container or process performing the syscall
      - Syscall

    The gadgets should expose metrics with the number of times it induced failures, and possibly also provide notifications when those errors were induced.

- Expected Outcome: A set of gadgets with the above functionality should be implemented and merged on the upstream Inspektor Gadget repository. Those gadgets should include documentation and tests.

- Recommended Skills: Golang, eBPF, networking protocols.

- Mentor(s):
  - Michael Friese (@flyth, mfriese@microsoft.com)
  - Mauricio Vasquez Bernal (@mauriciovasquezbernal, mauriciov@microsoft.com)

- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3196
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c99b5a1f-a1e8-4a9c-93f1-3ee965dabbae

#### Develop DNS/HTTP event generation capabilities in Inspektor Gadget

CNCF - Inspektor Gadget: DNS/HTTP Event Generation Capabilities (2024 Term 3)

- Description: Inspektor Gadget enables users to inspect Linux containers and Kubernetes workloads, offering the powerful capability to monitor traffic for currently running applications. So far, gadgets can only passively monitor events, the ability to generate specific events would be a great addition to the existing features. For example, if users could trigger a DNS request from a specific pod or make an HTTP request to a particular endpoint, Inspektor Gadget could check if the request succeeded or not. Users would then be notified if there are errors/outages/problems in the cluster.

- Expected Outcome: As part of the mentorship, you will:

    1. Explore the best way to implement event generation, external program vs implementing it within Inspektor Gadget.
    2. Develop DNS/HTTP event generator and see how it works with gadgets.
    3. Use the event generation in our integration testing.

- Recommended Skills: Golang, Kubernetes and Understanding of DNS/HTTP protocols.

- Mentor(s):
  - Qasim Sarfraz (@mqasimsarfraz, qasimsarfraz@microsoft.com)
  - Burak Ok (@burak-ok, burakok@microsoft.com)

- Upstream Issue: https://github.com/inspektor-gadget/inspektor-gadget/issues/3193
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c7ba30b5-625d-4086-ad09-c60071e01a8c

### Istio

#### Improve documentation build infrastructure

CNCF - Istio: Improve documentation build infrastructure (2024 Term 3)

- Description: The build infrastructure for istio.io currently carries a complete archived copy of the site for each release of Istio.  These archived versions should be separated to their own branch, with only the supported versions published.  We should also separate out content which is not version-specific (e.g. the home page, news and blogs) so that only the latest version of this content is visible online.
- Expected Outcome: Updated publishing infrastructure for istio.io which separates evergreen content (home page, blogs) with versioned content (documentation).  Drop-downs per docs page allow switching between the supported versions.  
- Recommended Skills: Systems engineering, scripting, programming (Go/Bash), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15463
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7a9cac67-6cfc-4915-bc39-8f2b5c1a4d00

#### Implement new site search

CNCF - Istio: Implement new site search (2024 Term 3)

- Description: Up to four versions of Istio are supported at one time, and so the documentation for each must be available. Our current site search is outdated and needs to be replaced, so that the search content only exists in the site search, and only fresh content is available on google.com.
- Expected Outcome: Working site search on istio.io, which lets you search for content for the currently supported versions.
- Recommended Skills: Hugo, Systems engineering, scripting, programming (Bash/go), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15464
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/557f553d-6cab-41e5-925e-c8063dc99d7e

### Jaeger

#### Jaeger v2 Kubernetes Operator

CNCF - Jaeger: Jaeger v2 Kubernetes Operator (2024 Term 3)

- Description: Jaeger-v1 has its own Kubernetes Operator (https://github.com/jaegertracing/jaeger-operator) which deploys Jaeger components according to the deployment strategy as well as the database or datastore. The goal of this project is to develop a new operator for [Jaeger-v2](https://github.com/jaegertracing/jaeger/issues/4843) that achieves feature parity with the v1 operator while introducing improvements and new capabilities. This new operator will leverage the [OpenTelemetry operator](https://github.com/open-telemetry/opentelemetry-operator) for Jaeger-v2 deployment while maintaining and enhancing the storage management features from the v1 operator. More details in the [upstream issue](https://github.com/jaegertracing/jaeger/issues/5766).
- Expected Outcome: By the end of this project, we aim to achieve full feature parity between the Jaeger v2 operator and the v1 operator, with the added benefits of OpenTelemetry integration. The new operator will provide a seamless experience for users, maintaining the robustness and flexibility of v1 while introducing the advantages of v2 and OpenTelemetry.
- Recommended Skills: Go, scripting, kubernetes, operator framework, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5766
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f15ad171-503c-41ae-b573-1e3088312dba

#### Jaeger v2 Helm Chart

- Description: Currently, Jaeger v1 has an official Helm chart (https://github.com/jaegertracing/helm-charts), but there isn't one yet for Jaeger v2. The goal of this project is to develop a comprehensive Helm chart for Jaeger v2 that allows for easy deployment and management of Jaeger v2 components in Kubernetes environments. This chart should provide flexibility in configuration, support various deployment scenarios, and integrate well with the new architecture of Jaeger v2. More details in the [upstream issue](https://github.com/jaegertracing/jaeger/issues/5767).
- Expected Outcome: By the end of this project, we aim to have a production-ready Helm chart for Jaeger v2 that is:
 - Fully functional and tested on the current version of Kubernetes
 - Well-documented with clear usage instructions and examples
 - Flexible enough to support a wide range of deployment scenarios
 - Ready for submission to the official Jaeger Helm chart repository
- Recommended Skills: Go, scripting, kubernetes, helm, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5767
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/330c6397-06ed-481c-8c86-13fdcbce3896

### Karmada

#### Collect and visualize Karmada metrics

CNCF - Karmada: Collect and visualize Karmada metrics (2024 Term 3)

- Description: Karmada dashboard now supports one-time metric retrieval, but it is difficult to observe the status of multi-clusters with one-time metric retrieval. Therefore, we would like to implement a lightweight metric collection capability to collect Karmada metrics and visualize them on the Karmada dashboard. This will allow cluster administrators to quickly get the status of the clusters and solve problems within the clusters.
- Expected Outcome:
  - Metric Collection and Storage Design Document
  - Query Analysis Interface & Front-end Visualization
- Recommended Skills:
  - Kubernetes
  - Go
  - gin
  - react
  - sqlite
- Mentor(s):
  - Wenjiang Ding (@warjiang, 1096409085@qq.com)
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/dashboard/issues/62
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5af36c01-f146-4092-8920-97322df6589c

#### Enhance Karmada controller-manager and schedule testing coverage

CNCF - Karmada: Enhance Karmada controller-manager and schedule testing coverage (2024 Term 3)

- Description: Karmada would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects. Increase the UT coverage rate to 50% to 60% (currently, the UT coverage rate is [28.26%](https://app.codecov.io/gh/karmada-io/karmada) ). The entire Karmada repository is a bit large for one project, so we will split it into two projects. The current parts mainly target the `karmada-controller-manager` and `karmada-scheduler` components.
- Expected Outcome:
  - Increase the UT (Unit Test) coverage by more than 25% and add more than 4000 lines of code coverage in the following directories.
```
pkg/controllers
pkg/dependenciesdistributor
pkg/descheduler
pkg/detector
pkg/estimator
pkg/scheduler
pkg/resourceinterpreter
pkg/util
```
- Recommended Skills:
  - Go
  - Cloud Native
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Zhuang Zhang (@zhzhuang-zju, m17799853869@163.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/5235
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/78bd7568-0f36-4648-8a5c-2ba6444ac76a

#### Enhance the test coverage for the Karmada search, operator, and webhook components

CNCF - Karmada: Enhance Test Coverage for Search, Operator, and Webhook Components (2024 Term 3)

- Description: Karmada would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects. Increase the UT coverage rate to 50% to 60% (currently, the UT coverage rate is [28.26%](https://app.codecov.io/gh/karmada-io/karmada) ). The entire Karmada repository is a bit large for one project, so we will split it into two projects. The current focus is mainly on `karmada-search`, `karmada-operator`, `karmada-webhook` components.
- Expected Outcome:
  - Increase the UT (Unit Test) coverage by more than 25% and add more than 5500 lines of code coverage except for the following directories.
```
pkg/controllers
pkg/dependenciesdistributor
pkg/descheduler
pkg/detector
pkg/estimator
pkg/scheduler
pkg/resourceinterpreter
pkg/util
```
- Recommended Skills:
  - Go
  - Cloud Native
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Chaosi Pan (@chaosi-zju, chaosi@zju.edu.cn)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/5236
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1a732552-02b6-4b69-bbf6-d7ea12354e8d

### KCL

#### New local dependency storage for KCL package management tool

CNCF - KCL: New local dependency storage for KCL package management tool (2024 Term 3)

- Description: `kpm` is a package management tool for KCL. `kpm` needs to refactor the local storage structure of the current dependencies to support storage of packages with the same name from different OCI registes and caching of the remote dependencies.
- Expected Outcome: The local storage structure has been designed in issue https://github.com/kcl-lang/kpm/issues/384, and the feature in issue need to be implemented.
- Recommended Skills: golang
- Mentor(s):
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/384
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bf3f9155-df89-481d-ab8e-17c36a1d91da

#### The checksum check of the three-party dependencies

- Description: `kpm` is a package management tool for KCL. `kpm` currently lacks checksum verification for dependencies, so this part needs to be completed to support package integrity verification and package source verification

- Expected Outcome: Complete the workflow of adding checksum through `kpm` when uploading package and verifying checksum through `kpm` when downloading package
- Recommended Skills: golang
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Co-Mentor:
  - Akash Kumar (@AkashKumar7902, meakash7902@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/394
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ade2c7db-ce6e-4c9c-bb4d-8a9e6ff1cf17

#### KCL Language Server Protocol Support on Lsp4IJ for Jetbrains IDEs

- Description: Currently, the KCL IDE plug-in based on Jetbrains LSP cannot support all versions of Jetbrains IDE, so migrate the KCL IDE plug-in to Lsp4IJ to support all versions of Jetbrains IDE.

- Expected Outcome: KCL IDE plug-in is migrated to Lsp4IJ
- Recommended Skills: Java
- Mentor(s):
  - Zheng Zhang (@He1pa, he1pa404@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue (URL): https://github.com/kcl-lang/intellij-kcl-lsp/issues/3
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/dd72885b-3f85-44af-a176-dd04717fb6dc

### Konveyor AI

#### Intelli-j IDE plugin integration of analyzer-lsp for real time updates with Konveyor AI

CNCF - Konveyor AI: IntelliJ plugin for Real-Time Updates with analyzer-lsp (2024 Term 3)

- Description: Konveyor provides a unified experience of tools to help organizations modernize their applications at scale, transitioning them to Kubernetes and cloud-native technologies. Recently the Konveyor community began the development of a Generative AI approach for application modernization called Konveyor-AI.  Konveyor AI accelerates application migration by discovering migration incidents in the source code and providing LLM-generated fixes in a diff view presentation. When proposed changes are accepted, it provides real-time updates on the number of incidents.  The presentation side for this work is currently serviced via an IDE extension for VSCode.
We aim to expand Konveyor AI by developing an IntelliJ plugin. Our first step involves integrating the static code analysis tool, analyzer-lsp, into the IntelliJ plugin. We plan to create a common module for interaction with analyzer-lsp, which can be used in multiple IDE plugins, starting with VSCode and IntelliJ. Currently, the IntelliJ IDE uses the Konveyor CLI tool, Kantra, for analysis and transformation, but we need to replace Kantra with analyzer-lsp to optimize real-time updates.

- Expected Outcome:
Define and implement a new module or library to facilitate integration of analyzer-lsp into multiple IDEs.  We will start with VSCode and IntelliJ to begin.

- Recommended Skills: Typescript, Java, Basic software development skills (command line, git)

- Mentor(s):
  - Hiteshwari Patel (@hhpatel14, patelhiteshwari95@gmail.com)
  - Savitha Raghunathan (@sraghunathan, saveetha13@gmail.com)

- Upstream Issue: https://github.com/konveyor/enhancements/issues/187
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0d392e44-e3ce-4799-8082-35ae48910f24

#### Enhancing Kai with Data Querying for Fine-Tuning and Potential InstructLab Integration

CNCF - Konveyor AI: Data Querying for Kai & InstructLab Integration Potential (2024 Term 3)

- Description:
  - Kai is a tool designed to leverage AI for application modernization by analyzing code, identifying issues, and suggesting fixes. We aim to enhance Kai by developing a robust data querying mechanism to facilitate fine-tuning processes. This enhancement will lay the groundwork for potential future integration with InstructLab, an open-source AI project enabling community contributions to Large Language Models (LLMs) by adding new skills or knowledge. The primary focus will be on creating mechanisms to query and utilize data effectively, with a stretch goal of integrating static analysis tools and implementing an agent-based workflow.
  - This project will significantly enhance Kai’s backend, making it more scalable and capable of providing deeper code insights while also contributing to the enrichment of LLMs through InstructLab. It will offer a rich learning experience for participating students, covering backend development, workflow management, and contributing to open-source AI projects.

- Expected Outcome:
  - Successfully develop and implement a data querying mechanism in Kai to facilitate fine-tuning processes.
  - Demonstrate the enhanced backend with improved data querying capabilities.
  - Participate actively in community meetings, presenting progress and insights.
  - Create a detailed blog post documenting the project, its outcomes, and potential future directions, including the possible integration with InstructLab.
  - (Stretch Goal) Develop a reusable module for agent-based workflows into Kai, enhancing its ability to detect and report code issues.

- Recommended Skills:
  - Python
  - Podman / Docker
  - Basic Software Development skills (command line, git)
  
- Mentor(s):
  - Jonah Sussman (@JonahSussman, jsussman@redhat.com)
  - Fabian von Feilitzsch (@fabianvf, fvonfeil@redhat.com)

- Upstream Issue: https://github.com/konveyor/enhancements/issues/191
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8493016e-975f-4559-8833-db4c884b2fc5

### KubeArmor

#### Implement Fuzz testing for KubeArmor Components

CNCF - KubeArmor: Implement Fuzz testing for KubeArmor Components (2024 Term 3)

- Description: Implement fuzz testing for KubeArmor using a suitable tool like oss-fuzz or AFL. Generate a comprehensive input set to guide the fuzz testing, profile execution using tools like pprof to detect anomalies, and identify components such as the policy controller, operator, configmap handler, and GRPC endpoints for testing. Document the entire process for repeatability in future versions and develop an automation strategy for ongoing fuzz testing.
- Expected Outcome: Improved OSSF Score; Standards for Fuzz Testing for KubeArmor; Stabilization of KubeArmor
- Recommended Skills: Go, Kubernetes, Fuzz Testing Experience
- Mentor(s):
    - Barun Acharya (@daemon1024, barun1024@gmail.com)
    - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
    - Prateek Nandle (@Prateeknandle, prateeknandle@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1367
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/91bd7201-e83f-444c-9157-f82f4c56d060

#### Support Podman and OCI Hooks support for unorchestrated environments

CNCF - KubeArmor: Support Podman and OCI Hooks support for unorchestrated environments (2024 Term 3)

- Description: Leverage OCI hooks to obtain container start/stop events and container details for KubeArmor, replacing the current UNIX domain socket file method. Integrate Podman support for unorchestrated environments, ensuring policy enforcement and alerts/telemetry validation. Design the implementation to gather necessary container information and verify functionality with Podman as well as Containerd without Unix Socket.
- Expected Outcome: Work with Podman in rootless mode and Eliminate exposing UNIX domain sockets for other container runtimes
- Recommended Skills: Go, Container Runtime Interface, Linux
- Mentor(s):
    - Barun Acharya (@daemon1024, barun1024@gmail.com)
    - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
    - Abdulrahman Elawady (@AbdelrahmanElawady, abdoelawady125@gmail.com)
    - Rishabh Soni (@rootxrishabh, risrock02@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1814
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c693a6b1-d034-4140-8aba-dfe02fbef48a

#### Non K8s KubeArmor Enhancements

CNCF - KubeArmor: Non K8s KubeArmor Enhancements (2024 Term 3)

- Description: Extend KubeArmor features to non-Kubernetes environments by implementing karmor recommend for host policies and unorchestrated containers, and enabling dynamic configuration for default posture and visibility through kubearmor.yaml, a new gRPC service, and karmor commands. Enhance karmor profile for host logs, support karmor install for VMs, and validate policies for non-Kubernetes setups.
- Expected Outcome: User friendly KubeArmor functionality including Application Behaviour and Policy Management in non-Kubernetes environments.
- Recommended Skills: Go, Container Runtime Interface, Linux
- Mentor(s):
    - Barun Acharya (@daemon1024, barun1024@gmail.com)
    - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
    - Prateek Nandle (@Prateeknandle, prateeknandle@gmail.com)
    - Rishabh Soni (@rootxrishabh, risrock02@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1815
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/87d64083-e1fa-4aa4-a828-ca24e5ae96b3

### KubeEdge

#### Decouple the node cooperation ability and batch management ability of the edgeapplication 

CNCF - KubeEdge: Decouple Node Cooperation and Batch Management in EdgeApplication (2024 Term 3)

- Description: EdgeApplication can be overrides deployment spec(i.e. replicas, image, commands and environments) via the node group, and pod traffics are closed-loop in a node group(Deployments managed by EdgeApplication share a Service). But in the real scenario, the scope of nodes that need batch operations is different from that of nodes that need to collaborate with each other. Therefore, we need to have a solution to decouple the node cooperation ability and batch management ability of the edgeapplication. 

- Expected Outcome:
  -  Proposal of this issue's solution. 
  -  Achieve that edgeapplication can be overridden via the node group or node label selector.
  -  Fix the issue of closed-loop flow control.

- Recommended Skills: Kubernetes, KubeEdge, Golang

- Mentor(s):
  - Willard (@WillardHu, wei.hu@daocloud.io)
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)

- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5755
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/89fe7f6c-052b-4597-9ba3-c016858b1835

#### Elastic Inference for Deep Learning Models Using KubeEdge 

CNCF - KubeEdge: Elastic Inference for Deep Learning Models Using KubeEdge (2024 Term 3)

- Description: The rapid advancement of AI has led to the widespread application of deep learning models across various fields. However, the resource demands for model inference tasks can fluctuate significantly, especially during peak periods, posing a challenge to the system's computing capabilities. To address this varying load demand, we propose an elastic inference solution leveraging KubeEdge and Horizontal Pod Autoscaling (HPA) to enable dynamic scaling of inference tasks. By utilizing KubeEdge, we can distribute inference tasks across different edge devices and cloud resources, achieving efficient resource utilization and task processing.

- Expected Outcome:
  - Based on kubeedge to complete an elastic scaling AI inference example
  - Based on kubeedge and sedna to complete the joint inference task elastic scaling development and output example
  - Output blog

- Recommended Skills: 
  - KubeEdge and its subproject Sedna frameworks.
  - Experience in deploying and managing Kubernetes, including configuring and tuning the HPA mechanism.
  - Expertise in developing and tuning deep learning models. 
  - Programming experience, particularly in Python and Go.

- Mentor(s):
  - ming tang (@tangming1996, ming.tang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)

- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5753
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1f58cbe5-fe3a-4d0f-9875-b1725ecac223

#### Multimodal Large Model Joint Learning Algorithm: Reproduction Based on KubeEdge-Ianvs

CNCF - KubeEdge: Multimodal Large Model Joint Learning via KubeEdge-Ianvs Reproduction (2024 Term 3)

- Description: KubeEdge-Ianvs currently focuses on edge-cloud collaborative learning (training and inference) for a single modality of data. However, edge devices, such as those in autonomous vehicles, often capture multimodal data, including GPS, LIDAR, and Camera data. Single-modal learning can no longer meet the precise inference requirements of edge devices. Therefore, this project aims to integrate mainstream multimodal large model joint learning algorithms into KubeEdge-Ianvs edge-cloud collaborative learning, providing multimodal learning capabilities.

- Expected Outcome: A benchmark suite for multimodal large language models deployed at the edge using KubeEdge-Ianvs
  - Modify and adapt the existing edge-cloud data collection interface to meet the requirements of multimodal data collection
  - Implement a Multimodal Large Language Model (MLLM) benchmark suite based on Ianvs
  - Reproduce mainstream multimodal joint learning (training and inference) algorithms and integrate them into Ianvs single-task learning
  - (Advanced) Test the effectiveness of multimodal joint learning in at least one of Ianvs' advanced paradigms (lifelong learning, incremental learning, federated learning, etc.).

- Recommended Skills: TensorFlow/Pytorch, LLMs, KubeEdge-Ianvs

- Mentor(s):
  - Chuang Hu (@CreativityH, hchuchuang@gmail.com)
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)

- Upstream Issue: https://github.com/kubeedge/ianvs/issues/123
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d5d315c7-aaee-46ee-895e-a0f9e6ffed4b

#### Cloud-edge collaborative speculative decoding for LLM based on KubeEdge-Ianvs

CNCF - KubeEdge: Cloud-Edge Speculative Decoding for LLM via KubeEdge-Ianvs (2024 Term 3)

- Description: The autoregressive decoding mode of LLM determines that LLM can only be decoded serially, which limits its inference speed. Speculative decoding technique can be used to decode LLM in parallel with the help of draft model, so as to improve the inference speed of LLM without loss of accuracy. However, the speculative decoding technology of LLM does not consider the application in the cloud-edge distributed environment. This project aims to implement cloud-edge collaborative speculative decoding based on KubeEdge-Ianvs, an open source cloud-edge collaborative distributed machine learning platform, so as to further improve the LLM inference speed in cloud-edge environment.

- Expected Outcome:
  - Implement an example of cloud-edge collaborative speculative decoding based on KubeEdge-Ianvs platform.
  - (Optional) Propose a more efficient cloud-edge collaborative speculative decoding algorithm.

- Recommended Skills: KubeEdge-Ianvs, LLM, Pytorch, Python

- Mentor(s):
  - Shijing Hu (@hsj576, sjhu21@m.fudan.edu.cn)
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)

- Upstream Issue: https://github.com/kubeedge/ianvs/issues/126
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bfa8251f-a975-4e07-8e7a-915df3518551

#### Integrate KubeEdge, Sedna, and Volcano for High-Performance Training Task Scheduling 

CNCF - KubeEdge: Integrate KubeEdge, Sedna, and Volcano for Efficient Task Scheduling (2024 Term 3)

- Description: KubeEdge and Sedna have already enabled edge-cloud collaborative training and collaborative inference capabilities. We aim to explore and foster collaborations with more communities to provide enhanced AI capabilities. By integrating Volcano, we aim to achieve high-performance scheduling within the cloud-edge collaborative framework, thereby pushing the boundaries of what can be achieved in distributed AI and edge computing.

- Expected Outcome: 
  - Successfully deploy a training task using KubeEdge and Sedna, and provide an example in the
  - Integrate Volcano within Sedna's architecture to achieve high-performance scheduling of training tasks
  - (Optional) Successfully deploy Kubeflow within the KubeEdge architecture and complete the deployment of an training task, with a blog post documenting the process.

- Recommended Skill: KubeEdge, KubeEdge-Sedna, Volcano

- Mentor(s): 
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)

- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5762
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/49fa6dab-9cb5-4889-bbeb-66c4a5545f8f

### Kubernetes

#### Testeable documentation for the Pod Lifecycle events

- Description: Kubernetes Pods are the unit of execution. Pods's API surface is limited, but yet presenting many challenges for people authoring complex behaviors like proper graceful termination, probes, or advances initialization behaviors. Documentation and testing of those scenarios is limited. The misunderstanding of pod lifecycle and edge casesoften lead to reliability issues in Pods. Lately there were limited efforts to document and test those behaviors. Creating a skaffolding to document and test those behaviors will help temendously the Kubernetes project as well as end users.
- Expected Outcome: Skaffolding in https://github.com/kubernetes/website/ to add new pod lifecycle behavios descriptions. Tests for those edge cases. And cross linking between tests and documentation.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s and containers, understanding of Hugo is a plus.
- Mentor(s):
  - Sergey Kanzhelev (@SergeyKanzhelev, S.Kanzhelev@live.com)
  - Tim Allclair (@tallclair, tallclair@google.com)
- Upstream Issue: https://github.com/kubernetes/kubernetes/issues/126369
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/127b628a-a5f1-4ced-a2ac-7892148699a0

### Kyverno

#### Cleanup policy - Add deletion propagation support

- Description: Support specifying the deletion propagation policy in cleanup policies and TTL-based cleanup.
- Expected Outcome:
1. Support specifying the deletion propagation policy in cleanup policies
2. Support specifying the deletion propagation policy with TTL-based cleanup
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charled.breteche@gmail.com)
  - Vishal Choudhary (@vishal-chdhry, vishal.choudhary@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/10755
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/6d3ce005-6d61-48ad-a50c-00e3bed91c29

#### Controller autogen - Implement new approach to autogen

- Description: Implement a new policy rules autogen system based on extracting the pod spec from higher-level controllers.
- Expected Outcome:
1. The new system works by applying the same rules on the extracted pod spec instead of generating new rules for higher-level controllers
2. The system treats pods and higher-level controllers exactly the same from a policy stand point
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charled.breteche@gmail.com)
  - Vishal Choudhary (@vishal-chdhry, vishal.choudhary@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/10756
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0f2bbc4b-6caa-42fa-a697-d20c1e89ca09

#### Kyverno CLI for the Mutate Existing Rule

CNCF - Kyverno: Kyverno CLI for the Mutate Existing Rule (2024 Term 3)

- Description: Support the mutateExisting rule in Kyverno CLI
- Expected Outcome: Allow users to be able to apply mutate existing policies to resources from 1. file systems; 2. clusters.
- Recommended Skills: Golang, Kubernetes, Cobra
- Mentor(s):
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
  - Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/4354
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/56bf0ae9-a919-42df-bd0e-e3d6910cbeef

#### Policy Exceptions 3.0

CNCF - Kyverno: Policy Exceptions 3.0 (2024 Term 3)

- Description: Support some enhancements to Policy Exceptions.
- Expected Outcome:
1. Support list of PolicyException namespaces (--exceptionNamespace flag)
2. PolicyExceptions to have a status object and report readiness in printer column
3. Support imageReferences in Policy Exceptions for verify image rules
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com)
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9478
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/5632d7c3-a383-4e31-816a-7b38d89a327f

### Meshery

#### Meshery: End-to-End Testing with Playwright (Round 2)

CNCF - Meshery: End-to-End Testing with Playwright (2024 Term 3)

- Description: Meshery integrates with many other CNCF projects and technologies. Sustaining those integrations is only possible through automation. End-to-end testing with Playwright, GitHub Workflows, and self-documenting test reports is the means to the end of maintaining a healthy state of each of these [Meshery integrations](https://meshery.io/integrations). 
 
- Expected Outcome: 
  - Successful migration of E2E tests from Cypress to the Playwright test library within the Meshery project.
  - Implementation of robust and reliable test cases using Playwright to cover a wide range of Meshery's E2E scenarios.
  - Documentation detailing the migration process, and guidelines for future contributions to maintain test quality.
  - Integration of Playwright test suite into the Meshery CI/CD pipeline to ensure continuous testing and reliability of the platform.
- Recommended Skills: JavaScript, Playwright, GitHub Workflows, Jekyll, Markdown, familiarity with React or Nextjs would be helpful, CI/CD
  - Mentor Name: Aabid Sofi (@aabidsofi19, mailtoaabid01@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com),
- Upstream Issue: https://github.com/meshery/meshery/issues/11494
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a9113576-7216-46a7-bc9a-f922c1c62f8d

#### Meshery: Migrate APIs to be schema-driven

CNCF - Meshery: Migrate APIs to be schema-driven (2024 Term 3)

- Description: Enhance Meshery’s APIs capability by migrating to a schema-driven approach, which will ensure consistency, validation, and easier integration. It involves versioning and defining API schemas using OpenAPI/Swagger at https://github.com/meshery/schemas and auto generating structs. You will be ensuring all Meshery APIs aligns with defined schemas and are consistent.

- Expected Outcome: Identifying APIs and updating them to conform these schemas. Enhance API documentation to reflect the schema-driven approach. Updating APIs to ensure they are consistent and doing validation against defined schemas.

- Recommended Skills: Golang, Kubernetes, Swagger, JSON schemas, familiarity with React, Nextjs would be helpful
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Yash Sharma (@Yashsharma1911, yashsharma2572@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/11495
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/796982d7-09b9-40b3-94f2-3b32cdcdfbf6

#### Meshery: UI Migration from MUI v4 to MUI v5 and Sistent

CNCF - Meshery: UI Migration from MUI v4 to MUI v5 and Sistent (2024 Term 3)

- Description: Meshery's UI is powerful and utilizes frameworks like Next.js and Material-UI. However, it relies on outdated technology stacks, resulting in performance inefficiencies and increased maintenance overhead.
- Expected Outcome: Migrate from MUI v4 to MUI v5 and fully utilize features of Nextjs v13 and Sistent. Migrate all class based components to function based components. Reduced code complexity and improved maintainability for long-term sustainability. Responsive and accessible UI that adapts to diverse devices and user needs.
- Recommended Skills: ReactJs, NextJs, familiarity with Material UI, Redux and Redux Toolkit
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Antonette Caldwell (@nebula-aac, pullmana8@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/11493
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c98d0652-03c1-4409-bf1c-7240a4947d39

### OpenKruise

#### Visualize Kruise Rollout progress with kubectl plugin

CNCF - OpenKruise: Visualize Kruise Rollout progress with kubectl plugin (2024 Term 3)

- Description: [Kruise Rollout](https://github.com/openkruise/rollouts) provide plugin-n-play progressive delivery for cloud native apps. The goal of this project is to develop a kubectl plugin so as to visualize rollout progress, e.g. the rollout steps, traffic status and involved pods. The kubectl plugin can leverage the existing [kruise kubectl plugin project](https://github.com/openkruise/kruise-tools), and can use the [Argo kubectl plugin](https://argo-rollouts.readthedocs.io/en/stable/features/kubectl-plugin/#visualizing-rollouts-and-experiments)  as a reference.
- Expected Outcome: 
  * kruise-tools enhancement for kruise rollout visualization
  * Well-documented with clear usage instructions and examples
- Mentor(s):
    - Zhang Zhen (@furykerry, furykerry@gmail.com)
    - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
- Recommended Skills: Kubernetes, GoLang
- Upstream Issue: https://github.com/openkruise/kruise-tools/issues/94
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/766ae869-a807-470c-aec2-e63ead04e0e2

#### Game operation and maintenance API

CNCF - OpenKruise: Game operation and maintenance API (2024 Term 3)

- Description: kruise-game contains two CRDs GameServer and GameServerSet. Game servers can be managed by deploying or changing the corresponding CR. However, in actual production use, a release or operation and maintenance action is often a combination of a series of operations on CR. For example, set the GameServer image tag with ids 1, 7, and 10 to v0.3; adjust the update priority of GameServer with ids 5, 9, and 11 before updating the game server, etc. Therefore, a set of APIs with operation and maintenance semantics is needed, which users can directly use or integrate into their own operation and maintenance platform to facilitate operation and maintenance operations.
- Expected Outcome:
  * A service component that includes multiple APIs
- Recommended Skills: Golang, Kubernetes, RESTful API
- Mentor(s):
    - Liu Zhongwei (@ringtail, zhongwei.lzw@alibaba-inc.com)
    - Liu Qiuyang (@chrisliu1995, chrisliu1995@163.com)
- Upstream Issue: https://github.com/openkruise/kruise-game/issues/166
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1f2605c8-c9f3-4a13-95d5-062bd024f9be

### Prometheus

#### Enhance Prometheus Benchmark Suite

- Description: PromBench is the automated system for benchmarking Prometheus, intended to be a realistic comparison for users.  It sets up a Kubernetes cluster, configures Prometheus to monitor many fake services, and simulates users querying the data.
- Expected Outcome: PromBench should cover more of Prometheus functionality, making it a more useful benchmark for users.
- Recommended Skills: Go, Prometheus
- Mentor(s):
  - Bryan Boreham (@bboreham, bjboreham@gmail.com)
  - Kemal Akkoyun (@kakkoyun, kakkoyun@gmail.com)
- Upstream Issue: https://github.com/prometheus/test-infra/issues/707
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b9a0e569-0f73-40dc-94d2-8dc3d376dbc6

#### Prometheus Remote-Write v2 support in otel-collector's `prometheusremotewriteexporter`.

CNCF - Prometheus: Remote-Write v2 in otel-collector's prometheusremotewriteexporter (2024 Term 3)

- Description: Prometheus recently [announced the second version of it's remote-write protocol](https://prometheus.io/docs/specs/remote_write_spec_2_0/), with support for new features on top of performance and cost savings. The work to be done is contribute support for this new protocol in the OpenTelemtry-Collector-Contrib repository, more specifically to the `prometheusremotewriteexporter` component.
- Expected Outcome: `prometheusremotewriteexporter` component with support for PRW v2.
- Recommended Skills: Go, Prometheus, OpenTelemetry.
- Mentors(s):
    - Arthur Silva Sens (@ArthurSens, arthursens2005@gmail.com)
    - Arve Knudsen (@aknuds1, arve.knudsen@pm.me)
    - David Ashpole (@dashpole, dashpole@google.com)
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/33661
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3fa26f90-87aa-46a4-80f9-00195ae276e8

### Service Mesh Performance

#### CNCF Project Performance Test Dashboard

CNCF - Service Mesh Performance: CNCF Project Performance Test Dashboard (2024 Term 3)

- Description: In coordination with CNCF TAG Network, the current performance dashboard at https://smp-spec.io/dashboard is proposed to be incorporated into CNCF project level-moving criteria in that each CNCF project will be encouraged (mandated?) to incorporate ongoing performance tests into their build and release processes, resulting in ongoing performance analysis of each project.
- Expected Outcome: 
  - Dashboard Enhancement: Expand the existing performance dashboard to capture and visualize performance test results for non-service mesh projects. This will involve integrating with various data sources, designing user-friendly interfaces, and implementing robust data analysis pipelines.
  - GitHub Workflow Integration: Collaborate with other CNCF projects to configure their GitHub workflows to automatically run load tests using the Meshery GitHub Action. This will streamline the performance testing process and ensure that results are consistently collected and published to the dashboard.	
- Recommended Skills: Golang, familiarity with HTTP/HTTPS performance testing tools, Service Mesh, grpc, familiarity with containerization technologies, like Docker would be helpful.
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Xin Huang (@gyohuangxin, xin1.huang@intel.com)
- Upstream Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/432
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f0add302-47e2-4918-ba86-7a3570b3540c

### Thanos

#### Add support for hedged requests

- Description: The long-tail requests sometimes are inevitable between the Thanos Store Gateway and an external cache. Lowering the timeouts between the store-gateway and the cache service isn't a greater way to address this problem. Using a HTTP client to issue hedged requests to object storage and other parts of Thanos' stack could help reduce tail latency by a lot.
- Expected Outcome: By the end of the term, the mentee will have a deeper knowledge of Thanos and have improved our HTTP request tail latencies considerably!
- Recommended Skills: Go, HTTP, Prometheus, Thanos
- Mentor(s):
  - Giedrius Statkevičius (@GiedriusS, giedriuswork@gmail.com)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/6712
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/541a5bb5-09fd-47a9-a244-a65386aa7f7c

### Vitess

#### Add new getting started examples

CNCF - Vitess: Add new getting started examples (2024 Term 3)

- Description: Vitess is a cloud-native database, while managing Vitess can be complex, the list of our getting started guide and code examples is not very exhaustive. We would like to have a mentee work on growing the list of code examples and guide to help new users acquire Vitess. Given the mentee's fresh eyes, we would like them to contribute to the troubleshooting / common issues guide too.
- Expected Outcome: By the end of the term, the mentee will have a deeper knowledge of Vitess and shipped at least one guide in every area of Vitess.
- Recommended Skills: Go, Distributed Database, Communication
- Mentor(s):
  - Florent Poinsard (@frouioui, florent@planetscale.com)
  - Matt Lord (@mattlord, mlord@planetscale.com)
- Upstream Issue: https://github.com/vitessio/website/issues/1798
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/51f85b18-1184-443c-9e9a-5f00d9cd5040

### WasmEdge

#### WASM Serializer with new proposals

CNCF - WasmEdge: WASM Serializer with new proposals (2024 Term 3)

- Description: WasmEdge provides WASM module serializer in C API level for developers to convert the loaded WASM structure back into binary format. But after supporting the `function-references`, `GC`, `relaxed-SIMD`, and `exception-handling` proposals in WasmEdge, the partitions of these proposals in serializer are not implemented yet. Thus, we would invite mentees to complete the binary format serialization with the above WASM proposals in WasmEdge.
- Expected Outcome:
  * Complete the serialization of the new module extensions in WASM proposals.
  * Complete the serialization of the new instructions added in WASM proposals.
  * Add some basic unit tests with hand-writing WASM binaries.
- Recommended Skills: C++, WASM, git
- Mentor(s):
  - Yi-Ying He (@q82419, yiying@secondstate.io)
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3585
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c96de5c4-e1c3-4a02-a18a-65507d1cb675

#### Fix bugs found by fuzzer

CNCF - WasmEdge: Fix bugs found by fuzzer (2024 Term 3)

- Description: WasmEdge received several bug reports, which Fuzzer found. We would like to ask mentees to investigate and determine whether the issue is real, figure out solutions, or mark it as a `won't-fix` issue if it's invalid. To apply for this mentorship, you should also submit a proposal as part of the application materials. Please check the upstream issue for the detailed target list and the proposal template.
- Expected Outcome: At least fix/determine 60% of the mentioned issues.
- Recommended Skills: git, C++, WebAssembly
- Mentor(s):
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
  - Yi-Ying He (@q82419, yiying@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3584
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/824beced-74a9-4b65-9db3-c20589b9d0f6

#### Create an LLM app with deep understanding of a GitHub repo

CNCF - WasmEdge: Create an LLM app with deep understanding of a GitHub repo (2024 Term 3)

- Description: LLM assisted coding is one of the most promising application areas for modern AI. It will also have profound impact on open source software development. As many projects have demonstrated, "feeding" an LLM with contents from a GitHub repo will make it better at understanding coding tasks for this project. In this project, we will take a modern approach to build LLM agents based on LlamaEdge / WasmEdge, and supplement it with deep knowledge of open source projects on GitHub. The goal is for the agent to answer questions and solve problems raised by the open source community.
- Expected Outcome:
  * Build an automated tool to extract and process all files in a repo. That includes source code and docs.
    * develop a GitHub bot to capture all change files and update the knowledge base in real time.
    * generate a summary for each file (using an LLM) and supplement with its file path and other meta data.
    * create a vector database with the summary and original text. The vector is computed from the summary to improve search efficiency.
  * Run an LLM agent node with the RAG database from the repo.
  * Create a GitHub bot that can read new issues and respond with either an answer or a coding suggestion based on the content inside the repo.
  * Evaluate the answer quality.
- Recommended Skills:
  * Rust
  * [LlamaEdge](https://github.com/LlamaEdge/LlamaEdge) -- see a [tutorial](https://llamaedge.com/docs/user-guide/get-started-with-llamaedge)
  * ChatGPT and LLMs
  * The [RAG process](https://llamaedge.com/docs/category/server-side-rag)
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3581
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7909e713-a081-49d9-b14e-4ee5a36e0e97

#### Create a Wasm-based LLM app for financial analysts

CNCF - WasmEdge: Create a Wasm-based LLM app for financial analysts (2024 Term 3)

- Description: We would like to develop an LLM-based financial data analytics application using open source LLMs, embedding models, the LlamaEdge application server, vector databases, and data processing tools. It will provide an open source "template" and showcase "best practices" for similar applications in this fast growing application area.
- Expected Outcome:
  * Create a data processing pipeline in Python or Rust to automatically
    * collect public company’s SEC 10-Q quarterly reports and press releases. e.g., [Apple 10-Q](https://www.sec.gov/edgar/browse/?CIK=0000320193) and [Apple press release](https://www.apple.com/newsroom/2024/05/apple-reports-second-quarter-results/)
    * generate a summary for each SEC 10-Q and press release documents using an LLM service such as [LlamaParse](https://docs.llamaindex.ai/en/stable/llama_cloud/llama_parse/) or [EYELEVEL xRay](https://dashboard.eyelevel.ai/xray/)
    * create and continuously update a vector database with the summary and original text. The vector is computed from the summary to improve search efficiency.
  * Create a server-side RAG app that can chat with the vector knowledge base of financial statements.
  * Evaluate the answer quality
  * Explore LLM function calling to incorporate real-time information and actions
- Recommended Skills:
  * Python
  * [LlamaEdge](https://github.com/LlamaEdge/LlamaEdge) -- see a [tutorial](https://llamaedge.com/docs/user-guide/get-started-with-llamaedge)
  * ChatGPT and LLMs
  * The [RAG process](https://llamaedge.com/docs/category/server-side-rag)
  * Rust (optional)
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Hung-Ying, Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3580
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/75feef58-e372-4797-846a-c6a5d6087a19

