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

#### Headlamp

##### Add Cluster API to Headlamp: Cluster Lifecycle Management UI

- Description:
 Cluster API (CAPI) provides declarative APIs and tooling to provision, upgrade, and operate Kubernetes clusters. This project continues an existing Headlamp plugin to deliver first-class UI support for CAPI resources (Clusters, Machines, MachineDeployments, KubeadmControlPlanes). The plugin will let operators discover, inspect, and manage cluster lifecycle objects in Headlamp, visualizing hierarchical relationships and closing gaps in the plugin.

- Expected Outcome:
  - Sidebar and Map: List key CAPI CRs in the sidebar and Map view; show Clusters with Machines, MachineSets/Deployments, and control planes.  
  - Resource details: Dedicated pages with CAPI-specific fields (conditions, infra refs, provider info, control plane refs, node pools, cluster membership, provider status).
  - UI integration: Map visualization, sidebar icons, on-hover "Glance" tooltips.  
  - Robustness and tests: Fix runtime errors, human-friendly fields (e.g., "2d5h"), add automated tests.  
  - Polish and delivery: Refined tables, icons, clickable "Controlled by" links; packaged in Headlamp’s plugin repo with install and developer docs; Kubernetes Blog post showcasing benefits.

- Recommended Skills:
  - TypeScript + React
  - (Optional) Headlamp UI/plugin development, or other open source development
  - (Optional) Kubernetes fundamentals (CRDs, controllers, RBAC)
  - (Optional) Familiarity with Cluster API concepts (Cluster, Machine, MachineDeployment, etc.)

- Mentor(s):
  - Matt.Boersma (@mboersma, Matt.Boersma@microsoft.com)
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)

- Upstream Issue:  
  https://github.com/headlamp-k8s/plugins/issues/485
  
##### Add Kubeflow to Headlamp: Machine Learning Workflow Management UI

- Description:
 Build a Headlamp plugin to surface Kubeflow resources (Pipelines, Katib, PipelineRuns, Notebooks, TFJob/PyTorchJob/TrainJob, Spark) so operators and ML engineers can discover, monitor, and manage ML workloads alongside standard K8s resources. Link to Kubeflow UIs when deeper functionality is needed.

- Expected Outcome:
  - New Kubeflow sidebar with cross-namespace lists for Pipelines (Experiments, Runs), Katib experiments, Notebook servers, Training and Spark jobs.
  - Detail pages per resource showing metadata, status, metrics, logs and common actions (start Run, open Jupyter, view best hyperparams).
  - Links/embed to Kubeflow Central Dashboard or Pipelines UI for advanced tasks.
  - Headlamp Map integration: show relations to Deployments/Pods, Argo workflows, Spark driver/executors.
  - Metrics via Prometheus or /metrics: basic charts for experiment objectives and pod resource use.
  - Polished UX: icons, pagination, filtering, error handling.
  - Outreach: README/User Guide and a demo blog post with screenshots.

- Recommended Skills:
  - TypeScript + React
  - (Optional) Kubernetes fundamentals.
  - (Optional) Knowledge of Kubeflow and its sub-projects (Pipelines, Katib, etc.).
  - (Optional) Basic understanding of Prometheus metrics.

- Mentor(s):
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Adwait Godbole (@adwait-godbole, adwaitngodbole@gmail.com)
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)

- Upstream Issue:  
  - https://github.com/kubernetes-sigs/headlamp/issues/3710

##### Polish Knative support in Headlamp: Serverless Workload Management UI

- Description:  
  Knative enables serverless on Kubernetes (scale-to-zero, traffic splitting). This project finishes and polishes a Headlamp plugin so operators can **view, inspect, and manage Knative Services, Revisions, Configurations, and Routes** from Headlamp, complementing the `kn` CLI. Builds on an existing plugin.

