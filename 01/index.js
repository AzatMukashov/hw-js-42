const express = require('express');
const app = express();
const port = 8000;
app.get('/:text', (req, res) => {
    return res.send(`${req.params.text}`);
});