# Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

### Template

```
#### CNCF Project Name
##### Title

- Description:
- Recommended Skills:
- Mentor(s): (please include email info, either here, or contact @nate-double-u on the CNCF slack)
- Upstream Issue (URL):
```

### Sample

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): [@Krasi Georgiev](https://github.com/krasi-georgiev)
- Issue: <https://github.com/prometheus/prometheus/issues/3416>


#### Cilium

##### Improving Security posture of the Cilium/Hubble/Tetragon release process

- Description: To be able to improve the Security posture of the Cilium family’s open source projects (Cilium, Hubble, Tetragon), we would need to create signed SBOMs, signed release artifacts for each open source project and automate all of these steps.

- Recommended Skills: Golang, GitHub Actions, Kubernetes, Docker, Security
- Mentor(s): [André Martins](https://github.com/aanm)  [Natália Réka Ivánkó](https://github.com/sharlns) [Jed Salazar](https://github.com/jedsalazar)
- Issues: <https://github.com/cilium/cilium/issues/19282> <https://github.com/cilium/cilium/issues/20712> <https://github.com/cilium/cilium/issues/20850>

#### Vitess

##### Add complete parsing support for Spatial MySQL functions

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of spatial MySQL functions are not parsed correctly and result in syntax errors. The task of the mentee would be to add parsing support for such functions and features which can be found at https://dev.mysql.com/doc/refman/8.0/en/spatial-analysis-functions.html
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): [Manan Gupta](https://github.com/GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>


#### KubeArmor

##### Add BTF and BPF CO-RE Support to KubeArmor

- Description: Currently KubeArmor depends on kernel headers to use various kernel structures. This creates difficulty in having portability.
Linux Kernel versions with BTF (BPF Type Format) information available allows us to write portable BPF CO-RE (or Compile Once - Run Everywhere) applications that can run on multiple kernel versions and configurations without any modification or runtime compilation on the target machine.  
But there is a restriction that CO-RE requires to have the BTF information of the target kernel, which is provided by the kernel itself when it's compiled with CONFIG_DEBUG_INFO_BTF=y. This option was introduced in Linux 5.2.  
For kernels < 5.2 we can use BTFGen to ship BTF information with KubeArmor code or use pahole to generate BTF information from the vmlinux image (with DWARF information) at runtime.  
The project aims to make KubeArmor truly portable across all kernel versions by reducing host environment dependencies.

- Recommended Skills: Kernel, go, C 
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/789>

##### Use non-privileged containers for KubeArmor daemonset

- Description: KubeArmor currently uses privileged mode for its daemonset containers. But it is not a good practice. Privileged containers are usually frowned upon. In many cases, specific admission controllers are deployed to not allow containers to be installed in privileged mode.
It is best to not use privileged mode but to define specific capabilities for KubeArmor.  
The aim of the project is to analyse and reduce the system privileges required by KubeArmor, thereby reducing the potential attack surface.

- Recommended Skills: go, Kernel, k8s
- Mentor(s): Ankur Kothiwal (@Ankurk99), Barun Acharya (@daemon1024), Rahul Jadhav (@nyrahul)
- Issue: <https://github.com/kubearmor/KubeArmor/issues/781>
