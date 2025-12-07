// Exercise 9: Accordion Menu
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    sections: [
        { id: 's1', title: 'Section 1', content: 'Content for section 1' },
        { id: 's2', title: 'Section 2', content: 'Content for section 2' },
        { id: 's3', title: 'Section 3', content: 'Content for section 3' }
    ],
    openId: null
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
    root.innerHTML = state.sections.map(s => `
        <div class="accordion-item">
            <button class="accordion-btn" data-id="${s.id}">${s.title}</button>
            <div class="accordion-panel" data-id="${s.id}" style="display: ${state.openId === s.id ? 'block' : 'none'}">${s.content}</div>
        </div>
    `).join('');
    document.querySelectorAll('.accordion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            updateState({ openId: state.openId === id ? null : id });
        });
    });
}

// TODO 4: Add your event listeners and logic
// (listeners are wired in render)

// TODO 5: Initial render
render();
