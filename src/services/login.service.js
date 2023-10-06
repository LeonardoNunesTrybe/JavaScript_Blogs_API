const { User } = require('../models');
const { createToken } = require('../auth/validateJWT');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user || user.password !== password) {
    return { status: 400, message: 'Invalid fields' };
  }

  const token = createToken({ email });
  return { status: 'OK', data: { token } };
};

module.exports = {
  userLogin,
};