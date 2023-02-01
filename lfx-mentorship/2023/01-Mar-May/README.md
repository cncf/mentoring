# Term 01 - 2023 March - May

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

| activity | date |
| --- | --- |   
| project proposals | January 16 - 31, 5:00 PM PDT |
| mentee applications open | February 1 - 14, 5:00 PM PDT |
| application review/admission decisions/HR paperwork | February 15 - 28, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | March 1 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | April 5 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | May 17, 5:00 PM PST (Week 12) |
| Last day of term | May 26 |


### Project Instructions

Project proposals open Jan 16th, 2023.

Once opened, Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/lfx-mentorship/2023/01-Mar-May/project_ideas.md, by January 31, 2023.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/lfx-mentorship/README.md#program-guidelines) page.

## Accepted Projects

### Cilium

#### Website Use Cases pages

- Description: Cilium would like to have use case pages built out on its website to make it easy for people to find the information and relevant content to the problems they are trying to solve with Cilium.
- Expected Outcome: The mentee will read through relevant docs, blogs, case studies, user stories, and labs to understand the use cases which will drive the content for each of the pages being built. The finished product will be a new use cases section on the Cilium website.
- Recommended Skills: Content Writing, Javascript, CSS
- Mentor(s): Bill Mulligan (@xmulligan, bill@isovalent.com) 
- Upstream Issue: https://github.com/cilium/cilium.io/issues/226
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/81a0e506-1c05-45fa-90c4-6bde8bdc0e61


### Cloud Native Buildpacks

#### Pack Performance enhancements

- Description: Pack is the reference implementation of a Cloud Native Buildpacks platform used to build application images in multiple organizations. Because all developers want their code to build and deploy as quickly as possible, small speedups in pack can have significant benefits, and slow-downs in pack are undesirable. Today, pack has no benchmark suite that would safe-guard against regressions in execution speed.
- Expected Outcome: The mentee will create a benchmark suite around some critical path sections identified with help from maintainers. The mentee will be supported in applying profiling tools to identify possible speedups, hopefully leading to at least one user-facing performance improvement.
- Recommended Skills: Golang, git, software development.  (Mentee does not need prior experience in profiling or performance tuning)
- Mentor(s): Natalie Arellano (@natalieparellano, narellano@vmware.com); Joe Kimmel (@joe-kimmel-vmw, jkimmel@vmware.com) 
- Upstream Issue: https://github.com/buildpacks/pack/issues/1610
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/33e0747c-4ab8-4074-aa90-3b908b3a588e


#### Multi-Architecture Builds Support

