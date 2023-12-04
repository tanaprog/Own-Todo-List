class View {
    constructor() {
        this.content = document.querySelector('.contant');
        this.input = document.getElementById('inputFiild');
        this.button = document.getElementById('btn');
        this.listContainer = document.querySelector('.list-container');
    }

    get todoText() {
        return this.input.value;
    }

    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) element.classList.add(className);

        return element;
    }

    renderToDoList(toDoList) {
        // this.toDoList.replaceChildren();

        if (!toDoList?.length) {
            const emptyListText = this.createElement('p', 'empty-list');
            emptyListText.textContent = 'You must to Add a task.';
        } else {
            const updatedToDolist = toDoList.map((listItem) => {
                const toDoItem = this.createElement('ul', 'list-item')
                toDoItem.id = listItem.id;

                const toDoItemText = this.createElement('li', 'list-container');
                toDoItemText.contentEditable = true;
                toDoItem.classList.add('editable');


                const span = this.createElement('span', 'checked');
                // span, classList.add('delete');
                span.textContent = '\u00d7';

                toDoItem.replaceChildren(toDoItemText, span)

                return toDoItem;
            })
            this.toDoList.replaceChildren(...updatedToDolist);
        }
    }
}

const view = new View();

view.renderToDoList([{
    id: 1,
    text: 'Be Happy',
    completed: false,
}])