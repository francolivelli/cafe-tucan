if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  secret: process.env.AUTH_SECRET || "chorizo",
  expires: process.env.AUTH_EXPIRES || "2h",
};

