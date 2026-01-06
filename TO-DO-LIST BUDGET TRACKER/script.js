let taskList = document.getElementById("taskList");
function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return alert("Enter task!");
    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${input.value}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    input.value = "";
}
function deleteTask(btn) {
    btn.parentElement.remove();
}
function toggleComplete(task) {
    task.classList.toggle("completed");
}