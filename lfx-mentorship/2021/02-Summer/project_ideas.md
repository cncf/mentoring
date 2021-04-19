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

### CoreDNS

#### Add ACME protocol support for certificate management with DNS

- [CoreDNS](https://github.com/coredns/coredns) is a cloud-native DNS server with a focus on service discovery. While best known as the default DNS server for Kubernetes, CoreDNS is capable of handle many other scenarios within or outside of Kubernetes clusters for make easy infrastructure management. One such case is the certificate management. This project is to provide ACME protocol support so that it is possible to have automatic certificate management through CoreDNS. More details and discussions are available in https://github.com/coredns/coredns/issues/3460.
- Recommended Skills: Golang, DNS, TLS, Certificate Management
- Mentor(s): Yong Tang (@yongtang), Paul Greenberg (@greenpau)
- Issue: https://github.com/coredns/coredns/issues/3460
