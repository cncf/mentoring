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

### Fluid

#### Design and implement a CLI tool to help easily use Fluid

CNCF - Fluid: Design and implement a CLI tool for Fluid (2026 Term 1)

- Description: Fluid manages Kubernetes resources (Statefulsets, PersistentVolumeClaims & PersistentVolume, etc.) under two Fluid custom resources CR called `Dataset` and `Runtime`. Given a pair of Dataset and Runtime CR, users may want to inspect the underlying resources, check their status and diagnose which part is going wrong. A CLI tool (e.g. a kubectl plugin) for Fluid would be a straightforward way for Fluid's users to easily get such information.

- Expected Outcome:
  - Design and implement a CLI tool for Fluid
  - Support `inspect` subcommand: list resource status given a Fluid Dataset CR.
  - Support `diagnose` subcommand: collect related information (e.g. logs, pod status, etc.) to help diagnose what's going wrong.
  - Implement a framework to diagnose Fluid with LLM/AI. (The collected information can be put into the context of an AI inference request)

- Recommended Skills: Fluid, Go, CLI tool development, LangChain(or other alternative LLM frameworks)

- Mentor(s):
  - Zhihao Xu (@TrafalgarZZZ， [trafalgarz@outlook.com](mailto:trafalgarz@outlook.com))
  - Yang Che (@cheyang, [cheyang52@gmail.com](mailto:cheyang52@gmail.com))


### Meshery

#### Migration of docs.meshery.io from Jekyll to Hugo

CNCF - Meshery: Migration of docs.meshery.io from Jekyll to Hugo (2026 Term 1)

