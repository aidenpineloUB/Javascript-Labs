// Exercise 21: Calendar
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    date: new Date()
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const root = document.getElementById('app');
    if (!root) return;
    const d = new Date(state.date.getFullYear(), state.date.getMonth(), 1);
    const month = d.toLocaleString(undefined, { month: 'long' });
    const year = d.getFullYear();
    const days = [];
    const startDay = d.getDay();
    const daysInMonth = new Date(year, d.getMonth()+1, 0).getDate();
    for (let i=0;i<startDay;i++) days.push('');
    for (let i=1;i<=daysInMonth;i++) days.push(i);
    root.innerHTML = `
        <div class="calendar-header">
            <button id="prev">Prev</button>
            <span>${month} ${year}</span>
            <button id="next">Next</button>
        </div>
        <div class="calendar-grid">${days.map(d => `<div class="day">${d}</div>`).join('')}</div>
    `;
    document.getElementById('prev').addEventListener('click', () => {
        const nd = new Date(state.date.getFullYear(), state.date.getMonth()-1, 1);
        updateState({ date: nd });
    });
    document.getElementById('next').addEventListener('click', () => {
        const nd = new Date(state.date.getFullYear(), state.date.getMonth()+1, 1);
        updateState({ date: nd });
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
