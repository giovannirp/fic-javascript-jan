const input = document.querySelector("#task-input");
const button = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

// Recupera as tarefas salvas no localStorage ou inicia um arry vazio
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Função para rederizar as tarefas na tela
function renderTasks() {
    taskList.innerHTML = ""; // Limpa a lista antes de renderizar
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Adiciona uma nova tarefa
button.addEventListener("click", () => {
    const task = input.value.trim();
    if (task) {
        tasks.push(task);
        renderTasks();
    }
});

// Redereiza as tarefas ao carregar a página
renderTasks();