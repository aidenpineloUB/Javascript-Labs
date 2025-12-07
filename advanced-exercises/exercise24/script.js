// Exercise 24: Chat Interface
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    messages: []
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
    root.innerHTML = `
        <div class="messages">${state.messages.map(m => `<div class="msg ${m.from}">${m.text}</div>`).join('')}</div>
        <div class="composer"><input id="msgInput" placeholder="Type a message"><button id="send">Send</button></div>
    `;
    document.getElementById('send').addEventListener('click', () => {
        const input = document.getElementById('msgInput');
        const txt = input.value.trim();
        if (!txt) return;
        const msgs = [...state.messages, { text: txt, from: 'me' }];
        updateState({ messages: msgs });
        input.value = '';
        setTimeout(() => updateState({ messages: [...state.messages, { text: txt, from: 'me' }, { text: 'Echo: ' + txt, from: 'bot' }] }), 500);
    });
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
