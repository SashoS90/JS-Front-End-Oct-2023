// *** Address Book ***
// Write a function that stores information about a person’s name and his address. 
// The input comes as an array of strings. Each string contains the name and the address separated by a colon. 
// If you receive the same name twice just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.


function addressBook(dataArray) {
    const addressList = {};

    dataArray.forEach(element => {
        let [name, address] = element.split(":")
        addressList[name] = address;
    });

    for (const [name, address] of Object.entries(addressList).sort()) {
        console.log(`${name} -> ${address}`)
    }
}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])