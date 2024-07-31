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

### Karmada

#### Collect and visualize Karmada metrics

- Description: Karmada dashboard now supports one-time metric retrieval, but it is difficult to observe the status of multi-clusters with one-time metric retrieval. Therefore, we would like to implement a lightweight metric collection capability to collect Karmada metrics and visualize them on the Karmada dashboard. This will allow cluster administrators to quickly get the status of the clusters and solve problems within the clusters.
- Expected Outcome:
  - Metric Collection and Storage Design Document
  - Query Analysis Interface & Front-end Visualization
- Recommended Skills:
  - Kubernetes
  - Go
  - gin
  - react
  - sqlite
- Mentor(s):
  - Wenjiang Ding (@warjiang, 1096409085@qq.com)
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/dashboard/issues/62
- LFX URL: 

#### Enhance Karmada controller-manager and schedule testing coverage

- Description: Karmada would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects. Increase the UT coverage rate to 50% to 60% (currently, the UT coverage rate is [28.26%](https://app.codecov.io/gh/karmada-io/karmada) ). The entire Karmada repository is a bit large for one project, so we will split it into two projects. The current parts mainly target the `karmada-controller-manager` and `karmada-scheduler` components.
- Expected Outcome:
  - Increase the UT (Unit Test) coverage by more than 25% and add more than 4000 lines of code coverage in the following directories.
```
pkg/controllers
pkg/dependenciesdistributor
pkg/descheduler
pkg/detector
pkg/estimator
pkg/scheduler
pkg/resourceinterpreter
pkg/util
```
- Recommended Skills:
  - Go
  - Cloud Native
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Zhuang Zhang (@zhzhuang-zju, m17799853869@163.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/5235
- LFX URL: 

#### Enhance the test coverage for the Karmada search, operator, and webhook components

- Description: Karmada would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects. Increase the UT coverage rate to 50% to 60% (currently, the UT coverage rate is [28.26%](https://app.codecov.io/gh/karmada-io/karmada) ). The entire Karmada repository is a bit large for one project, so we will split it into two projects. The current focus is mainly on `karmada-search`, `karmada-operator`, `karmada-webhook` components.
- Expected Outcome:
  - Increase the UT (Unit Test) coverage by more than 25% and add more than 5500 lines of code coverage except for the following directories.
```
pkg/controllers
pkg/dependenciesdistributor
pkg/descheduler
pkg/detector
pkg/estimator
pkg/scheduler
pkg/resourceinterpreter
pkg/util
```
- Recommended Skills:
  - Go
  - Cloud Native
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Chaosi Pan (@chaosi-zju, chaosi@zju.edu.cn)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/5236
- LFX URL: 
