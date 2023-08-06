document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task__input");
    const tasksList = document.getElementById("tasks__list");
    const addButton = document.getElementById("tasks__add");
  
    // Добавление задачи по клику на кнопку
    addButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (taskInput.value.trim() !== "") {
        addTask(taskInput.value.trim());
        taskInput.value = "";
      }
    });
  
    // Удаление задач
    tasksList.addEventListener("click", function (event) {
      const clickedElement = event.target;
      if (clickedElement.classList.contains("task__remove")) {
        removeTask(clickedElement.parentNode);
      }
    });
  

    // Функция для добавления новой задачи
    function addTask(title) {
      const taskTemplate = `
        <div class="task">
          <div class="task__title">${title}</div>
          <a href="#" class="task__remove">&times;</a>
        </div>
      `;
      tasksList.insertAdjacentHTML("beforeend", taskTemplate);
    }
  
    // Функция для удаления задачи
    function removeTask(taskElement) {
      taskElement.remove();
    }
  });
  