// TODO: Select the input with id 'keyInput' and the span with id 'lastKey'.

const keyInput = document.getElementById('keyInput');

const lastKey = document.getElementById('lastKey');

// TODO: Attach a 'keydown' event listener to the input.

keyInput.addEventListener('keydown', event => {
    let keyPressed = event.key;
// TODO: Inside the handler, set the span's text to the key pressed.

    lastKey.innerText = `${keyPressed}`;

});

