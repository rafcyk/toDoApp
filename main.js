const btnAddTask = document.querySelector('div.containerAddTask div.wrapAddTask button.addTask');
const ul = document.querySelector('div.tasks div.wrapTasks ul');
const inputTask = document.querySelector('div.containerAddTask div.wrapAddTask input');

const deleteIconSrc = 'deleteIcon.png';


const addTask = () => {
    const liItem = document.createElement('li');
    liItem.textContent = inputTask.value;

    const spanDeleteIcon = document.createElement('span');

    const deleteIcon = document.createElement('img');
    deleteIcon.src = deleteIconSrc;

    ul.appendChild(liItem);
    liItem.appendChild(spanDeleteIcon);
    spanDeleteIcon.appendChild(deleteIcon);


    inputTask.value = '';



    const removeTask = (e) => {
        e.target.parentNode.parentNode.remove();
    }

    spanDeleteIcon.addEventListener('click', removeTask);
}





btnAddTask.addEventListener('click', addTask)