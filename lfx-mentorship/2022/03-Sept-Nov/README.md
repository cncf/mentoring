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


