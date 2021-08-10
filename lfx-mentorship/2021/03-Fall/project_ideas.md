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



#### Kyverno

##### Scaled testing for Kyverno

- Description:
  This Project is to perform scaled testing for Kyverno. The candidate has to propose the test plan for performance testing and optimize memory usage of Kyverno for different loads of Kubernetes clusters.
- Recommended Skills: Golang, Test
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/2248

##### Extend Kyverno test command to cover generate policies & Improve test coverage

- Description:
  This Project is to extend the Kyverno CLI to cover generate policies and improve tests coverage for Kyverno. Based on the test results, the candidate has to add more unit/E2E tests.
- Recommended Skills: Golang, Test
- Mentor(s): Shuting Zhao (@realshuting), Jim Bugwadia (@JimBugwadia)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/2249
