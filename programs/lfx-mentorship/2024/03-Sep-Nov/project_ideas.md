## Template

```
### CNCF Project Name

#### Mentorship project Title

- Description:
- Expected Outcome:
- Recommended Skills:
- Mentor(s):
  - Mentor Name (@mentor_github, mentor@email.addy) - please use the same email address as you use on the LFX Mentorship Platform at https://mentorship.lfx.linuxfoundation.org
  - 2nd Mentor Name (@mentor_github, mentor@email.addy)
- Upstream Issue:

```

---

## Proposed Project ideas

### OpenKruise

#### Visualize Kruise Rollout progress with kubectl plugin
- Description: [Kruise Rollout](https://github.com/openkruise/rollouts) provide plugin-n-play progressive delivery for cloud native apps. The goal of this project is to develop a kubectl plugin so as to visualize rollout progress, e.g. the rollout steps, traffic status and involved pods. The kubectl plugin can leverage the existing [kruise kubectl plugin project](https://github.com/openkruise/kruise-tools), and can use the [Argo kubectl plugin](https://argo-rollouts.readthedocs.io/en/stable/features/kubectl-plugin/#visualizing-rollouts-and-experiments)  as a reference.
- Expected Outcome: 
  * kruise-tools enhancement for kruise rollout visualization
  * Well-documented with clear usage instructions and examples
- Mentor(s):
    - Zhang zhen (@furykerry, furykerry@gmail.com)
    - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
- Recommended Skills: Kubernetes, GoLang
- Upstream Issue: https://github.com/openkruise/kruise-tools/issues/94
- LFX URL: 

#### Game operation and maintenance API
- Description: kruise-game contains two CRDs GameServer and GameServerSet. Game servers can be managed by deploying or changing the corresponding CR. However, in actual production use, a release or operation and maintenance action is often a combination of a series of operations on CR. For example, set the GameServer image tag with ids 1, 7, and 10 to v0.3; adjust the update priority of GameServer with ids 5, 9, and 11 before updating the game server, etc. Therefore, a set of APIs with operation and maintenance semantics is needed, which users can directly use or integrate into their own operation and maintenance platform to facilitate operation and maintenance operations.
- Expected Outcome:
  * A service component that includes multiple APIs
- Recommended Skills: Golang, Kubernetes, RESTful API
- Mentor(s):
    - Liu Zhongwei(@ringtail , zhongwei.lzw@alibaba-inc.com)
    - Liu Qiuyang (@chrisliu1995 , chrisliu1995@163.com)
- Upstream Issue: https://github.com/openkruise/kruise-game/issues/166
- LFX URL: 

### Service Mesh Performance

#### CNCF Project Performance Test Dashboard
- Description: In coordination with CNCF TAG Network, the current performance dashboard at https://smp-spec.io/dashboard is proposed to be incorporated into CNCF project level-moving criteria in that each CNCF project will be encouraged (mandated?) to incorporate ongoing performance tests into their build and release processes, resulting in ongoing performance analysis of each project.
- Expected Outcome: 
  - Dashboard Enhancement: Expand the existing performance dashboard to capture and visualize performance test results for non-service mesh projects. This will involve integrating with various data sources, designing user-friendly interfaces, and implementing robust data analysis pipelines.
  - GitHub Workflow Integration: Collaborate with other CNCF projects to configure their GitHub workflows to automatically run load tests using the Meshery GitHub Action. This will streamline the performance testing process and ensure that results are consistently collected and published to the dashboard.	
- Recommended Skills: Golang, familiarity with HTTP/HTTPS performance testing tools, Service Mesh, grpc, familiarity with containerization technologies, like Docker would be helpful.
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Xin Huang (@gyohuangxin, xin1.huang@intel.com)
- Upstream Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/432
- LFX URL: 
