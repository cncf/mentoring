# LFX Mentorship Intake — Admin Guide

This guide is for CNCF staff and program administrators who manage the LFX
Mentorship proposal intake process. For mentor/maintainer instructions, see
the [LFX Mentorship README](../README.md#how-to-propose-a-program).

## Table of contents

- [Term lifecycle](#term-lifecycle)
  - [Opening a new term](#opening-a-new-term)
  - [Closing a term](#closing-a-term)
- [Reviewing and approving proposals](#reviewing-and-approving-proposals)
- [Running the export](#running-the-export)
- [After the export](#after-the-export)
- [Managing configuration](#managing-configuration)
  - [terms.yml](#termsyml)
  - [approvers.yml](#approversyml)
  - [quotas.yml](#quotasyml)
- [Project board](#project-board)
- [Secrets and setup](#secrets-and-setup)
- [Troubleshooting](#troubleshooting)

---

## Term lifecycle

### Opening a new term

1. **Scaffold the term folder and list the term:** Generate
   `programs/lfx-mentorship/<year>/<NN-Mon-Mon>/` (its `README.md` timeline and
   the `project_ideas.md` redirect notice) from a per-term config, and add the
   term to `terms.yml` (the proposal dropdown source).

   ```bash
   cd programs/lfx-mentorship/automation
   cp term-setup.example.yml terms/2027-t1.yml   # then edit term.number + schedule dates
   node bin/scaffold-term.js terms/2027-t1.yml --dry-run   # preview
   node bin/scaffold-term.js terms/2027-t1.yml             # write the files
   ```

   The `schedule` dates are entered once in the config and drive both the README
   timeline and the `terms.yml` entry (derived as `YYYY Term N (Mon-Mon)`), so
   nothing is typed twice. The tool refuses to overwrite existing folder files
   unless you pass `--force` (the `terms.yml` insert is idempotent), and prints
   the git/PR steps when it's done. Commit the folder and `terms.yml` in one PR.

2. **Populate the term admin board:** Create the term's admin tracking board (the
   recurring ~62 setup/checklist issues, e.g.
   [board #90](https://github.com/orgs/cncf/projects/90)) once from a template,
   then let the tool fill it. Unlike the rest of the automation, this runs
   locally; do a one-time `npm install --no-save --ignore-scripts js-yaml@4.3.0`
   in the automation dir, and make sure `gh` has project scope
   (`gh auth refresh -s project,read:project`).

   1. Create the board (New project → copy the previous term's board) and confirm
      it has a `Status` single-select field (with a `Todo` option) plus
      `Start Date` and `Due Date` **date** fields. Copy its URL.
   2. Add `repo` (e.g. `cncf/mentoring`) and `project` (the board URL) to the
      term config, then populate:

      ```bash
      node bin/populate-term-board.js terms/2027-t1.yml --dry-run   # preview the plan
      node bin/populate-term-board.js terms/2027-t1.yml             # create + populate
      ```

   The tool creates each issue, nests the sub-issues, adds every card to the
   board, and sets Status + Start/Due from the schedule. It records the run in a
   local manifest (`.runs/`, gitignored); if you need to redo it,
   `bin/teardown-term.js terms/2027-t1.yml --yes` deletes exactly that run. Test
   the whole loop on the dev fork first — teardown refuses to run against
   production.

3. **Sync the dropdowns:** Run the **Landscape Projects Sync** workflow
   manually (Actions → Landscape Projects Sync → Run workflow), or wait for
   the Monday cron. This propagates the new `terms.yml` entry into the term
   dropdown in both the issue form and the export workflow.

4. **Announce the term:** Post to the CNCF blog, Slack (#mentoring), and
   social media. Include a link to the issue form.

PRs touching a term folder get the `Term N: <months>` label automatically —
`.github/labeler.yml` matches every year. Only the per-year label (added once at
the start of a new year) is still listed explicitly there.

### Closing a term

1. **Remove the term from `terms.yml`** so no new proposals can be filed
   for it.

2. **Run the landscape sync** to update the dropdowns.

3. Existing open proposals for the closed term remain open — close them
   manually or leave them if they'll carry over to a future term.

---

## Reviewing and approving proposals

Before using `/cncf-approve` on a proposal, verify:

- [ ] Validation is currently passing (green `Validation Passed` label) — the
  bot refuses `/cncf-approve` on a proposal in the `Validation Failed` state
- [ ] A project maintainer has commented `/approve` (`Maintainer/Contribex
  Approved` label is present) — or the proposer is themselves a project
  maintainer, in which case validation grants it automatically
- [ ] All listed mentors have commented `/confirm` (`Mentors Confirmed`
  label is present) — a mentor who filed the proposal is auto-counted for
  their own slot
- [ ] The program description is appropriate and clearly scoped
- [ ] If the issue has the `Over Quota` label, confirm the project is aware
  they're over the per-term limit and the exception is intentional

To approve, comment `/cncf-approve` on the issue. The bot will:
- Add the `CNCF Approved` label
- Remove the `Awaiting CNCF Admin Approval` label
- Update the project board status

> [!NOTE]
> **Edits after approval reset the content approvals.** If a proposal is edited
> so that a form field changes (a "material" edit) after maintainer or CNCF
> approval, validation clears those approvals and posts a comment tagging the
> prior approver(s) to re-review — **whether or not the edit leaves validation
> passing**. When the edit still passes, the `Awaiting …` labels are re-added;
> when it fails, they aren't (nothing should read as "waiting"), but the
> maintainer/CNCF approvals are cleared just the same, so nothing stale carries
> over. Cosmetic edits (whitespace, re-triggering validation) don't reset
> anything. Mentor confirmations persist across content edits; adding or swapping
> a mentor re-opens confirmation for the new mentor only. This means a maintainer
> who is the proposer keeps their approval across their own edits that still pass
> validation (re-granted automatically); an edit that breaks validation clears it
> until they fix it, and a CNCF admin must always re-approve after a material edit.
>
> `/cncf-approve` additionally requires the proposal to be **currently passing
> validation**: the bot refuses it in the `Validation Failed` state, so an
> approval can't be finalized on a regressed proposal.

Only users listed in `approvers.yml` under `global_approvers` can use
`/cncf-approve`.

---

## Running the export

The export workflow is triggered manually:

1. Go to **Actions → LFX Export → Run workflow**
2. Select the term from the dropdown
3. Click **Run workflow**

The workflow:
- Finds all open issues for the selected term with the `CNCF Approved` label
- Generates three files in `programs/lfx-mentorship/<year>/<term>/`:
  - `lfx-export.json` — structured JSON for LFX bulk import
  - `README.md` — human-readable list of accepted programs
  - `lfx-tracking.csv` — flat CSV with mentor details for your tracking
    spreadsheet
- Opens a PR with the generated files
- Comments on each exported issue with a link to the export
- Adds the `Exported` label to each issue
- Updates the board status to "Exported"

If you re-run the export for the same term, it creates a new PR (or updates
the existing branch if the previous PR wasn't merged).

---

## After the export

1. **Review the export PR** — check the JSON and README for accuracy
2. **Merge the PR** — this triggers a notification to each exported issue
   confirming the files are on main
3. **Share `lfx-export.json` with the LFX platform team** for bulk import
4. **After you create each program on LFX:** comment `/lfx-url <url>` on that
   program's proposal issue. The bot records the URL on the issue, fills it into
   the term's `lfx-export.json`, `README.md`, and `lfx-tracking.csv` (landing the
   change in a per-term `chore: record LFX URLs` PR), and advances the card to
   `Posted to LFX`. Restricted to global approvers; the issue must already be
   `Exported` and open. The URL must be a full LFX Mentorship program URL
   (`https://mentorship.lfx.linuxfoundation.org/project/<id>`); anything else is
   rejected, so the card only advances on a real program URL. A closed proposal
   is rejected too (reopen it first) — a withdrawn program should not be posted.
   The term's export must already be **merged to `main`** (step 2): `/lfx-url`
   fills the merged files, so a command run while the export PR is still open is
   rejected with the exact command to re-run once you merge it. Nothing is
   recorded on a rejection, so re-running after the merge is safe.
5. **Continue tracking** by dragging cards through the remaining columns by
   hand as each step completes on the LFX platform (`LFX Approved` →
   `Mentors added` → `Open for Applications` → `Applications Closed`)

---

## Managing configuration

### terms.yml

Single source of truth for active term dropdowns. Format:

```yaml
terms:
  - "2027 Term 1 (Mar-May)"
  - "2027 Term 2 (Jun-Aug)"
```

After editing, run the landscape sync workflow to propagate changes to the
issue form and export workflow.

Opening a term adds its entry automatically (see [Opening a new
term](#opening-a-new-term)); edit this file by hand only to retire a term or fix
an entry.

### approvers.yml

Controls who can use `/approve`, `/cncf-approve`, and `/lfx-url`. The
authorization check order is:

1. `{org}/.project/maintainers.yaml` — project-maintainers team membership
2. `cncf/foundation/project-maintainers.csv` — maintainer CSV lookup
3. Per-project `fallback_teams` and `fallback_handles` in this file
4. `global_approvers` in this file

**Global approvers** can `/approve` for any project and use `/cncf-approve` and
`/lfx-url`.

**Per-project overrides** are useful when a project's governance isn't fully
captured in the maintainers CSV:

```yaml
kubernetes:
  fallback_teams:
    - kubernetes/sig-contribex
  fallback_handles:
    - some-delegate
```

> **Note:** `fallback_teams` can only be verified for teams in the **cncf**
> org. The workflow token cannot read team membership in other orgs (for
> example `kubernetes` or `open-telemetry`), so a cross-org team authorizes no
> one and fails silently. Use `fallback_handles` for cross-org delegates;
> maintainers of those projects are still covered by the `.project` and
> maintainers-CSV tiers above.

The key can be the project's **GitHub org** (recommended, e.g. `open-telemetry`),
its **name** lowercased with spaces replaced by hyphens (e.g. `opentelemetry`), or
its **`projects.yml` slug**. The workflow tries all three when matching the
selected project, so any of them works. The same applies to the `overrides` keys
in `quotas.yml`.

### quotas.yml

Sets per-project per-term proposal limits. Over-quota proposals get a
warning label but are not blocked:

```yaml
default_per_project_per_term: 5

overrides:
  kubernetes: 8
  open-telemetry: 8
```

---

## Project board

Automation manages the board **only through the `Exported` stage**. It maps
issue labels to Project v2 board status columns:

| Label combination | Board status |
| --- | --- |
| New issue (no gate labels yet) | Inbox |
| `Awaiting Maintainer/Contribex Approval` or `Awaiting Mentor Confirmation` | Awaiting approvals/confirmations |
| `Maintainer/Contribex Approved` + `Mentors Confirmed` | Approved/confirmed |
| `CNCF Approved` | CNCF Approved |
| `Exported` | Exported |
| Issue closed | Closed |

The `Exported` → `Posted to LFX` move is automated: comment `/lfx-url <url>`
on an exported issue (see [After the export](#after-the-export)) and the bot
advances the card. Everything after `Posted to LFX` is **yours to move by
hand**. As you work with the LFX platform team, drag each card through the
remaining columns:

`LFX Approved` → `Mentors added` → `Open for Applications`
→ `Applications Closed`

Automation never moves a card once it sits in one of these post-export
columns (other than the `/lfx-url` advance above), so your manual placement is
safe. (The one exception: closing the issue still sends its card to `Closed`.)

> **Note:** `Mentors Registered` is reserved as a future signal (not yet
> implemented). A later validation step is intended to set it once mentors are
> confirmed, to tell you to add the mentors on the LFX platform. No current
> workflow applies this label. It is distinct from the `Mentors added` column,
> which you drag to by hand once that work is done.

The board sync runs in three ways:
1. **Standalone workflow**: triggers on issue label changes
2. **Inline**: at the end of validation, approvals, and export workflows
   (needed because `GITHUB_TOKEN` label changes don't trigger other
   workflows)
3. **Manual**: you drag cards directly; this is the only way cards advance
   through the post-export columns

---

## Secrets and setup

### Required repository secret: `PROJECT_TOKEN`

The board sync authenticates to the Project v2 GraphQL API with a
`PROJECT_TOKEN` repository secret (Settings → Secrets and variables →
Actions). Each environment needs its own token:

| Environment | Board owner | Token type | Key scope |
| --- | --- | --- | --- |
| Prod (`cncf/mentoring`) | org `cncf` | fine-grained PAT, resource owner **cncf** | Organization → Projects: Read and write, plus Repository → Issues: Read |
| Dev (fork) | your user | classic PAT | `project` |

Fine-grained tokens do not offer a Projects permission for user-owned
projects, which is why dev uses a classic PAT.

**Creating the prod fine-grained PAT** (Settings → Developer settings →
Personal access tokens → Fine-grained tokens → Generate new token):

1. **Resource owner:** `cncf`, not your personal account. This is what lets
   the token reach the org board.
2. **Repository access:** Only select repositories → `cncf/mentoring`.
3. **Permissions:** Organization → Projects: Read and write, and
   Repository → Issues: Read. (Metadata: Read is added automatically.)
4. **Expiration:** the CNCF enterprise caps fine-grained token lifetime at
   **366 days**. Pick a custom date at or under that limit; "no expiration"
   is not allowed.
5. If the org enforces the personal-access-token approval policy, the token
   stays pending until an org owner approves it.
6. Save the value as the `PROJECT_TOKEN` secret on `cncf/mentoring`.

Tips when filling out the form:
- The org permission is labeled simply **Projects** (not "Organization
  Projects"). In the organization permission picker, search `projects`;
  searching `organization` hides it, because the label has no "organization"
  in it.
- Set Projects to **Read and write**, not Read-only: the sync moves cards.
- `Issues` is a **Repository** permission (Read is enough); `Projects` is an
  **Organization** permission. They live under different tabs.

**Rotation:** because the token expires (366 days max), set a reminder to
regenerate it and update the secret before it lapses. When `PROJECT_TOKEN`
expires the board sync runs start failing (visible as failed runs in the
repo's Actions tab) while the rest of the automation keeps running;
regenerating with the same scopes restores it. For prod, a GitHub
App installation token is a more durable alternative (not tied to one
person, no fixed expiry) if you later want to drop the rotation burden.

### Board configuration (`board.json`)

The board each repo syncs to is configured in
[`board.json`](board.json), keyed by repository:

```json
{
  "environments": {
    "nate-double-u/mentoring": { "projectId": "PVT_..." },
    "cncf/mentoring":          { "projectId": "PVT_..." }
  }
}
```

Each repo stores **only** the Project v2 node ID (`projectId`). The board
sync steps resolve the Status field ID and the per-column option IDs live
from the board at run time. This means:

- dev (the fork) and prod (`cncf/mentoring`) run identical workflow code;
- you never hand-transcribe Status option IDs;
- the only hard requirement is that the board's **Status column names exactly
  match** the lifecycle stages in the board table above (`Inbox`,
  `Awaiting approvals/confirmations`, `Approved/confirmed`, `CNCF Approved`,
  `Exported`, `Posted to LFX`, `LFX Approved`, `Mentors added`,
  `Open for Applications`, `Applications Closed`, `Closed`).

If a repo is not listed in `board.json` (or its `projectId` is still a
`REPLACE_...` placeholder), board sync is skipped with a warning instead of
failing, so the rest of the automation keeps working before the board exists.

To point a repo at a different board, get the board's node ID:

```graphql
query { organization(login: "cncf") { projectV2(number: 93) { id } } }
```

and set it as that repo's `projectId` in `board.json`. No workflow edits are
needed.

---

## Troubleshooting

### Validation didn't run on a new issue

Check that the issue has both `lfx mentorship` and `Proposal` labels. The
issue form template applies these automatically, but if an issue was created
manually they may be missing.

### Board didn't update after a label change

If the label was applied by a workflow using `GITHUB_TOKEN`, the standalone
board sync workflow won't trigger (GitHub prevents cascading workflow
triggers). The validation, approvals, and export workflows include inline
board sync to work around this. If the board is still out of sync, manually
drag the card or re-run the relevant workflow.

### `/approve` was rejected but the commenter is a maintainer

The approvals workflow checks maintainers in order: `.project` repo →
maintainers CSV → approvers.yml fallback. If a maintainer is missing from
all three sources, add them to the per-project `fallback_handles` in
`approvers.yml`.

### Export produced no changes

The export only picks up issues that are open, match the selected term, and
have the `CNCF Approved` label. If the export says "no changes," verify
that approved issues have the correct term value and the `CNCF Approved`
label.

### Landscape sync failed

The sync fetches from `https://landscape.cncf.io/api/items`. If the API is
down or its schema changed, the workflow will fail. Check the workflow logs
for the specific error. The project dropdown will continue working with the
last synced list until the next successful run.
