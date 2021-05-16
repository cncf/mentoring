## Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

- [Projects ideas](#projects-ideas)
  - [Template](#template)
  - [Sample](#sample)
    - [Prometheus (sample)](#prometheus-sample)
      - [Refactor the APIs for better readability and less maintenance overhead](#refactor-the-apis-for-better-readability-and-less-maintenance-overhead)
  - [Proposed Project ideas](#proposed-project-ideas)
    - [Buildpacks](#buildpacks)
      - [Embed source metadata in OCI image](#embed-source-metadata-in-oci-image)
    - [CoreDNS](#coredns)
      - [Add ACME protocol support for certificate management with DNS](#add-acme-protocol-support-for-certificate-management-with-dns)
    - [Cortex](#cortex)
      - [Cue support and validation for the Cortex config.](#cue-support-and-validation-for-the-cortex-config)
    - [Keptn](#keptn)
      - [Support for generic webhook execution](#support-for-generic-webhook-execution)
      - [Provide a hub for Keptn integrations](#provide-a-hub-for-keptn-integrations)
    - [Meshery](#meshery)
      - [Service mesh playground](#service-mesh-playground)
    - [Racklet](#racklet)
      - [Open source scale-model of Data Centers using commodity compute like Raspberry Pis](#open-source-scale-model-of-data-centers-using-commodity-compute-like-raspberry-pis)
    - [Tremor](#tremor)
      - [Modular sub-queries in tremor-query](#modular-sub-queries-in-tremor-query)
      - [Tremor Web Redesign - Make tremor’s web presence awesome](#tremor-web-redesign---make-tremors-web-presence-awesome)
    - [Kyverno](#kyverno)
      - [Test mutate and generate policies via the Kyverno CLI](#test-mutate-and-generate-policies-via-the-kyverno-cli)
    - [Kubernetes Policy Working Group (WG)](#kubernetes-policy-working-group-wg)
      - [Falco Adapter](#falco-adapter)
      - [Image Scanner Adapter](#image-scanner-adapter)
    - [Vitess](#vitess)
      - [Add testing framework for Django to ensure compatibility with Vitess](#add-testing-framework-for-django-to-ensure-compatibility-with-vitess)
    - [TiKV](#tikv)
      - [Implement Node client](#implement-node-client)
    - [KubeEdge](#kubeedge)
      - [Refactor the cloudStream to pass-through the request instead of parsing the web path](#refactor-the-cloudstream-to-pass-through-the-request-instead-of-parsing-the-web-path)
      - [Improve the KubeEdge website](#improve-the-kubeedge-website)

### Template

```
#### CNCF Project Name
##### Title

- Description:
- Recommended Skills:
- Mentor(s):
- Upstream Issue (URL):
```

### Sample

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Issue: <https://github.com/prometheus/prometheus/issues/3416>

### Proposed Project ideas

#### Buildpacks

##### Embed source metadata in OCI image

- Description: As a buildpack user using `pack`, I would like to be able to inspect the final app image and determine where the source of the code is located as well as what version (keeping in consideration SCM systems) was used.
- Recommended Skills: Golang, Docker (Containers)
- Mentor(s): Javier Romero (@jromero)
- Issue: <https://github.com/buildpacks/pack/issues/1139>

#### CoreDNS

##### Add ACME protocol support for certificate management with DNS

- [CoreDNS](https://github.com/coredns/coredns) is a cloud-native DNS server with a focus on service discovery. While best known as the default DNS server for Kubernetes, CoreDNS is capable of handle many other scenarios within or outside of Kubernetes clusters for make easy infrastructure management. One such case is the certificate management. This project is to provide ACME protocol support so that it is possible to have automatic certificate management through CoreDNS. More details and discussions are available in <https://github.com/coredns/coredns/issues/3460>.
- Recommended Skills: Golang, DNS, TLS, Certificate Management
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Issue: <https://github.com/coredns/coredns/issues/3460>

#### Cortex

##### Cue support and validation for the Cortex config.

- Description: [Cortex](https://github.com/cortexproject/cortex) is a
  cloud-native Prometheus compatible monitoring system. It is made up of a set
  of microservices that can be composed into an architecture that fits multiple
  use cases. However, this level of flexibility can lead to complexity in the
  configuration file. One way to handle this complexity is first-class
  validation support for the config. This is where [Cue](https://cuelang.org/)
  comes in. Cue provides data validation as a language feature and has solid
  support for Go. We think enabling Cortex to be configured using Cue and
  creating a Cue specification for the Cortex configuration file and other file
  types specific to Cortex would be a good step forward in improving the
  usability of the project.
- Recommended Skills: Golang
- Mentor(s): Jacob Lisi (@jtlisi)
- Issue: <https://github.com/cortexproject/cortex/issues/4095>

#### Keptn

##### Support for generic webhook execution

- Description: As a user, I want to be able to call arbitrary URLs via webhooks that are registered on Keptn events to interact with systems outside of Keptn. Therefore, I would like to use a templating mechanism to define payloads to be able to interact with external systems.
- Recommended Skills: golang
- Mentor(s): Jürgen Etzlstorfer (@jetzlstorfer)
- Issue: <https://github.com/keptn/keptn/issues/3822>

##### Provide a hub for Keptn integrations

- Description: Currently, Keptn services and integrations can be found on an overview page at https://keptn.sh/docs/integrations/ While this served fine as a central overview of all currently supported integrations, a more sophisticated "integrations hub" is desired. The hub should list all available integrations including their name, status, install numbers/github stars, description, and installation instructions. The project includes a research task of other hubs and how they are built.
- Recommended Skills: UX/UI, JavaScript, GoLang (a plus but not mandatory)
- Mentor(s): Jürgen Etzlstorfer (@jetzlstorfer)
- Issue: <https://github.com/keptn/keptn/issues/3406>

#### Meshery

##### Service mesh playground

- Description: Create the world’s service mesh playground. Meshery’s genesis is that of helping teach people about service mesh technology and enabling to operate this type of cloud native infrastructure confidently. The proposed project is aimed at furthering this mission with interactive API documentation connected to a service mesh learning playground (a running instance of Meshery).
- Recommended Skills: Golang, ReactJS
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)),  Utkarsh Srivastava ([@utkarshdev23](https://twitter.com/utkarshdev23))
- Issue: <https://github.com/layer5io/meshery/issues/2931>

#### Service Mesh Interface

##### Conformance Program

- Description: Ensure that a service mesh is properly configured and that its behavior conforms to official SMI specifications. Advance the definition of conformance tests and the test framework, Meshery (see [design specification](https://docs.google.com/document/d/1HL8Sk7NSLLj-9PRqoHYVIGyU6fZxUQFotrxbmfFtjwc/edit)).
- Recommended Skills**: Golang, ReactJS, GitHub Actions 
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), 
- Issue: [https://github.com/servicemeshinterface/smi-spec/issues/70](https://github.com/servicemeshinterface/smi-spec/issues/70)

#### Racklet

##### Open source scale-model of Data Centers using commodity compute like Raspberry Pis

- Description:

  ```
  “The future is already here - it's just not evenly distributed” - William Gibson

  We’d like to introduce an idea for a new open-source project: Racklet. It’s a fully-integrated, Raspberry Pi form-factor
  server rack and software stack that aims to be a scale model of hyperscaler datacenters. All layers of the stack
  are 100% OSS/OSH, and will be developed together with the community. It’s reproducible through open PCB designs,
  3D printed casing, and commodity, off-the-shelf hardware.

  We want to lower the barrier of entry for becoming cloud native. Racklet aims to inspire users to explore how
  modern server architectures work, in a tangible and educational way. Emphasis is put on security, knowledge
  sharing, extensibility, and portability.

  The goal is to conceptually map to real environments and provide an accessible and well-documented path to welcome
  future talents to the world of cloud native.
  ```

- Recommended Skills: Go, Rust, Kubernetes, Linux, Raspberry Pi, API and library design, Security, Documentation, GitOps, Embedded Systems, Electronics, Continuous Integration, Virtualization
- Mentor(s): Davanum Srinivas ([@dims](https://github.com/dims)), Ron Minnich (https://github.com/rminnich)
- Request For Comments (RFC) Description (URL): <https://docs.racklet.io/rfcs/0001-high-level-architecture.html>

#### Tremor

##### Modular sub-queries in tremor-query

- Description:
  Currently tremor supports composition through composing pipelines together, through function composition and through allowing references to query operator definitions and constants in externalizable modules that can be loaded via a module path.

  It would be excellent if the modularity in tremor extended fully to the query language so that distinct subgraphs could be modularized and consumed by multiple queries to optimise for reuse of flow oriented logic in tremor.

  This would require extending module support in the tremor query language to support sub-graph definitions with parameters that can be declared and used as part of a higher level query.

  Modules in tremor-query in their current state: <https://docs.tremor.rs/tremor-query/modules/>

  This project idea involves designing the sub-graph module syntax and semantics and implementing changes to the lexer, grammar, optimizers and runtime. It is most suited to candidates who are interested in programming language evolution and design.

- Recommended Skills: Rust, Parsers, Programming Language Design/Implementation (Interest)
- Mentor(s): Darach Ennis (@darach), Heinz N. Gies (@Licenser), Matthias Wahl (@mfelsche)
- Upstream Issue (URL): <https://github.com/tremor-rs/tremor-runtime/issues/940>

##### Tremor Web Redesign - Make tremor’s web presence awesome

- Description:
  As an early stage project we’ve biased in favour of documenting the essentials and getting content in place as fast as possible. This has worked well but a side-effect is 3 or 4 different sources of content ( www, docs, rfcs and courseware ).

  In concert with CNCF technical writing and learning best practices use your UX/web design and technical writing expertise for tremor where we as a team are unskilled - make our content awesome and the user experience exceptional.

  These are some improvements we did think of, but these are neither complete nor required, more suggestions are welcome:

- Unify the different content forms under a single consolidated theme and design
- Ease of navigation ( breadcrumbs )
- Preserve markdown for data entry ( we’re programmers ) and keep design separate ( we’re not designers and find this stuff super hard )
- A clean, easy to navigate theme with a focus on user experience
- Well integrated with our CI and doc generation tooling ( think gitops for docs and content )

  This task would suit a candidate who is interested in `full stack` engineering and the complete software development lifecycle with a specific focus or interest in engineering documentation, web design and communicating well designed content to others with a good user experience - exploiting principles of good technical writing and web design of content management systems for technical content consumers.

- Recommended Skills: UX/UI, technical writing, web design, documentation
- Mentor(s): Darach Ennis (@darach), Heinz N. Gies (@Licenser), Matthias Wahl (@mfelsche)
- Upstream Issue (URL): <https://github.com/tremor-rs/tremor-www-docs/issues/121>

#### Kyverno

##### Test mutate and generate policies via the Kyverno CLI

- Description: Kyverno is a Kubernetes native policy manager that also can be used in a CI/CD pipeline. This project will extend the Kyverno command line tool to support mutate and generate rules and add more E2E/Unit Tests and offer test report based on the results.
- Recommended Skills: Golang, unit and feature testing.
- Mentor(s): Shuting Zhao (@realshuting), Jim Bugwadia (@JimBugwadia)
- Issue: https://github.com/kyverno/kyverno/issues/1821

#### Kubernetes

##### Improvements to Cluster API provider for GCP (CAPG)

- Description: The Cluster API is a Kubernetes project to bring declarative, Kubernetes-style APIs to cluster creation, configuration, and management. CAPG provides this Kubernetes-native declarative infrastructure for GCP. The project would start with some help wanted issues around quick start and documentation, this will help with understanding mentee with CAPI/CAPG concepts and current implementation. Then we will move on to some long pending improvements documented in the issues link below.
- Recommended Skills: Golang, unit and feature testing.
- Mentor(s): Davanum Srinivas (@dims), Carlos Tadeu Panato Junior (@cpanato)
- Issue: https://github.com/kubernetes-sigs/cluster-api-provider-gcp/issues

#### Kubernetes Policy Working Group (WG)

The Kubernetes policy working group focuses on developing tools and solutions that make Kubernetes secure and easiser to use.

##### Falco Adapter

- Description:
  This project will develop an adapter to run Falco in any Kubernetes cluster and periodically generate or update a [Policy Report custom resource](https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/master/policy-report/README.md). The candidate will learn about Kubernetes controllers and various security topics.
- Recommended Skills: Linux, Golang, CLI, Kubernetes
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/51

##### Image Scanner Adapter

- Description:
  This project will develop an adapter to run an image scanning tool (like Clair or Trivy) in any Kubernetes cluster and periodically generate or update a [Policy Report custom resource](https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/master/policy-report/README.md). The candidate will learn about Kubernetes controllers, image security and management, and Kubernetes custom resources.
- Recommended Skills: Linux, Golang, CLI, Kubernetes
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/54

#### Vitess

##### Add testing framework for Django to ensure compatibility with Vitess

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. To this end, we would like to add a comprehensive test suite to ensure compatibility with [Django](https://www.djangoproject.com/) framework. The mentee would be introduced to the world of distributed databases and how everything comes together without the user realizing the difference. They would learn how to run Vitess and about comprehensive testing techniques.
- Recommended Skills: python, django, bash
- Mentor(s): Manan Gupta (@GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/7905>

#### TiKV

##### Implement Node client

- Description: TiKV is a distributed KV database. It support using clients in Rust, Golang, Java, C++ and Python, and the Node client is the last missing piece. This program is going to implement Node client on top of Rust client just like Python client and C++ client.
- Recommended Skills: JavaScript, TypeScript, Rust
- Mentor(s): Liming Deng (@iosmanthus), Andy Lok (@andylokandy)
- Issue: <https://github.com/tikv/tikv/issues/10054>

#### KubeEdge

##### Refactor the cloudStream to pass-through the request instead of parsing the web path

- Description: Edgestream is used to handle the request from apiserver, then forward the request to edged through tunnel. We will find a way to pass-through the request, through the hijack stuff, instead of parsing the web path manually.
- Recommended Skills: Golang, Kubernetes, KubeEdge
- Mentor(s): Fei Xu (@fisherxu)
- Issue: <https://github.com/kubeedge/kubeedge/issues/2756>

##### Improve the KubeEdge website

- Description: Improve the design and content of the kubeedge website.
- Recommended Skills: JavaScript, KubeEdge
- Mentor(s): Kevin Wang (@kevin-wangzefeng)
- Issue: <https://github.com/kubeedge/website/issues/70>

#### Thanos

##### Enhanced Block Viewer UI

- Description: The Thanos BlockViewer UI has proven to be an essential part of the debuggability story for the Thanos project. It allows administrators to see the exact state of data in Object Storage in a provider-agnostic way. This project is about extending this UI with richer features, context, and actions to improve observability and increase control.
- Recommended Skills: React, TypeScript, Golang, ObjectStorage
- Mentor(s): Prem Saraswat (@onprem), Lucas Servén Marín (@squat)
- Issue: https://github.com/thanos-io/thanos/issues/3112, https://github.com/thanos-io/thanos/issues/3220, https://github.com/thanos-io/thanos/issues/3221, https://github.com/thanos-io/thanos/issues/3308

##### Descriptive API definitions using OpenAPI and Protobuf

- Description: In order to improve Thanos usage for users, we would like to define our APIs, both HTTP and gRPC, in protobuf/OpenAPI and expose the automatically generated documentation in the website. We also want to define the configuration of our components in protobuf. This would allow users to use tools for documentation, validation, type checking and even code generation to use our APIs efficiently. During this project we also expect collaboration with the Prometheus project to implement similar improvements on Prometheus' side. https://github.com/cncf/mentoring/blob/master/summerofcode/2021.md#port-the-prometheus-api-to-openapi. Optionally we would like to work on the index page on every Thanos component server that will expose those resources for easier debug.
- Recommended Skills: Golang, Protocol Buffers, Yaml (:
- Mentor(s): Bartlomiej Plotka (@bwplotka), Prem Saraswat (@onprem)
- Issue: https://github.com/thanos-io/thanos/issues/4102

#### OpenEBS

##### Default Kyverno policies for OpenEBS

- Description: Kyverno is a Kubernetes native policy manager that can be used in place of PodSecurityPolicies. OpenEBS helm charts currently set up PSPs for many of its Storage engines. This project is to convert PSPs into corresponding Kyverno policies. The OpenEBS storage engines also uses a custom admission webhook validator. The scope of the project can extend to replacing the custom validators with Kyverno policies.
- Recommended Skills: Golang, unit and feature testing.
- Mentor(s): Kiran Mova(@kmova), Prateek Pandey (@prateekpandey14)
- Issue: https://github.com/openebs/openebs/issues/3385

##### Enforcing XFS quotas on OpenEBS hostpath Local PV

- Description: OpenEBS Local PV hostpath is the most simple to use Local PV option available for Kubernetes today. Many of the applications use XFS filesystem to create Local PVs. This project is to implement XFS project quota on the OpenEBS Local PV subdirectory to restrict pods from exceeding the Quota assigned to them via the PVC request.
- Recommended Skills: Golang, XFS, unit and feature testing.
- Mentor(s): Kiran Mova(@kmova), Harsh Thakur (@realHarshThakur)
- Issue: https://github.com/openebs/dynamic-localpv-provisioner/issues/13
