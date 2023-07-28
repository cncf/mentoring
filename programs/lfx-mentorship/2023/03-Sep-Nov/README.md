# Term 03 - 2023 September - November

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |   
| project proposals | Thur July 27, 5:00 PM PDT |
| mentee applications open | Wed Aug 2 - Tues 15, 5:00 PM PDT |
| application review/admission decisions | Wed Aug 16 - Tues Aug 29, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | Mon Sept 4 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | Wed Oct 11 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed Nov 22, 5:00 PM PST (Week 12) |
| Last day of term | Thur Nov 30 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2023/03-Sep-Nov/project_ideas.md, by Thursday, July 27, 2023.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

Table of Contents

---

## Accepted projects

### Armada

#### Build a virtual-kubelet provider for Armada

- Description: [Virtual Kubelet](https://github.com/virtual-kubelet/virtual-kubelet) is a way to bring a Kubernetes front end and allow for your execution environment to be something other than Kubernetes. We want to add a virtual-kubelet provider for Armada so we can allow for a k8 front end integration with Armada.
- Expected outcomes:
  - A provider for virtual-kubelet that allows integration of Armada with Virtual-Kubelet
- Recommend Skills: Go
- Mentor(s):
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): https://github.com/armadaproject/armada/issues/2702
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a80908c1-c05b-46c4-a41b-32392c4822cb

### CRI-O

#### Add additional log drivers to conmon-rs

- Description: conmon-rs is a container monitor written in Rust, used by CRI-O to monitor a container's lifecycle. Part of its responsibilities is log forwarding--taking the output of the container and writing that output to various places. Currently, conmon-rs supports one format: the one required by the Kubernetes CRI. The goal of this proposal is to add new log formats from the list of standardized ones, like JSON, Splunk, Journald.
- Expected outcome: A JSON log driver and Journald log driver are added to conmon-rs. A stretch goal of adding a Splunk log driver is also within scope.
- Recommended Skills: Rust, familiarity with containers
- Mentor(s):
  - Peter Hunt, haircommander, pehunt@redhat.com
  - Sascha Grunert, saschagrunert, sgrunert@redhat.com
- Upstream Issue (URL): https://github.com/containers/conmon-rs/issues/1126
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/99274b1a-694b-4af5-b7ca-39311f38a646

#### CRI stats KEP

