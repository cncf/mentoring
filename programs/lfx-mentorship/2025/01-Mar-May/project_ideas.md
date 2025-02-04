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

- Upstream Issue: https://github.com/kubestellar/ui/issues/63
- LFX URL: 

### LitmusChaos

#### Enhancing CI/CD Integration for LitmusChaos: SDK Development and Chaos-CI-Lib Revamp

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

#### Improve the code coverage for observability in the LitmusChaos components

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

#### Expanding the LitmusChaos Tutorials - Day 0, Day 1, and Day 2 User Flows

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
