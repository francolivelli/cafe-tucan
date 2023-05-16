const express = require("express");
const router = express.Router();
const users_controller = require("../controllers/usersController.js");

// C
// Register: /api/users/signup
router.post("/signup", users_controller.signUp);
// Login: /api/users/signin
router.post("/signin", users_controller.signIn);
// Logout: /api/users/signout
router.post("/signout", users_controller.signOut);

module.exports = router;
