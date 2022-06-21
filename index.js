// selectors 

document.querySelector('form').addEventListener('submit',handleSubmitForm);
document.querySelector('ul').addEventListener('click',handleClickCheckOrDelete);


// event handlers
function handleSubmitForm(e)
{
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value !='')
    {
        addTodo(input.value);
    }
    input.value='';
}
function handleClickCheckOrDelete(e)
{
    if(e.target.name =='checkButton')
    checkTodo(e);

    if(e.target.name =='deleteButton')
    deleteTodo(e);
}

//helper functions
function addTodo(todo)
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
    
}
