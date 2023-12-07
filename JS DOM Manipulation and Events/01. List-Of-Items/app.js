// *** List of Items ***
// Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.



function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');
    let newItem = document.createElement('li');

    newItem.textContent = input.value;
    items.appendChild(newItem);
}