// *** Password Validator ***
// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 

// If a password is a valid print: "Password is valid".

// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"


function passwordValidator(password) {

    function lengthIsValid(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function contentsAreValid(password) {
        const regex = /^[A-Za-z0-9]+$/gm;
        return regex.test(password);
    }

    function atleastTwoDigits(password) {
        regex = /\d/gm;
        digitsCount = password.match(regex);
        if (digitsCount) {
            return digitsCount.length >= 2;
        } else {
            return false;
        }
    }

    function printOutput(password) {
        let output = [];
        const messagesMap = {
            1: "Password must be between 6 and 10 characters",
            2: "Password must consist only of letters and digits",
            3: "Password must have at least 2 digits",
            4: "Password is valid",
        }

        if (!lengthIsValid(password)) {
            output.push(messagesMap[1]);
        }
        if (!contentsAreValid(password)) {
            output.push(messagesMap[2]);
        }
        if (!atleastTwoDigits(password)) {
            output.push(messagesMap[3]);
        }
        if (lengthIsValid(password) && contentsAreValid(password) && atleastTwoDigits(password)) {
            output.push(messagesMap[4])
        }

        return output.join('\n')

    }

    console.log(printOutput(password))

}


passwordValidator('Pa$s$s')