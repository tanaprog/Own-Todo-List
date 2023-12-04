const inputFiild = document.getElementById('inputFiild');
const button = document.getElementById('btn');
const textTask = document.getElementById('list-container');

function createElement(tag, innerText) {
    const element = document.createElement(tag);
    element.textContent = innerText;
    return element;
}

const NOTES = [
    // {
    //     id: '1',
    //     text: 'popo',
    //     isCompleted: false,
    // },
    // {
    //     id: '2',
    //     text: 'uiui',
    //     isCompleted: false,
    // },
];

function render() {

    if (inputFiild.value === "") {
    const text = 'You must to Add a task.';
    const newNote = {
        id: '222',
        text: text,
        isCompleted: false,
    };

    NOTES.push(newNote);
    const newNoteElements = NOTES.map((note) => {
        return createElement('p', note.text);
    });

    textTask.innerHTML = '';
    textTask.append(...newNoteElements);

    console.log(NOTES)

   

    } else {
        const text = inputFiild.value;
        const newNoteLi = {
            id: '333',
            text: text,
            isCompleted: false,
        };

        NOTES.push(newNoteLi);
        const newLi = NOTES.map((note1) => {
            return createElement('li', note1.text)
        });

        textTask.innerHTML = '';
        textTask.append(...newLi);

        console.log(NOTES)



        const span = '\u00d7';
        const newNoteSpan = {
            id: '444',
            text: span,
            isCompleted: true,
        };

        NOTES.push(newNoteSpan);
        const newSpan = NOTES.map((n) => {
            return createElement('span', n.span)
        });

        // textTask.innerHTML = '';
        newLi.append(...newSpan);

        console.log(NOTES)
    }
    
}

button.addEventListener('click', render)










// function addLi() {
//     const text = inputFiild.value;
//     const newNoteLi = {
//         id: '333',
//         text: text,
//         isCompleted: false,
//     };

//     NOTES.push(newNoteLi);
//     const newLi = NOTES.map((note1) => {
//         return createElement('li', note1.text)
//     });

//     textTask.innerHTML = '';
//     textTask.append(...newLi);



// const span = '\u00d7';
// const newNoteSpan = {
//     id: '444',
//     text: span,
//     isCompleted: true,
// };

// NOTES.push(newNoteSpan);
// const newSpan = NOTES.map((n) => {
//     return createElement('span', n.span)
// });

// // textTask.innerHTML = '';
// textTask.append(...newSpan);

//     console.log(NOTES)

//     addSpan();
// }

// button.addEventListener('click', addLi);


// function addSpan() {
//     const text = '\u00d7';
//     const newNoteSpan = {
//         id: '444',
//         text: text,
//         isCompleted: false,
//     };

//     NOTES.push(newNoteSpan);
//     const newSpan = NOTES.map((elem) => {
//         return createElement('span', elem.text)
//     });

//     // textTask.innerHTML = '';
//     textTask.append(...newSpan);

//     console.log(NOTES)
// }



// function addTask() {

//     const text = 'You must to Add a task.';
//     const newNote = {
//         id: '222',
//         text: text,
//         isCompleted: false,
//     };

//     NOTES.push(newNote);
//     const newNoteElements = NOTES.map((note) => {
//         return createElement('p', note.text);
//     });

//     textTask.innerHTML = '';
//     textTask.append(...newNoteElements);

//     console.log(NOTES)






// if (inputFiild.value === '') {
//     const text = createElement('p', 'You must to Add a task.');
//     textTask.appendChild(text);

//     inputFiild.addEventListener('input', () => {
//         text.remove();
//     })
// }
// else {
//     let task = createElement('li', inputFiild.value);
//     textTask.appendChild(task);

//     const span = createElement('span', '\u00d7');
//     task.appendChild(span);

//     span.addEventListener('click', () => {
//         task.remove();
//     })

//     task.addEventListener('click', () => {
//         task.classList.toggle('checked');
//     })
// }

// inputFiild.value = '';
// }
// button.addEventListener('click', addTask);




















// function addTask() {
//     if (inputFiild.value === '') {
//         const text = document.createElement('p')
//         text.textContent = 'You must to Add a task.';
//         textTask.appendChild(text);

//         inputFiild.addEventListener('input', () => {
//             text.remove();
//         })
//     }
//     else {
//         let task = document.createElement('li');
//         task.textContent = inputFiild.value;
//         textTask.appendChild(task);

//         const span = document.createElement('span');
//         span.textContent = '\u00d7';
//         task.appendChild(span);

//         span.addEventListener('click', () => {
//             task.remove();
//         })

//         task.addEventListener('click', () => {
//             task.classList.toggle('checked');
//         })
//     }

//     inputFiild.value = '';
// }
// button.addEventListener('click', addTask);