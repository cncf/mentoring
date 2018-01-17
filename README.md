# CNCF + Summer of Code

The Cloud Native Computing Foundation participates in [Google Summer of Code](https://summerofcode.withgoogle.com/) (GSoC). CNCF is a great place to spend a summer learning, coding, participating and contributing. We are an exciting open source foundation with a vibrant community of projects, and we look forward to your application and your project ideas!

## Organization Admins

If you need help with anything CNCF + Summer of code related, you can file an issue or contact one of the admins below:

* Chris Aniszczyk ([@caniszczyk](https://github.com/caniszczyk)): https://twitter.com/cra
* Ihor Dvoretskyi ([@idvoretskyi](https://github.com/idvoretskyi)): https://twitter.com/idvoretskyi
* Cameron Zahedi ([@czahedi](https://github.com/czahedi))

It's best if you use a public communication channel whenever possible; however, if you need to communicate in private, please feel free to send the admins a note via info@cncf.io (please use the public channels for any project-related discussion).

## Current Year

We are planning to submit an application as a mentoring organisation for Google Summer of Code 2018.

### Students

The list of official project ideas will be published soon.

To get an idea about the projects, you can take a look at the list of project ideas published for [GSoC 2017](/2017.md).

### Mentors

Add your ideas to the README list below.

## Project Ideas

### Kubernetes

TODO

### Prometheus

Prometheus is an open-source systems monitoring and alerting toolkit: https://prometheus.io/

Prometheus ideas:

#### Streaming APIs
* Description: Currently the HTTP API sends all the data in one go and that has the chance overwhelm prometheus. To guard against this, there are limits set in Prometheus. Make APIs streaming where data is retrieved and sent in chunks rather than at once.
* Recommended Skills: golang
* Mentor(s): Frederic Branczyk (@brancz), Goutham V (@gouthamve)
* Issue: https://github.com/prometheus/prometheus/issues/3690

#### Add option to log slow queries
* Description: Having something like PostgreSQL's log_min_duration_statement would be useful to debug performance problems. It would be great to collect detailed query information, like how many chunks were necessary to compute the result and how many had to be loaded from disk. Further having detailed stats like the number of series/samples/blocks touched would be great.
* Recommended Skills: golang
* Mentor(s): Ben Kochie (@SuperQ), Goutham V (@gouthamve)
* Issue: https://github.com/prometheus/prometheus/issues/1315

#### Building a full integration testing environment and benchmarks
* Description: We're not really excellent in the correctness / bug-free-ness department yet, partially because certain key components either lack tests or you'd have to run them in a real-world scenario for a while to discover certain bugs. I'm especially looking at our under-tested service discovery mechanisms here that require e.g. a Zookeeper or Consul as a dependency to test them for real. It'd be cool to have a test environment that runs a Prometheus release end-to-end (with different SD mechanisms) for a while and checks the results (evaluated expressions, alerts, etc.) for sanity.
* Recommended Skills: golang, infrastructure management
* Mentor(s): Brian Brazil (@brian-brazil), Conor Broderick (@Conorbro)
* Issue: https://github.com/prometheus/prometheus/issues/3689

#### Features that aid in building and testing alerting expressions
* Description: One of the most annoying (but important) things when using Prometheus is making sure that your alerting expressions are correct (semantically, syntactically, and referring to existing template variables). It would be great to be able to assist the user with that. This would be both frontend and backend / tooling work.
* Recommended Skills: golang, javascript
* Mentor(s): Julius Volz (@juliusv)
* Issue: https://github.com/prometheus/prometheus/issues/1154 https://github.com/prometheus/prometheus/issues/1695 https://github.com/prometheus/prometheus/issues/1220 https://github.com/prometheus/prometheus/issues/1219

#### Tracing in Prometheus and Alertmanager
* Description: We can use open-tracing to trace several things in both prometheus and alertmanager, for example, prometheus query tracing.
* Recommended Skills: golang
* Mentor(s): Frederic Branczyk (@brancz), Tom Wilkie (@tomwilkie)

#### Persist “for” state for alerts
* Description: Currently if Prometheus restarts, we lose the 'for' state for firing alerts. While this isn't an issue for short for clauses, it presents a problem for clauses that are in the hours to days range. It'd be good to persist this state in some way, so that alerts don't have to start again from scratch. We probably don't want to count the time the prometheus server is down against the 'for' clause.
* Recommended Skills: golang
* Mentor(s): Goutham V (@gouthamve), Brian Brazil (@brian-brazil)
* Issue: https://github.com/prometheus/prometheus/issues/422

Alertmanager ideas:

#### Replace weaveworks/mesh
* Description: It's effectively unmaintained, and we have various known problems; initial investigation shows hashicorp/memberlist might be a good candidate, as it has many similar primitives in its library.
* Recommended Skills: golang
* Mentor(s): Frederic Branczyk (@brancz)
* Issue: https://github.com/prometheus/alertmanager/issues/1200

#### Optimize Alert Ingest Path
* Description: While benchmarking & profiling Alertmanager it quickly became obvious, that the ingest path blocks _a lot_ and can be optimised.
* Recommended Skills: golang
* Mentor(s): Frederic Branczyk (@brancz)
* Issue: https://github.com/prometheus/alertmanager/issues/1201

#### Improve Alert Indexing
* Description: Currently there are various maps to improve access to certain alerts, but very scattered across the code base and seemingly unrelated. We can have a lot of improvement if we move to something similar to the TSDB reverse index.
* Recommended Skills: golang
* Mentor(s): Frederic Branczyk (@brancz)
* Issue: https://github.com/prometheus/alertmanager/issues/1202

TSDB ideas:

#### Isolation
* Description: Currently the writes and reads are not isolated and sometimes during reads we see partial write data.
* Recommended Skills: golang, databases
* Mentor(s): Fabian Reinartz (@fabxc), Brian Brazil (@brian-brazil), Goutham V (@gouthamve)
* Issue: https://github.com/prometheus/tsdb/issues/260

#### Label Values Composite Index
* Description: We can have faster queries and new APIs if we can have a composite index for multiple index names rather than just one.
* Recommended Skills: golang, databases
* Mentor(s): Goutham V (@gouthamve), Fabian Reinartz (@fabxc)
* Issue: https://github.com/prometheus/tsdb/issues/26

Kubernetes + Prometheus ideas:

#### Kubernetes Pod Exporter
* Description: A cAdvisor replacement to collect container metrics. Would be dependant on the cri-o metrics endpoint.
* Recommended Skills: golang
* Mentor(s): Frederic Branczyk (@brancz)

#### Prometheus Metrics Server
* Description: Prometheus backed implementation of the resource metrics API in Kubernetes.
* Recommended Skills: golang
* Mentor(s): Frederic Branczyk (@brancz)

Misc. ideas:

#### Prometheus Outalator
* Description: A full-fledged outlator fully integrated with the Alertmanager. https://landing.google.com/sre/book/chapters/tracking-outages.html
* Recommended Skills: golang, javascript
* Mentor(s): Frederic Branczyk (@brancz), Brian Brazil (@brian-brazil), Richard Hartmann (@RichiH) 

### Envoy

TODO
