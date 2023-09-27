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

  // we get a single product
  Product.findById(productId)
    .then((data) => {
      res.status(200).json({ status: "success", data });
    })
    .catch((err) => {
      res.status(404).json({ status: "fail", error: err.message });
    });
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

const getProductUsingFilter = async (req, res) => {
  console.log("query", req.query);
  const { category, available, min, max } = req.query;

  // try {
  //   const data = await Product.find({ category, inStock: available });
  //   res
  //     .status(200)
  //     .json({ status: "success", total: data.length, records: data });
  // } catch (err) {
  //   res.status(404).json({ status: "error", message: err.message });
  // }

  // try {
  //   // const data = await Product.find({ category, inStock: available }).select([
  //   //   "name",
  //   //   "price",
  //   // ]);
  //   const data = await Product.find({ category, inStock: available }).select({
  //     // price: 1,
  //     // category: 1,
  //     // quantity: 1,
  //     // inStock: 1
  //     name: 0
  //   });
  //   res
  //     .status(200)
  //     .json({ status: "success", total: data.length, records: data });
  // } catch (err) {
  //   res.status(404).json({ status: "error", message: err.message });
  // }

  // >, <, >=, <=, !=
  // gt, lt, gte, lte, ne
  // $nor, $or, $and

  try {
    const data = await Product.find({ price: { $lt: max } });
    res
      .status(200)
      .json({ status: "success", total: data.length, records: data });
  } catch (err) {
    res.status(404).json({ status: "error", message: err.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    // 1st arg --> the id using which we need to find
    // 2nd arg --> {$set: whatever need to be updated}
    // 3rd arg --> options --> to control the returned data
    const data = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ status: "success", data });
  } catch (err) {
    res.status(404).json({ status: "failed", message: err.message });
  }

  // await Product.updateOne
  // await Product.updateMany
};

const deleteProduct = async(req, res) => {
  const {id} = req.params;
  try{
    const data = await Product.findByIdAndDelete(id);
    res.status(200).json({ status: "deleted Successfully" });
  }catch(err){
    res.status(404).json({ status: "failed", message: err.message });
  }

  // await Product.findOneAndDelete
  // await Product.deleteOne
  // await Product.deleteMany
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  getProductByCategory,
  getProductUsingFilter,
  updateProduct,
  deleteProduct
};
