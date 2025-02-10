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

### Meshery

#### Meshery Model Support for kro ResourceGraphDefinitions (RGDs)

- Description: Enhance Meshery's existing orchestration capabilities to include support for kro ResourceGraphDefinitions (RGDs) as first-class [Meshery Models](https://docs.meshery.io/concepts/logical/models). This involves enabling Meshery to manage and orchestrate RGDs, similar to how it handles other Kubernetes resources.  The project will also include generating support for ResourceGraphDefinition in Meshery's Model generator.

- Expected Outcome:  Meshery will be able to orchestrate and manage kro RGDs.  This includes the ability to deploy, configure, and manage the lifecycle of RGDs through Meshery.  The Meshery Model generator will be updated to automatically generate models for kro RGDs, simplifying their integration and management within Meshery. This will be an officially supported feature of Meshery.
- Recommended Skills: Golang, Cuelang, Well-written and well-spoken English, Kubernetes, DevOps
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Mia Grenell (@miacycle, mia.grenell2337@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/13520
- LFX URL: https://crowdfunding.lfx.linuxfoundation.org/projects/2ce4cf0b-05e0-430a-b9e1-3df46d917ef6

#### Hands-on tutorials using Meshery Playground

- Description: Learning paths with hands-on labs are a crucial resource for DevOps engineers and cloud-native practitioners. The Meshery Playground provides a live cluster environment, making it an ideal platform for learning every kind of cloud and cloud native technology. Meshery Docs is in need of comprehensive tutorials and scenarios covering common infrastructure management use cases.

Your mission in this internship is to create and publish a series of hands-on tutorials using Meshery Playground. Each tutorial will include step-by-step guides, live demonstrations, and interactive labs using the Playground allowing learners to apply their knowledge directly without the hassle of any configuration.These tutorials will be reviewed by various project maintainers and then published in [guides/tutorials](https://docs.meshery.io/guides/tutorials).

- Expected Outcome:
  - 10+ new tutorials published in Meshery Docs.
  - Each tutorial should be interactive, guiding users through infrastructure management scenarios.
  - Tutorials should vary in complexity, catering to beginners and advanced learners
- Recommended Skills: written English, Markdown, Kubernetes, DevOps, and hands-on experience with cloud-native tools.
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), James Horti (@hortison, james.horton2337@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/13521
- LFX URL: https://crowdfunding.lfx.linuxfoundation.org/projects/4cca92b8-ede6-4396-8d3f-68cfa2ec911c

#### Expanding end-to-end test coverage in Meshery using Playwright

- Description: Meshery integrates with many other CNCF projects and technologies. Sustaining those integrations is only possible through automation. To automate functional integration and end-to-end testing, Meshery now uses Playwright as one of the tools for browser testing. End-to-end tests run with each pull request to ensure that changes do not break existing functionality.

Expanding the coverage of E2E tests is crucial to improving the reliability of Meshery’s UI and workflows. This project focuses on writing Playwright-based tests for more Meshery components, ensuring robust test coverage across the platform.

- Expected Outcome:
  - Development of comprehensive E2E test cases for additional Meshery components using Playwright.
- Recommended Skills: JavaScript, Playwright, GitHub Workflows, familiarity with React or Nextjs would be helpful, CI/CD
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Aabid Sofi (@aabidsofi19, mailtoaabid01@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/13514
