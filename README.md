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
* Description: [Fluentd](http://fluentd.org) as a log collector and aggregator, runs as a service in background, for hence having graphical built-in monitoring capabilities is a must for all scenarios. This project aims to implement a web based dashboard that reports the Fluentd internals from different stages of the data cycle: collection, parsing, filtering, buffering and outputs.
* Recommended Skills: Ruby, API, CSS, Bootstrap and Javascript
* Mentor(s): Eduardo Silva (@edsiper)
* Issue: https://github.com/fluent/fluentd/issues/1475

#### Fluent Bit: plugins development and extend golang interface
* Description: [Fluent Bit](http://fluentbit.io) is a log forwarder that can be integrated with Fluentd or work in standalone mode for log handling. This project aims to extend the number of plugins available to perform data collection, filtering and outputs.
* Recommended Skills: C, TCP, Sockets, Golang and Linux.
* Mentor(s): Eduardo Silva (@edsiper)
* Issue: https://github.com/fluent/fluent-bit/issues/194

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
* Issue: https://github.com/linkerd/linkerd/issues/1079

#### QUIC Netty codec
* Description: Build a QUIC Netty codec.
* Recommended Skills: Java, Netty, UNIX Networking
* Mentor(s): Oliver Gould (@olix0r)
* Issue: https://github.com/linkerd/linkerd/issues/1078

#### Redis protocol support
* Description: Add redis protocol support.
* Recommended Skills: Scala, Finagle, Redis
* Mentor(s): Oliver Gould (@olix0r), Alex Leong (@adleong)
* Issue: https://github.com/linkerd/linkerd/issues/1077

#### MySQL protocol support
* Description: Add mysql protocol support.
* Recommended Skills: Scala, Finagle, MySQL
* Mentor(s): Oliver Gould (@olix0r), Alex Leong (@adleong)
* Issue: https://github.com/linkerd/linkerd/issues/1080

### OpenTracing

OpenTracing is a vendor-neutral open standard for distributed tracing: http://opentracing.io/

#### OpenTracing adaptor for AWS X-Ray
* Description: Build an OpenTracing adaptor for AWS X-Ray.
* Recommended Skills: golang
* Mentor(s): Ben Sigelman (@bensigelman)
* Issue: TBD

#### OpenTracing <> HAProxy instrumentation
* Description: Add opentracing support to HAProxy.
* Recommended Skills: golang, haproxy
* Mentor(s): Paul Draper (@pauldraper)
* Issue: TODO

#### Instrument Nginx for OpenTracing
* Description: Add support for instrumenting ngnix with opentracing.
* Recommended Skills: golang, nginx
* Mentor(s): Paul Draper (@pauldraper)
* Issue: TODO

#### Add "net/rpc" and "database/sql" support
* Description: Currently, instrumentation is just provided for net/http. Instrumentation for net/rpc and database/sqlseems is worth doing
* Recommended Skills: golang
* Mentor(s): Paul Draper (@pauldraper)
* Issue: https://github.com/opentracing-contrib/go-stdlib/issues/8

#### go-restful + OpenTracing
* Description: Instrument go-restful (https://github.com/emicklei/go-restful), a wildly used Golang REST web services framework, with OpenTracing.
* Recommended Skills: golang
* Mentor(s): Wu Sheng (@wu-sheng)
* Issue: TBD
