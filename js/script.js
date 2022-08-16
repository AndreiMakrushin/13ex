const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoComplited = document.querySelector('.todo-completed')
//-------------------------------------------------------------------------

let todoData = [];
const render = () => {
    todoList.innerHTML = ''
    todoComplited.innerHTML = ''
    todoData.forEach((item, i)=>{
        const li = document.createElement('li')
        li.classList.add('todo-item')
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
		    '<button class="todo-remove"></button>' +
		    '<button class="todo-complete"></button>' +
            '</div>'
        if (item.completed) {
            todoComplited.append(li)
        }else{
            todoList.append(li)
        }
        li.querySelector('.todo-complete').addEventListener('click', function(){
            item.completed = !item.completed
            localStorage.setItem('todoData', JSON.stringify(todoData))
            render()
        })
        li.querySelector('.todo-remove').addEventListener('click', function(){
            todoData.splice(i, 1)
            localStorage.setItem('todoData', JSON.stringify(todoData))
            render()
        })
    })
}
if (localStorage.getItem('todoData')) { 
    todoData = JSON.parse(localStorage.getItem('todoData'));
    render()
}
todoControl.addEventListener('submit', (e) => {
    e.preventDefault();

let newTodo ={
    text: headerInput.value,
    completed: false
 }
    todoData.push(newTodo);
    if (headerInput.value === '') {
        headerInput.value = ''
        render();
    }else{
        headerInput.value = ''
        render();
        localStorage.setItem('todoData', JSON.stringify(todoData));
        
    }  
})


