## Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

### Template

```
#### CNCF Project Name
##### Title

-	Description:
-	Recommended Skills:
-	Mentor(s):
-	Upstream Issue (URL):
```

### Sample:

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Issue: https://github.com/prometheus/prometheus/issues/3416

### Proposed Project ideas

#### WG Policy
##### CIS Benchmarks Policy Report
-	Description: Execute CIS benchmark checks and produce a Policy Report CRD. 
-	Recommended Skills: Golang, CLI, JSON
-	Mentor(s): Jim Bugwadia (@JimBugwadia)
-	Upstream Issue (URL): https://github.com/kubernetes-sigs/wg-policy-prototypes/issues/29



#### Kyverno
##### Monitor Kyverno with Prometheus

-	Description: Publish Kyverno policy execution metrics to Prometheus and Grafana
-	Recommended Skills: Golang, Prometheus
-	Mentor(s): Shuting Zhao (@realshuting)
-	Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/256


### OpenTelemetry PHP
#### Work through OpenTelemetry User Research Documentation and Implement Fixes

-   Description: Implement the fixes suggested in the user research documentation to make this project more consumable for end users.
-   Recommended Skills: PHP
-   Mentor: Bob Strecansky (@bobstrecansky)
-   Upstream Issue (Project URL): https://github.com/open-telemetry/opentelemetry-php/projects/5

#### TBD


### Chaos Mesh


### Chaos Mesh

#### Chaos Engineering as a Service

-	Description: Chaos Mesh is not like Chaos Engineering as a Service now:
    - Poor observability: the result of chaos experiments are not easy to observe and judge, the users need to check whether the Chaos effects.
    - [Chaosd](https://github.com/chaos-mesh/chaosd)(for physic node) is too simple: only supports command line operation, does not support task scheduling and life cycle management.
    - The costs of learning operation and maintenance are high: the maintenance of Chaos Mesh and Chaosd are not unified.

    It should a unified place to manage Chaos experiments for multiple platforms and multiple clusters, and can see the monitoring data of the experiment.

-	Recommended Skills: Golang
-	Mentor(s): Wang Xiang (@WangXiangUSTC)
-	Upstream Issue (URL): https://github.com/chaos-mesh/chaos-mesh/issues/1462