// Exercise 3: Temperature Converter
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with 'celsius' property
// HINT: Start with 0 as the default value
const state = {
    celsius: 0
};

// TODO 2: Create an updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: 
// - Calculate fahrenheit from celsius: (celsius * 9/5) + 32
// - Display both temperatures with 1 decimal place using .toFixed(1)
// - Update the input value to match state.celsius
function render() {
    const fahrenheit = (state.celsius * 9/5) + 32;
    const display = document.getElementById('display');
    if (display) display.innerHTML = `<div>Celsius: ${state.celsius.toFixed(1)}°C</div><div>Fahrenheit: ${fahrenheit.toFixed(1)}°F</div>`;
    const input = document.getElementById('celsiusInput');
    if (input) input.value = state.celsius;
}

// TODO 4: Add event listener to the input field
// HINT: 
// - Use 'input' event for real-time updates
// - Get the value with: parseFloat(input.value) || 0
// - Call updateState with the new celsius value
// Your code here
const cInput = document.getElementById('celsiusInput');
if (cInput) cInput.addEventListener('input', () => {
    const val = parseFloat(cInput.value);
    updateState({ celsius: isNaN(val) ? 0 : val });
});

// TODO 5: Call render() initially
// Your code here
render();
