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


### Copacetic

#### Wiz Scanning Support

- **Description:** Copacetic currently doesn't support vulnerability scan reports by Wiz scanning. This mentorship project will extend Copa's support to cover this new scanning schema using a pre-existing template. 
- **Expected Outcome:** The mentee will produce the following
    1. Design doc for Wiz Scanning
    2. Wiz Plugin Integration
    3. End to End integration tests
- **Recommended Skills:**
    - Golang
    - Docker
    - Basic Git knowledge
- **Mentor(s):**
  - Ashna Mehrotra (ashnamehrotra, ashnamehrotra@gmail.com)
  - Leonard Wang (leodewang, leonardwang2000@gmail.com)
  - Robbie Cronin (robert-cronin, robbiecronin@microsoft.com)
- **Upstream Issue:** https://github.com/project-copacetic/copacetic/issues/867

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
  - Matt Bolt (@mbolt35 , matthew.bolt@ibm.com)

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
- Upstream Issue: https://github.com/krkn-chaos/krkn/issues/804


### Kyverno

#### Optimize Kyverno CLI In-cluster Resource Loader

- Description: Kyverno provides robust support for applying multiple policy types to Kubernetes cluster resources via CLI. However, the resource loading mechanisms vary significantly across different policy types, resulting in inconsistent behavior and limited scalability when handling large resource sets.

- Expected Outcome: Develop a unified, reusable in-cluster resource loading framework that standardizes resource retrieval across all policy types, and optimize performance when loading large numbers of resources.

- Recommended Skills:
  - Golang
  - Kubernetes
  - Cobra

- Mentor(s):  
  - Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com)
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
  - Yugandhar (@yrsuthari, ysuthari@gmail.com)

- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/12973
  - https://github.com/kyverno/kyverno/issues/12967

#### Improve Test Coverage and Docs for New Policy Types

- Description: Kyverno 1.14+ introduces several new policy types including ValidatingPolicy, ImageValidatingPolicy, and others that extend the platform's capabilities. To ensure reliability and stability of these new features, we need to systematically improve test coverage through comprehensive Chainsaw tests and targeted unit tests.

- Expected Outcome: 
  - Good test coverage for new policy types
  - Documentation for new policy types

- Recommended Skills:
  - Golang
  - Chainsaw
  - Kubernetes
  - Testing

- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charled.breteche@gmail.com)
  - Frank Jogeleit (@fjogeleit, frank.jogeleit@nirmata.com)

- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/13011


### WasmEdge

#### Port WasmEdge and the WASI-NN ggml backend to the s390x platform

- Description: WasmEdge provides cross-platform support for amd64 and arm64 for executing AI/LLM applications. We would like to support as many new hardware platforms as possible, so developers and users will no longer need to worry about the actual hardware. All they need to do is develop their AI agent or LLM applications once and deploy their services anywhere. For more information, please check the upstream issue.
- Expected Outcome:
  - Make the WasmEdge toolchain support the s390x platform, including the interpreter and the AOT mode.
  - Ensure the WASI-NN ggml plugin can execute without any issues on the s390x platform.
  - Implement test suites to verify the above behaviors.
  - Write a document discussing the compilation, installation, execution, and verification of the work.
- Recommended Skills:
  - C++
  - s390x
  - LLVM
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io) - Primary
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/4010

#### Use Runwasi with WasmEdge runtime to test multiple WASM apps as cloud services

- Description: With WasmEdge serving as one of Runwasi’s standard runtimes, and as our C++-implemented library continues to evolve, we also need a verification process integrated into Runwasi to streamline and validate the stability of both container and cloud environments.
- Expected Outcome:
  - A concise GitHub workflow demonstrates Runwasi end-to-end testing on Kubernetes.
    - Need to design an interactive application scenario that supports multiple nodes
    - Try to incorporate the use of the WasmEdge plugin into this scenario
  - Document
