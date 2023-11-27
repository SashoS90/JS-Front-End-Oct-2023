// *** Sum Table ***
// Write a JS function that finds the first table in a document and sums the values in the last column. 
// The result is then displayed in an element with ID "sum".
// There will be no input/output, your program should instead modify the DOM of the given HTML document.



function sumTable() {
    let productValues = document.querySelectorAll('tr td:nth-child(even)');
    let totalSum = document.getElementById('sum');
    let sum = 0;

    for (let index = 0; index < productValues.length - 1; index++) {
        sum += parseFloat(productValues[index].textContent);
    }

    totalSum.textContent = sum;
}