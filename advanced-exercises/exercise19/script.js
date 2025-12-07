// Exercise 19: Data Table
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    rows: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Carol', age: 35 }
    ],
    sortKey: null,
    asc: true,
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
    const filtered = state.rows.filter(r => r.name.toLowerCase().includes(state.query.toLowerCase()));
    let rows = [...filtered];
    if (state.sortKey) {
        rows.sort((a,b) => state.asc ? (a[state.sortKey] > b[state.sortKey] ? 1 : -1) : (a[state.sortKey] < b[state.sortKey] ? 1 : -1));
    }
    root.innerHTML = `
        <input id="search" placeholder="Filter by name">
        <table>
            <thead><tr><th data-key="name">Name</th><th data-key="age">Age</th></tr></thead>
            <tbody>${rows.map(r => `<tr><td>${r.name}</td><td>${r.age}</td></tr>`).join('')}</tbody>
        </table>
    `;
    const search = document.getElementById('search');
    if (search) search.value = state.query;
    if (search) search.addEventListener('input', () => updateState({ query: search.value }));
    root.querySelectorAll('th').forEach(th => th.addEventListener('click', () => {
        const key = th.getAttribute('data-key');
        if (state.sortKey === key) updateState({ asc: !state.asc });
        else updateState({ sortKey: key, asc: true });
    }));
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
