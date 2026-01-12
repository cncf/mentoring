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

### Jaeger

#### AI-Powered Trace Analysis with Local LLM Support

- Description: Jaeger is a widely used distributed tracing platform. This project aims to integrate Small Language Models (SLMs) and Large Language Models (LLMs) into the Jaeger ecosystem to provide intelligent trace analysis. Key features include natural language search mapping (mapping English queries to Jaeger's internal search parameters), contextual analysis, and summarization ("Explain this Span" or "Explain this trace"). The project involves backend integration using Go and LangChainGo, and frontend integration within the Jaeger React UI.
- Expected Outcome: A working "Natural Language Search" input that populates the Jaeger search form, contextual "Explain" buttons for errors and spans, a robust backend implementation using langchaingo supporting local models (e.g., Ollama) via YAML config, and comprehensive documentation.
- Recommended Skills: Backend: Strong Go (Golang) experience. Architecture: Understanding of OpenTelemetry Collector architecture. AI/LLM: Familiarity with LangChain and prompt engineering for SLMs. Frontend: React.js experience.
- Mentor(s):
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/7832

#### Upgrading Core Routing and State Management in Jaeger UI

- Description: This project focuses on modernizing the Jaeger-UI by upgrading its foundational routing and state management libraries. The primary goals are to migrate from legacy react-router patterns to React Router v7 and replace the deprecated history package and older Redux integration patterns with modern standards like redux-first-history. This refactoring will improve long-term maintainability, enhance performance, and simplify the code for one of the industry's most critical observability tools.
- Expected Outcome: A fully migrated Jaeger-UI running on React Router v7, removal of deprecated history v4/v5 dependencies, refactored functional components using modern hooks (useNavigate, useParams), and a robust test suite ensuring no regressions in trace visualization or search functionality.
- Recommended Skills: JavaScript/TypeScript & React: Deep familiarity with hooks and component lifecycles. State Management: Experience with Redux. Routing Knowledge: Understanding of SPAs and browser history APIs. Testing: Experience with React Testing Library or similar.
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/3313

### OpenYurt

#### Implement Label-Driven Automated Installation and Uninstallation of YurtHub on Edge Nodes
- Description:
  Currently, in OpenYurt, the core component YurtHub—which acts as a transparent proxy between edge node system components (e.g., kubelet, CNI, CoreDNS, kube-proxy) and the Kubernetes API server—is deployed as a systemd service on each edge node. The installation is performed exclusively via the community-provided tool YurtAdm during node joining.
  This approach imposes a significant limitation: users must use YurtAdm to onboard nodes, making it impossible to install YurtHub on existing Kubernetes nodes that were not initially provisioned with YurtAdm. To improve flexibility and user experience, the community aims to support a label-driven, declarative installation mechanism:
  - When a specific label (e.g., openyurt.io/is-edge-worker=true) is added to a node, YurtHub should be automatically installed and started on that node.
  - Conversely, when the label is removed, YurtHub should be gracefully uninstalled and its resources cleaned up.
  This enhancement will enable seamless integration of OpenYurt into existing Kubernetes clusters without requiring re-onboarding of nodes.

- Expected Outcome:
  - Design and implement a controller/operator that watches for node labels and triggers YurtHub lifecycle operations.
  - Develop an installation/uninstallation mechanism that:
    - Installs YurtHub as a systemd service.
    - Ensures idempotency and handles failures gracefully.
    - Cleans up all YurtHub-related files, configurations, and services upon label removal.
  - Ensure compatibility with existing YurtAdm-based deployments.
  - Provide comprehensive documentation, including:
    - User guide for enabling label-driven YurtHub management.
    - Design rationale and architecture diagram.
  - Add e2e tests covering both installation and uninstallation scenarios in a real cluster environment.

- Recommended Skills:
  - Strong proficiency in Go programming language.
  - Solid understanding of Kubernetes architecture, especially node lifecycle, kubelet, and API machinery.
  - Experience with Kubernetes controllers/operators (client-go, controller-runtime).
  - Familiarity with systemd and Linux system service management (for interacting with systemd during install/uninstall).
  - Knowledge of OpenYurt architecture (especially YurtHub and YurtAdm) is a plus but not mandatory.
  - Experience writing unit and e2e tests for Kubernetes components.
  - Good communication and documentation skills.

- Mentor(s):
  - Rambohe (@rambohe-ch, rambohe.ch@gmail.com)
  - Bingchang Tang (@zyjhtangtang, bingchang07@gmail.com)
  - Lu Chen (@luc99hen, luc99.en@gmail.com)
- Upstream Issue:
  https://github.com/openyurtio/openyurt/issues/2494

### Prometheus

#### Improving Documentation for Prometheus and OpenTelemetry Interoperability

- Description:
  Prometheus and OpenTelemetry are commonly deployed together, yet many users struggle to understand how the two systems interoperate — especially around concepts such as resource attributes, label mapping, attribute promotion, and recommended integration patterns.

  [Prior UX research](https://opentelemetry.io/blog/2025/ux-research-prometheus-otel/) identified documentation gaps as a primary source of confusion, and [ongoing community discussions](https://opentelemetry.io/blog/2026/slack-community-insights/) continue to surface similar questions. While both projects provide extensive documentation, guidance is often fragmented, highly technical, or lacks practical end-to-end explanations for real-world usage.

  This mentorship focuses on improving the clarity, usability, and consistency of documentation that explains how Prometheus and OpenTelemetry work together. The mentee will analyze existing documentation across both projects, identify high-impact gaps or friction points, and collaborate with mentors to design and deliver meaningful documentation improvements upstream.

  The project is intentionally exploratory and iterative. Part of the mentorship is learning how to evaluate documentation quality, prioritize improvements, and define ways to measure the impact of documentation changes made during the program.
- Expected Outcome:
  - Review and audit existing Prometheus and OpenTelemetry documentation related to interoperability.
  - Define a prioritized documentation improvement plan together with the mentors.
  - Produce and submit documentation improvements upstream in one or both projects. These may include conceptual explanations, practical guides, examples, diagrams, and cross-project references.
  - Establish basic criteria or methods to evaluate documentation effectiveness during the mentorship.
- Recommended Skills:
  - Prior experience with technical writing or clear motivation to pursue a Tech Writing career.
  - Familiarity with Git and contributing via pull requests.
- Mentor(s):
  - Arthur Silva Sens (@arthursens, arthursens2005@gmail.com)
  - Tiffany Hrabusa (@tiffany76, tiffany.hrabusa@gmail.com)
  - Victoria Nduka (@nwanduka, ndukavictoria7@gmail.com)
- Upstream Issue: https://github.com/prometheus/prometheus/issues/17823
