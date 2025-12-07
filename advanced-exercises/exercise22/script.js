// Exercise 22: Tree View
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    tree: [
        { id: 'n1', name: 'Root', open: true, children: [
            { id: 'n1-1', name: 'Child A', open: false, children: [] },
            { id: 'n1-2', name: 'Child B', open: false, children: [] }
        ]}
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
    function renderNode(node) {
        const kids = (node.children || []).map(renderNode).join('');
        return `<div class="node"><div class="node-title" data-id="${node.id}">${node.open ? '[-]' : '[+]'} ${node.name}</div><div class="node-children" style="display:${node.open? 'block':'none'}">${kids}</div></div>`;
    }
    root.innerHTML = state.tree.map(renderNode).join('');
    root.querySelectorAll('.node-title').forEach(el => el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        function toggle(nodes) {
            return nodes.map(n => {
                if (n.id === id) return { ...n, open: !n.open };
                if (n.children) return { ...n, children: toggle(n.children) };
                return n;
            });
        }
        updateState({ tree: toggle(state.tree) });
    }));
}

// TODO 4: Add your event listeners and logic
// Your code here

// TODO 5: Initial render
render();
