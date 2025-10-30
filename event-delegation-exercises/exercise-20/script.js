// Exercise 20: Memory Card Game - FINAL CHALLENGE!
const gameBoard20 = document.getElementById('game-board');
const timerDisplay = document.getElementById('timer');
const movesDisplay = document.getElementById('moves');
const pairsDisplay = document.getElementById('pairs');
const newGameBtn = document.getElementById('new-game-btn');
const winMessage = document.getElementById('win-message');
let flippedCards20 = [];
let matchedPairs = 0;
let moves = 0;
let timer = 0;
let timerInterval = null;
let canClick20 = true;
let gameStarted = false;

// Part 3: Timer functions
function startTimer() {
    if (!gameStarted) {
        gameStarted = true;
        timerInterval = setInterval(() => {
            timer++;
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            timerDisplay.textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Part 1: Handle card clicks
gameBoard20.addEventListener('click', (e) => {
    const card = e.target.closest('.memory-card');
    
    if (card) {
        // Start timer on first click
        if (!gameStarted) {
            startTimer();
        }
        
        // Don't allow clicking if canClick is false
        if (!canClick20) return;
        
        // Don't allow clicking already flipped or matched cards
        if (card.classList.contains('flipped') || 
            card.classList.contains('matched')) {
            return;
        }
        
        // Flip card
        card.classList.add('flipped');
        flippedCards20.push(card);
        
        // Part 2: Check for match when 2 cards are flipped
        if (flippedCards20.length === 2) {
            canClick20 = false;
            moves++;
            movesDisplay.textContent = moves;
            
            const card1 = flippedCards20[0];
            const card2 = flippedCards20[1];
            const symbol1 = card1.dataset.symbol;
            const symbol2 = card2.dataset.symbol;
            
            if (symbol1 === symbol2) {
                // Match!
                card1.classList.add('matched');
                card2.classList.add('matched');
                matchedPairs++;
                pairsDisplay.textContent = matchedPairs;
                flippedCards20 = [];
                canClick20 = true;
                
                // Check if game is won
                const totalPairs = gameBoard20.querySelectorAll('.memory-card').length / 2;
                if (matchedPairs === totalPairs) {
                    stopTimer();
                    setTimeout(() => {
                        winMessage.style.display = 'block';
                        winMessage.textContent = 
                            `🎉 You won! Time: ${timerDisplay.textContent}, Moves: ${moves}`;
                    }, 500);
                }
            } else {
                // No match
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    flippedCards20 = [];
                    canClick20 = true;
                }, 1000);
            }
        }
    }
});

// Part 4: Handle new game
newGameBtn.addEventListener('click', () => {
    // Reset all variables
    flippedCards20 = [];
    matchedPairs = 0;
    moves = 0;
    timer = 0;
    canClick20 = true;
    gameStarted = false;
    
    // Stop and reset timer
    stopTimer();
    timerDisplay.textContent = '00:00';
    
    // Reset displays
    movesDisplay.textContent = '0';
    pairsDisplay.textContent = '0';
    winMessage.style.display = 'none';
    
    // Remove classes from all cards
    const allCards = gameBoard20.querySelectorAll('.memory-card');
    allCards.forEach(card => {
        card.classList.remove('flipped', 'matched');
    });
    
    // Shuffle cards
    const cardsArray = Array.from(allCards);
    for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        gameBoard20.appendChild(cardsArray[j]);
    }
});