- Expected Outcome:
  - Fully functional Knative plugin: in the Headlamp repo with a "Knative" sidebar. List KServices across namespaces with key columns (name, URL, traffic %, latest revision status) matching existing tools.
  - Service detail pages: showing URL, traffic split, concurrency/scaling, conditions; UI actions to adjust traffic, edit config/env/concurrency, and trigger redeploys via forms/modals with feedback and RBAC checks.
  - Related resources: list/link Revisions, Configurations, HTTPRoute/Knative Route; optional read-only revision/config views.
  - Headlamp-consistent UX: Map/metrics integration, bug fixes, basic tests, packaged metadata, ArtifactHub releases, README, and a kubernetes blog post with a short demo.

- Recommended Skills:
  - TypeScript and React
  - (Optional) **Kubernetes and Knative** – understanding concepts like Knative Service, Revision, traffic splitting, autoscaling, and how they are represented in "CRDs"
  - (Optional) Design and UX

- Mentor(s):
  - Kahiro Okina (@kahirokunn, okinakahiro@gmail.com)
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)

- Upstream Issue:  
  https://github.com/headlamp-k8s/plugins/issues/486

##### Add Strimzi to Headlamp: Kubernetes Kafka Management UI

- Description:
 Strimzi is a Kubernetes Operator for running Apache Kafka. This project builds a Headlamp plugin that adds a **Strimzi** section to Headlamp, surfacing Strimzi CRDs so operators can **view and manage Kafka clusters, topics, users, and connectors** from the Headlamp UI. The plugin follows Headlamp UX patterns with list and detail views, links between related resources, and optional metrics embedding.

- Expected Outcome:
  - Plugin exposes key Strimzi CRDs: Kafka, KafkaTopic, KafkaUser, KafkaConnect, and KafkaConnector.
  - List views, with summary columns (name, namespace, brokers, partitions, replication, status).
  - Detail pages, showing config, status conditions, sub-resources (broker pods, connectors), and basic actions (create/edit topic, regenerate user creds).
  - Relational navigation, cluster → topics/users; topic → cluster.
  - Consistent Headlamp UX, icons, tables, detail layouts, Map view enhancements.
  - Structured config display (collapsible sections/YAML toggle), humanized statuses, validated forms for mutating actions.
  - README with prerequisites and limitations; blog post demoing usage.

- Recommended Skills:
  - TypeScript and React
  - (Optional) Familiarity with Kubernetes CRDs and Operators
  - (Optional) Knowledge of Apache Kafka concepts
  - (Optional) UX design sensibilities

- Mentor(s):
  - Rene Dudfield (@illume, renedudfield@microsoft.com)
  - Jakub Scholz (@scholzj, github@scholzj.com)
  - Santhosh Nagaraj (@yolossn, sannagaraj@microsoft.com)
  - Ashu Ghildiyal (@ashu8912, ashu.ghildiyal@microsoft.com)

- Upstream Issue:  
  https://github.com/headlamp-k8s/plugins/issues/488

#### Kubernetes SIG Docs – Localization Subproject

##### AI-Era Localization Automation for SIG Docs Contributors & Reviewers

- Description:

This project focuses on improving localization workflows in Kubernetes SIG Docs by strengthening visibility, prioritization, and traceability across English and localized documentation. The enhanced workflows will benefit to reducing review burden and coordination costs that arise in environments where upstream content changes and subsequent localization efforts occur asynchronously. The project also explores practical approaches to achieving measurable productivity gains by adopting AI-assisted tools within established human workflows.

Mentees work with mentors in SIG Docs localization to improve existing localization review and coordination processes, such as label-based coordination and review signals implemented through Prow/CI. The project focuses on the following core areas: improving traceability between frequently changing English content and localized documentation, continuously tracking and notifying review priorities for translation updates, and maintaining visibility into localization coverage and prioritization based on document importance. All outcomes are designed to integrate naturally into existing SIG Docs GitHub workflows and practices while preserving and supporting human-led review and decision-making.

- Expected Outcome:
  - Reusable Prow/CI automation prototypes
    - Review-assist jobs and bots designed to be reusable across SIG Docs localization workflows.

  - Extensible architecture
    - Clear separation between core workflow logic and language-specific rules.

  - Best practices documentation
    - Guidance on improving localization workflows through supportive tooling and operational practices, while preserving human review, contributor growth, and community sustainability.

