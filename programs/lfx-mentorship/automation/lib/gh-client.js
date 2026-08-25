'use strict';

// gh-backed implementation of the populateTerm client interface. The only impure
// seam is `exec(argsArray) -> stdout string` (injected), so the unit tests assert
// the exact `gh` calls with a fake, and the bin spawns the real `gh`. Arguments
// are passed as an array (never a shell string), so issue titles and labels can
// never be shell-interpreted.

const ADD_ITEM =
  'mutation($projectId:ID!,$contentId:ID!){addProjectV2ItemById(input:{projectId:$projectId,contentId:$contentId}){item{id}}}';
const PROJECT_ITEMS =
  'query($id:ID!){node(id:$id){... on Issue{projectItems(first:50){nodes{id project{id}}}}}}';
const SET_SELECT =
  'mutation($projectId:ID!,$itemId:ID!,$fieldId:ID!,$optionId:String!){updateProjectV2ItemFieldValue(input:{projectId:$projectId,itemId:$itemId,fieldId:$fieldId,value:{singleSelectOptionId:$optionId}}){projectV2Item{id}}}';
const SET_DATE =
  'mutation($projectId:ID!,$itemId:ID!,$fieldId:ID!,$date:Date!){updateProjectV2ItemFieldValue(input:{projectId:$projectId,itemId:$itemId,fieldId:$fieldId,value:{date:$date}}){projectV2Item{id}}}';

function createGhClient({ repo, projectId, fields, exec }) {
  // Run a GraphQL query with string variables (all our ids/dates are strings).
  const gql = (query, vars) => {
    const args = ['api', 'graphql', '-f', `query=${query}`];
    for (const [k, v] of Object.entries(vars)) args.push('-f', `${k}=${v}`);
    return exec(args);
  };

  return {
    async createIssue({ title, labels }) {
      const args = ['api', `repos/${repo}/issues`, '-f', `title=${title}`];
      for (const label of labels || []) args.push('-f', `labels[]=${label}`);
      const issue = JSON.parse(await exec(args));
      return { number: issue.number, id: issue.id, nodeId: issue.node_id };
    },

    async addSubIssue({ parentNumber, childId }) {
      // sub_issue_id is the child's database id (integer): -F sends it typed.
      await exec(['api', `repos/${repo}/issues/${parentNumber}/sub_issues`, '-F', `sub_issue_id=${childId}`]);
    },

    async addToBoard({ contentId }) {
      try {
        const out = await gql(ADD_ITEM, { projectId, contentId });
        return { itemId: JSON.parse(out).data.addProjectV2ItemById.item.id };
      } catch (err) {
        // A board automation (e.g. "Auto-add sub-issues to project", carried
        // over when the admin copies last term's board) can add the issue
        // between our create and this call. Recover the item it created so a
        // lost race is not a failed run.
        if (!/already exists/i.test(err.message)) throw err;
        const out = await gql(PROJECT_ITEMS, { id: contentId });
        const nodes = JSON.parse(out).data.node.projectItems.nodes || [];
        const existing = nodes.find((n) => n.project && n.project.id === projectId);
        if (!existing) throw err;
        return { itemId: existing.id };
      }
    },

    async listIssues({ labels }) {
      // REST label filtering is AND-semantics, so an item's full label set
      // pins the search to this term. Open only: closing a stray is a
      // documented recovery path, so it must drop out of the search. Issues
      // only; the endpoint mixes in PRs.
      const raw = JSON.parse(await exec([
        'api', '--method', 'GET', `repos/${repo}/issues`,
        '-f', `labels=${(labels || []).join(',')}`,
        '-f', 'state=open',
        '-f', 'per_page=100',
      ]));
      return raw
        .filter((x) => !x.pull_request)
        .map((x) => ({ number: x.number, title: x.title, nodeId: x.node_id }));
    },

    async getIssue({ number }) {
      const issue = JSON.parse(await exec(['api', `repos/${repo}/issues/${number}`]));
      return { number: issue.number, id: issue.id, nodeId: issue.node_id };
    },

    async getSubIssues({ parentNumber }) {
      const subs = JSON.parse(await exec(['api', `repos/${repo}/issues/${parentNumber}/sub_issues`]));
      return subs.map((s) => s.id);
    },

    async setFields({ itemId, status, start, due }) {
      if (status) {
        const optionId = fields.statusOptions[status];
        if (!optionId) throw new Error(`Board "Status" field has no "${status}" option`);
        await gql(SET_SELECT, { projectId, itemId, fieldId: fields.statusFieldId, optionId });
      }
      if (start) await gql(SET_DATE, { projectId, itemId, fieldId: fields.startFieldId, date: start });
      if (due) await gql(SET_DATE, { projectId, itemId, fieldId: fields.dueFieldId, date: due });
    },
  };
}

module.exports = { createGhClient };
