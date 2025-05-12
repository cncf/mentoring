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

### OpenCost

#### Enterprise Ready OpenCost: Integration Testing

- Description:
We need enhanced integration tests to prepare OpenCost for graduation and enterprise readiness. This proposed project will deliver a comprehensive suite of integration tests designed to facilitate development and contribution by third parties, while protecting the stability of OpenCost for our tens of thousands of users. These tests will validate both the quality of the data collected by OpenCost, and the correct operation of the APIs. We have recently implemented a pipeline that builds real stacks for these tests to hit - we now need to fill that framework up with great tests. See the testing strategy document @ https://github.com/opencost/opencost/blob/develop/docs/testing/AUTOMATED_TESTING.md for the current state of testing, and the infrastructure that we have put into place to support this mentorship effort. 

- Expected Outcome
  - A comprehensive integration test suite as defined in the linked ticket. 
  - All tests run and pass automatically in pre-existing per-push integration test pipeline. 
  - Approach for each integration test is documented 
  - Endpoint coverage % and parameter coverage % is calculated 
  - Any unfinished or follow on work is documented via issues on OpenCost

- Recommended Skills
  - Test Development
  - REST API
  - Golang
  - GitHub Actions
  - Public Cloud Providers

- Mentor
  - Alex Meijer (@ameijer , alexander.meijer@ibm.com)
  - Cliff Colvin (@cliffcolvin , clifford.colvin@ibm.com)

