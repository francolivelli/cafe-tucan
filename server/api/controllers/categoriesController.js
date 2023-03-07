const categories_service = require("../services/categoriesService.js");

// C
// Create category: /api/categories/create
exports.createCategory = async (req, res) => {
  const category = req.body;
  try {
    const createdCategory = await categories_service.createCategory(category);
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
    const id = req.params.id;
    try {
      const category = await categories_service.getCategory(id);
      res.status(200).send(category);
    } catch (error) {
      console.error("Error", error);
    }
  };

// U
// Edit category: /api/categories/edit/:id
exports.editCategory = (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  categories_service
    .editCategory(changes, id)
    .then((editedCategory) => res.status(200).send(editedCategory))
    .catch(next);
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
    const id = req.params.id;
    try{
      await categories_service.deleteCategory(id)
      res.status(204).send("Category deleted")
    }catch(error){
      console.error("Error", error);
    }
  };
