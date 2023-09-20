const express = require("express");
require("dotenv").config();
const app = express();
// use this middleware provided by express to access the body
app.use(express.json());

let products = [
  { id: 101, type: "Mobile", name: 'samsung', price: 20000 },
  { id: 102, type: "Clothing", name: "Pepe Jeans", price: 250 },
  { id: 103, type: "appliances", name: "Washing machine", price: 5000 },
  { id: 104, type: "grocery", name: "cornflakes", price: 800 },
  { id: 105, type: "grocery", name: "Maggi", price: 500 },
  { id: 106, type: "Mobile", name: 'Oppo', price: 25000 },
  { id: 107, type: "Mobile", name: "Jio", price: 5000 },
];

app.get("/", (req, res) => {
  console.log("running get req for path /");
  console.log("method", req.method);
  console.log("path", req.path);
  console.log("query", req.query);
  res.send("<h2>Home Page!!</h2>");
});

app.post("/", (req, res) => {
  res.send("post request recieved");
});

app.get("/profile/:userId/:username", (req, res) => {
  const { userId, username } = req.params;
  res.send(
    `<h2>Profile Page!! user Id: ${userId} username is ${username}</h2>`
  );
});

app.get("/products", (req, res) => {
  const { type, max } = req.query;
  // console.log('type', type);
  // console.log('max', max);
  let resultProduct = products;
  if (type) {
    resultProduct = products.filter((product) => {
      return product.type === type;
    });
  }
  if (max) {
    // console.log('max', max);
    // console.log(typeof max);
    resultProduct = resultProduct.filter((product) => {
      return product.price <= parseInt(max);
    });
  }
  // res.status(404)
  res.send({ total: resultProduct.length, resultProduct });
});

// creating a product
app.post("/products", (req, res) => {
  console.log("body", req.body);
  const { type } = req.body;
  if (type) {
    products.push(req.body);
    res.status(201);
    // res.send({products, total: products.length});
    res.send({message: "created successfully"});
  }else{
    res.status(400);
    res.send({message: "Error"})
  }
});

app.put('/products', (req, res) => {
    // access the data
    console.log(req.body);
    // check if the item is present --> if yes: update the item
    // if no--> then we create the item
    let isUpdated = false;
    products.forEach((item) => {
        if(item.id === req.body.id){
            item.name = req.body.name;
            item.price = req.body.price;
            isUpdated= true
            res.status(200);
        }
    })
    if(!isUpdated){
        res.status(201);
        products.push(req.body);
    }
    
    res.send({message: "updated successfully"})
})

app.delete('/products/:productId', (req, res) => {
    const {productId} = req.params
    console.log('productId', productId);
    products = products.filter((item) => {
        return item.id !== parseInt(productId);
    })
    res.status(200).send({message: 'deleted successfully'})
})

const PORT = process.env.PORT || 4500;
// console.log('secret key', process.env.SECRET_KEY);

app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

console.log(__dirname);


// HTTP status codes series
// 100 --> related to information : 100, 101, 103, 104
// 200 ---> success response: 200, 201, 204
// 300 ---> redirection: 301, 302, 304, 307, 308
// 400 ---> client error: 400, 401, 402, 403, 404
// 500 --> server error: 500, 502, 503, 504, 507