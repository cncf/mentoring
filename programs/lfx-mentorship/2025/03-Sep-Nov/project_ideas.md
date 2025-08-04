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

### Knative

#### Enhancing the Knative func CLI Experience

- Description: Knative Functions enables you to easily create, build, and deploy stateless, event-driven functions as Knative Services by using the func CLI. With this LFX project, we aim to conduct a comprehensive UX evaluation of the func CLI. The focus will be on identifying usability issues, understanding developer workflows, and gathering structured feedback on CLI interactions. The findings will help improve the CLI's intuitiveness, efficiency, and user satisfaction.
- Expected Outcome: A detailed analysis report documenting func CLI’s usability findings, including (but not limited to ):
  - Assessment of CLI command organization, structure, and discoverability for new and experienced users
  - Review of help text quality and completeness across all commands
  - Mapping of common developer workflows with identified pain points
  - Evaluation of error handling and the user guidance during failures
  - Comparison with industry best practices for CLI design, with recommendations for closing identified gaps
- Recommended Skills: Experience with command-line interfaces, familiarity with UX evaluation/research methodologies, knowledge of cloud-native and Knative concepts, strong analytical, technical writing and documentation skills.
- Mentor(s):
  - Prajjwal Yadav (@prajjwalyd, prajjwalyd@gmail.com)
  - Luke Kingland (@lkingland, kingland@redhat.com)
  - Calum Murray (@Cali0707, cmurray@redhat.com)
- Upstream Issue: https://github.com/knative/ux/issues/196
- LFX URL: 

### OpenYurt

#### OpenYurt Docker Extension for Simplified Deployment

- Description:
  OpenYurt is an open-source edge cloud-native platform designed to streamline application management in edge computing scenarios. However, the current installation process can be complex for newcomers, creating a barrier to adoption. This project aims to significantly improve the user experience by creating a Docker Extension for OpenYurt. The extension will enable users to install and configure a complete OpenYurt environment, including the yurt-dashboard, with a single click directly from the Docker Desktop interface. This will dramatically lower the entry barrier, allowing developers and edge computing enthusiasts to quickly set up a local development and testing environment, thereby fostering greater community engagement and accelerating innovation on the platform.
- Expected Outcome:
  - Docker Extension Development: Develop a functional Docker Extension using the Docker Extension SDK that can be installed in Docker Desktop.
  - One-Click Deployment: Package OpenYurt's core components (yurt-manager, yurt-hub, etc.) and dependencies into the extension to automate the setup of a single-node OpenYurt cluster.
  - Dashboard Integration: Provide seamless access to the Yurt Dashboard directly from the extension's UI within Docker Desktop, for example, through an "Open Dashboard" button.
  - User Guide and Documentation: Create comprehensive documentation detailing how to install, use, and troubleshoot the OpenYurt Docker Extension.
- Recommended Skills:
  - Familiarity with Docker and the Docker Extension SDK.
  - Experience with frontend development (e.g., React/TypeScript, Vue) for building the extension's user interface.
  - Proficiency in shell scripting (Bash) or Golang for automating the installation and configuration scripts.
  - A solid understanding of Kubernetes concepts and the OpenYurt architecture.
- Mentor(s):
  - Lu Chen (@luc99hen, luc99.en@gmail.com)
  - Bingchang Tang (@zyjhtangtang, bingchang07@gmail.com)
  - Karan karanngi (@karanngi, karann.git@gmail.com)
- Upstream Issue:
  [https://github.com/openyurtio/openyurt/issues/2422](https://github.com/openyurtio/openyurt/issues/2422)
- LFX URL: 

