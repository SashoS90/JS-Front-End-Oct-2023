// *** Fill Dropdown ***
// Your task is to take values from input fields with ids "newItemText" and "newItemValue". 
// Then you should create and append an <option> to the <select> with id "menu".



function addItem() {
    const textField = document.getElementById('newItemText');
    const valueField = document.getElementById('newItemValue');
    const menuDropdown = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.textContent = textField.value;
    newOption.value = valueField.value;

    menuDropdown.appendChild(newOption);

    textField.value = '';
    valueField.value = '';

}