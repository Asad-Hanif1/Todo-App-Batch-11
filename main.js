
































































































document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    }
  
    taskList.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
      } else if (e.target.classList.contains('edit')) {
        const taskSpan = e.target.parentElement.previousElementSibling;
        const newText = prompt('Edit task:', taskSpan.textContent);
        if (newText !== null && newText.trim() !== '') {
          taskSpan.textContent = newText.trim();
        }
      }
    });
  });






















































// function addTodo() {
//     var todoInput = document.getElementById("todoInput");
//     var todoList = document.getElementById("todoList");

//     // Create new list item
//     var listItem = document.createElement("li");

//     // Add text content
//     listItem.textContent = todoInput.value;

//     // Create delete button
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("deleteButton");

//     // Add click event listener to delete button
//     deleteButton.addEventListener("click", function() {
//         listItem.remove();
//     });

//     // Append delete button to list item
//     listItem.appendChild(deleteButton);

//     // Append list item to todo list
//     todoList.appendChild(listItem);

//     // Clear input
//     todoInput.value = "";
// }