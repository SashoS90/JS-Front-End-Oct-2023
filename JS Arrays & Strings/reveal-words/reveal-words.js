// *** Reveal Words ***
// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.


function revealWords(words, text) {
    let wordsList = words.split(', ')
    let textWords = text.split(' ')
    
    while (wordsList.length > 0) {
      let currentWord = wordsList.shift()
      
      for (let count = 0; count < textWords.length; count++) {
      if (textWords[count].startsWith('*') && textWords[count].length === currentWord.length) {
        textWords[count] = currentWord
      }
    }
      
    }
    
    console.log(textWords.join(' '))
    
  }
  
  
  revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')
  // revealWords('one, three, seven, nine', 'this is *** That is ***** up ***** ****')