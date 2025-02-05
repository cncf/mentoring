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

#### Volcano supports queue-level scheduling policies

- Description: Volcano supports unified scheduling of online and offline workloads, provides a wealth of scheduling plugins and algorithms, and can distinguish different tenants through queue distinction. The current scheduling policy is a global configuration, and all jobs in the queue use the same scheduling policy, but in actual scenarios, different tenants may need to use different scheduling policies due to different usage scenarios. Therefore, volcano needs to support setting and using different scheduling policies at the queue level instead of using a globally unified scheduling policy.
- Expected Outcome:
  - A new field is added to the queue CRD, and users can set scheduling policies at the queue level.
  - Volcano scheduler implements different scheduling policies based on the queue in which the job is located.
- Recommended Skills: Kubernetes, GO, Volcano
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3992
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a785c059-fb70-41aa-88a2-62692ab2ca98

#### Coordinate descheduler and Volcano to support resource defragmentation

- Description: Volcano community has provided Volcano descheduler to support descheduling. Currently, load-aware rescheduling is supported. Resource fragmentation is a problem that users are more concerned about. Volcano needs to provide a resource defragmentation strategy based on the existing descheduler, and needs to ensure that the evicted pods can be rescheduled successfully, which requires the cooperation of the rescheduler and the scheduler to solve resource fragmentation and maximize resource utilization.
- Expected Outcome:
  - Implementing a resource defragmentation strategy based on Volcano descheduler.
  - The Volcano descheduler works in conjunction with the Volcano scheduler to ensure that evicted pods can be re-scheduled successfully.
- Recommended Skills: Kubernetes, GO, Volcano
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3948
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/607246c3-f48b-446c-a7cc-10c0068c553f

#### Volcano dashboard feature enhancements

- Description: Volcano dashboard is a volcano resource front-end display tool. Currently, it only supports viewing resources, and the resources displayed are limited. It needs to support viewing more resources, and supports operations such as creation and deletion.
- Expected Outcome:
  - Supports viewing resources other than volcano related resources.
  - Supports add, delete, modify and query resources such as queues and volcano jobs.
- Recommended Skills: Kubernetes, React, Node, JS
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/dashboard/issues/11
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/438c1fec-d3d3-4ab0-82ce-499993f8b681

