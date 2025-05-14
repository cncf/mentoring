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

#### Progressive Rollouts of the Envoy Proxy fleet during Envoy Gateway upgrades

- Description:
Envoy Gateway translates Kubernetes-native Gateway API resources into xDS configuration consumed by Envoy Proxy.
It also manages the lifecycle of the Envoy Proxy fleet by generating Kubernetes resources such as Deployments and Services.

Currently, upgrades to Envoy Gateway (the control plane) result in immediate, in-place updates to the associated Envoy Proxy fleet (the data plane).
While this operation is designed to be zero-downtime, some users prefer a staged upgrade process where the control plane is updated first,
followed by a progressive rollout of the data plane.

This project aims to design and implement support for progressive data plane upgrades, allowing users to decouple the control and data plane upgrade processes. 
This would provide enhanced control and safer rollout strategies (e.g., canary or blue-green deployments).

- Expected Outcome:
  - Design a two-step upgrade workflow that separates control plane and data plane updates.
  - Implement configuration or CRD support to control rollout strategy of the Envoy Proxy fleet.
  - Add documentation and example manifests for users to adopt the new workflow.

- Recommended Skills: Golang, Kubernetes, CD tools (like Argo Rollouts and Flagger).

- Mentor(s):
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
  - Kateryna Nezdolii (@nezdolik, kateryna.nezdolii@gmail.com)

- Upstream Issue: https://github.com/envoyproxy/gateway/issues/4494
- LFX URL: 

### Antrea

#### Replace Dependabot with Renovate for automatic dependency updates

- Description: Antrea currently relies on Github's Dependabot to automatically updated dependencies (Go modules / Github Actions) on the main branch. There is a key limitation with Dependabot, which is that it doesn't support automatically updating dependencies with security vulnerabilities in "active" release branches (for Antrea minor versions which are currently actively supported). This limitation means that maintainers have to manually backport Dependabot patches when they address security vulnerabilities, which has become a burden. [Renovate](https://docs.renovatebot.com/) is an alternative tool for dependency management, and it seems that it offers richer configuration options and may not suffer from the same limitation as Dependabot.
- Expected Outcome: Migrate the Dependabot config to a Renovate config for the main Antrea repository (antrea-io/antrea), as well as for all other repositories (under the antrea-io organization) which currently use Dependabot. Dependencies that are currently updated as a group (e.g., `golang.org/x` modules) should remain that way. The Renovate config should include provisions to automatically perform security updates in active release branches. The change should not impact developer workflows and the Antrea release cycle; all experiments should be performed in a fork.
- Recommended Skills: familiarity with the Github ecosystem, including Github Actions, and with the standard Github dev workflows.
- Mentor(s):
  - Quan Tian (@tnqn, tianquan23@gmail.com)
  - Lan Luo (@luolanzone, luolanzone@gmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/7155

#### Improvements to the PacketCapture feature

- Description: As a Kubernetes (K8s) network plugin (CNI plugin), Antrea provides networking functions for K8s Pods and includes various troubleshooting tools for cluster administrators and application developers to diagnose networking issues. The [PacketCapture feature](https://github.com/antrea-io/antrea/blob/main/docs/packetcapture-guide.md) was introduced recently (Antrea v2.2) and allows capturing network traffic for specific endpoints using predefined filters similar to those supported by libpcap/tcpdump. Users can initiate a packet capture through a Kubernetes Custom Resource Definition (CRD) or a CLI command. The Antrea control plane then generates and injects the corresponding BPF program, and the captured packets can be exported as a pcap file. In the last iteration of the LFX mentorship program, we added support for L4 filters (TCP flags, ICMP type & code) to the PacketCapture API, to enable Antrea users to target network traffic more precisely. We would like to keep improving the PacketCapture feature with 1) IPv6 support, 2) more flexibility when providing the source and destination, 3) the ability to specify the capture point for traffic (source or destination Pod).
- Expected Outcome: Extend the API definition for the PacketCapture CRD, and implement the new API functionality by generating the correct BPF instructions. The `antctl` CLI command for PacketCapture should be updated as needed to accomodate for the API changes. The implementation should come with a sufficient amount of tests (both unit tests and e2e tests), ensuring that the new functionality is working as expected.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, basic knowledge about networking protocols (IP/TCP/UDP/ICMP).
- Mentor(s):
  - Hang Yan (@hangyan, hang.yan@hotmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/6861, https://github.com/antrea-io/antrea/issues/6976, https://github.com/antrea-io/antrea/issues/6863
- LFX URL: 

