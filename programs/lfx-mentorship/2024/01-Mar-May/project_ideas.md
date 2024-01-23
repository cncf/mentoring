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

### Cilium

#### Governance Documentation

- Description: This project will focus on governance documentation for the Cilium project with two key parts. First, the governenace documentation should be moved out of the main docs and into the community repo. Second, we need to do an inventory of all of the repos under the project and come up with a lifecycle for them.
- Expected Outcome: Governance docs in community repo. All repos accounted for and with a lifecycle plan.
- Recommended Skills: enthusiasm for governance and basic markdown experience
- Mentor(s):
  - Bill Mulligan(@xmulligan, bill@isovalent.com)
- Upstream Issue: https://github.com/cilium/community/issues/78 https://github.com/cilium/community/issues/27

### Jaeger

#### Jaeger-V2 Storage Backends

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Currently only memory storage is wired in v2, we need to add Elasticsearch, Opensearch, Cassandra, Badger.
- Expected Outcome: Build out full support in jaeger-v2 for all storage backends supported by jaeger-v1
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084

#### Jaeger-V2 Observability

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Currently jaeger-v2 components are initialized without observability clients. We need to instantiate appropriate logging, tracing, and metrics clients and pass them to the components. The existing code uses internal metrics API, which needs to be bridged to OTEL metrics to minimize code changes.
- Expected Outcome: Achieve parity in observability of jaeger-v2 compared to jaeger-v1
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084

#### Jaeger-V2 Adaptive Sampling

- Description: Jaeger is a distributed tracing platform. Jaeger V2 is a major new version where we rebase all Jaeger backend components (agent, collector, ingester, and query) on top of the OpenTelemetry Collector. Jaeger-v1 collector can serve sampling configuration to SDKs, and allows either static configuration (with hot reload) or adaptive sampling that continuously re-calculates the desired sampling probabilities. We need to enable all these capabilities in jaeger-v2.
- Expected Outcome: Support adaptive sampling in jaeger-v2
- Recommended Skills: Go, scripting, CI/CD
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/5084

### Vitess

#### Improve Unit Test Coverage

- Description: Vitess is a scalable cloud-native database system for horizontal scaling of MySQL.The project is over 10 years old and there are parts of the code that don’t have very good unit test coverage. Revamping these code files and adding unit test coverage will help with the overall project health. Having strong unit testing is also useful in preventing introducing bugs when making code changes to these files. The task of the mentee would be to add said unit tests for the given code files. At the time of writing this proposal, the unit test coverage in Vitess stands at 47.3% of all lines of code.
- Expected Outcome: Improved unit test coverage in Vitess.
- Recommended Skills: Go, SQL, Unit testing
- Mentor(s): 
  - [Manan Gupta](https://github.com/GuptaManan100) (manan@planetscale.com)
  - [Harshit Gangal](https://github.com/harshit-gangal) (harshit@planetscale.com)
- Issue: <https://github.com/vitessio/vitess/issues/14931>

---

### Knative Eventing

#### Cross Namespace Event Links

- Description: One of the most requested features in Knative Eventing over the past few years has been for triggers in different namespaces than brokers, and for subscriptions
  in different namespaces than channels. More information can be found in the upstream issue.
- Expected Outcome: Knative Eventing Triggers and Subscriptions can reference Brokers or Channels in a namespace different from their own if the user possesses the necessary
  permissions to do so.
- Recommended Skills: Go, Kubernetes
- Mentor(s):
  - Calum Murray (@Cali0707, cmurray@redhat.com)
  - Pierangelo Di Pilato (@pierdipi, pierdipi@redhat.com)
- Upstream Issue: https://github.com/knative/eventing/issues/7530

---

### Istio

#### Improve Test Coverage for Istio Ambient Mesh

- Description: Ambient mesh is now one of the biggest features in Istio, but it is in its early stage. We are in the process of improving the test coverage for Ambient Mesh in order to move it to Beta. Ztunnel works as shared data plane within a node, it subscribes to `Workload` and `Authorization` resources, both need to be well tested.
- Expected Outcome:
  - Enhanced UnitTest coverage for `Workload` and `Authorization` Delta xDS/Stow interface.
  - Enhanced integration tests for ztunnel Authorization Policy 
- Recommended Skills: Go, Istio Test Framework
- Mentor(s):
  - Zhonghu Xu (@hzxuzhonghu, zhhxu2011@gmail.com) 
  - Faseela K (@kfaseela, k.faseela@gmail.com) 
- Upstream Issue:
  - https://github.com/orgs/istio/projects/9
  - https://github.com/istio/ztunnel/issues/251
