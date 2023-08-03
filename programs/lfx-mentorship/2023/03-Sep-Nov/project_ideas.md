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

### Volcano

#### Support NPU accelerator scheduling in Volcano
- Description: design and implement NPU accelerator scheduling in Volcano including the vitrualized NPU resource scheduling, job controller enhancement for NPU distributed training, NPU topology scheduling and so on.
- Expected Outcome:  
  - design doc and feature user guide
  - implement NPU topology scheduling
  - implement job controller enhancement
  - vitrualized NPU resource scheduling
- Recommend Skills: Go, Kubernetes, Volcano
- Mentor(s):
  william wang(@william-wang, wang.platform@gmail.com)
  wang yang(@wangyang0616, wangyang8126@gmail.com)
- Upstream Issue (URL): https://github.com/volcano-sh/volcano/issues/3019

#### Build a new elastic resource quota mechinism in Volcano 
- Description: design and implement a new hierarchical elastic resource quota mechinism to support resource lending and borrowing to improve the cluster utilization for multi-tenants environment. 
- Expected Outcome:  
  - design doc and how to use
  - implement a elastic resource quota mechinism to support min, max and resource sharing
  - implement the hierarchical resource quota
  - produce Blogs about these new cases.
- Recommend Skills: Go, Kubernetes, Volcano
- Mentor(s):
  william wang(@william-wang, wang.platform@gmail.com)
  wang yang(@wangyang0616, wangyang8126@gmail.com)
- Upstream Issue (URL): https://github.com/volcano-sh/volcano/issues/3018

#### Add user guidance for jobflow
- Description: Since jobflow is an important built-in orchestration engine for Volcano, it is still lack of user guidance. Please add more docs to demonstrate its installation, usage, tips and so on. 
- Expected Outcome: Add docs into volcano-sh/volcano/docs/user-guide and describe the usage of jobflow.
- Recommended Skills: Volcano, jobflow
- Mentor(s): Thor Wu (@Thor-wl, 13164644535@163.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3013

#### Fix bugs for jobflow to enhance its stability
- Description: As a built-in orchestration engine for Volcano, jobflow acts as an improtant role for users and it's still new-born. Many issues related to its stability are reported recently. Please help make full test for job-flow on the classical scenarios and reslove bugs reported in issues.
- Expected Outcome: Make full test for jobflow and output the test report, fix bugs reported in recent issues.
- Recommended Skills: Volcano, jobflow, Golang, UT, E2E
- Mentor(s): Thor Wu (@Thor-wl, 13164644535@163.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3014

---
