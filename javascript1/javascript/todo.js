let todoList = new Map();
function addtask(task, status = "pending") {
  todoList.set(task, status);
  console.log(`Task "${task}" added with status "${status}".`);
}

function taskcompleted(task) {
  if (todoList.has(task)) {
    todoList.set(task, "completed");
    console.log(`Task "${task}" marked as completed.`);
  } else {
    console.log(`Task "${task}" not found.`);
  }
}

function displayTasks() {
  console.log("To-Do List:");
  for (let [task, status] of todoList) {
    console.log(`${task} - ${status}`);
  }
}
addtask("Buy groceries");
addtask("Completion of assignments");
displayTasks();
taskcompleted("Buy groceries");
displayTasks();
addtask("Go to market", "completed");
displayTasks();