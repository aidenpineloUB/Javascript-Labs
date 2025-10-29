// TODO: Select the button with id 'btn3'.

const btn3 = document.querySelector('#btn3');

// TODO: Attach a 'dblclick' event listener to the button.

btn3.addEventListener('dblclick', (event) => {

    // TODO: Inside the handler, change the button's text.
    event.target.innerText = "Nice Double Click";
});


