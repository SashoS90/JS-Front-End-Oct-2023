// *** Factorial Division ***
// Write a function that receives two integer numbers. Calculate the factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.


function factorialDivision(num1, num2) {
    let N1factorial = findFactorial(num1);
    let N2factorial = findFactorial(num2);
    let result = N1factorial / N2factorial;

    function findFactorial(number) {
        let numbersArray = [];
        for (let count = number; count > 0; count--) {
            numbersArray.push(count)
        }

        const sum = numbersArray.reduce((a, b) => a * b);
        return sum;
    }

    console.log(result.toFixed(2))
}


factorialDivision(5, 2)
factorialDivision(6, 2)