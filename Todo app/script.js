let todoList = [];
function handleTodo() {
  const todo = document.getElementById("todo-input").value;
  try {
    if (todo !== "") {
      todoList.push({ id: todoList.length + 1, todo: todo, completed: false });
      const li = document.createElement("li");
      li.innerHTML = todo;
      li.id = `todo-${todoList.length}`;
      li.classList = "todo";
      document.getElementById("todos").appendChild(li);

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "D";
      deleteButton.classList = "delete";

      const editButton = document.createElement("button");
      editButton.innerHTML = "E";
      editButton.classList = "edit";

      deleteButton.addEventListener("click", function () {
        deleteItem(
          todoList.findIndex((x) => x.id === Number(li.id.split("-")[1]))
        );
      });

      editButton.addEventListener("click", function () {
        editItem(
          todoList.findIndex((x) => x.id === Number(li.id.split("-")[1]))
        );
      });

      li.appendChild(editButton);
      li.appendChild(deleteButton);

      document.getElementById("todo-input").value = "";
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}

function deleteItem(index) {
  todoList.splice(index, 1);
  const li = document.querySelector(`#todo-${index + 1}`);
  li.remove();
}
