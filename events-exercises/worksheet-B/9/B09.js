// TODO: Select the element with id 'hoverBox'.
const hoverBox = document.getElementById('hoverBox');

// TODO: Attach a 'mouseenter' listener to set a highlight background color.
hoverBox.addEventListener('mouseenter', function() {
    hoverBox.style.backgroundColor = 'yellow';
});

// TODO: Attach a 'mouseleave' listener to remove the highlight background color.
hoverBox.addEventListener('mouseleave', function() {
    hoverBox.style.backgroundColor = '';
});



