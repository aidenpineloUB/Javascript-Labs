// Exercise 13: Accordion Menu
// Goal: Toggle sections open/close, only one open at a time
const accordion = document.getElementById('accordion');

accordion.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header');
    
    if (header) {
        const clickedItem = header.closest('.accordion-item');
        const wasActive = clickedItem.classList.contains('active');
        
        // Remove active from all items
        const allItems = accordion.querySelectorAll('.accordion-item');
        allItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // If the clicked item wasn't already active, make it active
        if (!wasActive) {
            clickedItem.classList.add('active');
        }
    }
});