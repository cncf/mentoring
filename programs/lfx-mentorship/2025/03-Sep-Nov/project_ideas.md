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

### Kagent

#### Building cloud native agents for Kagent

- Description: Kagent is an open-source framework for DevOps and platform engineers to run AI agents in Kubernetes, automating complex operations and troubleshooting tasks. We have a few agents for kagents (Kubernetes, Istio, Cilium, Argo, Prometheus, Grafana etc) and would love to build more agents for other CNCF graduated or incubation projects so users can use conversation style to chat with the agents to either learn or troubleshooting or operating these projects.
  
- Expected Outcome: Able to build at least 2-3 agents for CNCF graduated or incubation projects. Able to write a blog for the work and produce associated docs as well.
  
- Recommended Skills:
  - Python
  - Kubernetes
  - familar with cloud native, Docker and some CNCF graduated or incubation projects
  - Basic understanding of AI agents and LLMs.
  - Understand how open source contribution works, familar with GitHub.
    
- Mentor(s):
  - Lin Sun(@linsun, linsun@solo.io) & Eitan Yarmush(@EItanya, eitan.yarmush@solo.io) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
    
- Upstream Issue:
  - https://github.com/kagent-dev/kagent/issues/662
  - https://github.com/kagent-dev/kagent/issues/664

- LFX URL: 

### Meshery

#### Relationships for GCP services

CNCF - Meshery: Relationships for GCP services (2025 Term 3)

- Description:
Meshery Models are declarative representations of infrastructure and applications. Within these models, Relationships define how different Components (e.g., Kubernetes resources, Cloud services) interact and depend on each other. These relationships are crucial for visualizing, understanding, and managing complex cloud native systems.

This internship focuses on significantly expanding the breadth and depth of Meshery Relationships across a wide array of technologies supported by Meshery. As Meshery continues to integrate with more cloud-native technologies (Kubernetes, public clouds, and all CNCF projects), there's a growing need to accurately model the intricate relationships between their components - vital for providing users with comprehensive insights and control over their deployments.

- Recommended Skills: DevOps, systems administration, solutions architecture. Experience with Kubernetes, GCP and its services.
- Responsibilities:
  - Research and Analyze Technologies: Dive deep into various cloud-native technologies (e.g., different compute services, databases, messaging systems, network services, etc.) to understand their components and how they interconnect.
  - Develop Relationship Definitions: Create and contribute relationship definitions, typically in JSON or YAML format, to the Meshery models. 
  - Model Inter-Technology Interactions: Focus particularly on defining relationships between components from different technologies (e.g., how a Kubernetes deployment relates to an GCP Spanner instance, or how a Linkerd service interacts with a Prometheus monitoring component).
  - Document New Relationships: Clearly document the newly defined relationships, their purpose, and how they are represented within Meshery designs, contributing to the official Meshery documentation.
- Expected Outcome:
  - A multitude of new relationships defined both intra and inter GCP services.
  - Policy Contribution: For advanced interns, there may be opportunities to contribute to the Rego policies that evaluate and enforce these relationships.
- Mentor(s): James Horton (hortison, james.horton2337@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/15531
- LFX URL: 

#### Solutions Architecture of Popular Cloud Native Deployments

CNCF - Meshery: Solutions architecture for cloud-native deployments (2025 Term 3)

- Description: Learning paths with hands-on labs are a crucial resource for DevOps engineers and cloud-native practitioners. The Meshery Playground provides a live cluster environment, making it an ideal platform for learning every kind of cloud and cloud native technology. Meshery Docs is in need of comprehensive tutorials and scenarios covering common infrastructure management use cases. Mission is to create and publish a series of hands-on tutorials using Meshery Playground. Each tutorial will include step-by-step guides, live demonstrations, and interactive labs using the Playground allowing learners to apply their knowledge directly without the hassle of any configuration.These tutorials will be reviewed by various project maintainers and then published in guides/tutorials.
- Expected Outcome:
  - 10+ new solution architectures (designs) published in Meshery Catalog
  - Each design is ideally adjoined with an interactive tutorial (using Meshery Playground), guiding users through infrastructure.
  - Tutorials should vary in complexity, catering to beginners and advanced learners.
- Recommended Skills: written English, Markdown, Kubernetes, DevOps, and hands-on experience with cloud-native tools
- Mentor(s): Rian Cteulp (ritzorama, rian.cteulp@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com), Sangram Rath (@sangramrath, sangram.rath@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/15532
- LFX URL: 
