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

* [Armada](#armada)
* [CoreDNS](#coredns)
* [Jaeger](#jaeger)
* [Knative](#knative)
* [Kubescape](#kubescape)
* [Kyverno](#kyverno)
* [Notary](#notary)
* [Meshery](#meshery)
* [ORAS](#oras)
* [Tetragon](#tetragon)
* [WasmEdge](#wasmedge)
* [Konveyor](#konveyor)
* [Strimzi](#strimzi)
* [Thanos](#thanos)
* [KubeArmor](#kubearmor)
* [LitmusChaos](#litmuschaos)
* [Vitess](#vitess)
* [KubeVela](#kubevela)
* [Service Mesh Performance](#service-mesh-performance)


### Kyverno

#### Kuttl tests for the Kyverno policy library

- Description: Kyverno has the largest policy library of any policy tool for Kubernetes. Ensuring that policies work effectively across releases of both Kyverno and Kubernetes is important for users. Additionally, these tests can be leveraged in the CI processes ensuring that changes to the Kyverno codebase do not cause regressions which impact areas relevant to these policies. In this mentorship, you will learn how the `kuttl` tool works and write test cases using `kuttl` to cover all policies in the official Kyverno policy library.
- Expected outcome: All policies have corresponding tests using the `kuttl` tool.
- Recommended Skills: Kubernetes, Kyverno
- Mentor(s): Chip Zoller @chipzoller (chipzoller AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/policies/issues/546

#### Sigstore Cosign Updates

- Description: Kyverno supports image signature and attestation verification using the Sigstore Cosign tooling. Re-implement the Kyverno Sigstore Cosign module to use OCI artifacts and references and remove dependencies to the Cosign CLI packages.
- Expected outcome: Kyverno can use OCI artifacts to verify container images that are in Cosign format.
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s):
  - Shuting Zhao @realshuting (shuting AT nirmata DOT com)
  - Vishal Choudhary @Vishal-Chdhry (contactvishaltech AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/7087

#### ValidatingAdmissionPolicy support, Phase 2

- Description: Kyverno is working towards support of ValidatingAdmissionPolicy (CEL admission). Extend this support for other items such as CLI, reporting, and auto-generating ValidatingAdmissionPolicies from Kyverno policies.
- Expected outcome: Extended support and integration with ValidatingAdmissionPolicies
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s):
  - Jim Bugwadia @jimbugwadia (jim AT nirmata DOT com)
  - Mariam Fahmy @MariamFahmy98 (mariamfahmy66 AT gmail DOT com)
- Upstream Issue (URL): https://github.com/kyverno/kyverno/issues/7088

#### Cleanup Policies, Phase 2

- Description: Kyverno has a policy type called Cleanup Policies which allow removal of resources defined in a policy. In this second phase, we would like to extend this ability to cleanup resources based upon defining a label for even more fine-grained control.
- Expected outcome: Extend Cleanup Policies feature by allowing per-resource removal based upon label assignment
- Recommended Skills: Golang, Kubernetes, Kyverno
- Mentor(s): Charles-Edouard Brétéché @eddycharly (charles.edouard AT nirmata DOT com)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/5748
  - https://github.com/kyverno/KDP/blob/main/proposals/cleanup.md#proposal

### Notary

#### Design and implement the new Notary website

- Description: Design the new Notary website using the Figma tool and develop it based on the design layout. We redesigned the Notary website and finished the first phase development work with CNCF employee @thisisobate in [#PR 139](https://github.com/notaryproject/notaryproject.dev/pull/139). This project is to continue to design and implement the new Notary website and ensure deliver a developer-friendly experience.
- Expected Outcome: 
   - Design and implement the Adopters page
   - Redesign a Community page
   - Improve the landing page design; add an installation section with a terminal effect design
   - Support mobile responsive design
   - Add a pop-up window on the landing page to tell users how to join the community
   - Add Algolia search for the website
   - Design and implement a video page to list Youtube videos
   - Refine the content on the website
   - Add Broken link check to Netlify CI
- Recommended Skills: Figma design, HTML, CSS, JavaScript, Hugo
- Mentor(s):  Feynman Zhou (@FeynmanZhou , feynmanzhou@microsoft.com)
- Upstream Issue (URL): https://github.com/notaryproject/notaryproject.dev/issues/194

#### Develop content for Notary documentation and blogs

- Description: Develop content for Notary documentation and write blog posts to educate users about the Notary use cases. Write user guides, contributing guides, and developer guides for every new Notary release and keep those content up-to-date.
- Expected Outcome: 
   - Write user guides with end-to-end scenarios based on given doc structure and requirement
   - Write contributing guides and developer guides, ensure new developers can easily build and start contributing to Notary subprojects 
   - Write blog posts to educate users to use Notation with cloud-native ecosystem tools
- Recommended Skills: OCI, Docker, Kubernetes, Notary, Git, Markdown, Technical writing experience
- Mentor(s): Mentor(s):  Yi Zha, @yizha1 (yizha1@microsoft.com)
- Upstream Issue (URL): https://github.com/notaryproject/notaryproject.dev/issues/195

### Meshery

#### Meshery UI Permissions Framework

- Description: Meshery UI lacks a permissions framework. The existing internal implementation is simple, fragile and must be completely rewritten. The approach to implemention a permmissions framework includes using React.js and CASL.js. Meshery UI's approach needs to be extensible given that this framework will be an extension point for Remote Providers to supply their own permissions.
- Expected outcome: Definition of permissions and their enforcement in Meshery with an aim for deep granularity and extensibility with each user interface input component carrying a unique permission key id. Each key is then put into a group of keys in a keychain, keychains assigned to user roles, in turn, roles assigned to users. With users having the ability to create own custom roles, the framework will be dynamic based on the associated server-side permissions for the currently auth’ed user.
- Recommended Skills: React.js, CASL.js
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com), Abhishek Kumar @Abhishek-kumar09 (abhimait1909@gmail.com)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/7436, https://github.com/meshery/meshery/issues/7382

#### OPA policy evaluation in-browser using WebAssembly and Rego

- Description: Meshery's highly dynamic infrastructure configuration capabilities require real-time evaluation of complex policies. Policies of various types and with a high number of parameters need to be evaluted client-side. With policies expressed in Rego, the goal of this project is to incorporate use of the https://github.com/open-policy-agent/golang-opa-wasm project into Meshery UI.
- Expected outcome: a powerful real-time multi-user collaboration experience.
- Recommended Skills: Golang, Open Policy Agent, WASM
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com), Abhishek Kumar @Abhishek-kumar09 (abhimait1909@gmail.com)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/7019

#### Adopt OCI as the packaging and distribution format for Meshery MeshModels

- Description: Meshery MeshModels represent a schema-based description of cloud native infratructure. MeshModels need to be portable between Meshery deployments as well as easily versionable in external repositories.
- Expected outcome:
  - Meshery clients (mesheryctl and Meshery UI) should be able to import/export MeshModels as OCI images.
  - Meshery clients (mesheryctl and Meshery UI) should be able to push/pull from OCI-compatible registries.
  - Stretch Goal: OCI image signing; Verify the authenticity of MeshModels using [cosign](https://github.com/sigstore/cosign).
  - Target registries: Meshery Catalog (https://meshery.io/catalog), Artifact Hub.
- Recommended Skills: Reactjs, Golang, GraphQL
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com)
- Upstream Issue (URL): https://github.com/meshery/meshery/issues/6447

### ORAS

#### Design and implement Artifact Explore web portal

- Description: This project goal is to improve the efficiency of the image developers and users through the artifact explorer tool with ORAS under the hood. This tool helps users to explore and search the content of an artifact or a registry. This doc is to gather ideas for early brainstorming purposes. For users, this tool reduces CLI learning cost and improve efficiency for developers. They don’t need to memorize and type the CLI commands to explore the content of an OCI artifact and registry.

- Expected Outcome:
   - Provides a web portal to view the content of OCI artifacts from any public registries
   - Users can drill down into the detailed content of an image manifest or a layer
   - Users can view the artifact reference graph from the web portal
   - Users can view and download the supply chain artifacts like the signature, SBOM, attestation 
   - Provides search capabilities to allow users to search container images or OCI artifacts on a central web portal. We can combine it with Artifact [Search API capabilities](https://docs.google.com/document/d/1rcQROZP31q7BOjoZ977Ok7pt28z_UXfW0vAK3xC0wdI/edit#heading=h.rx512bvufn5q).
   - Explore the image’s file system of layer (tentative)
   
- Recommended Skills: Figma design, HTML, CSS, JavaScript, Hugo, Docker
- Mentor(s):  Feynman Zhou (@FeynmanZhou , feynmanzhou@microsoft.com), Billy Zha (@qweeah , jinzha1@microsoft.com) 
- Upstream issue: https://github.com/oras-project/oras-www/issues/158

#### Refactor the ORAS documentation structure and write new user guides

- Description: Refactor the ORAS documentation structure and write new user guides based on the latest version of ORAS. The detailed ORAS documentation structure and content should be refactored according to the proposal in the [upstream issue](https://github.com/oras-project/oras-www/issues/65). 
- Expected Outcome: Deliver a developer-friendly documentation structure for ORAS and write new user guides according to the proposed documentation structure. Publish all content at https://oras.land/
- Recommended Skills: OCI, Docker, ORAS, Markdown
- Mentor(s): Mentor(s): Terry Howe (@TerryHowe , terrylhowe@gmail.com), Asmit Malakannawar (@asmitbm , asmitbm2952002@gmail.com), Feynman Zhou (@FeynmanZhou , feynmanzhou@microsoft.com)
- Upstream issue: https://github.com/oras-project/oras-www/issues/65

### Tetragon

#### Implement a Kubernetes operator to maintain pod IP to pod metadata mapping

- Description:

  Tetragon currently depends on Cilium to look up pod information by their IP
  addresses. The goal of this project is to remove this Cilium dependency by
  implementing a Kubernetes operator that provides this information. The idea
  is for this operator to maintain a new custom resource that provide a mapping
  from IPs to the small subset of pod information that Tetragon needs.

- Expected Outcome:
  - A Kubernetes operator that maintains IP to pod info mapping used by Tetragon.
  - The operator should be installable via Helm as a Kubernetes deployment.
  - Replace Cilium dependency in the code base with this new custom resource.
  - Some performance benchmarks in a high pod churn environment.
- Recommended Skills:
  - Go
  - Kubernetes
- Mentor(s):
  - Kornilios Kourtis (@kkourt, kornilios@isovalent.com)
  - Michi Mutsuzaki (@michi-covalent, michi@isovalent.com)
- Upstream Issue:
  - https://github.com/cilium/tetragon/issues/794

### WasmEdge

#### Serialization Completion

- Description: WasmEdge is a WebAssembly runtime in both interpreter and ahead-of-time mode. However, WasmEdge only supports the binary format for the input WebAssembly file. To help the text format WebAssembly loader feature in the future, the implementation of serializing a WebAssembly module is necessary. In this mentorship, we hope the mentee should complete the serialization functions already in [the `dev/serialize` branch](https://github.com/WasmEdge/WasmEdge/tree/dev/serialize) of the `WasmEdge` repo.
- Expected outcome: Complete the serialization functions of WebAssembly modules, such as the element segment and data segment encoding. Complete the WebAssembly instructions encoding. Generate the unit test data and pass the unit tests. >80% of code coverage for serialization.
- Recommended Skills: C/C++, WebAssembly
- Mentor(s): Yi-Ying He @q82419 (yiying at secondstate dot io), Hung-Ying Tai @hydai (hydai at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2262

#### `zlib` Plugin Support

- Description: The zlib is required for compiling and running many existing C / C++ / Rust apps in Wasm. Most noticeably, it is [needed in the Python port to Wasm](https://github.com/python/cpython/issues/93819). The VMWare Wasm Labs team is using a zlib port from [Singlestore](https://github.com/singlestore-labs/python-wasi) in [their Python Wasm runtime](https://wasmlabs.dev/articles/python-wasm32-wasi/). In WasmEdge, we could support the zlib host functions through our [plugin system](https://wasmedge.org/book/en/plugin.html). This way, any existing zlib apps can be compiled to Wasm and runs inside WasmEdge.
- Expected outcome: Create a new [WasmEdge plugin](https://wasmedge.org/book/en/plugin.html) that exports all public functions in `zlib`. Implement SDK (in C/Rust) that uses the C ABI to generate corresponding headers for the above plugin. Generate the unit tests and pass the unit tests. >80% of code coverage for verification.
- Recommended Skills: C/C++, Rust, WebAssembly
- Mentor(s): Yi-Ying He @q82419 (yiying at secondstate dot io), Hung-Ying Tai @hydai (hydai at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2244

#### Support Tensorflow and PyTorch in WasmEdge’s Python runtime

- Description: In this project, you will incorporate WasmEdge’s NN (Neural Network) extensions into the Python interpreter. WasmEdge provides C and Rust APIs for guest applications to access host functions in the underlying Tensorflow and PyTorch libraries. You will make those functions accessible from the CPython-based interpreter as Python wrappers. This way, Python applications can do lightweight AI inference on the WasmEdge container.
- Expected outcome:
  * Investigate and list all C-based host function APIs for Tensorflow and PyTorch inference in WasmEdge NN.
  * Create CPython wrappers for those host functions.
  * Create high-level Python wrapper functions that are ergonomic for Python developers.
  * Create CI and demo apps to validate the Python wrapper API.
  * Create detailed documentation and tutorials.
- Recommended Skills: Proficient in C programming including creating dynamic libraries; Proficient in Python and machine learning programming. Basic understanding of WebAssembly and WasmEdge.
- Mentor(s): Michael Yuan @juntao (michael at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2471

#### A stream log processing framework for WasmEdge

- Description: In this project, we aim to build a Rust-based log processing framework. Applications built on this framework will be compiled into WebAssembly and run in WasmEdge containers side by side with Linux containers and apps. The WasmEdge app collects logs from other containerized apps and then sends them to a streaming database or processing pipeline.
- Expected outcome:
  * Create a Rust framework with 3 traits similar to the [`Transformer`](https://github.com/second-state/MEGA/blob/main/mega_etl/src/lib.rs#L99) trait in the [MEGA framework](https://github.com/second-state/MEGA).
    * The `Collector` trait abstracts operations needed for a log collector.
    * The `Transformer` trait abstracts the transformation algorithms that can be applied to the logs.
    * The `Destination` trait abstracts operations needed to send transformed to a streaming data pipeline or database.
  * Implement at least two `Collector`s. One for MySQL database binlog and the other for a generic log file in a Linux container in the same Kubernetes pod.
  * Implement at least two `Transformer` algorithms supported by [FileBeat](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-overview.html).
  * Implement at least three `Destination`s. One for a Kafka queue, one for a Redis database, and the other for ElasticSearch.
  * Provide CI and demo test cases.
  * Provide documentation and tutorials.
- Recommended Skills: Proficient in the Rust programming language; Familiarity with MySQL, Kafka, ElasticSearch, and FileBeat; Familiarity with Kubernetes and related container management tools; Basic understanding of WebAssembly and WasmEdge
- Mentor(s): Michael Yuan @juntao (michael at secondstate dot io)
- Upstream Issue: https://github.com/WasmEdge/WasmEdge/issues/2470

### Konveyor

#### Add Integration test suite and components testing to Konveyor

- Description:
The Konveyor project helps modernize applications by providing open source tools to rehost, replatform, and refactor applications to Kubernetes and cloud-native technologies.We’re looking for help on building integration tests on application level as well as work on missing parts of Konveyor component tests.There is open testing work to better applications analysis, tasks coverage, more detailed Hub API tests and Hub integration with addons. All of those use the Hub API that is covered with basic tests already. Based on existing Hub API tests, it is expected to continue work to cover more Konveyor functionality with tests.
The development environment is based on golang and Kubernetes. A minikube instance will work well for local development on Linux or Mac systems.
- Expected Outcome:
  - Integration test suite and components testing added to existing Konveyor upstream automated test suite
- Recommended Skills:
  - Go
  - Basic software development skills (command line, git)
- Mentor(s):
  - Marek Aufart (@aufi, maufart@redhat.com)
  - David Zager (@djzager, dzager@redhat.com)
- Upstream Issue:
  - https://github.com/konveyor/tackle2-operator/issues/220


### Strimzi

#### Proof of Concept of an MQTT to Apache Kafka bridge for producing messages

- Description: A really common use case we have been seeing is about enabling an IoT scenario with MQTT based devices and using an Apache Kafka cluster as the events and storage platform running on Kubernetes via Strimzi. In order to do that, there is the need to map the MQTT protocol to the custom Apache Kafka one and bridge from one to the other. This project idea is about designing such a mapping and developing a pure [Netty](https://github.com/netty/netty/tree/4.1/codec-mqtt/src/main/java/io/netty/handler/codec/mqtt) based MQTT server component (not a full MQTT broker) able to accept MQTT client connections and handling the corresponding communication based on the [MQTT 3.1.1 specification](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html). Finally, developing the Kafka producer part to get messages from MQTT clients and sending them to an Apache Kafka cluster.
- Expected outcome: POC source code for an MQTT to Apache Kafka bridge
- Recommended Skills:
  - Java
  - Apache Kafka (not mandatory but to be learned)
  - MQTT protocol (not mandatory but to be learned)
- Mentor(s):
  - Paolo Patierno (@ppatierno, ppatiern@redhat.com)
  - Kyle Liberti (@kyguy, kliberti@redhat.com)
- Upstream Issue (URL): https://github.com/strimzi/strimzi-kafka-operator/issues/8030

### Thanos

#### Continuation of add query observability for the new engine

- Description: We have added solid foundation for query observability in the new engine during the previous LFX mentorship term. Let's continue the awesome work by Pradyumna by implementing other features.
- Expected outcome: other query observability visualizations are implemented; extra observability data has been added
- Recommended skills: Golang, React
- Mentor(s): @saswatamcode, @GiedriusS
- Difficulty: Medium
- Upstream issue (URL): https://github.com/thanos-community/promql-engine/issues/106

### KubeArmor

#### Implement DNS visibility with KubeArmor

* Description: The project aims to provide better visibility into the domains accessed from pods, with a focus on identifying and containing attacks that use techniques like Domain Generation Algorithms (DGA) to connect to remote command and control (C&C) servers. By gathering information on which domains are being accessed and applying network rules to allow only specific domains, the project aims to empower security operations (secops) teams to better prevent and respond to such attacks.
* Expected Outcome:  
  * KubeArmor to emit telemetry events for any DNS lookups from any pods.
  * Ability to see egress DNS lookups done from any pods using karmor summary.
  * Documentation
* Recommended Skills: Go, K8s, familiarity with network security and a basic understanding of KubeArmor is a plus.
* Mentors:
  * Anurag Kumar (@kranurag7, contact.anurag7@gmail.com)
  * Barun Acharya (@daemon1024, barun1024@gmail.com)
  * Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com)
* Upstream Issue: [Issue #1219](https://github.com/kubearmor/KubeArmor/issues/1219)

#### Manage KubeArmor policies using OCI registry and use OCI hooks for container events

* Description: The feature aims to manage KubeArmor policies using OCI registry and use OCI hooks to get container events. Currently, KubeArmor uses a UNIX domain socket file to watch for container events, but the proposed feature aims to use OCI hooks instead.
* Expected Outcome: To provide a more secure and efficient way of managing KubeArmor policies by leveraging OCI registry. Storing policies in OCI registries will make it easier to distribute policies across multiple clusters and environments. Using OCI hooks will also reduce the overhead of monitoring container events and make it easier to integrate KubeArmor with other container runtimes.
* Recommended Skills: Go, K8s, understanding of the Open Container Initiative (OCI) and container runtimes.
* Mentors:
  * Anurag Kumar (@kranurag7, contact.anurag7@gmail.com)
  * Barun Acharya (@daemon1024, barun1024@gmail.com)
  * Ankur Kothiwal (@Ankurk99, ankur.kothiwal99@gmail.com)
* Upstream Issue: [Issue #1130](https://github.com/kubearmor/KubeArmor/issues/1130)


### LitmusChaos

#### Migrate chaos workflow api from graphql to rest and improve chaos center code base
- Description: This project aims to improve the user experience with the chaos workflow GraphQL APIs by enhancing their functionality and addressing security vulnerabilities. The project includes converting the user-facing chaos workflow and workflow run APIs, refactoring the chaos-workflow package into interfaces and splitting it into separate packages, and resolving security vulnerabilities and golangci-lint issues in the chaos-center backend components. 
- Expected outcome: The outcome of this project will be improved functionality, security, and usability of the chaos workflow GraphQL APIs and chaos-center backend components through the implementation of new features, refactoring of existing code, and addressing of security vulnerabilities.
- Recommended Skills:
  - Golang
  - Kubernetes
  - Backend APIs Development
- Mentor(s):
  - Amit Kumar Das (@amityt, amit.das@harness.io)
  - Arkajyoti Mukherjee (@arkajyotiMukherjee, arkajyoti.mukherjee@harness.io)
- Upstream Issue (URL): https://github.com/litmuschaos/litmus/issues/3970

#### Enhance/Upgrade chaos operator and chaos exporter module
- Description: LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. This project idea involves upgrading the Chaos Operator and Chaos Exporter repositories by updating their dependencies, addressing security vulnerabilities, and adding new functionality. Specifically, the project aims to upgrade the operator-sdk and Prometheus exporter versions, add new Prometheus metrics to the Chaos Exporter, and fix security vulnerabilities pointed out by trivy and golangci-lint. Furthermore, the project seeks to add unit test cases to both repositories to ensure that their functionality is robust and reliable. Overall, this project aims to improve the stability, security, and functionality of the Chaos Operator and Chaos Exporter repositories, making them better suited for use in production environments.
- Expected outcome: The outcome of this project will be improved stability, security, and functionality of the Chaos Operator and Chaos Exporter modules through the upgrade of dependencies, addition of new metrics, and implementation of unit tests.
- Recommended Skills:
  - Golang
  - Kubernetes and k8s golang client
  - Prometheus
- Mentor(s):
  - Shubham Chaudhary (@ispeakc0de, shubham.chaudhary@harness.io)
  - Vansh Bhatia (@vanshBhatia-A4k9, vansh.bhatia@harness.io)
- Upstream Issue (URL): https://github.com/litmuschaos/litmus/issues/3969

### Service Mesh Performance

#### Service Mesh Performance IDE Plugin

- Description: The objective of this project is to develop IDE plugins that can enhance the developer experience while working with Service Mesh Performance Performance Profiles. The proposed plugins will leverage technologies such as golang and cuelang to provide features such as syntax highlighting, auto-completion, validation, and rendering previews for Service Mesh Performance profile and model definitions.
- Expected outcome:
- 1. Release VS Code Extension
- 2. Syntax Highlighting and Auto-completion: The plugin can fetch SMP Model definitions such as cloud-native components and their relationships. This information can be used to provide syntax highlighting and auto-completion for these definitions in the JSON files, making it easier for developers to write error-free code.
- 3. Validation and Reference: For Meshery MeshModel definitions such as cloud-native components and their relationships, the plugin can use the CUE language to provide validation for the CUE input and preview the rendering result. The plugin can also fetch the SMP Model schemas and display them in the IDE for reference.
- Recommended Skills: Cuelang
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com), Xin Huang @gyohuangxin (xin1.huang@intel.com)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/379

### KubeVela

#### Expand multiple database drivers for the API server
- Description: Now KubeVela's VelaUX uses two kinds of Database to store metadata: Kubernetes ConfigMap and MongoDB. As more users are expecting using different kinds of database. We proposing to expanding multiple database drivers for the VelaUX API server. 
- Expected Outcome: The outcome of this project will be expand two more database driver for KubeVela VelaUX API server:
  - Mysql
  - PostgreSQL
- Recommended Skills:
  - Golang
  - Kubernetes
  - Backend APIs Development
- Mentor(s):
  - Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com)
  - Zeng Qingguo (@barnettZQG, barnett.zqg@gmail.com)
- Upstream Issue (URL): https://github.com/kubevela/kubevela/issues/5426

### CNCF Landscape 

#### UX / UI Improvements

- Description: With your collaboration, we aim to analyze findings and meaningful information (quantitative and qualitative data) and run a series of ideation rounds. We will create user personas, empathy maps, and other UX deliverables that will be the foundation to lay out a set of solutions to improve the current way to search, navigate and find relevant information on the Landscape.
- Expected Outcome: Creation user personas, empathy maps, and other UX deliverables.
- Recommended Skills: UX reaserach, desighn thinking, Figma and prototyping. 
- Mentors: Andrea Velázquez andrea@buoyant.io, Nate W. @nate-double-u natew@cncf.io, Chris Aniszczyk @caniszczyk caniszczyk@linuxfoundation.org
- Upstream Issue: https://github.com/cncf/landscape/issues/2467


### Vitess
#### Rework the frontend UI of Vitess’ benchmarking tools

- Description: Vitess uses a couple of tools to benchmark its codebase and to make sure that new code doesn’t introduce performance regressions. These tools are: arewefastyet and the VReplication Benchmarking Framework. We currently have an old frontend UI that serves arewefastyet. However, this UI is slow, not optimized and not easily extensible. It uses the built-in Golang template system to serve pages. We would like to create a common frontend UI that will be used by both benchmarking tools and that will replace the current arewefastyet’s UI. The mentee will have the responsibility of creating the UI using (most likely) React/Vite on Vercel. The frontend component will connect to our already-existing backend components: a MySQL database and arewefastyet’s REST API.
- Expected Outcome: The expected outcome is to have a working frontend UI that integrates well with our different backends (databases and benchmarking tools’ APIs).
	
- Recommended Skills: React, Vercel, Vite, REST API, (Optional writing APIs in Golang)

- Mentor(s):
  - Florent Poinsard @fouioui
  - Rohit Nayak @rohit-nayak-ps

- Upstream Issue (URL): https://github.com/vitessio/arewefastyet/issues/328 


---
