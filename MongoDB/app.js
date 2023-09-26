const express = require('express');
const app = express();
const productRouter = require('./src/router/productRouter')
// console.log('inside app');
app.use(express.json());

app.use('/product', productRouter);
module.exports = app