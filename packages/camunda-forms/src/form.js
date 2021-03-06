export default {
  "_id": "5fabef5f4bb21802701726f0",
  "type": "form",
  "tags": [],
  "owner": "5f96b9deb1fe81cd3307ac8d",
  "components": [
    {
      "label": "Insured object",
      "tableView": true,
      "key": "insuredObject",
      "type": "textfield",
      "input": true
    },
    {
      "label": "Description",
      "tableView": true,
      "key": "description",
      "type": "textfield",
      "input": true
    },
    {
      "label": "Approved",
      "tableView": false,
      "key": "approved",
      "type": "checkbox",
      "input": true,
      "defaultValue": false
    },
    {
      "label": "Estimated value",
      "mask": false,
      "spellcheck": true,
      "tableView": false,
      "delimiter": false,
      "requireDecimal": false,
      "inputFormat": "plain",
      "key": "estimatedValue",
      "type": "number",
      "input": true
    },
    {
      "type": "button",
      "label": "Submit",
      "key": "submit",
      "disableOnInvalid": true,
      "input": true,
      "tableView": false
    }
  ],
  "revisions": "",
  "_vid": 0,
  "title": "Camunda Forms",
  "display": "form",
  "access": [
    {
      "roles": [],
      "type": "create_own"
    },
    {
      "roles": [],
      "type": "create_all"
    },
    {
      "roles": [],
      "type": "read_own"
    },
    {
      "roles": [
        "5f96be3eb1fe81b62907bbfa",
        "5f96be3eb1fe81536b07bbfb",
        "5f96be3eb1fe81ce8807bbfc"
      ],
      "type": "read_all"
    },
    {
      "roles": [],
      "type": "update_own"
    },
    {
      "roles": [],
      "type": "update_all"
    },
    {
      "roles": [],
      "type": "delete_own"
    },
    {
      "roles": [],
      "type": "delete_all"
    },
    {
      "roles": [],
      "type": "team_read"
    },
    {
      "roles": [],
      "type": "team_write"
    },
    {
      "roles": [],
      "type": "team_admin"
    }
  ],
  "submissionAccess": [
    {
      "roles": [
        "5f96be3eb1fe81ce8807bbfc"
      ],
      "type": "create_own"
    },
    {
      "roles": [],
      "type": "create_all"
    },
    {
      "roles": [],
      "type": "read_own"
    },
    {
      "roles": [],
      "type": "read_all"
    },
    {
      "roles": [],
      "type": "update_own"
    },
    {
      "roles": [],
      "type": "update_all"
    },
    {
      "roles": [],
      "type": "delete_own"
    },
    {
      "roles": [],
      "type": "delete_all"
    },
    {
      "roles": [],
      "type": "team_read"
    },
    {
      "roles": [],
      "type": "team_write"
    },
    {
      "roles": [],
      "type": "team_admin"
    }
  ],
  "controller": "",
  "properties": {},
  "settings": {},
  "name": "CamundaForms",
  "path": "camundaforms",
  "project": "5f96be3eb1fe81b80f07bbf9",
  "created": "2020-11-11T14:04:15.328Z",
  "modified": "2020-11-20T09:22:50.797Z",
  "machineName": "absmdjhgtguejoc:test"
}
