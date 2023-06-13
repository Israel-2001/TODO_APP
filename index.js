// Retrieve todos from local storage
function getTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

// Save todos to local storage
function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Add a todo
function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const todos = getTodos();
    todos.push(todoText);
    saveTodos(todos);
    renderTodos();
    todoInput.value = '';
  }
}

// Delete a todo
function deleteTodo(index) {
  const todos = getTodos();
  todos.splice(index, 1);
  saveTodos(todos);
  renderTodos();
}

// Render todos
function renderTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  const todos = getTodos();
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(index));
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

// Event listener for form submission
document.getElementById('todo-form').addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

// Initial rendering of todos
renderTodos();