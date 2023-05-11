document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description")
    const taskDescription = taskInput.value
    const taskItem = document.createElement("li")
    taskItem.innerText = taskDescription + " "
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
      deleteButton.remove();
    });
    taskList.appendChild(taskItem);
    taskItem.appendChild(deleteButton);

    taskInput.value = "";

  })
});
