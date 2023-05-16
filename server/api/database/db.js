const { Sequelize } = require("sequelize");
const pg = require('pg');
const config = require("../../config/database");

pg.defaults.parseInt8 = true;

const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

module.exports = db;