- Recommended Skills:
  - Basic understanding of Kubernetes documentation structure and contribution flow.
  - Git/GitHub workflows (issues, pull requests, review comments).
  - Familiarity with at least one programming or scripting language for automation (e.g., Go, Python, JavaScript).
  - Experience contributing to documentation localization (translation, review, or L10n process improvements).
  - Curious about improving productivity on documentation and localization through tools (e.g., linters, AI-assisted tools), workflows, and process improvements.

- Mentor(s)
  - Ian Y. Choi (@ianychoi, ianyrchoi@gmail.com)
  - Wonyong Hwang (@wonyongg, kakaohwy@gmail.com)
  - Eunjeong Park (@Eundms, eunjeongpark.eundms@gmail.com)
  - Seokho Son (@seokho-son, shsongist@gmail.com)
- Upstream Issue: https://github.com/kubernetes/website/issues/54075


### Kmesh

#### Kmesh supports multi-clusters

- Description: Kmesh, as a high-performance service mesh data plane, is now only supported for use in a single cluster. However, now that multi-cluster support for istiod has been realized, we are able to move forward with the multi-cluster adaptation of Kmesh to support the use of Kmesh in multi-cluster environments. Adaptation to the current multi-cluster production environment with LLM and large data.
- Expected Outcome:
  - 1.Code for implementing the Kmesh multi-cluster feature
    - 1.1. Adapting to the Istio Multi-Cluster Function API
    - 1.2. Traffic Management in multi-cluster scenarios
    - 1.3. Use IPsec to ensure the security of node communication.
  - 2.userguide doc
    - 2.1. proposal
    - 2.2. userguide
  - 3.e2e test
    - 3.1. Unit Test of Feature Function
    - 3.2. E2E test code
- Recommended Skills: go, docker , kind, service mesh
- Mentor(s):
  - Mentor Name:
  - zhonghu xu(@hzxuzhonghu, zhhxu2011@gmail.com),
  - changye wu(@nlgwcy, wuchangye@huawei.com),
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1570

#### Optimize long connection load balance and support more load balance algorithm

- Description: Kmesh employs eBPF for load balancing. However, at present it only supports short-lived connections and offers a limited range of load balancing algorithms. Consequently, we aim to support a broader range of load balancing capabilities.
- Expected Outcome:
  - 1.Load balancing with load-dependent connections via eBPF.
  - 2.Support as many load balancing algorithms as possible
    - 2.1 Sticky Round Robin
    - 2.2 Weighted Round Robin
    - 2.3 ...
  - 3.Userguide and Proposal
  - 4.Unit Test and E2E test
