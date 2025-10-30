// Exercise 9: Shopping Cart
// Goal: Add items to cart, update quantities, calculate total

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');

let cart = []; // Array to store cart items: {name, price, quantity}

// TODO Part 1: Handle "Add to Cart" clicks using event delegation on productList
productList.addEventListener('click', (e) => {          
    if (e.target.classList.contains('add-to-cart')) {
        const productElement = e.target.closest('.product');
        const name = productElement.getAttribute('data-name');
        const price = parseFloat(productElement.getAttribute('data-price'));

        // Check if item already exists in cart
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity
        } else {
            cart.push({ name: name, price: price, quantity: 1 }); // Add new item
        }

        updateCartDisplay(); // Update cart display
    }
});

// TODO Part 2: Handle cart actions (increase, decrease, remove) using event delegation on cartItems
cartItems.addEventListener('click', (e) => {
    const itemName = e.target.getAttribute('data-name');
    if (!itemName) return;

    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex === -1) return;

    if (e.target.classList.contains('increase')) {
        cart[itemIndex].quantity += 1; // Increase quantity
    } else if (e.target.classList.contains('decrease')) {
        cart[itemIndex].quantity -= 1; // Decrease quantity
        if (cart[itemIndex].quantity === 0) {
            cart.splice(itemIndex, 1); // Remove item if quantity is 0
        }
    } else if (e.target.classList.contains('remove')) {
        cart.splice(itemIndex, 1); // Remove item
    }

    updateCartDisplay(); // Update cart display
});

// TODO Part 3: Create updateCartDisplay() function
function updateCartDisplay() {
    cartItems.innerHTML = ''; // Clear current cart items
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemHTML = `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>
                    <button class="decrease" data-name="${item.name}">-</button>
                    ${item.quantity}
                    <button class="increase" data-name="${item.name}">+</button>
                </span>
                <span>$${itemTotal.toFixed(2)}</span>
                <button class="remove" data-name="${item.name}">Remove</button>
            </div>
        `;
        cartItems.insertAdjacentHTML('beforeend', cartItemHTML);
    });

    totalPriceDisplay.textContent = `Total: $${total.toFixed(2)}`; // Update total price display
}
// HINT: Get product data using data-name and data-price attributes
// HINT: Check if item already exists in cart array
// HINT: If exists, increase quantity; if not, add new item with quantity 1
// HINT: Call updateCartDisplay() after modifying cart

// Your code here for Part 1:


// TODO Part 2: Handle cart actions (increase, decrease, remove) using event delegation on cartItems
// HINT: Use data-name attribute to identify which item was clicked
// HINT: For increase (+): find item in cart and increment quantity
// HINT: For decrease (-): find item and decrement quantity (remove if quantity becomes 0)
// HINT: For remove: filter out the item from cart array
// HINT: Call updateCartDisplay() after each action

// Your code here for Part 2:


// TODO Part 3: Create updateCartDisplay() function
// HINT: Clear cartItems innerHTML
// HINT: Loop through cart array and create HTML for each item
// HINT: Each cart item should have: name, quantity controls (+/-), remove button
// HINT: Calculate total by summing (price * quantity) for all items
// HINT: Update totalPriceDisplay

