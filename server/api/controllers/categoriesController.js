const categories_service = require("../services/categoriesService.js");

// C
// Create category: /api/categories/create
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const createdCategory = await categories_service.createCategory({ name });

    res.status(201).send(createdCategory);
  } catch (error) {
    console.error("Error", error);
  }
};

// R
// Get all categories: /api/categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await categories_service.getCategories();
    res.status(200).send(categories);
  } catch (error) {
    console.error("Error", error);
  }
};
// Get specific category: /api/categories/:id
exports.getCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await categories_service.getCategory(id);
    res.status(200).send(category);
  } catch (error) {
    console.error("Error", error);
  }
};

// U
// Edit category: /api/categories/edit/:id
exports.editCategory = async (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const editedCategory = await categories_service.editCategory(changes, id);
    res.status(200).send(editedCategory);
  } catch (error) {
    console.error("Error", error);
  }
};

// D
// Delete category: /api/categories/delete/:id
exports.deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

   await Category.destroy({ where: { id } });

    res.status(204).send("Category deleted");
  } catch (error) {
    console.error("Error", error);
  }
};
