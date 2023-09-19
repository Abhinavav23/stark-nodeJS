const express =  require('express');

const app = express();

const products = [
    {id: 101, type: 'Mobile', price: 20000},
    {id: 106, type: 'Mobile', price: 25000},
    {id: 107, type: 'Mobile', price: 5000},
    {id: 102, type: 'Clothing', price: 250},
    {id: 103, type: 'appliances', price: 5000},
    {id: 104, type: 'grocery', price: 800},
    {id: 105, type: 'grocery', price: 500},
];

app.get('/', (req, res) => {
    console.log('running get req for path /');
    console.log('method', req.method);
    console.log('path', req.path);
    console.log('query', req.query);
    res.send('<h2>Home Page!!</h2>');
})

app.post('/', (req, res) => {
    res.send('post request recieved')
})

app.get('/profile/:userId/:username', (req, res) => {
    const {userId, username} = req.params
    res.send(`<h2>Profile Page!! user Id: ${userId} username is ${username}</h2>`)
})

app.get('/products', (req, res) => {
    const {type, max} = req.query;
    console.log('type', type);
    console.log('max', max);
    let resultProduct = []
    if(type){
        
        resultProduct = products.filter((product) => {
            return product.type === type
        })
    }
    if(max){
        console.log('max', max);
        console.log(typeof max);
        resultProduct = resultProduct.filter((product) => {
            return product.price <= parseInt(max);
        })
    }
    // res.status(404)
    res.send({total: resultProduct.length, resultProduct});
})

const PORT = 4500;
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`);
})

console.log(__dirname);