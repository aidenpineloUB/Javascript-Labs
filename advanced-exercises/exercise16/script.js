// Exercise 16: Drag & Drop List
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: ['Item A','Item B','Item C','Item D']
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
    root.innerHTML = `<ul id="dlist">${state.items.map((it,i) => `<li draggable="true" data-index="${i}">${it}</li>`).join('')}</ul>`;
    const list = document.getElementById('dlist');
    let dragSrc = null;
    list.querySelectorAll('li').forEach(li => {
        li.addEventListener('dragstart', (e) => {
            dragSrc = li;
            e.dataTransfer.effectAllowed = 'move';
        });
        li.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        li.addEventListener('drop', (e) => {
            e.preventDefault();
            if (!dragSrc || dragSrc === li) return;
            const from = parseInt(dragSrc.getAttribute('data-index'),10);
            const to = parseInt(li.getAttribute('data-index'),10);
            const items = [...state.items];
            const [moved] = items.splice(from,1);
            items.splice(to,0,moved);
            updateState({ items });
        });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
