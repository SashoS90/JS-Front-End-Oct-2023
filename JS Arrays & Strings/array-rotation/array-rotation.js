// *** Array Rotation ***
// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Print the resulting array elements separated by a single space.


function arrayRotation(array, rotations) {
    let lastArrayIndex = array.length
    let result = array.slice(0, lastArrayIndex)

    for (let counter = 0; counter < rotations; counter++) {
        let firstElement = result.shift()
        result.push(firstElement)
    }

    console.log(result.join(" "))

}


arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)