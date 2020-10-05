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

### Chaos Mesh

#### Create a debug information collector for Chaos Mesh

-	Description: Create a diagnotic info collector for Chaos Mesh to collect debugging info of a specific chaos experiment, covering chaos-daemon log, tc rules, iptables rules, etc.
-	Recommended Skills: Chaos Mesh, Kubernetes, golang
-	Mentor(s): Keao Yang([@YangKeao](https://github.com/YangKeao)), Cwen Yin([@cwen0](https://github.com/cwen0)\)
-  Mentee (Communty Bridge URL): [Shuyang Wu](https://people.communitybridge.org/mentee/3a7e3c44-6a0e-4be1-a722-5176d97569ab,12a8bfec-ba3f-496e-bc26-118e9f5eebe6)
-	Upstream Issue (URL): https://github.com/chaos-mesh/chaos-mesh/issues/694
-  Community Bridge Project (URL): https://people.communitybridge.org/project/12a8bfec-ba3f-496e-bc26-118e9f5eebe6

#### Support chaos-daemon work independently on a non-k8s node.

-	Description: At present, chaos-daemon can only be run as a daemonset service in the Kubernetes environment, but some users want to inject faults into Kubernetes cluster itself, and they cannot use Chaos Mesh to do this. There are also some users who are unable to use Chaos Mesh because their applications are not deployed in the Kubernetes environment. So we need to make the chaos-daemon component run on non-k8s nodes alone, and inject faults directly into this node to solve the problems mentioned above.
-	Recommended Skills: Chaos Mesh, Kubernetes, golang
-	Mentor(s): Keao Yang([@YangKeao](https://github.com/YangKeao)), Cwen Yin([@cwen0](https://github.com/cwen0)\)
-  Mentee (Communty Bridge URL): [Manish Dangi](https://people.communitybridge.org/mentee/4778882c-f043-4fc1-a567-dc5e7a4437ed,12a8bfec-ba3f-496e-bc26-118e9f5eebe6)
-	Upstream Issue (URL): https://github.com/chaos-mesh/chaos-mesh/issues/888
-  Community Bridge Project (URL): https://people.communitybridge.org/project/12a8bfec-ba3f-496e-bc26-118e9f5eebe6
