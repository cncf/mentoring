## Template

```

### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
- Upstream Issue:

```

---

## Proposed Project ideas

### Envoy Gateway

#### Progressive Rollouts of the Envoy Proxy fleet during Envoy Gateway upgrades

- Description:
Envoy Gateway translates Kubernetes-native Gateway API resources into xDS configuration consumed by Envoy Proxy.
It also manages the lifecycle of the Envoy Proxy fleet by generating Kubernetes resources such as Deployments and Services.

Currently, upgrades to Envoy Gateway (the control plane) result in immediate, in-place updates to the associated Envoy Proxy fleet (the data plane).
While this operation is designed to be zero-downtime, some users prefer a staged upgrade process where the control plane is updated first,
followed by a progressive rollout of the data plane.

This project aims to design and implement support for progressive data plane upgrades, allowing users to decouple the control and data plane upgrade processes. 
This would provide enhanced control and safer rollout strategies (e.g., canary or blue-green deployments).

- Expected Outcome:
  - Design a two-step upgrade workflow that separates control plane and data plane updates.
  - Implement configuration or CRD support to control rollout strategy of the Envoy Proxy fleet.
  - Add documentation and example manifests for users to adopt the new workflow.

- Recommended Skills: Golang, Kubernetes, CD tools (like Argo Rollouts and Flagger).

- Mentor(s):
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
  - Kateryna Nezdolii (@nezdolik, kateryna.nezdolii@gmail.com)

- Upstream Issue: https://github.com/envoyproxy/gateway/issues/4494
- LFX URL: 

### Antrea

#### Replace Dependabot with Renovate for automatic dependency updates

