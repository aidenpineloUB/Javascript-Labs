// Exercise 19: Color Matching Prototype
const gameBoard = document.getElementById('game-board');
const matchesDisplay = document.getElementById('matches');
const attemptsDisplay = document.getElementById('attempts');
const resetBtn19 = document.getElementById('reset-btn');
let flippedCards = [];
let matches = 0;
let attempts = 0;
let canClick = true;

gameBoard.addEventListener('click', (e) => {
    if (e.target.classList.contains('game-card')) {
        // Check if card is already revealed or matched
        if (e.target.classList.contains('revealed') || 
            e.target.classList.contains('matched')) {
            return;
        }
        
        // Check if can click
        if (!canClick) return;
        
        // Reveal card
        e.target.classList.add('revealed');
        flippedCards.push(e.target);
        
        // Check if 2 cards are flipped
        if (flippedCards.length === 2) {
            canClick = false;
            attempts++;
            attemptsDisplay.textContent = attempts;
            
            const card1 = flippedCards[0];
            const card2 = flippedCards[1];
            const color1 = card1.dataset.color;
            const color2 = card2.dataset.color;
            
            if (color1 === color2) {
                // Match!
                card1.classList.add('matched');
                card2.classList.add('matched');
                matches++;
                matchesDisplay.textContent = matches;
                flippedCards = [];
                canClick = true;
            } else {
                // No match - hide after 1 second
                setTimeout(() => {
                    card1.classList.remove('revealed');
                    card2.classList.remove('revealed');
                    flippedCards = [];
                    canClick = true;
                }, 1000);
            }
        }
    }
});

resetBtn19.addEventListener('click', () => {
    document.querySelectorAll('.game-card').forEach(card => {
        card.classList.remove('revealed', 'matched');
    });
    matches = 0;
    attempts = 0;
    flippedCards = [];
    matchesDisplay.textContent = matches;
    attemptsDisplay.textContent = attempts;
});