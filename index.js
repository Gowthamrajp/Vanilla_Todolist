// Task loader - Checks local storage for stored tasks and loads tasks if found. 
let tasks = [];
taskImporter();
tasks.forEach(element=> loadTodo(element)); 

// selectors 

document.querySelector('form').addEventListener('submit',handleSubmitForm);
document.querySelector('ul').addEventListener('click',handleClickCheckOrDelete);
document.getElementById('clearAll').addEventListener('click',handleClickClearAll);

// event handlers
function handleSubmitForm(e)
{
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value !='')
    {
        addTodo(input.value);
    }
    else alert("Please add some task!");

    input.value='';
}
function handleClickCheckOrDelete(e)
{
    if(e.target.name =='checkButton')
    checkTodo(e);

    if(e.target.name =='deleteButton')
    deleteTodo(e);
}
function handleClickClearAll(e)
{
    document.querySelector('ul').innerHTML = '';
    tasks=[];
    localStorage.clear();

}

//helper functions
function addTodo(todo)
{   
    tasks.push(todo); 
    localStorage.setItem('tasks',JSON.stringify(tasks));
    
    let ul =document.querySelector('ul');
    let li =document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item')
    ul.appendChild(li);
}
function loadTodo(todo)
{   
    let ul =document.querySelector('ul');
    let li =document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item')
    ul.appendChild(li);
}
function checkTodo(e)
{
   let item = e.target.parentNode;
   if(item.style.textDecoration == 'none') 
   item.style.textDecoration = 'line-through';
   else item.style.textDecoration = 'none';
}
function deleteTodo(e)
{
   let item = e.target.parentNode;
   tasks.forEach(element=> 
   {
    if(element===item.children[0].innerText)
    {
        tasks.splice(tasks.indexOf(element),1);
        
    }  
   });

   localStorage.setItem('tasks',JSON.stringify(tasks));
   item.remove(); 
}
function taskImporter()
{
    if(JSON.parse(localStorage.getItem('tasks'))!=null)
    tasks=JSON.parse(localStorage.getItem('tasks'));  
    
}
