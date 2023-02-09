## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s): Mentor Name (@mentor_github, mentor@email.addy)
- Upstream Issue:

```

---

## Proposed Project ideas

### Konveyor

#### Move2Kube: Allow customizations be added as remote git repo path

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. Currently, in the CLI we can use the -c flag to point to the folder containing customizations and in UI we could upload a zip file containing the customizatoins. It would be better to consume customizations when specified as a git repo path. The use case can also be extended to take source code input taken directory from a remote git repository.
- Expected Outcome: Move2Kube should be able to consume git repo path as input.
- Recommended Skills: Golang
- Mentor(s): Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com), Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/604

#### Move2Kube: Implement a test suite

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. The project is actively developed with new features and bug fixes being added and it is being actively used by many users. There is a need for a concrete test suite to test various components of Move2Kube and integrate it to the existing CI/CD pipeline.
- Expected Outcome: A test suite for Move2Kube
- Recommended Skills: Golang, testing package, jest and/ react testing library.
- Mentor(s): Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com), Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/957

#### Move2Kube: Consume Move2Kube through a plugin on Eclipse

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. Users currently have to use move2kube command line tool or UI to access move2kube and use it in their replatforming workflows. Allow Move2Kube to be accessible from Eclipse as a plugin. It can start with simple functionality like right clicking on a docker-compose file, and generating all Kubernetes artifacts. An eclipse plugin for Move2kube will promote fast integration in replatforming workflows.
- Expected Outcome: An end to end working eclipse plugin with a demo video showcasing the functionality.
- Recommended Skills: Eclipse, Java, Golang.
- Mentor(s): Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com), Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/396

#### Move2Kube: Consume Move2Kube through a plugin on VSCode

- Description: Move2Kube is a command-line tool for automating creation of Infrastructure as code (IaC) artifacts. It has inbuilt support for creating IaC artifacts for replatforming to Kubernetes/OpenShift. Users currently have to use move2kube command line tool or UI to access move2kube. Allow Move2Kube to be accessible from VSCode as a plugin. It can start with simple functionality like right clicking on a docker-compose file, and generating all Kubernetes artifacts. A VSCode plugin for Move2kube will promote fast integration in replatforming workflows.
- Expected Outcome: An end to end working VSCode plugin with a demo video showcasing the functionality.
- Recommended Skills: VSCode plugins, TypeScript, Golang.
- Mentor(s): Harikrishnan Balagopal (@HarikrishnanBalagopal, harikrishnan.balagopal@ibm.com), Mehant Kammakomati (@kmehant, mehant.kammakomati2@ibm.com)
- Upstream Issue: https://github.com/konveyor/move2kube/issues/395

---
