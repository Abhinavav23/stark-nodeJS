const express = require('express');

const app = express();

const genericFun = (req, res, next) => {
    console.log('genericFun running');
    next();
}

const LoginCheckFun = (req, res, next) => {
    console.log('LoginCheckFun running');
    next();
}

// use this generic func for all the req

app.use(LoginCheckFun);
app.use(genericFun);

// routes
app.get('/home', (req, res) => {
    console.log('inside home route');
    res.send('home Page');
})

app.use(genericFun);

app.get('/cart', (req, res) => {
    console.log('inside cart route');

    res.send('cart Page');
})

module.exports = app