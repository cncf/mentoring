## Projects ideas

Project maintainers and mentors, please submit the ideas below (under the Proposed Project Ideas section) section using the [template](/PROJECT_IDEA_TEMPLATE.md).

### Template

```
#### CNCF Project Name
##### Title

- Description:
- Recommended Skills:
- Mentor(s):
- Upstream Issue (URL):
```

### Sample

#### Prometheus (sample)

##### Refactor the APIs for better readability and less maintenance overhead

- Description: Currently the HTTP API is not very well organized and needs some tidying up. The actual course of action is not decided yet, but [go-kit](https://github.com/go-kit/kit) looks like a good fit.
- Recommended Skills: golang
- Mentor(s): [@Krasi Georgiev](https://github.com/krasi-georgiev)
- Issue: <https://github.com/prometheus/prometheus/issues/3416>

### Proposed Project ideas

#### Vitess

##### Add complete parsing support for MySQL constructs

- Description: Vitess is a database clustering system for horizontal scaling of MySQL. One of the key goals of Vitess is to emulate MySQL behavior even while running multiple MySQL instances so that ORMs and frameworks work seamlessly. Vitess has its own in-built SQL-parser which it uses to understand the query and represent as structs for further processing. As of now, a lot of MySQL structs are not parsed and result in syntax errors. For example, we do not have complete support to parse [partition constructs](https://dev.mysql.com/doc/refman/5.7/en/partitioning-overview.html). The task of the mentee would be add parsing support for such constructs. 
- Recommended Skills: go, SQL, yacc, compilers and lexers
- Mentor(s): Manan Gupta (@GuptaManan100)
- Issue: <https://github.com/vitessio/vitess/issues/8604>

##### Add complete parsing support for MySQL constructs

- Description: Vitess does not yet have support for collations and character-sets. So, to compare varchar strings Vitess needs to rely on [WEIGHT_STRING](https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_weight-string) function for now. As per MySQL documentation, WEIGHT_STRING is a debugging function, meant only for internal use. Having the ability to compare strings using collation and character set support we will be able to better implement ORDER BY, GROUP BY, JOIN. It will also allow us to leverage more advanced join techniques than what we currently implement.
- Recommended Skills: go, SQL
- Mentor(s): Vincent Marti (@vmg)
- Issue: <https://github.com/vitessio/vitess/issues/8606>