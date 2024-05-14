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

### Service Mesh Performance

#### Service Mesh Performance: Convergence of Network and Graph topologies

- Description: Opens the door to leveraging algorithms in the areas of Centrality, Community Detection, Pathfinding, Topological Link Prediction, etc. Bringing to bear advances made in Machine Learning / AI / recommendation systems, fraud detection could really help to derive meaning and comprehension for future tools. Another example is how ML + graph approaches are used to find and determine the optimal molecular structure of atoms such that desired physical properties are targeted. This approach could be applied to the problem of workload sizing and estimation for service mesh operators and would-be adopters.

- Expected outcome:
  - Use Neo4j's ability to create graph projections, which copy a subgraph to RAM so that algorithms can be efficiently run.
- Recommended Skills: Golang, familiarity with Service Mesh, grpc, docker, kubernetes
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Xin Huang (@gyohuangxin, xin1.huang@intel.com)
- Upstream Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/422

### CNCF TAG Network

#### Mapping CNCF Landscape one Relationship-at-a-time

- Description: While the OpenAPI specifications for Kubernetes offer a taxonomy, integrating a graph data model with formalized ontologies unlocks a multitude of capabilities. Among these, enabling inferencing necessary for natural language processing stands out as a straightforward application. This, in turn, facilitates the possibility of a human-centric query/response interaction. Importantly, advancing to a knowledge semantic graph from a connected systems' graph data model opens the door to building more sophisticated systems.

- Expected Outcome: 
  - Identifying new technologies from CNCF landscape and creating new YAML-formatted definitions of one or more relationships.
  - Documentation of each relationship - per component.
  - Development of new types of genealogies - new types of ways in which resources relate to one another and how these relationships might be visualized.

- Recommended Skills: Familiarity with Helm charts and Artifact Hub, basic familiarity with Kubernetes, and familiarity with CNCF different projects would be helpful
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Uzair Shaikh (@muzairs15, muzair.shaikh810@gmail.com)
- Upstream Issue: https://github.com/cncf/tag-network/issues/39

#### Technical Content Creation: CNCF Challenges 

- Description: On a periodic basis, the CNCF would like to present a public challenge to those that are interested in participating (e.g. “Challenge: Distributed Tracing with Jaeger”). 

Your mission in this internship is technical content creation of said challenges through use of markdown, Meshery, and any number of other CNCF projects. Challenges will be created using the Meshery Playground and potentially published in the proposed CNCF Hub. They will be similar too, but slightly different from these [example tutorials](https://docs.meshery.io/guides/tutorials/).

Understand that your challenges will be promoted through CNCF channels, reviewed by various project maintainers, and that each challenger (participant) will receive a certain number of points, depending upon whether or not they successfully complete the challenges that you create and in what timeframe they complete those challenges (the faster, the more points). Your challenges will need to vary in level of difficulty. 

- Expected Outcome: 
  - 10+ new challenges published in CNCF Hub (and Meshery Catalog and Artifact Hub).
  - Challenges can contain more than one objective. Points are earned for each objective completed.
  - Bonus: Extend one or more of Meshery’s Learning Paths.
	
- Recommended Skills: written English, Kubernetes, DevOps, and familiarity with any number of other CNCF projects, like Prometheus, CoreDNS, Istio, Jaeger, Helm, Harbor, OPA, Rook, SPIFEE, Flux, Argo, Flux, Falco, etc., Jekyll, strong organizational skills
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Nic Jackson (@nicholasjackson), jackson.nic@gmail.com)
- Upstream Issue: https://github.com/cncf/tag-network/issues/40