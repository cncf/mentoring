## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s): Mentor Name (@mentor_github, mentor@email.addy)
- Upstream Issue:

```

---

## Proposed Project ideas

### Armada

#### Build interfaces around Postgres for Armada

- Description: Open source projects should not be hard coded to a particular Database. Armada currently only allows users to use Postgres. This project is to build interfaces around our connections to Postgres so we can allow other databases.
- Expected outcomes:
  - A interface is created that allows Armada to interact with any SQL database without exposing implementation details of postgres
Test coverage could increase
- Recommend Skills: Go, SQL
- Mentor(s):
  - Geoffrey Wilson, @suprjinx, geoff@gr-oss.com
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): armadaproject/armada#2121

### CoreDNS

#### Add DNS-over-QUIC (DoQ) and/or DNS-over-HTTP/3 (DoH3) support

- Description: DNS-over-QUIC (DoQ) and DNS-over-HTTP/3 (DoH3) are relatively new protocols for transmitting DNS queries with security and privacy. Additionally, DoQ and DoH3 also offers other benefits such as improved latency and better error detection. The goal of this proposal is to add DoQ and/or DoH3 support to CoreDNS.
- Expected Outcome: An implementation of DoQ or DoH3 for CoreDNS. A stretch goal of adding both DoQ and DoH3 is also within scope.
- Recommended Skills: Golang, DNS.
- Mentor(s): Yong Tang @yongtang (yong.tang.github@outlook.com); Chris O'Haver @chrisohaver (cohaver@infoblox.com)
- Upstream Issue (URL): https://github.com/coredns/coredns/issues/5583, https://github.com/coredns/coredns/issues/5539

### Jaeger

#### Upgrade Jaeger's internal telemtery to OpenTelemetry

- Description: historically, the Jaeger backend used the OpenTracing API, with Jaeger's own Go SDK `jaeger-client-go`, for instrumenting its own internals for distributed tracing. Since Jaeger's SDKs have been deprecated, we want to upgrade the Jaeger backend to use the OpenTelemetry tracing API and SDK directly.
- Expected Outcome:
  - Replace the use of OpenTracing API with OpenTelemetry
  - Remove `jaeger-client-go` and `jaeger-lib` as dependencies
  - Remove `opentracing-go` and `opentracing-contrib/*` as dependencies
  - Switch to standard instrumentation libraries where available (e.g. for HTTP, gRPC)
  - Rethink/rework `crossdock` integration tests to test end-to-end flow with OpenTelemetry data
  - Publish a blog post on medium.com/jaegertracing documenting the experience
- Recommended Skills: Go
- Mentor(s): Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/3381

---
