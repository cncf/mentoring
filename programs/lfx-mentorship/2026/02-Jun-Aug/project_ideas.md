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

### KubeArmor

#### KubeArmor Supply Chain Security with SLSA Level 3 Compliance and OpenSSF Scorecard Hardening

- Description: KubeArmor is a runtime security engine that enforces zero-trust policies at the kernel level. As a security-critical project in the CNCF ecosystem, it must hold its own supply chain to the highest standards. This project focuses on two tightly related goals. First, achieving SLSA Level 3 compliance by auditing KubeArmor's build and release pipeline against the full SLSA L3 specification — covering hermetic builds, non-falsifiable provenance generation via SLSA GitHub Actions, and signed release attestations using cosign. KubeArmor already signs container images; this project closes the remaining gaps by following a strategy similar to KubeEdge's documented SLSA L3 journey. Second, improving KubeArmor's OpenSSF Scorecard rating by systematically addressing low-scoring checks - including Signed-Releases, Fuzzing (OSS-Fuzz integration), SAST (CodeQL), Pinned-Dependencies, and CII Best Practices. Also integrating the Scorecard GitHub Action into CI for continuous score tracking. The pre-task for mentee candidates will be submitting a pull request that enables and verifies the Signed-Releases check on KubeArmor's OpenSSF Scorecard, establishing a clear baseline before the full term begins.

- Expected Outcome:
  - Full SLSA Level 3 compliance for KubeArmor releases, with SLSA provenance attestations generated and published for each release artifact
  - Signed release artifacts (binaries, container images, SBOMs) verified end-to-end using cosign and SLSA verifier
  - Measurable improvement in KubeArmor's OpenSSF Scorecard aggregate score, with targeted checks resolved: Signed-Releases, Fuzzing, SAST (CodeQL integration), and Pinned-Dependencies
  - OpenSSF Scorecard GitHub Action integrated into KubeArmor's CI pipeline for automated, ongoing score tracking
  - A gap analysis document and follow-up GitHub issues capturing any remaining SLSA or Scorecard items for future contributors
  - Documentation covering the supply chain security posture: how to verify release provenance, how to reproduce builds, and how Scorecard checks are enforced

- Recommended Skills: Go, GitHub Actions, cosign, SLSA framework (slsa-github-generator), OpenSSF Scorecard, CI/CD pipelines, Git, Kubernetes

- Mentor(s):
  - Rishabh Soni (@rootxrishabh, risrock02@gmail.com)
  - Aryan Sharma (@Aryan-sharma11, aryan1126.sharma@gmail.com)
  - Ramakant Sharma (@rksharma95, ramakant@accuknox.com)
  - Barun Acharya (@daemon1024, barun1024@gmail.com)

- Upstream Issue:
  - https://github.com/kubearmor/KubeArmor/issues/1164
  - https://securityscorecards.dev/viewer/?uri=github.com/kubearmor/KubeArmor

