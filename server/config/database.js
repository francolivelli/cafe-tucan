if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  username: process.env.DB_USERNAME || null,
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || "cafetucan",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "postgres",
  logging: process.env.DB_LOGGING || false,
  define: {
    timestamps: false,
    underscored: true
  },
};
