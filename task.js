const app = document.querySelector('#app');
const userInput = document.querySelector('#user-input');
const addUserBtn = document.querySelector('#add-user-btn');
const taskNameInput = document.querySelector('#task-name-input');
const dueDateInput = document.querySelector('#due-date-input');
const createTaskBtn = document.querySelector('#create-task-btn');
const filterNameInput = document.querySelector('#filter-name-input');
const filterStatusInput = document.querySelector('#filter-status-input');
const filterDateInput = document.querySelector('#filter-date-input');
const taskList = document.querySelector('#task-list');

let users = [];
let tasks = [];

// Add User
addUserBtn.addEventListener('click', () => {
  const name = userInput.value.trim();
  if (name) {
    users.push(name);
    userInput.value = '';
    alert(`User '${name}' added successfully!`);
  }
});

// Create Task
createTaskBtn.addEventListener('click', () => {
  const name = taskNameInput.value.trim();
  const dueDate = dueDateInput.value;
  if (name && dueDate) {
    tasks.push({
      name,
      dueDate,
      status: 'pending'
    });
    taskNameInput.value = '';
    dueDateInput.value = '';
    alert(`Task '${name}' created successfully!`);
  }
});

// Delete Task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-task-btn')) {
    const index = e.target.dataset.index;
    tasks.splice(index, 1);
    renderTasks();
  }
});

// Edit Task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-task-btn')) {
    const index = e.target.dataset.index;
    const task = tasks[index];
    const newName = prompt('Enter new task name:', task.name);
    if (newName) {
      task.name = newName.trim();
      renderTasks();
    }
  }
});

// Change Task Status
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('status-btn')) {
