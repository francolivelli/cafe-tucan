const { User } = require("../models");

// C
// Register: /api/users/signup
exports.signUp = async (user) => {
  let { name, surname, email, password } = user;
  let registeredUser = await User.create(user);
  return registeredUser;
};
// Login: /api/users/signin
exports.signIn = async (loginInfo) => {
  const { email, password } = loginInfo;
  const user = await User.findOne({ where: { email } });
  if (!user) throw Error("User not found");
  const isValid = user.validatePassword(password);
  if (!isValid) throw Error("Incorrect password");
  return {
    id: user.id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    isAdmin: user.isAdmin,
  };
};

// R
// Get all users: /api/users
exports.getUsers = async () => {
  const users = await User.findAll();
  return users;
};
// Get specific user: /api/users/:id
// ...

// U

// D
// Delete user: /api/users/delete/:id
exports.deleteUser = async (id) => {
  const deleteUser = await User.destroy({ where: { id } });
  return deleteUser;
};
