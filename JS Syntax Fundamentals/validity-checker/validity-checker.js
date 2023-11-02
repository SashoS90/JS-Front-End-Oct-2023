function validityChecker(x1, y1, x2, y2) {
    let result1 = 0; 
    let result2 = 0; 
    let result3 = 0;

    result1 = Math.sqrt((0 - x1) * (0 - x1) + (0 - y1) * (0 - y1))
    if (Number.isInteger(result1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    result2 = Math.sqrt((0 - x2) * (0 - x2) + (0 - y2) * (0 - y2))
    if (Number.isInteger(result2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    result3 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
    if (Number.isInteger(result3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

validityChecker(2, 1, 1, 1)
validityChecker(3, 0, 0, 4)