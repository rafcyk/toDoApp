const btnAddTask = document.querySelector('div.containerAddTask div.wrapAddTask button.addTask');
const ul = document.querySelector('div.tasks div.wrapTasks ul');
const inputTask = document.querySelector('div.containerAddTask div.wrapAddTask input');

const deleteIconSrc = 'deleteIcon.png';
const timeAdd = new Date();


const addTask = () => {
    if (inputTask.value) {
        const liItem = document.createElement('li');
        liItem.textContent = inputTask.value;

        const spanDeleteIcon = document.createElement('span');

        spanDeleteIcon.textContent = `${timeAdd.getDate()}.${timeAdd.getMonth() + 1 < 10 ? "0" + timeAdd.getMonth() : timeAdd.getMonth() + 1}.${timeAdd.getFullYear()}`

        console.log()

        const deleteIcon = document.createElement('img');
        deleteIcon.src = deleteIconSrc;

        ul.appendChild(liItem);
        liItem.appendChild(spanDeleteIcon);
        spanDeleteIcon.appendChild(deleteIcon);


        inputTask.value = '';



        const removeTask = (e) => {
            e.target.parentNode.parentNode.remove();
        }

        deleteIcon.addEventListener('click', removeTask);

    }

    else {
        alert('Wpisz zadanie do zrobienia.')
    }
}





btnAddTask.addEventListener('click', addTask)