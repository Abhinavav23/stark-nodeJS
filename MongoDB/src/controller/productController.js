const Product = require("../model/productModal");

const getAllProducts = (req, res) => {
  // read the data from database and then return
//   we recieve all the product in an array
  Product.find()
    .then((data) => {
      res
        .status(200)
        .json({ status: "success", total: data.length, products: data });
    })
    .catch((err) => {
      res.status(404).json({ status: "fail", error: err.message });
    });
};

const getSingleProduct = (req, res) => {
  const { productId } = req.params;
  
  Product.findById(productId)
  .then((data) => {
    res.status(200).json({ status: "success", data });
  })
  .catch((err) => { 
    res.status(404).json({ status: "fail", error: err.message });
  })
};

const getProductByCategory = (req, res) => {
  const { category } = req.params;
  console.log("category", category);

  Product.find({ category })
    .then((data) => {
      res.status(200).json({ status: "success", data, total: data.length });
    })
    .catch((err) => {
      res.status(404).json({ status: "fail", error: err.message });
    });
};

const createNewProduct = (req, res) => {

  Product.create(req.body)
    .then((data) => {
      res.status(201).json({ status: "successful", data });
    })
    .catch((err) => {
      res.status(404).json({ status: "failed", error: err.message });
    });
};

module.exports = { getAllProducts, getSingleProduct, createNewProduct, getProductByCategory };
