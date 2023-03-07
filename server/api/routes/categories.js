const express = require("express");
const router = express.Router();
const categories_controller = require("../controllers/categoriesController.js");

// C
// Create category: /api/categories/create
router.post("/create", categories_controller.createCategory)

// R
// Get all categories: /api/categories
router.get("/", categories_controller.getCategories)
// Get specific category: /api/categories/:id

// U
// Edit category: /api/categories/edit/:id
router.put("/edit/:id", categories_controller.editCategory)

// D
// Delete category: /api/categories/delete/:id
router.delete("/delete/:id", categories_controller.deleteCategory)

module.exports = router;