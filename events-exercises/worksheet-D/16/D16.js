// TODO: Select the 'toggle' button and the paragraph 'targetPara'.
const toggleBtn = document.getElementById('toggle');
const targetPara = document.getElementById('targetPara');

// TODO: Attach a 'click' listener to toggle a CSS class on the paragraph. (Hint: classList.toggle)
toggleBtn.addEventListener('click', function() {
    targetPara.classList.toggle('active');
});
