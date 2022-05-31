const todoInput = document.getElementById('inp');
const btn = document.getElementById('submit-button');
const list = document.getElementById('todo-list');
const clear = document.getElementById('clear')



btn.addEventListener('click', function(event) {
  if(todoInput.value === "") return
  const newItem = document.createElement('li')
  newItem.textContent = todoInput.value
  list.appendChild(newItem)
  todoInput.value = ''
  console.log(newItem)
})

list.addEventListener('click', function(event) {
    const listRemove = event.target.parentNode
    listRemove.removeChild(event.target)
})

clear.addEventListener('click', function(event){
  list.innerHTML = ''
  todoInput.innerHTML = ''
})

