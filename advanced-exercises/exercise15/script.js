// Exercise 15: Image Gallery
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    images: [
        'https://via.placeholder.com/400x200?text=1',
        'https://via.placeholder.com/400x200?text=2',
        'https://via.placeholder.com/400x200?text=3'
    ],
    current: 0
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
    const main = `<div class="main-image"><img src="${state.images[state.current]}" alt="current"></div>`;
    const thumbs = state.images.map((src, i) => `<img class="thumb ${i===state.current? 'active':''}" data-index="${i}" src="${src}" alt="thumb">`).join('');
    root.innerHTML = `${main}<div class="thumbs">${thumbs}</div>`;
    document.querySelectorAll('.thumb').forEach(t => t.addEventListener('click', () => {
        const idx = parseInt(t.getAttribute('data-index'), 10);
        updateState({ current: idx });
    }));
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
