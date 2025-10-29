// TODO: Select the input 'typeField', the span 'count', and the buttons 'start' and 'stop'.
const typeField = document.getElementById('typeField');
const countSpan = document.getElementById('count');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');


// TODO: Initialize a numeric counter variable.
let counter = 0;

// TODO: Write a named function (skeleton only) intended to increment the counter and update the span.
function updateCounter() {
    counter++;
    countSpan.textContent = counter;
}

// TODO: On 'start' click, add the 'keydown' listener to the input.
startBtn.addEventListener('click', function() {
    typeField.addEventListener('keydown', updateCounter);
});

// TODO: On 'stop' click, remove the 'keydown' listener from the input.
stopBtn.addEventListener('click', function() {
    typeField.removeEventListener('keydown', updateCounter);
});
