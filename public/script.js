// Fetch the JSON response from the server and display it
fetch('/server/message')
  .then(response => response.json())
  .then(data => {
    document.getElementById('servermessage').innerText = data.message;
  })
  .catch(error => console.error('Error:', error));

// Fetch the JSON response from the backend and display it
fetch('/script/message')
  .then(response => response.json())
  .then(data => {
    document.getElementById('backendmessage').innerText = data.message;
  })
  .catch(error => console.error('Error:', error));

// Fetch the obfuscated JSON response and display it
fetch('/obfuscation/message')
  .then(response => response.text()) // Receive response as text
  .then(data => {
    // Reverse the obfuscation
    const originalData = data.split('').reverse().join('');
    const jsonData = JSON.parse(originalData);
    // Display the message
    document.getElementById('obfuscationmessage').innerText = jsonData.message;
  })
  .catch(error => console.error('Error:', error));


// Fetch the encrypted JSON response and display the decrypted message
fetch('/cipher/message')
  .then(response => response.json()) // Receive response as JSON
  .then(data => {
    console.log('Received data:', data);
    if (data && data.phvvdjh) { // Check if the response contains the encrypted message
      const decryptedData = caesarCipherDecrypt(data.phvvdjh, 3); // Decrypt using Caesar cipher with shift 3
      document.getElementById('ciphermessage').innerText = decryptedData;
    } else {
      console.error('Error: Invalid response format');
    }
  })
  .catch(error => console.error('Error:', error));

// Caesar cipher decryption function
function caesarCipherDecrypt(text, shift) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      let shiftedCharCode = charCode - shift;
      if ((charCode >= 65 && charCode <= 90 && shiftedCharCode < 65) || (charCode >= 97 && charCode <= 122 && shiftedCharCode < 97)) {
        shiftedCharCode += 26; // Wrap around if shifting goes below 'A' or 'a'
      }
      charCode = shiftedCharCode;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

// Fetch the encrypted JSON response and display the decrypted message
fetch('/combined-cipher/message')
  .then(response => response.text()) // Receive response as text
  .then(data => {
    // Decrypt the received data
    const decryptedData = decryptCombinedCipher(data);
    // Reverse the decrypted data
    const reversedData = reverseData(decryptedData);
    // Update the HTML element with the reversed decrypted message
    document.getElementById('combinedmessage').innerText = reversedData;
  })
  .catch(error => console.error('Error:', error));

// Function to decrypt the combined cipher
function decryptCombinedCipher(encryptedData) {
  // Caesar cipher decryption function
  function caesarCipherDecrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      // Decrypt alphabetic characters only
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        let shiftedCharCode = charCode - shift;
        if ((charCode >= 65 && charCode <= 90 && shiftedCharCode < 65) || (charCode >= 97 && charCode <= 122 && shiftedCharCode < 97)) {
          shiftedCharCode += 26; // Wrap around if shifting goes below 'A' or 'a'
        }
        charCode = shiftedCharCode;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }

  // Decrypt the encrypted data using the Caesar cipher
  const decryptedData = caesarCipherDecrypt(encryptedData, 3); // Decrypt using Caesar cipher with shift 3

  return decryptedData;
  
}


// Function to reverse the data
function reverseData(data) {
  return data.split('').reverse().join('');
}