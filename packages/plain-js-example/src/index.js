import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import $ from 'jquery';

import {
  CamundaForms
} from 'camunda-forms';

const client = new CamundaForms({ apiUri: 'http://localhost:8080/engine-rest' });

$(() => {
  setupTasks(onTaskSelected);

});

async function onTaskSelected(taskId) {
  const form = $('#form');

  await client.renderForm(form.get(0), { task: taskId });
}

async function setupTasks(onTaskSelected) {

  // (1) setup event listener
  const cardsContainer = $('#tasks');
  cardsContainer.on('click', event => {
    const card = event.target.closest('[data-task-id]');

    if (!card) {
      return;
    }

    const taskId = card.dataset['taskId'];

    onTaskSelected(taskId);
  });

  // (2) fetch and display tasks in container
  const tasks = await client.fetchTasks();
  const cards = createTaskCards(tasks);

  cardsContainer.append(cards);
}

function createTaskCards(tasks) {
  const cardTemplates = tasks.map(task => `
<div class="card" data-task-id="${task.id}">
  <div class="card-body">
    <h5 class="card-title">${task.name}</h5>
  </div>
</div>`);

  return $(cardTemplates.join('\n'));
}
