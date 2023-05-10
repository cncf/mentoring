# Term 02 - 2023 June - August

Status: Planning

Mentorship duration - three months (12 weeks - full-time schedule)

### Timeline

| activity | date |
| --- | --- |   
| project proposals due | Tue, May 9, 5:00 PM PDT |
| mentee applications open | Wed May 10 - Tue May 23, 5:00 PM PDT |
| application review/admission decisions | Wed May 24 - Mon May 29, 5:00 PM PDT |
| Mentorship program begins with the initial work assignments |  Thur June 1 (Week 1) | 
| Midterm mentee evaluations and first stipend payments | Wed July 12 (Week 6) |
| Final mentee evaluations and mentee feedback/blog submission due, second and final stipend payment approvals | Wed Aug 23, 5:00 PM PST (Week 12) |
| Last day of term | Thur Aug 31 |

### Project Instructions

Project maintainers and potential mentors are welcome to propose their mentoring project ideas via submitting a PR to GitHub here https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/2023/02-Jun-Aug/project_ideas.md, by Tuesday, May 9, 2023.

### Application instructions

Mentee application instructions can be found on the [Program Guidelines](https://github.com/cncf/mentoring/blob/main/programs/lfx-mentorship/README.md#program-guidelines) page.

---

Table of Contents

---

# Accepted projects

## Armada

### Build interfaces around Postgres for Armada

- Description: Open source projects should not be hard coded to a particular Database. Armada currently only allows users to use Postgres. This project is to build interfaces around our connections to Postgres so we can allow other databases.
- Expected outcomes:
  - A interface is created that allows Armada to interact with any SQL database without exposing implementation details of postgres
  - increase Test coverage
- Recommend Skills: Go, SQL
- Mentor(s):
  - Geoffrey Wilson, @suprjinx, geoff@gr-oss.com
  - Kevin Hannon, @kannon92, kevin@gr-oss.io
- Upstream Issue (URL): https://github.com/armadaproject/armada/issues/2121
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/73d90321-62b3-498e-bf37-d899ec99df9e

## CoreDNS

### Add DNS-over-QUIC (DoQ) and/or DNS-over-HTTP/3 (DoH3) support

- Description: DNS-over-QUIC (DoQ) and DNS-over-HTTP/3 (DoH3) are relatively new protocols for transmitting DNS queries with security and privacy. Additionally, DoQ and DoH3 also offers other benefits such as improved latency and better error detection. The goal of this proposal is to add DoQ and/or DoH3 support to CoreDNS.
- Expected Outcome: An implementation of DoQ or DoH3 for CoreDNS. A stretch goal of adding both DoQ and DoH3 is also within scope.
- Recommended Skills: Golang, DNS.
- Mentor(s): Yong Tang @yongtang (yong.tang.github@outlook.com); Chris O'Haver @chrisohaver (cohaver@infoblox.com)
- Upstream Issue (URL): https://github.com/coredns/coredns/issues/5583, https://github.com/coredns/coredns/issues/5539
- LFX URL: https://mentorship.lfx.linuxfoundation.org/project/dd10bf62-53d1-4a96-bea2-65bbb78bd10e


