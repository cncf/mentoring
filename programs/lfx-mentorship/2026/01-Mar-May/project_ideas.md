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

### Fluid


### Harbor

#### Harbor Satellite - Hardware-Backed Zero-Trust Device Identity via PARSEC

- Description: Harbor Satellite provides software-based config encryption and device fingerprinting for edge registries. This project hardens the security model by integrating CNCF PARSEC to enable hardware-backed zero-trust provisioning (ZTP), X.509 device certificates, and device identity. Mentees will implement a secure backend toward a hardware root of trust to enable device attestation via PARSEC's platform-agnostic API, hardware-sealed config encryption with graceful software fallback, and verifiable device identity that Ground Control can cryptographically validate. The work extends the existing SPIFFE/SPIRE authentication with hardware root-of-trust, advancing Harbor Satellite toward a fully zero-trust edge registry with hardware-attested device enrollment.
- Expected Outcome:
  - Integrate CNCF PARSEC for hardware-backed device attestation via its platform-agnostic API
  - Implement hardware-sealed config encryption with graceful software fallback for non-hardware environments
  - Enable verifiable device identity with X.509 certificates that Ground Control can cryptographically validate
  - Extend the existing SPIFFE/SPIRE authentication with hardware root-of-trust
  - Implement zero-touch provisioning (ZTP) with hardware-attested device enrollment
- Recommended Skills: Golang, Containers, PARSEC, SPIFFE/SPIRE, Edge Computing, Cryptography, X.509/PKI
- Mentor(s):
  - Vadim Bauer (@vad1mo, vb@container-registry.com)
  - Orlin Vasilev (@OrlinVasilev, orlin@orlix.org)
  - Prasanth Baskar (@bupd, bupdprasanth@gmail.com)
- Upstream Issue: https://github.com/container-registry/harbor-satellite/issues
