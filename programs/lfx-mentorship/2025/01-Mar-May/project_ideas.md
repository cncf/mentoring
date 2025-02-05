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

### KCL
#### A test framework developed for the KCL package management tool

- Description: The main content of this topic is to refer to the structure of the test part of common programming languages, such as go and rust, to develop a test framework for KCL's package management tool to help developers better write test cases for the project. The main function of the test framework is to provide a mock environment that supports compiling KCL and interacting with simulated environments such as OCI/Git registry.
- Expected Outcome: 
  - A mock environment is started during testing. This mock environment can complete the test without being affected by the network.
  - In this mock environment, complete the test of: `kcl run`, `kcl mod add`, `kcl mod pull`, `kcl mod push`.
- Recommended Skills: Go, Rust
- Mentor(s):
  - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
  - Heipa (@He1pa, he1pa404@gmail.com)
- Upstream Issue: https://github.com/kcl-lang/kpm/issues/593

#### KPM & LSP Integrated

- Description: Sometimes users will edit the `kcl.mod` file in the IDE to update project dependencies. The integration between LSP and KPM needs to be strengthened, it mainly includes two parts of functions. 
  - According to the content written by the user in the kcl.mod file, the IDE automatically calls the `kcl run/mod add/mod metadata` and other functions, and feeds back the results in the IDE. 
  - According to the user's operations in the command line, the changes of `kcl.mod` and project content are synchronized to the IDE.

examples:

1. When users update kcl.mod in the IDE, the required dependencies are automatically downloaded.

2. When users use the kpm tool to update dependencies, the IDE can be updated (recompiled). For example
```kcl
import k8s  # Error: Module not found
```

use `kcl mod add k8s` to download the dependency `k8s`.

kpm will download the k8s package and then the IDE errors will be eliminated


- Expected Outcome: 
  - Complete at least the following parts:
    - IDE triggers automatic dependencies updates of package management tools.
    - Automatic synchronization of kcl.mod files.
    - IDE users actively trigger dependency downloads, it looks like: a button or link for user to download the missing dependencies.
    - After the dependency update is complete, the IDE triggers a recompile to clear the error
- Recommended Skills: Go, Rust
- Mentor(s):
    - Heipa (@He1pa, he1pa404@gmail.com)
    - Zhe Zong (@zong-zhe, zongzhe1024@163.com)
- Upstream Issue: https://github.com/kcl-lang/kcl/issues/1847

