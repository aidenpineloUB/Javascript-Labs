// Exercise 2: Color Selector
// Goal: Use event delegation to change the display box color when clicking color cards

const colorContainer = document.getElementById('color-container');
const displayBox = document.getElementById('display-box');

// TODO: Add ONE event listener to the color container
colorContainer.addEventListener('click', function(e) {
    // Get the closest color card element
    const colorCard = e.target.closest('.color-card');
    if (colorCard) {
        // HINT: When a color card is clicked, get its data-color attribute
        const color = colorCard.getAttribute('data-color');
        // HINT: Set displayBox.style.backgroundColor to the color
        displayBox.style.backgroundColor = color;
    }
});

// Your code here:
