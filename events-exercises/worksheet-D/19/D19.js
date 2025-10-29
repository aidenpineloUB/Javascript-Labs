// TODO: Select the 'swap' button and the 'photo' image.
const swapBtn = document.getElementById('swap');
const photoImg = document.getElementById('photo');



// TODO: Attach a 'click' listener to the button.
swapBtn.addEventListener('click', function() {
    // TODO: Inside the handler, change the image src to a new URL.
    photoImg.src = 'https://via.placeholder.com/150';
});
