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

### Crossplane

#### Report breaking changes in CustomResourceDefinition schemas for Pull Requests

- Description: As Crossplane ecosystem expands, it's not unusual anymore to have 100s of `CustomResourceDefinition`s in a provider. A big part of this is thanks to code generation tooling we've been building. However, the changes we make with those tools may result in thousands of lines of changes and it's hard to tell whether there is a breaking change in given `CustomResourceDefinition` in those PRs. Today, we're checking manually to see if there is a breaking change and mark the PR as such so that the notice ends up in the release notes. We can have a GH Action that processes diff in `package/crds` folder and report breaking changes in the OpenAPI v3 Schemas of CRDs. It'd comment on the PR and automatically label it with `breaking-change`. This tool would be useful for the whole Kubernetes community that works to extend Kubernetes with `CustomResourceDefinition`s.
- Recommended Skills: golang
- Mentor(s): Muvaffak Onus (@muvaf)
- Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/2863
