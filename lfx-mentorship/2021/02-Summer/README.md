## Q2

_Status: Completed_

- [Q2](#q2)
  - [Timeline](#timeline)
- [Proposed projects](#proposed-projects)
- [Participating Projects](#participating-projects)
    - [Buildpacks](#buildpacks)
      - [Embed source metadata in OCI image](#embed-source-metadata-in-oci-image)
    - [CoreDNS](#coredns)
      - [Add ACME protocol support for certificate management with DNS](#add-acme-protocol-support-for-certificate-management-with-dns)
    - [Cortex](#cortex)
      - [Cue support and validation for the Cortex config](#cue-support-and-validation-for-the-cortex-config)
    - [Keptn](#keptn)
      - [Support for generic webhook execution](#support-for-generic-webhook-execution)
      - [Provide a hub for Keptn integrations](#provide-a-hub-for-keptn-integrations)
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
    - [Thanos](#thanos)
      - [Enhanced Block Viewer UI](#enhanced-block-viewer-ui)
      - [Descriptive API definitions using OpenAPI and Protobuf](#descriptive-api-definitions-using-openapi-and-protobuf)
    - [OpenEBS](#openebs)
      - [Default Kyverno policies for OpenEBS](#default-kyverno-policies-for-openebs)
      - [Enforcing XFS quotas on OpenEBS hostpath Local PV](#enforcing-xfs-quotas-on-openebs-hostpath-local-pv)
    - [Meshery](#meshery)
      - [Service mesh playground](#service-mesh-playground)

### Timeline

**Summer Term: June 1st - August 31st**

- mentorships available on LFX Mentorship: May 3rd, 2021
- applications open: May 3rd - May 17th (3 weeks)
- application review/admission decisions/HR paperwork: May 17th - May 31st

Mentorship duration - three months \(12 weeks - full-time schedule\)

- June 1 (Week 1): Mentorship program begins with the initial work assignments
- July 11 (End of Week 6): Midterm mentee evaluations and first stipend payments
- August 31 (End of Week 12): Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals

## Proposed projects

See the [project ideas](./project_ideas.md) list.

## Participating Projects

#### Buildpacks

##### [Embed source metadata in OCI image](https://mentorship.lfx.linuxfoundation.org/project/25ea21de-7f06-43ae-a4a6-52262ce1193c)

- Description: As a buildpack user using `pack`, I would like to be able to inspect the final app image and determine where the source of the code is located as well as what version (keeping in consideration SCM systems) was used.
- Recommended Skills: Golang, Docker (Containers)
- Mentor(s): Javier Romero (@jromero)
- Issue: <https://github.com/buildpacks/pack/issues/1139>

#### CoreDNS

##### [Add ACME protocol support for certificate management with DNS](https://mentorship.lfx.linuxfoundation.org/project/beb3a680-3f78-4716-b072-7f547cf417ab)

- [CoreDNS](https://github.com/coredns/coredns) is a cloud-native DNS server with a focus on service discovery. While best known as the default DNS server for Kubernetes, CoreDNS is capable of handle many other scenarios within or outside of Kubernetes clusters for make easy infrastructure management. One such case is the certificate management. This project is to provide ACME protocol support so that it is possible to have automatic certificate management through CoreDNS. More details and discussions are available in <https://github.com/coredns/coredns/issues/3460>.
- Recommended Skills: Golang, DNS, TLS, Certificate Management
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Issue: <https://github.com/coredns/coredns/issues/3460>

#### Cortex

##### [Cue support and validation for the Cortex config](https://mentorship.lfx.linuxfoundation.org/project/faccbbff-f651-4bc5-a825-be0f395315c9)

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

##### [Support for generic webhook execution](https://mentorship.lfx.linuxfoundation.org/project/38cafd48-6ffb-44e8-9ed1-5c467bc69fd2)

- Description: As a user, I want to be able to call arbitrary URLs via webhooks that are registered on Keptn events to interact with systems outside of Keptn. Therefore, I would like to use a templating mechanism to define payloads to be able to interact with external systems.
- Recommended Skills: golang
- Mentor(s): Jürgen Etzlstorfer (@jetzlstorfer)
- Issue: <https://github.com/keptn/keptn/issues/3822>

##### [Provide a hub for Keptn integrations](https://mentorship.lfx.linuxfoundation.org/project/e978885c-fe45-48b1-9a67-9cc9ffd68e82)

- Description: Currently, Keptn services and integrations can be found on an overview page at https://keptn.sh/docs/integrations/ While this served fine as a central overview of all currently supported integrations, a more sophisticated "integrations hub" is desired. The hub should list all available integrations including their name, status, install numbers/github stars, description, and installation instructions. The project includes a research task of other hubs and how they are built.  
- Recommended Skills: UX/UI, JavaScript, GoLang (a plus but not mandatory) 
- Mentor(s): Jürgen Etzlstorfer (@jetzlstorfer)
- Issue: <https://github.com/keptn/keptn/issues/3406>

#### Racklet

##### [Open source scale-model of Data Centers using commodity compute like Raspberry Pis](https://mentorship.lfx.linuxfoundation.org/project/622bbf07-b001-470c-8da8-b714bb127183)

- Description:
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

- Recommended Skills: Go, Rust, Kubernetes, Linux, Raspberry Pi, API and library design, Security, Documentation, GitOps, Embedded Systems, Electronics, Continuous Integration, Virtualization
- Mentor(s): Davanum Srinivas ([@dims](https://github.com/dims))
- Request For Comments (RFC) Description (URL): <https://docs.racklet.io/rfcs/0001-high-level-architecture.html>

#### Tremor

##### [Modular sub-queries in tremor-query](https://mentorship.lfx.linuxfoundation.org/project/de95a031-903b-4129-b34f-f39611fd176c)

- Description:
  Currently tremor supports composition through composing pipelines together, through function composition and through allowing references to query operator definitions and constants in externalizable modules that can be loaded via a module path.
 It would be excellent if the modularity in tremor extended fully to the query language so that distinct subgraphs could be modularized and consumed by multiple queries to optimise for reuse of flow oriented logic in tremor.
  This would require extending module support in the tremor query language to support sub-graph definitions with parameters that can be declared and used as part of a higher level query.
  Modules in tremor-query in their current state: <https://docs.tremor.rs/tremor-query/modules/>
  This project idea involves designing the sub-graph module syntax and semantics and implementing changes to the lexer, grammar, optimizers and runtime. It is most suited to candidates who are interested in programming language evolution and design.

- Recommended Skills: Rust, Parsers, Programming Language Design/Implementation (Interest)
- Mentor(s): Darach Ennis (@darach), Heinz N. Gies (@Licenser), Matthias Wahl (@mfelsche)
- Upstream Issue (URL): <https://github.com/tremor-rs/tremor-runtime/issues/940>

##### [Tremor Web Redesign - Make tremor’s web presence awesome](https://mentorship.lfx.linuxfoundation.org/project/336820e5-b46e-4184-a7eb-8f0cb4dd18b4)

- Description:
  As an early stage project we’ve biased in favour of documenting the essentials and getting content in place as fast as possible. This has worked well but a side-effect is 3 or 4 different sources of content ( www, docs, rfcs and courseware ).
  In concept with CNCF technical writing and learning best practices use your UX/web design and technical writing expertise for tremor where we as a team are unskilled - make our content awesome and the user experience exceptional.
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

##### [Test mutate and generate policies via the Kyverno CLI](https://mentorship.lfx.linuxfoundation.org/project/9ddced83-279c-460d-869a-3f92e9c98c2c)

- Description: Kyverno is a Kubernetes native policy manager that also can be used in a CI/CD pipeline. This project will extend the Kyverno command line tool to support mutate and generate rules and add more E2E/Unit Tests and offer test report based on the results.
- Recommended Skills: Golang, unit and feature testing.
- Mentor(s): Shuting Zhao (@realshuting), Jim Bugwadia (@JimBugwadia)
- Issue: https://github.com/kyverno/kyverno/issues/1821

#### Kubernetes Policy Working Group (WG)

The Kubernetes policy working group focuses on developing tools and solutions that make Kubernetes secure and easiser to use.

##### [Falco Adapter](https://mentorship.lfx.linuxfoundation.org/project/cab6e242-33d5-427d-a408-9adff1a95271)

- Description:
  This project will develop an adapter to run Falco in any Kubernetes cluster and periodically generate or update a [Policy Report custom resource](https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/master/policy-report/README.md). The candidate will learn about Kubernetes controllers and various security topics.
- Recommended Skills: Linux, Golang, CLI, Kubernetes
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/51

##### [Image Scanner Adapter](https://mentorship.lfx.linuxfoundation.org/project/e88fb12c-5943-4c16-becc-83b449b15e9f)

- Description:
  This project will develop an adapter to run an image scanning tool (like Clair or Trivy) in any Kubernetes cluster and periodically generate or update a [Policy Report custom resource](https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/master/policy-report/README.md). The candidate will learn about Kubernetes controllers, image security and management, and Kubernetes custom resources.
- Recommended Skills: Linux, Golang, CLI, Kubernetes
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/54

#### Vitess

##### [Add testing framework for Django to ensure compatibility with Vitess](https://mentorship.lfx.linuxfoundation.org/project/76f2edd5-0f1c-4755-90a1-41ee09fb4d4d)

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. To this end, we would like to add a comprehensive test suite to ensure compatibility with [Django](https://www.djangoproject.com/) framework. The mentee would be introduced to the world of distributed databases and how everything comes together without the user realizing the difference. They would learn how to run Vitess and about comprehensive testing techniques.
- Recommended Skills: python, django, bash
- Mentor(s): Manan Gupta (@GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/7905>

#### TiKV

##### [Implement Node client](https://mentorship.lfx.linuxfoundation.org/project/eb96b91a-85c5-4ee5-aae4-46c9f10981e0)

- Description: TiKV is a distributed KV database. It support using clients in Rust, Golang, Java, C++ and Python, and the Node client is the last missing piece. This program is going to implement Node client on top of Rust client just like Python client and C++ client.
- Recommended Skills: JavaScript, TypeScript, Rust
- Mentor(s): Liming Deng (@iosmanthus), Andy Lok (@andylokandy)
- Issue: <https://github.com/tikv/tikv/issues/10054>

#### KubeEdge

##### [Refactor the cloudStream to pass-through the request instead of parsing the web path](https://mentorship.lfx.linuxfoundation.org/project/446813c7-f2a6-4d81-ac64-ba407333fabe)

- Description: Edgestream is used to handle the request from apiserver, then forward the request to edged through tunnel. We will find a way to pass-through the request, through the hijack stuff, instead of parsing the web path manually.
- Recommended Skills: Golang, Kubernetes, KubeEdge
- Mentor(s): Fei Xu (@fisherxu)
- Issue: <https://github.com/kubeedge/kubeedge/issues/2756>

##### [Improve the KubeEdge website](https://mentorship.lfx.linuxfoundation.org/project/5ad92659-907e-45b6-8cac-e5531c4696bd)

- Description: Improve the design and content of the kubeedge website.
- Recommended Skills: JavaScript, KubeEdge
- Mentor(s): Kevin Wang (@kevin-wangzefeng)
- Issue: <https://github.com/kubeedge/website/issues/70>

#### Thanos

##### [Enhanced Block Viewer UI](https://mentorship.lfx.linuxfoundation.org/project/3fee59ac-7716-4ad5-9282-ea63ccffea9b)

- Description: The Thanos BlockViewer UI has proven to be an essential part of the debuggability story for the Thanos project. It allows administrators to see the exact state of data in Object Storage in a provider-agnostic way. This project is about extending this UI with richer features, context, and actions to improve observability and increase control.
- Recommended Skills: React, TypeScript, Golang, ObjectStorage
- Mentor(s): Prem Saraswat (@onprem), Lucas Servén Marín (@squat)
- Issue: https://github.com/thanos-io/thanos/issues/3112, https://github.com/thanos-io/thanos/issues/3220, https://github.com/thanos-io/thanos/issues/3221, https://github.com/thanos-io/thanos/issues/3308

##### [Descriptive API definitions using OpenAPI and Protobuf](https://mentorship.lfx.linuxfoundation.org/project/dfccf818-c7f7-4074-9e1b-2805698d9d89)

- Description: In order to improve Thanos usage for users, we would like to define our APIs, both HTTP and gRPC, in protobuf/OpenAPI and expose the automatically generated documentation in the website. We also want to define the configuration of our components in protobuf. This would allow users to use tools for documentation, validation, type checking and even code generation to use our APIs efficiently. During this project we also expect collaboration with the Prometheus project to implement similar improvements on Prometheus' side. https://github.com/cncf/mentoring/blob/master/summerofcode/2021.md#port-the-prometheus-api-to-openapi. Optionally we would like to work on the index page on every Thanos component server that will expose those resources for easier debug.
- Recommended Skills: Golang, Protocol Buffers, Yaml (:
- Mentor(s): Bartlomiej Plotka (@bwplotka), Prem Saraswat (@onprem)
- Issue: https://github.com/thanos-io/thanos/issues/4102

#### OpenEBS

##### [Default Kyverno policies for OpenEBS](https://mentorship.lfx.linuxfoundation.org/project/35b9d57a-fc2c-4b49-a5b3-9a5cf74af66c)

- Description: Kyverno is a Kubernetes native policy manager that can be used in place of PodSecurityPolicies. OpenEBS helm charts currently set up PSPs for many of its Storage engines. This project is to convert PSPs into corresponding Kyverno policies. The OpenEBS storage engines also uses a custom admission webhook validator. The scope of the project can extend to replacing the custom validators with Kyverno policies. 
- Recommended Skills: Golang, unit and feature testing.
- Mentor(s): Kiran Mova(@kmova), Prateek Pandey (@prateekpandey14)
- Issue: https://github.com/openebs/openebs/issues/3385

##### [Enforcing XFS quotas on OpenEBS hostpath Local PV](https://mentorship.lfx.linuxfoundation.org/project/7cd6af42-6f86-4a77-a077-304dc7d82134)

- Description: OpenEBS Local PV hostpath is the most simple to use Local PV option available for Kubernetes today. Many of the applications use XFS filesystem to create Local PVs. This project is to implement XFS project quota on the OpenEBS Local PV subdirectory to restrict pods from exceeding the Quota assigned to them via the PVC request.   
- Recommended Skills: Golang, XFS, unit and feature testing.
- Mentor(s): Kiran Mova(@kmova), Harsh Thakur (@realHarshThakur)
- Issue: https://github.com/openebs/dynamic-localpv-provisioner/issues/13

#### Meshery

##### [Service mesh playground](https://mentorship.lfx.linuxfoundation.org/project/57571877-84ec-415a-ad0b-b076e20f3ad0)

- Description: Create the world’s service mesh playground. Meshery’s genesis is that of helping teach people about service mesh technology and enabling to operate this type of cloud native infrastructure confidently. The proposed project is aimed at furthering this mission with interactive API documentation connected to a service mesh learning playground (a running instance of Meshery).
- Recommended Skills: Golang, ReactJS
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)),  Utkarsh Srivastava ([@utkarshdev23](https://twitter.com/utkarshdev23))
- Issue: <https://github.com/layer5io/meshery/issues/2931>

