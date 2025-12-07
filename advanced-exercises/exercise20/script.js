// Exercise 20: Quiz App
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    questions: [
        { q: '2+2?', options: ['3','4','5'], a: 1 },
        { q: 'Capital of France?', options: ['Paris','Rome','Berlin'], a: 0 }
    ],
    index: 0,
    score: 0
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
    if (state.index >= state.questions.length) {
        root.innerHTML = `<div>Quiz complete! Score: ${state.score}/${state.questions.length}</div>`;
        return;
    }
    const cur = state.questions[state.index];
    root.innerHTML = `
        <div class="question">${cur.q}</div>
        <div class="options">${cur.options.map((opt,i) => `<button class="opt" data-i="${i}">${opt}</button>`).join('')}</div>
    `;
    document.querySelectorAll('.opt').forEach(btn => btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-i'),10);
        const correct = i === cur.a;
        updateState({ index: state.index + 1, score: state.score + (correct ? 1 : 0) });
    }));
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
