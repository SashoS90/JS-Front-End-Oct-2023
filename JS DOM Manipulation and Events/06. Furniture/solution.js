// *** Furniture ***
// You will be given some furniture as an array of objects. Each object will have a name, a price, and a decoration factor. 
// When the ["Generate"] button is clicked, add a new row to the table for each piece of furniture with image, name, price, 
// and decoration factor (code example below). 
// When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result textbox the names of the piece of furniture 
// that were checked, separated by a comma and single space (", ") in the following format: "Bought furniture: {furniture1}, {furniture2}…".
// On the next line, print the total price in the format: "Total price: {totalPrice}" (formatted to the second decimal point). 
// Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"
// Input example:
// [{"name": "Sofa", 
// "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", 
// "price": 150, 
// "decFactor": 1.2}]


function solve() {
  const inputTextArea = document.querySelectorAll('textarea')[0];
  const outputTextArea = document.querySelectorAll('textarea')[1];
  const productsList = document.querySelector('tbody');
  const generateBtn = document.querySelectorAll('button')[0];
  const buyBtn = document.querySelectorAll('button')[1];

  generateBtn.addEventListener('click', addRow);
  buyBtn.addEventListener('click', buyProducts);


  function addRow() {
    let items = JSON.parse(inputTextArea.value);

    for (const item of Object.values(items)) {
      let newRow = document.createElement('tr');
      newRow.innerHTML = `
      <tr>
      <td><img src="${item.img}"></td>
      <td><p>${item.name}</p></td>
      <td><p>${item.price}</p></td>
      <td><p>${item.decFactor}</p></td>
      <td><input type="checkbox"></td>
      </tr>`
      productsList.appendChild(newRow);
    }
  }

  function buyProducts() {
    const tableRows = document.querySelectorAll('tbody tr');
    let shoppingBasket = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const row of tableRows) {
      let [productName, productPrice, productDecFactor] = row.querySelectorAll('p');
      let mark = row.querySelector('input[type=checkbox]');

      if (mark.checked) {
        shoppingBasket.push(productName.textContent);
        totalPrice += Number(productPrice.textContent);
        totalDecFactor += Number(productDecFactor.textContent);
      }
    }
    let averageDecFactor = totalDecFactor / shoppingBasket.length;

    outputTextArea.value = `Bought furniture: ${shoppingBasket.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`
  }
}