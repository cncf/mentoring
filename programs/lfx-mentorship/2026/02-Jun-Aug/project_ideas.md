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

### Lima

#### Improve Windows support (host and guest)

- Description: Lima launches Linux virtual machines with automatic file sharing and port forwarding (similar to WSL2). Currently, Lima supports Linux, macOS, and FreeBSD as guest operating systems. The primary goal of this project is to expand this capability by adding support for Windows guests. Furthermore, the project aims to improve the stability and user experience of running Lima on Windows hosts. This will be achieved by removing dependencies like `cygpath.exe`, researching and developing a native Hyper-V(or a [HCS](https://learn.microsoft.com/en-us/virtualization/api/hcs/overview)) driver to provide optimized, native virtualization on Windows hosts.

- Expected Outcome:
  - Primary:
    - The ability to successfully launch and run Windows guest virtual machines using `limactl start template:windows` using the QEMU driver on any host.
    - Deliver a seamless installation experience on Windows hosts by automating configurations and eliminating the need for [manual setup notes](https://github.com/microsoft/winget-pkgs/pull/356038/changes#diff-9c16ba1b4e8cfc88d634b6cc436e0041d2201ac93e1d4fcd78fca09e0667ca3aR29)
    - Complete removal of the `cygpath.exe` dependency.
  - Secondary (if time permits):
    - Investigate and decide between Hyper-V and HCS for the native driver: HCS is the basis of WSL2 and may be available in Windows 11 Home Edition, while Hyper-V is only available in Pro/Enterprise editions. Research availability and integration feasibility.
    - Potentially integrate the chosen driver (Hyper-V or HCS) as an [external VM driver](https://lima-vm.io/docs/dev/drivers/).
  - Tertiary Goals (if time permits): Upgrade the existing WSL2 driver to drop image restrictions and allow users to run multiple instances, as well as exploring a simple graphical interface (`limagui.exe`) to launch virtual machines.
  
- Recommended Skills: Go, QEMU, Hyper-V, Windows Developer Environment, Systems programming

- Mentor(s):
  - Akihiro Suda (@AkihiroSuda, suda.kyoto@gmail.com)
  - Ansuman Sahoo (@unsuman, anshumansahoo500@gmail.com)

- Upstream Issues: https://github.com/lima-vm/lima/issues/4852, https://github.com/lima-vm/lima/issues/4820, https://github.com/lima-vm/lima/issues/4819
