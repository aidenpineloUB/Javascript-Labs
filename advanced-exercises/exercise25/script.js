// Exercise 25: Dashboard
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    stats: { users: 120, sales: 45 }
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
    root.innerHTML = `
        <div class="widgets">
            <div class="widget">Users: ${state.stats.users}</div>
            <div class="widget">Sales: ${state.stats.sales}</div>
        </div>
        <button id="refresh">Refresh</button>
    `;
    document.getElementById('refresh').addEventListener('click', () => {
        // simulate data update
        const newStats = { users: state.stats.users + Math.floor(Math.random()*10), sales: state.stats.sales + Math.floor(Math.random()*5) };
        updateState({ stats: newStats });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
