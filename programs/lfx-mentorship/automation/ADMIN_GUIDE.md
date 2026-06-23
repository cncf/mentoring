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

1. **Add the term to `terms.yml`:**

   ```yaml
   terms:
     - "2027 Term 1 (Mar-May)"
     - "2027 Term 2 (Jun-Aug)"   # ← add the new term
   ```

   Use the format `YYYY Term N (Mon-Mon)`.

2. **Sync the dropdowns:** Run the **Landscape Projects Sync** workflow
   manually (Actions → Landscape Projects Sync → Run workflow), or wait for
   the Monday cron. This updates the term dropdown in both the issue form
   and the export workflow.

3. **Announce the term:** Post to the CNCF blog, Slack (#mentoring), and
   social media. Include a link to the issue form.

### Closing a term

1. **Remove the term from `terms.yml`** so no new proposals can be filed
   for it.

2. **Run the landscape sync** to update the dropdowns.

3. Existing open proposals for the closed term remain open — close them
   manually or leave them if they'll carry over to a future term.

---

## Reviewing and approving proposals

Before using `/cncf-approve` on a proposal, verify:

- [ ] Validation has passed (green `Validation Passed` label)
- [ ] A project maintainer has commented `/approve` (`Maintainer/Contribex
  Approved` label is present)
- [ ] All listed mentors have commented `/confirm` (`Mentors Confirmed`
  label is present)
- [ ] The program description is appropriate and clearly scoped
- [ ] If the issue has the `Over Quota` label, confirm the project is aware
  they're over the per-term limit and the exception is intentional

To approve, comment `/cncf-approve` on the issue. The bot will:
- Add the `CNCF Approved` label
- Remove the `Awaiting CNCF Admin Approval` label
- Update the project board status

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
4. **After programs are created on LFX:**
   - Update LFX URLs in the README (manual step for now)
   - Add the `Posted to LFX` label to each issue
5. **Continue tracking** through the remaining lifecycle stages (LFX
   Approved → Mentors added → Open for Applications → Applications Closed)

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

### approvers.yml

Controls who can use `/approve` and `/cncf-approve`. The authorization
check order is:

1. `{org}/.project/maintainers.yaml` — project-maintainers team membership
2. `cncf/foundation/project-maintainers.csv` — maintainer CSV lookup
3. Per-project `fallback_teams` and `fallback_handles` in this file
4. `global_approvers` in this file

**Global approvers** can `/approve` for any project and use `/cncf-approve`.

**Per-project overrides** are useful when a project's governance isn't fully
captured in the maintainers CSV:

```yaml
kubernetes:
  fallback_teams:
    - kubernetes/sig-contribex
  fallback_handles:
    - some-delegate
```

The project slug must match the dropdown value in the issue form (lowercase,
hyphenated).

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

The automation maps issue labels to Project v2 board status columns:

| Label combination | Board status |
| --- | --- |
| New issue (no gate labels yet) | Inbox |
| `Awaiting Maintainer/Contribex Approval` or `Awaiting Mentor Confirmation` | Awaiting approvals/confirmations |
| `Maintainer/Contribex Approved` + `Mentors Confirmed` | Approved/confirmed |
| `CNCF Approved` | CNCF Approved |
| `Exported` | Exported |
| `Posted to LFX` | Posted to LFX |
| `LFX Approved` | LFX Approved |
| `Mentors Registered` | Mentors added |
| `Open for Applications` | Open for Applications |
| `Applications Closed` | Applications Closed |
| Issue closed | Closed |

The board sync runs in three ways:
1. **Standalone workflow** — triggers on issue label changes
2. **Inline** — at the end of validation, approvals, and export workflows
   (needed because `GITHUB_TOKEN` label changes don't trigger other
   workflows)
3. **Manual** — you can always drag cards on the board directly

Post-export lifecycle labels (`Posted to LFX`, `LFX Approved`, etc.) are
applied manually as you work with the LFX platform team.

---

## Secrets and setup

### Required repository secret

**`PROJECT_TOKEN`** — a Personal Access Token used for Project v2 board
sync via GraphQL.

- **For org-owned projects** (cncf/mentoring production): use a
  fine-grained PAT with **Organization → Projects: Read and write** scope
- **For user-owned projects** (dev/testing): use a **classic PAT** with
  `project` scope (fine-grained tokens don't support Projects permission
  for user-owned projects)

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
