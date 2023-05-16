if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  define: {
    timestamps: false,
    underscored: true,
  },
};
