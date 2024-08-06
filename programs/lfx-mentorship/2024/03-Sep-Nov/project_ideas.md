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

### Kubernetes

#### Testeable documentation for the Pod Lifecycle events

- Description: Kubernetes Pods are the unit of execution. Pods's API surface is limited, but yet presenting many challenges for people authoring complex behaviors like proper graceful termination, probes, or advances initialization behaviors. Documentation and testing of those scenarios is limited. The misunderstanding of pod lifecycle and edge casesoften lead to reliability issues in Pods. Lately there were limited efforts to document and test those behaviors. Creating a skaffolding to document and test those behaviors will help temendously the Kubernetes project as well as end users.
- Expected Outcome: Skaffolding in https://github.com/kubernetes/website/ to add new pod lifecycle behavios descriptions. Tests for those edge cases. And cross linking between tests and documentation.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s and containers, understanding of Hugo is a plus.
- Mentor(s):
  - Sergey Kanzhelev (@SergeyKanzhelev, S.Kanzhelev@live.com)
  - Tim Allclair (@tallclair, tallclair@google.com)
- Upstream Issue: https://github.com/kubernetes/kubernetes/issues/126369
