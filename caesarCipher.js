// caesarCipher.js
function cipherResponse(data) {
    const key = 3; // Shift key for Caesar cipher
    let cipherData = '';
  
    for (let i = 0; i < data.length; i++) {
      let charCode = data.charCodeAt(i);
  
      // Encrypt alphabetic characters only
      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + key) % 26) + 65; // Encrypt uppercase letters
      } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + key) % 26) + 97; // Encrypt lowercase letters
      }
  
      cipherData += String.fromCharCode(charCode);
    }
  
    return cipherData;
  }
  
  export default function getCipherData() {
    const responseData = { message: 'Hello from the Backend!' };
    return cipherResponse(JSON.stringify(responseData));
  }
