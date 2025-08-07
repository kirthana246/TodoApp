const todoInput=document.getElementById('todoInput');
const todoList=document.getElementById('todoList');
const addButton=document.getElementById('addButton');
function addTodoToDOM(todoText, isCompleted = false) {
    const listItem=document.createElement('li');
    listItem.classList.add('todo-item');
    if (isCompleted) {
        listItem.classList.add('completed');
    }

const todoSpan=document.createElement('span');
todoTextSpan.classList.add('todo-text-item');
todoTextSpan.textContent= todoText;
const actionsDiv=document.createElement('div');
actionsDiv.classList.add('todo-actions');

const completeButton=document.createElement('button');
completeButton.classList.add('actions-button','complete-button');
completeButton.textContent=isCompleted? 'uncompleted':"Completed";
}
    const saveTodos= ()=>{
    const todos = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        todos.push({
            text: item.querySelector('.todo-text-item').textContent,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
};


 function toggleComplete(listItem, completeButton) {
    listItem.classList.toggle('completed');
    if (listItem.classList.contains('completed')) {

    completeButton.textContent = 'Uncomplete';
    completeButton.style.backgroundColor = 'green';
    completeButton.style.cursor = 'not-allowed';
    } else {
        completeButton.textContent = 'Complete';
        completeButton.style.backgroundColor = 'blue';
        completeButton.style.cursor = 'pointer';
    }
    saveTodos();

}

completeButton.addEventListener("click",() =>
    toggleComplete(listItem, completeButton, isCompleted)
);

const deleteButton=document.createElement('button');
deleteButton.classList.add('actions-button', 'delete-button');
deleteButton.textContent='Delete';
function deleteTodo(listItem) {
    listItem.removechild(listItem);
    // Remove the todo from the saved todos
    saveTodos();
}
deleteButton.addEventListener('click',()=> {deleteTodo(ListItem);
});
    actionsDiv.appendChild(completeButton);
    actionsDiv.appendChild(deleteButton);
    ListItem.appendChild(todoTextSpan);
   // <li>
//      <span>gym</span>
   // </li>
    ListItem.appendChild(actionsDiv);
    todoList.appendChild(ListItem);
    <ul>
        <li>
            <span>gym</span>
            <div class="todo-actions">
                <button >Complete</button>
                <button>Delete</button>
            </div>

        </li>
    </ul>
    function addTodo () {
        const todoText=todoInput.value.trim();
        if(todoText.length>0){
            addTodoToDOM(todoText);
            todoInput.value=''; // Clear input field after adding
        }

    }
    addTodoButton.addEventListener('click', addTodo);
    window.onload=loadTodos;
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            addTodoToDOM(todo.text, todo.completed);
        });
    }