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

### Fluid

#### Design and implement a CLI tool to help easily use Fluid

CNCF - Fluid: Design and implement a CLI tool for Fluid (2026 Term 1)

- Description: Fluid manages Kubernetes resources (Statefulsets, PersistentVolumeClaims & PersistentVolume, etc.) under two Fluid custom resources CR called `Dataset` and `Runtime`. Given a pair of Dataset and Runtime CR, users may want to inspect the underlying resources, check their status and diagnose which part is going wrong. A CLI tool (e.g. a kubectl plugin) for Fluid would be a straightforward way for Fluid's users to easily get such information.

- Expected Outcome:
  - Design and implement a CLI tool for Fluid
  - Support `inspect` subcommand: list resource status given a Fluid Dataset CR.
  - Support `diagnose` subcommand: collect related information (e.g. logs, pod status, etc.) to help diagnose what's going wrong.
  - Implement a framework to diagnose Fluid with LLM/AI. (The collected information can be put into the context of an AI inference request)

- Recommended Skills: Fluid, Go, CLI tool development, LangChain(or other alternative LLM frameworks)

- Mentor(s):
  - Zhihao Xu (@TrafalgarZZZ， [trafalgarz@outlook.com](mailto:trafalgarz@outlook.com))
  - Yang Che (@cheyang, [cheyang52@gmail.com](mailto:cheyang52@gmail.com))


### Kubernetes

#### Kubernetes SIG Docs – Localization Subproject

##### AI-Era Localization Automation for SIG Docs Contributors & Reviewers

CNCF - Kubernetes: SIG Docs Localization: AI-era localization automation (2026 Term 1)

- Description:

This project focuses on improving localization workflows in Kubernetes SIG Docs by strengthening visibility, prioritization, and traceability across English and localized documentation. The enhanced workflows will benefit to reducing review burden and coordination costs that arise in environments where upstream content changes and subsequent localization efforts occur asynchronously. The project also explores practical approaches to achieving measurable productivity gains by adopting AI-assisted tools within established human workflows.

Mentees work with mentors in SIG Docs localization to improve existing localization review and coordination processes, such as label-based coordination and review signals implemented through Prow/CI. The project focuses on the following core areas: improving traceability between frequently changing English content and localized documentation, continuously tracking and notifying review priorities for translation updates, and maintaining visibility into localization coverage and prioritization based on document importance. All outcomes are designed to integrate naturally into existing SIG Docs GitHub workflows and practices while preserving and supporting human-led review and decision-making.

- Expected Outcome:
  - Reusable Prow/CI automation prototypes
    - Review-assist jobs and bots designed to be reusable across SIG Docs localization workflows.

  - Extensible architecture
    - Clear separation between core workflow logic and language-specific rules.

  - Best practices documentation
    - Guidance on improving localization workflows through supportive tooling and operational practices, while preserving human review, contributor growth, and community sustainability.

- Recommended Skills:
  - Basic understanding of Kubernetes documentation structure and contribution flow.
  - Git/GitHub workflows (issues, pull requests, review comments).
  - Familiarity with at least one programming or scripting language for automation (e.g., Go, Python, JavaScript).
  - Experience contributing to documentation localization (translation, review, or L10n process improvements).
  - Curious about improving productivity on documentation and localization through tools (e.g., linters, AI-assisted tools), workflows, and process improvements.

- Mentor(s)
  - Ian Y. Choi (@ianychoi, ianyrchoi@gmail.com)
  - Wonyong Hwang (@wonyongg, kakaohwy@gmail.com)
  - Eunjeong Park (@Eundms, eunjeongpark.eundms@gmail.com)
  - Seokho Son (@seokho-son, shsongist@gmail.com)
- Upstream Issue: https://github.com/kubernetes/website/issues/54075


### Kmesh

#### Kmesh supports multi-clusters

CNCF - Kmesh: Support multi-clusters (2026 Term 1)

- Description: Kmesh, as a high-performance service mesh data plane, is now only supported for use in a single cluster. However, now that multi-cluster support for istiod has been realized, we are able to move forward with the multi-cluster adaptation of Kmesh to support the use of Kmesh in multi-cluster environments. Adaptation to the current multi-cluster production environment with LLM and large data.
- Expected Outcome:
  - 1.Code for implementing the Kmesh multi-cluster feature
    - 1.1. Adapting to the Istio Multi-Cluster Function API
    - 1.2. Traffic Management in multi-cluster scenarios
    - 1.3. Use IPsec to ensure the security of node communication.
  - 2.userguide doc
    - 2.1. proposal
    - 2.2. userguide
  - 3.e2e test
    - 3.1. Unit Test of Feature Function
    - 3.2. E2E test code
- Recommended Skills: go, docker , kind, service mesh
- Mentor(s):
  - Mentor Name:
  - zhonghu xu(@hzxuzhonghu, zhhxu2011@gmail.com),
  - changye wu(@nlgwcy, wuchangye@huawei.com),
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1570

#### Optimize long connection load balance and support more load balance algorithm

CNCF - Kmesh: Optimize long connection load balancing (2026 Term 1)

- Description: Kmesh employs eBPF for load balancing. However, at present it only supports short-lived connections and offers a limited range of load balancing algorithms. Consequently, we aim to support a broader range of load balancing capabilities.
- Expected Outcome:
  - 1.Load balancing with load-dependent connections via eBPF.
  - 2.Support as many load balancing algorithms as possible
    - 2.1 Sticky Round Robin
    - 2.2 Weighted Round Robin
    - 2.3 ...
  - 3.Userguide and Proposal
  - 4.Unit Test and E2E test
- Recommended Skills: go, docker , kind, service mesh
- Mentor(s):
  - xin liu(@bitcoffeeiux, liuxin350@huawei.com),
  - mingyi zhang(@lec-bit, zhangmingyi5@huawei.com)
