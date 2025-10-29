// TODO: Select all buttons with the class 'multi'.

const buttons = document.querySelectorAll('.multi');

// TODO: Define a handler function that logs the clicked button's text.

let handleClick = (event => {
    console.log(event.target.innerText)
})


// TODO: Attach the same 'click' handler to each of the selected buttons.

buttons.forEach(event => {
    event.addEventListener('click', handleClick)

})