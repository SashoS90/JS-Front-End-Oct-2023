// *** Collect List Items ***
// Write a JS function that scans a given HTML list and appends all collected list items’ text to a textarea on the same page when the user clicks on a button.
// There will be no input/output, your program should instead modify the DOM of the given HTML document.



function extractText() {
    const items = document.getElementsByTagName('li');
    const result = document.getElementById('result');
    let output = [];

    for (const item of items) {
        output.push(item.textContent);
    }

    result.value = output.join("\n")
}