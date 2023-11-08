// *** List of Names ***
// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.


function alphabeticArrangement(arrayOfNames) {
    let sortedArray = arrayOfNames.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let count = 0; count < sortedArray.length; count++) {
        console.log(`${count + 1}.${sortedArray[count]}`)
    }

}


alphabeticArrangement(["John", "Bob", "Christina", "Ema"])
alphabeticArrangement([""])