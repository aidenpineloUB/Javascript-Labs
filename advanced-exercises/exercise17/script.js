// Exercise 17: Undo/Redo System
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    value: 0,
    past: [],
    future: []
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
        <div>Value: ${state.value}</div>
        <div>
            <button id="inc">+1</button>
            <button id="dec">-1</button>
            <button id="undo">Undo</button>
            <button id="redo">Redo</button>
        </div>
        <div>Past: ${state.past.length} | Future: ${state.future.length}</div>
    `;
    document.getElementById('inc').addEventListener('click', () => {
        updateState({ past: [...state.past, state.value], value: state.value + 1, future: [] });
    });
    document.getElementById('dec').addEventListener('click', () => {
        updateState({ past: [...state.past, state.value], value: state.value - 1, future: [] });
    });
    document.getElementById('undo').addEventListener('click', () => {
        if (state.past.length === 0) return;
        const previous = state.past[state.past.length - 1];
        updateState({ past: state.past.slice(0, -1), future: [state.value, ...state.future], value: previous });
    });
    document.getElementById('redo').addEventListener('click', () => {
        if (state.future.length === 0) return;
        const next = state.future[0];
        updateState({ future: state.future.slice(1), past: [...state.past, state.value], value: next });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
