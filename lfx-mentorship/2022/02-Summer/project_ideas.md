# Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

## Template

```
### CNCF Project Name
#### Title

- Description:
- Recommended Skills:
- Mentor(s):
- Upstream Issue (URL):
```

## Sample

### Prometheus (sample)

#### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Upstream Issue: <https://github.com/prometheus/prometheus/issues/3416>

---

## Proposed Project ideas


### Tremor

#### Pluggable logging
- Description:  Tremor is an event processing system that can - among other things - process logs and metrics. Currently, Tremor uses log4rs to handle its own logging. We would like tremor to have a facility to handle its logs through its own pipelines (similar to the pluggable metrics experience). A starting point could be a sink for log4rs, which could then be replaced completely, making log4rs an optional output.
- Recommended Skills: Rust, Testing
- Mentor(s): Ramona Łuczkiewicz (@agares), Darach Ennis (@darach)
- Upstream Issue: https://github.com/tremor-rs/tremor-runtime/issues/1621   

#### Hygenic error handling and validation for pipelines
- Description: Tremor uses its own language for pluggable user defined functionality. The language interconnects internal operators via the `connect` statement and the `select` statement. Currently, neither `select` nor `connect` verifies that the operator port of the receiving or the sending part is correct ( exists, and is an expected type ) - this can lead to silent or confusing errors. User experience is super important to tremor, so that is a solution state we’re not happy with. The goal of this mentorship is to add validation and provide targeted hygienic errors to users that are trivial to diagnose and resolve as this will massively improve user experience.
- Recommended Skills: Rust, Programming Language Design
- Mentor(s): Matthias Wahl (@mfelsche), Heinz N. Gies (@Licenser)
- Upstream Issue: https://github.com/tremor-rs/tremor-runtime/issues/1358
