const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const PASSWORD = 'passnumber';
app.get('/encode/:text', (req, res) => {
    return res.send(Vigenere.Cipher(PASSWORD).crypt(req.params.text));
});
app.get('/decode/:text', (req, res) => {
    return res.send(Vigenere.Decipher(PASSWORD).crypt(req.params.text));
});
app.listen(port, () => {
    console.log(`Server - http://localhost:${port}`);
});