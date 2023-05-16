const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");

Category.hasMany(Product, { as: "products", foreignKey: "categoryId" });
Product.belongsTo(Category, { as: "category" });

module.exports = {
  Category,
  Product,
  User,
};
