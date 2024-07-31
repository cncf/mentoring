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
