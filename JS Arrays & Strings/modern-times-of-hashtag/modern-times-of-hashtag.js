// *** Modern Times of #(HashTag) ***
// The input will be a single string.
// Find all special words starting with #. If the found special word does
// not only of letters, then it is invalid and should not be printed.
// Finally, print out all the special words you found without the label (#)
// on a new line.


function findHashtag(stringInput) {
    let regex = /#[a-zA-Z]+\b/g;
    let result = stringInput.match(regex)
    
    for (const element of result) {
    console.log(element.replace('#', ''));
  }
  
  }
  
  
  findHashtag('The symbol # is known #variously in English-speaking #regions as the #number sign')