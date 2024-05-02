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

### Cilium

#### Cilium Technical Outcomes

- Description: On the Cilium [homepage](cilium.io), we want to document technical outcomes from using Cilium. Think of these technical outcomes as aggregating some of cilium features to achieve a high level technical goal. These are the current ones we have in mind: Zero Trust Networking, Network Automation, Distributed Firewalling, Cost and Carbon Savings, Multi-cloud Connectivity.
- Expected Outcome: A section of the Cilium website detailing these technical outcomes. This section on the website can include any supporting materials from the Cilium community i.e blogs, videos, talks, illustrations, etc.
- Recommended Skills: Technical Writing, some basic working knowlegde of Cilium or the willingness to quickly ramp up, Kubernetes, general familiarity with the cloud native ecosystem, basic React.js(the cilium webiste is built with Gatsby).
- Mentor(s):
  - Paul Arah(paularah, <paul.arah@isovalent.com>)
  - Bill Mulligan(xmulligan, <bill.mulligan@isovalent.com>)
- Upstream Issue: <https://github.com/cilium/cilium.io/issues/492>


### Karmada

#### Certificate Lifecycle Management

- Description: The Karmada Certificate Lifecycle Management project addresses user challenges in certificate management, focusing on mitigating service disruptions and security risks due to expirations. Key goals include implementing a feature for real-time monitoring of certificates with advance notification for upcoming expirations; creating a comprehensive manual for manual replacement with best practices and visuals; allowing configurable certificate validity during deployment via CLI, Helm charts, and Operator; and designing an automated certificate rotation system to streamline certificate maintenance and ensure continuous security across Karmada environments.
- Expected Outcome: Certificate Visibility Tool/Feature, Manual Certificate Replacement Guide, Updated Installation Tools with Customizable Certificate Validity, and Automated Certificate Rotation Solution Design or Integration 
- Recommended Skills: Golang, Kubernetes Admin, certificate management, Helm.
- Mentor(s):
    - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
    - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/community/issues/69


### Knative

#### Improve Knative Eventing Onboarding

- Description:
Onboarding new end users into a sophisticated system like Knative Eventing presents significant challenges, especially as it involves understanding not only the operational components but also a distinct architectural style - event driven architecture (EDA). These issues are also seen in the current documentation which is often too technical and not geared towards practical guidance.  This project seeks to perform a thorough investigation into the barriers that prevent smooth user onboarding and sustained engagement. By identifying these obstacles and developing clearer, more actionable onboarding materials, we aim to enhance the ease of entry and ongoing use of Knative Eventing for all users.

- Expected Outcome:
1. Produce a detailed report based on user research that outlines the current onboarding experience for new users of Knative Eventing. This report will highlight key barriers and challenges in the documentation and setup process, and recommend actionable improvements to make the onboarding process more user-friendly and less technically daunting.

2. Implement the proposed changes within the Knative community by developing comprehensive onboarding materials and enhancing existing documentation to better support new users.

- Recommended Skills: User Research, Communication, Technical Writing, Content Design

- Mentor(s):
  - Leo Li (@Leo6Leo,leoli@redhat.com)
  - Mariana Mejia (@mmejia02, mariana.mejia@ocadu.ca )

- Upstream Issue:
  https://github.com/knative/ux/issues/130


### KubeEdge

#### Iterating Enhancement for KubeEdge Dashboard

- Description: Based on the previous release of KubeEdge, a version of the dashboard has been implemented. With the iterative updates of the backend API, the current dashboard may have several issues. In this project, we aim to iterate and update the dashboard to ensure its compatibility with the latest version of KubeEdge. Additionally, we want to refactor the dashboard using more mainstream frameworks such as Material and optimize the user experience of the dashboard.
- Expected Outcome: new release Dashboard which supports new KubeEgde APIs.
- Recommended Skills: KubeEdge, Front-end, nodejs
- Mentor(s):
  - Hongbing Zhang (@HongbingZhang, hongbing.zhang@daocloud.io)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/dashboard/issues/22

#### Router Manager Support HA

- Description: Users need to communicate between the cloud and the edge. For example, the cloud calls the rest interface of the edge service. In this case, the routing management function of KubeEdge can be used. Currently, routing management function of KubeEdge has some problems in the case of multiple CloudCore copies. The main problem is that when there are multiple copies of CloudCore, whether the cloud sends messages to the edge or reports the message to the cloud, it is not known which CloudCore is sent to it for processing, and there is confusion in message management in the cloud. In this project, we hope router manager can be optimized to support multi-CloudCore scenario.
- Expected Outcome: Support using router manager in multi-CloudCore scenario.
- Recommended Skills: Golang, KubeEdge
- Mentor(s):
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
  - jiawei (@JiaweiGithub, jiawei.liu@daocloud.io)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5561

#### KubeEdge test cases enhancement

- Description: Testing is an important task to ensure project stability, security, and other aspects. Since KubeEdge is built on top of native Kubernetes, in this project, we aim to integrate Kubernetes end-to-end (E2E) test cases into KubeEdge's CI. This integration will help ensure the native compatibility and usability of KubeEdge. Additionally, we also aim to improve the unit tests and increase the coverage of integration tests for KubeEdge.
- Expected Outcome: Improve KubeEdge test coverage scenarios
- Recommended Skills: Golang, KubeEdge
- Mentor(s):
  - Fisher Xu (@fisherxu, fisherxu1@gmail.com)
  - Shelley Bao (@Shelley-BaoYue, baoyue2@huawei.com)
- Upstream Issue: https://github.com/kubeedge/kubeedge/issues/5562

#### KubeEdge Documentation Improvement

