function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text" onclick="completeTask(this)">${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function completeTask(taskElement) {
    taskElement.classList.toggle("completed");
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

function editTask(button) {
    const task = button.parentElement.querySelector(".task-text");
    const newTask = prompt("Edit your task:", task.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        task.innerText = newTask.trim();
    }
}

const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

