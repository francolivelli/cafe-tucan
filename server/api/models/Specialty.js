const Sequelize = require("sequelize");
const db = require("../database/db");

class Specialty extends Sequelize.Model {}

Specialty.init(
  {
    varietal: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    flag: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    region: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    acidity: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    score: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    farmer: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    notes: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    processing: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "specialty",
  }
);

module.exports = Specialty;
