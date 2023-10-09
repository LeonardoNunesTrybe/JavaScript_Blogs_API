const jwt = require('../auth/jwt');

const validateAccessToken = (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(authorization);
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization.split(' ')[1];
  // console.log(token);
  try {
    const { id } = jwt.decodeToken(token);
    req.userId = { id };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateAccessToken,
};