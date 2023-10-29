function getLargestNum(num1, num2, num3) {
    let min_num = Math.max(num1, num2, num3);
    let result = `The largest number is ${min_num}.`;
    console.log(result)
}

getLargestNum(5, -3, 16)
getLargestNum(-3, -5, -22.5)