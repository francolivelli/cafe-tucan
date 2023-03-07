const products_service = require("../services/productsService.js");

// C
// Create product: /api/products/create
exports.createProduct = async (req, res) => {
  const product = req.body;
  try {
    const createdProduct = await products_service.createProduct(product);
    res.status(201).send(createdProduct);
  } catch (error) {
    console.error("Error", error);
  }
};

// R
// Get all products: /api/products
exports.getProducts = async (req, res) => {
  try {
    const products = await products_service.getProducts();
    res.status(200).send(products);
  } catch (error) {
    console.error("Error", error);
  }
};
// Get specific product: /api/products/:id
exports.getProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await products_service.getProduct(id);
    res.status(200).send(product);
  } catch (error) {
    console.error("Error", error);
  }
};

// U
// Edit product: /api/products/edit/:id
exports.editProduct = async (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const editedProduct = await products_service.editProduct(changes, id);
    res.status(200).send(editedProduct)
  } catch (error) {
    console.error("Error", error);
  }
};

// D
// Delete product: /api/products/delete/:id
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
    await products_service.deleteProduct(id)
    res.status(204).send("Product deleted")
  }catch(error){
    console.error("Error", error);
  }
};
