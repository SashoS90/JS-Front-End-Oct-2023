// *** Person Info ***
// Write a function that receives 3 parameters, sets them to an object, 
// and returns that object.
// The input comes as 3 separate strings in the following order:
// firstName, lastName, age.


function createObject(firstName, lastName, age) {
    const object = {};
    object.firstName = firstName;
    object['lastName'] = lastName;
    object['age'] = age;

    return object

}


console.log(createObject('Peter', 'Pan', 20))
console.log(createObject('George', 'Smith', 18))