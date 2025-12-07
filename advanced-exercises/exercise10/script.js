// Exercise 10: Pagination System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    items: Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`),
    pageSize: 5,
    currentPage: 1
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
    const start = (state.currentPage - 1) * state.pageSize;
    const pageItems = state.items.slice(start, start + state.pageSize);
    const list = pageItems.map(i => `<li>${i}</li>`).join('');
    const totalPages = Math.ceil(state.items.length / state.pageSize);
    root.innerHTML = `
        <ul class="page-list">${list}</ul>
        <div class="pagination">
            <button id="prev">Prev</button>
            <span>Page ${state.currentPage} / ${totalPages}</span>
            <button id="next">Next</button>
        </div>
    `;
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    if (prev) prev.addEventListener('click', () => updateState({ currentPage: Math.max(1, state.currentPage - 1) }));
    if (next) next.addEventListener('click', () => updateState({ currentPage: Math.min(totalPages, state.currentPage + 1) }));
}

// TODO 4: Add your event listeners and logic
// (wired in render)

// TODO 5: Initial render
render();
