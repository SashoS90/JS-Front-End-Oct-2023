// *** Encode and Decode Messages ***
// In this problem, you should create a JS functionality that encodes and decodes some messages which travel to the network.
// This program should contain two functionalities.
// The first one is to encode the given message and send it to the receiver. 
// The second one is to decode the received message and read it (display it).
// When the [Encode and send it] button is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:
// •	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, that represents the current character in that message
// •	Clear the sender textarea and add the encoded message to the receiver textarea
// After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:
// •	Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
// •	Replace the encoded message with the already decoded message in the receiver textarea, to make it readable


function encodeAndDecodeMessages() {
    const messageTextbox = document.querySelectorAll('textarea')[0];
    const lastMessageTextbox = document.querySelectorAll('textarea')[1];
    const encodeAndSendBtn = document.querySelectorAll('button')[0];
    const decodeAndReadBtn = document.querySelectorAll('button')[1];
    encodeAndSendBtn.addEventListener('click', encodeMessage);
    decodeAndReadBtn.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let message = messageTextbox.value;
        let encodedMessage = [];

        for (const letter of message) {
            let encodedLetter = letter.charCodeAt() + 1;
            encodedMessage.push(String.fromCharCode(encodedLetter)); 
        }
        lastMessageTextbox.value = encodedMessage.join("");
        messageTextbox.value = '';
    }

    function decodeMessage() {
        let message = lastMessageTextbox.value;
        let decodedMessage = [];

        for (const letter of message) {
            let decodedLetter = letter.charCodeAt() - 1;
            decodedMessage.push(String.fromCharCode(decodedLetter)); 
        }
        lastMessageTextbox.value = decodedMessage.join("");
        decodeAndReadBtn.disabled = true;
    }
}