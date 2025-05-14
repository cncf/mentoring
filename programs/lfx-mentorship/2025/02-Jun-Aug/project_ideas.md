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
