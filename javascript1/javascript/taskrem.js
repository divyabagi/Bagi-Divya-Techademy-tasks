let tasks = {};

function setReminder(task, deadline) {
  tasks[task] = deadline;
  console.log(`Reminder set for "${task}" on ${deadline}.`);
}

function displayReminders() {
  for (let task in tasks) {
    console.log(`Reminder: ${task} on ${tasks[task]}`);
  }
}

setReminder("Finish project", "Tomorrow");
setReminder("Buy groceries", "Today");
displayReminders();
