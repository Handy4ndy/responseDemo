// obfuscateResponse.js
function obfuscateResponse(data) {
    // Obfuscate the response data here
    const obfuscatedData = JSON.stringify(data).split('').reverse().join(''); // Example obfuscation (reversing the JSON string)
    return obfuscatedData;
  }
  
  export default function getBackendData() {
    // Your backend logic goes here
    const responseData = { message: 'Hello from the Backend!' };
    return obfuscateResponse(responseData);
  }