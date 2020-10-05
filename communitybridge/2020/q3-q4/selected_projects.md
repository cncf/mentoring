## Selected Projects

Project maintainers and mentors, please submit the selected below (under the Selected Projects section) section using the template below.

### Template

```
### CNCF Project Name
#### Title

-	Description:
-	Recommended Skills:
-	Mentor(s):
-       Mentee (Communty Bridge URL):
-	Upstream Issue (URL):
-       Community Bridge project (URL):
```

### Sample

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Mentee: Jane Doe
- Issue: https://github.com/prometheus/prometheus/issues/3416
- Community Bridge project (URL): https://people.communitybridge.org/project/9595fbe7-6a8d-43d4-aebb-a54d57f33fdd

## List of Selected Projects

### OpenTelemetry

#### OpenTelemetry C++ SDK ETW exporter

-	Description: Add exporter for ETW (Event Tracing for Windows) as one of the optional recommended exporters that languages may decide to implement as part of SDK. Initial set of languages to support: C++ and/or C#. ETW exporter allows any open source project running on Windows (e.g. Docker) to leverage OpenTelemetry C++ SDK, emitting telemetry events (traces, logs) over ETW channel. Subsequently a listener Agent may forward events to fluent, ELK stack, or other destination. For example, events may be transformed and forwarded OTLP protocol collector. Min-bar is to implement the necessary OT C++ SDK changes (C++) and a test listener (C#). Additional scope may include some concrete examples of instrumentation: Docker ETW logs driver, or an additional out-of-proc forwarder from ETW provider listener to OTLP receiver. Simple projection for node.js (console log to OT C++ SDK - ETW) may also be designed, time-permitting.
-	Recommended Skills: some C++ or C# coding experience. Windows development environment is needed.
-	Mentor(s): Max Golovanov (@maxgolov)
- Mentee: Mishal Shah (@mishal23)
-	Issue: https://github.com/open-telemetry/opentelemetry-cpp/issues/326
- Community Bridge project (URL): https://people.communitybridge.org/project/f1275c0e-7152-4e09-8d8b-6b14598afbc3

#### OpenTelemetry SDK PHP Exporter
   -   Description: Develop some of the exporters for PHP that are found in the ([Spec Compliance Matrix](https://github.com/open-telemetry/opentelemetry-specification/blob/master/spec-compliance-matrix.md#exporters)) that are not yet completed for PHP.  There are some really neat exporter implementations that would be excellent candidates for creation / improvements:
      - OTLP (priority)
      - Zipkin
      - Jaeger
      - Prometheus
- Recommended Skills: PHP
- Mentor: Bob Strecansky (@bobstrecansky)
- Mentee: Ritick Singh (@riticksingh)
- Issue: https://github.com/open-telemetry/opentelemetry-php/issues/175
- Community Bridge Project (URL): https://people.communitybridge.org/project/f1275c0e-7152-4e09-8d8b-6b14598afbc3

##### Kubernetes working group for CSI driver
-	Description: Container Storage Interface (CSI) is a standard for exposing storage systems to containerized workloads on Kubernetes. This project mainly focus on [SMB CSI driver](https://github.com/kubernetes-csi/csi-driver-smb) and [NFS CSI driver](https://github.com/kubernetes-csi/csi-driver-nfs): set up solid unit tests, test coverage data, e2e test pipeline first and then implement a few new CSI features, e.g. dynamc provisioning support, inline volume support, etc.
-	Recommended Skills: golang, Kubernetes
-	Mentor(s): Andy Zhang [@andyzhangx](https://github.com/andyzhangx)
-   Mentee: Mayank Shah (@mayankshah1607)
-	Upstream Issue (URL):
	-	https://github.com/kubernetes-csi/csi-driver-smb/issues
-	Community Bridge project (URL): https://people.communitybridge.org/project/2d438b9a-c539-46d0-9eed-c6ee4404c88a

### Prometheus

#### Add various post processing steps in query API after PromQL execution

-	Description: The results from the query/query_range are often unordered w.r.t. the label values and sample value. Also, there is no limit on how many series the endpoint can return. In this project, we want to extend those query APIs to include options for post processing the output to do the following:
  * Support nested sorting (ascending/descending) of time series based on (1) Label values (2) Sample values for /query endpoint.
  * Support limiting the number of time series returned by query/query_range endpoint.
  * If time permits, expore how we can do nested sorting of time series for query_range API.
-	Recommended Skills: Go, PromQL
-	Mentor(s): Bartek Plotka(@bwplotka), Ganesh Vernekar (@codesome)
-  Mentee (Communty Bridge URL): [Gayathri Venkatesh @GayathriVenkatesh](https://people.communitybridge.org/mentee/9bc4e5a8-41f4-4daa-9982-edaaeb8988b5,9595fbe7-6a8d-43d4-aebb-a54d57f33fdd)
-	Upstream Issue (URL):  https://github.com/prometheus/prometheus/issues/7947, https://github.com/prometheus/prometheus/issues/7948
-  Community Bridge project (URL): https://people.communitybridge.org/project/9595fbe7-6a8d-43d4-aebb-a54d57f33fdd

