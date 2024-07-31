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

