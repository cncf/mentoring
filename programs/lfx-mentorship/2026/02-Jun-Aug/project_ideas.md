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

#### Jaeger for GenAI Observability: Specialized Trace Visualization

- Description: Distributed tracing is essential for GenAI observability, but observing AI Agents differs fundamentally from observing microservices. While microservice traces focus on network latency and error codes, AI traces focus on the "reasoning process." The current Jaeger UI displays traces in a standard waterfall timeline, making it difficult to distinguish between logical "Tool Calls" and technical operations, and nearly impossible to read multi-paragraph prompts or view generated images. This project aims to transform the Jaeger UI into a first-class GenAI observability tool. When Jaeger detects a trace containing GenAI-specific metadata (following OpenTelemetry semantic conventions), it should automatically adapt its presentation to prioritize the "Agentic Flow."
- Expected Outcome:
  - Automatic "GenAI Mode" detection: detect `gen_ai.*` attributes and offer/switch to a specialized visualization mode
  - Agentic hierarchy with iconography: use distinct icons to differentiate span types (e.g., "brain" for LLM calls, "wrench" for tool calls, "database" for RAG retrieval)
  - Rich-media side panel leveraging ADR-0006 side-panel capability, with Markdown support for prompts and completions, pretty-printed JSON for tool inputs/outputs, and direct rendering of images/audio previews
  - Simplified "logical" view: toggle to hide infrastructure-level noise and reveal a clean, high-level reasoning flow
  - More compact table view of multiple traces on the Search page
- Recommended Skills: React, TypeScript, Ant Design components, OpenTelemetry Semantic Conventions (specifically for GenAI), basic knowledge of LLM application patterns (prompting, RAG, tool use)
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/8401

