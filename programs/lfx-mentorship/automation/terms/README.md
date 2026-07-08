# Per-term configs

Input configs for the term-setup tool — one committed file per term
(e.g. `2027-t1.yml`), named `<year>-t<N>.yml`.

Each file is the single source of truth for that term's schedule: the scaffold
tool reads it to generate the term folder's README timeline, so the dates are
entered once. Committed as the term's schedule record.

- Field reference: [`../term-setup.example.yml`](../term-setup.example.yml)
- Full procedure: [ADMIN_GUIDE.md → Opening a new term](../ADMIN_GUIDE.md#opening-a-new-term)
