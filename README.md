# CNCF + Summer of Code

The Cloud Native Computing Foundation participates in Google's Summer of Code (GSoC). CNCF is a great place to spend a summer learning, coding, participating and contributing. We are an exciting open source foundation with a vibrant community of projects, and we look forward to your application and your project ideas!

## Organization Admins

If you need help with anything CNCF + Summer of code related, you can file an issue or contact one of the admins below:

* Chris Aniszczyk (@caniszczyk): https://twitter.com/cra
* Brett Preston (@bpreston)

It's best if you use a public communication channel whenever possible; however, if you need to communicate in private, please feel free to send the admins a note via info@cncf.io (please use the public channels for any project-related discussion).

## Current Year

We are submitting an application as a mentoring organisation for Google Summer of Code 2017.

### Students

You can take a look at our official project ideas [here](https://docs.google.com/spreadsheets/d/1Dg8LhFt4ky-z1Fg16BNLd9m1tue3QnAHeCc9MPmUuDg/edit#gid=0)

### Mentors

Add your ideas to our page [here](https://docs.google.com/spreadsheets/d/1Dg8LhFt4ky-z1Fg16BNLd9m1tue3QnAHeCc9MPmUuDg/edit#gid=0)

Also please contact the org admins to add you to the gsoc github team:
https://github.com/orgs/cncf/teams/gsoc-2017-mentors

## Project Ideas

### Kubernetes

#### Improve ThirdPartyResources

* Description: ThirdPartyResources were added some time ago, but the implementation has languished with multiple outstanding capabilities that are missing. They did not complete the list of requirements for graduating to beta (kubernetes/kubernetes#22768).
* Recommended Skills: golang
* Mentor(s): Stefan Schimanski (@sttts)
* Issue: https://github.com/kubernetes/features/issues/95

#### TODO

### Fluentd

Fluentd is an open source data collector for unified logging layer: http://www.fluentd.org/

#### Fluentd Monitoring Dashboard
* Description: 
* Recommended Skills: 
* Mentor(s): Eduard Silva (@edsiper)
* Issue: 

#### Fluent Bit: plugins development and extend golang interface 
* Description: 
* Recommended Skills: 
* Mentor(s): Eduard Silva (@edsiper)
* Issue: 

### Prometheus

Prometheus is an open-source systems monitoring and alerting toolkit: https://prometheus.io/

#### Add option to log slow queries and recording rules
* Description: Having something like PostgreSQL's log_min_duration_statement would be useful to debug performance problems. It would be great to collect detailed query information, like how many chunks were necessary to compute the result and how many had to be loaded from disk.
* Recommended Skills: golang
* Mentor(s): Ben Kochie (@SuperQ)
* Issue: https://github.com/prometheus/prometheus/issues/1315

#### General purpose rule/alert testing tool
* Description: Write a wrapper that turns (https://github.com/prometheus/prometheus/blob/master/promql/test.go) into a general-purpose rule/alert testing tool.
* Recommended Skills: golang
* Mentor(s): Ben Kochie (@SuperQ)
* Issue: https://github.com/prometheus/prometheus/issues/1695

### linkerd

linkerd is a resilient service mesh for cloud native apps: https://linkerd.io/

#### Adopt OpenTracing in linkerd
* Description: Add opentracing support in linkerd.
* Recommended Skills: Scala
* Mentor(s): Oliver Gould (@olix0r), Andrew Seigner (@siggy)
* Issue: TBD

#### QUIC Netty codec
* Description: Build a QUIC Netty codec.
* Recommended Skills: Scala
* Mentor(s): Oliver Gould (@olix0r)
* Issue: TBD

#### Runtime debugging DSL
* Description: TODO
* Recommended Skills: Scala
* Mentor(s): Oliver Gould (@olix0r), Alex Leong (@adleong)
* Issue: TBD

#### Redis protocol support
* Description: Add redis protocol support.
* Recommended Skills: Scala
* Mentor(s): Oliver Gould (@olix0r), Alex Leong (@adleong)
* Issue: TBD

#### MySQL protocol support
* Description: Add mysql protocol support.
* Recommended Skills: Scala
* Mentor(s): Oliver Gould (@olix0r), Alex Leong (@adleong)
* Issue: TBD

### OpenTracing

[OpenTracing](http://opentracing.io/) is an open standard for distributed tracing. A trace tells the story of a transaction or workflow as it propagates through a (potentially distributed) system. OpenTracing makes it easy for developers to add (or switch) tracing implementations, by offering a vendor-neutral APIs that popular platforms can bind to.

With v1.0 of OpenTracing complete, we are now in the process of intrumenting major web frameworks, services, and networking/controlflow libraries. See [Instrumenting Frameworks](http://opentracing.io/documentation/pages/instrumentation/instrumenting-frameworks.html) for more information.

In addition to the following projects, students may choose an equivalent framework, library, or service, provided it is widely used and Open Source.

#### OpenTracing adaptor for AWS X-Ray 
* Description: X-Ray is a distributed tracing service provided by AWS. X-Ray intrumentation does not currently conform to OpenTracing, it provides a similar (but proprietary) API. Make X-Ray vendor-neutral by building an OpenTracing/X-Ray adaptor, so that it can be plugged in to the OpenTracing ecosystem.
* Recommended Skills: golang
* Mentor(s): Ben Sigelman (@bensigelman)

#### OpenTracing <> HAProxy instrumentation
* Description: Load Balancers and Gateways provide an important service, and are present in almost every distributed system. Instrumentation at this layer is often the best first step towards tracing an entire system. Add opentracing support for HAProxy via a plugin. See [Envoy](https://lyft.github.io/envoy/docs/intro/arch_overview/tracing.html) as an example.
* Recommended Skills: golang, haproxy
* Mentor(s): Paul Draper (@pauldraper)

#### OpenTracing Instrumentation for Nginx, HAProxy, or other Load Balancers
* Description: Load Balancers and Gateways provide a variety of important services, and are present in almost every distributed system. Instrumentation at this layer is often the best first step towards tracing an entire system. Add intrumentation to Nginx, HAProxy, or equilvant gateway service via an OpenTracing plugin. See [Envoy](https://lyft.github.io/envoy/docs/intro/arch_overview/tracing.html) as an example.
* Recommended Skills: C++, nginx 
* Mentor(s): Paul Draper (@pauldraper)

#### Add "net/rpc" and "database/sql" support for Golang
* Description: Instrumented wrappers for the io functionality in Golang's stdlib, such as net/rpc and database/sql, is critical. So far, only net/http has been instrumented. 
* Recommended Skills: golang
* Mentor(s): Paul Draper (@pauldraper)
* Issue: https://github.com/opentracing-contrib/go-stdlib/issues/8

#### go-restful + OpenTracing
* Description: Instrument go-restful (https://github.com/emicklei/go-restful), a wildly used Golang REST web services framework, with OpenTracing.
* Recommended Skills: golang
* Mentor(s): Wu Sheng (@wu-sheng)