- Description: Antrea currently relies on Github's Dependabot to automatically updated dependencies (Go modules / Github Actions) on the main branch. There is a key limitation with Dependabot, which is that it doesn't support automatically updating dependencies with security vulnerabilities in "active" release branches (for Antrea minor versions which are currently actively supported). This limitation means that maintainers have to manually backport Dependabot patches when they address security vulnerabilities, which has become a burden. [Renovate](https://docs.renovatebot.com/) is an alternative tool for dependency management, and it seems that it offers richer configuration options and may not suffer from the same limitation as Dependabot.
- Expected Outcome: Migrate the Dependabot config to a Renovate config for the main Antrea repository (antrea-io/antrea), as well as for all other repositories (under the antrea-io organization) which currently use Dependabot. Dependencies that are currently updated as a group (e.g., `golang.org/x` modules) should remain that way. The Renovate config should include provisions to automatically perform security updates in active release branches. The change should not impact developer workflows and the Antrea release cycle; all experiments should be performed in a fork.
- Recommended Skills: familiarity with the Github ecosystem, including Github Actions, and with the standard Github dev workflows.
- Mentor(s):
  - Quan Tian (@tnqn, tianquan23@gmail.com)
  - Lan Luo (@luolanzone, luolanzone@gmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/7155

#### Improvements to the PacketCapture feature

- Description: As a Kubernetes (K8s) network plugin (CNI plugin), Antrea provides networking functions for K8s Pods and includes various troubleshooting tools for cluster administrators and application developers to diagnose networking issues. The [PacketCapture feature](https://github.com/antrea-io/antrea/blob/main/docs/packetcapture-guide.md) was introduced recently (Antrea v2.2) and allows capturing network traffic for specific endpoints using predefined filters similar to those supported by libpcap/tcpdump. Users can initiate a packet capture through a Kubernetes Custom Resource Definition (CRD) or a CLI command. The Antrea control plane then generates and injects the corresponding BPF program, and the captured packets can be exported as a pcap file. In the last iteration of the LFX mentorship program, we added support for L4 filters (TCP flags, ICMP type & code) to the PacketCapture API, to enable Antrea users to target network traffic more precisely. We would like to keep improving the PacketCapture feature with 1) IPv6 support, 2) more flexibility when providing the source and destination, 3) the ability to specify the capture point for traffic (source or destination Pod).
- Expected Outcome: Extend the API definition for the PacketCapture CRD, and implement the new API functionality by generating the correct BPF instructions. The `antctl` CLI command for PacketCapture should be updated as needed to accomodate for the API changes. The implementation should come with a sufficient amount of tests (both unit tests and e2e tests), ensuring that the new functionality is working as expected.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, basic knowledge about networking protocols (IP/TCP/UDP/ICMP).
- Mentor(s):
  - Hang Yan (@hangyan, hang.yan@hotmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/6861, https://github.com/antrea-io/antrea/issues/6976, https://github.com/antrea-io/antrea/issues/6863
- LFX URL: 

### KubeEdge

#### Embodied Intelligence Benchmarking Framework for Industrial Manufacturing with KubeEdge-Ianvs

- Description: As industrial manufacturing accelerates its digital transformation through advancements in robotics, adaptive production lines, and smart testing systems, cloud-edge collaboration has emerged as a critical enabler for deploying embodied intelligence in complex operational environments. Contemporary industry requirements for embodied intelligence now extend beyond basic task execution to encompass multimodal perception-decision integration, dynamic environment adaptation, and distributed device orchestration. Existing benchmarking frameworks exhibit limitations in evaluating scenario-specific embodied attributes inherent to industrial settings. This initiative leverages the KubeEdge-Ianvs collaborative AI framework, integrating domain-specific test datasets, simulation environments, and quantitative metrics to establish a certified industrial-grade evaluation infrastructure for embodied intelligence systems.
- Expected Outcome:
  - Develop an industrial-grade embodied intelligence dataset through systematic classification and reorganization of existing resources across four standardized task categories
  - Design standardized validation suites within KubeEdge-Ianvs
  - Deploy reference baseline algorithms using the developed validation suites to establish performance benchmarks within KubeEdge-Ianvs
- Recommended Skills: Python, Benchmark, Dataset, Embodied Intelligence
- Mentor(s):
  - Zimu Zheng (@MooreZheng, zimu.zheng@hotmail.com)
  - Mengzhuo Chen (@IcyFeather233, icyfeather@foxmail.com)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/197
- LFX URL: 

#### Device Anomaly Detection Framework Based on KubeEdge

- Description: The current KubeEdge platform represents device states using three statuses: Desired, ObservedDesired, and Reported. The device states displayed on the platform are entirely reliant on the Mapper, which collects and reports data from the device side. However, due to limitations in the Mapper implementation, physical device malfunctions, network delays, and potential network attacks, the device states shown on the platform may not accurately reflect the actual state of the devices. In the KubeEdge platform, if applications depend on device states for decision-making, such inconsistencies in state representation may lead to undesirable outcomes. Therefore, this project aims to design a device state anomaly detection framework for KubeEdge. By exploring the causal relationships among device states, the framework will establish lightweight anomaly detection capabilities and provide a comprehensive toolchain encompassing data collection, model training, real-time anomaly detection, and results visualization.
- Expected Outcome:
  - A general-purpose device anomaly detection framework that supports user-defined detection algorithms
  - A complete technical design document including model selection, training procedures, and detailed architecture diagrams for both training and online detection components
  - A machine learning model and corresponding anomaly detection algorithm capable of capturing causal relationships among device states, trained and tested using standard frameworks
  - An online anomaly detection module integrated into the KubeEdge device state reporting workflow, enabling real-time analysis through a model inference hook
- Recommended Skills: KubeEdge, IoT, Machine Learning
- Mentor(s):
  - Liwei Shen (@meixiezichuan, shenliwei@fudan.edu.cn)
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6312
- LFX URL: 

#### Automatically generate unit tests and e2e tests based on LLM

- Description: Unit test and e2e test coverage is a critical metric for ensuring code quality and stability. However, many codebases suffer from low test coverage, which increases the risk of release quality, undetected bugs and regressions. We can leverage Large Language Models (LLMs) like DeepSeek to automatically generate unit tests/e2e tests for code with low coverage, then integrate this into CI/CD pipelines to submit Pull Requests (PRs) for people reviewing.
- Expected Outcome:
  - Research open-source tools compatible with LLM（DeepSeek) for automated unit test/e2e test generation
  - Integrate the automated test generation tool into CI/CD
  - Trigger the tool automatically based on code changes and submit a Pull Request (PR)
- Recommended Skills: KubeEdge, LLM, Golang, DevOps
- Mentor(s):
  - Yue Li (@liyuerich, yue.li@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6318
- LFX URL: 

#### Support KubeEdge EdgeNode Runing on RK3588 Chip

- Description: The RK3588 chip, developed by Rockchip, is widely used in edge computing devices due to its balanced computational power, rich interface options, and low power consumption. Supporting RK3588 edge devices is crucial for expanding the KubeEdge ecosystem. However, it has not yet been fully validated whether RK3588-based edge nodes can be seamlessly integrated with KubeEdge. This project aims to establish complete compatibility between RK3588 and KubeEdge.
- Expected Outcome:
  - Debug and Support KubeEdge EdgeNode running on RK3588 Chip.
  - Successfully deploy edge pods on edge node based on RK3588.
  - Achieve node management and metrics for nodes and pods.
  - Complete hardware compatibility testing and output documentation or a blog.
- Recommended Skills: KubeEdge, Hardware, Golang
- Mentor(s):
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6320
- LFX URL: 

### Cilium

#### Cilium Technical Outcomes

- Description: On the Cilium [homepage](https://cilium.io), we want to document technical outcomes from using Cilium. Think of these technical outcomes as aggregating some of cilium features to achieve a high level technical goal. These are the current ones we have in mind: Zero Trust Networking, Network Automation, Distributed Firewalling, Cost and Carbon Savings, Multi-cloud Connectivity.
- Expected Outcome: A section of the Cilium website detailing these technical outcomes. This section on the website can include any supporting materials from the Cilium community i.e blogs, videos, talks, illustrations, etc.
- Recommended Skills: Technical Writing, some basic working knowlegde of Cilium or the willingness to quickly ramp up, Kubernetes, general familiarity with the cloud native ecosystem, basic React.js(the cilium webiste is built with Gatsby).
- Mentor(s):
    - Bill Mulligan(xmulligan, <bill.mulligan@isovalent.com>)
- Upstream Issue: <https://github.com/cilium/cilium.io/issues/492>
- LFX URL: 


## kgateway

#### Mission: Scale Possible! Build Automated Scale Tests for kgateway

Description:
- This project aims to design and build a suite of automated scale tests for kgateway that would run as part of our builds and releases process. These tests will help us understand how kgateway behaves under a large number of Kubernetes gateway resources and kgateway extensions, and load tests to ensure it performs reliably as usage scales. You'll gain hands-on experience with performance testing, infrastructure automation, and Kubernetes-based systems.

Expected Outcome:
- Design and a scale testing suite
- Build a scale test suite for kgateway
- Analyze test results to identify bottlenecks or failure points
- Write developer-facing documentation
- Explore Oracle Developer cloud and determine if it is suitable for kgateway’s scale tests.

Recommended Skills:
- Golang
- GitHub workflow
- Kubernetes

Mentor(s):
  - Nina Polshakova (@npolshakova, ninapolshakova@gmail.com)
  - Lawrence Gadban (@lgadban, lawrence.gadban@solo.io)  

Upstream Issue: https://github.com/kgateway-dev/kgateway/issues/11210 
- LFX URL: 


