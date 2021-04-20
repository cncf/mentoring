## Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

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

#### CoreDNS

##### Add ACME protocol support for certificate management with DNS

- [CoreDNS](https://github.com/coredns/coredns) is a cloud-native DNS server with a focus on service discovery. While best known as the default DNS server for Kubernetes, CoreDNS is capable of handle many other scenarios within or outside of Kubernetes clusters for make easy infrastructure management. One such case is the certificate management. This project is to provide ACME protocol support so that it is possible to have automatic certificate management through CoreDNS. More details and discussions are available in <https://github.com/coredns/coredns/issues/3460>.
- Recommended Skills: Golang, DNS, TLS, Certificate Management
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Issue: <https://github.com/coredns/coredns/issues/3460>

#### Keptn

##### Support for generic webhook execution

- Description: As a user, I want to be able to call arbitrary URLs via webhooks that are registered on Keptn events to interact with systems outside of Keptn. Therefore, I would like to use a templating mechanism to define payloads to be able to interact with external systems.
- Recommended Skills: golang
- Mentor(s): Jürgen Etzlstorfer (@jetzlstorfer)
- Issue: <https://github.com/keptn/keptn/issues/3822>

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
- Mentor(s): Davanum Srinivas ([@dims](https://github.com/dims))
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


#### Kubernetes Policy Working Group (WG)

##### Falco Adapter

- Description:
  The Kubernetes policy working group focuses on developing tools and solutions that make Kubernetes secure and easiser to use. This project will develop an adapter to run Falco in any Kubernetes cluster and periodically generate or update a [Policy Report custom resource](https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/master/policy-report/README.md). The candidate will learn about Kubernetes controllers and various security topics.
- Recommended Skills: Linux, Golang, CLI, Kubernetes
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/51

#### Vitess

##### Add testing framework for Django to ensure compatibility with Vitess

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. To this end, we would like to add a comprehensive test suite to ensure compatibility with [Django](https://www.djangoproject.com/) framework. The mentee would be introduced to the world of distributed databases and how everything comes together without the user realizing the difference. They would learn how to run Vitess and about comprehensive testing techniques.
- Recommended Skills: python, django, bash
- Mentor(s): Manan Gupta (@GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/7905>
