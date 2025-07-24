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

### Cilium

#### Evaluate SEO, AEO, and AIO for cilium.io

- Description: Improve how cilium.io content is discovered, ranked, and reused by search engines and AI tools. This includes enhancing technical SEO, optimizing for answer engines like Google SGE and Perplexity (AEO), and structuring content to be easily cited and used by large language models (AIO). The mentee will perform audits, recommend improvements, and implement changes across meta tags, structured data, documentation formatting, and content strategy.
- Expected Outcome: SEO, AEO, and AIO audit report for cilium.io, Implementation of structured metadata (e.g., FAQ schema, article metadata, canonical URLs), TL;DR summaries or answer-first formatting added to key documentation and product pages, Deep-linked, self-contained concept pages created or refactored for LLM usability, Improved search visibility and AI result representation (tracked via baseline comparison)
- Recommended Skills: Basic web development (HTML, Markdown, GitHub-based sites), Understanding of SEO fundamentals, Interest in AI, answer engines, or technical documentation, Familiarity with static site generators
- Mentor(s):
  - Bill Mulligan (@xmulligan, bill@isovalent.com)
- Upstream Issue: https://github.com/cilium/cilium.io/issues/633

### Jaeger

#### Next-Generation Jaeger Demo with OpenTelemetry and OpenSearch (2025 Term 3)

Description: This project will create a Kubernetes deployment for the full stack: the OpenTelemetry Demo application, the Jaeger backend components (Collector, Query), and OpenSearch as a storage backend. The environment will be automatically redeployed weekly to ensure it is always fresh and to solve the problem of data retention. The entire stack will be hosted on a managed Kubernetes cluster (Oracle Kubernetes Engine) within an Oracle Cloud environment generously donated to the project.
Expected Outcome:
-A working, publicly accessible Jaeger demo featuring the OpenTelemetry Demo application, deployed on Oracle Cloud.
-Fully automated, weekly deployments using the existing Helm-based automation and GitHub Actions.
-The entire environment defined as "Configuration as Code".
-A secure deployment following best practices for public-facing services.
-The UIs for Jaeger, the OTel Demo, the load generator, and OpenSearch Dashboards exposed -publicly via the existing demo.jaegertracing.io URL.
-Public-facing documentation on the Jaeger website explaining the demo architecture and linking to the automation code.
Recommended Skills: Kubernetes, Cloud, Security, Monitoring
Mentor(s):
Jonah Kowall (@jkowall, jkowall@kowall.net)
Yuri Shkuro (@yurishkuro, github@ysh.us)
Upstream Issue: https://github.com/jaegertracing/jaeger/issues/7327

### OpenCost

#### Develop MCP Server for Agentic AI interaction with OpenCost

- Description: We would like OpenCost to more effectively integrate with AI agents. To do this, we need to implement a Model Context Protocol (MCP) server to surface the information from the OpenCost API. This is a great opportunity to learn about MCP servers, and help us build an interface for AI agents to obtain reliable cost/usage information so that they can accomplish their business goals. 
- Expected Outcome: We would like an MCP server integrated into OpenCost. This MCP server should support queries on allocations, assets, and cloud costs. The MCP server should support the full range of allocations, assets, and cloud cost query parameters. A demo video should be recorded showing an interaction with the MCP server, and used to obtain costing information in a conversational setting. In addition, integration tests must be created in the OpenCost Integration Tests repo that test all interactions with the MCP server
- Recommended Skills: Golang, MCP, Comfort with OpenCost, Cost/Usage reporting, AI agent interfacing and usage, documentation writing
- Mentors 
  - Alex Meijer (@ameijer, alexander.meijer@ibm.com)
  - Matt Bolt (@Mbolt35, matthew.bolt@ibm.com)
- Upstream Issue: https://github.com/opencost/opencost/issues/3239

####  OpenCost Data Model 2.0

- Description: OpenCost's data model is now 6 years old, and we have learned a great deal long the way. Based on these learnings, we would like to revamp how OpenCost represents its cost and usage data across the stack. We want to set OpenCost up for the next set of features and scale by building a solid foundation for the way we represent data. 
- Expected Outcome: We would make the UID of Kubernetes objects into a first class citizen. These UID based objects would then be grouped in a similar hierarchy to the way Kubernetes itself is organized. A successful conclusion of this project would see an additional emitter implemented in OpenCost, that emits data objects stored in compressed protobuf which reflect a hierarchy of Kubernetes objects. The mentors will help establish this hierarchy. This hierarchy should then be tested via integration tests against the existing objects, and key metrics compared to be equal across those. 
- Recommended Skills: Golang, Object Oriented Design, Comfort with OpenCost, Cost/Usage reporting, Protobuf, Compression, Prometheus, documentation writing
- Mentors 
  - Alex Meijer (@ameijer, alexander.meijer@ibm.com)
  - Sean Holcomb (@Sean-Holcomb, sean.holcomb@ibm.com)
- Upstream Issue: https://github.com/opencost/opencost/issues/3240

### OpenTelemetry

#### Developing Guidelines for OTel Survey Analysis and Communication
- Description: Various special interest groups (a.k.a. SIGs) in the OpenTelemetry project run surveys to understand the experience of the end-users better. To run surveys efficiently, SIG End-user provides guidelines and assistance to people running surveys. In the past, SIG End-user focused on providing guidelines around survey design. Now we would like to move forward and cover survey data analysis and communication findings. 
- Expected Outcome: The mentee in this project will describe a step-by-step survey data analysis process and tools that OTel contributors without deep data analytics knowledge can leverage to analyze their survey data – from cleaning and coding of data, through descriptive statistics, cross-tabulation, to visualization. In addition, the mentee will come up with suggestions on how to improve existing and/or propose new ways to communicate survey findings from surveys to the OpenTelemetry community. [Bonus] The mentee might also execute one survey to test out the guidelines.
- Recommended Skills
  - Being comfortable to talk with end-users and stakeholders in English.
  - Interest or currently working in UX, user research, or data analytics
  - Familiarity with spreadsheets (Google Sheets, Excel)
  - Basic understanding of databases and querying
  - [Bonus] Familiarity with Python and its data science libraries (e.g., pandas, numpy)
- Mentors
  - Adriana Villela (@avillela, adriana.villela@gmail.com) 
  - Andrej Kiripolsky (@AndrejKiri andrej.kiripolsky@gmail.com)

