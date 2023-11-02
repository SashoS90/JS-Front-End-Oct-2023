function censorship(stringInput, forbiddenWord) {
    let censoredWord = '*'.repeat(forbiddenWord.length);
    const regex = new RegExp(forbiddenWord, "g");
    
    console.log(stringInput.replace(regex, censoredWord));
  }
  
  censorship('Just a small sentence with some small, small words.', 'small')