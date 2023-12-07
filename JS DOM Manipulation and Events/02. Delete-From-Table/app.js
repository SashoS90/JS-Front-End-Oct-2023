//  *** Delete from Table ***
// Write a program that takes an email from an input field and deletes the matching row from a table. 
// •	If entry is found, the textContent in the element with id="result" must be set to "Deleted."
// •	Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found." 
// Submit only the deleteByEmail() function in Judge. 


function deleteByEmail() {
    const input = document.querySelector('input[name=email]');
    const records = document.querySelector('#customers tbody');
    const rows = Array.from(document.querySelectorAll('#customers tbody tr'));
    const result = document.querySelector('#result');
    let isDeleted = false;

    rows.forEach((row) => {
        let email = row.querySelectorAll('td')[1].textContent;
        if (input.value === email) {
            records.removeChild(row);
            isDeleted = true;
        }
    })

    if (isDeleted) {
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
}