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

#### Chaos Mesh

##### Monitoring Metrics about Chaos Mesh

- Description: Observability is very important for each application, we want to monitor more things of Chaos Mesh components, enrich the metrics for both logic patterns and performance data. We want to let users could watch the status of Chaos Mesh on grafana dashboard, and developers could using time-series metrics for debugging and profiling.
- Recommended Skills: golang, prometheus, grafana
- Mentor(s): [@ZhiqiangZhou](https://github.com/strrl)
- Issue: <https://github.com/chaos-mesh/chaos-mesh/issues/2198>
