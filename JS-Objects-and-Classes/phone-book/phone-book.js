// *** Phone Book ***
// Write a function that stores information about a person’s name and phone number. 
// The input is an array of strings with space-separated name and number. Replace duplicate names. 
// Print the result as shown.


function phoneBook(stringsArray) {
    const phoneRecords = {};

    stringsArray.forEach((personInfo) => {
        let [name, phoneNumber] = personInfo.split(" ");
        phoneRecords[name] = phoneNumber;
    });

    for (const [contact, number] of Object.entries(phoneRecords)) {
        console.log(`${contact} -> ${number}`)
    }

}


phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])