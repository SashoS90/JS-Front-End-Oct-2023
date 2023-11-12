// *** Odd and Even Sum ***
// You will receive a single number. You have to write a function, that 
// returns the sum of all even and all odd digits from that number.


function oddAndEvenSum(num) {
    let evenSum = 0; oddSum = 0;
    let numAsString = num.toString()

    for (let char of numAsString) {
        let charAsInt = parseInt(char)
        if (charAsInt % 2 == 0) {
            evenSum += charAsInt;
        }
        else {
            oddSum += charAsInt;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}


oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)