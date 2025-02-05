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


### Thanos

#### Add support for new PromQL aggregations

[Thanos](https://thanos.io) has its own PromQL ([Prometheus](https://prometheus.io) querying language) engine. The original PromQL engine recently added support for new aggregations. We are missing support for them in the [Thanos PromQL engine](https://github.com/thanos-io/promql-engine).

In this project you will implement support for `limitk` and `limit_ratio`. See [issue](https://github.com/thanos-io/promql-engine/issues/515). This will unblock users who need this functionality.

The project is interesting because you will learn how query engines are implemented, about distributed query execution.

- Expected Outcome: `limitk`, `limit_ratio` are supported in the Thanos PromQL engine (local & distributed modes), tests are written for them
- Recommended Skills: Go programming language experience
- Mentor(s): #
  - Giedrius Statkevičius (@GiedriusS, giedriuswork@gmail.com)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue (URL): https://github.com/thanos-io/promql-engine/issues/515

