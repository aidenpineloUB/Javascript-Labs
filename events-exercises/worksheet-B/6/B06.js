// TODO: Select the button with id 'btnA'.

const btnA = document.getElementById('btnA');

// TODO: Attach the first 'click' listener that logs a distinct message (e.g., 'first').

btnA.addEventListener('click' , () => {
    console.log('first');
})

// TODO: Attach the second 'click' listener that logs a different message (e.g., 'second').

btnA.addEventListener('click' , () => {
    console.log('second');
})