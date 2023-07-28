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

### KubeArmor

#### Implement DNS visibility with KubeArmor

- Description: The project aims to provide better visibility into the domains accessed from pods, with a focus on identifying and containing attacks that use techniques like Domain Generation Algorithms (DGA) to connect to remote command and control (C&C) servers. By gathering information on which domains are being accessed and applying network rules to allow only specific domains, the project aims to empower security operations (secops) teams to better prevent and respond to such attacks.
- Expected Outcome:  
  - KubeArmor to emit telemetry events for any DNS lookups from any pods.
  - Ability to see egress DNS lookups done from any pods using karmor summary.
  - Documentation
- Recommended Skills: Go, K8s, eBPF. familiarity with network security and a basic understanding of KubeArmor is a plus.
- Mentors:
  - Anurag Kumar (@kranurag7, contact.anurag7@gmail.com)
  - Barun Acharya (@daemon1024, barun1024@gmail.com)
  - Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com)
  - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1219

### Extend Support Matrix and Document Usecases

- Description: The project aims to extend KubeArmor support and document how KubeArmor is relevant for securing Kubernetes on Edge in addition to generic Kubernetes based Application deployments
- Expected Outcome:  
  - Try KubeArmor on Different Kubernetes Platforms
      - Microshift, k0s
      - Make fixes to deployments to make them work if needed
  - Document Usecases on these platforms
  - Document Usecases at a broader level for EDGE and Container Security
  - Produce Blogs about extended support and additional usecases
- Recommended Skills: K8s, Basic understanding of KubeArmor, Content Writing is a plus.
- Mentors:
  - Anurag Kumar (@kranurag7, contact.anurag7@gmail.com)
  - Barun Acharya (@daemon1024, barun1024@gmail.com)
  - Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com)
  - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1334
