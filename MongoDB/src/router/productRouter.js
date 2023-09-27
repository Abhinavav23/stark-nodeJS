const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  getProductByCategory,
  getProductUsingFilter,
  updateProduct,
  deleteProduct
} = require("../controller/productController");

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/id/:productId", getSingleProduct);
router.get("/category/:category", getProductByCategory);
router.get('/filter', getProductUsingFilter);

router.post('/', createNewProduct);

router.patch('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

module.exports = router;
