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


### CRI-O

#### Fully Automated CRI-O Releases

- Description: There are several steps to the CRI-O release process that are manual. Lots of work has been done to update this, but there is still pushing a tag, copying release notes and some other small tasks. This project is about such automation.
- Expected Outcome:
  - Fully automated release and patch versions of CRI-O
- Mentor(s):
    - Sascha Grunert (@saschagrunert, sgrunert@redhat.com)
    - Krzysztof Wilczynski (@kwilczynski, kwilczyn@redhat.com)
- Recommended Skills: Golang
- Upstream Issue: https://github.com/cri-o/cri-o/issues/4003
- LFX URL: 

### Knative 

#### Contributor Journey Research

- Description: Getting new contributors onboarded into a complex project like Knative is a lot of work for both the new contributors and for the maintainers. This is compounded
  by the fact that many contributors don't stick around after the first few contributions. We would like to perform a research study into why some contributors stay while others
  leave the community after a bit, and determine where we can improve the contributor experience.
- Expected Outcome: Create a report based off of user research detailing the current contributor journey within Knative and highlighting areas where that can be improved.
- Recommended Skills: User Research, Communication
- Mentor(s):
  - Calum Murray (@Cali0707, cmurray@redhat.com)
  - Mariana Mejia (@mmejia02, mariana.mejia@ocadu.ca)
- Upstream Issue: https://github.com/knative/ux/issues/98
- LFX URL: 

### OpenKruise 

#### Build simple Web-UI that can integration with exiting PaaS

- Description: Currently, OpenKruise depends solely on the PaaS or CLI to listing OpenKruise workload display and operations. The lack of a general purpose Web-UI greatly hinder the adoption among developer users. This project is about to build a simple Web-UI that can list OpenKruise workload along with the native K8s workload, and support enhanced operation such as container restart or workload rollout. The Web-UI can be served directly as a dashboard , or as an example of OpenKruise integration in PaaS.
- Expected Outcome: 
  - simple Web-UI
  - integration of the Web-UI with existing PaaS such as [KubeSphere](https://dev-guide.kubesphere.io/extension-dev-guide)
- Mentor(s):
    - Zhang zhen (@furykerry, furykerry@gmail.com)
    - Zhao Mingshan (@zmberg, berg.zms@gmail.com)
- Recommended Skills: UX/UI, JavaScript, GoLang (a plus but not mandatory)
- Upstream Issue: https://github.com/openkruise/kruise/issues/1497
- LFX URL: 
