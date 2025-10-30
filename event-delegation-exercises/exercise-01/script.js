// Exercise 1: Click Counter
// Goal: Use event delegation to count clicks on any button

// Get references to DOM elements
const buttonContainer = document.getElementById('button-container');
const clickCountDisplay = document.getElementById('click-count');

// Initialize counter variable
let clickCount = 0;



// Your code here:

// TODO: Add ONE event listener to the button container (not individual buttons!)
buttonContainer.addEventListener('click', function(event) {
    // HINT: Use event delegation - listen on the parent element
    // HINT: Check if the clicked element is a button before counting
    if (event.target.tagName === 'BUTTON') {
        clickCount++;
        // HINT: Update the clickCountDisplay.textContent with the new count
        clickCountDisplay.textContent = clickCount;
    }
});