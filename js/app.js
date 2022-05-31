const todoInput = document.querySelector("#input");
const btn = document.querySelector("#submit-button");
const list = document.querySelector("#ul");

let listDiv;

init();



btn.addEventListener('click', function(event) {
  if(todoInput.value === "") return
  const newItem = document.createElement('li')
  newTodo.textContent = todoInput.value
  list.appendChild(newItem)
  todoInput.value = ''
})



function init() {
  listDiv = [];
}
