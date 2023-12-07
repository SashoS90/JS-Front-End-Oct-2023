function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');

    let newItem = document.createElement('li');
    newItem.textContent = input.value;

    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    newItem.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteItem);

    items.appendChild(newItem);
    input.value = '';

    function deleteItem() {
        items.removeChild(newItem);
    }
}