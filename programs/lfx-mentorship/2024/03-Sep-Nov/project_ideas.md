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

### KCL

#### New local dependency storage for KCL package management tool

- Description: `kpm` is a package management tool for KCL. `kpm` needs to refactor the local storage structure of the current dependencies to support storage of packages with the same name from different OCI registes and caching of the remote dependencies.
- Expected Outcome: The local storage structure has been designed in issue https://github.com/kcl-lang/kpm/issues/384, and the feature in issue need to be implemented.
- Recommended Skills: golang
- Mentor(s):
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/384
- LFX URL: 

#### The checksum check of the three-party dependencies

- Description: `kpm` is a package management tool for KCL. `kpm` currently lacks checksum verification for dependencies, so this part needs to be completed to support package integrity verification and package source verification

- Expected Outcome: Complete the workflow of adding checksum through `kpm` when uploading package and verifying checksum through `kpm` when downloading package
- Recommended Skills: golang
- Mentor(s):
  - Pengfei Xu (@Peefy, xpf6677@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Co-Mentor:
  - Akash Kumar (@AkashKumar7902, meakash7902@gmail.com)
- Upstream Issue (URL): https://github.com/kcl-lang/kpm/issues/394
- LFX URL: 

#### KCL Language Server Protocol Support on Lsp4IJ for Jetbrains IDEs

- Description: Currently, the KCL IDE plug-in based on Jetbrains LSP cannot support all versions of Jetbrains IDE, so migrate the KCL IDE plug-in to Lsp4IJ to support all versions of Jetbrains IDE.

- Expected Outcome: KCL IDE plug-in is migrated to Lsp4IJ
- Recommended Skills: Java
- Mentor(s):
  - Zheng Zhang (@He1pa, he1pa404@gmail.com)
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue (URL): https://github.com/kcl-lang/intellij-kcl-lsp/issues/3
- LFX URL: 

### Kyverno

#### Kyverno CLI for the Mutate Existing Rule

- Description: Support the mutate existing rule in Kyverno CLI.
- Expected Outcome: Allow users to be able to apply mutate existing policies to resources from 1. file systems; 2. clusters.
- Recommended Skills: Golang, Kubernetes, Cobra
- Mentor(s):
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
  - Mariam Fahmy (@MariamFahmy98, mariam@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/4354
- LFX URL: 

#### Policy Exceptions 3.0

- Description: Support some enhancements to Policy Exceptions.
- Expected Outcome:
1. Support list of PolicyException namespaces (--exceptionNamespace flag)
2. PolicyExceptions to have a status object and report readiness in printer column
3. Support imageReferences in Policy Exceptions for verify image rules
- Recommended Skills: Golang, Kubernetes
- Mentor(s):
  - Mariam Fahmy (@MariamFahmy98, mariam@nirmata.com)
  - Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/9478
- LFX URL: 

### Antrea

#### Support application-level DNS caches when using FQDN-based security rules

- Description: Antrea provides [Network Policy APIs](https://github.com/antrea-io/antrea/blob/main/docs/antrea-network-policy.md) (in the form of K8s CRDs) for K8s cluster administrators and application developers to declare security rules in order to protect workloads. These APIs complement the [Network Policies supported natively in K8s](https://kubernetes.io/docs/concepts/services-networking/network-policies/). When using the Antrea-specific Network Policy APIs, it is possible to use Fully Qualified Domain Names (FQDNs) in order to select the list of external domains with which a K8s application is allowed to communicate, or forbidden from communicating. The current implementation of this feature is not compatible with applications which directly cache the result of DNS queries. We have found that this type of caching is frequent for Java applications, which greatly impacts the usability of FQDN-based security rules. We believe that by defining a new configuration parameter for the Antrea implementation, we can bypass the issue and ensure that the feature can be used even with such applications, providing of course that the parameter is set correctly by users.
- Expected Outcome: Definition and implementation of a new configuration parameter (`minTLS`) for the Antrea Agent, which will ensure that FQDN-based security rules can be used even with application that cache DNS results. The implementation should come with a sufficient amount of tests (both unit tests and e2e tests), ensuring that the feature is working as expected.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, basic knowledge about networking in particular of the DNS protocol.
- Mentor(s):
  - Quan Tian (@tnqn, tianquan23@gmail.com)
  - Yang Ding (@Dyanngg, dingyany1995@outlook.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/6229
- LFX URL: 

### KubeArmor

#### Implement Fuzz testing for KubeArmor Components

- Description: Implement fuzz testing for KubeArmor using a suitable tool like oss-fuzz or AFL. Generate a comprehensive input set to guide the fuzz testing, profile execution using tools like pprof to detect anomalies, and identify components such as the policy controller, operator, configmap handler, and GRPC endpoints for testing. Document the entire process for repeatability in future versions and develop an automation strategy for ongoing fuzz testing.
- Expected Outcome: Improved OSSF Score; Standards for Fuzz Testing for KubeArmor; Stabilization of KubeArmor
- Recommended Skills: Go, Kubernetes, Fuzz Testing Experience
- Mentor(s):
    - Barun Acharya (@daemon1024, barun1024@gmail.com)
    - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
    - Prateek Nandle (@Prateeknandle, prateeknandle@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1367
- LFX URL: 

#### Support Podman and OCI Hooks support for unorchestrated environments

- Description: Leverage OCI hooks to obtain container start/stop events and container details for KubeArmor, replacing the current UNIX domain socket file method. Integrate Podman support for unorchestrated environments, ensuring policy enforcement and alerts/telemetry validation. Design the implementation to gather necessary container information and verify functionality with Podman as well as Containerd without Unix Socket.
- Expected Outcome: Work with Podman in rootless mode and Eliminate exposing UNIX domain sockets for other container runtimes
- Recommended Skills: Go, Container Runtime Interface, Linux
- Mentor(s):
    - Barun Acharya (@daemon1024, barun1024@gmail.com)
    - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
    - Abdulrahman Elawady (@AbdelrahmanElawady, abdoelawady125@gmail.com)
    - Rishabh Soni (@rootxrishabh, risrock02@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1814
- LFX URL: 

#### Non K8s KubeArmor Enhancements

- Description: Extend KubeArmor features to non-Kubernetes environments by implementing karmor recommend for host policies and unorchestrated containers, and enabling dynamic configuration for default posture and visibility through kubearmor.yaml, a new gRPC service, and karmor commands. Enhance karmor profile for host logs, support karmor install for VMs, and validate policies for non-Kubernetes setups.
- Expected Outcome: User friendly KubeArmor functionality including Application Behaviour and Policy Management in non-Kubernetes environments.
- Recommended Skills: Go, Container Runtime Interface, Linux
- Mentor(s):
    - Barun Acharya (@daemon1024, barun1024@gmail.com)
    - Rudraksh Pareek (@DelusionalOptimist, rudrakshpareek3601@gmail.com)
    - Prateek Nandle (@Prateeknandle, prateeknandle@gmail.com)
    - Rishabh Soni (@rootxrishabh, risrock02@gmail.com)
- Upstream Issue: https://github.com/kubearmor/KubeArmor/issues/1815
- LFX URL: 

### Prometheus

#### Enhance Prometheus Benchmark Suite

- Description: PromBench is the automated system for benchmarking Prometheus, intended to be a realistic comparison for users.  It sets up a Kubernetes cluster, configures Prometheus to monitor many fake services, and simulates users querying the data.
- Expected Outcome: PromBench should cover more of Prometheus functionality, making it a more useful benchmark for users.
- Recommended Skills: Go, Prometheus
- Mentor(s):
  - Bryan Boreham (@bboreham, bjboreham@gmail.com)
  - Kemal Akkoyun (@kakkoyun, kakkoyun@gmail.com)
- Upstream Issue: https://github.com/prometheus/test-infra/issues/707
- LFX URL: 

#### Prometheus Remote-Write v2 support in otel-collector's `prometheusremotewriteexporter`.

- Description: Prometheus recently [announced the second version of it's remote-write protocol](https://prometheus.io/docs/specs/remote_write_spec_2_0/), with support for new features on top of performance and cost savings. The work to be done is contribute support for this new protocol in the OpenTelemtry-Collector-Contrib repository, more specifically to the `prometheusremotewriteexporter` component.
- Expected Outcome: `prometheusremotewriteexporter` component with support for PRW v2.
- Recommended Skills: Go, Prometheus, OpenTelemetry.
- Mentors(s):
    - Arthur Silva Sens (@ArthurSens, arthursens2005@gmail.com)
    - Arve Knudsen (@aknuds1, arve.knudsen@pm.me)
    - David Ashpole (@dashpole, dashpole@google.com)
- Upstream Issue: https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/33661
- LFX URL: 

### Harbor

#### Harbor CLI

- Description: Harbor is a popular and widely adopted container registry. LFX manatees have developed an initial CLI (https://github.com/goharbor/harbor-cli) that we would like to extend and implement additional functionality, and common workflows that are currently only present in the Web UI. We are seeking a Golang experienced manatee who can work on the project independently.
- Expected Outcome: Working Golang Harbor CLI which can be used in the CI/CD implementations that compliment the Web UI covering the typical workflows of Harbor administrators and users. Familiarity with Golang library spf13/cobra and REST/Open API. Well-documented CLI that users love to use, and with the corresponding architectural diagrams under the Harbor. Working CI/CD with GitHub actions that create multi architecture binaries and containers.
- Recommended Skills: Golang, spf13/cobra
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Yan Wang (@wy65701436, yan-yw.wang@broadcom.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/goharbor/harbor-cli/issues/142
- LFX URL: 

#### Harbor Satellite

- Description: Containers have extended beyond their traditional cloud environments, becoming increasingly prevalent in remote and edge computing contexts. These environments often lack reliable internet connectivity, posing significant challenges in managing and running containerized applications due to difficulties in fetching container images. To address this, the project aims to decentralize container registries, making them more accessible to edge devices.

- Expected Outcome:
  The goal is to extend the proof of concept 
  and demonstrate that such a solution practically works.
  Candidates should be able understanding and implementing the [image](https://github.com/opencontainers/image-spec) and [distribution spec](https://github.com/opencontainers/distribution-spec)
  to replicate images from a central registry to a registry on the edge location.
- Recommended Skills: Golang, Container, Image-spec, Distribution-spec
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Yan Wang (@wy65701436, yan-yw.wang@broadcom.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
- Upstream Issue: https://github.com/goharbor/harbor/issues/20790
- LFX URL: 

### Vitess

#### Add new getting started examples

- Description: Vitess is a cloud-native database, while managing Vitess can be complex, the list of our getting started guide and code examples is not very exhaustive. We would like to have a mentee work on growing the list of code examples and guide to help new users acquire Vitess. Given the mentee's fresh eyes, we would like them to contribute to the troubleshooting / common issues guide too.
- Expected Outcome: By the end of the term, the mentee will have a deeper knowledge of Vitess and shipped at least one guide in every area of Vitess.
- Recommended Skills: Go, Distributed Database, Communication
- Mentor(s):
  - Florent Poinsard (@frouioui, florent@planetscale.com)
  - Matt Lord (@mattlord, mlord@planetscale.com)
- Upstream Issue: https://github.com/vitessio/website/issues/1798
- LFX URL: 

