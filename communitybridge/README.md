## Community Bridge by The Linux Foundation

[Community Bridge](https://communitybridge.org/) is a platform Developed by the Linux Foundation, which accelerates the adoption, innovation, and sustainability of open source software.

Community Bridge is actively used by the Cloud Native Computing Foundation as
a mentorship platform across the CNCF projects.

### 2020

#### Q1

See our recent post with the program announcement on [CNCF
Blog](https://www.cncf.io/blog/2019/12/05/cncf-to-participate-in-the-community-bridge-mentorship-program/).

#### Timeline

- December 5 2019 - December 15 2019: applications opened; students matching to
  projects/mentors
- December 16 2019: 5 projects/slots are announced by CNCF; students may apply
  via the [Community Bridge platform](https://people.communitybridge.org/)
- December 16 2019 - March 16 2020: coding
- March 20 2020: results announced

#### How to apply?

Project maintainers and mentors, please, submit your ideas below (under the Project Ideas) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

#### Project Ideas:

#### Kubernetes working group for multi-tenancy: HNC + Tenant Operator 

-	Description: Integrate the Tenant Operator with the Hierarchical Namespace Controller, per [this design document](https://docs.google.com/document/d/1QAWtYdRZGseSar_KgyfiIisL7JTGMHCfqB_Legfa39w/edit#heading=h.7wst4safj8dx)
-	Recommended Skills: golang, some familiarity with the Hierarchical Namespace Controller
-	Mentor(s): Adrian Ludwin @aludwin, Tasha Drew @tashimi 
-	Issue: https://github.com/kubernetes-sigs/multi-tenancy/issues/300

#### Prometheus

#### Benchmarks for TSDB
- Description: The TSDB module used in Prometheus  doesn’t have proper benchmarks yet, which means we cannot see the potential impact of the changes we are introducing. The idea is to build some automated benchmarking which can be added to the CI pipeline.
- Recommended Skills: CI, Golang, K8s
- Relevant Issues: https://github.com/prometheus/tsdb/issues/235 
- Potential Mentors: Krasi Georgiev @krasi-georgiev

#### PromQL/Rule formatting tool
- Description: Like "gofmt" for Go, we ought to have a "promfmt" for Prometheus since we have a syntax tree. The idea being that the system produces uniform style that minimizes deviation and learning curve. Care should be taken to preserve comments.
- Recommended Skills: Golang
- Relevant Issues: https://github.com/prometheus/prometheus/issues/21
- Potential Mentors: Ganesh Vernekar @codesome

#### Persist retroactive rule evaluations
- Description: We can already reevaluate queries on old data, but we should be able to persist that for a certain window from (Oldest, Now).
- Recommended Skills: Golang
- Relevant Issues: https://github.com/prometheus/prometheus/issues/11
- Potential Mentors: Ganesh Vernekar @codesome, Goutham Veeramachaneni @gouthamve

#### e2e test SD mechanisms 
- Description: We're not really excellent in the correctness / bug-free-ness department yet, partially because certain key components either lack tests or you'd have to run them in a real-world scenario for a while to discover certain bugs. I'm especially looking at our under-tested service discovery mechanisms here that require e.g. a Zookeeper or Consul as a dependency to test them for real. It'd be cool to have a test environment that runs a Prometheus release end-to-end (with different SD mechanisms) for a while and checks the results (evaluated expressions, alerts, etc.) for sanity.
- Recommended Skills: Golang
- Relevant Issues: https://github.com/prometheus/prometheus/issues/2935 
- Potential Mentors: Gouthamve @gouthamve 


### 2019

2019 year, CNCF was participating in the Community Bridge, sponsoring three students to work on Kubernetes and CoreDNS projects during the foundations’ pilot stage.

See our blog post here on the [CNCF
Blog](https://www.cncf.io/blog/2019/08/22/cncf-hosts-three-student-internships-for-kubernetes-and-coredns-projects-through-linux-foundations-communitybridge/).
