const { Category, Product } = require("../models");

// C
// Create category: /api/categories/create
exports.createCategory = async (category) => {
  const { name, icon } = category;
  let createdCategory = await Category.create(category);
  return createdCategory;
};

// R
// Get all categories: /api/categories
exports.getCategories = async () => {
  let categories = await Category.findAll({
    include: { model: Product, as: "products" },
  });
  return categories;
};
// Get specific category: /api/categories/:id
exports.getCategory = async (id) => {
  let category = await Category.findOne({
    where: { id },
    include: { model: Product, as: "products" },
  });
  return category;
};

// U
// Edit category: /api/categories/edit/:id
exports.editCategory = async (changes, id) => {
  const { name, icon } = changes;
  let editedCategory = await Category.update(changes, {
    where: { id },
  });
  return editedCategory;
};

// D
// Delete category: /api/categories/delete/:id
exports.deleteCategory = async (id) => {
  let deleteCategory = await Category.destroy({ where: { id } });
  return deleteCategory;
};
