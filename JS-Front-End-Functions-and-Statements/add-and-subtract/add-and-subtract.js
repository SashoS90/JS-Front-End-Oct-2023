// *** Add and Subtract ***
// You will receive three integer numbers.
// Write a function sum() to calculate the sum of the first two integers
// and a function subtract(), which subtracts the result of the function sum()
// and the third integer.


function addAndSubtract(num1, num2, num3) {
    function sum(num1, num2) {
      return num1 + num2;
    }
    
    let sumOfNums = (x, y) => x + y;
    let result = sumOfNums(num1, num2) - num3
    console.log(result)
    
  }
  
  
  addAndSubtract(23, 6, 10)
  addAndSubtract(1, 17, 30)
  addAndSubtract(42, 58, 100)