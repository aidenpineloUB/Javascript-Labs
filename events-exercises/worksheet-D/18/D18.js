// TODO: Select the buttons 'plus' and 'minus', and the span 'value'.
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const valueSpan = document.getElementById('value');

// TODO: Initialize a number variable to track the counter.
let counter = 0;

// TODO: Attach a 'click' listener to 'plus' that (when implemented) would increment and update the span.
plusBtn.addEventListener('click', function() {
    counter++;
    valueSpan.textContent = counter;
});

// TODO: Attach a 'click' listener to 'minus' that (when implemented) would decrement and update the span.
minusBtn.addEventListener('click', function() {
    counter--;
    valueSpan.textContent = counter;
});
