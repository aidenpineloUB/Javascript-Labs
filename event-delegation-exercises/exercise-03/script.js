// Exercise 3: Delete Items
// Goal: Use event delegation to delete list items when clicking the delete button

const itemList = document.getElementById('item-list');

// TODO: Add ONE event listener to the item list
itemList.addEventListener('click', function(e) {
    // Check if the clicked element is a delete button
    if (e.target.classList.contains('delete-btn')) {
        // Find the parent list item
        const listItem = e.target.closest('.item');
        // Remove the list item from the DOM
        if (listItem) {
            listItem.remove();
        }
    }
}
);
// HINT: Check if the clicked element has the class 'delete-btn'
// HINT: Use e.target.closest('.item') to get the parent list item
// HINT: Use .remove() to delete the item from the DOM

// Your code here:
