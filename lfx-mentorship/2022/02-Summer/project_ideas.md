# Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

## Template

```
### CNCF Project Name
#### Title

- Description:
- Recommended Skills:
- Mentor(s):
- Upstream Issue (URL):
```

## Sample

### Prometheus (sample)

#### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): Krasi Georgiev (@krasi-georgiev)
- Upstream Issue: <https://github.com/prometheus/prometheus/issues/3416>

---

## Proposed Project ideas

Accepted ideas have been moved to [README.md](README.md) 


  - [Meshery](#meshery)
    - [Cloud Native Playground](#cloud-native-playground)
    - [Design Configurator](#design-configurator)
  - [Service Mesh Performance](#service-mesh-performance)
    - [Implementation of MeshMark](#implementation-of-meshmark)


### Meshery

#### Cloud Native Playground

- Description: Hosted at play.meshery.io, build a unique learning environment for learning modern application networking through Meshery's support of every service mesh, orchestration of Kubernetes, and integration with many other CNCF projects. Meshery's genesis is that of helping teach people about service mesh technology and enabling to operate this type of cloud native infrastructure confidently. The proposed project is aimed at furthering this mission with interactive API documentation connected to a cloud native playground (a running instance of Meshery).
- Recommended Skills: Golang, ReactJS
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Aditya Chatterjee](https://github.com/warunicorn19)
- Issue: <https://github.com/meshery/play/issues/16>
- LFX URL: 

#### Design Configurator

- Description: Integrate a new user experience into Meshery: a cloud native design configurator. This project involves presentation of Kuberenetes core resources and any custom resource (CRD) as a configurable component in a React-based user interface in which users design (in great detail) and deploy their cloud native infrastructure. Interns will familiarize with concepts of content lifecycle management.
- Recommended Skills: ReactJS, OpenAPI, JSON Schema.
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Ashish Tiwari](https://github.com/revolyssup)
- Issue: <https://github.com/meshery/meshery/issues/5504>
- LFX URL: 

### Service Mesh Performance

#### Implementation of MeshMark

- Description: MeshMark functions as a service mesh performance index (a scale) to provide people the ability to weigh the value of their service mesh versus the overhead of their service mesh and assess whether they are getting out of the mesh what they are “paying” for in it. Implementation of this new performance index involves integration with Meshery, Prometheus, and more.
- Recommended Skills\*\*: Golang, ReactJS, GitHub Actions
- Mentor(s): Lee Calcote ([@lcalcote](https://twitter.com/lcalcote)), [Abhishek Kumar](https://github.com/Abhishek-kumar09)
- Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/325
- LFX URL: 