- Description: Recently, we have updated the directory and structure of the community's official website documentation. We have listed some documentation improvement tasks. In this project, we would like you to have a thorough understanding of KubeEdge and complete these documentation optimization tasks to help users or developers gain a better understanding of and utilize KubeEdge effectively.
- Expected Outcome: Document optimization of setup, usage guide, and developer guide, adding more FAQs, etc.
- Recommended Skills: Kubernetes, KubeEdge, docs
- Mentor(s):
  - zhiying (@zhiyingfang2022, zhiying.fang@daocloud.io)
  - wbc6080 (@wbc6080, wangbincheng4@huawei.com)
- Upstream Issue: https://github.com/kubeedge/website/issues/433


### Kubescape


#### Advanced Kubescape plugin features for VSCode


- Description: Kubescape has a VSCode plugin to facilitate applying configuration fixes that harden Kubernetes infrastrcutture without creating a burden of context switching on engineers tasked with security scanning and implementing their results.
- Expected Outcome: Inetgrating container image scanning capabilities in the Kubescape VSCode plugin and implementing
 Kubescape's ability to apply fixes for configuration issues to YAML files or Helm charts directly within their development environment.

- Recommended Skills: Javascript, some familiarity with the inner workings of the VSCode plugin system.
- Mentor(s):
  - Ben Hirschberg (@slashben, ben@armosec.io)
  - David Wertenteil (@dwertent, dwertent@armosec.io)
- Upstream Issue: [kubescape/Kubescape#1666](https://github.com/kubescape/kubescape/issues/1666)


 #### Backstage plugin that adheres to the new plugin system


- Description: Backstage has become a popular option for an internal portal that provides information for engineers in different capacities. Creating a backstage plugin for Kubescape will ultimately help users achieve their goal of hardening Kubernetes clusters, by being able to view security posture information on Backstage and without context switching.
- Expected Outcome: A Kubescape plugin for Backstage in which users will be able to get information about their security posture and highest risk workloads at a glance within the orgnizational portal.

- Recommended Skills: Typescript, React, some familiarity with new Backstage plugin system.
- Mentor(s):
  - Rotem Refael (@rotemamsa, rotem@armosec.io)
  - Matthias Bertschy (@matthyx, matthiasb@armosec.io)
- Upstream Issue: [kubescape/Kubescape#1667](https://github.com/kubescape/kubescape/issues/1667)


### Prometheus

#### Prometheus Remote Write Benchmarking Capabilities

- Description: Prometheus remote write allows users to send their metrics to other time series databases. Though the [Prombench tool](https://github.com/prometheus/test-infra/tree/master/prombench) has existed for a number of years, it has never been extended to support performance testing of Remote Write in a realistic production like environment. With the upcomming Remote Write 2.0 changes to both the underlying implementation as well as the wire format, the need for benchmarking of remote write beyond static Go bechmark tests has increased.
- Expected Outcome: Build additional (or extends existing) tooling, similar to Prombench’s [load-generator](https://github.com/prometheus/test-infra/tree/master/tools/load-generator) and [avalanche](https://github.com/prometheus-community/avalanche), to support scenarios under which remote write should be performance tested. For example; allowing gradual increases/decreases in # of active series, sudden spikes in active series, various amounts of latency in the server receiving the remote write data, etc. Time permitted, extend Prombench's test suite to include a set of Remote Write tests that can be run via a new command.
- Recommended Skills: Go, some familiarity with Prometheus or metrics, basic Docker knowledge
- Mentor(s): 
  - Callum Styan (@cstyan, callumstyan@gmail.com), 
  - Jesús Vázquez (@jesusvazquez, jesus.vazquez@grafana.com)
  - Nico Pazos and Alex Greenbank from Grafana also available to help
- Upstream Issue: https://github.com/prometheus/prometheus/issues/13995


### Thanos

#### Compactor: Display TODO plan in UI

- Description: In the Thanos Compactor UI there is visibility of the global block list and loaded block list. But it would be useful to also have a list of planned and currently running compaction groups in order to see what exactly is in progress. This way it would be easier to diagnose what the Thanos Compactor is currently working on, and possibly what is delaying the progress of compactions. This is especially useful if you have large TSDB blocks in S3 buckets that take time to get compacted.
- Expected Outcome: We have an endpoint in Compactor that details compaction plan, and this is also visualized in a Compactor UI page.
- Recommended Skills: Go, React, some familiarity with Prometheus and Thanos
- Mentor(s):
  - Michael Hoffmann (@MichaHoffmann, mhoffm@posteo.de)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/7285


### Vitess

#### Improve the website of our automated-benchmarking tool (migrate to shadcn ui and typescript)

- Description:
    - Vitess uses arewefastyet to automatically benchmark its codebase and ensure no performance regression is introduced. This tool benchmarks Vitess every day, and is used to visualize the results of those benchmarks. It is an important tool in the development cycle of Vitess and is used by its maintainers and adopters.
    - [Arewefastyet' website](https://benchmark.vitess.io) has changed quite a lot over the last year, we want to continue improving it by finishing the migration to TypeScript and by using Shadcn components.
    - Moreover, we want to make the website responsive and have a proper Figma that serves as a reference for current and future contributors.
- Expected Outcome:
    - The mentee is expected to produce a Figma with the design of the website that will be co-authored with the mentor.
    - Re-vamp most of the pages using Shadcn and the design defined with the mentor at the start of the internship period.
    - Add type information for all/most components using TypeScript.
- Recommended Skills:
    - Be skilled in React/Vite/TypeScript.
    - Must know how to simply use Docker and docker-compose.
    - Experience with Figma is a big plus.
    - Experience with Rest APIs and Golang is a plus too.
- Mentor(s):
    - Florent Poinsard @fouioui florent@planetscale.com
    - Frances Thai @notfelineit frances@planetscale.com
- Upstream Issue (URL): https://github.com/vitessio/arewefastyet/issues/525

