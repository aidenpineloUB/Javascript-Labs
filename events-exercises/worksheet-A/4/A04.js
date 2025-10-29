

    const mouseBox = document.getElementById('mouseBox');

    const coords = document.getElementById('coords');

//we wat the user to interact with the mouse box, so we add the eventListener to that

mouseBox.addEventListener('mousemove', event => {
    let x = event.clientX;
    let y = event.clientY;

    coords.innerText = `x = ${x}, y = ${y}`;

});
