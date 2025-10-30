// Exercise 12: Star Rating
// Goal: Create interactive star rating with hover preview
const container = document.querySelector('.container');

// Part 1: Handle star hover (mouseover)
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('star')) {
        const starValue = parseInt(e.target.dataset.value);
        const starsContainer = e.target.closest('.stars');
        const allStars = starsContainer.querySelectorAll('.star');
        
        allStars.forEach(star => {
            if (parseInt(star.dataset.value) <= starValue) {
                star.classList.add('hover');
            } else {
                star.classList.remove('hover');
            }
        });
    }
});

// Part 2: Handle mouse leaving stars (mouseout)
container.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('star')) {
        const starsContainer = e.target.closest('.stars');
        const allStars = starsContainer.querySelectorAll('.star');
        
        allStars.forEach(star => {
            star.classList.remove('hover');
        });
    }
});


// Part 3: Handle star click to set rating
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
        const starValue = parseInt(e.target.dataset.value);
        const starsContainer = e.target.closest('.stars');
        const allStars = starsContainer.querySelectorAll('.star');
        const ratingDisplay = starsContainer.parentElement.querySelector('.rating-value');
        
        // Remove active from all stars
        allStars.forEach(star => {
            star.classList.remove('active');
        });
        
        // Add active to clicked star and all stars before it
        allStars.forEach(star => {
            if (parseInt(star.dataset.value) <= starValue) {
                star.classList.add('active');
            }
        });
        
        // Update display
        ratingDisplay.textContent = starValue;
    }
});
