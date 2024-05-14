// server.js
import express from 'express';
import backendData from './backend.js'; // Import the backend logic with the '.js' extension
import getBackendData from './obfuscateResponse.js';
import getCipherData from './caesarCipher.js';
import getCombinedCipherData from './combinedEncryption.js';
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get("/server/message", (req, res) => {
  let responseData = { message: "Hello from the Server!" };
  res.json(responseData);
});

app.get('/script/message', (req, res) => {
  let responseData = backendData();
  res.send(responseData);
});

app.get('/obfuscation/message', (req, res) => {
  let responseData = getBackendData();
  res.send(responseData);
});

app.get('/cipher/message', (req, res) => {
  let responseData = getCipherData();
  res.send(responseData);
});

app.get('/combined-cipher/message', (req, res) => {
  let responseData = getCombinedCipherData();
  res.send(responseData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
