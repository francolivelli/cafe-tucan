const express = require("express");
const router = express.Router();
const users_controller = require("../controllers/usersController.js");
const { validateAuth } = require("../utils/auth.js");

// C
// Register: /api/users/signup
router.post("/signup", users_controller.signUp);
// Login: /api/users/signin
router.post("/signin", users_controller.signIn);
// Logout: /api/users/signout
router.post("/signout", users_controller.signOut);

// R
// Get all users: /api/users
router.get("/", users_controller.getUsers);
// Get specific user: /api/users/:id
router.get("/:id", users_controller.getUser);
// Get me: /api/users/me
router.get("/me", validateAuth, users_controller.getPersistence);

// U
// Edit user: /api/users/edit/:id
router.put("/edit/:id", users_controller.editUser);

// D
// Delete user: /api/users/delete/:id
router.delete("/delete/:id", users_controller.deleteUser);

module.exports = router;
