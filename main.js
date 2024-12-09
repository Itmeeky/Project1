//Variables
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")

//Add event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
//add task

function addTodo(e) {
    // prevent the form from submitting
    e.preventDefault();

    //Prevent adding an empty input
    if (todoInput.value === "") return;

    // a container for the todos
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // create an LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // create two buttons (check button)
    const completeButton = document.createElement("button");
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // create two buttons (delete button)
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-xmark"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append the todoDiv to the todoList
    todoList.appendChild(todoDiv);

    // Clears the input
    todoInput.value = "";
}

//delete task

function deleteCheck(e) {
    const item = e.target;
    // delete todo logic
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }

    // check too logic

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}


//filter todo

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
            todo.style.display = "flex";
            break;

            case "done":
            if (todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
                break;

            case "undone":
            if (!todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
            break;
        }
    });

}