// *** Odd Occurrences ***
// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.


function extractOddElements(stringInput) {
    let oddNumberOfElementsArray = [];
    let elementsArray = stringInput.toLowerCase().split(" ")

    elementsArray.forEach(element => {
        let count = 0;

        for (let comparisonElement of elementsArray) {
            if (element === comparisonElement) {
                count += 1;
            }
        }

        if (count % 2 != 0 && !oddNumberOfElementsArray.includes(element)) {
            oddNumberOfElementsArray.push(element)
        }
    });

    console.log(oddNumberOfElementsArray.join(" "))

}


extractOddElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')