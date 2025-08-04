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

### Knative

#### Enhancing the Knative func CLI Experience

- Description: Knative Functions enables you to easily create, build, and deploy stateless, event-driven functions as Knative Services by using the func CLI. With this LFX project, we aim to conduct a comprehensive UX evaluation of the func CLI. The focus will be on identifying usability issues, understanding developer workflows, and gathering structured feedback on CLI interactions. The findings will help improve the CLI's intuitiveness, efficiency, and user satisfaction.
- Expected Outcome: A detailed analysis report documenting func CLI’s usability findings, including (but not limited to ):
  - Assessment of CLI command organization, structure, and discoverability for new and experienced users
  - Review of help text quality and completeness across all commands
  - Mapping of common developer workflows with identified pain points
  - Evaluation of error handling and the user guidance during failures
  - Comparison with industry best practices for CLI design, with recommendations for closing identified gaps
- Recommended Skills: Experience with command-line interfaces, familiarity with UX evaluation/research methodologies, knowledge of cloud-native and Knative concepts, strong analytical, technical writing and documentation skills.
- Mentor(s):
  - Prajjwal Yadav (@prajjwalyd, prajjwalyd@gmail.com)
  - Luke Kingland (@lkingland, kingland@redhat.com)
  - Calum Murray (@Cali0707, cmurray@redhat.com)
- Upstream Issue: https://github.com/knative/ux/issues/196
- LFX URL: 

### OpenYurt

#### OpenYurt Docker Extension for Simplified Deployment

- Description:
  OpenYurt is an open-source edge cloud-native platform designed to streamline application management in edge computing scenarios. However, the current installation process can be complex for newcomers, creating a barrier to adoption. This project aims to significantly improve the user experience by creating a Docker Extension for OpenYurt. The extension will enable users to install and configure a complete OpenYurt environment, including the yurt-dashboard, with a single click directly from the Docker Desktop interface. This will dramatically lower the entry barrier, allowing developers and edge computing enthusiasts to quickly set up a local development and testing environment, thereby fostering greater community engagement and accelerating innovation on the platform.
- Expected Outcome:
  - Docker Extension Development: Develop a functional Docker Extension using the Docker Extension SDK that can be installed in Docker Desktop.
  - One-Click Deployment: Package OpenYurt's core components (yurt-manager, yurt-hub, etc.) and dependencies into the extension to automate the setup of a single-node OpenYurt cluster.
  - Dashboard Integration: Provide seamless access to the Yurt Dashboard directly from the extension's UI within Docker Desktop, for example, through an "Open Dashboard" button.
  - User Guide and Documentation: Create comprehensive documentation detailing how to install, use, and troubleshoot the OpenYurt Docker Extension.
- Recommended Skills:
  - Familiarity with Docker and the Docker Extension SDK.
  - Experience with frontend development (e.g., React/TypeScript, Vue) for building the extension's user interface.
  - Proficiency in shell scripting (Bash) or Golang for automating the installation and configuration scripts.
  - A solid understanding of Kubernetes concepts and the OpenYurt architecture.
- Mentor(s):
  - Lu Chen (@luc99hen, luc99.en@gmail.com)
  - Bingchang Tang (@zyjhtangtang, bingchang07@gmail.com)
  - Karan karanngi (@karanngi, karann.git@gmail.com)
