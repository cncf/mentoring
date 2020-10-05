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

#### Thanos

##### Receive: Hashring Update Improvements

- Description: urrently, any change to the hashring configuration file will trigger all Thanos Receive nodes to flush their multi-TSDBs, causing them to enter an unready state until the flush is complete. This unavailability during a flush allows for a clear state transition, however it can result in downtimes on the order of five minutes for every configuration change. We propose modifying how the Thanos Receive component re-configures itself after the hashring configuration file has changed so that the system experiences no downtime.
- Recommended Skills: Thanos, Timeseries database, Golang
- Mentor(s): Lucas Servén Marín(@squat), Frederic Branczyk(@brancz)
- Mentee: [T.S.S. Chandana @Chans321](https://people.communitybridge.org/mentee/402c80c6-c37d-4575-8120-41849ada956e,f51284ab-f652-47b1-9819-cd4135e75c00)
- Issue: https://github.com/thanos-io/thanos/issues/3141
- Community Bridge project (URL): https://people.communitybridge.org/project/f51284ab-f652-47b1-9819-cd4135e75c00

##### UI: Enhancements

- Description: The Thanos project has recently migrated its UI to one built on re-usable and shareable components written in React, with the goal of fostering collaboration with the broader Prometheus community. As part of this proposal, we would like create further UI components like status, configuration and discovery pages for better debuggability as well as basic benchmarking and regressions test. Additionally the plan is to collaborate with the Prometheus community to continue building a shared UI component library and to contribute upstream to Prometheus so that it can leverage these components in its UI.
- Recommended Skills: React, JavaScript, Golang
- Mentor(s): Kemal Akkoyun(@kakkoyun), Prem Saraswat(@prmsrswt)
- Mentee: [Raphael Noriode @Oghenebrume50](https://people.communitybridge.org/mentee/194d1349-15b0-41e7-bb4e-db19021765da,f51284ab-f652-47b1-9819-cd4135e75c00)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3142
- Community Bridge project (URL): https://people.communitybridge.org/project/f51284ab-f652-47b1-9819-cd4135e75c00

##### UI: Extending BlockViewer

- Description: Thanos BlockViewer UI proven to be essential part of debuggability story for the Thanos proejct. It allows to see exact state of data in Object Storage in an provider agnostic way. This project is about extending this UI with richer features, context and actions to increase observability and control. As part of this proposal, we would like to also contribute the same BlockViewer to Prometheus community to make sure it gives the same value for Prometheus project.
- Recommended Skills: React, JavaScript, Golang, ObjectStorage
- Mentor(s): Prem Saraswat(@prmsrswt), Bartek Plotka(@bwplotka)
- Mentee: [Kunal Kushwaha @kunal-kushwaha](https://people.communitybridge.org/mentee/13a85bc2-0972-4f90-9f91-5d34bee5c15b,9595fbe7-6a8d-43d4-aebb-a54d57f33fdd)
- Upstream Issue (URL): https://github.com/thanos-io/thanos/issues/3112
- Community Bridge project (URL): https://people.communitybridge.org/project/f51284ab-f652-47b1-9819-cd4135e75c00
