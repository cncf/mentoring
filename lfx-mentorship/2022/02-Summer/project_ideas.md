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

#### Karmada

##### Cluster Resource modeling

- Description: In the scheduling progress, the `karmada-scheduler` makes decisions as per a bunch of factors, one of the factors is the resource details of the cluster. We don't want to collect and store each node's resources in detail(That's a burden for Karmada to maintain the information), but we want to build a resource model for each cluster.
- Recommended Skills: golang, k8s, algorithm
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): https://github.com/karmada-io/karmada/issues/772

##### Develop Override policy, Resource Binding, Work Page

- Description: These pages on the web dashboard will help to perform different operations for Override policies, Resource Binding in karmada.
- Recommended Skills: Front-end development, Reactjs, Redux, Figma
- Mentor(s): Hongcai Ren (@RainbowMango), Chinmay Mehta (@chinmaym07)
- Upstream Issue (URL): https://github.com/karmada-io/dashboard/issues/15

##### Develop Propagation policy, Settings, About Pages

- Description: Propogation Policy page on the web dashboard will help to perform different operations for Propagation policies in karmada, Settings page will help the user to modify the dashboard according to their needs.
- Recommended Skills: Front-end development, Reactjs, Redux, Figma
- Mentor(s): Hongcai Ren (@RainbowMango), Chinmay Mehta (@chinmaym07)
- Upstream Issue (URL): https://github.com/karmada-io/dashboard/issues/16

##### Design & Develop FederatedResourceQuota, SearchRegistry & MultiClusterIngress page

- Description: 
More pages need to be designed & added to the dashboard which are required to make great use of the functionalities of the karmada project using the web ui client.
- Recommended Skills: Front-end development, Reactjs, Redux, Figma
- Mentor(s): Hongcai Ren (@RainbowMango), Chinmay Mehta (@chinmaym07)
- Upstream Issue (URL): https://github.com/karmada-io/dashboard/issues/17

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

### Volcano

#### Official Website Docs Enhancement

- Description: Official website docs has not been updated for a long time including technology docs, talks, best practice and so on, which bothers users and developers a lot.  
- Recommended Skills: Kubernetes, golang, technical writing, English, Chinese
- Mentor(s): Lei Wu (@Thor-wl)
- Upstream Issue: <https://github.com/volcano-sh/website/issues/209>

#### Volcano scalability enhancement

- Description: In order to have a better support of other AI/HPC platforms and GPU, it is necessary to enhance the integration with third-party operators and GPU support.
- Recommended Skills: Kubernetes, golang
- Mentor(s): Liang Tang (@shinytang6)
- Upstream Issue: <https://github.com/volcano-sh/volcano/issues/2211>