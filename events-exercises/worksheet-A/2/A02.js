// TODO: Select the button with id 'btn2'.

const btn2 = document.getElementById('btn2')


// TODO: Attach a 'click' event listener to the button.

btn2.addEventListener('click', (event) => {

    // TODO: Inside the handler, log the clicked element's text. (Hint: event.target.textContent)

    console.log(event.target.innerText)
})

