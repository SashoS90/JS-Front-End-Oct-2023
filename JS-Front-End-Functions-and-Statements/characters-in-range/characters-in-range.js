// *** Characters in Range ***
// Write a function that receives two characters and prints on a single line
// all the characters in between them according to the ASCII code. Keep in
// mind that the second character code might be before the first one inside the ASCII table.


function charsInRange(char1, char2) {
    let startIndex = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let endIndex = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let result = [];

    function addElements(start, end) {
        for (let count = startIndex + 1; count < endIndex; count++) {
            let currentElement = String.fromCharCode(count);
            result.push(currentElement);
        }
        return result;
    }

    result = addElements(startIndex, endIndex);
    console.log(result.join(' '))

}


charsInRange('a', 'd')
charsInRange('#', ':')
charsInRange('C', '#')