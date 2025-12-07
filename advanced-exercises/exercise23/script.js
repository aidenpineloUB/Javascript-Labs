// Exercise 23: Form Builder
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    fields: []
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
        <div class="builder">
            <input id="label" placeholder="Field label">
            <select id="type"><option value="text">Text</option><option value="number">Number</option></select>
            <button id="add">Add Field</button>
        </div>
        <div class="preview">
            <h4>Preview</h4>
            <form id="previewForm">${state.fields.map(f => `<label>${f.label}: <input type="${f.type}" name="${f.label}"></label>`).join('')}</form>
        </div>
    `;
    document.getElementById('add').addEventListener('click', () => {
        const label = document.getElementById('label').value.trim();
        const type = document.getElementById('type').value;
        if (!label) return;
        updateState({ fields: [...state.fields, { label, type }] });
        document.getElementById('label').value = '';
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
