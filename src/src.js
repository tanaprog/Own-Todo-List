// class View {
//     constructor() {
//         this.input = document.getElementById('inputFiild');
//         this.mainButton = document.getElementById('btn');
//         this.listContainer = document.getElementById('list-container');
//     }

//     get toDoText (){
//         return this.input.value;
//     }
// }

const input = document.getElementById('inputFiild');
const mainButton = document.getElementById('btn');
const listContainer = document.getElementById('list-container');

const NOTES = [];

function yes() {

    const newLi = input.value
    const arrLi = {
        id: '1',
        text: newLi,
        completed: false,
    }

    NOTES.push(arrLi)

    const l = NOTES.map((note) => {
        return createElement('li', note.text)
    })
    // createElement('li', newLi)
    listContainer.innerHTML = '';
    listContainer.append(...l)

    const newSpan = '\u00d7';
    const arrSpan = {
        id: '2',
        text: newSpan,
        completed: false,
    }
    const s = NOTES.map((note1) => {
        return createElement('span', note1.newSpan)
    })
    // listContainer.innerHTML = '';
    
    listContainer.append(...s)
}

console.log(NOTES)

function createElement(tag, textNew) {
    const element = document.createElement(tag);
    element.textContent = textNew;

    return element;
}

mainButton.addEventListener('click', yes)
listContainer.innerHTML = '';
listContainer.append(...NOTES)

// const NOTES = [];

// function createLi (){

//     const text = input.value;
//     const newLi = {
//         id: 111,
//         text: text,
//         completed: false,
//     }

//     NOTES.push(newLi);
//     const createNewLi = NOTES.map((note) => {
//          return createElement('li', note.text);
//     });

//     listContainer.innerHTML = '';
//     listContainer.append(...createNewLi);
// }

// input.value.innerHTML = ''
// console.log(NOTES)

// // const view = new View();
// // view.
// mainButton.addEventListener('click', createLi)
