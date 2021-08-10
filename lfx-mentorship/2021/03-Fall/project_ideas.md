## Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

### Template

```
#### CNCF Project Name
##### Title

- Description:
- Recommended Skills:
- Mentor(s):
- Upstream Issue (URL):
```

### Sample

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): [@Krasi Georgiev](https://github.com/krasi-georgiev)
- Issue: <https://github.com/prometheus/prometheus/issues/3416>

## Participating Projects

#### Kubernetes

##### Improvements to Cluster API provider for GCP (CAPG)

- Description: The Cluster API is a Kubernetes project to bring declarative, Kubernetes-style APIs to cluster creation, configuration, and management. CAPG provides this Kubernetes-native declarative infrastructure for GCP. The project would start with some help wanted issues around quick start and documentation, this will help with understanding mentee with CAPI/CAPG concepts and current implementation. Then we will move on to some long pending improvements documented in the issues link below.
- Recommended Skills: Golang, unit and feature testing.
- Mentor(s): Davanum Srinivas (@dims), Carlos Tadeu Panato Junior (@cpanato)
- Issue: https://github.com/kubernetes-sigs/cluster-api-provider-gcp/issues

##### Improve SIG-Node testing using Kubetest2

- Description: Kubernetes currently uses Kubetest as the interface for launching and running e2e tests. There is a new [kubetest2](https://github.com/kubernetes-sigs/kubetest2) that is in the process of being developed and will need to be rolled out to various CI harnesses and jobs. As part of this project we will focus on SIG-Node related CI jobs. Here's how we currently test SIG-Node related code - [e2e-node-tests.md](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-node/e2e-node-tests.md). There will be a lot of interesting problems to solve and this work is critical to how we test kubernetes not just in GCP, but also across all the other cloud providers going forward.
- Recommended Skills: Golang, python, bash, unit and feature testing.
- Mentor(s): Davanum Srinivas (@dims), Amit Watve (@amwat)
- Enhancement : https://github.com/kubernetes/enhancements/tree/master/keps/sig-testing/2464-kubetest2-ci-migration

#### Kubernetes Policy Working Group (WG)

The Kubernetes policy working group focuses on developing tools and solutions that make Kubernetes secure and easiser to use.

##### KubeArmor support for Policy Report CRD

- Description:
  This project will periodically generate or update a [Policy Report Custom Resource (CR)](https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/master/policy-report/README.md) based on events collected from KubeArmor. This could be implemented as a feature in KubeArmor or developed as an external adapter. The candidate will learn about Kubernetes controllers and various security topics.
- Recommended Skills: Linux, Golang, CLI, Kubernetes
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/59
