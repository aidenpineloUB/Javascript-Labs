// Exercise 14: Multi-Step Form
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    step: 1,
    data: { name: '', email: '', age: '' }
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
    if (state.step === 1) {
        root.innerHTML = `
            <div>
                <label>Name: <input id="name" value="${state.data.name}"></label>
                <button id="next">Next</button>
            </div>
        `;
        document.getElementById('next').addEventListener('click', () => {
            const name = document.getElementById('name').value;
            updateState({ step: 2, data: { ...state.data, name } });
        });
    } else if (state.step === 2) {
        root.innerHTML = `
            <div>
                <label>Email: <input id="email" value="${state.data.email}"></label>
                <button id="prev">Prev</button>
                <button id="next">Next</button>
            </div>
        `;
        document.getElementById('prev').addEventListener('click', () => updateState({ step: 1 }));
        document.getElementById('next').addEventListener('click', () => {
            const email = document.getElementById('email').value;
            updateState({ step: 3, data: { ...state.data, email } });
        });
    } else {
        root.innerHTML = `
            <div>
                <label>Age: <input id="age" value="${state.data.age}"></label>
                <button id="prev">Prev</button>
                <button id="submit">Submit</button>
            </div>
            <div class="summary">Summary: ${JSON.stringify(state.data)}</div>
        `;
        document.getElementById('prev').addEventListener('click', () => updateState({ step: 2 }));
        document.getElementById('submit').addEventListener('click', () => {
            const age = document.getElementById('age').value;
            updateState({ data: { ...state.data, age } });
            alert('Form submitted: ' + JSON.stringify({ ...state.data, age }));
        });
    }
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
