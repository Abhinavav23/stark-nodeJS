const express =  require('express');

const app = express();

const products = [
    {id: 101, name: 'Mobile', price: 20000},
    {id: 102, name: 'Clothing', price: 250},
    {id: 103, name: 'appliances', price: 5000},
    {id: 104, name: 'grocery', price: 54500},
];

app.get('/', (req, res) => {
    console.log('running get req for path /');
    res.send('<h2>Home Page!!</h2>')
})

app.get('/profile', (req, res) => {
    console.log('profile page');
    res.send('<h2>Profile Page!!</h2>')
})

app.get('/products', (req, res) => {
    res.send({total: products.length, products});
})

const PORT = 4500;
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`);
})