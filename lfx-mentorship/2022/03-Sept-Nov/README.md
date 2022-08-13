# Term 03 - 2022 November - September

Status: planning

## Table of Contents

### Timeline

#### Term 3: September 5th - November 30th

Mentorship duration - three months (12 weeks - full-time schedule)

| activity | date |
| --- | --- |   
| project proposals | August 1 - August 12, 5:00 PM PDT |
| mentee applications open | August 15 - August 24, 5:00 PM PDT |
| application review/admission decisions/HR paperwork | August 25 - September 1, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | September 5 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | October 6 (End of Week 5) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | November 16, 5:00 PM PST (End of Week 11) |
| Last day of term | November 30 |

### Project Instructions

Project proposals open August 1st, 2022.

Once opened, Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/lfx-mentorship/2022/03-Sept-Nov/project_ideas.md, by August 12th, 2022.

### Applciation instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/lfx-mentorship/README.md#program-guidelines) page.

## Accepted Projects

### Cilium

#### Improving Security posture of the Cilium/Hubble/Tetragon release process

- Description: To be able to improve the Security posture of the Cilium family’s open source projects (Cilium, Hubble, Tetragon), we would need to create signed SBOMs, signed release artifacts for each open source project and automate all of these steps.

- Recommended Skills: Golang, GitHub Actions, Kubernetes, Docker, Security
- Mentor(s): [André Martins](https://github.com/aanm)  [Natália Réka Ivánkó](https://github.com/sharlns) [Jed Salazar](https://github.com/jedsalazar)
- Issues: <https://github.com/cilium/cilium/issues/19282> <https://github.com/cilium/cilium/issues/20712> <https://github.com/cilium/cilium/issues/20850>

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/680e32e5-d056-46fa-a94d-4af453d4e81d


### KubeArmor

#### Add BTF and BPF CO-RE Support to KubeArmor

- Description: Currently KubeArmor depends on kernel headers to use various kernel structures. This creates difficulty in having portability.
Linux Kernel versions with BTF (BPF Type Format) information available allows us to write portable BPF CO-RE (or Compile Once - Run Everywhere) applications that can run on multiple kernel versions and configurations without any modification or runtime compilation on the target machine.  
But there is a restriction that CO-RE requires to have the BTF information of the target kernel, which is provided by the kernel itself when it's compiled with CONFIG_DEBUG_INFO_BTF=y. This option was introduced in Linux 5.2.  
For kernels < 5.2 we can use BTFGen to ship BTF information with KubeArmor code or use pahole to generate BTF information from the vmlinux image (with DWARF information) at runtime.  
The project aims to make KubeArmor truly portable across all kernel versions by reducing host environment dependencies.

- Recommended Skills: Kernel, go, C 
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/789>

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/d61e1b05-2a4f-432d-b715-57c818b3e120

#### Use non-privileged containers for KubeArmor daemonset

- Description: KubeArmor currently uses privileged mode for its daemonset containers. But it is not a good practice. Privileged containers are usually frowned upon. In many cases, specific admission controllers are deployed to not allow containers to be installed in privileged mode.
It is best to not use privileged mode but to define specific capabilities for KubeArmor.  
The aim of the project is to analyse and reduce the system privileges required by KubeArmor, thereby reducing the potential attack surface.

- Recommended Skills: go, Kernel, k8s
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/781>

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/3cc962b4-cd8b-46ea-9c77-83304145fd51


### Kyverno

#### Policy Exceptions

- Description: Enable flexible management of policy exceptions without requiring changes to the policy definitions.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/2627 

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/0eb98f34-bfd8-4ba1-b9e5-47fc67b6fd41

#### Enable resource clean-up

- Description: Support a new type of Kyverno rule to delete resources based on various criterias, such as the type, age, metadata and status.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3483
  - https://github.com/kyverno/KDP/pull/25 

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/25e0fa72-8260-4c6f-819b-d87b865e58f2

#### Implement new custom JMESPath filters

- Description: Kyverno uses JMESPath to perform filtering and selection of JSON content in a flexible and advanced way. Many custom filters have been implemented specifically for Kyverno to date. Implement two more filters which fill needed gaps in Kyverno today: a random string generator and an index locator.
- Recommended Skills: Golang
- Mentor(s): Chip Zoller, Shuting Zhao
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3598 
  - https://github.com/kyverno/kyverno/issues/3981

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/bb0ff695-3d54-4ce2-b93c-3ab92842b3ee

#### Logging in JSON plus other enhancements

- Description: Add an ability allowing a user to tell Kyverno to log in JSON format rather than klog.
- Recommended Skills: Golang
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3411

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/e5ef8032-3dd3-44c3-8746-620f4f678d60

#### More support for subresources

- Description: Kyverno lacks the ability to operate on some important subresources like /scale and /status in areas such as validation and mutation.
- Recommended Skills: Golang
- Mentor(s): Shuting Zhao
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3118
  - https://github.com/kyverno/kyverno/issues/2843
  - https://github.com/kyverno/kyverno/issues/4313 

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/9ac41a72-62f4-48e9-8630-5f9be261e2bf


### Vitess

#### Add complete parsing support for Spatial MySQL functions II

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of spatial MySQL functions are not parsed correctly and result in syntax errors. The task of the mentee would be to add parsing support for such functions and features which can be found at https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): [Manan Gupta](https://github.com/GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>

LFX URL: https://mentorship.lfx.linuxfoundation.org/project/845ccf34-d7aa-45cf-abc2-1b3064e96af1

### Improve evaluation engine

- Description: Improve the compatbility of Vitess' evaluation engine against MySQL by adding support for more built-in SQL functions.
- Detailed description: The evaluation engine in Vitess is one of the most critical parts of our query serving infrastructure. This engine is capable of evaluating arbitrary SQL expressions directly inside Vitess' process, without reaching out to a live MySQL instance, and this allows us to plan and execute complex user queries (e.g. queries that contain WHERE and similar filter clauses) between Vitess shards much more efficiently. If you're interested in this GSoC project, your task for the summer will involve continuing the work on this evaluation engine by implementing support for as many built-in SQL functions as possible, using the behavior of MySQL as a reference.
- Expected outcomes: We expect the Evaluation Engine in Vitess to be close to 100% compatible with MySQL after all the leftover SQL built-ins have been implemented.
- Recommended Skills: Golang, MySQL
- Mentor(s): Vicent Marti (@vmg)
- Expected size of the project: 350h
- Difficulty rating: Medium
- Upstream Issue (URL): https://github.com/vitessio/vitess/issues/9647

- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/29ec853c-3ab9-4457-ac91-d273fa073d49
