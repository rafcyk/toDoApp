const btnAddTask = document.querySelector('div.containerAddTask div.wrapAddTask button.addTask');
const ul = document.querySelector('div.tasks div.wrapTasks ul');
const inputTask = document.querySelector('div.containerAddTask div.wrapAddTask input');

const deleteIconSrc = 'deleteIcon.png';

//create new date object
const timeAdd = new Date();

//function add task to lst
const addTask = () => {

    //function will be execute when input has any value
    if (inputTask.value) {

        //create elements of task
        const liItem = document.createElement('li');


        const textTask = document.createElement('p');
        textTask.className = 'textTask';
        textTask.textContent = inputTask.value;


        const pDeleteIcon = document.createElement('p');

        //add date of the create task
        pDeleteIcon.textContent = `${timeAdd.getDate()}.${timeAdd.getMonth() + 1 < 10 ? "0" + (timeAdd.getMonth() + 1) : timeAdd.getMonth() + 1}.${timeAdd.getFullYear()}`;

        const deleteIcon = document.createElement('img');
        deleteIcon.src = deleteIconSrc;

        ul.appendChild(liItem);
        liItem.appendChild(textTask);
        liItem.appendChild(pDeleteIcon);
        pDeleteIcon.appendChild(deleteIcon);

        inputTask.value = '';

        //funnction to remove task
        const removeTask = (e) => {
            e.target.parentNode.parentNode.remove();
        }

        deleteIcon.addEventListener('click', removeTask);

    } else {
        alert('Wpisz zadanie do zrobienia.')
    }
}

btnAddTask.addEventListener('click', addTask)