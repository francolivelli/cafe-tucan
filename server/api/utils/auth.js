const { validateToken } = require("./token");

const validateAuth = (req, res, next) => {
  const authToken = req.cookies.auth;
  if (!authToken) return res.sendStatus(401);

  const { user } = validateToken(authToken);
  if (!user) return res.sendStatus(401);

  req.user = user;

  next();
};

const validateAdmin = (req, res, next) => {
  validateAuth(req, res, () => {
    if (!req.user.isAdmin) {
      return res.sendStatus(401);
    }
    next();
  });
};

module.exports = { validateAuth, validateAdmin };
