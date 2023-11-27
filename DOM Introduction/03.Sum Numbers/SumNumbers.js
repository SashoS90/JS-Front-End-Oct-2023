// *** Collect List Items ***
// Write a JS function that scans a given HTML list and appends all collected list items’ text to a textarea on the same page when the user clicks on a button.
// There will be no input/output, your program should instead modify the DOM of the given HTML document.



function calc() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let sum = document.getElementById('sum');
    let result = Number(num1.value) + Number(num2.value);
    sum.value = result;
}
