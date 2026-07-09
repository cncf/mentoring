'use strict';

// gh-backed implementation of the populateTerm client interface. The only impure
// seam is `exec(argsArray) -> stdout string` (injected), so the unit tests assert
// the exact `gh` calls with a fake, and the bin spawns the real `gh`. Arguments
// are passed as an array (never a shell string), so issue titles and labels can
// never be shell-interpreted.

const ADD_ITEM =
  'mutation($projectId:ID!,$contentId:ID!){addProjectV2ItemById(input:{projectId:$projectId,contentId:$contentId}){item{id}}}';
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
      const out = await gql(ADD_ITEM, { projectId, contentId });
      return { itemId: JSON.parse(out).data.addProjectV2ItemById.item.id };
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
