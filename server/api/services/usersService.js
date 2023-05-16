const { User } = require("../models");

// C
// Register: /api/users/signup
exports.signUp = async (user) => {
  let registeredUser = await User.create(user);
  
  return registeredUser;
};
// Login: /api/users/signin
exports.signIn = async ({ email, password }) => {

  const user = await User.findOne({ where: { email } });
  if (!user) throw Error("User not found");

  const isValid = user.validatePassword(password);
  if (!isValid) throw Error("Incorrect password");

  return user;
};

