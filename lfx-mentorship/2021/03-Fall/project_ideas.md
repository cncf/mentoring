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

### Proposed Project ideas

#### Kubernetes

#### Kubernetes Policy Working Group (WG)

The Kubernetes policy working group focuses on developing tools and solutions that make Kubernetes secure and easiser to use.

##### KubeArmor support for Policy Report CRD

- Description:
  This project will periodically generate or update a [Policy Report Custom Resource (CR)](https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/master/policy-report/README.md) based on events collected from KubeArmor. This could be implemented as a feature in KubeArmor or developed as an external adapter. The candidate will learn about Kubernetes controllers and various security topics.
- Recommended Skills: Linux, Golang, CLI, Kubernetes
- Mentor(s): Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/59

