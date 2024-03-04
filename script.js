document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value);
      taskInput.value = "";
    }
  });

  function addTask(taskText) {
    if (taskText.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
});
