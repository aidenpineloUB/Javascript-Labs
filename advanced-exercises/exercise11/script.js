// Exercise 11: Search & Filter
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: ['Apple','Banana','Orange','Grapes','Pineapple','Mango'],
    query: ''
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
    const filtered = state.items.filter(i => i.toLowerCase().includes(state.query.toLowerCase()));
    root.innerHTML = `
        <input id="search" placeholder="Search">
        <ul>${filtered.map(i => `<li>${i}</li>`).join('')}</ul>
    `;
    const s = document.getElementById('search');
    if (s) s.value = state.query;
    if (s) s.addEventListener('input', () => updateState({ query: s.value }));
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
