# Term 03 - 2022 November - September

Status: planning

## Table of Contents

### Timeline

#### Term 3: September 5th - November 30th

Mentorship duration - three months (12 weeks - full-time schedule)

| activity | date |
| --- | --- |   
| project proposals | August 1 - August 12, 5:00 PM PDT |
| mentee applications open | August 15 - August 24, 5:00 PM PDT |
| application review/admission decisions/HR paperwork | August 25 - September 1, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | September 5 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | October 6 (End of Week 5) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | November 16, 5:00 PM PST (End of Week 11) |
| Last day of term | November 30 |

### Project Instructions

Project proposals open August 1st, 2022.

Once opened, Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/lfx-mentorship/2022/03-Sept-Nov/project_ideas.md, by August 12th, 2022.

### Applciation instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/lfx-mentorship/README.md#program-guidelines) page.

## Accepted Projects

### Cilium

#### Improving Security posture of the Cilium/Hubble/Tetragon release process

- Description: To be able to improve the Security posture of the Cilium family’s open source projects (Cilium, Hubble, Tetragon), we would need to create signed SBOMs, signed release artifacts for each open source project and automate all of these steps.

- Recommended Skills: Golang, GitHub Actions, Kubernetes, Docker, Security
- Mentor(s): [André Martins](https://github.com/aanm)  [Natália Réka Ivánkó](https://github.com/sharlns) [Jed Salazar](https://github.com/jedsalazar)
- Issues: <https://github.com/cilium/cilium/issues/19282> <https://github.com/cilium/cilium/issues/20712> <https://github.com/cilium/cilium/issues/20850>

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/680e32e5-d056-46fa-a94d-4af453d4e81d


### CNCF TAG Contributor Strategy

#### Mentoring Workspaces - GITHUBUSER.PROJECT.cncf.io (w/ VSCode)

- Description: pair.sharing.io is a mentoring / pair environment used by ii.nz that brings up clusters to co-learn and co-author via tmate+emacs and a live cluster with many features useful to cloud native development. However, while many folks find the ideas useful, it would be good to reach a wider audience by bringing up workspaces w/ VSCode as an alternative to emacs. The request is for a PoC deploying coder.com to CNCF Infrastructure (likely Packet) and bringing over some of the methods of collaboration learned by ii on pair to a wider audience.
  "If you want to go fast, go by yourself. If you want to go far, go together." African Proverb – Martha Goedert
- Recommended Skills: shell, terminals, VSCode, k8s, System Administration
- Mentor(s): Hippie Hacker (@hh), Caleb Woodbine (@BobyMCBobs)
- Issue: <https://github.com/sharingio/pair/issues/173>

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2f5582f4-6cfa-41af-88d2-2bfdd8768756

### CNCF TAG Network and Observability

#### Kubernetes ontology and subgraph module design

Description: Network topologies and graph databases go hand-in-hand. The OpenAPI specifications for Kubernetes provides taxonomy, but augmenting a graph data model with formalized ontologies enables any number of capabilities, one of the more straightforward is the inferencing requisite for natural language processing, and consequently, a human-centric query / response interaction becomes becomes possible. More importantly, more advanced systems can be built when a graph data model of connected systems is upgraded to be a knowledge semantic graph. Deliverables (among other items):

- a Kubernetes ontology using OWL as a popular (and mature) way of doing this.
- a cuelang-based component generator

Recommended Skills: cuelang, golang, neo4j
Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Matt Young](https://github.com/halcyondude)
Issue: https://github.com/cncf/tag-network/issues/21

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/df449a23-ac20-4ee9-8a2c-e0e5d08ba727


### KubeArmor

#### Add BTF and BPF CO-RE Support to KubeArmor

- Description: Currently KubeArmor depends on kernel headers to use various kernel structures. This creates difficulty in having portability.
Linux Kernel versions with BTF (BPF Type Format) information available allows us to write portable BPF CO-RE (or Compile Once - Run Everywhere) applications that can run on multiple kernel versions and configurations without any modification or runtime compilation on the target machine.  
But there is a restriction that CO-RE requires to have the BTF information of the target kernel, which is provided by the kernel itself when it's compiled with CONFIG_DEBUG_INFO_BTF=y. This option was introduced in Linux 5.2.  
For kernels < 5.2 we can use BTFGen to ship BTF information with KubeArmor code or use pahole to generate BTF information from the vmlinux image (with DWARF information) at runtime.  
The project aims to make KubeArmor truly portable across all kernel versions by reducing host environment dependencies.

- Recommended Skills: Kernel, go, C 
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/789>

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d61e1b05-2a4f-432d-b715-57c818b3e120

#### Use non-privileged containers for KubeArmor daemonset

- Description: KubeArmor currently uses privileged mode for its daemonset containers. But it is not a good practice. Privileged containers are usually frowned upon. In many cases, specific admission controllers are deployed to not allow containers to be installed in privileged mode.
It is best to not use privileged mode but to define specific capabilities for KubeArmor.  
The aim of the project is to analyse and reduce the system privileges required by KubeArmor, thereby reducing the potential attack surface.

- Recommended Skills: go, Kernel, k8s
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/781>

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3cc962b4-cd8b-46ea-9c77-83304145fd51


### Kyverno

#### Policy Exceptions

- Description: Enable flexible management of policy exceptions without requiring changes to the policy definitions.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/2627 

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0eb98f34-bfd8-4ba1-b9e5-47fc67b6fd41

#### Enable resource clean-up

- Description: Support a new type of Kyverno rule to delete resources based on various criterias, such as the type, age, metadata and status.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3483
  - https://github.com/kyverno/KDP/pull/25 

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/25e0fa72-8260-4c6f-819b-d87b865e58f2

#### Implement new custom JMESPath filters

- Description: Kyverno uses JMESPath to perform filtering and selection of JSON content in a flexible and advanced way. Many custom filters have been implemented specifically for Kyverno to date. Implement two more filters which fill needed gaps in Kyverno today: a random string generator and an index locator.
- Recommended Skills: Golang
- Mentor(s): Chip Zoller, Shuting Zhao
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3598 
  - https://github.com/kyverno/kyverno/issues/3981

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bb0ff695-3d54-4ce2-b93c-3ab92842b3ee

#### Logging in JSON plus other enhancements

- Description: Add an ability allowing a user to tell Kyverno to log in JSON format rather than klog.
- Recommended Skills: Golang
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3411

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e5ef8032-3dd3-44c3-8746-620f4f678d60

#### More support for subresources

- Description: Kyverno lacks the ability to operate on some important subresources like /scale and /status in areas such as validation and mutation.
- Recommended Skills: Golang
- Mentor(s): Shuting Zhao
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3118
  - https://github.com/kyverno/kyverno/issues/2843
  - https://github.com/kyverno/kyverno/issues/4313 

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9ac41a72-62f4-48e9-8630-5f9be261e2bf


### Meshery

#### Integration of Open Policy Agent (OPA) and Meshery

- Description: As a golang library integrate OPA into Meshery Server, enabling users to define policies to dictate the manner in which their cloud native infrastructure is to both run and be configured. Design an extensible policy framework in which rules may be augmented and dynamically supplied at runtime. 
- Recommended Skills: golang, rego, reactjs
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Ashish Tiwari](https://github.com/revolyssup)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/544

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ea439582-8c63-498d-9066-dc563ce1172e

#### User Interface Overhaul: State Management w/Apollo/GraphQL

- Description: Overcome current architectural issues of:
1) No Caching - In Meshery UI, List of adapters is a state that is being used in multiple components i.e Settings , Dashboard , Connection Wizard and Performance. Refetching the data on every mount of each of these components degrades the user experience. The same goes for all the other data that are being used across multiple components.
2) Multiple Sources of Truth - There is no single source of truth in Meshery UI as all react components manage their own state. Since Meshery UI has to deal with data that frequently changes, like Control Plane Data, Meshsync data etc. it will become hard to keep them in sync if they all manage their own copy of them  in their local state.
3) Maintainability of Code - Since we don't have any restrictions on how the code should be structured in Meshery UI, we can't expect every contributor to write efficient and bug free (relative term) code, which also makes it difficult to maintain.

