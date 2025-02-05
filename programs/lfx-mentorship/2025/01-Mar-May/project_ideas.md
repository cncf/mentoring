## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
- Upstream Issue:

```

---

## Proposed Project ideas

### Envoy Gateway

#### Enhancing Envoy Gateway Documentation Using CNCF Tech Docs Analysis Framework

- Description: The **Envoy Gateway** project provides a simplified way to use **Envoy Proxy as an API Gateway**,
and its documentation is critical to enabling adoption, onboarding new users, and improving developer experience.
While the existing documentation covers core concepts and use cases, applying the **CNCF Tech Docs Analysis Framework**
will help assess and systematically enhance its **clarity, completeness, and usability**.

This project aims to evaluate and improve the [Envoy Gateway website and documentation](https://gateway.envoyproxy.io) by
leveraging the structured analysis methodology from the [CNCF Tech Docs Analysis Framework](https://github.com/cncf/techdocs/blob/main/docs/analysis/howto.md).
The outcome will be a **comprehensive documentation improvement plan**, with targeted updates and best practices implemented.

- Expected Outcome:
  - Apply the **CNCF Tech Docs Analysis Framework** to assess Envoy Gateway docs
  - Identify gaps in **content, structure, readability, and technical accuracy**
  - Improve documentation **organization, navigation, and developer onboarding**
  - Optimize technical guides, examples, and API references
  - (Stretch Goal) Introduce best practices for **continuous documentation improvement**

- Recommended Skills:
  - Familiarity with **Envoy Proxy, Envoy Gateway, Kubernetes, and API Gateways** (or willingness to learn)
  - Experience with **Markdown, static site generators (e.g., Hugo), and GitHub-based workflows**
  - Interest in **developer experience, technical writing, and open-source documentation**
  - Ability to conduct structured **documentation analysis and usability improvements**

- Mentor(s):
  - Erica Hughberg (@missBerg, erica.hughberg@tetrate.io)
  - Arko Dasgupta (@arkodg, arko@tetrate.io)
- Upstream Issue: https://github.com/envoyproxy/gateway/issues/5203

### Kyverno

#### Chainsaw Tests For New Policy Types

- Description: Kyverno 1.14 is introducing new policy types based on the upstream Kubernetes ValidatingAdmissionPolicy and MutatingAdmissionPolicy resources, as well as a new ImageVerificationPolicy based on CEL. This project will add e2e tests using Chainsaw for these new policy types.
- GitHub Issue: [Chainsaw testing](https://github.com/kyverno/kyverno/issues/12065)
- Recommended Skills: Golang, Kubernetes, ValidatingAdmissionPolicy
- Mentor(s):  Charles-Edouard Brétéché (@eddycharly, charles.edouard@nirmata.com)

#### Sample Policies For New Policy Types

- Description:  Kyverno 1.14 is introducing new policy types based on the upstream Kubernetes ValidatingAdmissionPolicy and MutatingAdmissionPolicy resources, as well as a new ImageVerificationPolicy based on CEL.  This project will focus on the website and sample policy updates using the new policy types.
- GitHub Issue: https://github.com/kyverno/kyverno/issues/12085 
- Recommended Skills: Golang, Kubernetes, ValidatingAdmissionPolicy, MutatingAdmissionPolicy
- Mentor(s): Jim Bugwadia [@JimBugwadia](https://github.com/JimBugwadia)

#### Mutating Admission Policy Integration
- Description: This project will focus on Integrating the new Kubernetes MutatingAdmissionPolicy with Kyverno CLI for the apply and test commands. 
- GitHub Issue: https://github.com/kyverno/kyverno/issues/10573
- Recommended Skills: Golang, Kubernetes, MutatingAdmissionPolicy
- Mentor(s): Mariam Fahmy (@MariamFahmy98, mariam.fahmy@nirmata.com), Shuting Zhao (@realshuting, shuting@nirmata.com)

### Thanos

#### Add support for new PromQL aggregations

Thanos (https://thanos.io) has its own PromQL (Prometheus (https://prometheus.io) querying language) engine. The original PromQL engine recently added support for new aggregations. We are missing support for them in the Thanos PromQL engine (https://github.com/thanos-io/promql-engine).

In this project you will implement support for `limitk` and `limit_ratio`. See issue (https://github.com/thanos-io/promql-engine/issues/515). This will unblock users who need this functionality.

The project is interesting because you will learn how query engines are implemented, about distributed query execution.

- Expected Outcome: `limitk`, `limit_ratio` are supported in the Thanos PromQL engine (local & distributed modes), tests are written for them
- Recommended Skills: Go programming language experience
- Mentor(s): #
  - Giedrius Statkevičius (@GiedriusS, giedriuswork@gmail.com)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue (URL): https://github.com/thanos-io/promql-engine/issues/515

### Volcano

#### Volcano supports queue-level scheduling policies

- Description: Volcano supports unified scheduling of online and offline workloads, provides a wealth of scheduling plugins and algorithms, and can distinguish different tenants through queue distinction. The current scheduling policy is a global configuration, and all jobs in the queue use the same scheduling policy, but in actual scenarios, different tenants may need to use different scheduling policies due to different usage scenarios. Therefore, volcano needs to support setting and using different scheduling policies at the queue level instead of using a globally unified scheduling policy.
- Expected Outcome:
  - A new field is added to the queue CRD, and users can set scheduling policies at the queue level.
  - Volcano scheduler implements different scheduling policies based on the queue in which the job is located.
- Recommended Skills: Kubernetes, GO, Volcano
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3992

#### Coordinate descheduler and Volcano to support resource defragmentation

- Description: Volcano community has provided Volcano descheduler to support descheduling. Currently, load-aware rescheduling is supported. Resource fragmentation is a problem that users are more concerned about. Volcano needs to provide a resource defragmentation strategy based on the existing descheduler, and needs to ensure that the evicted pods can be rescheduled successfully, which requires the cooperation of the rescheduler and the scheduler to solve resource fragmentation and maximize resource utilization.
- Expected Outcome:
  - Implementing a resource defragmentation strategy based on Volcano descheduler.
  - The Volcano descheduler works in conjunction with the Volcano scheduler to ensure that evicted pods can be re-scheduled successfully.
- Recommended Skills: Kubernetes, GO, Volcano
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/volcano/issues/3948

#### Volcano dashboard feature enhancements

- Description: Volcano dashboard is a volcano resource front-end display tool. Currently, it only supports viewing resources, and the resources displayed are limited. It needs to support viewing more resources, and supports operations such as creation and deletion.
- Expected Outcome:
  - Supports viewing resources other than volcano related resources.
  - Supports add, delete, modify and query resources such as queues and volcano jobs.
- Recommended Skills: Kubernetes, React, Node, JS
- Mentor(s):
  - Xuzheng Chang(@Monokaix, 2536818783@qq.com)
  - Zicong Chen(@JesseStutler, jesseincomparable@hotmail.com)
- Upstream Issue: https://github.com/volcano-sh/dashboard/issues/11
