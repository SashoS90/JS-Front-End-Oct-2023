// *** Convert to Object ***
// Write a function that receives a string in JSON format and converts it 
// to an object.
// Loop thorugh all the keys and print them with their values in format:
// "{key}: {value}"


function convertToObject(stringInput) {
    const obj = JSON.parse(stringInput);

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')