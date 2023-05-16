const express = require("express");
const router = express.Router();
const products_controller = require("../controllers/productsController.js");
const { validateAuth, validateAdmin } = require("../utils/auth.js");

// C
// Create product: /api/products/create
router.post("/create", validateAuth, validateAdmin, products_controller.createProduct);

// R
// Get all products: /api/products
router.get("/", products_controller.getProducts)
// Get specific product: /api/products/:id
router.get("/:id", products_controller.getProduct)

// U
// Edit product: /api/products/edit/:id
router.put("/edit/:id", validateAuth, validateAdmin, products_controller.editProduct)

// D
// Delete product: /api/products/delete/:id
router.delete("/delete/:id", validateAuth, validateAdmin, products_controller.deleteProduct)

module.exports = router;