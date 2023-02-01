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

#### Multi-Architecture Builds Support

- Description: The rise of ARM processors has created new binary targets for pre-compiled executables. Additionally, there are tales of widespread use of operating systems that aren't linux? In the ideal case a `pack` user could create a build for an abritrary architecture and operating system, regardless of the host system they used to run the command.
- Expected outcome: Improved multi-architecture (including ARM) and multi-os "cross-compilation" support in [pack](https://github.com/buildpacks/pack/)
- Recommended Skills: Golang, software development literacy. Familiarity with buildpacks will be helpful.
- Mentor(s): Aidan Delaney (@AidanDelaney); Jerico Pena (@jpena-r7); Juan Bustamante (jbustamante@vmware.com, @jjbustamante)
- Expected project size: 350 Hours
- Difficulty: Medium
- Upstream Issue (URL): https://github.com/buildpacks/pack/issues/1459 and https://github.com/buildpacks/pack/issues/1460


