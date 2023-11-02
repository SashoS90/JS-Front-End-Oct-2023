function printNumbers(num1, num2) {
    let start = num1;
    let end = num2;
    while (start >= end) {
        console.log(start)
        start -= 1
    };
}

function printNumbers2(num1, num2) {
    for (let i = num1; i >= num2; i --) {
        console.log(i)
    }
}

printNumbers2(5, 1)