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

- Description: To be able to improve the Security posture of the Cilium family’s open source projects, we would need signed SBOMs and release artifacts. The main goal of this project is to create signed artifacts as well as SBOMs for each open source project under the Cilium family: Cilium, Hubble, Tetragon as well as sign release artifacts for these projects. 

- Recommended Skills: golang
- Mentor(s): [André Martins](https://github.com/aanm)  [Natália Réka Ivánkó](https://github.com/sharlns) [Jed Salazar](https://github.com/jedsalazar)
- Issues: <https://github.com/cilium/cilium/issues/19282> <https://github.com/cilium/cilium/issues/20712>
