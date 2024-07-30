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

### Istio

#### Improve documentation build infrastructure

CNCF - Istio: Improve documentation build infrastructure (2024 Term 3)

- Description: The build infrastructure for istio.io currently carries a complete archived copy of the site for each release of Istio.  These archived versions should be separated to their own branch, with only the supported versions published.  We should also separate out content which is not version-specific (e.g. the home page, news and blogs) so that only the latest version of this content is visible online.
- Expected Outcome: Updated publishing infrastructure for istio.io which separates evergreen content (home page, blogs) with versioned content (documentation).  Drop-downs per docs page allow switching between the supported versions.  
- Recommended Skills: Systems engineering, scripting, programming (Go/Bash), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15463
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/7a9cac67-6cfc-4915-bc39-8f2b5c1a4d00

#### Implement new site search

CNCF - Istio: Implement new site search (2024 Term 3)

- Description: Up to four versions of Istio are supported at one time, and so the documentation for each must be available. Our current site search is outdated and needs to be replaced, so that the search content only exists in the site search, and only fresh content is available on google.com.
- Expected Outcome: Working site search on istio.io, which lets you search for content for the currently supported versions.
- Recommended Skills: Hugo, Systems engineering, scripting, programming (Bash/go), Hugo templating
- Mentor(s):
  - Craig Box (@craigbox, craig.box AT gee-mail)
- Upstream Issue: https://github.com/istio/istio.io/issues/15464
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/557f553d-6cab-41e5-925e-c8063dc99d7e

