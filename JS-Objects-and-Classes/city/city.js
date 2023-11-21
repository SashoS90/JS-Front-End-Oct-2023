// *** City ***
// Write a function that receives a single parameter - an object, containing
// five properties.: {name, area, population, country, postcode}.
// Loop through all the keys and print them with their values in format:
// "{key} -> {value}"


function getProperties(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`)
    }
}


getProperties({
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postCode: '1000'
})

getProperties({
    name: 'Plovdiv',
    area: 389,
    population: 1162358,
    country: 'Bulgaria',
    postCode: '4000'
})