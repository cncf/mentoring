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

### Kubernetes

#### Graduate the kubeadm feature gate WaitForAllControlPlaneComponents to GA

- Description: The feature gate WaitForAllControlPlaneComponents is used to
enhance the health checks performed by kubeadm on control plane node creation,
to not only check the availability of the kube-apisever, but also check
the kube-controller-manager and kube-scheduler. In kubeadm 1.33, the feature gate
was promoted to Beta. As part of this LFX project it can be promoted to GA,
by finalizing the remaining work, such as, code changes, documentation updates
and e2e test updates.
- Expected Outcome: The feature gate is graduated to GA
- Recommended Skills: golang, Kubernetes, kubeadm
- Mentor(s):
  - Shida Qiu (@SataQiu, shidaqiu2018@gmail.com)
  - Paco Xu (@pacoxu, paco.xu@daocloud.io)
- Upstream Issue (URL): https://github.com/kubernetes/kubeadm/issues/2907
