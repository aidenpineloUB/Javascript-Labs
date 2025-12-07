// Exercise 7: Modal Dialog System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    open: false,
    title: 'Hello',
    content: 'This is a modal content.'
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
        <button id="openModal">Open Modal</button>
        ${state.open ? `
            <div id="modal" class="modal">
                <div class="modal-content">
                    <h3>${state.title}</h3>
                    <p>${state.content}</p>
                    <button id="closeModal">Close</button>
                </div>
            </div>
        ` : ''}
    `;
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    if (openBtn) openBtn.addEventListener('click', () => updateState({ open: true }));
    if (closeBtn) closeBtn.addEventListener('click', () => updateState({ open: false }));
}

// TODO 4: Add your event listeners and logic
// (listeners are wired in render for simplicity)

// TODO 5: Initial render
render();
