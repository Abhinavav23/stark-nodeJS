const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.send('Product list')
});

module.exports = app