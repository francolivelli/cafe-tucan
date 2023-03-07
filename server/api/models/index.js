const Category = require("./Category");
const Product = require("./Product");
const Specialty = require("./Specialty")
const User = require("./User");

Category.hasMany(Product, { as: "products", foreignKey: "categoryId" });
Product.belongsTo(Category, { as: "category" });

module.exports = {
  Category,
  Product,
  Specialty,
  User,
};
