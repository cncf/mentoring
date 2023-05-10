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

### Service Mesh Performance

#### Service Mesh Performance IDE Plugin

- Description: The objective of this project is to develop IDE plugins that can enhance the developer experience while working with Service Mesh Performance Performance Profiles. The proposed plugins will leverage technologies such as golang and cuelang to provide features such as syntax highlighting, auto-completion, validation, and rendering previews for Service Mesh Performance profile and model definitions.
- Expected outcome:
- 1. Release VS Code Extension
- 2. Syntax Highlighting and Auto-completion: The plugin can fetch SMP Model definitions such as cloud-native components and their relationships. This information can be used to provide syntax highlighting and auto-completion for these definitions in the JSON files, making it easier for developers to write error-free code.
- 3. Validation and Reference: For Meshery MeshModel definitions such as cloud-native components and their relationships, the plugin can use the CUE language to provide validation for the CUE input and preview the rendering result. The plugin can also fetch the SMP Model schemas and display them in the IDE for reference.
- Recommended Skills: Cuelang
- Mentor(s): Lee Calcote @leecalcote (leecalcote@gmail.com), Xin Huang @gyohuangxin (xin1.huang@intel.com)
- Upstream Issue (URL): https://github.com/service-mesh-performance/service-mesh-performance/issues/379
- LFX URL: 

### KubeVela

#### Expand multiple database drivers for the API server
- Description: Now KubeVela's VelaUX uses two kinds of Database to store metadata: Kubernetes ConfigMap and MongoDB. As more users are expecting using different kinds of database. We proposing to expanding multiple database drivers for the VelaUX API server. 
- Expected Outcome: The outcome of this project will be expand two more database driver for KubeVela VelaUX API server:
  - Mysql
  - PostgreSQL
- Recommended Skills:
  - Golang
  - Kubernetes
  - Backend APIs Development
- Mentor(s):
  - Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com)
  - Zeng Qingguo (@barnettZQG, barnett.zqg@gmail.com)
- Upstream Issue (URL): https://github.com/kubevela/kubevela/issues/5426
- LFX URL: 

### CNCF Landscape 

#### UX / UI Improvements

- Description: With your collaboration, we aim to analyze findings and meaningful information (quantitative and qualitative data) and run a series of ideation rounds. We will create user personas, empathy maps, and other UX deliverables that will be the foundation to lay out a set of solutions to improve the current way to search, navigate and find relevant information on the Landscape.
- Expected Outcome: Creation user personas, empathy maps, and other UX deliverables.
- Recommended Skills: UX reaserach, desighn thinking, Figma and prototyping. 
- Mentors: Andrea Velázquez andrea@buoyant.io, Nate W. @nate-double-u natew@cncf.io, Chris Aniszczyk @caniszczyk caniszczyk@linuxfoundation.org
- Upstream Issue: https://github.com/cncf/landscape/issues/2467
- LFX URL: 


### Vitess

#### Rework the frontend UI of Vitess’ benchmarking tools

- Description: Vitess uses a couple of tools to benchmark its codebase and to make sure that new code doesn’t introduce performance regressions. These tools are: arewefastyet and the VReplication Benchmarking Framework. We currently have an old frontend UI that serves arewefastyet. However, this UI is slow, not optimized and not easily extensible. It uses the built-in Golang template system to serve pages. We would like to create a common frontend UI that will be used by both benchmarking tools and that will replace the current arewefastyet’s UI. The mentee will have the responsibility of creating the UI using (most likely) React/Vite on Vercel. The frontend component will connect to our already-existing backend components: a MySQL database and arewefastyet’s REST API.
- Expected Outcome: The expected outcome is to have a working frontend UI that integrates well with our different backends (databases and benchmarking tools’ APIs).
- Recommended Skills: React, Vercel, Vite, REST API, (Optional writing APIs in Golang)

- Mentor(s):
  - Florent Poinsard @fouioui
  - Rohit Nayak @rohit-nayak-ps
- Upstream Issue (URL): https://github.com/vitessio/arewefastyet/issues/328 
- LFX URL: 


---
