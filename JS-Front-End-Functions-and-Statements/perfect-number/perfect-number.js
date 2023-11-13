// *** Perfect Number ***
// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// •	If the number is perfect, print: "We have a perfect number!"
// •	Otherwise, print: "It's not so perfect."


function isPerfectNumber(num) {
    let sum = 0;
    for (let count = 1; count < num; count++) {
        if (num % count == 0) {
            sum += count
        }
    }

    if (sum === num) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}


isPerfectNumber(7)