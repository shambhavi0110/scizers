# scizers

HTML 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <script src="task.js"></script>
</head>
<body>
    <div id="app">
        <h1>Task Manager</h1>
      
        <div>
          <h2>Add User</h2>
          <input type="text" id="user-input">
          <button id="add-user-btn">Add User</button>
        </div>
      
        <div>
          <h2>Create Task</h2>
          <label for="task-name-input">Task Name:</label>
          <input type="text" id="task-name-input">
          <label for="due-date-input">Due Date:</label>
          <input type="date" id="due-date-input">
          <button id="create-task-btn">Create Task</button>
        </div>
      
        <div>
          <h2>Task List</h2>
          <label for="filter-name-input">Filter by Name:</label>
          <input type="text" id="filter-name-input">
          <label for="filter-status-input">Filter by Status:</label>
          <select id="filter-status-input">
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <label for="filter-date-input">Filter by Due Date:</label>
          <input type="date" id="filter-date-input">
          <ul id="task-list"></ul>
        </div>
      </div>
      
</body>
</html>



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
