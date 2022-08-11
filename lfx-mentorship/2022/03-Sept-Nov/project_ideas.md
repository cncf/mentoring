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


#### Kyverno

##### Policy Exceptions

- Description: Enable flexible management of policy exceptions without requiring changes to the policy definitions.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/2627 

##### Enable resource clean-up

- Description: Support a new type of Kyverno rule to delete resources based on various criterias, such as the type, age, metadata and status.
- Recommended Skills: Golang, Kubernetes
- Mentor(s): Shuting Zhao (@realshuting)
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3483
  - https://github.com/kyverno/KDP/pull/25 

##### Implement new custom JMESPath filters

- Description: Kyverno uses JMESPath to perform filtering and selection of JSON content in a flexible and advanced way. Many custom filters have been implemented specifically for Kyverno to date. Implement two more filters which fill needed gaps in Kyverno today: a random string generator and an index locator.
- Recommended Skills: Golang
- Mentor(s): Chip Zoller, Shuting Zhao
- Upstream Issue (URL):
  - https://github.com/kyverno/kyverno/issues/3598 
  - https://github.com/kyverno/kyverno/issues/3981

##### Logging in JSON plus other enhancements

- Description: Add an ability allowing a user to tell Kyverno to log in JSON format rather than klog.
- Recommended Skills: Golang
- Mentor(s): Jim Bugwadia
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3411

##### More support for subresources

- Description: Kyverno lacks the ability to operate on some important subresources like /scale and /status in areas such as validation and mutation.
- Recommended Skills: Golang
- Mentor(s): Shuting Zhao
- Upstream Issue (URL): 
  - https://github.com/kyverno/kyverno/issues/3118
  - https://github.com/kyverno/kyverno/issues/2843
  - https://github.com/kyverno/kyverno/issues/4313 

#### WasmEdge

##### Support serialize and deserialize in WasmEdge

- Description: WasmEdge can load the WASM binary and instantiate into WASM module instances for execution. In an use case, we need to serialize the loaded WASM data structure back into the encoded WASM binary, or deserialize the serialized one into the WASM data structure in WasmEdge. With the serializing mechanism, WasmEdge can control the WASM binary wisely such as caching or snapshotting.

- Recommended Skills: C++, WebAssembly
- Mentor(s): [Hung-Ying Tai](https://github.com/hydai) (hydai[at]secondstate.io), [Yi-Ying He](https://github.com/q82419) (yiying[at]secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1741>

##### Porting OpenVINO on multiple platforms for the WASI-NN proposal in WasmEdge

- Description: The [OpenVINO](https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/download.html) official release supports various platforms. WasmEdge supports the WASI-NN proposal with OpenVINO backend now, but only in Ubuntu 20.04. In this project, we want to porting and integrating the OpenVINO installation for the multiple platforms such as MacOS, Windows, or manylinux with the WasmEdge WASI-NN plugin.

- Recommended Skills: C++, WebAssembly
- Mentor(s): [Hung-Ying Tai](https://github.com/hydai) (hydai[at]secondstate.io), [Yi-Ying He](https://github.com/q82419) (yiying[at]secondstate.io)
- Issue: <https://github.com/WasmEdge/WasmEdge/issues/1742>


#### CNCF Tag Contributor Strategy - ii

##### Mentoring Workspaces - GITHUBUSER.PROJECT.cncf.io (w/ VSCode)

- Description: pair.sharing.io is a mentoring / pair environment used by ii.nz that brings up clusters to co-learn and co-author via tmate+emacs and a live cluster with many features useful to cloud native development. However, while many folks find the ideas useful, it would be good to reach a wider audience by bringing up workspaces w/ VSCode as an alternative to emacs. The request is for a PoC deploying coder.com to CNCF Infrastructure (likely Packet) and bringing over some of the methods of collaboration learned by ii on pair to a wider audience.
  "If you want to go fast, go by yourself. If you want to go far, go together." African Proverb – Martha Goedert
- Recommended Skills: shell, terminals, VSCode, k8s, System Administration
- Mentor(s): Hippie Hacker (@hh), Caleb Woodbine (@BobyMCBobs)
- Issue: <https://github.com/sharingio/pair/issues/173>


#### Volcano

##### Pick out reasonable victim pods for rescheduling plugin

- Description: Currently, rescheduling is a little rough to evict victim pods without difference. It should distinguish pods
with more consideration such as pod priority, namespace and so on. Your task is to take a full consideration about all the scenarios,
provide a design documentation, implement your idea and give a full test.
- Recommended Skills: golang, Volcano
- Mentor(s): [Thor-wl](https://github.com/Thor-wl)
- Issue: <https://github.com/volcano-sh/volcano/issues/2425>

##### Implement pod filter chain for rescheduling

- Description: Currently, Volcano will regard all pods as potential victims in rescheduling, which is not so reasonable in some
scenarios. Your task is to implement a pod filter chain to support custom configurations.
- Recommended Skills: golang, Volcano
- Mentor(s): [Thor-wl](https://github.com/Thor-wl)
- Issue: <https://github.com/volcano-sh/volcano/issues/2428>

##### Avoid hot node in dynamic scheduling based on real workload

- Description: In v1.6.0, Volcano has supported dynamic scheduling based on real workload. However, the scheduler cannot be aware of
hot nodes which may receive too many bound pods. Your task is to design an algorithm to avoid hot nodes and balance node pressure.
- Recommended Skills: golang, Volcano
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2426>

##### Integrate Volcano with Ray

- Description: Volcano has supported a lot of mainstream computing platforms such as Spark and TensorFlow. As [Ray](https://github.com/ray-project/ray) is
a new and popular computing platform, Volcano should integrate with it.
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2429>

##### Support hot update daemon log level

- Description: Users have no ways to update log level of Volcano components now, which is difficult to track bugs especially in the production environment. Your
task is to achieve it.
- Mentor(s): [william-wang](https://github.com/william-wang)
- Issue: <https://github.com/volcano-sh/volcano/issues/2430>