// *** Palindrome Integers ***
// A palindrome is a number, which reads the same backwards as forward,
// such as 323 or 1001. Write a function, which receives an array of positive
// integers and checks if each integer is a palindrome or note.


function checkForPalindromes(arrayOfNums) {
    const reverseNumFunc = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

    for (let element in arrayOfNums) {
        let currentNum = arrayOfNums[element]
        let reversedNum = reverseNumFunc(currentNum);

        console.log(currentNum === reversedNum)
    }
}

checkForPalindromes([123, 323, 421, 121])
checkForPalindromes([32, 2, 232, 1010])