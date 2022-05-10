# Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

## Template

```
### CNCF Project Name
#### Title

- Description:
- Recommended Skills:
- Mentor(s):
- Upstream Issue (URL):
```

## Sample

### Prometheus (sample)

#### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Upstream Issue: <https://github.com/prometheus/prometheus/issues/3416>

---

## Proposed Project ideas

### OpenFunction

#### Support and update the Python Functions Framework

- Description: [OpenFunction](https://github.com/OpenFunction/OpenFunction) is a cloud-native open source FaaS (Function as a Service) platform. [OpenFunction 0.6.0](https://openfunction.dev/blog/2022/03/25/announcing-openfunction-0.6.0-faas-observability-http-trigger-and-more/) brings notable features including function plugin, distributed tracing for functions, control autoscaling behavior, HTTP trigger to async function, etc. Meanwhile, the asynchronous runtime definition has also been refactored. The core API has been upgraded from `v1alpha1` to `v1beta1`. So far, the Go Function Framework fully supports the latest features of OpenFunction 0.6.0. We hope the Python Functions Framework could also be applicable in OpenFunction 0.6.0.
- Recommended Skills: Python, Kubernetes, OpenFunction
- Mentor(s): [Kehui Li](https://github.com/kehuili), [Haili Zhang](https://github.com/webup), [Feynman Zhou](https://github.com/feynmanzhou)
- Upstream Issue: https://github.com/OpenFunction/functions-framework/issues/18

### OpenELB

#### Support BGP policy in OpenELB

- Description: OpenELB is an open-source load balancer implementation designed for exposing the LoadBalancer type of Kubernetes services in bare metal, edge, and virtualization environments. Currently, OpenELB supports the BGP protocol. However, the BGP policy is not fully supported in OpenELB. Therefore, based on the BGP protocol, OpenELB is supposed to support the BGP policy to enable leveraging the GoBGP policy feature for controlling the route advertisement.
- Recommended Skills: Golang, Kubernetes, Helm, Docker
- Mentor(s): [Chauncey Jiang](https://github.com/chaunceyjiang/)，[Yunkang Ren](https://github.com/renyunkang), [Feynman Zhou](https://github.com/feynmanzhou)
- Upstream Issue: https://github.com/openelb/openelb/issues/267

#### Provide the OpenELB Web UI for managing EIP and IP pool

- Description: OpenELB is an open-source load balancer implementation designed for exposing the LoadBalancer type of Kubernetes services in bare metal, edge, and virtualization environments. Currently, Currently, the allocation of OpenELB EIP pool and EIP can only be viewed and managed using command in the terminal. We hope to provide a simple web console to make OpenELB much developer-friendly. Users could manage EIP pool and EIP resources using web UI.
- Recommended Skills: Javascript, HTML, Docker, Kubernetes
- Mentor(s): [Yunkang Ren](https://github.com/renyunkang), [Changjiang Li](https://github.com/weili520), [Feynman Zhou](https://github.com/feynmanzhou)
- Upstream Issue: https://github.com/openelb/openelb/issues/244

