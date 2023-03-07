const auth = require("../../config/auth")
const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, auth.secret, {
    expiresIn: auth.expires,
  });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, auth.secret);
};

module.exports = { generateToken, validateToken };
