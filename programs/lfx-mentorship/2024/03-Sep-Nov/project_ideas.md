## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
  - 2nd Mentor Name (@mentor_github, mentor@email.addy)
- Upstream Issue:

```

---

## Proposed Project ideas

### Karmada

#### Collect and visualize Karmada metrics

- Description: Karmada dashboard now supports one-time metric retrieval, but it is difficult to observe the status of multi-clusters with one-time metric retrieval. Therefore, we would like to implement a lightweight metric collection capability to collect Karmada metrics and visualize them on the Karmada dashboard. This will allow cluster administrators to quickly get the status of the clusters and solve problems within the clusters.
- Expected Outcome:
  - Metric Collection and Storage Design Document
  - Query Analysis Interface & Front-end Visualization
- Recommended Skills:
  - Kubernetes
  - Go
  - gin
  - react
  - sqlite
- Mentor(s):
  - Wenjiang Ding (@warjiang, 1096409085@qq.com)
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/dashboard/issues/62
- LFX URL: 

#### Enhance Karmada controller-manager and schedule testing coverage

- Description: Karmada would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects. Increase the UT coverage rate to 50% to 60% (currently, the UT coverage rate is [28.26%](https://app.codecov.io/gh/karmada-io/karmada) ). The entire Karmada repository is a bit large for one project, so we will split it into two projects. The current parts mainly target the `karmada-controller-manager` and `karmada-scheduler` components.
- Expected Outcome:
  - Increase the UT (Unit Test) coverage by more than 25% and add more than 4000 lines of code coverage in the following directories.
```
pkg/controllers
pkg/dependenciesdistributor
pkg/descheduler
pkg/detector
pkg/estimator
pkg/scheduler
pkg/resourceinterpreter
pkg/util
```
- Recommended Skills:
  - Go
  - Cloud Native
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Zhuang Zhang (@zhzhuang-zju, m17799853869@163.com)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/5235
- LFX URL: 

#### Enhance the test coverage for the Karmada search, operator, and webhook components

- Description: Karmada would like to improve the UT coverage of the code to better maintain the quality of the code and reduce the introduction of defects. Increase the UT coverage rate to 50% to 60% (currently, the UT coverage rate is [28.26%](https://app.codecov.io/gh/karmada-io/karmada) ). The entire Karmada repository is a bit large for one project, so we will split it into two projects. The current focus is mainly on `karmada-search`, `karmada-operator`, `karmada-webhook` components.
- Expected Outcome:
  - Increase the UT (Unit Test) coverage by more than 25% and add more than 5500 lines of code coverage except for the following directories.
```
pkg/controllers
pkg/dependenciesdistributor
pkg/descheduler
pkg/detector
pkg/estimator
pkg/scheduler
pkg/resourceinterpreter
pkg/util
```
- Recommended Skills:
  - Go
  - Cloud Native
- Mentor(s):
  - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
  - Chaosi Pan (@chaosi-zju, chaosi@zju.edu.cn)
- Upstream Issue: https://github.com/karmada-io/karmada/issues/5236
- LFX URL: 

### KubeEdge

#### Decouple the node cooperation ability and batch management ability of the edgeapplication 

- Description: EdgeApplication can be overrides deployment spec(i.e. replicas, image, commands and environments) via the node group, and pod traffics are closed-loop in a node group(Deployments managed by EdgeApplication share a Service). But in the real scenario, the scope of nodes that need batch operations is different from that of nodes that need to collaborate with each other. Therefore, we need to have a solution to decouple the node cooperation ability and batch management ability of the edgeapplication. 

- Expected Outcome:
  -  Proposal of this issue's solution. 
  -  Achieve that edgeapplication can be overridden via the node group or node label selector.
  -  Fix the issue of closed-loop flow control.

- Recommended Skills: Kubernetes, KubeEdge, Golang

- Mentor(s):
  - Willard (@WillardHu, wei.hu@daocloud.io)
  - Elias Wang (@wbc6080, wangbincheng4@huawei.com)

- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5755
- LFX URL: 

#### Elastic Inference for Deep Learning Models Using KubeEdge 

- Description: The rapid advancement of AI has led to the widespread application of deep learning models across various fields. However, the resource demands for model inference tasks can fluctuate significantly, especially during peak periods, posing a challenge to the system's computing capabilities. To address this varying load demand, we propose an elastic inference solution leveraging KubeEdge and Horizontal Pod Autoscaling (HPA) to enable dynamic scaling of inference tasks. By utilizing KubeEdge, we can distribute inference tasks across different edge devices and cloud resources, achieving efficient resource utilization and task processing.

- Expected Outcome:
  - Based on kubeedge to complete an elastic scaling AI inference example
  - Based on kubeedge and sedna to complete the joint inference task elastic scaling development and output example
  - Output blog

- Recommended Skills: 
  - KubeEdge and its subproject Sedna frameworks.
  - Experience in deploying and managing Kubernetes, including configuring and tuning the HPA mechanism.
  - Expertise in developing and tuning deep learning models. 
  - Programming experience, particularly in Python and Go.

- Mentor(s):
  - ming tang (@tangming1996, ming.tang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)

- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5753
- LFX URL: 

#### Multimodal Large Model Joint Learning Algorithm: Reproduction Based on KubeEdge-Ianvs

- Description: KubeEdge-Ianvs currently focuses on edge-cloud collaborative learning (training and inference) for a single modality of data. However, edge devices, such as those in autonomous vehicles, often capture multimodal data, including GPS, LIDAR, and Camera data. Single-modal learning can no longer meet the precise inference requirements of edge devices. Therefore, this project aims to integrate mainstream multimodal large model joint learning algorithms into KubeEdge-Ianvs edge-cloud collaborative learning, providing multimodal learning capabilities.

- Expected Outcome: A benchmark suite for multimodal large language models deployed at the edge using KubeEdge-Ianvs
  - Modify and adapt the existing edge-cloud data collection interface to meet the requirements of multimodal data collection
  - Implement a Multimodal Large Language Model (MLLM) benchmark suite based on Ianvs
  - Reproduce mainstream multimodal joint learning (training and inference) algorithms and integrate them into Ianvs single-task learning
  - (Advanced) Test the effectiveness of multimodal joint learning in at least one of Ianvs' advanced paradigms (lifelong learning, incremental learning, federated learning, etc.).

- Recommended Skills: TensorFlow/Pytorch, LLMs, KubeEdge-Ianvs

- Mentor(s):
  - Chuang Hu (@CreativityH, hchuchuang@gmail.com)
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)

- Upstream Issue: https://github.com/kubeedge/ianvs/issues/123
- LFX URL: 

#### Cloud-edge collaborative speculative decoding for LLM based on KubeEdge-Ianvs

- Description: The autoregressive decoding mode of LLM determines that LLM can only be decoded serially, which limits its inference speed. Speculative decoding technique can be used to decode LLM in parallel with the help of draft model, so as to improve the inference speed of LLM without loss of accuracy. However, the speculative decoding technology of LLM does not consider the application in the cloud-edge distributed environment. This project aims to implement cloud-edge collaborative speculative decoding based on KubeEdge-Ianvs, an open source cloud-edge collaborative distributed machine learning platform, so as to further improve the LLM inference speed in cloud-edge environment.

- Expected Outcome:
  - Implement an example of cloud-edge collaborative speculative decoding based on KubeEdge-Ianvs platform.
  - (Optional) Propose a more efficient cloud-edge collaborative speculative decoding algorithm.

- Recommended Skills: KubeEdge-Ianvs, LLM, Pytorch, Python

- Mentor(s):
  - Shijing Hu (@hsj576, sjhu21@m.fudan.edu.cn)
  - Zimu Zheng (@MooreZheng, zimu.zheng@huawei.com)

- Upstream Issue: https://github.com/kubeedge/ianvs/issues/126
- LFX URL: 

#### Integrate KubeEdge, Sedna, and Volcano for High-Performance Training Task Scheduling 

- Description: KubeEdge and Sedna have already enabled edge-cloud collaborative training and collaborative inference capabilities. We aim to explore and foster collaborations with more communities to provide enhanced AI capabilities. By integrating Volcano, we aim to achieve high-performance scheduling within the cloud-edge collaborative framework, thereby pushing the boundaries of what can be achieved in distributed AI and edge computing.

- Expected Outcome: 
  - Successfully deploy a training task using KubeEdge and Sedna, and provide an example in the
  - Integrate Volcano within Sedna's architecture to achieve high-performance scheduling of training tasks
  - (Optional) Successfully deploy Kubeflow within the KubeEdge architecture and complete the deployment of an training task, with a blog post documenting the process.

- Recommended Skill: KubeEdge, KubeEdge-Sedna, Volcano

- Mentor(s): 
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)

- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5762