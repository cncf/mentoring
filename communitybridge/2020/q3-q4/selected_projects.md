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

#### Keptn

##### Keptn CLI to support multiple contexts like KUBECONFIG

-	Description: Improve the Keptn CLI to make it easier for users to authenticate to a cluster by just configuring the Kubernetes context. This will enable the user to switch between multiple Keptn installations easily.
-	Recommended Skills: Golang, Kubernetes
-	Mentor(s): Jürgen Etzlstorfer ([@jetzlstorfer](https://github.com/jetzlstorfer)), Christian Kreuzberger ([@christian-kreuzberger-dtx](https://github.com/christian-kreuzberger-dtx))
- Mentee: Ankit Jain (@ankitjain28may)
-	Upstream Issue (URL): https://github.com/keptn/keptn/issues/2300
- Community Bridge project (URL): https://people.communitybridge.org/project/ba41187f-fa8d-47e1-8046-4040e5b35b73

##### Visualize remediation actions as counteractions for alerts

-	Description: Improve the existing UI by adding UI elements for existing (multi-stage) remediation actions for services that are managed by Keptn.
-	Recommended Skills: Angular
-	Mentor(s): Jürgen Etzlstorfer ([@jetzlstorfer](https://github.com/jetzlstorfer)), Johannes Bräuer ([@johannes-b](https://github.com/johannes-b)\)
- Mentee: Ayush Nawal (@ayushnawal)
-	Upstream Issue (URL): https://github.com/keptn/keptn/issues/2299
- Community Bridge project (URL): https://people.communitybridge.org/project/ba41187f-fa8d-47e1-8046-4040e5b35b73
