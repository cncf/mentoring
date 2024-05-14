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

### Meshery

#### Meshery: CNCF project tutorials, creating design patterns, and publishing reference architectures

- Description: Meshery the CNCF’s 10th fastest growing project. As a cloud native manager, Meshery [integrates with 250+ projects](https://meshery.io/integrations) and technologies. For each CNCF project integrated with Meshery, tutorials, sample designs, and deployment patterns with reference architectures need to be created. For the earnest, DevOps-minded intern, this internship represents a vast opportunity to learn, document, and publish tutorials and best practices not only around Meshery, but for any number of the other CNCF projects, too. You will use the [Meshery Playground](https://play.meshery.io)

- Expected Outcome: 
  - 25+ new design patterns published in Meshery Catalog and Artifact Hub.
  - 5 new Meshery tutorials published in Meshery Docs.
  - Bonus: Extend one or more of Meshery’s Learning Paths.

- Recommended Skills: written English, Kubernetes, DevOps, and familiarity with any number of other CNCF projects, like Jaeger, Helm, Harbor, Flux, Argo, Flux, Falco, etc., Jekyll, strong organizational skills
- Mentor(s): Yash Sharma (@Yahsharma1911, yashsharma2572@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/10888

#### Meshery: End-to-End Testing with Playwright

- Description: Meshery integrates with many other CNCF projects and technologies. Sustaining those integrations is only possible through automation. End-to-end testing with Playwright, GitHub Workflows, and self-documenting test reports is the means to the end of maintaining a healthy state of each of these [Meshery integrations](https://meshery.io/integrations). 

- Expected Outcome: 
  - Successful migration of E2E tests from Cypress to the Playwright test library within the Meshery project.
  - Implementation of robust and reliable test cases using Playwright to cover a wide range of Meshery's E2E scenarios.
  - Documentation detailing the migration process, and guidelines for future contributions to maintain test quality.
  - Integration of Playwright test suite into the Meshery CI/CD pipeline to ensure continuous testing and reliability of the platform.
- Recommended Skills: JavaScript, Playwright, GitHub Workflows, Jekyll, Markdown, familiarity with React or Nextjs would be helpful, CI/CD
  - Mentor Name: Aabid Sofi (@aabidsofi19, mailtoaabid01@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com),
- Upstream Issue: https://github.com/meshery/meshery/issues/10890

#### Meshery: Support versioning for Meshery designs

- Description: Meshery design is a common practice of both configuring and operating cloud native infrastructure functionality in a single, universal file. We are seeking to enhance Meshery's capabilities by supporting automatic versioning of Meshery designs based on user sessions. This functionality will enable users to track changes made to their designs by individuals, facilitating the ability to rollback changes at any time.

- Expected Outcome: 
  - Update Meshery server and pattern engine to support Meshery design versioning.
  - Update UI to allow users to perform actions related to design versioning.
  - Document changes made in pattern engine and server.

- Recommended Skills: Golang, Kubernetes, Meshery, Familiarity with Helm charts and Artifact Hub, familiarity with React, Nextjs would be helpful
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Uzair Shaikh (@muzairs15, muzair.shaikh810@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/10889
