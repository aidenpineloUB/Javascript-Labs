// Exercise 1: Color Picker
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with a 'color' property
// HINT: Start with a default color like 'lightblue'
const state = {
    color: 'lightblue'
};

// TODO 2: Create an updateState function
// HINT: It should take an object with changes, merge them into state, and call render()
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: 
// - Update the #display element to show the current color name
// - Change the body background color to match state.color
function render() {
    const display = document.getElementById('display');
    if (display) display.textContent = `Current color: ${state.color}`;
    document.body.style.backgroundColor = state.color;
}

// TODO 4: Add event listeners for all color buttons
// HINT: Get each button by ID and add a click listener that calls updateState()

// Red button
const redBtn = document.getElementById('redBtn');
if (redBtn) redBtn.addEventListener('click', () => updateState({ color: 'lightcoral' }));

// Green button
const greenBtn = document.getElementById('greenBtn');
if (greenBtn) greenBtn.addEventListener('click', () => updateState({ color: 'lightgreen' }));

// Blue button
const blueBtn = document.getElementById('blueBtn');
if (blueBtn) blueBtn.addEventListener('click', () => updateState({ color: 'lightblue' }));

// Yellow button
const yellowBtn = document.getElementById('yellowBtn');
if (yellowBtn) yellowBtn.addEventListener('click', () => updateState({ color: 'lightyellow' }));

// TODO 5: Call render() once to display the initial state
render();
