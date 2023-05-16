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
      expires: new Date(Date.now() + 6 * 60 * 60 * 1000), 
      sameSite: "strict", 
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