- Recommended Skills:
  - Rust
  - C++
  - GDB
  - git / github workflow
  - shell script
- Mentor(s):
  - Vincent (@CaptainVincent, vincent@secondstate.io) - Primary
  - yi (@0yi0 yi@secondstate.io)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/4011

#### Support bitnet.cpp as a new WASI-NN plugin

- Description: WasmEdge provides several AI frameworks as WASI-NN plugins to enable the power of AI/LLM applications for developers and users. We are always eager to add new backends to improve coverage of all models and hardware. BitNet.cpp, released by Microsoft, offers the ability to run 1-bit LLMs quickly without a GPU. We would like to support this framework so that people with limited resources, such as CPU-only hardware, can enjoy the amazing world brought by LLMs.
- Expected Outcome:
    1. A new WASI-NN plugin supports [BitNet](https://github.com/microsoft/BitNet).
    2. Use the pure C++ interface from BitNet without any Python dependencies.
    3. The plugin must run the model listed in the BitNet repository, e.g., [BitNet b1.58 2B4T - Scaling Native 1-bit LLM](https://huggingface.co/microsoft/bitnet-b1.58-2B-4T).
    4. A tutorial and example for demonstration.
    5. A CI workflow for building, testing, and releasing the built assets.
- Recommended skills:
  - C++
  - [WASI-NN](https://github.com/WebAssembly/wasi-nn)
  - GitHub workflows
  - LLMs
- Mentor(s):
  - Hung-Ying Tai (@hydai, hydai@secondstate.io)
  - dm4 (@dm4, dm4@secondstate.io)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/4110

#### Create an MCP-based AI agent to help LF certificate prep

- Description: You will create an AI agent based on open-source Large Language Models (LLMs) running on the CNCF WasmEdge runtime and an MCP server. The application will tie together key components in a modern AI agent stack to create a useful application. The AI agent will ask, answer, and explain practice questions for a specific tech certification program. It enables students to study for the certificate tests more effectively.
- Expected Outcome:
    - **Deliverable 1:** create a MCP server with 2 functions
        - `get_random_question()`: The function selects a random question from a list. It returns both the question and the answer. This function is called by the LLM when it detects that the user asked for a new practice question.
        - `get_question_and_answer()`: The function searches an input text from the database for an corresponding question and answer.
    - **Deliverable 2:** create a practice question / answer database on a subject that you are most familiar with. The MCP functions will
    - **Deliverable 3:** Create an agent app based on the LlamaEdge framework with a
    - Wokflow 1
        - The user asks a question. The LLM calls MCP function `get_question_and_answer()`
        - The agent adds the answer to the context
        - The LLM converse with the user with knowledge about the question and its answer
    - Workflow 2
        - The user asks for a practice question. The LLM calls MCP function `get_random_question()` to get the question and answer.
        - Both the question and answer are added to the context.
        - The LLM responds to the user with the question ONLY.
        - It carries on the conversation around that question.
- Recommended skills:
    - AI agent concepts
    - LLM and [tool calls](https://llamaedge.com/docs/user-guide/llm/tool-call)
    - [Running open-source LLMs locally](https://llamaedge.com/docs/user-guide/llm/full-openai)
    - [Running MCP servers](https://github.com/decentralized-mcp/servers/tree/main/example)
    - Rust
    - Python
- Mentor(s):
  - Michael Yuan (@juntao michael@secondstate.io)
  - Vivian Hu (@alabulei1 vivian@secondstate.io)
- Upstream Issue (URL): https://github.com/WasmEdge/WasmEdge/issues/4109


### OpenYurt

#### OpenYurt Dashboard Enhancements

description: |
  OpenYurt is an open-source edge cloud-native platform designed to streamline application management and resource orchestration in edge computing scenarios.
  This project aims to enhance the yurt-dashboard (the core management interface of OpenYurt) by implementing internationalization support, 
  integrating edge AI capabilities, and upgrading core API versions to improve global accessibility, technical innovation, and system stability.
  The project will leverage the React frontend framework, Golang backend services, and Kubernetes ecosystem toolchain to provide developers with a more efficient edge cloud-native experience.


expectedOutcome:
  - i18n Implementation: Extract existing Chinese text and complete English translations using LinguiJS framework
  Implement frontend language-switching functionality with dynamic user selection
  - Edge AI Integration: Containerize and develop deployment templates for at least 3 open-source edge AI applications in the dashboard
  - API Modernization: Align with OpenYurt' latest API standards to ensure platform compatibility and security.


- **Recommended Skills**:
  - Proficiency in React/TypeScript and LinguiJS internationalization framework
  - Strong Golang backend development skills with Kubernetes Operator pattern knowledge
  - Deep understanding of Kubernetes API mechanisms and CRD version migration experience
  - Prior experience in edge computing or AI application deployment (e.g., KubeEdge, K3s)
  - Excellent technical writing skills in both English and Chinese

- **Mentor(s)**:
  - Lu Chen (@luc99hen, luc99.en@gmail.com)
  - Bingchang Tang (@zyjhtangtang, bingchang07@gmail.com)

- **Upstream Issue**:
  - i18n Support: https://github.com/openyurtio/yurt-dashboard/issues/50
  - Edge AI Integration: https://github.com/openyurtio/yurt-dashboard/issues/44
  - API Upgrade: https://github.com/openyurtio/yurt-dashboard/issues/43


### Volcano

#### Enhance JobFlow Functionality

- Description: The Volcano community introduced JobFlow to address inter-job dependencies. Through the concepts of JobTemplate and JobFlow, users can declare and orchestrate multiple Volcano jobs, leveraging control flow primitives such as sequential, parallel, conditional, branching, and looping execution. JobFlow aims to facilitate the migration of AI, BigData, and HPC workloads to the cloud-native environment. The current JobFlow functionality requires further enhancements to meet more complex real-world scenarios. Ref: https://github.com/volcano-sh/volcano/tree/master/docs/design/jobflow.

- Expected Outcome:
  - Support modifying parameters of a JobTemplate when referenced in a JobFlow, for example, changing container image versions, adjusting resource limits, etc.
  - Implement a configurable retry mechanism for failed jobs within a JobFlow, for example, supporting exponential backoff retry policies, setting maximum retry attempts, etc.
  - Introduce richer control flow statements such as if, switch, and for statements, for example, conditional branching based on the status of upstream tasks, iterative execution of specific task sets, etc.


- Recommended Skills: Kubernetes, GO, Volcano

- Mentor(s):
  - Jiang Dong(@dongjiang1989, dongjiang2010@gmail.com)
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)

- Upstream Issue: [https://github.com/volcano-sh/volcano/issues/4275](https://github.com/volcano-sh/volcano/issues/4275)

#### Implement Volcano Scheduler Simulator

- Description: For users of Kubernetes and Volcano schedulers, the scheduling process is often a black box. Understanding how scheduling decisions are made and evaluating the functionality and performance of the scheduler, especially when introducing new scheduling features, can be challenging. Setting up a full-fledged Kubernetes cluster and generating realistic workloads to observe scheduling behavior can be resource-intensive and time-consuming. Users need a lightweight and efficient way to verify the correctness and performance implications of scheduler changes without the overhead of a real cluster. The kube-scheduler community has addressed this need with `kube-scheduler-simulator`, and the Volcano community would greatly benefit from a similar tool.

- Expected Outcome:
  - Implement a Volcano scheduler simulator capable of simulating the core scheduling logic of the Volcano scheduler.
  - The simulator should be able to receive simulated Kubernetes cluster states (e.g., Nodes, Pods, Queues) and Volcano configurations as input.
  - The simulator should output the simulated scheduling results, including the Node to which a Pod is scheduled, and the decision-making process information (e.g., considered Nodes, filtering and scoring results).
  - (Optional) The simulator could provide basic performance metrics output, such as simulated scheduling latency.
  - Provide clear usage documentation and examples to facilitate users in verifying functionality and performance using the simulator.

- Recommended Skills: Kubernetes, GO, Volcano

- Mentor(s):
  - lowang-bh(@lowang-bh, lhui_wang@163.com)
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  
- Upstream Issue: [https://github.com/volcano-sh/volcano/issues/4276](https://github.com/volcano-sh/volcano/issues/4276)

#### Enhance Volcano Dashboard UX and Functionality

- Description: The Volcano Dashboard serves as the frontend for displaying Volcano resources. Currently, it supports resources like Volcano Jobs, Queues, and Pods, but editing often involves raw YAML, which is not user-friendly for modifying or creating new resources. To improve user experience, this project aims to enhance the Dashboard's interactivity and user-friendliness, as well as support the display of hierarchical Queues and HyperNode resources.

- Expected Outcome:
  - Improve resource display and editing interfaces by providing more user-friendly interaction methods, such as using forms or visual editors instead of direct YAML editing for creating and modifying resources.
  - Support the display of hierarchical Queues and HyperNode resources with mouse-click expand/collapse functionality to clearly visualize resource relationships.
  - Optimize the user interface design to enhance aesthetics and ease of use.
  - Refactor the backend code to improve maintainability and scalability.
  - Display both **key information** and **full information** for resources, with an option to switch between views.
  - (Optional) Support the display and management of more resource types.

- Recommended Skills: Kubernetes, React, Node, JS

- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)

- Upstream Issue: [https://github.com/volcano-sh/volcano/issues/4277](https://github.com/volcano-sh/volcano/issues/4277)

#### Enhance Volcano Official Documentation

- Description: As Volcano's functionality grows and its integration with the broader ecosystem deepens, the community documentation needs to be updated and iterated upon to provide better user guidance and experience. Clear and comprehensive documentation helps users quickly get started with Volcano and reduces the cost of usage and configuration. Currently, some documentation is scattered across the GitHub repository and needs to be migrated to the official website to provide a unified entry point for users.

- Expected Outcome:
  - Migrate the documentation from the GitHub repository that is not yet on the official website to the official website.
  - Provide detailed explanations of the functionality of **Volcano Scheduler**, **Volcano Controller**, **Volcano Agent**, and **Volcano Admission** components, including the meaning of their respective startup parameters.
  - Supplement the documentation for core features such as JobFlow and vGPU virtualization.
  - Add a "Best Practices" section offering recommendations and configuration examples for using Volcano in various scenarios.
  - Include a "Troubleshooting" section that collects and organizes common issues and their solutions.

- Recommended Skills: Technical Writing, Markdown, Git, Hugo or other static site generators

- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)

- Upstream Issue: [https://github.com/volcano-sh/volcano/issues/4278](https://github.com/volcano-sh/volcano/issues/4278)


### Jaeger

#### Upgrade Jaeger-UI to React v19

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. Jaeger-UI is the web UI for Jaeger, built with [React](https://react.dev/). The current version of React used by Jaeger-UI is v18. This project aims to upgrade Jaeger-UI to React v19, in order to stay up to date with the dependencies.
- Expected Outcome: A working version of Jaeger-UI upgraded to React v19, with all the features and functionality of the current version. This may include a need to upgrade or replace some other dependencies that may not be compatible with the latest React.
- Recommended Skills: Javascript, React, HTML, CSS, Web development, UI/UX design, Testing
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/2764

#### Jaeger demo on Kubernetes

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. We provide an easy getting started guide using `docker compose`, but we would also like to run a live demo that people can access directly from the Jaeger website. This project aims to create a Kubernetes deployment for the Jaeger demo, including the Jaeger backend and the UI, HotROD demo app, and the Service Performance Monitoring setup, so that users can try out the project in action and we can use this for various events to promote the project. This should be something which automatically deploys the new versions when they are released. The data in the demo environment should either be a rolling buffer or purged daily. It might even be a good idea to just recreate the environment daily which might solve both problems at once. This can be determined by the mentee.  We currently have access to an Oracle Cloud environment where this can be stood up for “dev” and “prod” as managed kubernetes clusters.
- Expected Outcome: A working version of Jaeger demo auto-deployed on Oracle Cloud. Automatic version upgrades. Config as code. Security. Monitoring. Documentation.
- Recommended Skills: Kubernetes, Cloud, Security, Monitoring
- Mentor(s):
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/7115


### Headlamp 

#### Kubernetes UI Headlamp: Implement Kubernetes API Caching, Pagination, and Search

**Description**: Headlamp currently fetches Kubernetes API data directly from the frontend, which can lead to performance bottlenecks and unnecessary API load. Introducing a caching layer in the headlamp-server backend will reduce API calls, improve response times, and enable more efficient data handling. This enhancement will also allow for improved pagination—fetching only the data needed for the current view—and enable backend-powered search functionality, reducing the need for the frontend to download large datasets.

**Expected Outcome**:

- A backend caching layer for Kubernetes API responses, scoped per user context to ensure data isolation and security.
- A new pagination API that allows the frontend to request only the currently visible page of data.
- A search API that queries the cached data, enabling fast and efficient search without full data downloads.
- Documentation and possibly a demo video explaining the architecture and usage of the new caching, pagination, and search features.

**Recommended Skills**: Golang (Optional: Kubernetes API)

**Mentor(s)**:
- Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
- Rene Dudfield (@illume, renedudfield@microsoft.com)
- Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)

**Upstream Issue**: https://github.com/kubernetes-sigs/headlamp/issues/3230


#### Kubernetes UI Headlamp: Gateway API Service Mesh Visualization

**Description**: The Gateway API is becoming the standard for Kubernetes service networking, including ingress, traffic routing, and service mesh use cases. While Headlamp has built-in support for Gateway API resources, there is currently no integrated way to visualize and manage service mesh topologies, traffic flows, and policies. This feature aims to enhance Headlamp with a visual and interactive interface for understanding and managing service meshes built on the Gateway API.

**Expected Outcome**:

A Headlamp feature that enables users to:

- Visualize service mesh topologies using Gateway API resources (e.g., Gateways, Routes, Services)
- Overlay traffic flow data, latency, error metrics, and traffic policies (e.g., splitting, retries, timeouts) on the resource map
- Leverage existing Headlamp Map and CRD extension capabilities for seamless integration
- Documentation and possibly a demo video or blog post.
 
**Recommended Skills**: TypeScript, React (Optional: Kubernetes Gateway API)

**Mentor(s)**:
- Rene Dudfield (@illume, renedudfield@microsoft.com)
- Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
- Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)

**Upstream Issue**: https://github.com/kubernetes-sigs/headlamp/issues/2798


#### Kubernetes UI Headlamp Plugin: Karpenter Autoscaling Insights and Management

**Description**: Karpenter is a dynamic Kubernetes node autoscaler that provisions compute resources in response to real-time workload demands. While Karpenter is powerful, it lacks a native UI for visualizing its autoscaling behavior and managing its custom resources. This plugin will integrate Karpenter-specific insights into Headlamp, leveraging Headlamp’s existing CRD support to provide a focused, user-friendly interface for understanding and managing Karpenter’s decisions.

**Expected Outcome**:

A Headlamp plugin that provides:

- Show Karpenter Provisioners, NodePools, and NodeClasses, including their constraints and current status.
- Real-time display of scaling decisions, such as which pods triggered provisioning and why.
- A dashboard for pending pods with unmet scheduling requirements, highlighting why they couldn’t be scheduled.
- Integration with Kubernetes events and Karpenter metrics to show provisioning latency, node lifecycle events, and cost efficiency.
- A configuration editor for Karpenter Custom Resource Definitions(CRDs) using Headlamp’s existing CRD facilities.
- Documentation and possibly a demo video or blog post.

**Recommended Skills**: TypeScript, React (Optional: Kubernetes API, Karpenter)

**Mentor(s)**:

- Kautilya Tripathi (@knrt10, ktripathi@microsoft.com)
- Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
- Rene Dudfield (@illume, renedudfield@microsoft.com)

**Upstream Issue**: https://github.com/kubernetes-sigs/headlamp/issues/3231


#### Kubernetes Headlamp UI: UX Audit and Design Improvements for Plugins

**Description**:
Headlamp is a Kubernetes UI that supports a growing ecosystem of plugins, including integrations with CNCF projects like Flux, KEDA, and Falco. As the number and complexity of these plugins grow, ensuring a consistent, intuitive, and user-friendly experience becomes increasingly important. This project will focus on conducting UX audits of existing Headlamp plugins, identifying usability issues, and proposing design improvements. It will also explore user personas (e.g., operators vs. developers) to inform design decisions and help shape the future of plugin UX in Headlamp.

**Expected Outcome**:
A design-led UX audit and improvement initiative that includes:

- A review of selected Headlamp plugins to identify usability issues and inconsistencies
- User research and persona development to better understand plugin audiences
- Design proposals and mockups for improving plugin UIs and workflows
- Collaboration with technical mentors to help implement selected improvements
- Optional exploration of UX needs for recent Kubernetes features or under-designed areas in Headlamp

**Recommended Skills**: UX design, UI design, user research, Figma or similar tools
(Optional: familiarity with Kubernetes, Headlamp, or frontend development)

**Mentor(s)**:
- Joaquim Rocha (@joaquimrocha, joaquimm@microsoft.com)
- Ivelisse Capellan Heyer (@ivelisseca, ivelisseca@microsoft.com)

**Upstream Issue**: https://github.com/kubernetes-sigs/headlamp/issues/3233


### Kgateway

## kgateway

#### OpenTelemetry is an AI Gateway’s Best Friend: Extending Observability to kgateway’s AI Extensions

- Description:

Kgateway can be used as an “AI Gateway” that allows applying traditional
traffic management, security, and resiliency policies when reaching out to LLM
providers. It also allows sending a request to another server for processing
things like prompt guards or enrichment before we send it off to the LLM
providers. An important aspect in any system that has lots of moving parts is
observability: the collection of metrics and other information that allow you
to identify issues and troubleshoot a live system.

This project aims to enable OpenTelemetry support in kgateway’s AI extensions
by allowing users to configure a gRPC tracing collector. This feature enables
span propagation from the AI extensions extproc server and exporting traces to
an OpenTelemetry-compatible backend (e.g., OpenTelemetry Collector, Jaeger,
Zipkin, or Datadog). This feature will build on Envoy’s native tracing
capabilities and aligns with industry-standard observability practices. This
will make it easier to debug, monitor, and optimize traffic flowing to LLM
Providers through kgateway.

- Expected Outcome:
  - Design and implement an API to enable tracing for the kgateway’s AI extproc extension.
  - Extend the AI extensions extproc server with OpenTelemetry tracing.
  - Create end-to-end (e2e) tests to validate configuration and trace propagation.
  - Write documentation for plugin developers and end users
  - Gain hands-on experience with AI providers, OpenTelemetry, tracing platforms, Envoy, Kubernetes, and kgateway while building real observability features!


- Recommended Skills:
  - Golang
  - Python
  - GitHub workflow
  - Otel
  - Kubernetes
  - Kubernetes Gateway API
  - Envoy

- Mentor(s):
  - Nina Polshakova (@npolshakova, ninapolshakova@gmail.com)
  - Steven Landow (@stevenctl, steven.landow@solo.io)

- Upstream Issue: https://github.com/kgateway-dev/kgateway/issues/11177
