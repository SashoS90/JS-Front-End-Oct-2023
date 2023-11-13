// *** NxN Matrix ***
// Write a function that receives a single integer number n and prints nxn matrix with that number.


function numberMatrix(num) {
    let matrix = []
    for (let count = 0; count < num; count++) {
        let row = `${num.toString()} `.repeat(num)
        matrix.push(row)
    }
    console.log(matrix.join("\n"))
}

// numberMatrix(7)
numberMatrix(2)