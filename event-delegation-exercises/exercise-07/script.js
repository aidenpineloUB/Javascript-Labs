// Exercise 7: Form Validation
// Goal: Validate form inputs using event delegation on the form

const form = document.getElementById('user-form');
const submitBtn = document.getElementById('submit-btn');

// TODO: Add ONE 'input' event listener to the form
form.addEventListener('input', (e) => {
    if (e.target.classList.contains('form-input')) {
        const input = e.target;
        const value = input.value;
        const name = input.name;
        const errorMessageSpan = input.nextElementSibling; // Assuming the error message span is next to the input
        let isValid = false;
        let errorMessage = '';

        // Validate based on the input name
        if (name === 'username') {
            if (value.length >= 5) {
                isValid = true;
            } else {
                errorMessage = 'Username must be at least 5 characters.';
            }
        } else if (name === 'email') {
            if (value.includes('@')) {
                isValid = true;
            } else {
                errorMessage = 'Email must contain "@" symbol.';
            }
        } else if (name === 'password') {
            if (value.length >= 8) {
                isValid = true;
            } else {
                errorMessage = 'Password must be at least 8 characters.';
            }
        }

        // Update input classes and error message
        if (isValid) {
            input.classList.add('valid');
            input.classList.remove('invalid');
            errorMessageSpan.textContent = '';
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorMessageSpan.textContent = errorMessage;
        }

        // Check if all inputs are valid to enable submit button
        const allInputs = form.querySelectorAll('.form-input');
        const allValid = Array.from(allInputs).every(inp => inp.classList.contains('valid'));
        submitBtn.disabled = !allValid;
    }
});
// HINT: Check if e.target has class 'form-input'
// HINT: Get the input's value and name
// HINT: Validate based on the input name:
//       - username: must be at least 5 characters
//       - email: must contain '@'
//       - password: must be at least 8 characters
// HINT: If valid: add 'valid' class, remove 'invalid', clear error message
// HINT: If invalid: add 'invalid' class, remove 'valid', show error in error-message span
// HINT: Enable submit button only when all inputs are valid

// Your code here:


// TODO: Add submit event listener to prevent default form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});
