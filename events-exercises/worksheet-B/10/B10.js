// TODO: Select the form with id 'userForm'.
const userForm = document.getElementById('userForm');

// TODO: Attach a 'submit' listener to the form.
userForm.addEventListener('submit', function(event) {
    // TODO: Inside the handler, prevent default form submission. (Hint: event.preventDefault())
    event.preventDefault();

});

// TODO: Read values via event.target.elements and log them.
const formData = new FormData(event.target);
for (const [name, value] of formData) {
    console.log(`${name}: ${value}`);
}
