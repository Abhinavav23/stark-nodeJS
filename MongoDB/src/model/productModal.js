// schema --> the structure/architecture of every record
// what is the key and what is the value allowed

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number,
    inStock: Boolean
}, {versionKey: false})

// define a model using which we will perform our database operations (CRUD)
// 2 things --> 1. name of collection, 2. Schema for that collection
const Product = mongoose.model("products", ProductSchema);

module.exports = Product