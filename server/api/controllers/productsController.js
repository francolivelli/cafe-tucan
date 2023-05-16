const products_service = require("../services/productsService.js");

// C
// Create product: /api/products/create
exports.createProduct = async (req, res) => {
  try {
    const { name, image, size, shortDescription, price, description, categoryId } =
      req.body;

    const createdProduct = await products_service.createProduct({
      name,
      image,
      size, 
      shortDescription,
      price,
      description,
      categoryId,
    });

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

    console.log(products)

    res.status(200).send(products);
  } catch (error) {
    console.error("Error", error);
  }
};
// Get specific product: /api/products/:id
exports.getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await products_service.getProduct(id);

    res.status(200).send(product);
  } catch (error) {
    console.error("Error", error);
  }
};

// U
// Edit product: /api/products/edit/:id
exports.editProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, image, size, shortDescription, price, description, categoryId } =
      req.body;

    const editedProduct = await products_service.editProduct({
      id,
      name,
      image,
      size, 
      shortDescription,
      price,
      description,
      categoryId,
    });

    res.status(200).send(editedProduct);
  } catch (error) {
    console.error("Error", error);
  }
};

// D
// Delete product: /api/products/delete/:id
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    await products_service.deleteProduct(id);

    res.status(204).send("Product deleted");
  } catch (error) {
    console.error("Error", error);
  }
};
