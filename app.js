const tasks = [
  { id: 1, title: "Hacer trabajo práctico", completed: false },
  { id: 2, title: "Estudiar para el parcial", completed: false },
];

let nextTaskId = 3;

const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyState = document.querySelector("#empty-state");
const taskInput = document.querySelector("#task-input");

function renderTasks() {
  taskList.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement("li");
    item.className = `task-row${task.completed ? " completed" : ""}`;

    const main = document.createElement("div");
    main.className = "task-main";

    const checkbox = document.createElement("input");
    checkbox.className = "task-checkbox";
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Marcar como completada: ${task.title}`);
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
    });

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("aria-label", `Eliminar tarea: ${task.title}`);
    deleteButton.addEventListener("click", () => {
      const taskIndex = tasks.findIndex((entry) => entry.id === task.id);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
      }
    });

    main.append(checkbox, title);
    item.append(main, deleteButton);
    taskList.append(item);
  }

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  taskCount.textContent = `${remainingTasks} ${remainingTasks === 1 ? "pendiente" : "pendientes"}`;
  emptyState.hidden = tasks.length !== 0;
}

document.querySelector("#add-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (!title) {
    taskInput.focus();
    return;
  }

  tasks.push({ id: nextTaskId, title, completed: false });
  nextTaskId += 1;
  taskInput.value = "";
  renderTasks();
  taskInput.focus();
});

document.querySelector("#today").textContent = new Intl.DateTimeFormat("es-AR", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date());

renderTasks();
