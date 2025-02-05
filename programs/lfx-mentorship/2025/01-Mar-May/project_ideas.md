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

### OpenKruise

#### Implement Fuzz testing for OpenKruise

- Description: Implement fuzz testing for OpenKruise using a suitale tool like oss-fuzz. Generate a comprehensive input set to guide the fuzz testing, and identify features that accept complex user inputs for testing. Document the entire process for repeatability in future versions and integrate the fuzz testing into CI pipeline.
- Expected Outcome:
  - Add a fuzz test that covers important features including workoadspread,uniteddeployment, sidecarset and resourcedistribution.
  - Enable continuous fuzzing using [OSS-Fuzz](https://github.com/google/oss-fuzz).
- Recommended Skills: Go, Kubernetes, Fuzz Testing Experience
- Mentor(s):
  - Zhang Zhen (@furykerry, furykerry@gmail.com)
  - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
- Upstream Issue: https://github.com/openkruise/kruise/issues/1713

