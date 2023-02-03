## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description: 
- Expected Outcome:
- Recommended Skills: 
- Mentor(s): Mentor Name (@mentor_github, mentor@email.addy) 
- Upstream Issue: 

---

```

## Proposed Project ideas


### Notary

#### HashiCorp Vault plugin for Notary

- Description: Notary is a CNCF incubating project that aims to provide signing and verification capabilities to ensure delivery integrity and security. It supports creating and storing signatures for container images, SBOM, vulnerability scanning results, etc. to ensure the artifacts someone produced have not been tampered by others. Notary only has an Azure Key Vault plugin for storing keys in Azure Key Vault, which is used to sign and verify artifacts in the OCI registry. [HashiCorp Vault](https://github.com/hashicorp/vault) is a popular KMS and we see more and more users rely on it in the on-premise environment.
- Expected Outcome: Develop a Key Management System (KMS) plugin with [HashiCorp Vault](https://github.com/hashicorp/vault) for Notary CLI (Notation), which can be used to store the keys for Notation signing and verification.
- Recommended Skills: Golang programming language, Notary knowledge.
- Mentor(s): Patrick Zheng (@patrickzheng200, patrickzheng@microsoft.com), Shiwei Zhang (@shizhMSFT, shiwei.zhang@microsoft.com)
- Upstream Issue: https://github.com/notaryproject/notation/issues/521


### ORAS

#### Develop .NET SDK for ORAS

- Description: [ORAS](https://oras.land/) is a tool for working with OCI artifacts and OCI registries. It allows users to distribute OCI artifacts across OCI Registries. Users seeking a generic registry client can benefit from the ORAS CLI, while developers can build their own clients on top of one of the ORAS client libraries. ORAS has Python and Golang SDK that allow developers to build their own clients on top of one of the library. Similarly, developing a .NET SDK will enable .Net developers to use ORAS API and enhance the ORAS ecosystem. 
- Expected Outcome: Develop a .NET SDK in a new repository and write the examples and API document on GoDoc. Write unit test for this SDK and make sure the testing coverage is qualified.
- Recommended Skills: C#/.NET, ORAS conceptual knowledge.
- Mentor(s): Sylvia Lei (@Wwwsylvia, lixia.lei@microsoft.com), Shiwei Zhang (@shizhMSFT, shiwei.zhang@microsoft.com)
- Upstream Issue: https://github.com/oras-project/oras/issues/774

#### Develop ORAS Website

- Description: [ORAS](https://oras.land/) is a tool for working with OCI artifacts and OCI registries. It allows users to distribute OCI artifacts across OCI Registries. ORAS only has a documentation site so far, the project goal is to develop a new website using Hugo framework based on the Figma layout design.
- Expected Outcome: Develop a new website using the [Hugo framework](https://gohugo.io/) based on the Figma layout design. It will replace the existing [ORAS documentation website](https://oras.land/) and provide a better user experience with interactive design.
- Recommended Skills: HTML, Javascript, CSS, Hugo.
- Mentor(s): Feynman Zhou (@FeynmanZhou, feynmanzhou@microsoft.com), 
- Upstream Issue: https://github.com/oras-project/oras-www/issues/82


### CNCF Landscape

#### LFX - CNCF Landscape UX UI improvement
- Description: In an effort to better the user experience, the CNCF Landscape is actively seeking ways to improve and enhance its features.
- Expected outcome: The mentee will plan and execute a User Research to validate existing user personas, gain deeper insights into user needs, and perform a detailed heuristic evaluation in order to gain an in-depth understanding of user experiences. With the findings, the mentee will develop an iterative process to ideate, prototype and test 2 to 3 minimal features, with the aim of beginning a chain of continual enhancements and further development.
- Recommended skills: Design Thinking, UX research methodology, Figma and Visual Design.
- Mentors: Andrea Velázquez andrea@buoyant.io, Nate W. @nate-double-u natew@cncf.io, Chris Aniszczyk @caniszczyk caniszczyk@linuxfoundation.org 
- Upstream issue: https://github.com/cncf/landscape/issues/2467

---
