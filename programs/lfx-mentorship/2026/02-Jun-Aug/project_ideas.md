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

### Kubescape

#### In-cluster, GitOps-native SecurityException CRD for Kubescape, with Headlamp plugin support

- Description: Kubescape today has no declarative, in-cluster mechanism for posture/compliance exceptions — they only come from JSON files or the ARMO cloud API, which blocks GitOps-native workflows and air-gapped clusters. A design for a `SecurityException` / `ClusterSecurityException` CRD (group `kubescape.io/v1`) already exists and covers both vulnerability and posture exceptions in a single resource with OpenVEX-compatible fields, label/namespace/image selectors, CEL validation, and Kubernetes Events for observability. The kubevuln (vulnerability) side is being implemented by the maintainers; this project focuses on the kubescape (posture) side, the operator rescan integration, and surfacing exceptions in the Kubescape Headlamp plugin so users can view and manage them from the UI.
- Expected Outcome:
  - New `CRDExceptionsGetter` implementing `IExceptionsGetter` in kubescape, wrapping the existing getter and merging CRD posture entries (`SecurityException → armotypes.PostureExceptionPolicy`).
  - Match-field conversion: `resources`, `objectSelector`, and `namespaceSelector` mapped to `PortalDesignator` attributes; cloud-vs-CRD precedence per the design (cloud wins on overlap).
  - `expiresAt` evaluated at scan time; scan-time Kubernetes Events emitted on matched SecurityException resources.
  - Operator `SecurityExceptionWatchHandler` watching both kinds with a debounced `CooldownQueue`, dispatching rescans on changes.
  - CRD manifests with CEL validation rules merged into the Helm chart.
  - Headlamp plugin additions: list/view `SecurityException` and `ClusterSecurityException` resources, show matched findings/events, and a guided form to create new exceptions from a failing control or CVE on a workload.
  - Unit + integration tests for the Go side, plugin tests for the UI, and end-to-end verification against a running cluster.
- Recommended Skills: Go, Kubernetes (controllers, CRDs, client-go / controller-runtime, dynamic client), TypeScript/React (for the Headlamp plugin).
- Mentor(s):
  - Matthias Bertschy (@matthyx, matthiasb@armosec.io) - primary
  - Ben Hirschberg (@slashben, ben@armosec.io)
- Upstream Issue: [kubescape/kubescape#1982](https://github.com/kubescape/kubescape/issues/1982)

