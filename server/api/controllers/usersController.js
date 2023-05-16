const users_service = require("../services/usersService.js");
const { generateToken } = require("../utils/token");

// C
// Register: /api/users/signup
exports.signUp = async (req, res) => {
  const user = req.body;
  try {
    const registeredUser = await users_service.signUp(user);
    res.status(201).send(registeredUser);
  } catch (error) {
    console.error("Error", error);
  }
};
// Login: /api/users/signin
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const payload = await users_service.signIn({ email, password });

    const token = generateToken(payload);

    const cookieOptions = {
      expires: new Date(Date.now() + 6 * 60 * 60 * 1000), // Establece la fecha de caducidad a 6 horas a partir de la fecha actual
      httpOnly: true, // Establece la cookie como HTTP only para evitar ataques XSS
      sameSite: "strict", // Establece el atributo SameSite para prevenir ataques CSRF
    };

    payload.password = undefined;
    payload.salt = undefined;

    res.cookie("auth", token, cookieOptions);
    res.status(201).send(payload);
  } catch (error) {
    console.error("Error", error);
  }
};
// Logout: /api/users/signout
exports.signOut = async (req, res) => {
  res.clearCookie("auth");
  res.sendStatus(204);
};

// R
// Get all users: /api/users
exports.getUsers = async (req, res) => {
  try {
    const users = await users_service.getUsers();
    res.status(200).send(users);
  } catch (error) {
    console.error("Error", error);
  }
};
// Get specific user: /api/users/:id
// exports.getUser = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = await users_service.getUser(id);
//     res.status(200).send(user);
//   } catch (error) {
//     console.error("Error", error);
//   }
// };

// U
// Edit user: /api/users/edit/:id
exports.editUser = async (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const editedUser = await users_service.editUser(changes, id);
    res.status(200).send(editedUser);
  } catch (error) {
    console.error("Error", error);
  }
};

// D
// Delete user: /api/users/delete/:id
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await users_service.deleteUser(id);
    res.status(204).send("User deleted");
  } catch (error) {
    console.error("Error", error);
  }
};
