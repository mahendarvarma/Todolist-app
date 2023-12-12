// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add Task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);

        // Clear the input
        taskInput.value = '';
    }
}

// Remove Task function
function removeTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}
