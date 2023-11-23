const inputFiild = document.getElementById('inputFiild');
const button = document.getElementById('btn');
const textTask = document.getElementById('list-container');

function addTask() {
    if (inputFiild.value === '') {
        const text = document.createElement('p')
        text.textContent = 'You must to Add a task.';
        textTask.appendChild(text);

        inputFiild.addEventListener('input', () => {
            text.remove();
        })
    }
    else {
        let task = document.createElement('li');
        task.textContent = inputFiild.value;
        textTask.appendChild(task);

        const span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span);

        span.addEventListener('click', () => {
            task.remove();
        })

        task.addEventListener('click', () => {
            task.classList.toggle('checked');
        })
    }

    inputFiild.value = '';
}
button.addEventListener('click', addTask);