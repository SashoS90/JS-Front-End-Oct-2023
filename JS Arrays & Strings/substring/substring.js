// Write a function that receives a string and two numbers. The numbers
// will be a starting index and count of elements to substring. Print
// the result.

function substring(stringInput, startingIndex, elementsCount) {
    let result = '';
    result = stringInput.substring(startingIndex, (startingIndex + elementsCount))
    console.log(result)
  }
  
  substring('ASentence', 1, 8)
  substring('SkipWord', 4, 7)