- Upstream Issue:
  [https://github.com/openyurtio/openyurt/issues/2422](https://github.com/openyurtio/openyurt/issues/2422)
- LFX URL: 

### PipeCD

#### Prepare documentation for PipeCD v1 release

- Description: Over time, the [plugin-arch pipecd](https://pipecd.dev/blog/2024/11/28/overview-of-the-plan-for-pluginnable-pipecd/) (some docs we call pipecdv1) has reached the final stages before release. Although most of the features of v0 are retained when moving to v1, some of the documentation and usage need to be updated to match v1. 
- Expected Outcome:
  - Refine pipecd documentation, ensure v0 and v1 coexist in parallel without causing confusion
  - Prepare documentation for pipecd v1
  - Support prepare developer guideline for making pipecd [plugins](https://github.com/pipe-cd/community-plugins/)
- Recommended Skills:
  - Create docs with [Hugo](https://gohugo.io/documentation/)
  - English skill at professional level
  - Knowledge on CI/CD, GitOps, Cloud vendors (such as GCP, AWS, etc)
  - Golang programming language (to understand the codebase if needed)
- Mentors:
  - Khanh Tran (@khanhtc1202, khanhtc1202@gmail.com)
  - Shinnosuke Sawada-Dazai (@Warashi, shin@warashi.dev)
  - Yoshiki Fujikane (@ffjlabo, ffjlabo@gmail.com)
  - Tetsuya Kikuchi (@t-kikuc, tkikuchi07f@gmail.com)
- Upstream Issue: https://github.com/pipe-cd/pipecd/issues/6077
- LFX URL: 

### Harbor

#### Harbor CLI - System Settings and Configuration

- Description: Harbor is a widely adopted container registry, and its initial CLI has been developed by LFX mentees. The goal is to extend this CLI by implementing additional functionalities and workflows that are currently only available in the Web UI. The CLI should be useful for Harbor administrators and users, especially to manage workflows within CI/CD pipelines. We seek a Golang-experienced mentee to enhance the CLI independently.

- Expected Outcome:
  - Extend the Harbor CLI to include essential commands not yet implemented.
  - Add new features to improve Harbor management via the CLI for Harbor Administration, enabling robust workflows in CI/CD environments.
  - Review and test all implemented commands to ensure they work as expected.
- Recommended Skills: Golang, spf13/cobra, Harbor
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com) 
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)
- Upstream Issue: https://github.com/goharbor/harbor-cli/issues/450
- LFX URL: 

#### Extend Harbor's Pluggable Scanner API for Runtime Behavior Profiles

- Description: Harbor is a widely adopted container registry. As one of the most widely adopted container registries, it is a critical component in modern software supply chains. This project aims to enhance its security capabilities by extending Harbor's Pluggable Scanner specification to support Runtime Behavior Profiles (also known as a Behavior of Bill, or "BoB"). While Software Bill of Materials (SBOMs) describe what an artifact *contains*, a BoB describes how it *behaves* at runtime. By integrating `kubescape-node-agent` as a scanner, Harbor will be able to retrieve, store, and display these runtime profiles for OCI artifacts. This allows software producers to ship secure-by-default configurations and provides consumers with a way to verify runtime behavior, detect anomalies, and report unexpected activity. This feature will create greater trust in artifacts and help users meet emerging compliance requirements, such as the EU's CyberResilience Act, by enabling active breach identification through anomaly detection.

- Expected Outcome:
  * Propose and document the minimally necessary modifications to the Harbor Pluggable Scanner Spec to support the retrieval of runtime profiles.
  * Implement a scanner adapter that integrates `kubescape-node-agent` with Harbor.
  * The adapter must be able to retrieve and process SPDX-compliant Runtime Profiles (SBOBs).
  * Extend Harbor's UI to allow users to view runtime profiles and see potential mismatches between expected and observed behavior.
  * Lay the foundation for interoperability of runtime and supply chain security tooling across the CNCF ecosystem.

- Recommended Skills:
  * Golang
  * REST API Design
  * Kubernetes
  * Containers and OCI Image/Distribution Specifications
  * Familiarity with software supply chain security concepts (SBOM, SPDX)

- Mentor(s):
  * Vadim Bauer (@vad1mo, vb@container-registry.com)
  * Prasanth Baskar (@bupd, bupdprasanth@gmail.com)

- Upstream Issue: https://github.com/goharbor/pluggable-scanner-spec/issues/22
- LFX URL: 

#### Harbor Satellite: Q&A and Docs

- Description: As edge computing grows, managing container registries at edge becomes a challenge. As the Harbor satellite project matures and evolves, we need to improve the code quality, the release process and user documentation.

- Expected Outcome:
  - Extend build and release artifacts using Dagger.
  - Perform code reviews and establish a Q&A process
  - Create, Update and Improve documentation for Harbor Satellite.
  - Implement new features.

- Recommended Skills 
  - Golang
  - GitHub workflow
  - Dagger
  - Testing 
  - Q&A
  - Good writing and communication 


- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)

- Upstream Issue: https://github.com/goharbor/harbor/issues/21959
- LFX URL: 

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
- LFX URL: 
