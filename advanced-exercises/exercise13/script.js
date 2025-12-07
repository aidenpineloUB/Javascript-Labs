// Exercise 13: Timer/Stopwatch
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    running: false,
    time: 0,
    _interval: null
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
    const minutes = Math.floor(state.time / 60).toString().padStart(2,'0');
    const seconds = Math.floor(state.time % 60).toString().padStart(2,'0');
    root.innerHTML = `
        <div class="time-display">${minutes}:${seconds}</div>
        <div class="controls">
            <button id="start">Start</button>
            <button id="stop">Stop</button>
            <button id="reset">Reset</button>
        </div>
    `;
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    if (start) start.addEventListener('click', () => {
        if (state.running) return;
        const iv = setInterval(() => updateState({ time: state.time + 1 }), 1000);
        updateState({ running: true, _interval: iv });
    });
    if (stop) stop.addEventListener('click', () => {
        if (state._interval) clearInterval(state._interval);
        updateState({ running: false, _interval: null });
    });
    if (reset) reset.addEventListener('click', () => {
        if (state._interval) clearInterval(state._interval);
        updateState({ running: false, time: 0, _interval: null });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
