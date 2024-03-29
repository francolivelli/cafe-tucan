const express = require("express");
const router = express.Router();

const categories = require("./categories");
const products = require("./products");
const users = require("./users");

router.use("/categories", categories);
router.use("/products", products);
router.use("/users", users);

router.use("/", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