- Recommended Skills: go, docker , kind, service mesh
- Mentor(s):
  - xin liu(@bitcoffeeiux, liuxin350@huawei.com),
  - mingyi zhang(@lec-bit, zhangmingyi5@huawei.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1571

### kubeedge 

#### Cloud-Edge Simulation Benchmark for LLM Speculative Decoding in KubeEdge-Ianvs

- Description: 
  LLM inference acceleration is increasingly important for cloud-edge collaborative AI deployments. Speculative decoding can improve end-to-end generation speed by using a lightweight draft model to propose token candidates and a larger target model to verify them, but its real-world gains depend heavily on cloud-edge constraints such as network latency, bandwidth limits, and heterogeneous compute. 
  Ianvs provides a unified benchmarking framework, and KubeEdge scenarios often require evaluating AI workloads under cloud-edge conditions. This project proposes a single-host cloud-edge simulation benchmark in Ianvs to evaluate speculative decoding for LLM inference. The benchmark will simulate edge (draft) and cloud (verify) roles as separate processes, inject configurable network constraints, and report standardized throughput and latency metrics, enabling reproducible comparison between baseline decoding and speculative decoding under different cloud-edge budgets.
- Expected Outcome: 
  - An Ianvs benchmark test case for cloud-edge speculative decoding (PyTorch + HuggingFace).
  - A single-host simulation runner that emulates edge/cloud roles and configurable network constraints (e.g., latency, bandwidth).
  - Benchmark reports comparing baseline vs speculative decoding with key metrics (e.g., TTFT, end-to-end latency, tokens/s), and reproducible configs/scripts.
- Recommended Skills: Python, PyTorch, HuggingFace Transformers, LLM inference/decoding, benchmarking & performance profiling, KubeEdge/Ianvs basics
- Mentor(s):
  - Shijing Hu (@hsj576, sjhu21@m.fudan.edu.cn)
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/304

#### Comprehensive Example Restoration for KubeEdge Ianvs

- Description: Ianvs serves as the KubeEdge SIG AI distributed benchmark toolkit. As more and more contributors running, KubeEdge Ianvs now has 25 examples, and the number is still increasing. KubeEdge Ianvs then faces mounting usability issues due to dependency evolution and validation mechanisms. As Python versions, third-party libraries, and Ianvs features advance, partial historical examples fail to execute. This has led to surging user-reported Issues from confused contributors, untested PRs breaking core functionality of legacy features, and severely outdated documentation misaligning with actual capabilities. Without systematic intervention, the example risks becoming obsolete for edge-AI developers and especially newcomers. We then try to resurrect Ianvs’ usability with a comprehensive example restoration.
- Expected Outcome: 
  - Diagnose & fix bugs across examples, including dependency manifests, license scan, and runtime configurations.
  - Documentation Modernization, including revamp tutorials with reproducible step-by-step guides, publish developer-focused debugging playbooks for common failures. Write and upload the corresponding blog to the KubeEdge Website.
  - Advanced: Build a CI pipeline testing examples with GitHub Actions against multiple Python versions, critical Ianvs/upstream updates, and block PRs that break validated examples
  - Optional:  Preparing KubeEdge SIG AI speaking and marketing materials for open-source community events like KCD Days 2026 (in Beijing, thus writing and speaking skills in Mandarin would be a plus).
- Recommended Skills: Python, Benchmark, KubeEdge-Ianvs, AI/ML
- Mentor(s):
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
  - Shijing Hu (@hsj576, sjhu21@m.fudan.edu.cn)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/230

#### Batch Enable/Disable of EdgeHub on Edge Nodes via kubeedge/keadm

- Description: In bandwidth limited environments, as the cluster size expands, communication between cloud and edge nodes in KubeEdge consumes a significant amount of network resources, which may interfere with upper layer business applications. To alleviate this issue, it is necessary to implement batch enable or disable the EdgeHub edge node feature in keadm. Administrators can temporarily take edge nodes offline by turning off the EdgeHub switch, thereby releasing the bandwidth required for critical services. This feature should support adding subcommands in keadm for implementation.
- Expected Outcome: A keadm extension that provides commands or APIs to batch enable/disable the EdgeHub switch on specified edge nodes.
- Recommended Skills: Golang, KubeEdge
- Mentor(s):
  - Zhijia Yang (@luomengY, 2938893385@qq.com)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6609

#### Enable and Verify KubeEdge Support on RISC-V Architecture 

- Description: With the rapid growth of the RISC-V ecosystem, an increasing number of eage computing devices and IoT boards are adopting RISC-V. In very early versions of KubeEgde, we briefly verified compatibility with RISC-V. However, this has not been continuously validated in recent releases. As the codebase has evolved significantly, we need to re-establish and solidify support for this architecture to ensure KubeEdge can run seamlessly on the next generation of open hardware.
- Expected Outcome:
  - Deploy and run KubeEdge on actual RISC-V devices. Fix identified issues and submit PRs.
  - Generate official release assets (binaries) and multi-arch images for RISC-V.
  - Output a guide as a blog or docs about how to run KubeEdge on RISC-V to the kubeedge/website.
  - (optional) Explore how to add a basic verification step for RISC-V in KubeEdge GitHub Actions CI.
- Recommended Skills: KubeEdge, Operation System
- Mentor(s):
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6614
