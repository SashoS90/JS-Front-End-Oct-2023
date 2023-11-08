// *** String Substring ***
// The input will be given as two separated strings (a word as a first
// parameter and a text as a second). Write a function that checks given
// text for containing a given word. The comparison should be case 
// insensitive. Once you find a match, print the word and stop the program.
// If you don't find the word print: "{word} not found!"


function findWord(word, text) {
    const regex = '\\b'+word+'\\b';
    let regExp = new RegExp(regex,'g');
    let result = regExp.test(text.toLowerCase());
    
    if (result) {
        console.log(word)
    }
    else {
        console.log(`${word} not found!`)
    }
    
  }
  
  
  findWord('javascript', 'Javascript is the best programming language!')
  findWord('python', 'Javascript is the best programming language!')