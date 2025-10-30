// Exercise 15: Modal System
const body = document.body;

body.addEventListener('click', (e) => {
    // Part 1: Open modals
    if (e.target.classList.contains('open-modal-btn')) {
        const modalId = e.target.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    }
    
    // Part 2: Close modals
    if (e.target.classList.contains('close-modal-btn')) {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }
    
    // Part 3: Close on backdrop
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});