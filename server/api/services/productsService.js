const { Product, Category } = require("../models");

// C
// Create product: /api/products/create
exports.createProduct = async ({
  name,
  image,
  size,
  shortDescription,
  price,
  description,
  categoryId,
}) => {
  const category = await Category.findOne({
    where: { id: categoryId },
  });

  const newProduct = {
    name: name,
    description: description,
    size: size,
    shortDescription: shortDescription,
    price: price,
    image: image,
    categoryId: category.id,
  };

  const createdProduct = await Product.create(newProduct);
  return createdProduct;
};

// R
// Get all products: /api/products
exports.getProducts = async () => {
  let products = await Product.findAll();

  return products;
};
// Get specific product: /api/products/:id
exports.getProduct = async (id) => {
  let product = await Product.findOne({ where: { id } });

  return product;
};

// U
// Edit product: /api/products/edit/:id
exports.editProduct = async ({
  id,
  name,
  image,
  size,
  shortDescription,
  price,
  description,
  categoryId,
}) => {
  const category = await Category.findOne({
    where: { id: categoryId },
  });

  const props = {
    name: name,
    image: image,
    size: size,
    shortDescription: shortDescription,
    price: price,
    description: description,
    categoryId: category.id,
  };

  const editedProduct = await Product.update(props, {
    where: { id },
  });

  return editedProduct;
};

// D
// Delete product: /api/products/delete/:id
exports.deleteProduct = async (id) => {
  const deleteProduct = await Product.destroy({ where: { id } });

  return deleteProduct;
};
