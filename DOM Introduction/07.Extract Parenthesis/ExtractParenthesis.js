// *** Extract Parenthesis ***
// Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID. The result is a string, joined by "; " (semicolon, space).
// Your function will receive a string parameter, representing the target element ID, from which text must be extracted. The text should be extracted from the DOM.
// Return a string with all matched text, separated by "; " (semicolon, space).



function extract(content) {
    const text = document.getElementById('content');
    const regex = /\((.+?)\)/g; 
    let extractedElements = text.textContent.match(regex);
    let result = [];

    for (const element of extractedElements) {
        result.push(element.slice(1, element.length - 1));
    }
    return result.join('; ');
}