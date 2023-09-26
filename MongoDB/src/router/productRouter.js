const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  getProductByCategory,
} = require("../controller/productController");

const router = express.Router();

router.get("/all", getAllProducts);

router.get("/:productId", getSingleProduct);

router.get("/category/:category", getProductByCategory);

router.post('/', createNewProduct);

module.exports = router;
