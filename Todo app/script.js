let todoList = [];

function handleTodo() {
  try {
    const todoInput = document.getElementById("todo-input");
    const submitButton = document.getElementById("submit");

    if (todoInput.value.trim() === "") {
      return false;
    }

    const todo = {
      id: todoList.length,
      text: todoInput.value.trim(),
      completed: false,
    };

    if (submitButton.innerHTML === "Submit") {
      addTodoItem(todo);
    } else if (submitButton.innerHTML === "Edit") {
      editTodoItem(todo);
    }

    todoInput.value = "";
  } catch (error) {
    console.error(error);
  }
}

function addTodoItem(todo) {
  todoList.push(todo);

  const li = createTodoListItem(todo);
  document.getElementById("todos").appendChild(li);
}

function createTodoListItem(todo) {
  const li = document.createElement("li");
  li.innerHTML = todo.text;
  li.id = `todo-${todo.id}`;
  li.classList = "todo";

  const deleteButton = createButton("D", "delete", () => deleteItem(todo.id));
  const editButton = createButton("E", "edit", () => editItem(todo.id));

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  return li;
}

function createButton(text, className, clickHandler) {
  const button = document.createElement("button");
  button.innerHTML = text;
  button.classList = className;
  button.addEventListener("click", clickHandler);
  return button;
}

function deleteItem(id) {
  const index = todoList.findIndex((x) => x.id === id);

  if (index !== -1) {
    todoList.splice(index, 1);
    const li = document.getElementById(`todo-${id}`);
    if (li) {
      li.remove();
    }

    updateListIds();
  }
}

function updateListIds() {
  todoList.forEach((todo, index) => {
    const listItem = document.getElementById(`todo-${todo.id}`);
    if (listItem) {
      listItem.id = `todo-${index}`;
    }
    todo.id = index;
  });
}

function editItem(id) {
  const index = todoList.findIndex((x) => x.id === id);

  if (index !== -1) {
    const todo = todoList[index];
    const li = document.getElementById(`todo-${id}`);

    if (li) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text;

      const saveButton = createButton("Save", "save", () => saveEdit(id, editInput));
      const cancelButton = createButton("Cancel", "cancel", () => cancelEdit(id));

      li.innerHTML = "";
      li.appendChild(editInput);
      li.appendChild(saveButton);
      li.appendChild(cancelButton);
    }
  }
}

function saveEdit(id, editInput) {
  const index = todoList.findIndex((x) => x.id === id);

  if (index !== -1) {
    const newTodoText = editInput.value;
    todoList[index].text = newTodoText;

    const li = createTodoListItem(todoList[index]);
    document.getElementById("todos").replaceChild(li, document.getElementById(`todo-${id}`));
  }
}

function cancelEdit(id) {
  const index = todoList.findIndex((x) => x.id === id);

  if (index !== -1) {
    const li = createTodoListItem(todoList[index]);
    document.getElementById("todos").replaceChild(li, document.getElementById(`todo-${id}`));
  }
}