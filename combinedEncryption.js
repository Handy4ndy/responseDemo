//combinedEncryption.js
// Reverse and then encrypt the data using the Caesar cipher
function reverseAndCipherResponse(data) {
    // Reverse the data
    const reversedData = data.split('').reverse().join('');

    // Encrypt the reversed data using the Caesar cipher
    const key = 3; // Shift key for Caesar cipher
    let cipherData = '';
    for (let i = 0; i < reversedData.length; i++) {
        let charCode = reversedData.charCodeAt(i);
        // Encrypt alphabetic characters only
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            charCode = ((charCode - 65 + key) % 26) + 65; // Encrypt uppercase and lowercase letters
        }
        cipherData += String.fromCharCode(charCode);
    }

    return cipherData;
}

// Export a function to get the ciphered and reversed data
export default function getCombinedCipherData() {
    const responseData = { message: 'Hello from the Backend!' };
    const reversedData = reverseAndCipherResponse(JSON.stringify(responseData));
    return reversedData;
}