- Recommended Skills: reactjs, apollo, graphql, redux
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Nithish Karthik](https://github.com/sudo-NithishKarthik)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/5094

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7592d7db-5517-445b-95e8-14144c49e9b1


### Service Mesh Performance

#### Adaptive Load Controller

- Description: The adaptive load controller is to execute optimization routines recursivley to determine the maximum load a system can sustain. The maximum load is usually defined by the maximum requests per second (rps) the system can handle. The metrics (CPU usage, latency etc) collected from the system under test are the constraints we provide to judge whether a system under test (SUT) is sustaining the load.

A use-case that fits very well is be the ability to use it to run performance tests on a schedule and track the maximum load a system can handle over time. This could give insights to performance improvements or degradations.

- Recommended Skills: golang, grpc, docker, kubernetes
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Xin Huang](https://github.com/gyohuangxin)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/350

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9959277e-eefc-4c88-83b6-e8c4b011d557

#### Convergence of Network and Graph topologies

- Description: Use Neo4j's ability to create graph projections, which copy a subgraph to RAM so that algorithms can be efficiently run. This opens the door to leveraging algorithms in the areas of Centrality, Community Detection, Pathfinding, Topological Link Prediction, etc. Bringing to bear advances made in Machine Learning / AI / recommendation systems, fraud detection could really help to derive meaning and comprehension for future tools. Another example is how ML + graph approaches are used to find and determine the optimal molecular structure of atoms such that desired physical properties are targeted. This approach could be applied to the problem of workload sizing and estimation for service mesh operators and would-be adopters.
- Recommended Skills: cuelang, golang, neo4j
- Mentor(s): [Lee Calcote](https://github.com/leecalcote), [Nic Jackson](https://github.com/nicholasjackson)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/351

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2c4510d6-7b73-4082-a3f4-209f61767263


### Vitess

#### Add complete parsing support for Spatial MySQL functions II

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of spatial MySQL functions are not parsed correctly and result in syntax errors. The task of the mentee would be to add parsing support for such functions and features which can be found at https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): [Manan Gupta](https://github.com/GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/845ccf34-d7aa-45cf-abc2-1b3064e96af1

### Improve evaluation engine

- Description: Improve the compatbility of Vitess' evaluation engine against MySQL by adding support for more built-in SQL functions.
- Detailed description: The evaluation engine in Vitess is one of the most critical parts of our query serving infrastructure. This engine is capable of evaluating arbitrary SQL expressions directly inside Vitess' process, without reaching out to a live MySQL instance, and this allows us to plan and execute complex user queries (e.g. queries that contain WHERE and similar filter clauses) between Vitess shards much more efficiently. If you're interested in this GSoC project, your task for the summer will involve continuing the work on this evaluation engine by implementing support for as many built-in SQL functions as possible, using the behavior of MySQL as a reference.
- Expected outcomes: We expect the Evaluation Engine in Vitess to be close to 100% compatible with MySQL after all the leftover SQL built-ins have been implemented.
- Recommended Skills: Golang, MySQL
- Mentor(s): Vicent Marti (@vmg)
- Expected size of the project: 350h
- Difficulty rating: Medium
- Upstream Issue (URL): https://github.com/vitessio/vitess/issues/9647

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/29ec853c-3ab9-4457-ac91-d273fa073d49
