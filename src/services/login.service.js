const { User } = require('../models');
const { createToken } = require('../auth/jwt');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { status: 400, message: 'Invalid fields' };
  }
  
  const { id } = user;
  const token = createToken({ id });
  return { status: 'OK', data: { token } };
};

module.exports = {
  userLogin,
};