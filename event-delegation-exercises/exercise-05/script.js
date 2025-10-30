// Exercise 5: Add Items Dynamically
// Goal: Add new items AND delete them using event delegation

const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');

// TODO Part 1: Add event listener to the "Add Item" button
addBtn.addEventListener('click', function() {
    // HINT: Get the input value, create a new <li> element with class "item"
    const itemName = itemInput.value.trim();
    if (itemName) {
        const newItem = document.createElement('li');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <span>${itemName}</span>
            <button class="delete-btn">×</button>
        `;
        // HINT: Append the new item to itemList
        itemList.appendChild(newItem);
        // HINT: Clear the input after adding
        itemInput.value = '';
    }
});
//       </li>
// HINT: Append the new item to itemList
// HINT: Clear the input after adding

// Your code here for Part 1:


// TODO Part 2: Add ONE event listener to itemList for deleting items
itemList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const itemToDelete = event.target.parentElement;
        itemList.removeChild(itemToDelete);
    }
});
// HINT: This should work for both existing items AND newly added items
// HINT: Check if clicked element has class 'delete-btn'
// HINT: Remove the parent item element

// Your code here for Part 2:
