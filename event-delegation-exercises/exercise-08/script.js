// Exercise 8: Tab Navigation
// Goal: Switch between tabs using event delegation

const tabButtons = document.getElementById('tab-buttons');

// TODO: Add ONE event listener to tab-buttons container
tabButtons.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        const clickedTab = e.target;
        const tabId = clickedTab.getAttribute('data-tab');

        // Remove 'active' class from all tab buttons
        const allTabButtons = tabButtons.querySelectorAll('.tab-btn');
        allTabButtons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        clickedTab.classList.add('active');

        // Remove 'active' class from all tab panes
        const allTabPanes = document.querySelectorAll('.tab-pane');
        allTabPanes.forEach(pane => pane.classList.remove('active'));

        // Add 'active' class to the matching tab pane
        const activePane = document.querySelector(`.tab-pane[data-tab="${tabId}"]`);
        if (activePane) {
            activePane.classList.add('active');
        }
    }
});
// HINT: Check if clicked element has class 'tab-btn'
// HINT: Get the data-tab attribute from the clicked button
// HINT: Remove 'active' class from all tab buttons and tab panes
// HINT: Add 'active' class to the clicked button
// HINT: Add 'active' class to the matching tab pane with the same data-tab value

// Your code here:
