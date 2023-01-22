const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { loginWithCookie } = require("../controllers/userController");
const router = express.Router();

router.route("/products").get(loginWithCookie, getAllProducts); //get request
// router.route("/products").get(getAllProducts); //get request
router.route("/products/new").post(loginWithCookie, createProduct);

router
  .route("/products/:id")
  .put(loginWithCookie, updateProduct)
  .delete(loginWithCookie, deleteProduct)
  .get(getProductDetails);

module.exports = router;
