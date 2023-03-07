const express = require("express");
const router = express.Router();
const specialties_controller = require("../controllers/specialtiesController.js");

// CREATE
// Create specialty: /api/specialties/create
router.post("/create", specialties_controller.createSpecialty);

// R
// Get all specialties: /api/specialties
router.get("/", specialties_controller.getSpecialties)
// Get specific specialty: /api/specialties/:id
router.get("/:id", specialties_controller.getSpecialty)

// U
// Edit specialty: /api/specialties/edit/:id
router.put("/edit/:id", specialties_controller.editSpecialty)

// D
// Delete specialty: /api/specialties/delete/:id
router.delete("/delete/:id", specialties_controller.deleteSpecialty)

module.exports = router;