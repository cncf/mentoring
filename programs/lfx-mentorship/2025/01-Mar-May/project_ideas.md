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

#### Providing Zero-Trust policies for popular workloads

- Description: KubeArmor can whitelist processes and assets based on set of rules provided through the policies. This feature allows KubeArmor to achieve zero trust for a workload. However, knowing the allowed behaviour for a workload and manually creating these policies is a pain. Therefore we want to provide Zero-trust policies for popular workloads like grafana, WordPress, redis, etc. (let's say some 100 workloads). We want to make these Zero-Trust policies available as artifacts.
  
- Expected Outcome: Create a registry of policies that allow users to seamlessly fetch and apply policies for popular workloads.

- Extended Goal: Since applications will have newer versions and the existing Zero-Trust policies may not work as expected. We can have an automated system to generate these Zero-Trust policies and so we can also automate the process of generating Zero-Trust policies for every version available or newer versions as well.
  
- Recommended Skills: familiarity with Golang, K8s CRD(Custom Resource Definition), YAML.
- Mentor(s):
  - Rishabh Soni (@rootxrishabh, risrock02@gmail.com)
  - Prateek Nandle (@Prateeknandle, prateeknandle@gmail.com)
  - Barun Acharya (@daemon1024, barun1024@gmail.com)
* Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1959

