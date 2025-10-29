// TODO: Select the 'onceBtn' button.
const onceBtn = document.getElementById('onceBtn');

// TODO: Attach a 'click' listener configured to run only once. (Hint: use the option { once: true })
onceBtn.addEventListener('click', function() {
    console.log('Button clicked!');
}, { once: true });

// TODO: Alternatively, remove the listener inside its own handler.
onceBtn.addEventListener('click', function() {
    console.log('Button clicked!');
    onceBtn.removeEventListener('click', arguments.callee);
});
