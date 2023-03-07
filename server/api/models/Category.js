const Sequelize = require("sequelize");
const db = require("../database/db");

class Category extends Sequelize.Model {}

Category.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    icon: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "category",
  }
);

module.exports = Category;
