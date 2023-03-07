const specialties_service = require("../services/specialtiesService.js");

// C
// Create specialty: /api/specialties/create
exports.createSpecialty = async (req, res) => {
  const specialty = req.body;
  try {
    const createdSpecialty = await specialties_service.createSpecialty(
      specialty
    );
    res.status(201).send(createdSpecialty);
  } catch (error) {
    console.error("Error", error);
  }
};

// R
// Get all specialties: /api/specialties
exports.getSpecialties = async (req, res) => {
  try {
    const specialties = await specialties_service.getSpecialties();
    res.status(200).send(specialties);
  } catch (error) {
    console.error("Error", error);
  }
};
// Get specific specialty: /api/specialties/:id
exports.getSpecialty = async (req, res) => {
  const id = req.params.id;
  try {
    const specialty = await specialties_service.getSpecialty(id);
    res.status(200).send(specialty);
  } catch (error) {
    console.error("Error", error);
  }
};

// U
// Edit specialty: /api/specialties/edit/:id
exports.editSpecialty = async (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const editedSpecialty = await specialties_service.editSpecialty(changes, id);
    res.status(200).send(editedSpecialty)
  } catch (error) {
    console.error("Error", error);
  }
};

// D
// Delete specialty: /api/specialties/delete/:id
exports.deleteSpecialty = async (req, res) => {
  const id = req.params.id;
  try{
    await specialties_service.deleteSpecialty(id)
    res.status(204).send("Specialty deleted")
  }catch(error){
    console.error("Error", error);
  }
};
