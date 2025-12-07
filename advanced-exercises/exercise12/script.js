// Exercise 12: Star Rating
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    rating: 0
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const root = document.getElementById('app');
    if (!root) return;
    const stars = [1,2,3,4,5].map(i => `<span class="star" data-value="${i}">${i <= state.rating ? '★' : '☆'}</span>`).join('');
    root.innerHTML = `<div class="stars">${stars}</div><div class="current">Rating: ${state.rating}</div>`;
    document.querySelectorAll('.star').forEach(s => {
        s.addEventListener('click', () => updateState({ rating: parseInt(s.getAttribute('data-value'), 10) }));
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
