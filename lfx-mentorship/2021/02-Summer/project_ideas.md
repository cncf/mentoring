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

#### CoreDNS

##### Add ACME protocol support for certificate management with DNS

- [CoreDNS](https://github.com/coredns/coredns) is a cloud-native DNS server with a focus on service discovery. While best known as the default DNS server for Kubernetes, CoreDNS is capable of handle many other scenarios within or outside of Kubernetes clusters for make easy infrastructure management. One such case is the certificate management. This project is to provide ACME protocol support so that it is possible to have automatic certificate management through CoreDNS. More details and discussions are available in https://github.com/coredns/coredns/issues/3460.
- Recommended Skills: Golang, DNS, TLS, Certificate Management
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Issue: https://github.com/coredns/coredns/issues/3460

#### Racklet

##### Open source scale-model of Data Centers using commodity compute like Raspberry Pis

-	Description:
  ```
  “The future is already here - it's just not evenly distributed” - William Gibson

  We’d like to introduce an idea for a new open-source project: Racklet. It’s a fully-integrated, Raspberry Pi form-factor
  server rack and software stack that aims to be a scale model of hyperscaler datacenters. All layers of the stack
  are 100% OSS/OSH, and will be developed together with the community. It’s reproducible through open PCB designs,
  3D printed casing, and commodity, off-the-shelf hardware.

  We want to lower the barrier of entry for becoming cloud native. Racklet aims to inspire users to explore how
  modern server architectures work, in a tangible and educational way. Emphasis is put on security, knowledge
  sharing, extensibility, and portability.

  The goal is to conceptually map to real environments and provide an accessible and well-documented path to welcome
  future talents to the world of cloud native.
  ```
-	Recommended Skills: Go, Rust, Kubernetes, Linux, Raspberry Pi, API and library design, Security, Documentation, GitOps, Embedded Systems, Electronics, Continuous Integration, Virtualization
-	Mentor(s): Davanum Srinivas ([@dims](https://github.com/dims))
-	Request For Comments (RFC) Description (URL): https://docs.racklet.io/rfcs/0001-high-level-architecture.html

#### Kyverno

##### Extend the "kyverno test" command and add test suites

- Description: Extend Kyverno CLI "test" command to handle mutate and generate policies. Add more E2E/Unit Tests and offer test report based on the results.
- Recommended Skills: golang, testing best practices.
- Mentor(s): Shuting Zhao (@realshuting), Jim Bugwadia (@JimBugwadia)
- Issue: https://github.com/kyverno/kyverno/issues/1821