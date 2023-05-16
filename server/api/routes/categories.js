const express = require("express");
const router = express.Router();
const categories_controller = require("../controllers/categoriesController.js");
const { validateAuth, validateAdmin } = require("../utils/auth.js");

// C
// Create category: /api/categories/create
router.post(
  "/create",
  validateAuth,
  validateAdmin,
  categories_controller.createCategory
);

// R
// Get all categories: /api/categories
router.get("/", categories_controller.getCategories);
// Get specific category: /api/categories/:id
router.get("/:id", categories_controller.getCategory);

// U
// Edit category: /api/categories/edit/:id
router.put(
  "/edit/:id",
  validateAuth,
  validateAdmin,
  categories_controller.editCategory
);

// D
// Delete category: /api/categories/delete/:id
router.delete(
  "/delete/:id",
  validateAuth,
  validateAdmin,
  categories_controller.deleteCategory
);

module.exports = router;
