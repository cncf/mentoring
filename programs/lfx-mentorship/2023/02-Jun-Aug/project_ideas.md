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

### Jaeger

#### Upgrade Jaeger's internal telemtery to OpenTelemetry

- Description: historically, the Jaeger backend used the OpenTracing API, with Jaeger's own Go SDK `jaeger-client-go`, for instrumenting its own internals for distributed tracing. Since Jaeger's SDKs have been deprecated, we want to upgrade the Jaeger backend to use the OpenTelemetry tracing API and SDK directly.
- Expected Outcome:
  - Replace the use of OpenTracing API with OpenTelemetry
  - Remove `jaeger-client-go` and `jaeger-lib` as dependencies
  - Remove `opentracing-go` and `opentracing-contrib/*` as dependencies
  - Switch to standard instrumentation libraries where available (e.g. for HTTP, gRPC)
  - Rethink/rework `crossdock` integration tests to test end-to-end flow with OpenTelemetry data
  - Publish a blog post on medium.com/jaegertracing documenting the experience
- Recommended Skills: Go
- Mentor(s): Yuri Shkuro (@yurishkuro, github@ysh.us)
- Upstream Issue: https://github.com/jaegertracing/jaeger/issues/3381

### Unikraft

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s): 
- Upstream Issue: 


### Expanding the Unikraft Software Support Ecosystem

- Description: One of the weak points of most unikernel projects has always been application support, often requiring that applications be ported to the target unikernel OS.
With Unikraft we have been making a strong push towards POSIX compatibility so that applications can run unmodified on Unikraft. This project focuses on expanding Unikraft's software support ecosystem by.
- Expected outcome:
  - look at the state of Musl integration and analyze to what extent unmodified application can be successfully linked and run with Unikraft
  - conduct an equivalent analysis for binary compatibility mode
  - implement or extend syscalls
- Recommended Skills: C, operating systems
- Mentor(s): Simon Kuenzer (@skuenzer, simon@unikraft.io), Răzvan Deaconescu (@razvand, razvand@unikraft.io), Ștefan Jumărea (@StefanJum, stefanjumarea02@gmail.com)
- Upstream Issue: https://github.com/orgs/unikraft/projects/31

### Software Quality Assurance of Unikraft Codebase

- Description: During its 5 years of existence, Unikraft, now at version 0.12, has grown in features, application support and codebase.
  As it matures, a high quality of the code and robust behavior are a must to provide a stable solution for its user base.
  The aim of this project is to assist in the software quality assurance of the Unikraft codebase.
