// Exercise 5: User Profile Form
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with form fields and validation state
// HINT: Include username, email, age (all empty strings), errors (empty object), isValid (false)
const state = {
    username: '',
    email: '',
    age: '',
    errors: {},
    isValid: false
};

// TODO 2: Create an updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a validate function that returns an errors object
// HINT: Check each field and add error messages to errors object if invalid
// Return the errors object
function validate() {
    const errors = {};
    
    // Validate username (at least 3 characters)
    if (!state.username || state.username.trim().length < 3) {
        errors.username = 'Username must be at least 3 characters.';
    }
    
    // Validate email (must contain @)
    if (!state.email || !state.email.includes('@')) {
        errors.email = 'Email must be valid and contain @.';
    }
    
    // Validate age (between 13 and 120)
    const ageNum = parseInt(state.age, 10);
    if (!state.age || isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
        errors.age = 'Age must be a number between 13 and 120.';
    }
    
    return errors;
}

// TODO 4: Create a render function
// HINT: 
// - Update each input's value from state
// - Display errors for each field
// - Add 'invalid' or 'valid' class to inputs
// - Show success message if isValid is true
// - Show profile summary if valid
function render() {
    // Update input values
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const ageInput = document.getElementById('ageInput');
    if (usernameInput) usernameInput.value = state.username;
    if (emailInput) emailInput.value = state.email;
    if (ageInput) ageInput.value = state.age;
    
    // Display errors
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const ageError = document.getElementById('ageError');
    if (usernameError) usernameError.textContent = state.errors.username || '';
    if (emailError) emailError.textContent = state.errors.email || '';
    if (ageError) ageError.textContent = state.errors.age || '';
    
    // Update input classes (invalid/valid)
    if (usernameInput) usernameInput.className = state.errors.username ? 'invalid' : 'valid';
    if (emailInput) emailInput.className = state.errors.email ? 'invalid' : 'valid';
    if (ageInput) ageInput.className = state.errors.age ? 'invalid' : 'valid';
    
    // Display validation status
    const display = document.getElementById('display');
    if (display) {
        if (state.isValid) {
            display.innerHTML = `<div class="success">Profile is valid ✅</div><div class="summary">Username: ${state.username} — Email: ${state.email} — Age: ${state.age}</div>`;
        } else {
            display.innerHTML = `<div class="failure">Please fix the errors above.</div>`;
        }
    }
}

// TODO 5: Add event listeners to all input fields
// HINT: For each input change:
// - Get the new value
// - Run validation
// - Check if valid (no errors)
// - Update state with new value, errors, and isValid

// Username input
const usernameInput = document.getElementById('usernameInput');
if (usernameInput) usernameInput.addEventListener('input', () => {
    updateState({ username: usernameInput.value, errors: validate(), isValid: Object.keys(validate()).length === 0 });
});

// Email input
const emailInput = document.getElementById('emailInput');
if (emailInput) emailInput.addEventListener('input', () => {
    updateState({ email: emailInput.value, errors: validate(), isValid: Object.keys(validate()).length === 0 });
});

// Age input
const ageInput = document.getElementById('ageInput');
if (ageInput) ageInput.addEventListener('input', () => {
    updateState({ age: ageInput.value, errors: validate(), isValid: Object.keys(validate()).length === 0 });
});

// TODO 6: Call render() initially
render();
