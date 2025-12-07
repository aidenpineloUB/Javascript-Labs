// Exercise 6: Todo List Manager
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    todos: []
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const root = document.getElementById('app');
    if (!root) return;
    const list = state.todos.map(t => `<li>${t.text} <button data-id="${t.id}" class="remove">Remove</button></li>`).join('');
    root.innerHTML = `
        <div class="todo-input">
            <input id="newTodo" placeholder="New todo">
            <button id="addBtn">Add</button>
        </div>
        <ul id="todoList">${list}</ul>
    `;
    // Wire up add and remove after rendering
    const addBtn = document.getElementById('addBtn');
    const newTodo = document.getElementById('newTodo');
    if (addBtn && newTodo) addBtn.addEventListener('click', () => {
        const txt = newTodo.value.trim();
        if (!txt) return;
        const item = { id: Date.now() + Math.random(), text: txt };
        updateState({ todos: [...state.todos, item] });
    });
    document.getElementById('todoList').addEventListener('click', (e) => {
        const tgt = e.target;
        if (tgt && tgt.classList && tgt.classList.contains('remove')) {
            const id = tgt.getAttribute('data-id');
            updateState({ todos: state.todos.filter(it => String(it.id) !== String(id)) });
        }
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