- Upstream Issue: https://github.com/kmesh-net/kmesh/issues/1571


### kubeedge 

#### Cloud-Edge Simulation Benchmark for LLM Speculative Decoding in KubeEdge-Ianvs

CNCF - KubeEdge: Ianvs: Cloud-edge benchmark for LLM speculative decoding (2026 Term 1)

- Description: 
  LLM inference acceleration is increasingly important for cloud-edge collaborative AI deployments. Speculative decoding can improve end-to-end generation speed by using a lightweight draft model to propose token candidates and a larger target model to verify them, but its real-world gains depend heavily on cloud-edge constraints such as network latency, bandwidth limits, and heterogeneous compute. 
  Ianvs provides a unified benchmarking framework, and KubeEdge scenarios often require evaluating AI workloads under cloud-edge conditions. This project proposes a single-host cloud-edge simulation benchmark in Ianvs to evaluate speculative decoding for LLM inference. The benchmark will simulate edge (draft) and cloud (verify) roles as separate processes, inject configurable network constraints, and report standardized throughput and latency metrics, enabling reproducible comparison between baseline decoding and speculative decoding under different cloud-edge budgets.
- Expected Outcome: 
  - An Ianvs benchmark test case for cloud-edge speculative decoding (PyTorch + HuggingFace).
  - A single-host simulation runner that emulates edge/cloud roles and configurable network constraints (e.g., latency, bandwidth).
  - Benchmark reports comparing baseline vs speculative decoding with key metrics (e.g., TTFT, end-to-end latency, tokens/s), and reproducible configs/scripts.
- Recommended Skills: Python, PyTorch, HuggingFace Transformers, LLM inference/decoding, benchmarking & performance profiling, KubeEdge/Ianvs basics
- Mentor(s):
  - Shijing Hu (@hsj576, sjhu21@m.fudan.edu.cn)
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/304

#### Comprehensive Example Restoration for KubeEdge Ianvs

CNCF - KubeEdge: Ianvs: Comprehensive example restoration (2026 Term 1)

- Description: Ianvs serves as the KubeEdge SIG AI distributed benchmark toolkit. As more and more contributors running, KubeEdge Ianvs now has 25 examples, and the number is still increasing. KubeEdge Ianvs then faces mounting usability issues due to dependency evolution and validation mechanisms. As Python versions, third-party libraries, and Ianvs features advance, partial historical examples fail to execute. This has led to surging user-reported Issues from confused contributors, untested PRs breaking core functionality of legacy features, and severely outdated documentation misaligning with actual capabilities. Without systematic intervention, the example risks becoming obsolete for edge-AI developers and especially newcomers. We then try to resurrect Ianvs’ usability with a comprehensive example restoration.
- Expected Outcome: 
  - Diagnose & fix bugs across examples, including dependency manifests, license scan, and runtime configurations.
  - Documentation Modernization, including revamp tutorials with reproducible step-by-step guides, publish developer-focused debugging playbooks for common failures. Write and upload the corresponding blog to the KubeEdge Website.
  - Advanced: Build a CI pipeline testing examples with GitHub Actions against multiple Python versions, critical Ianvs/upstream updates, and block PRs that break validated examples
  - Optional:  Preparing KubeEdge SIG AI speaking and marketing materials for open-source community events like KCD Days 2026 (in Beijing, thus writing and speaking skills in Mandarin would be a plus).
- Recommended Skills: Python, Benchmark, KubeEdge-Ianvs, AI/ML
- Mentor(s):
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)
  - Shijing Hu (@hsj576, sjhu21@m.fudan.edu.cn)
- Upstream Issue: https://github.com/kubeedge/ianvs/issues/230

#### Batch Enable/Disable of EdgeHub on Edge Nodes via kubeedge/keadm

CNCF - KubeEdge: Keadm: Batch enable/disable EdgeHub on edge nodes (2026 Term 1)

- Description: In bandwidth limited environments, as the cluster size expands, communication between cloud and edge nodes in KubeEdge consumes a significant amount of network resources, which may interfere with upper layer business applications. To alleviate this issue, it is necessary to implement batch enable or disable the EdgeHub edge node feature in keadm. Administrators can temporarily take edge nodes offline by turning off the EdgeHub switch, thereby releasing the bandwidth required for critical services. This feature should support adding subcommands in keadm for implementation.
- Expected Outcome: A keadm extension that provides commands or APIs to batch enable/disable the EdgeHub switch on specified edge nodes.
- Recommended Skills: Golang, KubeEdge
- Mentor(s):
  - Zhijia Yang (@luomengY, 2938893385@qq.com)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6609

#### Enable and Verify KubeEdge Support on RISC-V Architecture 

CNCF - KubeEdge: Enable and verify KubeEdge support on RISC-V (2026 Term 1)

- Description: With the rapid growth of the RISC-V ecosystem, an increasing number of eage computing devices and IoT boards are adopting RISC-V. In very early versions of KubeEgde, we briefly verified compatibility with RISC-V. However, this has not been continuously validated in recent releases. As the codebase has evolved significantly, we need to re-establish and solidify support for this architecture to ensure KubeEdge can run seamlessly on the next generation of open hardware.
- Expected Outcome:
  - Deploy and run KubeEdge on actual RISC-V devices. Fix identified issues and submit PRs.
  - Generate official release assets (binaries) and multi-arch images for RISC-V.
  - Output a guide as a blog or docs about how to run KubeEdge on RISC-V to the kubeedge/website.
  - (optional) Explore how to add a basic verification step for RISC-V in KubeEdge GitHub Actions CI.
- Recommended Skills: KubeEdge, Operation System
- Mentor(s):
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/6614