- Upstream Issue: [https://github.com/opencost/opencost/issues/3141](https://github.com/opencost/opencost/issues/3141)

### Cartography

#### Fill in missing AWS resource types for CloudGoat scenarios

- **Description**:
  Cartography currently does not ingest many of the AWS resource types used in popular CloudGoat attack/detection scenarios.  This mentorship project will extend Cartography’s AWS plugin and schema to cover these missing resources, enabling security practitioners to visualize and query full CloudGoat labs end‑to‑end.  The mentee will:
  1. Audit the AWS resource types used across selected CloudGoat scenarios.
  2. Update Cartography’s schema to include each resource, with appropriate labels and key properties.
  3. Implement ingestion functions in the AWS plugin, including relationship discovery (e.g., linking log groups to CloudWatch alarms).
  4. Add Cypher sample queries and Python examples to the docs demonstrating how to explore one's infrastructure.

- **Expected Outcome**:
  - Support for the full list of AWS resources used in CloudGoat (e.g. SSM parameters, CodeBuild projects, CloudWatch metrics/alarms, SNS topics/subscriptions, ECS/EFS resources, Glue jobs, API Gateway, Cognito, Secrets Manager, etc.).
    - Full list in the linked issue
  - Automated test coverage for each new resource type.
  - Updated documentation and example notebooks showing end‑to‑end CloudGoat use cases with Cartography.

- **Recommended Skills**:
  - Python  
  - AWS SDK (boto3)  
  - Graph databases / Neo4j (Cypher)  
  - Familiarity with Cartography’s module architecture  
  - Basic security knowledge 

- **Mentor(s)**:
  - Kunaal Sikka (@kunaals, kunaal@subimage.io)
  - Alex Chantavy (@achantavy, alex@subimage.io)

- **Upstream Issue**: https://github.com/cartography-cncf/cartography/issues/1552

### CloudNativePG

#### Implementing “Declarative Management of PostgreSQL Foreign Data Wrappers” in CloudNativePG

- **Description:** This project aims to extend the CloudNativePG operator to
  support declarative configuration of foreign data wrappers through its
  Database custom resource. PostgreSQL supports the SQL/MED (Management of
  External Data) specification, enabling access to external data sources through
  standard SQL queries. These sources—known as foreign data—are accessed via
  **foreign data wrappers (FDWs)**, which are libraries that handle the
  connection and data exchange with the external systems. A variety of FDWs are
  available for PostgreSQL. Of particular interest for this project is the
  `postgres_fdw` extension, which facilitates access to other PostgreSQL
  instances.

- **Expected Outcome**:
    - A detailed design discussion documented in the upstream issue in
      CloudNativePG GitHub repository, involving mentors, maintainers, and the
      community.
    - A fully working pull request implementing support for declarative foreign
      data wrappers, complete with:
        - Reconciliation logic for the Database resource controller
        - Documentation
        - Automated tests integrated into the CI/CD pipeline

- **Recommended Skills**:
    - Go programming (operator development)
    - Kubernetes and CRDs (Custom Resource Definitions)
    - Git and GitHub workflows
    - CloudNativePG
    - Familiarity with PostgreSQL internals and SQL syntax

- **Mentor(s)**:
  - Gabriele Bartolini (@gbartolini, gabriele.bartolini@enterprisedb.com)
  - Leonardo Cecchi (@leonardoce, leonardo.cecchi@enterprisedb.com)
  - Marco Nenciarini (@mnencia, marco.nenciarini@enterprisedb.com)
  - Armando Ruocco (@armru, armando.ruocco@enterprisedb.com)

- **Upstream Issue**: https://github.com/cloudnative-pg/cloudnative-pg/issues/4683


### Inspektor Gadget 

#### [PM Mentorship] Traceloop GTM Strategy and Execution

- Description:  
  This is a Project Management mentorship (product management for open source)  for the project Inspektor Gadget (IG). [Inspektor Gadget](inspektor-gadget.io) is a powerful observability tool that enables security, monitoring and troubleshooting on Linux and Kubernetes. The framework uses a concept called “gadgets” which uses a technology called eBPF to enable us to drive valuable insights from the Linux kernel. Today, we have a very powerful gadget called [Traceloop](https://inspektor-gadget.io/docs/latest/gadgets/traceloop). However, as you can see the documentation around it is quite minimal and we need a strategy around how to bring this gadget to market in a big way. With Traceloop users can debug crashing applications as demonstrated [here](https://www.youtube.com/watch?v=IoiDvzIZ3ok&list=PLnfCaIV4aZe9oQ7REBuP0PWwp-NEbFlGR&index=30). Our goal is to make community members aware of traceloop and therefore Inspektor Gadget to a) decrease time to resolution for developers debugging their applications b) drive adoption of the project . 

- Expected Outcome:
  Increased awareness of the gadget Traceloop and Inspektor Gadget, and also a repeatable framework is established that can be easily scaled to other gadgets

- Recommended Skills:
  - User Research
  - Translating User Needs to Technical Requirements
  - Marketing Analytics
  - Go-to-market strategy
  - Roadmapping and Prioritization
  - Marketing Content Creation
  - Documentation and Communication
  - Community Engagement
  - You do NOT need to have all of these skills to be successful in this role. By the end of this mentorship you will have exposure to these skills and the opportunity to build them out. 

- Mentor(s):
  - Maya Singh (@mayasingh17, mayasingh@microsoft.com)
  - Slava Falico (@vfalico, vfalico@gmail.com)
  
- Upstream Issue: [RFE] Inspektor Gadget Traceloop Gadget Go to Market Strategy and Execution (CNCF Mentorship Program) [inspektor-gadget/inspektor-gadget Issue #4417](https://github.com/inspektor-gadget/inspektor-gadget/issues/4417)


### Kubernetes

#### Graduate the kubeadm feature gate WaitForAllControlPlaneComponents to GA

- Description:  
The feature gate WaitForAllControlPlaneComponents is used to
enhance the health checks performed by kubeadm on control plane node creation,
to not only check the availability of the kube-apisever, but also check
the kube-controller-manager and kube-scheduler. In kubeadm 1.33, the feature gate
was promoted to Beta. As part of this LFX project it can be promoted to GA,
by finalizing the remaining work, such as, code changes, documentation updates
and e2e test updates.
- Expected Outcome: The feature gate is graduated to GA
- Recommended Skills: golang, Kubernetes, kubeadm
- Mentor(s):
  - Shida Qiu (@SataQiu)
  - Paco Xu (@pacoxu)
- Type: maintainer mentorship (only for maintainers to work on as part of a one-off LFX Project)
- Upstream Issue (URL): https://github.com/kubernetes/kubeadm/issues/2907

### KubeStellar

# UX/UI Mentorship: Design System Foundations for KubeStellar

- **Description**:
Establish a lightweight, scalable design system that brings visual consistency, reusable components, and clear UX guidance across the full scope of KubeStellar. The system will support multiple user-facing surfaces, including websites, software interfaces, and CLI-based tools. This mentorship will serve as the foundational design phase, setting the stage for a future front-end development and implementation effort planned for later this year. Special emphasis will be placed on the documentation site and contributor-facing tooling to ensure immediate impact and long-term scalability.

- **Expected Outcome**:
The mentorship will deliver a scalable yet lightweight design system tailored to KubeStellar's needs. It will include a component inventory, reusable UI patterns, a full CSS specification, and visual guidelines to ensure consistency and usability across the project's five active areas. While this phase focuses on foundational design work, it will directly support a future implementation phase—enabling contributors to efficiently apply the system to KubeStellar's interfaces, including UI, Docs, and CLI-based tooling. Special emphasis will be placed on ensuring the documentation site benefits immediately from this structure.

- **Deliverables**:
-UI Audit Summary: A documented audit of existing UI elements across KubeStellar interfaces, identifying inconsistencies and opportunities for improvement.
- Design Foundations Guide: A foundational set of visual guidelines including typography, color palette, spacing, and layout grids.
- Reusable Component Designs: Figma mockups of commonly used UI components (e.g., buttons, cards, inputs, navigation) with states and interaction guidance.
- Component Usage Documentation: A concise guide explaining how and when to use each component, with practical examples for developers and contributors.
- Figma Starter Library: A structured, shareable Figma file including design tokens, reusable components, and layout references.
- Full CSS Specification: A developer-ready CSS reference that maps all design tokens, spacing scales, typography, color values, and component styles—designed to simplify implementation and align with frontend frameworks if needed.
- Homepage Hero Mock: A visual concept and animation-ready mockup for the KubeStellar homepage hero section.
- Docs Master Page Mock: A fully designed layout for a documentation master page, featuring structural layout, navigation, and UI-integrated component examples.
- Stretch Goal: If time allows, conduct an information architecture analysis of the current documentation site and provide recommendations. This may include proposing the separation of non-documentation content into standalone sites to improve clarity and user experience.

- **Recommended Skills**:
- UX/UI Design
- Figma Proficiency
- Design Systems (e.g., Material UI, Carbon)
- Responsive Design
- Visual Consistency
- Open Source Mindset
- Developer Collaboration (e.g., GitHub, handoff tools)
- React
- Documentation Skills

- **Mentors**:
- Andrea Velázquez (@andreuxxxx, andrea@buoyant.io)
- Kevin Roche (@KPRoche, kproche@us.ibm.com)

- **Upstream Issue:** https://github.com/kubestellar/kubestellar/issues/2912


#### Building a Plugin System for KubeStellar

- Description:  
This project aims to develop a plugin system for KubeStellar that will allow users to discover, install, and manage plugins that extend KubeStellar's functionality. The plugin system will provide a centralized hub for community-contributed plugins, enhancing KubeStellar's extensibility and user experience. The implementation will include a backend API written in Go and a frontend interface built with React.

- Expected Outcome
  - A fully functional plugin system integrated into KubeStellar's UI
  - Backend API for plugin management (upload, discovery, installation, updates)
  - Frontend components for browsing, searching, and installing plugins
  - Plugin versioning and compatibility checking
  - User ratings and reviews for plugins
  - Documentation for plugin developers and users

- Recommended Skills
  - Go
  - React.ts
  - REST API
  - Kubernetes
  - KubeStellar
  - Docker
  - containerization
  - Git
  - GitHub workflow

- Mentor
  - Rishi Mondal (@MAVRICK-1 , mavrickrishi@gmail.com)
  - Andy Anderson (@clubanderson , andy@clubanderson.com)
  - Rahul Vishwakarma (@manzil-infinity180 , rahulvs2809@gmail.com)
- Upstream Issue: [https://github.com/kubestellar/ui/issues/606](https://github.com/kubestellar/ui/issues/606)


#### Implementing a Model Context Protocol for KubeStellar MCP Server

- Description:  
This project aims to develop a Model Context Protocol for KubeStellar's Management Control Plane (MCP) server. The protocol will establish a standardized communication framework between KubeStellar's internal components and the AI models used for command interpretation. By defining clear context boundaries, semantic structures, and state management patterns, the protocol will enable the MCP server to maintain consistent understanding of the multi-cluster environment while processing natural language management commands across KubeStellar deployments.

- Expected Outcome
  - A fully specified Model Context Protocol defining the interaction between KubeStellar and AI models
  - Implementation of protocol handlers in TypeScript or Python for the MCP server
  - Context management system that maintains KubeStellar state information for accurate command interpretation
  - Serialization and deserialization mechanisms for efficiently passing cluster state to models
  - Protocol extension mechanisms for supporting different AI providers
  - Performance optimizations for minimizing latency in command processing
  - Comprehensive test suite validating protocol reliability under various operational conditions

- Recommended Skills
  - KubeStellar
  - Model Context Protocol
  - protocol design and implementation
  - TypeScript
  - Python
  - AI model
  - GenAi
  - serialization formats
  - efficient data structures
  - distributed systems state management

- Mentor
  - Rishi Mondal (@MAVRICK-1 , mavrickrishi@gmail.com)
  - Andy Anderson (@clubanderson , andy@clubanderson.com)

- Upstream Issue: [https://github.com/kubestellar/ui/issues/607](https://github.com/kubestellar/ui/issues/607)


#### Developing a Marketplace UI and Optimize the Current UI

- Description:  
This project focuses on creating a comprehensive plugin marketplace UI for KubeStellar that enables users to easily discover, install, update, and delete plugins directly from the interface. The marketplace will provide a seamless user experience with intuitive navigation, detailed plugin information, and streamlined management workflows. Additionally, the project will implement advanced resource filtering capabilities throughout the KubeStellar UI, allowing users to efficiently search, sort, and filter various resources based on multiple criteria.

- Expected Outcome:
  - A fully functional plugin marketplace UI integrated into KubeStellar
  - Installation, deletion, and update workflows for plugins with visual feedback
  - Plugin categorization, ratings, and search functionality
  - Dependency management and compatibility checking for plugins
  - Advanced resource filtering system across the UI with support for multiple filter criteria
  - Filter persistence across user sessions
  - Responsive design that works across different device sizes
  - Performance optimizations to ensure smooth interaction even with many plugins/resources
  - Installation and Setup Guide integrated directly into KubeStellar UI with cluster readiness checker, guided installation wizard, and real-time error feedback and resolution flows

- Recommended Skills:
  - React
  - TypeScript
  - REST API integration
  - Golang
  - Kubernetes
  - KubeStellar
  - State management
  - GitHub workflow

- Mentor
  - Rishi Mondal (@MAVRICK-1 , mavrickrishi@gmail.com)
  - Andy Anderson (@clubanderson , andy@clubanderson.com)

- Upstream Issue: [https://github.com/kubestellar/ui/issues/615](https://github.com/kubestellar/ui/issues/615)



#### Extending KubeFlex with a new type of Control Plane

- Description:  
KubeFlex is a flexible and scalable platform for running lightweight Kubernetes control plane APIs to support specific use-cases in cloud and edge computing environments. It supports various kinds of control planes, such as: vcluster, ocm, host, etc. This project aims to extend KubeFlex to support a new type of control plane that provides the full components of a control plane in a typical Kubernetes cluster (e.g., API Server, Scheduler, Controller-Manager, etc.). This new control plane will be based on K3s and it will allow KubeFlex to support new use-cases such as multi-tenant scenarios.
- Expected Outcome: A new type of KubeFlex provided control plane based on k3s
- Recommended Skills: Golang, Kubernetes, K3s
- Mentor(s):
  - Paolo Dettori: (@pdettori, dettori@us.ibm.com)
  - Braulio Dumba: (@dumb0002, Braulio.Dumba@ibm.com)
- Upstream Issue (URL): [https://github.com/kubestellar/kubeflex/issues/347](https://github.com/kubestellar/kubeflex/issues/347)


#### Enhancing KubeStellar core Helm chart by reducing its reliance on initContainers

- Description:  
This project aims to investigate and implement ideas for improving KubeStellar Core Helm chart reliance by contributing improvements to Helm project and reducing its reliance on initContainers for waiting/gathering/processing Kubernetes resources that are used by other containers (for example, KubeFlex Control Planes and their kubeconfigs).
- Introduce an annotation that would make Helm wait for user-specified resources
- Introduce priority/coordination of Helm resource creation
- Introduce an alternative path for dependence chart override values
- Introduce a mechanism for a chart to require a specified Helm min version or range
- Introduce an alternative to kubectl initContainers

- Expected Outcome
  - A comprehensive investigation of potential alternative methods and approaches
  - Contributions to Helm project to introduce new features that would allow to improve the quality of KubeStellar Core chart
  - A solution implementation that reduces the reliance on kubectl initContainers

- Recommended Skills
  - Helm
  - Go
  - REST API
  - Kubernetes
  - KubeStellar
  - Docker
  - containerization
  - Git
  - GitHub workflow

- Mentor
  - Franco Stellari (@francostellari , fstellari@gmail.com)
  - Andy Anderson (@clubanderson , andy@clubanderson.com)

- Upstream Issues:
  - [https://github.com/kubestellar/kubestellar/issues/2890](https://github.com/kubestellar/kubestellar/issues/2890)
  - [https://github.com/helm/helm/issues/30669](https://github.com/helm/helm/issues/30669)
  - [https://github.com/helm/helm/issues/30670](https://github.com/helm/helm/issues/30670)
  - [https://github.com/helm/helm/issues/30671](https://github.com/helm/helm/issues/30671)
  - [https://github.com/helm/helm/issues/30672](https://github.com/helm/helm/issues/30672)


### OpenKruise

#### add best practice to use openkruise workload with Karmada etc

- Description: 
Karmada and OCM are popular multi-cluster orchestration system, OpenKruise advance workload had been integrated with these orchestration system by community users, this project aims to provide official guidelines for the usage of OpenKruise in Karmada and OCM.

- Expected Outcome:
  - A complete document of Karmada and OCM integration with common OpenKruise workload(e.g. CloneSet, Advance StatefulSet) including supported features and current limitation
  - Possible code fix of problems found in the integration 

- Recommended Skills
  - Kuberntetes
  - technical document writing with markdown
 
- Mentor(s):
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
  - Sun Weixiang(@veophi, Vec.G.Sun@gmail.com)

- Upstream Issue: [https://github.com/openkruise/kruise/issues/2005](https://github.com/openkruise/kruise/issues/2005)

#### OpenKruiseGame controlplane HA deployment support

- Description:
The Kruise Game Controller Manager currently stores cache information for network plugins in memory, resulting in its single-replica deployment. From a business stability architecture perspective, it is necessary to migrate the cache out of memory to enable Kruise Game to transition to a multi-replica deployment. Besides, the current webhook certificate is self-signed by the controller. When the number of copies is more than one, an unauthenticated error will occur, so this needs to be modified.

- Expected Outcome:
  - support multi-replicas deployment
  - support webhook certificate signing using cert manager 

- Recommended Skills:
  - Go
  - Kubernetes

- Mentor:
  - Qiuyang Liu (@chrisliu1995, chrisliu1995@163.com)
  - Zhongwei Liu (@ringtail, zhongwei.lzw@alibaba-inc.com)

- Upstream Issue:[https://github.com/openkruise/kruise-game/issues/220](https://github.com/openkruise/kruise-game/issues/220)

#### Support progressDeadlineSeconds for Cloneset

This project aims to support progressDeadlineSeconds in CloneSet so as to provide information about whether the deployment is failed. The meaning of `progressDeadlineSeconds` is quite similar to the one in native kuberentes workload(`deployment`), but it need extra support for the time counting during CloneSet is paused due to partition restriction.

- Recommended Skills
  - Kubernetes
  - Golang
  - operator development

- Expected Outcome
  - A fully functional progressDeadlineSeconds supporting code with necessary unit and integration tests
  - complete document of the progressDeadlineSeconds and related CloneSet new condition in the status 

- Mentor
  - Yuxing Yuan(@ABNER-1, abner199709@gmail.com)
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
  
- Upstream Issue:[https://github.com/openkruise/kruise/issues/2006](https://github.com/openkruise/kruise/issues/2006)

#### Build simple dashboard to view and operate OpenKruise workload 
- Description: Currently, OpenKruise depends solely on the PaaS or CLI to listing OpenKruise workload display and operations. The lack of a general purpose Web-UI greatly hinder the adoption among developer users. This project is about to build a simple Web-UI that can list OpenKruise workload along with the native K8s workload, and support enhanced operation such as container restart or workload rollout. The Web-UI is preferably developed using UI extensions of existing PaaS e.g. Kubesphere and Rancher.

- Expected Outcome:
  - simple Web-UI
  - integration of the Web-UI with existing PaaS such as [KubeSphere](https://dev-guide.kubesphere.io/extension-dev-guide)
- Recommended Skills: 
    - UX/UI(react)
    - JavaScript
    - GoLang
    - Kubesphere/Rancher development(prefered but not mandatory ) 
- Mentor(s):
    - Zhang Zhen (@furykerry, furykerry@gmail.com)
    - Zhong Tianyun (@AiRanthem, airanthem666@gmail.com)
- Upstream Issue: https://github.com/openkruise/kruise/issues/1497


### Harbor

#### Harbor CLI

- Description: Harbor is a widely adopted container registry, and its initial CLI has been developed by LFX mentees. The goal is to extend this CLI by implementing additional functionalities and workflows that are currently only available in the Web UI. The CLI should be useful for Harbor administrators and users, especially to manage workflows within CI/CD pipelines. We seek a Golang-experienced mentee to enhance the CLI independently.

- Expected Outcome:
  - Extend the Harbor CLI to include essential commands not yet implemented.
  - Add new features to improve Harbor management via the CLI for Harbor Administration, enabling robust workflows in CI/CD environments.
  - Review and test all implemented commands to ensure they work as expected.

- Recommended Skills: Golang, spf13/cobra

- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)

- Upstream Issue: https://github.com/goharbor/harbor-cli/issues/450

#### Implementing Ground Control for Harbor Satellite

- Description: As edge computing grows, managing container registries at edge becomes a challenge. Ground Control (GC) is a centralized control plane that manages and coordinates distributed edge registries, known as satellites. GC handles satellite registration, state management, robot account creation and management. It is deployed near the central Harbor registry and acts as the brain of the distributed registry system.

- Expected Outcome:
  - Extend build and release pipelines using Dagger.
  - Implement satellite sync for status and health reporting.
  - Improve artifact state and configuration updates through OCI-compliant state artifacts.
  - Add e2e tests for Ground Control functionality including state publication and robot account management.

- Recommended Skills
  - REST API
  - Golang
  - GitHub workflow
  - Dagger
  - PostgreSQL
  - sqlc
  - [OCI Image Spec](https://github.com/opencontainers/image-spec/blob/main/spec.md)
  - [Distribution Spec](https://github.com/opencontainers/distribution-spec/blob/main/spec.md)
  
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)

- Upstream Issue: https://github.com/goharbor/harbor/issues/21959

#### Harbor Satellite: Implementing a Eventing System for Satellite

- Description:
Harbor Satellite is a lightweight, OCI-compliant registry (currently based on Zot) designed to run on edge devices, such as Raspberry Pi or ARM-based hardware. It acts as a local container registry for edge devices and workloads. The satellite autonomously fetches configuration and state, registers with Ground Control, reports its status, and optionally sends system-level events to connected edge systems.

- Expected Outcome:
  - Implement an eventing mechanism to notify edge systems about critical state transitions (e.g., "state update ready", "sync complete").
  - Improve build and release pipelines.
  - Make the satellite functional on ARM-based edge devices (like Raspberry Pi).
  - Add reliable state and health reporting back to Ground Control.
  - Add e2e tests to validate artifact fetching, status reporting, and eventing.

- Recommended Skills
  - Golang
  - Containers
  - Edge Computing
  - OCI Image/Distribution Spec
  - Webhooks
  - Event-Driven Architecture

- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)

- Upstream Issue: https://github.com/goharbor/harbor/issues/21986

### PipeCD

#### Support deploy application using OpenTofu with PipeCD plugin

- Description: In the latest evolution of PipeCD, the plugin architecture for piped has been established (ref: [PipeCD plugin-arch blog](https://pipecd.dev/blog/2024/11/28/overview-of-the-plan-for-pluginnable-pipecd/)), paving the way for community-developed plugins. Previously, PipeCD already supported deploying applications using Terraform, with the Terraform plugin being developed by the maintainer team to ensure continued support for existing users. Meanwhile, OpenTofu has emerged within the Cloud Native landscape as a drop-in alternative to Terraform. To align with this development, we aim to extend PipeCD’s support to enable the deployment of OpenTofu applications, just as we have done for Terraform.
  
- Expected Outcome:
  - OpenTofu plugin for PipeCD
  - Possible update plugin SDK while develop the OpenTofu plugin
  - Possible update docs how to develop PipeCD plugin
  - Blog about how to develop a PipeCD plugin on [https://pipecd.dev/blog/](https://pipecd.dev/blog/)
  
- Recommended Skills:
  - Golang
  - Terraform / OpenTofu
  - GitOps
  - Contrinous Delivery (CD)

- Mentor(s):
  - Khanh Tran (@khanhtc1202, khanhtc1202@gmail.com)
  - Shinnosuke Sawada-Dazai (@Warashi, shin@warashi.dev)
  - Yoshiki Fujikane (@ffjlabo, ffjlabo@gmail.com)

- Upstream Issue: https://github.com/pipe-cd/pipecd/issues/5807

#### Support managing SQL schema using PipeCD SQL plugin

- Description: With the latest advancements in PipeCD, the plugin architecture for piped has been successfully established (ref: [PipeCD plugin-arch blog](https://pipecd.dev/blog/2024/11/28/overview-of-the-plan-for-pluginnable-pipecd/)), opening the door for community-driven plugin development. While GitOps traditionally focuses on managing workload states, what about database states? Tools like [sqldef](https://github.com/sqldef/sqldef) can be incredibly helpful, especially when adopting a GitOps approach.
  
- Expected Outcome:
  - SQL plugin for PipeCD
  - Possible update plugin SDK while develop the SQL plugin
  - Possible update docs how to develop PipeCD plugin
  - Blog about how to develop a PipeCD plugin on [https://pipecd.dev/blog/](https://pipecd.dev/blog/)

- Recommended Skills:
  - Golang
  - SQL
  - GitOps
  - Continuos Delivery (CD)

- Mentor(s):
  - Khanh Tran (@khanhtc1202, khanhtc1202@gmail.com)
  - Shinnosuke Sawada-Dazai (@Warashi, shin@warashi.dev)
  - Yoshiki Fujikane (@ffjlabo, ffjlabo@gmail.com)

- Upstream Issue: https://github.com/pipe-cd/pipecd/issues/5808


### Istio

#### Expand testing for Multi-Cluster in Ambient


description: |
  Istio is a service mesh platform used by thousands of companies to secure and manage their microservices traffic, most often in a single Kubernetes cluster.
  However, the ability to operate across multiple clusters is an important feature in Istio's traditional Sidecar mode, and work to support
  it in Istio's Ambient mode is making rapid progress. To call any feature complete,
  comprehensive testing is needed. Given that multicluster Istio Ambient is a new mode of operating, we will
  need to both adapt tests for existing features to ensure they work across multiple clusters,
  as well as identify multi-cluster specific scenarios we want to codify in tests.

  These kinds of tests exist mode in both the main Istio repository, as well as in the istio.io
  website's repository. The docs tests are equally as important, as they prove that the
  instructions we give to users actually work.

expectedOutcome:
  - Audit existing ambient integration tests for cases that do not support multi-cluster testing patterns.
  - Refactor those tests, using Istio's testing infrastructure to cover features within a multi-cluster environment.
  - Work with Istio maintainers to identify opportunities for testing new scenarios that exist only for ambient multi-cluster.
  - As documentation is written for https://istio.io, verify that the user instructions (kubectl commands, YAML snippets, etc.) actually work end-to-end.
  - Gain hands-on experience with Istio's codebase, service mesh architectures, and Kubernetes multi-cluster patterns.
  - Help us catch regressions and bugs

- **Recommended Skills**:
  - Go
  - Kubernetes
  - Istio
  - Basic networking knowledge


- **Mentor(s)**:
  - Steven Jin (@stevenjin8, sjinxuan@microsoft.com)
  - Steven Landow (@stevenctl, steven.landow@solo.io)

- **Upstream Issue**: https://github.com/istio/istio/issues/56228


### Krkn

#### Chaos scenario rollback feature

- Description:<br/>
We intend to refactor the current Scenario Plugin API and add a new feature in the plugin abstract class to restore all the changes performed by krkn in the cluster in case run method encounters some kind of exception before ending the execution and or if the run failed for external infrastructure failures.
- Expected Outcome:<br/>
The cluster status should be rolled back to the original condition before the scenario execution.
- Recommended Skills:<br/>
  - python
  - kubernetes
  - container runtime environments
  - common cloud platforms
- Mentor(s):
  -  Tullio Sebastiani (@tsebastiani, tsebasti@redhat.com) 
  -  Naga Ravi Chaitanya Elluri (@chaitanyaenr, nelluri@redhat.com)
  -  Paige Patton (@paigerube14, ppatton@redhat.com)
- Upstream Issue: