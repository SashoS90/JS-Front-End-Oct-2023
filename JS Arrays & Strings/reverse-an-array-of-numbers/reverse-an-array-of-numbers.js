// Write a program, which receives a number n and an array of elements.
// Your task is to create a new array with n numbers from the original
// array, reverse it and print its elements on a single line, space-separated.


function reverseArrayofNums(count, arrayOfNums) {
    let result = [];
    let counter = 0;
    
    while (counter < count) {
      result.push(arrayOfNums[counter])
      counter += 1
    }
    console.log(result.reverse().join(' '))
  }
  
  reverseArrayofNums(3, [10, 20, 30, 40, 50])
  reverseArrayofNums(4, [-1, 20, 99, 5])
  reverseArrayofNums(2, [66, 43, 75, 89, 47])