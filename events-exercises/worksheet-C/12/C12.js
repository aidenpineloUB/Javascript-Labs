// TODO: Select 'makeBtn' and the container 'btnArea'.
const makeBtn = document.getElementById('makeBtn');
const btnArea = document.getElementById('btnArea');

// TODO: Maintain a counter to number each new button (e.g., X = 1, 2, 3...).
let buttonCounter = 1;

// TODO: On 'makeBtn' click, create a <button>, set its text to 'New X', and append it to #btnArea.
makeBtn.addEventListener('click', function() {
    const newButton = document.createElement('button');
    newButton.textContent = `New ${buttonCounter}`;
    btnArea.appendChild(newButton);
    buttonCounter++;
});

// TODO: Attach a 'click' listener to the new button that (when implemented) would log its own text.
newButton.addEventListener('click', function() {
    console.log(newButton.textContent);
});
