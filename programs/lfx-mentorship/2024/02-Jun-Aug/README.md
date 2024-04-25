# Term 02 - 2024 June - August 

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |   
| project proposals | Monday April 8 - Wed May 8, 2024, 5:00 PM PDT |
| mentee applications open | Monday May 13 - Tues May 28, 5:00 PM PDT |
| application review/admission decisions | Wed May 29 - Tues June 11, 5:00 PM PDT |
| selection notifications | Tues June 12, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments | Monday June 17 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | Wednesday July 24 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed Aug 28, 5:00 PM PST (Week 12) |
| Last day of term | Friday Aug 30 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2024/02-Jun-Aug/project_ideas.md, by April 24, 2024.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Table of Contents

- [Vitess](#vitess)
    * [Improve the website of our automated-benchmarking tool (migrate to shadcn ui and typescript)](#improve-the-website-of-our-automated-benchmarking-tool-migrate-to-shadcn-ui-and-typescript)

---

## Accepted projects

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
- Upstream Issue (URL): https://github.com/vitessio/arewefastyet/issues/525
