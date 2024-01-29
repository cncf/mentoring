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

### CRI-O

#### Fully Automated CRI-O Releases

- Description: There are several steps to the CRI-O release process that are manual. Lots of work has been done to update this, but there is still pushing a tag, copying release notes and some other small tasks. This project is about such automation.
- Expected Outcome:
  - Fully automated release and patch versions of CRI-O
- Mentor(s):
    - Sascha Grunert (@saschagrunert, sgrunert@redhat.com)
    - Krzysztof Wilczynski (@kwilczynski, kwilczyn@redhat.com)
- Recommended Skills: Golang
- Upstream Issue: https://github.com/cri-o/cri-o/issues/4003
- LFX URL: 

### Knative 

#### Contributor Journey Research

- Description: Getting new contributors onboarded into a complex project like Knative is a lot of work for both the new contributors and for the maintainers. This is compounded
  by the fact that many contributors don't stick around after the first few contributions. We would like to perform a research study into why some contributors stay while others
  leave the community after a bit, and determine where we can improve the contributor experience.
- Expected Outcome: Create a report based off of user research detailing the current contributor journey within Knative and highlighting areas where that can be improved.
- Recommended Skills: User Research, Communication
- Mentor(s):
  - Calum Murray (@Cali0707, cmurray@redhat.com)
  - Mariana Mejia (@mmejia02, mariana.mejia@ocadu.ca)
- Upstream Issue: https://github.com/knative/ux/issues/98
- LFX URL: 

### Meshery

#### Meshery: UI Migration from MUI v4 to MUI v5 and NextjS 13

- Description: Meshery's UI is powerful and utilizes frameworks like Next.js and Material-UI. However, it relies on outdated technology stacks, resulting in performance inefficiencies and increased maintenance overhead.
- Expected Outcome: Migrate from MUI v4 to MUI v5 and fully utilize features of Nextjs v13. Migrate all class based components to function based component. Reduced code complexity and improved maintainability for long-term sustainability. Responsive and accessible UI that adapts to diverse devices and user needs.
- Recommended Skills: ReactJs, NextJs, familiarity with Material UI, Redux and Redux Toolkit
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Antonette Caldwell (nebula-aac, pullmana8@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/6680
- LFX URL: 

#### Meshery: Expand CLI capabilities for registry management

- Description: Meshery CLI is a powerful tool to manage all your cloud native resources, Meshery has internal capability called Registry to store and manage models, categories, component and relationship, presently Meshery’s v0.7 release allow users to view all this information from Mehery UI. We also need to expose Meshery’s registry capability through mesheryctl
- Expected Outcome: Design mesheryctl subcommands and flags for registering, listing, retrieving, updating, and deleting models, components and relationships. Implement validation and error handling for user input and API responses. Integrate with relevant Meshery APIs to interact with the registry backend.
- Recommended Skills: Golang, familiarity with Golang CLI framework Cobra
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Uzair Shaikh (@MUzairS15 , muzair.shaikh810@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/8176
- LFX URL: 

#### Meshery: Expand integration with Artifact Hub

- Description: While Meshery has made significant strides, its integration with Artifact Hub requires expansion and enhancement to maximize users experience. The goal is expand integration between Meshery and Artifact Hub which starts with making Meshery designs as a new Artifact Hub kind.
- Expected Outcome: Definition and implementation of Meshery patterns as a distinct category within Artifact Hub. Design features to showcase Meshery's unique design patterns, enhancing visibility and accessibility. Collaborate with select publishers to integrate Meshery snapshots into Artifact Hub entries. Enhance user experience by providing visual representations of Meshery-related artifacts.
- Recommended Skills: Familiarity with Helm charts and Artifact Hub, basic familiarity with Kubernetes
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Aabid Sofi (@aabidsofi19, mailtoaabid01@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/9966
- LFX URL: 

### OpenKruise 

#### Build simple Web-UI that can integration with exiting PaaS

- Description: Currently, OpenKruise depends solely on the PaaS or CLI to listing OpenKruise workload display and operations. The lack of a general purpose Web-UI greatly hinder the adoption among developer users. This project is about to build a simple Web-UI that can list OpenKruise workload along with the native K8s workload, and support enhanced operation such as container restart or workload rollout. The Web-UI can be served directly as a dashboard , or as an example of OpenKruise integration in PaaS.
- Expected Outcome: 
  - simple Web-UI
  - integration of the Web-UI with existing PaaS such as [KubeSphere](https://dev-guide.kubesphere.io/extension-dev-guide)
- Mentor(s):
    - Zhang zhen (@furykerry, furykerry@gmail.com)
    - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
- Recommended Skills: UX/UI, JavaScript, GoLang (a plus but not mandatory)
- Upstream Issue: https://github.com/openkruise/kruise/issues/1497
- LFX URL: 

### Service Mesh Performance

#### Service Mesh Performance: Adaptive Load Control with Nighthawk

- Description: The adaptive load controller operates by iteratively running optimization routines to ascertain the maximum load a system can sustain. Typically, this maximum load is determined by the system's capacity to handle requests per second (rps). The metrics, such as CPU usage and latency, collected from the system under test (SUT) serve as constraints to assess whether the SUT can sustain the imposed load. However, it lacks comprehensive lifecycle management functionalities. This hinders its adoption and limits its potential for continuous performance monitoring and optimization.
- Expected outcome:
Implement mechanisms to trigger alerts and notifications based on performance thresholds or significant changes in key metrics.
Integrate Nighthawk testing with existing CI/CD pipelines for automated performance validation and optimization as part of the development and deployment process.
- Recommended Skills: Golang, familiarity with Service Mesh, grpc, docker, kubernetes
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Xin Huang (@gyohuangxin, xin1.huang@intel.com)
- Upstream Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/416
- LFX URL: 

### Service Mesh Performance: Distributed Load Testing with Nighthawk

- Description: Many performance benchmarks are limited to single instance load generation (single pod load generator). This limits the amount of traffic that can be generated to the output of the single machine that the benchmark tool runs on in or out of a cluster. Overcoming this limitation would allow for more flexible and robust testing. Distributed load testing in parallel poses a challenge when merging results without losing the precision we need to gain insight into the high tail percentiles. Distributed load testing offers insight into system behaviors that arguably more accurately represent real-world behaviors of services under load as that load comes from any number of sources.
- Expected Outcome: Implementation of distributed load generation in Nighthawk. Integration of Nighthawk with relevant service mesh performance testing scenarios. Capability to invoke Nighthawk for distributed load testing through APIs and command-line interfaces. Implementation of reporting mechanisms for distributed load testing results.
- Recommended Skills: Golang, familiarity with HTTP/HTTPS performance testing tools, Service Mesh, grpc, familiarity with containerization technologies, like Docker would be helpful.
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Xin Huang (@gyohuangxin, xin1.huang@intel.com)
- Upstream Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/415
- LFX URL: 
