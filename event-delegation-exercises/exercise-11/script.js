// Exercise 11: Todo with Categories
// Goal: Add todos to categories, mark complete, delete - all with event delegation
const todoContainer = document.getElementById('todo-container');
const todoInput = document.getElementById('todo-input');
const categorySelect = document.getElementById('category-select');
const addBtn = document.getElementById('add-btn');

// Part 1: Add new todos
addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    const selectedCategory = categorySelect.value;
    
    // Validate input
    if (!todoText) return;
    
    // Find the category element with matching data-category attribute
    const categoryElement = todoContainer.querySelector(`[data-category="${selectedCategory}"]`);
    
    if (!categoryElement) return;
    
    // Find the todo list within that category
    const todoList = categoryElement.querySelector('.todo-list');
    
    // Create new todo item
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span class="todo-text">${todoText}</span>
        <button class="complete-btn">✓</button>
        <button class="delete-btn">×</button>
    `;
    
    // Append to category's todo list
    todoList.appendChild(todoItem);
    
    // Clear input
    todoInput.value = '';
});

// Part 2: Handle todo actions using event delegation on todoContainer
todoContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('complete-btn')) {
        // Toggle completed class on the parent todo-item
        const todoItem = e.target.closest('.todo-item');
        if (todoItem) {
            todoItem.classList.toggle('completed');
        }
    } else if (e.target.classList.contains('delete-btn')) {
        // Remove the parent todo-item
        const todoItem = e.target.closest('.todo-item');
        if (todoItem) {
            todoItem.remove();
        }
    }
});