- Expected outcome:
  - The use of the [`uktest` framework](https://github.com/unikraft/unikraft/tree/staging/lib/uktest) to create unit tests for [internal libraries](https://github.com/unikraft/unikraft/tree/staging/lib/) and [external libraries](https://github.com/search?q=topic%3Alibrary+org%3Aunikraft+fork%3Atrue&type=repositories).
    Not many libraries have unit tests, those that do are mostly exceptions.
    This will directly impact the stability of the code base and allow quick validation of new features that may break existing functionality.
  - Inclusion of static and dynamic analysis tools that highlight potential spots of faulty or undefined behavior.
  - The use of compiler builtins and compiler flags providing constraints on the code to increase its resilience to faulty behavior.
  - Augmenting the [CI/CD system used by Unikraft](builds.unikraft.io/) (based on [Concourse](https://concourse-ci.org/)) to feature automatic testing, validation and vetting of contributions to Unikraft repositories: core, libraries, applications.
    Potential items are:
    - handling running of unikernels instead of simple builds
    - static analysis of images to be delivered as reports to GitHub pull requests
    - regression checks on performance (delivered as % change from the current upstream version)
- Recommended Skills: C, Python
- Mentor(s): Răzvan Deaconescu (@razvand, razvan@unikraft.io), Ștefan Jumărea (@StefanJum, stefanjumarea02@gmail.com)
- Upstream Issue: https://github.com/unikraft/unikraft/issues/580, 

### Build-once, Run Anything: Leveraging Unikraft to Run Any Linux Application

#### Description

- Description: Towards easing the use of Unikraft and leveling-up the user experience of Unikraft, this project aims to enhance [Unikraft's CLI companion tool KraftKit](https://kraftkit.sh) to use unikernels via the use of the [Unikraft ELF loader](https://github.com/unikraft/app-elfloader).
  Kraftkit is the main entry point into the Unikraft world and has been written from scratch in Go and released in December 2022 to replace the now-deprecated version built in Python (known as [`pykraft`](https://github.com/unikraft/pykraft)).
  This re-implementation has already eased many previous pains, including enabling faster integration into the wider Cloud Native ecosystem, which Unikraft is targeted to the ELF loader
unikernel.
- Expected outcomes:
  - Leverage the [ELF loader unikernel](https://github.com/unikraft/app-elfloader) which is based on the idea of binary and POSIX-compatibility which runs unmodified Linux applications atop a unikernel.
  - Take KraftKit and extend it to build and leverage unikernels based on the ELF loader application and to provide a tight integration with the ELF loader.
  - Allow the `kraft` command-line tool to quickly access pre-built ELF loader unikernels so that users do not need to build a new unikernel for any provided Linux application and to to significantly simplify the user experience, making unikernels extremely easy to use, and thus boost bottoms-up adoption.
- Recommended Skills: Go
- Mentor(s): Alexander Jung (@nderjung, alex@unikraft.io)
- Upstream Issue: https://github.com/unikraft/kraftkit/issues/281

### Packaging Pre-built Micro-libraries for Faster and More Secure Builds

- Description: Building a Unikraft unikernel is made possible by it's highly modular architecture which enables the use of third-party libraries which offer kernel-level and user-level interfaces for an application.
  To make accessing these libraries easier, the companion CLI tool [KraftKit](https://kraftkit.sh) helps managing these libraries, as well as the Unikraft core, their versions and metadata information.
- Expected outcomes:
  - Extend KraftKit to provide additional mechanisms to enable access to pre-built libraries to enable faster builds.
    Currently, libraries are accessed from source, either from a remote tarball or Git repository.
  - To speed up builds, pre-built libraries can be made and delivered before the main build process to speed up the overall build of the unikernel.
- Recommended Skills: Go
- Mentor(s): Cezar Crăciunoiu (@craciunoiuc, cezar@unikraft.io), Antoine Cotten (@antoineco, antoine@unikraft.io)
- Upstream Issue: https://github.com/unikraft/kraftkit/issues

### re:Arch Unikraft

- Description: Unikraft provides specialization and strong modularity by strictly following the "everything is a library" concept.
  Support for hypervisors, bare metal nodes, and drivers is broken down into individual libraries and only those libraries necessary to run an application on a given target environment (e.g., hypervisor platform) are selected.
  Over time, we noticed that certain code organizations for drivers and platform support are semi-optimal and not clearly defined, creating uncertainty for contributors and maintenance headaches.
  In this project you get the opportunity to deeply engage in a restructuring process, understanding the low-level components of the Unikraft's code base, and contribute to the new the code structure guideline.
- Expected outcomes:
  - Interact directly with core maintainers and work with them on re-structuring and optimizing the code base.
  - Enable much more streamlined upstreaming of additional platforms (e.g., Hyper-V, VMware), CPU architectures (e.g., RISC-V) and drivers.
- Recommended Skill: C, Linux-based build tools
- Mentor(s): Michalis Pappas (@michpappas, michalis@unikraft.io), Marc Rittinghaus (@marcrittinghaus, marc@unikraft.io)
- Upstream Issue: https://github.com/orgs/unikraft/projects/36, https://hackmd.io/8VWtn-Y2QYmnbJyugRlKuA

### Embedded Devices & Driver Shim Layer

- Description: Thanks to its modularity, efficiency and support for ARM64, Unikraft is well suited for running on embedded/small devices (e.g., Raspberry Pis, Pine64s, etc.).
  We have done preliminary work to have Unikraft boot on some of these devices, but more work is needed for it to be able to run mainstream applications, frameworks and cool demos.
- Expected outcomes:
  - Build a driver shim layer that would allow Unikraft to transparently re-use unmodified drivers from an existing project (e.g., FreeRTOS) in order to support basic functionality such as networking and sensors.
  - Include support for other devices as well, and to measure the efficiency of running Unikraft on them versus using mainstream OSes (e.g., Linux).
- Recommended Skills: C, assembly
- Mentor(s): Simon Kuenzer (@skuenzer, simon@unikraft.io), Sergiu Moga (@mogasergiu, sergiu.moga@protonmail.com)
- Upstream Issue: https://github.com/unikraft/unikraft/issues/595

### Unikraft as **the** Secure Configurable Unikernel

- Description: Unikraft has matured to a featureful unikernel.
  Key to its adoption in real world deployments is an extensive set of security features.
  In order to achieve this, Unikraft counts on a combination of unikernels' inherent security properties (minimal attack surface, strong cross-application isolation, safe languages), generic security features matching Linux (ASLR, stack protection, Write-xor-Execute, etc.), and state-of-the-art, fine-grained intra-unikernel compartmentalization.
  These are listed in its [Security Benefits](https://unikraft.org/docs/features/security/) page.
  Apart from existing ones, Unikraft must employ all other relevant security features out there.
- Expected outcomes:
  - Top priority planned or ongoing security features include ASLR, shadow stacks and `FORTIFY_SOURCE`.
  - Other targets include Intel Control-flow Enforcement Technology (CET), or ARM Speculation Barrier (SB).
  - Apart from security features, Unikraft could benefit from VM-based isolation features such as ARM Confidential Compute Architecture (CCA), Intel Trust Domain Extensions (TDE) or AMD Secure Encrypted Virtualization (SEV).
- Recommended Skills: C, assembly
- Mentor(s): Hugo Lefeuvre (@hlef, hugo.lefeuvre@manchester.ac.uk), Maria Sfîrăială (@mariasfiraiala, maria.sfiraiala@gmail.com), Radu Nichita (@RaduNichita, radunichita99@gmail.com)
- Upstream Issue: https://github.com/orgs/unikraft/projects/32

### Synchronization Support in Internal Libraries

- Description: Unikraft now features new SMP-safe synchronization primitives such as mutexes, semaphores, reader-writer locks, and condition variables.
  This will enable Unikraft to protect critical sections and lay the foundation for full SMP support of core Unkraft components.
  These primitives have not yet been integrated in the Unikraft core libraries.
  These libraries need to be made SMP / thread-safe, by redesigning their data structures and making appropriate calls to synchronization primitives.
- Expected outcomes:
  - Integrate synchronization primitives to ensure SMP safety while preserving a good level of performance.
  - Extend Unikraft's existing data structures with lockless variants and research alternatives to simple locking such as read-copy-update (RCU).
- Recommended Skills: C
- Mentor(s): Marc Rittinghaus (@marcrittinghaus, marc@unikraft.io), Răzvan Vîrtan (@razvanvirtan, virtanrazvan@gmail.com)
- Upstream Issue: https://github.com/orgs/unikraft/projects/32