- Description: [CRI stats KEP](https://github.com/kubernetes/enhancements/issues/2371) is an effort to take the container stats and metrics collection from cAdvisor and move it to the CRI implementations. CRI-O will soon have support for stats and metrics collected through CRI, but work needs to be done to verify and validate these fields, and make sure their collection is performant as possible.
- Expected outcome: A test suite verifying the correctness of CRI-O's stats and metrics collection, as well as data verifying performance regressions are minimal at worst.
- Recommended Skills: Golang, familiarity with containers
- Mentor(s):
  - Peter Hunt, haircommander, pehunt@redhat.com
  - Sohan Kunkerkar, sohankunkerkar, skunkerk@redhat.com
- Upstream Issue (URL): https://github.com/cri-o/cri-o/issues/7175
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cb189d71-3943-450a-9d5f-d71bd66d73c9

### Jaeger

#### Upgrade Jaeger UI to the latest version of React.js

- Description: Jaeger UI is built on React. While we are seemingly already on v18.x of React, the upgrade was not done across the board and some other dependencies are still lagging behind, e.g. `"@types/react": "16.8.7"`. It's also blocking upgrades of other dependencies. This project is likely to involve a substantial amount of code contribution, as certain upgrade require fixing the code to use the new APIs, and sometimes we may run into dependencies that are EOL and need to be replaced altogether.
- Expected Outcome: Ideal outcome is to have _all_ dependencies upgraded to the latest versions (with the help of @dependabot) and fix all deprecation warnings during the build. But incremental progress towards that goal is also acceptable.
- Recommended Skills: Javascript, Typescript, NPM, Yarn, Vite.js
- Mentor(s):
  - Yash Sharma (yashrsharma44@meta.com)
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/998
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/83cc55fe-b97a-4195-8dd2-cc9aed7e509c

#### Combine three distinct graph views in Jaeger UI into one

- Description: Jaeger UI provides several views to visualize service dependencies, also known as service topology maps. However, these views are using different drawing libraries, resulting in very different look & feel and inconsistent experience. One of the views is using a `plexus` library that was purposely built as part of Jaeger UI that provides rich capabilities for displaying graphs, which may be a good candidate for the other views.
- Expected Outcomes:
  - Remove the dependency on react-vis library (https://github.com/jaegertracing/jaeger-ui/issues/1597).
  - Use a single library for graph visualizations.
  - Provide consistent look and feel of different graph views.
- Recommended Skills: Javascript, Typescript, NPM, Yarn, Vite.js, web worker
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/1466
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/1e67c90b-de3e-4c4e-a2be-a5583a948864

#### Build official support in Jaeger for Elasticsearch 8

- Description: Jaeger has always supported Elasticsearch (ES) as an official backend. Unfortunately, the Go driver we are using, `olivere/elastic`, does not support ESv8 and not planning to release any new versions. Despite the licensing changes, Elasticsearch remains a popular choice and v8 support question often comes up. In this project we want to add official support for ESv8. However, we also want to take this opportunity to do a better alignment with the OpenTelemetry Collector, which already has an [ESv8 exporter](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/elasticsearchexporter), perhaps we can use it directly and minimize the amount of code.
- Expected Outcomes:
  - Use OTEL ESv8 exporter from Jaeger, if possible, otherwise build internal implementation
  - Stretch goal: use ES data as the source for Jaeger SPM views
- Recommended Skills: Go, Elasticsearch
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/4600
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/37cf2714-668d-4014-ac44-953f70f9dc8e

### Istio

#### Implement performance testing

- Description: Up until version 1.16, [Istio](https://istio.io/) published [performance and scale testing results](https://istio.io/v1.16/docs/ops/deployment/performance-and-scalability/). These should be returned to service, and updated to support ambient mesh. Third-party benchmarking tools should be updated to support testing the performance of ambient mesh.
- Expected Outcome: Performance testing pages are returned to istio.io, and include both sidecar and ambient mesh results.
- Recommended Skills:
  - Python
  - Networking
- Mentors:
  - Lin Sun (@linsun, lin.sun@solo.io)
- Upstream Issue: https://github.com/istio/istio/issues/44009
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bbebd511-1a3e-4c4f-b106-2f09690825c5

#### Documentation for Ambient Mesh

- Description: [Istio](https://istio.io/) is working on [a new operating mode called ambient mesh](https://istio.io/latest/blog/2022/introducing-ambient-mesh/). As this moves from experimental to the recommended method of operating a service mesh, we will need to revise our documentation to discuss the new model, explain the tradeoffs, and tell users how to choose.
- Expected Outcome: Revisions to Istio's documentation to reflect the availability of ambient mesh.  These will be maintained in a parallel branch of istio.io that can be pulled from when Ambient is in Beta or GA.
- Recommended Skills: 
  - Technical writing
  - Developer advocacy
- Mentors:
  - Lin Sun (lin.sun@solo.io)
- Upstream Issue: https://github.com/istio/istio.io/issues/13481
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/89ee4357-dd58-4e15-a601-c411742a587c

### Konveyor

#### Extend use-case of detecting deprecated Kubernetes API usage

- Description: [Konveyor](https://www.konveyor.io/) provides a [unified experience](https://github.com/konveyor/enhancements/tree/master/enhancements/unified_experience) of tools to help organizations modernize their applications at scale to Kubernetes and cloud-native technologies. We are looking for help on extending a use-case of detecting usage of [deprecated and removed Kubernetes APIs](https://kubernetes.io/docs/reference/using-api/deprecation-guide/) in applications.  This work will involve determining what API resources have been deprecated or removed in each version of Kubernetes and then building [Analyzer Rules](https://github.com/konveyor/analyzer-lsp/blob/main/docs/rules.md) to be contributed to our [Rulesets repository](https://github.com/konveyor/rulesets), curation or development of sample applications in Golang, Java, and YAML to aid test scenarios, and documentation to help show a guided walkthrough of this capability.  You can see the beginning of this use-case being addressed with a [sample rule](https://github.com/konveyor/analyzer-lsp/blob/main/rule-example.yaml#L42-L45) in this [demo of analyzer-lsp](https://github.com/konveyor/analyzer-lsp/tree/main#quick-demo). The development environment is based on Golang and Kubernetes. A minikube instance will work well for local development on Linux or Mac systems.
- Expected Outcome:
  - [Rules](https://github.com/konveyor/analyzer-lsp/blob/main/docs/rules.md) contributed to [konveyor/rulesets](https://github.com/konveyor/rulesets) to detect usage of deprecated or removed Kubernetes APIs.  Coverage for YAML, Golang, and Java source code, addition of this scenario into the project's automated test suite, and documentation of a guided scenario showing usage of these rules via a curated set of application source code examples.
- Recommended Skills:
  - Go
  - Basic understanding of interaction with Kubernetes via kubectl
  - Basic software development skills (command line, git)
- Mentor(s):
  - Emily McMullan (@eemcmullan, emcmulla@redhat.com)
  - Jonah Sussman (@JonahSussman, jsussman@redhat.com)
  - John Matthews (@jwmatthews, jwmatthews@gmail.com)
- Upstream Issue:
  - https://github.com/konveyor/operator/issues/251
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/989d0ad3-976a-4514-b2fc-34e9e6081567

#### Move2Kube: Compile Move2Kube to WASM/WASI and run it in the browser

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. We want to compile targetting WASM/WASI and run the resulting WASM module in the browser. This will help up showcase Move2Kube for demos and allow users to quickly try out Move2Kube without having to install it or any of its dependencies.
- Expected Outcome:
  - Run Move2Kube CLI in the browser using WebAssembly.
- Recommended Skills:
  - Golang
  - WASM
- Mentor(s):
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
  - Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1062
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/c2b5f721-2666-4d9e-85d6-7bedae27e144

#### Move2Kube: WASM Transformers

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. Move2Kube has a very plugin friendly architecture, users can write custom logic in the form of "Transformers" that Move2Kube can integrate seamlessly into its transformation pipeline. So far we have support for both Starlark and container image based transformers. We would like to support writing transformers as WASM modules that Move2Kube can run. WASM provides extensive sandboxing for security, it allows writing transformers in different language stacks like Rust, C/C++, etc. other than Golang, and WASM is just as lightweight and fast as Starlark.
- Expected Outcome:
  - Implement a feature in Move2Kube CLI to allow running WASM modules as custom transformers.
- Recommended Skills:
  - Golang
  - WASM
- Mentor(s):
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
  - Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1061
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ec286a9e-e48d-4c83-a991-9c79a4ec213a

#### Move2Kube: Advanced Resources support - ArgoCD, Tekton, Stateful Set, etc.

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. Currently we have rudimentary support for resources such as ArgoCD, Tekton, etc. We need to enhance this to make it useful. Example: https://github.com/konveyor/move2kube/issues/930
- Expected Outcome:
  - More comprehensive support for advanced K8s resources so as to support real world use cases.
- Recommended Skills:
  - Golang
  - K8s
  - ArgoCD
  - Tekton
- Mentor(s):
  - Akash Nayak (@Akash-Nayak, akash.nayak1@ibm.com)
  - Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/1063
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/b9aad4e2-d9c7-405e-8482-5aced0a4ecdb

