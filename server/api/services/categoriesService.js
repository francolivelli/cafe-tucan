const { Category } = require("../models");

// C
// Create category: /api/categories/create
exports.createCategory = async ({ name }) => {
  let createdCategory = await Category.create({
    name: name,
  });

  return createdCategory;
};

// R
// Get all categories: /api/categories
exports.getCategories = async () => {
  let categories = await Category.findAll();

  return categories;
};
// Get specific category: /api/categories/:id
exports.getCategory = async (id) => {
  let category = await Category.findOne({
    where: { id },
  });

  return category;
};

// U
// Edit category: /api/categories/edit/:id
exports.editCategory = async (changes, id) => {
  let editedCategory = await Category.update(changes, {
    where: { id },
  });
  return editedCategory;
};

// D
// Delete category: /api/categories/delete/:id
exports.deleteCategory = async (id) => {
  const deleteCategory = await Category.destroy({ where: { id } });
  
  return deleteCategory;
};
