import { Client as CamundaClient } from '../vendor/camunda-bpm-sdk-js/lib/index-browser';

export class CamundaForms {
  constructor({ apiUri } = {}) {
    if (!apiUri) {
      apiUri = 'http://localhost:8080'
    }

    this.client = new CamundaClient({ apiUri });
    this.taskService = new this.client.resource('task');
  }

  renderForm() {

  }

  /**
   * @param {ListTasksParams} query
   */
  fetchTasks(query) {
    return this.taskService.list(query)
      .then(tasksResource => tasksResource._embedded.task);
  }

  async renderForm(node, options) {
    const taskId = options.task.id || options.task;
    const form = await this.taskService.form(taskId);
    const task = await this.taskService.get(taskId);

    debugger;
  }
}


/**
 * @typedef {object} ListTasksParams
 * @property {string} [params.processInstanceId]               Restrict to tasks that belong to process instances with the given id.
 * @property {string} [params.processInstanceBusinessKey]      Restrict to tasks that belong to process instances with the given business key.
 * @property {string} [params.processInstanceBusinessKeyLike]  Restrict to tasks that have a process instance business key that has the parameter value as a substring.
 * @property {string} [params.processDefinitionId]             Restrict to tasks that belong to a process definition with the given id.
 * @property {string} [params.processDefinitionKey]            Restrict to tasks that belong to a process definition with the given key.
 * @property {string} [params.processDefinitionName]           Restrict to tasks that belong to a process definition with the given name.
 * @property {string} [params.processDefinitionNameLike]       Restrict to tasks that have a process definition name that has the parameter value as a substring.
 * @property {string} [params.executionId]                     Restrict to tasks that belong to an execution with the given id.
 * @property {string} [params.activityInstanceIdIn]            Only include tasks which belongs to one of the passed and comma-separated activity instance ids.
 * @property {string} [params.assignee]                        Restrict to tasks that the given user is assigned to.
 * @property {string} [params.assigneeLike]                    Restrict to tasks that have an assignee that has the parameter value as a substring.
 * @property {string} [params.owner]                           Restrict to tasks that the given user owns.
 * @property {string} [params.candidateGroup]                  Only include tasks that are offered to the given group.
 * @property {string} [params.candidateUser]                   Only include tasks that are offered to the given user.
 * @property {string} [params.involvedUser]                    Only include tasks that the given user is involved in.
 *                                                          A user is involved in a task if there exists an identity link between task and user (e.g. the user is the assignee).
 * @property {string} [params.unassigned]                      If set to true, restricts the query to all tasks that are unassigned.
 * @property {string} [params.taskDefinitionKey]               Restrict to tasks that have the given key.
 * @property {string} [params.taskDefinitionKeyLike]           Restrict to tasks that have a key that has the parameter value as a substring.
 * @property {string} [params.name]                            Restrict to tasks that have the given name.
 * @property {string} [params.nameLike]                        Restrict to tasks that have a name with the given parameter value as substring.
 * @property {string} [params.description]                     Restrict to tasks that have the given description.
 * @property {string} [params.descriptionLike]                 Restrict to tasks that have a description that has the parameter value as a substring.
 * @property {string} [params.priority]                        Restrict to tasks that have the given priority.
 * @property {string} [params.maxPriority]                     Restrict to tasks that have a lower or equal priority.
 * @property {string} [params.minPriority]                     Restrict to tasks that have a higher or equal priority.
 * @property {string} [params.due]                             Restrict to tasks that are due on the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.dueAfter]                        Restrict to tasks that are due after the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.dueBefore]                       Restrict to tasks that are due before the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.followUp]                        Restrict to tasks that have a followUp date on the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.followUpAfter]                   Restrict to tasks that have a followUp date after the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.followUpBefore]                  Restrict to tasks that have a followUp date before the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.created]                         Restrict to tasks that were created on the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.createdAfter]                    Restrict to tasks that were created after the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.createdBefore]                   Restrict to tasks that were created before the given date.
 *                                                          The date must have the format yyyy-MM-dd'T'HH:mm:ss, so for example 2013-01-23T14:42:45 is valid.
 * @property {string} [params.delegationState]                 Restrict to tasks that are in the given delegation state.
 *                                                          Valid values are "PENDING" and "RESOLVED".
 * @property {string} [params.candidateGroups]                 Restrict to tasks that are offered to any of the given candidate groups. Takes a comma-separated list of group names, so for example developers,support,sales.
 * @property {string} [params.active]                          Only include active tasks. Values may be true or false. suspended Only include suspended tasks.
 *                                                          Values may be "true" or "false".
 * @property {string} [params.taskVariables]                   Only include tasks that have variables with certain values. Variable tasking expressions are comma-separated and are structured as follows:
 *                                                          A valid parameter value has the form key_operator_value. key is the variable name, op is the comparison operator to be used and value the variable value. Note: Values are always treated as String objects on server side. Valid operator values are: eq - equals; neq - not equals; gt - greater than; gteq - greater than or equals; lt - lower than; lteq - lower than or equals; like. key and value may not contain underscore or comma characters.
 * @property {string} [params.processVariables]                Only include tasks that belong to process instances that have variables with certain values.
 *                                                          Variable tasking expressions are comma-separated and are structured as follows:
 *                                                          A valid parameter value has the form key_operator_value. "key" is the variable name, "op" is the comparison operator to be used and value the variable value.
 *                                                          Note: Values are always treated as String objects on server side.
 *                                                          Valid operator values are: "eq" - equals; "neq" - not equals; "gt" - greater than; "gteq" - greater than or equals; "lt" - lower than; "lteq" - lower than or equals; like.
 *                                                          "key" and "value" may not contain underscore or comma characters.
 *
 * @property {string} [params.sortBy]                          Sort the results lexicographically by a given criterion.
 *                                                          Valid values are "instanceId", "dueDate", "executionId", "assignee", "created", "description", "id", "name" and "priority".
 *                                                          Must be used in conjunction with the sortOrder parameter.
 * @property {string} [params.sortOrder]                       Sort the results in a given order. Values may be "asc" for ascending order or "desc" for descending order.
 *                                                          Must be used in conjunction with the sortBy parameter.
 *
 * @property {string} [params.firstResult]                     Pagination of results. Specifies the index of the first result to return.
 * @property {string} [params.maxResults]                      Pagination of results. Specifies the maximum number of results to return.
 *                                                          Will return less results, if there are no more results left.
 */