# CNCF + Summer of Code

The Cloud Native Computing Foundation participates in [Google Summer of Code](https://summerofcode.withgoogle.com/) (GSoC). CNCF is a great place to spend a summer learning, coding, participating and contributing. We are an exciting open source foundation with a vibrant community of projects, and we look forward to your application and your project ideas!

## Organization Admins

If you need help with anything CNCF + Summer of code related, you can file an issue or contact one of the admins below:

* Chris Aniszczyk ([@caniszczyk](https://github.com/caniszczyk)): https://twitter.com/cra
* Ihor Dvoretskyi ([@idvoretskyi](https://github.com/idvoretskyi)): https://twitter.com/idvoretskyi
* Nikhita Raghunath ([@nikhita](https://github.com/nikhita)): https://twitter.com/TheNikhita

## Communication

It's best if you use a public communication channel whenever possible; however, if you need to communicate in private, please feel free to send the admins a note via soc@cncf.io (please use the public channels for any project-related discussion).

You can join the CNCF slack [here](https://slack.cncf.io/).

## Current Year

CNCF is applying as a mentoring organization for Google Summer of Code 2019.

### Timeline

Please, check out the official [GSoC program timeline for 2019](https://developers.google.com/open-source/gsoc/timeline).

### Students

The list of official project ideas will be published below.

You can also take a look at the list of project ideas published for GSoC [2017](/2017.md) and [2018](/2018.md).

### Mentors

Add your ideas to the list below.

## Project Ideas

Please, submit your ideas below using the [template](/PROJECT_IDEA_TEMPLATE.md). **IMPORTANT**: The deadline to submit a project idea is February 6 20:00 UTC.

### Kubernetes

Please visit the [Kubernetes GSoC page](https://git.k8s.io/community/mentoring/google-summer-of-code.md) for general information.
For any questions or comments, please reach out to us on the #gsoc-apps channel on the [Kubernetes slack](http://slack.k8s.io/).

### Prometheus

Prometheus is an open-source systems monitoring and alerting toolkit: https://prometheus.io/

Prometheus ideas:

#### Benchmarks for TSDB
* Description: The TSDB module used in Prometheus  doesn’t have proper benchmarks yet, which means we cannot see the potential impact of the changes we are introducing. The idea is to build some automated benchmarking which can be added to the CI pipeline.
* Recommended Skills: CI, Golang, Kubernetes
* Mentor(s): Krasi Georgiev (@krasi-georgiev)
* Issue: https://github.com/prometheus/tsdb/issues/235

#### Continue the work on Prombench
* Description: Since we finished Prombench there have been few requests to add scalability tests, add more tests with the race enabled and there are few pending issues to be fixed.
* Recommended Skills: CI, Golang, Kubernetes, Grafana
* Mentor(s): Krasi Georgiev (@krasi-georgiev)
* Issue: https://github.com/prometheus/prombench/issues - the High priority ones should be addressed first.