- Description: The rise of ARM processors has created new binary targets for pre-compiled executables. Additionally, there are tales of widespread use of operating systems that aren't linux? In the ideal case a `pack` user could create a build for an abritrary architecture and operating system, regardless of the host system they used to run the command.
- Expected outcome: Improved multi-architecture (including ARM) and multi-os "cross-compilation" support in [pack](https://github.com/buildpacks/pack/)
- Recommended Skills: Golang, software development literacy. Familiarity with buildpacks will be helpful.
- Mentor(s): Aidan Delaney (@AidanDelaney); Jerico Pena (@jpena-r7); Juan Bustamante (jbustamante@vmware.com, @jjbustamante)
- Expected project size: 350 Hours
- Difficulty: Medium
- Upstream Issue (URL): https://github.com/buildpacks/pack/issues/1459 and https://github.com/buildpacks/pack/issues/1460
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/ee387e1b-de4e-4c1e-9bef-0239a2e9ca40


### Kubescape

#### Implement security controls based on penetration testing best practices

- Description: Kubescape covers different hardening guidelines around Kubernetes: NSA-CISA, MITRE and CIS. Detection capabilities of potential security issues could be even more enriched by researching pen-testing tools and practices regarding Kubernetes and implementing these as controls. An example pen-test writeup is https://hacktricks.boitatech.com.br/pentesting/pentesting-kubernetes. This and others could help define a set of “offensive” controls to complement the “defensive” controls we have today.
- Expected Outcome: ~10 controls for detecting challenges that would commonly be found in a cluster penetration test. Documentation on how they were selected and how to use them.
- Recommended Skills: Cybersecurity, Rego 
- Mentor(s): Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/1072
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/db63c23a-2b41-40e0-a833-cf0e2c33c739

#### Build debugging capabilities for Helm

- Description: The Go standard templating package (`text/template`) is the base on which Helm templates are built. We wish to be able to backtrack lines and fields in objects after rendering Helm charts. This would help users of Helm to be able to understand quickly where different security issues in the final object are coming from in the source. To do this, the `text/template` package should be extended to include debug markers that point from the output lines to the input lines. 
- Expected Outcome: Propose and implement an extension to the Go package which solves this.
- Recommended Skills: Go
- Mentor(s): Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: https://github.com/helm/helm/issues/11552
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/570b1bba-206d-47ac-9667-22268ff7a6d9

#### Release engineering: add Kubescape to commonly-requested package managers

- Description: The Kubescape client binary is built from GitHub using standard patterns. Support for homebrew and krew exists, but users have requested RPM and DEB packages. In this project you will stabilize the delivery of new builds to existing package managers, and implement support for RPM and DEB packages using GitHub Actions.
- Expected Outcome: When a new Kubescape version is released, it is available in homebrew, krew, RPM and DEB repositories.
- Recommended Skills: Release management, scripting
- Mentor(s): Craig Box (@craigbox, craigb@armosec.io)
- Upstream Issue: https://github.com/kubescape/kubescape/issues/400
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/138e9cac-ec86-43cb-a04f-c2980e3c2865


### KubeVela

#### Extend the capability of KubeVela by making several useful addons

- Description: KubeVela currently have a variety of addons , including experimental options, that address scenarios such as Continual Delivery and observability. To further enhance the out-of-box functionality for users of KubeVela, we can offer additional useful addons.
- Expected Outcome: 10+ eperimetal addons, clear documentation should be provided for enabling and using these addons, including examples of useful use-cases.
- Recommended Skills: golang, kubernetes, cueLang
- Mentor(s): Jianbo Sun (@wonderflow, wonderflow.sun@gmail.com), Wong Yike (@wangyikewxgm, wangyike_wyk@163.com) 
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5358
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/51398c19-87c2-4b50-9dd3-760fbd820688

#### Support auto generation of CUE schema and docs from Go struct

- Description: In KubeVela's provider system, we can use our defined Go functions in CUE schema. The Go providers usually have a parameter and return. Fields in Go providers are the same as fields in CUE schema, so it is possible and important to support automatic generation of CUE schemas and documents from Go structs.
- Expected Outcome: Auto-generators of CUE schemas and docs from Go structs, the capabilities should be wrapped in vela cli command.
- Recommended Skills: Go, CUE
- Mentor(s): Fog Dong (@FogDong, wuwuglu19@gmail.com), Da Yin(@Somefive, yd219913@alibaba-inc.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5364
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/85f61cae-02d7-4931-8d87-d3da3128060e

#### Support auto generation of multiple languages SDK from CUE

- Description: In KubeVela, we use CUElang to code the definition. We want to support auto generation of multiple languages SDK from CUE, so that users can use KubeVela in their own language.
- Expected Outcome: Support auto generation of multiple languages SDK from CUE, including Golang, Java, Python, etc. The capabilities should be wrapped in vela cli command.
- Recommended Skills: Go, Kubernetes, CUE
- Mentor(s): Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com) Zeng Qingguo (@barnettZQG, barnett.zqg@gmail.com)
- Upstream Issue: https://github.com/kubevela/kubevela/issues/5365
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/2981c1de-49af-4bd8-b87d-02e455a96ee1


### Kyverno

#### Pod Security Admission Integrations

- Description: Integrate Kubernetes Pod Security with Kyverno - Part II
- Expected Outcome: PR sent to kubernetes/kubernetes containing necessary changes to implement the behavior on the Kyverno side.
- Recommended Skills: Golang, Kubernetes, Pod Security
- Mentor(s): Shuting Zhao (@realshuting, shuting@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/6144
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/59afc794-c33e-4930-a5b8-eb3abd8d9896

#### Kubernetes Validating Admission Policy Support

- Description: Kubernetes Validating Admission Policy Support
- Expected Outcome: Kyverno support for ValidatingAdmissionPolicy in one of the identified proposals.
- Recommended Skills: Golang, Kubernetes, Admission Controls
- Mentor(s): Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/5441
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/a00294be-06a0-4e66-a2a5-6e2dfb3a097c

#### OCI references support

- Description: Use OCI References in image verification
- Expected Outcome: PR sent to kyverno/kyverno implementing support for OCI references in verifyImages rules
- Recommended Skills: Golang, Kubernetes, OCI images
- Mentor(s): Jim Bugwadia (@jimbugwadia, jim@nirmata.com)
- Upstream Issue: https://github.com/kyverno/kyverno/issues/6142
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e5da551f-8a3d-42ec-8c00-e9ae10a86aa2

#### Artifact Hub listing of Kyverno Policy Library

- Description: Develop a system to reflect all Kyverno Policies in the community library on Artifact Hub
- Expected Outcome: All Kyverno policies searchable on Artifact Hub with an extensible system for future use
- Recommended Skills: Golang, Artifact Hub, DevOps Automation, GitHub Actions
- Mentor(s): Chip Zoller (@chipzoller, chipzoller@gmail.com)
- Upstream Issue: https://github.com/kyverno/policies/issues/491
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/f502b839-a804-4a6c-8da5-3985ce25883e


