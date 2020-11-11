//Selectors
const addButton = document.querySelector('.add-button')
const deleteAllButton = document.querySelector('.delete-button')
const trashButton = document.querySelector('.trash-btn')
const todoList = document.querySelector('.todo-list')
let li = document.createElement("Li");
const toDoInputField = document.querySelector('.textfield')
const clearList = () => todoList.innerHTML = "";


//Event Listeners
addButton.addEventListener('click', async () => {
    await postToDoList({ description: toDoInputField.value, done: false });
    addToDOM();
});


deleteAllButton.addEventListener('click', async () => {
    await deleteAllTasks();
    clearList();
})

//Functions
const addToDOM = async () => {
    const tasks = await getToDoList();
    todoList.innerHTML = '';

    tasks.forEach(task => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');
        const newTodo = document.createElement('li');
        newTodo.innerHTML = task.description;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //checkmark button
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fa fa-check" ></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        // checkmark button klik
        completedButton.addEventListener('click', () => {
            // await updateTodoData(task._id);
            newTodo.classList.toggle('line-through')
            // addToDOM();
        })
        //trash button
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fa fa-trash" ></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //trashbutton klik
        trashButton.addEventListener('click', async () => {
            await deleteTodoData(task._id);
            addToDOM();
        })
        //append to list
        todoList.appendChild(todoDiv);
        // Clear input value
        toDoInputField.value = "";

    })
}
addToDOM()
