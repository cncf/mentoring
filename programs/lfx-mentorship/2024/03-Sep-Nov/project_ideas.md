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

### Thanos

#### Add support for hedged requests

- Description: The long-tail requests sometimes are inevitable between the Thanos Store Gateway and an external cache. Lowering the timeouts between the store-gateway and the cache service isn't a greater way to address this problem. Using a HTTP client to issue hedged requests to object storage and other parts of Thanos' stack could help reduce tail latency by a lot.
- Expected Outcome: By the end of the term, the mentee will have a deeper knowledge of Thanos and have improved our HTTP request tail latencies considerably!
- Recommended Skills: Go, HTTP, Prometheus, Thanos
- Mentor(s):
  - Giedrius Statkevičius (@GiedriusS, giedriuswork@gmail.com)
  - Saswata Mukherjee (@saswatamcode, saswataminsta@yahoo.com)
- Upstream Issue: https://github.com/thanos-io/thanos/issues/6712
- LFX URL: 
