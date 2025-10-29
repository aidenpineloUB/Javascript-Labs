// TODO: Select the 'addItem' button and the 'items' <ul>.
const addItemBtn = document.getElementById('addItem');
const itemsList = document.getElementById('items'); 

// TODO: Maintain a running item number (N).
let itemCounter = 1;

// TODO: On 'addItem' click, create an <li> labeled 'Item N' and append it to the list.
addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCounter}`;
    itemsList.appendChild(newItem);
    itemCounter++;
});

// TODO: Attach a 'click' listener to the new <li> that (when implemented) would log its label.
newItem.addEventListener('click', function() {
    console.log(newItem.textContent);
});
