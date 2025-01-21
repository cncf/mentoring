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

### Envoy Gateway

#### Integrating CNCF Fuzzing Framework for Envoy Gateway

- Description: [Envoy Gateway](https://gateway.envoyproxy.io) has become a crucial part of modern cloud-native infrastructures, 
providing a simplified way to deploy and manage [Envoy Proxy](https://www.envoyproxy.io).
Ensuring the reliability and security of Envoy Gateway is paramount for its growing user base.

Fuzzing, a widely-used technique for identifying software vulnerabilities and bugs, can significantly enhance the robustness of Envoy Gateway.
By integrating the [CNCF Fuzzing Framework](https://github.com/cncf/cncf-fuzzing), this project aims to improve the 
security posture of Envoy Gateway through comprehensive automated testing.
- Expected Outcome:
  - Add a fuzz test that covers 80% of code paths for translating Gateway API input configuration into xDS output.
  - Enable continuous fuzzing using [OSS-Fuzz](https://github.com/google/oss-fuzz).
- Recommended Skills: Go, scripting.
- Mentor(s):
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
  - Teju Nareddy (@nareddyt, tnareddy@confluent.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/3124


### Jaeger

#### Jaeger: Upgrade Storage Backends to V2 Storage API

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. A critical component of Jaeger is its storage backends, where traces captured by Jaeger are stored. With the release of Jaeger v2 last year we introduced a new, more efficient Storage API v2. However, the existing backend implementations in Jaeger are still using v1 API that is only wrapped in the v2 adapter, which prevents them from benefiting from the new capabilities such as batch writes and result streaming. The objective of this project is to upgrade some (or all) backend implementations to use the Storage API v2 natively. Please refer to the upstream issue for more details.
- Expected Outcome:
  - Upgrade memory and Elasticsearch backends to use the Storage API v2 natively.
  - Bonus: upgrade Cassandra and Badger backends to use the Storage API v2 natively.
- Recommended Skills: Go, scripting, CI/CD, familiarity with Elasticsearch/Cassandra a plus but not required.
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Mahad Zaryab (@mahadzaryab1, mahadzaryab1@gmail.com)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/6458

#### Upgrade charts and graphs in Jaeger UI

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. Jaeger UI pioneered many new visualizations for analyzing distributed traces. However, over time, it accumulated views that utilize different and sometimes deprecated viz libraries. The objective is to standardize charting / graphing libraries used in Jaeger UI, upgrade their dependencies, and add new visualization features. Please refer to the upstream issue for more details.
- Expected Outcome:
  - Jaeger UI is not using deprecated dependencies
  - Consistent look and feel of graphs
  - Bonus: side panel for details for a given node
  - Bonus: overlaying metrics on the graph (as edge annotations and node coloring to reflect health / error rates)
  - Bonus: varying node displays depending on the type of node and implementation language
- Recommended Skills: Javascript, Typescript, React, NPM, Vite.js
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/2534

### KubeStellar

#### Enhancing KubeStellar UI for Expanded Functionality and User Experience

- Description: [KubeStellar](https://kubestellar.io) is a flexible solution for challenges associated with multi-cluster configuration management for edge, multi-cloud, and hybrid cloud. KubeStellar's UI is a tool for interacting with KubeStellar components, managing its inventory and transport space (ITS), and workload description space (WDS). Currently, the UI is in its early stages, providing only basic features like reading kubeconfig info and displaying ITS and WDS. The goal of this project is to significantly enhance the functionality and usability of the KubeStellar UI by implementing additional core features, improving its user interface, and ensuring a seamless experience for Kubernetes cluster operators.

- Objectives
  1. Implement BindingPolicies CRUD:
    - Develop intuitive interfaces for creating, reading, updating, and deleting binding policies.
    - Ensure policies are validated against Kubernetes standards and KubeStellar’s architecture.
    - Allow users to view and manage binding policies tied to specific workloads or clusters.
  2. Add Workload Deployment to WDS:
    - Build functionality for deploying workloads to one or more WDS.
    - Provide real-time feedback on deployment status and logs.
    - Add visualization for workload placement across multiple WDS, ensuring clarity of resource distribution.
  3. Cluster Onboarding to ITS:
    - Create an onboarding wizard to guide users through adding new clusters to the ITS.
    - Validate clusters' compatibility and connection during the onboarding process.
    - Automatically generate and display kubeconfig details for onboarded clusters.
  4. Enhance UI Usability and Performance:
    - Upgrade the UI with modern design principles for a consistent and intuitive user experience.
    - Leverage React and Vite to optimize load times and component rendering.
    - Introduce real-time updates for ITS and WDS data using WebSocket or API polling.
  5. Backend Integration with Go:
    - Extend the Go backend to support new API endpoints for the proposed features.
    - Ensure secure and efficient communication between the UI and Kubernetes API.
    - Validate backend performance under high-scale usage.

- Expected Outcomes
  - New Features:
    - BindingPolicies CRUD operations accessible via the UI.
    - Workload deployment support to one or more WDS.
    - Seamless onboarding process for adding clusters to the ITS.
  - Improved Usability:
    - A polished UI with a modern look and feel, supporting intuitive navigation.
    - Real-time insights into cluster operations and workload deployments.
  - Robust Performance:
    - Scalable backend integration with Go for handling large cluster environments.
    - Optimized frontend with Node.js, React, and Vite for faster interaction.

- Bonus Features
  - Visualization Improvements:
    - Visual dashboard for workload deployments and cluster health monitoring.
    - Integration of charts to show resource utilization trends across ITS and WDS.
  - User Customizations:
    - Add support for user-defined themes (dark/light mode).
    - Exportable configurations for sharing binding policies or deployment setups.

- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.

- Mentor
  Andy Anderson
  GitHub: @clubanderson
  Email: andy@clubanderson.com
  Braulio Dumba
  GitHub: dumb0002
  Email: braulio.dumba@ibm.com

- Repository
  GitHub Repository: kubestellar/ui
By implementing these enhancements, KubeStellar UI will evolve into a comprehensive tool for cluster management, empowering users to efficiently deploy and manage resources while offering an intuitive and modern interface.
