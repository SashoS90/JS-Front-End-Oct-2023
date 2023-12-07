// *** Colorize Table ***
// Write a JS function that changes the color of all even rows when the user clicks a button. Apply the color "Teal" to the target rows.
// There will be no input/output, your program should instead modify the DOM of the given HTML document.



function colorize() {
    let EvenRows = document.querySelectorAll('tr:nth-child(even)')
    
    for (const row of EvenRows) {
        row.style.background = 'Teal';
    }
}