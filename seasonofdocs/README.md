# Season of Docs

Google [Season of Docs](https://developers.google.com/season-of-docs) gives technical writers an opportunity to work with open source projects.

The CNCF has applied to participate in the Season of Docs in 2020. We'll announce more details pending our acceptance into the program.

### Program Cycles and Archive data

| Year | Term | Status  | Announcement | Details              |
|------|------|---------|--------------|----------------------|
| 2020 | Q2   | Applied | TBD          | [Q2'2020](README.md) |

## 2020 project ideas

### Improving Kubernetes API references

Currently, the Kubernetes API references are large HTML documents generated from Swagger specs by scripts hosted outside the docs repository, then added into the website repository.

The manual build process is cumbersome and fragile. Docs are generated and imported by hand at release time (once per quarter), rather than automated (continuous integration and delivery) like the rest of the docs. The result is an unfriendly UX that isn't integrated with the rest of the site, either in UX or tooling.

To help improve API reference docs, we're applying Google's [Docsy Hugo theme](https://www.docsy.dev/about/) to the [kubernetes.io](https://kubernetes.io) website. 

One of the features Docsy provides is native Swagger support. We're excited about automating our API reference generation. We need a technical writer to guide our migration from our existing process to a friendlier set of API references that are continuously generated like the rest of our docs.

We can offer strong, friendly community support and technical guidance and feedback.
We recognize that there are many unknowns in this process. It's OK to be scared! We're looking for one or more writers to explore and guide us in the right direction, not for perfection on the first try.

#### Project goals

Our goal is a helpful, consistent, integrated experience for contributing, delivering, and reading API reference docs.

- Using the Docsy theme's [`swaggerui` shortcode](https://www.docsy.dev/docs/adding-content/shortcodes/#swaggerui), transform Kubernetes API Swagger specs in kubernetes/kubernetes into pages in k/website.

   This goal requires engaging the Kubernetes developer community and helping achieve community buy-in for a transformed toolchain. You'll get lots of support here from the docs, infrastructure, and contributor special interest groups (SIGs). 

- Update the contribution docs on [how to generate API references](https://kubernetes.io/docs/contribute/generate-ref-docs/), hopefully by deleting them. 

## Program Maintainers

-	Chris Aniszczyk ([@caniszczyk](https://github.com/caniszczyk)\): https://twitter.com/cra
-   Zach Corleissen ([@zacharysarah](https://github.com/zacharysarah)\): https://twitter.com/zachorsarah
-	Ihor Dvoretskyi ([@idvoretskyi](https://github.com/idvoretskyi)\): https://twitter.com/idvoretskyi


