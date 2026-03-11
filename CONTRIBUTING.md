# Contributing to cncf/mentoring

This is the starting point for contributing to the [CNCF TOC Mentoring Subproject](https://github.com/cncf/mentoring/blob/main/cncf-toc-mentoring-subproject/README.md). Welcome, and thanks for your interest!


## Prerequisites

Before contributing, you must:

- Read and follow the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
- Familiarize yourself with the [repository structure](README.md) and existing content
- Read this guide in full


## Labels

Issues in this repository use labels to indicate the type of contribution needed. Pay attention to these labels before starting work:


### `administration`

Issues labeled `administration` involve the operational work of running the mentoring subproject (scheduling, process changes, tooling, etc.). These require context and coordination with the subproject team. **Do not open PRs for `administration` issues without first discussing with the subproject team**. see [How to reach us](#how-to-reach-us) below.


### `discussion`

Issues labeled `discussion` are conversation starters, not tasks. They are used to gather input and explore ideas. A `discussion` issue does not mean "write a document and open a PR." Participate in the discussion on the issue itself, or bring it up in a meeting or on Slack.


## How to reach us

- **Monthly meeting**: [CNCF TOC Mentoring Subproject public meeting](https://zoom-lfx.platform.linuxfoundation.org/meetings/toc-mentoring-subproject?view=month)   3rd Thursday of the month at 10:00 AM Pacific Time
- **Slack**: [#toc-mentoring-subproject](https://cloud-native.slack.com/archives/C09C9EGPJAC) on [CNCF Slack](https://slack.cncf.io/)
- **Discussion boards**: [GitHub Discussions](https://github.com/cncf/mentoring/discussions)
- **Email**: mentoring@cncf.io (for private matters only; use public channels when possible)


## Contributing mentorship projects

To propose a project for one of the mentoring terms ([LFX Mentorship](programs/lfx-mentorship/README.md), [GSoC](programs/summerofcode/README.md)), you should:

1. **Be a maintainer or approver** of the CNCF project you are proposing work for, and have a maintainer's explicit support
2. Follow the project idea template in the relevant program folder ([LFX Mentorship](programs/lfx-mentorship/README.md), [GSoC](programs/summerofcode/README.md))   each program has its own template with program-specific requirements
3. Submit your PR to the appropriate term folder (e.g., `programs/lfx-mentorship/2026/01-Mar-May/`)
4. Ensure the project scope is appropriate for a full-time, 12-week mentorship

Do not propose mentorship projects on behalf of a CNCF project without the project maintainers' involvement. This volunteers them for significant work they may not have planned for.


## Contributing to mentorship guides and processes

Before starting work on a guide or process update, please do **at least one** of the following:

- Join the [monthly CNCF TOC Mentoring Subproject public meeting](https://zoom-lfx.platform.linuxfoundation.org/meetings/toc-mentoring-subproject?view=month) to discuss your proposal
- Join us in the [CNCF Slack's](https://slack.cncf.io/) [#toc-mentoring-subproject](https://cloud-native.slack.com/archives/C09C9EGPJAC) channel to discuss
- Discuss the updates you'd like to make on the relevant issue before opening a PR

**Guide and process pull requests opened without prior discussion are very likely to be closed without consideration.**

Many of the guides and processes in this repository reflect decisions made over time by the subproject team. Changes to them require context that may not be obvious from reading the issue alone. When in doubt, ask first.


## General PR guidelines

- Read the issue carefully before starting work. Make sure you understand what is being asked and whether the issue is ready for a PR.
- Comment on the issue with your intended approach. Describe what you plan to change and why. Wait for acknowledgement from a project admin before opening a PR.
- PRs opened without prior discussion and explicit approval of the implementation approach will not be reviewed and will be closed without consideration.
- **Keep PRs focused**. Don't include unrelated changes from other issues or previously declined PRs.
- Check if an issue is still open and active before working on it. Issues may have been closed or decisions may have changed.
- Respond to review feedback promptly. PRs that go stale will be closed.


## Developer Certificate of Origin

This project uses the [DCO (Developer Certificate of Origin)](https://probot.github.io/apps/dco/). All commits must be signed off to certify that you wrote or have the right to submit the code.

Sign your commits with:
```
git commit -s -m "your commit message"
```
This appends a `Signed-off-by: Your Name <your@email.com>` line to your commit. PRs with unsigned commits will not be merged.


## A note on AI-generated contributions

We welcome contributions from anyone, but we expect contributors to understand what they are submitting. Pull requests that appear to be generated by AI tools without the contributor understanding the context, content, or implications of their changes, will be closed.

If you use AI tools to assist with your contribution, that's fine   but you are responsible for the accuracy, relevance, and quality of the final result. If you can't explain why your change is needed and how it fits into the project, it's not ready to submit.

