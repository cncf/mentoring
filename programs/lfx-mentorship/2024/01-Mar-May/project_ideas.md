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

### Service Mesh Performance

#### Service Mesh Performance: Adaptive Load Control with Nighthawk

- Description: The adaptive load controller operates by iteratively running optimization routines to ascertain the maximum load a system can sustain. Typically, this maximum load is determined by the system's capacity to handle requests per second (rps). The metrics, such as CPU usage and latency, collected from the system under test (SUT) serve as constraints to assess whether the SUT can sustain the imposed load. However, it lacks comprehensive lifecycle management functionalities. This hinders its adoption and limits its potential for continuous performance monitoring and optimization.
- Expected outcome:
Implement mechanisms to trigger alerts and notifications based on performance thresholds or significant changes in key metrics.
Integrate Nighthawk testing with existing CI/CD pipelines for automated performance validation and optimization as part of the development and deployment process.
- Recommended Skills: Golang, familiarity with Service Mesh, grpc, docker, kubernetes
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Xin Huang (@gyohuangxin, xin1.huang@intel.com)
- Upstream Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/416
- LFX URL: 

#### Service Mesh Performance: Distributed Load Testing with Nighthawk

- Description: Many performance benchmarks are limited to single instance load generation (single pod load generator). This limits the amount of traffic that can be generated to the output of the single machine that the benchmark tool runs on in or out of a cluster. Overcoming this limitation would allow for more flexible and robust testing. Distributed load testing in parallel poses a challenge when merging results without losing the precision we need to gain insight into the high tail percentiles. Distributed load testing offers insight into system behaviors that arguably more accurately represent real-world behaviors of services under load as that load comes from any number of sources.
- Expected Outcome: Implementation of distributed load generation in Nighthawk. Integration of Nighthawk with relevant service mesh performance testing scenarios. Capability to invoke Nighthawk for distributed load testing through APIs and command-line interfaces. Implementation of reporting mechanisms for distributed load testing results.
- Recommended Skills: Golang, familiarity with HTTP/HTTPS performance testing tools, Service Mesh, grpc, familiarity with containerization technologies, like Docker would be helpful.
- Mentor(s): Lee Calcote (@leecalcote, leecalcote@gmail.com), Xin Huang (@gyohuangxin, xin1.huang@intel.com)
- Upstream Issue: https://github.com/service-mesh-performance/service-mesh-performance/issues/415
- LFX URL: 
