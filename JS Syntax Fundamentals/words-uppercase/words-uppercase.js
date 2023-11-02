function wordsUppercase(inputString) {
    const regex = /[A-Za-z]+/g;
    const wordsArray = inputString.toUpperCase().match(regex);
    console.log(wordsArray.join(', '))
}

wordsUppercase("Hi, how are you?")