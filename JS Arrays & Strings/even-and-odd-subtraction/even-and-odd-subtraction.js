// Write a program that calculates the difference between the sum of the
// even and the sum of the odd numbers in array.

function evenOddSumDifference(arrayOfNums) {
    let evenSum = 0;
    let oddSum = 0;
    
    arrayOfNums.forEach(findSum);
    
    function findSum(element) {
      if (element % 2 == 0) {
        evenSum += element
      }
      else {
        oddSum += element
      }
    }
    
    let difference = evenSum - oddSum;
    
    console.log(difference)
   
  }
  
  evenOddSumDifference([1, 2, 3, 4, 5, 6])
  evenOddSumDifference([3, 5, 7, 9])
  evenOddSumDifference([2, 4, 6, 8, 10])