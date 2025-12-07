// Exercise 18: Kanban Board
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    columns: {
        todo: ['Task A','Task B'],
        inprogress: [],
        done: []
    }
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
    function colHtml(key) {
        const items = state.columns[key] || [];
        return `
            <div class="col">
                <h4>${key}</h4>
                <ul>${items.map((it,i) => `<li>${it} <button data-col="${key}" data-index="${i}" class="move-right">→</button> <button data-col="${key}" data-index="${i}" class="move-left">←</button></li>`).join('')}</ul>
            </div>
        `;
    }
    root.innerHTML = `
        <div class="kanban">
            ${colHtml('todo')}
            ${colHtml('inprogress')}
            ${colHtml('done')}
        </div>
        <div class="add">
            <input id="newTask" placeholder="New task">
            <button id="addTask">Add to Todo</button>
        </div>
    `;
    document.getElementById('addTask').addEventListener('click', () => {
        const v = document.getElementById('newTask').value.trim();
        if (!v) return;
        updateState({ columns: { ...state.columns, todo: [...state.columns.todo, v] } });
        document.getElementById('newTask').value = '';
    });
    root.querySelectorAll('.move-right').forEach(btn => btn.addEventListener('click', (e) => {
        const col = btn.getAttribute('data-col');
        const idx = parseInt(btn.getAttribute('data-index'),10);
        if (col === 'todo') moveBetween('todo','inprogress', idx);
        else if (col === 'inprogress') moveBetween('inprogress','done', idx);
    }));
    root.querySelectorAll('.move-left').forEach(btn => btn.addEventListener('click', (e) => {
        const col = btn.getAttribute('data-col');
        const idx = parseInt(btn.getAttribute('data-index'),10);
        if (col === 'inprogress') moveBetween('inprogress','todo', idx);
        else if (col === 'done') moveBetween('done','inprogress', idx);
    }));
    function moveBetween(from, to, idx) {
        const fromArr = [...state.columns[from]];
        const [item] = fromArr.splice(idx,1);
        const toArr = [...state.columns[to], item];
        updateState({ columns: { ...state.columns, [from]: fromArr, [to]: toArr } });
    }
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
