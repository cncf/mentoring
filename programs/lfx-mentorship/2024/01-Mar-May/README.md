# Term 01 - 2024 March - May

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |   
| project proposals | Monday Jan 8 - Wednesday Jan 24, 8:00 AM PDT |
| mentee applications open | Monday Jan 29 - Tues Feb 13, 5:00 PM PDT |
| application review/admission decisions | Wed Feb 14 - Tues Feb 27, 5:00 PM PDT |
| selection notifications | Tues Feb 27, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | Monday March 4 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | Wednesday April 10 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed May 22, 5:00 PM PST (Week 12) |
| Last day of term | Friday May 31 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2024/01-Mar-May/project_ideas.md, by January 24, 2024.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Table of Contents

---

## Accepted Projects

---

### Antrea

#### East-west connectivity monitoring tool for Pod network

- Description: As a K8s network plugin (CNI plugin), Antrea provides networking functions for K8s Pods. These Pods are located on different Nodes, which can be in different availability zones, or even different geos. We would like to provide as part of Antrea (built-in capability) a tool to monitor Pod connectivity across the cluster. This tool should be able to report the average network latency between any 2 Nodes in the cluster. The latency information could then be visualized using a heatmap representation in the Antrea web UI.
- Expected Outcome: A new Antrea API which reports network health information and latency between K8s Nodes. If time allows, the Antrea web UI should also be extended so that latency information can be easily visualized through a heatmap.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, some basic networking knowledge (TCP/IP stack), frontend development experience (React, TypeScript) would be great but not required.
- Mentor(s):
  - Yang Ding (@Dyanngg, dingyany1995@outlook.com)
  - Anlan He (@heanlan, anlan9771@gmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/5514
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/12b695a0-e05c-46b9-a42d-c7e4709f0129

#### Ability to install / upgrade Antrea using the CLI

- Description: Currently Antrea can be installed using a K8s YAML manifest or through the provided Helm chart. We believe there is value in providing a 3rd installation method, using the "antctl" CLI. The CLI installation / upgrade method would have the following advantages: a) more user-friendly, with support for command-line options to customize the installation, b) ability to run sanity checks on the K8s cluster before comitting to the installation, c) when upgrading, the CLI will ensure that Antrea components are upgraded in the optimal order, to minimize workload disruption.
- Expected Outcome: A new command for antctl, the Antrea CLI, which will provide support for installation and upgrade.
- Recommended Skills: familiarity with Golang, some knowledge about the K8s architecture and APIs, UX experience would be great but not required.
- Mentor(s):
  - Quan Tian (@tnqn, tianquan23@gmail.com)
  - Lan Luo (@luolanzone, luolanzone@gmail.com)
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/5896
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ae950bcf-d16b-4d26-aed0-702c1eedb507

#### Replace deprecated bincover with golang built-in coverage profiling tool

- Description: Currently Antrea uses a third-party tool called [bincover](https://github.com/confluentinc/bincover) to measure code coverage when running end-to-end (e2e) tests. This tool has been deprecated in favor of the built-in Go coverage profiling tool (https://go.dev/testing/coverage/) starting with Go 1.20, and it is no longer maintained. We would like to remove usage of bincover from the Antrea project and start using the built-in Go tool.
- Expected Outcome: Complete removal of the bincove dependency. Code coverage can still be measured with the same accuracy when running Antrea e2e tests and the results can still be reported to [Codecov](https://about.codecov.io/).
- Recommended Skills: familiarity with Golang and the Golang testing framework.
- Mentor(s):
  - Antonin Bas (@antoninbas, antonin.bas@gmail.com)
  - Lan Luo (@luolanzone, luolanzone@gmail.com)
- Upstream Issue: https://github.com/antrea-io/antrea/issues/4962
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8f08ebb1-05a8-41fb-8c4c-85626f63c195

### Chaos Mesh

#### Observability for StressChaos

- Description: StressChaos is a chaos experiment that injects stress to the system. The current implementation of StressChaos is lack of observability, most of observability solutions could not observe the stress at Pod level, but only at Node level. This project is to enhance observability for StressChaos.
- Expected Outcome: Chaos Mesh end users could observe the injected stress at Pod level.
- Recommended Skills: Golang, Kubernetes, Linux, Observability Tools(e.g. Prometheus, Grafana, etc.)
- Mentor(s):
  - Zhiqiang Zhou(@STRRL, im@strrl.dev)
  - Yue Yang(@g1eny0ung, g1enyy0ung@gmail.com)
  - Cwen Yin(@cwen0, yincwego@gmail.com)
- Upstream Issue: https://github.com/chaos-mesh/chaos-mesh/discussions/3012, https://github.com/chaos-mesh/chaos-mesh/issues/3651
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/8ad2c24f-120d-4369-866c-c911a5c885e9

### Cilium

#### Governance Documentation

- Description: This project will focus on governance documentation for the Cilium project with two key parts. First, the governenace documentation should be moved out of the main docs and into the community repo. Second, we need to do an inventory of all of the repos under the project and come up with a lifecycle for them.
- Expected Outcome: Governance docs in community repo. All repos accounted for and with a lifecycle plan.
- Recommended Skills: enthusiasm for governance and basic markdown experience
- Mentor(s):
  - Bill Mulligan(@xmulligan, bill@isovalent.com)
- Upstream Issue: https://github.com/cilium/community/issues/78 https://github.com/cilium/community/issues/27
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/eeaec4a9-5a9c-4cae-945d-f99265e85275

### Cloud Native Buildpacks

#### Proof of concept for creating multi-arch images using buildkit

- Description: A proof of concept to add buildkit support to pack in order to build multi-arch images. Pack is the reference implementation of a Cloud Native Buildpacks platform used to build application images from source code.
- Expected Outcome: Multi-arch support has been one of the most requested features for Cloud Native Buildpacks, and this would allow end-users/developers to build multi-arch images with the pack cli.
- Recommended Skills: Golang, Software development literacy, Familiarity building multi-arch containers with Docker and Buildkit. Familiarity with buildpacks will be helpful.
- Mentor(s):
  - Jerico Pena (@jericop, jericop@gmail.com)
  - Juan Bustamante (@jjbustamante, bustamantejj@gmail.com)
  - Natalie Arellano (@natalieparellano, natalie.arellano@broadcom.com)
- Upstream Issue: https://github.com/buildpacks/pack/issues/1570
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2c5ced86-d23b-41f5-aec3-59730e29f092


