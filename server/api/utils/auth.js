const { validateToken } = require("./token");

const validateAuth = (req, res, next) => {
  let authToken = req.cookies.auth;
  if (!authToken) return res.sendStatus(401);

  const { user } = validateToken(authToken);
  if (!user) return res.sendStatus(401);

  req.user = user;

  next();
};

module.exports = { validateAuth };
