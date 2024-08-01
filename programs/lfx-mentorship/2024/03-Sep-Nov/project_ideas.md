## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
  - 2nd Mentor Name (@mentor_github, mentor@email.addy)
- Upstream Issue:

```

---

## Proposed Project ideas

### Kyverno

#### Cleanup policy - Add deletion propagation support

- Description: Support specifying the deletion propagation policy in cleanup policies and TTL-based cleanup.
- Expected Outcome:
1. Support specifying the deletion propagation policy in cleanup policies
2. Support specifying the deletion propagation policy with TTL-based cleanup
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charled.breteche@gmail.com)
  - Vishal Choudhary (@vishal-chdhry, vishal.choudhary@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/10755
- LFX URL: 

#### Controller autogen - Implement new approach to autogen

- Description: Implement a new policy rules autogen system based on extracting the pod spec from higher-level controllers.
- Expected Outcome:
1. The new system works by applying the same rules on the extracted pod spec instead of generating new rules for higher-level controllers
2. The system treats pods and higher-level controllers exactly the same from a policy stand point
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Charles-Edouard Brétéché (@eddycharly, charled.breteche@gmail.com)
  - Vishal Choudhary (@vishal-chdhry, vishal.choudhary@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/10756
