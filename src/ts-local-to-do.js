// Function to add a task to the list
function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

// Function to save the task list to local storage
function saveToLocalStorage() {
  const taskList = document.getElementById("taskList");
  const tasks = [];

  for (let i = 0; i < taskList.children.length; i++) {
    tasks.push(taskList.children[i].textContent);
  }

  localStorage.setItem("songToDoList", JSON.stringify(tasks));
  alert("Task list saved to local storage.");
}

// Function to load the task list from local storage
function loadFromLocalStorage() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const storedTasks = localStorage.getItem("songToDoList");

  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);

    for (const task of tasks) {
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
      taskList.appendChild(taskItem);
    }
  } else {
    alert("No task list found in local storage.");
  }
}
