// TODO: Select the color input 'color' and the 'colorBox' div.
const colorInput = document.getElementById('color');
const colorBox = document.getElementById('colorBox');

// TODO: Attach an 'input' listener to the color input.
colorInput.addEventListener('input', function() {
    // TODO: Inside the handler, set colorBox's background to the selected value. (Leave body unimplemented.)
    colorBox.style.backgroundColor = colorInput.value;
});
