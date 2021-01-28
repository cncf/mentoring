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


#### TiKV
##### Coprocessor plugin

-	Description: Implement a basic coprocessor plugin runtime on top of Wasmer.
-	Recommended Skills: Rust
-	Mentor(s): Andy Lok (@andylokandy), Alex Chi (@skyzh)
-	Upstream Issue (URL): https://github.com/tikv/tikv/issues/8036

##### Implement Jepsen test for TiKV

-	Description: Build a intergration test framework with Jepsen for TiKV,
    using the TiKV Rust client.
-	Recommended Skills: Rust/Clojure
-	Mentor(s): Andy Lok (@andylokandy)
-	Upstream Issue (URL): https://github.com/tikv/tikv/issues/9588

##### Build on Windows

-	Description: Make TiKV build and run on Windows.
-	Recommended Skills: Rust
-	Mentor(s): Andy Lok (@andylokandy)
-	Upstream Issue (URL): https://github.com/tikv/tikv/issues/9103
#### Tremor

##### Support for Syslog Protocol
-	Description: Enable Tremor to receive and send Syslog Protocol Messages (https://tools.ietf.org/html/rfc5424) , supporting as much syslog implementations as possible that might deviate from the standard
-	Recommended Skills: Rust Programming (beginner is ok), some experience with syslog (beginner is ok)
-	Mentor(s): Matthias Wahl (@mfelsche), Anup Dhamala (@anupdhml)
-	Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/12

##### Continuous benchmarking and benchmarking infrastructure
-	Description: Set up infrastructure for running Tremor benchmarks periodically
-	Recommended Skills: Rust Programming, Github CI, Shell scripting, Linux command line
-	Mentor(s): Anup Dhamala (@anupdhml), Darach Ennis (@darach)
-	Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/722

##### Property based tests for tremor-script
-	Description: Extend property-based testing for tremor script
-	Recommended Skills: Erlang Programming, Rust Programming, Property Based Testing (EQC)
-	Mentor(s): Heinz Gies (@Licenser), Matthias Wahl (@mfelsche)
-	Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/721

#### Google Cloud Connector
-	Description: Enhance tremor with connectors for the Google Cloud Platform
-	Recommended Skills: Rust programming ( beginner is ok ), some experience with Google Cloud or other platforms
-	Mentor(s): Darach Ennis (@darach), Heinz Gies (@Licenser)
-	Upstream Issue (URL): https://github.com/tremor-rs/tremor-runtime/issues/724

#### TBD


#### Chaos Mesh

##### Chaos Engineering as a Service

-	Description: Chaos Mesh is not like Chaos Engineering as a Service now:
    - Poor observability: the result of chaos experiments are not easy to observe and judge, the users need to check whether the Chaos effects by manual.
    - [Chaosd](https://github.com/chaos-mesh/chaosd)(for physic node) is too simple: only supports command line operation, does not support task scheduling and life cycle management.
    - The costs of learning operation and maintenance are high: the maintenance of Chaos Mesh and Chaosd are not unified.

    It should a unified place to manage Chaos experiments for multiple platforms and multiple clusters, and can see the monitoring data of the experiment.

-	Recommended Skills: Golang
-	Mentor(s): Wang Xiang (@[WangXiangUSTC](https://github.com/WangXiangUSTC))
-	Upstream Issue (URL): https://github.com/chaos-mesh/chaos-mesh/issues/1462

### SIG Usability
#### Jobs-to-Be-Done study

Qualitative analysis of user interview recordings for Jobs-to-Be-done study

- Description: SIG Usability is conducting a Jobs-to-Be-Done study meant to identify the highest impact areas for improving Kubernetes UX. We are in the process of conducting user interviews and need some help going back through the transcribed recordings to annotate and pull out insights from the conversations. Overall, this is a great opportunity for someone who’s studied or engaged in UX/IA/Usability to get involved in open source.
- Recommended Skills: User Research, UX, synthesis
- Mentors: Gaby Moreno (@morengab), Tasha Drew (@tashimi)
- Upstream Issue (URL): https://github.com/kubernetes-sigs/sig-usability/issues/9 
