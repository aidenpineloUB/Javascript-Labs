// TODO: Select the text input 'titleInput' and the heading 'titlePreview'.
const titleInput = document.getElementById('titleInput');
const titlePreview = document.getElementById('titlePreview');

// TODO: Attach an 'input' listener to the text field.
titleInput.addEventListener('input', function() {
    // TODO: Inside the handler, set the preview's text to the input's value (fallback message if empty).
    titlePreview.textContent = titleInput.value || 'Enter a title';
});
