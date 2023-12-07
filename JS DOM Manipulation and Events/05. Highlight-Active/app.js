// *** Highlight Active ***
// Write a function that highlights the currently active section of a document. 
// There will be multiple divs with input fields inside them. 
// Set the class of the div that contains the currently focused input field to "focused". 
// When the focus is lost (blurred), remove the class from the element.
// Submit only the focused() function in Judge.
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.




function focused() {
    const fields = Array.from(document.querySelectorAll('input'));

    for (const field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlurr);
    }

    function onFocus(e) {
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.add('focused');
    }

    function onBlurr(e) {
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.remove('focused');
    }
}