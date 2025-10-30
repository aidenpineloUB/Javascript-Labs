// Exercise 18: Kanban Board
const board = document.querySelector('.board');

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('move-btn')) {
        const direction = e.target.dataset.direction;
        const card = e.target.closest('.card');
        const currentColumn = card.closest('.column');
        const currentStatus = currentColumn.dataset.status;
        
        let targetStatus;
        
        // Determine target column
        if (direction === 'right') {
            if (currentStatus === 'todo') targetStatus = 'in-progress';
            else if (currentStatus === 'in-progress') targetStatus = 'done';
        } else if (direction === 'left') {
            if (currentStatus === 'done') targetStatus = 'in-progress';
            else if (currentStatus === 'in-progress') targetStatus = 'todo';
        }
        
        if (targetStatus) {
            // Find target column and append card
            const targetColumn = board.querySelector(`[data-status="${targetStatus}"]`);
            const targetCards = targetColumn.querySelector('.cards');
            targetCards.appendChild(card);
            
            // Update buttons based on new position
            const leftBtn = card.querySelector('[data-direction="left"]');
            const rightBtn = card.querySelector('[data-direction="right"]');
            
            if (targetStatus === 'todo') {
                leftBtn.style.display = 'none';
                rightBtn.style.display = 'inline-block';
            } else if (targetStatus === 'done') {
                leftBtn.style.display = 'inline-block';
                rightBtn.style.display = 'none';
            } else {
                leftBtn.style.display = 'inline-block';
                rightBtn.style.display = 'inline-block';
            }
        }
    }
});
