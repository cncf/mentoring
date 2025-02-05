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
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

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
- LFX URL: 

#### Building Community-Driven documentation for deploying Microcks in cloud production environments

- Description: [Microcks](https://microcks.io/) is a cloud native, open source tool under CNCF for API and microservices mocking and testing.
This project aims to support the growing Microcks adopter community by fostering a collaborative effort to document production-grade deployment strategies for cloud environments. While the core Microcks maintainers focus on features, security, and enhancements, the adopters are responsible for production setups. However, a shared repository of best practices can help users learn from one another in a true open-source spirit. This project will empower the community to deploy Microcks confidently in diverse cloud environments, fostering collaboration and sharing of expertise among adopters.
- Expected Outcome: Participants will contribute to the [Microcks community repository](https://github.com/microcks/community/tree/main/install) by documenting deployment workflows for popular cloud providers, such as AWS, GCP, and Azure, as well as other providers like OVH, Oracle, Scaleway, or Koyeb. Deliverables will include guides on utilizing cloud-native services (e.g., PostgreSQL, MongoDB, IDP) to create robust and scalable Microcks installations ideally on managed Kubernetes services from the provider.
- Recommended Skills: GitOps, SRE, Infra as code, cloud.
- Mentor(s):
  - Yacine Kheddache (@yada, yacine@microcks.io)
  - Laurent Broudoux (@lbroudoux, laurent@microcks.io)
- Upstream Issue: https://github.com/microcks/community/issues/32
- LFX URL: 

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
- LFX URL: 


