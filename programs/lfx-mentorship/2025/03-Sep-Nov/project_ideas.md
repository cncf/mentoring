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


### Meshery

#### Relationships for AWS services

CNCF - Meshery: Relationships for AWS services (2025 Term 3)

- Description:
Meshery Models are declarative representations of infrastructure and applications. Within these models, Relationships define how different Components (e.g., Kubernetes resources, Cloud services) interact and depend on each other. These relationships are crucial for visualizing, understanding, and managing complex cloud native systems.

This internship focuses on significantly expanding the breadth and depth of Meshery Relationships across a wide array of technologies supported by Meshery. As Meshery continues to integrate with more cloud-native technologies (Kubernetes, public clouds, and all CNCF projects), there's a growing need to accurately model the intricate relationships between their components - vital for providing users with comprehensive insights and control over their deployments.

- Recommended Skills: DevOps, systems administration, solutions architecture. Experience with Kubernetes, AWS and its services.
- Responsibilities:
  - Research and Analyze Technologies: Dive deep into various cloud-native technologies (e.g., different compute services, databases, messaging systems, network services, etc.) to understand their components and how they interconnect.
  - Develop Relationship Definitions: Create and contribute relationship definitions, typically in JSON or YAML format, to the Meshery models. 
  - Model Inter-Technology Interactions: Focus particularly on defining relationships between components from different technologies (e.g., how a Kubernetes deployment relates to an AWS RDS instance, or how a Linkerd service interacts with a Prometheus monitoring component).
  - Document New Relationships: Clearly document the newly defined relationships, their purpose, and how they are represented within Meshery designs, contributing to the official Meshery documentation.
- Expected Outcome:
  - A multitude of new relationships defined both intra and inter AWS services.
  - Policy Contribution: For advanced interns, there may be opportunities to contribute to the Rego policies that evaluate and enforce these relationships.
- Mentor(s): Mia Grenell (@miacycle, mia.grenell2337@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com), Sangram Rath (@sangramrath, sangram.rath@gmail.com)
- Issue: https://github.com/meshery/meshery/issues/15518
- LFX URL: 
