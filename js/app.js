const todoInput = document.getElementById('inp');
const btn = document.getElementById('submit-button');
const list = document.getElementById('todo-list');



btn.addEventListener('click', function(event) {
  // if(todoInput.value === "") return
  const newItem = document.createElement('li')
  newItem.textContent = todoInput.value
  list.appendChild(newItem)
  todoInput.value = ''
  console.log(newItem)
})

list.addEventListener('click', function(evt) {
    const listRemove = evt.target.parentNode
    listRemove.removeChild(evt.target)
})

