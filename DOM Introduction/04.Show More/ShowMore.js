// *** Show More ***
// Write a JS function that expands a hidden section of text when a link is clicked. The link should disappear as the rest of the text shows up.
// There will be no input/output, your program should instead modify the DOM of the given HTML document.



function showText() {
    let readMoreBtn = document.getElementById('more');
    let textElement = document.getElementById('text');
readMoreBtn.style.display = 'none';
textElement.style.display = 'inline';
}