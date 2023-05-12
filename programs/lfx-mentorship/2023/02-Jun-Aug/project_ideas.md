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

#### Auto-generate the TypeScript and Java languages API SDK
- Description: The VelaUX API server follows the Open API schema. It could auto-generate the swagger configs via CLI. When VelaUX frontend or other projects need to call these API, they must write the model code and request the API code. We can provide SDK for them to start faster. [OpenAPI generator](https://openapi-generator.tech/) could help to generate most codes. But there are still some special cases like:
  - Dynamic component/trait/policy/workflowsteps properties need to be generated according to CUE.
  - Automatically handles the user authentication process, including automatically refreshing tokens.
  - The API definition may be incomplete accuracy, we should check it to generate high-quality code.
- Expected Outcome: The outcome of this project will be expand two more database driver for KubeVela VelaUX API server:
  - VelaUX APIServer TypeScript SDK
  - VelaUX APIServer Java SDK
- Recommended Skills:
  - Golang
  - Kubernetes
  - Backend APIs Development
  - OpenAPI schema
  - CUE
- Mentor(s):
  - Qiao Zhongpei (@chivalryq, chivalry.pp@gmail.com)
  - Yin Da (@somefive, Somefive@foxmail.com)
- Upstream Issue (URL): https://github.com/kubevela/kubevela/issues/5428

---
