// Selectors
const Container = document.querySelector(".Container");
const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todoList');
const containertargetbutton = document.querySelector('.containertargetbutton');
const ImgContainer = document.querySelector('.ImgContainer');

// Events
containertargetbutton.addEventListener('click', containerOpenClose);
todoList.addEventListener('click', deleteCheck)
todoButton.addEventListener('click', addTodo);
// Funtions
function containerOpenClose(){
    Container.style.display = 'flex';
}
function addTodo(event){
    event.preventDefault();
    ImgContainer.style.display = 'none';
    const div = document.createElement('div');
    div.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    div.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    div.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    div.appendChild(trashButton);

    todoList.appendChild(div);
    Container.style.display = 'none';
    todoInput.value = "";
}


function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        setTimeout(() => {
            todo.remove()
        }, 500);
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}