## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
- Upstream Issue:

```

---

## Proposed Project ideas

### Cilium

#### Cilium Technical Outcomes

- Description: On the Cilium [homepage](cilium.io), we want to document technical outcomes from using Cilium. Think of these technical outcomes as aggregating some of cilium features to achieve a high level technical goal. These are the current ones we have in mind: Zero Trust Networking, Network Automation, Distributed Firewalling, Cost and Carbon Savings, Multi-cloud Connectivity.
- Expected Outcome: A section of the Cilium website detailing these technical outcomes. This section on the website can include any supporting materials from the Cilium community i.e blogs, videos, talks, illustrations, etc.
- Recommended Skills: Technical Writing, some basic working knowlegde of Cilium or the willingness to quickly ramp up, Kubernetes, general familiarity with the cloud native ecosystem, basic React.js(the cilium webiste is built with Gatsby).
- Mentor(s):
  - Paul Arah(paularah, <paul.arah@isovalent.com>)
  - Bill Mulligan(xmulligan, <bill.mulligan@isovalent.com>)
- Upstream Issue: <https://github.com/cilium/cilium.io/issues/492>


### in-toto

### Add GUAC support

- Description: The project aims to integrate Graph for Understanding Artifact Composition (GUAC) with in-toto, a framework safeguarding software supply chain integrity. [Graph for Understanding Artifact Composition (GUAC)](https://guac.sh/) aggregates software security metadata into a high fidelity graph database—normalizing entity identities and mapping standard relationships between them. This project seeks to extend in-toto's capabilities by incorporating GUAC, enabling users to query GUAC with Package URLs (purls) and retrieve pertinent attestations.
- Expected Outcome: Adds functionality to query GUAC, retrieve and parse relevant attestations for the specified artifact.
- Recommended Skills: Go, Python
- Mentor(s):
  - Santiago Torres-Arias (@SantiagoTorres, santiagotorres@purdue.edu)
  - Pradyumna Krishna (@PradyumnaKrishna, git@onpy.in)
- Upstream Issue: https://github.com/in-toto/attestation-verifier/issues/29

#### Documentation Boost!

- Description:
  - Help contributors get started with improving the documentation of CNCF projects and TAGs.  To start, we'd like mentees to help to
improve both the documentation of a project, and also encourage them to contribute to other projects.  So, view the issues as a starting
point to help start your career in open source.
- Expected Outcome:
  - Develop effective documentation for CNCF projects.  As a start, the CNCF project in-toto has a fairly clear set of requirements for what
documentation changes are needed.
- Recommended Skills:
  - Technical writing
  - Basic understanding of cloud native projects (or a desire to learn!)
- Mentor(s):
  - Justin Cappos @JustinCappos jcappos@nyu.edu
  - Patrice Chalin @chalin chalin@cncf.io
- Upstream Issues:
  -   https://github.com/in-toto/docs/issues/85
  -   https://github.com/in-toto/docs/issues/90
  -   https://github.com/in-toto/docs/issues/91
  -   https://github.com/in-toto/docs/issues/92

#### Sigstore support for in-toto-jenkins

- Description: The [in-toto Jenkins plugin](https://github.com/in-toto/in-toto-jenkins-plugin) allows users to generate metadata in their build pipelines. Currently keys or credentials must be provided to the plugin to sign the metadata, whereas Sigstore offers keyless signing and verification. The addition of Sigstore transport will allow seamless uploading of metadata to Rekor transparency log. This project aims to enhance the Jenkins plugin by adding [Sigstore](https://www.sigstore.dev) support, allowing keyless signing and adding Sigstore transport.
- Expected Outcome: in-toto-jenkins plugins gets support for Sigstore
- Recommended Skills: Java, Jenkins
- Mentor(s):
  - Santiago Torres-Arias (@SantiagoTorres, santiagotorres@purdue.edu)
  - Pradyumna Krishna (@PradyumnaKrishna, git@onpy.in)
- Upstream Issue: https://github.com/in-toto/in-toto-jenkins-plugin/issues/6


### Crossplane

#### Make Crossplane Easy - Improving the Developer Experience

- Description: Crossplane is in use at scale in many production environments, but we get often get feedback that there are many obstacles to learn Crossplane and get to a successfully built production-ready control plane. A major reason for this learning curve is the lack of supporting tools and experiences on top of core Crossplane that could accelerate the community’s attempts to successfully build their platforms. These higher level experiences have recently become a focus for the project and we want to keep delivering awesome experiences that make Crossplane easier to use.
- Expected Outcome: We expect the mentee to design and code multiple improvements to the Crossplane tooling from the issue linked below. We will start with smaller scoped issues to ramp up and then focus on a bigger deliverable such as adding [validation for Crossplane Functions](https://github.com/crossplane/crossplane/issues/5094). By the end of the term, the mentee will have multiple code PRs merged into the Crossplane codebase.
- Recommended Skills: Go, Kubernetes, Crossplane, CLI tools, passion for DevEx
- Mentor(s):
  - Jared Watts (primary) (@jbw976, jbw976@gmail.com)
  - Ezgi Demirel (secondary) (@ezgidemirel, ezgi@upbound.io)
- Upstream Issue: https://github.com/crossplane/crossplane/issues/3957


### Jaeger

#### Jaeger-V2 Observability and Healthchecks

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. (1) Currently jaeger-v2 components are initialized without observability clients. We need to instantiate appropriate logging, tracing, and metrics clients and pass them to the components. The existing code uses internal metrics API, which needs to be bridged to OTEL metrics to minimize code changes. (2) Jaeger-v1 components can report their readiness using an internal health check API that is connected to the healthcheck endpoint on the admin port. We need to implement similar capability in Jaeger-v2.
- Expected Outcome: Achieve parity in observability of jaeger-v2 compared to jaeger-v1
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5240

#### Jaeger-V2 Service Performance Monitoring

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Jaeger-v1 implements a functionality known as [SPM](https://www.jaegertracing.io/docs/latest/spm/), but it requires a separately running OpenTelemetry Collector to produce metrics out of spans using [SpanMetrics Connector](https://pkg.go.dev/github.com/open-telemetry/opentelemetry-collector-contrib/connector/spanmetricsconnector#section-readme). Since Jaeger-v2 is built on top of OTEL Collector, we can run SpanMetrics Connector directly in the Jaeger binary and simplify the setup for the users.
- Expected Outcome: Achieve parity in SPM of jaeger-v2 compared to jaeger-v1. Implement integration tests. Update documentation accordingly.
  - Extra credit: implement metrics reader directly on top of Elasticsearch/Opensearch and bypass the need for Prometheus.
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5240

#### Jaeger-V2 Kafka-based architecture

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. The goal is to implement a deployment mode (supported in Jaeger-v1) that uses Kafka as an intermediate buffer for spans between collector and ingester. It should use the latest version of ibm/sarama driver ([related issue](https://github.com/jaegertracing/jaeger/issues/4591)) and support both original Jaeger formats as well as OpenTelemetry OTLP. It may be possible to utilize the Kafka exporter/receiver from OTEL contrib.
- Expected Outcome: Achieve parity for Kafka-based deployment jaeger-v2 compared to jaeger-v1, including internal observability. Implement integration tests. Update documentation accordingly.
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5240

### Karmada

#### Certificate Lifecycle Management

- Description: The Karmada Certificate Lifecycle Management project addresses user challenges in certificate management, focusing on mitigating service disruptions and security risks due to expirations. Key goals include implementing a feature for real-time monitoring of certificates with advance notification for upcoming expirations; creating a comprehensive manual for manual replacement with best practices and visuals; allowing configurable certificate validity during deployment via CLI, Helm charts, and Operator; and designing an automated certificate rotation system to streamline certificate maintenance and ensure continuous security across Karmada environments.
- Expected Outcome: Certificate Visibility Tool/Feature, Manual Certificate Replacement Guide, Updated Installation Tools with Customizable Certificate Validity, and Automated Certificate Rotation Solution Design or Integration
- Recommended Skills: Golang, Kubernetes Admin, certificate management, Helm.
- Mentor(s):
    - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
    - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/community/issues/69


### Knative

#### Improve Knative Eventing Onboarding

- Description:
Onboarding new end users into a sophisticated system like Knative Eventing presents significant challenges, especially as it involves understanding not only the operational components but also a distinct architectural style - event driven architecture (EDA). These issues are also seen in the current documentation which is often too technical and not geared towards practical guidance.  This project seeks to perform a thorough investigation into the barriers that prevent smooth user onboarding and sustained engagement. By identifying these obstacles and developing clearer, more actionable onboarding materials, we aim to enhance the ease of entry and ongoing use of Knative Eventing for all users.

- Expected Outcome:
1. Produce a detailed report based on user research that outlines the current onboarding experience for new users of Knative Eventing. This report will highlight key barriers and challenges in the documentation and setup process, and recommend actionable improvements to make the onboarding process more user-friendly and less technically daunting.

2. Implement the proposed changes within the Knative community by developing comprehensive onboarding materials and enhancing existing documentation to better support new users.

- Recommended Skills: User Research, Communication, Technical Writing, Content Design

- Mentor(s):
  - Leo Li (@Leo6Leo,leoli@redhat.com)
  - Mariana Mejia (@mmejia02, mariana.mejia@ocadu.ca )

- Upstream Issue:
  https://github.com/knative/ux/issues/130

#### Knative - applying pre-prepared website design

- Description: Current design of the Knative website (https://knative.dev) does not look modern and contains inconsistent style. Knative UX working group has prepared a new design for the website. We would like to get this design implemented on the website. We also want to ensure with this implementation that the figures in the website include alt text descriptions. We are not looking for full WCAG compliance though.Also, currently the website is not really responsive and doesn’t look good on a mobile device. The group also has a design for the mobile. Finally we have many diagrams on the website that have different styles. We would like to have these diagrams more cohesive. This part is an extended goal though.

- Expected Outcome: New design applied to website; website is made responsive; diagrams look and feel more cohesive.

- Recommended Skills: HTML, CSS, Markdown, SVG, Material for Mkdocs, Figma

- Mentor(s):
  - Ali Ok (@aliok, aliok@redhat.com)
  - Calum Murray (@cali0707, cmurray@redhat.com)
  - Zainab Husain (@zainabhusain227, zainabhusain227@gmail.com)

- Upstream Issue:
  - https://github.com/knative/ux/issues/134
  - https://github.com/knative/ux/issues/135 
  - https://github.com/knative/ux/issues/103 

### KubeArmor

#### Improve System Test Coverage and Pratices for KubeArmor

- Description: KubeArmor supports securing many environments ranging from Kubernetes, unorchestrated containers, bare metal and virtual machines. Our testing matrix however doesn't cover many of these completely. In this project, we plan to improve this coverage by introducing automated testing of some of these environments and imrove the scenarios covered in some existing ones. These tests would be written using the Ginkgo framework and automated via GitHub workflows. The matrix we'll target can be found in the upstream issue.
- Expected Outcome: Improved test coverage; Standards for writing tests for KubeArmor; Stabilization of KubeArmor
- Recommended Skills: Go, Scripting, Kubernetes, CI/CD (GitHub Actions)
- Mentor(s):
  - Barun Acharya (@daemon1024, barun1024@gmail.com)
  - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
  - Anurag Kumar (@kranurag7, kranurag7@linux.com)
  - Prashant Mishra (@primalpimmy, prashant20.pm@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1749

### KubeEdge

#### Iterating Enhancement for KubeEdge Dashboard

- Description: Based on the previous release of KubeEdge, a version of the dashboard has been implemented. With the iterative updates of the backend API, the current dashboard may have several issues. In this project, we aim to iterate and update the dashboard to ensure its compatibility with the latest version of KubeEdge. Additionally, we want to refactor the dashboard using more mainstream frameworks such as Material and optimize the user experience of the dashboard.
- Expected Outcome: new release Dashboard which supports new KubeEgde APIs.
- Recommended Skills: KubeEdge, Front-end, nodejs
- Mentor(s):
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/dashboard/issues/22

#### Router Manager Support HA

- Description: Users need to communicate between the cloud and the edge. For example, the cloud calls the rest interface of the edge service. In this case, the routing management function of KubeEdge can be used. Currently, routing management function of KubeEdge has some problems in the case of multiple CloudCore copies. The main problem is that when there are multiple copies of CloudCore, whether the cloud sends messages to the edge or reports the message to the cloud, it is not known which CloudCore is sent to it for processing, and there is confusion in message management in the cloud. In this project, we hope router manager can be optimized to support multi-CloudCore scenario.
- Expected Outcome: Support using router manager in multi-CloudCore scenario.
- Recommended Skills: Golang, KubeEdge
- Mentor(s):
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
  - jiawei (@JiaweiGithub, jiawei.liu@daocloud.io)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5561

#### KubeEdge test cases enhancement

- Description: Testing is an important task to ensure project stability, security, and other aspects. Since KubeEdge is built on top of native Kubernetes, in this project, we aim to integrate Kubernetes end-to-end (E2E) test cases into KubeEdge's CI. This integration will help ensure the native compatibility and usability of KubeEdge. Additionally, we also aim to improve the unit tests and increase the coverage of integration tests for KubeEdge.
- Expected Outcome: Improve KubeEdge test coverage scenarios
- Recommended Skills: Golang, KubeEdge
- Mentor(s):
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5562

#### KubeEdge Documentation Improvement

- Description: Recently, we have updated the directory and structure of the community's official website documentation. We have listed some documentation improvement tasks. In this project, we would like you to have a thorough understanding of KubeEdge and complete these documentation optimization tasks to help users or developers gain a better understanding of and utilize KubeEdge effectively.
- Expected Outcome: Document optimization of setup, usage guide, and developer guide, adding more FAQs, etc.
- Recommended Skills: Kubernetes, KubeEdge, docs
- Mentor(s):
  - zhiying (@zhiyingfang2022, zhiying.fang@daocloud.io)
  - wbc6080 (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/website/issues/433

### Kubernetes

#### Update Image Signing to Meet New Infra Requirements

- Description: The process that signs with Sigstore all container images released on community
infra was designed for a different serving architecture. When the community
moved to [registry.k8s.io](https://kubernetes.io/blog/2022/11/28/registry-k8s-io-faster-cheaper-ga/)
and increased 10x the number of registries, the replication of signatures broke 
due to rate limits imposed on the new registries. As part of the project, you will
be instrumental in implementing the new signing process currently being designed 
by the Kubernetes Release Engineering team. This project will involve heavy rewrites and
refactoring of parts of the [Image Promoter](https://github.com/kubernetes-sigs/promo-tools),
the tool that releases community images.
- Expected Outcome: Implementation of the new signing process, ideally we'll fix
all inconsistent signatures across community registries.
- Recommended Skills: Go programming, strong container architecture and registry
fundamentals, familiarity with [sigstore](https://www.sigstore.dev/), 
[go-containerregistry](https://github.com/google/go-containerregistry) and infrastructure (GCP & AWS). 
- Mentor(s):
  - Adolfo García Veytia (@puerco, puerco@stacklok.com)
  - Jeremy Rickard (@jeremyrickard jrickard@microsoft.com)
  - Marko Mudrinić (@xmudrii, mudrinic.mare@gmail.com)
  - Meha Bhalodiya (@mehabhalodiya, mehabhalodiya@gmail.com)
- Upstream Issues:
  - https://github.com/kubernetes/registry.k8s.io/issues/187
  - https://github.com/kubernetes/release/issues/2962

### Kubescape


#### Advanced Kubescape plugin features for VSCode


- Description: Kubescape has a VSCode plugin to facilitate applying configuration fixes that harden Kubernetes infrastrcutture without creating a burden of context switching on engineers tasked with security scanning and implementing their results.
- Expected Outcome: Inetgrating container image scanning capabilities in the Kubescape VSCode plugin and implementing
 Kubescape's ability to apply fixes for configuration issues to YAML files or Helm charts directly within their development environment.

- Recommended Skills: Javascript, some familiarity with the inner workings of the VSCode plugin system.
- Mentor(s):
  - Ben Hirschberg (@slashben, ben@armosec.io)
  - David Wertenteil (@dwertent, dwertent@armosec.io)
- Upstream Issue: [kubescape/Kubescape#1666](https://github.com/kubescape/kubescape/issues/1666)


 #### Backstage plugin that adheres to the new plugin system


- Description: Backstage has become a popular option for an internal portal that provides information for engineers in different capacities. Creating a backstage plugin for Kubescape will ultimately help users achieve their goal of hardening Kubernetes clusters, by being able to view security posture information on Backstage and without context switching.
- Expected Outcome: A Kubescape plugin for Backstage in which users will be able to get information about their security posture and highest risk workloads at a glance within the orgnizational portal.

- Recommended Skills: Typescript, React, some familiarity with new Backstage plugin system.
- Mentor(s):
  - Rotem Refael (@rotemamsa, rotem@armosec.io)
  - Matthias Bertschy (@matthyx, matthiasb@armosec.io)
- Upstream Issue: [kubescape/Kubescape#1667](https://github.com/kubescape/kubescape/issues/1667)


### Prometheus

#### Prometheus Remote Write Benchmarking Capabilities

- Description: Prometheus remote write allows users to send their metrics to other time series databases. Though the [Prombench tool](https://github.com/prometheus/test-infra/tree/master/prombench) has existed for a number of years, it has never been extended to support performance testing of Remote Write in a realistic production like environment. With the upcomming Remote Write 2.0 changes to both the underlying implementation as well as the wire format, the need for benchmarking of remote write beyond static Go bechmark tests has increased.
- Expected Outcome: Build additional (or extends existing) tooling, similar to Prombench’s [load-generator](https://github.com/prometheus/test-infra/tree/master/tools/load-generator) and [avalanche](https://github.com/prometheus-community/avalanche), to support scenarios under which remote write should be performance tested. For example; allowing gradual increases/decreases in # of active series, sudden spikes in active series, various amounts of latency in the server receiving the remote write data, etc. Time permitted, extend Prombench's test suite to include a set of Remote Write tests that can be run via a new command.
- Recommended Skills: Go, some familiarity with Prometheus or metrics, basic Docker knowledge
- Mentor(s):
  - Callum Styan (@cstyan, callumstyan@gmail.com),
  - Jesús Vázquez (@jesusvazquez, jesus.vazquez@grafana.com)
  - Nico Pazos and Alex Greenbank from Grafana also available to help
- Upstream Issue: https://github.com/prometheus/prometheus/issues/13995

#### Mark Out-of-order ingestion as stable

- Description: Prometheus is known by not accepting out-of-order samples during ingestion, but recently (2 years ago) [support was added behind a feature-flag](https://github.com/prometheus/prometheus/pull/11075). Since then, many improvements have been made to out-of-order ingestion and it has become one of the requirements for OTLP ingestion in Prometheus. We want to deliver Prometheus 3.0 in a few months, and that requires marking out-or-order ingestion as a stable feature. In this project we will clean up several smaller issues around out-of-order ingestion, hopefully marking it as stable by the end of the mentorship.
- Recommended Skills: Go, familiarity with Prometheus TSDB.
- Mentor(s):
  - Bryan Boreham (@bboreham, bjboreham@gmail.com)
  - Jesus Vazquez (@jesusvazquez, jesus.vazquez@grafana.com)
- Upstream Issue: https://github.com/prometheus/prometheus/issues/12631


### Thanos

#### Compactor: Display TODO plan in UI

- Description: In the Thanos Compactor UI there is visibility of the global block list and loaded block list. But it would be useful to also have a list of planned and currently running compaction groups in order to see what exactly is in progress. This way it would be easier to diagnose what the Thanos Compactor is currently working on, and possibly what is delaying the progress of compactions. This is especially useful if you have large TSDB blocks in S3 buckets that take time to get compacted.
- Expected Outcome: We have an endpoint in Compactor that details compaction plan, and this is also visualized in a Compactor UI page.
- Recommended Skills: Go, React, some familiarity with Prometheus and Thanos
- Mentor(s):
  - Michael Hoffmann (@MichaHoffmann, mhoffm@posteo.de)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/7285


### Vitess

#### Improve the website of our automated-benchmarking tool (migrate to shadcn ui and typescript)

- Description:
    - Vitess uses arewefastyet to automatically benchmark its codebase and ensure no performance regression is introduced. This tool benchmarks Vitess every day, and is used to visualize the results of those benchmarks. It is an important tool in the development cycle of Vitess and is used by its maintainers and adopters.
    - [Arewefastyet' website](https://benchmark.vitess.io) has changed quite a lot over the last year, we want to continue improving it by finishing the migration to TypeScript and by using Shadcn components.
    - Moreover, we want to make the website responsive and have a proper Figma that serves as a reference for current and future contributors.
- Expected Outcome:
    - The mentee is expected to produce a Figma with the design of the website that will be co-authored with the mentor.
    - Re-vamp most of the pages using Shadcn and the design defined with the mentor at the start of the internship period.
    - Add type information for all/most components using TypeScript.
- Recommended Skills:
    - Be skilled in React/Vite/TypeScript.
    - Must know how to simply use Docker and docker-compose.
    - Experience with Figma is a big plus.
    - Experience with Rest APIs and Golang is a plus too.
- Mentor(s):
    - Florent Poinsard @frouioui florent@planetscale.com
    - Frances Thai @notfelineit frances@planetscale.com
- Upstream Issue (URL): https://github.com/vitessio/arewefastyet/issues/525

#### Community building and engagement

- Description:
    - [Vitess](https://vitess.io) is a CNCF project that has been around for a while. It has a strong community of users and contributors. We want to continue growing this community and make sure that everyone feels welcome and included.
- Expected Outcome:
    - The mentee is expected to evaluate contributor ladder schemes and rewards and produce a recommendation for the Vitess maintainers.
    - Once a decision is made, the mentee is expected to implement the decisions from the maintainer team.
    - The mentee is expected to collect data about Vitess usage from the community and publish the highlights as a blog post.
    - The mentee is expected to review the [Getting Started docs on the Vitess website](https://vitess.io/docs/20.0/get-started/) and enhance them to improve the onboarding experience.
    - The mentee is expected to research and recommend marketing opportunities for Vitess. These could be guest blog posts, podcasts, live streams etc.
- Recommended Skills:
    - Excellent verbal and written communication skills.
    - Prior experience participating in an open source community is a plus.
    - Should be able to install and run Vitess according to the user guides.
    - Website development skills are a plus.
- Mentor(s):
    - Deepthi Sigireddi @deepthi deepthi@planetscale.com
    - Florent Poinsard @frouioui florent@planetscale.com
- Upstream Issue (URL): https://github.com/vitessio/vitess/issues/15895

### TUF

#### Documentation assessment and improvements

- Description:
  - Open source projects need help with their documentation!  The TUF project is a good place to start.  We'd welcome help from others to help here
and become contributors to other projects / TAGs later in the project period.  The mentee will (with minimal guidance from the CNCF team and TUF project) do a [CNCF assessment](https://github.com/cncf/techdocs/blob/main/assessments/howto.md) for the TUF documentation
- Expected Outcome:
  - Both an improvement of project docs and the development of a new contributor.  A mentee will understand how to do technical writing for an open source project.  
- Recommended Skills:
  - Technical writing
  - Basic understanding of security principles
- Mentor(s):
  - Justin Cappos @JustinCappos jcappos@nyu.edu
  - Patrice Chalin @chalin chalin@cncf.io
- Upstream Issues:
  - https://github.com/cncf/techdocs/issues/162


### WasmEdge

#### Support piper as a new backend of the WASI-NN WasmEdge plugin

- Description: WasmEdge supports PyTorch, TensorFlow Lite, llama.cpp, and more NN backend. Dealing with the text-to-voice is a big thing that we want to achieve. To make it possible, we would like to integrate [piper](https://github.com/rhasspy/piper), A fast, local neural text-to-speech system in C++ as a new [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend.
- Expected Outcome:
  - A new plugin provides a piper [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) backend
  - A test suite for validating the plugin
  - Documents and examples for explaining how to use the plugin.
- Recommended Skills: C++, Wasm
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3381

#### Enabling LLM fine tuning in the WASI-NN ggml plugin

- Description: WasmEdge is a lightweight and cross-platform runtime for LLM applications. It allows developers to create LLM apps on a Mac or Windows dev machine, compile them to Wasm, and deploy them on Nvidia machines without any changes to the binary app. It achieves application portability across CPUs and GPUs by supporting a W3C standard API called  [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn), which abstracts GPU-related AI functions as high-level APIs. At this stage, however, only inference functions are supported. In this project, we aim to support fine-tuning features in WasmEdge. It will improve the developer experience for WasmEdge-enabled LLM tools. To achieve this, we plan to extend the current WASI-NN spec by adding a set of extra APIs, and then implement them by delegating to corresponding functions in llama.cpp embedded in the WasmEdge GGML plugin.
- Expected Outcome:
  - Use llama2-7b as the base LLM for fine-tuning; the final implementation should handle it correctly.
  - Extend the [WASI-NN](https://github.com/second-state/wasmedge-wasi-nn) spec if needed to support the fine-tuning feature.
  - Implement the fine-tuning functions inside [WASI-NN ggml plugin](https://github.com/WasmEdge/WasmEdge/blob/master/plugins/wasi_nn/ggml.h). They will call the corresponding functions in llama.cpp, as the inference functions do.
  - Implement the LoRA-related functions inside the WASI-NN ggml plugin to load the pre-trained LoRA and verify the fine-tuned model.
  - Documentation, examples, tutorials, and demonstration are required.
- Recommended Skills: C++, WebAssembly, LLM fine-tuning
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3209

#### Create a search-enabled API server for local LLMs

- Description: WasmEdge is a lightweight inference runtime for AI and LLM applications. The [LlamaEdge project](https://github.com/LlamaEdge) has developed an [OpenAI-compatible API server](https://github.com/LlamaEdge/LlamaEdge/tree/main/api-server) and a [server-side RAG app](https://llamaedge.com/docs/user-guide/server-side-rag) based on WasmEdge. In this project, we aim to use the LlamaEdge components to build a new API server that incorporates real-time Internet search results into LLM answers.
- Expected Outcome: An OpenAI-compatible local LLM API server that uses Google Search for supplemental context
- Recommended Skills:
  - Rust language
  - LlamaEdge
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3372

#### Finetune LLM models for Rust coding assistance

- Description: WasmEdge is a lightweight inference runtime for AI and LLM applications. We want to build specialized and finetuned models for WasmEdge community. The model should be supported by WasmEdge and its applications should benefit the WasmEdge community. 
  In this project, we will build and compare two finetuned model for Rust coding assistance.
  * A code review model. It aims to be a new backend for the [PR review bot](https://github.com/flows-network/github-pr-summary/) we currently use in the community.
  * A QA model. It should be able to answer user questions about the Rust language and provide explanations. Our goal is to provide an alternative to our [Learn Rust](https://flows.network/learn-rust) app.
- Expected Outcome: Two finetuned models based on Llama3-8b for Rust code review and QA.
- Recommended Skills:
  - Rust language
  - ChatGPT and Claude
  - LlamaEdge
  - llama.cpp
- Mentor(s):
  - Michael Yuan (@juntao, michael@secondstate.io)
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/3371

### KWOK

#### Enhancement of Test Cases

- Description: KWOK (Kubernetes WithOut Kubelet) is a toolkit that enables setting up a cluster of thousands of Nodes in seconds. KWOK is currently being used by a number of projects for testing and performance. It is crucial that KWOK itself behaves consistently. The following tests are currently being considered: Unit Test, E2E Test, Edge Cases.
- Expected Outcome: Improved test coverage for KWOK.
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Shiming Zhang (wzshiming, <wzshiming@hotmail.com>)
  - Zhenghao Zhu (Zhuzhenghao, <zhenghao.zhu@daocloud.io>)
- Upstream Issue: https://github.com/kubernetes-sigs/kwok/issues/1062

#### Enhancement of Technical Outcomes

- Description: KWOK (Kubernetes WithOut Kubelet) is a toolkit that enables setting up a cluster of thousands of Nodes in seconds. On the KWOK homepage (https://kwok.sigs.k8s.io/), we aim to document the technical outcomes of using KWOK. These outcomes represent the aggregation of some of KWOK's features to achieve a high-level technical goal. Currently, we have the following areas of focus: Chaos Testing, Performance, Simulation, and Scalability.
- Expected Outcome: A section of the KWOK website detailing these technical outcomes.
- Recommended Skills: Kubernetes, Technical Writing
- Mentor(s):
  - Shiming Zhang (wzshiming, <wzshiming@hotmail.com>)
  - Zhenghao Zhu (Zhuzhenghao, <zhenghao.zhu@daocloud.io>)
- Upstream Issue: https://github.com/kubernetes-sigs/kwok/issues/1063

### OpenKruise 

#### Enhancement for Kruise-Game Dashboard

- Description: The OpenKruiseGame Dashboard is presently in its basic form, and we aim to significantly expand its functionality going forward. We plan to introduce features such as the ability to filter game servers and perform batch updates on them.
- Expected Outcome: new release Dashboard which supports searching, querying, updating objects in batch.
- Recommended Skills: Kubernetes, nodejs, javascript
- Mentor(s):
  - Qiuyang Liu (@chrisliu1995, chrisliu1995@163.com)
  - Zhongwei Liu (@ringtail, zhongwei.lzw@alibaba-inc.com)
- Upstream Issue: https://github.com/openkruise/kruise-game/issues/139
