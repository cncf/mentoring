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

### Microcks

#### Improving Microcks CLI

- Description: [Microcks](https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
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

#### Update the Microcks Hub frontend and make it deployable on-premises

- Description: [Microcks](https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
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

#### Microcks Hub: Expanding Sandbox and Mocking Capabilities for Key Industry APIs

- Description: [Microcks](https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
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

#### Expanding Microcks community documentation for advanced installations

- Description: [Microcks](https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
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

#### Improving Microcks delivery and validation with GitHub Actions CI deployment tests

- Description: [Microcks](https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
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

#### Building Community-Driven documentation for deploying Microcks in cloud production environments

- Description: [Microcks](https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
This project aims to support the growing Microcks adopter community by fostering a collaborative effort to document production-grade deployment strategies for cloud environments. While the core Microcks maintainers focus on features, security, and enhancements, the adopters are responsible for production setups. However, a shared repository of best practices can help users learn from one another in a true open-source spirit. This project will empower the community to deploy Microcks confidently in diverse cloud environments, fostering collaboration and sharing of expertise among adopters.
- Expected Outcome: Participants will contribute to the [Microcks community repository](https://github.com/microcks/community/tree/main/install) by documenting deployment workflows for popular cloud providers, such as AWS, GCP, and Azure, as well as other providers like OVH, Oracle, Scaleway, or Koyeb. Deliverables will include guides on utilizing cloud-native services (e.g., PostgreSQL, MongoDB, IDP) to create robust and scalable Microcks installations ideally on managed Kubernetes services from the provider.
- Recommended Skills: GitOps, SRE, Infra as code, cloud.
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/community/issues/32

#### Streamlining Microcks Deployment on AWS Marketplace

- Description: [Microcks](https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
This project focuses on creating a validated and repeatable SaaS architecture for deploying Microcks on AWS, with the ultimate goal of listing it on the AWS Marketplace through the AWS Partner Network Co-Sell program. By addressing the community's frequent demand, this initiative will simplify Microcks' adoption while leveraging a complete suite of AWS services to ensure scalability, security, and ease of deployment.\ The core Microcks maintainers focus on features, security, and enhancements. The adopters are responsible for production setups. However, a shared repository of best practices can help users learn from one another in a true open-source spirit. Participants will contribute to the [Microcks community repository](https://github.com/microcks/community/tree/main/install) by documenting the AWS Marketplace deployment.
- Expected Outcome: This project will enable Microcks adopters to confidently deploy production-ready setups on AWS, ensuring the scalability and reliability needed for enterprise environments. By integrating Microcks into the AWS Marketplace, the project will further enhance its visibility and adoption within the AWS ecosystem. Key objectives include:
  - Designing and validating a SaaS architecture that is compliant with AWS Foundational Technical Review (FTR).
  - Utilizing AWS-native services such as EKS, Aurora (PostgreSQL), DocumentDB, API Gateway, IAM, and CloudFormation for an end-to-end deployment.
  - Streamlining deployment workflows to create an open source, community-maintained solution that organizations can quickly adopt.
- Recommended Skills: AWS and AWS services, CloudFormation.
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/community/issues/33

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

#### Improve documentation build infrastructure

- Description: The build infrastructure for istio.io currently carries a complete archived copy of the site for each release of Istio.  These archived versions should be separated to their own branch, with only the supported versions published.  We should also separate out content which is not version-specific (e.g. the home page, news and blogs) so that only the latest version of this content is visible online.
- Expected Outcome: Updated publishing infrastructure for istio.io which separates evergreen content (home page, blogs) with versioned content (documentation).  Drop-downs per docs page allow switching between the supported versions.  
- Recommended Skills: Systems engineering, scripting, programming (Go/Bash), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15463

#### Implement new site search

- Description: Up to four versions of Istio are supported at one time, and so the documentation for each must be available. Our current site search is outdated and needs to be replaced, so that the search content only exists in the site search, and only fresh content is available on google.com.
- Expected Outcome: Working site search on istio.io, which lets you search for content for the currently supported versions.
- Recommended Skills: Hugo, Systems engineering, scripting, programming (Bash/go), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15464

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

#### Enhance KubeEdge testing coverage

- Description: KubeEdge would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects. Increase the UT coverage rate to 60% to 70% (currently, the UT coverage rate is 38.69% ). It is important to note that in addition to requiring the overall UT coverage of KubeEdge to meet the requirements, the UT coverage of each core code directory(cloud/, edge/, keadm/ and pkg/) also needs to exceed 60%.
- Expected Outcome: Increase the UT coverage rate to 60% to 70%
- Recommended Skills:  KubeEdge, Go, Testing
- Mentor(s):
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6101

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

### KubeStellar

#### Enhancing KubeStellar UI for Expanded Functionality and User Experience

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

- Upstream Issue: kubestellar/ui (TBD)


#### TUF
##### Metadata Repository Visualization

A [TUF](https://theupdateframework.com/) metadata repository consists of signed metadata files, which are read by TUF clients when securely downloading artifacts. The [metadata](https://theupdateframework.com/docs/metadata/) contains information about the artifacts and about the metadata itself, most notably, who is trusted to sign what.

A suitable visual representation of this trust hierarchy makes TUF's security properties more accessible to end-users, and, more importantly, allows metadata signers to carefully review metadata changes before signing them.

In this project you will, together with your mentor and the TUF community, identify requirements for the visualization of a TUF metadata repository and build a corresponding web app.

- Expected Outcome: Identify requirements and build a basic web app to visualize TUF metadata. *(Initial requirements may be inspired by the `tuf-on-ci` use case.)*
- Recommended Skills: Front-end web development, Information Visualization
- Mentor(s): # 
  - Lukas Pühringer (@lukpueh, lukas.puehringer@nyu.edu) - primary
  - TBD
- Upstream Issue (URL): TBD, https://github.com/theupdateframework/tuf-on-ci/issues/39 (initial ideas)

