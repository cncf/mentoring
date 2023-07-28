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

### OpenKruise

#### Integrate Openkruise workload with ArgoCD and Helm

- Description: ArgoCD and Helm are popular tools to delivery k8s workload, yet currently only the k8s built-in workload are supported out-of-box for ArgoCD and Helm. OpenKruise provide advanced worklood that resemble with the built-in workload,  users can use OpenKruise workload with ArgoCD and Helm, yet they cannot tell ArgoCD and Helm whether Openkruise workload is ready or not. 
- Expected Outcome:
  - Improve ArgoCD integration by writing custom lua script to tell whether OpenKruise workload is healthy. The lua script can be submited to the Argo-CD repository.
  - Improve Helm intergration by building a job container that can check whether OpenKruise workload is healthy during helm install/upgrade process. 
- Recommended Skills: Lua ,Docker, Kubernetes
- Mentor(s):
    - Zhang zhen (@furykerry, furykerry@gmail.com)
    - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
- Upstream Issue: [openkruise/kruise#1345](https://github.com/openkruise/kruise/issues/1345)
- LFX URL: 

---
