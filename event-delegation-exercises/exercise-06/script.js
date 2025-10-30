// Exercise 6: Multiple Button Types
// Goal: Handle different button types with ONE event listener and track counts
const cardContainer = document.getElementById('card-container');
const likeCountDisplay = document.getElementById('like-count');
const editCountDisplay = document.getElementById('edit-count');
const deleteCountDisplay = document.getElementById('delete-count');
let likeCount = 0;
let editCount = 0;
let deleteCount = 0;

// Add ONE event listener to cardContainer
cardContainer.addEventListener('click', function(e) {
    const card = e.target.closest('.card');
    if (!card) return; // Click was outside a card
    
    if (e.target.classList.contains('like-btn')) {
        // Like button clicked
        likeCount++;
        likeCountDisplay.textContent = likeCount;
        card.classList.toggle('liked');
    } else if (e.target.classList.contains('edit-btn')) {
        // Edit button clicked
        editCount++;
        editCountDisplay.textContent = editCount;
        const cardTitle = card.querySelector('h3').textContent;
        alert(`Editing card: ${cardTitle}`); // Fixed: use parentheses, not backticks
    } else if (e.target.classList.contains('delete-btn')) {
        // Delete button clicked
        deleteCount++;
        deleteCountDisplay.textContent = deleteCount;
        card.remove();
    }
});