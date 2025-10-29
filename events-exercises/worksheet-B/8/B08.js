// TODO: Select the input with id 'name' and the span with id 'len'.
const nameInput = document.getElementById('name');




// TODO: Attach an 'input' listener to the input.
const lenSpan = document.getElementById('len');
nameInput.addEventListener('input', function(event) {
    lenSpan.textContent = event.target.value.length;
});




// TODO: Inside the handler, set the span text to the current input length. (Hint: event.target.value.length)
lenSpan.textContent = target.value.length;

