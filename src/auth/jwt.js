const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign(data, secret, jwtConfig);
  return token;
};

const extractToken = (bearerToken) => {
  const token = bearerToken.split(' ')[1];
  const extract = jwt.verify(token, secret);
  return extract;
};

const decodeToken = (token) => {
  const decripted = jwt.verify(token, secret, jwtConfig);
  return decripted;    
};
  
module.exports = {
  createToken,
  extractToken,
  decodeToken,
  /* /secret,
  jwtConfig,
  jwt,/ */
};