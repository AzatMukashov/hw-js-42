const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const PASSWORD = 'pass-number';
app.get('/encode/:text', (req, res) => {
    res.send(Vigenere.Cipher(PASSWORD).crypt(req.params.text));
});