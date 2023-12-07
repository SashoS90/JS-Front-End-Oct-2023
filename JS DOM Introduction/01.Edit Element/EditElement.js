// *** Edit Element ***
// Create function edit() that takes three parameters.
// The first parameter is a reference to an HTML element, the other two parameters are string–match and replacer.
// You have to replace all occurrences of the match inside the text content of the given element with a replacer.



function editElement(ref, match, replacer) {
    let regex = new RegExp(match, 'g');
    let refContent = ref.textContent;
    let editedText = refContent.replace(regex, replacer);
    ref.textContent = editedText;
};