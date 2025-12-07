// Exercise 8: Tabs Component
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    active: 'tab1',
    tabs: [
        { id: 'tab1', title: 'Tab 1', content: 'Content for Tab 1' },
        { id: 'tab2', title: 'Tab 2', content: 'Content for Tab 2' },
        { id: 'tab3', title: 'Tab 3', content: 'Content for Tab 3' }
    ]
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
    const tabsHtml = state.tabs.map(t => `<button class="tab-btn" data-id="${t.id}">${t.title}</button>`).join('');
    const activeTab = state.tabs.find(t => t.id === state.active) || state.tabs[0];
    root.innerHTML = `
        <div class="tabs">${tabsHtml}</div>
        <div class="tab-content">${activeTab.content}</div>
    `;
    // wire buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => updateState({ active: btn.getAttribute('data-id') }));
    });
}

// TODO 4: Add your event listeners and logic
// (wired inside render)

// TODO 5: Initial render
render();
