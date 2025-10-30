// Exercise 14: Sortable Table
const thead = document.querySelector('thead');
const tbody = document.getElementById('table-body');

thead.addEventListener('click', (e) => {
    if (e.target.classList.contains('sortable')) {
        const column = parseInt(e.target.dataset.column);
        
        // Get all rows as array
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        // Sort rows based on column
        rows.sort((a, b) => {
            const aValue = a.children[column].textContent.trim();
            const bValue = b.children[column].textContent.trim();
            
            // Check if values are numbers
            const aNum = parseFloat(aValue);
            const bNum = parseFloat(bValue);
            
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return aNum - bNum;
            } else {
                return aValue.localeCompare(bValue);
            }
        });
        
        // Clear tbody and append sorted rows
        tbody.innerHTML = '';
        rows.forEach(row => tbody.appendChild(row));
    }
});