// *** Smallest of Three Numbers ***
// Write a function that receives three integers and prints the Smallest
// number. Use an appropriate name for the function.


function findSmallestInteger(num1, num2, num3) {
    let smallestNum = Math.min(num1, num2, num3);
    console.log(smallestNum)
  }
  
  
  findSmallestInteger(2, 5, 3)
  findSmallestInteger(600, 342, 123)
  findSmallestInteger(25, 21, 4)
  findSmallestInteger(2, 2, 2)