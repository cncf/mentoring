# Term 03 - 2023 September - November

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |   
| project proposals | Thur July 27, 5:00 PM PDT |
| mentee applications open | Wed Aug 2 - Tues 15, 5:00 PM PDT |
| application review/admission decisions | Wed Aug 16 - Tues Aug 29, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | Mon Sept 4 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | Wed Oct 11 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed Nov 22, 5:00 PM PST (Week 12) |
| Last day of term | Thur Nov 30 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2023/03-Sep-Nov/project_ideas.md, by Thursday, July 27, 2023.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

Table of Contents

---

## Accepted projects

### Armada

#### Build a virtual-kubelet provider for Armada

- Description: [Virtual Kubelet](https://github.com/virtual-kubelet/virtual-kubelet) is a way to bring a Kubernetes front end and allow for your execution environment to be something other than Kubernetes. We want to add a virtual-kubelet provider for Armada so we can allow for a k8 front end integration with Armada.
- Expected outcomes:
  - A provider for virtual-kubelet that allows integration of Armada with Virtual-Kubelet
- Recommend Skills: Go
- Mentor(s):
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): https://github.com/armadaproject/armada/issues/2702
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a80908c1-c05b-46c4-a41b-32392c4822cb

### CRI-O

#### Add additional log drivers to conmon-rs

- Description: conmon-rs is a container monitor written in Rust, used by CRI-O to monitor a container's lifecycle. Part of its responsibilities is log forwarding--taking the output of the container and writing that output to various places. Currently, conmon-rs supports one format: the one required by the Kubernetes CRI. The goal of this proposal is to add new log formats from the list of standardized ones, like JSON, Splunk, Journald.
- Expected outcome: A JSON log driver and Journald log driver are added to conmon-rs. A stretch goal of adding a Splunk log driver is also within scope.
- Recommended Skills: Rust, familiarity with containers
- Mentor(s):
  - Peter Hunt, haircommander, pehunt@redhat.com
  - Sascha Grunert, saschagrunert, sgrunert@redhat.com
- Upstream Issue (URL): https://github.com/containers/conmon-rs/issues/1126
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/99274b1a-694b-4af5-b7ca-39311f38a646

#### CRI stats KEP

- Description: [CRI stats KEP](https://github.com/kubernetes/enhancements/issues/2371) is an effort to take the container stats and metrics collection from cAdvisor and move it to the CRI implementations. CRI-O will soon have support for stats and metrics collected through CRI, but work needs to be done to verify and validate these fields, and make sure their collection is performant as possible.
- Expected outcome: A test suite verifying the correctness of CRI-O's stats and metrics collection, as well as data verifying performance regressions are minimal at worst.
- Recommended Skills: Golang, familiarity with containers
- Mentor(s):
  - Peter Hunt, haircommander, pehunt@redhat.com
  - Sohan Kunkerkar, sohankunkerkar, skunkerk@redhat.com
- Upstream Issue (URL): https://github.com/cri-o/cri-o/issues/7175
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/cb189d71-3943-450a-9d5f-d71bd66d73c9