- Description: The Meshery documentation [docs.meshery.io](https://docs.meshery.io) is a critical resource for users and contributors. Currently built using Jekyll, the site faces limitations in build speed, scalability, and long-term maintainability. Hugo, a modern static site generator, offers significantly faster build times, better content organization, and an improved developer experience. This internship focuses on migrating the entire [docs.meshery.io](https://docs.meshery.io) site from Jekyll to the Hugo framework, using docs.layer5.io (already implemented in Hugo) as a reference architecture. The migration will involve porting all documentation content, assets, layouts, and configuration while preserving URLs, SEO, contributor workflows, and existing auto-generated documentation files.
- Expected Outcome: 
  1. Revamp of documentation set information architecture. Alignment with Diataxis framework.
  2. Updated contributor docs.
  3. All self-documenting aspects accounted for:
     1. Compatibility tests of Meshery Adapters.
     2. End-to-end tests of Meshery UI.
     3. Integration of Meshery Catalog and all designs.
     4. Publication of community discussion forum activity per category.
     5. Integration of Meshery Models (Integrations)
- Recommended Skills: Static site generators (Jekyll and Hugo), Markdown, HTML/CSS, Git/GitHub workflows, documentation engineering, basic Go templating (Hugo), CI/CD familiarity.
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Kate Suttons (@suttonskate, kate.suttons2337@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/17095

#### Relationships for AWS services

CNCF - Meshery: Relationships for AWS services (2026 Term 1)

- Description: Meshery Models are declarative representations of infrastructure and applications. Within these models, Relationships define how different Components (e.g., Kubernetes resources, Cloud services) interact and depend on each other. These relationships are crucial for visualizing, understanding, and managing complex cloud native systems. This internship focuses on significantly expanding the breadth and depth of Meshery Relationships across a wide array of technologies supported by Meshery. As Meshery continues to integrate with more cloud-native technologies (Kubernetes, public clouds, and all CNCF projects), there's a growing need to accurately model the intricate relationships between their components - vital for providing users with comprehensive insights and control over their deployments.
- Recommended Skills: DevOps, systems administration, solutions architecture. Experience with Kubernetes, AWS and its services.
- Responsibilities:
  - Research and Analyze Technologies: Dive deep into various cloud-native technologies (e.g., different compute services, databases, messaging systems, network services, etc.) to understand their components and how they interconnect.
  - Develop Relationship Definitions: Create and contribute relationship definitions, typically in JSON or YAML format, to the Meshery models. 
  - Model Inter-Technology Interactions: Focus particularly on defining relationships between components from different technologies (e.g., how a Kubernetes deployment relates to an AWS RDS instance, or how a Linkerd service interacts with a Prometheus monitoring component).
  - Document New Relationships: Clearly document the newly defined relationships, their purpose, and how they are represented within Meshery designs, contributing to the official Meshery documentation.
- Expected Outcome:
  - A multitude of new relationships defined both intra and inter AWS services.
  - Policy Contribution: For advanced interns, there may be opportunities to contribute to the Rego policies that evaluate and enforce these relationships.
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Sangram Rath (@sangramrath, sangram.rath@gmail.com)
- Issue: https://github.com/meshery/meshery/issues/17096

#### Adapter for AI and LLMs

CNCF - Meshery: Adapter for AI and LLMs (2026 Term 1)

- Description: Meshery is the open-source cloud native manager that empowers platform engineers to design and operate infrastructure. As infrastructure complexity grows, the need for intelligent assistance becomes critical. This project focuses on developing and enhancing a dedicated AI Adapter and AI Connections for Meshery. This adapter serves as the bridge between Meshery’s core orchestration engine and various Large Language Models (LLMs). The goal is to enable "Natural Language to Infrastructure" capabilities, allowing users to describe their architectural intent (e.g., "Deploy a highly available Kubernetes cluster on AWS with Prometheus monitoring") and have Meshery auto-generate the visual topology and configuration manifests. The intern will work on decoupling the AI logic from the core platform, allowing users to "Bring Your Own Model" (BYOM)—supporting both cloud-based providers (OpenAI, Anthropic) and local inference runners (Ollama, LocalAI).
- Recommended Skills:
  - Proficiency in Golang (Go) is essential, as Meshery’s backend is written in Go.
  - Familiarity with MCP Servers, REST APIs, LLM APIs (OpenAI, Vertex AI), local inference servers (Ollama).
  - Basic understanding of Kubernetes, Docker, and Infrastructure-as-Code (IaC) concepts.
  - Experience with REST, GraphQL, and gRPC.
  - Nice to have: Experience with React (for frontend integration in Meshery UI).
- Responsibilities:
  - Co-design and implement the interface for the AI Adapter in Go to communicate with the Meshery Server.
  - Implement support for connecting to local LLMs (via Ollama) to ensure data privacy for users who cannot send infrastructure data to the public cloud.
  - Improve the "System Prompt" and context-window management to feed the LLM relevant data regarding Meshery Models (schema definitions) so the AI generates valid infrastructure configurations.
  - Write unit and integration tests to ensure the reliability of the adapter.
  - Create user guides on how to configure the adapter with different AI providers.
- Expected Outcome:
  - A fully functional AI Adapter (or Connection) integrated into the Meshery ecosystem.
  - Demonstrable capability for users to swap between at least two different LLM providers (e.g., OpenAI vs. a local Llama 3 model).
  - Implementation of a feature where natural language queries result in a rendered design.
  - Merged pull requests (PRs) including code, tests, and documentation.
  Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Rian Cteulp (@ritzorama, rian.cteulp@gmail.com)
- Issue: https://github.com/meshery/meshery/issues/17097

#### Graph Database Integration

CNCF - Meshery: Graph Database Integration (2026 Term 1)

- Description: Meshery's *MeshSync* component acts as the real-time discovery engine, maintaining an up-to-date snapshot of all managed infrastructure. Currently, mapping the complex relationships between these resources (e.g., a Service selecting Pods which are mounted to PVCs) relies on relational or in-memory lookups that can become inefficient at scale. This project involves integrating a dedicated graph database (or an embedded graph processing library) into Meshery's architecture. The goal is to ingest discovered Kubernetes resources as "nodes" and their associations (OwnerReferences, Label Selectors, Annotations) as "edges." This shift will enable highly efficient traversal and querying of infrastructure data, powering more advanced capabilities like topology visualization, impact analysis, and dependency mapping.
- Recommended Skills:
  - Strong proficiency in Golang as both MeshSync and Meshery's Kubernetes operator are written in Go.
  - Understanding of openCypher, graph theory and Graph Databases (e.g., NebulaGraph, or embedded Go graph libraries like `gonum` or `cayley`).
  - Strong familiarity with Kubernetes Controllers, Informers, and the Object Model (GVK/GVR).
  - Experience and competency with GraphQL
- Responsibilities:
  - Refactor the MeshSync ingestion layer to map incoming Kubernetes objects to graph nodes and generate edges based on semantic relationships (e.g., `Service` -> `Pod`).
  - Integrate Meshery Relationships as first-class citizens in the graph schema to represent higher-level associations.
  - Implement the storage interface in the Meshery Operator to persist these graph structures efficiently.
  - Develop new GraphQL resolvers in the Meshery Server that utilize graph traversal queries to fetch topology data.
- Expected Outcome:
  - Fully-functional datastores of discovered cluster data into a graph structure.
  - Benchmarks demonstrating improved performance for complex relationship queries compared to the existing relational implementation.
  - Successful rendering of the infrastructure topology in Meshery UI using data fetched from the new graph backend.
  - Comprehensive documentation covering the new graph schema and query patterns.
Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), James Horton (@hortison, james.horton2337@gmail.com)
Issue: https://github.com/meshery/meshery/issues/17098

#### Workflow Engine in Meshery

CNCF - Meshery: Workflow engine integration (2026 Term 1)

Description: Integrate a new architectural component into Meshery: a workflow engine, using Temporal. This project involves shifting Meshery off of sqlite over to postgres using gorm (golang). Interns will familiarize with concepts of orchestration engines, including chaining workflows, and content lifecycle management.
Recommended Skills: Golang, Temporal, ReactJS
Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Marcus Ringblom (@marblom007, marcus.ringblom@gmail.com)
Issue: https://github.com/meshery/meshery/issues/17099


### Prometheus

#### Start scraping immediately on startup without waiting for WAL replay to finish

CNCF - Prometheus: Start scraping immediately on startup without waiting for WAL replay to finish (2026 Term 1)

- Description:
  When a large Prometheus is running in HA mode (i.e. 2 identical Prometheus scraping same targets) and it needs to be restarted (for upgrades, etc), there can be a temporary gap in queries when the second Prometheus is restarting. This is because the first Prometheus did not scrape any metrics when it was restarting (this is the gap), and when second Prometheus is restarting, only the first Prometheus is serving queries.

  To mitigate this, we want to start scraping targets as soon as Prometheus starts up, without waiting for it to complete the WAL replay and restore the old in-memory state. However, querying is still only enabled after WAL replay is over, but there won't be gaps in scraped data anymore.

  This project includes careful designing of low level technical challenges, including ensuring the correct handling of WAL records and seamlessly stitching together the new scraped data and the data restored from WAL without a lot of memory overhead.
- Expected Outcome:
  - Design the correct handling of WAL records where the series information lines up between the old WAL and newly scraped data.
  - Design a low overhead method to stitch together the scraped data and the data restored from WAL.
  - Production ready PR with comprehensive test coverage. Ideally we will do the review iterations and merge the PR within this timeline.
- Recommended Skills:
  - Basic understanding of Go.
  - Comfortable diving deep into low level system code.
  - Familiarity with unit testing.
- Mentor(s):
  - Ganesh Vernekar (@codesome, ganeshvern@gmail.com)
  - Bryan Boreham (@bboreham, bjboreham@gmail.com)
- Upstream Issue: https://github.com/prometheus/prometheus/issues/17058


### Kubernetes

#### Kubespray

##### Automate building OS images for supported/CI tested distribution

- Description: This feature request aims to automate the building and publishing of OS images that are used in Kubespray CI testing. Currently, these images (defined in `test-infra/image-builder/roles/kubevirt-images/defaults/main.yml`) must be manually created and pushed by maintainers. Automating this process would reduce manual work, eliminate bottlenecks when maintainers are unavailable, and could include automatic cleanup of outdated or unused images, while still retaining images needed for older supported release branches. 
- Expected Outcome: A CI job (likely post-merge and possibly periodic) that automatically:
	1.	Builds the required Kubespray OS images used in CI for tested distributions.
	2.	Pushes these built images to the appropriate registry.
	3.	Cleans up old or no longer needed images but retains those required for supported release branches.
This workflow should remove the need for maintainers to manually create and manage these images.
- Recommended Skills: Ansible, GitLab CI, Python
- Mentor(s):
  - ChengHao Yang (@tico88612, tico88612@gmail.com)
  - Kay Yan (@yankay, yankaycom@gmail.com)
  - Max Gautier (@VannTen, mg@max.gautier.name)
- Upstream Issue: https://github.com/kubernetes-sigs/kubespray/issues/12383

#### Cluster API Provider AWS (CAPA)

##### Improve AMI Publication and Maintenance

- Description: Cluster API Provider AWS (CAPA) enables the creation of Kubernetes clusters in AWS with Cluster API. CAPA allows you create EKS and non-EKS based Kubernetes clusters. When creating a non-EKS cluster we must use AMIs for the nodes in the cluster. The project publishes some AMIs for non-production use. However, the process for publishing the AMIs needs improvment. Firstly we want to fully automate the publication of new AMIs when there is a new Kubernetes version available. Secondly, we need to implement the "AMI Publication Policy" for the project which will involve automated house keeping of AMIs. And thirdly we want to add back support for base operating systems that where temporarily dropped.
- Expected Outcome: Automated AMI publication and deletion inline with the projects policy. Support for additional operating systems.
- Recommended Skills: AWS, GitHub Actions, Packer, Ansible, Kubernetes
- Mentor(s):  
  - Richard Case (@richardcase, <richmcase@gmail.com>)
- Upstream Issue: <https://github.com/kubernetes-sigs/cluster-api-provider-aws/issues/5836>
