// Exercise 16: Click Tracker
const boxContainer = document.getElementById('box-container');
const totalDisplay = document.getElementById('total');
let totalClicks = 0;

boxContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('box')) {
        // Increment total clicks
        totalClicks++;
        totalDisplay.textContent = totalClicks;
        
        // Update individual box count
        const countSpan = e.target.querySelector('.count');
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
    }
});