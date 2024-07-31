## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
  - 2nd Mentor Name (@mentor_github, mentor@email.addy)
- Upstream Issue:

```

---

## Proposed Project ideas

### Meshery

#### Meshery: End-to-End Testing with Playwright (Round 2)

- Description: Meshery integrates with many other CNCF projects and technologies. Sustaining those integrations is only possible through automation. End-to-end testing with Playwright, GitHub Workflows, and self-documenting test reports is the means to the end of maintaining a healthy state of each of these [Meshery integrations](https://meshery.io/integrations). 
 
- Expected Outcome: 
  - Successful migration of E2E tests from Cypress to the Playwright test library within the Meshery project.
  - Implementation of robust and reliable test cases using Playwright to cover a wide range of Meshery's E2E scenarios.
  - Documentation detailing the migration process, and guidelines for future contributions to maintain test quality.
  - Integration of Playwright test suite into the Meshery CI/CD pipeline to ensure continuous testing and reliability of the platform.
- Recommended Skills: JavaScript, Playwright, GitHub Workflows, Jekyll, Markdown, familiarity with React or Nextjs would be helpful, CI/CD
  - Mentor Name: Aabid Sofi (@aabidsofi19, mailtoaabid01@gmail.com), Lee Calcote (@leecalcote, leecalcote@gmail.com),
- Upstream Issue: https://github.com/meshery/meshery/issues/11494
- LFX URL: 

#### Meshery: Migrate APIs to be schema-driven

- Description: Enhance Meshery’s APIs capability by migrating to a schema-driven approach, which will ensure consistency, validation, and easier integration. It involves versioning and defining API schemas using OpenAPI/Swagger at https://github.com/meshery/schemas and auto generating structs. You will be ensuring all Meshery APIs aligns with defined schemas and are consistent.

- Expected Outcome: Identifying APIs and updating them to conform these schemas. Enhance API documentation to reflect the schema-driven approach. Updating APIs to ensure they are consistent and doing validation against defined schemas.

- Recommended Skills: Golang, Kubernetes, Swagger, JSON schemas, familiarity with React, Nextjs would be helpful
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Yash Sharma (@Yashsharma1911, yashsharma2572@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/11495
- LFX URL: 

#### Meshery: UI Migration from MUI v4 to MUI v5 and Sistent

- Description: Meshery's UI is powerful and utilizes frameworks like Next.js and Material-UI. However, it relies on outdated technology stacks, resulting in performance inefficiencies and increased maintenance overhead.
- Expected Outcome: Migrate from MUI v4 to MUI v5 and fully utilize features of Nextjs v13 and Sistent. Migrate all class based components to function based components. Reduced code complexity and improved maintainability for long-term sustainability. Responsive and accessible UI that adapts to diverse devices and user needs.
- Recommended Skills: ReactJs, NextJs, familiarity with Material UI, Redux and Redux Toolkit
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Antonette Caldwell (@nebula-aac, pullmana8@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/11493
- LFX URL: 
