CNCF + Summer of Code
=====================

The Cloud Native Computing Foundation participates in [Google Summer of Code](https://summerofcode.withgoogle.com/) (GSoC). CNCF is a great place to spend a summer learning, coding, participating and contributing. We are an exciting open source foundation with a vibrant community of projects, and we look forward to your application and your project ideas!

Organization Admins
-------------------

If you need help with anything CNCF + Summer of code related, you can file an issue or contact one of the admins below:

-	Chris Aniszczyk ([@caniszczyk](https://github.com/caniszczyk)\): https://twitter.com/cra
-	Ihor Dvoretskyi ([@idvoretskyi](https://github.com/idvoretskyi)\): https://twitter.com/idvoretskyi
-	Nikhita Raghunath ([@nikhita](https://github.com/nikhita)\): https://twitter.com/TheNikhita

Communication
-------------

Please reach out to us on the #gsoc channel on the [CNCF slack](https://slack.cncf.io/).
Please don't use DMs unless strictly necessary as doing so both has the potential of overwhelming project maintainers and others with similar questions lose the benefit of public discussion.

It's best if you use a public communication channel whenever possible; however, if you need to communicate in private, please feel free to send the admins a note via soc@cncf.io (please use the public channels for any project-related discussion).

Current Year
------------

CNCF is planning to participate in GSoC 2020. Please stay tuned before the
official announcement (Q1'2020).

Project Ideas
-------------

If you are a project maintainer and consider mentoring during the GSoC 2020 cycle, please, submit your ideas below using the [template](/PROJECT_IDEA_TEMPLATE.md).

For example:

### Prometheus (sample):

#### Refactor the APIs for better readability and less maintenance overhead

-	Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
-	Recommended Skills: golang
-	Mentor(s): Krasi Georgiev (@krasi-georgiev)
-	Issue: https://github.com/prometheus/prometheus/issues/3416

_Add your project ideas below:_

### Thanos

#### Per Series Metric Retention

-	Description: Thanos is allowing storing metrics for long, if not unlimited time. Currently however there is no fine-granular process of retaining only some portion of metrics for longer time e.g useful
aggregations), while deleting other part early on. This task is aiming to implment this missing feature in Thanos and potentially Prometheus.
-	Recommended Skills: golang, distributed systems, object storage (AWS, S3)
-	Mentor(s): Bartlomiej Plotka (@bwplotka)
-	Issue: https://github.com/thanos-io/thanos/issues/903

#### End to End Benchmarking Tests on Demand through CI

- Description: In order to increase confidence in Thanos' performance across releases and major changes, we would like to introduce a way to run reproducible e2e benchmark tests, ideally from the PR and with the use of Kubernetes. This work involves setting up Thanos scenarios and load generators that will run benchmarks for a certain period of time and output resource usage for the given Thanos version.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Giedrius Statkevičius (@GiedriusS)
- Issue: https://github.com/thanos-io/thanos/issues/1707

### TiKV

#### Support Cold/Hot Tier storage in TiKV
- Description: 
TiKV uses RocksDB as its storage layer, currently RocksDB support assigns a list of path, newer data is placed into paths specified earlier in the list while older data gradually moves to paths specified later in the list. For example we may use a 300GB fast local SSD as the first path, and a 2TB HDD disk as the second path, and an 16TB remote network disk as the last path. This will reduce the total cost, but the older data doesn’t mean it is cold data. If there is some older but frequently accessed data, it will host in block-cache normally, but the total memory is limited. If this frequently accessed data can be pulled up to the first path(the local fast ssd), it can achieve a better read performance for TiKV.
-	Recommended Skills: Rust, RocksDB
-	Mentor(s): Yi Wu (@yiwu-arbug), Wei Liu (@Little-Wallace)
-	Issue: https://github.com/tikv/tikv/issues/6507

### Versioned RawKV.

- Description: TiKV with raw-mode does not support multiple version with one key. When user migrate data from HBase to TiKV, they want to read history record and hope TiKV could delete expired key. In addition, atomic operations like incrementAndGet and checkAndPut can be introduced to ease HBase to TiKV migration. See more in  Versioned KV
- Recommended Skills: HBase or BigTable, Rust
- Mentor(s): Wei Liu (@Little-Wallace)
- Issue: https://github.com/tikv/tikv/issues/6508

### Cloud-native KV-service
- Description: Explore cloud-native design for distributed KV-service that is cost effective. Investigate using different storage backend (local/persistent SSDs, EBS, S3, etc) to store TiKV data, and their pros and cons.
- Recommended Skills:  Golang, Rust
- Mentor(s): Yi Wu (@yiwu-arbug), Wei Liu (@Little-Wallace)
- Issue: https://github.com/tikv/tikv/issues/6506

