// Exercise 4: Shopping Cart
// Follow the TODOs below to complete this exercise

// TODO 1: Create a state object with 'items' array
// HINT: Start with an empty array
const state = {
    items: []
};

// TODO 2: Create an updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create a render function
// HINT: You need to:
// - Check if cart is empty and show a message
// - Map through items and create HTML for each
// - Calculate total using reduce()
// - Display total with 2 decimal places
function render() {
    const display = document.getElementById('display');
    if (!display) return;
    const total = state.items.reduce((sum, it) => sum + (it.price || 0), 0);
    if (state.items.length === 0) {
        display.innerHTML = `<div class="empty">Cart is empty</div>`;
        return;
    }
    const itemsHtml = state.items.map(it => `<div class="cart-item">${it.name} - $${it.price.toFixed(2)} <button class="remove-btn" data-id="${it.id}">Remove</button></div>`).join('');
    display.innerHTML = `<div class="items">${itemsHtml}</div><div class="total">Total: $${total.toFixed(2)}</div>`;
}

// TODO 4: Add event listeners to product buttons
// HINT: Loop through all .product-btn elements
// For each button, get data-name and data-price attributes
// Create item object with: { id: Date.now(), name, price: parseFloat(price) }
// Add to cart: updateState({ items: [...state.items, newItem] })
// Your code here
document.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        const price = parseFloat(btn.getAttribute('data-price')) || 0;
        const newItem = { id: Date.now() + Math.random(), name, price };
        updateState({ items: [...state.items, newItem] });
    });
});

// TODO 5: Add event listener for remove buttons (event delegation)
// HINT: Add listener to #display, check if clicked element has 'remove-btn' class
// Get the item id from data-id attribute
// Remove item: updateState({ items: state.items.filter(item => item.id !== id) })
// Your code here
const displayRoot = document.getElementById('display');
if (displayRoot) {
    displayRoot.addEventListener('click', (e) => {
        const tgt = e.target;
        if (tgt && tgt.classList && tgt.classList.contains('remove-btn')) {
            const id = tgt.getAttribute('data-id');
            updateState({ items: state.items.filter(item => String(item.id) !== String(id)) });
        }
    });
}

// TODO 6: Call render() initially
// Your code here
render();
