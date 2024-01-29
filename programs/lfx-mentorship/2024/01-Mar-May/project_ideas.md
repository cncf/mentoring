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

#### Meshery: UI Migration from MUI v4 to MUI v5 and NextjS 13

- Description: Meshery's UI is powerful and utilizes frameworks like Next.js and Material-UI. However, it relies on outdated technology stacks, resulting in performance inefficiencies and increased maintenance overhead.
- Expected Outcome: Migrate from MUI v4 to MUI v5 and fully utilize features of Nextjs v13. Migrate all class based components to function based component. Reduced code complexity and improved maintainability for long-term sustainability. Responsive and accessible UI that adapts to diverse devices and user needs.
- Recommended Skills: ReactJs, NextJs, familiarity with Material UI, Redux and Redux Toolkit
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Antonette Caldwell (nebula-aac, pullmana8@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/6680

#### Meshery: Expand CLI capabilities for registry management

- Description: Meshery CLI is a powerful tool to manage all your cloud native resources, Meshery has internal capability called Registry to store and manage models, categories, component and relationship, presently Meshery’s v0.7 release allow users to view all this information from Mehery UI. We also need to expose Meshery’s registry capability through mesheryctl
- Expected Outcome: Design mesheryctl subcommands and flags for registering, listing, retrieving, updating, and deleting models, components and relationships. Implement validation and error handling for user input and API responses. Integrate with relevant Meshery APIs to interact with the registry backend.
- Recommended Skills: Golang, familiarity with Golang CLI framework Cobra
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Uzair Shaikh (@MUzairS15 , muzair.shaikh810@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/8176

#### Meshery: Expand integration with Artifact Hub

- Description: While Meshery has made significant strides, its integration with Artifact Hub requires expansion and enhancement to maximize users experience. The goal is expand integration between Meshery and Artifact Hub which starts with making Meshery designs as a new Artifact Hub kind.
- Expected Outcome: Definition and implementation of Meshery patterns as a distinct category within Artifact Hub. Design features to showcase Meshery's unique design patterns, enhancing visibility and accessibility. Collaborate with select publishers to integrate Meshery snapshots into Artifact Hub entries. Enhance user experience by providing visual representations of Meshery-related artifacts.
- Recommended Skills: Familiarity with Helm charts and Artifact Hub, basic familiarity with Kubernetes
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Aabid Sofi (@aabidsofi19, mailtoaabid01@gmail.com)
- Upstream Issue: https://github.com/meshery/meshery/issues/9966