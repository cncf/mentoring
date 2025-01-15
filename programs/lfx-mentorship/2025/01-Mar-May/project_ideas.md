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

### Envoy Gateway

#### Integrating CNCF Fuzzing Framework for Envoy Gateway

- Description: [Envoy Gateway](https://gateway.envoyproxy.io) has become a crucial part of modern cloud-native infrastructures, 
providing a simplified way to deploy and manage [Envoy Proxy](https://www.envoyproxy.io).
Ensuring the reliability and security of Envoy Gateway is paramount for its growing user base.

Fuzzing, a widely-used technique for identifying software vulnerabilities and bugs, can significantly enhance the robustness of Envoy Gateway.
By integrating the [CNCF Fuzzing Framework](https://github.com/cncf/cncf-fuzzing), this project aims to improve the 
security posture of Envoy Gateway through comprehensive automated testing.
- Expected Outcome:
  - Add a fuzz test that covers 80% of code paths for translating Gateway API input configuration into xDS output.
  - Enable continuous fuzzing using [OSS-Fuzz](https://github.com/google/oss-fuzz).
- Recommended Skills: Go, scripting.
- Mentor(s):
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
  - Teju Nareddy (@nareddyt, tnareddy@confluent.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/3124


### Jaeger

#### Jaeger: Upgrade Storage Backends to V2 Storage API

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. A critical component of Jaeger is its storage backends, where traces captured by Jaeger are stored. With the release of Jaeger v2 last year we introduced a new, more efficient Storage API v2. However, the existing backend implementations in Jaeger are still using v1 API that is only wrapped in the v2 adapter, which prevents them from benefiting from the new capabilities such as batch writes and result streaming. The objective of this project is to upgrade some (or all) backend implementations to use the Storage API v2 natively. Please refer to the upstream issue for more details.
- Expected Outcome:
  - Upgrade memory and Elasticsearch backends to use the Storage API v2 natively.
  - Bonus: upgrade Cassandra and Badger backends to use the Storage API v2 natively.
- Recommended Skills: Go, scripting, CI/CD, familiarity with Elasticsearch/Cassandra a plus but not required.
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Mahad Zaryab (@mahadzaryab1, mahadzaryab1@gmail.com)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/6458

#### Upgrade charts and graphs in Jaeger UI

- Description: [Jaeger](https://www.jaegertracing.io/) is an open-source, distributed tracing platform designed to monitor and troubleshoot microservices-based systems. Jaeger UI pioneered many new visualizations for analyzing distributed traces. However, over time, it accumulated views that utilize different and sometimes deprecated viz libraries. The objective is to standardize charting / graphing libraries used in Jaeger UI, upgrade their dependencies, and add new visualization features. Please refer to the upstream issue for more details.
- Expected Outcome:
  - Jaeger UI is not using deprecated dependencies
  - Consistent look and feel of graphs
  - Bonus: side panel for details for a given node
  - Bonus: overlaying metrics on the graph (as edge annotations and node coloring to reflect health / error rates)
  - Bonus: varying node displays depending on the type of node and implementation language
- Recommended Skills: Javascript, Typescript, React, NPM, Vite.js
- Mentor(s):
  - Yuri Shkuro (@yurishkuro, github@ysh.us)
  - Jonah Kowall (@jkowall, jkowall@kowall.net)
- Upstream Issue: https://github.com/jaegertracing/jaeger-ui/issues/2534
