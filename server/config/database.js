if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_DATABASE || "cafetucan",
  username: process.env.DB_USERNAME || null,
  password: process.env.DB_PASSWORD || null,
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
