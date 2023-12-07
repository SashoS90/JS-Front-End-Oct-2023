// *** Pascal or Camel Case ***
// An HTML file is given and your task is to write a function that takes two string parameters as an input and 
// transforms the first parameter to the type required by the second parameter.
// •	The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.
// •	The second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"
// When the button is clicked the function should convert the first string to either of the cases. 
// The output should consist of only one word - the string you have modified. Once your output is done, 
// you should set it as HTML to the <span> element. For more information, see the examples below:



function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  function convertToPascal(textInput) {
    let wordsList = textInput.toLowerCase().split(" ")

    for (let index = 0; index < wordsList.length; index++) {
      wordsList[index] = wordsList[index].charAt(0).toUpperCase() + wordsList[index].slice(1).toLowerCase();
    }
    return wordsList.join("")
  }

  function convertToCamel(textInput) {
    let wordsList = textInput.toLowerCase().split(" ")

    for (let index = 1; index < wordsList.length; index++) {
      wordsList[index] = wordsList[index].charAt(0).toUpperCase() + wordsList[index].slice(1).toLowerCase();
    }
    return wordsList.join("")
  }

  if (convention === 'Pascal Case') {
    result.textContent = convertToPascal(text);
  } else if (convention === 'Camel Case') {
    result.textContent = convertToCamel(text);
  } else {
    result.textContent = 'Error!'
  }
}