const express = require('express');
const app = express();
const productRouter = require('./src/router/productRouter');
const userRouter = require('./src/router/userRouter')
// console.log('inside app');
app.use(express.json());

app.use('/product', productRouter);
app.use('/user', userRouter);

module.exports = app