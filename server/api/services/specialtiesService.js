const { Specialty } = require("../models");

// C
// Create specialty: /api/specialties/create
exports.createSpecialty = async (specialty) => {
  const {
    varietal,
    country,
    region,
    acidity,
    score,
    farmer,
    notes,
    processing,
  } = specialty;
  const createdSpecialty = await Specialty.create(specialty);
  return createdSpecialty;
};

// R
// Get all specialties: /api/specialties
exports.getSpecialties = async () => {
  const specialties = await Specialty.findAll();
  return specialties;
};
// Get specific specialty: /api/specialties/:id
exports.getSpecialty = async (id) => {
  const specialty = await Specialty.findOne({ where: { id } });
  return specialty
};

// U
// Edit specialty: /api/specialties/edit/:id
exports.editSpecialty = async (changes, id) => {
  const {
    varietal,
    country,
    region,
    acidity,
    score,
    farmer,
    notes,
    processing,
  } = changes;
  const editedSpecialty = await Specialty.update(changes, {
    where: { id },
  });
  return editedSpecialty;
};

// D
// Delete specialty: /api/specialties/delete/:id
exports.deleteSpecialty = async (id) => {
  const deleteSpecialty = await Specialty.destroy({ where: { id } });
  return deleteSpecialty;
};
