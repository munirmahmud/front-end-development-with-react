const todoInput = document.querySelector(".todo__input");
const todoItems = document.querySelector(".todo__items");
const items = document.querySelectorAll(".list-group-item");

function addTodo() {
  todoInput.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      const newItem = createNewElement(todoInput.value);

      //   todoItems.appendChild(newItem);
      todoItems.insertBefore(newItem, todoItems.childNodes[0]);

      todoInput.value = "";
    }
  });
}

function createNewElement(text) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";

  const span = document.createElement("span");
  span.setAttribute("class", "todo__text");
  span.textContent = text;

  const delIcon = document.createElement("span");
  delIcon.innerHTML = '<i class="fas fa-trash delete"></i>';

  li.appendChild(span);

  li.appendChild(delIcon);

  return li;
}

// function completedTask() {
//   // for (const item of items) {
//   //   item.addEventListener("click", function (e) {
//   //     const listItem = e.target.classList;

//   //     if (listItem.contains("todo__text")) {
//   //       listItem.toggle("completed");
//   //     }
//   //   });
//   // }

// }

todoItems.addEventListener("click", completedTask);

function completedTask(e) {
  const listItem = e.target.classList;

  if (listItem.contains("todo__text")) {
    listItem.toggle("completed");
  }
}

todoItems.addEventListener("click", deleteTodoItem);

function deleteTodoItem(e) {
  const item = e.target;

  if (item.classList.contains("delete")) {
    item.parentElement.parentElement.remove();
  }
}

addTodo();
