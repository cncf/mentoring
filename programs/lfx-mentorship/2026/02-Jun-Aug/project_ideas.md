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

### Knative Functions

#### End-to-End Agentic Workflow for Serverless Functions

CNCF - Knative Functions: End-to-End Agentic Workflow for Serverless Functions (2026 Term 2)

- Description: Knative Functions ships an MCP (Model Context Protocol) server that exposes its toolchain to AI agents. This project builds on that foundation: deepening the MCP server to cover initial environment setup and CI/CD integration, and authoring a companion skill that walks agents through the full lifecycle of a Function. Together these enable end-to-end agentic usage of Serverless Functions; from initial scaffolding through deployment with CI/CD.

- Expected Outcome:
  - New agentic installer
  - New MCP operations covering prerequisite checks with guidance.
  - A companion skill that composes initialization, CI/CD setup, and deployment into a guided workflow.
  - End-to-end demonstration.
  - User-facing and agent-facing documentation.

- Recommended Skills:
  - Familiarity with the Go programming language (ideal) or Python (secondarily).
  - Experience with AI/ML agents and interest in programmatic LLM integrations.
  - Familiarity with Kubernetes, Serverless, GitOps, CI/CD systems a plus.
  - Strong communication skills, with the ability to research and document clearly.

- Mentor(s):
  - Luke Kingland (@lkingland, kingland@redhat.com) - Primary
  - David Fridrich (@gauron99, dfridric@redhat.com)

- Upstream Issue: https://github.com/knative/func/issues/3646

- LFX URL: 

