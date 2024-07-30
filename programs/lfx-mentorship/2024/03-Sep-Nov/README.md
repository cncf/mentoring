# Term 03 - 2024 September - November

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity                                                                                                     | date                                                                                |
|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|   
| project proposals                                                                                            | Jul 3 - Jul 30 5:00 PM PDT                                                          |
| mentee applications open                                                                                     | Jul 31 - Aug 13 5:00 PM PDT                                                         |
| application review/admission decisions                                                                       | Aug 14 - Aug 27 5:00 PM PDT                                                         |
| selection notifications                                                                                      | Sept 3, 2024 5:00 PM PDT                                                            |
| Mentorship program begins with the initial work assignments                                                  | Sept 9, 2024                                                                        | 
| Midterm mentee evaluations and first stipend payments                                                        | October 15, 2024 5:00 PM PDT (the week following the National Day holiday in China) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Nov 26, 2024 5:00 PM PDT (Giving some time after KubeCon NA)                        |
| Last day of term                                                                                             | November 29, 2024                                                                   |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here [2024/03-Sep-Nov/project_ideas.md](./project_ideas.md), by July 23, 2024.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

## Accepted projects

### Envoy Gateway

#### IPv4/IPv6 Dual Stack Support

CNCF - Envoy Gateway: IPv4/IPv6 Dual Stack Support (2024 Term 3)

- Description: Envoy Gateway is an open source project for managing Envoy Proxy as a standalone or Kubernetes-based application gateway. Gateway API resources are used to dynamically provision and configure the managed Envoy Proxies. Currently the implementation only supports Kubernetes clusters with IPv4 enabled, and not IPv6
- Expected Outcome:
  The managed Envoy Proxy fleet can
  - Accept connections/listen on an interface that has an IPv6 address assigned to it
  - Can route to IPv6 pod endpoints/addresses
- Recommended Skills: Golang, familiarity with Kubernetes Networking
- Mentor(s):
  - Jianpeng He (@zirain, zirain@tetrate.io)
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/184
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/408607a5-22a7-469e-ba9b-773e8fb06ace

