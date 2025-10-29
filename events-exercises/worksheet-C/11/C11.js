// TODO: Select the buttons with ids 'toggleBtn' and 'fireBtn'.
const toggleBtn = document.getElementById('toggleBtn');
const fireBtn = document.getElementById('fireBtn');

// TODO: Create a function intended to log 'Fired!'.
function logFired() {
    console.log('Fired!');
}

// TODO: Track whether the 'Fire' button has a listener attached. (Hint: a boolean flag variable)
let isFireBtnActive = false;

// TODO: On 'toggleBtn' click, add or remove the 'click' listener on 'fireBtn' based on the flag.
toggleBtn.addEventListener('click', function() {
    if (isFireBtnActive) {
        fireBtn.removeEventListener('click', logFired);
    } else {
        fireBtn.addEventListener('click', logFired);
    }
    isFireBtnActive = !isFireBtnActive;
});
