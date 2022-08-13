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


#### Karmada

##### Enable configurable resource interpreter

- Description: Now Resource Interpreter framework enabled both built-in and customized interpreter, we are going to provide a way for people customize the interpreter by applying a configuration.
- Recommended Skills: golang, k8s, lua
- Mentor(s): Hongcai Ren (@RainbowMango)
- Upstream Issue (URL): <https://github.com/karmada-io/karmada/issues/2371>


### Devfile

#### Add Compose file support in the spec API

- Description: Devfiles are YAML files that define remote development environments. The main part of a Devfile is the `components` section and that's where the containers required to code, build and test an application are specified. The Devfile can either include those containers defintions or reference external files such as Dockerfiles or Kubernetes manifests. [The Compose file](https://github.com/compose-spec/compose-spec/blob/master/spec.md) is a popular format in open source development projects to define runtime environments for testing the application but those cannot be referenced by a Devfile yet. The goal is to continue the work that has been started a couple of months ago to allow referencing a Compose file from a Devfile. The expected outcome is to create a PoC written in go that parses a Compose file such as [this one](https://github.com/microservices-demo/microservices-demo/blob/master/deploy/docker-compose/docker-compose.yml) using [kompose](https://github.com/kubernetes/kompose) (as a library, not as an executable) and that creates the objects corresponding to the Compose file services in a Kubernetes cluster.
- Recommended Skills: Golang, Compose, Kubernetes
- Mentor(s): Mario Loriedo (@l0rd)
- Upstream Issue (URL): https://github.com/devfile/api/issues/501
