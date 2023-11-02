// Write a function that receives an array of numbers.
// And prints the sum of the first and last elements in that array.

function sumFirstAndLastElement(arrayWithNums) {
    let lastNum = arrayWithNums.length - 1
    let result = arrayWithNums[0] + arrayWithNums[lastNum]
    
    console.log(result)
  }
  
  sumFirstAndLastElement([20, 30, 40])
  sumFirstAndLastElement([10, 17, 22, 33])
  sumFirstAndLastElement([11, 58, 69])