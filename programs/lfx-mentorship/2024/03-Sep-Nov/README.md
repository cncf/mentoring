# Term 03 - 2024 September - November

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity                                                                                                     | date                                                                                |
|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|   
| project proposals                                                                                            | Jul 3 - Jul 30 5:00 PM PDT                                                          |
| mentee applications open                                                                                     | Jul 31 - Aug 13 5:00 PM PDT                                                         |
| application review/admission decisions                                                                       | Aug 14 - Aug 27 5:00 PM PDT                                                         |
| selection notifications                                                                                      | Sept 3, 2024 5:00 PM PDT                                                            |
| Mentorship program begins with the initial work assignments                                                  | Sept 9, 2024                                                                        | 
| Midterm mentee evaluations and first stipend payments                                                        | October 15, 2024 5:00 PM PDT (the week following the National Day holiday in China) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Nov 26, 2024 5:00 PM PDT (Giving some time after KubeCon NA)                        |
| Last day of term                                                                                             | November 29, 2024                                                                   |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here [2024/03-Sep-Nov/project_ideas.md](./project_ideas.md), by July 23, 2024.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Accepted projects

### Envoy Gateway

#### IPv4/IPv6 Dual Stack Support

CNCF - Envoy Gateway: IPv4/IPv6 Dual Stack Support (2024 Term 3)

- Description: Envoy Gateway is an open source project for managing Envoy Proxy as a standalone or Kubernetes-based application gateway. Gateway API resources are used to dynamically provision and configure the managed Envoy Proxies. Currently the implementation only supports Kubernetes clusters with IPv4 enabled, and not IPv6
- Expected Outcome:
  The managed Envoy Proxy fleet can
  - Accept connections/listen on an interface that has an IPv6 address assigned to it
  - Can route to IPv6 pod endpoints/addresses
- Recommended Skills: Golang, familiarity with Kubernetes Networking
- Mentor(s):
  - Jianpeng He (@zirain, zirain@tetrate.io)
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/184
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/408607a5-22a7-469e-ba9b-773e8fb06ace

### Istio

#### Improve documentation build infrastructure

CNCF - Istio: Improve documentation build infrastructure (2024 Term 3)

- Description: The build infrastructure for istio.io currently carries a complete archived copy of the site for each release of Istio.  These archived versions should be separated to their own branch, with only the supported versions published.  We should also separate out content which is not version-specific (e.g. the home page, news and blogs) so that only the latest version of this content is visible online.
- Expected Outcome: Updated publishing infrastructure for istio.io which separates evergreen content (home page, blogs) with versioned content (documentation).  Drop-downs per docs page allow switching between the supported versions.  
- Recommended Skills: Systems engineering, scripting, programming (Go/Bash), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15463
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7a9cac67-6cfc-4915-bc39-8f2b5c1a4d00

#### Implement new site search

CNCF - Istio: Implement new site search (2024 Term 3)

- Description: Up to four versions of Istio are supported at one time, and so the documentation for each must be available. Our current site search is outdated and needs to be replaced, so that the search content only exists in the site search, and only fresh content is available on google.com.
- Expected Outcome: Working site search on istio.io, which lets you search for content for the currently supported versions.
- Recommended Skills: Hugo, Systems engineering, scripting, programming (Bash/go), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15464
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/557f553d-6cab-41e5-925e-c8063dc99d7e

### Konveyor AI

#### Intelli-j IDE plugin integration of analyzer-lsp for real time updates with Konveyor AI

CNCF - Konveyor AI: IntelliJ plugin for Real-Time Updates with analyzer-lsp (2024 Term 3)

- Description: Konveyor provides a unified experience of tools to help organizations modernize their applications at scale, transitioning them to Kubernetes and cloud-native technologies. Recently the Konveyor community began the development of a Generative AI approach for application modernization called Konveyor-AI.  Konveyor AI accelerates application migration by discovering migration incidents in the source code and providing LLM-generated fixes in a diff view presentation. When proposed changes are accepted, it provides real-time updates on the number of incidents.  The presentation side for this work is currently serviced via an IDE extension for VSCode.
We aim to expand Konveyor AI by developing an IntelliJ plugin. Our first step involves integrating the static code analysis tool, analyzer-lsp, into the IntelliJ plugin. We plan to create a common module for interaction with analyzer-lsp, which can be used in multiple IDE plugins, starting with VSCode and IntelliJ. Currently, the IntelliJ IDE uses the Konveyor CLI tool, Kantra, for analysis and transformation, but we need to replace Kantra with analyzer-lsp to optimize real-time updates.

- Expected Outcome:
Define and implement a new module or library to facilitate integration of analyzer-lsp into multiple IDEs.  We will start with VSCode and IntelliJ to begin.

- Recommended Skills: Typescript, Java, Basic software development skills (command line, git)

- Mentor(s):
  - Hiteshwari Patel (@hhpatel14, patelhiteshwari95@gmail.com)
  - Savitha Raghunathan (@sraghunathan, saveetha13@gmail.com)

- Upstream Issue: https://github.com/konveyor/enhancements/issues/187
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0d392e44-e3ce-4799-8082-35ae48910f24


#### Enhancing Kai with Data Querying for Fine-Tuning and Potential InstructLab Integration

CNCF - Konveyor AI: Data Querying for Kai & InstructLab Integration Potential (2024 Term 3)

- Description:
  - Kai is a tool designed to leverage AI for application modernization by analyzing code, identifying issues, and suggesting fixes. We aim to enhance Kai by developing a robust data querying mechanism to facilitate fine-tuning processes. This enhancement will lay the groundwork for potential future integration with InstructLab, an open-source AI project enabling community contributions to Large Language Models (LLMs) by adding new skills or knowledge. The primary focus will be on creating mechanisms to query and utilize data effectively, with a stretch goal of integrating static analysis tools and implementing an agent-based workflow.
  - This project will significantly enhance Kai’s backend, making it more scalable and capable of providing deeper code insights while also contributing to the enrichment of LLMs through InstructLab. It will offer a rich learning experience for participating students, covering backend development, workflow management, and contributing to open-source AI projects.

- Expected Outcome:
  - Successfully develop and implement a data querying mechanism in Kai to facilitate fine-tuning processes.
  - Demonstrate the enhanced backend with improved data querying capabilities.
  - Participate actively in community meetings, presenting progress and insights.
  - Create a detailed blog post documenting the project, its outcomes, and potential future directions, including the possible integration with InstructLab.
  - (Stretch Goal) Develop a reusable module for agent-based workflows into Kai, enhancing its ability to detect and report code issues.

- Recommended Skills:
  - Python
  - Podman / Docker
  - Basic Software Development skills (command line, git)
  
- Mentor(s):
  - Jonah Sussman (@JonahSussman, jsussman@redhat.com)
  - Fabian von Feilitzsch (@fabianvf, fvonfeil@redhat.com)

- Upstream Issue: https://github.com/konveyor/enhancements/issues/187
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8493016e-975f-4559-8833-db4c884b2fc5


