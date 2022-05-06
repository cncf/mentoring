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

- Description: As Crossplane ecosystem expands, it's not unusual anymore to have 100s of `CustomResourceDefinition`s in a provider. A big part of this is thanks to code generation tooling we've been building. However, the changes we make with those tools may result in thousands of lines of changes and it's hard to tell whether there is a breaking change in given `CustomResourceDefinition` in those PRs. Today, we're checking manually to see if there is a breaking change and mark the PR as such so that the notice ends up in the release notes. We can have a GH Action that processes diff in `package/crds` folder and report breaking changes in the OpenAPI v3 Schemas of CRDs. It'd comment on the PR and automatically label it with `breaking-change`. This tool would be useful for the whole Kubernetes community that works to extend Kubernetes with `CustomResourceDefinition`s. We should document the variety of ways to pull packages from popular private registries, and also have testing in place to ensure we don't break any of the mechanisms from release to release.
- Recommended Skills: golang
- Mentor(s): Muvaffak Onus (@muvaf), Jared Watts (@jbw976)
- Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/2863

#### Document and add automated testing for pulling packages from private registries

- Description: Crossplane supports pulling packages from private registries through a variety of mechanisms, including [IRSA](https://aws.amazon.com/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts/), [Workload Identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), and [`packagePullSecrets`](https://doc.crds.dev/github.com/crossplane/crossplane/pkg.crossplane.io/Provider/v1@v1.6.3#spec-packagePullSecrets). There are a wide variety of environments in which a user is pulling a private package, which can lead to confusion about which to use, the precedence with which each is invoked, etc. This can lead to issues such as https://github.com/crossplane/crossplane/issues/2876, where I suspect that we are resolving to [Application Default Credentials](https://cloud.google.com/docs/authentication/production#auth-cloud-implicit-go), when we actually want to be using the provided `packagePullSecret`.
- Recommended Skills: golang
- Mentor(s): Daniel Mangum (@hasheddan), Jared Watts (@jbw976)
- Upstream Issue (URL): https://github.com/crossplane/crossplane/issues/2913