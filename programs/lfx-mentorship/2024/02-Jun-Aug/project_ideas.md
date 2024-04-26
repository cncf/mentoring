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

### Karmada

#### Certificate Lifecycle Management

- Description: The Karmada Certificate Lifecycle Management project addresses user challenges in certificate management, focusing on mitigating service disruptions and security risks due to expirations. Key goals include implementing a feature for real-time monitoring of certificates with advance notification for upcoming expirations; creating a comprehensive manual for manual replacement with best practices and visuals; allowing configurable certificate validity during deployment via CLI, Helm charts, and Operator; and designing an automated certificate rotation system to streamline certificate maintenance and ensure continuous security across Karmada environments.
- Expected Outcome: Certificate Visibility Tool/Feature, Manual Certificate Replacement Guide, Updated Installation Tools with Customizable Certificate Validity, and Automated Certificate Rotation Solution Design or Integration 
- Recommended Skills: Golang, Kubernetes Admin, certificate management, Helm.
- Mentor(s):
    - Hongcai Ren (@RainbowMango, qdurenhongcai@gmail.com)
    - Zhen Chang (@XiShanYongYe-Chang, changzhen5@huawei.com)
- Upstream Issue: https://github.com/karmada-io/community/issues/69

### Thanos

#### Compactor: Display TODO plan in UI

- Description: In the Thanos Compactor UI there is visibility of the global block list and loaded block list. But it would be useful to also have a list of planned and currently running compaction groups in order to see what exactly is in progress. This way it would be easier to diagnose what the Thanos Compactor is currently working on, and possibly what is delaying the progress of compactions. This is especially useful if you have large TSDB blocks in S3 buckets that take time to get compacted.
- Expected Outcome: We have an endpoint in Compactor that details compaction plan, and this is also visualized in a Compactor UI page.
- Recommended Skills: Go, React, some familiarity with Prometheus and Thanos
- Mentor(s):
  - Michael Hoffmann (@MichaHoffmann, mhoffm@posteo.de)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/7285

### Vitess

#### Improve the website of our automated-benchmarking tool (migrate to shadcn ui and typescript)

- Description:
    - Vitess uses arewefastyet to automatically benchmark its codebase and ensure no performance regression is introduced. This tool benchmarks Vitess every day, and is used to visualize the results of those benchmarks. It is an important tool in the development cycle of Vitess and is used by its maintainers and adopters.
    - [Arewefastyet' website](https://benchmark.vitess.io) has changed quite a lot over the last year, we want to continue improving it by finishing the migration to TypeScript and by using Shadcn components.
    - Moreover, we want to make the website responsive and have a proper Figma that serves as a reference for current and future contributors.
- Expected Outcome:
    - The mentee is expected to produce a Figma with the design of the website that will be co-authored with the mentor.
    - Re-vamp most of the pages using Shadcn and the design defined with the mentor at the start of the internship period.
    - Add type information for all/most components using TypeScript.
- Recommended Skills:
    - Be skilled in React/Vite/TypeScript.
    - Must know how to simply use Docker and docker-compose.
    - Experience with Figma is a big plus.
    - Experience with Rest APIs and Golang is a plus too.
- Mentor(s):
    - Florent Poinsard @fouioui florent@planetscale.com
    - Frances Thai @notfelineit frances@planetscale.com
- Upstream Issue (URL): https://github.com/vitessio/arewefastyet/issues/525
