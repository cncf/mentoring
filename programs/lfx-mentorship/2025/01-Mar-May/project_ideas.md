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

By implementing these enhancements, KubeStellar UI will evolve into a comprehensive tool for cluster management, empowering users to efficiently deploy and manage resources while offering an intuitive and modern interface.

- Recommended Skills
  - Frontend Development: Node.js, React, Vite, and REST API integration.
  - Backend Development: Go and Kubernetes API communication.
  - Cluster Management: Familiarity with Kubernetes clusters and associated workflows.
  - UI/UX Design: Experience in designing interfaces for system operators.

- Mentor(s):
  - Andy Anderson (@clubanderson, andy@clubanderson.com)
  - Braulio Dumba (dumb0002, braulio.dumba@ibm.com)

- Upstream Issue: kubestellar/ui (TBD)
- LFX URL: 



