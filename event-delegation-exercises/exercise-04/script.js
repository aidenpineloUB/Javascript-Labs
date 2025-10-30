// Exercise 4: Toggle Active State
// Goal: Toggle the 'active' class on cards when clicked

const cardContainer = document.getElementById('card-container');

// TODO: Add ONE event listener to the card container
cardContainer.addEventListener('click', function(e) {
    // HINT: Use e.target.closest('.card') to get the clicked card
    const card = e.target.closest('.card');
    if (card) {
        // HINT: Use classList.toggle('active') to add/remove the active class
        card.classList.toggle('active');
    }
});

// HINT: Toggle means: if class exists, remove it; if it doesn't exist, add it

// Your code here:
